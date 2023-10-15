import './../styles/2-home.css'
import pic12 from './../pics/pic12.png'
import { Link } from 'react-router-dom';

export default function Home(){
    return(
        <>
            <section className="home" id='home'>
                <article className='homeSentences'>
                    <p className="homeSentence1">INTRODUCTING A NEW HEALTH CARE</p>
                    <p className="homeSentence2">Bringing Loving</p>
                    <p className="homeSentence3">Care to Health Care</p>
                    <p className="homeSentence4">Our skilled nurses are ready to serve you the best,just trust us we wont disapoint you.</p>
                    <button className="viewServices">view all services</button>
                    <Link className='login1' to='/login'>log in</Link>
                </article>
                <img src={pic12} className="homePic"/>
            </section>
        </>
    )
}