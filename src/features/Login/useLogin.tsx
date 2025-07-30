
import { api } from "@config/apiConfig";
import { URL_PATH } from "@config/url";
import { useMutation } from "@tanstack/react-query";
import { showErrorToast } from "@utils/toast";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { ApiResponse, ILoginRequest } from "type";
import { LoginScreenProps } from ".";

const useLogin = ({ navigation }: LoginScreenProps) => {
    const loginMutation = useMutation({
        mutationFn: async ({ email, password }: ILoginRequest) => {
            const response = await api.post(URL_PATH.postLogin, { email, password });
            return response; // Assuming your API returns user data or a token
        },
        onSuccess: (data) => {
            navigation.replace('HomeScreen');
        },
        onError: (res: AxiosError<ApiResponse<[]>>) => {
            showErrorToast(`${res.response?.data?.error?.reason.toString()}`)
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

