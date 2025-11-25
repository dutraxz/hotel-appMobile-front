import AuthContainer from "../ui/AuthContainer"
import { Text } from "@react-navigation/elements";
import { View } from "react-native";
import PasswordField from "../ui/PasswordField";

const RenderReservation = () => {
    return (
        <AuthContainer>
            <View>
                <Text>Esta será a futura reservatiom</Text>
            </View>
        </AuthContainer>
    );
};
export default  RenderReservation;