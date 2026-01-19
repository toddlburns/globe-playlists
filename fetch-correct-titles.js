const https = require('https');
const fs = require('fs');

// Read playlists
const content = fs.readFileSync('./playlists-data.js', 'utf-8');
const match = content.match(/const playlists = (\[[\s\S]*\]);/);
const playlists = JSON.parse(match[1]);

console.log(`Fetching actual titles for ${playlists.length} playlists...\n`);

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
        const ogMatch = data.match(/<meta property="og:title" content="([^"]+)"/);
        const titleMatch = data.match(/<title>([^<]+)<\/title>/);
        let title = ogMatch ? ogMatch[1] : (titleMatch ? titleMatch[1] : null);
        if (title) {
          title = title.replace(' | Spotify', '').replace(/ - playlist by.*/, '').trim();
          // Decode HTML entities
          title = title.replace(/&amp;/g, '&').replace(/&#x27;/g, "'").replace(/&quot;/g, '"');
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

async function main() {
  const corrected = [];

  for (let i = 0; i < playlists.length; i++) {
    const p = playlists[i];
    process.stdout.write(`\rFetching ${i + 1}/${playlists.length}: ${p.spotifyId}`);

    const actualTitle = await fetchTitle(p.spotifyId);

    corrected.push({
      actualName: actualTitle || 'COULD NOT FETCH',
      originalName: p.name,
      spotifyId: p.spotifyId,
      url: `https://open.spotify.com/playlist/${p.spotifyId}`
    });

    // Small delay to avoid rate limiting
    await new Promise(r => setTimeout(r, 100));
  }

  console.log('\n\nGenerating corrected CSV...\n');

  // Create CSV with actual names
  let csv = 'Actual Spotify Name,Spotify URL,Spotify ID\n';
  corrected.forEach(c => {
    const name = c.actualName.replace(/"/g, '""');
    csv += `"${name}","${c.url}","${c.spotifyId}"\n`;
  });

  fs.writeFileSync('./corrected-playlists.csv', csv);
  console.log('Saved corrected-playlists.csv');
  console.log('\nThis file has the ACTUAL playlist names from Spotify matched with their URLs.');
  console.log('You can import this into your Google Sheet to fix the alignment.');
}

main().catch(console.error);
