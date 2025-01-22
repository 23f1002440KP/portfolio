"use client"

import React, { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export function InteractiveBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const moveBackground = (e: MouseEvent) => {
      if (backgroundRef.current) {
        const x = e.clientX / window.innerWidth
        const y = e.clientY / window.innerHeight

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
      }
    }

    window.addEventListener("mousemove", moveBackground)

    return () => {
      window.removeEventListener("mousemove", moveBackground)
    }
  }, [theme])

  return (
    <div
      ref={backgroundRef}
      className={`fixed inset-0 transition duration-300 ease-in-out z-0 ${
        theme === "dark" ? "bg-gray-900" : "bg-gray-200"
      }`}
    />
  )
}

