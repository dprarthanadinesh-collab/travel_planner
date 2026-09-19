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
,
      { id: "att-paris-5", name: "Palace of Versailles Hall of Mirrors", price: 28, duration: "4 hours", time: "09:00 AM", desc: "Gilded royal apartments, manicured fountain gardens, and King Louis XIV grand history." },
      { id: "att-paris-6", name: "Sainte-Chapelle Stained Glass Marvel", price: 19, duration: "1.5 hours", time: "02:30 PM", desc: "1,113 breathtaking 13th-century stained-glass windows depicting biblical history." }    ]
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
,
      { id: "att-tokyo-5", name: "Meiji Jingu Shrine & Forest Walk", price: 0, duration: "2.5 hours", time: "10:00 AM", desc: "Tranquil evergreen forest sanctuary dedicated to Emperor Meiji in the heart of Shibuya." },
      { id: "att-tokyo-6", name: "Shinjuku Gyoen National Garden & Tea", price: 15, duration: "2 hours", time: "03:00 PM", desc: "Traditional Japanese landscape gardens, English lawns, and greenhouse." }    ]
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
,
      { id: "att-bali-5", name: "Mount Batur Sunrise Volcano Trek", price: 45, duration: "6 hours", time: "03:00 AM", desc: "Climb active volcanic caldera before dawn for panoramic sunrise and natural hot springs." },
      { id: "att-bali-6", name: "Tanah Lot Sea Temple at Sunset", price: 12, duration: "2.5 hours", time: "05:00 PM", desc: "Ancient offshore rock temple surrounded by crashing Indian Ocean waves during golden hour." }    ]
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
,
      { id: "att-swiss-4", name: "Matterhorn Glacier Paradise 3883m", price: 95, duration: "3.5 hours", time: "09:30 AM", desc: "Highest cable car station in Europe with 360-degree alpine panorama and ice palace." },
      { id: "att-swiss-5", name: "Zermatt Old Village & Fondue Walk", price: 40, duration: "2.5 hours", time: "06:30 PM", desc: "Stroll ancient sun-blackened timber chalets followed by authentic melted Gruyere feast." }    ]
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
,
      { id: "att-santorini-4", name: "Santo Wines Clifftop Sunset Tasting", price: 42, duration: "2 hours", time: "06:00 PM", desc: "Sample crisp Assyrtiko volcanic wines from a cliff terrace over the flooded caldera." },
      { id: "att-santorini-5", name: "Fira to Oia Scenic Caldera Trek", price: 0, duration: "3.5 hours", time: "08:00 AM", desc: "Spectacular 10km walking trail clinging to volcanic cliff edges between whitewashed villages." }    ]
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
,
      { id: "att-dubai-4", name: "The Palm Jumeirah Helicopter Flight", price: 180, duration: "1 hour", time: "11:30 AM", desc: "Soar high over the artificial island archipelago, Burj Al Arab, and World Islands." },
      { id: "att-dubai-5", name: "Dubai Miracle Garden & Butterfly Sanctuary", price: 25, duration: "3 hours", time: "04:00 PM", desc: "150 million blooming flowers crafted into monumental sculptures and Emirates A380 display." }    ]
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
,
      { id: "att-rome-4", name: "Borghese Gallery & Villa Gardens", price: 26, duration: "2.5 hours", time: "10:30 AM", desc: "Masterpieces by Bernini, Caravaggio, and Raphael in a cardinal 17th-century villa." },
      { id: "att-rome-5", name: "Trevi Fountain & Pantheon Night Walk", price: 0, duration: "2 hours", time: "08:30 PM", desc: "Magically lit Roman piazzas, coin toss at Trevi, and ancient dome under starlight." }    ]
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
,
      { id: "att-nyc-4", name: "Central Park Guided E-Bike Tour", price: 45, duration: "2.5 hours", time: "10:00 AM", desc: "Glide past Strawberry Fields, Bethesda Terrace, and Bow Bridge on guided electric bikes." },
      { id: "att-nyc-5", name: "Edge Hudson Yards Glass Skydeck", price: 38, duration: "2 hours", time: "04:30 PM", desc: "Highest outdoor sky deck in the Western Hemisphere with thrilling angled glass walls." }    ]
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
,
      { id: "att-cairo-4", name: "Saqqara Step Pyramid of Djoser", price: 22, duration: "3 hours", time: "09:00 AM", desc: "Earliest monumental stone structure in Egypt and ancient royal burial necropolis." },
      { id: "att-cairo-5", name: "Khan el-Khalili Historic Souk Night Tour", price: 18, duration: "2.5 hours", time: "07:30 PM", desc: "Wander 14th-century labyrinthine spice, lantern, and silver alleys lit by antique brass lamps." }    ]
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
,
      { id: "att-kyoto-4", name: "Kinkaku-ji Golden Pavilion Zen Gardens", price: 12, duration: "2 hours", time: "09:30 AM", desc: "Gleaming gold-leaf covered Zen temple shimmering across Mirror Pond surrounded by pines." },
      { id: "att-kyoto-5", name: "Kiyomizu-dera Wooden Stage Sunset", price: 10, duration: "2.5 hours", time: "04:30 PM", desc: "Historic 8th-century temple cantilevered over hillside with commanding panorama of Kyoto." }    ]
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
,
      { id: "att-rio-4", name: "Selaron Steps & Santa Teresa Bohemian Walk", price: 15, duration: "2.5 hours", time: "10:30 AM", desc: "215 vivid mosaic steps adorned with 2,000+ ceramic tiles from 60 countries, and street art." },
      { id: "att-rio-5", name: "Tijuca Rainforest 4x4 Jeep Tour", price: 48, duration: "4 hours", time: "08:30 AM", desc: "Explore the worlds largest urban rainforest, dramatic cascading waterfalls, and exotic toucans." }    ]
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
,
      { id: "att-capetown-4", name: "Kirstenbosch Canopy Walkway & Botanical Gardens", price: 20, duration: "3 hours", time: "10:00 AM", desc: "Centenary Tree Canopy Walkway 'Boomslang' winding through native fynbos under Table Mountain." },
      { id: "att-capetown-5", name: "Franschhoek Valley Wine Tram Expedition", price: 55, duration: "6 hours", time: "09:00 AM", desc: "Open-air double-decker railway carriage touring prestigious wine estates, cellars, and tastings." }    ]
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
,
      { id: "att-london-5", name: "Westminster Abbey Royal Audio Tour", price: 27, duration: "2.5 hours", time: "10:00 AM", desc: "Site of every royal coronation since 1066 and burial place of Charles Dickens and Isaac Newton." },
      { id: "att-london-6", name: "The Shard 360 View & Champagne", price: 35, duration: "1.5 hours", time: "05:30 PM", desc: "Stand 800 feet above the Thames with views stretching up to 40 miles across Greater London." }    ]
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
,
      { id: "att-barcelona-4", name: "Casa Batllo Gaudi Immersion Experience", price: 35, duration: "2 hours", time: "11:00 AM", desc: "Dragon-back roof, iridescent marine tiles, and surrealist modernist architecture on Passeig de Gracia." },
      { id: "att-barcelona-5", name: "Montserrat Mountain Monastery Trip", price: 55, duration: "5 hours", time: "08:30 AM", desc: "Serrated peaks, Benedictine abbey, and the Black Madonna statue high above Catalonia." }    ]
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
,
      { id: "att-singapore-4", name: "Sentosa Island Cable Car & Beach", price: 28, duration: "4 hours", time: "01:00 PM", desc: "Panoramic harbor flight across Mount Faber to tropical white sand beach lagoons." },
      { id: "att-singapore-5", name: "Chinatown & Little India Food Safari", price: 32, duration: "2.5 hours", time: "06:30 PM", desc: "Tasting Michelin Bib Gourmand Hainanese chicken rice, laksa, and roti prata." }    ]
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
,
      { id: "att-sydney-4", name: "Blue Mountains & Scenic World Day Trip", price: 85, duration: "7 hours", time: "08:00 AM", desc: "Ancient eucalyptus canyons, Three Sisters rock formation, and steepest incline railway." },
      { id: "att-sydney-5", name: "Manly Ferry & Coastal Walk", price: 25, duration: "3 hours", time: "01:00 PM", desc: "Scenic 30-min harbor crossing from Circular Quay to pine-fringed ocean surf beaches." }    ]
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
,
      { id: "att-venice-4", name: "St. Marks Basilica Golden Pala dOro", price: 20, duration: "2 hours", time: "09:30 AM", desc: "43,000 square feet of luminous Byzantine gold mosaics and treasury relics." },
      { id: "att-venice-5", name: "Rialto Market Cicchetti & Wine Crawl", price: 45, duration: "2.5 hours", time: "11:30 AM", desc: "Hop between traditional bacari taverns for Venetian tapas and sparkling Prosecco." }    ]
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
,
      { id: "att-iceland-4", name: "Thingvellir Silfra Fissure Glacial Snorkel", price: 130, duration: "4 hours", time: "10:00 AM", desc: "Float between North American and Eurasian tectonic plates in crystal-clear glacial water." },
      { id: "att-iceland-5", name: "Black Sand Beach & Vik Basalt Columns", price: 75, duration: "6 hours", time: "09:00 AM", desc: "Reynisfjara jet-black volcanic shores, towering hexagonal basalt columns, and roaring Atlantic waves." }    ]
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
,
      { id: "att-istanbul-4", name: "Topkapi Palace Imperial Treasury & Harem", price: 28, duration: "3 hours", time: "10:00 AM", desc: "Centuries of Ottoman sultans, diamond-encrusted daggers, and ornate mosaic courtyards." },
      { id: "att-istanbul-5", name: "Basilica Cistern Sunken Palace Illumination", price: 18, duration: "1.5 hours", time: "03:00 PM", desc: "Subterranean Roman chamber of 336 marble columns reflecting over mood-lit waters." }    ]
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
,
      { id: "att-bangkok-4", name: "Chatuchak Weekend Market & Street Food", price: 15, duration: "4 hours", time: "11:00 AM", desc: "Over 15,000 bustling stalls offering handmade crafts, silk, vintage apparel, and sizzling mango sticky rice." },
      { id: "att-bangkok-5", name: "Jim Thompson Traditional Silk House & Canal", price: 12, duration: "2 hours", time: "02:30 PM", desc: "Exquisite 1950s teakwood compound nestled beside Saen Saep Canal amidst lush tropical flora." }    ]
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
,
      { id: "att-amsterdam-4", name: "Anne Frank House & Jordaan Heritage Walk", price: 22, duration: "2.5 hours", time: "10:00 AM", desc: "Deeply moving WWII secret annex followed by picturesque 17th-century canal bridges and cafes." },
      { id: "att-amsterdam-5", name: "Keukenhof Royal Tulip Fields Express", price: 38, duration: "4.5 hours", time: "09:00 AM", desc: "7 million blooming spring tulips, daffodils, and hyacinths across historic royal estate pavilions." }    ]
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
,
      { id: "att-maldives-4", name: "Coral Reef Semi-Submarine Safari", price: 85, duration: "2 hours", time: "02:00 PM", desc: "Air-conditioned underwater cabin cruising past sea turtles, rays, and reef sharks." },
      { id: "att-maldives-5", name: "Bioluminescent Plankton Night Voyage", price: 70, duration: "2 hours", time: "08:00 PM", desc: "Witness ethereal blue glowing waves created by millions of bioluminescent dinoflagellates." }    ]
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
    cabinClasses: {
      economy: 750,
      premium: 1100,
      business: 2300,
      first: 4200
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
    "id": "ht-01",
    "name": "The Ritz-Carlton Paris",
    "city": "Paris",
    "country": "France",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 1420,
    "address": "15 Place Vendome, 1st arr., Paris",
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 850,
    "amenities": [
      "Free High-Speed Wi-Fi",
      "Indoor Heated Pool",
      "Chanel Spa & Wellness",
      "Bar Hemingway",
      "Michelin Dining"
    ],
    "rooms": [
      {
        "type": "Deluxe King Room",
        "price": 850,
        "size": "45 m2",
        "perks": "Courtyard view, marble bathroom"
      },
      {
        "type": "Executive Vendome Suite",
        "price": 1450,
        "size": "75 m2",
        "perks": "Place Vendome view, private butler"
      },
      {
        "type": "Prestige Imperial Suite",
        "price": 3200,
        "size": "120 m2",
        "perks": "Historic salon, champagne bar"
      }
    ]
  },
  {
    "id": "ht-paris-2",
    "name": "Hotel Plaza Athenee",
    "city": "Paris",
    "country": "France",
    "stars": 5,
    "rating": 9.7,
    "reviewCount": 1180,
    "address": "25 Avenue Montaigne, 8th arr., Paris",
    "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 920,
    "amenities": [
      "Eiffel Tower Views",
      "Dior Spa",
      "Courtyard Garden Dining",
      "Signature Red Awnings",
      "Haute Cuisine"
    ],
    "rooms": [
      {
        "type": "Superior Avenue Room",
        "price": 920,
        "size": "40 m2",
        "perks": "Avenue Montaigne designer views"
      },
      {
        "type": "Eiffel View Suite",
        "price": 1850,
        "size": "80 m2",
        "perks": "Direct iconic Eiffel Tower panorama"
      },
      {
        "type": "Royal Suite Haute Couture",
        "price": 3800,
        "size": "140 m2",
        "perks": "Private terrace, bespoke dressing salon"
      }
    ]
  },
  {
    "id": "ht-paris-3",
    "name": "Le Meurice, Dorchester Collection",
    "city": "Paris",
    "country": "France",
    "stars": 5,
    "rating": 9.6,
    "reviewCount": 940,
    "address": "228 Rue de Rivoli, 1st arr., Paris",
    "image": "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 810,
    "amenities": [
      "Tuileries Garden Facing",
      "Restaurant le Meurice Alain Ducasse",
      "Valmont Spa",
      "Dali Inspired Decor",
      "Cocktail Bar 228"
    ],
    "rooms": [
      {
        "type": "Executive Classic Room",
        "price": 810,
        "size": "42 m2",
        "perks": "Louis XVI styling, Italian marble bath"
      },
      {
        "type": "Tuileries Park Suite",
        "price": 1600,
        "size": "78 m2",
        "perks": "Overlooking Tuileries and Louvre"
      },
      {
        "type": "Belle Etoile Penthouse",
        "price": 3500,
        "size": "130 m2",
        "perks": "360-degree private rooftop terrace"
      }
    ]
  },
  {
    "id": "ht-paris-4",
    "name": "Pullman Paris Tour Eiffel",
    "city": "Paris",
    "country": "France",
    "stars": 4,
    "rating": 9.2,
    "reviewCount": 2400,
    "address": "18 Avenue de Suffren, 15th arr., Paris",
    "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 340,
    "amenities": [
      "300m from Eiffel Tower",
      "Fitness Lounge",
      "FRAME Brasserie & Bar",
      "Balconies with Monument Views",
      "Business Center"
    ],
    "rooms": [
      {
        "type": "Classic Queen Room",
        "price": 340,
        "size": "26 m2",
        "perks": "Quiet garden or street view"
      },
      {
        "type": "Deluxe Eiffel View Balcony",
        "price": 520,
        "size": "32 m2",
        "perks": "Private step-out balcony facing Eiffel Tower"
      },
      {
        "type": "Trocadero Junior Suite",
        "price": 780,
        "size": "50 m2",
        "perks": "Spacious lounge area, Nespresso machine"
      }
    ]
  },
  {
    "id": "ht-02",
    "name": "Aman Tokyo",
    "city": "Tokyo",
    "country": "Japan",
    "stars": 5,
    "rating": 9.9,
    "reviewCount": 980,
    "address": "The Otemachi Tower, 1-5-6 Otemachi, Tokyo",
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 980,
    "amenities": [
      "Panoramic Skyline Views",
      "Traditional Onsen Spa",
      "30m Black Basalt Pool",
      "Japanese Garden",
      "Omakase Counter"
    ],
    "rooms": [
      {
        "type": "Deluxe Palace Room",
        "price": 980,
        "size": "71 m2",
        "perks": "Imperial Palace view, Furo soaking tub"
      },
      {
        "type": "Premier Sky Suite",
        "price": 1750,
        "size": "121 m2",
        "perks": "Mount Fuji panorama, dining area"
      },
      {
        "type": "The Aman Suite",
        "price": 3900,
        "size": "157 m2",
        "perks": "Double master suite, private wine cellar"
      }
    ]
  },
  {
    "id": "ht-tokyo-2",
    "name": "Park Hyatt Tokyo",
    "city": "Tokyo",
    "country": "Japan",
    "stars": 5,
    "rating": 9.6,
    "reviewCount": 1650,
    "address": "3-7-1-2 Nishi-Shinjuku, Shinjuku, Tokyo",
    "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 680,
    "amenities": [
      "Club on the Park Spa",
      "Sky-High Glass Atrium Pool",
      "New York Grill & Jazz Bar",
      "Kozue Japanese Cuisine",
      "Shinjuku Skyline Views"
    ],
    "rooms": [
      {
        "type": "Park King View Room",
        "price": 680,
        "size": "55 m2",
        "perks": "Deep soaking granite tub, Shinjuku skyline"
      },
      {
        "type": "Governor Suite",
        "price": 1350,
        "size": "95 m2",
        "perks": "Corner dual-aspect views of Mount Fuji"
      },
      {
        "type": "Tokyo Diplomat Suite",
        "price": 2800,
        "size": "150 m2",
        "perks": "Grand piano, formal dining table for 8"
      }
    ]
  },
  {
    "id": "ht-tokyo-3",
    "name": "Hoshinoya Tokyo",
    "city": "Tokyo",
    "country": "Japan",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 720,
    "address": "1-9-1 Otemachi, Chiyoda-ku, Tokyo",
    "image": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 850,
    "amenities": [
      "Rooftop Natural Hot Spring Onsen",
      "Shoji Paper Screen Architecture",
      "Tatami Matted Floors",
      "Private Ochanoma Lounges",
      "Kaiseki Dining"
    ],
    "rooms": [
      {
        "type": "Kiku Luxury Corner Room",
        "price": 850,
        "size": "83 m2",
        "perks": "Three-paneled corner windows, dining table"
      },
      {
        "type": "Yuri Traditional Suite",
        "price": 1100,
        "size": "80 m2",
        "perks": "Shoji lattice screens, cypress wood bath"
      },
      {
        "type": "Hoshinoya Master Ryokan",
        "price": 2200,
        "size": "110 m2",
        "perks": "Dedicated tea master and private onsen access"
      }
    ]
  },
  {
    "id": "ht-tokyo-4",
    "name": "The Tokyo EDITION, Toranomon",
    "city": "Tokyo",
    "country": "Japan",
    "stars": 5,
    "rating": 9.5,
    "reviewCount": 890,
    "address": "4-1-1 Toranomon, Minato City, Tokyo",
    "image": "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 590,
    "amenities": [
      "500+ Plant Sky Terrace",
      "Tokyo Tower Close-Up Views",
      "The Blue Room Dining",
      "Spa by Le Labo",
      "Lobby Bar by Ian Schrager"
    ],
    "rooms": [
      {
        "type": "Deluxe Tower View Room",
        "price": 590,
        "size": "50 m2",
        "perks": "Direct illumination of Tokyo Tower"
      },
      {
        "type": "Premier Loft Suite",
        "price": 1150,
        "size": "90 m2",
        "perks": "Living area, oak wood bespoke paneling"
      },
      {
        "type": "The EDITION Penthouse",
        "price": 2900,
        "size": "144 m2",
        "perks": "Expansive wraparound panoramic terrace"
      }
    ]
  },
  {
    "id": "ht-03",
    "name": "Four Seasons Resort Bali at Sayan",
    "city": "Bali",
    "country": "Indonesia",
    "stars": 5,
    "rating": 9.7,
    "reviewCount": 1650,
    "address": "Jl. Raya Sayan, Ubud, Bali",
    "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 620,
    "amenities": [
      "Suspension Bridge Entry",
      "Ayung Riverfront",
      "Sacred River Spa",
      "Infinity Pool",
      "Yoga Pavilion"
    ],
    "rooms": [
      {
        "type": "One-Bedroom Valley Villa",
        "price": 620,
        "size": "200 m2",
        "perks": "Private plunge pool, outdoor shower"
      },
      {
        "type": "Riverfront Luxury Villa",
        "price": 920,
        "size": "295 m2",
        "perks": "Direct river views, expansive sundeck"
      },
      {
        "type": "The Royal Sayan Villa",
        "price": 2400,
        "size": "550 m2",
        "perks": "Two levels, private chef kitchen"
      }
    ]
  },
  {
    "id": "ht-bali-2",
    "name": "Bulgari Resort Bali",
    "city": "Bali",
    "country": "Indonesia",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 810,
    "address": "Jl. Goa Lempeh, Banjar Dinas Kangin, Uluwatu, Bali",
    "image": "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 950,
    "amenities": [
      "150m Clifftop Above Ocean",
      "Private Incline Funicular to Beach",
      "Il Ristorante Luca Fantin",
      "Ocean-Facing Plunge Pools",
      "Bulgari Boutique"
    ],
    "rooms": [
      {
        "type": "Ocean Cliff Villa",
        "price": 950,
        "size": "300 m2",
        "perks": "Indian Ocean cliff view, hand-cut volcanic stone plunge"
      },
      {
        "type": "Ocean Front Two-Bedroom Villa",
        "price": 1850,
        "size": "500 m2",
        "perks": "Direct cliff edge, private open-air living pavilion"
      },
      {
        "type": "The Bulgari Mansion",
        "price": 4200,
        "size": "1300 m2",
        "perks": "Five bedrooms, private cinema, 20m lap pool"
      }
    ]
  },
  {
    "id": "ht-bali-3",
    "name": "Maya Ubud Resort & Spa",
    "city": "Bali",
    "country": "Indonesia",
    "stars": 4,
    "rating": 9.4,
    "reviewCount": 1450,
    "address": "Jl. Gunung Sari Peliatan, Ubud, Bali",
    "image": "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 280,
    "amenities": [
      "Two Scenic Infinity Pools",
      "Riverside Spa Pavilions",
      "Petanu River Views",
      "Lush Jungle Trail",
      "Complimentary Yoga Classes"
    ],
    "rooms": [
      {
        "type": "Superior Garden Room",
        "price": 280,
        "size": "43 m2",
        "perks": "Private terrace overlooking tropical flower gardens"
      },
      {
        "type": "Heavenly Ocean Pool Villa",
        "price": 460,
        "size": "115 m2",
        "perks": "Private garden plunge pool, outdoor daybed"
      },
      {
        "type": "Duplex Penthouse Villa",
        "price": 750,
        "size": "190 m2",
        "perks": "Two-story luxury, deep terrazzo bathtub"
      }
    ]
  },
  {
    "id": "ht-bali-4",
    "name": "Alila Villas Uluwatu",
    "city": "Bali",
    "country": "Indonesia",
    "stars": 5,
    "rating": 9.7,
    "reviewCount": 990,
    "address": "Jl. Belimbing Sari, Tambiyak, Uluwatu, Bali",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 780,
    "amenities": [
      "Iconic Sunset Cabana Overhang",
      "50m Clifftop Lap Pool",
      "EarthCheck Certified Eco-Architecture",
      "Spa Alila",
      "Quila Fine Dining"
    ],
    "rooms": [
      {
        "type": "One-Bedroom Pool Villa",
        "price": 780,
        "size": "291 m2",
        "perks": "Private pool, oversized cabana, 24h butler"
      },
      {
        "type": "Two-Bedroom Cliff Edge Villa",
        "price": 1550,
        "size": "580 m2",
        "perks": "Panoramic Indian Ocean sunset edge"
      },
      {
        "type": "Three-Bedroom Hillside Villa",
        "price": 2900,
        "size": "2000 m2",
        "perks": "Private estate grounds, multiple pools"
      }
    ]
  },
  {
    "id": "ht-04",
    "name": "The Chedi Andermatt",
    "city": "Swiss Alps (Zermatt)",
    "country": "Switzerland",
    "stars": 5,
    "rating": 9.6,
    "reviewCount": 780,
    "address": "Gotthardstrasse 4, 6490 Andermatt, Switzerland",
    "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 740,
    "amenities": [
      "2,400m2 Alpine Spa",
      "Indoor & Outdoor Pools",
      "Ski Butler Service",
      "The Wine & Cigar Library",
      "Fireplace in every room"
    ],
    "rooms": [
      {
        "type": "Alpine Deluxe Room",
        "price": 740,
        "size": "52 m2",
        "perks": "Hastens bed, private balcony fireplace"
      },
      {
        "type": "Gemsstock Grand Suite",
        "price": 1350,
        "size": "100 m2",
        "perks": "Panoramic alpine peak view"
      },
      {
        "type": "The Furka Presidential Suite",
        "price": 2900,
        "size": "330 m2",
        "perks": "Private spa, steam bath, gym"
      }
    ]
  },
  {
    "id": "ht-swiss-2",
    "name": "The Omnia, Zermatt",
    "city": "Swiss Alps (Zermatt)",
    "country": "Switzerland",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 650,
    "address": "Auf dem Fels, 3920 Zermatt, Switzerland",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 650,
    "amenities": [
      "Perched 45m Above Zermatt on Rock",
      "Tunnel Glass Elevator Access",
      "Matterhorn View Whirlpool",
      "Finnish Sauna & Cavern Pool",
      "Library Fireplace Lounge"
    ],
    "rooms": [
      {
        "type": "Queen Matterhorn Room",
        "price": 650,
        "size": "37 m2",
        "perks": "Direct Matterhorn peak view, private balcony"
      },
      {
        "type": "Double Deluxe Omnia Suite",
        "price": 1150,
        "size": "68 m2",
        "perks": "Wood burning stove, custom oak furnishings"
      },
      {
        "type": "The Omnia Roof Suite",
        "price": 2300,
        "size": "110 m2",
        "perks": "Private sauna, rooftop telescope for stargazing"
      }
    ]
  },
  {
    "id": "ht-swiss-3",
    "name": "Badrutt's Palace Hotel",
    "city": "Swiss Alps (Zermatt)",
    "country": "Switzerland",
    "stars": 5,
    "rating": 9.7,
    "reviewCount": 890,
    "address": "Via Serlas 27, 7500 St. Moritz, Switzerland",
    "image": "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 890,
    "amenities": [
      "Historic 1896 Alpine Palace",
      "Palace Wellness Spa",
      "Lake St. Moritz Panorama",
      "Rolls-Royce Chauffeur",
      "King's Social House"
    ],
    "rooms": [
      {
        "type": "Deluxe Lake View Room",
        "price": 890,
        "size": "35 m2",
        "perks": "Unobstructed views across frozen or alpine lake"
      },
      {
        "type": "St. Moritz Palace Suite",
        "price": 1650,
        "size": "75 m2",
        "perks": "High ceilings, authentic antique furnishings"
      },
      {
        "type": "The Tower Penthouse Suite",
        "price": 3800,
        "size": "250 m2",
        "perks": "Spans 3 floors with private circular observation salon"
      }
    ]
  },
  {
    "id": "ht-swiss-4",
    "name": "Riffelalp Resort 2222m",
    "city": "Swiss Alps (Zermatt)",
    "country": "Switzerland",
    "stars": 5,
    "rating": 9.5,
    "reviewCount": 710,
    "address": "Riffelalp 2222m, 3920 Zermatt, Switzerland",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 480,
    "amenities": [
      "Europe's Highest Tramway Station",
      "Ski-In/Ski-Out Direct Access",
      "Outdoor 35C Heated Pool with Matterhorn View",
      "Pine Tree Forest Trail",
      "St. Mauritius Spa"
    ],
    "rooms": [
      {
        "type": "Pine Double Matterhorn",
        "price": 480,
        "size": "38 m2",
        "perks": "Hand-carved pine aroma, direct mountain sunrise"
      },
      {
        "type": "Chalet Junior Suite",
        "price": 820,
        "size": "65 m2",
        "perks": "Separate living zone, fireplace, private sundeck"
      },
      {
        "type": "Matterhorn Royal Suite",
        "price": 1600,
        "size": "105 m2",
        "perks": "Direct front-facing balcony to the peak"
      }
    ]
  },
  {
    "id": "ht-05",
    "name": "Grace Hotel, Auberge Resorts",
    "city": "Santorini",
    "country": "Greece",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 890,
    "address": "Imerovigli, Santorini, 84700 Greece",
    "image": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 790,
    "amenities": [
      "Iconic Cliffside Infinity Pool",
      "Santoro Mediterranean Dining",
      "Caldera Sunset Views",
      "Private Jacuzzis",
      "Champagne Lounge"
    ],
    "rooms": [
      {
        "type": "Deluxe Caldera Room",
        "price": 790,
        "size": "32 m2",
        "perks": "Private terrace with outdoor heated plunge"
      },
      {
        "type": "Superior Caldera Suite",
        "price": 1250,
        "size": "50 m2",
        "perks": "Unobstructed Aegean sunset panorama"
      },
      {
        "type": "The Grace Villa",
        "price": 2700,
        "size": "150 m2",
        "perks": "Private swimming pool, dedicated concierge"
      }
    ]
  },
  {
    "id": "ht-santorini-2",
    "name": "Canaves Oia Suites",
    "city": "Santorini",
    "country": "Greece",
    "stars": 5,
    "rating": 9.9,
    "reviewCount": 1100,
    "address": "Main Street, Oia, Santorini, 84702 Greece",
    "image": "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 840,
    "amenities": [
      "Whitewashed 17th-Century Caves",
      "Infinity Pool Over Cliff",
      "Private Motor Yacht Charter",
      "Petra Gourmet Restaurant",
      "Wine Tasting Cellar"
    ],
    "rooms": [
      {
        "type": "Classic Cave Suite",
        "price": 840,
        "size": "45 m2",
        "perks": "Original curved volcanic stone ceiling, private veranda"
      },
      {
        "type": "Infinity Pool Suite",
        "price": 1450,
        "size": "65 m2",
        "perks": "Heated edge pool extending over the caldera"
      },
      {
        "type": "The Presidential Villa",
        "price": 3100,
        "size": "120 m2",
        "perks": "Two master bedrooms, outdoor jacuzzi, butler service"
      }
    ]
  },
  {
    "id": "ht-santorini-3",
    "name": "Mystique, a Luxury Collection Hotel",
    "city": "Santorini",
    "country": "Greece",
    "stars": 5,
    "rating": 9.7,
    "reviewCount": 780,
    "address": "Oia, Santorini, 84702 Greece",
    "image": "https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 720,
    "amenities": [
      "Sculpted into Caldera Rocks",
      "Aura Bar with Sunset Cocktails",
      "Secret 150-Year-Old Wine Cave",
      "Elios Spa",
      "Two Infinity Pools"
    ],
    "rooms": [
      {
        "type": "Vibrant Suite",
        "price": 720,
        "size": "40 m2",
        "perks": "Private terrace with sea view, airy cycladic curves"
      },
      {
        "type": "Allure Suite with Plunge Pool",
        "price": 1100,
        "size": "55 m2",
        "perks": "Outdoor heated whirlpool facing Aegean volcano"
      },
      {
        "type": "Secrecy Villa",
        "price": 2400,
        "size": "100 m2",
        "perks": "Private swimming pool, fitness room, expansive deck"
      }
    ]
  },
  {
    "id": "ht-santorini-4",
    "name": "Katikies Santorini",
    "city": "Santorini",
    "country": "Greece",
    "stars": 5,
    "rating": 9.6,
    "reviewCount": 920,
    "address": "Oia Caldera, Santorini, 84702 Greece",
    "image": "https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 680,
    "amenities": [
      "Three Multi-Level Infinity Pools",
      "Botrini's Michelin-Starred Dining",
      "A.SPA Holistic Treatments",
      "Bespoke Sailing Concierge",
      "Sunbed Lounges"
    ],
    "rooms": [
      {
        "type": "Superior Double Caldera",
        "price": 680,
        "size": "30 m2",
        "perks": "Caldera sea view, hydro-massage tub"
      },
      {
        "type": "Junior Suite with Open Air Jacuzzi",
        "price": 980,
        "size": "45 m2",
        "perks": "Private jetted tub overlooking the sea"
      },
      {
        "type": "The Katikies Suite",
        "price": 1950,
        "size": "75 m2",
        "perks": "Private plunge pool, loft bedroom, champagne service"
      }
    ]
  },
  {
    "id": "ht-06",
    "name": "Burj Al Arab Jumeirah",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "stars": 5,
    "rating": 9.9,
    "reviewCount": 2100,
    "address": "Jumeirah St, Umm Suqeim 3, Dubai",
    "image": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 1400,
    "amenities": [
      "Iconic Sail Island Landmark",
      "24-Karat Gold leaf Interiors",
      "Private Butler per Suite",
      "Sal Beach Club & Infinity Pool",
      "Talise Spa"
    ],
    "rooms": [
      {
        "type": "One-Bedroom Deluxe Suite",
        "price": 1400,
        "size": "170 m2",
        "perks": "Two floors, Hermes amenities, Arabian Gulf view"
      },
      {
        "type": "Panoramic Suite",
        "price": 2200,
        "size": "225 m2",
        "perks": "Wraparound floor-to-ceiling glass over Dubai"
      },
      {
        "type": "Royal Two-Bedroom Suite",
        "price": 5500,
        "size": "780 m2",
        "perks": "Private cinema, rotating canopy bed, gold staircase"
      }
    ]
  },
  {
    "id": "ht-dubai-2",
    "name": "Atlantis The Royal",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 1850,
    "address": "Palm Jumeirah, Crescent Rd, Dubai",
    "image": "https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 880,
    "amenities": [
      "Cloud 22 Rooftop Sky Pool",
      "Nobu by the Beach",
      "Fire & Water Fountain Shows",
      "17 Celebrity Restaurants",
      "Awaken Wellness Spa"
    ],
    "rooms": [
      {
        "type": "Seascape King Room",
        "price": 880,
        "size": "55 m2",
        "perks": "Private terrace facing the Arabian Sea"
      },
      {
        "type": "Sky Terrace Suite",
        "price": 1700,
        "size": "117 m2",
        "perks": "Expansive outdoor deck, sunset lounge"
      },
      {
        "type": "The Royal Mansion",
        "price": 6000,
        "size": "1128 m2",
        "perks": "Spans four floors, private 100-year-old olive trees"
      }
    ]
  },
  {
    "id": "ht-dubai-3",
    "name": "Armani Hotel Dubai",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "stars": 5,
    "rating": 9.6,
    "reviewCount": 1320,
    "address": "Burj Khalifa, Downtown Dubai, Dubai",
    "image": "https://images.unsplash.com/photo-1546412414-e1885259563a?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 620,
    "amenities": [
      "Inside Burj Khalifa Tower",
      "Designed by Giorgio Armani",
      "Direct Dubai Mall Access",
      "Armani/Ristorante",
      "Dubai Fountain Views"
    ],
    "rooms": [
      {
        "type": "Armani Classic Room",
        "price": 620,
        "size": "70 m2",
        "perks": "Custom Armani/Casa furnishings, iPad automation"
      },
      {
        "type": "Armani Fountain Suite",
        "price": 1150,
        "size": "85 m2",
        "perks": "Unobstructed view of choreographed fountain shows"
      },
      {
        "type": "Armani Dubai Suite",
        "price": 2800,
        "size": "390 m2",
        "perks": "Circular entrance vestibule, personal lifestyle manager"
      }
    ]
  },
  {
    "id": "ht-dubai-4",
    "name": "One&Only The Palm",
    "city": "Dubai",
    "country": "United Arab Emirates",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 940,
    "address": "West Crescent, Palm Jumeirah, Dubai",
    "image": "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 760,
    "amenities": [
      "Secluded Island Beachfront",
      "STAY by Yannick Alleno (3 Stars)",
      "Private Marina & Water Taxi",
      "Guerlain Spa",
      "Moorish-Andalusian Architecture"
    ],
    "rooms": [
      {
        "type": "Palm Manor Premier Room",
        "price": 760,
        "size": "65 m2",
        "perks": "Private balcony or garden patio"
      },
      {
        "type": "Beachfront Junior Suite",
        "price": 1400,
        "size": "100 m2",
        "perks": "Direct access onto pristine private white sand"
      },
      {
        "type": "Beachfront Two-Bedroom Villa",
        "price": 3600,
        "size": "325 m2",
        "perks": "Private swimming pool, dedicated majordome"
      }
    ]
  },
  {
    "id": "ht-07",
    "name": "Hotel de la Ville, Rocco Forte",
    "city": "Rome",
    "country": "Italy",
    "stars": 5,
    "rating": 9.7,
    "reviewCount": 850,
    "address": "Via Sistina 69, 00187 Rome, Italy",
    "image": "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 710,
    "amenities": [
      "Top of Spanish Steps",
      "Cielo Rooftop Bar",
      "De La Ville Spa by Irene Forte",
      "Grand Tour Courtyard",
      "Da Sistina Trattoria"
    ],
    "rooms": [
      {
        "type": "Classic Heritage Room",
        "price": 710,
        "size": "35 m2",
        "perks": "Italian marble bathroom, botanical courtyard view"
      },
      {
        "type": "Panoramic Terrace Suite",
        "price": 1450,
        "size": "65 m2",
        "perks": "Private rooftop terrace over the Roman cupolas"
      },
      {
        "type": "Suite de la Ville",
        "price": 2900,
        "size": "125 m2",
        "perks": "Direct elevator access, grand private dining salon"
      }
    ]
  },
  {
    "id": "ht-rome-2",
    "name": "Hassler Roma",
    "city": "Rome",
    "country": "Italy",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 1120,
    "address": "Piazza Trinit\u00e0 dei Monti 6, 00187 Rome, Italy",
    "image": "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 690,
    "amenities": [
      "Legendary Pinnacle of Spanish Steps",
      "Imago Michelin-Starred Restaurant",
      "Salone Eva Cocktails",
      "Panoramic Rooftop Deck",
      "Family Owned Since 1890s"
    ],
    "rooms": [
      {
        "type": "Grand Deluxe Room",
        "price": 690,
        "size": "35 m2",
        "perks": "Classic French antique decor, marble bath"
      },
      {
        "type": "Spanish Steps View Suite",
        "price": 1350,
        "size": "60 m2",
        "perks": "Direct gaze down the monumental staircase"
      },
      {
        "type": "Villa Medici Penthouse Suite",
        "price": 3400,
        "size": "160 m2",
        "perks": "Wraparound terrace viewing St. Peter's Basilica"
      }
    ]
  },
  {
    "id": "ht-rome-3",
    "name": "The St. Regis Rome",
    "city": "Rome",
    "country": "Italy",
    "stars": 5,
    "rating": 9.6,
    "reviewCount": 980,
    "address": "Via Vittorio Emanuele Orlando 3, 00185 Rome, Italy",
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 750,
    "amenities": [
      "Historic 1894 Belle Epoque Grandeur",
      "Evening Champagne Sabering Ceremony",
      "St. Regis Butler Service",
      "Lumen Cocktail Lounge",
      "Galleria Continua Contemporary Art"
    ],
    "rooms": [
      {
        "type": "Deluxe Imperial Room",
        "price": 750,
        "size": "40 m2",
        "perks": "Murano glass chandeliers, curated artwork"
      },
      {
        "type": "St. Regis Suite",
        "price": 1400,
        "size": "70 m2",
        "perks": "Separate living salon with fireplace, butler service"
      },
      {
        "type": "Royal Suite",
        "price": 3200,
        "size": "150 m2",
        "perks": "Historic salon, private dining table, grand piano"
      }
    ]
  },
  {
    "id": "ht-rome-4",
    "name": "Rome Cavalieri, A Waldorf Astoria Hotel",
    "city": "Rome",
    "country": "Italy",
    "stars": 5,
    "rating": 9.5,
    "reviewCount": 1450,
    "address": "Via Alberto Cadlolo 101, 00136 Rome, Italy",
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 420,
    "amenities": [
      "15 Acres of Private Mediterranean Park",
      "La Pergola (Only 3-Star Michelin in Rome)",
      "Grand Spa with Roman Baths",
      "Three Outdoor Swimming Pools",
      "Private Art Collection"
    ],
    "rooms": [
      {
        "type": "Deluxe Park View Room",
        "price": 420,
        "size": "50 m2",
        "perks": "Balcony viewing lush Mediterranean pine park"
      },
      {
        "type": "Imperial Rome View Room",
        "price": 680,
        "size": "50 m2",
        "perks": "Private terrace looking over St. Peter's Dome"
      },
      {
        "type": "Penthouse Suite with Private Jacuzzi",
        "price": 2100,
        "size": "150 m2",
        "perks": "Rooftop terrace with jacuzzi, Karl Lagerfeld art"
      }
    ]
  },
  {
    "id": "ht-08",
    "name": "The Plaza Hotel",
    "city": "New York City",
    "country": "United States",
    "stars": 5,
    "rating": 9.7,
    "reviewCount": 2400,
    "address": "768 5th Ave, New York, NY 10019",
    "image": "https://images.unsplash.com/photo-1541971875076-8f970d573be6?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 890,
    "amenities": [
      "Fifth Avenue & Central Park South",
      "The Palm Court Afternoon Tea",
      "Guerlain Spa",
      "The Champagne Bar",
      "White Glove Butler Service"
    ],
    "rooms": [
      {
        "type": "Plaza King Room",
        "price": 890,
        "size": "45 m2",
        "perks": "24-karat gold-plated fixtures, classic Beaux-Arts decor"
      },
      {
        "type": "Central Park View Suite",
        "price": 1750,
        "size": "85 m2",
        "perks": "Panoramic view across Central Park foliage"
      },
      {
        "type": "The Royal Three-Bedroom Suite",
        "price": 4500,
        "size": "400 m2",
        "perks": "Private elevator, formal dining room, chef kitchen"
      }
    ]
  },
  {
    "id": "ht-nyc-2",
    "name": "The Carlyle, A Rosewood Hotel",
    "city": "New York City",
    "country": "United States",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 1350,
    "address": "35 E 76th St, New York, NY 10021",
    "image": "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 780,
    "amenities": [
      "Bemelmans Bar with Live Piano",
      "Upper East Side Historic Landmark",
      "Yves Durif Salon",
      "Dowling's at The Carlyle",
      "Art Deco Elevators"
    ],
    "rooms": [
      {
        "type": "Superior King Room",
        "price": 780,
        "size": "37 m2",
        "perks": "Original architectural moldings, marble bath"
      },
      {
        "type": "Madison Avenue Suite",
        "price": 1450,
        "size": "70 m2",
        "perks": "Spacious living parlor, walk-in closets"
      },
      {
        "type": "Central Park Tower Suite",
        "price": 3200,
        "size": "135 m2",
        "perks": "Floor-to-ceiling windows with direct park views"
      }
    ]
  },
  {
    "id": "ht-nyc-3",
    "name": "1 Hotel Brooklyn Bridge",
    "city": "New York City",
    "country": "United States",
    "stars": 5,
    "rating": 9.5,
    "reviewCount": 1680,
    "address": "60 Furman St, Brooklyn, NY 11201",
    "image": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 520,
    "amenities": [
      "Rooftop Plunge Pool & Bar",
      "Direct View of Lower Manhattan Skyline",
      "Eco-Luxury Reclaimed Wood Design",
      "Bamford Wellness Spa",
      "The Osprey Dining"
    ],
    "rooms": [
      {
        "type": "Bridge King Room",
        "price": 520,
        "size": "32 m2",
        "perks": "Floor-to-ceiling window overlooking East River"
      },
      {
        "type": "Skyline Studio Suite",
        "price": 890,
        "size": "58 m2",
        "perks": "Hammock, daybed, views of Manhattan skyline"
      },
      {
        "type": "Riverhouse Presidential Suite",
        "price": 2200,
        "size": "185 m2",
        "perks": "Private terrace, deep stone soaking tub, fireplace"
      }
    ]
  },
  {
    "id": "ht-nyc-4",
    "name": "The Standard, High Line",
    "city": "New York City",
    "country": "United States",
    "stars": 4,
    "rating": 9.3,
    "reviewCount": 2800,
    "address": "848 Washington St, New York, NY 10014",
    "image": "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 360,
    "amenities": [
      "Straddles the High Line Park",
      "Le Bain Rooftop Nightclub",
      "The Standard Grill",
      "Biergarten Outdoor Plaza",
      "Hudson River Sunset Views"
    ],
    "rooms": [
      {
        "type": "Standard King Room",
        "price": 360,
        "size": "26 m2",
        "perks": "Floor-to-ceiling glass wall, Hudson River view"
      },
      {
        "type": "Corner King High Floor",
        "price": 490,
        "size": "35 m2",
        "perks": "Dual-aspect views of Manhattan and river"
      },
      {
        "type": "Liberty Suite",
        "price": 950,
        "size": "65 m2",
        "perks": "Deep freestanding soak tub in glass corner"
      }
    ]
  },
  {
    "id": "ht-09",
    "name": "The Savoy, London",
    "city": "London",
    "country": "United Kingdom",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 1950,
    "address": "Strand, London WC2R 0EZ, UK",
    "image": "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 780,
    "amenities": [
      "American Bar (Worlds Best)",
      "Thames Riverfront Panoramas",
      "Savoy Grill by Gordon Ramsay",
      "Private Butler Service",
      "Indoor Swimming Pool"
    ],
    "rooms": [
      {
        "type": "Deluxe King Room",
        "price": 780,
        "size": "40 m2",
        "perks": "Edwardian or Art Deco design, marble bath"
      },
      {
        "type": "River View Deluxe Suite",
        "price": 1550,
        "size": "80 m2",
        "perks": "Direct panoramas of the River Thames and South Bank"
      },
      {
        "type": "The Royal Suite by Gucci",
        "price": 3900,
        "size": "265 m2",
        "perks": "Furnished entirely with Gucci Decor collection"
      }
    ]
  },
  {
    "id": "ht-london-2",
    "name": "Claridge's, Mayfair",
    "city": "London",
    "country": "United Kingdom",
    "stars": 5,
    "rating": 9.9,
    "reviewCount": 1250,
    "address": "Brook St, Mayfair, London W1K 4HR, UK",
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 890,
    "amenities": [
      "Mayfair Luxury Epicenter",
      "Legendary Afternoon Tea",
      "Claridge's Restaurant",
      "The Fumoir Cocktail Bar",
      "Historic Art Deco Ballroom"
    ],
    "rooms": [
      {
        "type": "Superior Mayfair King",
        "price": 890,
        "size": "42 m2",
        "perks": "Bespoke Art Deco furniture, marble rain shower"
      },
      {
        "type": "Mayfair Balcony Suite",
        "price": 1750,
        "size": "85 m2",
        "perks": "Step-out wrought iron balcony over Brook Street"
      },
      {
        "type": "The Grand Piano Suite by Diane von Furstenberg",
        "price": 4200,
        "size": "180 m2",
        "perks": "Private grand piano, bold designer styling"
      }
    ]
  },
  {
    "id": "ht-london-3",
    "name": "Shangri-La The Shard, London",
    "city": "London",
    "country": "United Kingdom",
    "stars": 5,
    "rating": 9.7,
    "reviewCount": 1800,
    "address": "31 St Thomas St, London SE1 9QU, UK",
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 720,
    "amenities": [
      "Level 52 Sky Pool (Highest in W. Europe)",
      "Floor-to-Ceiling Skyline Views",
      "T\u012aNG Restaurant & Lounge",
      "G\u014eNG Cocktail Bar",
      "Binoculars in every room"
    ],
    "rooms": [
      {
        "type": "Superior Shard City View",
        "price": 720,
        "size": "45 m2",
        "perks": "Gaze over St. Paul's Cathedral and City skyscrapers"
      },
      {
        "type": "Iconic Premier Skyline Suite",
        "price": 1400,
        "size": "75 m2",
        "perks": "Freestanding marble tub directly against glass facade"
      },
      {
        "type": "The Shangri-La Suite",
        "price": 3200,
        "size": "188 m2",
        "perks": "180-degree river-to-sky panoramic vistas"
      }
    ]
  },
  {
    "id": "ht-london-4",
    "name": "The Dorchester",
    "city": "London",
    "country": "United Kingdom",
    "stars": 5,
    "rating": 9.6,
    "reviewCount": 1100,
    "address": "53 Park Ln, Mayfair, London W1K 1QA, UK",
    "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 840,
    "amenities": [
      "Directly Facing Hyde Park",
      "Alain Ducasse at The Dorchester (3 Stars)",
      "The Promenade Lounge",
      "Dorchester Spa",
      "Classic English Luxury"
    ],
    "rooms": [
      {
        "type": "Executive Park View Room",
        "price": 840,
        "size": "40 m2",
        "perks": "Unobstructed views over Hyde Park greenery"
      },
      {
        "type": "Hyde Park Suite",
        "price": 1600,
        "size": "82 m2",
        "perks": "Generous salon with open fireplace, butler service"
      },
      {
        "type": "The Penthouse & Pavilion",
        "price": 3600,
        "size": "190 m2",
        "perks": "Designed by Oliver Messel, private terrace"
      }
    ]
  },
  {
    "id": "ht-10",
    "name": "Hotel Arts Barcelona",
    "city": "Barcelona",
    "country": "Spain",
    "stars": 5,
    "rating": 9.6,
    "reviewCount": 1420,
    "address": "Carrer de Marina 19-21, 08005 Barcelona, Spain",
    "image": "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 540,
    "amenities": [
      "Beachfront Marina Location",
      "43 The Spa Panoramic Penthouse",
      "Two Outdoor Pools & Infinity Lounges",
      "Frank Gehry Golden Fish Sculpture",
      "Enoteca 2-Star Dining"
    ],
    "rooms": [
      {
        "type": "Deluxe Sea View Room",
        "price": 540,
        "size": "45 m2",
        "perks": "Gaze over Mediterranean Sea from floor-to-ceiling glass"
      },
      {
        "type": "Executive Mediterranean Suite",
        "price": 980,
        "size": "85 m2",
        "perks": "Spacious lounge with panoramic coast view"
      },
      {
        "type": "Arts Penthouse Suite",
        "price": 2400,
        "size": "150 m2",
        "perks": "Duplex apartment on top floors with private butler"
      }
    ]
  },
  {
    "id": "ht-barcelona-2",
    "name": "W Barcelona",
    "city": "Barcelona",
    "country": "Spain",
    "stars": 5,
    "rating": 9.5,
    "reviewCount": 2100,
    "address": "Pla\u00e7a de la Rosa dels Vents 1, 08039 Barcelona, Spain",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 480,
    "amenities": [
      "Iconic Sail Design on Barceloneta",
      "WET Deck Beachfront Infinity Pool",
      "ECLIPSE 26th Floor Rooftop Club",
      "FIRE Grill Restaurant",
      "Direct Beach Access"
    ],
    "rooms": [
      {
        "type": "Fabulous King Room",
        "price": 480,
        "size": "40 m2",
        "perks": "Panoramic ocean horizon view, chaise lounge"
      },
      {
        "type": "Cool Corner Suite",
        "price": 890,
        "size": "65 m2",
        "perks": "Dual views of the Mediterranean and Barcelona city"
      },
      {
        "type": "Extreme WOW Presidential Suite",
        "price": 2600,
        "size": "295 m2",
        "perks": "3 bedrooms, wrap-around ocean terrace with jacuzzi"
      }
    ]
  },
  {
    "id": "ht-barcelona-3",
    "name": "Mandarin Oriental, Barcelona",
    "city": "Barcelona",
    "country": "Spain",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 890,
    "address": "Passeig de Gracia 38-40, 08007 Barcelona, Spain",
    "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 720,
    "amenities": [
      "Passeig de Gracia Boulevard",
      "Terrat Rooftop Pool & Peruvian Dining",
      "Moments 2-Star Michelin Restaurant",
      "Subterranean Luxury Spa",
      "Patricia Urquiola Design"
    ],
    "rooms": [
      {
        "type": "Deluxe Boulevard Room",
        "price": 720,
        "size": "45 m2",
        "perks": "Views of Gaudi's architecture, bespoke leather finishes"
      },
      {
        "type": "Passeig de Gracia Suite",
        "price": 1350,
        "size": "75 m2",
        "perks": "Private step-out terrace overlooking fashion avenue"
      },
      {
        "type": "The Barcelona Suite",
        "price": 3100,
        "size": "150 m2",
        "perks": "Private terrace with outdoor jacuzzi and dining"
      }
    ]
  },
  {
    "id": "ht-barcelona-4",
    "name": "Cotton House Hotel, Autograph Collection",
    "city": "Barcelona",
    "country": "Spain",
    "stars": 4,
    "rating": 9.4,
    "reviewCount": 1250,
    "address": "Gran Via de les Corts Catalanes 670, 08010 Barcelona, Spain",
    "image": "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 350,
    "amenities": [
      "19th-Century Neoclassical Cotton Palace",
      "Original Suspended Spiral Staircase",
      "Rooftop Pool Over Eixample",
      "Batuar Cocktail Bar & Terrace",
      "Bespoke Tailoring Service"
    ],
    "rooms": [
      {
        "type": "Panama Superior Room",
        "price": 350,
        "size": "30 m2",
        "perks": "High ornate frescoed ceilings, luxury Egyptian cotton"
      },
      {
        "type": "Madras Balcony Room",
        "price": 490,
        "size": "38 m2",
        "perks": "Private balcony overlooking the inner courtyard"
      },
      {
        "type": "Damask Grand Suite",
        "price": 850,
        "size": "65 m2",
        "perks": "Original 1879 wood paneling and marble fireplace"
      }
    ]
  },
  {
    "id": "ht-11",
    "name": "Marina Bay Sands",
    "city": "Singapore",
    "country": "Singapore",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 4200,
    "address": "10 Bayfront Ave, Singapore 018956",
    "image": "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 650,
    "amenities": [
      "World Famous 150m Rooftop Infinity Pool",
      "SkyPark Observation Deck",
      "Over 80 Restaurants & CE LA VI",
      "Banyan Tree Spa",
      "Direct The Shoppes Mall"
    ],
    "rooms": [
      {
        "type": "Premier Sands Bay View",
        "price": 650,
        "size": "47 m2",
        "perks": "Direct panoramic view of Marina Bay skyline"
      },
      {
        "type": "Club City View Room",
        "price": 950,
        "size": "62 m2",
        "perks": "Complimentary afternoon tea and champagne access"
      },
      {
        "type": "The Marina Suite",
        "price": 2600,
        "size": "196 m2",
        "perks": "Private karaoke room, billiards, butler service"
      }
    ]
  },
  {
    "id": "ht-singapore-2",
    "name": "Raffles Hotel Singapore",
    "city": "Singapore",
    "country": "Singapore",
    "stars": 5,
    "rating": 9.9,
    "reviewCount": 1600,
    "address": "1 Beach Rd, Singapore 189673",
    "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 920,
    "amenities": [
      "Birthplace of the Singapore Sling",
      "Colonial Heritage Grandeur (1887)",
      "Long Bar Peanut Tradition",
      "Raffles Spa",
      "24-Hour Legendary Butlers"
    ],
    "rooms": [
      {
        "type": "Courtyard Suite",
        "price": 920,
        "size": "58 m2",
        "perks": "Veranda opening to lush botanical courtyard"
      },
      {
        "type": "Palm Court Suite",
        "price": 1450,
        "size": "70 m2",
        "perks": "Overlooking the historical palm lawn sanctuary"
      },
      {
        "type": "Presidential Sarkies Suite",
        "price": 4500,
        "size": "260 m2",
        "perks": "Private veranda, dining salon for 10 guests"
      }
    ]
  },
  {
    "id": "ht-singapore-3",
    "name": "Capella Singapore",
    "city": "Singapore",
    "country": "Singapore",
    "stars": 5,
    "rating": 9.7,
    "reviewCount": 940,
    "address": "1 The Knolls, Sentosa Island, Singapore 098297",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 780,
    "amenities": [
      "30 Acres of Lush Sentosa Rainforest",
      "Three Cascading Tiered Pools",
      "Auriga Award-Winning Spa",
      "Peacocks Roaming Grounds",
      "South China Sea Views"
    ],
    "rooms": [
      {
        "type": "Premier Sea Facing Room",
        "price": 780,
        "size": "77 m2",
        "perks": "Balcony daybed looking onto the South China Sea"
      },
      {
        "type": "One-Bedroom Garden Villa",
        "price": 1350,
        "size": "133 m2",
        "perks": "Private outdoor plunge pool, rain shower patio"
      },
      {
        "type": "The Colonial Manor",
        "price": 3800,
        "size": "436 m2",
        "perks": "Two-century heritage bungalow, private lap pool"
      }
    ]
  },
  {
    "id": "ht-singapore-4",
    "name": "The Fullerton Hotel Singapore",
    "city": "Singapore",
    "country": "Singapore",
    "stars": 5,
    "rating": 9.5,
    "reviewCount": 2100,
    "address": "1 Fullerton Square, Singapore 049178",
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 380,
    "amenities": [
      "National Monument Heritage Building",
      "25m Outdoor Infinity Pool on River",
      "Town Restaurant by Waterfront",
      "The Fullerton Spa",
      "Historical Heritage Tours"
    ],
    "rooms": [
      {
        "type": "Heritage Room",
        "price": 380,
        "size": "40 m2",
        "perks": "Original neoclassical architectural features"
      },
      {
        "type": "Marina Bay View Room",
        "price": 560,
        "size": "45 m2",
        "perks": "Step-out terrace over the river and bay"
      },
      {
        "type": "The Fullerton Loft Suite",
        "price": 1200,
        "size": "109 m2",
        "perks": "Two-story loft, spiral staircase, panoramic glass"
      }
    ]
  },
  {
    "id": "ht-13",
    "name": "The Gritti Palace, Luxury Collection",
    "city": "Venice",
    "country": "Italy",
    "stars": 5,
    "rating": 9.9,
    "reviewCount": 780,
    "address": "Campo Santa Maria Del Giglio 2467, 30124 Venice, Italy",
    "image": "https://images.unsplash.com/photo-1514890547357-a9ee288728e0?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 920,
    "amenities": [
      "Direct Grand Canal Water Terrace",
      "15th-Century Doge Andrea Gritti Palazzo",
      "Bar Longhi Murano Glassware",
      "The Gritti Epicurean School",
      "Acqua di Parma Spa"
    ],
    "rooms": [
      {
        "type": "Deluxe Venetian King",
        "price": 920,
        "size": "38 m2",
        "perks": "Rubelli silk damasks, antique Murano chandeliers"
      },
      {
        "type": "Sestiere Grand Canal Suite",
        "price": 1850,
        "size": "70 m2",
        "perks": "Unobstructed water vistas of Santa Maria della Salute"
      },
      {
        "type": "Hemingway Presidential Suite",
        "price": 3900,
        "size": "115 m2",
        "perks": "Private terrace where Ernest Hemingway wrote"
      }
    ]
  },
  {
    "id": "ht-venice-2",
    "name": "Belmond Hotel Cipriani",
    "city": "Venice",
    "country": "Italy",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 890,
    "address": "Giudecca 10, 30133 Venice, Italy",
    "image": "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 1100,
    "amenities": [
      "Private Giudecca Island Sanctuary",
      "Olympic-Sized Heated Saltwater Pool",
      "Oro Michelin-Starred Restaurant",
      "Casanova Gardens",
      "Private Wooden Launch to St. Marks"
    ],
    "rooms": [
      {
        "type": "Deluxe Lagoon View Room",
        "price": 1100,
        "size": "45 m2",
        "perks": "Balcony looking across the open Venetian lagoon"
      },
      {
        "type": "Junior Suite with Private Garden",
        "price": 1750,
        "size": "65 m2",
        "perks": "Private shaded garden terrace with sunbeds"
      },
      {
        "type": "The Palladio Suite",
        "price": 4200,
        "size": "150 m2",
        "perks": "180-degree glass walls, jacuzzi, private dock"
      }
    ]
  },
  {
    "id": "ht-venice-3",
    "name": "Aman Venice",
    "city": "Venice",
    "country": "Italy",
    "stars": 5,
    "rating": 9.9,
    "reviewCount": 620,
    "address": "Palazzo Papadopoli, Calle Tiepolo 1364, 30125 Venice, Italy",
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 1350,
    "amenities": [
      "16th-Century Palazzo Papadopoli",
      "Tiepolo Ceiling Frescoes",
      "Two Rare Private Canal Gardens",
      "The Red Dining Room",
      "Private Boat Transfer"
    ],
    "rooms": [
      {
        "type": "Palazzo Bedroom",
        "price": 1350,
        "size": "50 m2",
        "perks": "Gilded rococo mirrors, high original wood ceilings"
      },
      {
        "type": "Grand Canal Chamber",
        "price": 2200,
        "size": "85 m2",
        "perks": "Direct window view of gondolas gliding past"
      },
      {
        "type": "The Alcova Tiepolo Suite",
        "price": 4800,
        "size": "103 m2",
        "perks": "18th-century painted frescoes, private salon"
      }
    ]
  },
  {
    "id": "ht-venice-4",
    "name": "Hotel Danieli, Venice",
    "city": "Venice",
    "country": "Italy",
    "stars": 5,
    "rating": 9.5,
    "reviewCount": 1600,
    "address": "Riva degli Schiavoni 4196, 30122 Venice, Italy",
    "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 680,
    "amenities": [
      "Steps from St. Mark's Square",
      "14th-Century Gothic Palazzo Dandolo",
      "Terrazza Danieli Rooftop Dining",
      "Monumental Marble Staircase",
      "Waterfront Gondola Pier"
    ],
    "rooms": [
      {
        "type": "Premium Deluxe Room",
        "price": 680,
        "size": "34 m2",
        "perks": "Murano glass lights, rich damask wall tapestries"
      },
      {
        "type": "Lagoon View Junior Suite",
        "price": 1250,
        "size": "55 m2",
        "perks": "Unobstructed panorama across San Giorgio Maggiore"
      },
      {
        "type": "Dandolo Royal Suite",
        "price": 2900,
        "size": "120 m2",
        "perks": "Historic quarters of Doge Enrico Dandolo"
      }
    ]
  },
  {
    "id": "ht-18",
    "name": "Soneva Jani",
    "city": "Maldives",
    "country": "Maldives",
    "stars": 5,
    "rating": 9.9,
    "reviewCount": 780,
    "address": "Medhufaru Island, Noonu Atoll, Maldives",
    "image": "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 1850,
    "amenities": [
      "Retractable Roof for Stargazing in Bed",
      "Private Curved Water Slide into Lagoon",
      "Overwater Silent Cinema",
      "The Gathering Dining Hub",
      "Dedicated Barefoot Butler"
    ],
    "rooms": [
      {
        "type": "1-Bedroom Water Retreat with Slide",
        "price": 1850,
        "size": "411 m2",
        "perks": "Private pool, slide into ocean, rooftop sundeck"
      },
      {
        "type": "2-Bedroom Water Reserve with Slide",
        "price": 3100,
        "size": "772 m2",
        "perks": "Two levels, expansive catamaran nets, wine vault"
      },
      {
        "type": "4-Bedroom Island Sanctuary",
        "price": 6500,
        "size": "1226 m2",
        "perks": "Private beach, steam room, sauna, multiple pools"
      }
    ]
  },
  {
    "id": "ht-maldives-2",
    "name": "Cheval Blanc Randheli",
    "city": "Maldives",
    "country": "Maldives",
    "stars": 5,
    "rating": 9.9,
    "reviewCount": 540,
    "address": "Noonu Atoll, Maldives",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 1950,
    "amenities": [
      "LVMH Maison Luxury Sanctuary",
      "Private Island Spa by Guerlain",
      "Le 1947 Fine French Dining",
      "Private Customized De Havilland Seaplane",
      "Art Curated by Vincent Beaurin"
    ],
    "rooms": [
      {
        "type": "Water Villa with 12.5m Pool",
        "price": 1950,
        "size": "240 m2",
        "perks": "Private infinity pool, overwater pergola deck"
      },
      {
        "type": "Lagoon Garden Villa",
        "price": 2400,
        "size": "295 m2",
        "perks": "One foot in jungle garden, one foot over water"
      },
      {
        "type": "The Cheval Blanc Private Island",
        "price": 9500,
        "size": "2200 m2",
        "perks": "Dedicated private 1-hectare island, 4-bedroom villa"
      }
    ]
  },
  {
    "id": "ht-maldives-3",
    "name": "Waldorf Astoria Maldives Ithaafushi",
    "city": "Maldives",
    "country": "Maldives",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 820,
    "address": "Ithaafushi Island, South Male Atoll, Maldives",
    "image": "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 1450,
    "amenities": [
      "11 Celebrated Dining Venues",
      "Terra Treehouse Dining",
      "Aqua Wellness Centre & Hydrotherapy",
      "Stella Maris Ocean Villas",
      "Private Yacht Airport Transfer"
    ],
    "rooms": [
      {
        "type": "Overwater Pool Villa King",
        "price": 1450,
        "size": "283 m2",
        "perks": "Private infinity pool, overwater hammock, ocean steps"
      },
      {
        "type": "Reef Villa with Pool",
        "price": 1650,
        "size": "286 m2",
        "perks": "Suspended over living coral reef, glass floor view"
      },
      {
        "type": "Stella Maris Ocean Villa",
        "price": 4200,
        "size": "536 m2",
        "perks": "Standalone duplex villa in ocean accessible only by boat"
      }
    ]
  },
  {
    "id": "ht-maldives-4",
    "name": "Gili Lankanfushi Maldives",
    "city": "Maldives",
    "country": "Maldives",
    "stars": 5,
    "rating": 9.7,
    "reviewCount": 910,
    "address": "Lankanfushi Island, North Male Atoll, Maldives",
    "image": "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 1100,
    "amenities": [
      "Eco-Luxury Pioneer",
      "Mr./Ms. Friday Personal Butler",
      "Meera Overwater Spa with Glass Floor",
      "Underground Wine Cellar",
      "No News, No Shoes Philosophy"
    ],
    "rooms": [
      {
        "type": "Villa Suite Overwater",
        "price": 1100,
        "size": "210 m2",
        "perks": "Open-air living room, rooftop terrace, ocean sunbed"
      },
      {
        "type": "Gili Lagoon Villa with Pool",
        "price": 1600,
        "size": "280 m2",
        "perks": "Private freshwater plunge pool overlooking lagoon"
      },
      {
        "type": "The Private Reserve",
        "price": 7500,
        "size": "1700 m2",
        "perks": "Worlds largest standalone overwater villa, private slide"
      }
    ]
  },
  {
    "id": "ht-12",
    "name": "Park Hyatt Sydney",
    "city": "Sydney",
    "country": "Australia",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 1350,
    "address": "7 Hickson Rd, The Rocks NSW 2000, Australia",
    "image": "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 790,
    "amenities": [
      "Direct Waterfront Views of Sydney Opera House",
      "Rooftop Heated Pool & Cabanas",
      "The Dining Room Modern Australian",
      "The Spa at Park Hyatt",
      "24-Hour Dedicated Butlers"
    ],
    "rooms": [
      {
        "type": "Harbour View King Room",
        "price": 790,
        "size": "45 m2",
        "perks": "Private balcony directly facing the Sydney Opera House"
      },
      {
        "type": "Opera View Deluxe Suite",
        "price": 1650,
        "size": "75 m2",
        "perks": "Wraparound balcony, custom Australian art collection"
      },
      {
        "type": "The Sydney Suite",
        "price": 3800,
        "size": "350 m2",
        "perks": "Two bedrooms, outdoor barbecue terrace, sauna"
      }
    ]
  },
  {
    "id": "ht-sydney-2",
    "name": "The Langham, Sydney",
    "city": "Sydney",
    "country": "Australia",
    "stars": 5,
    "rating": 9.6,
    "reviewCount": 980,
    "address": "89-113 Kent St, Millers Point NSW 2000, Australia",
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 480,
    "amenities": [
      "Subterranean Star-Lit Pool",
      "Chuan Spa Holistic Therapies",
      "Kitchens on Kent Luxury Buffet",
      "Observatory Hill Historic Rocks",
      "Afternoon Tea with Wedgwood"
    ],
    "rooms": [
      {
        "type": "Deluxe City Room",
        "price": 480,
        "size": "49 m2",
        "perks": "Marble fireplace, mahogany desk, deep soaking tub"
      },
      {
        "type": "Terrace Harbour Suite",
        "price": 950,
        "size": "78 m2",
        "perks": "Private terrace looking toward Western Harbour"
      },
      {
        "type": "The Observatory Suite",
        "price": 2200,
        "size": "120 m2",
        "perks": "Double-sided fireplace, butler pantry, dining for 8"
      }
    ]
  },
  {
    "id": "ht-sydney-3",
    "name": "Crown Towers Sydney",
    "city": "Sydney",
    "country": "Australia",
    "stars": 5,
    "rating": 9.7,
    "reviewCount": 1400,
    "address": "1 Barangaroo Ave, Barangaroo NSW 2000, Australia",
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 620,
    "amenities": [
      "Tallest Skyscraper in Sydney (75 Floors)",
      "Infinity Pool Deck with Private Cabanas",
      "Nobu Sydney & Oncore by Clare Smyth",
      "Crown Spa by Subtle Energies",
      "Panoramic Harbour Views"
    ],
    "rooms": [
      {
        "type": "Deluxe Harbour King Room",
        "price": 620,
        "size": "52 m2",
        "perks": "Floor-to-ceiling glass over Darling Harbour"
      },
      {
        "type": "Executive Harbour Bridge Suite",
        "price": 1250,
        "size": "95 m2",
        "perks": "High-floor panorama of Sydney Harbour Bridge"
      },
      {
        "type": "Crown Presidential Villa",
        "price": 4500,
        "size": "800 m2",
        "perks": "Spans two floors, private infinity pool, gym"
      }
    ]
  },
  {
    "id": "ht-14",
    "name": "The Retreat at Blue Lagoon",
    "city": "Reykjavik",
    "country": "Iceland",
    "stars": 5,
    "rating": 9.9,
    "reviewCount": 850,
    "address": "Nordurljosavegur 11, 240 Grindav\u00edk, Iceland",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 1100,
    "amenities": [
      "Private Silica Geothermal Lagoon",
      "Subterranean Volcanic Rock Spa",
      "Michelin-Recommended Moss Restaurant",
      "Fireplace in every suite",
      "Northern Lights Wake-Up Calls"
    ],
    "rooms": [
      {
        "type": "Lava View Suite",
        "price": 1100,
        "size": "40 m2",
        "perks": "Private terrace facing 800-year-old mossy lava fields"
      },
      {
        "type": "Lagoon View Suite",
        "price": 1500,
        "size": "60 m2",
        "perks": "Step directly from terrace into private mineral waters"
      },
      {
        "type": "The Blue Lagoon Suite",
        "price": 2800,
        "size": "210 m2",
        "perks": "Private lagoon cove, private sauna, butler service"
      }
    ]
  },
  {
    "id": "ht-reykjavik-2",
    "name": "The Reykjavik EDITION",
    "city": "Reykjavik",
    "country": "Iceland",
    "stars": 5,
    "rating": 9.6,
    "reviewCount": 920,
    "address": "Austurbakki 2, 101 Reykjavik, Iceland",
    "image": "https://images.unsplash.com/photo-1517840901100-8179e982acb7?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 520,
    "amenities": [
      "Next to Harpa Concert Hall",
      "The Roof Cocktail Bar (Aurora Borealis Views)",
      "TIDES Restaurant by Gunnar Karl Gislason",
      "Geothermal Spa with Hydrotherapy",
      "Ian Schrager Aesthetic"
    ],
    "rooms": [
      {
        "type": "Deluxe King Harbor View",
        "price": 520,
        "size": "34 m2",
        "perks": "Harbor and Mount Esja mountain views"
      },
      {
        "type": "Harpa Suite",
        "price": 980,
        "size": "65 m2",
        "perks": "Wraparound corner windows, volcanic rock fireplace"
      },
      {
        "type": "The EDITION Penthouse",
        "price": 2100,
        "size": "130 m2",
        "perks": "Private outdoor terrace overlooking Faxafloi Bay"
      }
    ]
  },
  {
    "id": "ht-reykjavik-3",
    "name": "Ion Adventure Hotel",
    "city": "Reykjavik",
    "country": "Iceland",
    "stars": 4,
    "rating": 9.4,
    "reviewCount": 1150,
    "address": "Nesjavellir, 801 Selfoss, Iceland",
    "image": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 380,
    "amenities": [
      "Cantilevered over Mount Hengill Lava",
      "10m Outdoor Hot Spring Pool",
      "Northern Lights Bar with Glass Walls",
      "Silfra Bar & Restaurant",
      "Lava Spa Treatments"
    ],
    "rooms": [
      {
        "type": "Standard Lava Room",
        "price": 380,
        "size": "20 m2",
        "perks": "Fairtrade organic linens, views of Thingvellir valley"
      },
      {
        "type": "Deluxe Panoramic Suite",
        "price": 560,
        "size": "35 m2",
        "perks": "Floor-to-ceiling glass wall for aurora viewing"
      },
      {
        "type": "Junior Expedition Suite",
        "price": 750,
        "size": "50 m2",
        "perks": "Living zone, telescope, Icelandic sheepskin rugs"
      }
    ]
  },
  {
    "id": "ht-15",
    "name": "Ciragan Palace Kempinski Istanbul",
    "city": "Istanbul",
    "country": "Turkey",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 1780,
    "address": "Ciragan Cd. No:32, 34349 Besiktas, Istanbul, Turkey",
    "image": "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 750,
    "amenities": [
      "Only Ottoman Imperial Palace on Bosphorus",
      "Heated Waterfront Infinity Pool",
      "Tugra Ottoman Fine Dining",
      "Private Helicopter Pad",
      "Authentic Turkish Hamam"
    ],
    "rooms": [
      {
        "type": "Grand Deluxe Bosphorus View",
        "price": 750,
        "size": "45 m2",
        "perks": "Private balcony right over Bosphorus strait waters"
      },
      {
        "type": "Palace Suite with Butler",
        "price": 1450,
        "size": "85 m2",
        "perks": "Located in the historic 19th-century original palace"
      },
      {
        "type": "The Sultan Suite",
        "price": 4200,
        "size": "458 m2",
        "perks": "One of the largest suites in Europe, private hamam"
      }
    ]
  },
  {
    "id": "ht-istanbul-2",
    "name": "Four Seasons Hotel Istanbul at the Bosphorus",
    "city": "Istanbul",
    "country": "Turkey",
    "stars": 5,
    "rating": 9.7,
    "reviewCount": 1200,
    "address": "Ciragan Cd. No:28, 34349 Besiktas, Istanbul, Turkey",
    "image": "https://images.unsplash.com/photo-1549294413-26f195200c16?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 720,
    "amenities": [
      "19th-Century Restored Waterfront Palace",
      "Outdoor Pool on Bosphorus Quay",
      "AQUA Seafood Mediterranean",
      "Marble Turkish Bath Spa",
      "Yacht Docking"
    ],
    "rooms": [
      {
        "type": "Courtyard Room",
        "price": 720,
        "size": "42 m2",
        "perks": "Traditional Ottoman motifs, high vaulted ceiling"
      },
      {
        "type": "Bosphorus Palace Suite",
        "price": 1350,
        "size": "80 m2",
        "perks": "Dual balconies overlooking Asia across the water"
      },
      {
        "type": "Atik Pasha Suite",
        "price": 3100,
        "size": "150 m2",
        "perks": "Historical grand salon, bulletproof windows, butler"
      }
    ]
  },
  {
    "id": "ht-istanbul-3",
    "name": "Soho House Istanbul",
    "city": "Istanbul",
    "country": "Turkey",
    "stars": 4,
    "rating": 9.4,
    "reviewCount": 850,
    "address": "Mesrutiyet Cd. No:56, 34430 Beyoglu, Istanbul, Turkey",
    "image": "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 390,
    "amenities": [
      "Historic Palazzo Corpi in Beyoglu",
      "Rooftop Pool with Golden Horn Views",
      "Cecconi's Italian Courtyard",
      "Cowshed Spa",
      "Members Club Ambiance"
    ],
    "rooms": [
      {
        "type": "Tiny Room",
        "price": 390,
        "size": "28 m2",
        "perks": "Anatolian kilim rugs, rainforest shower"
      },
      {
        "type": "Palazzo Bedroom",
        "price": 620,
        "size": "50 m2",
        "perks": "Original 1873 Carrara marble fireplace, frescoed walls"
      },
      {
        "type": "The Mezzanine Apartment",
        "price": 1100,
        "size": "95 m2",
        "perks": "Two levels, freestanding copper bath, kitchen"
      }
    ]
  },
  {
    "id": "ht-16",
    "name": "Mandarin Oriental, Bangkok",
    "city": "Bangkok",
    "country": "Thailand",
    "stars": 5,
    "rating": 9.9,
    "reviewCount": 2100,
    "address": "48 Oriental Ave, Khwaeng Bang Rak, Bangkok 10500",
    "image": "https://images.unsplash.com/photo-1508009603885-50cf7c579365?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 620,
    "amenities": [
      "Chao Phraya Riverfront Legend (1876)",
      "The Authors' Lounge Afternoon Tea",
      "Le Normandie by Alain Roux (2 Stars)",
      "The Oriental Spa",
      "Teak Shuttle Boats"
    ],
    "rooms": [
      {
        "type": "Deluxe Premier River View",
        "price": 620,
        "size": "43 m2",
        "perks": "Floor-to-ceiling river view, teakwood accents"
      },
      {
        "type": "Authors' Heritage Suite",
        "price": 1350,
        "size": "95 m2",
        "perks": "Dedicated to Joseph Conrad and Somerset Maugham"
      },
      {
        "type": "The Grand Royal Suite",
        "price": 3800,
        "size": "600 m2",
        "perks": "Private terrace, 6 bedrooms, private lift"
      }
    ]
  },
  {
    "id": "ht-bangkok-2",
    "name": "The Siam Hotel, Bangkok",
    "city": "Bangkok",
    "country": "Thailand",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 780,
    "address": "3/2 Thanon Khao, Vachirapayabal, Dusit, Bangkok 10300",
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 580,
    "amenities": [
      "Designed by Bill Bensley",
      "Private Luxury Boat Shuttle",
      "Muay Thai Boxing Ring",
      "Opium Spa by Sodashi",
      "Riverside Infinity Pool"
    ],
    "rooms": [
      {
        "type": "Siam Suite",
        "price": 580,
        "size": "80 m2",
        "perks": "Art Deco antiques, oversized deep terrazzo bath"
      },
      {
        "type": "Courtyard Pool Villa",
        "price": 950,
        "size": "130 m2",
        "perks": "Private internal plunge pool and rooftop daybed"
      },
      {
        "type": "Riverfront Pool Villa",
        "price": 1650,
        "size": "160 m2",
        "perks": "Direct river views, private garden, personal butler"
      }
    ]
  },
  {
    "id": "ht-bangkok-3",
    "name": "Capella Bangkok",
    "city": "Bangkok",
    "country": "Thailand",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 940,
    "address": "300/2 Charoen Krung Rd, Yan Nawa, Sathon, Bangkok 10120",
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 680,
    "amenities": [
      "All Rooms Face River of Kings",
      "Cote by Mauro Colagreco (1 Star)",
      "Auriga Wellness Sanctuary",
      "Living Room Capella Culturist",
      "Private Veranda Jacuzzis"
    ],
    "rooms": [
      {
        "type": "Riverfront Premier Room",
        "price": 680,
        "size": "61 m2",
        "perks": "Balcony with daybed directly over the river"
      },
      {
        "type": "Verandah Suite with Jacuzzi",
        "price": 1150,
        "size": "137 m2",
        "perks": "Outdoor whirlpool jacuzzi on private deck"
      },
      {
        "type": "Presidential Riverside Villa",
        "price": 2800,
        "size": "259 m2",
        "perks": "Private tropical courtyard pool, dedicated chef"
      }
    ]
  },
  {
    "id": "ht-17",
    "name": "Waldorf Astoria Amsterdam",
    "city": "Amsterdam",
    "country": "Netherlands",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 1120,
    "address": "Herengracht 542-556, 1017 CG Amsterdam, Netherlands",
    "image": "https://images.unsplash.com/photo-1534351590666-13e3e96b5017?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 780,
    "amenities": [
      "Six 17th-Century Canal Palaces",
      "Spectrum 2-Star Michelin Dining",
      "Private Historic Courtyard Garden",
      "Guerlain Spa & Indoor Pool",
      "Personal Concierge"
    ],
    "rooms": [
      {
        "type": "Deluxe Herengracht Canal View",
        "price": 780,
        "size": "42 m2",
        "perks": "Unobstructed view of the Gentlemen's Canal"
      },
      {
        "type": "Premier Canal Suite",
        "price": 1450,
        "size": "72 m2",
        "perks": "Decorative fireplace, beamed monumental ceiling"
      },
      {
        "type": "Brentano Presidential Suite",
        "price": 3200,
        "size": "123 m2",
        "perks": "Original 18th-century ceiling paintings, salon"
      }
    ]
  },
  {
    "id": "ht-amsterdam-2",
    "name": "Conservatorium Hotel",
    "city": "Amsterdam",
    "country": "Netherlands",
    "stars": 5,
    "rating": 9.7,
    "reviewCount": 1350,
    "address": "Paulus Potterstraat 50, 1071 DB Amsterdam, Netherlands",
    "image": "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 640,
    "amenities": [
      "Museum Square Heart (Rijksmuseum & Van Gogh)",
      "Glass-Covered Courtyard Atrium",
      "Akasha Holistic Wellbeing Centre",
      "Taiko Asian Cuisine",
      "Piero Lissoni Design"
    ],
    "rooms": [
      {
        "type": "Superior King Room",
        "price": 640,
        "size": "35 m2",
        "perks": "Duplex configuration, solid oak floors"
      },
      {
        "type": "Van Baerle Corner Suite",
        "price": 1100,
        "size": "65 m2",
        "perks": "Dual-aspect views of Museumplein, deep stone bath"
      },
      {
        "type": "Penthouse Suite with Terrace",
        "price": 2600,
        "size": "130 m2",
        "perks": "360-degree glass walls over Amsterdam rooftops"
      }
    ]
  },
  {
    "id": "ht-amsterdam-3",
    "name": "Pulitzer Amsterdam",
    "city": "Amsterdam",
    "country": "Netherlands",
    "stars": 5,
    "rating": 9.5,
    "reviewCount": 1850,
    "address": "Prinsengracht 323, 1016 GZ Amsterdam, Netherlands",
    "image": "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 420,
    "amenities": [
      "25 Interconnected Golden Age Canal Houses",
      "Private 1909 Teak Salon Boat",
      "Pulitzer's Bar (Classic Cocktails)",
      "Inner Garden Courtyard",
      "Jansz Restaurant"
    ],
    "rooms": [
      {
        "type": "Classic Prinsengracht Room",
        "price": 420,
        "size": "26 m2",
        "perks": "Direct view of houseboats on the canal"
      },
      {
        "type": "Generous Family Canal Suite",
        "price": 750,
        "size": "55 m2",
        "perks": "Original exposed wood beams, quirky layout"
      },
      {
        "type": "The Music Collector's Suite",
        "price": 1400,
        "size": "70 m2",
        "perks": "Vintage vinyl record player, private canal door"
      }
    ]
  },
  {
    "id": "ht-cairo-1",
    "name": "Marriott Mena House, Cairo",
    "city": "Cairo",
    "country": "Egypt",
    "stars": 5,
    "rating": 9.6,
    "reviewCount": 1950,
    "address": "6 Pyramids Road, Giza, Cairo, Egypt",
    "image": "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 380,
    "amenities": [
      "Views of the Great Pyramids from Garden",
      "Historic 1869 Hunting Lodge",
      "Outdoor Heated Pool",
      "139 Pavilion Dining",
      "40 Acres of Greenery"
    ],
    "rooms": [
      {
        "type": "Deluxe Pyramids View Room",
        "price": 380,
        "size": "42 m2",
        "perks": "Private balcony facing the Pyramids of Giza"
      },
      {
        "type": "Executive Suite Giza",
        "price": 680,
        "size": "75 m2",
        "perks": "Separate parlor, marble bath, pyramid sunset"
      },
      {
        "type": "Churchill Presidential Suite",
        "price": 1600,
        "size": "150 m2",
        "perks": "Where Winston Churchill stayed in 1943"
      }
    ]
  },
  {
    "id": "ht-cairo-2",
    "name": "Four Seasons Hotel Cairo at Nile Plaza",
    "city": "Cairo",
    "country": "Egypt",
    "stars": 5,
    "rating": 9.7,
    "reviewCount": 1600,
    "address": "1089 Corniche El Nil, Garden City, Cairo, Egypt",
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 420,
    "amenities": [
      "Nile River Waterfront in Garden City",
      "Three Swimming Pools",
      "Extensive Egyptian Art Collection",
      "Zitouni Traditional Egyptian Buffet",
      "Luxury Spa"
    ],
    "rooms": [
      {
        "type": "Nile-View Superior Room",
        "price": 420,
        "size": "46 m2",
        "perks": "Private balcony directly overlooking River Nile"
      },
      {
        "type": "Diplomatic Suite",
        "price": 850,
        "size": "95 m2",
        "perks": "Living and dining areas with panoramic river views"
      },
      {
        "type": "Royal Nile Suite",
        "price": 2400,
        "size": "260 m2",
        "perks": "Two bedrooms, private terrace, grand piano"
      }
    ]
  },
  {
    "id": "ht-kyoto-1",
    "name": "Suiran, Luxury Collection Hotel",
    "city": "Kyoto",
    "country": "Japan",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 750,
    "address": "12 Susukinobaba-cho, Saga-Tenryuji, Ukyo-ku, Kyoto",
    "image": "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 820,
    "amenities": [
      "Katsura Riverfront in Arashiyama",
      "Private Open-Air Onsen in Rooms",
      "Cafe Hassui Afternoon Tea",
      "Kyo-Suiran French-Japanese Dining",
      "Rickshaw Arrival Service"
    ],
    "rooms": [
      {
        "type": "Yuzunoha Deluxe Room",
        "price": 820,
        "size": "48 m2",
        "perks": "Arashiyama bamboo garden view, natural onsen tub"
      },
      {
        "type": "Akane Premier Suite",
        "price": 1400,
        "size": "70 m2",
        "perks": "Open-air mineral hot spring on private deck"
      },
      {
        "type": "Suiran Presidential Suite",
        "price": 2800,
        "size": "105 m2",
        "perks": "Overlooks the historic Arashiyama mountain ridge"
      }
    ]
  },
  {
    "id": "ht-kyoto-2",
    "name": "The Ritz-Carlton, Kyoto",
    "city": "Kyoto",
    "country": "Japan",
    "stars": 5,
    "rating": 9.9,
    "reviewCount": 1100,
    "address": "Kamogawa Nijo-Ohashi Hotori, Nakagyo Ward, Kyoto",
    "image": "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 890,
    "amenities": [
      "Kamogawa Riverfront",
      "Pierre Herme Paris Patisserie",
      "Traditional Bonsai in Courtyard",
      "Subterranean 20m Lap Pool",
      "Zen Garden Water Features"
    ],
    "rooms": [
      {
        "type": "Deluxe Kamogawa River View",
        "price": 890,
        "size": "52 m2",
        "perks": "Floor-to-ceiling river view, Higashiyama mountains"
      },
      {
        "type": "Corner Suite Minami",
        "price": 1650,
        "size": "115 m2",
        "perks": "Dual aspect views, Japanese soaking cedar tub"
      },
      {
        "type": "The Tsukimi Suite",
        "price": 3400,
        "size": "140 m2",
        "perks": "Private zen rock garden, moon viewing deck"
      }
    ]
  },
  {
    "id": "ht-kyoto-3",
    "name": "Hoshinoya Kyoto",
    "city": "Kyoto",
    "country": "Japan",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 680,
    "address": "112 Arashiyama Genrokuzan-cho, Nishikyo-ku, Kyoto",
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 960,
    "amenities": [
      "Accessible Only by Traditional Riverboat",
      "Former 17th-Century Riverside Retreat",
      "Library Lounge on Oi River",
      "Seasonal Kaiseki Dining",
      "Water Garden"
    ],
    "rooms": [
      {
        "type": "Yamanoha River Room",
        "price": 960,
        "size": "50 m2",
        "perks": "Low tatami seating right next to open river windows"
      },
      {
        "type": "Tanigasumi Maple Suite",
        "price": 1450,
        "size": "75 m2",
        "perks": "Surrounded by Japanese maples and moss garden"
      },
      {
        "type": "Mizunone Grand Pavilion",
        "price": 2600,
        "size": "95 m2",
        "perks": "Private terrace overlooking the emerald river bend"
      }
    ]
  },
  {
    "id": "ht-19",
    "name": "Belmond Copacabana Palace",
    "city": "Rio de Janeiro",
    "country": "Brazil",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 1650,
    "address": "Av. Atlantica 1702, Copacabana, Rio de Janeiro",
    "image": "https://images.unsplash.com/photo-1516306580123-e6e52b1b7b5f?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 560,
    "amenities": [
      "1923 Art Deco Landmark",
      "Semi-Olympic Swimming Pool",
      "MEE Asian Restaurant (1 Star)",
      "Copacabana Beach Club Service",
      "Cipriani Italian Dining"
    ],
    "rooms": [
      {
        "type": "Superior City View Room",
        "price": 560,
        "size": "35 m2",
        "perks": "High ceilings, original antique furniture"
      },
      {
        "type": "Deluxe Ocean View Room",
        "price": 820,
        "size": "45 m2",
        "perks": "Direct private balcony looking onto Copacabana"
      },
      {
        "type": "Penthouse Suite with Pool Access",
        "price": 2200,
        "size": "100 m2",
        "perks": "Private 6th floor pool and terrace access"
      }
    ]
  },
  {
    "id": "ht-rio-2",
    "name": "Hotel Fasano Rio de Janeiro",
    "city": "Rio de Janeiro",
    "country": "Brazil",
    "stars": 5,
    "rating": 9.7,
    "reviewCount": 1250,
    "address": "Av. Vieira Souto 80, Ipanema, Rio de Janeiro",
    "image": "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 520,
    "amenities": [
      "Ipanema Beach Oceanfront",
      "Philippe Starck 1950s Bossa Nova Design",
      "Rooftop Infinity Pool Over Two Brothers",
      "Fasano al Mare Seafood",
      "Private Beach Service"
    ],
    "rooms": [
      {
        "type": "Superior Courtyard Room",
        "price": 520,
        "size": "35 m2",
        "perks": "Sergio Rodrigues chairs, Egyptian cotton linens"
      },
      {
        "type": "Deluxe Oceanfront Room",
        "price": 850,
        "size": "40 m2",
        "perks": "Private terrace looking over Ipanema waves"
      },
      {
        "type": "Fasano Ocean Suite",
        "price": 1900,
        "size": "130 m2",
        "perks": "Panoramic corner balcony, private dining salon"
      }
    ]
  },
  {
    "id": "ht-20",
    "name": "The Silo Hotel",
    "city": "Cape Town",
    "country": "South Africa",
    "stars": 5,
    "rating": 9.9,
    "reviewCount": 890,
    "address": "Silo Square, V&A Waterfront, Cape Town 8001",
    "image": "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 890,
    "amenities": [
      "Converted Historic Grain Silo Building",
      "Geometric Pillowed Convex Windows",
      "Rooftop Pool with Table Mountain View",
      "Located Above Zeitz MOCAA Museum",
      "The Granary Cafe"
    ],
    "rooms": [
      {
        "type": "Silo King Room",
        "price": 890,
        "size": "41 m2",
        "perks": "Multi-faceted bulging glass window, harbor view"
      },
      {
        "type": "Deluxe Superior Suite",
        "price": 1450,
        "size": "70 m2",
        "perks": "Double-height ceilings, direct Table Mountain vista"
      },
      {
        "type": "The Silo Penthouse",
        "price": 3200,
        "size": "211 m2",
        "perks": "Private cinema, 24m balcony overlooking Cape Town"
      }
    ]
  },
  {
    "id": "ht-capetown-2",
    "name": "Ellerman House, Bantry Bay",
    "city": "Cape Town",
    "country": "South Africa",
    "stars": 5,
    "rating": 9.8,
    "reviewCount": 650,
    "address": "180 Kloof Rd, Bantry Bay, Cape Town 8005",
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 780,
    "amenities": [
      "Edwardian Mansion on Atlantic Cliff",
      "Private Contemporary South African Art Gallery",
      "7,500 Bottle Wine Gallery",
      "Tiered Botanical Gardens",
      "Solar-Heated Pool"
    ],
    "rooms": [
      {
        "type": "Classic Ocean View Room",
        "price": 780,
        "size": "44 m2",
        "perks": "Balcony with sunset views of Atlantic breakers"
      },
      {
        "type": "Deluxe Heritage Suite",
        "price": 1250,
        "size": "72 m2",
        "perks": "Private terrace, antique African art pieces"
      },
      {
        "type": "Ellerman Villa One",
        "price": 3600,
        "size": "450 m2",
        "perks": "Private 3-story villa, private chef and rim-flow pool"
      }
    ]
  },
  {
    "id": "ht-capetown-3",
    "name": "One&Only Cape Town",
    "city": "Cape Town",
    "country": "South Africa",
    "stars": 5,
    "rating": 9.6,
    "reviewCount": 1450,
    "address": "Dock Rd, Victoria & Alfred Waterfront, Cape Town 8001",
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 640,
    "amenities": [
      "Private Island Resort at V&A Waterfront",
      "Nobu Cape Town",
      "Isara Luxury Island Spa",
      "350m2 Heated Infinity Pool",
      "Table Mountain Waterfront Marina"
    ],
    "rooms": [
      {
        "type": "Marina Harbour Room",
        "price": 640,
        "size": "63 m2",
        "perks": "Oversized terrace facing private yacht harbor"
      },
      {
        "type": "Island Superior Suite",
        "price": 1150,
        "size": "95 m2",
        "perks": "Located on exclusive private island in marina"
      },
      {
        "type": "The Lion's Head Presidential Suite",
        "price": 2800,
        "size": "383 m2",
        "perks": "Two master suites, private gym, butler kitchen"
      }
    ]
  },
  {
    "id": "ht-cairo-3",
    "name": "The St. Regis Cairo",
    "city": "Cairo",
    "country": "Egypt",
    "stars": 5,
    "rating": 9.7,
    "reviewCount": 910,
    "address": "1189 Nile Corniche, Bulaq, Cairo",
    "image": "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 420,
    "amenities": [
      "Nile River Panoramic Balconies",
      "St. Regis Butler Service",
      "Iridium Spa",
      "Water Terrace Pool",
      "La Zisa Italian Restaurant"
    ],
    "rooms": [
      {
        "type": "Superior Nile View Room",
        "price": 420,
        "size": "48 m2",
        "perks": "Private terrace facing the Nile River, marble bath"
      },
      {
        "type": "Grand Deluxe Nile Suite",
        "price": 750,
        "size": "85 m2",
        "perks": "Separate living salon, bespoke Egyptian linen"
      },
      {
        "type": "Astor Royal Nile Penthouse",
        "price": 1800,
        "size": "150 m2",
        "perks": "Panoramic river views, private butler and dining room"
      }
    ]
  },
  {
    "id": "ht-rio-3",
    "name": "Santa Teresa Hotel RJ - MGallery",
    "city": "Rio de Janeiro",
    "country": "Brazil",
    "stars": 5,
    "rating": 9.6,
    "reviewCount": 780,
    "address": "Rua Almirante Alexandrino 660, Santa Teresa, Rio",
    "image": "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80",
    "pricePerNight": 390,
    "amenities": [
      "Historic Coffee Farm Mansion",
      "Tropical Hillside Garden Pool",
      "Le Spa by MGallery",
      "Bar dos Descasados",
      "Panoramic Guanabara Bay Views"
    ],
    "rooms": [
      {
        "type": "Superior Garden Room",
        "price": 390,
        "size": "32 m2",
        "perks": "Artisan woodwork, lush hillside garden view"
      },
      {
        "type": "Junior Hillside Suite",
        "price": 620,
        "size": "55 m2",
        "perks": "Step-out terrace, panoramic bay and city skyline"
      },
      {
        "type": "Loft Royal Suite",
        "price": 1300,
        "size": "95 m2",
        "perks": "Private veranda, designer hammock, curated Brazilian art"
      }
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
