



import React, {useState, useContext, useEffect, useRef} from 'react'
import '../Pages/CSS/Login.css'
import { ClothingStoreContext } from '../Context/ClothingStoreProvider'



const Login = () => {
    const { navigate } = useContext(ClothingStoreContext)
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [currentState, setCurrentState] = useState("Login"); // Default state is 'Login'
  const login = useRef()




        const UserLogin = async (event) => {
          event.preventDefault(); 

          const loginData = {
            name: name,
            password: password,
            email: email
          }

          try {
              const response = await fetch('https://clothingstore-backend-ncru.onrender.com/user/login', {
                  method: 'POST',
                  headers: {"Content-Type": "application/json",},
                  body: JSON.stringify(loginData)
              });
              const data = await response.json();
                 if(data.success) {
                  alert("Login successful");
                  navigate("/")
                 } else {
                  alert(data.message);
                 }
          }catch(error) {

            console.error("user Error:", error);
            alert("Something went wrong. Please try again.");
  

          }




        }



        useEffect(() => {
          if(login.current) {
            login.current.focus()
          }
        }, [])


  
  return (
    <>



<div className={'form-container'}>
      <div className={'form-wrapper'}>
      



        <div className='login-form'>
          <form onSubmit={UserLogin}>
              <div><h3>{currentState}</h3></div>

          {currentState === 'Sign Up' && (
          <div ><input ref={login} onChange={(e) => setName(e.target.value)} type='text' placeholder='Name' value={name}></input></div>
        )}

        <div><input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' value={password}></input></div>


        <div><input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='email' value={email}></input></div>

        <div className='forgot-password'>
           <a href="/">Forgot password?</a>
        </div>



        <div className='create-account'>
           {currentState === 'Login' ? (
            <a  href="/signup" onClick={(e) => { e.preventDefault(); navigate('/signup') }}>Create account</a>
               ) : (
          <a href="/login" onClick={(e) => { e.preventDefault(); setCurrentState('Login'); }}>Login Here</a>
         )}
     </div>



        <div>
          <div><button type='submit'>{currentState === 'Login' ? 'Sign Up' : 'Login'}</button></div>
        </div>



    </form>

  </div>












</div>

</div>






    </>
  )
}



export default Login
