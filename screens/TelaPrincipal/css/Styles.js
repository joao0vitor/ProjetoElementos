import { StyleSheet } from "react-native";

export const format =StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"#ffffff",
        justifyContent: "center",
    },
    header: {
        flex: 1,
        backgroundColor:"#004d40",
        flexDirection:"row",
        padding:10,
    },
    imgheaderesq:{
        width:48,
        height:48,
        marginTop:15,
    },
    imgheaderdir:{
        width:40,
        height:40,
        marginTop:15,
    },
    txtheader:{
        flex: 3,
        color:"#e0f2f1",
        fontSize:20,
        textAlign:"center",
    },
    content:{
        flex: 1,
        flexDirection:"row",
        flexWrap:"wrap",
    },
    footer:{
        flex: 1,
        backgroundColor:"#00bfa5",
        justifyContent:"center",
        alignItems:"center",
    },
    txtfooter:{
        color:"#e0f2f1",
        fontSize:20,
    },
    btn:{
        flex:1,
        padding:20,
        justifyContent: "center",
        alignItems:"center",
        borderColor:"#dddddd",
        borderWidth:1,
        margin:5,
        height: "10%",
    },
    imgbtn:{
        width:30,
        height:30,
    },
    txtbtn:{
        fontSize:15,
        textAlign:"center",
    },
})