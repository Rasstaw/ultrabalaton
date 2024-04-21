"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Stack from "@mui/material/Stack";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

import getSignInSideTheme from "../components/signin/getSignInSideTheme/getSignInSideTheme";
import ToggleColorMode from "../components/signin/ToggleColorMode/ToggleColorMode";
import SignInCard from "../components/signin/SignInCard/SignInCard";
import Content from "../components/signin/Content/Content";
import Link from "next/link";

export default function SignInPage() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const SignInSideTheme = createTheme(getSignInSideTheme(mode));

  const toggleColorMode = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeProvider theme={SignInSideTheme}>
      <CssBaseline />
      <Stack
        direction="column"
        justifyContent="space-between"
        sx={(theme) => ({
          backgroundImage:
            theme.palette.mode === "light"
              ? "radial-gradient(ellipse at 70% 51%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))"
              : "radial-gradient(at 70% 51%, hsla(210, 100%, 16%, 0.5), hsl(220, 30%, 5%))",
          backgroundSize: "cover",
          height: { xs: "auto", md: "100dvh" },
          pb: { xs: 12, sm: 0 },
        })}
        component="main"
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            position: { sm: "static", md: "fixed" },
            width: "100%",
            p: { xs: 2, sm: 4 },
          }}
        >
          <Link href="/" passHref>
            <Button startIcon={<ArrowBackRoundedIcon />}>Back</Button>
          </Link>

          <ToggleColorMode mode={mode} toggleColorMode={toggleColorMode} />
        </Stack>
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          justifyContent="center"
          gap={{ xs: 6, sm: 12 }}
          sx={{ height: { xs: "100%", md: "100dvh" }, p: 2 }}
        >
          <Content />
          <SignInCard />
        </Stack>
      </Stack>
    </ThemeProvider>
  );
}
