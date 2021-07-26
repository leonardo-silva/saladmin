import React from "react";
import { View, Text } from "react-native";

import { styles } from "./styles";

export function Home () {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Esta é a página HOME</Text>
        </View>

    );
}