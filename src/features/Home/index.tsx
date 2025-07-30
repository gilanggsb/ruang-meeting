import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { RootStackParamList } from 'type';
import styles from './styles';

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const onButtonPress = () => {
    // navigation.replace('HomeScreen');
    console.log('Button Pressed');
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Home</Text>
      </View>
    </View>
  );
};

export default HomeScreen;
