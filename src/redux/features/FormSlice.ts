import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FormDetailsInterface {
  firstName: string;
  lastName: string;
  jobTitle: string;
  phoneNum: string;
  email: string;
  address: string;
  city: string;
  zipCode: string;
  state: string;
  country: string;
}

const initialFormDetails: FormDetailsInterface = {
  firstName: "",
  lastName: "",
  jobTitle: "",
  phoneNum: "(469) 385-2948",
  email: "email@youremail.com",
  address: "4759 Sunnydale Lane, Plano, TX 75071",
  city: "",
  zipCode: "",
  state: "",
  country: "",
};

interface InitialStateType {
  formDetails: FormDetailsInterface;
}

const initialState: InitialStateType = {
  formDetails: initialFormDetails,
};

const credentialsSlice = createSlice({
  name: "form slice",
  initialState,
  reducers: {
    addFormDetails: (
      state,
      action: PayloadAction<{ enteredValue: string; type: string }>
    ) => {
      state.formDetails = {
        ...state.formDetails,
        [action.payload.type]: action.payload.enteredValue,
      };
    },
  },
});
export const { addFormDetails } = credentialsSlice.actions;
export default credentialsSlice.reducer;
