const accessories = [
    'Patek Philippe watch',
    'Ray-Ban sunglasses',
    'Ferrari cap',
    'Leather bracelet',
    'Statement earrings',
    'Silk scarf',
    'Designer clutch',
    'Hoop earrings'
  ];
  
  const teamColors = {
    '#ff0000': 'Ferrari Red',
    '#ff8700': 'McLaren Orange',
    '#00d2be': 'Mercedes Teal', // Updated from #0090d0 to match previous expectation
    '#f58020': 'Red Bull Orange',
    '#1e41ff': 'Williams Blue',
    '#ff66c4': 'Alpine Pink',
    '#00ff00': 'Aston Martin Green',
    '#ff4500': 'AlphaTauri Orange'
  };
  
  const teamStyles = {
    '#ff0000': 'Ferrari: Italian elegance, tailored fits.',
    '#ff8700': 'McLaren: Bold, modern, sporty edge.',
    '#00d2be': 'Mercedes: Sleek, tech-inspired, polished.',
    '#f58020': 'Red Bull: Dynamic, casual, vibrant.',
    '#1e41ff': 'Williams: Classic, timeless, refined.',
    '#ff66c4': 'Alpine: Playful, vibrant, chic.',
    '#00ff00': 'Aston Martin: Sophisticated, bold, green-focused.',
    '#ff4500': 'AlphaTauri: Youthful, trendy, dynamic.'
  };
  
  const weatherData = {
    australia: 'Mild, 20°C, sunny',
    china: 'Cool, 18°C, partly cloudy',
    japan: 'Mild, 20°C, chance of rain',
    bahrain: 'Hot, 30°C, dry',
    saudiarabia: 'Hot, 32°C, dry',
    miami: 'Hot, 30°C, humid',
    imola: 'Warm, 23°C, low rain risk',
    monaco: 'Sunny, 25°C, dry',
    spain: 'Warm, 26°C, sunny',
    canada: 'Cool, 20°C, partly cloudy',
    austria: 'Warm, 24°C, sunny',
    silverstone: 'Cloudy, 18°C, chance of showers',
    belgium: 'Rainy, 15°C, wet',
    hungary: 'Hot, 28°C, sunny',
    netherlands: 'Cool, 19°C, windy',
    monza: 'Warm, 22°C, sunny',
    azerbaijan: 'Mild, 24°C, windy',
    singapore: 'Humid, 28°C, night race',
    usa: 'Sunny, 27°C, dry',
    mexico: 'Mild, 22°C, high altitude',
    brazil: 'Warm, 25°C, chance of rain',
    lasvegas: 'Cool, 15°C, night race',
    qatar: 'Hot, 30°C, dry',
    abudhabi: 'Hot, 32°C, night race',
    academy_shanghai: 'Cool, 18°C, partly cloudy',
    academy_miami: 'Hot, 30°C, humid',
    academy_barcelona: 'Warm, 26°C, sunny'
  };
  
  const raceInfo = {
    australia: {
      title: 'Australian Grand Prix',
      desc: 'Circuit: Albert Park, 5.28 km, 14 corners, 2 DRS zones. Fast corners, vibrant atmosphere. 2023 Winner: Max Verstappen. Typical Weather: Mild, 20°C, sunny.'
    },
    china: {
      title: 'Chinese Grand Prix',
      desc: 'Circuit: Shanghai, 5.45 km, 16 corners, 2 DRS zones. Long straights, technical turns. 2024 Attendance: ~200,000. Typical Weather: Cool, 18°C, partly cloudy.'
    },
    japan: {
      title: 'Japanese Grand Prix',
      desc: 'Circuit: Suzuka, 5.81 km, 18 corners, 1 DRS zone. Iconic figure-8 layout. 2023 Winner: Max Verstappen. Typical Weather: Mild, 20°C, chance of rain.'
    },
    bahrain: {
      title: 'Bahrain Grand Prix',
      desc: 'Circuit: Sakhir, 5.41 km, 15 corners, 2 DRS zones. Night racing, overtaking opportunities. 2024 Attendance: 100,000. Typical Weather: Hot, 30°C, dry.'
    },
    saudiarabia: {
      title: 'Saudi Arabian Grand Prix',
      desc: 'Circuit: Jeddah Corniche, 6.17 km, 27 corners, 3 DRS zones. Fastest street circuit. 2025 Winner: Oscar Piastri. Typical Weather: Hot, 32°C, dry.'
    },
    miami: {
      title: 'Miami Grand Prix',
      desc: 'Circuit: Miami Autodrome, 5.41 km, 19 corners, 3 DRS zones. Vibrant, banked corners. 2024 Attendance: 275,000. Typical Weather: Hot, 30°C, humid.'
    },
    imola: {
      title: 'Emilia-Romagna Grand Prix',
      desc: 'Circuit: Imola, 4.91 km, 19 corners, 1 DRS zone. Historic, tight corners. 2024 Attendance: ~200,000. Typical Weather: Warm, 23°C, low rain risk.'
    },
    monaco: {
      title: 'Monaco Grand Prix',
      desc: 'Circuit: Monte Carlo, 3.34 km, 19 corners, 1 DRS zone. Glamorous street circuit. 2023 Attendance: ~200,000. Typical Weather: Sunny, 25°C, dry.'
    },
    spain: {
      title: 'Spanish Grand Prix',
      desc: 'Circuit: Barcelona-Catalunya, 4.66 km, 16 corners, 2 DRS zones. Technical, long straights. 2023 Attendance: 284,066. Typical Weather: Warm, 26°C, sunny.'
    },
    canada: {
      title: 'Canadian Grand Prix',
      desc: 'Circuit: Gilles Villeneuve, 4.36 km, 14 corners, 3 DRS zones. Fast, unforgiving walls. Typical Weather: Cool, 20°C, partly cloudy.'
    },
    austria: {
      title: 'Austrian Grand Prix',
      desc: 'Circuit: Red Bull Ring, 4.32 km, 10 corners, 3 DRS zones. Short, fast. Typical Weather: Warm, 24°C, sunny.'
    },
    silverstone: {
      title: 'British Grand Prix',
      desc: 'Circuit: Silverstone, 5.89 km, 18 corners, 2 DRS zones. High-speed, historic. 2023 Attendance: 480,000. Typical Weather: Cloudy, 18°C, chance of showers.'
    },
    belgium: {
      title: 'Belgian Grand Prix',
      desc: 'Circuit: Spa-Francorchamps, 7.00 km, 19 corners, 2 DRS zones. Iconic Eau Rouge. 2023 Winner: Max Verstappen. Typical Weather: Rainy, 15°C, wet.'
    },
    hungary: {
      title: 'Hungarian Grand Prix',
      desc: 'Circuit: Hungaroring, 4.38 km, 14 corners, 1 DRS zone. Tight, Monaco-like. Typical Weather: Hot, 28°C, sunny.'
    },
    netherlands: {
      title: 'Dutch Grand Prix',
      desc: 'Circuit: Zandvoort, 4.26 km, 14 corners, 2 DRS zones. Banked corners, sandy terrain. 2023 Winner: Max Verstappen. Typical Weather: Cool, 19°C, windy.'
    },
    monza: {
      title: 'Italian Grand Prix',
      desc: 'Circuit: Monza, 5.79 km, 11 corners, 2 DRS zones. Temple of Speed. 2023 Winner: Max Verstappen. Typical Weather: Warm, 22°C, sunny.'
    },
    azerbaijan: {
      title: 'Azerbaijan Grand Prix',
      desc: 'Circuit: Baku, 6.00 km, 20 corners, 2 DRS zones. Long straight, tight sections. Typical Weather: Mild, 24°C, windy.'
    },
    singapore: {
      title: 'Singapore Grand Prix',
      desc: 'Circuit: Marina Bay, 4.94 km, 19 corners, 3 DRS zones. Humid night race. 2023 Winner: Carlos Sainz. Typical Weather: Humid, 28°C, night race.'
    },
    usa: {
      title: 'United States Grand Prix',
      desc: 'Circuit: Austin, 5.51 km, 20 corners, 2 DRS zones. Flowing, uphill Turn 1. 2023 Attendance: ~400,000. Typical Weather: Sunny, 27°C, dry.'
    },
    mexico: {
      title: 'Mexico City Grand Prix',
      desc: 'Circuit: Hermanos Rodriguez, 4.30 km, 17 corners, 2 DRS zones. High altitude, vibrant. 2023 Attendance: ~400,000. Typical Weather: Mild, 22°C, high altitude.'
    },
    brazil: {
      title: 'Brazilian Grand Prix',
      desc: 'Circuit: Interlagos, 4.31 km, 15 corners, 2 DRS zones. Unpredictable weather. Typical Weather: Warm, 25°C, chance of rain.'
    },
    lasvegas: {
      title: 'Las Vegas Grand Prix',
      desc: 'Circuit: Las Vegas Strip, 6.20 km, 17 corners, 2 DRS zones. Flashy night race. 2023 Attendance: 315,000. Typical Weather: Cool, 15°C, night race.'
    },
    qatar: {
      title: 'Qatar Grand Prix',
      desc: 'Circuit: Lusail, 5.42 km, 16 corners, 1 DRS zone. Fast, desert night race. Typical Weather: Hot, 30°C, dry.'
    },
    abudhabi: {
      title: 'Abu Dhabi Grand Prix',
      desc: 'Circuit: Yas Marina, 5.28 km, 16 corners, 2 DRS zones. Dramatic season finale. 2024 Attendance: 190,000. Typical Weather: Hot, 32°C, night race.'
    },
    academy_shanghai: {
      title: 'F1 Academy: Shanghai',
      desc: 'Circuit: Shanghai, 5.45 km, 16 corners. Supports F1 Chinese GP. 2025 Dates: March 21-23. Typical Weather: Cool, 18°C, partly cloudy.'
    },
    academy_miami: {
      title: 'F1 Academy: Miami',
      desc: 'Circuit: Miami Autodrome, 5.41 km, 19 corners. Supports F1 Miami GP. 2025 Dates: May 2-4. Typical Weather: Hot, 30°C, humid.'
    },
    academy_barcelona: {
      title: 'F1 Academy: Barcelona',
      desc: 'Circuit: Barcelona-Catalunya, 4.66 km, 16 corners. Supports F1 Spanish GP. 2025 Dates: June 6-8. Typical Weather: Warm, 26°C, sunny.'
    }
  };
  
  const driverStyles = {
    albon: 'Alex Albon’s resilient charm',
    alonso: 'Fernando Alonso’s veteran swagger',
    anagnostiadis: 'Aiva Anagnostiadis’ bold ambition',
    antonelli: 'Andrea Kimi Antonelli’s youthful precision',
    bearman: 'Oliver Bearman’s bold rookie energy',
    block: 'Lia Block’s fearless flair',
    bortoleto: 'Gabriel Bortoleto’s fiery ambition',
    bustamante: 'Bianca Bustamante’s vibrant dynamism',
    chadwick: 'Jamie Chadwick’s trailblazing elegance',
    chambers: 'Chloe Chambers’ fierce competitiveness',
    chong: 'Chloe Chong’s youthful tenacity',
    colapinto: 'Franco Colapinto’s vibrant flair',
    crone: 'Courtney Crone’s gritty determination',
    felbermayr: 'Emma Felbermayr’s refined poise',
    ferreira: 'Rafaela Ferreira’s spirited energy',
    gademan: 'Nina Gademan’s cool confidence',
    gasly: 'Pierre Gasly’s French elegance',
    hadjar: 'Isack Hadjar’s fearless edge',
    hamilton: 'Lewis Hamilton’s bold luxury',
    hausmann: 'Tina Hausmann’s stylish grit',
    havrda: 'Nicole Havrda’s adventurous spirit',
    hulkenberg: 'Nico Hulkenberg’s understated grit',
    larsen: 'Alba Larsen’s dynamic spark',
    lawson: 'Liam Lawson’s determined poise',
    leclerc: 'Charles Leclerc’s sleek charm',
    lloyd: 'Ella Lloyd’s vibrant resilience',
    norris: 'Lando Norris’ playful style',
    nobels: 'Aurelia Nobels’ youthful boldness',
    ocon: 'Esteban Ocon’s refined tenacity',
    palmowski: 'Alisha Palmowski’s fiery passion',
    piastri: 'Oscar Piastri’s clean-cut precision',
    pin: 'Doriane Pin’s fierce sophistication',
    russell: 'George Russell’s polished sophistication',
    sainz: 'Carlos Sainz’s suave intensity',
    shi: 'Wei Shi’s pioneering edge',
    stroll: 'Lance Stroll’s casual confidence',
    tsunoda: 'Yuki Tsunoda’s dynamic spark',
    verstappen: 'Max Verstappen’s practical edge',
    weug: 'Maya Weug’s Ferrari finesse'
  };
  
  const outfits = {
    australia: {
      male: [
        `Melbourne Party: %color% polo, white shorts, sneakers, bucket hat. Pair with %accessory%.%weather%`,
        `Melbourne Casual: %color% t-shirt, denim shorts, loafers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Melbourne Party: %color% sundress, sandals, crossbody bag. Pair with %accessory%.%weather%`,
        `Melbourne Chic: %color% blouse, white skirt, wedges. Pair with %accessory%.%weather%`
      ],
      other: [
        `Melbourne Party: %color% graphic tee, cargo shorts, sneakers. Pair with %accessory%.%weather%`,
        `Melbourne Chill: %color% hoodie, joggers, slides. Pair with %accessory%.%weather%`
      ]
    },
    china: {
      male: [
        `Shanghai Sleek: %color% bomber jacket, black jeans, loafers. Pair with %accessory%.%weather%`,
        `Shanghai Modern: %color% shirt, chinos, sneakers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Shanghai Sleek: %color% silk blouse, high-waisted trousers, heels. Pair with %accessory%.%weather%`,
        `Shanghai Elegant: %color% wrap dress, ankle boots, clutch. Pair with %accessory%.%weather%`
      ],
      other: [
        `Shanghai Sleek: %color% tunic, slim pants, sneakers. Pair with %accessory%.%weather%`,
        `Shanghai Cool: %color% oversized shirt, joggers, loafers. Pair with %accessory%.%weather%`
      ]
    },
    japan: {
      male: [
        `Suzuka Dynamic: %color% windbreaker, dark jeans, sneakers. Pair with %accessory%.%weather%`,
        `Suzuka Sporty: %color% hoodie, joggers, trainers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Suzuka Dynamic: %color% kimono-style top, skirt, ankle boots. Pair with %accessory%.%weather%`,
        `Suzuka Trendy: %color% sweater, culottes, sneakers. Pair with %accessory%.%weather%`
      ],
      other: [
        `Suzuka Dynamic: %color% track jacket, cargo pants, sneakers. Pair with %accessory%.%weather%`,
        `Suzuka Edgy: %color% long tunic, leggings, boots. Pair with %accessory%.%weather%`
      ]
    },
    bahrain: {
      male: [
        `Bahrain Desert: Beige linen shirt, %color% trousers, sandals. Pair with %accessory%.%weather%`,
        `Bahrain Light: %color% polo, khaki shorts, loafers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Bahrain Desert: Beige maxi dress, %color% ankle boots, necklaces. Pair with %accessory%.%weather%`,
        `Bahrain Flowy: %color% kaftan, sandals, sunglasses. Pair with %accessory%.%weather%`
      ],
      other: [
        `Bahrain Desert: %color% linen tunic, loose pants, sandals. Pair with %accessory%.%weather%`,
        `Bahrain Breezy: %color% short-sleeve shirt, cargo shorts, slides. Pair with %accessory%.%weather%`
      ]
    },
    saudiarabia: {
      male: [
        `Jeddah Night: %color% linen shirt, white trousers, loafers. Pair with %accessory%.%weather%`,
        `Jeddah Sleek: %color% blazer, black jeans, sneakers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Jeddah Night: %color% kaftan, gold sandals, statement earrings. Pair with %accessory%.%weather%`,
        `Jeddah Glam: %color% midi dress, heels, clutch. Pair with %accessory%.%weather%`
      ],
      other: [
        `Jeddah Night: %color% tunic, slim trousers, loafers. Pair with %accessory%.%weather%`,
        `Jeddah Cool: %color% oversized shirt, cargo pants, sandals. Pair with %accessory%.%weather%`
      ]
    },
    miami: {
      male: [
        `Miami Bold: %color% graphic tee, white shorts, Nike Air Max sneakers. Pair with %accessory%.%weather%`,
        `Miami Vibrant: %color% shirt, patterned shorts, sandals. Pair with %accessory%.%weather%`
      ],
      female: [
        `Miami Bold: %color% crop top, white trousers, chunky sneakers. Pair with %accessory%.%weather%`,
        `Miami Bright: %color% sundress, platform sandals, earrings. Pair with %accessory%.%weather%`
      ],
      other: [
        `Miami Bold: %color% tank top, cargo shorts, sneakers. Pair with %accessory%.%weather%`,
        `Miami Vibrant: %color% tunic, leggings, slides. Pair with %accessory%.%weather%`
      ]
    },
    imola: {
      male: [
        `Imola Classic: %color% blazer, white shirt, chinos, loafers. Pair with %accessory%.%weather%`,
        `Imola Timeless: %color% polo, khaki trousers, brogues. Pair with %accessory%.%weather%`
      ],
      female: [
        `Imola Classic: %color% midi dress, heels, clutch. Pair with %accessory%.%weather%`,
        `Imola Elegant: %color% blouse, A-line skirt, flats. Pair with %accessory%.%weather%`
      ],
      other: [
        `Imola Classic: %color% button-up shirt, tailored pants, loafers. Pair with %accessory%.%weather%`,
        `Imola Sleek: %color% tunic, slim jeans, sneakers. Pair with %accessory%.%weather%`
      ]
    },
    monaco: {
      male: [
        `Monaco Glam: Tailored white suit, %color% shirt, loafers. Pair with %accessory%.%weather%`,
        `Monaco Luxe: %color% blazer, white trousers, sneakers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Monaco Glam: White midi dress, %color% heels, Chanel clutch. Pair with %accessory%.%weather%`,
        `Monaco Chic: %color% jumpsuit, strappy sandals, earrings. Pair with %accessory%.%weather%`
      ],
      other: [
        `Monaco Glam: %color% tailored tunic, slim pants, loafers. Pair with %accessory%.%weather%`,
        `Monaco Luxe: %color% oversized blazer, trousers, sneakers. Pair with %accessory%.%weather%`
      ]
    },
    spain: {
      male: [
        `Barcelona Vibrant: %color% polo, khaki trousers, espadrilles. Pair with %accessory%.%weather%`,
        `Barcelona Casual: %color% t-shirt, denim shorts, sneakers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Barcelona Vibrant: %color% sundress, sandals, hoop earrings. Pair with %accessory%.%weather%`,
        `Barcelona Trendy: %color% skirt, white top, wedges. Pair with %accessory%.%weather%`
      ],
      other: [
        `Barcelona Vibrant: %color% graphic tee, cargo pants, sneakers. Pair with %accessory%.%weather%`,
        `Barcelona Casual: %color% tunic, shorts, slides. Pair with %accessory%.%weather%`
      ]
    },
    canada: {
      male: [
        `Montreal Urban: %color% jacket, jeans, sneakers. Pair with %accessory%.%weather%`,
        `Montreal Cool: %color% hoodie, chinos, loafers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Montreal Urban: %color% blouse, jeans, ankle boots. Pair with %accessory%.%weather%`,
        `Montreal Edgy: %color% sweater, leather pants, sneakers. Pair with %accessory%.%weather%`
      ],
      other: [
        `Montreal Urban: %color% track jacket, joggers, sneakers. Pair with %accessory%.%weather%`,
        `Montreal Cool: %color% tunic, slim pants, loafers. Pair with %accessory%.%weather%`
      ]
    },
    austria: {
      male: [
        `Spielberg Sporty: %color% hoodie, chinos, sneakers. Pair with %accessory%.%weather%`,
        `Spielberg Active: %color% polo, joggers, trainers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Spielberg Sporty: %color% crop top, leggings, sneakers. Pair with %accessory%.%weather%`,
        `Spielberg Athletic: %color% tank top, shorts, running shoes. Pair with %accessory%.%weather%`
      ],
      other: [
        `Spielberg Sporty: %color% track top, cargo pants, sneakers. Pair with %accessory%.%weather%`,
        `Spielberg Active: %color% tank top, joggers, slides. Pair with %accessory%.%weather%`
      ]
    },
    silverstone: {
      male: [
        `Silverstone Classic: Navy blazer, %color% shirt, chinos, brogues. Pair with %accessory%.%weather%`,
        `Silverstone Timeless: %color% sweater, trousers, loafers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Silverstone Classic: Navy blazer dress, %color% pumps, wide-brimmed hat. Pair with %accessory%.%weather%`,
        `Silverstone Elegant: %color% dress, heels, clutch. Pair with %accessory%.%weather%`
      ],
      other: [
        `Silverstone Classic: %color% button-up shirt, tailored pants, loafers. Pair with %accessory%.%weather%`,
        `Silverstone Sleek: %color% tunic, slim trousers, sneakers. Pair with %accessory%.%weather%`
      ]
    },
    belgium: {
      male: [
        `Spa Rugged: Navy parka, %color% hoodie, cargo pants, hiking boots. Pair with %accessory%.%weather%`,
        `Spa Outdoor: %color% jacket, jeans, combat boots. Pair with %accessory%.%weather%`
      ],
      female: [
        `Spa Rugged: Green utility jacket, %color% leggings, combat boots. Pair with %accessory%.%weather%`,
        `Spa Tough: %color% sweater, cargo pants, sneakers. Pair with %accessory%.%weather%`
      ],
      other: [
        `Spa Rugged: %color% utility jacket, cargo pants, boots. Pair with %accessory%.%weather%`,
        `Spa Outdoor: %color% hoodie, joggers, sneakers. Pair with %accessory%.%weather%`
      ]
    },
    hungary: {
      male: [
        `Budapest Heat: %color% linen shirt, shorts, sandals. Pair with %accessory%.%weather%`,
        `Budapest Light: %color% t-shirt, linen pants, loafers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Budapest Heat: %color% maxi dress, sandals, sunhat. Pair with %accessory%.%weather%`,
        `Budapest Breezy: %color% skirt, tank top, flats. Pair with %accessory%.%weather%`
      ],
      other: [
        `Budapest Heat: %color% linen tunic, shorts, sandals. Pair with %accessory%.%weather%`,
        `Budapest Breezy: %color% tank top, cargo pants, slides. Pair with %accessory%.%weather%`
      ]
    },
    netherlands: {
      male: [
        `Zandvoort Coastal: %color% windbreaker, jeans, sneakers. Pair with %accessory%.%weather%`,
        `Zandvoort Casual: %color% sweater, chinos, loafers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Zandvoort Coastal: %color% sweater, skirt, ankle boots. Pair with %accessory%.%weather%`,
        `Zandvoort Cool: %color% dress, sneakers, scarf. Pair with %accessory%.%weather%`
      ],
      other: [
        `Zandvoort Coastal: %color% track jacket, cargo pants, sneakers. Pair with %accessory%.%weather%`,
        `Zandvoort Casual: %color% tunic, joggers, loafers. Pair with %accessory%.%weather%`
      ]
    },
    monza: {
      male: [
        `Monza Passion: %color% linen shirt, black trousers, loafers. Pair with %accessory%.%weather%`,
        `Monza Sleek: %color% blazer, jeans, sneakers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Monza Passion: %color% wrap dress, strappy heels, hoop earrings. Pair with %accessory%.%weather%`,
        `Monza Chic: %color% jumpsuit, sandals, clutch. Pair with %accessory%.%weather%`
      ],
      other: [
        `Monza Passion: %color% tailored tunic, slim pants, loafers. Pair with %accessory%.%weather%`,
        `Monza Sleek: %color% oversized shirt, trousers, sneakers. Pair with %accessory%.%weather%`
      ]
    },
    azerbaijan: {
      male: [
        `Baku Urban: %color% jacket, dark jeans, sneakers. Pair with %accessory%.%weather%`,
        `Baku Modern: %color% shirt, chinos, loafers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Baku Urban: %color% jumpsuit, heels, clutch. Pair with %accessory%.%weather%`,
        `Baku Trendy: %color% blouse, trousers, sneakers. Pair with %accessory%.%weather%`
      ],
      other: [
        `Baku Urban: %color% track top, slim pants, sneakers. Pair with %accessory%.%weather%`,
        `Baku Modern: %color% tunic, cargo pants, loafers. Pair with %accessory%.%weather%`
      ]
    },
    singapore: {
      male: [
        `Singapore Night: Black leather jacket, %color% tee, jeans, sneakers. Pair with %accessory%.%weather%`,
        `Singapore Flashy: %color% shirt, black shorts, loafers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Singapore Night: Black sequined top, %color% skirt, ankle boots. Pair with %accessory%.%weather%`,
        `Singapore Glam: %color% dress, heels, earrings. Pair with %accessory%.%weather%`
      ],
      other: [
        `Singapore Night: %color% tunic, slim trousers, sneakers. Pair with %accessory%.%weather%`,
        `Singapore Flashy: %color% graphic tee, cargo shorts, slides. Pair with %accessory%.%weather%`
      ]
    },
    usa: {
      male: [
        `Austin Western: Denim jacket, %color% tee, jeans, cowboy boots. Pair with %accessory%.%weather%`,
        `Austin Rugged: %color% shirt, cargos, sneakers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Austin Western: Fringed suede jacket, %color% tank, denim skirt, cowboy boots. Pair with %accessory%.%weather%`,
        `Austin Cool: %color% dress, boots, hat. Pair with %accessory%.%weather%`
      ],
      other: [
        `Austin Western: %color% button-up shirt, cargo pants, boots. Pair with %accessory%.%weather%`,
        `Austin Rugged: %color% tank top, joggers, sneakers. Pair with %accessory%.%weather%`
      ]
    },
    mexico: {
      male: [
        `Mexico Vibrant: %color% shirt, chinos, sneakers. Pair with %accessory%.%weather%`,
        `Mexico Bold: %color% polo, jeans, loafers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Mexico Vibrant: %color% dress, sandals, colorful scarf. Pair with %accessory%.%weather%`,
        `Mexico Bright: %color% skirt, top, wedges. Pair with %accessory%.%weather%`
      ],
      other: [
        `Mexico Vibrant: %color% tunic, slim pants, sneakers. Pair with %accessory%.%weather%`,
        `Mexico Bold: %color% graphic tee, cargo shorts, slides. Pair with %accessory%.%weather%`
      ]
    },
    brazil: {
      male: [
        `Interlagos Energy: %color% polo, shorts, sneakers. Pair with %accessory%.%weather%`,
        `Interlagos Active: %color% t-shirt, joggers, trainers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Interlagos Energy: %color% sundress, sandals, earrings. Pair with %accessory%.%weather%`,
        `Interlagos Fun: %color% top, shorts, sneakers. Pair with %accessory%.%weather%`
      ],
      other: [
        `Interlagos Energy: %color% tank top, cargo pants, sneakers. Pair with %accessory%.%weather%`,
        `Interlagos Active: %color% tunic, joggers, slides. Pair with %accessory%.%weather%`
      ]
    },
    lasvegas: {
      male: [
        `Las Vegas Flashy: %color% blazer, black shirt, jeans, loafers. Pair with %accessory%.%weather%`,
        `Las Vegas Bold: %color% jacket, trousers, sneakers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Las Vegas Flashy: %color% sequined dress, heels, clutch. Pair with %accessory%.%weather%`,
        `Las Vegas Glam: %color% top, skirt, strappy sandals. Pair with %accessory%.%weather%`
      ],
      other: [
        `Las Vegas Flashy: %color% tailored tunic, slim pants, sneakers. Pair with %accessory%.%weather%`,
        `Las Vegas Bold: %color% graphic shirt, cargo pants, loafers. Pair with %accessory%.%weather%`
      ]
    },
    qatar: {
      male: [
        `Qatar Desert: %color% linen shirt, white trousers, sandals. Pair with %accessory%.%weather%`,
        `Qatar Light: %color% polo, shorts, loafers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Qatar Desert: %color% kaftan, sandals, necklaces. Pair with %accessory%.%weather%`,
        `Qatar Breezy: %color% dress, flats, earrings. Pair with %accessory%.%weather%`
      ],
      other: [
        `Qatar Desert: %color% linen tunic, loose pants, sandals. Pair with %accessory%.%weather%`,
        `Qatar Breezy: %color% tank top, cargo shorts, slides. Pair with %accessory%.%weather%`
      ]
    },
    abudhabi: {
      male: [
        `Abu Dhabi Luxe: Cream linen suit, %color% shirt, loafers. Pair with %accessory%.%weather%`,
        `Abu Dhabi Sleek: %color% blazer, white trousers, sneakers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Abu Dhabi Luxe: Metallic kaftan, %color% sandals, earrings. Pair with %accessory%.%weather%`,
        `Abu Dhabi Glam: %color% dress, heels, clutch. Pair with %accessory%.%weather%`
      ],
      other: [
        `Abu Dhabi Luxe: %color% tailored tunic, slim trousers, loafers. Pair with %accessory%.%weather%`,
        `Abu Dhabi Sleek: %color% oversized shirt, cargo pants, sneakers. Pair with %accessory%.%weather%`
      ]
    },
    academy_shanghai: {
      male: [
        `Shanghai Sleek: %color% bomber jacket, black jeans, loafers. Pair with %accessory%.%weather%`,
        `Shanghai Modern: %color% shirt, chinos, sneakers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Shanghai Sleek: %color% silk blouse, high-waisted trousers, heels. Pair with %accessory%.%weather%`,
        `Shanghai Elegant: %color% wrap dress, ankle boots, clutch. Pair with %accessory%.%weather%`
      ],
      other: [
        `Shanghai Sleek: %color% tunic, slim pants, sneakers. Pair with %accessory%.%weather%`,
        `Shanghai Cool: %color% oversized shirt, joggers, loafers. Pair with %accessory%.%weather%`
      ]
    },
    academy_miami: {
      male: [
        `Miami Bold: %color% graphic tee, white shorts, Nike Air Max sneakers. Pair with %accessory%.%weather%`,
        `Miami Vibrant: %color% shirt, patterned shorts, sandals. Pair with %accessory%.%weather%`
      ],
      female: [
        `Miami Bold: %color% crop top, white trousers, chunky sneakers. Pair with %accessory%.%weather%`,
        `Miami Bright: %color% sundress, platform sandals, earrings. Pair with %accessory%.%weather%`
      ],
      other: [
        `Miami Bold: %color% tank top, cargo shorts, sneakers. Pair with %accessory%.%weather%`,
        `Miami Vibrant: %color% tunic, leggings, slides. Pair with %accessory%.%weather%`
      ]
    },
    academy_barcelona: {
      male: [
        `Barcelona Vibrant: %color% polo, khaki trousers, espadrilles. Pair with %accessory%.%weather%`,
        `Barcelona Casual: %color% t-shirt, denim shorts, sneakers. Pair with %accessory%.%weather%`
      ],
      female: [
        `Barcelona Vibrant: %color% sundress, sandals, hoop earrings. Pair with %accessory%.%weather%`,
        `Barcelona Trendy: %color% skirt, white top, wedges. Pair with %accessory%.%weather%`
      ],
      other: [
        `Barcelona Vibrant: %color% graphic tee, cargo pants, sneakers. Pair with %accessory%.%weather%`,
        `Barcelona Casual: %color% tunic, shorts, slides. Pair with %accessory%.%weather%`
      ]
    }
  };