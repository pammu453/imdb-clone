"use client"

import { useTheme } from "next-themes"
import { MdLightMode } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useEffect, useState } from "react";

const DarkModeSwitch = () => {
  const { theme, setTheme } = useTheme()

  //for preventing hydration error
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const themeHandler = () => {
    if (theme === "dark") {
      setTheme("light")
    } else {
      setTheme("dark")
    }
  }

  return (
    <>
      <button onClick={themeHandler}>{isClient && theme == "dark" ? <MdLightMode /> : <FaMoon />}</button>
    </>
  )
}

export default DarkModeSwitch
