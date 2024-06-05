import React, {useState} from "react"
import { TextInput, View, Text, TouchableOpacity} from "react-native";
import styles from "./style"
import ResultImc from "./ResultImc/";

export default function Form() {

const [height, setHeight]= useState(null)
const [weight, setWeight]= useState(null)
const [messageImc, setMessageImc]= useState("prencha o peso e altura");
const [imc, setImc]= useState(null)
const [textButton, setTextButton]= useState("Calcular")
const [errorMessage, setErrorMessage] = useState(null)

function imcCalculator(){
  return setImc((weight/(height*height)).toFixed(2))
}

function verificationImc(){
  if(imc == null){
    setErrorMessage("Campo Obrigatório*")
  }
}

function validationImc(){
  if(weight != null && height != null){
    imcCalculator()
    setHeight(null)
    setWeight(null)
    setMessageImc("Seu IMC é igual: ")
    setTextButton("Calcular Novamente")
    setErrorMessage(null)
    return
  }
  verificationImc()
  setImc(null)
  setTextButton("Calcular")
  setMessageImc("preencha o peso e a altura")
}

  return (
    <View style={styles.formContext}>
        <View style={styles.form}>
            <Text style={styles.formLabel}>Altura</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input} 
            onChangeText={setHeight}
            value={height}
            placeholder="Ex. 1.75"
            keyboardType="numeric"
            />
            
            <Text style={styles.formLabel}>Peso</Text>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
            <TextInput style={styles.input}
            onChangeText={setWeight}
            value={weight}
            placeholder="Ex. 75.356"
            keyboardType="numeric" 
            />
           <TouchableOpacity style={styles.buttonCalculator}
           onPress={() =>{
            validationImc()
           }}
           >
            <Text style={styles.textButtonCalculator}>{textButton}</Text>

           </TouchableOpacity>

           
        </View>
        <ResultImc messageResultImc={messageImc} ResultImc={imc}/>
    </View>
  );
}

