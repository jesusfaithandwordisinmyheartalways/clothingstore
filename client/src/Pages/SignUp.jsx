




import React, { useContext, useState } from 'react';
import { ClothingStoreContext } from '../Context/ClothingStoreProvider';
import '../Pages/CSS/SignUp.css'





const SignUp = () => {
        const { navigate } = useContext(ClothingStoreContext)
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");


    const validateInput = (name, email, password) => {
        const nameRegex = /^[a-zA-Z ]{3,}$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        return nameRegex.test(name) && emailRegex.test(email) && passwordRegex.test(password);
    };



    const userSignUp = async (e) => {
        e.preventDefault();

        if (!validateInput(name, email, password)) {
            setError("Invalid input.");
            return;
        }

        const signUpData = { name, email, password };

        try {
            const response = await fetch('https://clothingstore-backend-ncru.onrender.com/user/signup', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(signUpData),
            });
            const data = await response.json();
            if (data.success) {
                alert("Sign up successful");
                navigate("/login");
            } else {
                alert(data.message);
            }
        } catch (error) {
            console.error("Sign up Error:", error);
            alert("Something went wrong. Please try again.");
        }
    };





  return (
  <>

<div className={'signup-form-container'}>
            <div className={'signup-form-wrapper'}>
                <div className='signup-login-form'>
                    <form onSubmit={userSignUp}>
                        <div><h3>Sign Up</h3></div>
                        <div><input onChange={(e) => setName(e.target.value)} type='text' placeholder='Name' value={name} /></div>
                        <div><input onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' value={password} /></div>
                        <div><input onChange={(e) => setEmail(e.target.value)} type='email' placeholder='Email' value={email} /></div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                        <div><button type='submit'>Sign Up</button></div>
                    </form>
                </div>
            </div>
        </div>
    );



  </>
  )
}

export default SignUp
