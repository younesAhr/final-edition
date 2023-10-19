import './../styles/5-about.css'
import Slider from './6-slider';
import { useState } from 'react';

export default function About(){
    const [artical,setArtical]=useState('time ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vestibulum augue, at luctus est bibendum eu. Phasellus non augue sed elit dapibus fermentum. Nullam efficitur, ante eget egestas tempus, ligula ipsum suscipit dui, eu vehicula velit eros eu ligula. Cras a fermentum ligula. Vivamus quis sapien in odio fermentum pharetra. Maecenas ac mi sit amet felis lacinia scelerisque. Sed a metus sit amet urna consectetur vehicula. Fus');
    const tabs=document.getElementsByClassName('picturesTabs');
    // function for displaying tabs
    function changeTabs(id){
        const ele=document.getElementById(id+'P')
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].style.display = 'none';
        }
        if(id == 'timeline' ){
            setArtical('time ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vestibulum augue, at luctus est bibendum eu. Phasellus non augue sed elit dapibus fermentum. Nullam efficitur, ante eget egestas tempus, ligula ipsum suscipit dui, eu vehicula velit eros eu ligula. Cras a fermentum ligula. Vivamus quis sapien in odio fermentum pharetra. Maecenas ac mi sit amet felis lacinia scelerisque. Sed a metus sit amet urna consectetur vehicula. Fus')
            ele.style.display='flex';
        }else{
            if(id == 'experience'){
                setArtical('doctors ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vestibulum augue, at luctus est bibendum eu. Phasellus non augue sed elit dapibus fermentum. Nullam efficitur, ante eget egestas tempus, ligula ipsum suscipit dui, eu vehicula velit eros eu ligula. Cras a fermentum ligula. Vivamus quis sapien in odio fermentum pharetra. Maecenas ac mi sit amet felis lacinia scelerisque. Sed a metus sit amet urna consectetur vehicula. Fus')
                ele.style.display='flex';
            }else{
                setArtical('machines ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vestibulum augue, at luctus est bibendum eu. Phasellus non augue sed elit dapibus fermentum. Nullam efficitur, ante eget egestas tempus, ligula ipsum suscipit dui, eu vehicula velit eros eu ligula. Cras a fermentum ligula. Vivamus quis sapien in odio fermentum pharetra. Maecenas ac mi sit amet felis lacinia scelerisque. Sed a metus sit amet urna consectetur vehicula. Fus')
                ele.style.display='flex';
            }
        }
    }
    return(
        <>
            <section className="about" id='about'>
                <div className="picturesSide">
                    <img src="src\pics\timelinePic.png" alt="timeline" className="picturesTabs" id='timelineP' />
                    <img src="src\pics\experiencePic.png" alt="experience" className="picturesTabs" id='experienceP' />
                    <div className="picturesTabs" id='machinesP'>
                        <Slider />
                    </div>
                </div>
                <div className="detailsSide">
                    <div className="aboutTitles">
                        <p className="aboutTitle1">About</p>
                        <p className="aboutTitle2">We are the best to take</p>
                        <p className="aboutTitle2">care of you</p>
                    </div>
                    <div className="aboutButtonsContainer">
                        <button className="aboutButtons" id='timeline' onClick={() => changeTabs('timeline')}>Timeline</button>
                        <button className="aboutButtons" id='experience' onClick={() => changeTabs('experience')}>Experience</button>
                        <button className="aboutButtons" id='machines' onClick={() => changeTabs('machines')}>Machines</button>
                    </div>
                    <div className="aboutArtical">
                        {artical}
                    </div>
                </div>
            </section>
        </>
    )
}