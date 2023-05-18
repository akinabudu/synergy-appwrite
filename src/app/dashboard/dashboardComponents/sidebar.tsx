import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Sidebar = () => {
  return (
    <aside
      id="logo-sidebar"
      className={`block md:hidden  h-screen pt-20 transition-transform -translate-x-full bg-transparent  sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div className=" top-0 left-5 h-full w-fit pt-5 px-3 pb-4  overflow-y-auto text-white bg-primary rounded-tr-lg dark:bg-gray-800">
        <div className="flex flex-col justify-center items-center gap-2 my-5">
          {/* <Image
            className="w-10 h-10 rounded-full border border-primary"
            src="/docs/images/people/profile-picture-5.jpg"
            alt="Rounded avatar"
            width={10}
            height={10}
          /> */}
          {/* <div className="flex flex-col justify-center items-center"> */}
          <div className="text-center text-3xl">Synergy </div>
          {/* </div> */}
        </div>
        <ul className="space-y-2 font-medium text-white ">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-2  rounded-lg dark:text-white group hover:bg-primary-dark hover:text-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3 whitespace-nowrap">My Account</span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/#"
              className="flex items-center p-2  rounded-lg dark:text-white group hover:bg-primary-dark hover:text-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Savings</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/#"
              className="flex items-center p-2  rounded-lg dark:text-white group hover:bg-primary-dark hover:text-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Loans</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/#"
              className="flex items-center p-2  rounded-lg dark:text-white group hover:bg-primary-dark hover:text-gray-00 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Investment</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/#"
              className="flex items-center p-2  rounded-lg dark:text-white group hover:bg-primary-dark hover:text-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export const Sidebar2 = () => {
  return (
    <aside
      id="logo-sidebar"
      className={`hidden md:block md:w-1/5 h-screen p-5 transition-transform -translate-x-full bg-transparent  sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
      aria-label="Sidebar"
    >
      <div className="  h-full w-fit pt-5 px-3 pb-4  overflow-y-auto text-white bg-gray-dark rounded-tr-lg dark:bg-gray-800">
        <div className="flex justify-center items-center gap-2 mb-10">
          {/* <Image
              className="w-10 h-10 rounded-full border border-primary"
              src="/docs/images/people/profile-picture-5.jpg"
              alt="Rounded avatar"
              width={10}
              height={10}
            /> */}
          <div className="text-center text-3xl font-bold">Synergy </div>
        </div>
        <ul className="space-y-2 font-medium text-white ">
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-2  rounded-lg dark:text-white group hover:bg-primary-dark hover:text-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3 whitespace-nowrap">My Account</span>
            </Link>
          </li>

          <li>
            <Link
              href="/dashboard/#"
              className="flex items-center p-2  rounded-lg dark:text-white group hover:bg-primary-dark hover:text-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Savings</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/#"
              className="flex items-center p-2  rounded-lg dark:text-white group hover:bg-primary-dark hover:text-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Loans</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/#"
              className="flex items-center p-2  rounded-lg dark:text-white group hover:bg-primary-dark hover:text-gray-00 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Investment</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/#"
              className="flex items-center p-2  rounded-lg dark:text-white group hover:bg-primary-dark hover:text-gray-100 dark:hover:bg-gray-700"
            >
              <svg
                aria-hidden="true"
                className="flex-shrink-0 w-6 h-6 text-white transition duration-75 dark:text-gray-400 group-hover:text-gray-100 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">Profile</span>
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
};
