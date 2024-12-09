import TextInput from "@/components/form/textInput";
import Gap from "@/components/gap";
import { dir } from "i18next";
import React from "react";

import userIcon from "@/assets/icons/user.svg";
import phoneIcon from "@/assets/icons/phone.svg";
import PrimaryButton from "@/components/form/buttons/primary";
import { Formik } from "formik";

// import * as Actions from '@/common/services/actions';
import { useTranslation } from "@/app/i18n/client";
import CheckboxInput from "@/components/form/checkbox";
// import { useRouter } from 'next/navigation';
import { ValidationLogin } from "../../utils/validation";
import { getCookie } from "@/common/helper/cookies";
import Image from "next/image";

type valuesType = {
  username: string;
  password: string;
  rememberMe?: boolean;
};
export default function LoginForm({ lng }: { lng: string }) {
  //   const router = useRouter();
  //   const signinMutation = Actions.SigninWidthNationalCodeAction(() =>
  //     router.push('/appointment')
  //   );
  const userInfo = getCookie("rememberMe") ? JSON.parse(getCookie("rememberMe") as string) : {};

  const { t } = useTranslation(lng, "authentication");

  return (
    <Formik<valuesType>
      initialValues={{
        username: userInfo?.username || "",
        password: userInfo?.password || "",
        rememberMe: false,
      }}
      validationSchema={ValidationLogin}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
      }}
    >
      {({ handleChange, setValues, values, errors, isSubmitting, touched }) => (
        <>
          {/* <Gap size={10} /> */}

          <TextInput
            label={t("login_username_input_label")}
            placeholder={t("login_username_input_placeholder")}
            dir={dir(lng)}
            startContent={<Image alt="user icon" width={20} height={20} src={userIcon.src} />}
            name="username"
            onChange={handleChange}
            value={values.username}
            errorMessage={touched.username ? (errors.username as string) : ""}
          />
          <Gap size={15} />
          <TextInput
            label={t("login_password_input_label")}
            placeholder={t("login_password_input_placeholder")}
            dir={dir(lng)}
            startContent={<Image alt="user icon" width={20} height={20} src={phoneIcon.src} />}
            name="password"
            onChange={handleChange}
            value={values.password}
            errorMessage={touched.password ? (errors.password as string) : ""}
          />
          <Gap size={10} />

          <div>
            <CheckboxInput onChange={(e) => setValues({ ...values, rememberMe: e })} checked={values.rememberMe}>
              <span className="text-white-dark">{t("login_remember_me_text")}</span>
            </CheckboxInput>
          </div>
          <Gap size={10} />

          {process.env.NEXT_PUBLIC_LOGIN_BUTTON && (
            <PrimaryButton
              isLoading={isSubmitting}
              // onClick={() => handleSubmit()}
            >
              {t("login_button")}
            </PrimaryButton>
          )}

          {process.env.NEXT_PUBLIC_LOGIN_APPOINTMENT_BUTTON && (
            <PrimaryButton
              isLoading={isSubmitting}
              //   onClick={() => handleSubmit()}
            >
              {t("login_appointment_button")}
            </PrimaryButton>
          )}
        </>
      )}
    </Formik>
  );
}
