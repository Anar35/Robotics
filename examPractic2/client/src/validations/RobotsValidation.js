import * as yup from "yup";

export const RobotSchema = yup.object().shape({
  name: yup.string().min(5).required(),
  desc: yup.string().min(10).required(),
  price: yup.number().positive().required(),
  imageURL: yup.string().url().required(),
});
