import * as Yup from "yup";

export const ValidationLogin = Yup.object().shape({
  username: Yup.string().required("Field is Required"),
  password: Yup.string().required("Field is Required"),
});
