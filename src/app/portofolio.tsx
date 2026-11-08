import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Svg, { Circle, Defs, Line, LinearGradient, Path, Stop } from 'react-native-svg';

export default function PortfolioScreen() {
    const router = useRouter();
    const [activeNav, setActiveNav] = useState('portofolio');
    const [isHidden, setIsHidden] = useState(false);
    const [activePeriod, setActivePeriod] = useState('6B');

    const chartPaths: Record<string, string> = {
        '1B': 'M0,130 C40,110 80,120 120,90 C160,85 200,95 240,60 C280,50 300,30 320,25',
        '3B': 'M0,135 C30,125 70,115 110,100 C150,90 190,80 230,55 C270,40 295,30 320,20',
        '6B': 'M0,125 C35,120 70,110 100,95 C130,80 160,88 200,60 C240,32 280,45 320,18',
        '1T': 'M0,138 C40,130 80,110 130,95 C180,80 220,70 260,40 C290,25 310,20 320,15',
        'SEMUA': 'M0,140 C50,135 100,105 150,85 C200,65 250,45 280,30 C300,20 310,15 320,10'
    };

    return (
        <View className="flex-1 bg-[#121212]">

            {/* Header */}
            <View className="absolute top-0 left-0 right-0 z-50 bg-[#121212]/85 pt-10 shadow-[0_4px_24px_rgba(0,0,0,0.35)]">
                <View className="h-16 px-4 flex-row items-center justify-between">
                    <View className="flex-row items-center gap-3">
                        <View className="w-8 h-8 rounded-lg overflow-hidden shrink-0">
                            <Image
                                source={require('../../assets/images/icon.png')}
                                style={{ width: 32, height: 32 }}
                                resizeMode="contain"
                            />
                        </View>
                        <View className="flex-col">
                            <Text className="text-[10px] text-[#fcb858] uppercase tracking-widest font-bold">Nusantara Gold</Text>
                            <Text className="text-base text-white font-bold leading-tight">Portofolio</Text>
                        </View>
                    </View>
                    <View className="flex-row items-center gap-2">
                        <TouchableOpacity className="w-11 h-11 items-center justify-center relative" activeOpacity={0.8}>
                            <MaterialIcons name="notifications-none" size={22} color="#A0A0A0" />
                            <View className="absolute top-2.5 right-2.5 w-2 h-2 rounded-full bg-[#fcb858]" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            activeOpacity={0.8}
                            onPress={() => router.replace('/login')}
                            className="pl-1"
                        >
                            <View className="w-8 h-8 rounded-full overflow-hidden border border-[#fcb858]/40">
                                <Image
                                    source={{
                                        uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPemRiVzgSGeoFrbun2wIXzox0k0Vg9-WQ9Nkx6XPtDBXVfGzrXWewmr1E4vgEI4zNlwuy2i5UrEick6MZOt9Bh2E-5y4j7-hpoEARqbJIn8WgrvrzoJfQ7XGhS7-n0T0DeAfmoGZvkk7oYaQxaXZO66IlSabUgznA4-5Nhvt26Ps7rXWzL8by6rfiC-89MXFwiqizd4hE1oVG65yrLN4xQlgvzXLMYTgTiurnAPRSBrSHrMaxAzvk6Q',
                                    }}
                                    className="w-full h-full"
                                    resizeMode="cover"
                                />
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/* Scrollable Content */}
            <ScrollView contentContainerStyle={{ paddingTop: 128, paddingBottom: 110 }} showsVerticalScrollIndicator={false}>
                <View className="flex flex-col w-full px-4 gap-4 pb-6">

                    <View className="relative overflow-hidden rounded-xl bg-gradient-to-b from-[#1E1E1E] via-[#1A1A1A] to-[#121212] p-4 shadow-2xl">
                        <View className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-[#fcb858]/15 blur-3xl pointer-events-none" />
                        <View className="absolute -left-6 bottom-0 w-36 h-36 rounded-full bg-[#03DAC6]/10 blur-2xl pointer-events-none" />

                        <View className="relative z-10 flex flex-col gap-3">
                            <View className="flex items-center justify-between flex-row">
                                <View className="flex items-center gap-2 flex-row">
                                    <View className="w-2 h-2 rounded-full bg-[#03DAC6]" />
                                    <Text className="text-[10px] uppercase tracking-wider text-[#03DAC6] font-bold">Portofolio Terverifikasi</Text>
                                </View>
                                <TouchableOpacity
                                    onPress={() => setIsHidden(!isHidden)}
                                    className="flex items-center gap-1 text-[#A0A0A0] py-1 px-2 rounded-lg bg-[#2C2C2C]/50 flex-row"
                                >
                                    <MaterialIcons name={isHidden ? "visibility-off" : "visibility"} size={18} color="#A0A0A0" />
                                    <Text className="text-xs text-[#A0A0A0]">{isHidden ? 'Sembunyi' : 'Tampilkan'}</Text>
                                </TouchableOpacity>
                            </View>

                            <View className="flex flex-col">
                                <Text className="text-xs text-[#A0A0A0]">Total Nilai Emas Saat Ini</Text>
                                <View className="flex items-baseline gap-1 mt-1 flex-row">
                                    <Text className="text-3xl text-white font-bold tracking-tight">
                                        {isHidden ? '••••••••••••' : 'Rp 48.330.000'}
                                    </Text>
                                </View>
                                <View className="flex items-center gap-2 mt-1 text-[#fcb858] flex-row">
                                    <MaterialIcons name="diamond" size={18} color="#fcb858" />
                                    <Text className="text-sm font-bold">36.0000 gram</Text>
                                    <Text className="text-xs text-[#A0A0A0]">• 24 Karat (99.99%)</Text>
                                </View>
                            </View>

                            <View className="flex flex-row gap-3 pt-1">
                                <View className="p-3 rounded-lg bg-[#2C2C2C]/60 flex flex-col justify-between flex-1">
                                    <Text className="text-[11px] text-[#A0A0A0]">Keuntungan Bersih (P&amp;L)</Text>
                                    <View className="flex items-center gap-1 mt-1 flex-row">
                                        <MaterialIcons name="trending-up" size={18} color="#03DAC6" />
                                        <Text className="text-xs text-[#03DAC6] font-bold">+Rp 5.820.000</Text>
                                    </View>
                                    <Text className="text-[10px] text-[#03DAC6] mt-0.5 font-semibold">+13.69% Total Return</Text>
                                </View>

                                <View className="p-3 rounded-lg bg-[#2C2C2C]/60 flex flex-col justify-between flex-1">
                                    <Text className="text-[11px] text-[#A0A0A0]">Modal Terinvestasi</Text>
                                    <Text className="text-xs text-white font-semibold mt-1">Rp 42.510.000</Text>
                                    <Text className="text-[10px] text-[#A0A0A0] mt-0.5">DCA sejak Jan 2023</Text>
                                </View>
                            </View>

                            <View className="flex items-center justify-between p-3 rounded-lg bg-[#121212]/80 text-[#A0A0A0] flex-row">
                                <View className="flex flex-col">
                                    <Text className="text-[11px]">Rata-Rata Beli</Text>
                                    <Text className="text-xs text-white font-semibold">Rp 1.180.833/gr</Text>
                                </View>
                                <View className="w-px h-6 bg-[#2C2C2C]" />
                                <View className="flex flex-col text-right">
                                    <Text className="text-[11px]">Harga Pasar Terkini</Text>
                                    <Text className="text-xs text-[#fcb858] font-semibold">Rp 1.342.500/gr</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className="flex flex-col gap-3">
                        <View className="flex items-center justify-between flex-row">
                            <View className="flex flex-col">
                                <Text className="text-base text-white font-semibold">Kinerja Portofolio</Text>
                                <Text className="text-xs text-[#A0A0A0]">Perbandingan Akumulatif vs Inflasi BPS</Text>
                            </View>
                            <View className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#1E1E1E] flex-row">
                                <View className="w-2 h-2 rounded-full bg-[#fcb858]" />
                                <Text className="text-xs text-[#fcb858]">Alpha +10.2%</Text>
                            </View>
                        </View>

                        <View className="bg-[#1E1E1E] rounded-xl p-4 flex flex-col gap-4 shadow-lg">
                            <View className="flex justify-between items-center bg-[#121212] p-1 rounded-lg flex-row">
                                {['1B', '3B', '6B', '1T', 'SEMUA'].map((period) => (
                                    <TouchableOpacity
                                        key={period}
                                        onPress={() => setActivePeriod(period)}
                                        className={`flex-1 py-1 text-center rounded items-center justify-center ${activePeriod === period ? 'bg-[#fcb858]' : ''}`}
                                    >
                                        <Text className={`text-xs ${activePeriod === period ? 'text-[#121212] font-bold' : 'text-[#A0A0A0]'}`}>{period}</Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <View className="relative w-full h-44">
                                <Svg className="w-full h-full overflow-visible" preserveAspectRatio="none" viewBox="0 0 320 140">
                                    <Defs>
                                        <LinearGradient id="goldGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                                            <Stop offset="0%" stopColor="#f59e0b" stopOpacity="0.35" />
                                            <Stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
                                        </LinearGradient>
                                    </Defs>
                                    <Line stroke="#2d3542" strokeDasharray="3,3" strokeWidth="0.8" x1="0" x2="320" y1="30" y2="30" />
                                    <Line stroke="#2d3542" strokeDasharray="3,3" strokeWidth="0.8" x1="0" x2="320" y1="70" y2="70" />
                                    <Line stroke="#2d3542" strokeDasharray="3,3" strokeWidth="0.8" x1="0" x2="320" y1="110" y2="110" />
                                    <Path d="M0,118 Q40,115 80,112 T160,105 T240,100 T320,95" fill="none" stroke="#534434" strokeDasharray="4,2" strokeWidth="1.8" />
                                    <Path d="M0,125 C35,120 70,110 100,95 C130,80 160,88 200,60 C240,32 280,45 320,18 L320,140 L0,140 Z" fill="url(#goldGradient)" />
                                    <Path d={chartPaths[activePeriod]} fill="none" stroke="#f59e0b" strokeLinecap="round" strokeWidth="2.5" />
                                    <Circle cx="320" cy="18" fill="#ffc174" r="4" />
                                </Svg>
                                <View className="absolute top-2 right-4 bg-[#2C2C2C]/90 backdrop-blur-md px-2.5 py-1 rounded shadow-md pointer-events-none flex flex-col items-end">
                                    <Text className="text-[10px] text-[#A0A0A0]">Tertinggi {activePeriod}</Text>
                                    <Text className="text-xs text-[#fcb858] font-bold">Rp 1.348.000</Text>
                                </View>
                            </View>

                            <View className="flex items-center justify-between pt-1 flex-row">
                                <View className="flex items-center gap-2 flex-row">
                                    <View className="w-3 h-1.5 rounded-full bg-[#fcb858]" />
                                    <Text className="text-xs text-white">Emas Nusantara (+13.69%)</Text>
                                </View>
                                <View className="flex items-center gap-2 flex-row">
                                    <View className="w-3 h-1.5 rounded-full bg-[#A0A0A0]" />
                                    <Text className="text-xs text-[#A0A0A0]">Laju Inflasi (+3.49%)</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className="flex flex-col gap-3">
                        <View className="flex items-center justify-between flex-row">
                            <Text className="text-base text-white font-semibold">Alokasi Simpanan</Text>
                            <Text className="text-xs text-[#A0A0A0]">2 Kategori Vault</Text>
                        </View>
                        <View className="w-full bg-[#1E1E1E] rounded-xl p-4 flex flex-col gap-4 shadow-md">
                            <View className="w-full h-3 bg-[#2C2C2C] rounded-full overflow-hidden flex flex-row">
                                <View className="h-full bg-[#fcb858] rounded-l-full" style={{ width: '72.2%' }} />
                                <View className="h-full bg-[#03DAC6]" style={{ width: '27.8%' }} />
                            </View>
                            <View className="flex flex-col gap-3">
                                <View className="flex items-center justify-between p-3 rounded-lg bg-[#161616] flex-row">
                                    <View className="flex items-center gap-3 flex-row">
                                        <View className="w-9 h-9 rounded-lg bg-[#fcb858]/20 flex items-center justify-center text-[#fcb858]">
                                            <MaterialIcons name="bolt" size={20} color="#fcb858" />
                                        </View>
                                        <View className="flex flex-col">
                                            <Text className="text-sm text-white font-semibold">Emas Digital (Liquid)</Text>
                                            <Text className="text-xs text-[#A0A0A0]">Siap tarik instan &amp; trading 24/7</Text>
                                        </View>
                                    </View>
                                    <View className="flex flex-col items-end">
                                        <Text className="text-sm text-[#fcb858] font-bold">26.0000 gr</Text>
                                        <Text className="text-xs text-[#A0A0A0]">72.2% (Rp 34.905.000)</Text>
                                    </View>
                                </View>

                                <View className="flex items-center justify-between p-3 rounded-lg bg-[#161616] flex-row">
                                    <View className="flex items-center gap-3 flex-row">
                                        <View className="w-9 h-9 rounded-lg bg-[#03DAC6]/20 flex items-center justify-center text-[#03DAC6]">
                                            <MaterialIcons name="lock" size={20} color="#03DAC6" />
                                        </View>
                                        <View className="flex flex-col">
                                            <View className="flex items-center gap-1.5 flex-row">
                                                <Text className="text-sm text-white font-semibold">Emas Brankas Fisik</Text>
                                                <Text className="text-[10px] bg-[#2C2C2C] px-1.5 py-0.5 rounded text-[#03DAC6] font-bold">KBI Insured</Text>
                                            </View>
                                            <Text className="text-xs text-[#A0A0A0]">Tersimpan di Brankas Antam Pulogadung</Text>
                                        </View>
                                    </View>
                                    <View className="flex flex-col items-end">
                                        <Text className="text-sm text-[#03DAC6] font-bold">10.0000 gr</Text>
                                        <Text className="text-xs text-[#A0A0A0]">27.8% (Rp 13.425.000)</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className="flex flex-col gap-3">
                        <View className="flex items-center justify-between flex-row">
                            <View className="flex items-center gap-2 flex-row">
                                <Text className="text-base text-white font-semibold">Target Finansial Emas</Text>
                                <Text className="bg-[#fcb858]/20 text-[#fcb858] text-xs px-2 py-0.5 rounded-full font-bold">2 Aktif</Text>
                            </View>
                            <TouchableOpacity className="flex items-center gap-0.5 flex-row">
                                <MaterialIcons name="add-circle" size={16} color="#fcb858" />
                                <Text className="text-xs text-[#fcb858] font-bold">Buat Target</Text>
                            </TouchableOpacity>
                        </View>

                        <View className="flex flex-col gap-3">
                            <View className="p-4 rounded-xl bg-[#1E1E1E] flex flex-col gap-3 shadow-md">
                                <View className="flex items-start justify-between flex-row">
                                    <View className="flex items-center gap-3 flex-row">
                                        <View className="w-10 h-10 rounded-xl bg-[#2C2C2C] flex items-center justify-center text-[#fcb858]">
                                            <MaterialIcons name="mosque" size={24} color="#fcb858" />
                                        </View>
                                        <View className="flex flex-col">
                                            <Text className="text-sm text-white font-bold">Tabungan Haji Reguler</Text>
                                            <Text className="text-xs text-[#A0A0A0]">Estimasi Capai: Nov 2025</Text>
                                        </View>
                                    </View>
                                    <Text className="text-xs text-[#fcb858] bg-[#fcb858]/10 px-2 py-1 rounded-md font-bold">57%</Text>
                                </View>
                                <View className="w-full bg-[#121212] h-2.5 rounded-full overflow-hidden">
                                    <View className="h-full bg-gradient-to-r from-[#fcb858] to-amber-600 rounded-full" style={{ width: '57%' }} />
                                </View>
                                <View className="flex justify-between items-center text-[#A0A0A0] flex-row">
                                    <Text className="text-xs"><Text className="text-white font-semibold">28.50 gr</Text> terkumpul</Text>
                                    <Text className="text-xs">Target: 50.00 gr</Text>
                                </View>
                            </View>

                            <View className="p-4 rounded-xl bg-[#1E1E1E] flex flex-col gap-3 shadow-md">
                                <View className="flex items-start justify-between flex-row">
                                    <View className="flex items-center gap-3 flex-row">
                                        <View className="w-10 h-10 rounded-xl bg-[#03DAC6]/20 flex items-center justify-center text-[#03DAC6]">
                                            <MaterialIcons name="verified-user" size={24} color="#03DAC6" />
                                        </View>
                                        <View className="flex flex-col">
                                            <View className="flex items-center gap-1.5 flex-row">
                                                <Text className="text-sm text-white font-bold">Dana Darurat 3 Bulan</Text>
                                                <Text className="text-[10px] bg-[#03DAC6]/20 text-[#03DAC6] px-1.5 py-0.5 rounded font-bold">TERCAPAI</Text>
                                            </View>
                                            <Text className="text-xs text-[#A0A0A0]">Proteksi Keuangan Siap Pakai</Text>
                                        </View>
                                    </View>
                                    <Text className="text-xs text-[#03DAC6] bg-[#03DAC6]/10 px-2 py-1 rounded-md font-bold">100%</Text>
                                </View>
                                <View className="w-full bg-[#121212] h-2.5 rounded-full overflow-hidden">
                                    <View className="h-full bg-[#03DAC6] rounded-full" style={{ width: '100%' }} />
                                </View>
                                <View className="flex justify-between items-center text-[#A0A0A0] flex-row">
                                    <Text className="text-xs"><Text className="text-[#03DAC6] font-semibold">10.00 gr</Text> tercapai</Text>
                                    <Text className="text-xs text-[#03DAC6]">Target Terpenuhi ✓</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>

            {/* Footer Navigation */}
            <View className="absolute bottom-0 left-0 right-0 z-50 bg-[#191919]/90 pb-5 shadow-[0_-8px_32px_rgba(0,0,0,0.5)]">
                <View className="h-16 px-4 flex-row items-center justify-between">
                    <TouchableOpacity
                        className="w-16 h-12 items-center justify-center gap-0.5"
                        onPress={() => { setActiveNav('beranda'); router.replace('/'); }}
                        activeOpacity={0.8}
                    >
                        <MaterialIcons name="home" size={22} color={activeNav === 'beranda' ? '#fcb858' : '#A0A0A0'} />
                        <Text className={`text-[10px] tracking-tight ${activeNav === 'beranda' ? 'text-[#fcb858] font-semibold' : 'text-[#A0A0A0]'}`}>Beranda</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="w-16 h-12 items-center justify-center gap-0.5"
                        onPress={() => { setActiveNav('pasar'); router.replace('/pasar' as any); }}
                        activeOpacity={0.8}
                    >
                        <MaterialIcons name="trending-up" size={22} color={activeNav === 'pasar' ? '#fcb858' : '#A0A0A0'} />
                        <Text className={`text-[10px] tracking-tight ${activeNav === 'pasar' ? 'text-[#fcb858] font-semibold' : 'text-[#A0A0A0]'}`}>Pasar</Text>
                    </TouchableOpacity>

                    <View className="relative -top-4 items-center">
                        <TouchableOpacity
                            className="w-14 h-14 rounded-full bg-[#fcb858] items-center justify-center shadow-[0_8px_24px_rgba(245,158,11,0.4)]"
                            activeOpacity={0.9}
                            onPress={() => { setActiveNav('beli-emas'); router.replace('/beli-emas' as any); }}
                        >
                            <MaterialIcons name="monetization-on" size={26} color="#121212" />
                        </TouchableOpacity>
                        <Text className="text-[10px] text-[#fcb858] mt-1 font-semibold">Beli Emas</Text>
                    </View>

                    <TouchableOpacity
                        className="w-16 h-12 items-center justify-center gap-0.5"
                        onPress={() => { setActiveNav('transaksi'); router.replace('/transaksi' as any); }}
                        activeOpacity={0.8}
                    >
                        <MaterialIcons name="receipt-long" size={22} color={activeNav === 'transaksi' ? '#fcb858' : '#A0A0A0'} />
                        <Text className={`text-[10px] tracking-tight ${activeNav === 'transaksi' ? 'text-[#fcb858] font-semibold' : 'text-[#A0A0A0]'}`}>Transaksi</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="w-16 h-12 items-center justify-center gap-0.5"
                        onPress={() => { setActiveNav('portofolio'); router.replace('/portofolio' as any); }}
                        activeOpacity={0.8}
                    >
                        <MaterialIcons name="account-balance-wallet" size={22} color={activeNav === 'portofolio' ? '#fcb858' : '#A0A0A0'} />
                        <Text className={`text-[10px] tracking-tight ${activeNav === 'portofolio' ? 'text-[#fcb858] font-semibold' : 'text-[#A0A0A0]'}`}>Portofolio</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}