import Pagination from "../../components/Pagination";
import "./annonces.css";

const Annonces = () => {
    return (
        <div className="annonces">
            <div className="title">Annonces</div>
            <div className="annonces-wrapper">
                <div className="left-side">
                    <div className="left-side-wrapper">
                        <div className="advanced-search">Recherche avancée</div>
                        <div className="search-filters">
                            <select name="property-status" id="">
                                <option value="default-status">
                                    Statut propriété
                                </option>
                                <option value="a-vendre">À vendre</option>
                                <option value="a-louer">À louer</option>
                            </select>

                            <select name="villes" id="">
                                <option value="villes">villes</option>
                                <option value="ville-1">Ville 1</option>
                                <option value="ville-2">Ville 2</option>
                            </select>

                            <select name="property-type" id="">
                                <option value="type-propriete">
                                    Type propriété
                                </option>
                                <option value="maison">Maison</option>
                                <option value="boutique">Boutique</option>
                            </select>

                            <select name="property-price" id="">
                                <option value="prix">prix</option>
                                <option value="prix-asc">Prix croissant</option>
                                <option value="prix-desc">
                                    Prix décroissant
                                </option>
                            </select>
                        </div>
                        <div className="search-submit">Rechercher</div>
                    </div>
                </div>
                <div className="right-side">
                    <Pagination itemsPerPage={4} />
                </div>
            </div>
        </div>
    );
};

export default Annonces;
