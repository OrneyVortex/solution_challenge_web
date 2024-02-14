import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { TiSocialFacebook,} from "react-icons/ti";
import { SlSocialGithub,SlSocialTwitter,SlSocialGoogle  } from "react-icons/sl";
function Login() {
  return (
    <MDBContainer fluid className='p-4'>

      <MDBRow>

        <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <img src="https://b.kisscc0.com/20230923/ahw/kisscc0-green-earth-planet-earth-650e9db0a43aa1.6565036916954566886727.png" alt="" srcset="" style={{height:"92vh"}} />
        </MDBCol>

        <MDBCol md='4'>
          <MDBCard className='my-5'>
            <MDBCardBody className='p-5'>

              <MDBRow style={{alignContent:"center",justifyContent:'center',textAlign:'center'}}>
                <h3>Log In</h3>
              </MDBRow>
              <br />

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email' style={{backgroundColor:"#EEEEEE"}}/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password' style={{backgroundColor:"#EEEEEE"}}/>

              <MDBBtn className='w-100' size='' style={{backgroundColor:"#F3DB71"}}>Log In</MDBBtn>

              <div className="text-center" >

                <p>or Continue with:</p>

                <MDBBtn tag='a' color='none' className='mx-3'>
                <TiSocialFacebook size=""/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3'>
                <SlSocialTwitter/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3'>
                <SlSocialGoogle />
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='mx-3' >
                  <SlSocialGithub/>
                </MDBBtn>
                
              </div>

            </MDBCardBody>
          </MDBCard>

        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Login;

