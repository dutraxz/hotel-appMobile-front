/* Cadasrtrar-se */
import { Text } from "@react-navigation/elements";
import { View } from "react-native";
import RenderDatePicker from "@/components/ui/DatePicker";
import RenderRoomCard from "@/components/ui/RenderRoomCard";
const RenderExplorer = () => {
    return (

       <Text>search
        <View style={{ padding: 20}}>
        <RenderDatePicker />
        <RenderRoomCard />
        </View>
       </Text>
 
        
    );
}
export default RenderExplorer ;
