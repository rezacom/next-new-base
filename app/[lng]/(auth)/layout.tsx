"use client";
import bgGradient from "@/assets/images/auth/bg-gradient.png";
import comingSoonObject1 from "@/assets/images/auth/coming-soon-object1.png";
import comingSoonObject2 from "@/assets/images/auth/coming-soon-object2.png";
import comingSoonObject3 from "@/assets/images/auth/coming-soon-object3.png";
import polygonObject from "@/assets/images/auth/polygon-object.svg";
// import logoWhite from "@/assets/images/auth/logo-white.svg";
// import login from "@/assets/images/auth/login.svg";
// import mapImage from "@/assets/images/auth/map.png";
import clsx from "clsx";
// import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { AuthLayoutProps } from "./utils/types";
import Image from "next/image";
import { useTheme } from "next-themes";
const ThemeButton = dynamic(() => import("@/components/themeButton"), {
  ssr: false,
});

export default function AuthLayout({ children }: AuthLayoutProps) {
  //   const { replace } = useRouter();
  const { theme } = useTheme();

  console.log(theme);

  return (
    <div
      className={clsx("main-container min-h-screen relative text-black", theme === "dark" && "dark:text-white-dark")}
    >
      {/* <!-- start main content section --> */}
      <div x-data="auth">
        <div className="absolute inset-0">
          <Image src={bgGradient.src} width={1000} height={1000} alt="image" className="h-full w-full object-cover" />
        </div>
        <div
          className={clsx(
            `relative flex min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat px-6 py-10 sm:px-16`,
            theme === "light" ? "light:bg-[#fff]" : "dark:bg-[#060818]"
          )}
        >
          <Image
            src={comingSoonObject1.src}
            alt="image"
            width={300}
            height={400}
            className="absolute left-0 top-1/2 h-full max-h-[893px] -translate-y-1/2"
          />
          <Image
            width={200}
            height={160}
            src={comingSoonObject2.src}
            alt="image"
            className="absolute left-24 top-0 h-40 md:left-[30%]"
          />
          <Image
            width={400}
            height={400}
            src={comingSoonObject3.src}
            alt="image"
            className="absolute right-0 top-0 h-[300px]"
          />
          <Image width={200} height={200} src={polygonObject.src} alt="image" className="absolute bottom-0 end-[28%]" />
          <div
            className={clsx(
              "relative flex w-full max-w-[1502px] flex-col justify-between overflow-hidden rounded-md backdrop-blur-lg lg:min-h-[758px] lg:flex-row lg:gap-10 xl:gap-0",
              theme === "light" ? "bg-white/60" : "dark:bg-black/50"
            )}
          >
            <div
              className={clsx(
                "relative hidden w-full items-center justify-center p-5 lg:inline-flex lg:max-w-[835px] xl:-ms-32 ltr:xl:skew-x-[14deg] rtl:xl:skew-x-[-14deg]"
                // 'bg-[linear-gradient(225deg,rgba(239,18,98,1)_0%,rgba(67,97,238,1)_100%)]'
              )}
            >
              <div className="absolute inset-y-0 w-8 from-primary/10 via-transparent to-transparent ltr:-right-10 ltr:bg-gradient-to-r rtl:-left-10 rtl:bg-gradient-to-l xl:w-16 ltr:xl:-right-20 rtl:xl:-left-20"></div>
              <div className="ltr:xl:-skew-x-[14deg] rtl:xl:skew-x-[14deg]">
                <a href="index.html" className="block w-48 lg:w-72 ms-10">
                  {/* <Image src={logoWhite.src} alt="Logo" className="w-full" /> */}
                </a>
                <div className="mt-24 hidden w-full max-w-[430px] lg:block">
                  {/* <Image src={login.src} alt="Cover Image" className="w-full" /> */}
                </div>
              </div>
            </div>
            <div className="relative flex w-full flex-col items-center justify-center gap-6 px-4 pb-16 pt-6 sm:px-6 lg:max-w-[667px]">
              <div className="flex w-full max-w-[440px] items-center gap-4 lg:absolute lg:end-6 lg:top-6 lg:max-w-full">
                <a href="index.html" className="block w-8 lg:hidden">
                  {/* <Image src={logo.src} alt="Logo" className="w-full" /> */}
                </a>

                <ThemeButton />
              </div>

              {children}
              <p className="absolute bottom-6 w-full text-center dark:text-white">
                © <span id="footer-year">2024</span>. REZA All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
