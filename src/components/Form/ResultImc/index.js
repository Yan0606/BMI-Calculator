import React from "react"
import { View, Text, TouchableOpacity, Share } from "react-native"
import styles from "./style"

export default function ResultImc(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC é: " + props.ResultImc
        })
    }

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

    return (
        <View style={styles.resultImc}>
            <View style={styles.boxShareButton}>
                {props.ResultImc != null ?
                    <TouchableOpacity 
                    onPress={onShare}
                    style={styles.shared}>
                        <Text style={styles.sharedText}>Share</Text>
                    </TouchableOpacity>
                    :
                    <View />
                }
            </View>
            <Text style={styles.information}>{props.messageResultImc}</Text>
            <Text style={styles.numberImc}>{props.ResultImc}</Text>
            {message !== "" && (
                <Text style={styles.information}>{message}</Text>
            )}
        </View>
    )
}
