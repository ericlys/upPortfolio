'use client'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface ActiveLinkProps extends LinkProps {
  children: ReactNode
}

export function ActiveLink({ children, ...rest }: ActiveLinkProps) {
  const path = usePathname()

  const active = path === rest.href

  return (
    <Link
      {...rest}
      className={`${
        active
          ? 'font-medium text-violet-600 duration-200 dark:text-purple-500'
          : 'text-gray-400 hover:text-violet-600 dark:hover:text-purple-500'
      } 
      `}
    >
      {children}
    </Link>
  )
}
