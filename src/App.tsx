import React from 'react';
import './App.css';
import './reset.css';

function Header(){
  return (
    <header>
      <img src="./header.png" alt="header" />
    </header>
  );
}

function Main(){
  return(
    <section>
      <img src="./main.png" alt="main" />
    </section>
  )
}

function Notice(){
  return(
    <section>
      <img src="./notice.png" alt="notice" />
    </section>
  )
}

function Login(){
  return(
    <section className='Login'>
      <img src="./login_img.png" alt="login" />
      <div className='btns'>
        <div className='login'>
          <div className='login_signInBtn' onClick={() => {
            console.log('회원가입 버튼');
          }}>회원가입</div>
          <div className='login_loginBtn' onClick={() => {
            console.log("로그인 버튼");
          }}>로그인</div>
        </div>
        <div className='login_giftBtn' onClick={() => {
          console.log("선물하기 버튼");
        }}>e-Gift Card 선물하기</div>
      </div>
    </section>
  )
}

function Season(){
  return(
    <section>
      <img src="./season.png" alt="season" />
    </section>
  )
}

function Reserve(){
  return(
    <section className='Reserve' style={{background: "url('./reserve_bg3.png')"}}>
      <div className='Reserve-btn' onClick={() => {
        console.log('Reserve 자세히보기 클릭');
      }}>
        자세히보기
      </div>
      <img className='Reserve_bg1' src="./reserve_bg1.png" alt="" />
      <img className='Reserve_bg2' src="./reserve_bg2.png" alt="" />
      <img className='Reserve_text' src="./reserve_text.png" alt="" />

    </section>
  )
}


function Favorite(){
  return(
    <section>
      <img src="./favorite.png" alt="favorite" />
    </section>
  )
}

function Magazine(){
  return(
    <section>
      <img src="./magazine.png" alt="magazine" />
    </section>
  )
}

function Store(){
  return(
    <section>
      <img src="./store.png" alt="store" />
    </section>
  )
}

function Footer(){
  return(
    <footer>
      <img src="./footer.png" alt="footer" />
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Notice />
      <Login />
      <Season />
      <Reserve />
      <Favorite />
      <Magazine />
      <Store />
      <Footer />
    </div>
  );
}

export default App;
