import React, { useState } from "react";
import { View, Text, StyleSheet, PanResponder, TouchableOpacity } from "react-native";

export default function App() {
  const [lines, setLines] = useState([]);
  const [current, setCurrent] = useState([]);

  const GRID = 20;

  const snap = (v) => Math.round(v / GRID) * GRID;

  const pan = PanResponder.create({
    onStartShouldSetPanResponder: () => true,

    onPanResponderGrant: (e) => {
      const { locationX, locationY } = e.nativeEvent;
      setCurrent([{ x: snap(locationX), y: snap(locationY) }]);
    },

    onPanResponderMove: (e) => {
      const { locationX, locationY } = e.nativeEvent;
      setCurrent((p) => [...p, { x: snap(locationX), y: snap(locationY) }]);
    },

    onPanResponderRelease: () => {
      setLines((p) => [...p, current]);
      setCurrent([]);
    }
  });

  return (
    <View style={s.container}>
      <Text style={s.title}>📐 DAL CAD PRO</Text>

      <View style={s.canvas} {...pan.panHandlers}>

        {/* GRID */}
        {[...Array(40)].map((_, i) => (
          <View key={"h"+i} style={{position:"absolute", top:i*GRID, left:0, right:0, height:1, backgroundColor:"#eee"}}/>
        ))}
        {[...Array(40)].map((_, i) => (
          <View key={"v"+i} style={{position:"absolute", left:i*GRID, top:0, bottom:0, width:1, backgroundColor:"#eee"}}/>
        ))}

        {/* DRAW */}
        {[...lines, current].map((line, i) =>
          line.map((p, j) => (
            <View key={i+"-"+j} style={{
              position:"absolute",
              left:p.x,
              top:p.y,
              width:4,
              height:4,
              backgroundColor:"black"
            }}/>
          ))
        )}

      </View>

      {/* TOOLBAR */}
      <View style={s.bar}>
        <TouchableOpacity style={s.btn} onPress={()=>setLines([])}>
          <Text>Borrar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const s = StyleSheet.create({
  container:{flex:1,paddingTop:40,backgroundColor:"#ddd"},
  title:{textAlign:"center",fontSize:18},
  canvas:{flex:1,margin:10,backgroundColor:"#fff",borderWidth:1},
  bar:{flexDirection:"row",justifyContent:"center",padding:10},
  btn:{backgroundColor:"#ccc",padding:10}
});
