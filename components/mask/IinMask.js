import { useState } from 'react';
import InputMask from 'react-input-mask'
const IinMask = ({
  field,
  form,
  ...props
}) => {

  const getPhone = value => {
    const defaultMask = "999999999999";
    return defaultMask
  }
  const [items,setItems] = useState({
    value: '',
    mask: getPhone()
  })

  return(
  <InputMask
    {...items}
    maskChar={null}
    className="my-input"
    {...field}
    {...props}/>
  )
}

export default IinMask