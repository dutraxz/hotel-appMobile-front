import { useState } from "react";
import { Dimensions, View, Text, Modal } from "react-native";
import DatePicker, { getFormatedDate, getToday } from "react-native-modern-datepicker";
//Instalaçao da biblioteca
type Props = {
  label?: string;
};

const RenderDatePicker = ({ label }: Props) => {
  const { width, height } = Dimensions.get("window"); //Componente de dimensões para largura e altura

  const startDate = getToday();

  const [selectDate, setSelectDate] = useState("");
  return(
    <View>
      {!!label && <Text>{label}</Text>}
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
      style={{borderRadius: 15, width: width * 0.6, height: "auto"}}
      isGregorian ={true}
      minimumDate={selectDate}
      selected={selectDate}
      onSelectedChange={date => setSelectDate(date)}
      />
    </View>
  );
};
export default RenderDatePicker;
// const [open, setOpen] = useState(false);
// const [date, setDate] = useState('2023/02/08');

// const today = new Date();
// const tomorrow = new Date(today);
// tomorrow.setDate(today.getDate() + 1);

// const startDate = getFormatedDate(tomorrow, "DD/MM/YYYY");


// function handleOnPress() {
//     setOpen(!open);
// }

//  function handleChange(selectedDate: string) {
//     setDate(selectedDate);
//  }

//   return (
//     <View>
//         <TouchableOpacity onPress={handleOnPress}> 
//             <Text>Abrir</Text>
//         </TouchableOpacity>

//      <Modal animationType="slide" transparent={true} visible={open}>
//         <View style={global.centerView}>
//           <View style={global.modalView}>
//             <DatePicker
//               mode="calendar"
//               isGregorian={true}
//               selected={date}
//               minimumDate={startDate}
//               onSelectedChange={handleChange}
//             />

//             <TouchableOpacity onPress={handleOnPress}>
//               <Text>Close</Text>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// };

// export default RenderDatePicker;