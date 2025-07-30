
import { api } from "@config/apiConfig";
import { URL_PATH } from "@config/url";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ILoginRequest } from "type";
import { LoginScreenProps } from ".";

const useLogin = ({ navigation }: LoginScreenProps) => {
    const loginMutation = useMutation({
        mutationFn: async ({ email, password }: ILoginRequest) => {
            const response = await api.post(URL_PATH.postLogin, { email, password });
            return response.data; // Assuming your API returns user data or a token
        },
        onSuccess: (data) => {
            console.log("login success", data)
            // Store user data or token in secure storage (e.g., AsyncStorage)
            // Example: await AsyncStorage.setItem('userToken', data.token);

            // Invalidate or set query data to reflect the logged-in state
            // queryClient.setQueryData(['user'], data.user); // Store user data in cache
            // Or invalidate queries that depend on authentication, e.g.,
            // queryClient.invalidateQueries(['protectedData']);
        },
        onError: (error) => {
            console.log('Login failed:', error.message);
            // Handle login error (e.g., show an alert)
        },
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<ILoginRequest>();

    const onSubmit = (data: any) => {
        console.log(data);
        loginMutation.mutate(data)
    };

    useEffect(() => {
        if (loginMutation.isSuccess) {
            // Navigate to a protected screen after successful login
            navigation.navigate('HomeScreen');
        }
    }, [loginMutation.isSuccess, navigation]);

    return { register, handleSubmit, errors, onSubmit, control }
}

export { useLogin };

