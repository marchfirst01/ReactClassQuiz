import { useState } from "react"

export default function CountPage() {

  const [count, setCount] = useState(0)

  function onClickCountUp(){
    setCount(count + 1)
  }

  return(
    <>
    <div>{count}</div>
    <button onClick={onClickCountUp}>카운트 증가</button>
    </>
  )
}