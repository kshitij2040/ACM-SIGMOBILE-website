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
import { FocusCards } from "../../components/ui/focus-cards";


export default function Team() {

    const cards = [
        {
          title: "Kshitij Mishra",
          src: "/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
          linkedin: "https://in.linkedin.com/company/example1",
          instagram: "https://www.instagram.com/example1",
        },
        {
          title: "Kshitij Mis",
          src: "/team/rachel-mcdermott-0fN7Fxv1eWA-unsplash.jpg",
          linkedin: "https://in.linkedin.com/company/example2",
          instagram: "https://www.instagram.com/example2",
        },
        {
          title: "Kshitij Mish",
          src: "/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
          linkedin: "https://in.linkedin.com/company/example3",
          instagram: "https://www.instagram.com/example3",
        },
        {
          title: "Kshitij Mishr",
          src: "/team/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
          linkedin: "https://in.linkedin.com/company/example4",
          instagram: "https://www.instagram.com/example4",
        },
        {
          title: "Kshitij Misr",
          src: "/team/cesar-rincon-XHVpWcr5grQ-unsplash.jpg",
          linkedin: "https://in.linkedin.com/company/example5",
          instagram: "https://www.instagram.com/example5",
        },
        {
          title: "Kshitij Mshr",
          src: "/team/jurica-koletic-7YVZYZeITc8-unsplash.jpg",
          linkedin: "https://in.linkedin.com/company/example6",
          instagram: "https://www.instagram.com/example6",
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
        <div>
            <div className="relative">
                {/* Background: Shooting Stars & Stars */}
                <div className="fixed top-0 left-0 w-screen h-screen -z-50 overflow-hidden">
                    <ShootingStars />
                    <StarsBackground />
                </div>

                {/* Header and Floating Nav */}
                <Header />
                {/* <FloatingNav navItems={navItems} /> */}
            </div>


            <div className="pt-12">
                <FocusCards cards={cards} />;
            </div>
        </div>



    );

}

