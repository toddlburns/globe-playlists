const https = require('https');
const fs = require('fs');

// Read playlists
const content = fs.readFileSync('./playlists-data.js', 'utf-8');
const match = content.match(/const playlists = (\[[\s\S]*\]);/);
const playlists = JSON.parse(match[1]);

console.log(`Checking ${playlists.length} playlists for mismatches...\n`);

function fetchTitle(spotifyId) {
  return new Promise((resolve) => {
    const url = `https://open.spotify.com/playlist/${spotifyId}`;
    const req = https.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        // Extract title from og:title meta tag or title tag
        const ogMatch = data.match(/<meta property="og:title" content="([^"]+)"/);
        const titleMatch = data.match(/<title>([^<]+)<\/title>/);
        let title = ogMatch ? ogMatch[1] : (titleMatch ? titleMatch[1] : null);
        if (title) {
          title = title.replace(' | Spotify', '').replace(' - playlist by.*', '').trim();
        }
        resolve(title);
      });
    });
    req.on('error', () => resolve(null));
    req.setTimeout(10000, () => {
      req.destroy();
      resolve(null);
    });
  });
}

function normalize(str) {
  return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

async function main() {
  const mismatches = [];

  for (let i = 0; i < playlists.length; i++) {
    const p = playlists[i];
    process.stdout.write(`\rChecking ${i + 1}/${playlists.length}: ${p.name.substring(0, 30).padEnd(30)}`);

    const actualTitle = await fetchTitle(p.spotifyId);

    if (actualTitle) {
      // Check if they're similar (normalize and compare)
      const expectedNorm = normalize(p.name);
      const actualNorm = normalize(actualTitle);

      if (!actualNorm.includes(expectedNorm.substring(0, 10)) &&
          !expectedNorm.includes(actualNorm.substring(0, 10))) {
        mismatches.push({
          index: i,
          expected: p.name,
          actual: actualTitle,
          spotifyId: p.spotifyId
        });
      }
    }

    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 100));
  }

  console.log('\n\n=== MISMATCHES FOUND ===\n');

  if (mismatches.length === 0) {
    console.log('No mismatches found!');
  } else {
    mismatches.forEach(m => {
      console.log(`Row ${m.index + 2} in spreadsheet:`);
      console.log(`  Expected: ${m.expected}`);
      console.log(`  Actual:   ${m.actual}`);
      console.log(`  URL: https://open.spotify.com/playlist/${m.spotifyId}`);
      console.log('');
    });
    console.log(`Total mismatches: ${mismatches.length}`);

    // Write to file
    const report = mismatches.map(m =>
      `Row ${m.index + 2}: Expected "${m.expected}" but found "${m.actual}"\n  URL: https://open.spotify.com/playlist/${m.spotifyId}`
    ).join('\n\n');
    fs.writeFileSync('./mismatch-report.txt', report);
    console.log('\nReport saved to mismatch-report.txt');
  }
}

main().catch(console.error);
