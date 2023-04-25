import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AdminPass = () => {


    const adminInfo = {
        email: "admin@admin.com",
        password: "20232023"
    }

    const [alertType,setAlertType] = useState("");
    const [alertText,setAlertText] = useState("");
    const emailRef = useRef();
    const passRef = useRef();
    const navigate = useNavigate();


    const formSubmit =(e)=>{
        e.preventDefault();
        if(!emailRef.current.value   || !passRef.current.value){
            setAlertType("warning");
            setAlertText("Please fill the gap");
        }else{
            if(emailRef.current.value===adminInfo.email   && passRef.current.value==adminInfo.password){
                setAlertType("success")
                setAlertText("You have entered successfully!!!");
                navigate('/adminPanel')
            }else{
                setAlertType("danger");
                setAlertText("Password or email is wrong!!!")
            }
        }
    }


  return (
    <section className="AdminPage">
            <div className="head d-block d-sm-none d-md-none text-center mb-5">
                <h4 className="alert">Welcome Adminstrator!!!</h4>
            </div>


            <div className="row">
                <div className="col-12 col-sm-6 col-md-8 d-none d-sm-flex" id="left">
                    <div className="container">
                        <div className="text text-center">
                            <h1 className="mb-3">Welcome Adminstrator!!!</h1>
                            <h6>Only for admins...</h6>
                        </div>
                    </div>
                </div>

                <div className="col-12 col-sm-6 col-md-4" id="right">

                    <div className="info text-center mt-5">
                        <h3>Login</h3>
                        <p className={`mt-2 alert alert-${alertType}`}>{alertText}</p>
                    </div>

                    <div className="container">
                        <form onSubmit={formSubmit}>
                            <div className="mt-5 mb-2">
                                <label className="form-label">Email address</label>
                                <input type="email" className="form-control"
                                    ref={emailRef}
                                />
                            </div>

                            <div className="mb-2">
                                <label  className="form-label">Password</label>
                                <input  type="password" className="form-control" id="exampleInputPassword1"
                                    ref={passRef}
                                 />
                            </div>                            

                            <button  type="submit" className="btn mt-3">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>  
  )
}

export default AdminPass