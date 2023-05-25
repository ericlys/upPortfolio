import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { ActiveLink } from './ActiveLink'

export function NavBar() {
  return (
    <header className="bg-purple-950">
      <div className="container m-auto flex flex-row justify-between p-4">
        <Link href="/" className="">
          <ArrowLeft className="h-6 w-6 text-white hover:text-purple-200" />
        </Link>

        <div className="flex justify-between gap-6">
          <ActiveLink href="/projects">Projetos</ActiveLink>
          <ActiveLink href="/contact">Contato</ActiveLink>
        </div>

        <div className="w-6" />
      </div>
    </header>
  )
}
