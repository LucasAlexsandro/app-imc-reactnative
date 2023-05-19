import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  FormContext: {
    width: "100%",
    height: "100%",
    bottom: 0,
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 10,
    marginTop: 30,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  form: {
    width: "100%",
    height: "auto",
    marginTop: 30,
    padding: 20,
  },
  formLabel: {
    color: "#000",
    fontSize: 25,
    paddingLeft: 20,
  },
  formInput: {
    width: "90%",
    height: 60,
    borderRadius: 50,
    backgroundColor: "#F1F4FF",
    fontSize: 18,
    paddingLeft: 20,
    margin: 12,
  },
  ButtonCalcular: {
    borderRadius: 50,
    width: "90%",
    backgroundColor: "#ff0043",
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 14,
    paddingBottom: 14,
    marginLeft: 12,
    margin: 20,
  },
  textButtonCalcular: {
    fontSize: 20,
    color: "#fff",
  },
  errorMessage: {
    color: "#ff0043",
    fontSize: 12,
    fontWeight: "bold",
    paddingLeft: 20,
    marginTop: 3,
  },
});

export default styles;
