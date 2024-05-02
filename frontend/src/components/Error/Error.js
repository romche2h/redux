import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { selectErorr, setClear } from "../../redux/slices/erorrSlice";
import "react-toastify/dist/ReactToastify.css";

const Error = () => {
  const errorMessage = useSelector(selectErorr);
  const dispatch = useDispatch();
  useEffect(() => {
    if (errorMessage) {
      toast.info(errorMessage);
      dispatch(setClear());
    }
  }, [errorMessage, dispatch]);
  return <ToastContainer position="top-left" autoClose={5000} />;
};

export default Error;
