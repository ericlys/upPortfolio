'use client'

import { useTheme } from '@wits/next-themes'
import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'

const ThemeSwitch = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, systemTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <div className="absolute right-0 top-0 flex gap-2">
      <select
        className="rounded-xl bg-gray-200 text-sm font-bold dark:bg-gray-900"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>

      {currentTheme === 'dark' ? (
        <Sun
          className="cursor-pointer fill-yellow-500 text-yellow-500"
          onClick={() => setTheme('light')}
        />
      ) : (
        <Moon
          className="cursor-pointer fill-gray-500 text-gray-500"
          onClick={() => setTheme('dark')}
        />
      )}
    </div>
  )
}

export default ThemeSwitch
