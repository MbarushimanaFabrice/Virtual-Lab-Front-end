import React from "react";
import { Link } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from "react";
function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      offset: 200,
      delay: 200,
    });
  }, []);

  return (
    <>
      {/* Home page */}
      <div className="homepage w-full h-[100vh]">
        {/* Navigation bar */}

        <nav className="bg-white border-gray-200 dark:bg-gray-700 fixed w-full z-50">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <Link to="Home" spy={true} smooth={true}>
              <a className=" cursor-pointer flex items-center space-x-3 rtl:space-x-reverse">
                <img src="vl.png" className="h-8" alt="Flowbite Logo" />
              </a>
            </Link>

            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <a href="/Login">
                <button
                  type="button"
                  className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
                >
                  Join
                </button>
              </a>

              <button
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className=" items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                <Link
                  className=" cursor-pointer block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="Home"
                  spy={true}
                  smooth={true}
                >
                  Home
                </Link>

                <Link
                  className=" cursor-pointer block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="SERVICES"
                  spy={true}
                  smooth={true}
                >
                  Services
                </Link>

                <Link
                  className=" cursor-pointer block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="Mission"
                  spy={true}
                  smooth={true}
                >
                  Mission
                </Link>

                <Link
                  className=" cursor-pointer block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="PARTNERS"
                  spy={true}
                  smooth={true}
                >
                  Parteners
                </Link>

                <Link
                  className=" cursor-pointer block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="Location"
                  spy={true}
                  smooth={true}
                >
                  Location
                </Link>

                <Link
                  className=" cursor-pointer block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-orange-700 md:dark:hover:text-orange-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  to="Contact"
                  spy={true}
                  smooth={true}
                >
                  Contact
                </Link>
              </ul>
            </div>
          </div>
        </nav>

        {/* Description */}

        <div
          data-aos="fade-up"
          id="Home"
          className=" flex justify-center  items-center flex-col align-middle text-center h-full"
        >
          <h1 className=" text-5xl font-bold text-white">
            WELCOME TO VIRTUAL LABORATORY!
          </h1>
          {/* <h1 className=" text-5xl font-bold text-white">
            WELCOME TO VIRTUAL Library!
          </h1> */}
          <p className=" text-2xl  font-bold  text-slate-100  mt-4 mb-5">
            Use modern artificial intelligence to study
          </p>
          <a href="/Login">
            <button
              type="button"
              className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-9 py-4 text-center inline-flex items-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800"
            >
              JOIN COMMUNITY
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </button>
          </a>
        </div>
      </div>

      <p id="SERVICES" className=" mb-20"></p>
      {/* Service section */}

      <h3
        data-aos="fade-up"
        className=" text-4xl font-bold text-center mt-5 mb-5"
      >
        SERVICES
      </h3>

      <div
        data-aos="fade-up"
        className=" flex flex-col lg:flex-row justify-center items-center gap-10"
      >
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <div
            className="
               p-10 md:px-7 xl:px-10  rounded-[20px]  bg-white shadow-md hover:shadow-lg mb-8"
          >
            <div className="w-[70px]h-[70px] flex items-center justify-center  bg-primary rounded-2xl mb-8 ">
              <img lassName=" w-48" src="Labicon.png" alt="" srcset="" />
            </div>
            <h4 className="font-semibold text-2xl text-dark mb-3 text-slate-600 ">
              Virtal laboratory
            </h4>
            <p className="text-body-color">
              We dejoy working with discerning clients, people for whom qualuty,
              service, integrity & aesthetics.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <div
            className="
               p-10 md:px-7 xl:px-10  rounded-[20px]  bg-white shadow-md hover:shadow-lg mb-8"
          >
            <div className="w-[70px]h-[70px] flex items-center justify-center  bg-primary rounded-2xl mb-8 ">
              <img className=" w-48" src="aiIcon.png" alt="" srcset="" />
            </div>
            <h4 className="font-semibold text-2xl text-dark mb-3 text-slate-600 ">
              Learn With AI
            </h4>
            <p className="text-body-color">
              We dejoy working with discerning clients, people for whom qualuty,
              service, integrity & aesthetics.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 px-4">
          <div
            className="
               p-10 md:px-7 xl:px-10  rounded-[20px]  bg-white shadow-md hover:shadow-lg mb-8"
          >
            <div className="w-[70px]h-[70px] flex items-center justify-center  bg-primary rounded-2xl mb-8 ">
              <img lassName=" w-42" src="idea.png" alt="" srcset="" />
            </div>
            <h4 className="font-semibold text-2xl text-dark mb-3 text-slate-600 ">
              Daily Questions and answers
            </h4>
            <p className="text-body-color">
              We dejoy working with discerning clients, people for whom qualuty,
              service, integrity & aesthetics.
            </p>
          </div>
        </div>
      </div>
      <p id="Mission" className="mb-20"></p>
      <h3
        data-aos="fade-up"
        className=" text-4xl font-bold text-center mt-5 mb-5"
      >
        Our Mission
      </h3>
      <section
        data-aos="fade-up"
        id="Mission"
        className="flex items-center bg-stone-50 xl:h-screen font-poppins  dark:bg-gray-50 "
      >
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="lg:max-w-md">
                <img
                  src="download.jpg"
                  alt="aboutimage"
                  className=" z-0 object-cover w-full rounded h-96"
                />
              </div>
            </div>
            <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="pl-4 mb-6 border-l-4 border-gray-500 ">
                <h2 className="mt-2  text-3xl font-black text-orange-600 md:text-5xl dark:text-orange-600">
                  Our Mission{" "}
                </h2>
              </div>
              <p className="mb-6 leading-7  dark:text-gray-700  text-xl">
                Our mission is to revolutionize the educational experience for
                students by providing a comprehensive virtual laboratory and
                library platform powered by cutting-edge AI technology. We aim
                to empower students with immersive learning experiences,
                seamless interaction, and intelligent search capabilities,
                fostering curiosity, creativity, and critical thinking. Through
                our innovative platform, we strive to make learning more
                accessible, engaging, and personalized, ultimately shaping the
                future of education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR PARTNERS */}
      <p id="PARTNERS" className=" mb-20"></p>
      <h3
        data-aos="fade-up"
        className=" text-4xl font-bold text-center mt-5 mb-5"
      >
        OUR PARTNERS
      </h3>

      <div
        data-aos="fade-up"
        className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center place-items-center m-10"
      >
        <div className=" relative w-72 h-60 shadow-2xl flex rounded-lg text-center items-center justify-center">
          <img
            className="w-[80%] h-fit "
            src="../Coat_of_arms_of_Rwanda.png"
            alt=""
          />
        </div>
        <div className=" relative w-72 h-60 shadow-2xl flex rounded-lg text-center items-center justify-center">
          <img className="w-[80%] h-fit  " src="../chember.jpeg" alt="" />
        </div>
        <div className=" relative w-72 h-60 shadow-2xl flex rounded-lg text-center items-center justify-center">
          <img className="w-[80%] h-fit" src="../download.png" alt="" />
        </div>

        <div className=" relative w-72 h-60 shadow-2xl flex rounded-lg text-center items-center justify-center">
          <img
            className="w-[90%] h-[80%] bg-slate-400"
            src="../global.png"
            alt=""
          />
        </div>
        <div className=" relative w-72 h-60 shadow-2xl flex rounded-lg text-center items-center justify-center">
          <img
            className="w-[90%] h-[80%] bg-slate-400"
            src="../logo.png"
            alt=""
          />
        </div>
      </div>

      {/* Location */}
      <p className=" mb-28" id="Location"></p>
      <h2
        data-aos="fade-up"
        className=" text-center  text-4xl  m-5 font-bold mb-10 "
      >
        {" "}
        Our Location{" "}
      </h2>
      <div data-aos="fade-up" className=" w-full  absolute">
        <iframe
          className=" mt-8 w-full"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15952.348316590727!2d29.2486805!3d-1.6879344!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dd0593e27e02b9%3A0x54cbd0c1c7a140b8!2sEcole%20Secondaire%20Technique%20de%20Gisenyi%20-%20ESTG!5e0!3m2!1sen!2srw!4v1707517057530!5m2!1sen!2srw"
          width="1578"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        />

        {/* footer */}

        <footer
          data-aos="fade-up"
          class="bg-slate-100 text-center text-slate-600 dark:bg-slate-600 dark:text-slate-200 lg:text-left"
        >
          <div class="flex items-center justify-center border-b-2 border-slate-200 p-6 dark:border-slate-500 lg:justify-between">
            <div class="mr-12 hidden lg:block">
              <span>Get connected with us on social networks:</span>
            </div>
            <div class="flex justify-center">
              <a href="#!" class="mr-6 text-slate-600 dark:text-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#!" class="mr-6 text-slate-600 dark:text-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#!" class="mr-6 text-slate-600 dark:text-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M7 11v2.4h3.97c-.16 1.029-1.2 3.02-3.97 3.02-2.39 0-4.34-1.979-4.34-4.42 0-2.44 1.95-4.42 4.34-4.42 1.36 0 2.27.58 2.79 1.08l1.9-1.83c-1.22-1.14-2.8-1.83-4.69-1.83-3.87 0-7 3.13-7 7s3.13 7 7 7c4.04 0 6.721-2.84 6.721-6.84 0-.46-.051-.81-.111-1.16h-6.61zm0 0 17 2h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  />
                </svg>
              </a>
              <a href="#!" class="mr-6 text-slate-600 dark:text-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#!" class="mr-6 text-slate-600 dark:text-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a href="#!" class="text-slate-600 dark:text-slate-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          <div data-aos="fade-up" class="mx-6 py-10 text-center md:text-left">
            <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div class="">
                <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                  Virtual Laboratory
                </h6>
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div class="">
                <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  OUR PARTNERS
                </h6>
                <p class="mb-4">
                  <a href="#!" class="text-slate-600 dark:text-slate-200">
                    Minister of Education
                  </a>
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-slate-600 dark:text-slate-200">
                    Minister of Education
                  </a>
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-slate-600 dark:text-slate-200">
                    Minister of Education
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-slate-600 dark:text-slate-200">
                    Minister of Education
                  </a>
                </p>
              </div>

              <div class="">
                <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Useful links
                </h6>
                <p class="mb-4">
                  <a href="#!" class="text-slate-600 dark:text-slate-200">
                    Home
                  </a>
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-slate-600 dark:text-slate-200">
                    Home
                  </a>
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-slate-600 dark:text-slate-200">
                    Home
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-slate-600 dark:text-slate-200">
                    Home
                  </a>
                </p>
              </div>
              <div>
                <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Contact
                </h6>
                <p class="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-5 w-5"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                  Rubavu
                </p>
                <p class="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-5 w-5"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  info@virtualbalrw.com
                </p>
                <p class="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  + 250789864654
                </p>
                <p class="flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M7.875 1.5C6.839 1.5 6 2.34 6 3.375v2.99c-.426.053-.851.11-1.274.174-1.454.218-2.476 1.483-2.476 2.917v6.294a3 3 0 003 3h.27l-.155 1.705A1.875 1.875 0 007.232 22.5h9.536a1.875 1.875 0 001.867-2.045l-.155-1.705h.27a3 3 0 003-3V9.456c0-1.434-1.022-2.7-2.476-2.917A48.716 48.716 0 0018 6.366V3.375c0-1.036-.84-1.875-1.875-1.875h-8.25zM16.5 6.205v-2.83A.375.375 0 0016.125 3h-8.25a.375.375 0 00-.375.375v2.83a49.353 49.353 0 019 0zm-.217 8.265c.178.018.317.16.333.337l.526 5.784a.375.375 0 01-.374.409H7.232a.375.375 0 01-.374-.409l.526-5.784a.373.373 0 01.333-.337 41.741 41.741 0 018.566 0zm.967-3.97a.75.75 0 01.75-.75h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H18a.75.75 0 01-.75-.75V10.5zM15 9.75a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V10.5a.75.75 0 00-.75-.75H15z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  + 250789864654
                </p>
              </div>
            </div>
          </div>

          <div
            id="Contact"
            class="bg-slate-200 p-6 text-center dark:bg-slate-700"
          >
            <span>© 2024 Copyright:</span>
            <a
              class="font-semibold text-slate-600 dark:text-slate-400"
              href="#!"
            >
              {" "}
              Virtal Labroratory
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Home;
