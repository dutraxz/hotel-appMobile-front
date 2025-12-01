import { View, Text, Image, TextInput } from "react-native";
import { global } from "./styles";
import TextField from "./TextField";
import { FontAwesome6, MaterialIcons, FontAwesome5 } from "@expo/vector-icons";

type Infos = { title?: string; text?: string}

type NameIcon = 
    | {lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
    | {lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
    | {lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };

type Props = {
  label: string;
  errorText?: string;
  description?: string;
  icon?: NameIcon;
};
const RoomCard = ({label, description, icon, errorText}: Props) => {
  return (
    <View style={global.card}>
      <View></View>
    <View>
      {!! label && <Text>{label}</Text>}
        <View>
          <View>
            {!!icon && (
              <View>
            {icon.lib === "MaterialIcons" && (
              <MaterialIcons name={icon.name} size={21} color="#052659"/>
            )}
            {icon.lib === "FontAwesome6" && (
              <FontAwesome6 name={icon.name} size={21} color="#052659"/>
            )}
            </View>
            )}
          
            {!!description && <Text>{description.title}</Text>}
            </View>

            <View></View>
          </View>
        </View>
      </View>
  );
};
const styles = StyleSheet.create({

}); 

export default RenderRoomCard;