import TextField from "../ui/TextField";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import { TouchableOpacity, View, Dimensions} from "react-native";
import { global } from "../ui/styles";
import { Button, Text } from "@react-navigation/elements";
import { useRouter, } from "expo-router";

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
                icon="email"
                placeholder="user@gmail.com"
                keyboardType="email-address"
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