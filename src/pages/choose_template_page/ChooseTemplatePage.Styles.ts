const chooseTemplateHomePageStyles = {
    mainContainer : {
        height: "100vh",
        width: "100%"
    },

    childContainer : {
        width: {xs:"90%", sm: "85%", md: "75%", lg:"60%"},
        margin: "auto",
        paddingTop: {xs: "25px", sm: "30px", md:"50px"},
        display: "flex",
        flexDirection: 'column',
        gap: "40px",
        // border: "2px solid green",
        height: {xs:"auto", md:"calc(100vh - 66px - 45px)"}
    },

    headingContainer : {
        width: "100%",
        // border: "2px solid red",
        textAlign: "center"
    },

    SelectATemplateHeading : {
        fontSize: {xs:"25px", sm:"30px", md:"36px"},
        color: "#013564",
        fontWeight: "700"
    },

    SelectATemplateParagraph : {
        fontSize: "13px",
        color: "#013564",
        fontWeight: "700"
    },

    templatesContainer : {
        // border: "1px solid red",
        display: "flex",
        flexDirection: {xs: "column", md:"row"},
        gap: "20px",
        alignItems: {xs: "center", md: "strech"},
        justifyContent: {xs: "flex-start", md: "center"}
        
    }
}


export default chooseTemplateHomePageStyles