import { FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { Text, TextInput, TextInputProps, View } from "react-native";
import { global } from "./styles";
import { Icon } from "react-native-screens";

type IconLinbrary = "MaterialIcons" | "FontAwesome6";

type Props = TextInputProps & {
    label?: string;
    errorText?: string;
    lib?: IconLinbrary;
    icon?: keyof typeof MaterialIcons.glyphMap | keyof typeof FontAwesome6.glyphMap;
    button?: IconLinbrary;
    onPressBack?: () => void;
    
}



const TextField =  ({label, errorText, icon, style, button, onPressBack, ...restInputProps } : Props) => {
    return (
        <View style={global.inputGroup}>
            <Text style={global.label}>{label}</Text>
            <View style={[global.inputIcon, errorText ? global.inputError : null]}>
                {!! icon && (
                    <View>
                        <MaterialIcons lib={icon} size={21} color="#052659"/>
                    </View>
                )}
                <TextInput
                    keyboardAppearance = "dark"
                    placeholderTextColor = "#02153092"
                    style={[global.input, style]}
                    /* const TextField = (props: Props) => {
                        const label = props.label;
                        const errorText = props.errorText;
                        const style = props.style;
                        const value = props.value;
                        const onChangeText = props.onChangeText;
                        const placeholder = props.placeholder;
                        const autoCapitalize = props.autoCapitalize;
                        const keyboardType = props.keyboardType;
                    } */
                    {...restInputProps}
                />
            </View>
            {!! errorText &&
                <Text style ={global.errorText}>{errorText}</Text>
                }
        </View>
    )
};

export default TextField;