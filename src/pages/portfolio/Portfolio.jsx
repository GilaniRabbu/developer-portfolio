import React from "react";

const items = [
  {
    id: 1,
    title: "Project 1",
    img: "https://github.com/GilaniRabbu/nft-preview-card-component-solution/blob/main/design/desktop-design.jpg?raw=true",
    desc: "Lorem ipsum dolor, sit ame consectetur ad ipsum dolor ame elite.",
    live: "https://gilani-ra-blog-008.netlify.app/",
    git: "https://gilani-ra-blog-008.netlify.app/",
  },
  {
    id: 2,
    title: "Project 2",
    img: "https://github.com/GilaniRabbu/nft-preview-card-component-solution/blob/main/design/desktop-design.jpg?raw=true",
    desc: "Lorem ipsum dolor, sit ame consectetur ad ipsum dolor ame elite.",
    live: "https://gilani-ra-blog-007.netlify.app/",
    git: "https://gilani-ra-blog-008.netlify.app/",
  },
  {
    id: 3,
    title: "Project 3",
    img: "https://github.com/GilaniRabbu/nft-preview-card-component-solution/blob/main/design/desktop-design.jpg?raw=true",
    desc: "Lorem ipsum dolor, sit ame consectetur ad ipsum dolor ame elite.",
    live: "https://gilani-ra-blog-013.netlify.app/",
    git: "https://gilani-ra-blog-008.netlify.app/",
  },
  {
    id: 4,
    title: "Project 4",
    img: "https://github.com/GilaniRabbu/nft-preview-card-component-solution/blob/main/design/desktop-design.jpg?raw=true",
    desc: "Lorem ipsum dolor, sit ame consectetur ad ipsum dolor ame elite.",
    live: "https://gilani-ra-blog-004.netlify.app/",
    git: "https://gilani-ra-blog-008.netlify.app/",
  },
];

const Project = ({ item }) => {
  return (
    <div className="rounded-lg p-1 bg-gradient-to-r from-indigo-500/90 to-blue-500/90 dark:bg-gradient-to-r dark:from-indigo-400/90 dark:to-blue-400/90">
      <div className="max-w-80 p-6 rounded-lg bg-zinc-100 dark:bg-zinc-950">
        <div className="mb-4">
          <img src={item.img} alt="..." className="max-w-full" />
        </div>
        <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
        <p className="text-sm">{item.desc}</p>
        <div className="flex flex-wrap gap-2 py-3">
          <p className="px-3 py-1 font-bold text-sm rounded-full text-orange-600 bg-zinc-300 dark:text-zinc-300 dark:bg-orange-600">
            html
          </p>
          <p className="px-3 py-1 font-bold text-sm rounded-full text-sky-600 bg-zinc-300 dark:text-zinc-300 dark:bg-sky-600">
            css
          </p>
          <p className="px-3 py-1 font-bold text-sm rounded-full text-yellow-600 bg-zinc-300 dark:text-zinc-300 dark:bg-yellow-600">
            javascript
          </p>
        </div>
        <div className="flex gap-1 flex-wrap mt-8">
          <a
            href={item.live}
            target="_blank"
            className="px-4 py-2 text-sm rounded-full cursor-pointer transition-colors bg-gradient-to-t from-emerald-600/90 to-teal-300/90 dark:bg-gradient-to-t dark:from-teal-600/90 dark:to-emerald-300/90"
          >
            Live Preview
          </a>
          <a
            href={item.git}
            target="_blank"
            className="px-4 py-2 text-sm rounded-full cursor-pointer bg-transparent border border-solid border-emerald-600 dark:border-emerald-300"
          >
            Check on Github
          </a>
        </div>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div className="py-10 text-zinc-950 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-950">
      <div className="max-w-3xl m-auto">
        <h2 className="font-bold font-serif text-4xl text-center mb-10 p-2 md:p-0 text-indigo-700 dark:text-indigo-400">
          My Projects
        </h2>
        <div className="flex gap-5 justify-center items-center flex-row flex-wrap">
          {items.map((item) => (
            <Project item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
