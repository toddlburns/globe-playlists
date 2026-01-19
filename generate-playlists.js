const fs = require('fs');

// Genre to location mapping
const genreLocations = {
  // African
  'afrobeat': { lat: 6.5244, lng: 3.3792, location: 'Lagos, Nigeria' },
  'afrobeats': { lat: 6.5244, lng: 3.3792, location: 'Lagos, Nigeria' },
  'amapiano': { lat: -26.2041, lng: 28.0473, location: 'Johannesburg, South Africa' },
  'asakaa': { lat: 6.6666, lng: -1.6163, location: 'Kumasi, Ghana' },
  'azonto': { lat: 5.6037, lng: -0.1870, location: 'Accra, Ghana' },
  'hiplife': { lat: 5.6037, lng: -0.1870, location: 'Accra, Ghana' },
  'benga': { lat: -1.2921, lng: 36.8219, location: 'Nairobi, Kenya' },
  'kamba': { lat: -1.2921, lng: 36.8219, location: 'Nairobi, Kenya' },
  'biama': { lat: 6.5244, lng: 3.3792, location: 'Lagos, Nigeria' },
  'bikutsi': { lat: 3.8480, lng: 11.5021, location: 'Yaoundé, Cameroon' },
  'chimurenga': { lat: -17.8292, lng: 31.0522, location: 'Harare, Zimbabwe' },
  'coupé-décalé': { lat: 5.3600, lng: -4.0083, location: 'Abidjan, Ivory Coast' },
  'coupe-decale': { lat: 5.3600, lng: -4.0083, location: 'Abidjan, Ivory Coast' },
  'ethiopia': { lat: 9.0320, lng: 38.7469, location: 'Addis Ababa, Ethiopia' },
  'tigrinya': { lat: 15.3229, lng: 38.9251, location: 'Asmara, Eritrea' },
  'funaná': { lat: 14.9330, lng: -23.5133, location: 'Praia, Cape Verde' },
  'funana': { lat: 14.9330, lng: -23.5133, location: 'Praia, Cape Verde' },
  'cabo verde': { lat: 14.9330, lng: -23.5133, location: 'Praia, Cape Verde' },
  'gqom': { lat: -29.8587, lng: 31.0218, location: 'Durban, South Africa' },
  'highlife': { lat: 5.6037, lng: -0.1870, location: 'Accra, Ghana' },
  'igbo': { lat: 6.4550, lng: 7.5100, location: 'Enugu, Nigeria' },
  'kizomba': { lat: -8.8390, lng: 13.2894, location: 'Luanda, Angola' },
  'kuduro': { lat: -8.8390, lng: 13.2894, location: 'Luanda, Angola' },
  'kora': { lat: 13.4549, lng: -16.5790, location: 'Banjul, Gambia' },
  'kwaito': { lat: -26.2041, lng: 28.0473, location: 'Johannesburg, South Africa' },
  'makossa': { lat: 4.0511, lng: 9.7679, location: 'Douala, Cameroon' },
  'mbalax': { lat: 14.7167, lng: -17.4677, location: 'Dakar, Senegal' },
  'mbaqanga': { lat: -26.2041, lng: 28.0473, location: 'Johannesburg, South Africa' },
  'mbira': { lat: -17.8292, lng: 31.0522, location: 'Harare, Zimbabwe' },
  'príncipe': { lat: 38.7223, lng: -9.1393, location: 'Lisbon, Portugal' },
  'principe': { lat: 38.7223, lng: -9.1393, location: 'Lisbon, Portugal' },
  'rumba': { lat: -4.4419, lng: 15.2663, location: 'Kinshasa, DRC' },
  'salegy': { lat: -18.8792, lng: 47.5079, location: 'Antananarivo, Madagascar' },
  'kawitry': { lat: -18.8792, lng: 47.5079, location: 'Antananarivo, Madagascar' },
  'sega': { lat: -20.1609, lng: 57.5012, location: 'Port Louis, Mauritius' },
  'singeli': { lat: -6.7924, lng: 39.2083, location: 'Dar es Salaam, Tanzania' },
  'soukous': { lat: -4.4419, lng: 15.2663, location: 'Kinshasa, DRC' },
  'tsapiky': { lat: -23.3516, lng: 43.6854, location: 'Toliara, Madagascar' },
  'tuareg': { lat: 16.9753, lng: 7.9999, location: 'Agadez, Niger' },
  'xitsonga': { lat: -23.9045, lng: 29.4685, location: 'Limpopo, South Africa' },
  'shangaan': { lat: -23.9045, lng: 29.4685, location: 'Limpopo, South Africa' },
  'tsonga': { lat: -23.9045, lng: 29.4685, location: 'Limpopo, South Africa' },
  'zouglou': { lat: 5.3600, lng: -4.0083, location: 'Abidjan, Ivory Coast' },
  'zouk': { lat: 14.6415, lng: -61.0242, location: 'Fort-de-France, Martinique' },
  'hees macaan': { lat: 2.0469, lng: 45.3182, location: 'Mogadishu, Somalia' },
  'dr. thomas chauke': { lat: -23.9045, lng: 29.4685, location: 'Limpopo, South Africa' },
  'wawa salegy': { lat: -18.8792, lng: 47.5079, location: 'Antananarivo, Madagascar' },
  'alex kasau katombi': { lat: -1.2921, lng: 36.8219, location: 'Nairobi, Kenya' },
  'kwaku dmc': { lat: 5.6037, lng: -0.1870, location: 'Accra, Ghana' },
  'mahraganat': { lat: 30.0444, lng: 31.2357, location: 'Cairo, Egypt' },
  'africa': { lat: 6.5244, lng: 3.3792, location: 'Lagos, Nigeria' },
  'south africa': { lat: -26.2041, lng: 28.0473, location: 'Johannesburg, South Africa' },

  // Caribbean / Latin
  'jamaica': { lat: 18.1096, lng: -77.2975, location: 'Kingston, Jamaica' },
  'dancehall': { lat: 18.1096, lng: -77.2975, location: 'Kingston, Jamaica' },
  'ragga': { lat: 18.1096, lng: -77.2975, location: 'Kingston, Jamaica' },
  'dub': { lat: 18.1096, lng: -77.2975, location: 'Kingston, Jamaica' },
  'ska': { lat: 18.1096, lng: -77.2975, location: 'Kingston, Jamaica' },
  'calypso': { lat: 10.6918, lng: -61.2225, location: 'Port of Spain, Trinidad' },
  'brazil': { lat: -22.9068, lng: -43.1729, location: 'Rio de Janeiro, Brazil' },
  'latin': { lat: 19.4326, lng: -99.1332, location: 'Mexico City, Mexico' },
  'sad sierréño': { lat: 25.6866, lng: -100.3161, location: 'Monterrey, Mexico' },

  // Electronic - Germany
  'kosmische': { lat: 51.2277, lng: 6.7735, location: 'Düsseldorf, Germany' },
  'krautrock': { lat: 51.2277, lng: 6.7735, location: 'Düsseldorf, Germany' },
  'motorik': { lat: 51.2277, lng: 6.7735, location: 'Düsseldorf, Germany' },
  'tangerine dream': { lat: 52.5200, lng: 13.4050, location: 'Berlin, Germany' },
  'conrad schnitzler': { lat: 52.5200, lng: 13.4050, location: 'Berlin, Germany' },
  'popol vuh': { lat: 48.1351, lng: 11.5820, location: 'Munich, Germany' },
  'roedelius': { lat: 52.5200, lng: 13.4050, location: 'Berlin, Germany' },
  'burnt friedman': { lat: 50.9375, lng: 6.9603, location: 'Cologne, Germany' },
  'flanger': { lat: 50.9375, lng: 6.9603, location: 'Cologne, Germany' },
  'atom tm': { lat: 50.1109, lng: 8.6821, location: 'Frankfurt, Germany' },
  'schaffel': { lat: 50.1109, lng: 8.6821, location: 'Frankfurt, Germany' },
  'pete namlook': { lat: 50.1109, lng: 8.6821, location: 'Frankfurt, Germany' },
  'trance': { lat: 50.1109, lng: 8.6821, location: 'Frankfurt, Germany' },

  // Electronic - UK
  'idm': { lat: 53.3811, lng: -1.4701, location: 'Sheffield, UK' },
  'autechre': { lat: 53.4808, lng: -2.2426, location: 'Manchester, UK' },
  'plaid': { lat: 51.5074, lng: -0.1278, location: 'London, UK' },
  'drum & bass': { lat: 51.5074, lng: -0.1278, location: 'London, UK' },
  'drum and bass': { lat: 51.5074, lng: -0.1278, location: 'London, UK' },

  // Electronic - Other
  'techno': { lat: 42.3314, lng: -83.0458, location: 'Detroit, USA' },
  'juan atkins': { lat: 42.3314, lng: -83.0458, location: 'Detroit, USA' },
  'house': { lat: 41.8781, lng: -87.6298, location: 'Chicago, USA' },
  'minimal': { lat: 52.5200, lng: 13.4050, location: 'Berlin, Germany' },
  'dub techno': { lat: 52.5200, lng: 13.4050, location: 'Berlin, Germany' },
  'asc': { lat: 51.5074, lng: -0.1278, location: 'London, UK' },
  'stl': { lat: 59.3293, lng: 18.0686, location: 'Stockholm, Sweden' },

  // Electronic - Ambient / Experimental
  'ambient': { lat: 51.5074, lng: -0.1278, location: 'London, UK' },
  'fennesz': { lat: 48.2082, lng: 16.3738, location: 'Vienna, Austria' },
  'aleksi perälä': { lat: 60.1699, lng: 24.9384, location: 'Helsinki, Finland' },
  'alessandro cortini': { lat: 34.0522, lng: -118.2437, location: 'Los Angeles, USA' },
  'dylan henner': { lat: 45.5017, lng: -73.5673, location: 'Montreal, Canada' },
  'kaitlyn aurelia smith': { lat: 47.6062, lng: -122.3321, location: 'Seattle, USA' },
  'grouper': { lat: 45.5152, lng: -122.6784, location: 'Portland, USA' },

  // Japan
  'city pop': { lat: 35.6762, lng: 139.6503, location: 'Tokyo, Japan' },
  'fumio miyashita': { lat: 35.6762, lng: 139.6503, location: 'Tokyo, Japan' },
  'japan': { lat: 35.6762, lng: 139.6503, location: 'Tokyo, Japan' },

  // European
  'balearic': { lat: 38.9067, lng: 1.4206, location: 'Ibiza, Spain' },
  'flamenco': { lat: 37.3891, lng: -5.9845, location: 'Seville, Spain' },
  'france': { lat: 48.8566, lng: 2.3522, location: 'Paris, France' },
  'italo': { lat: 45.4642, lng: 9.1900, location: 'Milan, Italy' },
  'ennio morricone': { lat: 41.9028, lng: 12.4964, location: 'Rome, Italy' },
  'piero umiliani': { lat: 41.9028, lng: 12.4964, location: 'Rome, Italy' },
  'joel vandroogenbroeck': { lat: 50.8503, lng: 4.3517, location: 'Brussels, Belgium' },
  'turkey': { lat: 41.0082, lng: 28.9784, location: 'Istanbul, Turkey' },
  'sigur ros': { lat: 64.1466, lng: -21.9426, location: 'Reykjavik, Iceland' },
  'enya': { lat: 54.2766, lng: -8.4761, location: 'Donegal, Ireland' },

  // UK Rock/Indie
  'rock': { lat: 51.5074, lng: -0.1278, location: 'London, UK' },
  'post-rock': { lat: 53.4808, lng: -2.2426, location: 'Manchester, UK' },
  'post-hardcore': { lat: 38.9072, lng: -77.0369, location: 'Washington DC, USA' },
  'chamber pop': { lat: 51.5074, lng: -0.1278, location: 'London, UK' },
  'stereolab': { lat: 51.5074, lng: -0.1278, location: 'London, UK' },
  'durutti column': { lat: 53.4808, lng: -2.2426, location: 'Manchester, UK' },
  'arab strap': { lat: 55.9533, lng: -3.1883, location: 'Edinburgh, UK' },
  'piano magic': { lat: 51.5074, lng: -0.1278, location: 'London, UK' },

  // American
  'blues': { lat: 35.1495, lng: -90.0490, location: 'Memphis, USA' },
  'jazz': { lat: 29.9511, lng: -90.0715, location: 'New Orleans, USA' },
  'hip-hop': { lat: 40.7128, lng: -74.0060, location: 'New York, USA' },
  'country': { lat: 36.1627, lng: -86.7816, location: 'Nashville, USA' },
  'funk': { lat: 39.7684, lng: -86.1581, location: 'Indianapolis, USA' },
  'boogie': { lat: 34.0522, lng: -118.2437, location: 'Los Angeles, USA' },
  'r&b': { lat: 42.3314, lng: -83.0458, location: 'Detroit, USA' },
  'slowcore': { lat: 42.3601, lng: -71.0589, location: 'Boston, USA' },
  'sadcore': { lat: 42.3601, lng: -71.0589, location: 'Boston, USA' },
  'low': { lat: 46.7867, lng: -92.1005, location: 'Duluth, USA' },
  'ida': { lat: 40.7128, lng: -74.0060, location: 'New York, USA' },
  'acetone': { lat: 34.0522, lng: -118.2437, location: 'Los Angeles, USA' },
  'pedro the lion': { lat: 47.6062, lng: -122.3321, location: 'Seattle, USA' },
  'beach boys': { lat: 33.7701, lng: -118.1937, location: 'Hawthorne, USA' },
  'frank zappa': { lat: 34.0522, lng: -118.2437, location: 'Los Angeles, USA' },
  'elvis': { lat: 35.1495, lng: -90.0490, location: 'Memphis, USA' },
  'envy': { lat: 35.6762, lng: 139.6503, location: 'Tokyo, Japan' },

  // Other
  'new age': { lat: 34.0522, lng: -118.2437, location: 'Los Angeles, USA' },
  'minimalism': { lat: 40.7128, lng: -74.0060, location: 'New York, USA' },
  'exotica': { lat: 21.3069, lng: -157.8583, location: 'Honolulu, USA' },
  'arthur lyman': { lat: 21.3069, lng: -157.8583, location: 'Honolulu, USA' },
  'lounge': { lat: 36.1699, lng: -115.1398, location: 'Las Vegas, USA' },
  'easy listening': { lat: 34.0522, lng: -118.2437, location: 'Los Angeles, USA' },
  'solo guitar': { lat: 37.3891, lng: -5.9845, location: 'Seville, Spain' },
  'vocal groups': { lat: 40.7128, lng: -74.0060, location: 'New York, USA' },
  'pacific island': { lat: -17.7134, lng: 178.0650, location: 'Suva, Fiji' },

  // Fallbacks
  'pop': { lat: 34.0522, lng: -118.2437, location: 'Los Angeles, USA' },
  'electronic': { lat: 52.5200, lng: 13.4050, location: 'Berlin, Germany' },
  'electronica': { lat: 51.5074, lng: -0.1278, location: 'London, UK' },
  'experimental': { lat: 40.7128, lng: -74.0060, location: 'New York, USA' },
  'synth': { lat: 51.2277, lng: 6.7735, location: 'Düsseldorf, Germany' },
  'vintage': { lat: 40.7128, lng: -74.0060, location: 'New York, USA' },
  'worldwide': { lat: 51.5074, lng: -0.1278, location: 'London, UK' },
  'chill': { lat: 38.9067, lng: 1.4206, location: 'Ibiza, Spain' },
  'haunted ballroom': { lat: 51.5074, lng: -0.1278, location: 'London, UK' },
};

