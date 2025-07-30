import MainButton from '@components/MainButton';
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
        <Text style={styles.title}>Selamat Datang</Text>
        <Text style={styles.title}>Di Aplikasi</Text>
        <Text style={styles.title}>Ruang Meeting</Text>
      </View>
      <MainButton
        title="Test Button"
        onPress={() => console.log("asd")}
      />
      {/* <MainButton
       style={styles.button} onPress={(e) => {
        console.log('Button Pressed');
      }} title='Next' /> */}
    </View>
  );
};

export default HomeScreen;
