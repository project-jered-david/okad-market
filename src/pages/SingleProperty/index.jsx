import "./single-property.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { FaPhone, FaBed, FaBath, FaArrowsAlt } from "react-icons/fa";
import { BsX } from "react-icons/bs";
import { VscLocation } from "react-icons/vsc";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useState } from "react";

const fakeImage = [
    "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1575517111478-7f6afd0973db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    "https://images.unsplash.com/photo-1502005097973-6a7082348e28?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
];
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "80%",
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

const SingleProperty = () => {
    const [open, setOpen] = useState(false);
    const [focusItem, setFocusItem] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <div className="single-property">
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div
                        onClick={handleClose}
                        style={{
                            cursor: "pointer",
                            width: "fit-content",
                            fontWeight: "bold",
                        }}
                    >
                        <BsX />
                    </div>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        <img
                            style={{
                                width: "100%",
                                height: "600px",
                                objectFit: "contain",
                            }}
                            src={focusItem}
                            alt=""
                        />
                    </Typography>
                </Box>
            </Modal>
            <div className="title">Détails de la propriété</div>
            <div className="carousel-container">
                <Carousel
                    onClickItem={(item, args) =>
                        setFocusItem(args.props.children.props.src)
                    }
                    className="main-carousel"
                >
                    {fakeImage.map((image) => (
                        <div onClick={handleOpen} key={Math.random()}>
                            <img src={image} />
                        </div>
                    ))}
                </Carousel>
            </div>
            <div className="property-details">
                <div className="left-side">
                    <div className="property-infos">
                        <div className="property-title">Resort Valley Ocs</div>
                        <div className="property-location">
                            <VscLocation style={styles.iconColor} />
                            778 Panama City, FL
                        </div>
                        <div className="property-price">
                            <span>700000</span>CFA/mois
                        </div>
                        <div className="property-little-feature">
                            <div className="feature">
                                <FaBed style={styles.iconColor} /> 2 chambre(S)
                            </div>
                            <div className="feature">
                                <FaBath style={styles.iconColor} /> 3 salle(s)
                                de bain
                            </div>
                            <div className="feature">
                                {" "}
                                <FaArrowsAlt style={styles.iconColor} />1
                                garage(s)
                            </div>
                        </div>
                    </div>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography style={styles.typoStyle}>
                                Détails & Caractéristiques
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={styles.typoDetailsStyle}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography style={styles.typoStyle}>
                                Description
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography style={styles.typoDetailsStyle}>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Suspendisse malesuada lacus ex,
                                sit amet blandit leo lobortis eget.
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </div>
                <div className="right-side">
                    <div className="contact-us-container">
                        <div className="our-info">
                            <div className="info">
                                <div className="company">OKAD-MARKET</div>
                                <div className="phone">
                                    <FaPhone style={{ color: "#57bf27" }} />{" "}
                                    +1-333-333-4444
                                </div>
                            </div>
                            <div className="form-container">
                                <div className="item">
                                    <input type="text" placeholder="Nom..." />
                                </div>
                                <div className="item">
                                    <input
                                        type="text"
                                        placeholder="Prenom..."
                                    />
                                </div>
                                <div className="item">
                                    <input
                                        type="text"
                                        placeholder="Courriel..."
                                    />
                                </div>
                                <div className="item">
                                    <input
                                        type="number"
                                        placeholder="Télephone..."
                                    />
                                </div>
                                <div className="item">
                                    <textarea placeholder="Message..."></textarea>
                                </div>
                                <div className="send-message-button">
                                    Envoyer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const styles = {
    iconColor: {
        color: "#57bf27",
        fontWeight: "bold",
    },
    typoStyle: {
        fontSize: "17px",
        fontWeight: "bold",
    },
    typoDetailsStyle: {
        fontSize: "15px",
    },
};

export default SingleProperty;
