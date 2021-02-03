const NumericInput = (props) => {
  return (
    <input
      {...props}
      onChange={(event) => {
        const parsedValue = Number.parseFloat(event.target.value || 0)

        const newEvent = {
          ...event,
          target: {
            ...event.target,
            value: parsedValue,
          },
        }

        props.onChange(newEvent)
      }}
    />
  )
}

export default NumericInput
