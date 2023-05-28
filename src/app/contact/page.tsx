import { NavBar } from '@/components/NavBar'
import { FileDown, Github, Linkedin, Mail, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function ContactPage() {
  const emailAddress = 'ericlysm@gmail.com'

  return (
    <div>
      <NavBar />
      <div className="container mx-auto mb-10 mt-14 p-4">
        <h2 className="text-3xl font-bold dark:text-gray-300 sm:text-4xl">
          Sobre mim
        </h2>

        <div className="mt-12 flex flex-row items-center justify-center gap-16 rounded-3xl bg-slate-300 p-6 dark:bg-slate-900">
          <div>
            <p className="flex  max-w-2xl flex-1 text-justify text-sm font-medium text-gray-600 dark:text-gray-400">
              Olá, tudo bem? Meu nome é Ericlys e sou um desenvolvedor
              freelancer. Tenho ampla experiência no desenvolvimento de
              aplicações web, especialmente utilizando as tecnologias
              Javascript, como ReactJs, Node.js, Next e Nest, entre outras,
              juntamente com todo o ecossistema relacionado a essas tecnologias.
            </p>
            <p className="flex  max-w-2xl flex-1 text-justify text-sm font-medium text-gray-600 dark:text-gray-400">
              O que me destaca é meu compromisso em desenvolver as aplicações de
              acordo com as especificações propostas, priorizando o desempenho e
              a criação de funcionalidades que cativem os usuários. Estou sempre
              atento às tendências do mercado e em constante evolução, buscando
              aprimorar minhas habilidades e conhecimentos.
            </p>
            <p className="flex  max-w-2xl flex-1 text-justify text-sm font-medium text-gray-600 dark:text-gray-400">
              Se você está em busca de um desenvolvedor que entregue resultados
              de qualidade, aliando criatividade, desempenho e satisfação do
              usuário, estou à disposição para colaborar em seu projeto.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href={'https://www.linkedin.com/in/ericlys-moreira/'}
                className="flex justify-center gap-2 rounded bg-blue-700 p-2 font-bold text-white hover:scale-105 dark:text-gray-300"
              >
                <Linkedin color="white" size={19} />
                Linked
              </Link>

              <Link
                href={'https://github.com/ericlys'}
                className="flex justify-center gap-2 rounded bg-gray-700 p-2 font-bold text-white hover:scale-105 dark:text-gray-300"
              >
                <Github color="white" size={19} />
                Github
              </Link>

              <Link
                href={'https://api.whatsapp.com/send?phone=5583982057582'}
                className="flex items-center justify-center gap-2 rounded bg-green-700 p-2 font-bold text-white hover:scale-105 dark:text-gray-300"
              >
                <MessageCircle color="white" size={19} />
                Whatsapp
              </Link>

              <Link
                href={`mailto:${emailAddress}`}
                className="flex items-center justify-center gap-2 rounded bg-purple-700 p-2 font-bold text-white hover:scale-105 dark:text-gray-300"
              >
                <Mail color="white" size={19} />
                ericlysm@gmail.com
              </Link>

              <Link
                href={'/downloads/curriculo.pdf'}
                target="_blank"
                download
                className="flex items-center justify-center gap-2 rounded bg-red-700 p-2 font-bold text-white hover:scale-105 dark:text-gray-300"
              >
                <FileDown color="white" size={19} />
                Currículo
              </Link>
            </div>
          </div>
          <div className="relative h-80 w-80 p-2">
            <Image
              className="rounded-s-3xl"
              src="https://github.com/ericlys.png"
              alt="imagem do projeto"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
