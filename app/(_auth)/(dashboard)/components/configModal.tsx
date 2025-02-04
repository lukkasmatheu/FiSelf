import { Modal, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { FloatingButton } from "./FloatingButton";
import { AntDesign } from "@expo/vector-icons";
import useUser from "../../../../states/useUser";
import { router } from "expo-router";

type ConfigModalProps = {
  visible?: boolean;
  closeModal: () => void;
};

export const ConfigModal = ({
  visible,
  closeModal,
}: ConfigModalProps) => {
  const storeUser = useUser()
  const logout = () =>{
    storeUser.clearUserData()
    router.push("/")
  }
  return (
    <Modal
      animationType="slide"
      transparent
      visible={visible}
      onRequestClose={closeModal}
    >
      
      <View style={styles.modalOverlay}>
        
        <View style={styles.modalContent}>
        <TouchableOpacity onPress={closeModal} style={styles.closeButton}>
            <AntDesign name={"arrowleft"} size={25} color="black" />
        </TouchableOpacity>
        <Text style={styles.textConfig}>
          Ola {storeUser.user?.name}
        </Text>
        <TouchableOpacity onPress={logout} style={styles.logoutButton}>
            <Text style={[styles.textConfig,{marginRight:10,color:"red"}]}>
            Deslogar
            </Text>
            <AntDesign name="logout" size={18} color="red" />
        </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    width:"100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    zIndex: 998,
  },
  modalContent: {
    width:"90%",
    height:"80%",
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  logoutButton:{
    alignItems:"center",
    justifyContent:"space-between",
    flexDirection:"row",
    padding:10,
    borderWidth:1

  },
  textConfig:{
    fontSize:18,
    fontFamily: "OpenSans",

  }
});
