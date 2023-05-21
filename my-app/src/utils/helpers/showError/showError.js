import {notifications} from "@mantine/notifications";

export const showError = (err) => {
  const {code, message} = err.response.data.error

  notifications.show({
    title: code,
    message: message,
    color: "red"
  })
};