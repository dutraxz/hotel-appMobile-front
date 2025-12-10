import { Text } from "@react-navigation/elements";
import { useNavigation, useRouter, } from "expo-router";
import { Dimensions, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import PasswordField from "../ui/PasswordField";
import { global } from "../ui/styles";
import TextField from "../ui/TextField";
import React, { useMemo, useState } from 'react';

function isValidEmail(email: string) {
  return /^[^\s@&='"!]@[^\s@&='"!].[^\s@&='"!]$/.test(email);
}

const RenderLogin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [touched, setTouched] = useState<{email?: boolean; password?: boolean}>({});

  const errors = useMemo(() => {
    const error: Record<string, string> = {};
    if (touched.email && !email) error.email = "E-mail obrigatório";
    if (touched.password && !password) error.password = "Senha obrigatória";
    if (touched.password && password && password.length < 6) error.password = "No mínimo 6 caracteres para a senha";
    if (touched.email && email && !isValidEmail(email)) error.email = "Digite um e-mail válido";
    return error;
  }, [email, password, touched]);
  const canSubmit = email && password &&  Object.keys(errors).length === 0 && !loading;

  //Back-end
  const handleSubmit = async () => {
    router.replace("/(tabs)/explorer");
    
  }

    const { width, height } = Dimensions.get("window");
    return (
        <AuthContainer
            title="Bem-Vindo"
            subtitle="Faça seu login para continuar!"
            icon="hotel">
            {/* children */}

            <View style={global.content}>
        <TextField
          label="E-mail"
          icon={{ lib: "MaterialIcons", name: "email" }}
          placeholder="user@email.com"
          value={email}
          onChangeText={(input) => setEmail(input)}
          errorText={errors.email}
        />

        <PasswordField
          label="Senha"
          icon={{ lib: "MaterialIcons", name: "lock" }}
          placeholder="*********"
          value={password}
          onChangeText={(input) => setPassword(input)}
          errorText={errors.password}
        />

        <TouchableOpacity
        onPress={handleSubmit}
        style={[global.primaryButton]}
        disabled={!canSubmit}
        >
            <Text style={global.primaryButtonText}>Entrar</Text>
        </TouchableOpacity>
        
        <View style={{alignItems: "center", marginTop: height * 0.01}}>
            <TouchableOpacity
            onPress={() => router.push("/(auth)/resetPassword")}
            >
            <Text style={{color: "#c3c3c3ff", fontSize: 14}}>
                Esqueci minha senha
                </Text>
            </TouchableOpacity>

            <View
            style={{
              backgroundColor: "#7c8390ff",
              width: width * 0.5,
              height: height * 0.001,
              borderRadius: 10,
              marginTop: height * 0.03, 
            }}
            ></View>

            <TouchableOpacity
            onPress={() => router.push("/(auth)/register")}
            style={{ marginTop: height * 0.01}}>

                <Text style={{color: "#c3c3c3ff", fontSize: 14}}> Não possuiu conta?
                    Cadastre-se agora!
                </Text>
          </TouchableOpacity>
        </View>
      </View>
    </AuthContainer>
  );
};
export default RenderLogin;