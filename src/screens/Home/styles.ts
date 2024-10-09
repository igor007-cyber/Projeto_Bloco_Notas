import { StyleSheet, Text, View } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',  
    },

    grupoTexto:{
        padding:15,  
        marginTop:40
    },

    texto:{
        fontSize:30,     
        fontWeight:'bold',
        color:"#FFF"        
    },

    texto1:{
        fontSize:20,  
        color:"#FFF"          
    },

    form:{
        width:'100%',
        flexDirection:"row",
        marginTop:16,
        marginBottom:42
    },

    input:{
        flex:1,
        height:56,
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        color: '#FFF',
        padding:16,
        fontSize:16,
        marginRight:12 
    },

    botao:{
        width:56,
        height:56,
        borderRadius:5,
        backgroundColor:'#31CF67',
        alignItems:"center",
        justifyContent:"center"
    },

    botaoTexto:{
        color:"#FFF",
        fontSize:24
    },

    litEmptyText:{
        color:'#FFF',
        fontSize:14,
        textAlign:"center"
    }
  });
  