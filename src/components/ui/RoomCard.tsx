import { FontAwesome5, FontAwesome6, MaterialIcons } from "@expo/vector-icons";
import { Dimensions, Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

type NameIcon =
  | { lib: "MaterialIcons"; name: keyof typeof MaterialIcons.glyphMap }
  | { lib: "FontAwesome6"; name: keyof typeof FontAwesome6.glyphMap }
  | { lib: "FontAwesome5"; name: keyof typeof FontAwesome5.glyphMap };

type Infos = { title?: string; text: string; price: number };

type Props = {
  image?: ImageSourcePropType;
  label?: string;
  description?: Infos;
  icon?: NameIcon;
};

const { width, height } = Dimensions.get("window");
const RoomCard = ({ image, label, description, icon }: Props) => {
  
  // Função auxiliar para renderizar ícone
  const renderIcon = () => {
    if (!icon) return null;
    const size = 20; // Aumentei um pouco o tamanho para visibilidade
    
    if (icon.lib === "MaterialIcons") {
      return <MaterialIcons name={icon.name} size={size} color="#051566ff" />;
    }
    if (icon.lib === "FontAwesome5") {
      return <FontAwesome5 name={icon.name} size={size} color="#051566ff" />;
    }
    if (icon.lib === "FontAwesome6") {
      return <FontAwesome6 name={icon.name} size={size} color="#051566ff" />;
    }
    return null;
  };

  return (
    <View style={styles.card}>
      {/* Imagem ocupando a parte superior do card */}
      {!!image && (
        <Image style={styles.image} source={image} resizeMode="cover" />
      )}

      {/* Conteúdo do Card */}
      <View style={styles.contentContainer}>
        
        {/* Cabeçalho: Título e Ícone */}
        <View style={styles.headerRow}>
          {!!label && <Text style={styles.title}>{label}</Text>}
          {renderIcon()}
        </View>

        {/* Descrição e Preço */}
        {!!description && (
          <View style={styles.infoContainer}>
            {!!description.title && (
              <Text style={styles.subtitle}>{description.title}</Text>
            )}
            
            <Text style={styles.text} numberOfLines={3}>
              {description.text}
            </Text>

            <Text style={styles.price}>
              R$ {description.price.toFixed(2).replace('.', ',')} 
              <Text style={styles.priceSuffix}> / noite</Text>
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 16,
    width: width * 0.78, // Largura fixa relativa para carrossel
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginVertical: 6,
    overflow: "hidden", // Garante que a imagem respeite o border radius
  },
  image: {
    height: 150,
    width: "100%",
  },
  contentContainer: {
    padding: 10,
  },
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: "#000000",
    flex: 1, // Ocupa o espaço disponível empurrando o ícone
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "600",
    color: "#666",
    marginBottom: 4,
  },
  infoContainer: {
    marginTop: 4,
  },
  text: {
    fontSize: 14,
    color: "#524f4f",
    lineHeight: 20,
    marginBottom: 12,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#051566ff",
    textAlign: "right", // Preço alinhado à direita fica elegante
  },
  priceSuffix: {
    fontSize: 14,
    fontWeight: "400",
    color: "#888",
  }
});
export default RoomCard;
