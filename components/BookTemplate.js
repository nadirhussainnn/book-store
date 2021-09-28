import Link from 'next/link'

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ClockIcon,
  CogIcon,
  CreditCardIcon,
  DocumentReportIcon,
  QuestionMarkCircleIcon,
  ScaleIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/react/outline";

const navigation = [
    { name: "New", href: "#", icon: ClockIcon, current: false },
    { name: "Popular", href: "#", icon: DocumentReportIcon, current: false },
    { name: "Expensive", href: "#", icon: ScaleIcon, current: false },
    { name: "Cheap", href: "#", icon: CreditCardIcon, current: false },
    { name: "English", href: "#", icon: UserGroupIcon, current: false },
    { name: "Urdu", href: "#", icon: DocumentReportIcon, current: false },
  ];
  
  const secondaryNavigation = [
    { name: "Settings", href: "#", icon: CogIcon },
    { name: "Help", href: "#", icon: QuestionMarkCircleIcon },
    { name: "Privacy", href: "#", icon: ShieldCheckIcon },
  ];
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  
export default function Store(props) {
    
    const [sidebarOpen, setSidebarOpen] = useState(false);
    
    return (
      <div className="relative flex bg-gray-100">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog
            as="div"
            className="fixed inset-0 flex z-40 lg:hidden"
            onClose={setSidebarOpen}
          >
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <div className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute top-0 right-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <div className="flex-shrink-0 flex items-center px-4">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg"
                    alt="Easywire logo"
                  />
                </div>
                <nav
                  className="mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto"
                  aria-label="Sidebar"
                >
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
  
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "bg-cyan-800 text-white"
                            : "text-cyan-100 hover:text-white hover:bg-cyan-600",
                          "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        <item.icon
                          className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 pt-6">
                    <div className="px-2 space-y-1">
                      {secondaryNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600"
                        >
                          <item.icon
                            className="mr-4 h-6 w-6 text-cyan-200"
                            aria-hidden="true"
                          />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>
              </div>
            </Transition.Child>
            <div className="flex-shrink-0 w-14" aria-hidden="true"></div>
          </Dialog>
        </Transition.Root>
  
        {/* Static sidebar for desktop */}
        <div className="hidden lg:flex lg:flex-shrink-0">
          <div className="flex flex-col w-64">
            {/* Sidebar component, swap this element with another sidebar if you like */}
            <div className="flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <Link href="/">
                <a>
                <img
                  className="h-20 w-auto"
                  src="icon.png"
                  alt="Easywire logo"
                />
                </a>
                </Link>
              </div>
              <nav
                className="mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto"
                aria-label="Sidebar"
              >
                <div className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-cyan-800"
                          : "text-cyan-100 hover:bg-white hover:bg-cyan-600",
                        "group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      <item.icon
                        className="mr-4 flex-shrink-0 h-6 w-6 text-cyan-200"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div>
                <div className="mt-6 pt-6">
                  <div className="px-2 space-y-1">
                    {secondaryNavigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:bg-white hover:bg-cyan-600"
                      >
                        <item.icon
                          className="mr-4 h-6 w-6 text-cyan-200"
                          aria-hidden="true"
                        />
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
  
          <div className="flex flex-wrap mt-10 mb-20">
            {
              props.books.items.map(item=>{
  
  
            return <div key={item.id} className="grid-cols-4 border ml-16 mt-4 bg-white shadow shadow-lg" style={{maxWidth:'500px'}}>
              
  <div class="flex">
    <div class="flex-none w-48 relative">
      <img src={item.volumeInfo.imageLinks.smallThumbnail} alt="" class="absolute inset-0 w-full h-full object-cover" />
    </div>
    <form class="flex-auto p-6">
      <div class="flex flex-wrap">
        <h1 class="flex-auto text-xl font-semibold">
          {item.volumeInfo.title}
        </h1>
        <div class="text-xl font-semibold text-gray-500">
          {item.volumeInfo.publishedDate}
        </div>
        <div class="w-full flex-none text-sm font-medium text-gray-500 mt-2">
          {item.saleInfo.saleability}
        </div>
      </div>
      <div class="flex items-baseline mt-4 mb-6">
        
        <div class="ml-auto text-sm text-gray-500 underline"><a href={item.volumeInfo.infoLink}>More Details</a></div>
      </div>
      <div class="flex space-x-3 mb-4 text-sm font-medium">
        <div class="flex-auto flex space-x-3">
          <button class="w-1/2 flex items-center justify-center rounded-md bg-black text-white" type="submit"><a href={item.volumeInfo.infoLink}>Purchase Now</a></button>
          <button class="w-1/2 flex items-center justify-center rounded-md border border-gray-300" type="button">Add to bag</button>
        </div>
        <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-400 border border-gray-300" type="button" aria-label="like">
          <svg width="20" height="20" fill="currentColor">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
          </svg>
        </button>
      </div>
      <p class="text-sm text-gray-500">
                {item.volumeInfo.publisher}
      </p>
    </form>
  </div>
            </div>
                        })
                      }
        </div>
      </div>
    );
  }
  