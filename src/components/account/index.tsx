import { useNavigation, useRouter } from "expo-router";
import { Dimensions, ScrollView, TouchableOpacity, View, Modal, Text, Alert } from "react-native";
import React, { useState } from 'react';
import { MaterialIcons } from "@expo/vector-icons";

// Importe seus componentes customizados aqui
import AuthContainer from "../ui/AuthContainer";
import { global } from "../ui/styles";
import TextField from "../ui/TextField";

// --- Funções Auxiliares de Máscara (Sem precisar de biblioteca) ---
const mascaraCPF = (value: string) => {
    return value
        .replace(/\D/g, "") // Remove tudo o que não é dígito
        .replace(/(\d{3})(\d)/, "$1.$2") // Coloca ponto após o 3º digito
        .replace(/(\d{3})(\d)/, "$1.$2") // Coloca ponto após o 6º digito
        .replace(/(\d{3})(\d{1,2})/, "$1-$2") // Coloca traço após o 9º digito
        .replace(/(-\d{2})\d+?$/, "$1"); // Limita o tamanho
};

const mascaraTelefone = (value: string) => {
    return value
        .replace(/\D/g, "")
        .replace(/(\d{2})(\d)/, "($1) $2")
        .replace(/(\d{5})(\d)/, "$1-$2")
        .replace(/(-\d{4})\d+?$/, "$1");
};

