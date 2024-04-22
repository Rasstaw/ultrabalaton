"use client";
import AppAppBar from "@/app/components/LandingPage/AppAppBar/AppAppBar";
import ToggleColorMode from "@/app/components/LandingPage/ToggleColorMode/ToggleColorMode";
import getLPTheme from "../../components/LandingPage/getLPTheme/getLPTheme";

export default function userProfile({ params }: any) {
  return (
    <>
      <AppAppBar
        mode={"light"}
        toggleColorMode={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    </>
  );
}
