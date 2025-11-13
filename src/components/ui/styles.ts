import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
export const global = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#ffffffff"
    },
    keyboardAvoiding: {
        flex: 1
    },
    container: {
        paddingHorizontal: width * 0.07,
        paddingVertical: height * 0.07
    },
    header: {
        alignItems: "center",
        marginBottom: height * 0.02
    },
    title: {
        fontSize: 25,
        fontWeight: "800",
        color: "#000103ff",
        /*Para atribuir cor: color:*/
    },
    subtitle: {
        fontSize: 17,
        color: "#052659",
        marginTop: height * 0.01,
        
    },
    content: {
        backgroundColor: "#051566ff",
        borderRadius: 15,
        padding: width * 0.02,
        shadowColor: "#201c1cff",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 2
    },
    //Inputs
    inputGroup: {
        marginBottom: height * 0.02,
    },
    label: {
        fontSize: 17,
        fontWeight: "600",
        color: "#ffffffff",
        marginBottom: height * 0.01
    },
    inputIcon: {
        backgroundColor: "#ffffffff",
        paddingLeft: width * 0.03,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#6c6969ff",
        borderRadius: 18
    },
    inputError: {
       backgroundColor: "#fed5d5ff",
        borderColor: "rgba(139, 0, 0, 1)",
    },
    input: {
        flex: 1,
        fontSize: 17,
        color: "#000000ff",
        fontWeight: "600",
        paddingHorizontal: width * 0.02
    },
    eyeIcon: {
        position: "absolute",
        right: 12,
        top: 42
    },
    errorText: {
        color: "red",
        fontWeight: "600",
        fontSize: 15,
        marginTop: height * 0.01
    },
    primaryButton: {
        backgroundColor: "#ffffffff",
        borderRadius: 17,
        padding: width * 0.02,
        marginTop: 9,
        marginBottom: 9,
        width: "50%",
        left: "25%"
    },
    primaryButtonDisabled: {
        backgroundColor: "#051566ff",
        borderRadius: 10
    },
    primaryButtonText: {
        color: "#051566ff",
        fontSize: 18,
        marginTop: 3,
        fontWeight: "700",
        textAlign: "center"
    }

}) 