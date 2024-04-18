import { ToastOptions, toast } from 'react-toastify'

export enum AlertStatus {
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR',
  IDLE = 'IDLE'
}

export const useAlert = () => {
  const notify = (status: AlertStatus, message: string) => {
    const toastConfig: ToastOptions = {
      position: 'top-right',
      autoClose: 3500,
      closeOnClick: true,
      draggable: false
    }

    switch (status) {
      case AlertStatus.SUCCESS:
        toast.success(message, toastConfig)
        break
      case AlertStatus.ERROR:
        toast.error(message, toastConfig)
        break
      default:
        toast.info(message, toastConfig)
        break
    }
  }

  return {
    notify
  }
}

export default useAlert
