import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function ResultImc(props){
    let message = "";
    if (props.ResultImc) {
        const imcValue = parseFloat(props.ResultImc);
        if (imcValue < 16.9) {
            message = "Muito abaixo do peso.";
        } else if (imcValue < 18.4) {
            message = "Abaixo do peso.";
        } else if (imcValue < 24.9) {
            message = "Peso normal.";
        } else if (imcValue < 29.9) {
            message = "Acima do peso.";
        } else {
            message = "Obesidade.";
        }
    }

    return(
        <View style={styles.ResultImc}>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.ResultImc}</Text>
            {message !== "" && (
                <Text style={styles.information}>{message}</Text>
            )}
        </View>
    )
}
