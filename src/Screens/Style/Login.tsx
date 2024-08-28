import { Dimensions, StyleSheet } from "react-native";
import Responsive from "../../Utils/Responsive";
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    text: {
        alignItems: 'flex-start',
        fontSize: width * 0.070,
        color: '#000',
        fontFamily: 'UberMoveTextBold',
        marginTop: height * 0.04,
    },
    textemail: {
        fontSize: 16,
        color: '#000',
        marginHorizontal: 0,
        width: 50,
        height: 30
    },
    textpass: {
        marginTop: 10,
        fontSize: 16,
        color: '#000',
        marginHorizontal: 0,
        width: 90,
        height: 30
    },
    inputpass: {
        backgroundColor: '#f5f5f5',
        fontFamily: 'UberMoveText',
        fontSize: 16,
        color: '#000',
        marginLeft: 0,
        width: 380,
        height: 50,
        paddingHorizontal: Responsive.wp(3)
    },
    error: {
        marginHorizontal: 0,
        color: 'red',
    },
    button: {
        height: height * 0.08,
        width: width * 0.9,
        backgroundColor: 'black',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: height * 0.05,
        borderRadius: 5,
        paddingHorizontal: 20,
        zIndex: 1,
    },
    buttonText: {
        color: '#fff',
        fontFamily: 'UberMoveTextMedium',
        fontSize: width * 0.05,
    },
    arrow: {
        color: '#fff',
    },
    arrow1: {
        color: '#000',
    },
    information: {
        color: 'gray',
        marginHorizontal: 7,
        marginTop: 15,
        fontSize: width * 0.04,
        fontFamily: 'UberMoveTextMedium',
        textAlign: 'center',
        zIndex: 1,
    },
    mainView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        marginHorizontal: 20,
        zIndex: 1,
    },
    line1: {
        flex: 1,
        height: 1,
        backgroundColor: '#a4a4a4',
    },
    or: {
        width: 50,
        fontSize: 18,
        textAlign: 'center',
        color: '#888888',
        fontFamily: 'UberMoveTextMedium',
    },
    line2: {
        flex: 1,
        height: 1,
        backgroundColor: '#a4a4a4',
    },
    image: {
        height: 40,
        width: 40,
    },
    touch: {
        height: height * 0.08,
        width: width * 0.9,
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        marginTop: height * 0.05,
        borderRadius: 5,
        zIndex: 1,
    },
    touch2: {
        color: '#000',
        fontFamily: 'UberMoveTextMedium',
        fontSize: width * 0.05,
    },
    phone: {
        color: '#000',
        width: '100%',
        height: 60,
        marginTop: 30,
        marginVertical: 130,
        zIndex: 1,
    },
    emailtextInput: {
        backgroundColor: '#f5f5f5',
        fontFamily: 'UberMoveText',
        fontSize: 16,
        color: '#000000',
        marginLeft: 0,
        width: 380,
        height: 50,
        paddingHorizontal: Responsive.wp(3)
    },
    phoneInput: {
        fontFamily: 'UberMoveTextMedium',
        backgroundColor: '#f5f5f5',
        flex: 1,
        paddingVertical: 14,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        color: '#000',
        fontSize: 18,
    },
    modalContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        // alignItems: 'center',
        zIndex: 2,
    },
    modal: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 22,
        width: '100%',
        height: '70%',
        justifyContent: 'flex-start',
    },
    searchInput: {
        fontFamily: 'UberMoveTextMedium',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#e6e6e6',
        color: '#000',
        backgroundColor: '#f6f6f6',
        paddingHorizontal: 12,
        height: 46,
        marginBottom: 10,
    },
    countryButton: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    countryName: {
        fontFamily: 'UberMoveTextMedium',
        fontSize: 18,
        color: '#000',
        marginLeft: 10,
    },
    flag: {
        width: 30,
        height: 20,
    },
});