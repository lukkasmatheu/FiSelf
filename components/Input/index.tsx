import {
  Text,
  TextInput,
  TextInputProps,
  StyleSheet,
  View,
} from "react-native";

interface InputProps extends TextInputProps {
  label?: string;
  placeHolder?: string;
  disable?: boolean;
}

export function Input({
  label = "",
  placeHolder = "",
  disable = false,
  ...rest
}: InputProps) {
  return (
    <View style={[styles.boxInput, disable && styles.disable]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={[styles.input, disable && styles.disable]} {...rest} />
    </View>
  );
}

const styles = StyleSheet.create({
  boxInput: {
    width: "85%",
    borderWidth: 1,
    borderRadius:8
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
    width: "100%",
    paddingLeft: 10,
    borderColor: "none",
    borderWidth: 0,
  },
  disable: {
    backgroundColor: "gray",
  },
});
