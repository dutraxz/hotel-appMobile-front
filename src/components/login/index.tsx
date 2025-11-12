import TextField from "../ui/TextField";
import AuthContainer from "../ui/AuthContainer";



const RenderLogin = () => {
    return (
        <AuthContainer
            title="Bem-Vindo"
            subtitle="Faça seu login para continuar!"
            icon="hotel">

        <TextField
            label="E-mail"
            icon={"email"}>
        </TextField>
        </AuthContainer>
    )
}

export default RenderLogin;