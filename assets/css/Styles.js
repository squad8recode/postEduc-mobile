import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bgColor: {
      backgroundColor: "#504456",
    },
    loginImg: {
      marginBottom: 10,
    },
    loginForm: {
      width: '80%',
    },
    btn: {
      flexDirection: 'row',
      alignSelf: 'center',
    },
    loginInput: {
      backgroundColor: '#fff',
      fontSize: 19,
      padding: 7,
      marginBottom: 15,
      borderWidth: 1,
      borderRadius: 5,
    },
    loginBtn: {
      padding: 10,
      backgroundColor: '#ffd16d',
      alignSelf: 'center',
      borderRadius: 5,
      marginRight: 10,
    },
    loginBtn2: {
      padding: 10,
      backgroundColor: '#0068c8',
      alignSelf: 'center',
      borderRadius: 5,
      marginRight: 10,
    },
    loginBtnText: {
      fontWeight: 'bold',
      fontSize: 22,
      color: "#4e4656",
    },
    loginBtnText2: {
      fontWeight: 'bold',
      fontSize: 22,
      color: "#fff",
    },
    cadastreContainer: {
      flexDirection: 'row',
      alignSelf: 'center',
      marginTop: 10,
    },
    cadastreText: {
      color: '#fff',
    },
    cadastreText2: {
      color: '#b9a3ed',
    },
    headerEventos: {
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginVertical: 20,
    },
    inputArea: {
      paddingHorizontal: 15,
      flexDirection: 'row',
      alignItems: 'center',
      width: '98%',
      backgroundColor: '#fff',
      elevation: 2,
      paddingHorizontal: 10,
      height: 38,
      borderRadius: 10,
    },
    inputPesquisa: {
      paddingHorizontal: 10,
      fontSize: 13,
      width: '90%',
    },
    conteudoEventos: {
      flexDirection: 'row',
      width: '100%',
      alignItems: 'center',
    },
    titulo: {
      paddingHorizontal: 15,
      fontWeight: 'bold',
      fontSize: 20,
      color: '#4e4656',
    },
    tituloCadastro: {
      fontSize: 30, 
      fontWeight: 'bold', 
      color: '#fff',
      marginBottom: 10,
    },
});

export {styles};