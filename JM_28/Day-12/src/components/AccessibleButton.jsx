function AccessibleButton({ onClick, label }) {
  return (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        padding: "10px",
        outline: "2px solid transparent"
      }}
      onFocus={(e) => e.target.style.outline = "2px solid blue"}
      onBlur={(e) => e.target.style.outline = "2px solid transparent"}
    >
      {label}
    </button>
  )
}

export default AccessibleButton
