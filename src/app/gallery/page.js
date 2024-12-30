"use client"
import React from "react"
import Image from "next/image";
import { ShootingStars } from "../../components/ui/shooting-stars";
import { StarsBackground } from "../../components/ui/stars-background";
import Header from "../../components/header";
import { FloatingNav } from "../../components/ui/floating-navbar";


export default function Gallery() {

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
        </div>



    );

}

