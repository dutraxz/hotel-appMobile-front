import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
    Alert,
    Dimensions,
    FlatList,
    StyleSheet, Text, TouchableOpacity, View
} from "react-native";
import AuthContainer from "../ui/AuthContainer";
import RoomCard from "../ui/RoomCard"; // Reutilizando seu card
import { global } from "../ui/styles";

const { width } = Dimensions.get("window");

const RenderReservation = () => {
    const router = useRouter();
    const params = useLocalSearchParams();
    
    // Lista de reservas (simulando um banco de dados local)
    const [reservations, setReservations] = useState<any[]>([]);

    // Efeito para capturar novos parâmetros vindos do Explorer
    useEffect(() => {
        // O gatilho é o 'newBooking'. Verificamos se ele existe para processar a nova reserva.
        if (params.newBooking === "true" && params.title) {
            const newRes = {
                id: `${params.title}-${Date.now()}`, // ID único para a sessão
                title: params.title as string,
                text: params.text as string,
                price: Number(params.price),
                date: params.date as string,
            };

            // Adiciona a nova reserva ao estado
            setReservations(prev => [newRes, ...prev]);

            // IMPORTANTE: "Consumimos" o parâmetro navegando para a mesma rota sem ele.
            // Isso quebra o loop, pois na próxima renderização, `params.newBooking` não será 'true'.
            router.replace("/(tabs)/reservation");
        }
    }, [params]); // A dependência em 'params' é intencional para capturar a navegação.

    // Calcula o total
    const totalValue = reservations.reduce((acc, item) => acc + item.price, 0);

    function handleFinalize() {
        Alert.alert("Sucesso", "Check-in realizado e pagamento processado!");
        setReservations([]); // Limpa a lista após finalizar
        router.replace("/(tabs)/explorer"); // Volta para o início
    }

    const renderItem = ({ item }: { item: any }) => (
        <View style={styles.cardWrapper}>
            <View style={styles.dateBadge}>
                <Text style={styles.dateText}>Data: {item.date}</Text>
            </View>
            <RoomCard
                // Usando uma imagem padrão ou a que veio (aqui fixei para exemplo)
                image={require("../../../assets/images/quartobranco.jpg")}
                label={item.title}
                icon={{ lib: "FontAwesome5", name: "check-circle" }}
                description={{
                    text: item.text,
                    price: item.price
                }}
            />
            <TouchableOpacity 
                style={styles.removeButton}
                onPress={() => setReservations(prev => prev.filter(r => r.id !== item.id))}
            >
                <Text style={styles.removeText}>Cancelar Reserva</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <AuthContainer 
            title="Minhas Reservas" 
            subtitle="Gerencie seus quartos reservados"
            icon="suitcase"
        >
            <View style={styles.container}>
                
                {reservations.length === 0 ? (
                    <View style={styles.emptyState}>
                        <Text style={styles.emptyText}>Você ainda não possui reservas.</Text>
                        <TouchableOpacity 
                            style={global.primaryButton}
                            onPress={() => router.push("/(tabs)/explorer")}
                        >
                            <Text style={global.primaryButtonText}>Explorar Quartos</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <>
                        <FlatList
                            data={reservations}
                            keyExtractor={(item) => item.id}
                            renderItem={renderItem}
                            contentContainerStyle={{ paddingBottom: 100 }}
                            showsVerticalScrollIndicator={false}
                        />

                        {/* Footer Fixo com Total e Botão */}
                        <View style={styles.footer}>
                            <View style={styles.totalRow}>
                                <Text style={styles.totalLabel}>Total a pagar:</Text>
                                <Text style={styles.totalValue}>R$ {totalValue.toFixed(2).replace('.', ',')}</Text>
                            </View>
                            
                            <TouchableOpacity
                                style={styles.confirmButton}
                                onPress={handleFinalize}
                            >
                                <Text style={styles.confirmButtonText}>Confirmar Tudo</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                )}
            </View>
        </AuthContainer>
    );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        paddingHorizontal: 10,
        paddingTop: 10 
    },
    cardWrapper: {
        marginBottom: 25,
        alignItems: 'center',
        position: 'relative'
    },
    dateBadge: {
        backgroundColor: "#051566ff",
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
        marginBottom: -10, // Sobrepõe levemente o card
        zIndex: 1,
        elevation: 6
    },
    dateText: {
        color: "white",
        fontSize: 12,
        fontWeight: "bold"
    },
    removeButton: {
        marginTop: 5,
        padding: 5
    },
    removeText: {
        color: "#d9534f",
        fontSize: 14,
        fontWeight: "600"
    },
    emptyState: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50
    },
    emptyText: {
        fontSize: 16,
        color: "#666",
        marginBottom: 20
    },
    footer: {
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: "white",
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: "#eee",
        elevation: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    totalRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15
    },
    totalLabel: {
        fontSize: 18,
        color: "#333",
        fontWeight: "600"
    },
    totalValue: {
        fontSize: 22,
        color: "#051566ff",
        fontWeight: "bold"
    },
    confirmButton: {
        backgroundColor: "#051566ff",
        paddingVertical: 5,
        borderRadius: 10,
        alignItems: "center"
    },
    confirmButtonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
        
    }
});

export default RenderReservation;