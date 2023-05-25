import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { ActiveLink } from './ActiveLink'

export function NavBar() {
  return (
    <header className="">
      <div className="m-auto flex flex-row justify-between border-b-2 border-b-violet-600 px-16 py-6">
        <Link href="/" className="">
          <ArrowLeft className="h-6 w-6 text-violet-700 hover:text-violet-900" />
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
