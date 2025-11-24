import laVilla from "@/assets/property_images/la_villa.webp";
import laVilla1 from "@/assets/property_images/la_villa1.webp";
import laVilla2 from "@/assets/property_images/la_villa2.webp";
import laVilla3 from "@/assets/property_images/la_villa3.webp";
import leDuplex from "@/assets/property_images/le_duplex.webp";
import leDuplex1 from "@/assets/property_images/le_duplex1.webp";
import leDuplex2 from "@/assets/property_images/le_duplex2.webp";
import leDuplex3 from "@/assets/property_images/le_duplex3.webp";
import villaShanti from "@/assets/property_images/villa_shanti.webp";
import villaShanti1 from "@/assets/property_images/villa_shanti1.webp";
import villaShanti2 from "@/assets/property_images/villa_shanti2.webp";
import villaShanti3 from "@/assets/property_images/villa_shanti3.webp";
import grandMadurai from "@/assets/property_images/grand_madurai.webp";
import grandMadurai1 from "@/assets/property_images/grand_madurai1.webp";
import grandMadurai2 from "@/assets/property_images/grand_madurai2.webp";
import grandMadurai3 from "@/assets/property_images/grand_madurai3.webp";
import jcResidency from "@/assets/property_images/jc_residency.webp";
import jcResidency1 from "@/assets/property_images/jc_residency1.webp";
import jcResidency2 from "@/assets/property_images/jc_residency2.webp";
import jcResidency3 from "@/assets/property_images/jc_residency3.webp";
import poppysHotel from "@/assets/property_images/poppys_hotel.webp";
import poppysHotel1 from "@/assets/property_images/poppys_hotel1.webp";
import poppysHotel2 from "@/assets/property_images/poppys_hotel2.webp";
import poppysHotel3 from "@/assets/property_images/poppys_hotel3.webp";
import hotelBlossom from "@/assets/property_images/hotel_blossoms.webp";
import hotelBlossom1 from "@/assets/property_images/hotel_blossoms1.webp";
import hotelBlossom2 from "@/assets/property_images/hotel_blossoms2.webp";
import hotelBlossom3 from "@/assets/property_images/hotel_blossoms3.webp";
import vividBoutiqueHotel from "@/assets/property_images/vivid_boutique_hotel.webp";
import vividBoutiqueHotel1 from "@/assets/property_images/vivid_boutique_hotel1.webp";
import vividBoutiqueHotel2 from "@/assets/property_images/vivid_boutique_hotel2.webp";
import vividBoutiqueHotel3 from "@/assets/property_images/vivid_boutique_hotel3.webp";
import hotelShaan from "@/assets/property_images/hotel_shaan.webp";
import hotelShaan1 from "@/assets/property_images/hotel_shaan1.webp";
import hotelShaan2 from "@/assets/property_images/hotel_shaan2.webp";
import hotelShaan3 from "@/assets/property_images/hotel_shaan3.webp";
import haiwaBeachResidency from "@/assets/property_images/haiwa_beach_residency.webp";
import haiwaBeachResidency1 from "@/assets/property_images/haiwa_beach_residency1.webp";
import haiwaBeachResidency2 from "@/assets/property_images/haiwa_beach_residency2.webp";
import haiwaBeachResidency3 from "@/assets/property_images/haiwa_beach_residency3.webp";
import tamaara from "@/assets/property_images/tamaara.webp";
import tamaara1 from "@/assets/property_images/tamaara1.webp";
import tamaara2 from "@/assets/property_images/tamaara2.webp";
import sajjoys from "@/assets/property_images/Sajjoys.webp";
import sajjoys1 from "@/assets/property_images/Sajjoys1.webp";
import sajjoys2 from "@/assets/property_images/Sajjoys2.webp";
import sajjoys3 from "@/assets/property_images/Sajjoys3.webp";
import swagathHolidays from "@/assets/property_images/Swagath Holidays.webp";
import swagathHolidays1 from "@/assets/property_images/swagath_holidays1.webp";
import swagathHolidays2 from "@/assets/property_images/swagath_holidays2.webp";
import swagathHolidays3 from "@/assets/property_images/swagath_holidays3.webp";
import hotelRockNBeach from "@/assets/property_images/hotel_rock _n_beach.webp";
import hotelRockNBeach1 from "@/assets/property_images/hotel_rock _n_beach1.webp";
import hotelRockNBeach2 from "@/assets/property_images/hotel_rock _n_beach2.webp";
import hotelRockNBeach3 from "@/assets/property_images/hotel_rock _n_beach3.webp";
import pappukuttyBeachResort from "@/assets/property_images/pappukutty_beach_resort.webp";
import pappukuttyBeachResort1 from "@/assets/property_images/pappukutty_beach_resort1.webp";
import pappukuttyBeachResort2 from "@/assets/property_images/pappukutty_beach_resort2.webp";
import pappukuttyBeachResort3 from "@/assets/property_images/pappukutty_beach_resort3.webp";
import theCoral from "@/assets/property_images/the_coral.webp";
import theCoral1 from "@/assets/property_images/the_coral1.webp";
import theCoral2 from "@/assets/property_images/the_coral2.webp";
import theCoral3 from "@/assets/property_images/the_coral3.webp";
import hotelSingaar from "@/assets/property_images/hotel-singaar.webp";
import hotelSingaar1 from "@/assets/property_images/hotel-singaar1.webp";
import hotelSingaar2 from "@/assets/property_images/hotel-singaar2.webp";
import hotelSingaar3 from "@/assets/property_images/hotel-singaar3.webp";
import hotelOceanHeritage from "@/assets/property_images/hotel_ocean_heritage.webp";
import hotelOceanHeritage1 from "@/assets/property_images/hotel_ocean_heritage1.webp";
import hotelOceanHeritage2 from "@/assets/property_images/hotel_ocean_heritage2.webp";
import hotelOceanHeritage3 from "@/assets/property_images/hotel_ocean_heritage3.webp";

