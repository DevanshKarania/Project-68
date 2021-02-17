import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

export default class Instagram extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <TouchableOpacity style={styles.scanButton}>
                    <Text style={styles.displayText}>Instagram</Text>
                </TouchableOpacity>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    scanButton:{
        backgroundColor:'blue',
        padding:10,
        margin:10
    },
    displayText:{
        fontSize:15,
        textDecorationLine:'underline'
    }
});