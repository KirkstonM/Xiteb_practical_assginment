import { nanoid } from "nanoid";

const offersData = [
  {
    id: nanoid(),
    title: "Half Board Holiday",
    description: "Enjoy daily breakfast and dinner throughout your stay at Shangri La",
    price: "82,203.75",
    img: './images/offers/offers-img-4.jpg',
    alt: "image1"
  },
  {
    id: nanoid(),
    title: "Bed & Breakfast",
    description: "Start your day with stunning views of Colombo and daily breakfast",
    price: "74,896.75",
    img: './images/offers/offers-img-1.jpg',
    alt: "image2"
  },
  {
    id: nanoid(),
    title: "Shangri-La Circle Exclusive Member Rate",
    description: "Exclusive Member Rate for Shangril-La Circle members",
    price: "58,456.00",
    img: './images/offers/offers-img-3.jpg',
    alt: "image3"
  },
];

export default offersData;