import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import "./add-new-ad.css";
import CustomDropDown from "../../components/CustomDropDown";
const propertyStatus = ["Excellent", "Bon", "Moyen", "Usagé"];
const propertyType = ["Maison", "Boutique", "Magasin", "Appartement", "Hôtel"];
const propertyCity = ["Ville-1", "Ville-2", "Ville-3"];
/* const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; */

const AddNewAd = () => {
    const [nombreFichierChoisi, setNombreFichierChoisi] = useState(0);
    const [etatPropriete, setEtatPropriete] = useState(propertyStatus[0]);
    const [typePropriete, setTypePropriete] = useState(propertyType[0]);
    const [villePropriete, setVillePropriete] = useState(propertyCity[0]);
    const [description, setDescription] = useState("");
    const editor = useRef(null);
    const config = {
        readonly: false, // all options from https://xdsoft.net/jodit/doc/,
        width: "100%",
        minHeight: "300px",
        placeholder: "Tapez ici la description ...",
        hidePoweredByJodit: true,
    };

    const onSubmitNewAd = (e) => {
        e.preventDefault();
    };
    return (
        <div className="add-new-ad">
            <div className="title">Ajouter votre annonce</div>
            <div className="new-ad-form-container">
                <form
                    onSubmit={onSubmitNewAd}
                    className="new-ad-form-container-wrapper"
                >
                    <div className="basic-info-label">Informations de base</div>
                    <div className="basic-infos">
                        <div className="info">
                            <div className="label-info">Titre</div>
                            <input
                                type="text"
                                placeholder="Titre de l'annonce..."
                            />
                        </div>
                        <div className="info">
                            <div className="label-info">Prix</div>
                            <input type="number" placeholder="Prix..." />
                        </div>
                        <div className="info">
                            <div className="label-info">Type de propriété</div>
                            <CustomDropDown
                                options={propertyType}
                                setValue={setTypePropriete}
                            />
                        </div>
                    </div>
                    <div className="basic-infos">
                        <div className="info">
                            <div className="label-info">Superficie</div>
                            <input type="number" placeholder="m2..." />
                        </div>
                        <div className="info">
                            <div className="label-info">Chambre(s)</div>
                            <input
                                type="number"
                                placeholder="Nombre de chambre..."
                            />
                        </div>
                        <div className="info">
                            <div className="label-info">Salle(s) de bain</div>
                            <input
                                type="number"
                                placeholder="Nombre de salle(s) de bain..."
                            />
                        </div>
                    </div>
                    <div className="basic-info-label">Emplacement</div>
                    <div className="basic-infos">
                        <div className="info">
                            <div className="label-info">Quartier</div>
                            <input
                                type="text"
                                placeholder="Titre de l'annonce..."
                            />
                        </div>
                        <div className="info">
                            <div className="label-info">Ville</div>
                            <CustomDropDown
                                options={propertyCity}
                                setValue={setVillePropriete}
                            />
                        </div>
                    </div>
                    <div className="basic-info-label">Photos</div>
                    <div className="basic-infos">
                        <div className="info">
                            <label className="images" htmlFor="images">
                                {nombreFichierChoisi > 0
                                    ? `${nombreFichierChoisi} fichier(s) choisi(s)`
                                    : "Téléchargez les photos"}
                            </label>
                            <input
                                id="images"
                                type="file"
                                placeholder="Titre de l'annonce..."
                                multiple
                                accept="image/*"
                                onChange={(e) =>
                                    setNombreFichierChoisi(
                                        e.target.files.length
                                    )
                                }
                            />
                        </div>
                    </div>
                    <div className="basic-info-label">Description</div>
                    <JoditEditor
                        ref={editor}
                        value={description}
                        config={config}
                        tabIndex={1} // tabIndex of textarea
                        onBlur={(newContent) => setDescription(newContent)} // preferred to use only this option to update the content for performance reasons
                        onChange={(newContent) => {}}
                    />
                    <div className="basic-infos">
                        <div className="info">
                            <div className="label-info">
                                Age de la propriété (en année(s))
                            </div>
                            <input
                                type="number"
                                placeholder="Age de la propriété..."
                            />
                        </div>
                        <div className="info">
                            <div className="label-info">Nombre étage</div>
                            <input
                                type="number"
                                placeholder="Nombre étage..."
                            />
                        </div>
                        <div className="info">
                            <div className="label-info">
                                État de la propriété
                            </div>
                            <CustomDropDown
                                options={propertyStatus}
                                setValue={setEtatPropriete}
                            />
                        </div>
                    </div>
                    {/* DÉtail proprietaires */}
                    <div className="basic-info-label">
                        Détails du propriétaire
                    </div>
                    <div className="basic-infos">
                        <div className="info">
                            <div className="label-info">Nom</div>
                            <input type="text" placeholder="Nom..." />
                        </div>
                        <div className="info">
                            <div className="label-info">Prenom</div>
                            <input type="text" placeholder="Prenom..." />
                        </div>
                        <div className="info">
                            <div className="label-info">Téléphone</div>
                            <input type="number" placeholder="Téléphone..." />
                        </div>
                        <div className="info">
                            <div className="label-info">Courriel</div>
                            <input type="text" placeholder="Courriel..." />
                        </div>
                    </div>

                    <input type="submit" value={"Déposer"} />
                </form>
            </div>
        </div>
    );
};

export default AddNewAd;
