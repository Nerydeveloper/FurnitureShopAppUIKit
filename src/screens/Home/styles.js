import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.grey,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxNaviTop:{
        position:'absolute',
        top:30,
        left:0,
        zIndex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        width:'100%',
        paddingHorizontal:10
    },
    iconsHeader:{
        color:Colors.grey,
    
    },
    boxIconsHeaderR:{
        flexDirection:'row',
        gap:5
    },
    containerOfertas:{
        minWidth:360,
        height:350,
        justifyContent:'center',
        paddingBottom:10,
        objectFit:'cover',
    },
   
 
    textTitle: {
        width: '75%',
        fontSize: 38,
        color: Colors.grey,
        fontWeight: 'bold',
        paddingLeft: 10
    },
    textSubtitle: {
        color: Colors.grey,
        paddingLeft: 10,
        fontSize: 16,
        width: '75%'
    },
    containerCircle: {
        paddingLeft: 10,
        width: 70,
        height: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'flex-end'
    },
    boxCircle: {
        width: 10,
        height: 10,
        borderRadius: 50,
        backgroundColor: Colors.grey
    },

    containerBody: {
        width: '100%',
        height: 'auto',
        marginTop:20
    },
    boxStepOne: {
        width: '100%',
        height: 270,
        paddingLeft: 10

    },
    boxProductHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    titleCategori: {
        color: Colors.black,
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonShowAll: {

    },
    textButtonShowAll: {
        color: Colors.black,
        fontSize: 16,
        paddingRight: 10
    },
    boxProducts: {
        flexDirection: 'row',
        width: 360,
    },
    imgProduct: {
        width: 100,
        height: 100,
    },
    list: {
        flex: 1,
    },
    contentContainer: {
        paddingVertical: 10,
        gap:10
    },
    itemContainer: {
        flex: 1,
        margin: 5,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        width: 130
    },
    imgProduct: {
        width: '100%',
        height: 130,
        borderRadius: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginTop: 10,
    },
    valor: {
        fontSize: 16,
        color: '#888',
        marginTop: 5,
    },
})

export default styles;