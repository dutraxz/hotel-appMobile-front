import { FontAwesome6, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";

// Tipagem correta dos ícones
type NameIcon = 
    | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
    | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
    | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };

type Props = TextInputProps & {
    label: string;
    errorText?: string; 
    icon?: NameIcon;
}

const TextField = ({ label, errorText, icon, style, ...restInputProps }: Props) => {

    // Função auxiliar para renderizar o ícone correto baseado na "lib"
    const renderIcon = () => {
        if (!icon) return null;

        const iconSize = 21;
        const iconColor = "#052659";

        // Verifica qual biblioteca foi solicitada e retorna o componente certo
        if (icon.lib === "MaterialIcons") {
            return <MaterialIcons name={icon.name} size={iconSize} color={iconColor} />;
        }
        if (icon.lib === "FontAwesome6") {
            return <FontAwesome6 name={icon.name} size={iconSize} color={iconColor} />;
        }
        if (icon.lib === "FontAwesome5") {
            return <FontAwesome5 name={icon.name} size={iconSize} color={iconColor} />;
        }
        
        return null;
    };

    return (
        <View style={global.inputGroup}>
            <Text style={global.label}>{label}</Text>
            
            <View style={[global.inputIcon, errorText ? global.inputError : null]}>
                
                {/* Aqui chamamos a função que desenha o ícone */}
                {icon && (
                    <View style={{ marginRight: 10 }}> 
                        {renderIcon()}
                    </View>
                )}

                <TextInput
                    keyboardAppearance="dark"
                    placeholderTextColor="#02153092"
                    style={[global.input, style]}
                    {...restInputProps}
                />
            </View>

            {!!errorText && (
                <Text style={global.errorText}>{errorText}</Text>
            )}
        </View>
    );
};

export default TextField;