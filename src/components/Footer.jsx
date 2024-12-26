import Image from "next/image"
import FacebookBoxFillIcon from "remixicon-react/FacebookBoxFillIcon"
import InstagramFillIcon from "remixicon-react/InstagramFillIcon"
import LinkedinBoxFillIcon from "remixicon-react/LinkedinBoxFillIcon"
import YoutubeFillIcon from "remixicon-react/YoutubeFillIcon"

export default function Footer(){
    return (
        <section className="py-15 bg-zinc-950 backdrop-blur-lg text-white">
      
        <div className="flex justify-around flex-wrap py-7">
          <div className="mt-10 flex flex-col gap-5">
            <div className="md:ml-10">
              <Image
                src={"/acm.png"}
                alt="logo"
                width={210}
                height={200}
                unoptimized
              ></Image>
            </div>
            <div className="md:m-10 w-64 md:w-[400px]">
              Acm ka address...room no.and all
            </div>
          </div>
          <div className="mt-10">
            <div className="text-xl border-b-0 border-red pl-4 pb-3">
              Social Media
            </div>
            <div className="flex gap-5 m-4">
              <FacebookBoxFillIcon
                size={50}
                className="hover:fill-red hover:cursor-pointer"
                onClick={() => window.open("https://www.facebook.com//")}
              />
              <LinkedinBoxFillIcon
                size={50}
                className="hover:fill-red hover:cursor-pointer"
                onClick={() => window.open("https://in.linkedin.com/company//")}
              />
              <InstagramFillIcon
                size={50}
                className="hover:fill-red hover:cursor-pointer"
                onClick={() => window.open("https://www.instagram.com//")}
              />
              <YoutubeFillIcon
                size={50}
                className="hover:fill-red hover:cursor-pointer"
                onClick={() => window.open("https://www.youtube.com/channel/")}
              />
            </div>
          </div>
          <div className="flex gap-2">
            {/* <Image
              src={"/logo_gif.gif"}
              alt="logo"
              width={150}
              height={150}
              className="md:w-44 md:h-44"
              unoptimized
            ></Image>
            <Image
              src={"/collegelogo.png"}
              alt="logo"
              width={150}
              height={150}
              className="md:w-44 md:h-44"
              unoptimized
            ></Image> */}
          </div>
        </div>
      </section>
    )
}