import React from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';

import { styles } from './styles';
import GoogleIcon from '../../assets/google-login-icon-24.jpeg';

type NavigationProp = {
    navigation: any;
}

export function SignIn({ navigation }: NavigationProp) {
    return (
        <View style={styles.container}>
            <Button
                icon={() => (
                    <View>
                        <Image
                            source={GoogleIcon}
                            style={styles.icon} 
                        />
                    </View>
                )} 
                mode="contained" 
                onPress={() => navigation.navigate('Home')}>
                Sign In with Google
            </Button>
        </View>
    );
}