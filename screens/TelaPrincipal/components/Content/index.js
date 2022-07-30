import { View, Image, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import { format } from "../../css/Styles";

export default function Content(props) {

    return (
        <View style={{ flex: 8 }}>
        <View style={format.content}>
          
        <TouchableOpacity onPress={()=> {props.acao.navigate ("TelaCamera"); }} style={format.btn}>
            <Image source={require("../../../../assets/camera.png")} style={format.imgbtn}/>
            <Text style={format.txtbtn}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> props.acao.navigate("TelaGaleria")} style={format.btn}>
            <Image source={require("../../../../assets/gallery.png")} style={format.imgbtn}/>
            <Text style={format.txtbtn}>Galeria</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> props.acao.navigate("TelaColebar")} style={format.btn}>
            <Image source={require("../../../../assets/barcode.png")} style={format.imgbtn}/>
            <Text style={format.txtbtn}>Código de barras</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=>{props.acao.navigate("TelaMapa");}} style={format.btn}>
                    <Image source={require("../../../../assets/maps.png")} style={format.imgbtn} />
                    <Text style={format.txtbtn}>Mapas</Text>
                </TouchableOpacity>

  </View>
</View>
   );
}

function camera(){
Alert.alert("Alerta Camera", "Você clicou na camera");
}

function galeria(){
    Alert.alert("Alerta galeria", "Você clicou na galeria");
    }

    function barcode(){
        Alert.alert("Alerta barcode", "Você clicou no código de barras");
        }