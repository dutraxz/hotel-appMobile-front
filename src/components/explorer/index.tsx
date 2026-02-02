import { useState } from "react";
import { Dimensions, TouchableOpacity, View, Text, Pressable, Modal } from "react-native";
import AuthContainer from "../ui/AuthContainer";
import DateSelector from "../ui/DateSelector";
import RoomCard from "../ui/RoomCard";
import TextField from "../ui/TextField";
import InputSpin from "../ui/InputSpinner";
import { global } from "../ui/styles";
const RenderExplorer = () => {
  const { width, height } = Dimensions.get("window");
  //useState() para gerenciar e alterar os estados
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [qntGuests, setQntGuests] = useState<number>(1);
  const [calendar, setCalendar] = useState<"checkin" | "checkout" | null>(null);
  const closeCalendar = () => setCalendar(null);
  
  return (
    <AuthContainer>
      {/*children */}
      <View style={{ display: "flex", /* flexDirection: "row", gap: width * 0.05,*/ justifyContent: "center" }}>
        {/*Essa View vocês tinham e eu só estilizei*/}
        <View style={{ display: "flex", flexDirection: "column" }}>                                              {/*Criei esta nova View para check-in*/}
          {/* Input de checkIn para abrir calendário*/}
          <TouchableOpacity onPress={() => setCalendar("checkin")}>
            <View style={{ width: width * 0.8 }}>  {/* 80% da tela para a área input*/}
              {/* Nova view para dar largura ao TextField */}
              <TextField
                label="Check-in"
                icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                placeholder="Selecione a data"
                value={checkIn}
              />
            </View> {""}
            {/* Fecha aqui */}                                                                           {/* Fecha aqui */}
          </TouchableOpacity>
          {/* <DateSelector />
          {calendar === "checkin" && (
            <DateSelector onSelectDate={(date) => {
              setCheckIn(date);
              setCalendar(null);
            }}
            /> */}
          {/* )} */}
        </View> {""}
                                                                                                          {/*View de check-in fecha aqui */}
        {/*View de check-in fecha aqui */}
        <View style={{ display: "flex", flexDirection: "column" }}>                                              {/*Criei esta nova View para check-out*/}
          {" "}
          {/*Criei esta nova View para check-out*/}
          {/* Input de checkIn para abrir calendário*/}
          <TouchableOpacity onPress={() => setCalendar("checkout")}>
            <View style={{ width: width * 0.8 }}>  {/* 80% da tela para a área input*/}                            {/* Nova view para dar largura ao TextField */}
              <TextField
                label="Check-out" icon={{ lib: "FontAwesome5", name: "calendar-alt" }}
                placeholder="Selecione a data"
                value={checkOut}
              />
            </View>
            {/* Fecha aqui */}                                                                                             {/* Fecha aqui */}
          </TouchableOpacity>
          {/* <DateSelector />
          {calendar === "checkout" && (
            // <DateSelector onSelectDate={(date) => {
            //   setCheckOut(date);
            //   setCalendar(null)
            // }}
            // />
          )} */}
        </View>
        {/*View do check-out que fecha aqui */}

        <Modal
          transparent
          animationType="fade"
          visible={calendar !== null}
          onRequestClose={closeCalendar}
        >
          {/*Backdrop: qualquer clique aqui fora, fecha*/}
          <Pressable
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0, 0.29)",
            }}
            onPress={closeCalendar}
          >
            {/*Area do calendario que ao clicar, nao o fecha */}

            <Pressable onPress={() => {}}>
              {/* <DateSelector /> */}
              {calendar === "checkin" && (
                <DateSelector
                  onSelectDate={(date) => {
                    setCheckIn(date);
                    closeCalendar();
                  }}
                />
              )}
              {/* <DateSelector /> */}
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
        {/* InputSpin */}                                                                                               {/*View do check-out que fecha aqui */}
        <View>
          <Text style={global.label}>Quantidade de Hospedes</Text>
          {/*InputSpin*/}
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
      <RoomCard
        image={require("../../../assets/images/quartobranco.jpg")}
        /* image={{uri: "https://"}} */
        label="Apartamento"
        icon={{
          lib: "FontAwesome5",
          name: "bed"
        }}
        description={{
          title: "Descrição do quarto",
          text: "1 cama de casal\n2 camas de solteiro",
          price: 180.90
        }}
      />
    </AuthContainer>
  );
};
export default RenderExplorer;