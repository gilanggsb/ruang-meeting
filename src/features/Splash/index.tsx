import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { RootStackParamList } from 'type';
import styles from './styles';

type SplashProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'SplashScreen'>;
};

const SplashScreen: React.FC<SplashProps> = ({ navigation }) => {

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnboardingScreen');
    })
  }, [])

  return (
    <View style={styles.page}>
      <Text style={styles.titleText}>Ruang Meeting</Text>
    </View>
  );
};

export default SplashScreen;
