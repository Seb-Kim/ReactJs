const ToggleTextColor = ({ isHardlyVisible, setIsHardlyVisible, setTextColor }) => {
  const toggleColor = () => {
    if (isHardlyVisible) { setTextColor('rgb(255,255,255)') }
    else { setTextColor('rgb(0,0,0)') }

    setIsHardlyVisible(!isHardlyVisible);
  }
  return (
    <div className="ToggleTextColor">
      <form onSubmit={e => e.preventDefault()}>
        <button onClick={() => toggleColor()}>Toggle Text color</button>
      </form>
    </div>
  )
}
export default ToggleTextColor
