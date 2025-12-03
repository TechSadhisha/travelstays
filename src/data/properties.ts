const placeholderImage = "https://placehold.co/600x400";

export interface Property {
  // Mandatory fields (as per user request)
  id: number;
  title: string;
  location: string;
  bedrooms: number;
  guests: number;
  description: string;
  features: string[];
  image: string;
  destination: string;

  // Optional fields (required for app functionality but may be missing in some data)
  price?: string;
  tier?: "Budget" | "Premium" | "Luxury";
  images: string[];

  // Additional optional fields
  priceMin?: number; // Minimum price for filtering
  priceMax?: number; // Maximum price for filtering
  bedroomsDetails?: {
    room: string;
    beds: string;
    description?: string;
  }[];
  staffServices?: string[];
  termsConditions?: string[];

  // New fields for hotel booking
  rating?: number; // 1-5 rating
  reviewCount?: number;
  amenities?: string[]; // Additional amenities for filtering
  checkIn?: string; // Check-in time (e.g., "14:00")
  checkOut?: string; // Check-out time (e.g., "11:00")
  cancellationPolicy?: string; // e.g., "Free cancellation up to 7 days"
  propertyType?: "hotel" | "villa" | "resort" | "boutique";
  wifi?: boolean;
  parking?: boolean;
  pool?: boolean;
  restaurant?: boolean;
  spa?: boolean;
  beachAccess?: boolean;
}

