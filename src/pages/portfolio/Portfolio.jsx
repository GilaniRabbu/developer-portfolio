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
    title: "Advice Generator App",
    img: "https://github.com/GilaniRabbu/advice-generator-app/blob/main/design/desktop-preview.jpg?raw=true",
    desc: "Lorem ipsum dolor, sit ame consectetur ad ipsum dolor ame elite.",
    live: "https://gilani-ra-advice-generator.netlify.app/",
    git: "https://github.com/GilaniRabbu/advice-generator-app.git",
  },
  {
    id: 2,
    title: "Interactive Rating Component",
    img: "https://github.com/GilaniRabbu/interactive-rating-component-solutions/blob/main/design/desktop-preview.jpg?raw=true",
    desc: "Lorem ipsum dolor, sit ame consectetur ad ipsum dolor ame elite.",
    live: "https://gilani-ra-blog-011.netlify.app/",
    git: "https://github.com/GilaniRabbu/interactive-rating-component-solutions.git",
  },
  {
    id: 3,
    title: "Article Preview Component",
    img: "https://github.com/GilaniRabbu/article-preview-component-solution/blob/main/design/desktop-preview.jpg?raw=true",
    desc: "Lorem ipsum dolor, sit ame consectetur ad ipsum dolor ame elite.",
    live: "https://gilani-ra-blog-009.netlify.app/",
    git: "https://github.com/GilaniRabbu/article-preview-component-solution.git",
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
    backgroundColor: "#a7f3d0",
  },
});

const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
  ({ theme }) => ({
    textTransform: "uppercase",
    fontWeight: theme.typography.fontWeightBold,
    fontSize: theme.typography.pxToRem(16),
    marginRight: theme.spacing(1),
    fontFamily: "sans-serif",
    letterSpacing: theme.spacing(0.15),
    color: "rgba(210, 250, 230, 0.7)",
    "&.Mui-selected": {
      color: "#d1fae5",
    },
    "&:hover": {
      color: "#a7f3d0",
      opacity: 1,
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(140, 240, 190, 0.5)",
    },
  })
);

const Project = ({ item }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="rounded-lg p-1 bg-emerald-600 dark:bg-emerald-400">
      <div className="max-w-[350px] p-5 rounded-md bg-emerald-100 dark:bg-zinc-950">
        <div className="mb-4 overflow-hidden">
          <motion.img
            src={item.img}
            alt="..."
            className="max-w-full cursor-pointer"
            whileHover={{ scale: 1.05 }}
          />
        </div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ bgcolor: "#059669" }}>
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
          <CustomTabPanel
            value={value}
            index={0}
            className="min-h-36 bg-emerald-200 dark:bg-emerald-800"
          >
            <h3 className="text-2xl capitalize tracking-wider font-serif font-semibold text-emerald-800 dark:text-emerald-200">
              {item.title}
            </h3>
          </CustomTabPanel>
          <CustomTabPanel
            value={value}
            index={1}
            className="min-h-36 bg-emerald-200 dark:bg-emerald-800"
          >
            <p className="font-serif tracking-wide text-emerald-800 dark:text-emerald-200">
              {item.desc}
            </p>
          </CustomTabPanel>
          <CustomTabPanel
            value={value}
            index={2}
            className="min-h-36 bg-emerald-200 dark:bg-emerald-800"
          >
            <div className="flex flex-wrap gap-2">
              <motion.p
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 1 }}
                className="px-3 py-1 font-bold cursor-pointer text-sm rounded text-emerald-200 bg-emerald-700 dark:text-emerald-700 dark:bg-emerald-200"
              >
                html
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 1 }}
                className="px-3 py-1 font-bold cursor-pointer text-sm rounded text-emerald-200 bg-emerald-700 dark:text-emerald-700 dark:bg-emerald-200"
              >
                css
              </motion.p>
              <motion.p
                whileHover={{ scale: 1.07 }}
                whileTap={{ scale: 1 }}
                className="px-3 py-1 font-bold cursor-pointer text-sm rounded text-emerald-200 bg-emerald-700 dark:text-emerald-700 dark:bg-emerald-200"
              >
                javascript
              </motion.p>
            </div>
          </CustomTabPanel>
        </Box>
        <div className="flex gap-1 flex-wrap mt-8">
          <motion.a
            href={item.live}
            target="_blank"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-sm font-semibold rounded-full cursor-pointer bg-transparent border-2 border-solid text-emerald-600 dark:text-emerald-400 border-emerald-600 dark:border-emerald-400"
          >
            Live Preview
          </motion.a>
          <motion.a
            href={item.git}
            target="_blank"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="px-4 py-2 text-sm font-semibold rounded-full cursor-pointer bg-transparent border-2 border-solid text-emerald-600 dark:text-emerald-400 border-emerald-600 dark:border-emerald-400"
          >
            Check on Github
          </motion.a>
        </div>
      </div>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div className="py-10 text-emerald-950 dark:text-emerald-100 bg-emerald-100/50 dark:bg-zinc-950">
      <div className="max-w-7xl m-auto">
        <h2 className="font-bold font-serif text-4xl text-center mb-10 p-2 md:p-0 text-emerald-700 dark:text-emerald-400">
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
