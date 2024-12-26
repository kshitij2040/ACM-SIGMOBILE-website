"use client";
import React from "react";
import Image from "next/image"; // Import Image from next/image
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Header from "../components/header";
import { ContainerScroll } from "../components/ui/container-scroll-animation";
import { AnimatedTooltip } from "../components/ui/animated-tooltip";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import Footer from "../components/footer";
export default function Home() {

  const testimonials = [
    { image: "/acm.png" },
    { image: "/srm.svg" },
    { image: "/sigkdd.png" },

  ];

  const people = [
    {
      id: 1,
      name: "Ayush Mishra",
      designation: "Peon",
      image:
        "/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
    },
    {
      id: 2,
      name: "Kshitij Mishra",
      designation: "Product Manager",
      image:
        "/team/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
    },
    {
      id: 3,
      name: "Harsh Srivstava",
      designation: "Data Scientist",
      image:
        "/team/rachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "/team/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "/team/rachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg",
    },
  ];

  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Gallery",
      link: "/gallery",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <div className="relative">
      {/* Background: Shooting Stars & Stars */}
      <div className="fixed top-0 left-0 w-screen h-screen -z-50 overflow-hidden">
        <ShootingStars />
        <StarsBackground />
      </div>

      {/* Header and Floating Nav */}
      <Header />
      <FloatingNav navItems={navItems} />

      {/* Content */}
      <div className="relative pt-20 md:pt-0">
        <ContainerScroll
          titleComponent={
            <>
              <h1 className="md:text-5xl text-xl  font-serif text-white">
                Welcome to, <br />
                <span className="text-4xl md:text-[5rem]  font-bold mt-1 leading-relaxed">
                  ACM SIGMOBILE
                </span>
              </h1>
            </>
          }
        >
          {/* <div className="justify-center items-center flex" >
            <h1 className="text-4xl font-semibold pt-16 justify-center items-center text-black">
              <span className="justify-center items-center flex" > Welcome to,</span>

              <span className="text-3xl md:text-[4rem]  font-bold mt-1 pb-3 leading-9">
                ACM SIGKDD
              </span>
              <span className="text-blue-400 text-3xl md:text-[4rem] "> Student Chapter</span>
              <span className="justify-center text-sm  items-center flex" > Dive into the exciting domains of Data Science, Machine Learning, Deep Learning, and Natural Language Processing with us. Join our community of passionate learners and innovators as we explore the cutting-edge technologies shaping the future</span>
            </h1>
          </div> */}

          {/* Desktop Image */}
          <Image
            src={`/acmweb.png`}
            alt="hero"
            height={740}
            width={1500}
            className="hidden md:block mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />

          {/* Mobile Image */}
          <Image
            src={`/acmlogo.png`}
            alt="hero"
            height={700}
            width={700}
            className="block md:hidden mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>



   {/* Second section */}
   <section className="w-full h-full  flex flex-col items-center justify-center mb-56 mt-20 md:mt-0">
   <div className="text-3xl m-12 text-center font-bold text-white">
            Meet Our <span className="text-blue-400">PEOPLE</span> 
          </div>
   <div className="flex flex-COL items-center justify-center mb-10 w-full">
   
      <AnimatedTooltip items={people} />
    </div>
        <div className="flex md:justify-center justify-around flex-wrap lg:flex-nowrap gap-16 px-10 md:gap-44 mt-20 w-full">
          <div className="border-l-4 border-blue-400 overflow-hidden">
            <div
              className="md:w-[500px] px-5 md:px-10 w-full text-white"
              data-aos="slide-right"
              data-aos-delay="100"
            >
              <div className="text-3xl mb-5 font-bold">Our Mission</div>
              <p className="text-xl w-full">
                Reimagine the knowledge from robotics into producing a solution
                for the growing society, for a better tomorrow.
              </p>
            </div>
          </div>
          <div className="border-l-4 border-blue-400 overflow-hidden">
            <div
              className="md:w-[500px] px-5 md:px-10 w-full"
              data-aos="slide-right"
              data-aos-delay="200"
            >
              <div className="text-3xl mb-5 font-bold text-white">Our Vision</div>
              <div className="text-xl w-full text-white">
                Emerge as a renowned robotics systems lab centred at SRMIST,
                INDIA by inculcating a collaborative work culture.
              </div>
            </div>
          </div>
        </div>
      </section>




      <div className="flex justify-start pl-10 md:pl-36 text-4xl font-black">
        <h1>Our Domains</h1>
      </div>

      <div className="md:flex justify-center  items-center  md:p-7">
        <CardContainer className="inter-var  p-0 md:p-5">
          <CardBody className="bg- relative group/card scale-75 md:scale-100  hover:shadow-blue-300 bg-black/60 shadow-white shadow-lg border-white/[0.2]  rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white"
            >
              Corporate
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/corporate.svg"
                height="1000"
                width="1000"
                className="h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
            

            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var  p-0 md:p-5">
          <CardBody className=" relative group/card scale-75 md:scale-100  hover:shadow-blue-300 bg-black/60 shadow-white shadow-lg border-white/[0.2]  rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white"
            >
              Research & Development
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/r&d.svg"
                height="1000"
                width="1000"
                className="h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
         

            </div>
          </CardBody>
        </CardContainer>

        <CardContainer className="inter-var  p-5 md:p-5">
          <CardBody className="bg- relative group/card scale-75 md:scale-100 hover:shadow-blue-300 bg-black/60 shadow-white shadow-lg border-white/[0.2]  rounded-xl p-6 border  ">
            <CardItem
              translateZ="50"
              className="text-xl font-bold text-white"
            >
              Web Development
            </CardItem>
            <CardItem
              as="p"
              translateZ="60"
              className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
            >
             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </CardItem>
            <CardItem translateZ="100" className="w-full mt-4">
              <Image
                src="/webdev.svg"
                height="1000"
                width="1000"
                className="h-56 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div className="flex justify-between items-center mt-20">
              {/* <CardItem
            translateZ={20}
          
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem> */}

            </div>
          </CardBody>
        </CardContainer>


        {/* Another design */}
        {/* <CardContainer className="inter-var p-0 md:p-5">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Make things float in air
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          Hover over this card to unleash the power of CSS perspective
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/acmweb.png"
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
          
            href="https://twitter.com/mannupaaji"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Try now →
          </CardItem>
         
        </div>
      </CardBody>
    </CardContainer> */}
      </div>

<div className="py-4 md:py-56">
      <div className="flex justify-start py-20 pl-10 md:pl-36 text-4xl font-black">
        <h1>Our Sponsers</h1>
      </div>

      <div className="h-[16rem] flex flex-col bg-black/65 items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="fast"
        />
      </div>
      </div>


<Footer/>
    </div>
  );
}
