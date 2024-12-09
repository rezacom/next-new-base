import { toast as showToast, ToastOptions, ToastTransition } from "react-toastify";
interface ToastObject {
  message?: string;
  position?: "top-right" | "top-center" | "top-left" | "bottom-right" | "bottom-center" | "bottom-left";
  duration?: number | false;
  delay?: number;
  // id?: string,
  progress?: string | number;
  onOpen?: () => void;
  onClose?: () => void;
  transition?: ToastTransition;
  draggable?: boolean;
  draggablePercent?: number;
  hideProgressBar?: boolean;
  pauseOnHover?: boolean;
  closeOnClick?: boolean;
  model?: "success" | "error" | "warn" | "info";
}

export const toast = ({
  message = "",
  position = "top-center",
  duration = 5000,
  delay = 0,
  // id = FString.randomString(),
  progress,
  onOpen = () => {},
  onClose = () => {},
  transition,
  draggable = true,
  draggablePercent = 60,
  hideProgressBar = true,
  pauseOnHover = true,
  closeOnClick = true,
  model = "success",
}: ToastObject) => {
  const configs: ToastOptions = {
    position: position,
    autoClose: duration,
    delay: delay,
    // toastId: id,
    progress: progress,
    onOpen: onOpen,
    onClose: onClose,
    transition: transition,
    draggable: draggable,
    draggablePercent: draggablePercent,
    hideProgressBar: hideProgressBar,
    pauseOnHover: pauseOnHover,
    closeOnClick: closeOnClick,
  };

  switch (model) {
    case "success":
      return showToast.success(message, configs);
    case "error":
      return showToast.error(message, configs);
    case "warn":
      return showToast.warn(message, configs);
    case "info":
      return showToast.info(message, configs);
    default:
      return showToast("", configs);
  }
};
