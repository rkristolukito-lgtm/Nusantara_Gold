import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Svg, { Circle, Defs, Line, LinearGradient, Path, Stop } from 'react-native-svg';

export default function MarketScreen() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('24H');
    const [activeNav, setActiveNav] = useState('pasar');

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
                            <Text className="text-base text-white font-bold leading-tight">Pasar</Text>
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
                <View className="flex flex-col w-full px-4 pb-6 gap-4">

                    <View className="flex items-center justify-between pt-1 flex-row">
                        <View className="flex items-center gap-2 bg-[#2C2C2C] px-3 py-1 rounded-full shadow-sm flex-row">
                            <View className="relative flex h-2 w-2 items-center justify-center">
                                <View className="absolute inline-flex h-full w-full rounded-full bg-[#03DAC6] opacity-75" />
                                <View className="relative inline-flex rounded-full h-2 w-2 bg-[#03DAC6]" />
                            </View>
                            <Text className="text-[10px] text-white uppercase tracking-wider font-bold">PASAR SPOT LIVE • BAPPEBTI RESMI</Text>
                        </View>
                        <View className="flex items-center gap-1 text-[#A0A0A0] flex-row">
                            <MaterialIcons name="sync" size={14} color="#A0A0A0" />
                            <Text className="text-[11px]">Sinkron 14:35 WIB</Text>
                        </View>
                    </View>

                    <View className="relative overflow-hidden bg-gradient-to-b from-[#1E1E1E] via-[#1A1A1A] to-[#161616] rounded-xl p-4 shadow-xl">
                        <View className="absolute -right-8 -top-8 w-36 h-36 bg-[#fcb858]/10 rounded-full blur-2xl pointer-events-none" />
                        <View className="flex items-center justify-between mb-3 relative z-10 flex-row">
                            <View className="flex items-center gap-1.5 flex-row">
                                <MaterialIcons name="verified" size={18} color="#fcb858" />
                                <Text className="text-[10px] text-[#A0A0A0] uppercase tracking-wider font-bold">HARGA SPOT EMAS MURNI 24K</Text>
                            </View>
                            <View className="flex items-center gap-1 bg-[#03DAC6]/20 text-[#03DAC6] px-2 py-0.5 rounded-full flex-row">
                                <MaterialIcons name="trending-up" size={14} color="#03DAC6" />
                                <Text className="text-xs font-bold text-[#03DAC6]">+1.24%</Text>
                            </View>
                        </View>

                        <View className="relative z-10 flex items-baseline gap-1 my-1 flex-row">
                            <Text className="text-3xl text-white font-bold tracking-tight">Rp 1.342.500</Text>
                            <Text className="text-xs text-[#A0A0A0]">/ gram</Text>
                        </View>

                        <View className="relative z-10 grid grid-cols-2 gap-3 bg-[#121212]/70 backdrop-blur-md rounded-lg p-3 my-2 flex-row">
                            <View className="flex flex-col flex-1">
                                <Text className="text-[11px] text-[#A0A0A0]">Tertinggi 24j</Text>
                                <Text className="text-sm font-semibold text-[#03DAC6] flex items-center gap-0.5 mt-0.5">
                                    <MaterialIcons name="arrow-drop-up" size={16} color="#03DAC6" /> Rp 1.348.000
                                </Text>
                            </View>
                            <View className="flex flex-col flex-1">
                                <Text className="text-[11px] text-[#A0A0A0]">Terendah 24j</Text>
                                <Text className="text-sm font-semibold text-[#CF6679] flex items-center gap-0.5 mt-0.5">
                                    <MaterialIcons name="arrow-drop-down" size={16} color="#CF6679" /> Rp 1.328.000
                                </Text>
                            </View>
                        </View>

                        <View className="relative w-full h-40 my-2">
                            <Svg className="w-full h-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 340 130">
                                <Defs>
                                    <LinearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                                        <Stop offset="0%" stopColor="#ffc174" stopOpacity="0.38" />
                                        <Stop offset="70%" stopColor="#f59e0b" stopOpacity="0.08" />
                                        <Stop offset="100%" stopColor="#ffc174" stopOpacity="0" />
                                    </LinearGradient>
                                </Defs>
                                <Line stroke="#2d3542" strokeDasharray="3 3" strokeWidth="0.8" x1="0" x2="340" y1="30" y2="30" />
                                <Line stroke="#2d3542" strokeDasharray="3 3" strokeWidth="0.8" x1="0" x2="340" y1="75" y2="75" />
                                <Line stroke="#2d3542" strokeDasharray="3 3" strokeWidth="0.8" x1="0" x2="340" y1="120" y2="120" />
                                <Path d="M 0,105 C 30,112 55,90 85,82 C 120,72 145,95 180,68 C 215,42 245,65 275,38 C 300,18 320,24 340,15 L 340,130 L 0,130 Z" fill="url(#chartGradient)" />
                                <Path d="M 0,105 C 30,112 55,90 85,82 C 120,72 145,95 180,68 C 215,42 245,65 275,38 C 300,18 320,24 340,15" stroke="#ffc174" strokeLinecap="round" strokeWidth="2.5" />
                                <Circle cx="340" cy="15" fill="#f59e0b" r="5" stroke="#ffc174" strokeWidth="2" />
                            </Svg>
                            <View className="absolute right-2 top-0 bg-[#1E1E1E]/95 backdrop-blur-md px-2 py-1 rounded shadow-md pointer-events-none">
                                <Text className="text-xs text-[#fcb858] font-bold">Rp 1.342.500</Text>
                                <Text className="text-[10px] text-[#A0A0A0] text-right">Hari Ini</Text>
                            </View>
                        </View>

                        <View className="relative z-10 flex items-center justify-between bg-[#121212]/80 p-1 rounded-lg flex-row">
                            {['1H', '24H', '1M', '1Y', 'SEMUA'].map((tab) => (
                                <TouchableOpacity
                                    key={tab}
                                    onPress={() => setActiveTab(tab)}
                                    className={`flex-1 py-1.5 rounded items-center justify-center ${activeTab === tab ? 'bg-[#fcb858] shadow-md' : ''}`}
                                >
                                    <Text className={`text-xs font-semibold ${activeTab === tab ? 'text-[#121212] font-bold' : 'text-[#A0A0A0]'}`}>{tab}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <View className="bg-[#1E1E1E] rounded-xl p-4 shadow-md flex flex-col gap-3">
                        <View className="flex items-center justify-between flex-row">
                            <View className="flex items-center gap-2 flex-row">
                                <MaterialIcons name="currency-exchange" size={20} color="#fcb858" />
                                <Text className="text-base text-white font-semibold">Harga Jual Kembali (Buyback)</Text>
                            </View>
                            <View className="bg-[#2C2C2C] px-2 py-0.5 rounded">
                                <Text className="text-[10px] text-[#A0A0A0]">Likuiditas Instan</Text>
                            </View>
                        </View>
                        <View className="flex items-baseline justify-between pt-1 flex-row">
                            <View>
                                <Text className="text-xl font-bold text-white tracking-tight">Rp 1.205.000</Text>
                                <Text className="text-xs text-[#A0A0A0]">/ gr</Text>
                            </View>
                            <View className="items-end">
                                <Text className="text-[11px] text-[#A0A0A0]">Selisih (Spread)</Text>
                                <Text className="text-xs text-[#fcb858] font-semibold">Rp 137.500 (10.2%)</Text>
                            </View>
                        </View>
                        <View className="w-full bg-[#121212] h-1.5 rounded-full overflow-hidden mt-1">
                            <View className="bg-gradient-to-r from-[#03DAC6] to-[#fcb858] h-full w-[89.8%] rounded-full" />
                        </View>
                        <View className="flex justify-between items-center text-[#A0A0A0] text-xs flex-row">
                            <Text>Diterima bersih ke RDN</Text>
                            <Text>Bebas PPh 22 via NPWP</Text>
                        </View>
                    </View>

                    <View className="bg-[#1E1E1E] rounded-xl p-4 shadow-md flex flex-col gap-4">
                        <View className="flex items-center justify-between flex-row">
                            <View className="flex items-center gap-2 flex-row">
                                <MaterialIcons name="insights" size={20} color="#03DAC6" />
                                <Text className="text-base text-white font-semibold">Sentimen Pasar &amp; Indikator</Text>
                            </View>
                            <View className="bg-[#03DAC6]/20 px-2 py-0.5 rounded-full">
                                <Text className="text-xs text-[#03DAC6] font-bold">78% Bullish</Text>
                            </View>
                        </View>

                        <View className="flex flex-col gap-1.5">
                            <View className="flex justify-between text-xs flex-row">
                                <Text className="text-[#03DAC6] font-semibold">Akumulasi Pembeli (78%)</Text>
                                <Text className="text-[#CF6679] font-semibold">Aksi Ambil Untung (22%)</Text>
                            </View>
                            <View className="flex w-full h-2.5 rounded-full overflow-hidden bg-[#121212] flex-row gap-1">
                                <View className="bg-[#03DAC6] h-full rounded-l-full w-[78%]" />
                                <View className="bg-[#CF6679] h-full rounded-r-full w-[22%]" />
                            </View>
                        </View>

                        <View className="bg-[#161616] p-3 rounded-lg flex items-center gap-3 flex-row">
                            <View className="w-8 h-8 rounded-full bg-[#03DAC6]/20 flex items-center justify-center shrink-0 text-[#03DAC6]">
                                <MaterialIcons name="query-stats" size={18} color="#03DAC6" />
                            </View>
                            <View className="flex flex-col min-w-0 flex-1">
                                <Text className="text-[10px] text-[#A0A0A0] uppercase tracking-wider">Rekomendasi Teknikal</Text>
                                <Text className="text-sm font-semibold text-[#03DAC6] truncate">Beli Kuat (Moving Averages &amp; RSI Bullish)</Text>
                            </View>
                        </View>

                        <View className="grid grid-cols-2 gap-3 pt-1 flex-row">
                            <View className="bg-[#2C2C2C]/60 p-3 rounded-lg flex-1">
                                <View className="flex items-center gap-1 text-[#A0A0A0] text-xs mb-1 flex-row">
                                    <MaterialIcons name="public" size={14} color="#A0A0A0" />
                                    <Text>Kurs Acuan USD/IDR</Text>
                                </View>
                                <Text className="text-base font-bold text-white">Rp 15.890</Text>
                                <Text className="text-[11px] text-[#03DAC6] block mt-0.5">+0.08% Kurs JISDOR</Text>
                            </View>
                            <View className="bg-[#2C2C2C]/60 p-3 rounded-lg flex-1">
                                <View className="flex items-center gap-1 text-[#A0A0A0] text-xs mb-1 flex-row">
                                    <MaterialIcons name="language" size={14} color="#A0A0A0" />
                                    <Text>Spot Dunia (XAU/USD)</Text>
                                </View>
                                <Text className="text-base font-bold text-white">$2,165.40</Text>
                                <Text className="text-[11px] text-[#03DAC6] block mt-0.5">+0.95% / troy oz</Text>
                            </View>
                        </View>
                    </View>

                    <View className="bg-[#1E1E1E] rounded-xl p-4 shadow-md flex flex-col gap-3">
                        <View className="flex items-center justify-between mb-1 flex-row">
                            <View className="flex items-center gap-2 flex-row">
                                <MaterialIcons name="layers" size={20} color="#fcb858" />
                                <Text className="text-base text-white font-semibold">Perbandingan Fisik Pabrikan</Text>
                            </View>
                            <Text className="text-xs text-[#A0A0A0]">Update 14:00</Text>
                        </View>

                        {[
                            { name: "Antam CertiCard 24K", price: "Rp 1.342.500", icon: "shield" },
                            { name: "UBS Gold 24K", price: "Rp 1.332.000", icon: "diamond" },
                            { name: "Galeri 24 (Pegadaian)", price: "Rp 1.335.000", icon: "storefront" }
                        ].map((item, index) => (
                            <View key={index} className="flex items-center justify-between p-3 bg-[#161616] rounded-lg flex-row">
                                <View className="flex items-center gap-3 min-w-0 flex-row">
                                    <View className="w-9 h-9 rounded-lg bg-[#2C2C2C] flex items-center justify-center shrink-0 text-[#fcb858]">
                                        <MaterialIcons name={item.icon as any} size={20} color="#fcb858" />
                                    </View>
                                    <View className="flex flex-col min-w-0">
                                        <Text className="text-sm font-semibold text-white truncate">{item.name}</Text>
                                        <Text className="text-[11px] text-[#03DAC6] flex items-center gap-1 mt-0.5">
                                            • Tersedia Cetak Fisik
                                        </Text>
                                    </View>
                                </View>
                                <View className="text-right shrink-0">
                                    <Text className="text-sm font-bold text-white">{item.price}</Text>
                                    <Text className="text-[11px] text-[#A0A0A0] block">per gram</Text>
                                </View>
                            </View>
                        ))}
                    </View>

                    <View className="bg-[#1E1E1E] rounded-xl p-4 shadow-md flex flex-col gap-3">
                        <View className="flex items-center justify-between flex-row">
                            <View className="flex items-center gap-2 flex-row">
                                <MaterialIcons name="feed" size={20} color="#fcb858" />
                                <Text className="text-base text-white font-semibold">Berita &amp; Tren Terkini</Text>
                            </View>
                            <MaterialIcons name="chevron-right" size={18} color="#A0A0A0" />
                        </View>

                        {[
                            { title: "The Fed Tahan Suku Bunga, Permintaan Emas Safe-Haven Melonjak", source: "Reuters ID", time: "2 jam lalu" },
                            { title: "Bank Sentral Dunia Terus Tingkatkan Cadangan Emas Fisik di Q1 2025", source: "Bloomberg Market", time: "5 jam lalu" }
                        ].map((news, idx) => (
                            <View key={idx} className="flex items-center gap-3 p-3 bg-[#161616] rounded-lg flex-row">
                                <View className="w-16 h-16 rounded-lg bg-[#2C2C2C] shrink-0 overflow-hidden">
                                    <Image source={{ uri: 'https://images.unsplash.com/photo-1610375461246-83df859d849d?w=200' }} className="w-full h-full object-cover" />
                                </View>
                                <View className="flex flex-col min-w-0 flex-1">
                                    <Text className="text-sm font-semibold text-white" numberOfLines={2}>{news.title}</Text>
                                    <View className="flex items-center gap-2 mt-1 text-[#A0A0A0] text-xs flex-row">
                                        <Text>{news.source}</Text>
                                        <Text>•</Text>
                                        <Text>{news.time}</Text>
                                    </View>
                                </View>
                            </View>
                        ))}
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