import { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';



export function SignUpForm() {
    const [signUpStatus, setSignUpStatus] = useState("")
    const navigate = useNavigate();


    function checkSignUpResponse(response_status : number, response_text : string, username: string ) {

        switch(response_status) {
            case(400):{
                setSignUpStatus(response_text)
                break;
            }
            case(201): {
                console.log(response_status)
                console.log(response_text)
                localStorage.setItem("username", username)
                navigate('/');
                window.location.reload();
            }
        }
    }
    
    const handleSignUp = (event) =>  {
        event.preventDefault();

        let username =  event.target.username.value
        let email =  event.target.email.value
        let password =  event.target.password.value
        let password_repeat =  event.target.password_repeat.value
        let user = {username , email, password}

        if(password != password_repeat){
            setSignUpStatus("Passwords didn't match!")
            return
        }

        fetch("http://localhost:3000/users", {
            method: "POST",
            body: JSON.stringify(user),
            headers:{
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        }).then(async function(response) {
            let response_text = await response.text()
            let response_status = response.status
            checkSignUpResponse(response_status, response_text, username)
        })
    }



    return (
      <div className="col-sm-6   text-center offset-sm-3 ">
        <h1 className="d-flex align-items-center justify-content-center">Register</ h1>
        <form onSubmit={handleSignUp} >
            <br />
            <div className="d-flex" >
            <input name="username" className="form-control" required type="text" placeholder="Username" maxLength={20}  />
            </div>
            <br />
            <input name="email" className="form-control" required type="email" maxLength={50} placeholder="Email" />
            <br />
            <input name="password" className="form-control" required type="password" maxLength={20} placeholder="Password"  />
            <br />
            <input name="password_repeat" className="form-control" required type="password" maxLength={20} placeholder="Repeat password" />
            <br />
            {signUpStatus &&
                <Alert key={signUpStatus} variant='danger'>
                    {signUpStatus}
                </Alert>
            }
        
            <input className="btn btn-primary" type="submit" value="Create Account" />
        </form>
      </div>
  )
}