const propertiesData: Property[] = [
  {
    id: 1,
    title: "Coral Crest Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "Modern luxury hotel with spacious rooms and excellent business facilities.",
    features: [
      "Swimming Pool",
      "Fitness Center",
      "Spa",
      "Multiple Restaurants",
      "Bar",
      "Banquet Facilities",
    ],
    price: "₹6,000 - ₹10,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747130/travel_stays_assets/Puducherry/Luxury/Accord%20Puducherry/Pool_Sunbed.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747130/travel_stays_assets/Puducherry/Luxury/Accord%20Puducherry/Pool_Sunbed.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747129/travel_stays_assets/Puducherry/Luxury/Accord%20Puducherry/2022-01-26.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747132/travel_stays_assets/Puducherry/Luxury/Accord%20Puducherry/Season.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747133/travel_stays_assets/Puducherry/Luxury/Accord%20Puducherry/Superior_Twin.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747134/travel_stays_assets/Puducherry/Luxury/Accord%20Puducherry/Tanjore_Bed_Room.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.8,
    reviewCount: 152,
  },
  {
    id: 2,
    title: "Silver Summit Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "Luxury hotel offering premium services and city views.",
    features: [
      "Rooftop Pool",
      "Spa",
      "Fitness Center",
      "Multiple Dining Options",
      "Bar",
    ],
    price: "₹7,000 - ₹12,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747234/travel_stays_assets/Puducherry/Luxury/The%20Residency%20Towers%20Puducherry/Pool_01.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747234/travel_stays_assets/Puducherry/Luxury/The%20Residency%20Towers%20Puducherry/Pool_01.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747228/travel_stays_assets/Puducherry/Luxury/The%20Residency%20Towers%20Puducherry/2023-08-09.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747229/travel_stays_assets/Puducherry/Luxury/The%20Residency%20Towers%20Puducherry/252647752.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747230/travel_stays_assets/Puducherry/Luxury/The%20Residency%20Towers%20Puducherry/252820831.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747231/travel_stays_assets/Puducherry/Luxury/The%20Residency%20Towers%20Puducherry/254707135.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747233/travel_stays_assets/Puducherry/Luxury/The%20Residency%20Towers%20Puducherry/Pavilion_Twilight.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747232/travel_stays_assets/Puducherry/Luxury/The%20Residency%20Towers%20Puducherry/King_Bedroom.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.8,
    reviewCount: 214,
  },
  {
    id: 3,
    title: "Azure Haven Travels Stays",
    location: "Pondicherry",
    bedrooms: 2,
    guests: 4,
    description:
      "Chic heritage stay in the French Quarter with serene courtyards and refined suites.",
    features: [
      "Swimming Pool",
      "Restaurant",
      "Library",
      "Garden",
      "Massage Services",
    ],
    price: "₹9,000 - ₹14,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747170/travel_stays_assets/Puducherry/Luxury/La%20Villa/29249677.jpg",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747170/travel_stays_assets/Puducherry/Luxury/La%20Villa/29249677.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747171/travel_stays_assets/Puducherry/Luxury/La%20Villa/3ab711ef79cef158748544f190647a739a7d971a-3ab711-800-600-crop.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747173/travel_stays_assets/Puducherry/Luxury/La%20Villa/53d6202b8ce707ee8c9cb59a4f2a7494e3459a81-53d620-800-600-crop.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747174/travel_stays_assets/Puducherry/Luxury/La%20Villa/7d16502078b102b3cd7d71d322e2608fa5653bff-7d1650-800-600-crop.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747175/travel_stays_assets/Puducherry/Luxury/La%20Villa/e165fa2a0f9b64c35295de5b1b051c3cce834fa1-e165fa-840-560-crop.jpg",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.7,
    reviewCount: 186,
  },
  {
    id: 4,
    title: "Seabreeze Cove Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "Resort style stay with direct access to the beach and backwaters.",
    features: [
      "Private Beach Area",
      "Large Swimming Pool",
      "Ayurvedic Spa",
      "Multiple Restaurants",
      "Activity Center",
    ],
    price: "₹8,000 - ₹15,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747188/travel_stays_assets/Puducherry/Luxury/Le%20Pondy%20Beach%20Resort/2023-08-03_1.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747188/travel_stays_assets/Puducherry/Luxury/Le%20Pondy%20Beach%20Resort/2023-08-03_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747189/travel_stays_assets/Puducherry/Luxury/Le%20Pondy%20Beach%20Resort/2023-08-03.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747190/travel_stays_assets/Puducherry/Luxury/Le%20Pondy%20Beach%20Resort/unnamed_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747191/travel_stays_assets/Puducherry/Luxury/Le%20Pondy%20Beach%20Resort/unnamed_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747192/travel_stays_assets/Puducherry/Luxury/Le%20Pondy%20Beach%20Resort/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.7,
    reviewCount: 176,
  },
  {
    id: 5,
    title: "Heritage Court Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A French colonial-style hotel with a distinct character, located in the French Quarter.",
    features: [
      "Swimming Pool",
      "Restaurant",
      "Bar",
      "Ayurvedic Spa",
      "Library",
    ],
    price: "₹12,000 - ₹18,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747204/travel_stays_assets/Puducherry/Luxury/Palais%20de%20Mahe%20%28CGH%20Earth%29/2023-08-22.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747204/travel_stays_assets/Puducherry/Luxury/Palais%20de%20Mahe%20%28CGH%20Earth%29/2023-08-22.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747205/travel_stays_assets/Puducherry/Luxury/Palais%20de%20Mahe%20%28CGH%20Earth%29/PalaisdeMahe_100.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747206/travel_stays_assets/Puducherry/Luxury/Palais%20de%20Mahe%20%28CGH%20Earth%29/PalaisdeMahe_12.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747207/travel_stays_assets/Puducherry/Luxury/Palais%20de%20Mahe%20%28CGH%20Earth%29/unnamed_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747208/travel_stays_assets/Puducherry/Luxury/Palais%20de%20Mahe%20%28CGH%20Earth%29/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.8,
    reviewCount: 248,
  },
  {
    id: 6,
    title: "Palmstone Heritage Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A heritage hotel in the Tamil Quarter, showcasing traditional architecture and culture.",
    features: ["Courtyard", "Restaurant", "Library", "Cultural Activities"],
    price: "₹8,000 - ₹12,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747193/travel_stays_assets/Puducherry/Luxury/Maison%20Perumal%20%28CGH%20Earth%29/MaisonPerumal_156.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747193/travel_stays_assets/Puducherry/Luxury/Maison%20Perumal%20%28CGH%20Earth%29/MaisonPerumal_156.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747194/travel_stays_assets/Puducherry/Luxury/Maison%20Perumal%20%28CGH%20Earth%29/MaisonPerumal_226.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747195/travel_stays_assets/Puducherry/Luxury/Maison%20Perumal%20%28CGH%20Earth%29/MaisonPerumal_5.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747197/travel_stays_assets/Puducherry/Luxury/Maison%20Perumal%20%28CGH%20Earth%29/unnamed_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747198/travel_stays_assets/Puducherry/Luxury/Maison%20Perumal%20%28CGH%20Earth%29/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.9,
    reviewCount: 117,
  },
  {
    id: 7,
    title: "Blue Lagoon Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A beachfront resort offering luxurious villas and chalets with world-class amenities.",
    features: [
      "Saltwater Pool",
      "Spa",
      "Fitness Center",
      "Restaurants",
      "Bar",
      "Kids' Play Area",
    ],
    price: "₹10,000 - ₹16,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747209/travel_stays_assets/Puducherry/Luxury/Radisson%20Resort%20Pondicherry%20Bay/2022-07-18.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747209/travel_stays_assets/Puducherry/Luxury/Radisson%20Resort%20Pondicherry%20Bay/2022-07-18.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747210/travel_stays_assets/Puducherry/Luxury/Radisson%20Resort%20Pondicherry%20Bay/2023-08-21.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747211/travel_stays_assets/Puducherry/Luxury/Radisson%20Resort%20Pondicherry%20Bay/2023-09-04.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747212/travel_stays_assets/Puducherry/Luxury/Radisson%20Resort%20Pondicherry%20Bay/2023-09-11.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747213/travel_stays_assets/Puducherry/Luxury/Radisson%20Resort%20Pondicherry%20Bay/2023-09-22.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747214/travel_stays_assets/Puducherry/Luxury/Radisson%20Resort%20Pondicherry%20Bay/2023-12-31.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747215/travel_stays_assets/Puducherry/Luxury/Radisson%20Resort%20Pondicherry%20Bay/2025-03-17.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.7,
    reviewCount: 126,
  },
  {
    id: 8,
    title: "Shoreline Edge Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A luxury boutique hotel located on the famous Promenade Beach.",
    features: ["Rooftop Restaurant", "Bar", "Swimming Pool", "Sea View Rooms"],
    price: "₹7,000 - ₹11,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747222/travel_stays_assets/Puducherry/Luxury/The%20Promenade/unnamed_1.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747222/travel_stays_assets/Puducherry/Luxury/The%20Promenade/unnamed_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747223/travel_stays_assets/Puducherry/Luxury/The%20Promenade/unnamed_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747224/travel_stays_assets/Puducherry/Luxury/The%20Promenade/unnamed_3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747225/travel_stays_assets/Puducherry/Luxury/The%20Promenade/unnamed_4.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747226/travel_stays_assets/Puducherry/Luxury/The%20Promenade/unnamed_5.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747227/travel_stays_assets/Puducherry/Luxury/The%20Promenade/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.6,
    reviewCount: 291,
  },
  {
    id: 9,
    title: "Serenity Grove Travels Stays",
    location: "Pondicherry",
    bedrooms: 3,
    guests: 6,
    description:
      "Warm boutique villa blending Tamil charm and modern comfort near Promenade Beach.",
    features: ["Restaurant", "Bar", "Courtyard", "Shop"],
    price: "₹6,500 - ₹10,500",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747240/travel_stays_assets/Puducherry/Luxury/Villa%20Shanti/2020-10-23_1.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747240/travel_stays_assets/Puducherry/Luxury/Villa%20Shanti/2020-10-23_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747241/travel_stays_assets/Puducherry/Luxury/Villa%20Shanti/2020-10-23_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747242/travel_stays_assets/Puducherry/Luxury/Villa%20Shanti/2020-10-23_3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747243/travel_stays_assets/Puducherry/Luxury/Villa%20Shanti/2020-10-23.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747244/travel_stays_assets/Puducherry/Luxury/Villa%20Shanti/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.5,
    reviewCount: 142,
  },
  {
    id: 10,
    title: "Mooncrest Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A modern hotel offering comfortable stays with contemporary amenities.",
    features: ["Restaurant", "Bar", "Banquet Hall"],
    price: "₹4,000 - ₹7,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747153/travel_stays_assets/Puducherry/Luxury/Hotel%20Aura%20By%20Woco%20Stays/2022-05-05.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747153/travel_stays_assets/Puducherry/Luxury/Hotel%20Aura%20By%20Woco%20Stays/2022-05-05.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747154/travel_stays_assets/Puducherry/Luxury/Hotel%20Aura%20By%20Woco%20Stays/2023-10-21.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747155/travel_stays_assets/Puducherry/Luxury/Hotel%20Aura%20By%20Woco%20Stays/WhatsApp_Image_2021-12-30_at_13.08.21_3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747157/travel_stays_assets/Puducherry/Luxury/Hotel%20Aura%20By%20Woco%20Stays/unnamed.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747156/travel_stays_assets/Puducherry/Luxury/Hotel%20Aura%20By%20Woco%20Stays/interior-01-600x600.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.7,
    reviewCount: 282,
  },
  {
    id: 11,
    title: "Aqua Bloom Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A sprawling resort set around a man-made lake, offering a tranquil escape.",
    features: [
      "Largest Swimming Pool",
      "Lilaea Island Dining",
      "Activity Center",
      "Spa",
    ],
    price: "₹8,000 - ₹14,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747199/travel_stays_assets/Puducherry/Luxury/Ocean%20Spray/2025-04-06.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747199/travel_stays_assets/Puducherry/Luxury/Ocean%20Spray/2025-04-06.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747200/travel_stays_assets/Puducherry/Luxury/Ocean%20Spray/unnamed_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747201/travel_stays_assets/Puducherry/Luxury/Ocean%20Spray/unnamed_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747202/travel_stays_assets/Puducherry/Luxury/Ocean%20Spray/unnamed_3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747203/travel_stays_assets/Puducherry/Luxury/Ocean%20Spray/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.7,
    reviewCount: 188,
  },
  {
    id: 12,
    title: "Vintage Manor Travels Stays",
    location: "Pondicherry",
    bedrooms: 2,
    guests: 4,
    description:
      "Elegant colonial residence with spacious rooms and understated luxury.",
    features: ["Courtyard Dining", "Bar", "Heritage Architecture"],
    price: "₹7,500 - ₹12,500",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747182/travel_stays_assets/Puducherry/Luxury/Le%20Dupleix/2022-07-12.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747182/travel_stays_assets/Puducherry/Luxury/Le%20Dupleix/2022-07-12.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747183/travel_stays_assets/Puducherry/Luxury/Le%20Dupleix/unnamed_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747185/travel_stays_assets/Puducherry/Luxury/Le%20Dupleix/unnamed_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747186/travel_stays_assets/Puducherry/Luxury/Le%20Dupleix/unnamed_3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747187/travel_stays_assets/Puducherry/Luxury/Le%20Dupleix/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.6,
    reviewCount: 128,
  },
  {
    id: 13,
    title: "Lakeside Pearl Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A resort nestled along the backwaters, offering a blend of nature and luxury.",
    features: ["Swimming Pool", "Spa", "Water Sports", "Restaurant"],
    price: "₹7,000 - ₹12,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747176/travel_stays_assets/Puducherry/Luxury/Lagoon%20Sarovar%20Premiere%20Resort/2025-05-06.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747176/travel_stays_assets/Puducherry/Luxury/Lagoon%20Sarovar%20Premiere%20Resort/2025-05-06.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747178/travel_stays_assets/Puducherry/Luxury/Lagoon%20Sarovar%20Premiere%20Resort/IMG-8239.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747179/travel_stays_assets/Puducherry/Luxury/Lagoon%20Sarovar%20Premiere%20Resort/IMG-8291.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747180/travel_stays_assets/Puducherry/Luxury/Lagoon%20Sarovar%20Premiere%20Resort/IMG_E6472.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747181/travel_stays_assets/Puducherry/Luxury/Lagoon%20Sarovar%20Premiere%20Resort/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.7,
    reviewCount: 100,
  },
  {
    id: 14,
    title: "Imperial Crown Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "Heritage hotel with colonial charm in the White Town.",
    features: ["Restaurant", "Bar", "Heritage Ambience"],
    price: "₹4,500 - ₹7,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747147/travel_stays_assets/Puducherry/Luxury/Grand%20Hotel%20D_%20Europe/005.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747147/travel_stays_assets/Puducherry/Luxury/Grand%20Hotel%20D_%20Europe/005.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747149/travel_stays_assets/Puducherry/Luxury/Grand%20Hotel%20D_%20Europe/007.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747150/travel_stays_assets/Puducherry/Luxury/Grand%20Hotel%20D_%20Europe/011.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747151/travel_stays_assets/Puducherry/Luxury/Grand%20Hotel%20D_%20Europe/Grand_D_Europe11254-Edit.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747152/travel_stays_assets/Puducherry/Luxury/Grand%20Hotel%20D_%20Europe/unnamed_1.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.7,
    reviewCount: 122,
  },
  {
    id: 15,
    title: "Cathedral Court Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A historic villa offering an intimate and luxurious stay in the French Quarter.",
    features: ["Heritage Rooms", "Personalized Service", "Quiet Location"],
    price: "₹10,000 - ₹15,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747216/travel_stays_assets/Puducherry/Luxury/R%C3%A9sidence%20De%20L_ev%C3%AAch%C3%A9%20%28CGH%20Earth%29/2024-04-19_1.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747216/travel_stays_assets/Puducherry/Luxury/R%C3%A9sidence%20De%20L_ev%C3%AAch%C3%A9%20%28CGH%20Earth%29/2024-04-19_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747217/travel_stays_assets/Puducherry/Luxury/R%C3%A9sidence%20De%20L_ev%C3%AAch%C3%A9%20%28CGH%20Earth%29/2024-04-19_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747219/travel_stays_assets/Puducherry/Luxury/R%C3%A9sidence%20De%20L_ev%C3%AAch%C3%A9%20%28CGH%20Earth%29/2024-04-19_3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747220/travel_stays_assets/Puducherry/Luxury/R%C3%A9sidence%20De%20L_ev%C3%AAch%C3%A9%20%28CGH%20Earth%29/2024-04-19_4.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747221/travel_stays_assets/Puducherry/Luxury/R%C3%A9sidence%20De%20L_ev%C3%AAch%C3%A9%20%28CGH%20Earth%29/2024-04-19.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.6,
    reviewCount: 263,
  },
  {
    id: 16,
    title: "Colonial Haven Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A restored 18th-century mansion offering a glimpse into the French colonial era.",
    features: ["Courtyard Restaurant", "Heritage Decor", "Shop"],
    price: "₹6,000 - ₹9,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747159/travel_stays_assets/Puducherry/Luxury/Hotel%20De%20L_Orient/Reception.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747159/travel_stays_assets/Puducherry/Luxury/Hotel%20De%20L_Orient/Reception.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747162/travel_stays_assets/Puducherry/Luxury/Hotel%20De%20L_Orient/hotel-de-l-orient.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747163/travel_stays_assets/Puducherry/Luxury/Hotel%20De%20L_Orient/unnamed.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747160/travel_stays_assets/Puducherry/Luxury/Hotel%20De%20L_Orient/Room-1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747161/travel_stays_assets/Puducherry/Luxury/Hotel%20De%20L_Orient/Room-2.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.9,
    reviewCount: 294,
  },
  {
    id: 17,
    title: "JoyVista Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A family-friendly resort with direct beach access and numerous activities.",
    features: [
      "Swimming Pool",
      "Activity Center",
      "Restaurant",
      "Beach Access",
    ],
    price: "₹6,000 - ₹10,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747135/travel_stays_assets/Puducherry/Luxury/Club%20Mahindra%20Resort%20Puducherry/2025-10-02.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747135/travel_stays_assets/Puducherry/Luxury/Club%20Mahindra%20Resort%20Puducherry/2025-10-02.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747136/travel_stays_assets/Puducherry/Luxury/Club%20Mahindra%20Resort%20Puducherry/unnamed_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747137/travel_stays_assets/Puducherry/Luxury/Club%20Mahindra%20Resort%20Puducherry/unnamed_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747138/travel_stays_assets/Puducherry/Luxury/Club%20Mahindra%20Resort%20Puducherry/unnamed_3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747139/travel_stays_assets/Puducherry/Luxury/Club%20Mahindra%20Resort%20Puducherry/unnamed_4.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747140/travel_stays_assets/Puducherry/Luxury/Club%20Mahindra%20Resort%20Puducherry/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.8,
    reviewCount: 134,
  },
  {
    id: 18,
    title: "Shellstone Luxe Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "Exclusive suites with private pools, offering privacy and luxury.",
    features: [
      "Private Plunge Pools",
      "Personalized Service",
      "In-room Dining",
    ],
    price: "₹15,000 - ₹25,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747141/travel_stays_assets/Puducherry/Luxury/Conch%20Luxury%20Private%20Pool%20Suites/2023-04-07.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747141/travel_stays_assets/Puducherry/Luxury/Conch%20Luxury%20Private%20Pool%20Suites/2023-04-07.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747142/travel_stays_assets/Puducherry/Luxury/Conch%20Luxury%20Private%20Pool%20Suites/2024-01-09.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747143/travel_stays_assets/Puducherry/Luxury/Conch%20Luxury%20Private%20Pool%20Suites/2025-02-19.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747144/travel_stays_assets/Puducherry/Luxury/Conch%20Luxury%20Private%20Pool%20Suites/2025-03-25_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747145/travel_stays_assets/Puducherry/Luxury/Conch%20Luxury%20Private%20Pool%20Suites/2025-03-25.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747146/travel_stays_assets/Puducherry/Luxury/Conch%20Luxury%20Private%20Pool%20Suites/2025-05-04.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.9,
    reviewCount: 145,
  },
  {
    id: 19,
    title: "Sunny Ridge Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A business-class hotel with modern amenities and excellent connectivity.",
    features: [
      "Swimming Pool",
      "Fitness Center",
      "Multiple Restaurants",
      "Bar",
    ],
    price: "₹5,000 - ₹8,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747235/travel_stays_assets/Puducherry/Luxury/The%20Sunway%20Manor/2020-10-17_1.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747235/travel_stays_assets/Puducherry/Luxury/The%20Sunway%20Manor/2020-10-17_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747236/travel_stays_assets/Puducherry/Luxury/The%20Sunway%20Manor/2020-10-17_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747237/travel_stays_assets/Puducherry/Luxury/The%20Sunway%20Manor/2020-10-17_3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747238/travel_stays_assets/Puducherry/Luxury/The%20Sunway%20Manor/2020-10-17_4.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747239/travel_stays_assets/Puducherry/Luxury/The%20Sunway%20Manor/2020-10-17.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.6,
    reviewCount: 236,
  },
  {
    id: 20,
    title: "Coralstone Villa Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A charming guesthouse offering a peaceful stay with a homely vibe.",
    features: ["Garden", "Terrace", "Yoga Space"],
    price: "₹4,000 - ₹6,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747164/travel_stays_assets/Puducherry/Luxury/La%20Maison%20Charu/2024-12-08_1.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747164/travel_stays_assets/Puducherry/Luxury/La%20Maison%20Charu/2024-12-08_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747165/travel_stays_assets/Puducherry/Luxury/La%20Maison%20Charu/2024-12-08_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747167/travel_stays_assets/Puducherry/Luxury/La%20Maison%20Charu/2024-12-08.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747168/travel_stays_assets/Puducherry/Luxury/La%20Maison%20Charu/2025-08-07.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747169/travel_stays_assets/Puducherry/Luxury/La%20Maison%20Charu/2025-08-09.webp",
    ],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.6,
    reviewCount: 118,
  },
  {
    id: 21,
    title: "Tranquil Heights Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "A resort-style hotel with lush gardens and a large pool.",
    features: ["Swimming Pool", "Spa", "Restaurant", "Banquet Hall"],
    price: "₹4,000 - ₹6,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747299/travel_stays_assets/Puducherry/Premium/Grand_Serenaa_Hotel___Resorts/1.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747299/travel_stays_assets/Puducherry/Premium/Grand_Serenaa_Hotel___Resorts/1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747300/travel_stays_assets/Puducherry/Premium/Grand_Serenaa_Hotel___Resorts/arcadia-multi-cuisine.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747304/travel_stays_assets/Puducherry/Premium/Grand_Serenaa_Hotel___Resorts/grand-serenaa-hotel-resort_1.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747305/travel_stays_assets/Puducherry/Premium/Grand_Serenaa_Hotel___Resorts/grand-serenaa-hotel-resort.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747306/travel_stays_assets/Puducherry/Premium/Grand_Serenaa_Hotel___Resorts/krishnaa-hall.jpg",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.4,
    reviewCount: 136,
  },
  {
    id: 22,
    title: "Golden Orchid Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "Contemporary hotel with modern amenities and convention facilities.",
    features: ["Rooftop Pool", "Restaurant", "Bar", "Gym"],
    price: "₹5,500 - ₹8,500",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747353/travel_stays_assets/Puducherry/Premium/Shenbaga_Hotel___Convention_Centre/2025-08-31_1.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747353/travel_stays_assets/Puducherry/Premium/Shenbaga_Hotel___Convention_Centre/2025-08-31_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747354/travel_stays_assets/Puducherry/Premium/Shenbaga_Hotel___Convention_Centre/2025-08-31_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747355/travel_stays_assets/Puducherry/Premium/Shenbaga_Hotel___Convention_Centre/2025-08-31_4.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747356/travel_stays_assets/Puducherry/Premium/Shenbaga_Hotel___Convention_Centre/2025-08-31.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747357/travel_stays_assets/Puducherry/Premium/Shenbaga_Hotel___Convention_Centre/Photo-----a.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747358/travel_stays_assets/Puducherry/Premium/Shenbaga_Hotel___Convention_Centre/_NVK7030.webp",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.4,
    reviewCount: 88,
  },
  {
    id: 23,
    title: "Urban Leaf Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A modern hotel with a rooftop pool and excellent dining options.",
    features: ["Rooftop Pool", "Restaurant", "Bar", "Gym"],
    price: "₹4,500 - ₹7,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747263/travel_stays_assets/Puducherry/Premium/Hotel%20Atithi/Executive_3.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747263/travel_stays_assets/Puducherry/Premium/Hotel%20Atithi/Executive_3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747264/travel_stays_assets/Puducherry/Premium/Hotel%20Atithi/Roof_Top_Restaurant.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747423/travel_stays_assets/Puducherry/Premium/Hotel_Atithi/f9057d314048971fb43e3ee4de4b5849d55ec100.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747266/travel_stays_assets/Puducherry/Premium/Hotel%20Atithi/unnamed_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747267/travel_stays_assets/Puducherry/Premium/Hotel%20Atithi/unnamed.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747265/travel_stays_assets/Puducherry/Premium/Hotel%20Atithi/Superior_ROom.webp",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.4,
    reviewCount: 127,
  },
  {
    id: 24,
    title: "Harmony Plaza Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "Well-known hotel with convention center and multiple dining options.",
    features: ["Swimming Pool", "Gym", "Spa", "Multiple Restaurants"],
    price: "₹4,500 - ₹7,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747246/travel_stays_assets/Puducherry/Premium/Anandha%20Inn%20Convention%20Centre%20and%20Suites/Swimming_Pool_2.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747246/travel_stays_assets/Puducherry/Premium/Anandha%20Inn%20Convention%20Centre%20and%20Suites/Swimming_Pool_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747247/travel_stays_assets/Puducherry/Premium/Anandha%20Inn%20Convention%20Centre%20and%20Suites/unnamed_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747248/travel_stays_assets/Puducherry/Premium/Anandha%20Inn%20Convention%20Centre%20and%20Suites/unnamed_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747249/travel_stays_assets/Puducherry/Premium/Anandha%20Inn%20Convention%20Centre%20and%20Suites/unnamed.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747245/travel_stays_assets/Puducherry/Premium/Anandha%20Inn%20Convention%20Centre%20and%20Suites/Standard_Room_2.webp",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.4,
    reviewCount: 74,
  },
  {
    id: 25,
    title: "Regalia Vista Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "Modern hotel with excellent facilities for business and leisure.",
    features: ["Swimming Pool", "Gym", "Restaurant", "Bar"],
    price: "₹4,000 - ₹6,500",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747422/travel_stays_assets/Puducherry/Premium/Hotel_Annamalai_International/33de5215.avif",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747422/travel_stays_assets/Puducherry/Premium/Hotel_Annamalai_International/33de5215.avif",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747259/travel_stays_assets/Puducherry/Premium/Hotel%20Annamalai%20International/mob1.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747262/travel_stays_assets/Puducherry/Premium/Hotel%20Annamalai%20International/unnamed_3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747262/travel_stays_assets/Puducherry/Premium/Hotel%20Annamalai%20International/unnamed.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747261/travel_stays_assets/Puducherry/Premium/Hotel%20Annamalai%20International/premium-room-twin-bed.jpg",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.3,
    reviewCount: 134,
  },
  {
    id: 26,
    title: "Royal Crestline Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "Elegant hotel with spacious rooms and a large swimming pool.",
    features: ["Swimming Pool", "Gym", "Restaurant", "Bar", "Spa"],
    price: "₹5,000 - ₹8,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747338/travel_stays_assets/Puducherry/Premium/Le_Royal_Park/le-royal-park-evening.jpg",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747338/travel_stays_assets/Puducherry/Premium/Le_Royal_Park/le-royal-park-evening.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747334/travel_stays_assets/Puducherry/Premium/Le_Royal_Park/005.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747335/travel_stays_assets/Puducherry/Premium/Le_Royal_Park/2023-09-22.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747336/travel_stays_assets/Puducherry/Premium/Le_Royal_Park/eb0d540a.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747337/travel_stays_assets/Puducherry/Premium/Le_Royal_Park/kids-and-adult-swimming.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747339/travel_stays_assets/Puducherry/Premium/Le_Royal_Park/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.6,
    reviewCount: 75,
  },
  {
    id: 28,
    title: "Bayfront Lotus Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "Comfortable rooms with easy access to the city center and sea views.",
    features: ["Sea View Rooms", "Restaurant", "Wi-Fi"],
    price: "₹2,800 - ₹4,500",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747340/travel_stays_assets/Puducherry/Premium/Lotus_Bay_View_Hotel/unnamed_1.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747340/travel_stays_assets/Puducherry/Premium/Lotus_Bay_View_Hotel/unnamed_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747341/travel_stays_assets/Puducherry/Premium/Lotus_Bay_View_Hotel/unnamed_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747342/travel_stays_assets/Puducherry/Premium/Lotus_Bay_View_Hotel/unnamed_3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747343/travel_stays_assets/Puducherry/Premium/Lotus_Bay_View_Hotel/unnamed_4.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747344/travel_stays_assets/Puducherry/Premium/Lotus_Bay_View_Hotel/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.4,
    reviewCount: 102,
  },
  {
    id: 29,
    title: "Butterfly Breeze Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A boutique stay with a cozy atmosphere and personalized service.",
    features: ["Garden", "Wi-Fi", "Breakfast"],
    price: "₹3,000 - ₹5,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747323/travel_stays_assets/Puducherry/Premium/La_Papillon_Maison/2024-10-03_1.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747323/travel_stays_assets/Puducherry/Premium/La_Papillon_Maison/2024-10-03_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747324/travel_stays_assets/Puducherry/Premium/La_Papillon_Maison/2024-10-03.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747325/travel_stays_assets/Puducherry/Premium/La_Papillon_Maison/2024-10-27.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747327/travel_stays_assets/Puducherry/Premium/La_Papillon_Maison/unnamed_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747329/travel_stays_assets/Puducherry/Premium/La_Papillon_Maison/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.2,
    reviewCount: 108,
  },
  {
    id: 30,
    title: "SpiceRoute Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "A smart, budget-friendly hotel with modern amenities.",
    features: ["Fitness Center", "Restaurant", "Wi-Fi"],
    price: "₹3,000 - ₹5,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747250/travel_stays_assets/Puducherry/Premium/Ginger%20Pondicherry/2023-03-10_1.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747250/travel_stays_assets/Puducherry/Premium/Ginger%20Pondicherry/2023-03-10_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747251/travel_stays_assets/Puducherry/Premium/Ginger%20Pondicherry/2023-03-10.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747252/travel_stays_assets/Puducherry/Premium/Ginger%20Pondicherry/2025-11-24.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747253/travel_stays_assets/Puducherry/Premium/Ginger%20Pondicherry/unnamed_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747254/travel_stays_assets/Puducherry/Premium/Ginger%20Pondicherry/unnamed_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747255/travel_stays_assets/Puducherry/Premium/Ginger%20Pondicherry/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.3,
    reviewCount: 95,
  },
  {
    id: 31,
    title: "Hilltop Serene Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "A serene hotel with French-style architecture and a pool.",
    features: ["Swimming Pool", "Restaurant", "Garden"],
    price: "₹4,000 - ₹6,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747347/travel_stays_assets/Puducherry/Premium/Mango_Hill_La_Serene_Puducherry/597982131.jpg",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747347/travel_stays_assets/Puducherry/Premium/Mango_Hill_La_Serene_Puducherry/597982131.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747350/travel_stays_assets/Puducherry/Premium/Mango_Hill_La_Serene_Puducherry/caption_1.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747351/travel_stays_assets/Puducherry/Premium/Mango_Hill_La_Serene_Puducherry/caption.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747351/travel_stays_assets/Puducherry/Premium/Mango_Hill_La_Serene_Puducherry/unnamed_3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747353/travel_stays_assets/Puducherry/Premium/Mango_Hill_La_Serene_Puducherry/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.6,
    reviewCount: 102,
  },
  {
    id: 32,
    title: "Ruby Lotus Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "A heritage-style hotel in the heart of the city.",
    features: ["Wi-Fi", "Breakfast", "Heritage Decor"],
    price: "₹2,500 - ₹4,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747313/travel_stays_assets/Puducherry/Premium/Itsy_Hotels_Red_Lotus_Heritage/2023-03-14.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747313/travel_stays_assets/Puducherry/Premium/Itsy_Hotels_Red_Lotus_Heritage/2023-03-14.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747316/travel_stays_assets/Puducherry/Premium/Itsy_Hotels_Red_Lotus_Heritage/unnamed_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747318/travel_stays_assets/Puducherry/Premium/Itsy_Hotels_Red_Lotus_Heritage/unnamed_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747319/travel_stays_assets/Puducherry/Premium/Itsy_Hotels_Red_Lotus_Heritage/unnamed.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747315/travel_stays_assets/Puducherry/Premium/Itsy_Hotels_Red_Lotus_Heritage/treebo_Red_Lotus_Green_Room1.webp",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.5,
    reviewCount: 78,
  },
  {
    id: 33,
    title: "Ivory Pearl Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A comfortable residency offering modern rooms and good hospitality.",
    features: ["Restaurant", "Wi-Fi", "Parking"],
    price: "₹2,500 - ₹4,500",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747381/travel_stays_assets/Puducherry/Premium/White_Pearl_Residency/2024-09-26_1.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747381/travel_stays_assets/Puducherry/Premium/White_Pearl_Residency/2024-09-26_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747382/travel_stays_assets/Puducherry/Premium/White_Pearl_Residency/2024-09-26_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747383/travel_stays_assets/Puducherry/Premium/White_Pearl_Residency/2024-09-26_3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747384/travel_stays_assets/Puducherry/Premium/White_Pearl_Residency/2024-09-26.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747385/travel_stays_assets/Puducherry/Premium/White_Pearl_Residency/unnamed_5.webp",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.6,
    reviewCount: 121,
  },
  {
    id: 34,
    title: "Villa Coraline Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "A boutique hotel in White Town with a rooftop restaurant.",
    features: ["Rooftop Restaurant", "Wi-Fi", "Bar"],
    price: "₹3,500 - ₹6,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747308/travel_stays_assets/Puducherry/Premium/Hotel_Villa_Krish/unnamed_1.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747308/travel_stays_assets/Puducherry/Premium/Hotel_Villa_Krish/unnamed_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747309/travel_stays_assets/Puducherry/Premium/Hotel_Villa_Krish/unnamed_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747310/travel_stays_assets/Puducherry/Premium/Hotel_Villa_Krish/unnamed_3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747312/travel_stays_assets/Puducherry/Premium/Hotel_Villa_Krish/unnamed_4.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747313/travel_stays_assets/Puducherry/Premium/Hotel_Villa_Krish/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.3,
    reviewCount: 117,
  },
  {
    id: 35,
    title: "Castleview Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A heritage hotel offering a blend of French and Indian culture.",
    features: ["Restaurant", "Bar", "Heritage Rooms"],
    price: "₹4,000 - ₹7,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747330/travel_stays_assets/Puducherry/Premium/Le_Ch_teau/DSC07027-Edit.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747330/travel_stays_assets/Puducherry/Premium/Le_Ch_teau/DSC07027-Edit.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747331/travel_stays_assets/Puducherry/Premium/Le_Ch_teau/DSC07177-Edit.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747332/travel_stays_assets/Puducherry/Premium/Le_Ch_teau/f2efb1b3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747424/travel_stays_assets/Puducherry/Premium/Le_Ch_teau/images.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747333/travel_stays_assets/Puducherry/Premium/Le_Ch_teau/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.3,
    reviewCount: 85,
  },
  {
    id: 36,
    title: "Oxford Boutique Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A stylish boutique hotel with vibrant decor and a lively atmosphere.",
    features: ["Restaurant", "Bar", "Wi-Fi"],
    price: "₹3,000 - ₹5,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747359/travel_stays_assets/Puducherry/Premium/The_Bull_Boutique_Hotel/unnamed_1.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747359/travel_stays_assets/Puducherry/Premium/The_Bull_Boutique_Hotel/unnamed_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747360/travel_stays_assets/Puducherry/Premium/The_Bull_Boutique_Hotel/unnamed_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747360/travel_stays_assets/Puducherry/Premium/The_Bull_Boutique_Hotel/unnamed_3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747361/travel_stays_assets/Puducherry/Premium/The_Bull_Boutique_Hotel/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.6,
    reviewCount: 77,
  },
  {
    id: 37,
    title: "Parisian Court Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "A charming villa offering a quiet and authentic stay.",
    features: ["Garden", "Wi-Fi", "Breakfast"],
    price: "₹3,500 - ₹6,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747363/travel_stays_assets/Puducherry/Premium/The_French_Villa/2024-02-19.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747363/travel_stays_assets/Puducherry/Premium/The_French_Villa/2024-02-19.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747364/travel_stays_assets/Puducherry/Premium/The_French_Villa/IMG_5912.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747365/travel_stays_assets/Puducherry/Premium/The_French_Villa/french_Villa_16.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747366/travel_stays_assets/Puducherry/Premium/The_French_Villa/french_Villa_28.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747367/travel_stays_assets/Puducherry/Premium/The_French_Villa/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.6,
    reviewCount: 51,
  },
  {
    id: 38,
    title: "MetroGreen Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A business hotel with comfortable rooms and conference facilities.",
    features: ["Restaurant", "Bar", "Banquet Hall"],
    price: "₹3,000 - ₹5,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747269/travel_stays_assets/Puducherry/Premium/Hotel%20Tamizh%20Park/hotel-tamizh-park.jpg",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747269/travel_stays_assets/Puducherry/Premium/Hotel%20Tamizh%20Park/hotel-tamizh-park.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747268/travel_stays_assets/Puducherry/Premium/Hotel%20Tamizh%20Park/04230c07c709db7d303a6010d18f99b8.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747270/travel_stays_assets/Puducherry/Premium/Hotel%20Tamizh%20Park/unnamed_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747271/travel_stays_assets/Puducherry/Premium/Hotel%20Tamizh%20Park/unnamed_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747272/travel_stays_assets/Puducherry/Premium/Hotel%20Tamizh%20Park/unnamed_3.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747307/travel_stays_assets/Puducherry/Premium/Hotel_Tamizh_Park/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.5,
    reviewCount: 50,
  },
  {
    id: 39,
    title: "Helena Springs Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A heritage guesthouse with a beautiful garden and colonial charm.",
    features: ["Garden Restaurant", "Heritage Ambience", "Wi-Fi"],
    price: "₹5,000 - ₹8,000",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747375/travel_stays_assets/Puducherry/Premium/Villa_Helena/40e2.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747375/travel_stays_assets/Puducherry/Premium/Villa_Helena/40e2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747376/travel_stays_assets/Puducherry/Premium/Villa_Helena/77790042.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747377/travel_stays_assets/Puducherry/Premium/Villa_Helena/77790491.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747378/travel_stays_assets/Puducherry/Premium/Villa_Helena/77790544.jpg",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747379/travel_stays_assets/Puducherry/Premium/Villa_Helena/unnamed_4.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747380/travel_stays_assets/Puducherry/Premium/Villa_Helena/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.4,
    reviewCount: 123,
  },
  {
    id: 44,
    title: "Comfort Crest Travels Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "A comfortable inn with clean rooms and friendly service.",
    features: ["Wi-Fi", "Parking", "Room Service"],
    price: "₹1,500 - ₹2,500",
    image:
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747110/travel_stays_assets/Puducherry/Budget/Pleasant%20Inn/2024-06-20_1.webp",
    images: [
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747110/travel_stays_assets/Puducherry/Budget/Pleasant%20Inn/2024-06-20_1.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747111/travel_stays_assets/Puducherry/Budget/Pleasant%20Inn/2024-06-20.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747112/travel_stays_assets/Puducherry/Budget/Pleasant%20Inn/unnamed_2.webp",
      "https://res.cloudinary.com/drauz5jps/image/upload/v1764747113/travel_stays_assets/Puducherry/Budget/Pleasant%20Inn/unnamed.webp",
    ],
    destination: "pondicherry",
    tier: "Budget",
    rating: 4.0,
    reviewCount: 82,
  },
];

