const fs = require('fs');

// Read existing CSV
const csv = fs.readFileSync('playlist-locations.csv', 'utf8');
const lines = csv.trim().split('\n');
const header = lines[0];
const rows = lines.slice(1);

// Decade assignments: [decade, confidence]
// Confidence: High = explicit in name or genre has well-known era
//             Medium = reasonable inference from genre/artist
//             Low = guess based on limited info
const decades = {
  // === AFRICAN GENRES ===
  "Afrobeat, Chill": ["1970s", "High"],
  "Afrobeat, Groovers": ["1970s", "High"],
  "Afrobeat, Heavy": ["1970s", "High"],
  "Afrobeats, Groovers": ["2010s", "High"], // modern Afrobeats (with s)
  "Alex Kasau Katombi": ["1980s", "Medium"],
  "Amapiano": ["2010s", "High"],
  "Amapiano, Gospel": ["2010s", "High"],
  "Amapiano, Private School": ["2010s", "High"],
  "Amapiano, Starter Pack": ["2010s", "High"],
  "Asakaa": ["2020s", "High"],
  "Asakaa, Starter Pack": ["2020s", "High"],
  "Azonto / Hiplife": ["2010s", "High"],
  "Benga & Kamba Pop, Modern": ["2000s", "Medium"],
  "Benga & Kamba Pop, Vintage": ["1970s", "Medium"],
  "Biama": ["2010s", "Low"],
  "Bikutsi": ["1980s", "Medium"],
  "Bikutsi, Contemporary": ["2000s", "Medium"],
  "Cabo Verde, Vintage R&B": ["1970s", "Medium"],
  "Cabo Verde, Vintage Rock And Funk": ["1970s", "Medium"],
  "Chimurenga": ["1970s", "High"],
  "Coupé-décalé": ["2000s", "High"],
  "Ethiopia, Blues": ["1960s", "Medium"],
  "Ethiopia, Funk & Soul": ["1970s", "High"],
  "Ethiopia, Jazz": ["1960s", "High"],
  "Ethiopia, Jazz Vocal": ["1960s", "Medium"],
  "Funaná": ["1980s", "Medium"],
  "Gqom, Club": ["2010s", "High"],
  "Gqom, Pop": ["2010s", "High"],
  "Gqom, Sghubu": ["2010s", "High"],
  "Gqom, Sghubu Pop": ["2010s", "High"],
  "Gqom, Starter Pack": ["2010s", "High"],
  "Hees Macaan": ["1970s", "Medium"],
  "Hees Macaan, Starter Pack": ["1970s", "Medium"],
  "Highlife, Vintage Jazzy": ["1960s", "High"],
  "Highlife, Vintage Peppy": ["1960s", "High"],
  "Kizomba": ["1980s", "High"],
  "Kora": ["1970s", "Low"],
  "Kuduro, Contemporary": ["2010s", "High"],
  "Kuduro, Contemporary Riddims": ["2010s", "High"],
  "Kuduro, Vintage": ["2000s", "High"],
  "Kuduro, Vintage Riddims": ["2000s", "High"],
  "Kwaito, Old School MCs": ["1990s", "High"],
  "Kwaito, Swinging Beats": ["1990s", "High"],
  "Kwaito, Vintage Classic": ["1990s", "High"],
  "Kwaku DMC": ["2020s", "Medium"],
  "Mahraganat": ["2010s", "High"],
  "Mahraganat, Starter Pack": ["2010s", "High"],
  "Makossa": ["1970s", "High"],
  "Mbalax": ["1980s", "High"],
  "Mbalax, Contemporary Pop": ["2010s", "Medium"],
  "Mbalax, Contemporary Rap": ["2010s", "Medium"],
  "Mbalax, Mark Ernestus": ["2010s", "Medium"],
  "Mbaqanga": ["1960s", "High"],
  "Mbira": ["1970s", "Medium"],
  "Príncipe, Chill": ["2010s", "High"],
  "Rumba, Vintage": ["1960s", "High"],
  "Salegy & Kawitry": ["1990s", "Medium"],
  "Salegy & Kawitry, Starter Pack": ["1990s", "Medium"],
  "Sega": ["1970s", "Medium"],
  "Sega, Psych": ["1970s", "Medium"],
  "Singeli": ["2010s", "High"],
  "Soukous, Chill": ["1980s", "High"],
  "Soukous, Dance": ["1980s", "High"],
  "South Africa, 80s Electronic": ["1980s", "High"],
  "Tigrinya": ["2000s", "Medium"],
  "Tigrinya, Vintage": ["1970s", "Medium"],
  "Tsapiky": ["2000s", "Medium"],
  "Tuareg": ["2000s", "Medium"],
  "Wawa Salegy": ["2000s", "Medium"],
  "Xitsonga / Shangaan Electro / Tsonga ": ["2010s", "High"],
  "Xitsonga / Shangaan Electro / Tsonga  Starter Pack": ["2010s", "High"],
  "Xitsonga / Tsonga, Downtempo": ["2000s", "Medium"],
  "Zouglou": ["1990s", "High"],
  "Zouglou, Rapide": ["1990s", "High"],
  "Zouk, Fast": ["1980s", "High"],
  "Zouk, Slow": ["1980s", "High"],
  "Zouk, Smooth": ["1980s", "High"],
  "Zouk, Starter Pack": ["1980s", "High"],
  "Dr. Thomas Chauke": ["1990s", "Medium"],
  "Igbo, Trips": ["1970s", "Low"],
  "Africa, Smooth Bangers": ["2010s", "Low"],
  "Africa, Acoustic Bangers": ["2010s", "Low"],
  "Africa, Hype Bangers": ["2010s", "Low"],
  "Africa, Vintage": ["1970s", "Medium"],

  // === CARIBBEAN / LATIN ===
  "Calypso, Classic": ["1950s", "High"],
  "Dancehall / Ragga, Classic": ["1990s", "High"],
  "Dub": ["1970s", "High"],
  "Jamaica, Laidback Reggae": ["1970s", "High"],
  "Jamaica, Lovers Rock": ["1980s", "Medium"],
  "Jamaica, Vintage Pop": ["1960s", "Medium"],
  "Ska, 1st Wave": ["1960s", "High"],
  "Ska, 2nd Wave": ["1980s", "High"],
  "Ska, Punk": ["1990s", "High"],
  "Ska, Revival": ["1990s", "Medium"],
  "Sad Sierr\u00e9\u00f1o": ["2010s", "Medium"],
  "Latin, Classic": ["1960s", "Medium"],
  "Latin, Melancholic Electronic": ["2010s", "Low"],

  // === BRAZIL ===
  "Brazil, Bumping": ["2000s", "Low"],
  "Brazil, Chill": ["1970s", "Low"],
  "Brazil, Funk & Soul": ["1970s", "Medium"],
  "Brazil, Psychedelic": ["1970s", "High"],
  "Brazil, Vibes": ["1970s", "Low"],

  // === JAPANESE ===
  "City Pop, Funky": ["1980s", "High"],
  "City Pop, Smooth": ["1980s", "High"],
  "Envy": ["2000s", "Medium"],
  "Fumio Miyashita": ["1980s", "Medium"],
  "Fumio Miyashita, Ambient": ["1980s", "Medium"],
  "Fumio Miyashita, Oddballs": ["1980s", "Medium"],
  "Ambient, Japan": ["1980s", "Medium"],

  // === GERMAN ELECTRONIC / KRAUTROCK ===
  "Atom TM": ["2000s", "Medium"],
  "Atom TM, Ambient": ["2000s", "Medium"],
  "Atom TM, Chill": ["2000s", "Medium"],
  "Atom TM, Digital Hardcore": ["1990s", "Medium"],
  "Atom TM, Electronic Experimental": ["2000s", "Medium"],
  "Atom TM, Electronic Heavy": ["2000s", "Medium"],
  "Atom TM, Electronic Soft": ["2000s", "Medium"],
  "Atom TM,  Electronic Soft": ["2000s", "Medium"],
  "Atom TM, Glitch": ["2000s", "Medium"],
  "Atom TM, Latin Experimental": ["2000s", "Medium"],
  "Atom TM, Latin Pop": ["2000s", "Medium"],
  "Atom TM, Pop Dark": ["2000s", "Medium"],
  "Atom TM, Pop Light": ["2000s", "Medium"],
  "Atom TM, Starter Pack": ["2000s", "Medium"],
  "Burnt Friedman": ["2000s", "Medium"],
  "Conrad Schnitzler, Starter Pack": ["1970s", "High"],
  "Flanger": ["2000s", "Medium"],
  "Joel Vandroogenbroeck": ["1970s", "Medium"],
  "Kosmische, Experimental": ["1970s", "High"],
  "Kosmische, Hard": ["1970s", "High"],
  "Kosmische, Soft": ["1970s", "High"],
  "Krautrock, Jams": ["1970s", "High"],
  "Motorik, Driving": ["1970s", "High"],
  "Motorik, Experimental": ["1970s", "High"],
  "Motorik, Heavy": ["1970s", "High"],
  "Motorik, Kosmische": ["1970s", "High"],
  "Motorik, Pop": ["1970s", "High"],
  "Pete Namlook, Beatless": ["1990s", "High"],
  "Pete Namlook, Beats": ["1990s", "High"],
  "Pete Namlook, Starter Pack": ["1990s", "High"],
  "Popol Vuh": ["1970s", "High"],
  "Roedelius": ["1970s", "High"],
  "Schaffel Brutal": ["2000s", "Medium"],
  "Schaffel Dance": ["2000s", "Medium"],
  "Schaffel Pop": ["2000s", "Medium"],
  "STL": ["2010s", "Medium"],
  "Tangerine Dream": ["1970s", "High"],
  "Tangerine Dream, Starter Pack": ["1970s", "High"],
  "Synth, Cinematic Soundtracks": ["1970s", "Medium"],
  "Synth, Ecstatic Minimalist Experiments": ["1970s", "Medium"],
  "Synth, Foggy German Forest": ["1970s", "Medium"],
  "Synth, Modular Experiments": ["1970s", "Medium"],
  "Synth, Modular Heartstrings": ["1970s", "Medium"],
  "Synth, Mysterious And Meandering": ["1970s", "Medium"],

  // === UK ELECTRONIC / IDM / POST-ROCK ===
  "ASC, Ambient": ["2000s", "Medium"],
  "ASC, Drum & Bass Dark": ["2000s", "Medium"],
  "ASC, Drum & Bass Light": ["2000s", "Medium"],
  "ASC, Electronica Dark": ["2000s", "Medium"],
  "ASC, Electronica Light": ["2000s", "Medium"],
  "ASC, Starter Pack": ["2000s", "Medium"],
  "ASC, Techno": ["2000s", "Medium"],
  "Autechre, Odds & Sods": ["1990s", "High"],
  "Autechre, Post 2000": ["2000s", "High"],
  "Autechre, Pre 2000": ["1990s", "High"],
  "Aleksi Perälä, Ambient": ["2000s", "Medium"],
  "Aleksi Perälä, Ambient Beats": ["2000s", "Medium"],
  "Aleksi Perälä, Beats": ["2000s", "Medium"],
  "Drum & Bass, Dark": ["1990s", "High"],
  "Drum & Bass, Light": ["1990s", "High"],
  "Drum & Bass, Liquid": ["2000s", "Medium"],
  "Durutti Column": ["1980s", "High"],
  "Dylan Henner": ["2010s", "Medium"],
  "Fennesz ": ["2000s", "High"],
  "Fennesz, Starter Pack": ["2000s", "High"],
  "IDM, Sweet Melodic": ["1990s", "High"],
  "Piano Magic": ["2000s", "Medium"],
  "Piano Magic, Starter Pack": ["2000s", "Medium"],
  "Plaid": ["1990s", "High"],
  "Post-Rock, Abstract & Experimental": ["1990s", "High"],
  "Post-Rock, Chiming Guitars": ["1990s", "High"],
  "Post-Rock, Crescendo-Core": ["2000s", "Medium"],
  "Post-Rock, Floating": ["2000s", "Medium"],
  "Post-Rock, Hushed": ["2000s", "Medium"],
  "Post-Rock, Menacing": ["2000s", "Medium"],
  "Stereolab": ["1990s", "High"],
  "Stereolab, Chill": ["1990s", "High"],
  "Stereolab, Rocking": ["1990s", "High"],
  "Stereolab, Starter Pack": ["1990s", "High"],
  "Stereolab, Trance": ["1990s", "High"],

  // === TECHNO / HOUSE / TRANCE ===
  "Dub Techno For The Isolation Tank": ["2000s", "Medium"],
  "House, Ambient": ["1990s", "Medium"],
  "House, Classic": ["1980s", "High"],
  "House, Deep": ["1990s", "Medium"],
  "House, Dusty": ["1990s", "Medium"],
  "House, Melodic": ["2000s", "Medium"],
  "Italo, Classic": ["1980s", "High"],
  "Juan Atkins": ["1980s", "High"],
  "Techno, Ambient": ["1990s", "Medium"],
  "Techno, Banging": ["1990s", "Medium"],
  "Techno, Classic": ["1980s", "High"],
  "Techno, Underwater": ["1990s", "Medium"],
  "Techno, Warehouse": ["1990s", "Medium"],
  "Trance, Ambient": ["1990s", "High"],
  "Trance, Experimental": ["1990s", "High"],

  // === HIP-HOP ===
  "Hip-Hop, 1985-1992": ["1980s", "High"],
  "Hip-Hop, 90s / 00s Lyricists": ["1990s", "High"],
  "Hip-Hop, Dusty": ["1990s", "Medium"],
  "Hip-Hop, Hard Beats": ["1990s", "Medium"],
  "Hip-Hop, Instrumentals": ["2000s", "Medium"],
  "Hip-Hop, Melancholy": ["1990s", "Medium"],
  "Hip-Hop, Neo-Soul": ["2000s", "Medium"],

  // === R&B ===
  "R&B, 80s Dance": ["1980s", "High"],
  "R&B, 80s Smooth": ["1980s", "High"],
  "R&B, 90s": ["1990s", "High"],
  "R&B, 90s Smooth": ["1990s", "High"],
  "R&B, Early 90s Dance": ["1990s", "High"],
  "R&B, Late 90s Dance": ["1990s", "High"],
  "R&B, 00s Smooth": ["2000s", "High"],
  "R&B, 00s Dance": ["2000s", "High"],
  "R&B, 2020s Dance": ["2020s", "High"],
  "R&B, Baby Makers": ["1990s", "Low"],
  "R&B, Contemporary Melancholy": ["2010s", "Medium"],
  "R&B, Disco/Funk": ["1970s", "High"],
  "R&B, Insecure": ["2010s", "Medium"],
  "R&B, Neo-Soul": ["2000s", "High"],
  "R&B, New Jack Swing": ["1990s", "High"],
  "R&B, Vintage Dreamy": ["1960s", "Medium"],

  // === ROCK / POP / COUNTRY ===
  "Acetone": ["1990s", "High"],
  "Arab Strap": ["1990s", "High"],
  "Beach Boys, Experimental": ["1960s", "High"],
  "Chamber Pop, 60s": ["1960s", "High"],
  "Country, Classic": ["1970s", "Medium"],
  "Country, Heartbreakers": ["1970s", "Low"],
  "Elvis, Rockin\u2019": ["1950s", "High"],
  "Elvis, Melancholy": ["1960s", "Medium"],
  "Ennio Morricone": ["1960s", "High"],
  "Frank Zappa, Chill": ["1970s", "Medium"],
  "Frank Zappa, Doo Wop": ["1960s", "Medium"],
  "Frank Zappa, Guitar": ["1970s", "Medium"],
  "Frank Zappa, Psychedelic Pop": ["1960s", "High"],
  "Grouper": ["2010s", "Medium"],
  "Ida": ["1990s", "Medium"],
  "Low": ["1990s", "High"],
  "Low, Experimental": ["2000s", "Medium"],
  "Low, Heartbreakers": ["1990s", "High"],
  "Low, Starter Pack": ["1990s", "High"],
  "Pedro The Lion": ["2000s", "Medium"],
  "Piero Umiliani": ["1960s", "High"],
  "Post-Hardcore": ["1990s", "Medium"],
  "Rock, 60s Beat": ["1960s", "High"],
  "Rock, Classic Rock Radio": ["1970s", "Medium"],
  "Rock, Early": ["1950s", "High"],
  "Rock, Soft": ["1970s", "Medium"],
  "Rock, Smooth": ["1970s", "Low"],
  "Sadcore": ["1990s", "High"],
  "Sigur Ros": ["2000s", "High"],
  "Slowcore": ["1990s", "High"],

  // === SYNTH POP ===
  "Synth, Pop 80s": ["1980s", "High"],
  "Synth, Pop Dystopia": ["1980s", "Medium"],
  "Synth, Pop Melancholy": ["1980s", "Medium"],
  "Synth, Pop Oddballs": ["1980s", "Medium"],

  // === OTHER ELECTRONIC ARTISTS ===
  "Alessandro Cortini": ["2010s", "Medium"],
  "Kaitlyn Aurelia Smith": ["2010s", "High"],

  // === AMBIENT (mood-based, harder to pin) ===
  "Ambient, Ancient": ["1970s", "Medium"],
  "Ambient, Balearic": ["1990s", "Medium"],
  "Ambient, Classical Swells": ["2000s", "Low"],
  "Ambient, Country": ["2010s", "Low"],
  "Ambient, Faded": ["2000s", "Low"],
  "Ambient, Floating": ["2000s", "Low"],
  "Ambient, Heartstrings": ["2000s", "Low"],
  "Ambient, Kompakt Queasy": ["2000s", "Medium"],
  "Ambient, Outer Space": ["1990s", "Low"],
  "Ambient, Techno": ["1990s", "Medium"],
  "Ambient, Water": ["2000s", "Low"],

  // === ELECTRONIC (mood-based) ===
  "Electronic, Abandoned Cities": ["2000s", "Low"],
  "Electronic, Downtempo": ["2000s", "Low"],
  "Electronic, Experimental Chill": ["2000s", "Low"],
  "Electronic, Goth Experiments": ["1980s", "Low"],
  "Electronic, Imaginary Jungles": ["2000s", "Low"],
  "Electronic, Industrial Digital Noise Pop": ["1990s", "Low"],
  "Electronic, Melancholic Breakbeats": ["2000s", "Low"],
  "Electronic, Skittering Beats And Moody Synths": ["2000s", "Low"],
  "Electronic, Unpredictable Rhythms": ["2000s", "Low"],
  "Electronic, Wonky House And Techno": ["2010s", "Low"],
  "Electronica, Light": ["2000s", "Low"],

  // === OTHER GENRES ===
  "Balearic Music": ["1990s", "Medium"],
  "Balearic, Pop": ["1990s", "Medium"],
  "Blues, Chill": ["1960s", "Low"],
  "Blues, Early": ["1930s", "High"],
  "Boogie": ["1980s", "High"],
  "Dinner Party Funk": ["1970s", "Medium"],
  "Easy Listening": ["1960s", "Medium"],
  "Enya": ["1990s", "High"],
  "Experimental, Ancient": ["1970s", "Low"],
  "Experimental, Celestial Digital Pop": ["2010s", "Low"],
  "Experimental, Durational Dissonance": ["2000s", "Low"],
  "Experimental, Dying Cities": ["2000s", "Low"],
  "Experimental, Guitar Glitch Ambient": ["2000s", "Low"],
  "Experimental, Guitar Haze": ["2000s", "Low"],
  "Flamenco": ["1970s", "Low"],
  "Flamenco, Bulerías": ["1970s", "Low"],
  "Flamenco, Guitar": ["1970s", "Low"],
  "France, Vintage Pop": ["1960s", "High"],
  "France, Vintage Mellow": ["1960s", "High"],
  "Arthur Lyman, Chill": ["1960s", "High"],
  "Jazz, Cool": ["1950s", "High"],
  "Jazz, Funk": ["1970s", "High"],
  "Lounge, Chill": ["1960s", "Medium"],
  "Lounge, Kicking": ["1960s", "Medium"],
  "Minimal, Dark, And Cold Wave": ["1980s", "High"],
  "Minimalism": ["1970s", "Medium"],
  "New Age": ["1980s", "Medium"],
  "Pacific Island, Chill": ["1970s", "Low"],
  "Pop, Widescreen": ["1990s", "Low"],
  "Solo Guitar": ["1970s", "Low"],
  "Turkey, Psych Funk": ["1970s", "High"],
  "Funk, Worldwide": ["1970s", "Medium"],

  // === MOOD / COMPILATION (hardest to pin) ===
  "Autumn": ["2000s", "Low"],
  "By The Way, Vol. 1": ["2000s", "Low"],
  "By The Way, Vol. 10": ["2000s", "Low"],
  "By The Way, Vol. 2": ["2000s", "Low"],
  "By The Way, Vol. 3": ["2000s", "Low"],
  "By The Way, Vol. 4": ["2000s", "Low"],
  "By The Way, Vol. 5": ["2000s", "Low"],
  "By The Way, Vol. 6": ["2000s", "Low"],
  "By The Way, Vol. 7": ["2000s", "Low"],
  "By The Way, Vol. 8": ["2000s", "Low"],
  "By The Way, Vol. 9": ["2000s", "Low"],
  "Chill Worldwide": ["2000s", "Low"],
  "Haunted Ballroom, Happy": ["1940s", "Low"],
  "Haunted Ballroom, Sad": ["1940s", "Low"],
  "Sad Songs": ["1990s", "Low"],
  "Sad Songs, Vintage": ["1960s", "Low"],
  "Summer Patio Songs": ["2000s", "Low"],
  "Sunday Morning Songs": ["2000s", "Low"],
  "Vintage, Dreamy Melancholy": ["1960s", "Medium"],
  "Vocal Groups, Sad": ["1950s", "Medium"],
  "Yet They Say, Vol. 1": ["2000s", "Low"],
  "Yet They Say, Vol. 10": ["2000s", "Low"],
  "Yet They Say, Vol. 2": ["2000s", "Low"],
  "Yet They Say, Vol. 3": ["2000s", "Low"],
  "Yet They Say, Vol. 4": ["2000s", "Low"],
  "Yet They Say, Vol. 5": ["2000s", "Low"],
  "Yet They Say, Vol. 6": ["2000s", "Low"],
  "Yet They Say, Vol. 7": ["2000s", "Low"],
  "Yet They Say, Vol. 8": ["2000s", "Low"],
  "Yet They Say, Vol. 9": ["2000s", "Low"],
  "Worldwide, Chiming Guitar": ["2000s", "Low"],
  "Worldwide, Smooth Mid-Tempo R&B": ["2000s", "Low"],
  "Worldwide, Chanting And Drumming": ["1970s", "Low"],
  "R&B, Disco/Funk": ["1970s", "High"],
};

// Parse CSV rows and add decade info
const output = [header + ',Decade,Confidence'];
let matched = 0;
let unmatched = [];

for (const row of rows) {
  if (!row.trim()) continue;

  // Parse the name from the CSV (it's quoted)
  const nameMatch = row.match(/^"([^"]*?)"/);
  if (!nameMatch) {
    // try unquoted
    const name = row.split(',')[0];
    const entry = decades[name];
    if (entry) {
      output.push(`${row},${entry[0]},${entry[1]}`);
      matched++;
    } else {
      output.push(`${row},,`);
      unmatched.push(name);
    }
    continue;
  }

  const name = nameMatch[1];
  const entry = decades[name];
  if (entry) {
    output.push(`${row},${entry[0]},${entry[1]}`);
    matched++;
  } else {
    output.push(`${row},,`);
    unmatched.push(name);
  }
}

fs.writeFileSync('playlist-locations.csv', output.join('\n') + '\n');

console.log(`Matched: ${matched}`);
console.log(`Unmatched: ${unmatched.length}`);
if (unmatched.length > 0) {
  console.log('Unmatched names:');
  unmatched.forEach(n => console.log(`  "${n}"`));
}
