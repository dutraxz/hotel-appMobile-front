import { useRouter } from "expo-router";
import { useState } from "react";
import { Dimensions, Modal, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import DateSelector from "../ui/DateSelector";
import InputSpin from "../ui/InputSpinner";
import RoomCard from "../ui/RoomCard";
import { global, spacing } from "../ui/styles";
import TextField from "../ui/TextField";

const RenderExplorer = () => {
  const { width, height } = Dimensions.get("window");
  const router = useRouter();

  // Estados existentes
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [qntGuests, setQntGuests] = useState<number>(1);
  const [calendar, setCalendar] = useState<"checkin" | "checkout" | null>(null);


  // Armazena os dados do quarto clicado (descrição, preço, etc)
  const [selectedRoom, setSelectedRoom] = useState<any | null>(null);
  // Controla a visibilidade do modal de reserva
  const [modalVisible, setModalVisible] = useState(false);

  const closeCalendar = () => setCalendar(null);

  // Função para abrir o modal de reserva
  const handleOpenReserve = (roomData: any) => {
    setSelectedRoom(roomData);
    setModalVisible(true);
  };

  // Função para confirmar a reserva
  const handleConfirmReserve = () => {
    setModalVisible(false);
    
    // Navega para a tela de reservas passando os dados do quarto
    // Ajuste o caminho "/(tabs)/reservation" conforme o nome real da sua rota de arquivos
    router.push({
      pathname: "/(tabs)/reservation",
      params: {
        newBooking: "true",
        title: selectedRoom?.title,
        price: selectedRoom?.price,
        text: selectedRoom?.text,
        date: checkIn || "Data a definir"
      }
    });
  };

  return (
    <AuthContainer>
      <View style={{ display: "flex", justifyContent: "center" }}>
        
        {/* CHECK-IN */}
        <View style={{ display: "flex", flexDirection: "column" }}>
          <TouchableOpacity onPress={() => setCalendar("checkin")}>
            <View style={{ width: width * 0.80 }}>
              <TextField
                label="Check-in"
                icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                placeholder="Selecione a data"
                value={checkIn}
                editable={false}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* CHECK-OUT */}
        <View style={{ display: "flex", flexDirection: "column" }}>
          <TouchableOpacity onPress={() => setCalendar("checkout")}>
            <View style={{ width: width * 0.8 }}>
              <TextField
                label="Check-out"
                icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                placeholder="Selecione a data"
                value={checkOut}
                editable={false}
              />
            </View>
          </TouchableOpacity>
        </View>

        {/* MODAL DO CALENDÁRIO (Existente) */}
        <Modal
          transparent
          animationType="fade"
          visible={calendar !== null}
          onRequestClose={closeCalendar}
        >
          <Pressable
            style={styles.modalBackdrop}
            onPress={closeCalendar}
          >
            <Pressable onPress={() => { }}>
              {calendar === "checkin" && (
                <DateSelector
                  onSelectDate={(date) => {
                    setCheckIn(date);
                    closeCalendar();
                  }}
                />
              )}
              {calendar === "checkout" && (
                <DateSelector
                  onSelectDate={(date) => {
                    setCheckOut(date);
                    closeCalendar();
                  }}
                />
              )}
            </Pressable>
          </Pressable>
        </Modal>

        {/* --- MODAL DE RESERVA --- */}
        <Modal
          transparent
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          {/* Fundo escuro que fecha o modal ao clicar */}
          <Pressable 
            style={styles.modalBackdrop} 
            onPress={() => setModalVisible(false)}
          >
            {/* Conteúdo do Modal (clicar aqui não fecha) */}
            <Pressable style={[styles.modalContent, { width: width * 0.85 }]} onPress={() => {}}>
              <Text style={styles.modalTitle}>Detalhes do Quarto</Text>
              
              {selectedRoom && (
                <View style={{ marginBottom: 20 }}>
                  <Text style={styles.modalTextTitle}>{selectedRoom.title}</Text>
                  <Text style={styles.modalTextBody}>{selectedRoom.text}</Text>
                  <Text style={styles.modalPrice}>R$ {selectedRoom.price.toFixed(2)} / noite</Text>
                </View>
              )}

              <View style={styles.modalFooter}>
                <TouchableOpacity 
                  style={[styles.btnAction, { backgroundColor: "#ccc" }]} 
                  onPress={() => setModalVisible(false)}
                >
                  <Text>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={[styles.btnAction, { backgroundColor: "#051566ff" }]} 
                  onPress={handleConfirmReserve}
                >
                  <Text style={{ color: "#fff", fontWeight: "bold" }}>Confirmar Reserva</Text>
                </TouchableOpacity>
              </View>
            </Pressable>
          </Pressable>
        </Modal>

        {/* Quantidade de hospedes */}
        <View>
          <Text style={global.label}>Quantidade de Hospedes</Text>
          <InputSpin
            guests={qntGuests}
            onSelectSpin={(guests) => {
              setQntGuests(guests);
            }}
            minGuests={1}
            maxGuests={6}
            step={1}
            colorMin={"#051566ff"}
            colorMax={"#051566ff"}
          />
        </View>
      </View>

      <View style={{ flex: 1, marginTop: height * 0.02, alignItems: "center" }}>
        <ScrollView
          horizontal
          contentContainerStyle={{
            paddingLeft: spacing.lg,
            paddingRight: spacing.lg,
            paddingTop: spacing.lg,
            paddingBottom: spacing.xxxl * 5.0
          }}>
          
          {Array.from({ length: 3 }).map((_, index) => {
            
            // Definimos os dados aqui para poder passar tanto para o Card quanto para o Modal
            const roomData = {
            
              title: "Descrição do quarto",
              price: 180.90,
              text: "Quarto de Casal para Duas Pessoas\n2 camas de casal\nBanheiro privativo\nWi-Fi gratuito\nAr-condicionado"
              
            };

            return (
              // Envolvemos em uma View para manter o botão junto do card
              <View key={index} style={{ marginRight: 20, alignItems: 'center' }}>
                <RoomCard
                  image={require("../../../assets/images/quartobranco.jpg")}
                  label="Apartamento"
                  icon={{
                    lib: "FontAwesome5",
                    name: "bed"
                  }}
                  description={roomData}
                />
                
                {/* BOTÃO RESERVAR - Adicionado logo abaixo do card */}
                <TouchableOpacity 
                  style={styles.btnReserve}
                  onPress={() => handleOpenReserve(roomData)}
                >
                  <Text style={styles.btnReserveText}>Reservar</Text>
                </TouchableOpacity>
              </View>
            );
          })}

        </ScrollView>
      </View>
    </AuthContainer>
  );
};

// Estilos auxiliares sugeridos para o Modal e Botão
const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
    textAlign: "center"
  },
  modalTextTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#555",
    marginBottom: 5
  },
  modalTextBody: {
    fontSize: 14,
    color: "#524f4f",
    marginBottom: 10
  },
  modalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#051566ff",
    marginTop: 5
  },
  modalFooter: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  btnAction: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  btnReserve: {
    marginTop: -15, // Puxa um pouco para cima para ficar mais perto do card
    backgroundColor: "#051566ff",
    paddingVertical: 8,
    paddingHorizontal: 30,
    borderRadius: 20,
    elevation: 3,
    zIndex: 1, // Garante que fique sobreposto se necessário
  },
  btnReserveText: {
    color: "white",
    fontWeight: "bold",
  }
});

export default RenderExplorer;