export interface Property {
  id: number;
  title: string;
  location: string;
  bedrooms: number;
  bathrooms: number;
  guests: number;
  description: string;
  fullDescription?: string;
  features: string[];
  price?: string;
  priceMin?: number; // Minimum price for filtering
  priceMax?: number; // Maximum price for filtering
  image: string;
  images?: string[];
  collection: "premium" | "signature";
  destination: string;
  propertySize?: string;
  bedroomsDetails?: {
    room: string;
    beds: string;
    description?: string;
  }[];
  staffServices?: string[];
  termsConditions?: string[];
  coordinates?: {
    lat: number;
    lng: number;
  };
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
  {
    id: 1,
    title: "La Villa", 
    location: "Pondicherry, India",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    description:
      "Chic heritage stay in the French Quarter with serene courtyards and refined suites.",
    features: [
      "Air Conditioning",
      "Breakfast Included",
      "Courtyard",
      "Concierge",
    ],
    price: "₹9,000 - ₹14,000",
    image: laVilla,
    images: [laVilla1, laVilla2, laVilla3],
    collection: "premium",
    destination: "pondicherry",
    coordinates: { lat: 11.9338, lng: 79.8298 },
  },
  {
    id: 2,
    title: "Villa Shanthi",
    location: "Pondicherry, India",
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    description:
      "Warm boutique villa blending Tamil charm and modern comfort near Promenade Beach.",
    features: [
      "Free Wi‑Fi",
      "Air Conditioning",
      "On-site Dining",
      "Family Rooms",
    ],
    price: "₹6,500 - ₹10,500",
    image: villaShanti,
    images: [villaShanti1, villaShanti2, villaShanti3],
    collection: "signature",
    destination: "pondicherry",
    coordinates: { lat: 11.9350, lng: 79.8340 },
  },
  {
    id: 3,
    title: "Le Duplex",
    location: "Pondicherry, India",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    description:
      "Elegant colonial residence with spacious rooms and understated luxury.",
    features: ["Colonial Decor", "Breakfast", "Air Conditioning", "Concierge"],
    price: "₹7,500 - ₹12,500",
    image: leDuplex,
    images: [leDuplex1, leDuplex2, leDuplex3],
    collection: "signature",
    destination: "pondicherry",
    coordinates: { lat: 11.9309, lng: 79.8337 },
  },

