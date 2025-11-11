/*Define o fluxo de navegação entre as telas de autentificação
Empilhamento de telas: Stack Navigator, 3 funções para manipular a sobreposição:
push(): empilha uma tela encima da outra
back(): retorna a tela anterior empilhada
replace(): substitui uma tela por outra*/

import { Stack } from "expo-router";
import { StackScreen } from "react-native-screens";

export default function AuthLayout(){
    return (
        <Stack screenOptions={{headerShown: false}}>
            <Stack.Screen name="index" options={{title: "Login"}}/>
            {/*<Stack.Screnn name="register" options={{title: "Cadastro"}}/> */}
            {/*<Stack.Screnn name="resetPassword" options={{title: "Esqueci minha senha"}}/> */}


        </Stack>    
    )

}