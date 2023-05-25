'use client'

import fastify from '../assets/fastify.svg'
import git from '../assets/git.svg'
import jest from '../assets/jest.svg'
import knex from '../assets/knex.svg'
import mongodb from '../assets/mongodb.svg'
import nest from '../assets/nest-js.svg'
import next from '../assets/next-js.svg'
import node from '../assets/node.svg'
import postgresql from '../assets/postgresql.svg'
import prisma from '../assets/prisma.svg'
import redis from '../assets/redis.svg'
import redux from '../assets/redux.svg'
import sequelize from '../assets/sequelize.svg'
import storybook from '../assets/storybook.svg'
import styledComponents from '../assets/styled-components.svg'
import tailwind from '../assets/tailwind.svg'
import typescript from '../assets/typescript.svg'
import vitest from '../assets/vitest.svg'
import reactNative from '../assets/react-native.svg'
import reactJs from '../assets/react-js.svg'

import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { A11y, Navigation, Autoplay } from 'swiper'
import { Swiper as SwiperCore } from 'swiper/types'
import 'swiper/css'
import 'swiper/css/navigation'
import { useRef } from 'react'
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'

export function SwiperStacks() {
  const stacks = [
    {
      name: 'Typescript',
      icon: typescript,
    },
    {
      name: 'Next',
      icon: next,
    },
    {
      name: 'React Js',
      icon: reactJs,
    },
    {
      name: 'React Native',
      icon: reactNative,
    },
    {
      name: 'Tailwind',
      icon: tailwind,
    },
    {
      name: 'Styled Components',
      icon: styledComponents,
    },
    {
      name: 'Redux',
      icon: redux,
    },
    {
      name: 'Storybook',
      icon: storybook,
    },
    {
      name: 'Node.js',
      icon: node,
    },
    {
      name: 'Nest',
      icon: nest,
    },
    {
      name: 'Fastify',
      icon: fastify,
    },
    {
      name: 'Vitest',
      icon: vitest,
    },
    {
      name: 'Jest',
      icon: jest,
    },
    {
      name: 'Git',
      icon: git,
    },
    {
      name: 'Prisma',
      icon: prisma,
    },
    {
      name: 'Sequelize',
      icon: sequelize,
    },
    {
      name: 'Knex',
      icon: knex,
    },
    {
      name: 'Mongodb',
      icon: mongodb,
    },
    {
      name: 'Postgresql',
      icon: postgresql,
    },
    {
      name: 'Redis',
      icon: redis,
    },
  ]

  const swiperRef = useRef<SwiperCore>()

  return (
    <Swiper
      onBeforeInit={(swiper) => {
        swiperRef.current = swiper
      }}
      modules={[Navigation, A11y, Autoplay]}
      // navigation={{
      //   nextEl: ,
      //   prevEl: '.image-swiper-button-prev',
      //   disabledClass: 'swiper-button-disabled',
      // }}
      slidesPerView={7}
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 1000 }}
      speed={2500}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      {stacks.map((stack) => (
        <SwiperSlide key={stack.name}>
          <figure className="flex flex-col items-center justify-center gap-2 ">
            <Image
              className="h-14 w-16"
              src={stack.icon}
              alt=""
              width={130}
              height={130}
              quality={60}
            />
            <figcaption className="text-xs font-medium text-gray-600">
              {stack.name}
            </figcaption>
          </figure>
        </SwiperSlide>
      ))}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute top-6 z-10"
      >
        <ArrowLeftCircle className="text-purple-600" />
      </button>
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-0 top-6 z-10"
      >
        <ArrowRightCircle className="text-purple-600" />
      </button>
    </Swiper>
  )
}
