import Link from 'next/link';

import { SignInButton } from './buttons';
import { ThemeToggle } from './theme-toggle';

const NavbarLanding = () => {
    return (
        <nav className="fixed z-10 w-full border-gray-200 bg-white font-sans dark:bg-background	">
            <div className=" mx-10 flex flex-wrap items-center justify-between p-4">
                <Link href="/" className="flex items-center">
                    <span className="self-center whitespace-nowrap text-4xl font-bold  text-black dark:text-white">
                        neboo<span className="text-base ">/alpha</span>
                    </span>
                </Link>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="ml-3 inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="h-6 w-6"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul className="mt-4  flex flex-col items-center rounded-lg border border-gray-100 bg-gray-50 p-4 font-semibold tracking-tight dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900">
                        <li>
                            <Link
                                href={'/'}
                                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <a
                                href="https://neboo.co/blog"
                                target="_blank"
                                rel="noreferrer"
                                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <Link
                                href={'/contacts'}
                                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                            >
                                Contacts
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/kanban'}
                                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                            >
                                My Board
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={'/jobs'}
                                className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:border-0 md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                            >
                                Job Search
                            </Link>
                        </li>
                        <li>
                            <SignInButton />
                        </li>
                        <li className="pl-10">
                            <ThemeToggle />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarLanding;
