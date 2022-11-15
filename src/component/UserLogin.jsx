import React,{useState} from "react";
import "../css/UserLogin.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link,useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form';

export default function Login() {
const navigate=useNavigate();
const {signup,setsignUp}=useState([]); 
const {register,handleSubmit}=useForm();
const {login,handleClick}=useNavigate();
const onSubmit=data=>{
    const list=[];
    alert("register successfully");
}



const navigateShop = () => {
    navigate('/showproduct');
  };
  return (
    <>
        <Button><b><Link to="/" className="link">Home</Link></b></Button>
        <div className="row">
            <div className="col">
                <div className="container">
                <h1>Login</h1>
                <form onSubmit={navigateShop}>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" {...register("email")} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" {...register("password")}  id="exampleInputPassword1" placeholder="Password" required/>
                    </div>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                        <button   type="submit"  class="btn btn-primary">Submit</button>
                </form>
                </div>
            </div>
            <div className="col">
                <div className="container">
              <h1>SignUp</h1>
              <form onSubmit={handleSubmit(onSubmit)} >
                    <div class="form-group">
                        <label for="exampleInputEmail1">Name</label>
                        <input type="text" class="form-control" {...register("name")} id="exampleInputEmail1" aria-describedby="name" placeholder="Name" required/><br></br>
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input type="email" class="form-control" {...register("emailHelp")} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <br></br>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input type="password" class="form-control" {...register("password")} id="exampleInputPassword1" placeholder="Password" required/>
                    </div><br></br>
                    <div class="form-group form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                        <label class="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                        <button type="submit" class="btn btn-primary" >Submit</button>
                </form>
              </div>
            </div>
        </div>
       
    </>
  );
}