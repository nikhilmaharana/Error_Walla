import { useEffect, useState } from "react"
import { io } from "socket.io-client"

// Connect to socket server
const socket = io("http://localhost:5001")

function Notification() {
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    socket.on("notification", (data) => {
      setNotifications((prev) => [data, ...prev])
    })

    return () => {
      socket.off("notification")
    }
  }, [])

  return (
    <div>
      <h2>Real-time Notifications</h2>

      <ul>
        {notifications.map((item, index) => (
          <li key={index}>
            {item.message} — {item.time}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Notification
