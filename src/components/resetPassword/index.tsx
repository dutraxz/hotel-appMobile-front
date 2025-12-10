import { Text } from "@react-navigation/elements";
import { useRouter, } from "expo-router";
import { Dimensions, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import { global } from "../ui/styles";
import TextField from "../ui/TextField";

const RenderResetPassword = () => {
    const router = useRouter();
    const { width, height } = Dimensions.get("window");
    return (
        <AuthContainer
        
            title=" Redefinição de Senha"
            subtitle="Digite seu e-mail para redefinir sua senha"
            icon="hotel">
            {/* children */}   
            <TextField
                label="E-mail"
                icon={{ lib: "MaterialIcons", name: "email" }}
                placeholder="user@gmail.com"
                sfs="email-address"
            />

        <TouchableOpacity style={[global.primaryButton]}>
            <Text style={global.primaryButtonText}>Enviar e-mail</Text>
        </TouchableOpacity>
        <View style={{alignItems: "center", marginTop: height * 0.01}}>
            <TouchableOpacity onPress={() => router.push("/(auth)")} style={{ marginTop: height * 0.01}}>
                <Text style={{color: "#c3c3c3ff", fontSize: 14}}> Voltar para login</Text>
            </TouchableOpacity>    
        </View>
        </AuthContainer>
    )};
export default RenderResetPassword;