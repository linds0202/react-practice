import colorNames from 'colornames'

const Input = ({
  colorValue, setColorValue, setHexValue, isDarkText, setIsDarkText
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
        <label>Add color name:</label>
        <input 
            autoFocus
            type='text'
            placeholder='Add color Name'
            required
            value={colorValue}
            onChange={(e) => {
              setColorValue(e.target.value)
              setHexValue(colorNames(e.target.value))
            }}
        />
        <button
          type='button'
          onClick={() => setIsDarkText(!isDarkText)}
        >
          Toggle Text Color
        </button>
      </form>
  )
}

export default Input