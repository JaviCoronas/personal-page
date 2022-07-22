import Link from "next/link";
import { Switch, Text, useTheme, changeTheme } from "@nextui-org/react";
import { useContext } from "react";
import AppContext from "./AppContext";
import { useTheme as useNextTheme } from "next-themes";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export default function Layout({ children }) {
  const context = useContext(AppContext);
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();
  const { theme } = useTheme();

  const handleChange = (e) => {
    setTheme(e.target.checked ? "dark" : "light");
  };

  return (
    <div
      className="flex flex-col min-h-screen"
      style={{ background: theme.colors.background.value }}
    >
      <header className="bg-white-100 mb-8 py-4">
        <div className="flex mx-auto">
          <Link href="/">
            <Text h1 size={28} weight="bold" className="cursor-pointer">
              Mi blog
            </Text>
          </Link>
          <Switch
            className="mr-2"
            size="xl"
            iconOn={<SunIcon filled />}
            iconOff={<MoonIcon filled />}
            checked={isDark}
            onChange={handleChange}
          />
        </div>
      </header>
      <main className="container mx-auto flex-1">{children}</main>
      <footer className="bg-white-100 mt-8 py-4">
        <Text className="container mx-auto flex justify-center">
          &copy; 2022 Javier Coronas
        </Text>
      </footer>
    </div>
  );
}
