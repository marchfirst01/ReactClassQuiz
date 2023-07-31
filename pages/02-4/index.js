import { useState } from "react"

export default function SignUpPage(){
  
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordCheck, setPasswordCheck] = useState("")
  
  function onChangeInfo(event){
    if (event.target.id == 'email'){
      console.log("email")
      setEmail(event.target.value)
    } else if (event.target.id == 'password') {
      console.log("password")
      setPassword(event.target.value)
    } else {
      console.log("passwordCheck")
      setPasswordCheck(event.target.value)
    }
  }
  
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")
    const [passwordCheckError, setPasswordCheckError] = useState("")

  function onClickCheck(){
    if(email.includes("@") === false){
      setEmailError("이메일 형식이 올바르지 않습니다.")
    } else { 
      setEmailError("")
    }

    if(password.length < 8){
      setPasswordError("비밀번호가 너무 짧습니다.")
    } else { 
      setPasswordError("") 
    }

    if(password !== passwordCheck){
      setPasswordCheckError("비밀번호가 일치하지 않습니다.")
    } else { 
      setPasswordCheckError("") 
    }

    if(emailError === "" &&
      passwordError === "" &&
      passwordCheckError === ""){
      alert("회원가입 완료")
    }

  }

  return(
    <>
      <div>이메일</div>
      <input id="email" type="text" placeholder="이메일을 입력해주세요." onChange={onChangeInfo} />
      <div>{emailError}</div>
      <div>비밀번호</div>
      <input id="password" type="password" placeholder="비밀번호를 입력해주세요." onChange={onChangeInfo}/>
      <div>{passwordError}</div>
      <div>비밀번호 확인</div>
      <input id="passwordCheck" type="password" placeholder="비밀번호를 다시 입력해주세요." onChange={onChangeInfo} />
      <div>{passwordCheckError}</div>
      <button onClick={onClickCheck}>가입하기</button>
    </>
  )
}