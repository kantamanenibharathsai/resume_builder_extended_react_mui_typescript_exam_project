const formResumePageStyles = {
  mainContainer: {
    // minHeight: "100vh",
    width: "100%",
  },

  childContainer: {
    width: { xs: "97%", sm: "95%" },
    margin: "auto",
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    // alignItems: "center",
    justifyContent: { lg: "space-between" },
    //  border: "1px solid green",
    py: "30px",
    gap: "40px",
  },

  previewButtonContainer : {
    display: "flex",
    justifyContent: "flex-end",
    // border: "3px solid red",
    margin: "auto",
    width: "95%",
    mb: "20px"
  },

  previewButton: {
    borderRadius: "20px",
    border: "1px solid #246EED",
    textTransform: "capitalize",
  },

  eyeIcon: {
    width: "18px",
    height: "18px",
    marginRight: "6px"
  },

  modalStyle : {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: {xs:"90%", md:"80%", xl: "60%"},
    bgcolor: 'background.paper',
    // border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    height: "800px",
    overflow: "hidden scroll",
    borderRadius: '10px'
  },

  closeIconContainer : {
    borderRadius: "50%",
    backgroundColor: "#000000",
    width: "30px",
    height: "30px",
    display: 'flex',
    justifyContent: 'center',
    alignItems: "center",
    cursor: "pointer",
    position: "absolute",
    right: "0%",
    top: 0,
    bottom: 10,
    zIndex: 50,
    // border: "2px solid red"
  },

  closeIcon : {
    color: "#ffffff"
  }
};

export default formResumePageStyles;
