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

const RenderRegister = () => {
     const router = useRouter();
      const [email, setEmail] = useState("");
      const [cpf, setCpf] = useState("");
      const [telefone, setTelefone] = useState("");
      const [password, setPassword] = useState("");
      const [loading, setLoading] = useState(false);
      const [touched, setTouched] = useState<{email?: boolean; cpf?: boolean; telefone?: boolean; password?: boolean}>({});

      const errors = useMemo(() => {
          const error: Record<string, string> = {};
          if (touched.email && !email) error.email = "E-mail obrigatório";
          if (touched.cpf && !cpf) error.cpf = "CPF obrigatorio";
          if (touched.telefone && !telefone) error.telefone = "Telefone obrigatorio";
          if (touched.password && password && password.length < 6) error.password = "No mínimo 6 caracteres para a senha";
          if (touched.email && email && !isValidEmail(email)) error.email = "Digite um e-mail válido";
          return error;
        }, [email, password, touched]);
        const canSubmit = email && cpf && telefone && password && Object.keys(errors).length === 0 && !loading;
      
        //Back-end
        const handleSubmit = async () => {
          router.replace("/(tabs)/explorer");
          
        }

    const { width, height } = Dimensions.get("window");
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
            <TouchableOpacity
            onPress={handleSubmit}
            disabled={!canSubmit}
            style={[global.primaryButton]}>

                <Text 
                style={global.primaryButtonText}>
                    Criar Conta</Text>

            </TouchableOpacity> 
            <View 
            style={{ alignItems: "center", marginTop: height * 0.01 }}>
                
                <TouchableOpacity

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
export default RenderRegister;