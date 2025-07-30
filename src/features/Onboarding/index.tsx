import MainButton from '@components/MainButton';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
  Text,
  View
} from 'react-native';
import { RootStackParamList } from 'type';
import styles from './styles';

type OnboardingScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'OnboardingScreen'>;
};

const OnboardingScreen: React.FC<OnboardingScreenProps> = ({ navigation }) => {
  const onButtonPress = () => {
    navigation.replace('LoginScreen');
  }

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Selamat Datang</Text>
        <Text style={styles.title}>Di Aplikasi</Text>
        <Text style={styles.title}>Ruang Meeting</Text>
      </View>
      <MainButton style={styles.button} onPress={onButtonPress} title='Sign In' />
    </View>
  );
};

export default OnboardingScreen;
