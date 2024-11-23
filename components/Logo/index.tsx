import {Text, View, StyleSheet} from "react-native"


export const Logo = (size?:"small" | "medium") =>{
    return (
        <View style={styles.logo}> 
                <Text style={[styles.firtText, size === 'small' ? styles.smallSize : styles.mediumSize ]}>Fi</Text>
                <Text style={[styles.secondText, size === 'small' ? styles.smallSize : styles.mediumSize ]}>Self</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    logo: {
      marginBottom:15,
      backgroundColor: '#fff',
      flexDirection:'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    firtText:{
      color:'blue'
    },
    secondText:{
      fontWeight:"bold"
    },
    smallSize:{
        fontSize:15
    },
    mediumSize:{
        fontSize:40,
    }
})