"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("panel-1");
  const [open, setOpen] = useState(false);

  const handelBurgerClick = () => {
    setOpen(!open);
  };

  const handelTabClick = (panel) => {
    setActiveTab(panel);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="container relative mx-auto p-6">
        {/* Flex Container For Flex Items */}
        <div className="my-6 flex items-center justify-between space-x-20">
          {/* Logo */}
          <div className="z-30">
            <img
              src={
                open ? "../logo-bookmark-footer.svg" : "../logo-bookmark.svg"
              }
              alt=""
            />
          </div>

          {/* Menu Items */}
          <div className="hidden items-center space-x-10 uppercase text-grayishBlue md:flex">
            <Link
              className=" tracking-widest hover:text-softRed"
              href="#features"
            >
              features
            </Link>
            <Link
              className=" tracking-widest hover:text-softRed"
              href="#download"
            >
              download
            </Link>
            <Link className=" tracking-widest hover:text-softRed" href="#faq">
              FAQ
            </Link>
            <Link
              className="rounded-lg border-2 border-softRed bg-softRed px-8 py-2 text-white shadow-md hover:bg-white hover:text-softRed"
              href="#"
            >
              Login
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            id="menu-btn"
            className={`hamburger ${
              open ? "open" : ""
            } z-30 block focus:outline-none md:hidden`}
            onClick={() => handelBurgerClick()}
          >
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="menu"
          className={`m-h-screen fixed inset-0 z-20 md:hidden ${
            open ? "flex" : "hidden"
          } h-full w-full flex-col items-center divide-y divide-gray-500 self-end bg-veryDarkBlue px-6 py-1 pb-4 pt-24 uppercase tracking-widest text-white opacity-90`}
        >
          <div className="w-full py-3 text-center">
            <Link href="#features" className="block hover:text-softRed">
              Features
            </Link>
          </div>
          <div className="w-full py-3 text-center">
            <Link href="#download" className="block hover:text-softRed">
              Download
            </Link>
          </div>
          <div className="w-full py-3 text-center">
            <Link href="#faq" className="block hover:text-softRed">
              FAQ
            </Link>
          </div>
          <div className="w-full py-3 text-center">
            <Link href="#" className="block hover:text-softRed">
              Login
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero">
        {/*  Container For Image & Content */}
        <div className="container mx-auto flex flex-col p-6 lg:mb-0 lg:flex-row-reverse">
          {/* Image */}
          <div className="lg:mb:0 relative mx-auto  lg:mx-0 lg:w-1/2">
            <div className="bg-hero -right-12 -top-10 -z-10 bg-softBlue"></div>
            <div className="bg-hero 0 -left-20 top-24 -z-10 bg-softRed"></div>

            <img
              className="relative z-10 overflow-x-visible lg:top-24 xl:top-0"
              src="../illustration-hero.svg"
              alt=""
            />
          </div>

          {/* Content */}
          <div className="flex flex-col space-y-10  lg:mt-10 lg:w-1/2">
            <h1 className="text-center text-3xl font-semibold lg:text-left lg:text-6xl">
              A Simple Bookmark Manager
            </h1>
            <p className="mx-auto max-w-md text-center text-lg text-gray-400 lg:mx-0 lg:text-left lg:text-2xl">
              A clean and simple interface to organize your favourite websites.
              Open a new browser tab and see your sites load instantly. Try it
              for free.
            </p>

            {/* Buttons Container */}
            <div className="flex justify-center space-x-4 lg:justify-start">
              <Link
                className="rounded border-2 border-softBlue bg-softBlue p-4 text-sm font-semibold text-white shadow-md hover:bg-white hover:text-softBlue lg:text-base"
                href="#"
              >
                Get It On Chrome
              </Link>
              <Link
                className="rounded border-2 border-gray-300 bg-gray-300 p-4 text-sm font-semibold text-black shadow-md hover:bg-white hover:text-gray-600"
                href="#"
              >
                Get It On Firefox
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Heading */}
      <section id="features">
        <div className="container mx-auto mt-16 flex flex-col items-center space-y-4 px-6">
          <h1 className=" text-center text-4xl font-semibold">Features</h1>
          <p className=" max-w-md text-center text-grayishBlue">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </p>
        </div>
      </section>

      {/* Features Tabs */}
      <section id="tabs">
        {/* Tabs/Panels Container */}
        <div className="container relative mx-auto my-6 mb-32 mt-12 px-6">
          <div className="bg-tabs"></div>

          {/* Tabs Container */}
          <div className="mx-auto mb-6 flex max-w-xl flex-col justify-center md:flex-row md:space-x-10 md:border-b">
            {/* Tab 1 */}
            <div
              className="flex cursor-pointer justify-center border-b text-gray-600 hover:text-softRed md:w-1/3 md:border-b-0"
              onClick={() => handelTabClick("panel-1")}
            >
              <div
                className={` ${
                  activeTab === "panel-1" ? "active" : ""
                } py-5 text-center`}
              >
                Simple Bookmarking
              </div>
            </div>

            {/* Tab 2 */}
            <div
              className="flex cursor-pointer justify-center border-b text-gray-600 hover:text-softRed md:w-1/3 md:border-b-0"
              onClick={() => handelTabClick("panel-2")}
            >
              <div
                className={` ${
                  activeTab === "panel-2" ? "active" : ""
                } py-5 text-center`}
              >
                Speedy Searching
              </div>
            </div>

            {/* Tab 3 */}
            <div
              className="flex cursor-pointer justify-center border-b text-gray-600 hover:text-softRed md:w-1/3 md:border-b-0"
              onClick={() => handelTabClick("panel-3")}
            >
              <div
                className={` ${
                  activeTab === "panel-3" ? "active" : ""
                } py-5 text-center`}
              >
                Easy Sharing
              </div>
            </div>
          </div>

          {/* Tab Panels */}
          <div id="panels" className="container mx-auto">
            {/* Panel 1 */}
            <div
              className={`${
                activeTab === "panel-1" ? "" : "hidden"
              } flex flex-col py-5 md:flex-row md:space-x-7`}
            >
              {/* Image */}
              <div className="flex justify-center md:w-1/2">
                <img
                  className="reative z-10"
                  src="../illustration-features-tab-1.svg"
                  alt=""
                />
              </div>

              {/* Content */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-center text-3xl font-semibold md:mt-0 md:text-left">
                  Bookmark in one click
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Organize your bookmarks however you like. Our simple
                  drag-and-drop interface gives you complete control over how
                  you manage your favourite sites.
                </p>
                <div className="mx-auto md:mx-0">
                  <Link
                    href="#"
                    className="mt-4 rounded-lg border-2 border-white bg-softBlue px-6 py-3 font-semibold text-white hover:border-2 hover:border-softBlue hover:bg-white hover:text-softBlue md:inline-flex"
                  >
                    More Info
                  </Link>
                </div>
              </div>
            </div>

            {/* Panel 2  */}
            <div
              className={`${
                activeTab === "panel-2" ? "" : "hidden"
              } flex flex-col py-5 md:flex-row md:space-x-7`}
            >
              {/* Panel Image  */}
              <div className="flex justify-center md:w-1/2">
                <img
                  src="../illustration-features-tab-2.svg"
                  alt=""
                  className="relative z-10"
                />
              </div>
              {/* Panel Content  */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-center text-3xl font-semibold md:mt-0 md:text-left">
                  Intelligent search
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Our powerful search feature will help you find saved sites in
                  no time at all. No need to trawl through all of your
                  bookmarks.
                </p>
                <div className="mx-auto md:mx-0">
                  <Link
                    href="#"
                    className="mt-4 rounded-lg border-2 border-white bg-softBlue px-6 py-3 font-semibold text-white hover:border-2 hover:border-softBlue hover:bg-white hover:text-softBlue md:inline-flex"
                  >
                    More Info
                  </Link>
                </div>
              </div>
            </div>

            {/* Panel 3  */}
            <div
              className={`${
                activeTab === "panel-3" ? "" : "hidden"
              } flex flex-col py-5 md:flex-row md:space-x-7`}
            >
              {/* Panel Image  */}
              <div className="flex justify-center md:w-1/2">
                <img
                  src="../illustration-features-tab-3.svg"
                  alt=""
                  className="relative z-10"
                />
              </div>
              {/* Panel Content  */}
              <div className="flex flex-col space-y-8 md:w-1/2">
                <h3 className="mt-14 text-center text-3xl font-semibold md:mt-0 md:text-left">
                  Share your bookmarks
                </h3>
                <p className="max-w-md text-center text-grayishBlue md:text-left">
                  Easily share your bookmarks and collections with others.
                  Create a shareable a link that you can send at the click of a
                  button.
                </p>
                <div className="mx-auto md:mx-0">
                  <Link
                    href="#"
                    className="mt-4 rounded-lg border-2 border-white bg-softBlue px-6 py-3 font-semibold text-white hover:border-2 hover:border-softBlue hover:bg-white hover:text-softBlue md:inline-flex"
                  >
                    More Info
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Heading */}
      <section id="download">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-center text-3xl font-semibold md:text-4xl">
            Download the extension
          </h2>
          <p className="mx-auto max-w-lg text-center text-grayishBlue">
            We've got more browsers in the pipeline. Please do let us know if
            you've got a favourite you'd like us to prioritize.
          </p>
        </div>
      </section>

      {/* Download Boxes */}
      <section id="boxes" className="py-32">
        {/* Boxes Container */}
        <div className="container relative mx-auto flex max-w-5xl flex-col space-y-10 px-10 md:flex-row md:space-x-7 md:space-y-0 md:px-6">
          {/* Box 1 */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col space-y-4 rounded-lg py-6 text-center shadow-lg ">
              {/* Image */}
              <div className="flex justify-center">
                <img src="../logo-chrome.svg" alt="" />
              </div>

              {/* Text */}
              <h5 className="pt-6 text-xl font-bold">Add to Chrome</h5>
              <p className=" text-gray-400">Minimum Version 62</p>

              {/* Dots */}
              <div className="bg-dots bg-repeat-x px-6 pt-6 capitalize ">
                <Link
                  href="#"
                  className="block w-full rounded-lg border-2 border-softBlue bg-softBlue py-3 text-white duration-200 hover:bg-white hover:text-softBlue"
                >
                  Add & Install Extension
                </Link>
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="w-full md:w-1/3">
            <div className="flex flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:mt-6 ">
              {/* Image */}
              <div className="flex justify-center">
                <img src="../logo-firefox.svg" alt="" />
              </div>

              {/* Text */}
              <h5 className="pt-6 text-xl font-bold">Add to Firefox</h5>
              <p className=" text-gray-400">Minimum Version 55</p>

              {/* Dots */}
              <div className="bg-[url('/bg-dots.svg')] bg-repeat-x px-6 pt-6 capitalize ">
                <Link
                  href="#"
                  className="block w-full rounded-lg border-2 border-softBlue bg-softBlue py-3 text-white duration-200 hover:bg-white hover:text-softBlue"
                >
                  Add & Install Extension
                </Link>
              </div>
            </div>
          </div>

          {/* Box 3 */}
          <div className="w-full md:w-1/3">
            {" "}
            <div className="flex flex-col space-y-4 rounded-lg py-6 text-center shadow-lg md:mt-10">
              {/* Image */}
              <div className="flex justify-center">
                <img src="../logo-opera.svg" alt="" />
              </div>

              {/* Text */}
              <h5 className="pt-6 text-xl font-bold">Add to Opera</h5>
              <p className=" text-gray-400">Minimum Version 46</p>

              {/* Dots */}
              <div className="bg-[url('/bg-dots.svg')] bg-repeat-x px-6 pt-6 capitalize ">
                <Link
                  href="#"
                  className="block w-full rounded-lg border-2 border-softBlue bg-softBlue py-3 text-white duration-200 hover:bg-white hover:text-softBlue"
                >
                  Add & Install Extension
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  FAQ Heading */}
      <section id="faq">
        <div className="container mx-auto px-6">
          <h2 className="mb-6 text-center text-3xl font-semibold md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mx-auto max-w-lg text-center text-black">
            Here are some of our FAQs. If you have any other questions you'd
            like answered please feel free to email us.
          </p>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section id="faq-accordion">
        {/* Maine Container */}
        <div className=" container mx-auto mb-32 px-6">
          {/* Accordion Container */}

          <div className="m-8 mx-auto max-w-2xl overflow-hidden">
            {/* Tab 1  */}
            <div className="group border-b py-1 outline-none" tabIndex="1">
              {/* Tab Flex Container  */}
              <div className="ease group flex cursor-pointer items-center justify-between py-3 text-gray-500 transition duration-500">
                {/* Tab Title */}
                <div className="ease transition duration-500 group-hover:text-red-500">
                  What is Bookmark?
                </div>
                {/* Arrow */}
                <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* Tab Inner Content  */}
              <div className="ease max-h-0 overflow-hidden transition duration-500 group-focus:max-h-screen">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            {/* Tab 2 */}
            <div className="group border-b py-1 outline-none" tabIndex="2">
              {/* Tab Flex Container */}
              <div className="ease group flex cursor-pointer items-center justify-between py-3 text-gray-500 transition duration-500">
                {/* Tab Title */}
                <div className="ease transition duration-500 group-hover:text-red-500">
                  How can I request a new browser?
                </div>
                {/* Arrow  */}
                <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* Tab Inner Content  */}
              <div className="ease max-h-0 overflow-hidden transition duration-500 group-focus:max-h-screen">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            {/* Tab 3  */}
            <div className="group border-b py-1 outline-none" tabIndex="3">
              {/* Tab Flex Container  */}
              <div className="ease group flex cursor-pointer items-center justify-between py-3 text-gray-500 transition duration-500">
                {/* Tab Title */}
                <div className="ease transition duration-500 group-hover:text-red-500">
                  Is ther a mobile app?
                </div>
                {/* Arrow  */}
                <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* Tab Inner Content  */}
              <div className="ease max-h-0 overflow-hidden transition duration-500 group-focus:max-h-screen">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>

            {/* Tab 4  */}
            <div className="group border-b py-1 outline-none" tabIndex="4">
              {/* Tab Flex Container  */}
              <div className="ease group flex cursor-pointer items-center justify-between py-3 text-gray-500 transition duration-500">
                {/* Tab Title  */}
                <div className="ease transition duration-500 group-hover:text-red-500">
                  What about other Chromium browsers
                </div>
                {/* Arrow */}
                <div className="ease transition duration-500 group-focus:-rotate-180 group-focus:text-red-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="12"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      d="M1 1l8 8 8-8"
                    />
                  </svg>
                </div>
              </div>

              {/* Tab Inner Content */}
              <div className="ease max-h-0 overflow-hidden transition duration-500 group-focus:max-h-screen">
                <p className="py-2 text-justify text-gray-400">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Fugiat, repellat amet doloribus consequuntur eos similique
                  provident tempora voluptates iure quia fuga dicta voluptatibus
                  culpa mollitia recusandae delectus id suscipit labore?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="bg-softBlue">
        {/* Main Continer */}
        <div className="mx-auto max-w-xl space-y-7 px-6 py-24 ">
          <h4 className="text-center text-lg uppercase text-white">
            35,000+ Already Joined
          </h4>
          <h2 className="px-3 text-center text-3xl font-semibold text-white md:text-4xl">
            Stay up-to-date with what we're doing
          </h2>

          {/* Form */}
          <form className="mx-auto flex max-w-2xl flex-col items-center justify-between space-y-4 px-6 text-base md:flex-row md:space-y-0">
            <input
              className="flex-1 rounded-lg px-6 pb-2 pt-3 focus:outline-none md:mb-0 md:mr-3"
              type="text"
              placeholder="Enter your email addreses"
            />
            <button
              className="transform cursor-pointer rounded-lg bg-softRed px-6 py-3 text-center font-semibold text-white duration-200 hover:opacity-90 focus:outline-none"
              type="submit"
            >
              Contact Us
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-veryDarkBlue py-16">
        <div className="container mx-auto flex flex-col items-center justify-around space-y-16 px-6 md:flex-row md:space-y-0">
          {/* Logo */}
          <div className="flex items-center justify-center">
            <img src="../logo-bookmark-footer.svg" alt="" />
          </div>

          {/* Menu */}
          <div className="flex flex-col items-center space-y-4 text-center text-xl uppercase text-gray-500 md:flex-row md:space-x-8 md:space-y-0">
            <Link className="hover:text-softRed" href="#features">
              features
            </Link>
            <Link className="hover:text-softRed" href="#download">
              download
            </Link>
            <Link className="hover:text-softRed" href="#faq">
              faq
            </Link>
          </div>

          {/* Socila */}
          <div className="flex items-center justify-center space-x-10">
            <Link href="#">
              <img className="ficon h-6" src="../icon-facebook.svg" alt="" />
            </Link>
            <Link href="#">
              <img className="ficon h-6" src="../icon-twitter.svg" alt="" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
