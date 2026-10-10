import alpacaWalk from "@/assets/alpaca-walk.jpg";
import donkeyPicnic from "@/assets/donkey-picnic.jpg";
import goatCuddles from "@/assets/goat-cuddles.jpg";
import highlandHero from "@/assets/highland-hero.jpg";
import urbort1 from "@/assets/urbort-1.jpg";
import urbort2 from "@/assets/urbort-2.jpg";
import urbort3 from "@/assets/urbort-3.jpg";
import owners from "@/assets/owners-fun.jpg";

export type UrbortPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  rotate: string;
};

export const urbortPosts: UrbortPost[] = [
  { slug: "worlds-first-cow-wedding", title: "World's First Cow Wedding", excerpt: "Placeholder copy. A veil, a flower crown and one very patient Highland cow.", image: urbort1, rotate: "-rotate-2" },
  { slug: "biggest-littlest-collab", title: "Biggest, Littlest Collab", excerpt: "Placeholder copy. The biggest and littlest animals on the farm teamed up.", image: urbort2, rotate: "rotate-1" },
  { slug: "viral-alpaca-moment", title: "Viral Alpaca Moment", excerpt: "Placeholder copy. How two alpacas accidentally broke the internet.", image: urbort3, rotate: "rotate-2" },
  { slug: "goat-cuddle-record", title: "The Great Goat Cuddle Record", excerpt: "Placeholder copy. How many goats can fit on one lap? We found out.", image: goatCuddles, rotate: "rotate-1" },
  { slug: "donkey-picnic-chaos", title: "Donkey Picnic Chaos", excerpt: "Placeholder copy. The day the donkeys ate the picnic before the guests did.", image: donkeyPicnic, rotate: "-rotate-1" },
  { slug: "alpaca-parade", title: "The Alpaca Parade", excerpt: "Placeholder copy. Leashes, bows and a very confused mail carrier.", image: alpacaWalk, rotate: "rotate-2" },
];

export const urbortGallery = [highlandHero, owners, goatCuddles];
