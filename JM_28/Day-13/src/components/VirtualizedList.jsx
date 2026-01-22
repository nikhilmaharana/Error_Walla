import { FixedSizeList as List } from "react-window"

function VirtualizedList() {
  const Row = ({ index, style }) => (
    <div style={style}>
      Item {index + 1}
    </div>
  )

  return (
    <List
      height={300}
      width={300}
      itemCount={5000}
      itemSize={35}
    >
      {Row}
    </List>
  )
} 

export default VirtualizedList
