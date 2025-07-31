
import { api } from "@config/apiConfig";
import { URL_PATH } from "@config/url";
import { useMutation } from "@tanstack/react-query";
import { showErrorToast } from "@utils/toast";
import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { ApiResponse, ILoginRequest } from "type";
import { LoginScreenProps } from ".";

const useLogin = ({ navigation }: LoginScreenProps) => {
    const { mutate: mutateLogin, isSuccess: isLoginSuccess, isPending: isLoginLoading } = useMutation({
        mutationFn: async ({ email, password }: ILoginRequest) => await api.post(URL_PATH.postLogin, { email, password }),
        onSuccess: (data) => navigation.replace('HomeScreen'),
        onError: (res: AxiosError<ApiResponse<[]>>) => showErrorToast(`${res.response?.data?.error?.reason.toString()}`),
    });

    const {
        register,
        handleSubmit,
        control,
        formState: { errors }
    } = useForm<ILoginRequest>();

    const onSubmit = (data: any) => {
        console.log(data);
        mutateLogin(data)
    };

    return { register, handleSubmit, errors, onSubmit, control, isLoginLoading }
}

export { useLogin };

