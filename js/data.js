/* ==========================================================================
   VOYAGECRAFT MOCK DATABASE
   Curated Destinations, Flights, Hotels, and Holiday Packages
   ========================================================================== */

export const DESTINATIONS = [
  {
    id: "dest-paris",
    name: "Paris",
    country: "France",
    category: "cultural",
    tagline: "The City of Light, Art, Romance & Gastronomy",
    coordinates: [48.8566, 2.3522],
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
    description: "Paris enchants with monumental boulevards, iconic iron arches, world-renowned culinary sanctuaries, and artistic treasures at every cobblestone corner.",
    bestSeason: "May - September",
    currency: "EUR (€)",
    dailyBudgetEst: 160,
    attractions: [
      { id: "att-paris-1", name: "Eiffel Tower Summit", price: 32, duration: "3 hours", time: "10:00 AM", desc: "Panoramic breathtaking views over the Parisian skyline from the third tier." },
      { id: "att-paris-2", name: "Louvre Museum Priority Access", price: 24, duration: "4 hours", time: "02:00 PM", desc: "Home to the Mona Lisa, Venus de Milo, and over 35,000 priceless masterworks." },
      { id: "att-paris-3", name: "Seine River Sunset Champagne Cruise", price: 45, duration: "1.5 hours", time: "07:30 PM", desc: "Glide past illuminated bridges, Notre-Dame, and the Grand Palais." },
      { id: "att-paris-4", name: "Montmartre & Sacré-Cœur Walking Tour", price: 18, duration: "2 hours", time: "11:00 AM", desc: "Bohemian alleys, street artists, and the white dome overlooking Paris." }
    ]
  },
  {
    id: "dest-tokyo",
    name: "Tokyo",
    country: "Japan",
    category: "urban",
    tagline: "Futuristic Megacity Balanced with Sacred Traditions",
    coordinates: [35.6762, 139.6503],
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80",
    description: "Tokyo marries neon-lit skyscrapers, robot cafes, and hyper-modern transit with centuries-old Shinto shrines and tranquil moss gardens.",
    bestSeason: "March - May & Oct - Nov",
    currency: "JPY (¥)",
    dailyBudgetEst: 140,
    attractions: [
      { id: "att-tokyo-1", name: "Shibuya Sky Observation Deck", price: 22, duration: "2 hours", time: "05:00 PM", desc: "360-degree glass rooftop deck peering over the legendary Shibuya Scramble." },
      { id: "att-tokyo-2", name: "Senso-ji & Asakusa Heritage Walk", price: 0, duration: "2.5 hours", time: "09:30 AM", desc: "Tokyo's oldest Buddhist temple dating back to 645 AD." },
      { id: "att-tokyo-3", name: "TeamLab Planets Immersive Digital Art", price: 38, duration: "2 hours", time: "01:00 PM", desc: "Wade through water and boundless floral digital projections." },
      { id: "att-tokyo-4", name: "Tsukiji Outer Market Food Tour", price: 55, duration: "3 hours", time: "08:00 AM", desc: "Tasting freshly torched wagyu, bluefin sushi, and tamagoyaki." }
    ]
  },
  {
    id: "dest-bali",
    name: "Bali",
    country: "Indonesia",
    category: "beach",
    tagline: "Island of Gods, Emerald Terraces & Soulful Sunsets",
    coordinates: [-8.3405, 115.0920],
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
    description: "Tropical paradise famed for lush rainforests, terraced rice paddies, spiritual cliffside temples, and world-class surfing beaches.",
    bestSeason: "April - October",
    currency: "IDR (Rp) / USD",
    dailyBudgetEst: 75,
    attractions: [
      { id: "att-bali-1", name: "Uluwatu Sunset Temple & Kecak Dance", price: 15, duration: "3 hours", time: "05:30 PM", desc: "Cliff-perched ancient temple accompanied by dramatic fire choir chants." },
      { id: "att-bali-2", name: "Tegallalang Rice Terraces & Jungle Swing", price: 20, duration: "3 hours", time: "08:30 AM", desc: "Iconic emerald stepped paddies with thrilling jungle high-swings." },
      { id: "att-bali-3", name: "Nusa Penida Kelingking T-Rex Beach Day", price: 65, duration: "7 hours", time: "07:00 AM", desc: "Speedboat excursion to dramatic cliffs and manta ray diving spots." },
      { id: "att-bali-4", name: "Sacred Monkey Forest Sanctuary", price: 9, duration: "2 hours", time: "02:00 PM", desc: "Ancient moss-covered temples populated by playful Balinese macaques." }
    ]
  },
  {
    id: "dest-swiss",
    name: "Swiss Alps (Zermatt)",
    country: "Switzerland",
    category: "mountain",
    tagline: "Majestic Alpine Summits, Glacier Valleys & Fondue",
    coordinates: [45.9763, 7.7491],
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80",
    description: "Pristine alpine landscapes dominated by the pyramid peak of the Matterhorn, scenic cogwheel railways, and world-class ski slopes.",
    bestSeason: "Dec - March (Ski) / June - Sept (Hike)",
    currency: "CHF (Fr.)",
    dailyBudgetEst: 220,
    attractions: [
      { id: "att-swiss-1", name: "Gornergrat Cogwheel Mountain Railway", price: 98, duration: "4 hours", time: "09:00 AM", desc: "Europe's highest open-air cog railway with direct views of 29 peaks." },
      { id: "att-swiss-2", name: "Matterhorn Glacier Paradise Cableway", price: 110, duration: "5 hours", time: "10:30 AM", desc: "Highest cable car station in Europe featuring an ice palace." },
      { id: "att-swiss-3", name: "Alpine Fondue & Wine Tasting Chalet", price: 60, duration: "2 hours", time: "07:00 PM", desc: "Authentic Gruyère and Emmental fondue inside a crackling hearth chalet." }
    ]
  },
  {
    id: "dest-santorini",
    name: "Santorini",
    country: "Greece",
    category: "romance",
    tagline: "Whitewashed Cliffside Villages Over Aegean Deep Blues",
    coordinates: [36.3932, 25.4615],
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80",
    description: "Crescent-shaped volcanic caldera adorned with blue-domed churches, cliff-carved infinity pools, and legendary Aegean golden hour sunsets.",
    bestSeason: "May - October",
    currency: "EUR (€)",
    dailyBudgetEst: 180,
    attractions: [
      { id: "att-sant-1", name: "Caldera Sunset Catamaran Luxury Cruise", price: 120, duration: "5 hours", time: "03:00 PM", desc: "Sailing through volcanic hot springs with Greek BBQ and unlimited local wine." },
      { id: "att-sant-2", name: "Oia Cliffside Sunset Castle Walk", price: 0, duration: "2 hours", time: "06:30 PM", desc: "World's most photographed sunset spot overlooking the Aegean Sea." },
      { id: "att-sant-3", name: "Akrotiri Prehistoric Ruins Tour", price: 16, duration: "2 hours", time: "11:00 AM", desc: "The Minoan Bronze Age settlement preserved in volcanic ash." }
    ]
  },
  {
    id: "dest-dubai",
    name: "Dubai",
    country: "UAE",
    category: "urban",
    tagline: "Oasis of Futuristic Grandeur, Luxury & Desert Dunes",
    coordinates: [25.2048, 55.2708],
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
    description: "A city that redefines luxury with cloud-piercing architecture, indoor ski resorts, opulent desert glamping, and mega shopping paradises.",
    bestSeason: "November - March",
    currency: "AED (د.إ)",
    dailyBudgetEst: 190,
    attractions: [
      { id: "att-dubai-1", name: "Burj Khalifa 148th Floor VIP Sky Deck", price: 95, duration: "2 hours", time: "04:30 PM", desc: "Stand on top of the world's tallest building with signature Arabic sweets." },
      { id: "att-dubai-2", name: "Red Dunes Desert Safari & Falconry", price: 70, duration: "6 hours", time: "03:30 PM", desc: "4x4 dune bashing, camel trekking, and stargazing BBQ dinner camp." },
      { id: "att-dubai-3", name: "Dubai Marina Private Yacht Charter", price: 85, duration: "2 hours", time: "06:00 PM", desc: "Cruising past Ain Dubai and the Palm Jumeirah skyline." }
    ]
  },
  {
    id: "dest-rome",
    name: "Rome",
    country: "Italy",
    category: "cultural",
    tagline: "The Eternal City of Emperors, Gladiators & Gelato",
    coordinates: [41.9028, 12.4964],
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80",
    description: "An open-air museum where ancient Roman arches and Renaissance masterpieces coexist with buzzing espresso bars and trattorias.",
    bestSeason: "April - June & Sept - Oct",
    currency: "EUR (€)",
    dailyBudgetEst: 130,
    attractions: [
      { id: "att-rome-1", name: "Colosseum & Roman Forum Arena Floor", price: 34, duration: "3 hours", time: "09:30 AM", desc: "Step where gladiators clashed two thousand years ago." },
      { id: "att-rome-2", name: "Vatican Museums & Sistine Chapel", price: 38, duration: "3.5 hours", time: "01:30 PM", desc: "Marvel at Michelangelo's ceiling frescoes and St. Peter's Basilica." },
      { id: "att-rome-3", name: "Trevi Fountain & Trastevere Food Tour", price: 42, duration: "2.5 hours", time: "06:00 PM", desc: "Toss a lucky coin and indulge in crispy supplì and Roman carbonara." }
    ]
  },
  {
    id: "dest-nyc",
    name: "New York City",
    country: "USA",
    category: "urban",
    tagline: "The Pulse of Culture, Broadway & Iconic Skylines",
    coordinates: [40.7128, -74.0060],
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1000&q=80",
    description: "The city that never sleeps: world-class museums, Broadway lights, Michelin restaurants, and iconic architecture spanning Manhattan.",
    bestSeason: "April - June & Sept - Nov",
    currency: "USD ($)",
    dailyBudgetEst: 200,
    attractions: [
      { id: "att-nyc-1", name: "Empire State Observatory Express Pass", price: 44, duration: "2 hours", time: "08:00 PM", desc: "Gaze over millions of twinkling Manhattan lights from 102 floors up." },
      { id: "att-nyc-2", name: "Statue of Liberty & Ellis Island Ferry", price: 30, duration: "4 hours", time: "10:00 AM", desc: "Cruising New York Harbor to America's universal symbol of freedom." },
      { id: "att-nyc-3", name: "Broadway Hit Musical Orchestra Ticket", price: 135, duration: "3 hours", time: "07:00 PM", desc: "Premier theatre magic in the heart of the Theatre District." }
    ]
  },
  {
    id: "dest-cairo",
    name: "Cairo",
    country: "Egypt",
    category: "cultural",
    tagline: "Timeless Wonders of Pharaohs, Pyramids & the Nile",
    coordinates: [30.0444, 31.2357],
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&w=1000&q=80",
    description: "Stand before the last remaining Wonder of the Ancient World, explore gold pharaonic treasures, and cruise the gentle currents of the Nile.",
    bestSeason: "October - April",
    currency: "EGP (E£)",
    dailyBudgetEst: 80,
    attractions: [
      { id: "att-cairo-1", name: "Giza Pyramids & Great Sphinx Private Guide", price: 35, duration: "4 hours", time: "08:30 AM", desc: "Discover Khufu's massive pyramid and ride a camel across Sahara dunes." },
      { id: "att-cairo-2", name: "Grand Egyptian Museum & King Tut Gold", price: 28, duration: "3.5 hours", time: "01:00 PM", desc: "The greatest archaeological museum dedicated to ancient civilization." },
      { id: "att-cairo-3", name: "Sunset Nile Felucca Sailing", price: 20, duration: "1.5 hours", time: "05:30 PM", desc: "Traditional wooden sailboat drifting peacefully through Cairo." }
    ]
  },
  {
    id: "dest-kyoto",
    name: "Kyoto",
    country: "Japan",
    category: "cultural",
    tagline: "Thousands of Torii Gates, Zen Temples & Bamboo Groves",
    coordinates: [35.0116, 135.7681],
    image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80",
    description: "The imperial cultural soul of Japan with over 1,600 Buddhist temples, 400 Shinto shrines, preserved geisha alleys, and tea ceremonies.",
    bestSeason: "March - May & Oct - Nov",
    currency: "JPY (¥)",
    dailyBudgetEst: 130,
    attractions: [
      { id: "att-kyoto-1", name: "Fushimi Inari 10,000 Torii Hike", price: 0, duration: "3 hours", time: "07:00 AM", desc: "Wander through endless vibrant vermilion gates winding up Mount Inari." },
      { id: "att-kyoto-2", name: "Arashiyama Bamboo Forest & Sagano Train", price: 18, duration: "3.5 hours", time: "10:30 AM", desc: "Towering green bamboo stalks swaying with the wind." },
      { id: "att-kyoto-3", name: "Authentic Matcha Tea Ceremony in Gion", price: 40, duration: "1.5 hours", time: "03:00 PM", desc: "Traditional etiquette guided by an experienced tea master." }
    ]
  },
  {
    id: "dest-rio",
    name: "Rio de Janeiro",
    country: "Brazil",
    category: "beach",
    tagline: "Carnival Rhythms, Samba & Dramatic Emerald Peaks",
    coordinates: [-22.9068, -43.1729],
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1000&q=80",
    description: "Stunning natural beauty where coastal rainforest meets sparkling Atlantic beaches, under the welcoming arms of Christ the Redeemer.",
    bestSeason: "December - March",
    currency: "BRL (R$)",
    dailyBudgetEst: 90,
    attractions: [
      { id: "att-rio-1", name: "Christ the Redeemer & Corcovado Train", price: 25, duration: "3 hours", time: "09:00 AM", desc: "Iconic Art Deco statue standing 710 meters above the bay." },
      { id: "att-rio-2", name: "Sugarloaf Mountain Cable Car Sunset", price: 32, duration: "2.5 hours", time: "05:00 PM", desc: "Two-stage glass cable car offering 360-degree sunset panoramas." },
      { id: "att-rio-3", name: "Copacabana & Ipanema Bike Tour", price: 18, duration: "2 hours", time: "02:30 PM", desc: "Sip cold coconut water along the famous mosaic beach promenades." }
    ]
  },
  {
    id: "dest-capetown",
    name: "Cape Town",
    country: "South Africa",
    category: "mountain",
    tagline: "Where Two Oceans Meet Dramatic Mountain Majesty",
    coordinates: [-33.9249, 18.4241],
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80",
    description: "A breathtaking collision of dramatic granite peaks, pristine surf breaks, winelands, and colonies of wild African penguins.",
    bestSeason: "November - April",
    currency: "ZAR (R)",
    dailyBudgetEst: 95,
    attractions: [
      { id: "att-cape-1", name: "Table Mountain Aerial Cableway", price: 26, duration: "3 hours", time: "09:00 AM", desc: "Rotating cable car ascending 1,000 meters above sea level." },
      { id: "att-cape-2", name: "Boulders Beach African Penguin Colony", price: 12, duration: "2.5 hours", time: "01:30 PM", desc: "Walk wooden boardwalks right beside wild tuxedo-clad penguins." },
      { id: "att-cape-3", name: "Cape Point & Good Hope Scenic Drive", price: 35, duration: "5 hours", time: "10:00 AM", desc: "Dramatic ocean cliffs where the Atlantic and Indian currents converge." }
    ]
  },
  {
    id: "dest-london",
    name: "London",
    country: "United Kingdom",
    category: "cultural",
    tagline: "Historic Royalty, West End Theatres & Thames River Vistas",
    coordinates: [51.5074, -0.1278],
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80",
    description: "London captivates with thousand-year-old royal fortresses, world-class West End musicals, red double-decker buses, and tranquil royal parks.",
    bestSeason: "May - September",
    currency: "GBP (£)",
    dailyBudgetEst: 175,
    attractions: [
      { id: "att-lon-1", name: "Tower of London & Crown Jewels", price: 34, duration: "3 hours", time: "10:00 AM", desc: "Centuries of royal history, glittering crowns, and the famous Yeoman Warders." },
      { id: "att-lon-2", name: "London Eye Champagne Flight", price: 48, duration: "1 hour", time: "05:00 PM", desc: "Revolving glass pod offering 360-degree views over Big Ben and Parliament." },
      { id: "att-lon-3", name: "The British Museum Highlights Tour", price: 0, duration: "2.5 hours", time: "01:30 PM", desc: "Encounter the Rosetta Stone and Egyptian mummies in a soaring glass courtyard." },
      { id: "att-lon-4", name: "West End Musical Orchestra Seats", price: 95, duration: "3 hours", time: "07:30 PM", desc: "Award-winning theatre in London's sparkling West End district." }
    ]
  },
  {
    id: "dest-barcelona",
    name: "Barcelona",
    country: "Spain",
    category: "beach",
    tagline: "Gaudí Masterpieces, Gothic Quarters & Mediterranean Tapas",
    coordinates: [41.3879, 2.1699],
    image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=1000&q=80",
    description: "A sun-kissed seaside metropolis where whimsical Modernisme architecture meets buzzing tapas bars, golden beaches, and Gothic alleyways.",
    bestSeason: "May - October",
    currency: "EUR (€)",
    dailyBudgetEst: 135,
    attractions: [
      { id: "att-bcn-1", name: "Sagrada Família Fast-Track Tower Access", price: 36, duration: "2.5 hours", time: "09:30 AM", desc: "Gaudí's unfinished basilica masterpiece with kaleidoscopic stained glass light." },
      { id: "att-bcn-2", name: "Park Güell Mosaic Serpent Terraces", price: 15, duration: "2 hours", time: "04:30 PM", desc: "Fairy-tale mosaic pavilions overlooking Barcelona and the Mediterranean." },
      { id: "att-bcn-3", name: "Gothic Quarter Tapas & Sangria Walking Tour", price: 50, duration: "3 hours", time: "07:00 PM", desc: "Sample authentic Jamón Ibérico, patatas bravas, and Catalan wines." }
    ]
  },
  {
    id: "dest-singapore",
    name: "Singapore",
    country: "Singapore",
    category: "urban",
    tagline: "Futuristic Garden City of Supertrees, Skylines & Hawker Feasts",
    coordinates: [1.3521, 103.8198],
    image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=80",
    description: "A visionary tropical metropolis featuring futuristic neon supertrees, gravity-defying rooftop infinity pools, and Michelin-rated hawker centres.",
    bestSeason: "Year-Round (Best Nov - April)",
    currency: "SGD (S$)",
    dailyBudgetEst: 160,
    attractions: [
      { id: "att-sin-1", name: "Gardens by the Bay & Cloud Forest Dome", price: 32, duration: "3 hours", time: "10:00 AM", desc: "Walk through mist-shrouded 35m indoor waterfalls and towering Supertree groves." },
      { id: "att-sin-2", name: "Marina Bay Sands SkyPark Observation Deck", price: 28, duration: "1.5 hours", time: "06:00 PM", desc: "57 stories high peering down over Singapore's futuristic skyline." },
      { id: "att-sin-3", name: "Singapore Night Safari Tram Adventure", price: 42, duration: "3 hours", time: "08:00 PM", desc: "The world's first nocturnal wildlife park observing leopards and rhinos." }
    ]
  },
  {
    id: "dest-sydney",
    name: "Sydney",
    country: "Australia",
    category: "beach",
    tagline: "Harbour Sails, Opera House Shells & Bondi Surf Breaks",
    coordinates: [-33.8688, 151.2093],
    image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1000&q=80",
    description: "Brimming with sunny coastal charm, world-famous harbour architecture, golden surfing beaches, and fresh Pacific seafood dining.",
    bestSeason: "October - April",
    currency: "AUD (A$)",
    dailyBudgetEst: 165,
    attractions: [
      { id: "att-syd-1", name: "Sydney Opera House Architectural Tour", price: 35, duration: "1.5 hours", time: "10:30 AM", desc: "Step beneath the sail-shaped shells of the world's most recognizable concert hall." },
      { id: "att-syd-2", name: "Sydney Harbour Bridge Climb Experience", price: 185, duration: "3.5 hours", time: "03:00 PM", desc: "Ascend the iconic steel arches to stand 134 meters above the harbour." },
      { id: "att-syd-3", name: "Bondi to Coogee Coastal Clifftop Walk", price: 0, duration: "2.5 hours", time: "08:00 AM", desc: "Breathtaking ocean views, dramatic sandstone cliffs, and natural rockpools." }
    ]
  },
  {
    id: "dest-venice",
    name: "Venice",
    country: "Italy",
    category: "romance",
    tagline: "Gondola Serenades Across Labyrinthine Renaissance Canals",
    coordinates: [45.4408, 12.3155],
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1000&q=80",
    description: "An ethereal floating city of 118 islands, interconnected by arched stone bridges, gliding black gondolas, and Gothic-Renaissance palazzos.",
    bestSeason: "April - June & Sept - Oct",
    currency: "EUR (€)",
    dailyBudgetEst: 170,
    attractions: [
      { id: "att-ven-1", name: "Private Sunset Gondola Ride on Grand Canal", price: 90, duration: "45 mins", time: "06:30 PM", desc: "Glide under the Bridge of Sighs accompanied by traditional Italian accordion." },
      { id: "att-ven-2", name: "St. Mark's Basilica & Doge's Palace Tour", price: 38, duration: "2.5 hours", time: "10:00 AM", desc: "Marvel at shimmering golden Byzantine mosaics and historical prison dungeons." },
      { id: "att-ven-3", name: "Murano & Burano Glassblowing Island Cruise", price: 28, duration: "4 hours", time: "01:30 PM", desc: "Visit colorful fisherman houses in Burano and master glass artisans in Murano." }
    ]
  },
  {
    id: "dest-iceland",
    name: "Reykjavik",
    country: "Iceland",
    category: "mountain",
    tagline: "Land of Fire & Ice, Glowing Northern Lights & Geothermal Spas",
    coordinates: [64.1466, -21.9426],
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1000&q=80",
    description: "Where volcanoes meet glacial waterfalls, natural steaming hot springs soothe the soul, and green auroras dance across the Arctic winter sky.",
    bestSeason: "Sept - April (Aurora) / June - Aug (Midnight Sun)",
    currency: "ISK (kr) / EUR",
    dailyBudgetEst: 210,
    attractions: [
      { id: "att-ice-1", name: "Blue Lagoon Geothermal Silica Spa", price: 88, duration: "4 hours", time: "01:00 PM", desc: "Relax in 39°C milky-blue geothermal waters surrounded by black volcanic lava." },
      { id: "att-ice-2", name: "Golden Circle & Gullfoss Waterfall Expedition", price: 75, duration: "7 hours", time: "08:30 AM", desc: "Witness erupting Strokkur geysirs and thunderous cascading glacial falls." },
      { id: "att-ice-3", name: "Northern Lights Aurora Super-Jeep Safari", price: 95, duration: "4 hours", time: "09:00 PM", desc: "Hunt radiant dancing emerald auroras with an astronomer guide and hot cocoa." }
    ]
  },
  {
    id: "dest-istanbul",
    name: "Istanbul",
    country: "Turkey",
    category: "cultural",
    tagline: "Where Continents Collide Across the Bosphorus & Grand Bazaar",
    coordinates: [41.0082, 28.9784],
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80",
    description: "Straddling Europe and Asia across the glittering Bosphorus strait, featuring monumental Ottoman mosques, fragrant spice bazaars, and rooftop tea lounges.",
    bestSeason: "April - June & Sept - Nov",
    currency: "TRY (₺) / USD",
    dailyBudgetEst: 85,
    attractions: [
      { id: "att-ist-1", name: "Hagia Sophia & Blue Mosque Guided Tour", price: 25, duration: "3 hours", time: "09:30 AM", desc: "Sixth-century architectural triumph adorned with Byzantine gold and Iznik tiles." },
      { id: "att-ist-2", name: "Bosphorus Sunset Private Yacht Cruise", price: 45, duration: "2 hours", time: "06:00 PM", desc: "Glide between continents while listening to the evening call to prayer." },
      { id: "att-ist-3", name: "Grand Bazaar & Turkish Delight Tasting", price: 18, duration: "2.5 hours", time: "02:00 PM", desc: "Over 4,000 artisan shops selling hand-woven carpets, lamps, and spices." }
    ]
  },
  {
    id: "dest-bangkok",
    name: "Bangkok",
    country: "Thailand",
    category: "cultural",
    tagline: "Golden Temple Spires, Floating Markets & Michelin Street Food",
    coordinates: [13.7563, 100.5018],
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1000&q=80",
    description: "An electrifying sensory whirlwind of gilded Buddhist temples, longtail canal boats, vibrant night bazaars, and legendary street food delicacies.",
    bestSeason: "November - February",
    currency: "THB (฿)",
    dailyBudgetEst: 70,
    attractions: [
      { id: "att-bkk-1", name: "Grand Palace & Wat Phra Kaew Emerald Buddha", price: 16, duration: "3 hours", time: "09:00 AM", desc: "Glittering royal compound showcasing intricate gold leaf Thai architecture." },
      { id: "att-bkk-2", name: "Wat Arun Temple of Dawn River Cruise", price: 22, duration: "2 hours", time: "04:30 PM", desc: "Porcelain-encrusted pagoda glowing warm amber under the Chao Phraya sunset." },
      { id: "att-bkk-3", name: "Damnoen Saduak Longtail Boat Floating Market", price: 35, duration: "5 hours", time: "07:30 AM", desc: "Sample mango sticky rice and pad thai right from passing wooden paddle boats." }
    ]
  },
  {
    id: "dest-amsterdam",
    name: "Amsterdam",
    country: "Netherlands",
    category: "romance",
    tagline: "Romantic UNESCO Canals, Gabled Brick Facades & Van Gogh",
    coordinates: [52.3676, 4.9041],
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1000&q=80",
    description: "Charming network of concentric tree-lined canals, historic merchant mansions, world-class art collections, and cycling culture.",
    bestSeason: "April - October",
    currency: "EUR (€)",
    dailyBudgetEst: 155,
    attractions: [
      { id: "att-ams-1", name: "Van Gogh Museum Timed Entry", price: 22, duration: "2.5 hours", time: "10:00 AM", desc: "The largest collection of paintings and letters by Vincent van Gogh." },
      { id: "att-ams-2", name: "UNESCO Historic Canal Wine & Cheese Cruise", price: 38, duration: "1.5 hours", time: "07:00 PM", desc: "Drift past 17th-century illuminated bridges with Dutch Gouda and wine." },
      { id: "att-ams-3", name: "Rijksmuseum Rembrandt 'Night Watch' Tour", price: 25, duration: "3 hours", time: "01:30 PM", desc: "Masterpieces from the Dutch Golden Age in a grand neo-Renaissance palace." }
    ]
  },
  {
    id: "dest-maldives",
    name: "Maldives",
    country: "Maldives",
    category: "beach",
    tagline: "Overwater Villas, Turquoise Lagoons & Bioluminescent Reefs",
    coordinates: [3.2028, 73.2207],
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80",
    description: "The ultimate tropical indulgence with crystal-clear cerulean waters, stilted overwater bungalows, vibrant coral reefs, and untouched sandbanks.",
    bestSeason: "November - April",
    currency: "USD ($)",
    dailyBudgetEst: 280,
    attractions: [
      { id: "att-mld-1", name: "Private Sandbank Sunset Champagne Picnic", price: 140, duration: "3 hours", time: "04:30 PM", desc: "Castaway luxury on an uninhabited white sandbar in the middle of the Indian Ocean." },
      { id: "att-mld-2", name: "Manta Ray & Whale Shark Snorkel Safari", price: 110, duration: "4 hours", time: "09:00 AM", desc: "Swim alongside gentle ocean giants in protected UNESCO biosphere reserves." },
      { id: "att-mld-3", name: "Underwater Glass Restaurant Dining", price: 220, duration: "2 hours", time: "07:30 PM", desc: "Dine 5 meters below sea level surrounded by colorful coral gardens and sharks." }
    ]
  }
];

