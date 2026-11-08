import { Feather } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function NusantaraGoldLoginScreen() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');
    const [identifier, setIdentifier] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [rememberDevice, setRememberDevice] = useState(true);
    const [biometricState, setBiometricState] = useState<'idle' | 'loading' | 'success'>('idle');

    const handleBiometricPress = () => {
        if (biometricState !== 'idle') return;
        setBiometricState('loading');
        setTimeout(() => {
            setBiometricState('success');
            setTimeout(() => {
                setBiometricState('idle');
            }, 1800);
        }, 1200);
    };

    const handleLogin = () => {
        router.replace('/');
    };

    return (
        <SafeAreaView className="flex-1 bg-[#0F172A]">
            <ScrollView contentContainerStyle={{ paddingHorizontal: 20, paddingBottom: 40, alignItems: 'center' }} showsVerticalScrollIndicator={false}>

                <View className="absolute w-full h-[300px] overflow-hidden items-center">
                    <View className="absolute -top-10 w-[250px] h-[250px] rounded-full bg-[rgba(245,158,11,0.15)]" />
                    <View className="absolute top-[100px] right-2.5 w-[140px] h-[140px] rounded-full bg-[rgba(217,119,6,0.1)]" />
                </View>

                <View className="items-center my-6 z-10">
                    <View className="mb-4">
                        <View className="absolute -inset-1 rounded-2xl bg-[rgba(245,158,11,0.3)]" />

                        <View className="w-12 h-12 rounded-xl bg-[#1E293B] items-center justify-center shadow-md overflow-hidden">
                            <Image
                                source={require('../../assets/images/icon.png')}
                                style={{ width: 64, height: 64 }}
                                resizeMode="contain"
                            />
                        </View>
                    </View>

                    <View className="flex-row items-center bg-[#1E293B] px-3 py-1 rounded-full mb-2.5">
                        <Text className="text-[#F59E0B] text-[11px] font-bold tracking-widest">✔ ASET DIGITAL BERSERTIFIKASI</Text>
                    </View>

                    <Text className="text-[22px] font-bold text-[#F8FAFC] text-center mb-2">
                        Selamat Datang di <Text className="text-[#FBBF24]">Nusantara Gold</Text>
                    </Text>
                    <Text className="text-sm text-[#94A3B8] text-center max-w-[280px] leading-5">
                        Investasi emas murni 24K aman, tepercaya, dan diawasi resmi Bappebti &amp; OJK.
                    </Text>
                </View>

                <View className="w-full bg-[rgba(30,41,59,0.9)] rounded-[20px] p-4 shadow-xl z-10">

                    <View className="flex-row bg-[rgba(15,23,42,0.8)] rounded-xl p-1 mb-4">
                        <TouchableOpacity
                            className={`flex-1 py-2 rounded-lg items-center ${activeTab === 'login' ? 'bg-[#334155]' : ''}`}
                            onPress={() => setActiveTab('login')}
                        >
                            <Text className={`text-[13px] ${activeTab === 'login' ? 'text-[#F8FAFC] font-semibold' : 'text-[#94A3B8] font-medium'}`}>
                                Masuk Akun
                            </Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            className={`flex-1 py-2 rounded-lg items-center ${activeTab === 'signup' ? 'bg-[#334155]' : ''}`}
                            onPress={() => setActiveTab('signup')}
                        >
                            <Text className={`text-[13px] ${activeTab === 'signup' ? 'text-[#F8FAFC] font-semibold' : 'text-[#94A3B8] font-medium'}`}>
                                Daftar Akun
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View className="gap-4">

                        <View className="gap-1.5">
                            <View className="flex-row justify-between items-center">
                                <Text className="text-xs text-[#94A3B8] font-medium">
                                    {activeTab === 'login' ? 'Nomor HP atau Email Terdaftar' : 'Nomor HP atau Email Baru'}
                                </Text>
                                <Text className="text-[11px] text-[#FBBF24]">
                                    {activeTab === 'login' ? 'Terverifikasi KYC' : 'Mulai Pendaftaran'}
                                </Text>
                            </View>
                            <View className="relative justify-center">
                                <TextInput
                                    className="bg-[#0F172A] text-[#F8FAFC] text-sm px-4 py-3 rounded-xl"
                                    placeholder="Contoh: 08123456789 / investor@mail.com"
                                    placeholderTextColor="#94A3B8"
                                    value={identifier}
                                    onChangeText={setIdentifier}
                                    autoCapitalize="none"
                                />
                            </View>
                        </View>

                        <View className="gap-1.5">
                            <View className="flex-row justify-between items-center">
                                <Text className="text-xs text-[#94A3B8] font-medium">
                                    {activeTab === 'login' ? 'Kata Sandi / PIN Keamanan' : 'Buat Kata Sandi / PIN'}
                                </Text>
                                {activeTab === 'login' && (
                                    <TouchableOpacity>
                                        <Text className="text-xs text-[#FBBF24] font-semibold">Lupa Kata Sandi?</Text>
                                    </TouchableOpacity>
                                )}
                            </View>
                            <View className="relative justify-center">
                                <TextInput
                                    className="bg-[#0F172A] text-[#F8FAFC] text-sm px-4 py-3 rounded-xl pr-[45px]"
                                    placeholder={activeTab === 'login' ? 'Masukkan 6-digit PIN atau Sandi' : 'Minimal 6 karakter'}
                                    placeholderTextColor="#94A3B8"
                                    secureTextEntry={!showPassword}
                                    value={password}
                                    onChangeText={setPassword}
                                />
                                <TouchableOpacity
                                    className="absolute right-4 p-1"
                                    onPress={() => setShowPassword(!showPassword)}
                                >
                                    <Feather name={showPassword ? "eye-off" : "eye"} size={16} color="#A0A0A0" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {activeTab === 'login' ? (
                            <TouchableOpacity
                                className="flex-row items-center gap-2 my-1"
                                activeOpacity={0.8}
                                onPress={() => setRememberDevice(!rememberDevice)}
                            >
                                <View className={`w-[18px] h-[18px] rounded bg-[#0F172A] items-center justify-center border border-[#334155] ${rememberDevice ? 'bg-[#D97706] border-[#D97706]' : ''}`}>
                                    {rememberDevice && <Text className="text-white text-[10px]">✓</Text>}
                                </View>
                                <Text className="text-xs text-[#94A3B8] flex-1">Simpan perangkat tepercaya untuk transaksi cepat</Text>
                            </TouchableOpacity>
                        ) : (
                            <View className="flex-row items-center gap-2 my-1">
                                <View className="w-[18px] h-[18px] rounded bg-[#D97706] items-center justify-center border border-[#D97706]">
                                    <Text className="text-white text-[10px]">✓</Text>
                                </View>
                                <Text className="text-xs text-[#94A3B8] flex-1">Saya menyetujui Syarat & Ketentuan serta Kebijakan Privasi</Text>
                            </View>
                        )}

                        <TouchableOpacity
                            className="bg-[#D97706] rounded-xl py-3.5 items-center justify-center mt-1"
                            activeOpacity={0.9}
                            onPress={handleLogin}
                        >
                            <Text className="text-white text-[15px] font-bold">
                                {activeTab === 'login' ? 'Masuk ke Akun' : 'Buat Akun Baru'}
                            </Text>
                        </TouchableOpacity>

                        {activeTab === 'login' && (
                            <TouchableOpacity
                                className="flex-row bg-[#334155] rounded-xl py-3 px-4 items-center justify-between"
                                activeOpacity={0.9}
                                onPress={handleBiometricPress}
                            >
                                <Text className="text-base">🪪</Text>
                                <Text className="flex-1 ml-2.5 text-[13px] text-[#F8FAFC] font-semibold">
                                    {biometricState === 'loading'
                                        ? 'Memverifikasi Biometrik...'
                                        : biometricState === 'success'
                                            ? 'Autentikasi Berhasil!'
                                            : 'Masuk Cepat dengan Biometrik'}
                                </Text>
                                <View className="bg-[#1E293B] px-2 py-0.5 rounded-full">
                                    <Text className="text-[10px] text-[#FBBF24]">Face ID</Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    </View>

                    <View className="flex-row items-center justify-center my-4">
                        <View className="absolute w-full h-[1px] bg-[#334155]" />
                        <Text className="bg-[#1E1E1E] px-2 text-[11px] text-[#94A3B8] uppercase">
                            {activeTab === 'login' ? 'atau masuk dengan' : 'atau daftar dengan'}
                        </Text>
                    </View>

                    <View className="flex-row gap-3">
                        <TouchableOpacity className="flex-1 bg-[#0F172A] py-2.5 rounded-xl items-center justify-center" activeOpacity={0.8}>
                            <Text className="text-[#F8FAFC] text-[13px] font-semibold">Google</Text>
                        </TouchableOpacity>
                        <TouchableOpacity className="flex-1 bg-[#0F172A] py-2.5 rounded-xl items-center justify-center" activeOpacity={0.8}>
                            <Text className="text-[#F8FAFC] text-[13px] font-semibold">Apple ID</Text>
                        </TouchableOpacity>
                    </View>

                    {activeTab === 'login' && (
                        <View className="mt-3">
                            <View className="flex-row bg-[#0F172A] rounded-xl p-3 items-center justify-between">
                                <View>
                                    <Text className="text-[13px] text-[#F8FAFC] font-semibold">Belum punya akun emas?</Text>
                                    <Text className="text-[11px] text-[#D97706] font-medium">Bonus pendaftaran 0.05 gr</Text>
                                </View>
                                <TouchableOpacity className="bg-[#FBBF24] px-3 py-1.5 rounded-lg" onPress={() => setActiveTab('signup')}>
                                    <Text className="text-[#0F172A] text-xs font-bold">Daftar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}

                </View>

                <View className="mt-6 items-center">
                    <View className="flex-row items-center gap-2">
                        <TouchableOpacity><Text className="text-xs text-[#94A3B8]">Pusat Bantuan</Text></TouchableOpacity>
                        <Text className="text-[#94A3B8]">•</Text>
                        <TouchableOpacity><Text className="text-xs text-[#94A3B8]">Syarat &amp; Ketentuan</Text></TouchableOpacity>
                        <Text className="text-[#94A3B8]">•</Text>
                        <TouchableOpacity><Text className="text-xs text-[#94A3B8]">Kebijakan Privasi</Text></TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}