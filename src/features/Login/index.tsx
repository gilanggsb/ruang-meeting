import MainButton from '@components/MainButton';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Controller } from 'react-hook-form';
import {
  Text,
  TextInput,
  View
} from 'react-native';
import { RootStackParamList } from 'type';
import styles from './styles';
import { useLogin } from './useLogin';

export type LoginScreenProps = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'LoginScreen'>;
};

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const { control, errors, handleSubmit, onSubmit, isLoginLoading, } = useLogin({ navigation });

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <Text style={styles.title}>Ruang Meeting</Text>
      </View>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Sign In</Text>
        <View style={{ marginVertical: 10 }} />
        <View style={styles.gapContainer}>
          <Text style={styles.label}>Email</Text>
          <Controller
            control={control}
            name="email"
            rules={{
              required: 'Email is required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Invalid email address',
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your email"
                keyboardType="email-address"
              />
            )}
          />
          {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
        </View>
        <View style={{ marginVertical: 10 }} />
        <View style={styles.gapContainer}>
          <Text style={styles.label}>Password</Text>
          <Controller
            control={control}
            name="password"
            rules={{
              required: 'Password is required',
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput

                style={styles.input}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Enter your password"

              />
            )}
          />
          {errors.email && <Text style={styles.errorText}>{errors.password?.message}</Text>}
        </View>

        <View style={{ marginVertical: 10 }} />
        <MainButton loading={isLoginLoading} style={styles.button} title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

export default LoginScreen;
