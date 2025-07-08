"use client";
import React from "react";
import { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  theme: string;
  DarkToggle: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setThemeColor] = useState<string>("");

  // montamos el localstorage y revisamos si hay un theme guardado
  useEffect(() => {
    const localtheme = localStorage.getItem("theme");
    if (localtheme) {
      setThemeColor(localtheme);
    } else {
      // Detecta el sistema si no hay nada guardado
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      setThemeColor(prefersDark ? "dark" : "light");
    }
  }, []);

  useEffect(() => {
    if (theme) {
      const body = document.querySelector("body");
      body?.classList.toggle("dark", theme === "dark");
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  const DarkToggle = () => {
    setThemeColor((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, DarkToggle }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};