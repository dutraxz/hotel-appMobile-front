import { Text } from "@react-navigation/elements";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, TouchableOpacity, View, Alert, ActivityIndicator} from "react-native";
import AuthContainer from "../ui/AuthContainer";
import { global } from "../ui/styles";
import TextField from "../ui/TextField";

const RenderResetPassword = () => {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const { width, height } = Dimensions.get("window");

    const handleRecoverPassword = () => {
    if (!email.trim()) {
      Alert.alert("Erro", "O email é obrigatório");
      return;
    }
 
    if (!email.includes("@")) {
      Alert.alert("Erro", "Email inválido");
      return;
    }
 
    setLoading(true);
 
    // Simula requisição de recuperação de senha
    setTimeout(() => {
      setLoading(false);
      Alert.alert(
        "Sucesso",
        "Enviamos um link de recuperação para seu email.",
        [
          {
            text: "OK",
            onPress: () => router.back(),
          },
        ]
      );
    }, 1500);
  };
    
    return (
        <AuthContainer
            title=" Redefinição de Senha"
            subtitle="Digite seu e-mail para redefinir sua senha"
            icon="hotel">
            {/* children */}

            <View style={global.content}>
            <TextField
                label="E-mail"
                icon={{ lib: "MaterialIcons", name: "email" }}
                placeholder="seuemail@exemplo.com"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
        />
       <TouchableOpacity
        style={[
            global.primaryButton,
          loading && { opacity: 0.7 },
        ]}
        onPress={handleRecoverPassword}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator color="#fff" />
        ) : (
          <Text style={global.primaryButtonText}>Enviar </Text>
        )}
      </TouchableOpacity>
        <View style={{alignItems: "center", marginTop: height * 0.01}}>
            <TouchableOpacity onPress={() => router.push("/(auth)")} style={{ marginTop: height * 0.01}}>
                <Text style={{color: "#c3c3c3ff", fontSize: 14}}> Voltar para login</Text>
            </TouchableOpacity>  

        </View>
        </View>
        </AuthContainer>
    )};

export default RenderResetPassword;