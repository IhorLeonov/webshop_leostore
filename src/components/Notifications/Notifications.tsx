import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectError, selectMessage } from "../../redux/selectors";
import { useEffect } from "react";
import { resetNotification } from "../../redux/mainSlice";

export const Notifications = () => {
  const error = useAppSelector(selectError);
  const message = useAppSelector(selectMessage);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-center",
        autoClose: false,
        theme: "dark",
      });
    }

    return () => {
      () => dispatch(resetNotification("error"));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error]);

  useEffect(() => {
    if (message) {
      toast.success(message, {
        theme: "dark",
        hideProgressBar: true,
      });
    }

    return () => {
      () => dispatch(resetNotification("message"));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [message]);

  return <ToastContainer />;
};
