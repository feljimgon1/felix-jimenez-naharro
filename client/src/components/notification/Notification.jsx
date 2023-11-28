import { Alert } from "@mui/material";
import './Notification.scss'

export const Notification = ({ notification }) => {
  return (
    <div className="notification-container">
      <Alert
        severity={
          notification.success ?
            'success' :
            'error'
        }
      >{notification.message}
      </Alert>
    </div>
  )
}