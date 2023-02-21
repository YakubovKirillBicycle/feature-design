import * as yup from "yup";

export const schemloginFormSchema = yup.object().shape({
    username: yup.string().trim().min(4).max(20).required(),
    password: yup.string().trim().min(4).max(10).required(),
    rememberFlag: yup.boolean(),
});