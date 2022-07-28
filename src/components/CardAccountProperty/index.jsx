import "./Card-account-property.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLocationDot,
    faX,
    faPen,
    faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FaRegCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CardAccountProperty = ({ propriety }) => {
    const navigate = useNavigate();
    return (
        <div className="card-account-propriety">
            <div className="image-account-container">
                <img className="image" src={propriety.image} alt="alt" />
            </div>
            <div className="details-account">
                <div className="info">
                    <div
                        onClick={() =>
                            navigate("/details-annonce", {
                                state: propriety.id,
                            })
                        }
                        className="propriety-account-title"
                        style={{ cursor: "pointer" }}
                    >
                        {propriety.title}
                    </div>
                    <div className="price">{propriety.price} CFA/mois</div>
                    <div className="propriety-account-location">
                        <FontAwesomeIcon
                            icon={faLocationDot}
                            style={styles.iconColor}
                        />
                        Rd Congo, Kinshassa
                    </div>
                </div>
                <div className="date">
                    <div>
                        <FaRegCalendarAlt /> {propriety.date}
                    </div>
                </div>
                <div className="actions">
                    <div className="action-item">
                        <FontAwesomeIcon
                            icon={faPen}
                            style={styles.iconColor}
                        />
                        Éditer
                    </div>
                    <div className="action-item">
                        <FontAwesomeIcon
                            icon={faEyeSlash}
                            style={styles.iconColor}
                        />
                        Masquer
                    </div>
                    <div className="action-item">
                        <FontAwesomeIcon icon={faX} style={styles.iconColor} />{" "}
                        Supprimer
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

export default CardAccountProperty;
