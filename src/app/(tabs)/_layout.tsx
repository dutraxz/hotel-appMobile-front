/*Função: definir o fluxo de navegação entre as telas disponíveis em Tab Navigator:
Explorar, Reservas, Perfil*/
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Redirect, Tabs } from 'expo-router';
import { useAuth } from '@/contexts/AuthContext';
import { global } from '@/components/ui/styles';

const RenderLayout = () => {
  const { token, isLoading } = useAuth();
  if (isLoading) return null;
  if (!token) {
  return <Redirect href= "/(auth)" />;
}
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#04187eff', tabBarStyle: global.screenOptions }}>
      <Tabs.Screen
        name="reservation"
        options={{
          title: 'reservation',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="suitcase" color={color} />,
        }}
      />
      <Tabs.Screen  
        name="explorer"
        options={{
          title: 'Search',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="search" color={color} />,
        }}
      />
      <Tabs.Screen 
        name="account"
        options={{
          title: 'Account',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }}
      />
    </Tabs>
  );
};

export default RenderLayout;