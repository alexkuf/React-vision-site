import Input from "./common/input";
import PageHeader from "./common/pageHeader";
import { useFormik } from "formik";
import Joi from "joi";
import { formikValidateUsingJoi } from "../utils/formikValidateUsingJoi";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import cardsService from "../services/cardsCervice";
import { toast } from "react-toastify";

const CardsCreate = () => {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const form = useFormik({
    validateOnMount: true,
    initialValues: {
      bizName: "",
      bizDescription: "",
      bizAddress: "",
      bizPhone: "",
      bizImage: "",
    },

    validate: formikValidateUsingJoi({
      bizName: Joi.string().min(2).max(255).required().label("Name"),
      bizDescription: Joi.string()
        .min(2)
        .max(1024)
        .required()
        .label("Description"),
      bizAddress: Joi.string().min(2).max(400).required().label("Address"),
      bizPhone: Joi.string()
        .min(9)
        .max(10)
        .required()
        .regex(/^0[2-9]\d{7,8}$/),
      bizImage: Joi.string().min(11).max(1024).allow("").label("Image"),
    }),

    async onSubmit(values) {
      try {
        const { bizImage, ...body } = values;

        if (bizImage) {
          body.bizImage = bizImage;
        }

        await cardsService.createCard(body);
        toast.success("Card added");
        navigate("/my-cards");
      } catch ({ response }) {
        if (response && response.status === 400) {
          setError(response.data);
        }
      }
    },
  });

  return (
    <>
      <PageHeader title="Create Card" description="" />
      <div className="d-flex flex-wrap">
        <form
          onSubmit={form.handleSubmit}
          noValidate
          style={{
            width: "40rem",
            margin: "auto",
          }}
        >
          {error && <div className="alert alert-danger">{error}</div>}
          <Input
            {...form.getFieldProps("bizName")}
            type="text"
            label="Name"
            required
            error={form.touched.bizName && form.errors.bizName}
          />
          <Input
            {...form.getFieldProps("bizDescription")}
            type="text"
            label="Description"
            required
            error={form.touched.bizDescription && form.errors.bizDescription}
          />
          <Input
            {...form.getFieldProps("bizAddress")}
            type="text"
            label="Address"
            required
            error={form.touched.bizAddress && form.errors.bizAddress}
          />
          <Input
            {...form.getFieldProps("bizPhone")}
            type="text"
            label="Phone"
            required
            error={form.touched.bizPhone && form.errors.bizPhone}
          />
          <Input
            {...form.getFieldProps("bizImage")}
            type="text"
            label="Image"
            error={form.touched.bizImage && form.errors.bizImage}
          />
          <div className="my-2">
            <button
              type="submit"
              disabled={!form.isValid}
              className="btn btn-primary mt-2"
            >
              Create Card
            </button>
          </div>
          <div className="text-center">
            <img
              style={{
                width: "300px",
              }}
              src="https://www.happyprinting.co.nz/content/images/thumbs/0003265_business-cards.png"
              alt="business-card"
            />
          </div>
        </form>
        <div
          className=""
          style={{
            width: "450px",
            fontFamily: "Georgia, serif",
          }}
        >
          <p className="fs-3 mt-4">
            Hi, a creative director at we advise that when it comes to adding
            text to your business card, less is more. “It should be easily
            digestible for whoever is receiving it. The less info you put on
            there, the better.”
          </p>
        </div>
      </div>
    </>
  );
};

export default CardsCreate;
