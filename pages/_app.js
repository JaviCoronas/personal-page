import { NextUIProvider } from '@nextui-org/react'
import { useState } from 'react';
import AppContext from '../components/AppContext';
import { createTheme } from "@nextui-org/react"
import { ThemeProvider as NextThemesProvider } from 'next-themes';

import Layout from '../components/Layout'
import '../styles/globals.css'
import { darkTheme, lightTheme } from '../utils/themes';

function MyApp({ Component, pageProps }) {
  const [session, setSession] = useState();
  const [isDark, setIsDark] = useState(false);
  console.log("isDarkTheme", isDark)

  return (
    <AppContext.Provider value={{ session, setSession, isDark, setIsDark }}>
      <NextThemesProvider
        defaultTheme='system'
        attribute='class'
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}>
        <NextUIProvider>
          <Layout>
            <Component {...pageProps} />  
          </Layout>
        </NextUIProvider>
      </NextThemesProvider>
    </AppContext.Provider>
  )
}

export default MyApp
