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
export interface ApiResponseErrorDetail {
  code: string;
  reason: string[];
}

export interface ApiResponse<T> {
  status: 'success' | 'error'; // Assuming status can also be 'success'
  message: string;
  timestamp: string;
  error: ApiResponseErrorDetail | null; // Nullable if no error
  data: T; // Generic type for the actual data payload
}