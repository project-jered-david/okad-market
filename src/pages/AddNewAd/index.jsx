import { useState, useRef } from "react";
import JoditEditor from "jodit-react";
import "./add-new-ad.css";

const AddNewAd = () => {
    const [nombreFichierChoisi, setNombreFichierChoisi] = useState(0);
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
                            <select>
                                <option value="appartement">Appartement</option>
                                <option value="maison">Maison</option>
                                <option value="boutique">Boutique</option>
                            </select>
                        </div>
                    </div>
                    <div className="basic-infos">
                        <div className="info">
                            <div className="label-info">Superficie</div>
                            <input type="number" placeholder="m2..." />
                        </div>
                        <div className="info">
                            <div className="label-info">Chambre(s)</div>
                            <select>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                            </select>
                        </div>
                        <div className="info">
                            <div className="label-info">Salle(s) de bain</div>
                            <select>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                            </select>
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
                            <select>
                                <option value="ville-1">Ville-1</option>
                                <option value="ville-2">Ville-2</option>
                                <option value="ville-3">Ville-3</option>
                            </select>
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
                                Age de la propriété (année(s))
                            </div>
                            <select>
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                        </div>
                        <div className="info">
                            <div className="label-info">Nombre étage</div>
                            <select>
                                <option value={0}>0</option>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                            </select>
                        </div>
                        <div className="info">
                            <div className="label-info">
                                État de la propriété
                            </div>
                            <select>
                                <option value="neuf">excellent</option>
                                <option value="bon">bon</option>
                                <option value="boutique">moyen</option>
                                <option value="boutique">usagé</option>
                            </select>
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
                            <input type="number" placeholder="Prix..." />
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
