import AuthContainer from "../ui/AuthContainer"
import { Text } from "@react-navigation/elements";
import { View } from "react-native";
import PasswordField from "../ui/PasswordField";
import RenderDatePicker from "../ui/DatePicker"

const RenderExplorer = () => {
    return (
        <AuthContainer>
            <View>
                <RenderDatePicker/>
                <Text>Esta será a futura explorer</Text>
            </View>
        </AuthContainer>
    );
};
export default RenderExplorer;