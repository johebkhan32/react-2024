export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a Personal AI Agent",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",            
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Cryptoverse - A Cryptocurrency App",
      des: "Cryptoverse is offering real-time market data, breaking crypto news, in-depth coin details, and interactive charts.",
      img: "/cryptoverse.png",
      iconLists: ["/red.png", "/re.svg", "/tail.svg", "/que.png", "/js.png"],
      link: "https://cryptoverse-xvbw.vercel.app/",
    },
    {
      id: 2,
      title: "SnapGram - A Social App",
      des: "A visual storytelling platform where users share life experiences, passions through captivating photos.",
      img: "/p-1.jpg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/re.svg", "/app.svg"],
      link: "https://snapgram-38ua.vercel.app/sign-in",
    },   
  ];
  
  export const testimonials = [
    {
      quote:
        "Joheb has been professional and cordial in his interactions at Niswey. It's a brand owned by Irayo Technologies Private Limited. During his time at Niswey, he learnt Web development basics, OOPS and MVC implementation with PHP and Laravel framework. We wish him the very best in his future endeavours!",
      name: "Dhiraj Pandey",
      title: "CEO of Niswey",
      nameImg: "/profile.jpg",
    },
    {
      quote:
        "Collaborating with Joheb was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Joheb's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Joheb is the ideal partner.",
      name: "Jayant Kapila",
      title: "CTO of Proactivist",
      nameImg: "/profile2.jpg",
    },
     // SEOExpert AI Testimonial
    {
      quote:
        "Joheb consistently delivered exceptional work during his time at SEOExpert AI. His technical expertise in React and TypeScript, combined with his ability to optimize performance and solve complex problems, made him invaluable to our team. His 30% performance improvement on our core application speaks to his dedication and skill. Joheb's proactive approach and collaborative spirit make him an outstanding developer who elevates any project he touches.",
      name: "Rushabh Agarwal",
      title: "CEO of SEOExpert AI",
      nameImg: "/profile3.png",

    },

   // TELUS Digital Testimonial
    {
      quote:
        "Working with Joheb at TELUS Digital has been exceptional. His meticulous attention to detail, systematic approach to data processing, and unwavering commitment to quality standards consistently exceed expectations. Joheb's ability to collaborate effectively with cross-functional teams while maintaining accuracy and adhering to technical specifications makes him a reliable and valued team member. His analytical mindset and dedication to excellence are truly commendable.",
      name: "Rituraj Jhala",
      title: "Operations Manager, TELUS Digital",
      nameImg: "/profile4.png",

    }
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Niswey - Web Developer Intern",
      desc: "Building scalable and efficient web applications using PHP Laravel. Also developing robust and secure backend systems.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp2.svg",
    },

    {
      id: 2,
      title: "Proactivist - Frontend Developer Intern",
      desc: "Crafted websites that looked great and functioned flawlessly, ensuring users had a seamless and engaging experience.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },

    {
      id: 3,
      title: "SEOExpert AI - SDE-I",
      desc: "Build end-to-end web solutions integrating React frontends with RESTful APIs, managing data persistence and ensuring system reliability.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    {
      id: 4,
      title: "Telus Digital - Data Analyst",
      desc: "Process and analyze large-scale datasets applying systematic methodologies and quality assurance practices.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  


  export const socialMedia = [
    { id: 1, img: '/git.svg', link: 'https://github.com/johebkhan32' },
    { id: 2, img: '/twit.svg', link: 'https://x.com/johebkhan32' },
    { id: 3, img: '/link.svg', link: 'https://www.linkedin.com/in/joheb-khan-5abaa6149/' },
  ];