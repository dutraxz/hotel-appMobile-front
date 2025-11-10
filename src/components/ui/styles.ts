import { StyleSheet, Dimensions } from "react-native";
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
        paddingHorizontal: width * 0.07,
        paddingVertical: height * 0.07
    },
    header: {
        alignItems: "center",
        marginBottom: 16
    },
    title: {
        fontSize: 25,
        fontWeight: "800",
        //Para atribuir cor: color
    },
    subtitle: {
        fontSize: 17,
        color: "purple",
        marginTop: 6,
    },
    content: {
        backgroundColor: "blue",
        borderRadius: 10,
        padding: width * 0.07,
        shadowColor: "black",
        shadowOpacity: 0.06,
        shadowRadius: 10,
        elevation: 2
    },

})