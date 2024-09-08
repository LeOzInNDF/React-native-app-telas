import { Text, View, Button } from "react-native";



export default function TelaInicial(){
  return (
    <View>
      <Button
        title = "Toque aqui"
        onPress = { () => { console.log("O botão foi tocado") } }  />
        <Text>Bem-vindo à Tela Inicial!</Text>
    
    </View>
   
  );
}