// Helper function to enrich property data with defaults
function enrichPropertyData(property: Property): Property {
  // Parse price range if price is a string
  let priceRange: { min: number; max: number } | undefined;
  if (property.price && typeof property.price === "string") {
    const matches = property.price.match(/₹([\d,]+)\s*-\s*₹([\d,]+)/);
    if (matches) {
      priceRange = {
        min: parseInt(matches[1].replace(/,/g, "")),
        max: parseInt(matches[2].replace(/,/g, "")),
      };
    }
  }

  // Determine tier based on price if not already set
  let tier: "Budget" | "Premium" | "Luxury" | undefined = property.tier;
  if (!tier && priceRange) {
    if (priceRange.min >= 8000) {
      tier = "Luxury";
    } else if (priceRange.min >= 4000) {
      tier = "Premium";
    }
  }

  // Check features for amenities
  const hasWifi = property.features.some(
    (f) => f.toLowerCase().includes("wi-fi") || f.toLowerCase().includes("wifi")
  );
  const hasPool = property.features.some((f) =>
    f.toLowerCase().includes("pool")
  );
  const hasRestaurant = property.features.some(
    (f) =>
      f.toLowerCase().includes("restaurant") ||
      f.toLowerCase().includes("dining")
  );
  const hasSpa = property.features.some(
    (f) =>
      f.toLowerCase().includes("spa") || f.toLowerCase().includes("massage")
  );
  const hasBeachAccess = property.features.some((f) =>
    f.toLowerCase().includes("beach")
  );

  // Generate default rating and review count based on tier
  const defaultRating =
    tier === "Luxury" ? 4.7 : tier === "Premium" ? 4.5 : 4.2;
  const defaultReviewCount =
    tier === "Luxury" ? 150 : tier === "Premium" ? 100 : 50;

  return {
    ...property,
    priceMin: priceRange?.min,
    priceMax: priceRange?.max,
    rating: property.rating ?? Math.round(defaultRating * 10) / 10,
    reviewCount: property.reviewCount ?? defaultReviewCount,
    checkIn: property.checkIn ?? "14:00",
    checkOut: property.checkOut ?? "11:00",
    cancellationPolicy:
      property.cancellationPolicy ??
      "Free cancellation up to 7 days before check-in",
    propertyType: property.propertyType ?? "villa",
    wifi: property.wifi ?? hasWifi ?? true,
    parking:
      property.parking ??
      property.features.some((f) => f.toLowerCase().includes("parking")) ??
      false,
    pool: property.pool ?? hasPool ?? false,
    restaurant: property.restaurant ?? hasRestaurant ?? false,
    spa: property.spa ?? hasSpa ?? false,
    beachAccess: property.beachAccess ?? hasBeachAccess ?? false,
    amenities: property.amenities ?? [...property.features],
    tier: property.tier ?? tier,
  };
}

// Parse price string to get min and max values
export function parsePrice(
  price: string | undefined
): { min: number; max: number } | null {
  if (!price) return null;
  const matches = price.match(/₹([\d,]+)\s*-\s*₹([\d,]+)/);
  if (matches) {
    return {
      min: parseInt(matches[1].replace(/,/g, "")),
      max: parseInt(matches[2].replace(/,/g, "")),
    };
  }
  return null;
}

// Export enriched properties
export const allProperties: Property[] = propertiesData.map(enrichPropertyData);

export const getPropertyById = (id: number): Property | undefined => {
  return allProperties.find((property) => property.id === id);
};

export const getPropertyBySlug = (slug: string): Property | undefined => {
  return allProperties.find(
    (property) =>
      property.title.toLowerCase().replace(/\s+/g, "-") === slug.toLowerCase()
  );
};