export const FLIGHTS = [
  {
    id: "fl-01",
    airline: "Emirates",
    flightNumber: "EK 202",
    logoIcon: "fa-plane-departure",
    origin: { code: "JFK", city: "New York", name: "John F. Kennedy Intl" },
    destination: { code: "DXB", city: "Dubai", name: "Dubai International" },
    departureTime: "22:20",
    arrivalTime: "19:30 +1d",
    duration: "13h 10m",
    stops: "Direct",
    aircraft: "Airbus A380-800",
    baggage: "2 x 23kg included",
    cabinClasses: {
      economy: 820,
      premium: 1350,
      business: 2950,
      first: 5800
    }
  },
  {
    id: "fl-02",
    airline: "Singapore Airlines",
    flightNumber: "SQ 25",
    logoIcon: "fa-plane-up",
    origin: { code: "JFK", city: "New York", name: "John F. Kennedy Intl" },
    destination: { code: "SIN", city: "Singapore", name: "Changi International" },
    departureTime: "20:30",
    arrivalTime: "06:10 +2d",
    duration: "18h 40m",
    stops: "Direct",
    aircraft: "Airbus A350-900ULR",
    baggage: "2 x 25kg included",
    cabinClasses: {
      economy: 940,
      premium: 1650,
      business: 3600,
      first: 6900
    }
  },
  {
    id: "fl-03",
    airline: "Qatar Airways",
    flightNumber: "QR 702",
    logoIcon: "fa-plane",
    origin: { code: "JFK", city: "New York", name: "John F. Kennedy Intl" },
    destination: { code: "DPS", city: "Bali", name: "Ngurah Rai Intl" },
    departureTime: "11:15",
    arrivalTime: "21:40 +1d",
    duration: "21h 25m",
    stops: "1 Stop (DOH 2h)",
    aircraft: "Boeing 777-300ER",
    baggage: "2 x 23kg included",
    cabinClasses: {
      economy: 890,
      premium: 1480,
      business: 3400,
      first: 5900
    }
  },
  {
    id: "fl-04",
    airline: "All Nippon Airways (ANA)",
    flightNumber: "NH 109",
    logoIcon: "fa-paper-plane",
    origin: { code: "JFK", city: "New York", name: "John F. Kennedy Intl" },
    destination: { code: "HND", city: "Tokyo", name: "Tokyo Haneda" },
    departureTime: "12:00",
    arrivalTime: "15:40 +1d",
    duration: "14h 40m",
    stops: "Direct",
    aircraft: "Boeing 787-9 Dreamliner",
    baggage: "2 x 23kg included",
    cabinClasses: {
      economy: 920,
      premium: 1550,
      business: 3250,
      first: 6100
    }
  },
  {
    id: "fl-05",
    airline: "Air France",
    flightNumber: "AF 007",
    logoIcon: "fa-plane-departure",
    origin: { code: "JFK", city: "New York", name: "John F. Kennedy Intl" },
    destination: { code: "CDG", city: "Paris", name: "Charles de Gaulle" },
    departureTime: "18:30",
    arrivalTime: "07:45 +1d",
    duration: "7h 15m",
    stops: "Direct",
    aircraft: "Boeing 777-300ER",
    baggage: "1 x 23kg included",
    cabinClasses: {
      economy: 680,
      premium: 1150,
      business: 2400,
      first: 4800
    }
  },
  {
    id: "fl-06",
    airline: "Swiss International",
    flightNumber: "LX 015",
    logoIcon: "fa-plane",
    origin: { code: "JFK", city: "New York", name: "John F. Kennedy Intl" },
    destination: { code: "ZRH", city: "Zurich (Swiss Alps)", name: "Zurich Airport" },
    departureTime: "17:40",
    arrivalTime: "07:20 +1d",
    duration: "7h 40m",
    stops: "Direct",
    aircraft: "Airbus A330-300",
    baggage: "1 x 23kg included",
    cabinClasses: {
      economy: 710,
      premium: 1220,
      business: 2600,
      first: 5200
    }
  },
  {
    id: "fl-07",
    airline: "British Airways",
    flightNumber: "BA 117",
    logoIcon: "fa-plane-arrival",
    origin: { code: "LHR", city: "London", name: "Heathrow Airport" },
    destination: { code: "JTR", city: "Santorini", name: "Thira National" },
    departureTime: "06:45",
    arrivalTime: "12:50",
    duration: "4h 05m",
    stops: "Direct",
    aircraft: "Airbus A320neo",
    baggage: "1 x 23kg included",
    cabinClasses: {
      economy: 320,
      premium: 540,
      business: 850,
      first: 1600
    }
  },
  {
    id: "fl-08",
    airline: "Lufthansa",
    flightNumber: "LH 410",
    logoIcon: "fa-plane-up",
    origin: { code: "FRA", city: "Frankfurt", name: "Frankfurt Airport" },
    destination: { code: "FCO", city: "Rome", name: "Rome Fiumicino" },
    departureTime: "08:15",
    arrivalTime: "10:05",
    duration: "1h 50m",
    stops: "Direct",
    aircraft: "Airbus A321",
    baggage: "1 x 23kg included",
    cabinClasses: {
      economy: 190,
      premium: 290,
      business: 490,
      first: 950
    }
  },
  {
    id: "fl-09",
    airline: "EgyptAir",
    flightNumber: "MS 986",
    logoIcon: "fa-plane",
    origin: { code: "JFK", city: "New York", name: "John F. Kennedy Intl" },
    destination: { code: "CAI", city: "Cairo", name: "Cairo International" },
    departureTime: "18:00",
    arrivalTime: "11:15 +1d",
    duration: "10h 15m",
    stops: "Direct",
    aircraft: "Boeing 787-9 Dreamliner",
    baggage: "2 x 23kg included",
    cabinClasses:      {
        economy: 750,
        premium: 1100,
        business: 2300,
        first: 4200
      }
    }
  },
  {
    id: "fl-10",
    airline: "British Airways",
    flightNumber: "BA 178",
    logoIcon: "fa-plane-departure",
    origin: { code: "JFK", city: "New York", name: "John F. Kennedy Intl" },
    destination: { code: "LHR", city: "London", name: "Heathrow Airport" },
    departureTime: "08:10",
    arrivalTime: "20:05",
    duration: "6h 55m",
    stops: "Direct",
    aircraft: "Boeing 777-300ER",
    baggage: "1 x 23kg included",
    cabinClasses: {
      economy: 540,
      premium: 980,
      business: 2200,
      first: 4500
    }
  },
  {
    id: "fl-11",
    airline: "Singapore Airlines",
    flightNumber: "SQ 26",
    logoIcon: "fa-plane-up",
    origin: { code: "FRA", city: "Frankfurt", name: "Frankfurt Airport" },
    destination: { code: "SIN", city: "Singapore", name: "Changi International" },
    departureTime: "21:55",
    arrivalTime: "16:15 +1d",
    duration: "12h 20m",
    stops: "Direct",
    aircraft: "Airbus A380-800",
    baggage: "2 x 25kg included",
    cabinClasses: {
      economy: 820,
      premium: 1450,
      business: 3100,
      first: 6200
    }
  },
  {
    id: "fl-12",
    airline: "Qantas",
    flightNumber: "QF 11",
    logoIcon: "fa-plane",
    origin: { code: "SYD", city: "Sydney", name: "Sydney Kingsford Smith" },
    destination: { code: "LAX", city: "Los Angeles", name: "Los Angeles Intl" },
    departureTime: "11:20",
    arrivalTime: "06:40",
    duration: "13h 20m",
    stops: "Direct",
    aircraft: "Boeing 787-9 Dreamliner",
    baggage: "2 x 23kg included",
    cabinClasses: {
      economy: 950,
      premium: 1650,
      business: 3800,
      first: 6800
    }
  },
  {
    id: "fl-13",
    airline: "Iberia",
    flightNumber: "IB 6251",
    logoIcon: "fa-paper-plane",
    origin: { code: "JFK", city: "New York", name: "John F. Kennedy Intl" },
    destination: { code: "BCN", city: "Barcelona", name: "Barcelona El Prat" },
    departureTime: "17:15",
    arrivalTime: "06:55 +1d",
    duration: "7h 40m",
    stops: "Direct",
    aircraft: "Airbus A330-200",
    baggage: "1 x 23kg included",
    cabinClasses: {
      economy: 590,
      premium: 1020,
      business: 2350,
      first: 4600
    }
  },
  {
    id: "fl-14",
    airline: "Thai Airways",
    flightNumber: "TG 911",
    logoIcon: "fa-plane-departure",
    origin: { code: "LHR", city: "London", name: "Heathrow Airport" },
    destination: { code: "BKK", city: "Bangkok", name: "Suvarnabhumi Intl" },
    departureTime: "12:30",
    arrivalTime: "06:00 +1d",
    duration: "11h 30m",
    stops: "Direct",
    aircraft: "Airbus A350-900",
    baggage: "2 x 23kg included",
    cabinClasses: {
      economy: 680,
      premium: 1180,
      business: 2650,
      first: 5100
    }
  },
  {
    id: "fl-15",
    airline: "KLM Royal Dutch",
    flightNumber: "KL 641",
    logoIcon: "fa-plane-up",
    origin: { code: "JFK", city: "New York", name: "John F. Kennedy Intl" },
    destination: { code: "AMS", city: "Amsterdam", name: "Amsterdam Schiphol" },
    departureTime: "16:40",
    arrivalTime: "05:55 +1d",
    duration: "7h 15m",
    stops: "Direct",
    aircraft: "Boeing 787-10 Dreamliner",
    baggage: "1 x 23kg included",
    cabinClasses: {
      economy: 610,
      premium: 1050,
      business: 2450,
      first: 4800
    }
  }
];

