import { Ionicons } from '@expo/vector-icons';
import { IconProps } from '@expo/vector-icons/build/createIconSet';
import { StyleSheet, ScrollView, Text, View } from 'react-native';

export interface MenuItem{
    icon?:any;
    label:string;
}

export interface MenuProps{
    menu:MenuItem[];
}


const Menu = ({menu}:MenuProps) => (
    <View style={styles.menu}>
        {menu.map((item, index) => (
        <MenuItem key={index} icon={item.icon} label={item.label} />
        ))}
    </View>
);
  
const MenuItem = (menuItem:MenuItem) => (
    <View style={styles.menuItem}>
        <Ionicons name={menuItem.icon} size={24} color="black" />
        <Text style={styles.menuItemText}>{menuItem.label}</Text>
    </View>
);
  

const styles = StyleSheet.create({
menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 16,
},
menuItem: {
    alignItems: 'center',
},
menuItemText: {
    color: '#928f8f',
    fontSize: 12,
    marginTop: 4,
}
});
