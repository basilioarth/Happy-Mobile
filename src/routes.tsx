import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// Ele precisa estar em volta de todas as rotas
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();
// Navigator precisa envolver todas as Screens que são do farmato de navegação Stack
// Para cada tela temos uma Screen que a define

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

import SelectMapPosition from './pages/CreateOrphanage/SelectMapPosition';
import OrphanageData from './pages/CreateOrphanage/OrphanageData';

import Header from './components/Header';

export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#f2f3f5' } }}>
                <Screen 
                    name="OrphanagesMap" 
                    component={OrphanagesMap}
                />

                <Screen 
                    name="OrphanageDetails" 
                    component={OrphanageDetails}
                    options={{
                        headerShown: true,
                        // Habilitando o header nessa página
                        header: () => <Header title="Orfanato" showCancel={false}/>
                        // Estamos substituindo o header padrão pelo header que criamos chamando uma função que o renderiza
                    }}
                />

                <Screen 
                    name="SelectMapPosition" 
                    component={SelectMapPosition}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Selecione no mapa"/>
                    }}
                />

                <Screen 
                    name="OrphanageData" 
                    component={OrphanageData}
                    options={{
                        headerShown: true,
                        header: () => <Header title="Informe os dados"/>
                    }}
                />
            </Navigator>
        </NavigationContainer>
    );
}