import { useState } from "react";
import {
  Text,
  TextInputProps,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
interface InputProps extends TextInputProps {
  label?: string;
  placeHolder?: string;
  disable?: boolean;
  selectedValue?: any;
  setSelectValue: (e: any) => void;
  options: any[];
}

export function Select({
  label = "",
  placeHolder = "",
  disable = false,
  selectedValue = "selecione uma opção",
  setSelectValue,
  options,
  ...rest
}: InputProps) {
  const [openList, setOpenList] = useState<boolean>(false);
  return (
    <View style={[styles.boxInput, disable && styles.disable]}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        style={styles.input}
        onPress={() => setOpenList(!openList)}
      >
        <Text>
          {selectedValue !== "" ? selectedValue : "selecione uma opção"}
        </Text>
        <Ionicons
          name={openList ? "arrow-up-outline" : "arrow-down-outline"}
          size={15}
        />
      </TouchableOpacity>
      <ScrollView>
        {openList &&
          options.map((option, index) => (
            <TouchableOpacity
              style={{ margin: 7 }}
              key={index}
              onPress={() => {
                setOpenList(false);
                setSelectValue(option);
              }}
            >
              <Text>{option.value}</Text>
            </TouchableOpacity>
          ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  boxInput: {
    width: "85%",
    minHeight: 35,
    maxHeight: 150,
    borderWidth: 1,
  },
  label: {
    alignSelf: "flex-start",
    marginTop: -15,
    marginLeft: 10,
    width: "auto",
    backgroundColor: "#ffff",
    fontSize: 14,
  },
  input: {
    width: "99%",
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  disable: {
    backgroundColor: "gray",
  },
});