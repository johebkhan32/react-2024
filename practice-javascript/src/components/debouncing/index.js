
export default function Debouncing(){
  var timeoutId;

  function handleTimeout(value) {
    timeoutId = setTimeout(() => {
      console.log(value);
    },1000)

  }

  function handleChange(event, value) {
    clearTimeout(timeoutId)
    handleTimeout(event?.target?.value)

  }

  return (
    <input 
      type = "text"
      onChange = {handleChange}
      placeholder = "Type Here"
    />
  )
}