import { Box, Button } from "@mui/material"
import footerStyles from "./Footer.Styles"
import { useNavigate } from "react-router-dom"

const Footer = () => {
    const navigate = useNavigate()

    const skipEventHandler = () => {
        navigate("/editor/details")
    }


    return (
        <Box sx={footerStyles.footerContainer}>
            <Box sx={footerStyles.footerChildContainer}>
                <Button variant="contained" sx={footerStyles.skipForNowButton} disableElevation onClick={skipEventHandler}>
                    Skip for Now
                </Button>
            </Box>
        </Box>
    )
}


export default Footer