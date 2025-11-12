import { StyleSheet, Dimensions } from "react-native";

//Dimensões da tela
const{ width, height } = Dimensions.get("window");
export const global = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff"
    },

    keyboardAdvoiding: {
        flex: 1
    },

    container: {
        paddingHorizontal: width * 0.08,
        paddingVertical: height * 0.02
    },
    
    header: {
        alignItems: "center",
        marginBottom: height * 0.03
    },

    title: {
        fontSize: 25,
        fontWeight: "800",
        //Para atribuir cor: color
    },

    subtitle: {
        fontSize: 17,
        color: "blue",
        marginTop: height * 0.01,
    },
    
    content: {
        backgroundColor: "black",
        borderRadius: 15,
        padding: width * 0.02,
        shadowColor: "#000",
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 2
    },

    hotelIcon: {
        marginBottom: height * 0.01
    },

    //Inputs
    inputGroup: {
        marginBottom: height * 0.02,
    },

    label: {
        fontSize: 14,
        fontWeight: "600",
        color: "#374151",
        marginBottom: height * 0.01
    },
    inputIcon: {
        backgroundColor: "#f3f4f6",
        paddingLeft: width * 0.03,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "#f3f4f6",
        borderRadius: 8
    },
    inputError:{
        backgroundColor: "#fef2f2",
        borderColor: "#dc2626"
    },

    input:{
        flex: 1,
        fontSize: 16,
        color: "#111827",
        paddingHorizontal: width * 0.02,
    },
    errorText:{
        color: "#dc2626",
        fontSize: 15,
        marginTop: height * 0.01
    }
    

})