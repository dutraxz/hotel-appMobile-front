import iconSet from "@expo/vector-icons/build/Fontisto";
import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");
export const global = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "rgb(255, 250, 250)"
    },
    keyboardAvoiding: {
        flex: 1
    },
    container: {
        paddingHorizontal: width * 0.07,
        paddingVertical: height * 0.03,
        flexGrow: 1,
        justifyContent: "flex-start",
    },
    header: {
        alignItems: "center",
        marginBottom: height * 0.02,
        marginTop: 0
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
        padding: 14,
        shadowColor: "#201c1cff",
        shadowOpacity: 0.05,
        shadowRadius: 10,
        elevation: 9,
        marginBottom: height * 0.02,
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
        paddingLeft: width * 0.02,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgb(240, 227, 227)",
        borderRadius: 13
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
        backgroundColor: "rgb(250, 250, 250)",
        borderRadius: 19,
        padding: width * 0.02,
        marginTop: 9,
        marginBottom: 4,
        width: "50%",
        left: "25%"
    },
    primaryButtonDisabled: {
        backgroundColor: "#051566ff",
        borderRadius: 10
    },
    primaryButtonText: {
        color: "#051566ff",
        fontSize: 17,
        marginTop: 1,
        fontWeight: "900",
        textAlign: "center",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center"
        
    },
    screenOptions: {
        height: 60,
        paddingBottom: 5,
        borderRadius: 15,
    },
    centerView: {
        flex: 5,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)"
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        width: "90%",
        padding: 35,
        alignItems: "center",
        shadowColor: "#000000ff",
        shadowOffset: {
        width: 0,
        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    card: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#051566ff",
        borderRadius: 18,
        padding: 12,
        shadowOpacity: 0.1,
        shadowRadius: 16,
    },
    image: {
        width: 300,
        height: 150,
        borderRadius: 12,
    },
    infoSection: {
        justifyContent: "center",
        alignItems: "center"
    },
    price: {
        justifyContent: "center",
        alignItems: "center"
    },
    titleCard : {
        color: "#ffffffff",
    }
    
})
//ESPAÇAMENTOS
export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  base: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  xxxl: 40,
} as const;
