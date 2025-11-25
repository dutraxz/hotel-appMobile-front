import { useState } from "react";
import { View, Text, Modal } from "react-native";
import DatePicker, { getFormatedDate, getToday } from "react-native-modern-datepicker";




type Props = {
  label?: string;
};

const RenderDatePicker = ({ label }: Props) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const startDate = getFormatedDate(tomorrow, "DD/MM/YYYY");


  // getToday(); //Retorna a data atual 
  // getFormatedDate(new Date(), "YYYY/MM/DD h:")
  const [selectDate, setSelectDate] = useState("");
  return(
    <View>
      {!!label && <Text>{label}</Text>}
      <DatePicker
        mode="calendar"
        options={{
          backgroundColor: "#03195bff",
          textHeaderColor: "#ffffffff",
          textDefaultColor: "#000000ff",
          selectedTextColor: "#fff8f8ff",
          mainColor: "#ffffffff",
          textSecondaryColor: "#09207cff",
          borderColor: "#ffffffff",
      }}
      style={{borderRadius: 15}}
      isGregorian ={true}
      minimumDate={startDate}
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