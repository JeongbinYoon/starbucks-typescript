import React, { useState } from 'react';
import './App.css';
import './reset.css';

function HdCoffee(){
  console.log('hdcoffee');
  return(
    <div className='HdCoffee'>
      <ul>
        <li>
          <ul className='item'>
            <li><a href="#0"><h2>커피</h2></a></li>
            <li><a href="#0">스타벅스 원두</a></li>
            <li><a href="#0">스타벅스 원두</a></li>
            <li><a href="#0">스타벅스 원두</a></li>
          </ul>
        </li>

        <li>
          <ul className='item'>
            <li><h2>나와 어울리는 커피</h2></li>
            <li>스타벅스 원두</li>
            <li>스타벅스 원두</li>
            <li>스타벅스 원두</li>
          </ul>
        </li>

        <li>
          <ul className='item'>
            <li><h2>커피333</h2></li>
            <li>스타벅스 원두</li>
            <li>스타벅스 원두</li>
            <li>스타벅스 원두</li>
          </ul>
        </li>

        <li>
          <ul className='item'>
            <li><h2>커피444</h2></li>
            <li>스타벅스 원두</li>
            <li>스타벅스 원두</li>
            <li>스타벅스 원두</li>
          </ul>
        </li>

        <li>
          <ul className='item'>
            <li><h2>커피555</h2></li>
            <li>스타벅스 원두</li>
            <li>스타벅스 원두</li>
            <li>스타벅스 원두</li>
          </ul>
        </li>

        <li>
          <ul className='item'>
            <li><h2>커피666</h2></li>
            <li>스타벅스 원두</li>
            <li>스타벅스 원두</li>
            <li>스타벅스 원두</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

function HdMenu(){
  console.log('hdmenu');
  return(
    <div className='HdMenu'>

    </div>
  );
}

function HdStore(){
  return(
    <div className='HdStore'>

    </div>
  );
}

function HdResponsibility(){
  return(
    <div className='HdResponsibility'>

    </div>
  );
}

function HdStarbuckRewards(){
  return(
    <div  className='HdStarbuckRewards'>

    </div>
  );
}

function HdWhatsNew(){
  return(
    <div  className='HdWhatsNew'>

    </div>
  );
}

function Header(){
  const [selected, setSelected] = useState(-1);
  return (
    <header>

      <div className='header' onMouseLeave={()=>{
        setSelected(-1);
      }}>
        <img src="./header.png" alt="header" />
        <div className='nav'>
          <ul className="header_ul">
            <li onMouseOver={()=>{
              console.log('coffee click');
              setSelected(0);
            }}>COFFEE</li>
            <li onMouseOver={()=>{
              console.log('menu click');
              setSelected(1);
            }}>MENU</li>
            <li onMouseOver={()=>{
              console.log('store click');
              setSelected(2);
            }}>STORE</li>
            <li onMouseOver={()=>{
              console.log('responsibility click');
              setSelected(3);
            }}>RESPONSIBILITY</li>
            <li onMouseOver={()=>{
              console.log('starbucks rewards click');
              setSelected(4);
            }}>STARBUCKS REWARDS</li>
            <li onMouseOver={()=>{
              console.log('whats new click');
              setSelected(5);
            }}>WHAT'S NEW</li>
          </ul>
        </div>

        <div className='subNav'>
        {(selected === 0) && <HdCoffee />}
          {(selected === 1) && <HdMenu />}
          {(selected === 2) && <HdStore />}
          {(selected === 3) && <HdResponsibility />}
          {(selected === 4) && <HdStarbuckRewards />}
          {(selected === 5) && <HdWhatsNew />}
        </div>
      </div>
    </header>
  );
}

function Main(){
  return(
    <section>
      <div className='Main'>
        <img src="./main.png" alt="main" />
      </div>
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
