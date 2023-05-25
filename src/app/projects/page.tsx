import { NavBar } from '@/components/NavBar'
import { SwiperStacks } from '@/components/SwiperStacks'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

export default function ProjectsPage() {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto mt-14 p-4">
        <h2 className="text-3xl font-bold sm:text-4xl">Projetos</h2>
        <span className="text-sm font-medium text-gray-500">
          Alguns dos meus projetos.
        </span>

        <div className="mt-7 h-1 w-full bg-gray-300" />

        <div className="mt-10">
          <h3 className="mb-3 text-gray-500">Principais tecnologias:</h3>

          <SwiperStacks />
        </div>
      </div>
    </div>
  )
}
