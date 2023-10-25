import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import icon from @expo/vector-icons

const FloatingButton = ({ onPress }) => {
  return (
    <TouchableOpacity
      style={{
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: 'blue',
        borderRadius: 25,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
      }}
      onPress={onPress}
    >
      <Ionicons name="ios-add" size={24} color="white" style={{ marginRight: 10 }} /> {/* Icon */}
      <Text style={{ color: 'white', fontSize: 18 }}>Add</Text> {/* Text */}
    </TouchableOpacity>
  );
};

export default FloatingButton;