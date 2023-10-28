import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub, FaCircleArrowRight } from "react-icons/fa6";
import styles from "@/app/home.module.css";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="">
      <MaxWidthWrapper>
        <div className="flex min-h-screen items-center w-full relative">
          <div className="flex flex-col max-w-[50%]">
            <div className="flex flex-col">
              <small className="py-1 px-5 border font-medium text-slate-500 border-slate-300 w-fit rounded-full hover:bg-slate-100 hover:cursor-default">
                Building Digital Dreams with Code
              </small>
              <h1 className="mt-4 text-slate-900 font-extrabold text-4xl sm:text-3xl lg:text-5xl tracking-tight text-left lg:leading-tight dark:text-white">
                Hello, I'm{" "}
                <span className="underline decoration-yellow-300">
                  Mohamed Mahran,
                </span>{" "}
                <br />A Full Stack developer
              </h1>
              <p className="mt-4 text-slate-900 text-xl text-left dark:text-white">
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
            <div className="flex text-2xl gap-3 mt-12">
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
            <div>
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
