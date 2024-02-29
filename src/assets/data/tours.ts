import { cairoCity, cairoCity2, pyramids } from "../images";

const egyptTours = [
  {
    title: "Pyramids of Giza",
    subtitle: "Explore the ancient wonders",
    image: pyramids,
    description:
      "Discover the iconic Pyramids of Giza and learn about their fascinating history.",
    completedToursCount: 100,
    price: 99.99,
    carouselImages: [cairoCity, cairoCity2, pyramids],
  },
  {
    title: "Nile River Cruise",
    subtitle: "Sail along the majestic Nile",
    image: pyramids,
    description:
      "Embark on a luxurious cruise along the Nile River and witness breathtaking landscapes.",
    completedToursCount: 50,
    price: 199.99,
    carouselImages: [cairoCity, cairoCity2, pyramids],
  },
  {
    title: "Luxor",
    subtitle: "Discover the ancient city",
    image: pyramids,
    description:
      "Visit the ancient city of Luxor and explore its famous temples and tombs.",
    completedToursCount: 75,
    price: 149.99,
    carouselImages: [cairoCity, cairoCity2, pyramids],
  },
  {
    title: "Cairo",
    subtitle: "The bustling capital",
    image: pyramids,
    description:
      "Experience the vibrant city of Cairo and its rich history and culture.",
    completedToursCount: 120,
    price: 79.99,
    carouselImages: [cairoCity, cairoCity2, pyramids],
  },
];

export { egyptTours };