const RenderAccount = () => {
    const router = useRouter();
    const { width, height } = Dimensions.get("window");

    // --- Estados Principais ---
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpf, setCpf] = useState("");
    
    // --- Estados do Modal e Senha ---
    const [modalVisivel, setModalVisivel] = useState(false);
    const [novaSenha, setNovaSenha] = useState("");
    const [confirmaSenha, setConfirmaSenha] = useState("");
    const [senhaAntiga, setSenhaAntiga] = useState("");

    // Salvar dados gerais
    const handleSubmit = async () => {
        // Aqui enviaria nome, cpf, email, telefone para o backend
        console.log("Dados salvos:", { nome, cpf, email, telefone });
        router.replace("/(tabs)/account");
    };

    // Lógica para salvar a nova senha dentro do Modal
    const handleAlterarSenha = () => {
        if (!novaSenha || !confirmaSenha) {
            Alert.alert("Erro", "Preencha todos os campos de senha.");
            return;
        }
        if (novaSenha === confirmaSenha) {
            console.log("Senha alterada com sucesso para:", novaSenha);
            
            // Limpa e fecha
            setModalVisivel(false);
            setNovaSenha("");
            setConfirmaSenha("");
            Alert.alert("Sucesso", "Sua senha foi alterada!");
        } else {
            Alert.alert("Erro", "As senhas não conferem!");
        }
    };

    return (
        <View style={{ flex: 1, marginTop: -40 }}>
        <AuthContainer
            title="Bem-Vindo a sua conta"
            subtitle="Gerencie suas informações pessoais"
            icon="person"
            >
        <View style={[global.content, { marginTop: 20, padding: 20}]}>
            
                <ScrollView contentContainerStyle={{
                     paddingBottom: 50,
                     justifyContent: 'flex-start', // Garante que comece no topo
                    paddingTop: 0                 // Zera qualquer espaço superior }}>
                    }}>

                    {/* Inputs para nome, cpf, email e telefone */}
                    <TextField
                        label="Alterar Nome"
                        icon={{ lib: "MaterialIcons", name: "person" }}
                        placeholder="Seu novo nome..."
                        value={nome}
                        onChangeText={setNome} 
                    />

                    <TextField
                        label="Alterar CPF"
                        icon={{ lib: "MaterialIcons", name: "fingerprint" }}
                        placeholder="000.000.000-00"
                        value={cpf}
                        onChangeText={(text) => setCpf(mascaraCPF(text))} // Aplica a máscara
                        keyboardType="numeric"
                        maxLength={14}
                    />

                    <TextField
                        label="Alterar E-mail"
                        icon={{ lib: "MaterialIcons", name: "email" }}
                        placeholder="Seu novo e-mail..."
                        value={email}
                        onChangeText={setEmail}
                        keyboardType="email-address"
                    />

                    <TextField
                        label="Alterar Telefone"
                        icon={{ lib: "MaterialIcons", name: "phone" }}
                        placeholder="(00) 00000-0000"
                        value={telefone}
                        onChangeText={(text) => setTelefone(mascaraTelefone(text))} // Aplica a máscara
                        keyboardType="phone-pad"
                        maxLength={15}
                    />

                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={[global.primaryButton, { marginTop: 10 }]}>
                        <Text style={global.primaryButtonText}>Salvar Dados</Text>
                    </TouchableOpacity>

                    {/* Botão que ABRE o Modal */}
                    <TouchableOpacity
                        onPress={() => setModalVisivel(true)}
                        style={[global.primaryButton, { marginTop: 10, backgroundColor: '#ffffff' }]}> 
                        <Text style={global.primaryButtonText}>Alterar Senha</Text>
                    </TouchableOpacity>

                    {/* Link de Suporte */}
                    <TouchableOpacity
                        onPress={() => router.push("/(auth)/support")}
                        style={{ marginTop: 20, alignItems: "center" }}>
                        <Text style={{ color: "#c3c3c3ff", fontSize: 14 }}>
                            Não Conseguiu? Fale Conosco!
                        </Text>
                    </TouchableOpacity>

                </ScrollView>

                {/* --- MODAL (Fica fora do ScrollView para cobrir a tela toda corretamente) --- */}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisivel}
                    onRequestClose={() => setModalVisivel(false)}
                >
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
                        
                        <View style={{ backgroundColor: "white", borderRadius: 20, padding: 30, width: '90%', elevation: 10 }}>
                            
                            <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 20, textAlign: 'center', color: '#051566ff' }}>
                                Definir Nova Senha
                            </Text>


                            <TextField
                                label="Senha Antiga"
                                icon={{ lib: "MaterialIcons", name: "lock-open" }}
                                placeholder="Digite a senha antiga"
                                textAlign="center"
                                secureTextEntry={true}
                                onChangeText={setSenhaAntiga}
                                value={senhaAntiga}
                            />

                            <TextField
                                label="Nova Senha"
                                icon={{ lib: "MaterialIcons", name: "lock" }}
                                placeholder="Digite a nova senha"
                                textAlign="center"
                                secureTextEntry={true}
                                onChangeText={setNovaSenha}
                                value={novaSenha}
                            />

                            <TextField
                                label="Confirmar Senha"
                                icon={{ lib: "MaterialIcons", name: "lock" }}
                                placeholder="Confirme a nova senha"
                                textAlign="left"
                                secureTextEntry={true}
                                onChangeText={setConfirmaSenha}
                                value={confirmaSenha}
                            />

                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20 }}>
                                <TouchableOpacity
                                    style={[global.primaryButton, { alignItems: "center", backgroundColor: "#051566ff", flex: 1, marginRight: 7 }]}
                                    onPress={() => {
                                        setModalVisivel(false);
                                        setSenhaAntiga("");
                                        setNovaSenha(""); // Limpa se cancelar também
                                        setConfirmaSenha("");
                                    }}>
                                    <Text style={[global.primaryButtonText, {alignContent: "center", color: "#ffffff" }]}>Cancelar</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[global.primaryButton, {  backgroundColor: "#051566ff", marginLeft: 5 }]}
                                    onPress={handleAlterarSenha}>
                                    <Text style={[global.primaryButtonText,  {alignItems: "center", color: "#ffffff"}]}>Confirmar</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </View>
                </Modal>

            </View>
        </AuthContainer>
        </View>
    );
};
export default RenderAccount;