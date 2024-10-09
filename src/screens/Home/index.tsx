import { Text, View, TextInput, TouchableOpacity, FlatList, Alert} from 'react-native';
import { styles } from './styles';
import { useState } from 'react';
import Partcipant from '../../components/Participantes';



export default function Home() {
  const [participantes, setParticipantes] = useState<string[]>([])
  const[participanteName, setParticipanteName] = useState('')
  
  function handleParticipantAdd() {
    if(participantes.includes(participanteName)){
       return Alert.alert("Participante", 'ja existe participante')
    }
    setParticipantes(prevState => [...prevState, participanteName])
    setParticipanteName(' ')
    
  }

  function handleParticipantRemove(name: string){
    setParticipantes(prevState => prevState.filter(participantes => participantes !== name))
  }

  return (
    <View style={styles.container}>

      <View style={styles.grupoTexto}>
        <Text style={styles.texto}>Anotações</Text>
        <Text style={styles.texto1}>Desenvolvedor e CyberSecuryt</Text>
      </View>

      <View style={styles.form}>
        <TextInput 
        style={styles.input}
        placeholder="Anotações"
        placeholderTextColor={"#adafb3"}
        onChangeText={setParticipanteName}
        value={participanteName} />

        <TouchableOpacity style={styles.botao} onPress={handleParticipantAdd}>
          <Text style={styles.botaoTexto}> + </Text>
        </TouchableOpacity>
        
      </View>

      <FlatList
            data={participantes}
            keyExtractor={item => item}
            renderItem={({item}) => (
                <Partcipant 
                key={item} 
                name={item} 
                onRemove={() => handleParticipantRemove(item)}/>
            ) }

            ListEmptyComponent={()=> (
                <Text style={styles.litEmptyText}>
                    Ensira algo na lista.
                </Text>
            )}
       />

    </View>
  );
}
