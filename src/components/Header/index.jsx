import { useNavigate } from "react-router-dom";
import CustomDropDown from "../CustomDropDown";
import { useState } from "react";
import "./header.css";

const propertyCity = ["Villes", "Ville-1", "Ville-2", "Ville-3"];
const propertyType = [
    "Type",
    "Maison",
    "Boutique",
    "Magasin",
    "Appartement",
    "Hôtel",
    "Bureau",
    "Commercial",
    "Autres",
];

const Header = () => {
    const navigate = useNavigate();
    const [typePropriete, setTypePropriete] = useState(propertyType[0]);
    const [villePropriete, setVillePropriete] = useState(propertyCity[0]);
    return (
        <div className="header">
            <div className="title">
                <div>
                    Avec{" "}
                    <span
                        onClick={() => navigate("/")}
                        style={{ color: "black", cursor: "pointer" }}
                    >
                        OKAD-MARKET
                    </span>
                    , TROUVEZ VOS PROPRIÉTÉS DE RÊVE
                </div>
                <div className="subtitle">
                    Trouvez tout type de propriété situé dans votre ville
                    locale.
                </div>
            </div>
            <div className="bottom">
                <div className="buttons">
                    <div
                        className="rent-button"
                        onClick={() =>
                            navigate("/annonces", {
                                state: "Location",
                            })
                        }
                    >
                        LOUER
                    </div>
                    <div
                        className="buy-button"
                        onClick={() =>
                            navigate("/annonces", {
                                state: "Vente",
                            })
                        }
                    >
                        ACHETER
                    </div>
                </div>
                <div className="search-filter-container">
                    <input
                        type="text"
                        className="search-item border input"
                        placeholder="Entrez un mot-clé"
                    />
                    <CustomDropDown
                        options={propertyType}
                        setValue={setTypePropriete}
                    />
                    <CustomDropDown
                        options={propertyCity}
                        setValue={setVillePropriete}
                    />
                    <div
                        onClick={() => navigate("/annonces")}
                        className="search-button search-button-border"
                    >
                        Rechercher
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
