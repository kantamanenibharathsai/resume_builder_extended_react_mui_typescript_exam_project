const resumeOneStyles = {
  resumeContainer: {
    display: "flex",
    flexDirection: "column",
  },

  mainContainer: {
    width: { xs: "100%", lg: "49%" },
    minHeight: "100vh",
    // border: "2px solid orange",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    borderRadius: "10px",
    marginTop: { md: "-280px", lg: "0px" },
  },

  backgroundColorContainer: {
    backgroundColor: "#98C64D",
    height: "40px",
    width: "100%",
    borderTopLeftRadius: "10px",
    borderTopRightRadius: "10px",
  },

  childContainer: {
    width: "90%",
    margin: "auto",
    // border: "1px solid red",
    py: "30px",
  },

  nameContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "0px",
    textAlign: "center",
    border: "1px solid red",
  },

  nameTextContainer: {
    width: "200px",
    wordWrap: "break-word",
    overflow: "auto",
    margin: "auto",
  },

  nameText: {
    color: "#98C64D",
    fontWeight: "700",
    fontSize: "24px",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },

  designationText: {
    color: "#080000",
    fontSize: "14px",
    fontWeight: "500",
  },

  addressTextContainer: {
    mt: "3px",
    width: "280px",
    wordWrap: "break-word",
    overflow: "auto",
    margin: "auto",
  },

  addressText: {
    color: "#98C64D",
    fontSize: "10px",
    fontWeight: "400",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },

  numberEmailContainer: {
    display: "flex",
    // alignItems: "center",
    width: "100%",
    // border: "2px solid red",
    mt: "13px",
  },

  numberTextContainer: {
    width: "120px",
    wordWrap: "break-word",
    overflow: "auto",
    // border: "2px solid red",
  },

  number: {
    color: "#98C64D",
    fontSize: "11px",
    fontWeight: "300",
    overflow: "hidden",
    whiteSpace: "nowrap",
  },

  emailTextContainer: {
    width: "140px",
    wordWrap: "break-word",
    overflow: "auto",
    margin: "auto",
  },

  email: {
    color: "#98C64D",
    fontSize: "10px",
    fontWeight: "300",
    textAlign: "center",
    overflow: "hidden",
    whiteSpace: "nowrap",
    // border: "2px solid yellow",
  },

  emailSpan: {
    // marginRight: "50px",
  },

  dividerOne: {
    border: "1.5px solid #98C64D",
    mt: "4px",
  },

  description: {
    color: "#000000",
    fontFamily: "EB Garamond",
    fontSize: "12px",
    fontWeight: "700",
    lineHeight: "14px",
    mt: "20px",
  },

  eachHighlightContainer: {
    mt: "25px",
  },

  highlightText: {
    color: "#98C64D",
    fontFamily: "EB Garamond",
    fontSize: "17px",
    fontWeight: "700",
    textAlign: "center",
  },

  dividerTwo: {
    border: "0.5px solid #98C64D",
    mt: "3px",
  },

  experienceYearContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mt: "12px",
  },

  expCompNameYear: {
    color: "#98C64D",
    fontFamily: "EB Garamond",
    fontSize: "11px",
    fontWeight: "300",
  },

  relatedPointsParentContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  relatedText: {
    fontFamily: "EB Garamond",
    fontSize: "14px",
    fontWeight: "600",
    color: "#98C64D",
  },

  relatedPointsChildContainer: {
    listStyleType: "none",
  },

  listItemContainer: {
    display: "flex",
    alignItems: "center",
    gap: "13px",
  },

  dotIcon: {
    color: "#98C64D",
    width: "8px",
    height: "8px",
  },

  listItemText: {
    fontFamily: "EB Garamond",
    fontSize: "13px",
    fontWeight: "500",
    lineHeight: "18px",
  },

  marginTopContainer: {
    mt: "5px",
  },

  educationUniversityName: {
    fontFamily: "EB Garamond",
    fontSize: "13px",
    fontWeight: "500",
    color: "#000000",
  },

  marginRight: {
    marginRight: "8px",
  },

  educationYearText: {},
};

export default resumeOneStyles;
