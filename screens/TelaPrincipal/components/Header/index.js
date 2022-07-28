import { Image,View,Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { format} from "../../css/Styles";

export default function Header(){
    return (
        <View style={format.header}>

          <TouchableOpacity onPress={() => alert("Você clicou no logo")}>
            <Image source={require("../../../../assets/logo.png")} style={format.imgheaderesq}/>
            
            </TouchableOpacity>
     
            <Text style={format.txtheader}>Elementos</Text>


            <TouchableOpacity onPress={() => alert("Você clicou nas configurações")}>
            <Image source={require("../../../../assets/config.png")} style={format.imgheaderdir}/>

            </TouchableOpacity>

        </View>
    )
}