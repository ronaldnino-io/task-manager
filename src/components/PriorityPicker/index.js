import React from "react";
import {
  Picker,
  Platform,
  ActionSheetIOS,
  View,
  Button,
  StyleSheet
} from "react-native";

const priorities = ["Urgente", "Importante", "Normal", "No Importante"];

const styles = StyleSheet.create({
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 5
  }
});

const PriorityPicker = ({ priority, onChange }) => {
  const showIosPicker = () => {
    ActionSheetIOS.showActionSheetWithOptions(
      {
        options: [...priorities, "Cancel"],
        cancelButtonIndex: priorities.length
      },
      buttonIndex => {
        onChange(buttonIndex);
      }
    );
  };

  const renderIos = () => (
    <Button title={priorities[priority || 0]} onPress={showIosPicker} />
  );

  const renderAndroid = () => {
    return (
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={priority}
          onValueChange={itemValue => onChange(itemValue)}
          style={{ borderWidth: 2, borderColor: "red", elevation: 2 }}
        >
          {priorities.map((item, idx) => (
            <Picker.Item label={item} value={idx} />
          ))}
        </Picker>
      </View>
    );
  };

  
  
  return (
    { 
    ...Platform.OS === 'android' 
    ?
    renderAndroid() 
    :
    renderIos()
    }
  )
  
  
};

export default PriorityPicker;