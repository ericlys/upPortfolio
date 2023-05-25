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
          ? 'text-white duration-200 '
          : 'text-gray-400 hover:text-gray-100'
      } 
      `}
    >
      {children}
    </Link>
  )
}
