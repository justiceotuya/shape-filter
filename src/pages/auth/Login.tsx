import React, { useState,useContext,useEffect } from 'react'
import { useHistory } from 'react-router';

import styled from 'styled-components'
import { AuthContext } from '../../context/auth';

interface Props {

}

const StyledLogin = styled.div`
background: #F7F8F9;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;

.login__container{
  background: #FFFFFF;
box-shadow: 0px 10px 20px rgba(255, 255, 255, 0.15);
border-radius: 12px;
width:100%;
margin: 0 20px;
max-width: 456px;
}
.login__header{
  font-size: 18px;
line-height: 150%;
text-align: center;
color: #0A1F44;
padding: 15px 0;
border-bottom: 1px solid #F1F2F4;
}
.input__container{
  display: flex;
  flex-direction: column;
    margin-bottom: 16px;

  label {
    font-weight: 500;
font-size: 14px;
line-height: 150%;
color: #0A1F44;
margin-bottom: 6px;
  }

  input {
    background: #FFFFFF;
  border:  1px solid #E1E4E8;
box-sizing: border-box;
border-radius: 12px;
/* height:46px; */
outline: none;
padding: 12px 16px ;
:focus {
border: 2px solid #32BDD1;

}
  }

    :nth-of-type(2){
    margin-bottom: 24px;
  }

}
.login__body{
  padding: 24px 32px 40px 32px ;
}

button {
  background: #00A6EF;
border-radius: 12px;
font-weight: 500;
font-size: 14px;
line-height: 150%;
text-align: center;
color: #FFFFFF;
width: 100%;
height:46px;
border:none;
}
`;
export const Login = (props: Props) => {
  const {login, user} = useContext(AuthContext)
  const history = useHistory();
  const [ profile, setProfile ] = useState({
    name: "",
    email:""
  })

  useEffect(() => {
    if (user && typeof user === 'object' && Object.values(user).length > 0) {
      history.push("/")
    }
  }, [user])

  const handleProfileValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({
      ...profile,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log({ profile, exp: new Date(Date.now() + 10 * 60000).getTime() })
    login(profile)
    history.push("/")
  }

  return (
    <StyledLogin>
      <div className="login__container">
        <div className="login__header">Login</div>
        <form className="login__body" onSubmit={handleSubmitForm}>
      <div className="input__container">
        <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" value={profile.name} onChange={handleProfileValue} required/>
      </div>
      <div className="input__container">
        <label htmlFor="email">Email address</label>
<input type="email" name="email" id="email"  value={profile.email} onChange={handleProfileValue} required/>
      </div>

        <button>Submit</button>
        </form>
        </div>
      </StyledLogin>
  )
}
