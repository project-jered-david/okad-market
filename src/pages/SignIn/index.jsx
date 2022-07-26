import "./sign-in.css";

const SignIn = ({ setSignIn, SetSignUp }) => {
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
                                placeholder="Entrez votre courriel..."
                            />
                        </div>
                    </div>
                    <div className="password-container">
                        <div className="password-label">Mot de passe *</div>
                        <div className="password-input">
                            <input
                                type="password"
                                placeholder="Entrez votre mot de passe..."
                            />
                        </div>
                    </div>

                    <div className="connect-button">connexion</div>
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
