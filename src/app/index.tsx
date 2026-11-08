import { Feather, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg';

export default function Index() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('beranda');

    const chartPoints = [
        { x: 0, y: 55 },
        { x: 50, y: 48 },
        { x: 100, y: 60 },
        { x: 150, y: 35 },
        { x: 200, y: 42 },
        { x: 250, y: 25 },
        { x: 300, y: 15 },
    ];

    const linePath = chartPoints.reduce((acc, pt, idx) => {
        return idx === 0 ? `M ${pt.x} ${pt.y}` : `${acc} L ${pt.x} ${pt.y}`;
    }, '');

    const fillPath = `${linePath} L 300 80 L 0 80 Z`;

    return (
        <View className="flex-1 bg-[#121212]">

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
                            <Text className="text-base text-white font-bold leading-tight">Beranda</Text>
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

            <ScrollView contentContainerStyle={{ paddingTop: 128, paddingBottom: 110 }} showsVerticalScrollIndicator={false}>
                <View className="flex-1 w-full px-4 gap-6">

                    <View className="gap-1 pt-1">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-col">
                                <View className="flex-row items-center gap-1">
                                    <Text className="text-xs text-[#A0A0A0]">Waktu Indonesia Barat • 09:41</Text>
                                    <View className="w-1.5 h-1.5 rounded-full bg-[#03DAC6]" />
                                </View>
                                <View className="flex-row items-center gap-1.5 mt-0.5">
                                    <Text className="text-xl font-bold text-[#E0E0E0] tracking-tight">Selamat Pagi, Rania Putri</Text>
                                    <Text className="text-lg">✨</Text>
                                </View>
                            </View>

                            <View className="flex-row items-center gap-1.5 px-2.5 py-1 rounded-2xl bg-[#2C2C2C]">
                                <MaterialIcons name="workspace-premium" size={14} color="#fcb858" style={{ marginRight: 2 }} />
                                <Text className="text-[10px] font-bold text-[#fcb858] tracking-wider">PRIORITAS</Text>
                            </View>
                        </View>
                    </View>

                    <View className="rounded-xl bg-[#1E1E1E] p-4 overflow-hidden shadow-md">
                        <View className="gap-4 z-10">
                            <View className="flex-row justify-between items-center">
                                <View className="flex-row items-center gap-2">
                                    <MaterialCommunityIcons name="diamond" size={20} color="#fcb858" />
                                    <Text className="text-xs font-bold text-[#A0A0A0] tracking-wider">SALDO LOGAM MULIA</Text>
                                </View>
                                <View className="p-1">
                                    <Feather name="eye" size={16} color="#A0A0A0" />
                                </View>
                            </View>

                            <View className="gap-1">
                                <View className="flex-row items-baseline gap-2">
                                    <Text className="text-4xl font-bold text-[#fcb858] tracking-tighter">48.7500</Text>
                                    <Text className="text-base text-[#E0E0E0]">gram</Text>
                                </View>
                                <View className="flex-row items-center justify-between mt-1">
                                    <Text className="text-lg font-bold text-white">Rp 63.862.500</Text>
                                    <View className="flex-row items-center gap-1 px-2 py-0.5 rounded-xl bg-[#03DAC6]/15">
                                        <MaterialIcons name="trending-up" size={14} color="#03DAC6" />
                                        <Text className="text-xs font-bold text-[#03DAC6]">+Rp 4.215.000 (+7.08%)</Text>
                                    </View>
                                </View>
                            </View>

                            <View className="pt-1 flex-row justify-between">
                                <View className="items-center gap-1.5 flex-1">
                                    <View className="w-12 h-12 rounded-full bg-[#fcb858] items-center justify-center shadow-sm">
                                        <MaterialIcons name="add" size={22} color="#121212" />
                                    </View>
                                    <Text className="text-xs text-[#E0E0E0] font-medium">Beli</Text>
                                </View>
                                <View className="items-center gap-1.5 flex-1">
                                    <View className="w-12 h-12 rounded-full bg-[#2C2C2C] items-center justify-center shadow-sm">
                                        <MaterialIcons name="sync-alt" size={20} color="#fcb858" />
                                    </View>
                                    <Text className="text-xs text-[#E0E0E0] font-medium">Jual</Text>
                                </View>
                                <View className="items-center gap-1.5 flex-1">
                                    <View className="w-12 h-12 rounded-full bg-[#2C2C2C] items-center justify-center shadow-sm">
                                        <MaterialIcons name="send" size={20} color="#fcb858" />
                                    </View>
                                    <Text className="text-xs text-[#E0E0E0] font-medium">Transfer</Text>
                                </View>
                                <View className="items-center gap-1.5 flex-1">
                                    <View className="w-12 h-12 rounded-full bg-[#2C2C2C] items-center justify-center shadow-sm">
                                        <MaterialCommunityIcons name="diamond" size={20} color="#fcb858" />
                                    </View>
                                    <Text className="text-xs text-[#E0E0E0] font-medium">Cetak</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className="flex-col gap-3 bg-[#1E1E1E] rounded-xl p-4 shadow-sm">
                        <View className="flex-row items-center justify-between">
                            <View className="flex-row items-center gap-2">
                                <View className="w-2 h-2 rounded-full bg-[#03DAC6]" />
                                <Text className="text-sm font-semibold text-white tracking-wide">Harga Pasar Antam Terkini</Text>
                            </View>
                            <Text className="text-xs text-[#A0A0A0]">Update 09:40 WIB</Text>
                        </View>

                        <View className="flex-row gap-2 pt-1">
                            <View className="flex-1 flex-col p-3 rounded-lg bg-[#2C2C2C]">
                                <View className="flex-row items-center justify-between">
                                    <Text className="text-[10px] text-[#A0A0A0] font-bold">HARGA BELI</Text>
                                    <View className="flex-row items-center">
                                        <Text className="text-[10px] text-[#03DAC6] font-bold mr-0.5">+0.85%</Text>
                                        <MaterialIcons name="north-east" size={14} color="#03DAC6" />
                                    </View>
                                </View>
                                <Text className="text-base font-bold text-white mt-1">Rp 1.310.000</Text>
                                <Text className="text-[11px] text-[#A0A0A0] mt-0.5">per gram</Text>
                            </View>

                            <View className="flex-1 flex-col p-3 rounded-lg bg-[#2C2C2C]">
                                <View className="flex-row items-center justify-between">
                                    <Text className="text-[10px] text-[#A0A0A0] font-bold">HARGA JUAL</Text>
                                    <View className="flex-row items-center">
                                        <Text className="text-[10px] text-[#A0A0A0] mr-0.5">Stabil</Text>
                                        <MaterialIcons name="horizontal-rule" size={14} color="#A0A0A0" />
                                    </View>
                                </View>
                                <Text className="text-base font-bold text-white mt-1">Rp 1.205.000</Text>
                                <Text className="text-[11px] text-[#A0A0A0] mt-0.5">per gram</Text>
                            </View>
                        </View>

                        <View className="relative w-full h-[90px] bg-[#121212] rounded-lg mt-1 p-2.5 overflow-hidden">
                            <View className="flex-row justify-between items-center z-10">
                                <Text className="text-[#fcb858] text-xs font-semibold">Tren Grafik Harga Emas</Text>
                                <View className="px-1.5 py-0.5 bg-[#2C2C2C] rounded">
                                    <Text className="text-[#fcb858] text-[10px] font-bold">Rp 1.310.000</Text>
                                </View>
                            </View>
                            <View className="absolute bottom-0 left-0 right-0 h-[60px]">
                                <Svg height="100%" width="100%" viewBox="0 0 300 80" preserveAspectRatio="none">
                                    <Defs>
                                        <LinearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                                            <Stop offset="0%" stopColor="#fcb858" stopOpacity="0.4" />
                                            <Stop offset="100%" stopColor="#fcb858" stopOpacity="0.0" />
                                        </LinearGradient>
                                    </Defs>
                                    <Path d={fillPath} fill="url(#goldGradient)" />
                                    <Path d={linePath} fill="none" stroke="#fcb858" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    <Circle cx="300" cy="15" r="4" fill="#121212" stroke="#fcb858" strokeWidth="2" />
                                </Svg>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>

            <View className="absolute bottom-0 left-0 right-0 z-50 bg-[#191919]/90 pb-5 shadow-[0_-8px_32px_rgba(0,0,0,0.5)]">
                <View className="h-16 px-4 flex-row items-center justify-between">
                    <TouchableOpacity
                        className="w-16 h-12 items-center justify-center gap-0.5"
                        onPress={() => { setActiveTab('beranda'); router.replace('/'); }}
                        activeOpacity={0.8}
                    >
                        <MaterialIcons name="home" size={22} color={activeTab === 'beranda' ? '#fcb858' : '#A0A0A0'} />
                        <Text className={`text-[10px] tracking-tight ${activeTab === 'beranda' ? 'text-[#fcb858] font-semibold' : 'text-[#A0A0A0]'}`}>Beranda</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="w-16 h-12 items-center justify-center gap-0.5"
                        onPress={() => { setActiveTab('pasar'); router.replace('/pasar' as any); }}
                        activeOpacity={0.8}
                    >
                        <MaterialIcons name="show-chart" size={22} color={activeTab === 'pasar' ? '#fcb858' : '#A0A0A0'} />
                        <Text className={`text-[10px] tracking-tight ${activeTab === 'pasar' ? 'text-[#fcb858] font-semibold' : 'text-[#A0A0A0]'}`}>Pasar</Text>
                    </TouchableOpacity>

                    <View className="relative -top-4 items-center">
                        <TouchableOpacity
                            className="w-14 h-14 rounded-full bg-[#fcb858] items-center justify-center shadow-[0_8px_24px_rgba(245,158,11,0.4)]"
                            activeOpacity={0.9}
                            onPress={() => { setActiveTab('beli-emas'); router.replace('/beli-emas' as any); }}
                        >
                            <MaterialIcons name="payments" size={26} color="#121212" />
                        </TouchableOpacity>
                        <Text className="text-[10px] text-[#fcb858] mt-1 font-semibold">Beli Emas</Text>
                    </View>

                    <TouchableOpacity
                        className="w-16 h-12 items-center justify-center gap-0.5"
                        onPress={() => { setActiveTab('transaksi'); router.replace('/transaksi' as any); }}
                        activeOpacity={0.8}
                    >
                        <MaterialIcons name="receipt-long" size={22} color={activeTab === 'transaksi' ? '#fcb858' : '#A0A0A0'} />
                        <Text className={`text-[10px] tracking-tight ${activeTab === 'transaksi' ? 'text-[#fcb858] font-semibold' : 'text-[#A0A0A0]'}`}>Transaksi</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className="w-16 h-12 items-center justify-center gap-0.5"
                        onPress={() => { setActiveTab('portofolio'); router.replace('/portofolio' as any); }}
                        activeOpacity={0.8}
                    >
                        <MaterialIcons name="account-balance-wallet" size={22} color={activeTab === 'portofolio' ? '#fcb858' : '#A0A0A0'} />
                        <Text className={`text-[10px] tracking-tight ${activeTab === 'portofolio' ? 'text-[#fcb858] font-semibold' : 'text-[#A0A0A0]'}`}>Portofolio</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}