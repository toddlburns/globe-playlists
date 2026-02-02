const playlists = [
  {
    "name": "Afrobeat, Chill",
    "location": "Lagos, Nigeria",
    "lat": 4.5473968000525575,
    "lng": 2.0824173701779687,
    "spotifyId": "2iig1p0w46f3lKUim5aCQP",
    "decade": "1970s"
  },
  {
    "name": "Afrobeat, Groovers",
    "location": "Lagos, Nigeria",
    "lat": 6.162395370996357,
    "lng": 1.38324275505183,
    "spotifyId": "7xeFi53HwuE8pNlftbK2lL",
    "decade": "1970s"
  },
  {
    "name": "Afrobeat, Heavy",
    "location": "Lagos, Nigeria",
    "lat": 5.665480918849924,
    "lng": 1.945361359650227,
    "spotifyId": "52WUzKdwm9kgIYtJq3Pxfi",
    "decade": "1970s"
  },
  {
    "name": "Alex Kasau Katombi",
    "location": "Nairobi, Kenya",
    "lat": -2.7460774361857507,
    "lng": 35.42749707888699,
    "spotifyId": "4tNlGIW4EsLe0CwP5LWx6c",
    "decade": "1980s"
  },
  {
    "name": "Atom TM",
    "location": "Frankfurt, Germany",
    "lat": 52.07108789944103,
    "lng": 6.7020684406900894,
    "spotifyId": "4NL0LAlmsbr2W70g27Cycn",
    "decade": "2000s"
  },
  {
    "name": "Amapiano, Gospel",
    "location": "Johannesburg, South Africa",
    "lat": -25.975897920240808,
    "lng": 26.466144977538633,
    "spotifyId": "1pYn1uvmbNPPiarE2mT8SP",
    "decade": "2010s"
  },
  {
    "name": "Amapiano, Private School",
    "location": "Johannesburg, South Africa",
    "lat": -27.62553741002728,
    "lng": 27.78025131536551,
    "spotifyId": "2HnPeP0Nfk6YpTBmxrS9U6",
    "decade": "2010s"
  },
  {
    "name": "Amapiano, Starter Pack",
    "location": "Johannesburg, South Africa",
    "lat": -25.11837013543412,
    "lng": 28.083652712253404,
    "spotifyId": "0FQ3q1kXYX1hfN7N5n7yT6",
    "decade": "2010s"
  },
  {
    "name": "Asakaa",
    "location": "Kumasi, Ghana",
    "lat": 5.548706064551749,
    "lng": -0.6818069315610125,
    "spotifyId": "2lni3fakT2CCFulvIWcOFt",
    "decade": "2020s"
  },
  {
    "name": "Asakaa, Starter Pack",
    "location": "Kumasi, Ghana",
    "lat": 7.745190047990005,
    "lng": -3.381360212926152,
    "spotifyId": "13IKYLFu60AscHVUcWwuv0",
    "decade": "2020s"
  },
  {
    "name": "Benga & Kamba Pop, Modern",
    "location": "Nairobi, Kenya",
    "lat": -1.7913000274096365,
    "lng": 38.72100725980431,
    "spotifyId": "1JSCxZphCXqWqfq5pYrub9",
    "decade": "2000s"
  },
  {
    "name": "Benga & Kamba Pop, Vintage",
    "location": "Nairobi, Kenya",
    "lat": -2.2360912548838496,
    "lng": 38.60240484494301,
    "spotifyId": "0t6jRcP3uo3BSEEFvUsrxe",
    "decade": "1970s"
  },
  {
    "name": "Biama",
    "location": "Lagos, Nigeria",
    "lat": 6.752748845582852,
    "lng": 3.347873233990997,
    "spotifyId": "3Q6gJfudcpuoV1rVScaD4x",
    "decade": "2010s"
  },
  {
    "name": "Bikutsi",
    "location": "Yaoundé, Cameroon",
    "lat": 2.384887558641821,
    "lng": 13.141796462676655,
    "spotifyId": "1WS40Xzfsrg37iKOXudtOk",
    "decade": "1980s"
  },
  {
    "name": "Bikutsi, Contemporary",
    "location": "Yaoundé, Cameroon",
    "lat": 2.5968622167268887,
    "lng": 11.295068134643511,
    "spotifyId": "0a8H55Hlj8sAUGkJs7tdnY",
    "decade": "2000s"
  },
  {
    "name": "Cabo Verde, Vintage R&B",
    "location": "Praia, Cape Verde",
    "lat": 13.25098280970078,
    "lng": -21.896321590106822,
    "spotifyId": "1rbReWa0ajvTwJQJFiZYoH",
    "decade": "1970s"
  },
  {
    "name": "Cabo Verde, Vintage Rock And Funk",
    "location": "Praia, Cape Verde",
    "lat": 13.299620965909815,
    "lng": -22.601802745379505,
    "spotifyId": "6K9t5Ja3meB06K8Ffi691b",
    "decade": "1970s"
  },
  {
    "name": "Chimurenga",
    "location": "Harare, Zimbabwe",
    "lat": -18.276483837037205,
    "lng": 31.213392572405446,
    "spotifyId": "7xwKgLkCIFBhqXGeNEmTWz",
    "decade": "1970s"
  },
  {
    "name": "Coupé-décalé",
    "location": "Abidjan, Ivory Coast",
    "lat": 6.397304482277699,
    "lng": -4.556415214622074,
    "spotifyId": "0kOQEBaYZ3iy4vvwAQQJ4X",
    "decade": "2000s"
  },
  {
    "name": "Ethiopia, Blues",
    "location": "Addis Ababa, Ethiopia",
    "lat": 10.81154885256588,
    "lng": 39.12563802557368,
    "spotifyId": "0vRmvfpw1bsPd4emjHOs9y",
    "decade": "1960s"
  },
  {
    "name": "Ethiopia, Funk & Soul",
    "location": "Addis Ababa, Ethiopia",
    "lat": 9.510197081508755,
    "lng": 39.93760949140176,
    "spotifyId": "09t24TcQoM3mYuB3WT5eu7",
    "decade": "1970s"
  },
  {
    "name": "Ethiopia, Jazz",
    "location": "Addis Ababa, Ethiopia",
    "lat": 7.2291694793326045,
    "lng": 37.53545607447015,
    "spotifyId": "4cJjQzwIDDCvLyn9B93XOd",
    "decade": "1960s"
  },
  {
    "name": "Ethiopia, Jazz Vocal",
    "location": "Addis Ababa, Ethiopia",
    "lat": 9.909091182013917,
    "lng": 36.876198929269535,
    "spotifyId": "4odZ0OheBc97joZ9YiWYfZ",
    "decade": "1960s"
  },
  {
    "name": "Funaná",
    "location": "Praia, Cape Verde",
    "lat": 15.151333835927133,
    "lng": -23.34825947870672,
    "spotifyId": "038RxzglexdTMi2RV8NIGf",
    "decade": "1980s"
  },
  {
    "name": "Acetone",
    "location": "Los Angeles, USA",
    "lat": 32.45845196213033,
    "lng": -119.08986191446373,
    "spotifyId": "5GbQEsE7cPTpxSXF2vRag7",
    "decade": "1990s"
  },
  {
    "name": "Aleksi Perälä, Ambient",
    "location": "Helsinki, Finland",
    "lat": 60.1699,
    "lng": 25.238400000000002,
    "spotifyId": "13FHf7pS4BFYgpSMO5cQ5t",
    "decade": "2000s"
  },
  {
    "name": "Aleksi Perälä, Ambient Beats",
    "location": "Helsinki, Finland",
    "lat": 60.492710240904785,
    "lng": 25.251918019206226,
    "spotifyId": "49kbHTAr0darDpdHdHdOFk",
    "decade": "2000s"
  },
  {
    "name": "Aleksi Perälä, Beats",
    "location": "Helsinki, Finland",
    "lat": 61.66876346066667,
    "lng": 26.536313438795492,
    "spotifyId": "74uUwxODQwRR6b5Sn6cgze",
    "decade": "2000s"
  },
  {
    "name": "Alessandro Cortini",
    "location": "Los Angeles, USA",
    "lat": 35.328403110843325,
    "lng": -119.2004868911153,
    "spotifyId": "5xg8l4oRQTliZHWUMmbpog",
    "decade": "2010s"
  },
  {
    "name": "Hees Macaan",
    "location": "Mogadishu, Somalia",
    "lat": 1.9864618127364642,
    "lng": 46.480924950465806,
    "spotifyId": "15XPRBJfwILv97ucd5DrHh",
    "decade": "1970s"
  },
  {
    "name": "Hees Macaan, Starter Pack",
    "location": "Mogadishu, Somalia",
    "lat": 0.4660320773135904,
    "lng": 47.07937759953424,
    "spotifyId": "4ZplzNGXYhoJzZ3qic1YH1",
    "decade": "1970s"
  },
  {
    "name": "Highlife, Vintage Jazzy",
    "location": "Accra, Ghana",
    "lat": 4.753186370308049,
    "lng": 0.3775719115246868,
    "spotifyId": "79sfOC33ieQMvylMkvYLnK",
    "decade": "1960s"
  },
  {
    "name": "Amapiano",
    "location": "Johannesburg, South Africa",
    "lat": -25.392170691974226,
    "lng": 28.726547116962884,
    "spotifyId": "79M99hodUmv6FLQMVZ97lr",
    "decade": "2010s"
  },
  {
    "name": "Kora",
    "location": "Banjul, Gambia",
    "lat": 15.16072626319183,
    "lng": -16.755878357344876,
    "spotifyId": "0zMqwNg0GC4Pg1YQn0R69k",
    "decade": "1970s"
  },
  {
    "name": "Ambient, Ancient",
    "location": "Jericho",
    "lat": 31.8611,
    "lng": 35.759699999999995,
    "spotifyId": "7AWO9lCenDDqGEMc5VwZzz",
    "decade": "1970s"
  },
  {
    "name": "Ambient, Balearic",
    "location": "Ibiza, Spain",
    "lat": 38.9067,
    "lng": 1.7206000000000001,
    "spotifyId": "3h6tiKA7760RuHroRq4VUV",
    "decade": "1990s"
  },
  {
    "name": "Ambient, Classical Swells",
    "location": "Austin, USA",
    "lat": 30.2672,
    "lng": -97.4431,
    "spotifyId": "2prFQwqRESbg7m2yLW8TIA",
    "decade": "2000s"
  },
  {
    "name": "Ambient, Country",
    "location": "Asheville, USA",
    "lat": 35.5951,
    "lng": -82.25150000000001,
    "spotifyId": "63tLUvVN2cyufFq9VBNB73",
    "decade": "2010s"
  },
  {
    "name": "Ambient, Faded",
    "location": "English Countryside",
    "lat": 51.5074,
    "lng": -1.2,
    "spotifyId": "4WIR9yiqhfdvTHRhqGGqON",
    "decade": "2000s"
  },
  {
    "name": "Ambient, Floating",
    "location": "San Diego, USA",
    "lat": 32.7157,
    "lng": -116.86110000000001,
    "spotifyId": "49zrvR1Mph2kjThFHrhXhw",
    "decade": "2000s"
  },
  {
    "name": "Ambient, Heartstrings",
    "location": "Cologne, Germany",
    "lat": 50.9375,
    "lng": 7.2603,
    "spotifyId": "0czY51CRWCFNciREa0KMWS",
    "decade": "2000s"
  },
  {
    "name": "Kwaku DMC",
    "location": "Accra, Ghana",
    "lat": 6.233752331971001,
    "lng": 1.4253954394356347,
    "spotifyId": "2I3Y551Qnz3JHrsasUPJt9",
    "decade": "2020s"
  },
  {
    "name": "Mahraganat",
    "location": "Cairo, Egypt",
    "lat": 28.11190645338328,
    "lng": 32.64002702473089,
    "spotifyId": "27gc1VLVQ0E6d7ZHUyfgLf",
    "decade": "2010s"
  },
  {
    "name": "Mahraganat, Starter Pack",
    "location": "Cairo, Egypt",
    "lat": 28.46491447808363,
    "lng": 31.836016236510446,
    "spotifyId": "0Og9nutJw2eAP8seV8U6NY",
    "decade": "2010s"
  },
  {
    "name": "Makossa",
    "location": "Douala, Cameroon",
    "lat": 3.618580967990508,
    "lng": 10.668800117254154,
    "spotifyId": "7N3tj9ECjNH9nWpTFBcMrh",
    "decade": "1970s"
  },
  {
    "name": "Mbalax",
    "location": "Dakar, Senegal",
    "lat": 13.059584436311464,
    "lng": -17.45560065082804,
    "spotifyId": "2vDJPSyPsaVluvBe7fueHd",
    "decade": "1980s"
  },
  {
    "name": "Mbalax, Contemporary Pop",
    "location": "Dakar, Senegal",
    "lat": 13.618579155191753,
    "lng": -15.911256616295411,
    "spotifyId": "3N2lrPIai04h83Odpkf19j",
    "decade": "2010s"
  },
  {
    "name": "Mbalax, Contemporary Rap",
    "location": "Dakar, Senegal",
    "lat": 15.45024361362482,
    "lng": -16.895124472206867,
    "spotifyId": "0RsOLoaHWxPBYR5b6cfYPZ",
    "decade": "2010s"
  },
  {
    "name": "Ambient, Japan",
    "location": "Tokyo, Japan",
    "lat": 35.6762,
    "lng": 139.9503,
    "spotifyId": "04qAy2I5Ojwp0hatwcTUQf",
    "decade": "1980s"
  },
  {
    "name": "Mbira",
    "location": "Harare, Zimbabwe",
    "lat": -19.180543551405215,
    "lng": 31.822632103740766,
    "spotifyId": "1rYjf7xUGiYES9rQFoWJhX",
    "decade": "1970s"
  },
  {
    "name": "Salegy & Kawitry",
    "location": "Antananarivo, Madagascar",
    "lat": -19.346226243327223,
    "lng": 48.36571211723915,
    "spotifyId": "4N8p7ElBD9ul8Vt01hZhoi",
    "decade": "1990s"
  },
  {
    "name": "Salegy & Kawitry, Starter Pack",
    "location": "Antananarivo, Madagascar",
    "lat": -19.612235314946382,
    "lng": 46.23628677732238,
    "spotifyId": "3cc2SwSPDVRheVL2ongzRb",
    "decade": "1990s"
  },
  {
    "name": "Ambient, Kompakt Queasy",
    "location": "Cologne, Germany",
    "lat": 51.260310240904786,
    "lng": 7.2738180192062245,
    "spotifyId": "5yMc5m6k38mikLv55hYZrp",
    "decade": "2000s"
  },
  {
    "name": "Ambient, Outer Space",
    "location": "San Diego, USA",
    "lat": 33.038510240904785,
    "lng": -116.84758198079378,
    "spotifyId": "0IvCfBCJhAwRBapKm9eXsp",
    "decade": "1990s"
  },
  {
    "name": "Tsapiky",
    "location": "Toliara, Madagascar",
    "lat": -24.9846666516494,
    "lng": 45.05976713320853,
    "spotifyId": "2Zmb0eCGh5JpOd8QaUZffF",
    "decade": "2000s"
  },
  {
    "name": "Wawa Salegy",
    "location": "Antananarivo, Madagascar",
    "lat": -19.454979624920107,
    "lng": 47.49701807614966,
    "spotifyId": "2dIeZLRgv0xi7GBxOM92lf",
    "decade": "2000s"
  },
  {
    "name": "Ambient, Techno",
    "location": "London, UK",
    "lat": 51.5074,
    "lng": 0.1722,
    "spotifyId": "5fs3FTwvwtq8YVSOmc0qRt",
    "decade": "1990s"
  },
  {
    "name": "Ambient, Water",
    "location": "Tokyo, Japan",
    "lat": 35.99901024090479,
    "lng": 139.9638180192062,
    "spotifyId": "0l4dVLG5CXpkkTFWRTbIfP",
    "decade": "2000s"
  },
  {
    "name": "Zouglou",
    "location": "Abidjan, Ivory Coast",
    "lat": 4.007358379743281,
    "lng": -4.955405883107902,
    "spotifyId": "5OuAAwRsFfsppPMBZXGQPT",
    "decade": "1990s"
  },
  {
    "name": "Zouglou, Rapide",
    "location": "Abidjan, Ivory Coast",
    "lat": 5.393775285160262,
    "lng": -4.26687463810729,
    "spotifyId": "35ePSEtczTznJJQhGNkoHi",
    "decade": "1990s"
  },
  {
    "name": "Yet They Say, Vol. 1",
    "location": "Cincinnati, USA",
    "lat": 39.1031,
    "lng": -84.212,
    "spotifyId": "7r9P1JViiAMM5H9n2Qjb7b",
    "decade": "2000s"
  },
  {
    "name": "Arab Strap",
    "location": "Edinburgh, UK",
    "lat": 56.486766231138915,
    "lng": -3.9496102967543907,
    "spotifyId": "2TD8uJo3YaK7ayv4XWJXul",
    "decade": "1990s"
  },
  {
    "name": "Arthur Lyman, Chill",
    "location": "Honolulu, USA",
    "lat": 21.486366914610507,
    "lng": -157.7151118567105,
    "spotifyId": "05lqPGIja6yCRdkAeg0rR5",
    "decade": "1960s"
  },
  {
    "name": "ASC, Ambient",
    "location": "San Diego, USA",
    "lat": 33.3154441618249,
    "lng": -117.17861971338078,
    "spotifyId": "2GTdCjTWSe4aLFjexf6xas",
    "decade": "2000s"
  },
  {
    "name": "ASC, Drum & Bass Dark",
    "location": "San Diego, USA",
    "lat": 33.22229738541336,
    "lng": -117.71414528665593,
    "spotifyId": "66FMyWSL4ai8HLFFEx8qeC",
    "decade": "2000s"
  },
  {
    "name": "ASC, Drum & Bass Light",
    "location": "San Diego, USA",
    "lat": 32.66316327091518,
    "lng": -118.05956529821528,
    "spotifyId": "3YTUUD1qFCJdi6tA2CPJ2m",
    "decade": "2000s"
  },
  {
    "name": "ASC, Electronica Dark",
    "location": "San Diego, USA",
    "lat": 31.921057379926673,
    "lng": -117.8474258019068,
    "spotifyId": "31fRkBUVMyAiEIextWgg1S",
    "decade": "2000s"
  },
  {
    "name": "ASC, Electronica Light",
    "location": "San Diego, USA",
    "lat": 31.520302469396988,
    "lng": -117.05610121987267,
    "spotifyId": "4rPufV1Gi5hU04fma7ePV9",
    "decade": "2000s"
  },
  {
    "name": "ASC, Starter Pack",
    "location": "San Diego, USA",
    "lat": 31.863490038872364,
    "lng": -116.11408606401116,
    "spotifyId": "41LddJ20d8OEEn0JS4dPG5",
    "decade": "2000s"
  },
  {
    "name": "ASC, Techno",
    "location": "San Diego, USA",
    "lat": 32.89052380727574,
    "lng": -115.67132262186271,
    "spotifyId": "0xqNI7zlmk1WxI9BjC5dZ8",
    "decade": "2000s"
  },
  {
    "name": "Atom TM, Ambient",
    "location": "Frankfurt, Germany",
    "lat": 48.978695341599725,
    "lng": 9.097372535447855,
    "spotifyId": "6Bf98QeikFhEmx4I9eaFA1",
    "decade": "2000s"
  },
  {
    "name": "Atom TM, Chill",
    "location": "Frankfurt, Germany",
    "lat": 49.39522655177379,
    "lng": 6.874050687972947,
    "spotifyId": "1gfY14XzLgklsd7hbhD9gs",
    "decade": "2000s"
  },
  {
    "name": "Atom TM, Digital Hardcore",
    "location": "Frankfurt, Germany",
    "lat": 49.94413677473081,
    "lng": 6.787714900308515,
    "spotifyId": "0fhOmjyRTApzRhqy4oulzf",
    "decade": "1990s"
  },
  {
    "name": "Atom TM, Electronic Experimental",
    "location": "Frankfurt, Germany",
    "lat": 51.241490788627274,
    "lng": 7.41279089716754,
    "spotifyId": "0ektreZOberCoGpFwDYyUy",
    "decade": "2000s"
  },
  {
    "name": "Atom TM, Electronic Heavy",
    "location": "Frankfurt, Germany",
    "lat": 50.68743725611242,
    "lng": 8.982650030734835,
    "spotifyId": "21LF9zp0vqyJxdQP0ioIHj",
    "decade": "2000s"
  },
  {
    "name": "Atom TM,  Electronic Soft",
    "location": "Frankfurt, Germany",
    "lat": 50.77684343870384,
    "lng": 9.614499992005541,
    "spotifyId": "38ml82ODH5HumdFzumWkY0",
    "decade": "2000s"
  },
  {
    "name": "Atom TM, Glitch",
    "location": "Frankfurt, Germany",
    "lat": 49.01526132406213,
    "lng": 10.270382778708694,
    "spotifyId": "7CqvI7yWjT7Vz4SV201NcV",
    "decade": "2000s"
  },
  {
    "name": "Atom TM, Latin Experimental",
    "location": "Santiago, Chile",
    "lat": -33.4489,
    "lng": -70.36930000000001,
    "spotifyId": "79MA3K9hkgNXw2WzI0qZT9",
    "decade": "2000s"
  },
  {
    "name": "Atom TM, Latin Pop",
    "location": "Santiago, Chile",
    "lat": -33.126089759095215,
    "lng": -70.35578198079378,
    "spotifyId": "7oVg1AjG18TjKEMwzTwKXV",
    "decade": "2000s"
  },
  {
    "name": "Atom TM, Pop Dark",
    "location": "Frankfurt, Germany",
    "lat": 49.52561882706178,
    "lng": 7.852202294246675,
    "spotifyId": "1BqRxVba45sNlEd4Gr6HAp",
    "decade": "2000s"
  },
  {
    "name": "Atom TM, Pop Light",
    "location": "Frankfurt, Germany",
    "lat": 48.694656069103345,
    "lng": 9.214785662918214,
    "spotifyId": "3ANbspvqDje5SguYqQpyow",
    "decade": "2000s"
  },
  {
    "name": "Atom TM, Starter Pack",
    "location": "Frankfurt, Germany",
    "lat": 48.86848777413162,
    "lng": 7.560454389900113,
    "spotifyId": "6wFf3Nk95ob2UiR2DwpvFJ",
    "decade": "2000s"
  },
  {
    "name": "Autechre, Post 2000",
    "location": "Manchester, UK",
    "lat": 54.01196019387492,
    "lng": -3.9579427377348337,
    "spotifyId": "0j8vOIrlb5iKi2uIsmZqKD",
    "decade": "2000s"
  },
  {
    "name": "Autechre, Pre 2000",
    "location": "Manchester, UK",
    "lat": 53.67173811501335,
    "lng": -2.696158450628927,
    "spotifyId": "46Vag9YCi7SCH87AUL1iv0",
    "decade": "1990s"
  },
  {
    "name": "Autumn",
    "location": "Brussels, Belgium",
    "lat": 50.8503,
    "lng": 4.6517,
    "spotifyId": "6UhnY0JKXAIp7lpemR460r",
    "decade": "2000s"
  },
  {
    "name": "Autechre, Odds & Sods",
    "location": "Manchester, UK",
    "lat": 53.66324600780034,
    "lng": -0.9273148136849687,
    "spotifyId": "5EEo9Cj8XRSKe7RjKN54Ty",
    "decade": "1990s"
  },
  {
    "name": "Balearic Music",
    "location": "Ibiza, Spain",
    "lat": 37.8177514629726,
    "lng": 2.2567141008906733,
    "spotifyId": "0uABCXhc1GhyZdAYbAlY9N",
    "decade": "1990s"
  },
  {
    "name": "Balearic, Pop",
    "location": "Ibiza, Spain",
    "lat": 39.969609744292455,
    "lng": 2.818499465542807,
    "spotifyId": "2keOQdxWMpQvLqIwVyLmPS",
    "decade": "1990s"
  },
  {
    "name": "Beach Boys, Experimental",
    "location": "Hawthorne, USA",
    "lat": 31.797160085520517,
    "lng": -119.0755375481942,
    "spotifyId": "36OdtkSojyq4dmnIWBn0Qc",
    "decade": "1960s"
  },
  {
    "name": "Blues, Chill",
    "location": "Memphis, USA",
    "lat": 36.731718474647145,
    "lng": -90.22266703193618,
    "spotifyId": "3BtzIGpDtueO5elQrwl0wB",
    "decade": "1960s"
  },
  {
    "name": "Blues, Early",
    "location": "Memphis, USA",
    "lat": 36.004597843509345,
    "lng": -90.86052937127053,
    "spotifyId": "5GOZOzf5d4Dc8FDX9LV8Ze",
    "decade": "1930s"
  },
  {
    "name": "Boogie",
    "location": "Los Angeles, USA",
    "lat": 32.45601330890812,
    "lng": -117.76686341674568,
    "spotifyId": "6d5BDrtmclL3mxD83zlzOS",
    "decade": "1980s"
  },
  {
    "name": "Brazil, Bumping",
    "location": "Rio de Janeiro, Brazil",
    "lat": -22.066661947227917,
    "lng": -41.489068903348794,
    "spotifyId": "35EY0l9jOjybuoWAvJqpP8",
    "decade": "2000s"
  },
  {
    "name": "Brazil, Chill",
    "location": "Rio de Janeiro, Brazil",
    "lat": -22.90626886662163,
    "lng": -41.32835815642972,
    "spotifyId": "1LyJyYFq9U9FRxTMXKudv9",
    "decade": "1970s"
  },
  {
    "name": "Brazil, Funk & Soul",
    "location": "Rio de Janeiro, Brazil",
    "lat": -21.189899837792165,
    "lng": -41.20443233586562,
    "spotifyId": "1UOkuNE1cc2sEFh03leunA",
    "decade": "1970s"
  },
  {
    "name": "Brazil, Psychedelic",
    "location": "Rio de Janeiro, Brazil",
    "lat": -21.090094824571846,
    "lng": -43.49087724570799,
    "spotifyId": "5tz0aRB8kJMM15xMyufb3O",
    "decade": "1970s"
  },
  {
    "name": "Brazil, Vibes",
    "location": "Rio de Janeiro, Brazil",
    "lat": -21.240740963818222,
    "lng": -42.33769368371059,
    "spotifyId": "6WVROZezkHdnoUWeAjNT0k",
    "decade": "1970s"
  },
  {
    "name": "Burnt Friedman",
    "location": "Cologne, Germany",
    "lat": 52.2603466724766,
    "lng": 7.258602625850371,
    "spotifyId": "4zSxhCWqVhwg4E06wOhIMX",
    "decade": "2000s"
  },
  {
    "name": "By The Way, Vol. 1",
    "location": "Cincinnati, USA",
    "lat": 39.425910240904784,
    "lng": -84.19848198079377,
    "spotifyId": "4UbuFLeWj0Kd7zzSZ0Y9QA",
    "decade": "2000s"
  },
  {
    "name": "By The Way, Vol. 10",
    "location": "Cincinnati, USA",
    "lat": 39.7028441618249,
    "lng": -84.52951971338078,
    "spotifyId": "0doEtzxM03IrKqkym3vxLx",
    "decade": "2000s"
  },
  {
    "name": "By The Way, Vol. 2",
    "location": "Cincinnati, USA",
    "lat": 39.60969738541336,
    "lng": -85.06504528665593,
    "spotifyId": "5QkFOYKOH5mGMhjcuER0gv",
    "decade": "2000s"
  },
  {
    "name": "By The Way, Vol. 3",
    "location": "Cincinnati, USA",
    "lat": 39.05056327091518,
    "lng": -85.41046529821527,
    "spotifyId": "4AG6XFDIQ1Fzlj3GpZnkxb",
    "decade": "2000s"
  },
  {
    "name": "By The Way, Vol. 4",
    "location": "Cincinnati, USA",
    "lat": 38.30845737992667,
    "lng": -85.19832580190679,
    "spotifyId": "4O9w0ca5V7bdw8TiK9Qvkc",
    "decade": "2000s"
  },
  {
    "name": "By The Way, Vol. 5",
    "location": "Cincinnati, USA",
    "lat": 37.90770246939699,
    "lng": -84.40700121987267,
    "spotifyId": "1mdsTvjqzg9glSr7bWpgAR",
    "decade": "2000s"
  },
  {
    "name": "By The Way, Vol. 6",
    "location": "Cincinnati, USA",
    "lat": 38.25089003887236,
    "lng": -83.46498606401116,
    "spotifyId": "6qbLpNK4g0JNqcp9ccw2IZ",
    "decade": "2000s"
  },
  {
    "name": "By The Way, Vol. 6",
    "location": "Cincinnati, USA",
    "lat": 39.27792380727574,
    "lng": -83.02222262186271,
    "spotifyId": "6qbLpNK4g0JNqcp9ccw2IZ",
    "decade": "2000s"
  },
  {
    "name": "By The Way, Vol. 8",
    "location": "Cincinnati, USA",
    "lat": 40.4126519753511,
    "lng": -83.50822033102177,
    "spotifyId": "3LrFR2CBxvGPB1k50HA3vD",
    "decade": "2000s"
  },
  {
    "name": "By The Way, Vol. 9",
    "location": "Cincinnati, USA",
    "lat": 40.88394484392209,
    "lng": -84.77390006085551,
    "spotifyId": "0Nk04NfUz4lGUTo1Fqdw8Y",
    "decade": "2000s"
  },
  {
    "name": "Calypso, Classic",
    "location": "Port of Spain, Trinidad",
    "lat": 11.313026890428464,
    "lng": -62.09208814607934,
    "spotifyId": "5WlU5dajU5gbw67YomXXPy",
    "decade": "1950s"
  },
  {
    "name": "Chamber Pop, 60s",
    "location": "London, UK",
    "lat": 51.9406663791743,
    "lng": 1.5039683375420336,
    "spotifyId": "0Hz7pxGcFRvGYGoDwTAy1R",
    "decade": "1960s"
  },
  {
    "name": "Chill Worldwide",
    "location": "Sahara Desert",
    "lat": 23.4162,
    "lng": 12.3,
    "spotifyId": "3dMCpjhAA3OjJleYu4yZ8U",
    "decade": "2000s"
  },
  {
    "name": "City Pop, Funky",
    "location": "Tokyo, Japan",
    "lat": 36.36108788643928,
    "lng": 138.7085195367663,
    "spotifyId": "4vcecbl4VoDahMfo20uJCu",
    "decade": "1980s"
  },
  {
    "name": "City Pop, Smooth",
    "location": "Tokyo, Japan",
    "lat": 37.113387767751206,
    "lng": 138.2247856531323,
    "spotifyId": "4T1ZuyQ3LCPQ8MWRnqYYKq",
    "decade": "1980s"
  },
  {
    "name": "Conrad Schnitzler, Starter Pack",
    "location": "Berlin, Germany",
    "lat": 54.12210995694964,
    "lng": 12.17440009639019,
    "spotifyId": "0KTL1zPh9jlFb4IWw9n28p",
    "decade": "1970s"
  },
  {
    "name": "Country, Classic",
    "location": "Nashville, USA",
    "lat": 36.67448477602932,
    "lng": -87.52685034112353,
    "spotifyId": "2ppUaha7zYPbKfLx2FEF5E",
    "decade": "1970s"
  },
  {
    "name": "Country, Heartbreakers",
    "location": "Nashville, USA",
    "lat": 37.53657139979727,
    "lng": -88.1078936235546,
    "spotifyId": "7rVhtH0nrGdRHCe8YPV8eg",
    "decade": "1970s"
  },
  {
    "name": "Dancehall / Ragga, Classic",
    "location": "Kingston, Jamaica",
    "lat": 19.29510358558943,
    "lng": -77.7878304569937,
    "spotifyId": "0SD6QYL3tq0WSSBv9do5Pt",
    "decade": "1990s"
  },
  {
    "name": "Dinner Party Funk",
    "location": "Indianapolis, USA",
    "lat": 39.405586891449154,
    "lng": -86.67861814093949,
    "spotifyId": "4l73MmRDRCpAXGtxXF4LP1",
    "decade": "1970s"
  },
  {
    "name": "Drum & Bass, Dark",
    "location": "London, UK",
    "lat": 53.288334228698,
    "lng": -0.07774965869890091,
    "spotifyId": "6UeEinPneyvyvyHcHgOyUU",
    "decade": "1990s"
  },
  {
    "name": "Drum & Bass, Light",
    "location": "London, UK",
    "lat": 53.034616232287334,
    "lng": -2.0009878202784512,
    "spotifyId": "6RGN43GlQ54FPFuKBiZBaP",
    "decade": "1990s"
  },
  {
    "name": "Drum & Bass, Liquid",
    "location": "London, UK",
    "lat": 53.49783087430678,
    "lng": -1.5382343303078267,
    "spotifyId": "1r047aOhZGll7o17tpDUWA",
    "decade": "2000s"
  },
  {
    "name": "Dub",
    "location": "Kingston, Jamaica",
    "lat": 19.87364722452579,
    "lng": -77.89214237713574,
    "spotifyId": "21udxWtqkYOyGAjgq631tb",
    "decade": "1970s"
  },
  {
    "name": "Dub Techno For The Isolation Tank",
    "location": "Kingston, Jamaica",
    "lat": 16.785935577605834,
    "lng": -76.51210544879906,
    "spotifyId": "3UDr6AU96BygUUtE3CYumt",
    "decade": "2000s"
  },
  {
    "name": "Durutti Column",
    "location": "Manchester, UK",
    "lat": 53.113880932419825,
    "lng": -0.5496172246208517,
    "spotifyId": "1qd8iDGjMQbXWZInlaUjV4",
    "decade": "1980s"
  },
  {
    "name": "Dylan Henner",
    "location": "Montreal, Canada",
    "lat": 43.67251430219277,
    "lng": -72.2513690624736,
    "spotifyId": "2bw2rkrgs27KsDN8V2Vdc2",
    "decade": "2010s"
  },
  {
    "name": "Easy Listening",
    "location": "Los Angeles, USA",
    "lat": 32.252604081534926,
    "lng": -117.59715008682534,
    "spotifyId": "7mnOW7OjzJ3VhwoOLfuOPf",
    "decade": "1960s"
  },
  {
    "name": "Electronic, Abandoned Cities",
    "location": "Berlin, Germany",
    "lat": 53.27217680180144,
    "lng": 12.656812594702835,
    "spotifyId": "5AoZhGIFYyhzfJcOV6hKO3",
    "decade": "2000s"
  },
  {
    "name": "Electronic, Downtempo",
    "location": "London, UK",
    "lat": 51.83021024090478,
    "lng": 0.1857180192062244,
    "spotifyId": "14tVly3NHzR2xGsyAqnQD7",
    "decade": "2000s"
  },
  {
    "name": "Electronic, Experimental Chill",
    "location": "Frankfurt, Germany",
    "lat": 50.1109,
    "lng": 8.9821,
    "spotifyId": "2kHGKcLMa08TuhKhYIOor4",
    "decade": "2000s"
  },
  {
    "name": "Electronic, Goth Experiments",
    "location": "Berlin, Germany",
    "lat": 51.878585516212546,
    "lng": 14.147398913319485,
    "spotifyId": "17MvGxEie2iID1JnlWaH19",
    "decade": "1980s"
  },
  {
    "name": "Electronic, Imaginary Jungles",
    "location": "Amazon Rainforest",
    "lat": -3.4653,
    "lng": -61.9159,
    "spotifyId": "7ofatheLbWhDDx1WQ0gM2E",
    "decade": "2000s"
  },
  {
    "name": "Electronic, Industrial Digital Noise Pop",
    "location": "Los Angeles, USA",
    "lat": 35.495209779271526,
    "lng": -116.25077960926994,
    "spotifyId": "3Emcn9mreARZ6PpXCNK8Gt",
    "decade": "1990s"
  },
  {
    "name": "Electronic, Melancholic Breakbeats",
    "location": "London, UK",
    "lat": 52.1071441618249,
    "lng": -0.1453197133807733,
    "spotifyId": "0ugIbsmXT7xQCF24WvqXTP",
    "decade": "2000s"
  },
  {
    "name": "Electronic, Skittering Beats And Moody Synths",
    "location": "Berlin, Germany",
    "lat": 50.70951482338387,
    "lng": 11.517662383393525,
    "spotifyId": "5c97WzcOSqn7YL746H58mF",
    "decade": "2000s"
  },
  {
    "name": "Electronic, Unpredictable Rhythms",
    "location": "Berlin, Germany",
    "lat": 53.51103770493782,
    "lng": 15.319898520023473,
    "spotifyId": "190cu5KJIW9msJH4L28Om6",
    "decade": "2000s"
  },
  {
    "name": "Electronic, Wonky House And Techno",
    "location": "Detroit, USA",
    "lat": 41.995412520803896,
    "lng": -83.42065791567794,
    "spotifyId": "4PLGnyHkSj05PkvsxmcMvM",
    "decade": "2010s"
  },
  {
    "name": "Electronica, Light",
    "location": "London, UK",
    "lat": 52.01399738541336,
    "lng": -0.6808452866559344,
    "spotifyId": "2drGk1NoK2uliqh0j3KEIS",
    "decade": "2000s"
  },
  {
    "name": "Elvis, Rockin'",
    "location": "Memphis, USA",
    "lat": 35.1495,
    "lng": -89.74900000000001,
    "spotifyId": "324FB8PjZlIPTo1iE3goGS",
    "decade": "1950s"
  },
  {
    "name": "Elvis, Melancholy",
    "location": "Memphis, USA",
    "lat": 34.00030432056928,
    "lng": -89.5367235515605,
    "spotifyId": "7lvkGgbhbzHwWuhP4eUkZd",
    "decade": "1960s"
  },
  {
    "name": "Ennio Morricone",
    "location": "Rome, Italy",
    "lat": 43.792351845063166,
    "lng": 14.21177385496625,
    "spotifyId": "2xdrmYvF619UlN3ycp3bNt",
    "decade": "1960s"
  },
  {
    "name": "Envy",
    "location": "Tokyo, Japan",
    "lat": 35.21135790291414,
    "lng": 138.93952932788798,
    "spotifyId": "5UwJ6VzCES8mC1KtAWjwQA",
    "decade": "2000s"
  },
  {
    "name": "Enya",
    "location": "Donegal, Ireland",
    "lat": 53.14678729644124,
    "lng": -6.809987786471843,
    "spotifyId": "5ZnCWOyyceYfzFPTlQTtt5",
    "decade": "1990s"
  },
  {
    "name": "Experimental, Ancient",
    "location": "Jericho",
    "lat": 32.18391024090479,
    "lng": 35.773218019206226,
    "spotifyId": "3VvmF9WRJDFtSOswhMhd0u",
    "decade": "1970s"
  },
  {
    "name": "Experimental, Celestial Digital Pop",
    "location": "Los Angeles, USA",
    "lat": 33.54310968323806,
    "lng": -118.73916817530453,
    "spotifyId": "5wlP2D6o6MtR3ym9wzBpvU",
    "decade": "2010s"
  },
  {
    "name": "Experimental, Durational Dissonance",
    "location": "New York, USA",
    "lat": 41.21211603825813,
    "lng": -75.36578515580209,
    "spotifyId": "5L1uBkB1Qun4adzwC3hyw0",
    "decade": "2000s"
  },
  {
    "name": "Experimental, Dying Cities",
    "location": "New York, USA",
    "lat": 42.02794376988729,
    "lng": -74.99669083427513,
    "spotifyId": "0mHgCb5Y5X2jj97bshAZ2O",
    "decade": "2000s"
  },
  {
    "name": "Experimental, Guitar Glitch Ambient",
    "location": "Cologne, Germany",
    "lat": 51.5372441618249,
    "lng": 6.942780286619227,
    "spotifyId": "6SkxYE5NBMEXwEdRyF0u5F",
    "decade": "2000s"
  },
  {
    "name": "Experimental, Guitar Haze",
    "location": "New York, USA",
    "lat": 41.95535427299862,
    "lng": -72.96290881197159,
    "spotifyId": "6XMAIFQLPBMpycUI7urUrl",
    "decade": "2000s"
  },
  {
    "name": "Fennesz",
    "location": "Vienna, Austria",
    "lat": 49.334802063641106,
    "lng": 15.59309467621407,
    "spotifyId": "5J3Gkm8Z0MN0jGxlcrgdoq",
    "decade": "2000s"
  },
  {
    "name": "Fennesz, Starter Pack",
    "location": "Vienna, Austria",
    "lat": 50.08098148864581,
    "lng": 17.745407985547438,
    "spotifyId": "6v5qQ9Uk0meKPbgy08ZUSe",
    "decade": "2000s"
  },
  {
    "name": "Flamenco",
    "location": "Seville, Spain",
    "lat": 38.754554657820066,
    "lng": -5.765159886758363,
    "spotifyId": "3B5mUKzMnB6dmbjByHTevx",
    "decade": "1970s"
  },
  {
    "name": "Flamenco, Bulerías",
    "location": "Seville, Spain",
    "lat": 38.1129421276666,
    "lng": -4.498909066576347,
    "spotifyId": "2KCZR6Lj2arKEtr0LtGC2v",
    "decade": "1970s"
  },
  {
    "name": "Flamenco, Guitar",
    "location": "Seville, Spain",
    "lat": 35.92722757728201,
    "lng": -6.78645727607132,
    "spotifyId": "3p71pRZMixpIo4cOVAGWHg",
    "decade": "1970s"
  },
  {
    "name": "Flanger",
    "location": "Cologne, Germany",
    "lat": 51.444097385413365,
    "lng": 6.407254713344066,
    "spotifyId": "3ae9hVmttiHPHxXRjsJpXH",
    "decade": "2000s"
  },
  {
    "name": "France, Vintage Pop",
    "location": "Paris, France",
    "lat": 50.67874813139981,
    "lng": 2.4323405043848334,
    "spotifyId": "2yaViv3Jmrh40tOwc7DXQz",
    "decade": "1960s"
  },
  {
    "name": "France, Vintage Mellow",
    "location": "Paris, France",
    "lat": 50.1075477766046,
    "lng": 3.0920223773895916,
    "spotifyId": "3CiekaZIGQmJyHus4bQ2ta",
    "decade": "1960s"
  },
  {
    "name": "Frank Zappa, Chill",
    "location": "Los Angeles, USA",
    "lat": 34.88483101079014,
    "lng": -117.40657008018549,
    "spotifyId": "52lkyYKaYr641xjWZfVoEY",
    "decade": "1970s"
  },
  {
    "name": "Frank Zappa, Doo Wop",
    "location": "Los Angeles, USA",
    "lat": 35.587445363798345,
    "lng": -118.28545273607521,
    "spotifyId": "61zeKfQ3ijwLglhbwrybEG",
    "decade": "1960s"
  },
  {
    "name": "Frank Zappa, Guitar",
    "location": "Los Angeles, USA",
    "lat": 34.80967641810927,
    "lng": -117.42077706706141,
    "spotifyId": "3xXvYq8t8kfcwEV8ktQMpS",
    "decade": "1970s"
  },
  {
    "name": "Frank Zappa, Psychedelic Pop",
    "location": "Los Angeles, USA",
    "lat": 32.67689536656666,
    "lng": -117.12793903989908,
    "spotifyId": "3Wo4SCkRNL0gGfB8TXCIHN",
    "decade": "1960s"
  },
  {
    "name": "Fumio Miyashita",
    "location": "Tokyo, Japan",
    "lat": 33.94548565576433,
    "lng": 141.2655349432178,
    "spotifyId": "1UEPQwZNOQ9AGazYrG53vN",
    "decade": "1980s"
  },
  {
    "name": "Fumio Miyashita, Ambient",
    "location": "London, UK",
    "lat": 51.879448082907956,
    "lng": 0.9208587056848773,
    "spotifyId": "4z13KHa9XXWtM7WvuowxmR",
    "decade": "1980s"
  },
  {
    "name": "Fumio Miyashita, Oddballs",
    "location": "Tokyo, Japan",
    "lat": 35.50648656606518,
    "lng": 141.10416286675144,
    "spotifyId": "6bL8QQmsqpB9TER65zLiEv",
    "decade": "1980s"
  },
  {
    "name": "Worldwide, Funk",
    "location": "Indianapolis, USA",
    "lat": 40.060636914124565,
    "lng": -85.63241519979084,
    "spotifyId": "4KBVVENkjPTtYAfGBuzYTA",
    "decade": "1970s"
  },
  {
    "name": "Gqom, Club",
    "location": "Durban, South Africa",
    "lat": -31.202794703129932,
    "lng": 29.24537298074197,
    "spotifyId": "2TJp9jSy5LgUCvsXVGp0Lf",
    "decade": "2010s"
  },
  {
    "name": "Gqom, Pop",
    "location": "Durban, South Africa",
    "lat": -30.335869381896533,
    "lng": 31.010688771162467,
    "spotifyId": "23xAyUghMaGL37g1cY6EcC",
    "decade": "2010s"
  },
  {
    "name": "Gqom, Sgubhu",
    "location": "Durban, South Africa",
    "lat": -31.74928442181432,
    "lng": 32.52188706800915,
    "spotifyId": "29KTqtOetJjYWtq9Sx43uN",
    "decade": "2010s"
  },
  {
    "name": "Gqom, Sgubhu Pop",
    "location": "Durban, South Africa",
    "lat": -30.301958515325744,
    "lng": 30.9940976639938,
    "spotifyId": "6hjHs1OP9N81cjBWaloK2U",
    "decade": "2010s"
  },
  {
    "name": "Gqom, Starter Pack",
    "location": "Durban, South Africa",
    "lat": -31.19135818808251,
    "lng": 29.959778462376832,
    "spotifyId": "3O4xMBJh0FzRB9VQzhlrHT",
    "decade": "2010s"
  },
  {
    "name": "Grouper",
    "location": "Portland, USA",
    "lat": 43.5698079088005,
    "lng": -124.5818613495111,
    "spotifyId": "2SHxGmuZ2HujiioJaD27FO",
    "decade": "2010s"
  },
  {
    "name": "Haunted Ballroom, Happy",
    "location": "London, UK",
    "lat": 50.114079028837466,
    "lng": 1.3875964758080108,
    "spotifyId": "4qYg98RGnv7dgvPI1nUMS0",
    "decade": "1940s"
  },
  {
    "name": "Haunted Ballroom, Sad",
    "location": "London, UK",
    "lat": 49.6475151695196,
    "lng": 0.6220027234638744,
    "spotifyId": "4t40RSBwcNxMqJydp1uAey",
    "decade": "1940s"
  },
  {
    "name": "Hip-Hop, 1985-1992",
    "location": "New York, USA",
    "lat": 41.81500402759798,
    "lng": -73.53783176275329,
    "spotifyId": "45ef5ZFbUS1A9xbdN1z0UI",
    "decade": "1980s"
  },
  {
    "name": "Hip-Hop, 90s / 00s Lyricists",
    "location": "New York, USA",
    "lat": 41.557942329883616,
    "lng": -72.95948410102679,
    "spotifyId": "6GEueaSM77AsYCxWyzwPMu",
    "decade": "1990s"
  },
  {
    "name": "Hip-Hop, Dusty",
    "location": "New York, USA",
    "lat": 42.23415447727936,
    "lng": -73.35128086659543,
    "spotifyId": "2ogFcAiym0RFZcCBeZjt15",
    "decade": "1990s"
  },
  {
    "name": "Hip-Hop, Hard Beats",
    "location": "New York, USA",
    "lat": 40.43709282755002,
    "lng": -75.69933704540608,
    "spotifyId": "7o2cxVKUaI9AZGWZRkL9tU",
    "decade": "1990s"
  },
  {
    "name": "Hip-Hop, Instrumentals",
    "location": "New York, USA",
    "lat": 39.597015007392685,
    "lng": -74.08496122006792,
    "spotifyId": "0ncTGb5nYCSgaOUkd1x712",
    "decade": "2000s"
  },
  {
    "name": "Hip-Hop, Melancholy",
    "location": "New York, USA",
    "lat": 40.69738301537902,
    "lng": -72.34475897595942,
    "spotifyId": "4t1W7mhETrnjU2Pf80xwrw",
    "decade": "1990s"
  },
  {
    "name": "Hip-Hop, Neo-Soul",
    "location": "New York, USA",
    "lat": 41.98956738219753,
    "lng": -73.54741776497818,
    "spotifyId": "6ytlQprNhQfq9ffoRfRQd8",
    "decade": "2000s"
  },
  {
    "name": "House, Ambient",
    "location": "London, UK",
    "lat": 51.454863270915176,
    "lng": -1.0262652982152778,
    "spotifyId": "6mgF0aptvQFOXqzhQUd5as",
    "decade": "1990s"
  },
  {
    "name": "House, Classic",
    "location": "Chicago, USA",
    "lat": 41.089436878861115,
    "lng": -89.00148358751447,
    "spotifyId": "4ajFPfYGS3qWNBqayn657a",
    "decade": "1980s"
  },
  {
    "name": "House, Melodic",
    "location": "Chicago, USA",
    "lat": 40.55474590290785,
    "lng": -89.0435424696436,
    "spotifyId": "29wlJpS2YVtkhrfZhVJnS6",
    "decade": "2000s"
  },
  {
    "name": "House, Deep",
    "location": "Chicago, USA",
    "lat": 42.68685336572032,
    "lng": -87.29615321990498,
    "spotifyId": "6TlFQBfaT09Wn2KQJwLS8Y",
    "decade": "1990s"
  },
  {
    "name": "House, Dusty",
    "location": "Chicago, USA",
    "lat": 41.64139867216614,
    "lng": -88.25139407566546,
    "spotifyId": "4mvVlZQtTUyjZrp861cA5E",
    "decade": "1990s"
  },
  {
    "name": "Ida",
    "location": "New York, USA",
    "lat": 39.23859452336538,
    "lng": -75.0532663540206,
    "spotifyId": "6NxExdlX7s1guOiOV113vS",
    "decade": "1990s"
  },
  {
    "name": "IDM, Sweet Melodic",
    "location": "Sheffield, UK",
    "lat": 52.22449292467577,
    "lng": -3.387444070435994,
    "spotifyId": "2xFyXwFri0tdL8nxpgOC9q",
    "decade": "1990s"
  },
  {
    "name": "Italo, Classic",
    "location": "Milan, Italy",
    "lat": 47.38872468649877,
    "lng": 11.138044782140144,
    "spotifyId": "5glbvGn5xSIdz9YrJOGsB8",
    "decade": "1980s"
  },
  {
    "name": "Jamaica, Laidback Reggae",
    "location": "Kingston, Jamaica",
    "lat": 17.035009430159732,
    "lng": -76.23126445088883,
    "spotifyId": "0xZOcwDqdlXIlPMJ9s1Hpn",
    "decade": "1970s"
  },
  {
    "name": "Jamaica, Lovers Rock",
    "location": "Kingston, Jamaica",
    "lat": 16.670821057430217,
    "lng": -78.34128278014411,
    "spotifyId": "2FpnkcZ4t7bk2U2ZOwBFo1",
    "decade": "1980s"
  },
  {
    "name": "Jamaica, Vintage Pop",
    "location": "Kingston, Jamaica",
    "lat": 16.32494303402232,
    "lng": -76.07780204967149,
    "spotifyId": "6qvYFMl5Oi20xDwp3NI2m1",
    "decade": "1960s"
  },
  {
    "name": "Jazz, Cool",
    "location": "New Orleans, USA",
    "lat": 29.464596702732745,
    "lng": -89.52246823956078,
    "spotifyId": "6JamVsgQovLlEJpeRSZNm0",
    "decade": "1950s"
  },
  {
    "name": "Jazz, Funk",
    "location": "New Orleans, USA",
    "lat": 31.632683479752785,
    "lng": -91.54930350997502,
    "spotifyId": "0HxkDTZ7Rn6MPc1cxW5Ebo",
    "decade": "1970s"
  },
  {
    "name": "Joel Vandroogenbroeck",
    "location": "Brussels, Belgium",
    "lat": 50.5124404848645,
    "lng": 3.5438900327921283,
    "spotifyId": "1BMah5LPTWE3neS65MAPuw",
    "decade": "1970s"
  },
  {
    "name": "Juan Atkins",
    "location": "Detroit, USA",
    "lat": 43.0840290827033,
    "lng": -84.9652235926292,
    "spotifyId": "7Ga6hmUrgNYSTjv9QB0AkN",
    "decade": "1980s"
  },
  {
    "name": "Kaitlyn Aurelia Smith",
    "location": "Seattle, USA",
    "lat": 47.63239657792332,
    "lng": -121.0291976145849,
    "spotifyId": "0KgOIkKdusJaNacdLIiTLq",
    "decade": "2010s"
  },
  {
    "name": "Kizomba",
    "location": "Luanda, Angola",
    "lat": -8.485245113717951,
    "lng": 15.02187655319519,
    "spotifyId": "4GaYoCJDi3Qhe98OpfbjSB",
    "decade": "1980s"
  },
  {
    "name": "Kosmische, Experimental",
    "location": "Düsseldorf, Germany",
    "lat": 51.42527221061602,
    "lng": 8.378725810736235,
    "spotifyId": "29JLxwF7qgz9U728ItoXDq",
    "decade": "1970s"
  },
  {
    "name": "Kosmische, Hard",
    "location": "Düsseldorf, Germany",
    "lat": 52.167344735729145,
    "lng": 5.850227923865064,
    "spotifyId": "5N38RVZ9Gb5QGBitpKkQFo",
    "decade": "1970s"
  },
  {
    "name": "Kosmische, Soft",
    "location": "Düsseldorf, Germany",
    "lat": 51.62612814525477,
    "lng": 6.372932341373909,
    "spotifyId": "5t5TERlOsq8FCNCmTWruAd",
    "decade": "1970s"
  },
  {
    "name": "Krautrock, Jams",
    "location": "Düsseldorf, Germany",
    "lat": 52.50467619536242,
    "lng": 6.586903017662137,
    "spotifyId": "6dIDWTQUSAhtXRI5yaQDIk",
    "decade": "1970s"
  },
  {
    "name": "Kuduro, Contemporary",
    "location": "Luanda, Angola",
    "lat": -8.389137889586681,
    "lng": 13.63263572591277,
    "spotifyId": "1JzVHpTufezNSitui6Ffy9",
    "decade": "2010s"
  },
  {
    "name": "Kuduro, Contemporary Riddims",
    "location": "Luanda, Angola",
    "lat": -9.828918571720846,
    "lng": 13.351278842585614,
    "spotifyId": "2p1KJJdxxHv0dCYAyeCTnq",
    "decade": "2010s"
  },
  {
    "name": "Kuduro, Vintage",
    "location": "Luanda, Angola",
    "lat": -8.745677591320625,
    "lng": 12.050071240539335,
    "spotifyId": "6aIvMUe2j5VhKg3xwyBvwk",
    "decade": "2000s"
  },
  {
    "name": "Kuduro, Vintage Riddims",
    "location": "Luanda, Angola",
    "lat": -9.96190165302638,
    "lng": 12.831001855578219,
    "spotifyId": "7sDbuu4ieGAH7UBsYHKP1m",
    "decade": "2000s"
  },
  {
    "name": "Kwaito, Old School MCs",
    "location": "Johannesburg, South Africa",
    "lat": -25.806075552832837,
    "lng": 29.067401656391628,
    "spotifyId": "0fKO5OJH3s9Q22I2jZugHj",
    "decade": "1990s"
  },
  {
    "name": "Kwaito, Swinging Beats",
    "location": "Johannesburg, South Africa",
    "lat": -25.828429685737724,
    "lng": 27.31811204967872,
    "spotifyId": "0k2zxQo8Edl0CETWtWc55A",
    "decade": "1990s"
  },
  {
    "name": "Kwaito, Vintage Chill",
    "location": "Johannesburg, South Africa",
    "lat": -26.608736056598453,
    "lng": 29.492247680840958,
    "spotifyId": "7J6zWe0hmH2nLTJIkOp8my",
    "decade": "1990s"
  },
  {
    "name": "Latin, Classic",
    "location": "Mexico City, Mexico",
    "lat": 19.249070053288015,
    "lng": -97.18585220142602,
    "spotifyId": "5EeajVJruvEUJVMZpN46CV",
    "decade": "1960s"
  },
  {
    "name": "Latin, Melancholic Electronic",
    "location": "Mexico City, Mexico",
    "lat": 19.64996193641361,
    "lng": -101.07846174145749,
    "spotifyId": "2WnZsaSgobROLPhOchSJHd",
    "decade": "2010s"
  },
  {
    "name": "Lounge, Chill",
    "location": "Las Vegas, USA",
    "lat": 36.237000066943104,
    "lng": -113.65149808107353,
    "spotifyId": "4HghV31aYNXfJ4Trya75LO",
    "decade": "1960s"
  },
  {
    "name": "Lounge, Kicking",
    "location": "Las Vegas, USA",
    "lat": 36.11475337929925,
    "lng": -115.9291414827772,
    "spotifyId": "1ptQmt2hZgvdOxQEwcHyr6",
    "decade": "1960s"
  },
  {
    "name": "Low",
    "location": "Duluth, USA",
    "lat": 46.90386781274761,
    "lng": -90.89047658293782,
    "spotifyId": "0udTXhkUWAdtzrOiEJiz39",
    "decade": "1990s"
  },
  {
    "name": "Low, Experimental",
    "location": "Duluth, USA",
    "lat": 45.667893850974934,
    "lng": -93.10921906728468,
    "spotifyId": "3sjgWUk3ERcgJ8MB6MQbKk",
    "decade": "2000s"
  },
  {
    "name": "Low, Heartbreakers",
    "location": "Duluth, USA",
    "lat": 45.74407134352244,
    "lng": -92.87542795079062,
    "spotifyId": "6LIC0W2ofmB70zF6sdCFpN",
    "decade": "1990s"
  },
  {
    "name": "Low, Starter Pack",
    "location": "Duluth, USA",
    "lat": 45.47201672841362,
    "lng": -91.52731801117852,
    "spotifyId": "7E7C6yWwLIH94UD04IgxMp",
    "decade": "1990s"
  },
  {
    "name": "Mbaqanga",
    "location": "Johannesburg, South Africa",
    "lat": -24.71390076161744,
    "lng": 29.194580072075645,
    "spotifyId": "0hAxNZJSIZm7HXuXHb27Oc",
    "decade": "1960s"
  },
  {
    "name": "Minimal, Dark, And Cold Wave",
    "location": "Berlin, Germany",
    "lat": 54.32299324791359,
    "lng": 13.408846038527026,
    "spotifyId": "1gqMzx9sBjxqV7KZdklX6D",
    "decade": "1980s"
  },
  {
    "name": "Minimalism",
    "location": "New York, USA",
    "lat": 40.7128,
    "lng": -73.706,
    "spotifyId": "4gWPyGP3YQ0pEwvjGrppui",
    "decade": "1970s"
  },
  {
    "name": "Motorik, Driving",
    "location": "Düsseldorf, Germany",
    "lat": 49.87318661431655,
    "lng": 8.054190694439761,
    "spotifyId": "0i1OLsMet1wIinprJ1RwpU",
    "decade": "1970s"
  },
  {
    "name": "Motorik, Experimental",
    "location": "Düsseldorf, Germany",
    "lat": 49.85991493514154,
    "lng": 8.226341828546389,
    "spotifyId": "5zevzkyYsElZjgXshRRk7X",
    "decade": "1970s"
  },
  {
    "name": "Motorik, Heavy",
    "location": "Düsseldorf, Germany",
    "lat": 50.63298234371751,
    "lng": 7.0433007008244095,
    "spotifyId": "2fdrBObWM9Z3zwc0fvED1K",
    "decade": "1970s"
  },
  {
    "name": "Motorik, Kosmische",
    "location": "Düsseldorf, Germany",
    "lat": 52.68940095581809,
    "lng": 5.73376298726965,
    "spotifyId": "23rnPLrs43FaApw9iEKcKI",
    "decade": "1970s"
  },
  {
    "name": "Motorik, Pop",
    "location": "Düsseldorf, Germany",
    "lat": 49.5254080120883,
    "lng": 4.896616093865133,
    "spotifyId": "4CISczSdnqptCJwJMLmX44",
    "decade": "1970s"
  },
  {
    "name": "New Age",
    "location": "Los Angeles, USA",
    "lat": 32.64534689245785,
    "lng": -117.12914755193292,
    "spotifyId": "34VDXlkPoDtWY4HJiUSS0S",
    "decade": "1980s"
  },
  {
    "name": "Pacific Island, Chill",
    "location": "Suva, Fiji",
    "lat": -18.76143591505034,
    "lng": 178.38438148976257,
    "spotifyId": "2QTLDWD5tkHyT8NoBL6vc1",
    "decade": "1970s"
  },
  {
    "name": "Pedro The Lion",
    "location": "Seattle, USA",
    "lat": 49.32867613711162,
    "lng": -123.23916670331516,
    "spotifyId": "3KyFoSqEO5wfH1caFk0wcQ",
    "decade": "2000s"
  },
  {
    "name": "Pete Namlook, Beatless",
    "location": "Frankfurt, Germany",
    "lat": 51.06239807476717,
    "lng": 8.144831191036076,
    "spotifyId": "0i8MbevtK0NobhOG6Pl6M2",
    "decade": "1990s"
  },
  {
    "name": "Pete Namlook, Beats",
    "location": "Frankfurt, Germany",
    "lat": 51.997134808250095,
    "lng": 8.837958123418272,
    "spotifyId": "6e7ichVtHQy7lrCYZmL91D",
    "decade": "1990s"
  },
  {
    "name": "Pete Namlook, Starter Pack",
    "location": "Frankfurt, Germany",
    "lat": 49.791035776804684,
    "lng": 8.148581565762711,
    "spotifyId": "69S7ZCU4vIxl79SkQsunNr",
    "decade": "1990s"
  },
  {
    "name": "Piano Magic",
    "location": "London, UK",
    "lat": 50.55307692558181,
    "lng": -1.8241710554979342,
    "spotifyId": "6kk2eEo7frhsy1M3JJYAtr",
    "decade": "2000s"
  },
  {
    "name": "Piano Magic, Starter Pack",
    "location": "London, UK",
    "lat": 49.65448773962947,
    "lng": 0.7285083052469817,
    "spotifyId": "1Rw3Poaf3tKq3CpL9JDhj4",
    "decade": "2000s"
  },
  {
    "name": "Piero Umiliani",
    "location": "Rome, Italy",
    "lat": 41.43833670250607,
    "lng": 12.484298192733437,
    "spotifyId": "1WimpreVw6J5FncbYTnEQL",
    "decade": "1960s"
  },
  {
    "name": "Plaid",
    "location": "London, UK",
    "lat": 49.90561005615369,
    "lng": 0.21718450219659827,
    "spotifyId": "7cixJXs6wfbIB9Bq5mWUDU",
    "decade": "1990s"
  },
  {
    "name": "Pop, Widescreen",
    "location": "Los Angeles, USA",
    "lat": 35.641929031243414,
    "lng": -119.17564760393162,
    "spotifyId": "3vWeZg8Wc05IcM997IjZTR",
    "decade": "1990s"
  },
  {
    "name": "Popol Vuh",
    "location": "Munich, Germany",
    "lat": 46.73808134284339,
    "lng": 12.312086707424891,
    "spotifyId": "0122aW4M9yQf5jURVCqKxg",
    "decade": "1970s"
  },
  {
    "name": "Post-Hardcore",
    "location": "Washington DC, USA",
    "lat": 37.84842920199788,
    "lng": -77.9411230459902,
    "spotifyId": "0EBrHLUMkJ7KDT0mB3SHHp",
    "decade": "1990s"
  },
  {
    "name": "Post-Rock , Abstract & Experimental",
    "location": "London, UK",
    "lat": 53.40432855529821,
    "lng": -0.40262422965537803,
    "spotifyId": "7t6BWfX2yATUESHBjjT8GL",
    "decade": "1990s"
  },
  {
    "name": "Post-Rock, Chiming Guitars",
    "location": "Louisville, USA",
    "lat": 38.2527,
    "lng": -85.4585,
    "spotifyId": "4INhC3FsHQjrSkT32DQ3O1",
    "decade": "1990s"
  },
  {
    "name": "Post-Rock, Crescendo-Core",
    "location": "Glasgow, Scotland",
    "lat": 55.8642,
    "lng": -3.9518000000000004,
    "spotifyId": "1CW3BeW1dhuoeYQmpJxTlb",
    "decade": "2000s"
  },
  {
    "name": "Post-Rock, Floating",
    "location": "London, UK",
    "lat": 52.519311400250416,
    "lng": 1.3947332360675684,
    "spotifyId": "5qskBZ5AtoFhxuSlHfzPu9",
    "decade": "2000s"
  },
  {
    "name": "Post-Rock, Hushed",
    "location": "London, UK",
    "lat": 49.755964806493374,
    "lng": -0.7957083186183634,
    "spotifyId": "7IBdDhAQhkQf7yb4FD5uG7",
    "decade": "2000s"
  },
  {
    "name": "Post-Rock, Menacing",
    "location": "London, UK",
    "lat": 51.76375423278959,
    "lng": -0.9547355031954637,
    "spotifyId": "7nMMHEndjoyS1pRUUUFdsb",
    "decade": "2000s"
  },
  {
    "name": "R&B, 80s Dance",
    "location": "Detroit, USA",
    "lat": 40.70366190540357,
    "lng": -81.28414291753481,
    "spotifyId": "4JNaiwn6gILzPhBZuY6XVT",
    "decade": "1980s"
  },
  {
    "name": "R&B, 80s Smooth",
    "location": "Detroit, USA",
    "lat": 42.30372179593381,
    "lng": -83.5619267212536,
    "spotifyId": "0Y3tf9n3ZoeCPjcaOVUCK4",
    "decade": "1980s"
  },
  {
    "name": "R&B, 90s",
    "location": "Detroit, USA",
    "lat": 41.200922615183565,
    "lng": -82.74200610377083,
    "spotifyId": "0Ndfmhc9g1RZf3Vj3V0p2I",
    "decade": "1990s"
  },
  {
    "name": "R&B, 90s Smooth",
    "location": "Detroit, USA",
    "lat": 41.92200657230441,
    "lng": -81.93054979649534,
    "spotifyId": "1LWecnTljQAO3XzGF80mGX",
    "decade": "1990s"
  },
  {
    "name": "R&B, Early 90s Dance",
    "location": "Detroit, USA",
    "lat": 42.97217284127417,
    "lng": -84.85686119889922,
    "spotifyId": "1mZVsDWQWDp1TU5vxzmCUu",
    "decade": "1990s"
  },
  {
    "name": "R&B, Late 90s Dance",
    "location": "Detroit, USA",
    "lat": 42.17203807287521,
    "lng": -84.81458048649174,
    "spotifyId": "39eDp2FU6Ycl6L71U4x1kP",
    "decade": "1990s"
  },
  {
    "name": "R&B, 00s Smooth",
    "location": "Detroit, USA",
    "lat": 40.35032255659517,
    "lng": -81.67137180216446,
    "spotifyId": "103DjsnbAe66QM3TxarGOH",
    "decade": "2000s"
  },
  {
    "name": "R&B, 00s Dance",
    "location": "Detroit, USA",
    "lat": 43.56978906270271,
    "lng": -81.12009128226323,
    "spotifyId": "2EYWNrvf9YZ13CKnWmugMA",
    "decade": "2000s"
  },
  {
    "name": "R&B, 2020s Dance",
    "location": "Detroit, USA",
    "lat": 42.81814663035338,
    "lng": -82.97080310981559,
    "spotifyId": "1LERLunLhB8ZQgF3ac2uld",
    "decade": "2020s"
  },
  {
    "name": "R&B, Baby Makers",
    "location": "Detroit, USA",
    "lat": 43.483758446578236,
    "lng": -84.88827718919873,
    "spotifyId": "3V8pm5kg6Mtrn9ZG9BRjHC",
    "decade": "1990s"
  },
  {
    "name": "R&B, Contemporary Melancholy",
    "location": "Detroit, USA",
    "lat": 40.36982342203283,
    "lng": -81.89618148994498,
    "spotifyId": "4eAWxVJ0lFbdnJtH1zwPj1",
    "decade": "2010s"
  },
  {
    "name": "R&B, Disco/Funk",
    "location": "Indianapolis, USA",
    "lat": 39.75780310758811,
    "lng": -84.71134916105783,
    "spotifyId": "0nelOIguQDxjvlnjxsYUPk",
    "decade": "1970s"
  },
  {
    "name": "R&B, Insecure",
    "location": "Detroit, USA",
    "lat": 41.9640984385633,
    "lng": -82.01306443070118,
    "spotifyId": "1jR541cL9M86SENJLo8C5Z",
    "decade": "2010s"
  },
  {
    "name": "R&B, Neo-Soul",
    "location": "Detroit, USA",
    "lat": 43.450115967976885,
    "lng": -82.79564093473341,
    "spotifyId": "7kBpPxfVfDjabvWJTERN9m",
    "decade": "2000s"
  },
  {
    "name": "R&B, New Jack Swing",
    "location": "Detroit, USA",
    "lat": 42.1880417288812,
    "lng": -84.9211904830575,
    "spotifyId": "7iqiTMs0ioTzq8JborXxww",
    "decade": "1990s"
  },
  {
    "name": "R&B, Vintage Dreamy",
    "location": "Detroit, USA",
    "lat": 41.42997950992378,
    "lng": -83.23941391258056,
    "spotifyId": "2HrMsMr8MwvDzVksVLecU0",
    "decade": "1960s"
  },
  {
    "name": "Rock, Classic Rock Radio",
    "location": "Cincinnati, USA",
    "lat": 40.24368852613893,
    "lng": -86.09363137742022,
    "spotifyId": "2IPPTvXMybu0a7Kxpucyt6",
    "decade": "1970s"
  },
  {
    "name": "Rock, Early",
    "location": "Memphis, USA",
    "lat": 35.47231024090479,
    "lng": -89.73548198079378,
    "spotifyId": "4sU6xgGgzq1rvTwIr9pn2g",
    "decade": "1950s"
  },
  {
    "name": "Roedelius",
    "location": "Berlin, Germany",
    "lat": 54.34571773717683,
    "lng": 12.468990615618996,
    "spotifyId": "2TuogtPJDz41rGTuU65h7t",
    "decade": "1970s"
  },
  {
    "name": "Rock, 60s Beat",
    "location": "London, UK",
    "lat": 51.86639646249501,
    "lng": -1.5636396698154675,
    "spotifyId": "0HRVcXDzzd94E4QHti4PsF",
    "decade": "1960s"
  },
  {
    "name": "Sad Sierreño",
    "location": "Monterrey, Mexico",
    "lat": 24.263106417301913,
    "lng": -99.91676671401076,
    "spotifyId": "5NIKQD4Prb46y8q6abIZbr",
    "decade": "2010s"
  },
  {
    "name": "Sad Songs",
    "location": "London, UK",
    "lat": 52.409684154352355,
    "lng": 1.7779282689521094,
    "spotifyId": "55CZUkRj0yN2EjdgEcV6MK",
    "decade": "1990s"
  },
  {
    "name": "Sad Songs, Vintage",
    "location": "New York, USA",
    "lat": 41.594793756125675,
    "lng": -72.52518238540789,
    "spotifyId": "7uPA4n8Iczp12iCCaOSQEc",
    "decade": "1960s"
  },
  {
    "name": "Sadcore",
    "location": "Boston, USA",
    "lat": 42.319221279106955,
    "lng": -70.751729042561,
    "spotifyId": "6IVx23etgXXegE3RsxSGCG",
    "decade": "1990s"
  },
  {
    "name": "Schaffel Brutal",
    "location": "Cologne, Germany",
    "lat": 50.88496327091518,
    "lng": 6.061834701784722,
    "spotifyId": "5G5wz4LA2FTM6bFWlC5RYl",
    "decade": "2000s"
  },
  {
    "name": "Schaffel Dance",
    "location": "Cologne, Germany",
    "lat": 50.142857379926674,
    "lng": 6.2739741980932076,
    "spotifyId": "7jboEdkfT4WVRFsfkEB0PT",
    "decade": "2000s"
  },
  {
    "name": "Schaffel Pop",
    "location": "Cologne, Germany",
    "lat": 49.74210246939699,
    "lng": 7.065298780127337,
    "spotifyId": "31058wKDUlYfoDC2CaQbJO",
    "decade": "2000s"
  },
  {
    "name": "Sigur Ros",
    "location": "Reykjavik, Iceland",
    "lat": 64.17792470589775,
    "lng": -20.32760830887998,
    "spotifyId": "6QlB6lCFuciiXnqtFVCrSG",
    "decade": "2000s"
  },
  {
    "name": "Singeli",
    "location": "Dar es Salaam, Tanzania",
    "lat": -5.041538077116557,
    "lng": 40.59464720430114,
    "spotifyId": "4CuRoDiG1XkYAfyVbYudn2",
    "decade": "2010s"
  },
  {
    "name": "Ska, 1st Wave",
    "location": "Kingston, Jamaica",
    "lat": 16.81951517202227,
    "lng": -78.50871226311024,
    "spotifyId": "3pODeVmPFBJWIEHdqe2JOw",
    "decade": "1960s"
  },
  {
    "name": "Ska, 2nd Wave",
    "location": "Kingston, Jamaica",
    "lat": 19.098343127000852,
    "lng": -76.45667767412156,
    "spotifyId": "1d1uxdit0qouRB8HSSZkYK",
    "decade": "1980s"
  },
  {
    "name": "Ska, Punk",
    "location": "Orange County, USA",
    "lat": 33.7175,
    "lng": -117.53110000000001,
    "spotifyId": "7M2YkCrreZcCo1y2dAezji",
    "decade": "1990s"
  },
  {
    "name": "Ska, Revival",
    "location": "Kingston, Jamaica",
    "lat": 18.649288178586254,
    "lng": -77.60607720835243,
    "spotifyId": "6blmqbvsh35nfQsnaShov1",
    "decade": "1990s"
  },
  {
    "name": "Slowcore",
    "location": "Boston, USA",
    "lat": 42.80697620238975,
    "lng": -69.34886557433425,
    "spotifyId": "3SQMC9fmX7TDhisrrUPJYv",
    "decade": "1990s"
  },
  {
    "name": "Solo Guitar",
    "location": "Rural Arkansas, USA",
    "lat": 35.201,
    "lng": -91.5318,
    "spotifyId": "79BmpH4MjeMOXURUAKtkqP",
    "decade": "1970s"
  },
  {
    "name": "Soukous, Chill",
    "location": "Kinshasa, DRC",
    "lat": -2.666535329867294,
    "lng": 16.596795776688786,
    "spotifyId": "68lX5odNBw4ZUIf6lwuD0K",
    "decade": "1980s"
  },
  {
    "name": "Soukous, Dance",
    "location": "Kinshasa, DRC",
    "lat": -5.486419376709596,
    "lng": 16.999064256926427,
    "spotifyId": "3J41W0OJt9rZ7aXp0YxgVq",
    "decade": "1980s"
  },
  {
    "name": "South Africa, 80s Electronic",
    "location": "Lagos, Nigeria",
    "lat": 7.932743810363588,
    "lng": 3.859247066687777,
    "spotifyId": "5Xlen6tPKCFsZmLdIur3oc",
    "decade": "1980s"
  },
  {
    "name": "Stereolab",
    "location": "London, UK",
    "lat": 51.36039262785762,
    "lng": 1.6339578970869384,
    "spotifyId": "5NGjyh1cP001mb0Vj7eI2i",
    "decade": "1990s"
  },
  {
    "name": "Stereolab, Chill",
    "location": "London, UK",
    "lat": 49.55790302562427,
    "lng": 1.4094548431173208,
    "spotifyId": "01WFsmlAOEFrhvWv2wmlMQ",
    "decade": "1990s"
  },
  {
    "name": "Stereolab, Rocking",
    "location": "London, UK",
    "lat": 53.305096624562985,
    "lng": -1.8508811103502636,
    "spotifyId": "2BImwtu5N4w8ISUyEz02KY",
    "decade": "1990s"
  },
  {
    "name": "Stereolab, Starter Pack",
    "location": "London, UK",
    "lat": 49.891155196318714,
    "lng": 0.809067093229865,
    "spotifyId": "5wsUdlQfWxJgY0fs4EQlCp",
    "decade": "1990s"
  },
  {
    "name": "Stereolab, Trance",
    "location": "Frankfurt, Germany",
    "lat": 49.05991066976372,
    "lng": 7.306601050905755,
    "spotifyId": "0prgQ5apMfwDfibjmBSOQC",
    "decade": "1990s"
  },
  {
    "name": "STL",
    "location": "Frankfurt, Germany",
    "lat": 50.43371024090479,
    "lng": 8.995618019206225,
    "spotifyId": "6adaBoksgJLDOLG3EAXyFS",
    "decade": "2010s"
  },
  {
    "name": "Summer Patio Songs",
    "location": "Los Angeles, USA",
    "lat": 34.0522,
    "lng": -117.9437,
    "spotifyId": "6MTgMAQnjy5Mndnnkp7IqF",
    "decade": "2000s"
  },
  {
    "name": "Sunday Morning Songs",
    "location": "Los Angeles, USA",
    "lat": 33.82794045643081,
    "lng": -119.50621038700423,
    "spotifyId": "4mCw3o2IsXlrOSNBPcmeAP",
    "decade": "2000s"
  },
  {
    "name": "Synth, Cinematic Soundtracks",
    "location": "Düsseldorf, Germany",
    "lat": 49.7758202182708,
    "lng": 4.858011151300973,
    "spotifyId": "72OdLCCGcitJIa73G4mNzm",
    "decade": "1970s"
  },
  {
    "name": "Synth, Ecstatic Minimalist Experiments",
    "location": "Berlin, Germany",
    "lat": 50.817674278625354,
    "lng": 12.76964369521038,
    "spotifyId": "78ztWdz2a8IHzeE07OlhNG",
    "decade": "1970s"
  },
  {
    "name": "Synth, Foggy German Forest",
    "location": "Düsseldorf, Germany",
    "lat": 50.046699022602446,
    "lng": 6.1807781674095015,
    "spotifyId": "5r8IaxNi8opFwLoyCesOyo",
    "decade": "1970s"
  },
  {
    "name": "Synth, Modular Experiments",
    "location": "Los Angeles, USA",
    "lat": 34.375010240904786,
    "lng": -117.93018198079378,
    "spotifyId": "7KHbhmrCNBAfNV3RjtI2Z1",
    "decade": "1970s"
  },
  {
    "name": "Synth, Modular Heartstrings",
    "location": "Los Angeles, USA",
    "lat": 34.6519441618249,
    "lng": -118.26121971338078,
    "spotifyId": "3MeQb9w6DyBDUPsCSFm0AV",
    "decade": "1970s"
  },
  {
    "name": "Synth, Mysterious And Meandering",
    "location": "Düsseldorf, Germany",
    "lat": 50.28703629880997,
    "lng": 6.946379667340778,
    "spotifyId": "2f2vaWoVuRwFRe8TWyZMNf",
    "decade": "1970s"
  },
  {
    "name": "Synth, Pop 80s",
    "location": "London, UK",
    "lat": 50.71275737992667,
    "lng": -0.8141258019067926,
    "spotifyId": "1EYi0qpdz5Bjg4VKU72pgw",
    "decade": "1980s"
  },
  {
    "name": "Synth, Pop Dystopia",
    "location": "Los Angeles, USA",
    "lat": 33.90912905442064,
    "lng": -118.18729367604142,
    "spotifyId": "23kwbD9v5OwL5NttI5Wi7L",
    "decade": "1980s"
  },
  {
    "name": "Synth, Pop Melancholy",
    "location": "Los Angeles, USA",
    "lat": 32.98293835755447,
    "lng": -116.41409236969844,
    "spotifyId": "3fqFDtNtJD6c944JqR3BJk",
    "decade": "1980s"
  },
  {
    "name": "Synth, Pop Oddballs",
    "location": "Zurich, Switzerland",
    "lat": 47.3769,
    "lng": 8.841700000000001,
    "spotifyId": "6PX1l0rEh8qic58XWicjCW",
    "decade": "1980s"
  },
  {
    "name": "Tangerine Dream",
    "location": "Berlin, Germany",
    "lat": 52.289025194835,
    "lng": 12.726690110474667,
    "spotifyId": "52u7Symo7F5rSXMiZYZQM0",
    "decade": "1970s"
  },
  {
    "name": "Tangerine Dream, Starter Pack",
    "location": "Berlin, Germany",
    "lat": 51.12410166351857,
    "lng": 12.015138098154084,
    "spotifyId": "01xadoQPTcurDz1D0N0gaS",
    "decade": "1970s"
  },
  {
    "name": "Techno, Ambient",
    "location": "London, UK",
    "lat": 50.31200246939699,
    "lng": -0.022801219872663273,
    "spotifyId": "14gNQFofbgehKbjuGRDjYF",
    "decade": "1990s"
  },
  {
    "name": "Techno, Banging",
    "location": "Detroit, USA",
    "lat": 43.45833630360277,
    "lng": -84.29497251660331,
    "spotifyId": "51CCISbMvqoCtPGBtzBu4z",
    "decade": "1990s"
  },
  {
    "name": "Techno, Classic",
    "location": "Detroit, USA",
    "lat": 43.68598382710782,
    "lng": -82.65180829209336,
    "spotifyId": "5FWVC2i6UmcRnNIpglIPza",
    "decade": "1980s"
  },
  {
    "name": "Techno, Underwater",
    "location": "Detroit, USA",
    "lat": 44.229190295915295,
    "lng": -81.41379310112336,
    "spotifyId": "35T8R9tnyLaWoUxsvbFUso",
    "decade": "1990s"
  },
  {
    "name": "Techno, Warehouse",
    "location": "Detroit, USA",
    "lat": 42.09406926858949,
    "lng": -84.66590025805408,
    "spotifyId": "4udXDYPVQkrNtO3kFnNTf8",
    "decade": "1990s"
  },
  {
    "name": "Trance, Ambient",
    "location": "Frankfurt, Germany",
    "lat": 51.66092906112567,
    "lng": 6.983224051490043,
    "spotifyId": "50XdE7dVALQlWqWUsP9DFB",
    "decade": "1990s"
  },
  {
    "name": "Trance, Experimental",
    "location": "London, UK",
    "lat": 50.65519003887236,
    "lng": 0.9192139359888377,
    "spotifyId": "6hbscYG3B064ISp7YG7xQN",
    "decade": "1990s"
  },
  {
    "name": "Tuareg",
    "location": "Agadez, Niger",
    "lat": 16.469033669074186,
    "lng": 9.942179021854145,
    "spotifyId": "4o0c8W5Id10GtkYk3oy3kT",
    "decade": "2000s"
  },
  {
    "name": "Turkey, Psych Funk",
    "location": "Istanbul, Turkey",
    "lat": 41.709214069914054,
    "lng": 27.769580793557772,
    "spotifyId": "5KbaR8a7zeviUEcXaRhdeY",
    "decade": "1970s"
  },
  {
    "name": "Vintage, Dreamy Melancholy",
    "location": "New York, USA",
    "lat": 39.46854621210185,
    "lng": -75.02353986606353,
    "spotifyId": "7KWwgSvlc6BD9wNJu42jBJ",
    "decade": "1960s"
  },
  {
    "name": "Vocal Groups, Sad",
    "location": "New York, USA",
    "lat": 41.47394260783689,
    "lng": -72.70337130956365,
    "spotifyId": "6QGMgg9EajTWLqnU4oudMB",
    "decade": "1950s"
  },
  {
    "name": "Xitsonga / Shangaan Electro / Tsonga",
    "location": "Limpopo, South Africa",
    "lat": -25.30102573043962,
    "lng": 29.827689218358326,
    "spotifyId": "18LxXda7N8s9t6zd3BUL8q",
    "decade": "2010s"
  },
  {
    "name": "Xitsonga / Shangaan Electro / Tsonga  Starter Pack",
    "location": "Limpopo, South Africa",
    "lat": -23.857119933670795,
    "lng": 27.84386957477796,
    "spotifyId": "53OY7nCXvUT4FTsufqPMm4",
    "decade": "2010s"
  },
  {
    "name": "Yet They Say, Vol. 10",
    "location": "Cincinnati, USA",
    "lat": 38.73701375943174,
    "lng": -86.57984449716767,
    "spotifyId": "3C3HHuZvOnCfhajCGvRL8F",
    "decade": "2000s"
  },
  {
    "name": "Yet They Say, Vol. 2",
    "location": "Cincinnati, USA",
    "lat": 37.240490444557274,
    "lng": -85.77421457921126,
    "spotifyId": "6AerysrLyESVjtAPpok7NY",
    "decade": "2000s"
  },
  {
    "name": "Yet They Say, Vol. 3",
    "location": "Cincinnati, USA",
    "lat": 36.75307345003684,
    "lng": -84.024788326835,
    "spotifyId": "3X8frQ1tWM5SSmGhns0pYb",
    "decade": "2000s"
  },
  {
    "name": "Yet They Say, Vol. 4",
    "location": "Cincinnati, USA",
    "lat": 37.73483905909889,
    "lng": -82.36017240523215,
    "spotifyId": "0jmp8wWpPIkGWg5nm4LNwe",
    "decade": "2000s"
  },
  {
    "name": "Yet They Say, Vol. 5",
    "location": "Cincinnati, USA",
    "lat": 39.72817652777415,
    "lng": -81.88535207261693,
    "spotifyId": "0M6rPpreVz86WKq0Ag6kFO",
    "decade": "2000s"
  },
  {
    "name": "Yet They Say, Vol. 6",
    "location": "Cincinnati, USA",
    "lat": 41.551711172341015,
    "lng": -83.05364362150853,
    "spotifyId": "21MO7VSPe24bjCOtdt2wrg",
    "decade": "2000s"
  },
  {
    "name": "Yet They Say, Vol. 7",
    "location": "Cincinnati, USA",
    "lat": 42.00007332964783,
    "lng": -85.29145206864126,
    "spotifyId": "3DDwCdkwUPEcDQbdwGmjVW",
    "decade": "2000s"
  },
  {
    "name": "Yet They Say, Vol. 8",
    "location": "Cincinnati, USA",
    "lat": 40.63525586988946,
    "lng": -87.26427149648491,
    "spotifyId": "6sdKnK1EXsLMGGwikpV84x",
    "decade": "2000s"
  },
  {
    "name": "Yet They Say, Vol. 9",
    "location": "Cincinnati, USA",
    "lat": 38.15301905500528,
    "lng": -87.67227628506717,
    "spotifyId": "6phFkBNKX9DPKjczwMr0lx",
    "decade": "2000s"
  },
  {
    "name": "Zouk, Fast",
    "location": "Fort-de-France, Martinique",
    "lat": 12.89556466932549,
    "lng": -61.59274129856834,
    "spotifyId": "0ZnY8eOB1DHCLdg2QG5Rjh",
    "decade": "1980s"
  },
  {
    "name": "Zouk, Slow",
    "location": "Fort-de-France, Martinique",
    "lat": 14.633530718617317,
    "lng": -60.514657288017695,
    "spotifyId": "1dIQnuEk89elNqWJ2TwCP3",
    "decade": "1980s"
  },
  {
    "name": "Zouk, Smooth",
    "location": "Fort-de-France, Martinique",
    "lat": 13.650001826625989,
    "lng": -59.82834143833649,
    "spotifyId": "751iikDbmoyjUBeWFSfWaN",
    "decade": "1980s"
  },
  {
    "name": "Zouk, Starter Pack",
    "location": "Fort-de-France, Martinique",
    "lat": 14.085376177854945,
    "lng": -60.156326734737945,
    "spotifyId": "2rsEmyzKoYTgXerSjeB0IK",
    "decade": "1980s"
  },
  {
    "name": "Azonto / Hiplife",
    "location": "Accra, Ghana",
    "lat": 7.279796917407056,
    "lng": -1.4530072106554328,
    "spotifyId": "6Naq3yvuVoBL27KgY2Svf6",
    "decade": "2010s"
  },
  {
    "name": "Príncipe, Chill",
    "location": "Lisbon, Portugal",
    "lat": 38.4336707815,
    "lng": -10.852966287848847,
    "spotifyId": "0s9M3fBKWFJmVhAiieCjkt",
    "decade": "2010s"
  },
  {
    "name": "Highlife, Vintage Peppy",
    "location": "Accra, Ghana",
    "lat": 6.152400267052812,
    "lng": -2.09392677213437,
    "spotifyId": "4QjHU0dwRyFv8aP31CXmRx",
    "decade": "1960s"
  },
  {
    "name": "Rumba, Vintage",
    "location": "Kinshasa, DRC",
    "lat": -2.8098812874496746,
    "lng": 16.477909423257962,
    "spotifyId": "4q0CkBcLH3ceq6OB0PfUU8",
    "decade": "1960s"
  },
  {
    "name": "Tigrinya, Vintage",
    "location": "Asmara, Eritrea",
    "lat": 14.902385537365275,
    "lng": 38.507403907441514,
    "spotifyId": "3BXK08wohNho0wCHBiiv9I",
    "decade": "1970s"
  },
  {
    "name": "Tigrinya",
    "location": "Asmara, Eritrea",
    "lat": 14.945410626017512,
    "lng": 39.018775388820174,
    "spotifyId": "7do7DrHqlGF9Ft7NbtwGGL",
    "decade": "2000s"
  },
  {
    "name": "Sega",
    "location": "Port Louis, Mauritius",
    "lat": -21.869508179239233,
    "lng": 56.54194851751815,
    "spotifyId": "3G3NcjYPEyVjepUGzPUyxI",
    "decade": "1970s"
  },
  {
    "name": "Xitsonga / Tsonga, Downtempo",
    "location": "Limpopo, South Africa",
    "lat": -22.247902992525134,
    "lng": 30.160039773457992,
    "spotifyId": "0mEs3YsF8hKDwj0HPznfT9",
    "decade": "2000s"
  },
  {
    "name": "Sega, Psych",
    "location": "Port Louis, Mauritius",
    "lat": -21.829966750606395,
    "lng": 56.125575161901665,
    "spotifyId": "4ARXoTlqKTuAQhg2k8HeJX",
    "decade": "1970s"
  },
  {
    "name": "Mbalax, Mark Ernestus",
    "location": "Dakar, Senegal",
    "lat": 14.617932859978914,
    "lng": -18.288880781044668,
    "spotifyId": "36iFMNygMeRRlL5SgWtmER",
    "decade": "2010s"
  },
  {
    "name": "Dr. Thomas Chauke",
    "location": "Limpopo, South Africa",
    "lat": -22.6471810810868,
    "lng": 29.300505944524765,
    "spotifyId": "4rhVBRU9Qup1O5IYEKiIrs",
    "decade": "1990s"
  },
  {
    "name": "Worldwide, Chiming Guitar",
    "location": "Central Africa",
    "lat": 1,
    "lng": 20.3,
    "spotifyId": "4xIaYhRmf8rV4W7Kzy0Ssn",
    "decade": "2000s"
  },
  {
    "name": "Worldwide, Smooth Mid-Tempo R&B",
    "location": "Praia, Cape Verde",
    "lat": 14.9315,
    "lng": -23.2087,
    "spotifyId": "01gAq5hKTsncsfQMc5XGTR",
    "decade": "2000s"
  },
  {
    "name": "Africa, Smooth Bangers",
    "location": "Central Africa",
    "lat": 1.3228102409047853,
    "lng": 20.313518019206224,
    "spotifyId": "7fo8PWonDWZFvhR7ThcC9c",
    "decade": "2010s"
  },
  {
    "name": "Africa, Acoustic Bangers",
    "location": "Central Africa",
    "lat": 1.599744161824903,
    "lng": 19.982480286619225,
    "spotifyId": "5ZUk2gZ2DEbrAzuIdnbs6R",
    "decade": "2010s"
  },
  {
    "name": "Africa, Hype Bangers",
    "location": "Central Africa",
    "lat": 1.506597385413363,
    "lng": 19.446954713344066,
    "spotifyId": "1DnMnLRsztUXlnzqC2KhPB",
    "decade": "2010s"
  },
  {
    "name": "Igbo, Trips",
    "location": "Enugu, Nigeria",
    "lat": 5.89087184111509,
    "lng": 6.838185824249409,
    "spotifyId": "24BPg0ssxlfyIcZgEKdpGv",
    "decade": "1970s"
  },
  {
    "name": "Worldwide, Chanting And Drumming",
    "location": "Central Africa",
    "lat": 0.9474632709151779,
    "lng": 19.101534701784722,
    "spotifyId": "5zCl1AYh66oiLKfBM5yz3q",
    "decade": "1970s"
  },
  {
    "name": "Africa, Vintage",
    "location": "Central Africa",
    "lat": 0.20535737992667535,
    "lng": 19.313674198093207,
    "spotifyId": "3qxhw7DmQrTXEQ3O58hWGd",
    "decade": "1970s"
  },
  {
    "name": "Afrobeats, Groovers",
    "location": "Lagos, Nigeria",
    "lat": 5.072062675590982,
    "lng": 2.416990358549886,
    "spotifyId": "72zKIZG8bXjGHpQJW2DfUW",
    "decade": "2010s"
  },
  {
    "name": "Rock, Soft",
    "location": "Los Angeles, USA",
    "lat": 34.558797385413364,
    "lng": -118.79674528665593,
    "spotifyId": "5HpHVYYyaDgBnGlaPmLbyB",
    "decade": "1970s"
  },
  {
    "name": "Rock, Smooth",
    "location": "Los Angeles, USA",
    "lat": 33.99966327091518,
    "lng": -119.14216529821528,
    "spotifyId": "3FWefoSEYkM6sDCwo0fAxc",
    "decade": "1970s"
  }
];