import { Text, View, TextInput, TouchableOpacity } from "react-native"
import { styles } from "./styles"

type Props = {
    name: string
    onRemove:() =>void
}

export default function Partcipant({name, onRemove}:Props){
  return(
    <View style={styles.container}>
      
      <Text style={styles.texto}>{name}</Text>

      <TouchableOpacity style={styles.button} onPress={onRemove}>
                    <Text style={styles.buttonText}> - </Text>      
      </TouchableOpacity> 

    </View>
  )
}