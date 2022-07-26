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
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => setOpen(false);

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
                        <div className="sign-in">
                            <FontAwesomeIcon
                                icon={faArrowRightToBracket}
                                style={styles.iconColor}
                            />
                            Se connecter
                        </div>
                        <div className="register">
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
                            style={styles.iconColor}
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
