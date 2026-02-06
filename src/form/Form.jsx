import React, { useState } from 'react'

const Form = () => {
    const[formdata, setFormdata] = useState({
        username:"",
        email:"",
        password:""
    })

    const[error, setError] = useState({})

    const validate = () =>{
        const newError = {}

        if(!formdata.username) newError.username = "Username is required"

        if(!formdata.email) newError.email = "Email is required"

        else if(!/\S+@\S+\.\S+/.test(formdata.email)) newError.email = "Email is invalid"

        if(!formdata.password) newError.password = "Password is required"

        else if(formdata.password.length < 7) newError.password = "Password must be at least 7 characters long"

        else if(!/[A-Z]/.test(formdata.password)) newError.password = "Password must contain at least one uppercase letter"

        return newError
    }

    const handleChnage = (e) =>{
        const{name, value} = e.target

        setFormdata({
            ...formdata,

            [name]:value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        const validation = validate()

        if(Object.keys(validation).length === 0){
            console.log(formdata)

            setFormdata({
                username:"",
                email:"",
                password:""
            })

            setError({})
        }
        else{
            setError(validation)
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Usename</label>
            <input type='text' name='username' value={formdata.username} onChange={handleChnage}></input>
            {error.username && <p>{error.username}</p>}
            <label>Email</label>
            <input type='text' name='email' value={formdata.email} onChange={handleChnage}></input>
            {error.email && <p>{error.email}</p>}
            <label>Password</label>
            <input type='text' name='password' value={formdata.password} onChange={handleChnage}></input>
            {error.password && <p>{error.password}</p>}
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form