import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";

export interface MenuItem {
  icon?: any;
  label: string;
  selected?: boolean;
}

export interface MenuProps {
  menu: MenuItem[];
}

export const Menu = ({ menu }: MenuProps) => (
  <View style={styles.menu}>
    {menu.map((item, index) => (
      <MenuItem
        selected={item.selected}
        key={index}
        icon={item.icon}
        label={item.label}
      />
    ))}
  </View>
);

const MenuItem = (menuItem: MenuItem) => (
  <View
    style={[styles.menuItem, menuItem.selected && { borderBottomWidth: 1 }]}
  >
    <Ionicons name={menuItem.icon} size={24} color="black" />
    <Text style={styles.menuItemText}>{menuItem.label}</Text>
  </View>
);

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 16,
  },
  menuItem: {
    borderColor: "gray",
    alignItems: "center",
  },
  menuItemText: {
    color: "#928f8f",
    fontSize: 12,
    marginTop: 4,
  },
});
