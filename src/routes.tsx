import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
// Ele precisa estar em volta de todas as rotas
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();
// Navigator precisa envolver todas as Screens que são do farmato de navegação Stack
// Para cada tela temos uma Screen que a define

import OrphanagesMap from './pages/OrphanagesMap';
import OrphanageDetails from './pages/OrphanageDetails';

export default function Routes(){
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }}>
                <Screen name="OrphanagesMap" component={OrphanagesMap}/>
                <Screen name="OrphanageDetails" component={OrphanageDetails}/>
            </Navigator>
        </NavigationContainer>
    );
}