import alpacaWalk from "@/assets/alpaca-walk.jpg";
import goatIcon1 from "@/assets/goat-icon-1.jpg";
import goatIcon2 from "@/assets/goat-icon-2.jpg";
import goatIcon3 from "@/assets/goat-icon-3.jpg";
import highlandHero from "@/assets/highland-hero.jpg";
import highlandCta from "@/assets/highland-cta.jpg";

export type SaleSpecies = "cow" | "goat" | "alpaca";

export type SaleAnimal = {
  slug: string;
  name: string;
  species: SaleSpecies;
  sold: boolean;
  image: string;
};

const img: Record<SaleSpecies, string[]> = {
  cow: [highlandHero, highlandCta],
  goat: [goatIcon1, goatIcon2, goatIcon3],
  alpaca: [alpacaWalk],
};

const make = (name: string, slug: string, species: SaleSpecies, sold: boolean, i: number): SaleAnimal => ({
  name, slug, species, sold, image: img[species][i % img[species].length] as string,
});

/** Listed top-to-bottom as displayed. */
export const forSale: SaleAnimal[] = [
  make("Macintosh", "macintosh", "cow", false, 0),
  make("June", "june", "cow", false, 1),
  make("Joe", "joe", "cow", false, 0),
  make("Clover & Ash", "clover-and-ash", "goat", false, 0),
  make("Chuck & Charlize", "chuck-and-charlize", "goat", false, 1),
];

export const sold: SaleAnimal[] = [
  make("Mr. T", "mr-t", "cow", true, 0),
  make("Westley", "westley", "cow", true, 1),
  make("Ginger Snap", "ginger-snap", "cow", true, 0),
  make("Robbie Burns", "robbie-burns", "cow", true, 1),
  make("Maisie", "maisie", "cow", true, 0),
  make("Winston", "winston", "cow", true, 1),
  make("Oreo", "oreo", "cow", true, 0),
  make("Copperpot, Puff & Elton John", "copperpot-puff-elton-john", "alpaca", true, 0),
  make("Sugar & Spice", "sugar-and-spice", "goat", true, 2),
  make("Kevin & Karen", "kevin-and-karen", "goat", true, 0),
  make("Marco & Polo", "marco-and-polo", "goat", true, 1),
  make("Pekoe, Rooibos & Matcha", "pekoe-rooibos-matcha", "goat", true, 2),
];

export const allSaleAnimals = [...forSale, ...sold];

export const speciesLabel: Record<SaleSpecies, string> = {
  cow: "Mini Highland Cow",
  goat: "Miniature Goats",
  alpaca: "Alpacas",
};
