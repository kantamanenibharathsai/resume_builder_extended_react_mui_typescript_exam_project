import { Box, Button, Typography } from "@mui/material";
import formTemplateStyles from "./FormTemplate.Styles";
import templateBtnImg from "../../assets/templateBtnImage.png"
import EastIcon from '@mui/icons-material/East';
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../redux/store/Store";
import { addFormDetails } from "../../redux/features/FormSlice";

interface FormDetailsInterface {
    firstName: string,
    lastName: string,
    jobTitle: string,
    phoneNum: string,
    email: string,
    address: string,
    city: string,
    zipCode: string,
    state: string,
    country: string
}

interface IState {
    formDetails: FormDetailsInterface
}

const initialFormDetails: FormDetailsInterface = {
    firstName: '',
    lastName: '',
    jobTitle: '',
    phoneNum: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    state: '',
    country: ''
}

const FormTemplate = () => {
    const [formDetails, setFormDetails] = useState<IState["formDetails"]>(initialFormDetails)
    const dispatch = useDispatch<AppDispatch>()

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormDetails((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        dispatch(addFormDetails({ enteredValue: value, type: name }))
    };


    return (
        <Box sx={formTemplateStyles.mainContainer}>
            <Box sx={formTemplateStyles.childContainer}>
                <Box sx={formTemplateStyles.buttonsContainer}>
                    <Button sx={formTemplateStyles.templateButton}>
                        <Box component="img" src={templateBtnImg} alt="templateBtnImg" sx={formTemplateStyles.templateBtnImg} />
                        Templates
                    </Button>
                    <Button sx={formTemplateStyles.nextButton}>
                        Next
                        <EastIcon sx={formTemplateStyles.rightArrowIcon} />
                    </Button>
                </Box>
                <Box sx={formTemplateStyles.formParentContainer}>
                    <Box sx={formTemplateStyles.personalDetailsContainer}>
                        <Typography sx={formTemplateStyles.personalDetailsText}>Personal Details</Typography>
                        <Typography sx={formTemplateStyles.getStartedText}>Get started with the basics: your name and contact information.</Typography>
                    </Box>
                    <Box component="form" sx={formTemplateStyles.formContainer}>
                        <Box sx={formTemplateStyles.inputLabelContainer}>
                            <Box component="label" sx={formTemplateStyles.labelText} htmlFor="firstName">First Name</Box>
                            <Box type="text" component="input" id="firstName" sx={formTemplateStyles.inputField} name="firstName" value={formDetails.firstName} onChange={handleInputChange} />
                        </Box>
                        <Box sx={formTemplateStyles.inputLabelContainer}>
                            <Box component="label" sx={formTemplateStyles.labelText} htmlFor="lastName">Last Name</Box>
                            <Box type="text" component="input" id="lastName" sx={formTemplateStyles.inputField} name="lastName" value={formDetails.lastName} onChange={handleInputChange} />
                        </Box>
                        <Box sx={formTemplateStyles.inputLabelContainer}>
                            <Box component="label" sx={formTemplateStyles.labelText} htmlFor="jobTitle">Job Title</Box>
                            <Box type="text" component="input" id="jobTitle" sx={formTemplateStyles.inputField} name="jobTitle" value={formDetails.jobTitle} onChange={handleInputChange} />
                        </Box>
                        <Box sx={formTemplateStyles.inputLabelContainer}>
                            <Box component="label" sx={formTemplateStyles.labelText} htmlFor="phoneNum">Phone</Box>
                            <Box type="text" component="input" id="phoneNum" sx={formTemplateStyles.inputField} name="phoneNum" value={formDetails.phoneNum} onChange={handleInputChange} />
                        </Box>
                        <Box sx={formTemplateStyles.inputLabelContainer}>
                            <Box component="label" sx={formTemplateStyles.labelText} htmlFor="email">Email Address</Box>
                            <Box type="email" component="input" id="email" sx={formTemplateStyles.inputField} name="email" value={formDetails.email} onChange={handleInputChange} />
                        </Box>
                        <Box sx={formTemplateStyles.inputLabelContainer}>
                            <Box component="label" sx={formTemplateStyles.labelText} htmlFor="address">Address</Box>
                            <Box type="text" component="input" id="address" sx={formTemplateStyles.inputField} name="address" value={formDetails.address} onChange={handleInputChange} />
                        </Box>
                        <Typography sx={formTemplateStyles.byCreatingText}>By creating a resume, you agree to receive emails — unsubscribe anytime.</Typography>
                        <Box sx={formTemplateStyles.inputLabelContainer}>
                            <Box component="label" sx={formTemplateStyles.labelText} htmlFor="city">City</Box>
                            <Box type="text" component="input" id="city" sx={formTemplateStyles.inputField} name="city" value={formDetails.city} onChange={handleInputChange} />
                        </Box>
                        <Box sx={formTemplateStyles.inputLabelContainer}>
                            <Box component="label" sx={formTemplateStyles.labelText} htmlFor="zipCode">Zip Code</Box>
                            <Box type="text" component="input" id="zipCode" sx={formTemplateStyles.inputField} name="zipCode" value={formDetails.zipCode} onChange={handleInputChange} />
                        </Box>
                        <Box sx={formTemplateStyles.inputLabelContainer}>
                            <Box component="label" sx={formTemplateStyles.labelText} htmlFor="state">State</Box>
                            <Box type="text" component="input" id="state" sx={formTemplateStyles.inputField} name="state" value={formDetails.state} onChange={handleInputChange} />
                        </Box>
                        <Box sx={formTemplateStyles.inputLabelContainer}>
                            <Box component="label" sx={formTemplateStyles.labelText} htmlFor="country">Country</Box>
                            <Box type="text" component="input" id="country" sx={formTemplateStyles.inputField} name="country" value={formDetails.country} onChange={handleInputChange} />
                        </Box>
                    </Box>
                    <Box sx={formTemplateStyles.socialLinkContainer}>
                        <AddIcon sx={formTemplateStyles.addIcon} />
                        <Box component="span" sx={formTemplateStyles.socialLinksText}>Add Social Links</Box></Box>
                </Box>
            </Box>
        </Box>
    )
}


export default FormTemplate