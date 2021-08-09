import React from 'react';
import { View, Image } from 'react-native';
import { Button } from 'react-native-paper';

import * as Google from 'expo-auth-session/providers/google';

import { styles } from './styles';
import GoogleIcon from '../../assets/google-login-icon-24.jpeg';

import { CLIENT_ID } from "../../config";

type NavigationProp = {
    navigation: any;
}

export function SignIn({ navigation }: NavigationProp) {
    const [request, response, promptAsync] = Google.useAuthRequest({
        expoClientId: CLIENT_ID,
        iosClientId: '',
        androidClientId: '',
        webClientId: '',
    });
    
    React.useEffect(() => {
        if (response?.type === 'success') {
          const { authentication } = response;
          //console.log(authentication);
          navigation.navigate(
              'Home', 
              {
                  //token: JSON.stringify(authentication?.accessToken)
                  //token: authentication?.accessToken
                  token: authentication
              });
          }
      }, [response]);

    return (
        <View style={styles.container}>
            <Button
                disabled={!request}
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
                    promptAsync();
                    }}>
                Sign In with Google
            </Button>
        </View>
    );
}