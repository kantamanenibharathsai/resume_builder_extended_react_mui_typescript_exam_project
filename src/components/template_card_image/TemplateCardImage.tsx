import { Box } from "@mui/material"
import templateCardImageStyle from "./TemplateCardImage.Styles"
import { TemplateCardInterface } from "../../typescript/GlobalTypes"
import { useNavigate } from "react-router-dom"


interface MyProps {
    cardObj : TemplateCardInterface
}

const TemplateCardHomeImage: React.FC<MyProps> = ({cardObj}) => {
    const navigate = useNavigate()
    return(
        <Box sx={templateCardImageStyle.cardContainer} onClick={() => {navigate('/editor/details')}}>
            <Box component="img" src={cardObj.imageUrl} alt={cardObj.id} sx={templateCardImageStyle.cardTemplateImage}/>
        </Box>
    )
}


export default TemplateCardHomeImage