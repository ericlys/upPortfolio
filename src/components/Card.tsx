'use client'

import { Github, Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

interface CardProps {
  data: {
    title: string
    slug: string
    description: string
    imageUrl: string
    demoUrl: string
    repoUrl: string
    stacks: {
      id: string
      title: string
    }[]
  }
}

interface StackColorProps {
  [key: string]: string
}

export function Card({
  data: { title, imageUrl, description, stacks, demoUrl, repoUrl },
}: CardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const stackColors: StackColorProps = {
    'React Native': 'bg-purple-800',
    PostgreSQL: 'bg-blue-900',
    'Node.js': 'bg-green-600',
    Typescript: 'bg-blue-500',
    'React.js': 'bg-sky-600',
    'Tailwind CSS': 'bg-teal-500',
    GraphQL: 'bg-pink-500',
    Docker: 'bg-blue-800',
    'Next.js': 'bg-gray-800',
    NestJS: 'bg-rose-600',
    Redis: 'bg-red-600',
    Jest: 'bg-orange-600',
    Vitest: 'bg-amber-400',
    'Styled Components': 'bg-yellow-500',
    Redux: 'bg-violet-700',
    Storybook: 'bg-red-500',
    Fastify: 'bg-neutral-800',
    Prisma: 'bg-cyan-800',
    Sequelize: 'bg-blue-600',
    Knex: 'bg-amber-600',
    Mongodb: 'bg-emerald-600',
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      className="relative h-72 overflow-hidden rounded-lg bg-slate-800"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={imageUrl}
        alt="imagem do projeto"
        fill
        style={{ objectFit: 'cover' }}
      />
      <div
        className={`absolute top-[220px] h-56 w-full rounded-t-lg bg-white p-4 duration-200 ${
          isHovered ? '-translate-y-28' : ''
        }`}
      >
        <h3 className="text-lg font-bold text-gray-600">{title}</h3>
        <ul className="ml-2 flex items-center gap-1">
          {stacks.map((stack) => (
            <li
              key={stack.id}
              className={`justify-center truncate rounded-xl px-2 text-center text-xs font-semibold text-gray-200 ${
                stackColors[stack.title] ?? 'bg-blue-500'
              }`}
            >
              {stack.title}
            </li>
          ))}
        </ul>
        <p className="m-2 text-sm font-normal text-gray-600 truncate-3-lines">
          {description}
        </p>

        <div className="end-1 flex justify-end gap-2">
          <Link href={repoUrl} target="_blank">
            <button className="flex items-center gap-1 rounded-sm border-2 border-gray-600 px-1 text-xs font-bold text-gray-700 duration-150 hover:scale-110">
              <Github width={10} />
              Repositório
            </button>
          </Link>
          {demoUrl && (
            <Link href={demoUrl} target="_blank">
              <button className="flex items-center gap-1 rounded-sm border-2 border-gray-600 px-1 text-xs font-bold text-gray-700 duration-150 hover:scale-110">
                <Play width={10} />
                Demo
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}
