const formTemplateStyles = {
  mainContainer: {
    width: {xs:"100%", lg:"49%"},
    minHeight: "100vh",
    // border: "2px solid orange",
  },

  childContainer: {
    width: "100%",
    margin: "auto",
    // border: "2px solid red",
    display: "flex",
    flexDirection: "column",
    gap: "20px"
  
  },

  buttonsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  templateButton: {
    display: "flex",
    alignItems: "center",
    border: "1px solid #72A2F4",
    color: "#72A2F4",
    backgroundColor: "#ffffff",
    textTransform: "capitalize",
    borderRadius: "30px",
    width: "110px",
  },

  templateBtnImg: {
    width: "20px",
    height: "20px",
  },

  nextButton: {
    display: "flex",
    alignItems: "center",
    color: "#ffffff",
    backgroundColor: "#FE4A5A",
    textTransform: "capitalize",
    borderRadius: "30px",
    width: "86px",
    gap: "7px",
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#FE4A5A",
    },
  },

  rightArrowIcon: {
    width: "17px",
    height: "17px",
  },

  formParentContainer: {
    borderTop: "3px solid #2A64AD",
    borderRadius: "16px",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    padding: {xs:"5px", sm:"20px"},
  },

  personalDetailsContainer: {
    // border: "1px solid orange",
    marginBottom: "20px"
  },

  personalDetailsText: {
    fontSize: "20px",
    color: "black",
  },

  getStartedText: {
    fontSize: "14px",
    color: "#828BAA",
  },

  formContainer: {
    display: "flex",
    flexDirection: {xs: "column", md:"row"},
    alignItems: {xs:"strech", md:"center"},
    // border: "2px solid red",
    flexWrap: "wrap",
    gap: "20px",
  },

  inputLabelContainer: {
    display: "flex",
    flexDirection: "column",
    // border: "1px solid yellow",
    width: {xs:"100%", md:"48%"},
    gap: "6px"
  },

  labelText: {
    fontSize: "12px",
    color: "#000000",
  },

  inputField: {
    outline: "none",
    px: "13px",
    width: "100%",
    height: "32px",
    fontSize: "15px",
    color: "#000000",
    borderRadius: "5px",
    border: "1px solid #DEE3EE",
    "&:focus": {
      border: "1px solid blue",
    },
  },

  byCreatingText : {
    fontSize: "12px",
    color: "#828BAA",
    width: "100%"
  },

  socialLinkContainer : {
    display: "flex",
    alignItems: "center",
    gap: "5px",
    mt: "10px"
  },

  addIcon : {
    color: "#2864AD"
  },

  socialLinksText : {
    fontSize: "14px",
    color: "#2864AD",
  }
};

export default formTemplateStyles;
