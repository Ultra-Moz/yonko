import Twitter from "../../public/images/icons/Twitter";
import Youtube from "../../public/images/icons/Youtube";
import Instagram from "../../public/images/icons/Instagram";
import Dribble from "../../public/images/icons/Dribble";
import Discord from "../../public/images/icons/Discord";
import AppDevelopment from "../components/icons/AppDevelopment";
import BrandIdentity from "../components/icons/BrandIdentity";
import LogoDesign from "../components/icons/LogoDesign";
import MediaMarketing from "../components/icons/MediaMarketing";
import ProductDesign from "../components/icons/ProductDesign";
import WebDevelopment from "../components/icons/WebDevelopment";

const homeData = {
  deployments: 14,
  currentWork: {
    currently: "Designing",
    name: "Medidrop",
    image: "/images/working.svg",
    imgColor: "#28CD41",
    textColor: "#28CD41",
  },
  skills: [
    "Figma",
    "Node.js",
    "MySQL",
    "Swift UI",
    "Framer",
    "React",
    "Tailwind CSS",
  ],
  projects: [
    {
      name: "Medidrop",
      startDate: "July'24",
      endDate: "Current",
    },
    {
      name: "Skill24em",
      startDate: "Jun'24",
      endDate: "July'24",
    },
    {
      name: "Gigleaz Jobs",
      startDate: "May'24",
      endDate: "July'24",
    },
    {
      name: "She Cyber Hub",
      startDate: "May'24",
      endDate: "Jun'24",
    },
    {
      name: "She Cyber Hub - Dashboard",
      startDate: "May'24",
      endDate: "Jun'24",
    },
    {
      name: "Bhoomi",
      startDate: "April'24",
      endDate: "May'24",
    },
  ],
  services: [
    {
      image: BrandIdentity,
      name: "Brand Identity",
      description: "Crafting identities with personality",
      color: "#d6cc99",
    },
    {
      image: LogoDesign,
      name: "Logo Design",
      description: "Creating Iconic Symbols",
      color: "#21C063",
    },
    {
      image: MediaMarketing,
      name: "Media Marketing",
      description: "Making your feed fabulous",
      color: "#E93C00",
    },
    {
      image: WebDevelopment,
      name: "Web Development",
      description: "Turning clicks into smiles",
      color: "#16AEF9",
    },
    {
      image: ProductDesign,
      name: "Product Design",
      description: "Innovating one product at a time",
      color: "#FA6DCA",
    },
    {
      image: AppDevelopment,
      name: "App Development",
      description: "Making apps that make life better",
      color: "#6366F1",
    },
  ],
  testimonials: [
    {
      name: "Mishra Lalvani",
      image: "/images/person1.png",
      title: "CEO - Busease",
      review:
        "“Brutanix Studios transformed our platform with their incredible design and development skills. Their attention to detail and creativity are unmatched. Highly recommend!”",
    },
    {
      name: "Yash Reddy",
      image: "/images/person2.png",
      title: "CEO - Busease",
      review:
        "“Brutanix Studios transformed our platform with their incredible design and development skills. Their attention to detail and creativity are unmatched. Highly recommend!”",
    },
  ],
  socials: [
    {
      name: "Twitter",
      image: Twitter,
      link: "https://x.com/KDeshmukh03",
    },
    {
      name: "Youtube",
      image: Youtube,
      link: "https://www.youtube.com/@HarlockUlric",
    },
    {
      name: "Instagram",
      image: Instagram,
      link: "https://www.instagram.com/deshmukh_03/",
    },
    {
      name: "Dribble",
      image: Dribble,
      link: "https://dribbble.com/Deshmukh_03",
    },
    {
      name: "Discord",
      image: Discord,
      link: "",
    },
  ],
};
export default homeData;
