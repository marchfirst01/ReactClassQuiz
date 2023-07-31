import { useState } from "react"

export default function AuthPage(){

  let authNum
  const [auth, setAuth] = useState('000000')

  function onClickAuth() {
    //아 랜덤생성 귀찮
  }

  return(
    <>
      <div id="authNum">000000</div>
      <div>{auth}</div>
      <button>인증번호전송</button>
    </>
  )
}