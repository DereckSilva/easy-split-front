import BackComponent from '@/components/BackComponent';
import ButtonComponent from '@/components/ButtonComponent';
import LogoComponent from '@/components/LogoComponent';
import { registerUserHook } from '@/hooks/user/userHook';
import { userCreateSchema } from '@/types/schemaForm';
import { style } from '@/types/style';
import { UserCreateRequest } from '@/types/userTypes';
import { yupResolver } from '@hookform/resolvers/yup';
import DateTimePicker from '@react-native-community/datetimepicker';
import { QueryClient, QueryClientProvider, useMutation } from '@tanstack/react-query';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import CountryPicker, {
  Country,
  CountryCode
} from "react-native-country-picker-modal";
import MaskInput, { Masks } from "react-native-mask-input";
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const client = new QueryClient();

function Register() {
  return (
    <QueryClientProvider client={client}>
      <RegisterScreen />
    </QueryClientProvider>
  )
}

function RegisterScreen() {
  const { control, handleSubmit, formState:{ errors }} = useForm({resolver: yupResolver(userCreateSchema)})
  const [focusInput, setFocusInput] = useState('');
  const [countryCode, setCountryCode] = useState<CountryCode>("BR");
  const [callingCode, setCallingCode] = useState("55");
  const [showPicker, setShowPicker] = useState(false);

  const { mutate, isPending } = useMutation({
    mutationFn: (data: UserCreateRequest) => registerUserHook(data),
    onSuccess: (data) => {
      console.log(data)
    }
  })

  if (isPending) {
    // componente de loading
  }

  const onSelect = (country: Country) => {
    setCountryCode(country.cca2);
    setCallingCode(country.callingCode[0]);
  };

  const handleRegister = (data: UserCreateRequest): void => {
    mutate(data)
  }

  const firstError = errors.name?.message || errors.email?.message || errors.password?.message || errors.confirmPassword?.message || errors.birthdate?.message || errors.phoneNumber?.message 
    || errors.role?.message

  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 items-center justify-center'>
      <BackComponent link={'/(tabs)/login'}/>
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View className='flex gap-4 items-center justify-center bg-transparent'>

              <LogoComponent />

              <Controller
                control={control}
                name='name'
                render={({field: { onChange, value }}) => (
                  <TextInput
                    className={focusInput == 'name' ? style.input.replace('border-white', 'border-slate-500') : 'border-solid border-white bg-slate-50 rounded-3xl p-4 text-xl w-96 border-2'}
                    placeholder='Digite o seu nome completo'
                    onChangeText={onChange}
                    value={value}
                    underlineColorAndroid="transparent"
                    testID='name'
                    keyboardType='default'
                    onFocus={() => setFocusInput('name')}
                    onBlur={() => setFocusInput('')}
                  />
                )}
              />

              <Controller 
                control={control}
                name='email'
                render={({field: { onChange, value }}) => (
                  <TextInput 
                    className={focusInput == 'email' ? style.input.replace('border-white', 'border-slate-500') : style.input}
                    placeholder='Digite o seu e-mail'
                    onChangeText={onChange}
                    value={value}
                    underlineColorAndroid="transparent"
                    testID='email'
                    keyboardType='email-address'
                    onFocus={() => setFocusInput('email')}
                    onBlur={() => setFocusInput('')}
                  />
                )}
              />

              <Controller 
                control={control}
                name='password'
                render={({field: { onChange, value }}) => (
                  <TextInput 
                    className={focusInput == 'password' ? style.input.replace('border-white', 'border-slate-500') : style.input}
                    placeholder='Digite a sua senha'
                    onChangeText={onChange}
                    value={value}
                    underlineColorAndroid="transparent"
                    secureTextEntry
                    testID='password'
                    keyboardType='default'
                    onFocus={() => setFocusInput('password')}
                    onBlur={() => setFocusInput('')}
                  />
                )}
              />

              <Controller 
                control={control}
                name='confirmPassword'
                render={({field: { onChange, value }}) => (
                  <TextInput 
                    className={focusInput == 'confirmPassword' ? style.input.replace('border-white', 'border-slate-500') : style.input}
                    placeholder='Confirme sua senha'
                    onChangeText={onChange}
                    value={value}
                    underlineColorAndroid="transparent"
                    testID='confirmPassword'
                    secureTextEntry
                    keyboardType='default'
                    onFocus={() => setFocusInput('confirmPassword')}
                    onBlur={() => setFocusInput('')}
                  />
                )}
              />

              <Controller 
                control={control}
                name="birthdate"
                render={({ field: { onChange, value } }) => (
                  <>
                    <TouchableOpacity onPress={() => setShowPicker(true)}>
                      <Text className={focusInput == 'birthdate' ? style.input.replace('border-white', 'border-slate-500 text-center') : style.input + ' text-center'}>
                        {value
                          ? value.toLocaleDateString()
                          : 'Selecione a data'}
                      </Text>
                    </TouchableOpacity>

                    {showPicker && (
                      <DateTimePicker
                        value={value ?? new Date()}
                        mode="date"
                        display="default"
                        onChange={(event, selectedDate) => {
                          setShowPicker(false)

                          if (selectedDate) {
                            onChange(selectedDate)
                          }
                        }}
                      />
                    )}
                  </>
                )}
              />

              <Controller
                  control={control}
                  name="phoneNumber"
                  defaultValue=""
                  render={({ field: { onChange, value } }) => (
                    <View className={focusInput == 'phoneNumber' ? style.input.replace('border-white', 'border-slate-500 flex-row items-center border rounded-lg px-2.5 mb-3') : style.input + ' flex-row items-center border rounded-lg px-2.5 mb-3'}>
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
                        onFocus={() => setFocusInput('phoneNumber')}
                        onBlur={() => setFocusInput('')}
                      />
                    </View>
                  )}
                />




              { firstError && (
                <Text className='text-red-600 text-xl text-center'>{firstError}</Text>
              ) }
              <ButtonComponent click={handleSubmit(handleRegister)} text='Cadastrar' />

              <View className='flex flex-row gap-2'>
                <Text>Já possui conta?</Text>
                <Link href={"/(tabs)/login"}>
                  <Text className='text-pink-500'>Entrar</Text>
                </Link>
              </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default Register
