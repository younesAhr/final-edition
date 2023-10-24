import './../styles/13-user.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

export default function User(props){
    return(
        <>
            <div className="paitentsDataContainer">
                <p className="paitentData">{props.name}</p>
                <p className="paitentData">{props.age}</p>
                <p className="paitentData">{props.gender}</p>
                <p className="paitentData">{props.status}</p>
                <p className="paitentData"id='pushResults'><FontAwesomeIcon icon={faPenToSquare}/> push</p>
            </div>
        </>
    )
}
User.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    gender: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
};