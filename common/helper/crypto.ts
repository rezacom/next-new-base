import CryptoJS from "crypto-js";

export class Crypto {
  static encrypt(value: never): string {
    try {
      return CryptoJS.AES.encrypt(value, "Secret Passphrase").toString();
    } catch {
      return "";
    }
  }

  static decrypt(value: never): string {
    try {
      return CryptoJS.AES.decrypt(value, "Secret Passphrase").toString(CryptoJS.enc.Utf8);
    } catch {
      return "";
    }
  }
}
