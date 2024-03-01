import { aboutUs, toursSliderImage1, toursSliderImage2 } from "../images";

const egyptTours = [
  {
    title: "Pyramids of Giza",
    subtitle: "Explore the ancient wonders",
    image: aboutUs,
    description:
      "Discover the iconic Pyramids of Giza and learn about their fascinating history.",
    completedToursCount: 100,
    price: 99.99,
    carouselImages: [toursSliderImage1, toursSliderImage2, aboutUs],
  },
  {
    title: "Nile River Cruise",
    subtitle: "Sail along the majestic Nile",
    image: aboutUs,
    description:
      "Embark on a luxurious cruise along the Nile River and witness breathtaking landscapes.",
    completedToursCount: 50,
    price: 199.99,
    carouselImages: [toursSliderImage1, toursSliderImage2, aboutUs],
  },
  {
    title: "Luxor",
    subtitle: "Discover the ancient city",
    image: aboutUs,
    description:
      "Visit the ancient city of Luxor and explore its famous temples and tombs.",
    completedToursCount: 75,
    price: 149.99,
    carouselImages: [toursSliderImage1, toursSliderImage2, aboutUs],
  },
  {
    title: "Cairo",
    subtitle: "The bustling capital",
    image: aboutUs,
    description:
      "Experience the vibrant city of Cairo and its rich history and culture.",
    completedToursCount: 120,
    price: 79.99,
    carouselImages: [toursSliderImage1, toursSliderImage2, aboutUs],
  },
];

export { egyptTours };
