import { MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AuthContainer from '@/components/ui/AuthContainer';
import { global } from '@/components/ui/styles';

const Support = () => {
  
  // Função para abrir o app de e-mail automaticamente
  const handleEmail = () => {
    Linking.openURL('mailto:hotelroyal@://gmail.com ao Cliente');
  };

  // Função para abrir o WhatsApp (opcional, mas muito comum)
  const handleWhatsApp = () => {
    // Substitua pelo número real do hotel
    Linking.openURL('https://wa.me');
  };

  return (
    <AuthContainer 
      title="Central de Ajuda" 
      subtitle="Como podemos ajudar você hoje?" 
      icon="support-agent"
    >
      <View style={[global.container, styles.container]}>
        
        <View style={styles.card}>
          <MaterialIcons name="email" size={40} color="#051566" />
          <Text style={styles.cardTitle}>E-mail</Text>
          <Text style={styles.cardText}>Resposta em até 24 horas</Text>
          
          <TouchableOpacity 
            style={styles.emailButton} 
            onPress={handleEmail}
          >
            <Text style={styles.emailText}>hotelroyal@gmail.com</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.card}>
          <MaterialIcons name="chat" size={40} color="#051566" />
          <Text style={styles.cardTitle}>Chat via WhatsApp</Text>
          <Text style={styles.cardText}>Atendimento imediato</Text>
        
          <TouchableOpacity 
            onPress={handleWhatsApp}
            style={[styles.primaryButton]}
            >
            <Text style={styles.primaryButton}>Iniciar Conversa </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footerText}>
          Horário de atendimento: Seg a Sex, 08h às 18h
        </Text>
      </View>
    </AuthContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    paddingTop: 20,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    // Sombra para dar profundidade
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  primaryButton:{
    backgroundColor: "#051566",
    color: "#ffffff",
    borderRadius: 19,
        padding: 4,
        marginTop: 2,
        marginBottom: 4,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#051566',
    marginTop: 10,
  },
  cardText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  emailButton: {
    marginTop: 5,
    padding: 10,
  },
  emailText: {
    color: '#051566',
    fontWeight: '600',
    textDecorationLine: 'underline',
    fontSize: 16,

  },
  footerText: {
    marginTop: 20,
    color: '#999',
    fontSize: 12,
    textAlign: 'center',
  }
});

export default Support;