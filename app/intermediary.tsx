import {QueryClient, QueryClientProvider, useMutation} from "@tanstack/react-query";
import {SafeAreaProvider, SafeAreaView} from "react-native-safe-area-context";
import {KeyboardAvoidingView, ScrollView, Text, TextInput, View} from "react-native";
import BackComponent from "@/components/BackComponent";
import {Controller, useForm} from "react-hook-form";
import {style} from "@/types/style";
import CountryPicker, {Country, CountryCode} from "react-native-country-picker-modal";
import MaskInput, {Masks} from "react-native-mask-input";
import {yupResolver} from "@hookform/resolvers/yup";
import {intermediarySchema} from "@/types/schemaForm";
import {useState} from "react";
import {messageCreateUser} from "@/hooks/user/userHook";
import {IntermediaryLoginResponse} from "@/types/userTypes";
import LoadingComponent from "@/components/LoadingComponent";
import ButtonComponent from "@/components/ButtonComponent";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {useRouter} from "expo-router";

const queryClient = new QueryClient();

function Intermediary() {
    return (
        <QueryClientProvider client={queryClient}>
            <IntermediaryScreen />
        </QueryClientProvider>
    )

}

function IntermediaryScreen() {
    const { control, handleSubmit, formState:{ errors }} = useForm({resolver: yupResolver(intermediarySchema)})
    const [focusInput, setFocusInput] = useState('');
    const [countryCode, setCountryCode] = useState<CountryCode>("BR");
    const [callingCode, setCallingCode] = useState("55");
    const [messageError, setMessageError] = useState<string|null>('')
    const errorRegisterMessage = messageCreateUser()
    const router = useRouter()

    const { mutate, isPending } = useMutation({
        //mutationFn: (data: IntermediaryLoginResponse) => authIntermediary(data),
        onSuccess: (data) => {
            if (!data) {
                setMessageError(errorRegisterMessage)
            }
        }
    })

    if (isPending) {
        return <LoadingComponent text="Realizando a criação do usuáro, aguarde um instante" />
    }

    const onSelect = (country: Country) => {
        setCountryCode(country.cca2);
        setCallingCode(country.callingCode[0]);
    };

    const handleLoginInt = (data: IntermediaryLoginResponse): void => {
        //mutate(data)
        // @ts-ignore
        router.push("/(intermediaries)/expense")
    }

    const firstError = errors.email?.message || errors.phone_number?.message
    return (
        <SafeAreaProvider>
            <SafeAreaView className='flex-1 items-center justify-center w-auto bg-white h-80 p-4'>
                <KeyboardAvoidingView
                    behavior="padding"
                    enabled
                >
                    <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
                        <View className='flex gap-4 items-center justify-center w-96 bg-white'>

                            <BackComponent link={'/'}/>

                            <View className="justify-center items-center gap-2">
                                <View className="w-18 rounded-2xl bg-emerald-500 p-4">
                                    <MaterialCommunityIcons name="wallet-bifold-outline" size={32} color="white" />
                                </View>
                                <Text className="text-3xl">Intermediário</Text>
                                <Text className="text-gray-500">Entre para verificar as suas despesas pendentes</Text>
                            </View>

                            <View className="flex-row text-left w-full pl-4">
                                <Text className="text-gray-500">E-mail</Text>
                            </View>
                            <Controller
                                control={control}
                                name='email'
                                render={({field: { onChange, value }}) => (
                                    <TextInput
                                        className={focusInput == 'email' ? style.input.replace('border-gray-600', 'border-emerald-500') : style.input}
                                        placeholder='Digite o seu e-mail'
                                        onChangeText={onChange}
                                        value={value}
                                        underlineColorAndroid="transparent"
                                        testID='email'
                                        keyboardType='email-address'
                                        onFocus={() => {
                                            setFocusInput('email')
                                            setMessageError(null)
                                        }}
                                        onBlur={() => {
                                            setFocusInput('')
                                            setMessageError(null)
                                        }}
                                    />
                                )}
                            />

                            <View className="flex-row text-left w-full pl-4">
                                <Text className="text-gray-500">Telefone</Text>
                            </View>
                            <Controller
                                control={control}
                                name="phone_number"
                                defaultValue=""
                                render={({ field: { onChange, value } }) => (
                                    <View className={focusInput == 'phone_number' ? style.input.replace('border-gray-600', 'border-emerald-500 flex-row items-center border rounded-lg px-2.5 mb-3') : style.input + ' flex-row items-center border rounded-lg px-2.5 mb-3'}>
                                        <View className='flex-row items-center mr-2'>
                                            <CountryPicker
                                                countryCode={countryCode}
                                                withFlag
                                                withCallingCode
                                                withFilter
                                                onSelect={onSelect}
                                            />
                                            <Text className='ml-1 text-base'>+{callingCode}</Text>
                                        </View>

                                        <MaskInput
                                            value={value}
                                            onChangeText={(masked, unmasked) => {
                                                onChange(unmasked);
                                            }}
                                            mask={Masks.BRL_PHONE}
                                            keyboardType="numeric"
                                            placeholder="(DDD) XXXXX-XXXX"
                                            className='flex text-base py-4'
                                            onFocus={() => {
                                                setFocusInput('phone_number')
                                                setMessageError(null)
                                            }}
                                            onBlur={() => {
                                                setFocusInput('')
                                                setMessageError(null)
                                            }}
                                        />
                                    </View>
                                )}
                            />

                            { firstError && (
                                <Text className='text-red-600 text-xl text-center'>{firstError}</Text>
                            ) }

                            { messageError && (
                                <Text className='text-red-600 text-xl text-center'>{messageError}</Text>
                            ) }

                            <ButtonComponent click={handleSubmit(handleLoginInt)} text='Entrar' />

                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    )
}



export default Intermediary