  // Madurai
  {
    id: 6,
    title: "Grand Madurai",
    location: "Madurai, India",
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    description:
      "Comfortable upscale stay close to Meenakshi Amman Temple and city sights.",
    features: ["Air Conditioning", "Restaurant", "Room Service", "Parking"],
    price: "₹4,500 - ₹8,000",
    image: grandMadurai,
    images: [grandMadurai1, grandMadurai2, grandMadurai3],
    collection: "signature",
    destination: "madurai",
    coordinates: { lat: 9.9174, lng: 78.1196 },
  },
  {
    id: 7,
    title: "JC Residency",
    location: "Madurai, India",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    description:
      "Popular boutique hotel with warm service, spacious rooms and local cuisine.",
    features: ["Pool", "Restaurant", "Air Conditioning", "Banquet"],
    price: "₹4,200 - ₹7,500",
    image: jcResidency,
    images: [jcResidency1, jcResidency2, jcResidency3],
    collection: "signature",
    destination: "madurai",
    coordinates: { lat: 9.9372, lng: 78.1200 },
  },
  {
    id: 8,
    title: "Poppys Hotel",
    location: "Madurai, India",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    description:
      "Relaxed stay with greenery, modern rooms and easy connectivity.",
    features: ["Garden", "Restaurant", "Air Conditioning", "Free Wi‑Fi"],
    price: "₹4,000 - ₹7,000",
    image: poppysHotel,
    images: [poppysHotel1, poppysHotel2, poppysHotel3],
    collection: "signature",
    destination: "madurai",
    coordinates: { lat: 9.9469, lng: 78.1647 },
  },

  // Trichy
  {
    id: 11,
    title: "Hotel Blossom",
    location: "Tiruchirappalli (Trichy), India",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    description:
      "Centrally located hotel with comfortable rooms and friendly service.",
    features: ["Air Conditioning", "Restaurant", "Room Service", "Wi‑Fi"],
    price: "₹3,800 - ₹6,500",
    image: hotelBlossom,
    images: [hotelBlossom1, hotelBlossom2, hotelBlossom3],
    collection: "signature",
    destination: "trichy",
    coordinates: { lat: 10.8017, lng: 78.6840 },
  },
  {
    id: 12,
    title: "Vivid Boutique Hotel",
    location: "Tiruchirappalli (Trichy), India",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    description:
      "Stylish boutique rooms with contemporary design and curated amenities.",
    features: ["Boutique Decor", "Air Conditioning", "Dining", "Wi‑Fi"],
    price: "₹4,200 - ₹7,200",
    image: vividBoutiqueHotel,
    images: [vividBoutiqueHotel1, vividBoutiqueHotel2, vividBoutiqueHotel3],
    collection: "signature",
    destination: "trichy",
    coordinates: { lat: 10.8258, lng: 78.6853 },
  },
  {
    id: 13,
    title: "Hotel Shaan",
    location: "Tiruchirappalli (Trichy), India",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    description: "Budget-friendly, clean stay for short city visits.",
    features: ["Air Conditioning", "Room Service", "Wi‑Fi"],
    price: "₹2,200 - ₹4,200",
    image: hotelShaan,
    images: [hotelShaan1, hotelShaan2, hotelShaan3],
    collection: "signature",
    destination: "trichy",
    coordinates: { lat: 10.8178, lng: 78.6838 },
  },

