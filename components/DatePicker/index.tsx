import React, { useState } from "react";
import { View, TouchableOpacity, TextInput, Text } from "react-native";
import DatePicker from "react-native-date-picker";
import moment from "moment";
import "moment/locale/pt-br";

export default function DatePickerField({title, date, setDate, placeHolder, minDate , maxDate }: { title: string, date?:Date|null, setDate: ((date:Date) => void), placeHolder?: string, minDate?:Date , maxDate?:Date }) {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  moment.locale("pt-br");
  const handleDatePicker = () => setDatePickerVisibility(!isDatePickerVisible);

  return (
    <View>
      <TouchableOpacity onPress={handleDatePicker}>
        <TextInput
          numberOfLines={1}
          editable={false}
          placeholder={placeHolder}
          value={date ? moment(date).format("DD [de] MMMM [de] YYYY") : ""}
          style={styles.input}
        />
        <Text style={styles.title}>{title}</Text>
        <DatePicker
          modal
          confirmText="Confirmar"
          cancelText="Voltar"
          open={isDatePickerVisible}
          date={date || maxDate || new Date()} 
          onConfirm={(date: Date) => {
            setDatePickerVisibility(false);
            setDate(date); 
          }}
          onCancel={handleDatePicker}
          mode="date"
          locale="pt-BR"
          minimumDate={minDate}
          maximumDate={maxDate} // Data máxima: ontem
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = {
  input: {
    padding: 10,
    color:'#3d3d3d',
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    fontSize: 16,
    marginBottom: 10,
    
  },
  title: {
    fontSize: 14,
    color: "black",
    fontWeight: "400",
    marginBottom: 5,
  },
};