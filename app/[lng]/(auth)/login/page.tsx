"use client";

import { useTranslation } from "@/app/i18n/client";
import LoginForm from "./lib/form";

import instagramIcon from "@/assets/icons/fill/instagram.svg";
import facebookIcon from "@/assets/icons/fill/facebook.svg";
import twitterIcon from "@/assets/icons/fill/twitter.svg";
import Image from "next/image";

interface IProps {
  params: { lng: string };
}
export default function Home({ params: { lng } }: IProps) {
  const { t } = useTranslation(lng, "authentication");

  return (
    <div className="w-full max-w-[440px] lg:mt-16">
      <div className="mb-10">
        <h1 className="text-3xl font-extrabold uppercase !leading-snug text-primary md:text-4xl">
          {t("login_heading")}
        </h1>
        <p className="text-base font-bold leading-normal text-white-dark">{t("login_description")}</p>
      </div>

      <LoginForm lng={lng} />

      {process?.env.NEXT_PUBLIC_INSTAGRAM_URL ||
      process?.env?.NEXT_PUBLIC_FACEBOOK_URL ||
      process?.env?.NEXT_PUBLIC_TWITTER_URL ? (
        <>
          <div className="relative my-7 text-center md:mb-7">
            <span className="absolute inset-x-0 top-1/2 h-px w-full -translate-y-1/2 bg-white-light dark:bg-white-dark"></span>
            <span className="relative bg-white px-2 font-bold uppercase text-white-dark dark:bg-dark dark:text-white-light">
              {t("socials")}
            </span>
          </div>
          <div className="mb-10 md:mb-[40px]">
            <ul className="flex justify-center gap-3.5">
              {process?.env?.NEXT_PUBLIC_INSTAGRAM_URL ? (
                <li>
                  <a
                    href={process?.env?.NEXT_PUBLIC_INSTAGRAM_URL}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)`,
                    }}
                    target="_blank"
                  >
                    <Image src={instagramIcon} width={20} height={20} alt="Instagram Icon" />
                  </a>
                </li>
              ) : (
                <></>
              )}

              {process?.env?.NEXT_PUBLIC_FACEBOOK_URL ? (
                <li>
                  <a
                    href={process?.env?.NEXT_PUBLIC_FACEBOOK_URL}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)`,
                    }}
                    target="_blank"
                  >
                    <Image src={facebookIcon.src} width={20} height={20} alt="Facebook Icon Icon" />
                  </a>
                </li>
              ) : (
                <></>
              )}

              {process?.env?.NEXT_PUBLIC_TWITTER_URL ? (
                <li>
                  <a
                    href={process?.env?.NEXT_PUBLIC_TWITTER_URL}
                    className="inline-flex h-8 w-8 items-center justify-center rounded-full p-0 transition hover:scale-110"
                    style={{
                      background: `linear-gradient(135deg, rgba(239, 18, 98, 1) 0%, rgba(67, 97, 238, 1) 100%)`,
                    }}
                    target="_blank"
                  >
                    <Image src={twitterIcon.src} width={20} height={20} alt="twitter Icon Icon" />
                  </a>
                </li>
              ) : (
                <></>
              )}
            </ul>
          </div>
        </>
      ) : (
        <></>
      )}

      {process?.env.NEXT_PUBLIC_LOGIN_SIGNUP_LINK && (
        <div className="text-center dark:text-white flex items-center gap-1 justify-center">
          {t("login_have_account")}
          <a href="#" className="uppercase text-primary underline transition hover:text-black dark:hover:text-white">
            {t("login_sign_up_link_text")}
          </a>
        </div>
      )}
    </div>
  );
}