  // Varkala
  {
    id: 16,
    title: "Haiwa Beach Residency",
    location: "Varkala, India",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    description:
      "Cliffside beach stay with airy rooms near Varkala beach and cafes.",
    features: ["Beach Access", "Air Conditioning", "Breakfast", "Wi‑Fi"],
    price: "₹3,800 - ₹6,800",
    image: haiwaBeachResidency,
    images: [haiwaBeachResidency1, haiwaBeachResidency2, haiwaBeachResidency3],
    collection: "signature",
    destination: "varkala",
    coordinates: { lat: 8.7370, lng: 76.7026 },
  },
  {
    id: 17,
    title: "Tamaara",
    location: "Varkala, India",
    bedrooms: 3,
    bathrooms: 3,
    guests: 6,
    description: "Boutique retreat with tranquil ambiance and lush gardens.",
    features: ["Garden", "Air Conditioning", "Restaurant", "Wi‑Fi"],
    price: "₹4,500 - ₹8,500",
    image: tamaara,
    images: [tamaara1, tamaara2],
    collection: "premium",
    destination: "varkala",
    coordinates: { lat: 8.7379, lng: 76.7163 },
  },
  {
    id: 18,
    title: "Sajjoys",
    location: "Varkala, India",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    description: "Modern rooms, rooftop pool and easy access to Varkala cliff.",
    features: ["Rooftop Pool", "Restaurant", "Air Conditioning", "Wi‑Fi"],
    price: "₹4,200 - ₹7,800",
    image: sajjoys,
    images: [sajjoys1, sajjoys2, sajjoys3],
    collection: "signature",
    destination: "varkala",
    coordinates: { lat: 8.7333, lng: 76.7167 },
  },

  // Kovalam
  {
    id: 21,
    title: "Swagath Holidays",
    location: "Kovalam, India",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    description:
      "Comfortable seaside hotel near Lighthouse Beach with pool and dining.",
    features: ["Pool", "Restaurant", "Air Conditioning", "Wi‑Fi"],
    price: "₹4,000 - ₹7,500",
    image: swagathHolidays,
    images: [swagathHolidays1, swagathHolidays2, swagathHolidays3],
    collection: "signature",
    destination: "kovalam",
    coordinates: { lat: 8.4007, lng: 76.9781 },
  },
  {
    id: 22,
    title: "Hotel Rock N Beach",
    location: "Kovalam, India",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    description: "Beachside stay with airy balconies and ocean vibes.",
    features: ["Beach Access", "Air Conditioning", "Restaurant", "Wi‑Fi"],
    price: "₹3,800 - ₹6,800",
    image: hotelRockNBeach,
    images: [hotelRockNBeach1, hotelRockNBeach2, hotelRockNBeach3],
    collection: "signature",
    destination: "kovalam",
    coordinates: { lat: 8.3895, lng: 76.9754 },
  },
  {
    id: 23,
    title: "Pappukutty Beach Resort",
    location: "Kovalam, India",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    description: "Classic Kovalam beachfront with simple, cozy rooms and pool.",
    features: ["Pool", "Beach Access", "Restaurant", "Air Conditioning"],
    price: "₹3,500 - ₹6,200",
    image: pappukuttyBeachResort,
    images: [
      pappukuttyBeachResort1,
      pappukuttyBeachResort2,
      pappukuttyBeachResort3,
    ],
    collection: "signature",
    destination: "kovalam",
    coordinates: { lat: 8.3829, lng: 76.9797 },
  },

