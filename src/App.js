import './App.css';
import {useState} from "react";

function App() {

  let post = '강남 우동 맛집';
  let [글제목1, set글제목1] = useState('남자 코트 추천');
  let [글제목2, set글제목2] = useState('강남 우동맛집');
  let [글제목3, set글제목3] = useState('파이썬독학');
  let [logo , setLogo] = useState('ReactBlog');
  let [like , setLike] = useState(0);

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <div className="list">
        <h4>{글제목1} <span onClick={()=>{ setLike(like++)}}>a</span>{like} <span onClick={()=>{set글제목1('여자코트 추천')}}>제목바꾸기</span></h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목2}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{글제목3}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
