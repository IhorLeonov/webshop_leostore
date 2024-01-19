import emailjs from "@emailjs/browser";
import { CartItem, FormValues } from "../types/interfaces";

const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const MANAGER_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_MANAGER_TEMPLATE_ID;
const CLIENT_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CLIENT_TEMPLATE_ID;

export const sendEmailToManager = (cart: CartItem[], values: FormValues) => {
  emailjs
    .send(
      SERVICE_ID,
      MANAGER_TEMPLATE_ID,
      {
        from_email: values.email,
        message: `Name: ${values.name} \n Phone: ${values.phone} \n Titles: ${cart
          .map((item) => item.title)
          .join(",")} \n Ids: ${cart.map((item) => item.id).join(",")}`,
      },
      USER_ID
    )
    .then(
      (result) => {
        console.log("email to manager result:", result.text);
      },
      (error) => {
        console.log("email to manager error:", error.text);
      }
    );
};

export const sendEmailToClient = (cart: CartItem[], values: FormValues) => {
  emailjs
    .send(
      SERVICE_ID,
      CLIENT_TEMPLATE_ID,
      {
        to_email: values.email,
        to_name: values.name,
        message: cart.map((item) => item.title).join(","),
      },
      USER_ID
    )
    .then(
      (result) => {
        console.log("email to client result:", result.text);
      },
      (error) => {
        console.log("email to client error:", error.text);
      }
    );
};
