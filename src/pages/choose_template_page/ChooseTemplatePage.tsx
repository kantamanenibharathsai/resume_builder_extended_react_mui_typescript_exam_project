import { Box, Typography } from "@mui/material"
import chooseTemplateHomePageStyles from "./ChooseTemplatePage.Styles"
import Navbar from "../../components/navbar/Navbar"
import TemplateCardHomeImage from "../../components/template_card_image/TemplateCardImage"
import { templateCardsImagesHome } from "../../typescript/GlobalTypes"
import Footer from "../../components/footer/Footer"

const ChooseTemplateHomePage = () => {


    return (
        <Box sx={chooseTemplateHomePageStyles.mainContainer}>
            <Navbar />
            <Box sx={chooseTemplateHomePageStyles.childContainer}>
                <Box sx={chooseTemplateHomePageStyles.headingContainer}>
                    <Typography sx={chooseTemplateHomePageStyles.SelectATemplateHeading}>Select a Template</Typography>
                    <Typography sx={chooseTemplateHomePageStyles.SelectATemplateParagraph}>Select a template to get started.</Typography>
                </Box>
                <Box sx={chooseTemplateHomePageStyles.templatesContainer}>
                    {templateCardsImagesHome.map(eachObj => (<TemplateCardHomeImage key={eachObj.id} cardObj={eachObj} />))}
                </Box>
            </Box>
            <Footer/>
        </Box>
    )
}



export default ChooseTemplateHomePage