import React from 'react';
import {MDBContainer, MDBFooter} from 'mdbreact';
import './style.scss';

const Footer = () => {
  return (
    <>
      <div className='phantom' />
      <MDBFooter color='cyan' className='font-small pt-4 mt-4 footer'>
        <div className='footer-copyright text-center py-3'>
          <MDBContainer fluid>&copy; {new Date().getFullYear()} Made by Dennis Kumar</MDBContainer>
        </div>
      </MDBFooter>
    </>
  );
};

export default Footer;
