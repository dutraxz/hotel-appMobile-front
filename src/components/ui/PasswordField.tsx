import { TouchableOpacity, View } from "react-native";
import TextField from "./TextField";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { global } from "./styles";
type Props = React.ComponentProps<typeof TextField>;

const PasswordField = (restInputProps: Props) => {
    
    //React.useState p controlar a visibilidade da senha
    const [show, setShow] = useState(false);
    return (
        <View>
            <TextField
                {...restInputProps}
                icon={restInputProps.icon ?? "lock"}
                secureTextEntry={!show}
                autoCapitalize="none"
                autoCorrect={false}
            />

            <TouchableOpacity style={global.eyeIcon} onPress={() => setShow((showTrue) => !showTrue)}>
            <Ionicons name={show ? "eye-outline" : "eye-off-outline"} size={22}
            color="#051566ff" />
            </TouchableOpacity>
        </View>
    );
};

export default PasswordField;;

