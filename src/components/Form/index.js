import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
} from "react-native";
import ResultImc from "./ResultImc";
import styles from "./style";

export default function Form() {
  const [altura, setAltura] = useState(null);
  const [peso, setPeso] = useState(null);
  const [messageImc, setMessageImc] = React.useState("");
  const [imc, setImc] = useState(null);
  const [TextButton, setTextButton] = useState("Calcular");
  const [errorMessage, setErrorMessage] = useState(null);
  const [imcGrau, setImcGrau] = useState(null);

  // Funções
  const calcularImc = () => {
    let heightFormat = altura.replace(",",".");
    const imc = peso / (heightFormat * heightFormat);
    setImc(imc.toFixed(2));

    if (imc < 18) setImcGrau("Abaixo do peso normal");
    if (imc > 18 && imc < 25) setImcGrau("Peso normal");
    if (imc > 25 && imc < 30) setImcGrau("Excesso de peso");
    if (imc > 30 && imc < 35) setImcGrau("Obesidade classe 1");
    if (imc > 35 && imc < 40) setImcGrau("Obesidade classe 2");
    if (imc >= 40) setImcGrau("Obesidade classe 3");
  };

  function verificaImc() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage("Campo obrigatório*");
    }
  }

  function validacao() {
    if (altura === null || peso === null) {
      verificaImc();
      setImc(null);
      setMessageImc("Preencha o peso e altura");
      setTextButton("Calcular");
      setImcGrau(null);
    } else {
      calcularImc();
      setAltura(null);
      setPeso(null);
      setErrorMessage(null);
      setMessageImc("Seu imc é igual: ");
      setTextButton("Calcular novamente");
    }
  }

  // Render
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.FormContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
          onChangeText={setAltura}
          value={altura}
        />
        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Ex: 70"
          keyboardType="numeric"
          onChangeText={setPeso}
          value={peso}
        />
        <TouchableOpacity
          onPress={() => validacao()}
          style={styles.ButtonCalcular}
        >
          <Text style={styles.textButtonCalcular}>{TextButton}</Text>
        </TouchableOpacity>
      </View>
      <ResultImc
        messageResultImc={messageImc}
        resultImc={imc}
        imcGrau={imcGrau}
      ></ResultImc>
    </Pressable>
  );
}
