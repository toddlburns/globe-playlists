const fs = require('fs');

// Read the playlists data
const content = fs.readFileSync('/Users/todd/globe-playlists/playlists-data.js', 'utf-8');

// Extract the array
const match = content.match(/const playlists = (\[[\s\S]*\]);/);
if (!match) {
  console.error('Could not parse playlists-data.js');
  process.exit(1);
}

const playlists = JSON.parse(match[1]);

// Create CSV
let csv = 'Name,Location,Latitude,Longitude,Spotify ID\n';
playlists.forEach(p => {
  const name = p.name.replace(/"/g, '""');
  const location = p.location.replace(/"/g, '""');
  csv += `"${name}","${location}",${p.lat.toFixed(4)},${p.lng.toFixed(4)},${p.spotifyId}\n`;
});

fs.writeFileSync('/Users/todd/globe-playlists/playlist-locations.csv', csv);
console.log(`Created playlist-locations.csv with ${playlists.length} rows`);
