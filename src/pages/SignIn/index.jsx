import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sign-in.css";

const SignIn = ({ setSignIn, SetSignUp }) => {
    const navigate = useNavigate();
    const [error, setError] = useState(false);
    const [courriel, setCourriel] = useState("");
    const [password, setPassword] = useState("");
    const handleSignIn = () => {
        setSignIn(false);
        navigate("/mon-compte/david");
    };
    return (
        <div className="sign-in-container">
            <div className="sign-in-wrapper">
                <div className="title">Connexion</div>
                <div className="input-container">
                    <div className="email-container">
                        <div className="email-label">Courriel *</div>
                        <div className="email-input">
                            <input
                                type="text"
                                value={courriel}
                                onChange={(e) => setCourriel(e.target.value)}
                                placeholder="Entrez votre courriel..."
                            />
                        </div>
                    </div>
                    <div className="password-container">
                        <div className="password-label">Mot de passe *</div>
                        <div className="password-input">
                            <input
                                value={password}
                                type="password"
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Entrez votre mot de passe..."
                            />
                        </div>
                    </div>

                    <span
                        style={{ visibility: error ? "visible" : "hidden" }}
                        data-testid="error-sign-in"
                    >
                        erreur
                    </span>

                    <button
                        disabled={!courriel || !password}
                        style={{ border: "none" }}
                        data-testid="sign-in-button"
                        onClick={handleSignIn}
                        className="connect-button"
                    >
                        connexion
                    </button>
                    <div className="redirect-register">
                        Vous n'avez pas de compte?
                        <span
                            style={{
                                color: "#57bf27",
                                cursor: "pointer",
                                fontWeight: "bold",
                            }}
                            onClick={() => {
                                setSignIn(false);
                                SetSignUp(true);
                            }}
                        >
                            S'inscrire
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
