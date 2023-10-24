import './../styles/11-add.css'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faKey } from "@fortawesome/free-solid-svg-icons";
export default function Add(){
    // password generator
    let arr ='azertyuiopqsdfghjklmwxcvbn0123456789';
    let [val,setVal]=useState('');
    function pw(){
        let newPassword = '';
        for(let i=0;i<8;i++){
            newPassword=arr[Math.floor(Math.random()*36)]+newPassword;
        }
        setVal(newPassword)
    }
    return(
        <>
            <section className="addPaitents">
                <form action="" className="addPaitentsForm">
                    <input type='text' className="inputsData" placeholder='name'/>
                    <input type='text' className="inputsData" placeholder='age' />
                    <input type='text' className="inputsData" placeholder='gender'/>
                    <div className="generatePassWordContainer">
                        <input type='text' className="inputsData" id='inputPassWord' placeholder='password'
                        value={val}
                        onChange={(e)=>{
                            setVal(e.target.value)
                        }} />
                        <FontAwesomeIcon className='generatePassWord' icon={faKey}
                            onClick={pw}
                        />
                    </div>
                        <button className="addPaitentsSubmit" type='button'>submit</button>
                </form>
            </section>
        </>
    )
}