import React, { useRef } from "react";
import Menu from '../Component1/Menu';
import "./Login.css";
function Login(){
  const email=useRef()
  const password=useRef()
  const getEmail=localStorage.getItem("emailData")
  const getPassword=localStorage.getItem("passwordData")
  const handleSubmit=()=>{
      if(email.current.value==="abc@corporaciones.corp"&&password.current.value==="12345"){
          localStorage.setItem("emailData","abc@corporaciones.corp")
          localStorage.setItem("passwordData","12345")
      }
  }
 
  return(
      <div>
          {
              getEmail&&getPassword?
              <Menu/>:
          <form onSubmit={handleSubmit}>
          <h2>Bienvenido</h2>
              <div>
                  <input type="text" ref={email} />
              </div>
              <div>
                  <input type="password" ref={password} />
              </div>
              <button>Login</button>
          </form>
          }
      </div>
  );
}
export default Login;
