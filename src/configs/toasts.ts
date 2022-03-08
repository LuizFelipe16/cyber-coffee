import { toast, Flip } from 'react-toastify';

function notifyError(notify: string) {
  toast.error(`${notify}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Flip,
  });
}

function notifySuccess(notify: string) {
  toast.success(`${notify}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Flip,
  });
}

function notifyWarning(notify: string) {
  toast.warning(`${notify}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Flip,
  });
}

function notifyInfo(notify: string) {
  toast.info(`${notify}`, {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    transition: Flip,
    icon: false
  });
}

export { notifySuccess, notifyError, notifyWarning, notifyInfo };