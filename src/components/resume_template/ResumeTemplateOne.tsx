
import { Box, Divider, Typography } from "@mui/material"
import resumeOneStyles from "./ResumeTemplateOne.Styles"
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/Store";
import { useCallback, useEffect, useRef, useState } from "react";


const ResumeOne = () => {
    const formDetailsObj = useSelector((state: RootState) => state.formDetails.formDetails)
    const memeOneName = formDetailsObj.firstName + formDetailsObj.lastName;
    const memeTwoNumber = formDetailsObj.phoneNum;
    const memeThreeEmail = formDetailsObj.email;
    const memeFourAddress = formDetailsObj.address;


    const paragraphOneRef = useRef<HTMLParagraphElement | null>(null);
    const paragraphTwoRef = useRef<HTMLParagraphElement | null>(null);
    const paragraphThreeRef = useRef<HTMLParagraphElement | null>(null);
    const paragraphFourRef = useRef<HTMLParagraphElement | null>(null);

    const getTextWidth = (text: string, font: string) => {
        const canvas = document.createElement('canvas');
        // console.log("canvas", canvas)
        const context = canvas.getContext('2d');
        // console.log("context", context)
        context!.font = font;
        console.log("font", font)
        const metrics = context!.measureText(text);
        // console.log("metrics", metrics)
        return metrics.width;
    };

    const adjustFontSize = useCallback((value: string, paragraphRef: React.RefObject<HTMLParagraphElement>) => {
        if (paragraphRef.current) {
            const maxWidth = parseInt(window.getComputedStyle(paragraphRef.current).width);
            // console.log(window.getComputedStyle(paragraphRef.current).width)
            // console.log("maxWidth", maxWidth)
            const textWidth = getTextWidth(value, '16px Arial');
            // console.log("textWidth", textWidth)
            const scaleFactor = maxWidth / textWidth;
            // console.log("scaleFactor", scaleFactor)
            const newFontSize = 16 * scaleFactor;
            // console.log("newFontSize", newFontSize)
            return `${newFontSize}px`;
        }
        return '16px';
    }, [])

    useEffect(() => {
        if (paragraphOneRef.current) {
            paragraphOneRef.current.style.fontSize = adjustFontSize(memeOneName, paragraphOneRef);
        }
    }, [memeOneName, adjustFontSize]);

    useEffect(() => {
        if (paragraphTwoRef.current) {
            paragraphTwoRef.current.style.fontSize = adjustFontSize(memeTwoNumber, paragraphTwoRef);
        }
    }, [memeTwoNumber, adjustFontSize]);

    useEffect(() => {
        if (paragraphThreeRef.current) {
            paragraphThreeRef.current.style.fontSize = adjustFontSize(memeThreeEmail, paragraphThreeRef);
        }
    }, [memeThreeEmail, adjustFontSize]);

    useEffect(() => {
        if (paragraphFourRef.current) {
            paragraphFourRef.current.style.fontSize = adjustFontSize(memeFourAddress, paragraphFourRef);
        }
    }, [memeFourAddress, adjustFontSize]);

    return (
        <Box sx={resumeOneStyles.mainContainer}>
            <Box sx={resumeOneStyles.backgroundColorContainer}></Box>
            <Box sx={resumeOneStyles.childContainer}>
                <Box sx={resumeOneStyles.nameContainer}>
                    <Box sx={resumeOneStyles.nameTextContainer}>
                        <Typography ref={paragraphOneRef} sx={{ ...resumeOneStyles.nameText, fontSize: adjustFontSize(memeOneName, paragraphOneRef) }}>{memeOneName} ${"   "} Candidate</Typography>
                    </Box>
                    <Typography sx={resumeOneStyles.designationText}>Human Resource Manager</Typography>
                    <Box sx={resumeOneStyles.addressTextContainer}>
                        <Typography ref={paragraphFourRef} sx={{ ...resumeOneStyles.addressText, fontSize: adjustFontSize(memeFourAddress, paragraphFourRef) }}>{memeFourAddress}</Typography>
                    </Box>
                </Box>
                <Box sx={resumeOneStyles.numberEmailContainer} >
                    <Box sx={resumeOneStyles.numberTextContainer}>
                        <Typography ref={paragraphTwoRef} sx={resumeOneStyles.number}>{memeTwoNumber}</Typography>
                    </Box>
                    <Box sx={resumeOneStyles.emailTextContainer}>
                        <Typography ref={paragraphThreeRef} sx={resumeOneStyles.email}><Box component="span" sx={resumeOneStyles.emailSpan}>{memeThreeEmail}</Box></Typography>
                    </Box>
                </Box>
                <Divider sx={resumeOneStyles.dividerOne} />
                <Typography sx={resumeOneStyles.description}>Human resources generalist with 8 years of experience in HR, including hiring and terminating, disciplining employees and helping department managers improve employee performance. Worked with labor unions to negotiate compensation packages for workers. Organized new hire training initiatives as well as ongoing training to adhere to workplace safety standards. Worked with OSHA to ensure that all safety regulations are followed.</Typography>
                <Box sx={resumeOneStyles.eachHighlightContainer}>
                    <Typography sx={resumeOneStyles.highlightText}>Professional Experience</Typography>
                    <Divider sx={resumeOneStyles.dividerTwo} />
                    <Box sx={resumeOneStyles.experienceYearContainer}>
                        <Typography sx={resumeOneStyles.expCompNameYear}>Jim's Widget Factory, Plano, TX</Typography>
                        <Typography sx={resumeOneStyles.expCompNameYear}>January 2016 - Present</Typography>
                    </Box>
                    <Box sx={resumeOneStyles.relatedPointsParentContainer}>
                        <Typography sx={resumeOneStyles.relatedText}>Human Resources Manager</Typography>
                        <Box component="ul" sx={resumeOneStyles.relatedPointsChildContainer}>
                            <Box sx={resumeOneStyles.listItemContainer} component="li">
                                <FiberManualRecordIcon sx={resumeOneStyles.dotIcon} />
                                <Typography sx={resumeOneStyles.listItemText}>Implement effective company policies to ensure that all practices comply with labor and employment regulations</Typography>
                            </Box>
                            <Box sx={resumeOneStyles.listItemContainer} component="li">
                                <FiberManualRecordIcon sx={resumeOneStyles.dotIcon} />
                                <Typography sx={resumeOneStyles.listItemText}>Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment</Typography>
                            </Box>
                            <Box sx={resumeOneStyles.listItemContainer} component="li">
                                <FiberManualRecordIcon sx={resumeOneStyles.dotIcon} />
                                <Typography sx={resumeOneStyles.listItemText}>Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies</Typography>
                            </Box>
                            <Box sx={resumeOneStyles.listItemContainer} component="li">
                                <FiberManualRecordIcon sx={resumeOneStyles.dotIcon} />
                                <Typography sx={resumeOneStyles.listItemText}>Monitor scheduled in and out times as well as employee breaks to ensure that proper employment laws are met</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={resumeOneStyles.experienceYearContainer}>
                        <Typography sx={resumeOneStyles.expCompNameYear}>Jim's Widget Factory, Plano, TX</Typography>
                        <Typography sx={resumeOneStyles.expCompNameYear}>March 2015 - January 2016</Typography>
                    </Box>
                    <Box sx={{ ...resumeOneStyles.relatedPointsParentContainer, ...resumeOneStyles.marginTopContainer }}>
                        <Typography sx={resumeOneStyles.relatedText}>Human Resources Associate</Typography>
                        <Box component="ul" sx={resumeOneStyles.relatedPointsChildContainer}>
                            <Box sx={resumeOneStyles.listItemContainer} component="li">
                                <FiberManualRecordIcon sx={resumeOneStyles.dotIcon} />
                                <Typography sx={resumeOneStyles.listItemText}>Implement effective company policies to ensure that all practices comply with labor and employment regulations</Typography>
                            </Box>
                            <Box sx={resumeOneStyles.listItemContainer} component="li">
                                <FiberManualRecordIcon sx={resumeOneStyles.dotIcon} />
                                <Typography sx={resumeOneStyles.listItemText}>Increased employee retention rates by managing workplace satisfaction to an over 90% success rate by creating and maintaining a positive work environment</Typography>
                            </Box>
                            <Box sx={resumeOneStyles.listItemContainer} component="li">
                                <FiberManualRecordIcon sx={resumeOneStyles.dotIcon} />
                                <Typography sx={resumeOneStyles.listItemText}>Develop targeted outreach practices to increase minority recruitment and ensure compliance with affirmative action policies</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={resumeOneStyles.eachHighlightContainer}>
                    <Typography sx={resumeOneStyles.highlightText}>Education</Typography>
                    <Divider sx={resumeOneStyles.dividerTwo} />
                    <Typography sx={resumeOneStyles.educationUniversityName}>The University of Texas at Dallas</Typography>
                    <Typography sx={resumeOneStyles.educationUniversityName}><Box component="span" sx={{ ...resumeOneStyles.relatedText, ...resumeOneStyles.marginRight }}>Masters in Human Resources </Box> September 2007 - May 2011</Typography>
                    <Box component="ul" sx={{ ...resumeOneStyles.relatedPointsChildContainer, ...resumeOneStyles.marginTopContainer }}>
                        <Box sx={resumeOneStyles.listItemContainer} component="li">
                            <FiberManualRecordIcon sx={resumeOneStyles.dotIcon} />
                            <Typography sx={resumeOneStyles.listItemText}>Academic Awardee of AY 2007-2008</Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={resumeOneStyles.eachHighlightContainer}>
                    <Typography sx={resumeOneStyles.highlightText}>Key Skills</Typography>
                    <Divider sx={resumeOneStyles.dividerTwo} />
                    <Box component="ul" sx={{ ...resumeOneStyles.relatedPointsChildContainer, ...resumeOneStyles.marginTopContainer }}>
                        <Box sx={resumeOneStyles.listItemContainer} component="li">
                            <FiberManualRecordIcon sx={resumeOneStyles.dotIcon} />
                            <Typography sx={resumeOneStyles.listItemText}>Detail oriented</Typography>
                        </Box>
                        <Box sx={resumeOneStyles.listItemContainer} component="li">
                            <FiberManualRecordIcon sx={resumeOneStyles.dotIcon} />
                            <Typography sx={resumeOneStyles.listItemText}>Well-versed in Texas employment law</Typography>
                        </Box>
                        <Box sx={resumeOneStyles.listItemContainer} component="li">
                            <FiberManualRecordIcon sx={resumeOneStyles.dotIcon} />
                            <Typography sx={resumeOneStyles.listItemText}>Excellent written and oral communication skills</Typography>
                        </Box>
                        <Box sx={resumeOneStyles.listItemContainer} component="li">
                            <FiberManualRecordIcon sx={resumeOneStyles.dotIcon} />
                            <Typography sx={resumeOneStyles.listItemText}>Develops positive workplace relationships</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box >
    )
}


export default ResumeOne