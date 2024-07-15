import { useRef } from "react"

const InputFunc = ({ color, setColor }) => {
  const inputBox = useRef();

  return (
    <div className="InputFunc">
      <form onSubmit={e => e.preventDefault()}>
        <label htmlFor="input-box"></label>
        <input
          autoFocus
          id="input-box"
          name="input-here"
          ref={inputBox}
          value={color}
          onChange={e => setColor(e.target.value)}
          placeholder="Enter Color Name"
        />
      </form>
    </div>
  )
}

export default InputFunc
