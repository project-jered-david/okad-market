import "./how-it-work.css";
import { FaMapMarkedAlt, FaUsers, FaStickyNote } from "react-icons/fa";
const HowItWork = () => {
    return (
        <div className="how-it-work">
            <div className="title">Comment ça fonctionne?</div>
            <div className="steps">
                <div className="step">
                    <div className="step-number">1</div>
                    <div className="icon">
                        <FaMapMarkedAlt />
                    </div>
                    <div className="step-title">Évaluer la propriété</div>
                    <div className="step-details">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have Ipsum available.
                    </div>
                </div>
                <div className="step">
                    <div className="step-number">2</div>
                    <div className="icon">
                        <FaUsers />
                    </div>
                    <div className="step-title">Rencontrez votre agent</div>
                    <div className="step-details">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have Ipsum available.
                    </div>
                </div>
                <div className="step">
                    <div className="step-number">3</div>
                    <div className="icon">
                        <FaStickyNote />
                    </div>
                    <div className="step-title">Conclure la transaction</div>
                    <div className="step-details">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have Ipsum available.
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWork;
