import * as React from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import PropTypes from "prop-types";

const items = [
  {
    id: 1,
    title: "AI Landing Page",
    img: "./portfolio-01.jpg",
    desc: "Responsive landing page built with Next.js. Provides a seamless user experience across all devices. Added dynamic animations with Framer Motion.",
    live: "https://ai-landing-v1.vercel.app/",
    git: "https://github.com/GilaniRabbu/ai-landing-page.git",
    tech: ["HTML", "CSS", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "FurStore ECommerce",
    img: "./portfolio-02.jpg",
    desc: "Fully Responsive E-Commerce site built with the MERN stack. Provides a seamless user experience across all devices.",
    live: "https://ecommerce-fur-store.vercel.app/",
    git: "https://github.com/GilaniRabbu/ecommerce-website.git",
    tech: ["HTML", "CSS", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  // {
  //   id: 3,
  //   title: "Portfolio Website",
  //   img: "./portfolio-03.png",
  //   desc: "Lorem ipsum dolor sit ame consectetur elite Ad quam asp ve provident aqu id se ui.",
  //   live: "https://vercel.com",
  //   git: "https://github.com/GilaniRabbu",
  //   tech: ["HTML", "CSS", "JavaScript", "React.js", "Next.js"],
  // },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const StyledTabs = styled((props) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
  "& .MuiTabs-indicatorSpan": {
    maxWidth: 50,
    width: "100%",
    backgroundColor: "currentColor",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "uppercase",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(16),
    marginRight: theme.spacing(1),
    letterSpacing: theme.spacing(0.15),
    color: "currentColor",
    "&.Mui-selected": {
      color: "currentColor",
    },
  })
);

const Project = ({ item }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="max-w-[350px] p-5 bg-zinc-300 dark:bg-zinc-800">
      <div className="mb-4 overflow-hidden">
        <motion.img
          loading="lazy"
          src={item.img}
          alt="..."
          className="max-w-full cursor-pointer"
          whileHover={{ scale: 1.07 }}
        />
      </div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ bgcolor: "#4682B4" }}>
          <StyledTabs
            value={value}
            onChange={handleChange}
            variant="fullWidth"
            aria-label="Projects Tabs"
            centered
          >
            <StyledTab label="Title" />
            <StyledTab label="Desc" />
            <StyledTab label="Tech" />
          </StyledTabs>
          <Box sx={{ p: 1 }} />
        </Box>
        <CustomTabPanel value={value} index={0} className="min-h-44">
          <h3 className="text-2xl capitalize tracking-wider font-serif font-semibold text-sky-800 dark:text-sky-200">
            {item.title}
          </h3>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1} className="min-h-44">
          <p className="font-serif tracking-wide text-sky-800 dark:text-sky-200">
            {item.desc}
          </p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2} className="min-h-44">
          <ul className="flex flex-wrap gap-2">
            {item.tech.map((tech, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 1 }}
                className="px-3 py-1 font-bold cursor-pointer text-sm rounded text-sky-200 bg-sky-700 dark:text-sky-700 dark:bg-sky-200"
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </CustomTabPanel>
      </Box>
      <div className="flex gap-1 flex-wrap mt-8">
        <a
          href={item.live}
          target="_blank"
          className="px-4 py-2 text-sm font-semibold rounded-full cursor-pointer bg-transparent border-2 border-solid text-sky-600 dark:text-sky-400 border-sky-600 dark:border-sky-400"
        >
          Live Preview
        </a>
        <a
          href={item.git}
          target="_blank"
          className="px-4 py-2 text-sm font-semibold rounded-full cursor-pointer bg-transparent border-2 border-solid text-sky-600 dark:text-sky-400 border-sky-600 dark:border-sky-400"
        >
          Check on Github
        </a>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div className="py-16 text-zinc-950 dark:text-zinc-100 bg-zinc-100 dark:bg-zinc-950">
      <div className="max-w-screen-xl m-auto">
        <h2 className="font-bold font-serif text-4xl text-center mb-10 p-2 md:p-0 text-sky-700 dark:text-sky-400">
          My Projects
        </h2>
        <div className="flex gap-5 justify-center items-center flex-row flex-wrap p-2">
          {items.map((item) => (
            <Project item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
