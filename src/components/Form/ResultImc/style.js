import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  resultImc: {
    flex: 1,
    marginTop: 5,
    paddingTop: 10,
    borderRadius: 50,
    alignItems: "center",
    width: "100%",
  },
  numberImc: {
    fontSize: 45,
    color: "#FF0043",
    fontWeight: "bold",
  },
  information: {
    fontSize: 20,
    color: "#FF0043",
    fontWeight: "bold",
  },
  boxShareButton: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  shared: {
    backgroundColor: "#F1F4FF",
    borderRadius: 50,
    padding: 15,
    paddingHorizontal: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  sharedText: {
    color: "#1877f2",
    fontWeight: "bold",
  },
});

export default styles;
