import React, { useState, useEffect } from 'react';
import { Camera, CameraType } from 'expo-camera';
import { Button, View, Image, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import { format } from "../../css/Styles";

export default function Content(){

    const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

    return (
        <View style={{ flex: 8 }}>
        <View style={format.content}>
          
        <TouchableOpacity onPress={()=> camera()} style={format.btn}>
            <Image source={require("../../assets/camera.png")} style={format.imgbtn}/>
            <Text style={format.txtbtn}>Camera</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> galeria()} style={format.btn}>
            <Image source={require("../../assets/gallery.png")} style={format.imgbtn}/>
            <Text style={format.txtbtn}>Galeria</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={()=> barcode()} style={format.btn}>
            <Image source={require("../../assets/barcode.png")} style={format.imgbtn}/>
            <Text style={format.txtbtn}>Código de barras</Text>
        </TouchableOpacity>
</View>
    {/* Inicio do comando da camera */}

    <View style={{ flex: 8 }}>
      <Camera style={format.camera} type={type}>
        <View style={format.buttonContainer}>
          <TouchableOpacity
            style={format.button}
            onPress={() => {
              setType(type === CameraType.back ? CameraType.front : CameraType.back);
            }}>
            <Text style={format.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
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