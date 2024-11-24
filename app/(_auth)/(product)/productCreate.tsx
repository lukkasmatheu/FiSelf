import { Ionicons } from "@expo/vector-icons";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Logo } from "../../../components/Logo";
import { useRouter } from "expo-router";

const ProductCreate = () => {
    const router = useRouter();
    const navigate = (route: string) => {
        router.push(route);
      };
  return (
    <View style={styles.cardsContainer}>
      <Logo />
      <TouchableOpacity style={[styles.card]} onPress={()=>navigate("./registerProduct")}>
        <Ionicons name="bag-add-outline" size={25} color="white" />
        <Text style={styles.contentText}>Cadastrar Produto</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.card]} onPress={()=>navigate("./registerSale")}>
        <Ionicons name="bag-add-outline" size={25} color="white" />
        <Text style={styles.contentText}>Cadastrar Venda</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardsContainer: {
    flex: 1,
    alignItems: "center",
    gap:15,
    backgroundColor:"#fff"
  },
  card: {
    backgroundColor: "gray",
    width: 250,
    alignItems:'center',
    justifyContent:'center',
    padding: 16,
    borderRadius: 10,
    marginRight: 8,
  },
  contentText: {
    color: "#ffff",
    fontSize: 14,
    fontFamily: "OpenSans",
    textAlign:'center',
  },
  balanceCardValue: {
    color: "#fff",
    fontSize: 20,
    fontFamily: "OpenSans",
  },
});

export default ProductCreate;
