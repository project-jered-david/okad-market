import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhone,
    faEnvelope,
    faUser,
    faClockFour,
    faArrowRightToBracket,
    faBars,
    faX,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import SignIn from "../../pages/SignIn";
import CustomModal from "../Modal";
import Register from "../../pages/Register";

const style = {
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%, -30%)",
    width: "80%",
    height: "80%",
    bgcolor: "background.paper",
    outline: "none",
    boxShadow: 0,
    p: 4,
};

const Navbar = () => {
    const navigate = useNavigate();
    const [fix, setFix] = useState(false);
    const [open, setOpen] = useState(false);
    const [signInOn, setSignInOn] = useState(false);
    const [registerOn, setRegisterOn] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleSignIn = () => {
        setSignInOn(true);
    };
    const handleSignUp = () => {
        setRegisterOn(true);
    };

    const setFixed = () => {
        if (window.scrollY >= 90) {
            setFix(true);
        } else {
            setFix(false);
        }
    };

    window.addEventListener("scroll", setFixed);
    return (
        <div className="navbar">
            {signInOn && (
                <CustomModal open={signInOn} setOpen={setSignInOn}>
                    <SignIn setSignIn={setSignInOn} SetSignUp={setRegisterOn} />
                </CustomModal>
            )}
            {registerOn && (
                <CustomModal open={registerOn} setOpen={setRegisterOn}>
                    <Register
                        setSignIn={setSignInOn}
                        SetSignUp={setRegisterOn}
                    />
                </CustomModal>
            )}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div onClick={handleClose} className="close-button">
                        <FontAwesomeIcon
                            icon={faX}
                            className="icon-close-button"
                            style={{
                                fontWeight: "bold",
                                fontSize: "25px",
                                color: "#57bf27",
                            }}
                        />
                    </div>
                    <div className="mobile-menu-buttons">
                        <div
                            className="home"
                            onClick={() => {
                                handleClose();
                                navigate("/");
                            }}
                        >
                            Acceuil
                        </div>
                        <div
                            onClick={() => {
                                handleClose();
                                navigate("/annonces");
                            }}
                            className="ad"
                        >
                            Annonces
                        </div>
                        <div
                            className="contact"
                            onClick={() => {
                                handleClose();
                                navigate("/contact");
                            }}
                        >
                            Contact
                        </div>
                        <div
                            className="about-us"
                            onClick={() => {
                                handleClose();
                                navigate("/a-propos");
                            }}
                        >
                            À propos
                        </div>
                        <div
                            className="submit-new-ad-mobile"
                            onClick={() => {
                                handleClose();
                                navigate("/ajouter-une-annonce");
                            }}
                        >
                            Déposer une annonce
                        </div>
                    </div>
                </Box>
            </Modal>
            <div className="navbar-wrapper">
                <div className={fix ? "top top-fixed" : "top"}>
                    <div className="left">
                        <div className="telephone">
                            <FontAwesomeIcon
                                icon={faPhone}
                                style={styles.iconColor}
                            />
                            +1-333-333-4444
                        </div>
                        <div className="email">
                            <FontAwesomeIcon
                                icon={faEnvelope}
                                style={styles.iconColor}
                            />
                            okadmarket@okad.com
                        </div>
                        <div className="open-hours">
                            <FontAwesomeIcon
                                icon={faClockFour}
                                style={styles.iconColor}
                            />
                            Lundi-Vendredi : 10-17h
                        </div>
                    </div>
                    <div className="right">
                        <div
                            className="sign-in"
                            onClick={() => setSignInOn(true)}
                        >
                            <FontAwesomeIcon
                                icon={faArrowRightToBracket}
                                style={styles.iconColor}
                            />
                            Se connecter
                        </div>
                        <div className="register" onClick={handleSignUp}>
                            <FontAwesomeIcon
                                icon={faUser}
                                style={styles.iconColor}
                            />
                            S'inscrire
                        </div>
                    </div>
                </div>

                <div className={fix ? "bottom bottom-fixed" : "bottom"}>
                    <div className="toggle-menu">
                        <FontAwesomeIcon
                            icon={faBars}
                            style={{ color: "#57bf27", fontSize: "20px" }}
                            onClick={handleOpen}
                        />
                    </div>

                    <div
                        className="logo"
                        style={styles.iconColor}
                        onClick={() => navigate("/")}
                    >
                        OKAD-MARKET
                    </div>

                    <div className="toggle-menu">
                        <FontAwesomeIcon
                            icon={faUser}
                            style={{ color: "#57bf27", fontSize: "20px" }}
                            onClick={handleSignIn}
                        />
                    </div>

                    <div className="navbar-buttons">
                        <div className="home" onClick={() => navigate("/")}>
                            Acceuil
                        </div>
                        <div
                            onClick={() => navigate("/annonces")}
                            className="ad"
                        >
                            Annonces
                        </div>
                        <div
                            className="contact"
                            onClick={() => navigate("/contact")}
                        >
                            Contact
                        </div>
                        <div
                            className="about-us"
                            onClick={() => navigate("/a-propos")}
                        >
                            À propos
                        </div>
                    </div>
                    <div
                        className="submit-new-ad"
                        onClick={() => navigate("/ajouter-une-annonce")}
                    >
                        Déposer une annonce
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    iconColor: {
        color: "#57bf27",
    },
};

export default Navbar;
