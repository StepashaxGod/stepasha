/* file for importing the pictures and exporting, making an array of objects to extract the values and exporting them
 */
import ferrari_sf90_stradale from "./ferrari_sf90_stradale.jpg";
import mercedes_s63e_performance from "./mercedes_s63e_performance.jpg";
import lamborghini_revuelto from "./lamborghini_revuelto.jpg";
import lookImage from "./look-image.png";
import profile from "./profile.png";
import cartImage from "./cartImage.png";
import menuIcon from "./menu_icon.png";
import carHero from "./car_hero.png";
import carLogo from "./car-logo.png"
import logo from "./logo.png"

export const assets = {
  ferrari_sf90_stradale,
  mercedes_s63e_performance,
  lamborghini_revuelto,
  lookImage,
  profile,
  cartImage,
  menuIcon,
  carHero,
  carLogo,
  logo
};

export const cars = [
  {
    id: "1",
    name: "Mercedes-AMG S63E Performance",
    description:
      "The Mercedes-AMG S63 E Performance is a high-performance luxury sedan that combines a 4.0L twin-turbo V8 engine with an electric motor, making it a plug-in hybrid with exceptional power and efficiency.",
    price: {
      base: 186200,
      fullyLoaded: 229400,
    },
    image: [mercedes_s63e_performance],
    category: "sedan",
    subCategory: "Luxury performance sedan",
    productionYear: 2024,
    bestseller: true,
  },
  {
    id: "2",
    name: "Ferrari SF90 Stradale",
    description:
      "The Ferrari SF90 Stradale is a plug-in hybrid supercar with a twin-turbo V8 and three electric motors, delivering extreme performance and cutting-edge technology.",
    price: {
      base: 524815,
      fullyLoaded: 700000,
    },
    image: [ferrari_sf90_stradale],
    category: "supercar",
    subCategory: "Hybrid supercar",
    productionYear: 2024,
    bestseller: true,
  },
  {
    id: "3",
    name: "Lamborghini Revuelto",
    description:
      "The Lamborghini Revuelto is the brand's first hybrid V12 supercar, combining a naturally aspirated V12 engine with three electric motors for unmatched performance.",
    price: {
      base: 608358,
      fullyLoaded: 750000,
    },
    image: [lamborghini_revuelto],
    category: "supercar",
    subCategory: "Hybrid hypercar",
    productionYear: 2024,
    bestseller: true,
  },
];

console.log(cars);
