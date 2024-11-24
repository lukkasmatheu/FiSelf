import {
  Text,
  Pressable,
  PressableProps,
  StyleSheet,
  View,
} from "react-native";

interface ButtonProps extends PressableProps {
  title: string;
  color?: string;
  width?: number;
  disable?: boolean;
}

export function Button({
  title = "",
  color,
  width,
  disabled = false,
  ...rest
}: ButtonProps) {
  return (
    <Pressable
      style={[customStyle(color, width).button, disabled && styles.disable]}
      {...rest}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
}

const customStyle = (color?: string, width?: number) =>
  StyleSheet.create({
    button: {
      width: width ? width : 200,
      height: 35,
      borderColor: "#354354",
      borderWidth: 1,
      borderRadius: 15,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: color ? color : "#00000054",
    },
  });

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
  },
  disable: {
    backgroundColor: "gray",
  },
  title: {
    fontSize: 16,
    color: "#FFF",
  },
});
