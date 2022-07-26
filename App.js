import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import  Header  from "./components/Header" ;
import  Footer  from "./components/Footer" ;
import  Content  from "./components/Content" ;
import { format } from "./css/Styles";
export default function App() {
  return (
    <View style={format.container}>
      <Header/>
      <Content/>
      <Footer/>
      <StatusBar style="auto" />
    </View>
  );
}