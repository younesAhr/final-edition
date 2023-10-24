import './../styles/10-paitents.css'
import User from './13-user.jsx'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

export default function Paitents(){
    return(
        <>
            <div className="paitents">
                <div className="paitentsTable">
                    <header className="paitentsHead">
                        <p className="paitentTitle">patient details</p>
                        <div className="patientSearchContainer">
                            <input type="text" className="patientSearch" placeholder='search' />
                            <FontAwesomeIcon className='searchIcon' icon={faSearch}/>
                        </div>
                    </header>
                    <div className="paitentDataTitles">
                        <p className="paitentDataTitle">Name</p>
                        <p className="paitentDataTitle">age</p>
                        <p className="paitentDataTitle">Gender</p>
                        <p className="paitentDataTitle">Status</p>
                        <p className="paitentDataTitle">Result</p>
                    </div>
                    <div className="paitentsContainer">
                        <User name='younes' age={19} gender='male' status='done' />
                    </div>
                </div>
            </div>
        </>
    )
}