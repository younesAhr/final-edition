import './../styles/4-services.css'
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBone, faVial, faXRay } from "@fortawesome/free-solid-svg-icons";
// card code
export function Card(props) {
    return (
    <>
        <div className="card">
            <FontAwesomeIcon icon={props.icon} fontSize="4em" />
            <p className="cardSentence1">{props.title}</p>
            <p className="cardSentence2">
            description of the caces <br />
            that you wnna put in here and you can replace it.
            </p>
        </div>
    </>
    );
}
Card.propTypes = {
    icon: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
};
// services section code
export default function Services() {
    return (
    <>
        <section className="services" id="services">
            <div className="servicesTitles">
                <p className="servicesTitle1">Services</p>
                <p className="servicesTitle2">Services for each case</p>
            </div>
            <div className="cardsContainer">
            <Card title="X Rays" icon={faXRay} />
            <Card title="Blood test" icon={faVial} />
            <Card title="Bone scan" icon={faBone} />
            </div>
        </section>
    </>
    );
}
