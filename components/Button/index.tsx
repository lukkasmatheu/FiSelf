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
  radius?: number;
  gap?: number;
  disable?: boolean;
}

export function Button({
  title = "",
  color,
  width,
  disabled = false,
  radius,
  gap,
  ...rest
}: ButtonProps) {
  return (
    <Pressable
      style={[customStyle(color, width , radius, gap).button, disabled && styles.disable]}
      {...rest}
    >
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </Pressable>
  );
}

const customStyle = (color?: string, width?: number,radius?: number, gap?: number) =>
  StyleSheet.create({
    button: {
      width: width ? width : 200,
      height: 35,
      borderColor: "#354354",
      borderWidth: 1,
      borderRadius: radius ? radius : 15,
      gap: gap ? gap : 0,
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
