import React from "react"

const ListItem = React.memo(({ value }) => {
  console.log("Rendering item:", value)
  return <li>{value}</li>
})

export default ListItem
