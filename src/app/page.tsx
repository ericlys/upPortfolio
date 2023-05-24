import Balancer from 'react-wrap-balancer'
import Particles from '@/components/Particle'
import { Underline } from '@/components/Underline'

export default function Home() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center overflow-hidden">
      <Particles className="absolute inset-0" quantity={100} />

      <main>
        <h1 className="max-w-4xl text-center text-4xl font-bold leading-[1.1]">
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

        <div className="mt-4">
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
