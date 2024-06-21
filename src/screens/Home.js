import { Button, StyleSheet, Text, View } from 'react-native';

import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

export default function Home({ navigation }) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [address, setAddress] = useState(null);

    useEffect(() => {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('A permissão para acessar o local foi negada!');
                return;
            }

            let location = await Location.getCurrentPositionAsync();
            setLocation(location);

            let address = await Location.reverseGeocodeAsync(location.coords);
            setAddress(address);
        })();
    }, []);

    let locationText = 'Aguardando..';
    let addressText = 'Aguardando..';

    if (address) {
        addressText = JSON.stringify(address[0].formattedAddress);
    }

    if (errorMsg) {
        locationText = errorMsg;
    } else if (location) {
        locationText = `Latitude:${location.coords.latitude}\nLongetude:${location.coords.longitude}`;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Essa é a sua geolocalização:</Text>
            <Text>{locationText}</Text>
            <Text style={styles.title}>Esse é o seu endereço:</Text>
            <Text>{addressText}</Text>

            <Button
                style={styles.button}
                title='Ver no mapa'
                onPress={() => navigation.navigate('Map')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    title: {
        fontSize: 20,
    },
});