export const HOTELS = [
  {
    id: "ht-01",
    name: "The Ritz-Carlton Paris",
    city: "Paris",
    country: "France",
    stars: 5,
    rating: 9.8,
    reviewCount: 1420,
    address: "15 Place Vendôme, 1st arr., Paris",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 850,
    amenities: ["Free High-Speed Wi-Fi", "Indoor Heated Pool", "Chanel Spa & Wellness", "Bar Hemingway", "Michelin Dining"],
    rooms: [
      { type: "Deluxe King Room", price: 850, size: "45 m²", perks: "Courtyard view, marble bathroom" },
      { type: "Executive Vendôme Suite", price: 1450, size: "75 m²", perks: "Place Vendôme view, private butler" },
      { type: "Prestige Imperial Suite", price: 3200, size: "120 m²", perks: "Historic salon, champagne bar" }
    ]
  },
  {
    id: "ht-02",
    name: "Aman Tokyo",
    city: "Tokyo",
    country: "Japan",
    stars: 5,
    rating: 9.9,
    reviewCount: 980,
    address: "The Otemachi Tower, 1-5-6 Otemachi, Tokyo",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 980,
    amenities: ["Panoramic Skyline Views", "Traditional Onsen Spa", "30m Black Basalt Pool", "Japanese Garden", "Omakase Counter"],
    rooms: [
      { type: "Deluxe Palace Room", price: 980, size: "71 m²", perks: "Imperial Palace view, Furo soaking tub" },
      { type: "Premier Sky Suite", price: 1750, size: "121 m²", perks: "Mount Fuji panorama, dining area" },
      { type: "The Aman Suite", price: 3900, size: "157 m²", perks: "Double master suite, private wine cellar" }
    ]
  },
  {
    id: "ht-03",
    name: "Four Seasons Resort Bali at Sayan",
    city: "Bali",
    country: "Indonesia",
    stars: 5,
    rating: 9.7,
    reviewCount: 1650,
    address: "Jl. Raya Sayan, Ubud, Bali",
    image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 620,
    amenities: ["Suspension Bridge Entry", "Ayung Riverfront", "Sacred River Spa", "Infinity Pool", "Yoga Pavilion"],
    rooms: [
      { type: "One-Bedroom Valley Villa", price: 620, size: "200 m²", perks: "Private plunge pool, outdoor shower" },
      { type: "Riverfront Luxury Villa", price: 920, size: "295 m²", perks: "Direct river views, expansive sundeck" },
      { type: "The Royal Sayan Villa", price: 2400, size: "550 m²", perks: "Two levels, private chef kitchen" }
    ]
  },
  {
    id: "ht-04",
    name: "The Chedi Andermatt",
    city: "Swiss Alps (Zermatt)",
    country: "Switzerland",
    stars: 5,
    rating: 9.6,
    reviewCount: 780,
    address: "Gotthardstrasse 4, 6490 Andermatt, Switzerland",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 740,
    amenities: ["2,400m² Alpine Spa", "Indoor & Outdoor Pools", "Ski Butler Service", "The Wine & Cigar Library", "Fireplace in every room"],
    rooms: [
      { type: "Alpine Deluxe Room", price: 740, size: "52 m²", perks: "Hästens bed, private balcony fireplace" },
      { type: "Gemsstock Grand Suite", price: 1350, size: "100 m²", perks: "Panoramic alpine peak view" },
      { type: "The Furka Presidential Suite", price: 2900, size: "330 m²", perks: "Private spa, steam bath, gym" }
    ]
  },
  {
    id: "ht-05",
    name: "Grace Hotel, Auberge Resorts",
    city: "Santorini",
    country: "Greece",
    stars: 5,
    rating: 9.8,
    reviewCount: 890,
    address: "Imerovigli, Santorini, 84700 Greece",
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 790,
    amenities: ["Iconic Cliffside Infinity Pool", "Santoro Mediterranean Dining", "Caldera Sunset Views", "Private Jacuzzis", "Champagne Lounge"],
    rooms: [
      { type: "Deluxe Caldera Room", price: 790, size: "32 m²", perks: "Private terrace with outdoor heated plunge" },
      { type: "Superior Caldera Suite", price: 1250, size: "50 m²", perks: "Unobstructed Aegean sunset panorama" },
      { type: "The Grace Villa", price: 2700, size: "150 m²", perks: "Private swimming pool, dedicated concierge" }
    ]
  },
  {
    id: "ht-06",
    name: "Burj Al Arab Jumeirah",
    city: "Dubai",
    country: "UAE",
    stars: 5,
    rating: 9.9,
    reviewCount: 2150,
    address: "Jumeirah Beach Road, Dubai, UAE",
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 1200,
    amenities: ["Rolls-Royce Chauffeur", "Private Helipad", "Talise Spa Over Sea", "Sal Terrace Pools", "24-Karat Gold Leaf Interiors"],
    rooms: [
      { type: "Deluxe One-Bedroom Suite", price: 1200, size: "170 m²", perks: "Two levels, Arabian Gulf view, Jacuzzi" },
      { type: "Sky Panoramic Suite", price: 2100, size: "225 m²", perks: "Floor-to-ceiling glass wall, private bar" },
      { type: "Royal Two-Bedroom Suite", price: 5400, size: "780 m²", perks: "Private cinema, rotating canopy bed" }
    ]
  },
  {
    id: "ht-07",
    name: "Hotel de la Ville, Rocco Forte",
    city: "Rome",
    country: "Italy",
    stars: 5,
    rating: 9.5,
    reviewCount: 1100,
    address: "Via Sistina 69, 00187 Rome, Italy",
    image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 550,
    amenities: ["Spanish Steps View", "Cielo Rooftop Bar", "Irene Forte Spa", "Courtyard Bistro", "Pet Friendly"],
    rooms: [
      { type: "Classic Superior Room", price: 550, size: "30 m²", perks: "Marble bath, bespoke Italian textiles" },
      { type: "Executive City Suite", price: 950, size: "55 m²", perks: "Terrace overlooking Rome rooftops" },
      { type: "Canova Presidential Suite", price: 2200, size: "115 m²", perks: "Private rooftop dining terrace" }
    ]
  },
  {
    id: "ht-08",
    name: "The Plaza Hotel",
    city: "New York City",
    country: "USA",
    stars: 5,
    rating: 9.6,
    reviewCount: 3400,
    address: "Fifth Avenue at Central Park South, New York",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 890,
    amenities: ["Central Park Frontage", "The Palm Court High Tea", "Guerlain Spa", "Champagne Bar", "Butler Service"],
    rooms: [
      { type: "Plaza King Room", price: 890, size: "44 m²", perks: "24-karat gold-plated fixtures" },
      { type: "Edwardian Park Suite", price: 1650, size: "93 m²", perks: "Direct unobstructed Central Park view" },
      { type: "Royal Three-Bedroom Suite", price: 4200, size: "400 m²", perks: "Grand piano, library, dining for 12" }
    ]
  },
  {
    id: "ht-09",
    name: "The Savoy, London",
    city: "London",
    country: "United Kingdom",
    stars: 5,
    rating: 9.8,
    reviewCount: 2890,
    address: "Strand, London WC2R 0EZ, UK",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 780,
    amenities: ["Thames River Views", "Savoy Grill by Gordon Ramsay", "Beaufort Champagne Bar", "Butler Service", "Indoor Pool"],
    rooms: [
      { type: "Superior Queen Room", price: 780, size: "38 m²", perks: "Edwardian decor, marble bathroom" },
      { type: "River View Junior Suite", price: 1350, size: "62 m²", perks: "Panoramic Thames and London Eye views" },
      { type: "The Royal Suite by Gucci", price: 4500, size: "265 m²", perks: "Full private floor, bespoke bar, butler" }
    ]
  },
  {
    id: "ht-10",
    name: "Hotel Arts Barcelona",
    city: "Barcelona",
    country: "Spain",
    stars: 5,
    rating: 9.6,
    reviewCount: 1780,
    address: "Carrer de Marina 19-21, Barcelona",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 520,
    amenities: ["Beachfront Frontage", "Two-Michelin-Star Enoteca", "43 The Spa Panoramic", "Infinity Pools", "Frank Gehry Fish View"],
    rooms: [
      { type: "Deluxe Mediterranean Sea Room", price: 520, size: "45 m²", perks: "Floor-to-ceiling sea panorama" },
      { type: "Executive Sea Suite", price: 920, size: "75 m²", perks: "Separate salon, Bang & Olufsen sound" },
      { type: "Arts Penthouse Duplex", price: 2600, size: "180 m²", perks: "Top floor duplex, private terrace, chauffeur" }
    ]
  },
  {
    id: "ht-11",
    name: "Marina Bay Sands",
    city: "Singapore",
    country: "Singapore",
    stars: 5,
    rating: 9.7,
    reviewCount: 5400,
    address: "10 Bayfront Avenue, Marina Bay, Singapore",
    image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 890,
    amenities: ["World-Famous Rooftop Infinity Pool", "SkyPark Observation Access", "Banyan Tree Spa", "Celebrity Chef Restaurants", "Direct Mall Access"],
    rooms: [
      { type: "Deluxe Marina View Room", price: 890, size: "47 m²", perks: "Views over Gardens by the Bay" },
      { type: "Sands Premier Suite", price: 1550, size: "95 m²", perks: "Complimentary Club55 access & cocktails" },
      { type: "Chairman Presidential Suite", price: 4800, size: "629 m²", perks: "Karaoke room, private sauna, butler" }
    ]
  },
  {
    id: "ht-12",
    name: "Park Hyatt Sydney",
    city: "Sydney",
    country: "Australia",
    stars: 5,
    rating: 9.9,
    reviewCount: 1420,
    address: "7 Hickson Road, The Rocks, Sydney",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 920,
    amenities: ["Direct Opera House Views", "Rooftop Heated Pool & Cabanas", "The Spa at Park Hyatt", "Private Wharf Entry", "24h Butler"],
    rooms: [
      { type: "Harbour King Room", price: 920, size: "45 m²", perks: "Floor-to-ceiling glass, marble bath" },
      { type: "Opera View Deluxe Suite", price: 1850, size: "80 m²", perks: "Unobstructed direct Sydney Opera House view" },
      { type: "The Sydney Suite", price: 5200, size: "350 m²", perks: "360-degree harbour terrace, sauna, chef kitchen" }
    ]
  },
  {
    id: "ht-13",
    name: "The Gritti Palace, Luxury Collection",
    city: "Venice",
    country: "Italy",
    stars: 5,
    rating: 9.8,
    reviewCount: 960,
    address: "Campo Santa Maria Del Giglio 2467, Venice",
    image: "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 1100,
    amenities: ["Grand Canal Waterfront", "Bar Longhi Murano Glass Salon", "The Gritti Epicurean School", "Acqua di Parma Spa", "Private Riva Yacht"],
    rooms: [
      { type: "Venetian Heritage Room", price: 1100, size: "38 m²", perks: "Antique chandeliers, Rubelli silk wall coverings" },
      { type: "Grand Canal Patron Suite", price: 2400, size: "78 m²", perks: "Balcony over gondolas on the Grand Canal" },
      { type: "Hemingway Presidential Suite", price: 5600, size: "120 m²", perks: "Hemingway's personal retreat, private cellar" }
    ]
  },
  {
    id: "ht-14",
    name: "The Retreat at Blue Lagoon",
    city: "Reykjavik",
    country: "Iceland",
    stars: 5,
    rating: 9.9,
    reviewCount: 680,
    address: "Nordurljosavegur 11, 240 Grindavík, Iceland",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 1250,
    amenities: ["Private Subterranean Mineral Lagoon", "Moss Michelin-Recommended Dining", "Subterranean Spa Ritual", "Aurora Viewing Lounge", "Host Concierge"],
    rooms: [
      { type: "Lava Junior Suite", price: 1250, size: "40 m²", perks: "Floor-to-ceiling volcanic moss view" },
      { type: "Lagoon View Suite", price: 1950, size: "60 m²", perks: "Direct private entrance to geothermal waters" },
      { type: "The Blue Lagoon Suite", price: 3800, size: "210 m²", perks: "Private lagoon sanctuary, private chef" }
    ]
  },
  {
    id: "ht-15",
    name: "Çırağan Palace Kempinski",
    city: "Istanbul",
    country: "Turkey",
    stars: 5,
    rating: 9.8,
    reviewCount: 1890,
    address: "Yıldız, Çırağan Cd. No:32, Beşiktaş, Istanbul",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 680,
    amenities: ["Authentic 17th-Century Ottoman Palace", "Heated Bosphorus Infinity Pool", "Tuğra Imperial Ottoman Dining", "Sanitas Spa & Hamam", "Helipad"],
    rooms: [
      { type: "Bosphorus View Superior Room", price: 680, size: "42 m²", perks: "Watch ocean liners glide past your window" },
      { type: "Palace Bosphorus Suite", price: 1450, size: "85 m²", perks: "High ceilings in the historic imperial wing" },
      { type: "The Sultan Suite", price: 5800, size: "458 m²", perks: "One of the largest suites in Europe, 24h butler" }
    ]
  },
  {
    id: "ht-16",
    name: "Mandarin Oriental Bangkok",
    city: "Bangkok",
    country: "Thailand",
    stars: 5,
    rating: 9.9,
    reviewCount: 3100,
    address: "48 Oriental Avenue, Bang Rak, Bangkok",
    image: "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 580,
    amenities: ["Chao Phraya Riverfront", "The Bamboo Bar Jazz Lounge", "Two-Michelin Le Normandie", "The Oriental Spa", "Teak Shuttle Boats"],
    rooms: [
      { type: "Deluxe Premier River Room", price: 580, size: "43 m²", perks: "Teak floors, Thai silk furnishings, river vista" },
      { type: "Authors' Heritage Suite", price: 1250, size: "85 m²", perks: "Dedicated to Somerset Maugham & Joseph Conrad" },
      { type: "Grand Royal Oriental Suite", price: 4200, size: "376 m²", perks: "Private elevator, 6 salons, personal butler" }
    ]
  },
  {
    id: "ht-17",
    name: "Waldorf Astoria Amsterdam",
    city: "Amsterdam",
    country: "Netherlands",
    stars: 5,
    rating: 9.7,
    reviewCount: 880,
    address: "Herengracht 542-556, 1017 CG Amsterdam",
    image: "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 840,
    amenities: ["Six Historic 17th-Century Palaces", "Private Courtyard Garden", "Guerlain Spa", "Spectrum 2-Michelin Dining", "Personal Concierge"],
    rooms: [
      { type: "King Superior Canal Room", price: 840, size: "42 m²", perks: "Herengracht canal view, beam ceilings" },
      { type: "Grand One-Bedroom Suite", price: 1650, size: "88 m²", perks: "Historic fireplaces, private salon" },
      { type: "Brentano Suite", price: 3900, size: "123 m²", perks: "Original 18th-century ceiling paintings" }
    ]
  },
  {
    id: "ht-18",
    name: "Soneva Jani Overwater Resort",
    city: "Maldives",
    country: "Maldives",
    stars: 5,
    rating: 9.9,
    reviewCount: 720,
    address: "Medhufaru Island, Noonu Atoll, Maldives",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 1850,
    amenities: ["Water Slides Straight into Lagoon", "Retractable Star-Gazing Roof", "Cinema Paradiso Overwater", "Private Barefoot Butler", "Observatory"],
    rooms: [
      { type: "One-Bedroom Water Retreat with Slide", price: 1850, size: "411 m²", perks: "Private pool, lagoon slide, glass floor panels" },
      { type: "Two-Bedroom Water Reserve", price: 3200, size: "772 m²", perks: "Expansive sundeck, wine vault, catamaran nets" },
      { type: "Chapter Two Four-Bedroom Island Reserve", price: 6800, size: "1421 m²", perks: "Private beach lagoon, spa pavilion, chef" }
    ]
  },
  {
    id: "ht-19",
    name: "Atlantis The Royal",
    city: "Dubai",
    country: "UAE",
    stars: 5,
    rating: 9.8,
    reviewCount: 2600,
    address: "Palm Jumeirah, Crescent Rd, Dubai",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 1150,
    amenities: ["Cloud 22 Sky Pool 90m in Air", "Nobu by the Beach", "Fire & Water Fountain Shows", "Awaken Wellness Spa", "Aquaventure Pass"],
    rooms: [
      { type: "Seascape King Room", price: 1150, size: "55 m²", perks: "Floor-to-ceiling Arabian Sea glass wall" },
      { type: "Sky Pool Villa Suite", price: 2400, size: "118 m²", perks: "Private sky infinity plunge pool" },
      { type: "The Royal Mansion Penthouse", price: 7500, size: "1128 m²", perks: "Private 360 infinity pool, 4 master suites" }
    ]
  },
  {
    id: "ht-20",
    name: "Belmond Copacabana Palace",
    city: "Rio de Janeiro",
    country: "Brazil",
    stars: 5,
    rating: 9.7,
    reviewCount: 2200,
    address: "Avenida Atlântica 1702, Copacabana, Rio",
    image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?auto=format&fit=crop&w=1000&q=80",
    pricePerNight: 620,
    amenities: ["Art Deco Glamour on Copacabana", "Historic Half-Olympic Pool", "Michelin-Starred MEE", "Copacabana Spa", "Exclusive Beach Service"],
    rooms: [
      { type: "Superior City View Room", price: 620, size: "35 m²", perks: "Stucco ceilings, marble bathroom" },
      { type: "Deluxe Ocean View Suite", price: 1150, size: "65 m²", perks: "Balcony looking directly over Copacabana waves" },
      { type: "Penthouse Suite Floor", price: 3400, size: "100 m²", perks: "Private black pool access, antique French furniture" }
    ]
  }
];

