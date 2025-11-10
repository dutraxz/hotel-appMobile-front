import {FontAwesome5, FontAwesome6} from "@expo/vector-icons"
import {KeyboardAvoidingView, ScrollView, Text, View} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {
    title: string;
    subtitle?: string;
    icon?: keyof typeof FontAwesome5.glyphMap;
    // children: React.ReactNode;
}

export default function AuthContainer({title, subtitle, icon, /*children*/}: Props) {
    return (
        <SafeAreaView style={globlal.safeArea}>
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "heigt" } style
            <ScrollView contentContainerStyle={global.container}>
                <View style={global.header}>
                    {!!icon && <FontAwesome6 name={icon} size={30} size={30} color="purple" />
                    <Text style={global.title}> {title}</Text>
                     {!!subtitle && <Text style={global.subtitle}>{subtitle}</Text>}
            <FontAwesome5 name={icon} size={25} color="red" />
                <View>

                </View>
            </ScrollView>
        </KeyboardAvoidingView>
        </SafeAreaView>
    );
}