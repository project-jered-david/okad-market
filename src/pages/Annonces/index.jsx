import { useState } from "react";
import { useLocation } from "react-router-dom";
import CustomDropDown from "../../components/CustomDropDown";
import Pagination from "../../components/Pagination";
import "./annonces.css";

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
const propertyCity = ["Villes", "Ville-1", "Ville-2", "Ville-3"];
const propertyPrice = ["Prix", "Prix croissant", "Prix décroissant"];
const propertyCategory = ["Catégorie", "Location", "Vente"];
const Annonces = () => {
    const { state: category } = useLocation();
    const [typePropriete, setTypePropriete] = useState(propertyType[0]);
    const [villePropriete, setVillePropriete] = useState(propertyCity[0]);
    const [prixPropriete, setPrixPropriete] = useState(propertyPrice[0]);
    const [categoriePropriete, setCategoriePropiete] = useState(
        propertyCategory[0]
    );
    return (
        <div className="annonces">
            <div className="title">Annonces</div>
            <div className="annonces-wrapper">
                <div className="left-side">
                    <div className="left-side-wrapper">
                        <div className="advanced-search">Recherche avancée</div>
                        <div className="search-filters">
                            <CustomDropDown
                                options={propertyCategory}
                                defaultOption={category}
                                setValue={setCategoriePropiete}
                            />
                            <CustomDropDown
                                options={propertyCity}
                                setValue={setVillePropriete}
                            />

                            <CustomDropDown
                                options={propertyType}
                                setValue={setTypePropriete}
                            />

                            <CustomDropDown
                                options={propertyPrice}
                                setValue={setPrixPropriete}
                            />
                        </div>
                        <div className="search-submit">Rechercher</div>
                    </div>
                </div>
                <div className="right-side">
                    <Pagination itemsPerPage={4} rowDirection={false} />
                </div>
            </div>
        </div>
    );
};

export default Annonces;
