import { FormikHelpers, useFormik } from "formik";
import { ErrorText, Field, Form, StyledButton } from "./CheckoutForm.styled";
import { schema } from "../../helpers/yupSchema";
import { CartItem, FormValues } from "../../types/interfaces";
import { useAppDispatch } from "../../redux/hooks";
import { setMessage } from "../../redux/mainSlice";
import { useNavigate } from "react-router-dom";
import { resetCart } from "../../redux/cartSlice";
import { sendEmailToClient, sendEmailToManager } from "../../helpers/sendEmails";
import { useTheme } from "@emotion/react";

interface CheckoutFormProps {
  cart: CartItem[];
}

export const CheckoutForm = ({ cart }: CheckoutFormProps) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const theme = useTheme();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (
      values: FormValues,
      { setSubmitting, resetForm }: FormikHelpers<FormValues>
    ) => {
      console.log("Order:", cart);
      console.log("User info:", values);

      sendEmailToClient(cart, values);
      sendEmailToManager(cart, values);
      dispatch(setMessage("Thank you for your purchase, please check your email!"));
      dispatch(resetCart());

      setSubmitting(false);
      resetForm();
      navigate("/");
    },
    validationSchema: schema,
  });

  const { errors, touched } = formik;

  return (
    <Form onSubmit={formik.handleSubmit}>
      <label>
        <Field
          name="name"
          type="text"
          placeholder="Your name"
          onChange={formik.handleChange}
          value={formik.values.name}
          style={{ borderColor: touched.name && errors.name ? theme.colors.red : "" }}
        />
        <ErrorText>{errors.name && touched.name ? errors.name : ""}</ErrorText>
      </label>

      <label>
        <Field
          name="email"
          type="email"
          placeholder="Email"
          onChange={formik.handleChange}
          value={formik.values.email}
          style={{ borderColor: touched.email && errors.email ? theme.colors.red : "" }}
        />
        <ErrorText>{errors.email && touched.email ? errors.email : ""}</ErrorText>
      </label>

      <label>
        <Field
          name="phone"
          type="phone"
          placeholder="Phone"
          onChange={formik.handleChange}
          value={formik.values.phone}
          style={{ borderColor: touched.phone && errors.phone ? theme.colors.red : "" }}
        />
        <ErrorText>{errors.phone && touched.phone ? errors.phone : ""}</ErrorText>
      </label>

      <StyledButton option="button" type="submit" color="success">
        Confirm order
      </StyledButton>
    </Form>
  );
};
