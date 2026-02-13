export type Project = {
  title: string;
  description: string;
  detailedDescription: string;
  tags: string[];
  url: string;
  image: string;
};

export const projects: Project[] = [
  {
    title: "Ultraverse NFT Marketplace",
    description: "Add a short summary of the project goals and outcomes.",
    detailedDescription: "This project is an NFT marketplace built with Next.js. It allows users to browse, buy, and sell NFTs in a sleek and modern interface. The design focuses on providing a seamless user experience, with intuitive navigation and visually appealing graphics. The platform integrates with blockchain APIs to facilitate transactions and manage NFT ownership.",
    tags: ["Next.js", "UI", "Frontend"],
    url: "https://yiannis-internship.vercel.app/",
    image: "/Ultraverse.png",
  },
  {
    title: "Summarist Audio Book Platform",
    description: "Add a short summary of the project goals and outcomes.",
    detailedDescription: "This project is an audio book platform built with Next.js. It allows users to browse, listen to, and manage their audio book collection. The design focuses on providing a seamless and enjoyable listening experience, with intuitive navigation and a clean interface. The platform integrates with various APIs to fetch audio book data and provides personalized recommendations.",
    tags: ["Next.js", "UX", "API"],
    url: "https://yiannis-summarist.vercel.app/",
    image: "/summarist.png",
  },
  {
    title: "Netflix Clone",
    description: "Add a short summary of the project goals and outcomes.",
    detailedDescription: "This project is a Netflix clone built with React. It allows users to browse and watch movies and TV shows, similar to the Netflix platform. The design focuses on providing a familiar and intuitive user experience, with a clean interface and smooth navigation. It also features a  working login component that runs on Firestore.",
    tags: ["Streaming", "Clone", "UI"],
    url: "https://netflix-clone-one-sigma-50.vercel.app/login/",
    image: "/netflix-clone.png",
  },
  {
    title: "Blinkin Movie Database",
    description: "Add a short summary of the project goals and outcomes.",
    detailedDescription: "This project is a movie database application built with React. It allows users to search for movies, view details, and create a watchlist. The design focuses on simplicity and ease of use, with a clean interface and intuitive navigation. The app integrates with the TMDB API to fetch movie data and provides a seamless user experience.",
    tags: ["React", "SPA", "Design"],
    url: "https://blinkin-react.vercel.app/",
    image: "/blinkin.png",
  },
  {
    title: "Interactive 3D Storefront",
    description: "Add a short summary of the project goals and outcomes.",
    detailedDescription: "This project is an interactive 3D storefront built with Three.js. It features a dynamic product display that allows users to explore items in a virtual space. The design focuses on creating an engaging and immersive shopping experience, leveraging WebGL for smooth performance and visually appealing graphics.",
    tags: ["Three.js", "3D", "WebGL", "AI"],
    url: "https://3js-swart-theta.vercel.app/",
    image: "/teestore.png",
  },
  {
    title: "Hotel Booking Platform",
    description: "Add a short summary of the project goals and outcomes.",
    detailedDescription: "This project is a hotel booking platform that allows users to search for hotels, view details, and make reservations. The platform features a clean and intuitive design, with a focus on user experience. It also features an interactive AI tool for bringing any idea to life. It is built with React and TypeScript, and integrates with a mock API to fetch hotel data.",
    tags: ["Booking", "SaaS", "TypeScript"],
    url: "https://hotel-booking-project-28lm.vercel.app/",
    image: "/quickstay.png",
  },
  {
    title: "Personal Portfolio Website",
    description: "Add a short summary of the project goals and outcomes.",
    detailedDescription: "This was my first attempt at building a personal portfolio. I focused on creating a clean and modern design to showcase my projects and skills. The site is built with Next.js and features responsive design, smooth animations, and an easy-to-navigate layout.",
    tags: ["Portfolio", "Brand", "Marketing"],
    url: "https://yiannisportfolio.vercel.app/",
    image: "/oldfolio.png",
  },
];
