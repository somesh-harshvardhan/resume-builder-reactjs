import { useState } from 'react'

export const useFocus = () => {
 const [isFocused,setIsFocused] = useState(false);
 const handleFocus = val=>{
    setIsFocused(val);
 }

 return {isFocused,handleFocus}
}
