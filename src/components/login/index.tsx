import TextField from "../ui/TextField";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import { TouchableOpacity, View, Dimensions} from "react-native";
import { global } from "../ui/styles";
import { Button, Text } from "@react-navigation/elements";
import { useRouter, } from "expo-router";

const RenderLogin = () => {
    const router = useRouter();
    const { width, height } = Dimensions.get("window");
    return (
        <AuthContainer
            
            title="Bem-Vindo"
            subtitle="Faça seu login para continuar!"
            icon="hotel">
            {/* children */}   
            <TextField
                label="E-mail"
                icon="email"
                placeholder="user@gmail.com"
                keyboardType="email-address"
            />
            <PasswordField
                label="Senha"
                icon="lock"
                placeholder="*********"
            />
        <TouchableOpacity onPress={() => router.push("/(tabs)/explorer")} style={[global.primaryButton]}>
            <Text style={global.primaryButtonText}>Entrar</Text>
        </TouchableOpacity>
        
        <View style={{alignItems: "center", marginTop: height * 0.01}}>
            <TouchableOpacity onPress={() => router.push("/(auth)/resetPassword")}>
                <Text style={{color: "#c3c3c3ff", fontSize: 14}}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push("/(auth)/register")} style={{ marginTop: height * 0.01}}>
                <Text style={{color: "#c3c3c3ff", fontSize: 14}}> Não possuiu conta?
                    Cadastre-se agora!</Text>
            </TouchableOpacity>    
        </View>
        </AuthContainer>
    )};
export default RenderLogin;