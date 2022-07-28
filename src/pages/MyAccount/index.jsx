import "./my-account.css";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faUser,
    faHeart,
    faHouse,
    faPlusCircle,
    faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        "aria-controls": `vertical-tabpanel-${index}`,
    };
}

const MyAccount = () => {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="my-account">
            <div className="title">Votre compte</div>
            <div className="my-account-container-wrapper">
                <Box
                    sx={{
                        flexGrow: 1,
                        bgcolor: "background.paper",
                        display: "flex",
                        gap: "20px",
                        height: "auto",
                    }}
                    className="mobile"
                >
                    <Tabs
                        indicatorColor="inherit"
                        orientation="vertical"
                        value={value}
                        onChange={handleChange}
                        aria-label="Menu profil"
                        sx={{
                            borderColor: "divider",
                            color: "#000",
                            height: "fit-content",
                        }}
                    >
                        <Tab
                            sx={styles.menu}
                            icon={
                                <FontAwesomeIcon
                                    icon={faUser}
                                    style={{
                                        color: "#57bf27",
                                    }}
                                />
                            }
                            iconPosition="start"
                            label="Profil"
                            {...a11yProps(0)}
                        />
                        <Tab
                            sx={styles.menu}
                            icon={
                                <FontAwesomeIcon
                                    icon={faHeart}
                                    style={{
                                        color: "#57bf27",
                                    }}
                                />
                            }
                            iconPosition="start"
                            label="Favoris"
                            {...a11yProps(1)}
                        />
                        <Tab
                            sx={styles.menu}
                            icon={
                                <FontAwesomeIcon
                                    icon={faHouse}
                                    style={{
                                        color: "#57bf27",
                                    }}
                                />
                            }
                            iconPosition="start"
                            label="Mes propriétés"
                            {...a11yProps(2)}
                        />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                marginTop: "5px",
                                gap: "5px",
                            }}
                        >
                            <div
                                className="add-ad"
                                onClick={() => navigate("/ajouter-une-annonce")}
                            >
                                {" "}
                                <FontAwesomeIcon
                                    icon={faPlusCircle}
                                    style={{
                                        color: "#57bf27",
                                    }}
                                />
                                Ajouter une annonce
                            </div>
                            <div
                                className="log-out"
                                onClick={() => navigate("/")}
                            >
                                {" "}
                                <FontAwesomeIcon
                                    icon={faArrowRightFromBracket}
                                    style={{
                                        color: "#57bf27",
                                    }}
                                />
                                Déconnexion
                            </div>
                        </div>
                    </Tabs>
                    <TabPanel style={{ flex: 2 }} value={value} index={0}>
                        <div className="details-profil">
                            <div className="details-title">Détails profil</div>
                            <div className="form-profil">
                                <div className="item">
                                    <div className="item-label">Nom</div>
                                    <div className="item-input">
                                        <input
                                            type="text"
                                            defaultValue={"Nom"}
                                        />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-label">Prenom</div>
                                    <div className="item-input">
                                        <input
                                            type="text"
                                            defaultValue={"Prenom"}
                                        />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-label">Telephone</div>
                                    <div className="item-input">
                                        <input
                                            type="text"
                                            defaultValue={"Telephone"}
                                        />
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-label">Courriel</div>
                                    <div className="item-input">
                                        <input
                                            type="text"
                                            defaultValue={"Courriel"}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="send-change">
                                Envoyer les changements
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        Propriétés favorites (Bientôt disponible)
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        Mes propriétés (Bientôt disponible)
                    </TabPanel>
                </Box>
            </div>
        </div>
    );
};

const styles = {
    menu: {
        flex: 1,
        height: "fit-content",
        color: "#000",
        display: "flex",
        alignItems: "center",
        gap: "10px",
        justifyContent: "flex-start",
        fontSize: "15px",
    },
};

export default MyAccount;
