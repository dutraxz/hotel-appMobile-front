 /* Cadasrtrar-se */
import { Text } from "react-native";
import { View } from "react-native";
import AuthContainer from "../ui/AuthContainer"

const RenderAccount = () => {
    return (
       <AuthContainer>
            <View>
                <Text>Esta será a futura account</Text>
            </View>
        </AuthContainer>
    );
}
export default RenderAccount;
