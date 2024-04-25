"use client";

import * as React from "react";
import { PaletteMode } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import AppAppBar from "./components/LandingPage/AppAppBar/AppAppBar";
import Hero from "./components/LandingPage/Hero/Hero";
//import LogoCollection from "./components/LandingPage/LogoCollection/LogoCollection";
import Highlights from "./components/LandingPage/Highlights/Highlights";
import Features from "./components/LandingPage/Features/Features";
//import Testimonials from "./components/LandingPage/Testimonials/Testimonials";
import FAQ from "./components/LandingPage/FAQ/FAQ";
import Footer from "./components/LandingPage/Footer/Footer";
import getLPTheme from "./components/LandingPage/getLPTheme/getLPTheme";

export default function LandingPage() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const [showCustomTheme, setShowCustomTheme] = React.useState(true);
  const LPtheme = createTheme(getLPTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={LPtheme}>
      <CssBaseline />
      <AppAppBar mode={mode} toggleColorMode={toggleColorMode} />
      <Features />
      <Hero />
      <Box sx={{ bgcolor: "background.default" }}>
        {/**<Testimonials />*/}
        <Highlights />
        <FAQ />
        {/**<LogoCollection /> */}
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
