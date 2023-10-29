import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaCircleArrowRight } from "react-icons/fa6";
import styles from "@/app/home.module.css";
import { cn } from "@/lib/utils";
import { Sparkle } from "lucide-react";

export default function Home() {
  return (
    <main className="">
      <MaxWidthWrapper>
        <div className="relative mt-12 flex flex-col-reverse min-h-screen items-center w-full xl:flex-row">
          <div className="flex flex-col xl:max-w-[50%]">
            <div className="flex flex-col text-center items-center xl:items-start">
              <small className="flex gap-1 items-center mt-12 py-1 px-3 border font-medium text-slate-500 border-slate-300 w-fit rounded-full shadow-md hover:bg-slate-100 hover:cursor-default">
                <Sparkle size={14} className="text-yellow-500" /> Building
                Digital Dreams with Code
              </small>
              <h1 className="mt-6 text-slate-900 font-extrabold text-4xl sm:text-4xl lg:text-5xl tracking-tight text-center lg:leading-tight xl:text-left dark:text-white">
                <span className="text-transparent tracking-normal font-outline-2">Hello👋</span> <br /> I'm{" "}
                <span className="relative xl:text-left">
                  <img src="./underline.svg" alt="underline" className="absolute -z-10 -bottom-0 -left-5 w-full" />
                  Mohamed Mahran,
                </span>{" "}
                <br />a Full Stack developer
              </h1>
              <p className="mt-4 text-slate-900 text-xl text-center xl:text-left dark:text-white">
                With a passion for coding and 6+ years of experience, I craft
                solutions that are as functional as they are beautiful. Let's
                build something amazing together.
              </p>
              <div className="flex mt-8">
                <Button className={cn(styles.hero_cta_button)} size={"lg"}>
                  <span>
                    <FaCircleArrowRight />
                  </span>{" "}
                  <span>Explore Works</span>
                </Button>
              </div>
            </div>
            <div className="pb-12 flex text-2xl gap-3 mt-12 justify-center xl:justify-start">
              <Link
                href="#"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="#"
                className="hover:text-yellow-400 transition-colors duration-300"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
          <div className="relative flex flex-1 justify-center items-center">
            <div className="px-20">
              <Image
                src="/image/portrait2.jpg"
                alt="portrait"
                className="rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="absolute inset-0 -z-10"></div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