// Default location for unknown genres
const defaultLocation = { lat: 51.5074, lng: -0.1278, location: 'London, UK' };

// Read and parse CSV
const csv = fs.readFileSync('/Users/todd/globe-playlists/playlists.csv', 'utf-8');
const lines = csv.split('\n').slice(1); // Skip header

const playlists = [];

for (const line of lines) {
  if (!line.trim()) continue;

  // Split by ","
  const parts = line.split('","');
  if (parts.length < 4) continue;

  // Part 1 is URL, Part 3 is name
  const url = parts[1] || '';
  const name = parts[3] || '';

  if (!url.includes('spotify.com/playlist/') || !name) continue;

  // Extract playlist ID from URL
  const idMatch = url.match(/playlist\/([a-zA-Z0-9]+)/);
  if (!idMatch) continue;

  const spotifyId = idMatch[1];

  // Find location based on genre
  const nameLower = name.toLowerCase();
  let locationData = null;

  // Try to match genre keywords
  for (const [genre, loc] of Object.entries(genreLocations)) {
    if (nameLower.includes(genre.toLowerCase())) {
      locationData = loc;
      break;
    }
  }

  if (!locationData) {
    locationData = defaultLocation;
  }

  // Add some randomness to prevent exact overlaps (±2 degrees)
  const jitter = () => (Math.random() - 0.5) * 4;

  playlists.push({
    name: name,
    location: locationData.location,
    lat: locationData.lat + jitter(),
    lng: locationData.lng + jitter(),
    spotifyId: spotifyId
  });
}

// Generate JavaScript
const output = `const playlists = ${JSON.stringify(playlists, null, 2)};`;

fs.writeFileSync('/Users/todd/globe-playlists/playlists-data.js', output);

console.log(`Generated ${playlists.length} playlists`);
console.log('Output written to playlists-data.js');
