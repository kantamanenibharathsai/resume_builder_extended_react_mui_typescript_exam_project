import { Box, Button, Modal, } from "@mui/material"
import formResumePageStyles from "./EditorDetailsPage.Styles"
import Navbar from "../../components/navbar/Navbar"
import FormTemplate from "../../components/form_template/FormTemplate"
import ResumeOne from "../../components/resume_template/ResumeTemplateOne"
import FooterTwo from "../../components/footer_two/FooterTwo"
import VisibilityIcon from '@mui/icons-material/Visibility';
import { useState } from "react"
import CloseIcon from '@mui/icons-material/Close';


const FormResumePage = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <Navbar />
            <Box sx={formResumePageStyles.childContainer}>
                <FormTemplate />
                <ResumeOne />
            </Box>
            <Box sx={formResumePageStyles.previewButtonContainer}>
                <Box>
                    <Button variant="outlined" onClick={handleOpen} sx={formResumePageStyles.previewButton}><VisibilityIcon sx={formResumePageStyles.eyeIcon} />Preview</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={formResumePageStyles.modalStyle}>
                            <Box onClick={handleClose} sx={formResumePageStyles.closeIconContainer}> <CloseIcon sx={formResumePageStyles.closeIcon} /></Box>
                            <ResumeOne />
                        </Box>
                    </Modal>
                </Box>
            </Box>
            <FooterTwo />
        </>
    )

}


export default FormResumePage