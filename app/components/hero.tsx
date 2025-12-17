'use client'

import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { useState } from 'react'
import profileImage from '../../public/profile.jpg'


const navigation = [
  { name: 'About me', href: '#' },
  { name: 'Blog posts', href: '#' },
  { name: 'Contact Me', href: '#' },
]
const techStack = [
  { name: 'Java', color: 'bg-blue-500' },
  { name: 'Node.Js', color: 'bg-black' },
  { name: 'TypeScript', color: 'bg-blue-600' },
  { name: 'Tailwind', color: 'bg-cyan-500' },
  { name: 'Node.js', color: 'bg-green-600' },
  { name: 'GraphQL', color: 'bg-pink-500' }
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Leonardo Palmeiro</span>
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto dark:hidden"
              />
              <img
                alt=""
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto not-dark:hidden"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 dark:text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900 dark:text-white">
                {item.name}
              </a>
            ))}
          </div>

        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-gray-900 dark:sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Leonardo Palmeiro</span>
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto dark:hidden"
                />
                <img
                  alt=""
                  src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                  className="h-8 w-auto not-dark:hidden"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10 dark:divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 dark:text-white dark:hover:bg-white/5"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>


      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">


            <div className="grid md:grid-cols-2 gap-4 items-center">
              {/* Left Side - Text Content */}

              <div className="text-left space-y-6 mt-45 text-white">
                <div className="space-y-2">
                  <h2 className="text-5xl md:text-7xl font-bold text-white">
                    I'm Leo
                  </h2>
                  <h2 className="text-2xl font-bold text-white leading-tight">

                    <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-500">
                      Senior Software Engineer
                    </span>
                  </h2>
                </div>

                <div className="h-1 w-24 bg-gradient-to-r from-blue-400 to-cyan-600 rounded-full"></div>
              </div>

              {/* Right Side - Profile Image */}
              <div className="flex justify-center md:justify-end">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                  <div className="relative">
                    <Image
                      src={profileImage}
                      alt="Leonardo Palmeiro profile image"
                      className="rounded-2xl w-80 h-80 object-cover shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl mt-12">
              Passionate about crafting exceptional digital experiences through clean code and innovative solutions.
              I specialize in building scalable web applications with modern technologies,
              focusing on performance, user experience, and maintainable architecture.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                View Projects
              </button>
              <button className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm border border-white/20">
                Get in Touch
              </button>
            </div>

            {/* Tech Stack Icons */}
            <div className="pt-8">
              <p className="text-sm text-gray-400 mb-4 uppercase tracking-wider">Favorite Tech Stack</p>
              <div className="flex flex-wrap gap-3">
                {techStack.map((tech) => (
                  <div
                    key={tech.name}
                    className="group relative"
                  >
                    <div className={`${tech.color} px-4 py-2 rounded-lg text-white text-sm font-medium shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl`}>
                      {tech.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
