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
    <View style={[styles.contentInput, disable && styles.disable]}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.boxInput, disable && styles.disable]}>
        <TextInput style={[styles.input, disable && styles.disable]} {...rest} />
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  contentInput: {
    width: "85%",
  },
  boxInput: {
    width: "100%",
    height:45,
    borderWidth: 1,
    borderRadius:8
  },
  label: {
    alignSelf: "flex-start",
    marginLeft: 10,
    width: "auto",
    backgroundColor: "#ffff",
    fontSize: 14,
  },
  input: {
    width: "100%",
    paddingLeft: 10,
    paddingTop:5,
    borderColor: "none",
    borderWidth: 0,
  },
  disable: {
    backgroundColor: "gray",
  },
});
