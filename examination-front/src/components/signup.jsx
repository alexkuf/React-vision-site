import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import { useFormik } from "formik";
import Joi from "joi";
import { formikValidateUsingJoi } from "../utils/formikValidateUsingJoi";
import { useNavigate, Navigate } from "react-router-dom";
import CheckBox from "./common/checkbox";
import { useAuth } from "../context/auth.context";
import { useState } from "react";

const SignUp = ({ theme, redirect = "/" }) => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [userBis, setUserBiz] = useState(false);
  const { user, createUser, login } = useAuth();

  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@%$#^&*\-_])(?=(.*\d){4,})[a-zA-Z!@%$#^&*\-_\d]{8,}$/;

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      email: "",
      password: "",
      name: "",
    },

    validate: formikValidateUsingJoi({
      name: Joi.string().min(2).max(255).required().label("name"),
      email: Joi.string()
        .min(6)
        .max(255)
        .required()
        .email({ tlds: { allow: false } })
        .label("email"),
      password: Joi.string()
        .min(6)
        .max(1024)
        .required()
        .regex(passwordRegex)
        .label("Password")
        .messages({
          "string.pattern.base": `The "Password" must contain at least 8 Characters, and include 1 Upper-Case letter, 1 Lower-Case letter, 1 Special Symbol(!@%$#^&*-_) and 4 digits(0-9).`,
        }),
    }),

    async onSubmit(values) {
      try {
        await createUser({ ...values, biz: userBis });
        if (userBis === true) {
          await login({ email: values.email, password: values.password });
        }
        navigate(redirect);
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <PageHeader title="Sign Up" description="Create a free account" />
      <form
        onSubmit={form.handleSubmit}
        noValidate
        style={{
          maxWidth: "32rem",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        {error && <div className="alert alert-danger">{error}</div>}
        <Input
          {...form.getFieldProps("email")}
          type="email"
          label="Email"
          required
          error={form.touched.email && form.errors.email}
          theme={theme}
        />
        <Input
          {...form.getFieldProps("password")}
          type="password"
          label="Password"
          required
          error={form.touched.password && form.errors.password}
          theme={theme}
        />
        <Input
          {...form.getFieldProps("name")}
          type="name"
          label="Name"
          required
          error={form.touched.name && form.errors.name}
          theme={theme}
        />
        <CheckBox
          label="Sign up as Business?"
          type="checkbox"
          onChange={(e) => setUserBiz(e.target.checked)}
        />
        <div className="d-grid gap-2 mt-2">
          <button
            type="submit"
            disabled={!form.isValid}
            className="btn btn-primary mt-2"
          >
            Registration
          </button>
        </div>
      </form>
      <div
        className=""
        style={{
          maxWidth: "32rem",
          textAlign: "center",
          margin: "auto",
        }}
      >
        <img
          style={{
            maxHeight: "20rem",
          }}
          src="https://cdni.iconscout.com/illustration/premium/thumb/sign-up-3391266-2937870.png"
          alt="sign up"
        />
      </div>
    </>
  );
};

export default SignUp;
