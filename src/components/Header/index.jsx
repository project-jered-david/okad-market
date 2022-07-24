import { useNavigate } from "react-router-dom";
import "./header.css";

const Header = () => {
    const navigate = useNavigate();
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
                    <div className="rent-button">LOUER</div>
                    <div className="buy-button">ACHETER</div>
                </div>
                <div className="search-filter-container">
                    <input
                        type="text"
                        className="search-item border input"
                        placeholder="Entrez un mot-clé"
                    />
                    <select className="search-item">
                        <option value="type-propriete">Type propriete</option>
                        <option value="maison">Maison</option>
                        <option value="appartement">Appartement</option>
                        <option value="magasin">Magasin</option>
                    </select>
                    <select className="search-item">
                        <option value="ville">Ville</option>
                        <option value="ville-1">ville-1</option>
                        <option value="ville-2">ville-2</option>
                        <option value="ville-3">ville-3</option>
                    </select>
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
