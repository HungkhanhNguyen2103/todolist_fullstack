import React, { useState } from 'react'

export default function LoginForm() {

   const [toggleForm,setToggleForm] = useState(false)


   const handleLogin=()=>{
    setToggleForm(!toggleForm)
   }

   const actionLogin=()=>{
      window.location.href = "http://localhost:3000/dashboard"
   }

   return(
       <>
        <div className="background"></div>
      <div className="account">
      <div className="account__sign-up">
        <h4>Không có tài khoản?</h4>
        <p>Bạn chưa có tài khoản? Tạo ngay!</p>
        <button onClick={handleLogin}>Đăng ký</button>
      </div>
      <div className={toggleForm ? ("account__form right animaltion-left") : ("account__form animaltion-right left")}>
        <form action className={!toggleForm ? ("sign-up d-none") : ("sign-up")}>
          <h3>Đăng ký</h3>
          <input type="text" name="username" className="btn" placeholder="Full name" /><br />
          <input type="text" name="email" className="btn" placeholder="Email" /><br />
          <input type="text" name="password" className="btn" placeholder="Password" /><br /><br />
          <input type="button" defaultValue="sign up" className="button" />
        </form>
        <form action="" method="POST" className={!toggleForm ? ("login sign-up ") : ("login sign-up d-none")}>
          <h3>Đăng nhập</h3>
          <input type="text" name="username" className="btn" placeholder="User name" /><br />
          <input type="text" name="password" className="btn" placeholder="Password" /><br /><br />
          <input type="button" onClick={actionLogin} defaultValue="Login" className="button" />
        </form>  
      </div>
      <div className="account__login account__sign-up">
        <h4>Có một tài khoản?</h4>
        <p>Đăng nhập tại đây!</p>
        <button onClick={handleLogin}>Đăng nhập</button>
      </div>
    </div>
    </>
   );
}


