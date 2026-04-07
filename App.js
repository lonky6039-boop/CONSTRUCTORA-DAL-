import React, { useState } from "react";
import { View, Text, StyleSheet, PanResponder } from "react-native";

export default function App() {
  const [lines, setLines] = useState([]);
  const [current, setCurrent] = useState([]);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onPanResponderGrant: (evt) => {
      const { locationX, locationY } = evt.nativeEvent;
      setCurrent([{ x: locationX, y: locationY }]);
    },

    onPanResponderMove: (evt) => {
      const { locationX, locationY } = evt.nativeEvent;
      setCurrent((prev) => [...prev, { x: locationX, y: locationY }]);
    },

    onPanResponderRelease: () => {
      setLines((prev) => [...prev, current]);
      setCurrent([]);
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📏 DAL PLANOS PRO</Text>

      <View style={styles.canvas} {...panResponder.panHandlers}>

        {/* GRILLA */}
        {[...Array(30)].map((_, i) => (
          <View key={"h" + i} style={{ position: "absolute", top: i * 20, left: 0, right: 0, height: 1, backgroundColor: "#eee" }} />
        ))}
        {[...Array(30)].map((_, i) => (
          <View key={"v" + i} style={{ position: "absolute", left: i * 20, top: 0, bottom: 0, width: 1, backgroundColor: "#eee" }} />
        ))}

        {/* DIBUJO */}
        {[...lines, current].map((line, i) =>
          line.map((p, j) => (
            <View
              key={i + "-" + j}
              style={{
                position: "absolute",
                left: p.x,
                top: p.y,
                width: 3,
                height: 3,
                backgroundColor: "black"
              }}
            />
          ))
        )}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 40, backgroundColor: "#ddd" },
  title: { textAlign: "center", fontSize: 18 },
  canvas: {
    flex: 1,
    margin: 10,
    backgroundColor: "#fff",
    borderWidth: 1
  }
});
