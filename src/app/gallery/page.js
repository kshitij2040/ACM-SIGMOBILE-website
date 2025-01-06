"use client"
import React from "react"
import Image from "next/image";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { ShootingStars } from "../../components/ui/shooting-stars";
import { StarsBackground } from "../../components/ui/stars-background";
import Header from "../../components/header";
import { FloatingNav } from "../../components/ui/floating-navbar";
import { AnimatedTestimonials } from "../../components/ui/animated-testimonials";
import { ParallaxScroll } from "../../components/ui/parallax-scroll";


export default function Gallery() {

    const images = [
       "/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
       "/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
       "/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
       "/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
       "/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
       "/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
       "/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
       "/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
"/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
"/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
"/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
"/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",

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
    const testimonials = [
        {
          quote:
            "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
          name: "Event 1",
          designation: "Hackathon",
          src: "/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
        },
        {
          quote:
            "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
          name: "Event 2",
          designation: "Event Discription",
          src: "/team/rachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg",
        },
        
        {
            quote:
              "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
            name: "Event 3",
            designation: "CTO at InnovateSphere",
            src: "/team/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
          },
      ];

    return (
        <div>
            <div className="relative">
                {/* Background: Shooting Stars & Stars */}
                <div className="fixed top-0 left-0 w-screen h-screen -z-50 overflow-hidden">
                    <ShootingStars />
                    <StarsBackground />
                </div>

                {/* Header and Floating Nav */}
                <Header />
                <FloatingNav navItems={navItems} />
            </div>


            <AnimatedTestimonials testimonials={testimonials}/>
            <div>
        <ParallaxScroll images={images} />;
            </div>
        </div>



    );

}

