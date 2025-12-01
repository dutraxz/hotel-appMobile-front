import TextField from "../ui/TextField";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import { TouchableOpacity, View, Dimensions} from "react-native";
import { global } from "../ui/styles";
import { Button, Text } from "@react-navigation/elements";
import { useRouter, } from "expo-router";
import React from "react";
import { useNavigation } from "expo-router";

const RenderRegister = () => {
    const router = useRouter();
    const { width, height } = Dimensions.get("window");
    const navigation = useNavigation();
    return (

        <AuthContainer
            title="Registre-se"
            subtitle="Preencha seus dados para se cadastrar!"
            icon="hotel">
                
            {/* children */}
            <View style={global.content}>
            <TextField
                label="E-mail"
                icon={{ lib: "MaterialIcons", name: "email" }}
                placeholder="user@gmail.com"
                keyboardType="email-address"
            />
            <TextField
                label="CPF"
                icon={{ lib: "MaterialIcons", name: "badge" }}
                placeholder="000.000.000-00"
                keyboardType="number-pad"
            />
            <TextField
                label="Telefone"
                icon={{ lib: "MaterialIcons", name: "phone" }}
                placeholder="(00) 00000-0000"
                keyboardType="phone-pad"
            />
            <PasswordField
                label="Senha"
                icon={{ lib: "MaterialIcons", name: "lock" }}
                placeholder="*********"
            />
            <PasswordField
                label="Confirme sua senha"
                icon={{ lib: "MaterialIcons", name: "lock" }}
                placeholder="*********"
            />
            <TouchableOpacity style={[global.primaryButton]}>

                <Text style={global.primaryButtonText}>Criar Conta</Text>

            </TouchableOpacity> 
            <View style={{ alignItems: "center", marginTop: height * 0.01 }}>
                
                <TouchableOpacity onPress={() => router.push("/(auth)")} style={{ marginTop: height * 0.01 }}>

                    <Text style={{ color: "#c3c3c3ff", fontSize: 14 }}> Já possui conta? Faça seu Login
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </AuthContainer>
    );
};
export default RenderRegister;