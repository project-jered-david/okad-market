import "./card-propriety.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faBed,
    faBath,
} from "@fortawesome/free-solid-svg-icons";
import { MdGarage, MdGridOn } from "react-icons/md";
import { FaUserAlt, FaRegCalendarAlt, FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CardPropriety = ({ propriety }) => {
    const navigate = useNavigate();
    return (
        <div className="card-propriety">
            <div className="type">
                {propriety.type === "LOUER" ? "À LOUER" : "À VENDRE"}
            </div>
            <div
                className="image-container"
                onClick={() =>
                    navigate("/details-annonce", {
                        state: propriety.id,
                    })
                }
            >
                <img className="image" src={propriety.image} alt="alt" />
                <div className="like">
                    <FaHeart />
                </div>
            </div>
            <div className="price">{propriety.price} CFA/mois</div>
            <div className="details">
                <div className="propriety-title" style={{ cursor: "pointer" }}>
                    <div
                        onClick={() =>
                            navigate("/details-annonce", {
                                state: propriety.id,
                            })
                        }
                    >
                        {propriety.title}
                    </div>

                    <div
                        className="book-button"
                        onClick={() =>
                            navigate("/reservation", {
                                state: propriety.number,
                            })
                        }
                    >
                        Réserver
                    </div>
                </div>
                <div className="propriety-location">
                    <FontAwesomeIcon
                        icon={faLocationDot}
                        style={styles.iconColor}
                    />
                    Rd Congo, Kinshassa
                </div>
                <div className="extra-feature">
                    <div className="extra-feature-item">
                        <FontAwesomeIcon
                            icon={faBed}
                            style={styles.iconColor}
                        />
                        {propriety.bedroom} chambre(s)
                    </div>
                    <div className="extra-feature-item">
                        <FontAwesomeIcon
                            icon={faBath}
                            style={styles.iconColor}
                        />
                        {propriety.bathroom} salle(s) de bain
                    </div>
                </div>
                <div className="extra-feature">
                    <div className="extra-feature-item">
                        <MdGridOn style={styles.iconColor} />
                        {propriety.space} m2
                    </div>
                    <div className="extra-feature-item">
                        <MdGarage style={styles.iconColor} /> {propriety.garage}{" "}
                        garage(s)
                    </div>
                </div>
            </div>
            <div className="info">
                <div className="info-wrapper">
                    <div className="author">
                        <FaUserAlt style={styles.iconColor} />
                        okad-market
                    </div>
                    <div className="date">
                        <FaRegCalendarAlt />
                        {propriety.date}
                    </div>
                </div>
            </div>
        </div>
    );
};
const styles = {
    iconColor: {
        color: "#57bf27",
    },
};

export default CardPropriety;
