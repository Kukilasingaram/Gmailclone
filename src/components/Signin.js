import React from "react";
import { Button} from '@mui/material'
import social from "../images/social.png"
import { signInWithPopup } from "firebase/auth";
import {auth, googleProvider} from '../firebase/setup'
import {useNavigate} from 'react-router-dom'


function Signin(){
    const navigate = useNavigate()



    const googleSignin = async() =>{
        try {
            await signInWithPopup(auth,googleProvider)
            navigate("/main")
        } catch (error) {
            console.log(error)
        }
        
        
    }
    console.log(auth)
    return(
        <div style={{position:"absolute", left:"28%",padding:"110px"}}>
            <div style={{border:"1px solid grey",padding:"20px",textAlign:"center",borderRadius:"5px",minHeight:"310px",maxWidth:"350px"}}>
                <img style={{width: "70px"}} src={social}/>
            <h2 style={{fontWeight:"200"}}>Create Your google clone account</h2>
            <h3 style={{fontWeight:"200"}}>Click the signin button</h3>
            <Button onClick={googleSignin} variant='contained'>Signin with google </Button>
            </div>
        </div>
    )
}
export default Signin