export const PACKAGES = [
  {
    id: "pkg-swiss-01",
    title: "7-Day Swiss Alpine & Panoramic Express",
    destination: "Swiss Alps (Zermatt)",
    duration: "7 Days / 6 Nights",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&w=1000&q=80",
    price: 2450,
    originalPrice: 2890,
    rating: 4.95,
    reviews: 312,
    highlights: ["First-Class Glacier Express Train Pass", "5★ The Chedi Luxury Chalet", "Matterhorn Cable Car", "Fondue Masterclass"],
    inclusions: ["Flights Included", "Luxury 5★ Stays", "Private Transfers", "Daily Breakfast & Dinners", "Ski & Cableway Passes"],
    itinerary: [
      { day: 1, title: "Arrival in Zurich & Scenic Train to Zermatt", desc: "VIP airport greeting, transfer to first-class panoramic train through Alpine valleys, check-in at luxury chalet, welcome fondue." },
      { day: 2, title: "Matterhorn Glacier Paradise Ascent", desc: "Take Europe's highest cable car to 3,883m, tour the crystal Ice Palace, and enjoy lunch with Matterhorn panoramas." },
      { day: 3, title: "Gornergrat Cogwheel & Riffelsee Reflection Walk", desc: "Climb by cogwheel train to Gornergrat, photograph the famous Matterhorn reflection in alpine lake Riffelsee, afternoon spa." },
      { day: 4, title: "The Legendary Glacier Express Journey", desc: "Board the world's slowest express train with glass ceilings, passing over 291 bridges and through 91 tunnels towards St. Moritz." },
      { day: 5, title: "St. Moritz Alpine Glitz & Frozen Lake Walk", desc: "Boutique shopping, horse-drawn carriage ride around Lake St. Moritz, evening fine dining at Michelin-starred retreat." },
      { day: 6, title: "Thermal Spa Sanctuary & Wine Tasting", desc: "Relax muscles in natural thermal mineral baths, private cellar tasting of rare Valais Swiss wines." },
      { day: 7, title: "Zurich Old Town Exploration & Departure", desc: "Scenic return train to Zurich, stroll along Lake Zurich and Bahnhofstrasse, private chauffeur transfer to airport." }
    ]
  },
  {
    id: "pkg-bali-02",
    title: "5-Day Bali Spiritual & Beach Haven",
    destination: "Bali",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
    price: 1150,
    originalPrice: 1420,
    rating: 4.92,
    reviews: 448,
    highlights: ["Private Ubud Pool Villa", "Nusa Penida Manta Cruise", "Uluwatu Sunset Kecak Dance", "Balinese Cooking School"],
    inclusions: ["Roundtrip Airfare", "Private Pool Villa", "Private Chauffeur Guide", "Floating Breakfasts", "All Temple Entries"],
    itinerary: [
      { day: 1, title: "Ubud Arrival & Private Pool Villa Check-in", desc: "Floral garland airport welcome, scenic drive to Sayan Valley, Balinese welcome massage and floating candlelit dinner." },
      { day: 2, title: "Tegallalang Terraces & Sacred Water Cleansing", desc: "Early morning jungle swings over rice fields, spiritual Tirta Empul temple water blessing ritual." },
      { day: 3, title: "Nusa Penida Island Speedboat Day", desc: "Private boat to Kelingking T-Rex cliff, snorkeling with graceful giant manta rays at Crystal Bay." },
      { day: 4, title: "Uluwatu Cliff & Fiery Sunset Kecak", desc: "Visit dramatic coastal cliffs, enjoy sea-view cliffside cocktail lounge, and watch the trance fire dance." },
      { day: 5, title: "Seminyak Beach Club & Souvenir Shopping", desc: "Relax by Potato Head beach club, artisan market walk, transfer to Denpasar international terminal." }
    ]
  },
  {
    id: "pkg-japan-03",
    title: "8-Day Japan Cultural & Golden Route",
    destination: "Tokyo",
    duration: "8 Days / 7 Nights",
    image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80",
    price: 2850,
    originalPrice: 3300,
    rating: 4.98,
    reviews: 512,
    highlights: ["Bullet Train (Shinkansen) Pass", "Aman Tokyo & Ryokan Stays", "Fushimi Inari Sunrise Tour", "Wagyu & Kaiseki Dinners"],
    inclusions: ["International Flights", "7-Day JR Green Pass", "5★ Stays & Luxury Ryokan", "English Speaking Expert Guide", "Luggage Forwarding"],
    itinerary: [
      { day: 1, title: "Tokyo Arrival & Shibuya Lights", desc: "Arrival at Haneda/Narita, luxury transfer to Aman Tokyo, evening walk through neon Shibuya Crossing and Izakaya alley." },
      { day: 2, title: "Asakusa Heritage & TeamLab Digital Dreams", desc: "Visit Senso-ji temple, water bus along Sumida River, and walk through boundless sensory digital exhibits at TeamLab." },
      { day: 3, title: "Mount Fuji & Hakone Thermal Onsen", desc: "High-speed drive to Lake Ashi, cable car over volcanic steaming valley, traditional kaiseki multi-course dinner in yukata." },
      { day: 4, title: "Shinkansen Bullet Train to Kyoto", desc: "Experience 300 km/h Shinkansen train, check-in to historic riverside ryokan, Gion geisha district evening walk." },
      { day: 5, title: "Kyoto Golden Pavilion & Bamboo Grove", desc: "Visit shimmering Kinkaku-ji, walk serene Arashiyama bamboo paths, and feed monkeys at Iwatayama." },
      { day: 6, title: "10,000 Vermilion Gates of Fushimi Inari", desc: "Early morning tranquil hike through sacred red gates, followed by a ceremonial matcha tea ceremony." },
      { day: 7, title: "Osaka Street Food & Castle Gardens", desc: "Short hop to Osaka, eat takoyaki and okonomiyaki at Dotonbori, explore historic Osaka Castle." },
      { day: 8, title: "Sayonara Japan & Departure", desc: "Last-minute souvenir shopping for Tokyo Bananas and ceramics, transfer to airport for return flight." }
    ]
  },
  {
    id: "pkg-sant-04",
    title: "6-Day Santorini & Cycladic Odyssey",
    destination: "Santorini",
    duration: "6 Days / 5 Nights",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80",
    price: 1890,
    originalPrice: 2200,
    rating: 4.96,
    reviews: 280,
    highlights: ["Cliffside Cave Suite with Plunge Pool", "Private Catamaran Sunset Cruise", "Volcanic Wine Tasting", "Helicopter Transfer"],
    inclusions: ["All Flights Included", "5★ Boutique Cave Suite", "Daily Greek Gourmet Breakfast", "Catamaran Cruise with Seafood BBQ", "Private Mercedes Transfers"],
    itinerary: [
      { day: 1, title: "Santorini Arrival & Cliff Suite Check-In", desc: "Breathtaking arrival over volcanic cliffs, welcome prosecco, check into cave suite in Imerovigli with private heated plunge pool." },
      { day: 2, title: "Oia Whitewashed Paths & Golden Sunset", desc: "Explore marble walkways, blue-domed postcard churches, and capture the famous sunset from Byzantine Castle ruins." },
      { day: 3, title: "Private Luxury Catamaran Cruise", desc: "Sail across volcanic caldera, swim in sulfur thermal springs, snorkel at Red Beach, enjoy grilled calamari with Assyrtiko wine." },
      { day: 4, title: "Ancient Akrotiri & Volcanic Vineyards", desc: "Uncover ruins preserved under volcanic ash, visit three cliffside wineries with local sommelier pairings." },
      { day: 5, title: "Fira to Oia Caldera Hike & Spa Day", desc: "World-class rim hike across dramatic volcanic ridges, afternoon couples massage, candlelit dinner over the abyss." },
      { day: 6, title: "Morning Aegean Dip & Homeward Flight", desc: "Final dip in infinity pool, Aegean breakfast with wild honey and Greek yogurt, transfer to airport." }
    ]
  },
  {
    id: "pkg-dubai-05",
    title: "5-Day Dubai Ultra-Luxury & Desert Dunes",
    destination: "Dubai",
    duration: "5 Days / 4 Nights",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
    price: 1980,
    originalPrice: 2450,
    rating: 4.94,
    reviews: 388,
    highlights: ["Burj Khalifa Level 148 Lounge", "Private Dune Bashing & Stargazing Camp", "Luxury Yacht Charter", "Atlantis Aquaventure"],
    inclusions: ["Emirates Flights", "5★ Burj Al Arab / Marina Luxury Suite", "Rolls-Royce Chauffeur", "VIP Fast-Track Entries", "All Meals & Desert Feast"],
    itinerary: [
      { day: 1, title: "Dubai Arrival & Marina Sky Dinner", desc: "VIP meet & greet at DXB, check into luxury waterfront suite, dinner at atmosphere lounge overlooking Dubai Marina." },
      { day: 2, title: "Burj Khalifa Top Floor & Fountain Show", desc: "Direct VIP elevator to the highest observation lounge in the world, followed by private viewing of dancing fountains." },
      { day: 3, title: "Heritage Desert Safari & Stargazing Feast", desc: "Vintage Land Rover safari through wildlife reserve, falconry display, and gourmet Arabian banquet under the desert stars." },
      { day: 4, title: "Private Yacht Cruise around the Palm", desc: "Board 65ft private yacht, glide past Burj Al Arab and Atlantis, swim in Arabian Gulf turquoise waters." },
      { day: 5, title: "Gold Souk & Dubai Mall Souvenirs", desc: "Ride traditional abra boat across Dubai Creek, shop for fine gold and saffron spices, transfer to airport." }
    ]
  },
  {
    id: "pkg-europe-06",
    title: "10-Day Grand European Heritage Tour",
    destination: "Paris",
    duration: "10 Days / 9 Nights",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1000&q=80",
    price: 3600,
    originalPrice: 4200,
    rating: 4.97,
    reviews: 620,
    highlights: ["Paris, Swiss Alps & Rome High-Speed Rail", "Eiffel Tower Champagne Access", "Colosseum Underground Arena", "Louvre Guided Tour"],
    inclusions: ["Intercontinental Flights", "First Class Eurostar & TGV Trains", "5★ Historic City Center Hotels", "All Museum Skip-The-Line Passes", "Dedicated Tour Concierge"],
    itinerary: [
      { day: 1, title: "Paris Welcome & Seine Dinner Cruise", desc: "Arrival in Paris, check-in to historic central boutique hotel, twilight gourmet glass-canopy river cruise." },
      { day: 2, title: "Eiffel Tower & Louvre Masterpieces", desc: "Skip-the-line elevator to top of the Eiffel Tower, private art historian guide through Louvre's top wings." },
      { day: 3, title: "Versailles Palace Gardens & Hall of Mirrors", desc: "Step into the golden grandeur of King Louis XIV, bike through manicured royal fountains and Marie Antoinette hamlet." },
      { day: 4, title: "High-Speed TGV to the Swiss Alps", desc: "Board high-speed train to Zurich/Lucerne, cruise on Lake Lucerne, cogwheel train to Mount Pilatus." },
      { day: 5, title: "Alpine Meadows & Traditional Swiss Fondue", desc: "Morning mountain hike with cowbells ringing, visit heritage cheese dairy, scenic train over Gotthard Pass." },
      { day: 6, title: "Arrival in Rome & Piazza Navona Evening", desc: "Arrive in the Eternal City, taste legendary Italian gelato at Giolitti, evening stroll by Pantheon." },
      { day: 7, title: "Gladiators of Colosseum & Roman Forum", desc: "Walk on the reconstructed arena floor, explore the ruins of Palatine Hill and ancient Roman Senate." },
      { day: 8, title: "Vatican City & Michelangelo's Frescoes", desc: "Private dawn access to Sistine Chapel before general crowds, marvel at St. Peter's Dome." },
      { day: 9, title: "Trastevere Food Walk & Roman Wine Cellar", desc: "Explore bohemian cobblestone quarters, handmade pasta workshop, sampling vintage Barolo and Brunello." },
      { day: 10, title: "Trevi Fountain Coin Toss & Departure", desc: "Toss a coin into Trevi Fountain to guarantee your return, private chauffeur transfer to Rome Fiumicino." }
    ]
  }
];

export const CURRENCY_RATES = {
  USD: { symbol: "$", rate: 1.0, name: "US Dollar" },
  EUR: { symbol: "€", rate: 0.92, name: "Euro" },
  GBP: { symbol: "£", rate: 0.79, name: "British Pound" },
  INR: { symbol: "₹", rate: 83.5, name: "Indian Rupee" },
  JPY: { symbol: "¥", rate: 154.0, name: "Japanese Yen" },
  AUD: { symbol: "A$", rate: 1.52, name: "Australian Dollar" },
  CAD: { symbol: "C$", rate: 1.37, name: "Canadian Dollar" }
};
