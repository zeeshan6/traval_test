import { Platform, StyleSheet } from "react-native";
import { Colors, Metrics } from "../../../themes";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
      },
      center:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center"
      },
      headerParentView:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:Metrics.hpR(2),
        paddingTop:Platform.OS == 'ios' ?Metrics.hpR(8) :Metrics.hpR(5)
      },
      imgViewHeaderStyle:{
        backgroundColor:"#F7F6F9",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:100,
        padding:Metrics.hpR(0.5)

      },
      imgStyle:{
        width:Metrics.hpR(5),
        height:Metrics.hpR(5),
        borderRadius:100,
        backgroundColor:"#fff",
        
      },
      headerTxtStyle:{
        fontSize:Metrics.hpR(2.2),
        fontWeight:"600",
        // paddingHorizontal:Metrics.hpR(1),
        color:"#fff",
      },
      imgTouchableOpacityHeaderStyle:{
        backgroundColor:"#F7F6F9",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        borderRadius:100,
        width:Metrics.hpR(6),
        height:Metrics.hpR(6)
      },
      dotStyle:{
        width:Metrics.hpR(1),
        height:Metrics.hpR(1),
        backgroundColor:"#F67839",
        borderRadius:100,
        position:"absolute",
        right:Metrics.hpR(1),
        top:Metrics.hpR(1)
      },
      exploreViewSTyle:{
        paddingTop:Metrics.hpR(2.5),
        paddingHorizontal:Metrics.hpR(2),
      },
      exploreTxtStyle:{
        fontSize:Metrics.hpR(3),
        color:"#000",
        fontWeight:"500",
        
      },
      beautifulViewSTyle:{
        // paddingTop:Metrics.hpR(1)
        flexDirection:"row",
        alignItems:"center",
        paddingHorizontal:Metrics.hpR(2),
      },
      beautifulTxtSTyle:{
        fontSize:Metrics.hpR(2),
        color:"#929394",
        fontWeight:"500",
        
      },
      worldTxtSTyle:{
        fontSize:Metrics.hpR(5),
        fontWeight:"600",
        color:"#F66E2B",
      },
      readMoretxtStyle:{
        fontSize:Metrics.hpR(1.8),
        fontWeight:"600",
        color:"#F66E2B",
      },
      curveStyleImg:{
        width:Metrics.hpR(12.5),
        height:Metrics.hpR(5),
        position:"absolute",
        bottom:-Metrics.hpR(4),
        alignSelf:"center",
        left:Metrics.hpR(2)
      },
      bestTxtStyle:{
        fontSize:Metrics.hpR(2.5),
        fontWeight:"600",
        color:"#000",
        
      },
      viewTxtStyle:{
        fontSize:Metrics.hpR(1.5),
        fontWeight:"600",
        color:"#5389DD",
      },
      cardViewTextStyle:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginTop:Metrics.hpR(5),
        paddingHorizontal:Metrics.hpR(2),
      },
      cardStyle:{
        // width:Metrics.hpR(5),
        // width:Metrics.hpR(30),
        borderRadius:20,
        marginHorizontal:Metrics.hpR(1),
        backgroundColor:"#fff",
        padding:Metrics.hpR(1.5),
        // marginVertical:Metrics.hpR(2),
        elevation: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        shadowOffset: { width: 0, height: 2 },

      },
      cardImgSTyle:{
        width:Metrics.hpR(8),
        height:Metrics.hpR(8),
        borderRadius:100,
        marginTop:Metrics.hpR(3),
        marginRight:Metrics.hpR(2)
      },
      cardNameStyle:{
        fontSize:Metrics.hpR(2.1),
        fontWeight:"500",
        marginTop:Metrics.hpR(2),
        marginBlock:Metrics.hpR(1),
        color:"#000",
      },
      nameViewSTle:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:Metrics.hpR(1)
      },
      locationText:{
        fontSize:Metrics.hpR(1.8),
        fontWeight:"500",
        color:"#929394",
        paddingLeft:5
      },
      avatar: {
        width: Metrics.hpR(6),
        height: Metrics.hpR(6),
        borderRadius: 15,
        marginRight:Metrics.hpR(2)
        // elevation:2
      },
      bottomViewSTle:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:Metrics.hpR(1)
      },
      visitorImgRow:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal:Metrics.hpR(2),
        paddingVertical:Metrics.hpR(1.5)
      },
      extraVisitors: {
        fontSize:Metrics.hpR(2),
        fontWeight:"500",
        color:"#fff",
        marginLeft:-Metrics.hpR(7)
      },
      flatListTSyle:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginTop:-Metrics.hpR(12),
        paddingHorizontal:Metrics.hpR(2),
      },
      bookmarkStyle:{

        backgroundColor:"rgba(0,0,0,0.2)",
        padding:Metrics.hpR(1.2),
        borderRadius:100
      },
      bgImageSTyle:{
        width:"100%",
        height:Metrics.hpR(50)
      },
      curveView:{
        marginTop:-Metrics.hpR(10),
        backgroundColor:"#fff",
        borderTopLeftRadius:35,
        borderTopRightRadius:35
      },
      locationViewSTyle:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:Metrics.hpR(2),
        paddingVertical:Metrics.hpR(1)
      },
      aboutStyle:{
        fontSize:Metrics.hpR(3),
        fontWeight:"500",
        color:"#000",
        paddingVertical:Metrics.hpR(1)
      },
      aboutDescStyle:{
        fontSize:Metrics.hpR(1.8),
        // fontWeight:"400",
        color:"#929394",
        // textAlign:"justify",
        lineHeight:25,
      },
      aboutViewStyle:{
        paddingHorizontal:Metrics.hpR(2),
        paddingVertical:Metrics.hpR(1),
        marginBottom:Metrics.hpR(5)
      },
      bookNowBtnStyle:{
        marginHorizontal:Metrics.hpR(2),
        padding:Metrics.hpR(2),
        backgroundColor:"#2D6DFD",
        borderRadius:20,
        alignItems:"center",
        justifyContent:"center",

        marginBottom:Metrics.hpR(3)
      },
      bookNowTxtStyle:{
        fontSize:Metrics.hpR(2),
        fontWeight:"500",
        color:"#fff",
      }

    });
    
  export default styles