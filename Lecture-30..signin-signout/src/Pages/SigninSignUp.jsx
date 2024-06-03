import React from 'react'
import { useEffect , useRef , useState } from 'react'
import Home from './Home'

const SignInSignUp = () => {

    const name = useRef()
    const email = useRef()
    const password = useRef()
    const [showHome , setShowHome] = useState(false)
    const[show , setshow] = useState(false)
    const localSignup = localStorage.getItem('signUp')
    const localEmail = localStorage.getItem('email')
    const localPassword = localStorage.getItem('password')
    const localName = localStorage.getItem('name')

    useEffect(() => {
        if(localSignup){
            
            setShowHome(true)
        }
        if(localEmail){
            setshow(true)
        }
    })

    const handleClick=() => {
        if(name.current.value&&email.current.value&&password.current.value){
            localStorage.setItem('name' , name.current.value)
            localStorage.setItem('email' , email.current.value)
            localStorage.setItem('password' , password.current.value)
            localStorage.setItem('signUp' , email.current.value)
            alert('Account Successfully reated!')
            window.location.reload()
        }
    }


    const handleSignIn = () => {
        if(email.current.value == localEmail&&password.current.value==localPassword){
            localStorage.setItem("signUp" , email.current.value)
            window,location.reload()
        }else{
            alert('please Enter Valid Credential')
        }
    }


  return (
    <div>
        {
            showHome ?<Home/>:
            (
                show ?
                ( 
                    <div>
                        <h1>Hello{localName}</h1>
                        <div>
                            <input type='email' placeholder='Email' ref={email}/>
                        </div>
                        <div>
                            <input type='password' placeholder='password' ref={password}/>
                        </div>
                        <button onClick={handleSignIn}>SignIn</button>
                    </div>
                ) : (
                    
                    <div className='flex h-screen  bg-red-500 justify-center items-center'>
                        <div className= 'bg-purple-500 p-12 border-4 border-solid border-black'>
                            <figcaption className='text-center font-bold border-amber-950'></figcaption>
                            <div className='mt-4'>
                                <input className='p-2' type='text' placeholder='Name' ref={name}/>
                            </div>
                            <div className='mt-4'>
                                <input className='p-2' type='email' placeholder='Email' ref={email}/>
                            </div>
                            <div className='mt-4'>
                                <input className='p-2' type='password' placeholder='Password' ref={password}/>
                            </div>
                            <button className='bg-orange-500 w-full mt-4 hover:text-white font-bold hover:border-2 hover:border-solid hover:border-black' onClick={handleClick}>SignUp</button>
                        </div>
                    </div>
                )
                
            )
        }
    </div>
  )
}

export default SignInSignUp;