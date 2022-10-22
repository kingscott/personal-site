import Image from 'next/image';
import { useState } from "react";

export default function Logo() {
  let darkModePreference = window.matchMedia('(prefers-color-scheme: dark)');
  let isDarkMode = darkModePreference.matches;

  let [darkMode, setDarkMode] = useState(isDarkMode);

  darkModePreference.addEventListener('change', (e) => {
    setDarkMode(e.matches);
  });

  return (
    <Image src={`/${isDarkMode ? 'logo_dark.svg' : 'logo_light.svg'}`} alt='Scott King logo' quality={100} width={171} height={71} />
  );
};