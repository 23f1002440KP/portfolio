
"use client"

import React, { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

export function InteractiveBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [isThemeLoaded, setIsThemeLoaded] = useState(false)

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    updateDimensions() // Initialize dimensions
    window.addEventListener("resize", updateDimensions)

    return () => {
      window.removeEventListener("resize", updateDimensions)
    }
  }, [])

  useEffect(() => {
    setIsThemeLoaded(true) // Theme is now loaded
  }, [theme])

  useEffect(() => {
    if (!isThemeLoaded) return // Prevent running before theme is loaded

    const moveBackground = (e: MouseEvent) => {
      if (backgroundRef.current) {
        const { width, height } = dimensions
        const x = e.clientX / width
        const y = e.clientY / height

        // Calculate hue based on mouse position (0-360)
        const hue = (x * 360) % 360

        const gradient = `
          radial-gradient(
            600px at ${x * 100}% ${y * 100}%,
            hsla(${hue}, 100%, ${theme === "dark" ? "30%" : "50%"}, 0.3),
            transparent 80%
          ),
          radial-gradient(
            800px at ${100 - x * 100}% ${100 - y * 100}%,
            hsla(${(hue + 60) % 360}, 100%, ${theme === "dark" ? "30%" : "50%"}, 0.3),
            transparent 80%
          )
        `

        backgroundRef.current.style.background = gradient
        backgroundRef.current.style.transition = "background 0.3s ease-in-out" // Smooth transitions
      }
    }

    window.addEventListener("mousemove", moveBackground)

    return () => {
      window.removeEventListener("mousemove", moveBackground)
    }
  }, [theme, dimensions, isThemeLoaded])

  if (!isThemeLoaded) return null // Prevent hydration mismatches

  return (
    <div
      ref={backgroundRef}
      className={`fixed inset-0 z-0 ${theme === "dark" ? "bg-gray-900" : "bg-gray-200"}`}
    ></div>
  )
}
