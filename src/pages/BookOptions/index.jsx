import "./book-options.css";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { useLocation } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

const BookOptions = () => {
    const { state: propertyNumber } = useLocation();
    console.log(propertyNumber);

    return (
        <div className="book-options">
            <div className="title">Réservation</div>
            {/* Important messsage */}
            <div className="important-message">
                <FaExclamationTriangle style={{ color: "orange" }} />
                <div>
                    Ceci est une réservation pour une visite! Veuillez notez que
                    le paiement de{" "}
                    <span style={{ color: "#000", fontWeight: "bold" }}>
                        3000FCFA
                    </span>{" "}
                    se fera sur place juste avant la visite.
                </div>
            </div>
            {/* Call us */}
            <div className="call-us-for-booking">
                <div>
                    Appelez-nous au{" "}
                    <span
                        style={{
                            color: "#000",
                            cursor: "pointer",
                            fontWeight: "bold",
                        }}
                    >
                        +1-833-555-6669
                    </span>{" "}
                    pour complèter votre réservation pour la visite.
                </div>
                <div>
                    Veuillez s'il vous plait spécifier ce numéro :{" "}
                    <span style={{ color: "#000", fontWeight: "bold" }}>
                        #{propertyNumber}
                    </span>
                    .
                </div>
            </div>
        </div>
    );
};

export default BookOptions;
