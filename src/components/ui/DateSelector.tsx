import { Dimensions, View} from "react-native";
import DatePicker, { getToday } from "react-native-modern-datepicker";
//Instalaçao da biblioteca
type Props = {
  onSelectDate: (date: string) => void;
}

const DateSelector = ({ onSelectDate }: Props) => {
  const { width, height } = Dimensions.get("window"); //Componente de dimensões para largura e altura
  const today = getToday();
  return(
    <View>
      <DatePicker
        mode="calendar"
        options={{
          backgroundColor: "#051566ff", //fundo
          textHeaderColor: "#a4a1a1ff", //mes 
          textDefaultColor: "#ffffffff", //numero data
          selectedTextColor: "#051566ff", //cor do numero (data) quando selecionado
          mainColor: "#a4a1a1ff", //setas lateris e selector
          textSecondaryColor: "#ffffffff", //dia semana
          borderColor: "#ffffffff", //borda
          textFontSize: 10,
          textHeaderFontSize: 15
      }}
        style={{ borderRadius: 15, width: width * 0.65, height: "auto" }}
        isGregorian={true}
        minimumDate={today}
        onSelectedChange={(date) => {
          onSelectDate(date);
        }}
      />
    </View>
  );
};;
export default DateSelector;