import './../styles/14-statCard.css'
import PropTypes from "prop-types";
import {  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Card(props){
    return(
        <>
            <div className="statisticCard">
                <div className="statisticCardTitles">
                    <FontAwesomeIcon className='statisticsLogo' icon={props.icon}/>
                    <p className="statisticCardTitle">{props.title}</p>
                </div>
                <p className="statisticCardNumber">{props.number}</p>
                <p className="statisticPercent">{props.percent}</p>
            </div>
        </>
    )
}
Card.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,
    percent: PropTypes.string.isRequired,
}