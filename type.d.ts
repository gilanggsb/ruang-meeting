declare module '*.png' {
  const value: any;
  export default value;
}

declare module '*.svg' {
  const value: any;
  export default value;
}

export type RootStackParamList = {
  HomeScreen: undefined;
  OnboardingScreen: undefined;
  SplashScreen: undefined
  LoginScreen: undefined
};

export type ILoginRequest = {
  "email": string,
  "password": string
}