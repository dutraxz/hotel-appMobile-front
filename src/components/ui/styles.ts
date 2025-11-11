import { StyleSheet, Dimensions } from "react-native";

//Dimensões da tela
const{ width, height } = Dimensions.get("window");
export const global = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "white"
    },

    keyboardAdvoiding: {
        flex: 1
    },

    container: {
        paddingHorizontal: width * 0.03,
        paddingVertical: height * 0.01
    },
    
    header: {
        alignItems: "center",
        marginBottom: height * 0.03
    },

    title: {
        fontSize: 25,
        fontWeight: "800",
        marginTop: height * 0.06
        //Para atribuir cor: color
    },

    subtitle: {
        fontSize: 17,
        color: "blue",
        marginTop: 6,
    },
    
    content: {
        backgroundColor: "blue",
        borderRadius: 15,
        padding: width * 0.07,
        shadowColor: "red",
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 2
    },

    hotelIcon: {
        fontSize: 30
    }

})