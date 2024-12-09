import { deleteCookie as dC, getCookie as gC, hasCookie as hC, OptionsType, setCookie as sC } from "cookies-next";
import { cookieKeys } from "../types";
export const isServer = typeof window === "undefined";

export function getCookie(key: cookieKeys, options?: OptionsType) {
  return gC(key, options);
}

export function setCookie(key: cookieKeys, value: unknown, options?: OptionsType) {
  return sC(key, value, options);
}

export function deleteCookie(key: cookieKeys, options?: OptionsType) {
  return dC(key, options);
}

export function hasCookie(key: cookieKeys, options: OptionsType) {
  return hC(key, options);
}

export function clearCookie() {
  // deleteCookie('bearer', {
  //   expires: new Date('02-02-2024'),
  //   sameSite: true
  // });
}
