import Link from "next/link";
import { Switch, Text, useTheme, changeTheme } from "@nextui-org/react";
import { useContext } from "react";
import AppContext from "./AppContext";
import { useTheme as useNextTheme } from "next-themes";

export default function Layout({ children }) {
  const context = useContext(AppContext);
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  const handleChange = () => {
    const nextTheme = isDark ? "light" : "dark";
    //context.setIsDark(isDark ? true : false);
    changeTheme(nextTheme);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white-100 mb-8 py-4">
        <div className="container mx-auto justify-start">
          <Link href="/">
            <Text>Mi blog</Text>
          </Link>
        </div>
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
        />
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
