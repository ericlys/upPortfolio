import Balancer from 'react-wrap-balancer'
import Particles from '@/components/Particle'
import { Underline } from '@/components/Underline'
import Link from 'next/link'

const navigation = [
  { name: 'Projetos', href: '/projects' },
  { name: 'Contato', href: '/contact' },
]

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center">
      <Particles className="absolute inset-0 z-0" quantity={100} />

      <main className="container relative z-10 flex flex-col items-center justify-center">
        <nav className="z-10 my-16">
          <ul className="flex items-center justify-center gap-8">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} legacyBehavior>
                  <a className="text-base text-gray-600 hover:text-purple-700">
                    {item.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <h1 className="max-w-4xl text-4xl font-bold leading-[1.1]">
          <Balancer>
            Programador &nbsp;
            <span className="relative">
              Full Stack, &nbsp;
              <div className="absolute right-10 top-9">
                <Underline />
              </div>
            </span>
            especializado em React.js, React Native e Node.js.
          </Balancer>
        </h1>

        <div className="mt-16">
          <h2 className="text-center text-gray-500">
            <Balancer>
              Olá, sou Ericlys, um desenvolvedor apaixonado por criar
              experiências digitais inovadoras e funcionais. Minha missão é unir
              criatividade e habilidades técnicas para fornecer soluções que
              encantem usuários e impulsionem o sucesso dos projetos.
            </Balancer>
          </h2>
        </div>
      </main>
    </div>
  )
}
