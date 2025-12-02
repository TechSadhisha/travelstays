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
  // Pondicherry
  // Luxury & Heritage (High-End)
  {
    id: 1,
    title: "Accord Puducherry",
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
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.8,
    reviewCount: 152,
  },
  {
    id: 2,
    title: "The Residency Towers",
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
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.8,
    reviewCount: 214,
  },
  {
    id: 3,
    title: "La Villa",
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
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.7,
    reviewCount: 186,
  },
  {
    id: 4,
    title: "Le Pondy Beach Resort",
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
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.7,
    reviewCount: 176,
  },
  {
    id: 5,
    title: "Palais de Mahe (CGH Earth)",
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
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.8,
    reviewCount: 248,
  },
  {
    id: 6,
    title: "Maison Perumal (CGH Earth)",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A heritage hotel in the Tamil Quarter, showcasing traditional architecture and culture.",
    features: ["Courtyard", "Restaurant", "Library", "Cultural Activities"],
    price: "₹8,000 - ₹12,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.9,
    reviewCount: 117,
  },
  {
    id: 7,
    title: "Radisson Resort Pondicherry Bay",
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
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.7,
    reviewCount: 126,
  },
  {
    id: 8,
    title: "The Promenade",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A luxury boutique hotel located on the famous Promenade Beach.",
    features: ["Rooftop Restaurant", "Bar", "Swimming Pool", "Sea View Rooms"],
    price: "₹7,000 - ₹11,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.6,
    reviewCount: 291,
  },
  {
    id: 9,
    title: "Villa Shanthi",
    location: "Pondicherry",
    bedrooms: 3,
    guests: 6,
    description:
      "Warm boutique villa blending Tamil charm and modern comfort near Promenade Beach.",
    features: ["Restaurant", "Bar", "Courtyard", "Shop"],
    price: "₹6,500 - ₹10,500",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.5,
    reviewCount: 142,
  },
  {
    id: 10,
    title: "Hotel Aura By Woco Stays",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A modern hotel offering comfortable stays with contemporary amenities.",
    features: ["Restaurant", "Bar", "Banquet Hall"],
    price: "₹4,000 - ₹7,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.7,
    reviewCount: 282,
  },
  {
    id: 11,
    title: "Ocean Spray",
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
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.7,
    reviewCount: 188,
  },
  {
    id: 12,
    title: "Le Dupleix",
    location: "Pondicherry",
    bedrooms: 2,
    guests: 4,
    description:
      "Elegant colonial residence with spacious rooms and understated luxury.",
    features: ["Courtyard Dining", "Bar", "Heritage Architecture"],
    price: "₹7,500 - ₹12,500",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.6,
    reviewCount: 128,
  },
  {
    id: 13,
    title: "Lagoon Sarovar Premiere Resort",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A resort nestled along the backwaters, offering a blend of nature and luxury.",
    features: ["Swimming Pool", "Spa", "Water Sports", "Restaurant"],
    price: "₹7,000 - ₹12,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.7,
    reviewCount: 100,
  },
  {
    id: 14,
    title: "Grand Hotel D'Europe",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "Heritage hotel with colonial charm in the White Town.",
    features: ["Restaurant", "Bar", "Heritage Ambience"],
    price: "₹4,500 - ₹7,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.7,
    reviewCount: 122,
  },
  {
    id: 15,
    title: "Résidence De L'evêché (CGH Earth)",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A historic villa offering an intimate and luxurious stay in the French Quarter.",
    features: ["Heritage Rooms", "Personalized Service", "Quiet Location"],
    price: "₹10,000 - ₹15,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.6,
    reviewCount: 263,
  },
  {
    id: 16,
    title: "Hotel De L'Orient",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A restored 18th-century mansion offering a glimpse into the French colonial era.",
    features: ["Courtyard Restaurant", "Heritage Decor", "Shop"],
    price: "₹6,000 - ₹9,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.9,
    reviewCount: 294,
  },
  {
    id: 17,
    title: "Club Mahindra Resort Puducherry",
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
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.8,
    reviewCount: 134,
  },
  {
    id: 18,
    title: "Conch Luxury Private Pool Suites",
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
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.9,
    reviewCount: 145,
  },
  {
    id: 19,
    title: "The Sunway Manor",
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
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.6,
    reviewCount: 236,
  },
  {
    id: 20,
    title: "La Maison Charu",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A charming guesthouse offering a peaceful stay with a homely vibe.",
    features: ["Garden", "Terrace", "Yoga Space"],
    price: "₹4,000 - ₹6,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Luxury",
    rating: 4.6,
    reviewCount: 118,
  },

  // Premium (Mid-Range)
  {
    id: 21,
    title: "Grand Serenaa Hotel & Resorts",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "A resort-style hotel with lush gardens and a large pool.",
    features: ["Swimming Pool", "Spa", "Restaurant", "Banquet Hall"],
    price: "₹4,000 - ₹6,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.4,
    reviewCount: 136,
  },
  {
    id: 22,
    title: "Shenbaga Hotel & Convention Centre",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "Contemporary hotel with modern amenities and convention facilities.",
    features: ["Rooftop Pool", "Restaurant", "Bar", "Gym"],
    price: "₹5,500 - ₹8,500",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.4,
    reviewCount: 88,
  },
  {
    id: 23,
    title: "Hotel Atithi",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A modern hotel with a rooftop pool and excellent dining options.",
    features: ["Rooftop Pool", "Restaurant", "Bar", "Gym"],
    price: "₹4,500 - ₹7,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.4,
    reviewCount: 127,
  },
  {
    id: 24,
    title: "Anandha Inn Convention Centre and Suites",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "Well-known hotel with convention center and multiple dining options.",
    features: ["Swimming Pool", "Gym", "Spa", "Multiple Restaurants"],
    price: "₹4,500 - ₹7,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.4,
    reviewCount: 74,
  },
  {
    id: 25,
    title: "Hotel Annamalai International",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "Modern hotel with excellent facilities for business and leisure.",
    features: ["Swimming Pool", "Gym", "Restaurant", "Bar"],
    price: "₹4,000 - ₹6,500",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.3,
    reviewCount: 134,
  },
  {
    id: 26,
    title: "Le Royal Park",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "Elegant hotel with spacious rooms and a large swimming pool.",
    features: ["Swimming Pool", "Gym", "Restaurant", "Bar", "Spa"],
    price: "₹5,000 - ₹8,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.6,
    reviewCount: 75,
  },
  {
    id: 27,
    title: "Le Supreme Inn",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A comfortable hotel offering good value and convenient location.",
    features: ["Restaurant", "Banquet Hall", "Wi-Fi"],
    price: "₹3,500 - ₹5,500",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.4,
    reviewCount: 109,
  },
  {
    id: 28,
    title: "Lotus Bay View Hotel",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "Comfortable rooms with easy access to the city center and sea views.",
    features: ["Sea View Rooms", "Restaurant", "Wi-Fi"],
    price: "₹2,800 - ₹4,500",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.4,
    reviewCount: 102,
  },
  {
    id: 29,
    title: "La Papillon Maison",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A boutique stay with a cozy atmosphere and personalized service.",
    features: ["Garden", "Wi-Fi", "Breakfast"],
    price: "₹3,000 - ₹5,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.2,
    reviewCount: 108,
  },
  {
    id: 30,
    title: "Ginger Pondicherry",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "A smart, budget-friendly hotel with modern amenities.",
    features: ["Fitness Center", "Restaurant", "Wi-Fi"],
    price: "₹3,000 - ₹5,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.3,
    reviewCount: 95,
  },
  {
    id: 31,
    title: "Mango Hill La Serene Puducherry",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "A serene hotel with French-style architecture and a pool.",
    features: ["Swimming Pool", "Restaurant", "Garden"],
    price: "₹4,000 - ₹6,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.6,
    reviewCount: 102,
  },
  {
    id: 32,
    title: "Itsy Hotels Red Lotus Heritage",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "A heritage-style hotel in the heart of the city.",
    features: ["Wi-Fi", "Breakfast", "Heritage Decor"],
    price: "₹2,500 - ₹4,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.5,
    reviewCount: 78,
  },
  {
    id: 33,
    title: "White Pearl Residency",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A comfortable residency offering modern rooms and good hospitality.",
    features: ["Restaurant", "Wi-Fi", "Parking"],
    price: "₹2,500 - ₹4,500",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.6,
    reviewCount: 121,
  },
  {
    id: 34,
    title: "Hotel Villa Krish",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "A boutique hotel in White Town with a rooftop restaurant.",
    features: ["Rooftop Restaurant", "Wi-Fi", "Bar"],
    price: "₹3,500 - ₹6,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.3,
    reviewCount: 117,
  },
  {
    id: 35,
    title: "Le Château",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A heritage hotel offering a blend of French and Indian culture.",
    features: ["Restaurant", "Bar", "Heritage Rooms"],
    price: "₹4,000 - ₹7,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.3,
    reviewCount: 85,
  },
  {
    id: 36,
    title: "The Bull Boutique Hotel",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A stylish boutique hotel with vibrant decor and a lively atmosphere.",
    features: ["Restaurant", "Bar", "Wi-Fi"],
    price: "₹3,000 - ₹5,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.6,
    reviewCount: 77,
  },
  {
    id: 37,
    title: "The French Villa",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "A charming villa offering a quiet and authentic stay.",
    features: ["Garden", "Wi-Fi", "Breakfast"],
    price: "₹3,500 - ₹6,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.6,
    reviewCount: 51,
  },
  {
    id: 38,
    title: "Hotel Tamizh Park",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A business hotel with comfortable rooms and conference facilities.",
    features: ["Restaurant", "Bar", "Banquet Hall"],
    price: "₹3,000 - ₹5,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.5,
    reviewCount: 50,
  },
  {
    id: 39,
    title: "Villa Helena",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A heritage guesthouse with a beautiful garden and colonial charm.",
    features: ["Garden Restaurant", "Heritage Ambience", "Wi-Fi"],
    price: "₹5,000 - ₹8,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Premium",
    rating: 4.4,
    reviewCount: 123,
  },

  // Budget (Economy)
  {
    id: 40,
    title: "VMB Residency",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A budget-friendly residency with clean rooms and basic amenities.",
    features: ["Wi-Fi", "Parking", "24-hour Front Desk"],
    price: "₹1,500 - ₹2,500",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Budget",
    rating: 4.0,
    reviewCount: 84,
  },
  {
    id: 41,
    title: "Grand Ocean Inn",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "An affordable inn located near the beach.",
    features: ["Wi-Fi", "Parking", "Near Beach"],
    price: "₹1,800 - ₹3,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Budget",
    rating: 4.2,
    reviewCount: 24,
  },
  {
    id: 42,
    title: "Sri Krishna Guest House",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "A simple guest house offering economical accommodation.",
    features: ["Wi-Fi", "24-hour Front Desk"],
    price: "₹1,000 - ₹2,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Budget",
    rating: 4.1,
    reviewCount: 71,
  },
  {
    id: 43,
    title: "Hotel Corbelli",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "A centrally located hotel offering good value for money.",
    features: ["Restaurant", "Bar", "Swimming Pool"],
    price: "₹1,500 - ₹3,000",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Budget",
    rating: 3.9,
    reviewCount: 67,
  },
  {
    id: 44,
    title: "Pleasant Inn",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description: "A comfortable inn with clean rooms and friendly service.",
    features: ["Wi-Fi", "Parking", "Room Service"],
    price: "₹1,500 - ₹2,500",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Budget",
    rating: 4.0,
    reviewCount: 82,
  },
  {
    id: 45,
    title: "Micasa Hostels",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 1,
    description: "A vibrant hostel perfect for backpackers and solo travelers.",
    features: ["Dormitory Beds", "Common Area", "Wi-Fi", "Kitchen"],
    price: "₹800 - ₹1,500",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Budget",
    rating: 4.2,
    reviewCount: 81,
  },
  {
    id: 46,
    title: "Nomad House",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 1,
    description:
      "A social hostel with a relaxed atmosphere and co-working space.",
    features: ["Co-working Space", "Dormitory Beds", "Wi-Fi", "Events"],
    price: "₹800 - ₹1,500",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Budget",
    rating: 4.2,
    reviewCount: 56,
  },
  {
    id: 47,
    title: "Park Guest House (Sri Aurobindo Ashram)",
    location: "Pondicherry",
    bedrooms: 1,
    guests: 2,
    description:
      "A peaceful guest house run by the Ashram, located on the beach.",
    features: ["Sea View", "Garden", "Meditation Hall", "Vegetarian Food"],
    price: "₹800 - ₹1,500",
    image: placeholderImage,
    images: [],
    destination: "pondicherry",
    tier: "Budget",
    rating: 3.8,
    reviewCount: 97,
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
