export default function State1Page() {

  function hi(){
    const hi = "반갑습니다."
    document.getElementById("hi").innerText = hi
  }

  return (
    <>
      <button id="hi" onClick={hi}>안녕하세요</button>
    </>
  )
}