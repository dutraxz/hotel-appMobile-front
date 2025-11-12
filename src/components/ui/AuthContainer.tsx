import {FontAwesome6} from "@expo/vector-icons"
import {KeyboardAvoidingView, Platform, ScrollView, Text, View} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { global } from "./styles";

type Props = {
    title: string;
    subtitle?: string;
    icon?: keyof typeof FontAwesome6.glyphMap;
    children: React.ReactNode;
}

const AuthContainer = ({title, subtitle, icon, children}: Props) => {
    return (
        <SafeAreaView style={global.safeArea}>
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={global.keyboardAdvoiding}>
                <ScrollView style={global.container}>
                    <View style={global.header}>
                        {!!icon && <FontAwesome6 name={icon} size={25} color="#081074ff" style={global.hotelIcon}/>} 
                        <Text style={global.title}>{title}</Text>
                        {!!subtitle && <Text style={global.subtitle}>{subtitle}</Text>}
                    </View>
                    <View style={global.content}>
                    {/* {children} */}
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

export default AuthContainer;