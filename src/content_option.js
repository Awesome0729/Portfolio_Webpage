import cookieroll from "./assets/images/cookieroll.png";
import cestlouvi from "./assets/images/cestlouvi.png";
import codinginbcd from "./assets/images/codinginbacolod.png";
import goopworld from "./assets/images/goopworld.png";
import meBG from "./assets/images/me.png";
const logotext = "Zieggy";
const meta = {
  title: "ZC",
  description:
    "I'm Ziegfred Carmona, a Programmer with a background in Game Development, Web Development, Database management, and Software Testing.",
};

const introdata = {
  title: "Hi, I'm Ziegfred Carmona",
  animated: {
    first: "Technologist",
    second: "Visionary",
    third: "Programmer",
    fourth: "Website Developer",
    fifth: "Game Developer",
    // add more if you'd like but make sure to update /src/pages/home/index.js Line 29
  },
  description:
    "Dedicated technology enthusiast with an insatiable curiosity for unraveling the complexities of our digital world.",
  your_img_url: meBG,
};

const dataabout = {
  title: "Who am I?",
  aboutme:
    "I am a computer science graduate with experience in game development. Addtionally, I have worked as a full stack programmer, proficient in languages like Python, Node.js, Java, and Go, enabling me to tackle diverse challenges in web and application development. With a keen eye for detail and a passion for innovation, I am dedicated to delivering high-quality and innovative solutions across various technological domains.",
};
const worktimeline = [
  {
    jobtitle: "Game Developer",
    where: "Kooapps Philippines",
    date: "2022",
  },
  {
    jobtitle: "Programmer",
    where: "CestLouVi",
    date: "2023",
  },

  {
    jobtitle: "Quality Assurance & Web Developer",
    where: "Trezure",
    date: "2023",
  },
];

const skills = [
  {
    name: "Python",
  },

  {
    name: "C",
  },

  {
    name: "Go language",
  },

  {
    name: "Linux",
  },

  {
    name: "Powershell",
  },

  {
    name: "C#",
  },

  {
    name: "Node",
  },

  {
    name: "Django Web Development",
  },
];

const dataportfolio = [
  {
    img: cookieroll,
    description:
      "Cookie Roll, prevent Cookie from falling by strategically linking compatible blocks",
    link: "https://prodejay.itch.io/cookieroll",
  },
  {
    img: cestlouvi,
    description: "The CestLouVi landing page (Incomplete)",
    link: "https://cestlouvi.com",
  },
  {
    img: goopworld,
    description:
      "Goop World. a short and fun way to eat goops and get big",
    link: "https://drive.google.com/file/d/1PEe4BoNcOh14DL9oAbaSRVJdNPS-CNWl/view?usp=sharing",
  },

  {
    img: codinginbcd,
    description:
      "Coding in bacolod, a bunch of nerds review coffee places in Bacolod",
    link: "https://bcd-coders.github.io/Coding-in-Bacolod/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "carmonaziegfred@gmail.com",
  description: "Looking forward to hearing from you!",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "SERVICE_ID",
  YOUR_TEMPLATE_ID: "TEMPLATE_ID",
  YOUR_USER_ID: "USER_ID (PUBLIC_KEY)",
};

const socialprofils = {
  github: "https://github.com/Awesome0729",
  linkedin: "https://www.linkedin.com/in/ziegfred-carmona-3185aa219/",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
