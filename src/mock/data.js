import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Yash Habib.',
  subtitle: 'Android And Full Stack Web Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne:
    'I am a highly skilled individual with a strong background in competitive programming and problem-solving. I have proven my expertise as a Specialist on Codeforces. I have successfully solved over 500 DSA (Data Structures and Algorithms) problems on renowned platforms such as Leetcode and GeeksForGeeks, with a particular focus on medium difficulty level problems.',
  paragraphTwo:
    'My proficiency extends beyond competitive programming into full-stack web development. I have showcased my talent through the creation of impressive projects, which are highlighted below:',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Jobify.png',
    title: 'Jobify',
    info: 'Job Tracking App(MERN)',
    info2:
      'Users can submit jobs on Jobify, a system for managing employment opportunities. In order to improve user experience, it also contains a stats panel where charts and graphs are used to display stats information. The user can examine every job listed and filter jobs based on position, publication date, kind, etc. A complete job portal that allows administrators and users to post and receive jobs',
    url: 'https://jobify-euwf.onrender.com/',
    repo: 'https://github.com/yashhabib01/Jobify', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Momento.jpg',
    title: 'Momento',
    info: 'Social Media App (Java + Firebase)',
    info2:
      'Momento is a social network app that helps connecting people and share their precious moments with their loved ones.',
    url: 'https://github.com/yashhabib01/Momento#readme',
    repo: 'https://github.com/yashhabib01/Momento', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ProShop.png',
    title: 'Proshop',
    info: 'Ecommerce Web App (MERN Stack)',
    info2: 'Proshop is a ecommerce web portal which helps you purchase any items in just 3 clicks',
    url: 'https://proshopwebapp01.herokuapp.com/',
    repo: 'https://github.com/yashhabib01/Proshop', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Visualizer.png',
    title: 'Sort Visualizer',
    info: 'Sort Visualizer (Java Gui)',
    info2: 'Helps to learn various sorting algorithms in visualization form',
    url: 'https://github.com/yashhabib01/Visualization#readme',
    repo: 'https://github.com/yashhabib01/Visualization', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'UberClone.png',
    title: 'Uber Clone',
    info: 'Uber Clone (Java , Firebase)',
    info2: '',
    url: 'https://github.com/yashhabib01/UberClone/tree/master#readme',
    repo: 'https://github.com/yashhabib01/UberClone', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'FavDish.png',
    title: 'FavDish',
    info: 'Recipe App (Kotlin  , Andoid Jetpack)',
    info2: 'Add dish,update.Get RandomDish , DishDetail,Add to Favorite ',
    url: 'https://github.com/yashhabib01/FavDish#readme',
    repo: 'https://github.com/yashhabib01/FavDish', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'yash.d.habib1@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/yashhabib01',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/_yash_habib_/',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:yash.d.habib1@gmail.com',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
