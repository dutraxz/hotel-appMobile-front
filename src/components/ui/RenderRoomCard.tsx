import { View, Text, Image } from "react-native";
import { global } from "./styles";

const RenderRoomCard = () => {
  return (
    <View style={global.card}>

      <Image
        source={{uri: "https://midias.agazeta.com.br/2023/03/30/max-mello---suite-dos-noivos--1482020-article.jpg" }}
        style={global.image}
              />

      <View style={global.infoSection}>
        <Text style={global.titleCard}>Suite Victor
      
        </Text>
    
        <Text style={global.price}>
          R$ 150 por 1 noites
        </Text>
      </View>

    </View>
  );
}
export default RenderRoomCard;