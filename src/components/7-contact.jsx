import './../styles/7-contact.css'
import {FaFacebook,FaInstagram,FaWhatsapp} from 'react-icons/fa'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faMobileScreenButton } from "@fortawesome/free-solid-svg-icons";

export default function Contact(){
    return(
        <>
            <section className='contact' id='contact'>
                <div className="contactInfo1">
                    <p className="contactTitle">Zeta</p>
                    <p className="contactSubTitles" id='contactSentence'>
                        we will do our best in order to give you the best expirience
                    </p>
                    <div className="phone">
                        <p className="contactSubTitles">call us</p>
                        <p className="contactSubTitles">
                            <FontAwesomeIcon className='mobileIcon' icon={faMobileScreenButton} /> 0697 13 37 15
                        </p>
                    </div>
                    <div className="socialMedia">
                        <p className="contactSubTitles">follow us</p>
                        <div className="appsIcons">
                            <FaFacebook className='appIcon' />
                            <FaInstagram className='appIcon'/>
                            <FaWhatsapp className='appIcon'/>
                        </div>
                    </div>
                </div>
                <div className="contactInfo2">
                    <p className="contactTitle">info</p>
                    <p className="contactSubTitles">Services</p>
                    <p className="contactSubTitles">About us</p>
                    <p className="contactSubTitles">Contact</p>
                    <p className="contactSubTitles">Map</p>
                </div>
                <div className="contactInfo3">
                    <p className="contactTitle">services</p>
                    <p className="contactSubTitles">X-rays</p>
                    <p className="contactSubTitles">blood test</p>
                    <p className="contactSubTitles">bone-scan</p>
                    <p className="contactSubTitles">more scans</p>
                </div>
                <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6394.50432239317!2d3.0338260545828257!3d36.740517999999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x128fad88d7d50bfd%3A0xf72e616d026d0a67!2sLaboratoire%20Bioplus%20Sidi%20Yahia!5e0!3m2!1sen!2sdz!4v1697732394526!5m2!1sen!2sdz" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <p className='copyRight'>© Copyright Zeta-Agency and contributors.by bourada amine&Achour Younes</p>
            </section>
        </>
    )
}