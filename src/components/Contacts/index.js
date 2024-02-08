import React from 'react';
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import "./index.css";

class Contacts extends React.Component {
    render() {
        return (
          <div id="contacts" className='contacts-container'>
            <div className='icons-container'>
              <a href= "https://www.instagram.com/thousif_baba?igsh=N214aWptemluZHJw&utm_source=qr" target='_blank' rel='noreferrer'>
                <RiInstagramFill size={28}/>
              </a>
              <a href='https://www.linkedin.com/in/thousif-baba-mullah/' target='_blank' rel='noreferrer'>
                <FaLinkedin size={25} />
              </a>
              <a href='mailto:thousifbaba2255@gmail.com' target='_blank' rel='noreferrer'>
                <IoIosMail size={35} />
              </a>
            </div>
            <p className='copyrights-para'>Copyright © 2024. All rights reserved</p>
            <img className='footer-image' src="https://fincity-assignment.vercel.app/_next/image?url=%2Fsection-bottom.png&w=1920&q=75" alt="footerimage"/>
          </div>
        );
      }
}

export default Contacts;