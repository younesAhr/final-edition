import './../styles/6-slider.css'
import sliderPic1 from './../pics/sliderPic1.png'
import sliderPic2 from './../pics/sliderPic2.png'
import sliderPic3 from './../pics/sliderPic3.png'
import { useState } from 'react'

export default function Slider(){
    const [index,setIndex]=useState(1);
    const arr=[sliderPic1,sliderPic2,sliderPic3];
    function change(direction){
        if(direction == 'right'){
            if(index == 2){
                setIndex(0);
            }else{
                setIndex(index +1);
            }
        }
        if(direction == 'left'){
            if(index == 0){
                setIndex(2);
            }else{
                setIndex(index -1);
            }
        }
    }
    return(
        <>
            <div className="slider">
                <button className="changePictures" id='left' onClick={()=>{change('left')}}>&#60;</button>
                <img src={arr[index]} alt="photo" className="sliderPicture" />
                <button className="changePictures" id='right' onClick={()=>{change('right')}}>&#62;</button>
            </div>
        </>
    )
}