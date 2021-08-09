import React, { useContext } from 'react';
import { View, Image, Alert } from 'react-native';
import { Button } from 'react-native-paper';

import { styles } from './styles';
import GoogleIcon from '../../assets/google-login-icon-24.jpeg';

import { useAuth } from '../../hooks/auth';

import { CLIENT_ID } from "../../config";

type NavigationProp = {
    navigation: any;
}

export function SignIn({ navigation }: NavigationProp) {
    const { user, signIn, loading } = useAuth();

    //console.log(user);

    async function handleSignIn() {
        try {
            await signIn();
            if (user.token) navigation.navigate('Home');
        } catch (error) {
            Alert.alert(error);
        }
    }

    return (
        <View style={styles.container}>
            <Button
                disabled={loading}
                icon={() => (
                    <View>
                        <Image
                            source={GoogleIcon}
                            style={styles.icon} 
                        />
                    </View>
                )} 
                mode="contained" 
                onPress={() => {
                    handleSignIn();
                    }}>
                Sign In with Google
            </Button>
        </View>
    );
}