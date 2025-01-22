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
    title: "FurStore ECommerce",
    img: "./portfolio-01.jpg",
    desc: "Fully Responsive E-Commerce site built with the MERN stack. Provides a seamless user experience across all devices.",
    live: "https://ecommerce-fur-store.vercel.app/",
    git: "https://github.com/GilaniRabbu/ecommerce-website.git",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "AI Landing Page",
    img: "./portfolio-02.jpg",
    desc: "Responsive landing page built with Next.js. Provides a seamless user experience across all devices. Added dynamic animations with Framer Motion.",
    live: "https://ai-landing-v1.vercel.app/",
    git: "https://github.com/GilaniRabbu/ai-landing-page.git",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind"],
  },
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
        <Box className="py-5 px-3">
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
    <div className="p-4 rounded md:max-w-96 bg-[#BECAF3] dark:bg-[#163769]">
      <div className="mb-4 overflow-hidden rounded">
        <motion.img
          src={item.img}
          alt={item.title}
          className="max-w-full cursor-pointer"
          whileHover={{ scale: 1.1 }}
        />
      </div>
      <Box className="w-full">
        <Box className="bg-[#A9B8EF] dark:bg-[#2459A8]">
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
        <CustomTabPanel value={value} index={0}>
          <h3 className="text-2xl capitalize tracking-wider font-serif">
            {item.title}
          </h3>
          <div className="flex flex-wrap gap-2 mt-4">
            <a
              href={item.live}
              target="_blank"
              className="cursor-pointer font-semibold text-lg border-b text-primary border-primary"
            >
              Link
            </a>
            <a
              href={item.git}
              target="_blank"
              className="cursor-pointer font-semibold text-lg border-b text-primary border-primary"
            >
              Github
            </a>
          </div>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <p className="font-serif tracking-wide">{item.desc}</p>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <ul className="flex flex-wrap gap-2">
            {item.tech.map((tech, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 1 }}
                className="cursor-pointer px-4 py-2 font-bold text-sm rounded border text-primary border-primary"
              >
                {tech}
              </motion.li>
            ))}
          </ul>
        </CustomTabPanel>
      </Box>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div className="py-20 px-4">
      <div className="container m-auto">
        <h2 className="mb-10 text-5xl text-center font-serif text-primary">
          My Projects
        </h2>
        <div className="flex justify-center items-center">
          <div className="flex-1 flex gap-5 justify-center flex-col md:flex-row">
            {items.map((item) => (
              <Project item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
