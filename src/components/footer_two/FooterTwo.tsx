import { Box, Typography } from "@mui/material"
import footerStyles from "./FooterTwo.Styles"


const FooterTwo = () => {
    return (
        <Box sx={footerStyles.footerContainer}>
            <Box sx={footerStyles.footerChildContainer}>
                <Typography sx={footerStyles.footerText}>© 2024 ResumeBuilder.com. All rights reserved. Contact Us.</Typography>
            </Box>
        </Box>
    )
}


export default FooterTwo