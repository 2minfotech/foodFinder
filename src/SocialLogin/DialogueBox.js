import React, { useState, useEffect } from "react";
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const { width } = Dimensions.get("window");

const DialogueBox = ({onClose, open, handleAddData}) => {

  const [inputValue, setInputValue] = useState("");

  const toggleModalVisibility = () => {
    onClose(false)
  };
  return (
    <View>
      <Modal
        animationType="slide"
        transparent
        visible={open}
        presentationStyle="overFullScreen"
        onDismiss={toggleModalVisibility}
      >
        <View style={styles.viewWrapper}>
          <View style={styles.modalView}>
            <TextInput
              placeholder="Enter your email Id..."
              value={inputValue}
              style={styles.textInput}
              onChangeText={(value) => setInputValue(value)}
            />
            <Button title="Ok" onPress={()=>handleAddData(inputValue)} />
            <Icon
              name="times-circle"
              size={30}
              color="black"
              style={styles.closeIcon}
              onPress={toggleModalVisibility}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default DialogueBox;
const styles = StyleSheet.create({
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    borderColor: "#00b970",
    borderWidth: 2,
    borderStyle: "dotted",
    left: "50%",
    elevation: 5,
    transform: [{ translateX: -(width * 0.4) }, { translateY: -90 }],
    height: 180,
    width: width * 0.8,
    backgroundColor: "#fff",
    borderRadius: 7,
  },
  textInput: {
    width: "80%",
    borderRadius: 5,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderColor: "rgba(0, 0, 0, 0.2)",
    borderWidth: 1,
    marginBottom: 8,
  },
  closeIcon: {
    position: "absolute",
    right: 0,
    top: 0,
  },
});
