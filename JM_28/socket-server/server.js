const { Server } = require("socket.io")

const io = new Server(5001, {
  cors: {
    origin: "*",
  },
})

io.on("connection", (socket) => {
  console.log("Client connected")

  setInterval(() => {
    socket.emit("notification", {
      message: "New real-time notification 🔔",
      time: new Date().toLocaleTimeString(),
    })
  }, 5000)

  socket.on("disconnect", () => {
    console.log("Client disconnected")
  })
})
