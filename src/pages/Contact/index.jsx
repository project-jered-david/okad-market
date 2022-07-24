import "./contact.css";
import { FaEnvelope, FaPhone, FaHome } from "react-icons/fa";
const Contact = () => {
    return (
        <div className="contact">
            <div className="title">Contact</div>
            <div className="contact-wrapper">
                <div className="contact-form">
                    <div className="contact-form-wrapper">
                        <div className="client-info">
                            <input
                                id="client-lastname"
                                type="text"
                                placeholder="Nom..."
                            />
                            <input
                                id="client-firstname"
                                type="text"
                                placeholder="Prenom..."
                            />
                        </div>
                        <div className="client-email">
                            <input
                                id="email"
                                type="text"
                                placeholder="Courriel..."
                            />
                        </div>
                        <div className="client-message">
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Tapez votre message"
                            ></textarea>
                        </div>
                        <div
                            style={{
                                background: "#57bf27",
                                padding: "10px",
                                width: "fit-content",
                                textAlign: "center",
                                color: "#fff",
                                marginTop: "10px",
                                cursor: "pointer",
                            }}
                        >
                            Envoyer
                        </div>
                    </div>
                </div>
                <div className="contact-info">
                    <div className="contact-info-wrapper">
                        <div className="get-in-touch-title">En savoir plus</div>
                        <div className="get-in-touch-subtitle">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua.
                        </div>
                        <div className="address">
                            <FaHome style={{ color: "#57bf27" }} />
                            Congo, Kinshassa
                        </div>
                        <div className="address">
                            <FaEnvelope style={{ color: "#57bf27" }} />
                            okadmarket@okad.com
                        </div>
                        <div className="address">
                            <FaPhone style={{ color: "#57bf27" }} />
                            +1-333-333-4444
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
