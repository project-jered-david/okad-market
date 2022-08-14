import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const style = {
    position: "absolute",
    top: "20%",
    left: "50%",
    transform: "translate(-50%, -20%)",
    width: "80%",
    height: "90%",
    bgcolor: "background.paper",
    outline: "none",
    boxShadow: 0,
    p: 4,
};

const CustomModal = ({ open, setOpen, children }) => {
    const handleClose = () => setOpen(false);

    return (
        <div>
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
                    {children}
                </Box>
            </Modal>
        </div>
    );
};

export default CustomModal;
