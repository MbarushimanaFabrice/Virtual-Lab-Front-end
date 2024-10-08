import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Routing from "./Routing";


const navigation = [
  { name: "Dashboard", href: "/Dashboard", current: true },
  { name: "Laboratory", href: "/Dashboard/Laboratory ", current: false },
  { name: "Ask Ai", href: "/Dashboard/Ai", current: false },
  { name: "My Learning", href: "/Dashboard/Learning", current: false },
  { name: "Schoolmate", href: "/Dashboard/schoolmate", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Dashboard() {
  return (
    <>
      <Disclosure as="nav" className=" mb-96 bg-gray-700 fixed w-full z-50 ">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center ">
                    <Link to="/Dashboard">
                    <img
                      className="h-8 w-auto"
                      src="../vl.png"
                      alt="Virtual Lab Logo"
                    />
                    </Link>
                  </div>
                  <div className="hidden sm:ml-6 sm:block">
                    <Link
                      to="/Dashboard"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-800 hover:text-white"
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/Dashboard/Laboratory "
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-800 hover:text-white"
                    >
                      Laboratory 
                    </Link>
                    <Link
                      to="/Dashboard/Ai"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-800 hover:text-white"
                    >
                      Ask AI
                    </Link>
                    <Link
                      to="/Dashboard/Learning"
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-800 hover:text-white"
                    >
                      My learing
                    </Link>
                    <Link
                      to="/Dashboard/schoolmate "
                      className="rounded-md px-3 py-2 text-sm font-medium text-gray-100 hover:bg-gray-800 hover:text-white"
                    >
                      Schoolmate 
                    </Link>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0  flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <Menu as="div" className="relative ml-3">
                    <div className="  text-white bg-slate-800 rounded-full p-1">
                      <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                          />
                        </svg>
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                      to="/Dashboard/profile "
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >Your Profile</Link>
                          )}
                        </Menu.Item>
                        {/* <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </a>
                          )}
                        </Menu.Item> */}
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

     <Routing/>
    </>
  );
}
