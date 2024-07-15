const Background = ({ color, textcolor }) => {
  return (
    <div
      className="Background"
      style={{ "background-color": color, "color": textcolor }} >
      {color ? <p>{color}</p> : <p>Color hasn't defined yet!</p>}
    </div >
  )
}

export default Background;