  // Kanyakumari
  {
    id: 26,
    title: "The Coral",
    location: "Kanyakumari, India",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    description:
      "Modern coastal stay close to the sunset point and Vivekananda Rock.",
    features: ["Air Conditioning", "Restaurant", "Wi‑Fi", "Parking"],
    price: "₹3,800 - ₹6,800",
    image: theCoral,
    images: [theCoral1, theCoral2, theCoral3],
    collection: "signature",
    destination: "kanyakumari",
    coordinates: { lat: 8.0883, lng: 77.5385 },
  },
  {
    id: 27,
    title: "Hotel Singaar",
    location: "Kanyakumari, India",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    description: "Sea-facing hotel with gardens and casual dining options.",
    features: [
      "Sea View (select rooms)",
      "Restaurant",
      "Air Conditioning",
      "Wi‑Fi",
    ],
    price: "₹4,200 - ₹7,500",
    image: hotelSingaar,
    images: [hotelSingaar1, hotelSingaar2, hotelSingaar3],
    collection: "signature",
    destination: "kanyakumari",
    coordinates: { lat: 8.0900, lng: 77.5400 },
  },
  {
    id: 28,
    title: "Hotel Ocean Heritage",
    location: "Kanyakumari, India",
    bedrooms: 1,
    bathrooms: 1,
    guests: 2,
    description: "Compact rooms near the beach and key attractions.",
    features: ["Air Conditioning", "Lift", "Room Service", "Wi‑Fi"],
    price: "₹2,500 - ₹4,500",
    image: hotelOceanHeritage,
    images: [hotelOceanHeritage1, hotelOceanHeritage2, hotelOceanHeritage3],
    collection: "signature",
    destination: "kanyakumari",
    coordinates: { lat: 8.0790, lng: 77.5439 },
  },
];

// Helper function to parse price string and extract min/max
export const parsePrice = (priceStr?: string): { min: number; max: number } | null => {
  if (!priceStr) return null;
  const match = priceStr.match(/₹[\d,]+/g);
  if (!match || match.length === 0) return null;
  const prices = match.map(p => parseInt(p.replace(/[₹,]/g, '')));
  if (prices.length === 1) return { min: prices[0], max: prices[0] };
  return { min: Math.min(...prices), max: Math.max(...prices) };
};

// Enrich properties with default values and parsed prices
export const allProperties: Property[] = propertiesData.map(property => {
  const priceRange = parsePrice(property.price);
  const defaultRating = 4.0 + Math.random() * 1.0; // Random rating between 4.0-5.0
  const defaultReviewCount = Math.floor(Math.random() * 200) + 50; // 50-250 reviews
  
  // Determine amenities based on features
  const hasWifi = property.features.some(f => f.toLowerCase().includes('wi-fi') || f.toLowerCase().includes('wifi'));
  const hasPool = property.features.some(f => f.toLowerCase().includes('pool'));
  const hasRestaurant = property.features.some(f => f.toLowerCase().includes('restaurant') || f.toLowerCase().includes('dining'));
  const hasSpa = property.features.some(f => f.toLowerCase().includes('spa') || f.toLowerCase().includes('wellness'));
  const hasBeachAccess = property.features.some(f => f.toLowerCase().includes('beach'));
  
  return {
    ...property,
    priceMin: priceRange?.min,
    priceMax: priceRange?.max,
    rating: property.rating ?? Math.round(defaultRating * 10) / 10,
    reviewCount: property.reviewCount ?? defaultReviewCount,
    checkIn: property.checkIn ?? "14:00",
    checkOut: property.checkOut ?? "11:00",
    cancellationPolicy: property.cancellationPolicy ?? "Free cancellation up to 7 days before check-in",
    propertyType: property.propertyType ?? (property.collection === "premium" ? "villa" : "hotel"),
    wifi: property.wifi ?? hasWifi ?? true,
    parking: property.parking ?? property.features.some(f => f.toLowerCase().includes('parking')) ?? false,
    pool: property.pool ?? hasPool ?? false,
    restaurant: property.restaurant ?? hasRestaurant ?? false,
    spa: property.spa ?? hasSpa ?? false,
    beachAccess: property.beachAccess ?? hasBeachAccess ?? false,
    amenities: property.amenities ?? [...property.features],
  };
});

export const getPropertyById = (id: number): Property | undefined => {
  return allProperties.find((property) => property.id === id);
};

export const getPropertyBySlug = (slug: string): Property | undefined => {
  return allProperties.find(
    (property) =>
      property.title.toLowerCase().replace(/\s+/g, "-") === slug.toLowerCase()
  );
};
