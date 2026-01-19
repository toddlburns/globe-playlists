const playlists = [
  {
    "name": "Afrobeat, Chill",
    "location": "Lagos, Nigeria",
    "lat": 7.701198898301736,
    "lng": 3.6025879096667506,
    "spotifyId": "2iig1p0w46f3lKUim5aCQP"
  },
  {
    "name": "Afrobeat, Groovers",
    "location": "Lagos, Nigeria",
    "lat": 7.846509970307823,
    "lng": 1.5662433412124743,
    "spotifyId": "7xeFi53HwuE8pNlftbK2lL"
  },
  {
    "name": "Afrobeat, Heavy",
    "location": "Lagos, Nigeria",
    "lat": 5.047525645002318,
    "lng": 1.6539627405316386,
    "spotifyId": "52WUzKdwm9kgIYtJq3Pxfi"
  },
  {
    "name": "Alex Kasau Katombi",
    "location": "Nairobi, Kenya",
    "lat": -2.1825888780273535,
    "lng": 38.302941685436274,
    "spotifyId": "4tNlGIW4EsLe0CwP5LWx6c"
  },
  {
    "name": "Amapiano",
    "location": "Johannesburg, South Africa",
    "lat": -26.34156598554403,
    "lng": 26.240298240941147,
    "spotifyId": "4NL0LAlmsbr2W70g27Cycn"
  },
  {
    "name": "Amapiano, Gospel",
    "location": "Johannesburg, South Africa",
    "lat": -26.732323921832325,
    "lng": 27.868668290074257,
    "spotifyId": "1pYn1uvmbNPPiarE2mT8SP"
  },
  {
    "name": "Amapiano, Private School",
    "location": "Johannesburg, South Africa",
    "lat": -26.057863751721033,
    "lng": 27.946520712992495,
    "spotifyId": "2HnPeP0Nfk6YpTBmxrS9U6"
  },
  {
    "name": "Amapiano, Starter Pack",
    "location": "Johannesburg, South Africa",
    "lat": -25.982466806040176,
    "lng": 29.50579665064862,
    "spotifyId": "0FQ3q1kXYX1hfN7N5n7yT6"
  },
  {
    "name": "Asakaa",
    "location": "Kumasi, Ghana",
    "lat": 5.507203066109222,
    "lng": -0.9877121567405089,
    "spotifyId": "2lni3fakT2CCFulvIWcOFt"
  },
  {
    "name": "Asakaa, Starter Pack",
    "location": "Kumasi, Ghana",
    "lat": 5.34005462540902,
    "lng": -1.5041135605666425,
    "spotifyId": "13IKYLFu60AscHVUcWwuv0"
  },
  {
    "name": "Benga & Kamba Pop, Modern",
    "location": "Nairobi, Kenya",
    "lat": -2.3006990070021334,
    "lng": 35.109128424543236,
    "spotifyId": "1JSCxZphCXqWqfq5pYrub9"
  },
  {
    "name": "Benga & Kamba Pop, Vintage",
    "location": "Nairobi, Kenya",
    "lat": -0.9758993987257525,
    "lng": 36.20544247592282,
    "spotifyId": "0t6jRcP3uo3BSEEFvUsrxe"
  },
  {
    "name": "Biama",
    "location": "Lagos, Nigeria",
    "lat": 4.801000295713343,
    "lng": 2.1338450969828813,
    "spotifyId": "3Q6gJfudcpuoV1rVScaD4x"
  },
  {
    "name": "Bikutsi",
    "location": "Yaoundé, Cameroon",
    "lat": 4.254864039525907,
    "lng": 10.903081880607543,
    "spotifyId": "1WS40Xzfsrg37iKOXudtOk"
  },
  {
    "name": "Bikutsi, Contemporary",
    "location": "Yaoundé, Cameroon",
    "lat": 4.661635572218906,
    "lng": 12.808151846921762,
    "spotifyId": "0a8H55Hlj8sAUGkJs7tdnY"
  },
  {
    "name": "Cabo Verde, Vintage R&B",
    "location": "Praia, Cape Verde",
    "lat": 16.312402994737123,
    "lng": -22.4575578399377,
    "spotifyId": "1rbReWa0ajvTwJQJFiZYoH"
  },
  {
    "name": "Cabo Verde, Vintage Rock And Funk",
    "location": "Praia, Cape Verde",
    "lat": 13.835261321256885,
    "lng": -24.131765598173672,
    "spotifyId": "6K9t5Ja3meB06K8Ffi691b"
  },
  {
    "name": "Chimurenga",
    "location": "Harare, Zimbabwe",
    "lat": -17.72439600686247,
    "lng": 32.15929957781921,
    "spotifyId": "7xwKgLkCIFBhqXGeNEmTWz"
  },
  {
    "name": "Coupé-décalé",
    "location": "Abidjan, Ivory Coast",
    "lat": 6.54033864329598,
    "lng": -4.8501415648679576,
    "spotifyId": "0kOQEBaYZ3iy4vvwAQQJ4X"
  },
  {
    "name": "Ethiopia, Blues",
    "location": "Addis Ababa, Ethiopia",
    "lat": 9.642240531354094,
    "lng": 38.68344279202238,
    "spotifyId": "0vRmvfpw1bsPd4emjHOs9y"
  },
  {
    "name": "Ethiopia, Funk & Soul",
    "location": "Addis Ababa, Ethiopia",
    "lat": 8.266960354802926,
    "lng": 38.26031167862394,
    "spotifyId": "09t24TcQoM3mYuB3WT5eu7"
  },
  {
    "name": "Ethiopia, Jazz",
    "location": "Addis Ababa, Ethiopia",
    "lat": 9.02625950730662,
    "lng": 39.32012584807101,
    "spotifyId": "4cJjQzwIDDCvLyn9B93XOd"
  },
  {
    "name": "Ethiopia, Jazz Vocal",
    "location": "Addis Ababa, Ethiopia",
    "lat": 9.026840928625228,
    "lng": 36.79826482473699,
    "spotifyId": "4odZ0OheBc97joZ9YiWYfZ"
  },
  {
    "name": "Funaná",
    "location": "Praia, Cape Verde",
    "lat": 14.41732308829748,
    "lng": -22.486970191874477,
    "spotifyId": "038RxzglexdTMi2RV8NIGf"
  },
  {
    "name": "Gqom, Club",
    "location": "Durban, South Africa",
    "lat": -31.043387295010923,
    "lng": 30.028749763634615,
    "spotifyId": "5GbQEsE7cPTpxSXF2vRag7"
  },
  {
    "name": "Gqom, Pop",
    "location": "Durban, South Africa",
    "lat": -28.833536487761723,
    "lng": 29.417950396608333,
    "spotifyId": "13FHf7pS4BFYgpSMO5cQ5t"
  },
  {
    "name": "Gqom, Sghubu",
    "location": "Durban, South Africa",
    "lat": -31.75763442635754,
    "lng": 30.848354499181603,
    "spotifyId": "49kbHTAr0darDpdHdHdOFk"
  },
  {
    "name": "Gqom, Sghubu Pop",
    "location": "Durban, South Africa",
    "lat": -28.284679334530693,
    "lng": 32.67880506109405,
    "spotifyId": "74uUwxODQwRR6b5Sn6cgze"
  },
  {
    "name": "Gqom, Starter Pack",
    "location": "Durban, South Africa",
    "lat": -27.862359752280742,
    "lng": 33.016668715087704,
    "spotifyId": "5xg8l4oRQTliZHWUMmbpog"
  },
  {
    "name": "Hees Macaan",
    "location": "Mogadishu, Somalia",
    "lat": 2.6120071747221134,
    "lng": 45.78096081746808,
    "spotifyId": "15XPRBJfwILv97ucd5DrHh"
  },
  {
    "name": "Hees Macaan, Starter Pack",
    "location": "Mogadishu, Somalia",
    "lat": 0.40902023833327217,
    "lng": 45.96958108098002,
    "spotifyId": "4ZplzNGXYhoJzZ3qic1YH1"
  },
  {
    "name": "Highlife, Vintage Jazzy",
    "location": "Accra, Ghana",
    "lat": 3.855871365071607,
    "lng": 0.857488182837572,
    "spotifyId": "79sfOC33ieQMvylMkvYLnK"
  },
  {
    "name": "Kizomba",
    "location": "Luanda, Angola",
    "lat": -10.037502023199494,
    "lng": 12.129321365625607,
    "spotifyId": "79M99hodUmv6FLQMVZ97lr"
  },
  {
    "name": "Kora",
    "location": "Banjul, Gambia",
    "lat": 11.87705400479048,
    "lng": -17.843200684013567,
    "spotifyId": "0zMqwNg0GC4Pg1YQn0R69k"
  },
  {
    "name": "Kuduro, Contemporary",
    "location": "Luanda, Angola",
    "lat": -10.447930980636832,
    "lng": 12.708923441767169,
    "spotifyId": "7AWO9lCenDDqGEMc5VwZzz"
  },
  {
    "name": "Kuduro, Contemporary Riddims",
    "location": "Luanda, Angola",
    "lat": -7.769617079729176,
    "lng": 11.524564436781747,
    "spotifyId": "3h6tiKA7760RuHroRq4VUV"
  },
  {
    "name": "Kuduro, Vintage",
    "location": "Luanda, Angola",
    "lat": -9.88189581209382,
    "lng": 15.184922019112731,
    "spotifyId": "2prFQwqRESbg7m2yLW8TIA"
  },
  {
    "name": "Kuduro, Vintage Riddims",
    "location": "Luanda, Angola",
    "lat": -7.6886403441670765,
    "lng": 12.09164180891457,
    "spotifyId": "63tLUvVN2cyufFq9VBNB73"
  },
  {
    "name": "Kwaito, Old School MCs",
    "location": "Johannesburg, South Africa",
    "lat": -24.37518723564873,
    "lng": 28.312012495106597,
    "spotifyId": "4WIR9yiqhfdvTHRhqGGqON"
  },
  {
    "name": "Kwaito, Swinging Beats",
    "location": "Johannesburg, South Africa",
    "lat": -24.24575620979372,
    "lng": 28.44579326786005,
    "spotifyId": "49zrvR1Mph2kjThFHrhXhw"
  },
  {
    "name": "Kwaito, Vintage Classic",
    "location": "Johannesburg, South Africa",
    "lat": -24.546162207295456,
    "lng": 27.402168958102862,
    "spotifyId": "0czY51CRWCFNciREa0KMWS"
  },
  {
    "name": "Kwaku DMC",
    "location": "Accra, Ghana",
    "lat": 3.6386701616298263,
    "lng": -1.761597687087592,
    "spotifyId": "2I3Y551Qnz3JHrsasUPJt9"
  },
  {
    "name": "Mahraganat",
    "location": "Cairo, Egypt",
    "lat": 28.103103472408336,
    "lng": 29.935300317037346,
    "spotifyId": "27gc1VLVQ0E6d7ZHUyfgLf"
  },
  {
    "name": "Mahraganat, Starter Pack",
    "location": "Cairo, Egypt",
    "lat": 30.370134488428185,
    "lng": 32.389103017317595,
    "spotifyId": "0Og9nutJw2eAP8seV8U6NY"
  },
  {
    "name": "Makossa",
    "location": "Douala, Cameroon",
    "lat": 4.183996344242867,
    "lng": 10.31471868047345,
    "spotifyId": "7N3tj9ECjNH9nWpTFBcMrh"
  },
  {
    "name": "Mbalax",
    "location": "Dakar, Senegal",
    "lat": 15.064580714092411,
    "lng": -18.990427410839978,
    "spotifyId": "2vDJPSyPsaVluvBe7fueHd"
  },
  {
    "name": "Mbalax, Contemporary Pop",
    "location": "Dakar, Senegal",
    "lat": 15.49048045265383,
    "lng": -15.778756012100295,
    "spotifyId": "3N2lrPIai04h83Odpkf19j"
  },
  {
    "name": "Mbalax, Contemporary Rap",
    "location": "Dakar, Senegal",
    "lat": 13.120308926154518,
    "lng": -16.391992472925672,
    "spotifyId": "0RsOLoaHWxPBYR5b6cfYPZ"
  },
  {
    "name": "Mbaqanga",
    "location": "Johannesburg, South Africa",
    "lat": -27.98763747569628,
    "lng": 29.009793160011764,
    "spotifyId": "04qAy2I5Ojwp0hatwcTUQf"
  },
  {
    "name": "Mbira",
    "location": "Harare, Zimbabwe",
    "lat": -19.046328034032094,
    "lng": 30.056364129085033,
    "spotifyId": "1rYjf7xUGiYES9rQFoWJhX"
  },
  {
    "name": "Salegy & Kawitry",
    "location": "Antananarivo, Madagascar",
    "lat": -19.695339590731443,
    "lng": 45.64635682769966,
    "spotifyId": "4N8p7ElBD9ul8Vt01hZhoi"
  },
  {
    "name": "Salegy & Kawitry, Starter Pack",
    "location": "Antananarivo, Madagascar",
    "lat": -18.403621279377628,
    "lng": 47.82489371892639,
    "spotifyId": "3cc2SwSPDVRheVL2ongzRb"
  },
  {
    "name": "Singeli",
    "location": "Dar es Salaam, Tanzania",
    "lat": -8.154733709535881,
    "lng": 41.15820360793055,
    "spotifyId": "5yMc5m6k38mikLv55hYZrp"
  },
  {
    "name": "South Africa, 80s Electronic",
    "location": "Lagos, Nigeria",
    "lat": 4.533559007246902,
    "lng": 3.611000769518369,
    "spotifyId": "0IvCfBCJhAwRBapKm9eXsp"
  },
  {
    "name": "Tsapiky",
    "location": "Toliara, Madagascar",
    "lat": -24.99007656291428,
    "lng": 43.074770801144616,
    "spotifyId": "2Zmb0eCGh5JpOd8QaUZffF"
  },
  {
    "name": "Wawa Salegy",
    "location": "Antananarivo, Madagascar",
    "lat": -19.33058970608215,
    "lng": 45.516068331251574,
    "spotifyId": "2dIeZLRgv0xi7GBxOM92lf"
  },
  {
    "name": "Xitsonga / Shangaan Electro / Tsonga ",
    "location": "Limpopo, South Africa",
    "lat": -25.737396036733493,
    "lng": 30.055359553551188,
    "spotifyId": "5fs3FTwvwtq8YVSOmc0qRt"
  },
  {
    "name": "Xitsonga / Shangaan Electro / Tsonga  Starter Pack",
    "location": "Limpopo, South Africa",
    "lat": -23.66741173682749,
    "lng": 30.22891345678025,
    "spotifyId": "0l4dVLG5CXpkkTFWRTbIfP"
  },
  {
    "name": "Zouglou",
    "location": "Abidjan, Ivory Coast",
    "lat": 4.805726579056962,
    "lng": -4.015494720861753,
    "spotifyId": "5OuAAwRsFfsppPMBZXGQPT"
  },
  {
    "name": "Zouglou, Rapide",
    "location": "Abidjan, Ivory Coast",
    "lat": 6.11275257813244,
    "lng": -3.2364267666167255,
    "spotifyId": "35ePSEtczTznJJQhGNkoHi"
  },
  {
    "name": "Tuareg",
    "location": "Agadez, Niger",
    "lat": 15.696825280549003,
    "lng": 6.840019679574296,
    "spotifyId": "7r9P1JViiAMM5H9n2Qjb7b"
  },
  {
    "name": "Zouk, Fast",
    "location": "Fort-de-France, Martinique",
    "lat": 15.993447690241997,
    "lng": -61.88992472037153,
    "spotifyId": "2TD8uJo3YaK7ayv4XWJXul"
  },
  {
    "name": "Zouk, Slow",
    "location": "Fort-de-France, Martinique",
    "lat": 13.763162068826265,
    "lng": -62.09095996465096,
    "spotifyId": "05lqPGIja6yCRdkAeg0rR5"
  },
  {
    "name": "Zouk, Smooth",
    "location": "Fort-de-France, Martinique",
    "lat": 15.661308644834898,
    "lng": -62.46452247144048,
    "spotifyId": "2GTdCjTWSe4aLFjexf6xas"
  },
  {
    "name": "Zouk, Starter Pack",
    "location": "Fort-de-France, Martinique",
    "lat": 13.402218739124624,
    "lng": -61.801439237125514,
    "spotifyId": "66FMyWSL4ai8HLFFEx8qeC"
  },
  {
    "name": "Acetone",
    "location": "Los Angeles, USA",
    "lat": 34.12659040052746,
    "lng": -120.18065315989381,
    "spotifyId": "3YTUUD1qFCJdi6tA2CPJ2m"
  },
  {
    "name": "Aleksi Perälä, Ambient",
    "location": "London, UK",
    "lat": 51.22896283053072,
    "lng": 1.2066887482132376,
    "spotifyId": "31fRkBUVMyAiEIextWgg1S"
  },
  {
    "name": "Aleksi Perälä, Ambient Beats",
    "location": "London, UK",
    "lat": 50.576291523745965,
    "lng": 0.5022822372138661,
    "spotifyId": "4rPufV1Gi5hU04fma7ePV9"
  },
  {
    "name": "Aleksi Perälä, Beats",
    "location": "Helsinki, Finland",
    "lat": 59.28203859000972,
    "lng": 26.303406551395284,
    "spotifyId": "41LddJ20d8OEEn0JS4dPG5"
  },
  {
    "name": "Alessandro Cortini",
    "location": "Los Angeles, USA",
    "lat": 32.709166079920955,
    "lng": -118.42348690347904,
    "spotifyId": "0xqNI7zlmk1WxI9BjC5dZ8"
  },
  {
    "name": "Ambient, Ancient",
    "location": "London, UK",
    "lat": 50.76258753776274,
    "lng": -0.6793887875192229,
    "spotifyId": "6Bf98QeikFhEmx4I9eaFA1"
  },
  {
    "name": "Ambient, Balearic",
    "location": "London, UK",
    "lat": 51.489990887731715,
    "lng": -0.5358928420744483,
    "spotifyId": "1gfY14XzLgklsd7hbhD9gs"
  },
  {
    "name": "Ambient, Classical Swells",
    "location": "London, UK",
    "lat": 51.88758155720701,
    "lng": -1.7926459867102296,
    "spotifyId": "0fhOmjyRTApzRhqy4oulzf"
  },
  {
    "name": "Ambient, Country",
    "location": "London, UK",
    "lat": 50.24716928461283,
    "lng": -0.7098205790552882,
    "spotifyId": "0ektreZOberCoGpFwDYyUy"
  },
  {
    "name": "Ambient, Faded",
    "location": "London, UK",
    "lat": 52.59788256337701,
    "lng": 1.7495285880175435,
    "spotifyId": "21LF9zp0vqyJxdQP0ioIHj"
  },
  {
    "name": "Ambient, Floating",
    "location": "London, UK",
    "lat": 50.663734146720365,
    "lng": 0.18562465832294142,
    "spotifyId": "38ml82ODH5HumdFzumWkY0"
  },
  {
    "name": "Ambient, Heartstrings",
    "location": "London, UK",
    "lat": 50.43391266841728,
    "lng": 1.319958890547413,
    "spotifyId": "7CqvI7yWjT7Vz4SV201NcV"
  },
  {
    "name": "Ambient, Japan",
    "location": "London, UK",
    "lat": 53.16130970972808,
    "lng": 0.6862504386447409,
    "spotifyId": "79MA3K9hkgNXw2WzI0qZT9"
  },
  {
    "name": "Ambient, Kompakt Queasy",
    "location": "London, UK",
    "lat": 51.38841489401326,
    "lng": -0.047437066551104884,
    "spotifyId": "7oVg1AjG18TjKEMwzTwKXV"
  },
  {
    "name": "Ambient, Outer Space",
    "location": "London, UK",
    "lat": 50.419589854593,
    "lng": 1.843150248430432,
    "spotifyId": "1BqRxVba45sNlEd4Gr6HAp"
  },
  {
    "name": "Ambient, Techno",
    "location": "Detroit, USA",
    "lat": 41.39448627184365,
    "lng": -81.31334268109386,
    "spotifyId": "3ANbspvqDje5SguYqQpyow"
  },
  {
    "name": "Ambient, Water",
    "location": "London, UK",
    "lat": 50.74551621559483,
    "lng": 0.7075763011637536,
    "spotifyId": "6wFf3Nk95ob2UiR2DwpvFJ"
  },
  {
    "name": "Arab Strap",
    "location": "Edinburgh, UK",
    "lat": 55.6401160101527,
    "lng": -4.063493309979313,
    "spotifyId": "0j8vOIrlb5iKi2uIsmZqKD"
  },
  {
    "name": "Arthur Lyman, Chill",
    "location": "Honolulu, USA",
    "lat": 21.91629767031479,
    "lng": -157.94321391982356,
    "spotifyId": "46Vag9YCi7SCH87AUL1iv0"
  },
  {
    "name": "ASC, Ambient",
    "location": "London, UK",
    "lat": 50.95988246453087,
    "lng": -1.7502845679491463,
    "spotifyId": "6UhnY0JKXAIp7lpemR460r"
  },
  {
    "name": "ASC, Drum & Bass Dark",
    "location": "London, UK",
    "lat": 50.15009134028085,
    "lng": 1.6750668210235895,
    "spotifyId": "5EEo9Cj8XRSKe7RjKN54Ty"
  },
  {
    "name": "ASC, Drum & Bass Light",
    "location": "London, UK",
    "lat": 50.32122032919093,
    "lng": 1.4578028237425806,
    "spotifyId": "0uABCXhc1GhyZdAYbAlY9N"
  },
  {
    "name": "ASC, Electronica Dark",
    "location": "London, UK",
    "lat": 52.72392417761485,
    "lng": -1.2587799565997841,
    "spotifyId": "2keOQdxWMpQvLqIwVyLmPS"
  },
  {
    "name": "ASC, Electronica Light",
    "location": "London, UK",
    "lat": 51.686775382599166,
    "lng": 0.6494546063220193,
    "spotifyId": "36OdtkSojyq4dmnIWBn0Qc"
  },
  {
    "name": "ASC, Starter Pack",
    "location": "London, UK",
    "lat": 50.47467944750176,
    "lng": -0.575936838090309,
    "spotifyId": "3BtzIGpDtueO5elQrwl0wB"
  },
  {
    "name": "ASC, Techno",
    "location": "Detroit, USA",
    "lat": 43.67160545231452,
    "lng": -83.13928640485865,
    "spotifyId": "5GOZOzf5d4Dc8FDX9LV8Ze"
  },
  {
    "name": "Atom TM",
    "location": "Frankfurt, Germany",
    "lat": 51.81510468377677,
    "lng": 8.787138198972368,
    "spotifyId": "6d5BDrtmclL3mxD83zlzOS"
  },
  {
    "name": "Atom TM, Ambient",
    "location": "Frankfurt, Germany",
    "lat": 48.62197754392461,
    "lng": 7.736074102204405,
    "spotifyId": "35EY0l9jOjybuoWAvJqpP8"
  },
  {
    "name": "Atom TM, Chill",
    "location": "Frankfurt, Germany",
    "lat": 50.136884708981796,
    "lng": 7.713890019633611,
    "spotifyId": "1LyJyYFq9U9FRxTMXKudv9"
  },
  {
    "name": "Atom TM, Digital Hardcore",
    "location": "Frankfurt, Germany",
    "lat": 51.77858987682318,
    "lng": 7.789667754235814,
    "spotifyId": "1UOkuNE1cc2sEFh03leunA"
  },
  {
    "name": "Atom TM, Electronic Experimental",
    "location": "Frankfurt, Germany",
    "lat": 51.69818565612765,
    "lng": 9.730491521769988,
    "spotifyId": "5tz0aRB8kJMM15xMyufb3O"
  },
  {
    "name": "Atom TM, Electronic Heavy",
    "location": "Frankfurt, Germany",
    "lat": 49.23086743145495,
    "lng": 10.212889183147919,
    "spotifyId": "6WVROZezkHdnoUWeAjNT0k"
  },
  {
    "name": "Atom TM, Electronic Soft",
    "location": "Frankfurt, Germany",
    "lat": 51.9216554124927,
    "lng": 10.314702204391256,
    "spotifyId": "4zSxhCWqVhwg4E06wOhIMX"
  },
  {
    "name": "Atom TM, Glitch",
    "location": "Frankfurt, Germany",
    "lat": 51.16078424607038,
    "lng": 7.888059987620392,
    "spotifyId": "4UbuFLeWj0Kd7zzSZ0Y9QA"
  },
  {
    "name": "Atom TM, Latin Experimental",
    "location": "Mexico City, Mexico",
    "lat": 20.39960630334152,
    "lng": -98.29714030058733,
    "spotifyId": "0doEtzxM03IrKqkym3vxLx"
  },
  {
    "name": "Atom TM, Latin Pop",
    "location": "Mexico City, Mexico",
    "lat": 18.831885469062712,
    "lng": -98.21997418810952,
    "spotifyId": "5QkFOYKOH5mGMhjcuER0gv"
  },
  {
    "name": "Atom TM, Pop Dark",
    "location": "Frankfurt, Germany",
    "lat": 48.35484031686393,
    "lng": 7.937418115883889,
    "spotifyId": "4AG6XFDIQ1Fzlj3GpZnkxb"
  },
  {
    "name": "Atom TM, Pop Light",
    "location": "Frankfurt, Germany",
    "lat": 51.53915580507051,
    "lng": 9.640600009786775,
    "spotifyId": "4O9w0ca5V7bdw8TiK9Qvkc"
  },
  {
    "name": "Atom TM, Starter Pack",
    "location": "Frankfurt, Germany",
    "lat": 51.84098419673065,
    "lng": 9.890318870124243,
    "spotifyId": "1mdsTvjqzg9glSr7bWpgAR"
  },
  {
    "name": "Autechre, Odds & Sods",
    "location": "Manchester, UK",
    "lat": 54.10785399802829,
    "lng": -1.2007324311505472,
    "spotifyId": "6qbLpNK4g0JNqcp9ccw2IZ"
  },
  {
    "name": "Autechre, Post 2000",
    "location": "Manchester, UK",
    "lat": 55.40061294811058,
    "lng": -2.0854937448345257,
    "spotifyId": "6qbLpNK4g0JNqcp9ccw2IZ"
  },
  {
    "name": "Autechre, Pre 2000",
    "location": "Manchester, UK",
    "lat": 52.91389076764701,
    "lng": -1.6898062832695344,
    "spotifyId": "3LrFR2CBxvGPB1k50HA3vD"
  },
  {
    "name": "Autumn",
    "location": "London, UK",
    "lat": 52.20400822350477,
    "lng": -0.7586182024701763,
    "spotifyId": "0Nk04NfUz4lGUTo1Fqdw8Y"
  },
  {
    "name": "Balearic Music",
    "location": "Ibiza, Spain",
    "lat": 39.527003803173706,
    "lng": 0.33827825681676305,
    "spotifyId": "5WlU5dajU5gbw67YomXXPy"
  },
  {
    "name": "Balearic, Pop",
    "location": "Ibiza, Spain",
    "lat": 37.029560243227834,
    "lng": 3.113677953973946,
    "spotifyId": "0Hz7pxGcFRvGYGoDwTAy1R"
  },
  {
    "name": "Beach Boys, Experimental",
    "location": "Hawthorne, USA",
    "lat": 32.04190050851014,
    "lng": -118.96613866830812,
    "spotifyId": "3dMCpjhAA3OjJleYu4yZ8U"
  },
  {
    "name": "Blues, Chill",
    "location": "Memphis, USA",
    "lat": 36.629826893338844,
    "lng": -91.59952111127602,
    "spotifyId": "4vcecbl4VoDahMfo20uJCu"
  },
  {
    "name": "Blues, Early",
    "location": "Memphis, USA",
    "lat": 36.76057022573042,
    "lng": -90.48934881879147,
    "spotifyId": "4T1ZuyQ3LCPQ8MWRnqYYKq"
  },
  {
    "name": "Boogie",
    "location": "Los Angeles, USA",
    "lat": 34.849692607968066,
    "lng": -120.02255347793636,
    "spotifyId": "0KTL1zPh9jlFb4IWw9n28p"
  },
  {
    "name": "Brazil, Bumping",
    "location": "Rio de Janeiro, Brazil",
    "lat": -24.17887442422996,
    "lng": -44.132262324030506,
    "spotifyId": "2ppUaha7zYPbKfLx2FEF5E"
  },
  {
    "name": "Brazil, Chill",
    "location": "Rio de Janeiro, Brazil",
    "lat": -21.80665863416875,
    "lng": -43.28538541579556,
    "spotifyId": "7rVhtH0nrGdRHCe8YPV8eg"
  },
  {
    "name": "Brazil, Funk & Soul",
    "location": "Rio de Janeiro, Brazil",
    "lat": -22.42095627870342,
    "lng": -41.80212897853525,
    "spotifyId": "0SD6QYL3tq0WSSBv9do5Pt"
  },
  {
    "name": "Brazil, Psychedelic",
    "location": "Rio de Janeiro, Brazil",
    "lat": -24.055197210736825,
    "lng": -42.179732423311584,
    "spotifyId": "4l73MmRDRCpAXGtxXF4LP1"
  },
  {
    "name": "Brazil, Vibes",
    "location": "Rio de Janeiro, Brazil",
    "lat": -21.841366354139335,
    "lng": -44.316087855442156,
    "spotifyId": "6UeEinPneyvyvyHcHgOyUU"
  },
  {
    "name": "Burnt Friedman",
    "location": "Cologne, Germany",
    "lat": 49.7185763178517,
    "lng": 6.108176408634377,
    "spotifyId": "6RGN43GlQ54FPFuKBiZBaP"
  },
  {
    "name": "By The Way, Vol. 1",
    "location": "London, UK",
    "lat": 53.01313615885646,
    "lng": 0.8552532516441836,
    "spotifyId": "1r047aOhZGll7o17tpDUWA"
  },
  {
    "name": "By The Way, Vol. 10",
    "location": "London, UK",
    "lat": 49.67764485082057,
    "lng": 1.5933605797653587,
    "spotifyId": "21udxWtqkYOyGAjgq631tb"
  },
  {
    "name": "By The Way, Vol. 2",
    "location": "London, UK",
    "lat": 51.96086282754186,
    "lng": -0.22014760477403725,
    "spotifyId": "3UDr6AU96BygUUtE3CYumt"
  },
  {
    "name": "By The Way, Vol. 3",
    "location": "London, UK",
    "lat": 51.667218852622085,
    "lng": 0.8303772340333252,
    "spotifyId": "1qd8iDGjMQbXWZInlaUjV4"
  },
  {
    "name": "By The Way, Vol. 4",
    "location": "London, UK",
    "lat": 50.058871270882186,
    "lng": 0.8156252427369056,
    "spotifyId": "2bw2rkrgs27KsDN8V2Vdc2"
  },
  {
    "name": "By The Way, Vol. 5",
    "location": "London, UK",
    "lat": 53.07617016145652,
    "lng": 1.06110646857135,
    "spotifyId": "7mnOW7OjzJ3VhwoOLfuOPf"
  },
  {
    "name": "By The Way, Vol. 6",
    "location": "London, UK",
    "lat": 51.97607928944592,
    "lng": 1.7347605830295014,
    "spotifyId": "5AoZhGIFYyhzfJcOV6hKO3"
  },
  {
    "name": "By The Way, Vol. 7",
    "location": "London, UK",
    "lat": 52.266325844630956,
    "lng": -0.8308024144028984,
    "spotifyId": "14tVly3NHzR2xGsyAqnQD7"
  },
  {
    "name": "By The Way, Vol. 8",
    "location": "London, UK",
    "lat": 50.99965582727313,
    "lng": 1.3630139735233386,
    "spotifyId": "2kHGKcLMa08TuhKhYIOor4"
  },
  {
    "name": "By The Way, Vol. 9",
    "location": "London, UK",
    "lat": 51.17559234596573,
    "lng": 0.14652543810574295,
    "spotifyId": "17MvGxEie2iID1JnlWaH19"
  },
  {
    "name": "Calypso, Classic",
    "location": "Port of Spain, Trinidad",
    "lat": 11.728956688381356,
    "lng": -61.66881329084241,
    "spotifyId": "7ofatheLbWhDDx1WQ0gM2E"
  },
  {
    "name": "Chamber Pop, 60s",
    "location": "London, UK",
    "lat": 50.40835405401529,
    "lng": -0.9421210091755551,
    "spotifyId": "3Emcn9mreARZ6PpXCNK8Gt"
  },
  {
    "name": "Chill Worldwide",
    "location": "London, UK",
    "lat": 51.981884883415184,
    "lng": 0.8370401290198141,
    "spotifyId": "0ugIbsmXT7xQCF24WvqXTP"
  },
  {
    "name": "City Pop, Funky",
    "location": "Tokyo, Japan",
    "lat": 36.11200804769828,
    "lng": 139.057713714163,
    "spotifyId": "5c97WzcOSqn7YL746H58mF"
  },
  {
    "name": "City Pop, Smooth",
    "location": "Tokyo, Japan",
    "lat": 34.52101333177509,
    "lng": 138.83961919359245,
    "spotifyId": "190cu5KJIW9msJH4L28Om6"
  },
  {
    "name": "Conrad Schnitzler, Starter Pack",
    "location": "Berlin, Germany",
    "lat": 52.46568253781861,
    "lng": 12.226992881598306,
    "spotifyId": "4PLGnyHkSj05PkvsxmcMvM"
  },
  {
    "name": "Country, Classic",
    "location": "Nashville, USA",
    "lat": 35.26257118556427,
    "lng": -87.86780725475748,
    "spotifyId": "2drGk1NoK2uliqh0j3KEIS"
  },
  {
    "name": "Country, Heartbreakers",
    "location": "Nashville, USA",
    "lat": 34.55670691754805,
    "lng": -85.14632473313402,
    "spotifyId": "324FB8PjZlIPTo1iE3goGS"
  },
  {
    "name": "Dancehall / Ragga, Classic",
    "location": "Kingston, Jamaica",
    "lat": 18.781983477148206,
    "lng": -75.88687234821798,
    "spotifyId": "7lvkGgbhbzHwWuhP4eUkZd"
  },
  {
    "name": "Dinner Party Funk",
    "location": "Indianapolis, USA",
    "lat": 41.29299314626487,
    "lng": -84.87719860859882,
    "spotifyId": "2xdrmYvF619UlN3ycp3bNt"
  },
  {
    "name": "Drum & Bass, Dark",
    "location": "London, UK",
    "lat": 51.47771846352219,
    "lng": -1.280556404404,
    "spotifyId": "5UwJ6VzCES8mC1KtAWjwQA"
  },
  {
    "name": "Drum & Bass, Light",
    "location": "London, UK",
    "lat": 53.22563055640445,
    "lng": 1.4543181508891256,
    "spotifyId": "5ZnCWOyyceYfzFPTlQTtt5"
  },
  {
    "name": "Drum & Bass, Liquid",
    "location": "London, UK",
    "lat": 51.13728156262098,
    "lng": -1.546300586925079,
    "spotifyId": "3VvmF9WRJDFtSOswhMhd0u"
  },
  {
    "name": "Dub",
    "location": "Kingston, Jamaica",
    "lat": 18.74577033848706,
    "lng": -77.32334841131137,
    "spotifyId": "5wlP2D6o6MtR3ym9wzBpvU"
  },
  {
    "name": "Dub Techno For The Isolation Tank",
    "location": "Kingston, Jamaica",
    "lat": 18.86669075966175,
    "lng": -78.96617119987519,
    "spotifyId": "5L1uBkB1Qun4adzwC3hyw0"
  },
  {
    "name": "Durutti Column",
    "location": "Manchester, UK",
    "lat": 52.72482089951065,
    "lng": -3.5705373912861345,
    "spotifyId": "0mHgCb5Y5X2jj97bshAZ2O"
  },
  {
    "name": "Dylan Henner",
    "location": "Montreal, Canada",
    "lat": 44.53850951665044,
    "lng": -74.7822880614192,
    "spotifyId": "6SkxYE5NBMEXwEdRyF0u5F"
  },
  {
    "name": "Easy Listening",
    "location": "Los Angeles, USA",
    "lat": 33.635323246610994,
    "lng": -116.9630357821522,
    "spotifyId": "6XMAIFQLPBMpycUI7urUrl"
  },
  {
    "name": "Electronic, Abandoned Cities",
    "location": "Berlin, Germany",
    "lat": 50.85442098228983,
    "lng": 14.411786832571835,
    "spotifyId": "5J3Gkm8Z0MN0jGxlcrgdoq"
  },
  {
    "name": "Electronic, Downtempo",
    "location": "Berlin, Germany",
    "lat": 53.60416941840164,
    "lng": 15.15457891359467,
    "spotifyId": "6v5qQ9Uk0meKPbgy08ZUSe"
  },
  {
    "name": "Electronic, Experimental Chill",
    "location": "Berlin, Germany",
    "lat": 53.59349058646711,
    "lng": 12.174167949380564,
    "spotifyId": "3B5mUKzMnB6dmbjByHTevx"
  },
  {
    "name": "Electronic, Goth Experiments",
    "location": "Berlin, Germany",
    "lat": 53.089819126231255,
    "lng": 12.352497207543372,
    "spotifyId": "2KCZR6Lj2arKEtr0LtGC2v"
  },
  {
    "name": "Electronic, Imaginary Jungles",
    "location": "Berlin, Germany",
    "lat": 51.095674884048314,
    "lng": 13.101361759482355,
    "spotifyId": "3p71pRZMixpIo4cOVAGWHg"
  },
  {
    "name": "Electronic, Industrial Digital Noise Pop",
    "location": "Los Angeles, USA",
    "lat": 34.767461886828286,
    "lng": -118.07328970265802,
    "spotifyId": "3ae9hVmttiHPHxXRjsJpXH"
  },
  {
    "name": "Electronic, Melancholic Breakbeats",
    "location": "Berlin, Germany",
    "lat": 53.60246988507669,
    "lng": 12.56603650234722,
    "spotifyId": "2yaViv3Jmrh40tOwc7DXQz"
  },
  {
    "name": "Electronic, Skittering Beats And Moody Synths",
    "location": "Berlin, Germany",
    "lat": 52.68844893583659,
    "lng": 13.996281602845716,
    "spotifyId": "3CiekaZIGQmJyHus4bQ2ta"
  },
  {
    "name": "Electronic, Unpredictable Rhythms",
    "location": "Berlin, Germany",
    "lat": 50.55862961644107,
    "lng": 14.023639469561436,
    "spotifyId": "52lkyYKaYr641xjWZfVoEY"
  },
  {
    "name": "Electronic, Wonky House And Techno",
    "location": "Detroit, USA",
    "lat": 43.93953725556932,
    "lng": -83.69527076314093,
    "spotifyId": "61zeKfQ3ijwLglhbwrybEG"
  },
  {
    "name": "Electronica, Light",
    "location": "Berlin, Germany",
    "lat": 50.56162010955831,
    "lng": 12.832397757045673,
    "spotifyId": "3xXvYq8t8kfcwEV8ktQMpS"
  },
  {
    "name": "Elvis, Melancholy",
    "location": "Memphis, USA",
    "lat": 35.297688502588606,
    "lng": -91.07220102484278,
    "spotifyId": "3Wo4SCkRNL0gGfB8TXCIHN"
  },
  {
    "name": "Elvis, Rockin’",
    "location": "London, UK",
    "lat": 49.94576695965184,
    "lng": -1.178085216568704,
    "spotifyId": "1UEPQwZNOQ9AGazYrG53vN"
  },
  {
    "name": "Ennio Morricone",
    "location": "Rome, Italy",
    "lat": 40.03413390365519,
    "lng": 10.884143079097754,
    "spotifyId": "4z13KHa9XXWtM7WvuowxmR"
  },
  {
    "name": "Envy",
    "location": "Tokyo, Japan",
    "lat": 34.357641417282096,
    "lng": 137.7266751113498,
    "spotifyId": "6bL8QQmsqpB9TER65zLiEv"
  },
  {
    "name": "Enya",
    "location": "Donegal, Ireland",
    "lat": 54.84012212174718,
    "lng": -9.476046652072,
    "spotifyId": "4KBVVENkjPTtYAfGBuzYTA"
  },
  {
    "name": "Experimental, Ancient",
    "location": "New York, USA",
    "lat": 41.54692900836483,
    "lng": -74.90363464790404,
    "spotifyId": "2TJp9jSy5LgUCvsXVGp0Lf"
  },
  {
    "name": "Experimental, Celestial Digital Pop",
    "location": "Los Angeles, USA",
    "lat": 34.26359454545109,
    "lng": -117.87114171011035,
    "spotifyId": "23xAyUghMaGL37g1cY6EcC"
  },
  {
    "name": "Experimental, Durational Dissonance",
    "location": "New York, USA",
    "lat": 40.259834966425196,
    "lng": -73.21993810471783,
    "spotifyId": "29KTqtOetJjYWtq9Sx43uN"
  },
  {
    "name": "Experimental, Dying Cities",
    "location": "New York, USA",
    "lat": 42.30786855784078,
    "lng": -74.36803802272779,
    "spotifyId": "6hjHs1OP9N81cjBWaloK2U"
  },
  {
    "name": "Experimental, Guitar Glitch Ambient",
    "location": "London, UK",
    "lat": 51.48102181647857,
    "lng": -1.5223526180022324,
    "spotifyId": "3O4xMBJh0FzRB9VQzhlrHT"
  },
  {
    "name": "Experimental, Guitar Haze",
    "location": "New York, USA",
    "lat": 41.953927773413405,
    "lng": -73.3646972935997,
    "spotifyId": "2SHxGmuZ2HujiioJaD27FO"
  },
  {
    "name": "Fennesz ",
    "location": "Vienna, Austria",
    "lat": 48.98226875777424,
    "lng": 16.627381301745167,
    "spotifyId": "4qYg98RGnv7dgvPI1nUMS0"
  },
  {
    "name": "Fennesz, Starter Pack",
    "location": "Vienna, Austria",
    "lat": 46.93797402623258,
    "lng": 14.461261343199583,
    "spotifyId": "4t40RSBwcNxMqJydp1uAey"
  },
  {
    "name": "Flamenco",
    "location": "Seville, Spain",
    "lat": 37.2764869551357,
    "lng": -5.811577406901863,
    "spotifyId": "45ef5ZFbUS1A9xbdN1z0UI"
  },
  {
    "name": "Flamenco, Bulerías",
    "location": "Seville, Spain",
    "lat": 38.6004176553801,
    "lng": -5.157044504732541,
    "spotifyId": "6GEueaSM77AsYCxWyzwPMu"
  },
  {
    "name": "Flamenco, Guitar",
    "location": "Seville, Spain",
    "lat": 38.943775389174355,
    "lng": -7.386010026718546,
    "spotifyId": "2ogFcAiym0RFZcCBeZjt15"
  },
  {
    "name": "Flanger",
    "location": "Cologne, Germany",
    "lat": 52.74041138275701,
    "lng": 6.456735424158255,
    "spotifyId": "7o2cxVKUaI9AZGWZRkL9tU"
  },
  {
    "name": "France, Vintage Mellow",
    "location": "Paris, France",
    "lat": 47.04907657240068,
    "lng": 0.5029689248686333,
    "spotifyId": "0ncTGb5nYCSgaOUkd1x712"
  },
  {
    "name": "France, Vintage Pop",
    "location": "Paris, France",
    "lat": 48.9493789211832,
    "lng": 2.182532743835478,
    "spotifyId": "4t1W7mhETrnjU2Pf80xwrw"
  },
  {
    "name": "Frank Zappa, Chill",
    "location": "Los Angeles, USA",
    "lat": 34.5103467761164,
    "lng": -117.74113114344848,
    "spotifyId": "6ytlQprNhQfq9ffoRfRQd8"
  },
  {
    "name": "Frank Zappa, Doo Wop",
    "location": "Los Angeles, USA",
    "lat": 32.884427245405895,
    "lng": -118.35406923988377,
    "spotifyId": "6mgF0aptvQFOXqzhQUd5as"
  },
  {
    "name": "Frank Zappa, Guitar",
    "location": "Los Angeles, USA",
    "lat": 33.63361811303589,
    "lng": -118.40999771794262,
    "spotifyId": "4ajFPfYGS3qWNBqayn657a"
  },
  {
    "name": "Frank Zappa, Psychedelic Pop",
    "location": "Los Angeles, USA",
    "lat": 33.862694608607555,
    "lng": -119.85216561278864,
    "spotifyId": "29wlJpS2YVtkhrfZhVJnS6"
  },
  {
    "name": "Fumio Miyashita",
    "location": "Tokyo, Japan",
    "lat": 36.035214503977066,
    "lng": 139.21865647610767,
    "spotifyId": "6TlFQBfaT09Wn2KQJwLS8Y"
  },
  {
    "name": "Fumio Miyashita, Ambient",
    "location": "London, UK",
    "lat": 50.351661058939165,
    "lng": 0.09737960564308482,
    "spotifyId": "4mvVlZQtTUyjZrp861cA5E"
  },
  {
    "name": "Fumio Miyashita, Oddballs",
    "location": "Tokyo, Japan",
    "lat": 35.78514167162548,
    "lng": 139.45650645552217,
    "spotifyId": "6NxExdlX7s1guOiOV113vS"
  },
  {
    "name": "Funk, Worldwide",
    "location": "Indianapolis, USA",
    "lat": 40.587724137757135,
    "lng": -86.79308088592887,
    "spotifyId": "2xFyXwFri0tdL8nxpgOC9q"
  },
  {
    "name": "Grouper",
    "location": "Portland, USA",
    "lat": 45.92489966546444,
    "lng": -120.69895778392454,
    "spotifyId": "5glbvGn5xSIdz9YrJOGsB8"
  },
  {
    "name": "Haunted Ballroom, Happy",
    "location": "London, UK",
    "lat": 50.26379025307584,
    "lng": 0.6417987215766235,
    "spotifyId": "0xZOcwDqdlXIlPMJ9s1Hpn"
  },
  {
    "name": "Haunted Ballroom, Sad",
    "location": "London, UK",
    "lat": 49.88702226827459,
    "lng": -1.4972069360984064,
    "spotifyId": "2FpnkcZ4t7bk2U2ZOwBFo1"
  },
  {
    "name": "Hip-Hop, 1985-1992",
    "location": "New York, USA",
    "lat": 41.20239287865357,
    "lng": -73.58046328511664,
    "spotifyId": "6qvYFMl5Oi20xDwp3NI2m1"
  },
  {
    "name": "Hip-Hop, 90s / 00s Lyricists",
    "location": "New York, USA",
    "lat": 42.26796000075468,
    "lng": -72.7859254829748,
    "spotifyId": "6JamVsgQovLlEJpeRSZNm0"
  },
  {
    "name": "Hip-Hop, Dusty",
    "location": "New York, USA",
    "lat": 39.02650745879986,
    "lng": -75.98267176375298,
    "spotifyId": "0HxkDTZ7Rn6MPc1cxW5Ebo"
  },
  {
    "name": "Hip-Hop, Hard Beats",
    "location": "New York, USA",
    "lat": 42.06007030604561,
    "lng": -72.01498588296536,
    "spotifyId": "1BMah5LPTWE3neS65MAPuw"
  },
  {
    "name": "Hip-Hop, Instrumentals",
    "location": "New York, USA",
    "lat": 41.95635454512335,
    "lng": -72.55538224670832,
    "spotifyId": "7Ga6hmUrgNYSTjv9QB0AkN"
  },
  {
    "name": "Hip-Hop, Melancholy",
    "location": "New York, USA",
    "lat": 39.31658656889202,
    "lng": -75.22698169538705,
    "spotifyId": "0KgOIkKdusJaNacdLIiTLq"
  },
  {
    "name": "Hip-Hop, Neo-Soul",
    "location": "New York, USA",
    "lat": 40.14673435464898,
    "lng": -75.01602868028085,
    "spotifyId": "4GaYoCJDi3Qhe98OpfbjSB"
  },
  {
    "name": "House, Ambient",
    "location": "Chicago, USA",
    "lat": 39.97906806829338,
    "lng": -87.96404695634777,
    "spotifyId": "29JLxwF7qgz9U728ItoXDq"
  },
  {
    "name": "House, Classic",
    "location": "Chicago, USA",
    "lat": 43.53532538322908,
    "lng": -88.7769325345235,
    "spotifyId": "5N38RVZ9Gb5QGBitpKkQFo"
  },
  {
    "name": "House, Deep",
    "location": "Chicago, USA",
    "lat": 40.43095787577264,
    "lng": -86.16563155523296,
    "spotifyId": "5t5TERlOsq8FCNCmTWruAd"
  },
  {
    "name": "House, Dusty",
    "location": "Chicago, USA",
    "lat": 43.427413601000026,
    "lng": -88.97915470071534,
    "spotifyId": "6dIDWTQUSAhtXRI5yaQDIk"
  },
  {
    "name": "House, Melodic",
    "location": "Chicago, USA",
    "lat": 42.35319161549067,
    "lng": -86.59007781574687,
    "spotifyId": "1JzVHpTufezNSitui6Ffy9"
  },
  {
    "name": "Ida",
    "location": "New York, USA",
    "lat": 39.49048584556625,
    "lng": -74.78953989388168,
    "spotifyId": "2p1KJJdxxHv0dCYAyeCTnq"
  },
  {
    "name": "IDM, Sweet Melodic",
    "location": "Sheffield, UK",
    "lat": 53.23980077259585,
    "lng": 0.256235922858973,
    "spotifyId": "6aIvMUe2j5VhKg3xwyBvwk"
  },
  {
    "name": "Italo, Classic",
    "location": "Milan, Italy",
    "lat": 45.52122023800978,
    "lng": 8.1795340549902,
    "spotifyId": "7sDbuu4ieGAH7UBsYHKP1m"
  },
  {
    "name": "Jamaica, Laidback Reggae",
    "location": "Kingston, Jamaica",
    "lat": 16.508693936140208,
    "lng": -77.17098619331459,
    "spotifyId": "0fKO5OJH3s9Q22I2jZugHj"
  },
  {
    "name": "Jamaica, Lovers Rock",
    "location": "Kingston, Jamaica",
    "lat": 18.287279588649845,
    "lng": -77.4131289654437,
    "spotifyId": "0k2zxQo8Edl0CETWtWc55A"
  },
  {
    "name": "Jamaica, Vintage Pop",
    "location": "Kingston, Jamaica",
    "lat": 17.704468939055175,
    "lng": -79.20116549672369,
    "spotifyId": "7J6zWe0hmH2nLTJIkOp8my"
  },
  {
    "name": "Jazz, Cool",
    "location": "New Orleans, USA",
    "lat": 31.41492224111217,
    "lng": -91.52560014417247,
    "spotifyId": "5EeajVJruvEUJVMZpN46CV"
  },
  {
    "name": "Jazz, Funk",
    "location": "New Orleans, USA",
    "lat": 29.74907341731882,
    "lng": -88.7345494511825,
    "spotifyId": "2WnZsaSgobROLPhOchSJHd"
  },
  {
    "name": "Joel Vandroogenbroeck",
    "location": "Brussels, Belgium",
    "lat": 51.4850012782919,
    "lng": 4.377695725123615,
    "spotifyId": "4HghV31aYNXfJ4Trya75LO"
  },
  {
    "name": "Juan Atkins",
    "location": "Detroit, USA",
    "lat": 41.6884325373335,
    "lng": -81.15942257638788,
    "spotifyId": "1ptQmt2hZgvdOxQEwcHyr6"
  },
  {
    "name": "Kaitlyn Aurelia Smith",
    "location": "Seattle, USA",
    "lat": 48.11099939240187,
    "lng": -120.71454593246123,
    "spotifyId": "0udTXhkUWAdtzrOiEJiz39"
  },
  {
    "name": "Kosmische, Experimental",
    "location": "Düsseldorf, Germany",
    "lat": 51.26237072162707,
    "lng": 7.3874429862737285,
    "spotifyId": "3sjgWUk3ERcgJ8MB6MQbKk"
  },
  {
    "name": "Kosmische, Hard",
    "location": "Düsseldorf, Germany",
    "lat": 51.6039568186965,
    "lng": 4.891444346407768,
    "spotifyId": "6LIC0W2ofmB70zF6sdCFpN"
  },
  {
    "name": "Kosmische, Soft",
    "location": "Düsseldorf, Germany",
    "lat": 49.986665341449694,
    "lng": 6.777607816827507,
    "spotifyId": "7E7C6yWwLIH94UD04IgxMp"
  },
  {
    "name": "Krautrock, Jams",
    "location": "Düsseldorf, Germany",
    "lat": 51.22514024692319,
    "lng": 5.732919136766048,
    "spotifyId": "0hAxNZJSIZm7HXuXHb27Oc"
  },
  {
    "name": "Latin, Classic",
    "location": "Mexico City, Mexico",
    "lat": 18.348179542822677,
    "lng": -97.21141894249573,
    "spotifyId": "1gqMzx9sBjxqV7KZdklX6D"
  },
  {
    "name": "Latin, Melancholic Electronic",
    "location": "Mexico City, Mexico",
    "lat": 19.625171781967435,
    "lng": -99.15409975770827,
    "spotifyId": "4gWPyGP3YQ0pEwvjGrppui"
  },
  {
    "name": "Lounge, Chill",
    "location": "Las Vegas, USA",
    "lat": 37.621722366684544,
    "lng": -117.0331903489825,
    "spotifyId": "0i1OLsMet1wIinprJ1RwpU"
  },
  {
    "name": "Lounge, Kicking",
    "location": "Las Vegas, USA",
    "lat": 34.323441959675456,
    "lng": -113.19459767267278,
    "spotifyId": "5zevzkyYsElZjgXshRRk7X"
  },
  {
    "name": "Low",
    "location": "Duluth, USA",
    "lat": 45.61604320111324,
    "lng": -91.4125077151857,
    "spotifyId": "2fdrBObWM9Z3zwc0fvED1K"
  },
  {
    "name": "Low, Experimental",
    "location": "Duluth, USA",
    "lat": 46.044710762922556,
    "lng": -91.17038083003479,
    "spotifyId": "23rnPLrs43FaApw9iEKcKI"
  },
  {
    "name": "Low, Heartbreakers",
    "location": "Duluth, USA",
    "lat": 46.217120727529846,
    "lng": -91.97542208175425,
    "spotifyId": "4CISczSdnqptCJwJMLmX44"
  },
  {
    "name": "Low, Starter Pack",
    "location": "Duluth, USA",
    "lat": 46.1661510583812,
    "lng": -92.58209661629851,
    "spotifyId": "34VDXlkPoDtWY4HJiUSS0S"
  },
  {
    "name": "Minimal, Dark, And Cold Wave",
    "location": "Berlin, Germany",
    "lat": 53.660206585358274,
    "lng": 13.349941205949342,
    "spotifyId": "2QTLDWD5tkHyT8NoBL6vc1"
  },
  {
    "name": "Minimalism",
    "location": "Berlin, Germany",
    "lat": 53.608511677769734,
    "lng": 13.57148778962664,
    "spotifyId": "3KyFoSqEO5wfH1caFk0wcQ"
  },
  {
    "name": "Motorik, Driving",
    "location": "Düsseldorf, Germany",
    "lat": 53.059279078375404,
    "lng": 5.326751439643087,
    "spotifyId": "0i8MbevtK0NobhOG6Pl6M2"
  },
  {
    "name": "Motorik, Experimental",
    "location": "Düsseldorf, Germany",
    "lat": 51.45188133920633,
    "lng": 6.731200164014769,
    "spotifyId": "6e7ichVtHQy7lrCYZmL91D"
  },
  {
    "name": "Motorik, Heavy",
    "location": "Düsseldorf, Germany",
    "lat": 51.67194840712509,
    "lng": 8.01748478627994,
    "spotifyId": "69S7ZCU4vIxl79SkQsunNr"
  },
  {
    "name": "Motorik, Kosmische",
    "location": "Düsseldorf, Germany",
    "lat": 49.30302898920169,
    "lng": 8.29607736445469,
    "spotifyId": "6kk2eEo7frhsy1M3JJYAtr"
  },
  {
    "name": "Motorik, Pop",
    "location": "Düsseldorf, Germany",
    "lat": 50.92767574656591,
    "lng": 6.08312556307481,
    "spotifyId": "1Rw3Poaf3tKq3CpL9JDhj4"
  },
  {
    "name": "New Age",
    "location": "Los Angeles, USA",
    "lat": 35.39797508501897,
    "lng": -119.86567274388696,
    "spotifyId": "1WimpreVw6J5FncbYTnEQL"
  },
  {
    "name": "Pacific Island, Chill",
    "location": "Suva, Fiji",
    "lat": -16.167869120179688,
    "lng": 178.3115107238298,
    "spotifyId": "7cixJXs6wfbIB9Bq5mWUDU"
  },
  {
    "name": "Pedro The Lion",
    "location": "Seattle, USA",
    "lat": 47.22051123781927,
    "lng": -122.8501498542175,
    "spotifyId": "3vWeZg8Wc05IcM997IjZTR"
  },
  {
    "name": "Pete Namlook, Beatless",
    "location": "Frankfurt, Germany",
    "lat": 48.64714873580246,
    "lng": 8.002946155294113,
    "spotifyId": "0122aW4M9yQf5jURVCqKxg"
  },
  {
    "name": "Pete Namlook, Beats",
    "location": "Frankfurt, Germany",
    "lat": 50.93933387846096,
    "lng": 10.367974958352576,
    "spotifyId": "0EBrHLUMkJ7KDT0mB3SHHp"
  },
  {
    "name": "Pete Namlook, Starter Pack",
    "location": "Frankfurt, Germany",
    "lat": 51.57623752075879,
    "lng": 7.881415300072861,
    "spotifyId": "7t6BWfX2yATUESHBjjT8GL"
  },
  {
    "name": "Piano Magic",
    "location": "London, UK",
    "lat": 51.184466792477615,
    "lng": 0.4533388541908915,
    "spotifyId": "4INhC3FsHQjrSkT32DQ3O1"
  },
  {
    "name": "Piano Magic, Starter Pack",
    "location": "London, UK",
    "lat": 52.97791671235373,
    "lng": 0.01892944375835684,
    "spotifyId": "1CW3BeW1dhuoeYQmpJxTlb"
  },
  {
    "name": "Piero Umiliani",
    "location": "Rome, Italy",
    "lat": 41.33759015802769,
    "lng": 13.056337211466214,
    "spotifyId": "5qskBZ5AtoFhxuSlHfzPu9"
  },
  {
    "name": "Plaid",
    "location": "London, UK",
    "lat": 51.573097424474085,
    "lng": -0.09157723347511335,
    "spotifyId": "7IBdDhAQhkQf7yb4FD5uG7"
  },
  {
    "name": "Pop, Widescreen",
    "location": "Los Angeles, USA",
    "lat": 34.89587833213616,
    "lng": -117.87551322766518,
    "spotifyId": "7nMMHEndjoyS1pRUUUFdsb"
  },
  {
    "name": "Popol Vuh",
    "location": "Munich, Germany",
    "lat": 47.51896510871089,
    "lng": 13.5585559164726,
    "spotifyId": "4JNaiwn6gILzPhBZuY6XVT"
  },
  {
    "name": "Post-Hardcore",
    "location": "Washington DC, USA",
    "lat": 37.73512738465864,
    "lng": -75.4100879543124,
    "spotifyId": "0Y3tf9n3ZoeCPjcaOVUCK4"
  },
  {
    "name": "Post-Rock, Abstract & Experimental",
    "location": "London, UK",
    "lat": 51.08798773313872,
    "lng": -0.41699988818187117,
    "spotifyId": "0Ndfmhc9g1RZf3Vj3V0p2I"
  },
  {
    "name": "Post-Rock, Chiming Guitars",
    "location": "London, UK",
    "lat": 53.35567470430001,
    "lng": 0.22540332213591144,
    "spotifyId": "1LWecnTljQAO3XzGF80mGX"
  },
  {
    "name": "Post-Rock, Crescendo-Core",
    "location": "London, UK",
    "lat": 52.45905818224643,
    "lng": 0.13257012568053086,
    "spotifyId": "1mZVsDWQWDp1TU5vxzmCUu"
  },
  {
    "name": "Post-Rock, Floating",
    "location": "London, UK",
    "lat": 49.68322185390837,
    "lng": -1.0256162456538302,
    "spotifyId": "39eDp2FU6Ycl6L71U4x1kP"
  },
  {
    "name": "Post-Rock, Hushed",
    "location": "London, UK",
    "lat": 53.143868241815355,
    "lng": 1.2111737522238968,
    "spotifyId": "103DjsnbAe66QM3TxarGOH"
  },
  {
    "name": "Post-Rock, Menacing",
    "location": "London, UK",
    "lat": 50.861836121221216,
    "lng": -1.15620626763291,
    "spotifyId": "2EYWNrvf9YZ13CKnWmugMA"
  },
  {
    "name": "R&B, 00s Dance",
    "location": "Detroit, USA",
    "lat": 41.02391645510325,
    "lng": -83.09735113560761,
    "spotifyId": "1LERLunLhB8ZQgF3ac2uld"
  },
  {
    "name": "R&B, 00s Smooth",
    "location": "Detroit, USA",
    "lat": 43.04460056406267,
    "lng": -84.3229301281944,
    "spotifyId": "3V8pm5kg6Mtrn9ZG9BRjHC"
  },
  {
    "name": "R&B, 2020s Dance",
    "location": "Detroit, USA",
    "lat": 43.49776337575345,
    "lng": -83.36220741350373,
    "spotifyId": "4eAWxVJ0lFbdnJtH1zwPj1"
  },
  {
    "name": "R&B, 80s Dance",
    "location": "Detroit, USA",
    "lat": 41.47835639999726,
    "lng": -84.0932290285584,
    "spotifyId": "0nelOIguQDxjvlnjxsYUPk"
  },
  {
    "name": "R&B, 80s Smooth",
    "location": "Detroit, USA",
    "lat": 43.921496742535254,
    "lng": -84.85605799161495,
    "spotifyId": "1jR541cL9M86SENJLo8C5Z"
  },
  {
    "name": "R&B, 90s",
    "location": "Detroit, USA",
    "lat": 41.80548805734901,
    "lng": -84.70960630439501,
    "spotifyId": "7kBpPxfVfDjabvWJTERN9m"
  },
  {
    "name": "R&B, 90s Smooth",
    "location": "Detroit, USA",
    "lat": 43.71549804050054,
    "lng": -83.76060250035276,
    "spotifyId": "7iqiTMs0ioTzq8JborXxww"
  },
  {
    "name": "R&B, Baby Makers",
    "location": "Detroit, USA",
    "lat": 43.520304417234115,
    "lng": -84.24003833903801,
    "spotifyId": "2HrMsMr8MwvDzVksVLecU0"
  },
  {
    "name": "R&B, Contemporary Melancholy",
    "location": "Detroit, USA",
    "lat": 41.126050460341744,
    "lng": -81.62911687025941,
    "spotifyId": "2IPPTvXMybu0a7Kxpucyt6"
  },
  {
    "name": "R&B, Disco/Funk",
    "location": "Indianapolis, USA",
    "lat": 38.889909879302024,
    "lng": -87.87031801819441,
    "spotifyId": "4sU6xgGgzq1rvTwIr9pn2g"
  },
  {
    "name": "R&B, Early 90s Dance",
    "location": "Detroit, USA",
    "lat": 41.26870374857268,
    "lng": -83.56122593803163,
    "spotifyId": "2TuogtPJDz41rGTuU65h7t"
  },
  {
    "name": "R&B, Insecure",
    "location": "Detroit, USA",
    "lat": 42.43359854574699,
    "lng": -84.5449331220993,
    "spotifyId": "0HRVcXDzzd94E4QHti4PsF"
  },
  {
    "name": "R&B, Late 90s Dance",
    "location": "Detroit, USA",
    "lat": 41.494636582582515,
    "lng": -84.76642946182797,
    "spotifyId": "5NIKQD4Prb46y8q6abIZbr"
  },
  {
    "name": "R&B, Neo-Soul",
    "location": "Detroit, USA",
    "lat": 43.034283227607546,
    "lng": -84.81463330226664,
    "spotifyId": "55CZUkRj0yN2EjdgEcV6MK"
  },
  {
    "name": "R&B, New Jack Swing",
    "location": "Detroit, USA",
    "lat": 41.778182586507725,
    "lng": -84.85972891382151,
    "spotifyId": "7uPA4n8Iczp12iCCaOSQEc"
  },
  {
    "name": "R&B, Vintage Dreamy",
    "location": "Detroit, USA",
    "lat": 42.010225490186016,
    "lng": -83.9658248019254,
    "spotifyId": "6IVx23etgXXegE3RsxSGCG"
  },
  {
    "name": "Rock, 60s Beat",
    "location": "London, UK",
    "lat": 50.480542177159876,
    "lng": -1.9260747709571888,
    "spotifyId": "5G5wz4LA2FTM6bFWlC5RYl"
  },
  {
    "name": "Rock, Classic Rock Radio",
    "location": "London, UK",
    "lat": 51.85411814109875,
    "lng": 1.4771058370934422,
    "spotifyId": "7jboEdkfT4WVRFsfkEB0PT"
  },
  {
    "name": "Rock, Early",
    "location": "London, UK",
    "lat": 53.32702991682345,
    "lng": 0.29917789067113143,
    "spotifyId": "31058wKDUlYfoDC2CaQbJO"
  },
  {
    "name": "Roedelius",
    "location": "Berlin, Germany",
    "lat": 51.55127631014707,
    "lng": 14.985718629949147,
    "spotifyId": "6QlB6lCFuciiXnqtFVCrSG"
  },
  {
    "name": "Sad Sierréño",
    "location": "Monterrey, Mexico",
    "lat": 25.24129406520092,
    "lng": -101.60945276116342,
    "spotifyId": "4CuRoDiG1XkYAfyVbYudn2"
  },
  {
    "name": "Sad Songs",
    "location": "London, UK",
    "lat": 49.85750306689671,
    "lng": -0.563796354956929,
    "spotifyId": "3pODeVmPFBJWIEHdqe2JOw"
  },
  {
    "name": "Sad Songs, Vintage",
    "location": "New York, USA",
    "lat": 42.307698500264095,
    "lng": -72.4202601947028,
    "spotifyId": "1d1uxdit0qouRB8HSSZkYK"
  },
  {
    "name": "Sadcore",
    "location": "Boston, USA",
    "lat": 40.94000939626456,
    "lng": -72.91412232736118,
    "spotifyId": "7M2YkCrreZcCo1y2dAezji"
  },
  {
    "name": "Schaffel Brutal",
    "location": "Frankfurt, Germany",
    "lat": 51.209694896239384,
    "lng": 8.171766253797418,
    "spotifyId": "6blmqbvsh35nfQsnaShov1"
  },
  {
    "name": "Schaffel Dance",
    "location": "Frankfurt, Germany",
    "lat": 51.77474336998597,
    "lng": 9.050027138974585,
    "spotifyId": "3SQMC9fmX7TDhisrrUPJYv"
  },
  {
    "name": "Schaffel Pop",
    "location": "Frankfurt, Germany",
    "lat": 51.054960209405166,
    "lng": 9.391005947815056,
    "spotifyId": "79BmpH4MjeMOXURUAKtkqP"
  },
  {
    "name": "Sigur Ros",
    "location": "Reykjavik, Iceland",
    "lat": 65.98074692495302,
    "lng": -23.628912533571068,
    "spotifyId": "68lX5odNBw4ZUIf6lwuD0K"
  },
  {
    "name": "Ska, 1st Wave",
    "location": "Kingston, Jamaica",
    "lat": 17.092301241193304,
    "lng": -78.16630188701257,
    "spotifyId": "3J41W0OJt9rZ7aXp0YxgVq"
  },
  {
    "name": "Ska, 2nd Wave",
    "location": "Kingston, Jamaica",
    "lat": 19.549258959647076,
    "lng": -76.00968334478138,
    "spotifyId": "5Xlen6tPKCFsZmLdIur3oc"
  },
  {
    "name": "Ska, Punk",
    "location": "Kingston, Jamaica",
    "lat": 16.18470234886072,
    "lng": -78.60906874696336,
    "spotifyId": "5NGjyh1cP001mb0Vj7eI2i"
  },
  {
    "name": "Ska, Revival",
    "location": "Kingston, Jamaica",
    "lat": 20.02185234165518,
    "lng": -79.07537025207263,
    "spotifyId": "01WFsmlAOEFrhvWv2wmlMQ"
  },
  {
    "name": "Slowcore",
    "location": "Boston, USA",
    "lat": 44.03142860167834,
    "lng": -71.75363804666425,
    "spotifyId": "2BImwtu5N4w8ISUyEz02KY"
  },
  {
    "name": "Solo Guitar",
    "location": "Seville, Spain",
    "lat": 37.55687715787536,
    "lng": -6.011827702456348,
    "spotifyId": "5wsUdlQfWxJgY0fs4EQlCp"
  },
  {
    "name": "Soukous, Chill",
    "location": "Kinshasa, DRC",
    "lat": -3.3508201965205933,
    "lng": 16.280985860636804,
    "spotifyId": "0prgQ5apMfwDfibjmBSOQC"
  },
  {
    "name": "Soukous, Dance",
    "location": "Kinshasa, DRC",
    "lat": -4.228420226760527,
    "lng": 13.482747950365077,
    "spotifyId": "6adaBoksgJLDOLG3EAXyFS"
  },
  {
    "name": "Stereolab",
    "location": "London, UK",
    "lat": 53.22508971833124,
    "lng": 1.8290806235406627,
    "spotifyId": "6MTgMAQnjy5Mndnnkp7IqF"
  },
  {
    "name": "Stereolab, Chill",
    "location": "London, UK",
    "lat": 52.22849305664536,
    "lng": 1.4273083993425295,
    "spotifyId": "4mCw3o2IsXlrOSNBPcmeAP"
  },
  {
    "name": "Stereolab, Rocking",
    "location": "London, UK",
    "lat": 52.26141964704527,
    "lng": 0.9714055214686704,
    "spotifyId": "72OdLCCGcitJIa73G4mNzm"
  },
  {
    "name": "Stereolab, Starter Pack",
    "location": "London, UK",
    "lat": 51.96806089605999,
    "lng": -1.5346028948620252,
    "spotifyId": "78ztWdz2a8IHzeE07OlhNG"
  },
  {
    "name": "Stereolab, Trance",
    "location": "Frankfurt, Germany",
    "lat": 49.83623456776167,
    "lng": 9.113655658605678,
    "spotifyId": "5r8IaxNi8opFwLoyCesOyo"
  },
  {
    "name": "STL",
    "location": "Stockholm, Sweden",
    "lat": 60.90105877948393,
    "lng": 17.1320733345861,
    "spotifyId": "7KHbhmrCNBAfNV3RjtI2Z1"
  },
  {
    "name": "Summer Patio Songs",
    "location": "London, UK",
    "lat": 53.10845766157842,
    "lng": -0.7013397465539896,
    "spotifyId": "3MeQb9w6DyBDUPsCSFm0AV"
  },
  {
    "name": "Sunday Morning Songs",
    "location": "London, UK",
    "lat": 49.99579027153152,
    "lng": -0.8239316625210943,
    "spotifyId": "2f2vaWoVuRwFRe8TWyZMNf"
  },
  {
    "name": "Synth, Cinematic Soundtracks",
    "location": "Düsseldorf, Germany",
    "lat": 50.29866149162571,
    "lng": 6.745768301539572,
    "spotifyId": "1EYi0qpdz5Bjg4VKU72pgw"
  },
  {
    "name": "Synth, Ecstatic Minimalist Experiments",
    "location": "Berlin, Germany",
    "lat": 50.770354369569944,
    "lng": 14.240925987481976,
    "spotifyId": "23kwbD9v5OwL5NttI5Wi7L"
  },
  {
    "name": "Synth, Foggy German Forest",
    "location": "Düsseldorf, Germany",
    "lat": 50.878621249433934,
    "lng": 6.05565816403057,
    "spotifyId": "3fqFDtNtJD6c944JqR3BJk"
  },
  {
    "name": "Synth, Modular Experiments",
    "location": "Düsseldorf, Germany",
    "lat": 49.87455491239923,
    "lng": 7.916384109735345,
    "spotifyId": "6PX1l0rEh8qic58XWicjCW"
  },
  {
    "name": "Synth, Modular Heartstrings",
    "location": "Düsseldorf, Germany",
    "lat": 50.750208385035684,
    "lng": 7.3726187356587,
    "spotifyId": "52u7Symo7F5rSXMiZYZQM0"
  },
  {
    "name": "Synth, Mysterious And Meandering",
    "location": "Düsseldorf, Germany",
    "lat": 51.03003893635772,
    "lng": 6.055353450520284,
    "spotifyId": "01xadoQPTcurDz1D0N0gaS"
  },
  {
    "name": "Synth, Pop 80s",
    "location": "Los Angeles, USA",
    "lat": 34.60271064942312,
    "lng": -119.22230446493354,
    "spotifyId": "14gNQFofbgehKbjuGRDjYF"
  },
  {
    "name": "Synth, Pop Dystopia",
    "location": "Los Angeles, USA",
    "lat": 32.679888784686334,
    "lng": -116.42627016477243,
    "spotifyId": "51CCISbMvqoCtPGBtzBu4z"
  },
  {
    "name": "Synth, Pop Melancholy",
    "location": "Los Angeles, USA",
    "lat": 35.00003133423978,
    "lng": -118.82677215135325,
    "spotifyId": "5FWVC2i6UmcRnNIpglIPza"
  },
  {
    "name": "Synth, Pop Oddballs",
    "location": "Los Angeles, USA",
    "lat": 35.141010510299246,
    "lng": -120.12047164210371,
    "spotifyId": "35T8R9tnyLaWoUxsvbFUso"
  },
  {
    "name": "Tangerine Dream",
    "location": "Berlin, Germany",
    "lat": 54.12314948268598,
    "lng": 14.774104964483186,
    "spotifyId": "4udXDYPVQkrNtO3kFnNTf8"
  },
  {
    "name": "Tangerine Dream, Starter Pack",
    "location": "Berlin, Germany",
    "lat": 52.48376481031712,
    "lng": 14.897986898377837,
    "spotifyId": "50XdE7dVALQlWqWUsP9DFB"
  },
  {
    "name": "Techno, Ambient",
    "location": "Detroit, USA",
    "lat": 42.44995895390463,
    "lng": -84.745936521513,
    "spotifyId": "6hbscYG3B064ISp7YG7xQN"
  },
  {
    "name": "Techno, Banging",
    "location": "Detroit, USA",
    "lat": 41.962572650987696,
    "lng": -83.66630479071114,
    "spotifyId": "4o0c8W5Id10GtkYk3oy3kT"
  },
  {
    "name": "Techno, Classic",
    "location": "Detroit, USA",
    "lat": 42.37698882634191,
    "lng": -83.67483950154602,
    "spotifyId": "5KbaR8a7zeviUEcXaRhdeY"
  },
  {
    "name": "Techno, Underwater",
    "location": "Detroit, USA",
    "lat": 41.64065585071645,
    "lng": -81.97546282187679,
    "spotifyId": "7KWwgSvlc6BD9wNJu42jBJ"
  },
  {
    "name": "Techno, Warehouse",
    "location": "Detroit, USA",
    "lat": 41.46136619773664,
    "lng": -83.72696672204087,
    "spotifyId": "6QGMgg9EajTWLqnU4oudMB"
  },
  {
    "name": "Trance, Ambient",
    "location": "Frankfurt, Germany",
    "lat": 50.85389607376223,
    "lng": 10.054014945833547,
    "spotifyId": "18LxXda7N8s9t6zd3BUL8q"
  },
  {
    "name": "Trance, Experimental",
    "location": "Frankfurt, Germany",
    "lat": 51.82905709343531,
    "lng": 8.980575103693562,
    "spotifyId": "53OY7nCXvUT4FTsufqPMm4"
  },
  {
    "name": "Turkey, Psych Funk",
    "location": "Istanbul, Turkey",
    "lat": 40.573455214936004,
    "lng": 28.568733735566212,
    "spotifyId": "3C3HHuZvOnCfhajCGvRL8F"
  },
  {
    "name": "Vintage, Dreamy Melancholy",
    "location": "New York, USA",
    "lat": 41.00856662748118,
    "lng": -74.48739019667507,
    "spotifyId": "6AerysrLyESVjtAPpok7NY"
  },
  {
    "name": "Vocal Groups, Sad",
    "location": "New York, USA",
    "lat": 41.82329328150044,
    "lng": -73.69100461794599,
    "spotifyId": "3X8frQ1tWM5SSmGhns0pYb"
  },
  {
    "name": "Yet They Say, Vol. 1",
    "location": "London, UK",
    "lat": 52.947552911599814,
    "lng": -0.7785172019257883,
    "spotifyId": "0jmp8wWpPIkGWg5nm4LNwe"
  },
  {
    "name": "Yet They Say, Vol. 10",
    "location": "London, UK",
    "lat": 53.41633432563777,
    "lng": 1.3999086751662027,
    "spotifyId": "0M6rPpreVz86WKq0Ag6kFO"
  },
  {
    "name": "Yet They Say, Vol. 2",
    "location": "London, UK",
    "lat": 52.16867047265981,
    "lng": -1.33088376738686,
    "spotifyId": "21MO7VSPe24bjCOtdt2wrg"
  },
  {
    "name": "Yet They Say, Vol. 3",
    "location": "London, UK",
    "lat": 50.17448550581206,
    "lng": -1.9494814643768266,
    "spotifyId": "3DDwCdkwUPEcDQbdwGmjVW"
  },
  {
    "name": "Yet They Say, Vol. 4",
    "location": "London, UK",
    "lat": 49.757190632301715,
    "lng": -1.6636484055931844,
    "spotifyId": "6sdKnK1EXsLMGGwikpV84x"
  },
  {
    "name": "Yet They Say, Vol. 5",
    "location": "London, UK",
    "lat": 51.63263870597832,
    "lng": 1.1517425734006366,
    "spotifyId": "6phFkBNKX9DPKjczwMr0lx"
  },
  {
    "name": "Yet They Say, Vol. 6",
    "location": "London, UK",
    "lat": 52.446977530645995,
    "lng": -0.7081460048217098,
    "spotifyId": "0ZnY8eOB1DHCLdg2QG5Rjh"
  },
  {
    "name": "Yet They Say, Vol. 7",
    "location": "London, UK",
    "lat": 49.786394066894914,
    "lng": -1.1649487315284495,
    "spotifyId": "1dIQnuEk89elNqWJ2TwCP3"
  },
  {
    "name": "Yet They Say, Vol. 8",
    "location": "London, UK",
    "lat": 50.3520579469211,
    "lng": 1.3968839113957772,
    "spotifyId": "751iikDbmoyjUBeWFSfWaN"
  },
  {
    "name": "Yet They Say, Vol. 9",
    "location": "London, UK",
    "lat": 50.38693802908833,
    "lng": 1.4173055676484372,
    "spotifyId": "2rsEmyzKoYTgXerSjeB0IK"
  },
  {
    "name": "Azonto / Hiplife",
    "location": "Accra, Ghana",
    "lat": 5.781190863870513,
    "lng": -1.4189281835288339,
    "spotifyId": "6Naq3yvuVoBL27KgY2Svf6"
  },
  {
    "name": "Príncipe, Chill",
    "location": "Lisbon, Portugal",
    "lat": 39.37197826730654,
    "lng": -10.275422852638048,
    "spotifyId": "0s9M3fBKWFJmVhAiieCjkt"
  },
  {
    "name": "Highlife, Vintage Peppy",
    "location": "Accra, Ghana",
    "lat": 6.026839106085218,
    "lng": -1.4100221668204884,
    "spotifyId": "4QjHU0dwRyFv8aP31CXmRx"
  },
  {
    "name": "Rumba, Vintage",
    "location": "Kinshasa, DRC",
    "lat": -2.9513936084163213,
    "lng": 15.388987058553091,
    "spotifyId": "4q0CkBcLH3ceq6OB0PfUU8"
  },
  {
    "name": "Tigrinya, Vintage",
    "location": "Asmara, Eritrea",
    "lat": 14.60818549333249,
    "lng": 40.26207080618367,
    "spotifyId": "3BXK08wohNho0wCHBiiv9I"
  },
  {
    "name": "Tigrinya",
    "location": "Asmara, Eritrea",
    "lat": 15.812112081985557,
    "lng": 37.44217812358125,
    "spotifyId": "7do7DrHqlGF9Ft7NbtwGGL"
  },
  {
    "name": "Sega",
    "location": "Port Louis, Mauritius",
    "lat": -19.011673111304106,
    "lng": 57.91365338878771,
    "spotifyId": "3G3NcjYPEyVjepUGzPUyxI"
  },
  {
    "name": "Xitsonga / Tsonga, Downtempo",
    "location": "Limpopo, South Africa",
    "lat": -24.50054309089594,
    "lng": 27.696135288947527,
    "spotifyId": "0mEs3YsF8hKDwj0HPznfT9"
  },
  {
    "name": "Sega, Psych",
    "location": "Port Louis, Mauritius",
    "lat": -19.10962399416781,
    "lng": 56.856090159210616,
    "spotifyId": "4ARXoTlqKTuAQhg2k8HeJX"
  },
  {
    "name": "Mbalax, Mark Ernestus",
    "location": "Dakar, Senegal",
    "lat": 13.016008551191984,
    "lng": -17.5081590499209,
    "spotifyId": "36iFMNygMeRRlL5SgWtmER"
  },
  {
    "name": "Dr. Thomas Chauke",
    "location": "Limpopo, South Africa",
    "lat": -23.518427381145013,
    "lng": 30.525721484294163,
    "spotifyId": "4rhVBRU9Qup1O5IYEKiIrs"
  },
  {
    "name": "Worldwide, Chiming Guitar",
    "location": "London, UK",
    "lat": 52.42102995168429,
    "lng": -1.6043342021044043,
    "spotifyId": "4xIaYhRmf8rV4W7Kzy0Ssn"
  },
  {
    "name": "Worldwide, Smooth Mid-Tempo R&B",
    "location": "Detroit, USA",
    "lat": 42.04038149656664,
    "lng": -83.01067006754471,
    "spotifyId": "01gAq5hKTsncsfQMc5XGTR"
  },
  {
    "name": "Africa, Smooth Bangers",
    "location": "Lagos, Nigeria",
    "lat": 8.1511271181303,
    "lng": 2.425488566355,
    "spotifyId": "7fo8PWonDWZFvhR7ThcC9c"
  },
  {
    "name": "Africa, Acoustic Bangers",
    "location": "Lagos, Nigeria",
    "lat": 7.200481183705469,
    "lng": 4.786858673167553,
    "spotifyId": "5ZUk2gZ2DEbrAzuIdnbs6R"
  },
  {
    "name": "Africa, Hype Bangers",
    "location": "Lagos, Nigeria",
    "lat": 7.951654516717928,
    "lng": 1.6841507491189018,
    "spotifyId": "1DnMnLRsztUXlnzqC2KhPB"
  },
  {
    "name": "Igbo, Trips",
    "location": "Enugu, Nigeria",
    "lat": 5.426884233755615,
    "lng": 5.708675693944248,
    "spotifyId": "24BPg0ssxlfyIcZgEKdpGv"
  },
  {
    "name": "Worldwide, Chanting And Drumming",
    "location": "London, UK",
    "lat": 53.233018773990025,
    "lng": -0.6786695869252778,
    "spotifyId": "5zCl1AYh66oiLKfBM5yz3q"
  },
  {
    "name": "Africa, Vintage",
    "location": "Lagos, Nigeria",
    "lat": 5.913841926285155,
    "lng": 4.33856857388261,
    "spotifyId": "3qxhw7DmQrTXEQ3O58hWGd"
  },
  {
    "name": "Afrobeats, Groovers",
    "location": "Lagos, Nigeria",
    "lat": 5.308985877758328,
    "lng": 3.176989566905081,
    "spotifyId": "72zKIZG8bXjGHpQJW2DfUW"
  },
  {
    "name": "Rock, Soft",
    "location": "London, UK",
    "lat": 52.555496899266785,
    "lng": -2.008003381762111,
    "spotifyId": "5HpHVYYyaDgBnGlaPmLbyB"
  },
  {
    "name": "Rock, Smooth",
    "location": "London, UK",
    "lat": 52.03673568762441,
    "lng": -0.5282317520512713,
    "spotifyId": "3FWefoSEYkM6sDCwo0fAxc"
  }
];