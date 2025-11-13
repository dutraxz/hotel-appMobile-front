import TextField from "../ui/TextField";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import { TouchableOpacity } from "react-native";
import { global } from "../ui/styles";
import { Text } from "@react-navigation/elements";

const RenderLogin = () => {
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

        <TouchableOpacity style={[global.primaryButton]}>
            <Text style={global.primaryButtonText}>Entrar</Text>
        </TouchableOpacity>

        </AuthContainer>
    )
};

export default RenderLogin;