import { Card } from '@/components/Card'
import { NavBar } from '@/components/NavBar'
import { SwiperStacks } from '@/components/SwiperStacks'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default async function ProjectsPage() {
  const { data } = await fetch(process.env.API_URL!, {
    method: 'POST',
    body: JSON.stringify({
      query:
        '{ projects(){ id title slug description imageUrl demoUrl repoUrl stacks{ id title }} }',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
    next: {
      revalidate: 60 * 60,
    },
  }).then((res) => res.json())

  return (
    <div>
      <NavBar />
      <div className="container mx-auto mb-10 mt-14 p-4">
        <h2 className="text-3xl font-bold dark:text-gray-300 sm:text-4xl">
          Projetos
        </h2>
        <span className="text-sm font-medium text-gray-500">
          Alguns dos meus projetos.
        </span>

        <div className="mt-7 h-1 w-full bg-gray-300 dark:bg-gray-500" />

        <div className="mt-10 dark:rounded dark:bg-gray-900 dark:px-4 dark:py-2">
          <h3 className="mb-3 text-gray-500">Principais tecnologias:</h3>

          <SwiperStacks />
        </div>

        <div className="mt-24 grid items-center gap-10 sm:grid-cols-1 md:grid-cols-2">
          {data.projects.map((project: any) => (
            <Card key={project.id} data={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
