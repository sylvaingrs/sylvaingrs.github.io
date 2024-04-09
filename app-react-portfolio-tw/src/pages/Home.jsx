import { Link } from "react-router-dom";
import { Card } from "flowbite-react";
import { Button } from "flowbite-react";

const Home = () => {
  return (
    <>
      <section class="bg-green-200 dark:bg-gray-900">
        <div class="mx-auto grid max-w-screen-xl px-4 py-8 lg:grid-cols-12 lg:gap-8 lg:py-16 xl:gap-0">
          <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
              Hi, I'm Sylvain
            </h1>
            <p class="mb-6 max-w-2xl font-light text-gray-500 dark:text-gray-400 md:text-lg lg:mb-8 lg:text-xl">
              This is my portfolio using React and Vite, let's see my little
              projects!
            </p>
            {/* <Button gradientDuoTone="tealToLime">Teal to Lime</Button> */}
            <Link to="Portfolio.jsx">
              <a
                class="
              focus:ring-primary-300 
              dark:focus:ring-primary-900 
              text-gray 
              dark: 
              dark:hover: 
              mr-3 
              inline-flex 
              items-center 
              justify-center 
              rounded-lg
              bg-slate-200 
              px-5 
              py-3 
              text-center 
              text-base 
              font-medium 
              hover:bg-slate-100
              focus:ring-4 
              dark:bg-slate-700
              dark:text-white
              dark:hover:bg-slate-600"
              >
                View projects
                <svg
                  class="-mr-1 ml-2 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </Link>
            <Link to="../src/pages/Contact.jsx">
              <a
                href="#"
                class="
              inline-flex 
              items-center 
              justify-center 
              rounded-lg 
              border 
              border-gray-300 
              px-5 
              py-3 
              text-center 
              text-base 
              font-medium 
              text-gray-900 
              hover:bg-gray-100 
              focus:ring-4 
              focus:ring-gray-100 
              dark:border-gray-700 
              dark:text-white 
              dark:hover:bg-gray-700 
              dark:focus:ring-gray-800"
              >
                Get in touch
              </a>
            </Link>
          </div>
          <div class="hidden lg:col-span-5 lg:mt-0 lg:flex">
            <img src="/images/programming.jpg" alt="prog" />
          </div>
        </div>
      </section>

      <section
        className="
      lg:py-13
      dark: lg:px-42
      bg-slate-100
      px-8
      py-6 
      text-center 
      dark:bg-slate-800
      md:px-40 
      md:py-12 
      lg:py-14 
      xl:px-64 
      xl:py-16 
      2xl:px-72"
      >
        <h2
          className="
        mb-1 
        text-3xl 
        font-semibold 
        tracking-tight 
        text-black
        dark:text-white
        md:mb-4 
        md:text-5xl 
        lg:mb-6 
        lg:text-5xl 
        xl:text-6xl 
        2xl:text-6xl"
        >
          About me
        </h2>
        <p
          className="
          text-lg 
          leading-relaxed 
          text-black 
          dark:text-white
          md:text-2xl 
          md:leading-relaxed
          lg:text-2xl 
          lg:leading-relaxed 
          xl:text-3xl 
          xl:leading-relaxed 
          2xl:text-3xl 
          2xl:leading-relaxed"
        >
          Below you can see some examples of my recent work. Check out my
          complete portfolio of
          <a
            href="#"
            class="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-500 hover:underline"
          >
            web design projects.
          </a>
          Have a project you would like to discuss?
          <a
            href=""
            class="font-medium text-blue-600 underline underline-offset-4 hover:text-blue-500 hover:underline"
          >
            Let's make something great together!
          </a>
        </p>
      </section>

      <section
        class="p lg-gap-12 mx-auto ml-0 mr-0 grid grid-cols-1
        gap-12
        px-12 
        pt-2 
        dark:bg-slate-900 
        md:grid-cols-3 md:gap-6 

        md:px-14 
        lg:px-24 
        xl:px-32
        "
      >
        <Card
          className="mx-auto max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="/images/project-fashion.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Button>View project</Button>
        </Card>

        <Card
          className="mx-auto max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../images/project-fashion.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Button>View project</Button>
        </Card>

        <Card
          className="mx-auto max-w-sm"
          imgAlt="Meaningful alt text for an image that is not purely decorative"
          imgSrc="../images/project-fashion.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <Button>View project</Button>
        </Card>
      </section>
    </>
  );
};

export default Home;
