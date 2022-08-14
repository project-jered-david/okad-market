import "./register.css";

const Register = ({ setSignIn, SetSignUp }) => {
    return (
        <div className="register-container">
            <div className="register-wrapper">
                <div className="title">Inscription</div>
                <div className="input-container">
                    <div className="email-container">
                        <div className="email-label">Nom *</div>
                        <div className="email-input">
                            <input
                                type="text"
                                placeholder="Entrez votre nom..."
                            />
                        </div>
                    </div>
                    <div className="email-container">
                        <div className="email-label">Prenom *</div>
                        <div className="email-input">
                            <input
                                type="text"
                                placeholder="Entrez votre prenom..."
                            />
                        </div>
                    </div>
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
                    <div className="password-container">
                        <div className="password-label">
                            Confirmez votre mot de passe *
                        </div>
                        <div className="password-input">
                            <input
                                type="password"
                                placeholder="Confirmez votre mot de passe..."
                            />
                        </div>
                    </div>

                    <div className="connect-button">Inscription</div>
                    <div className="redirect-register">
                        Vous avez déjà un compte?
                        <span
                            style={{
                                color: "#57bf27",
                                cursor: "pointer",
                                fontWeight: "bold",
                            }}
                            onClick={() => {
                                setSignIn(true);
                                SetSignUp(false);
                            }}
                        >
                            Se connecter
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
