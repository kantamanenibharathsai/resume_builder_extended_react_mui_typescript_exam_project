import { Box } from "@mui/material"
import navbarStyles from "./Navbar.Styles"
import resumeTemplateBuilderLogo from "../../assets/resume_template_builder_logo1.png"


const Navbar = () => {
    return(
        <Box sx={navbarStyles.navbarContainer}>
            <Box sx={navbarStyles.navbarChildContainer}>
            <Box component="img" src={resumeTemplateBuilderLogo} alt="resumeTemplateBuilderLogo" sx={navbarStyles.logo}/>
        </Box>
        </Box>
    )
}


export default Navbar