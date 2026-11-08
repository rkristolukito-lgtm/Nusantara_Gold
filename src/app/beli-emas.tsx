import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function BuyGoldScreen() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<'rupiah' | 'gram'>('rupiah');
    const [nominal, setNominal] = useState('1.000.000');
    const [autoInvest, setAutoInvest] = useState(false);
    const [activeNav, setActiveNav] = useState('beli-emas');

    const PRICE_PER_GRAM = 1342500;

    const parseNumeric = (valStr: string) => {
        const clean = valStr.replace(/[^0-9]/g, '');
        return parseInt(clean, 10) || 0;
    };

    const formatNumber = (num: number) => {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };

    const numericValue = activeTab === 'rupiah' ? parseNumeric(nominal) : parseFloat(nominal.replace(',', '.')) || 0;
    const amountRp = activeTab === 'rupiah' ? (numericValue < 10000 ? 10000 : numericValue) : Math.round(numericValue * PRICE_PER_GRAM);
    const gramTotal = activeTab === 'rupiah' ? amountRp / PRICE_PER_GRAM : (numericValue <= 0 ? 0.01 : numericValue);
    const tax = Math.round(amountRp * 0.0099);
    const pokok = amountRp - tax;

    const handleInputChange = (text: string) => {
        if (activeTab === 'rupiah') {
            const numeric = parseNumeric(text);
            setNominal(formatNumber(numeric));
        } else {
            setNominal(text);
        }
    };

    const handlePreset = (val: number) => {
        if (activeTab === 'rupiah') {
            setNominal(formatNumber(val));
        } else {
            const gram = parseFloat((val / PRICE_PER_GRAM).toFixed(2));
            setNominal(gram.toString());
        }
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
                            <Text className="text-base text-white font-bold leading-tight">Beli Emas</Text>
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
                <View className="flex flex-col w-full px-4 pb-8 gap-4">

                    <View className="w-full rounded-xl bg-[#1E1E1E] p-4 relative overflow-hidden shadow-lg">
                        <View className="absolute -right-10 -top-10 w-28 h-28 bg-[#fcb858]/10 rounded-full blur-2xl pointer-events-none" />
                        <View className="flex items-center justify-between gap-2 flex-row">
                            <View className="flex flex-col min-w-0">
                                <View className="flex items-center gap-1.5 flex-row">
                                    <View className="w-2 h-2 rounded-full bg-[#03DAC6]" />
                                    <Text className="text-[10px] uppercase tracking-wider text-[#A0A0A0]">Harga Beli Terkini (24K)</Text>
                                </View>
                                <View className="flex items-baseline gap-1 mt-0.5 flex-row">
                                    <Text className="text-base font-bold text-white tracking-tight">Rp 1.342.500</Text>
                                    <Text className="text-xs text-[#A0A0A0]">/ gram</Text>
                                </View>
                            </View>
                            <View className="flex flex-col items-end shrink-0">
                                <View className="inline-flex items-center gap-1 bg-[#121212] px-2.5 py-1 rounded-full text-[#fcb858] flex-row">
                                    <MaterialIcons name="lock-clock" size={14} color="#fcb858" />
                                    <Text className="text-xs font-bold tracking-wider text-[#A0A0A0]">01:17</Text>
                                </View>
                                <Text className="text-[11px] text-[#A0A0A0] mt-1">Harga Terkunci</Text>
                            </View>
                        </View>
                    </View>

                    <View className="w-full bg-[#121212] p-1 rounded-xl flex items-center flex-row shadow-inner">
                        <TouchableOpacity
                            onPress={() => { setActiveTab('rupiah'); setNominal('1.000.000'); }}
                            className={`flex-1 py-2 rounded-lg font-bold flex items-center justify-center gap-1.5 flex-row ${activeTab === 'rupiah' ? 'bg-[#1E1E1E] text-[#fcb858] shadow-sm' : 'text-[#A0A0A0]'}`}
                        >
                            <MaterialIcons name="payments" size={16} color={activeTab === 'rupiah' ? '#fcb858' : '#A0A0A0'} />
                            <Text className={`text-sm ${activeTab === 'rupiah' ? 'text-[#fcb858] font-bold' : 'text-[#A0A0A0]'}`}>Beli Cepat (Rp)</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { setActiveTab('gram'); setNominal('1.00'); }}
                            className={`flex-1 py-2 rounded-lg font-bold flex items-center justify-center gap-1.5 flex-row ${activeTab === 'gram' ? 'bg-[#1E1E1E] text-[#fcb858] shadow-sm' : 'text-[#A0A0A0]'}`}
                        >
                            <MaterialIcons name="scale" size={16} color={activeTab === 'gram' ? '#fcb858' : '#A0A0A0'} />
                            <Text className={`text-sm ${activeTab === 'gram' ? 'text-[#fcb858] font-bold' : 'text-[#A0A0A0]'}`}>Beli Satuan (gr)</Text>
                        </TouchableOpacity>
                    </View>

                    <View className="w-full bg-[#1E1E1E] rounded-xl p-4 space-y-4 shadow-md">
                        <View className="flex items-center justify-between flex-row">
                            <Text className="text-sm text-white font-semibold">{activeTab === 'rupiah' ? 'Nominal Pembelian' : 'Jumlah Gram Emas'}</Text>
                            <Text className="text-xs text-[#fcb858] bg-[#2C2C2C] px-2 py-0.5 rounded-full">Min. Rp 10.000</Text>
                        </View>

                        <View className="bg-[#161616] rounded-xl p-4 flex flex-col gap-1 shadow-inner relative">
                            <View className="flex items-center justify-between flex-row">
                                <Text className="text-base text-[#fcb858] font-bold">{activeTab === 'rupiah' ? 'Rp' : 'gr'}</Text>
                                <TextInput
                                    className="w-full bg-transparent text-right text-xl font-bold text-white focus:outline-none tracking-tight pl-2"
                                    inputMode="numeric"
                                    value={nominal}
                                    onChangeText={handleInputChange}
                                />
                            </View>
                            <View className="flex items-center justify-between pt-1 flex-row">
                                <Text className="text-xs text-[#A0A0A0]">Estimasi Fisik</Text>
                                <View className="inline-flex items-center gap-1 bg-[#2C2C2C] px-2 py-0.5 rounded-full text-[#03DAC6] flex-row">
                                    <MaterialIcons name="token" size={14} color="#03DAC6" />
                                    <Text className="text-xs font-semibold">≈ {gramTotal.toFixed(4)} gram murni (99.99%)</Text>
                                </View>
                            </View>
                        </View>

                        <View className="flex flex-row flex-wrap gap-2 pt-0.5">
                            {[100000, 250000, 500000, 1000000, 5000000].map((val) => (
                                <TouchableOpacity
                                    key={val}
                                    onPress={() => handlePreset(val)}
                                    className="flex-1 min-w-[70px] py-1.5 px-2 rounded-lg bg-[#2C2C2C] items-center justify-center"
                                >
                                    <Text className="text-xs text-[#A0A0A0]">Rp {val >= 1000000 ? `${val / 1000000} jt` : `${val / 1000} rb`}</Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </View>

                    <View className="w-full bg-[#161616] rounded-xl p-4 flex items-center justify-between gap-3 flex-row shadow-sm">
                        <View className="flex items-start gap-3 min-w-0 flex-row">
                            <View className="w-9 h-9 rounded-full bg-[#03DAC6]/20 flex items-center justify-center shrink-0 text-[#03DAC6] mt-0.5">
                                <MaterialIcons name="autorenew" size={20} color="#03DAC6" />
                            </View>
                            <View className="flex flex-col min-w-0">
                                <View className="flex items-center gap-1.5 flex-row">
                                    <Text className="text-sm text-white font-semibold truncate">Nabung Rutin Otomatis</Text>
                                    <Text className="text-[10px] bg-[#03DAC6]/15 text-[#03DAC6] px-1.5 py-0.5 rounded uppercase font-bold">-0.1% Biaya</Text>
                                </View>
                                <Text className="text-xs text-[#A0A0A0] truncate">Beli emas berkala mingguan / bulanan otomatis</Text>
                            </View>
                        </View>
                        <TouchableOpacity onPress={() => setAutoInvest(!autoInvest)} className={`w-11 h-6 rounded-full p-1 flex ${autoInvest ? 'bg-[#fcb858] justify-end' : 'bg-[#2C2C2C] justify-start'}`}>
                            <View className="w-4 h-4 rounded-full bg-white" />
                        </TouchableOpacity>
                    </View>

                    <View className="w-full bg-[#1E1E1E] rounded-xl p-4 space-y-3 shadow-md">
                        <View className="flex items-center justify-between pb-1 flex-row">
                            <View className="flex items-center gap-1.5 flex-row">
                                <Text className="text-sm text-white font-semibold">Rincian Pembelian</Text>
                                <MaterialIcons name="verified" size={16} color="#fcb858" />
                            </View>
                            <Text className="text-xs text-[#03DAC6] font-bold bg-[#03DAC6]/20 px-2 py-0.5 rounded-full">Bebas Penitipan</Text>
                        </View>
                        <View className="space-y-2 text-[#A0A0A0]">
                            <View className="flex justify-between items-center flex-row">
                                <Text>Harga Pokok Emas</Text>
                                <Text className="text-white font-semibold">Rp {formatNumber(pokok)}</Text>
                            </View>
                            <View className="flex justify-between items-center flex-row">
                                <Text className="flex items-center gap-1">Biaya Layanan &amp; Kustodian</Text>
                                <Text className="text-[#03DAC6] font-semibold">Rp 0 <Text className="text-[10px] text-[#03DAC6] bg-[#2C2C2C] px-1.5 py-0.5 rounded ml-1 font-bold">PROMO</Text></Text>
                            </View>
                            <View className="flex justify-between items-center flex-row">
                                <Text className="flex items-center gap-1">PPN Emas (PMK No. 48/2023)</Text>
                                <Text className="text-white font-semibold">Rp {formatNumber(tax)}</Text>
                            </View>
                            <View className="flex justify-between items-center pt-2 border-t border-[#2C2C2C] flex-row">
                                <Text className="text-sm text-white font-semibold">Total Bobot Emas Murni</Text>
                                <View className="text-right">
                                    <Text className="text-base text-[#fcb858] font-bold">{gramTotal.toFixed(4)} gr</Text>
                                    <Text className="text-[10px] text-[#A0A0A0]">Taraf Kemurnian LBMA 99.99%</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View className="w-full bg-[#1E1E1E] rounded-xl p-4 space-y-4 shadow-md">
                        <View className="flex items-center justify-between flex-row">
                            <Text className="text-sm text-white font-semibold">Metode Pembayaran</Text>
                            <TouchableOpacity><Text className="text-xs text-[#fcb858] font-bold">Ganti</Text></TouchableOpacity>
                        </View>
                        <View className="w-full bg-[#2C2C2C] rounded-xl p-3.5 flex items-center justify-between shadow-sm flex-row">
                            <View className="flex items-center gap-3 min-w-0 flex-row">
                                <View className="w-10 h-10 rounded-lg bg-[#fcb858]/20 flex items-center justify-center shrink-0 text-[#fcb858]">
                                    <MaterialIcons name="account-balance-wallet" size={24} color="#fcb858" />
                                </View>
                                <View className="flex flex-col min-w-0">
                                    <Text className="text-sm text-white font-bold truncate">Saldo Dompet Nusantara</Text>
                                    <Text className="text-xs text-[#A0A0A0]">Tersedia: <Text className="text-[#03DAC6] font-semibold">Rp 2.450.000</Text></Text>
                                </View>
                            </View>
                            <View className="w-6 h-6 rounded-full bg-[#03DAC6] flex items-center justify-center text-[#121212] shrink-0">
                                <MaterialIcons name="check" size={16} color="#121212" />
                            </View>
                        </View>
                    </View>

                    <View className="space-y-3 pt-2">
                        <TouchableOpacity
                            className="w-full h-14 rounded-xl bg-gradient-to-r from-[#fcb858] via-[#f59e0b] to-amber-600 text-[#121212] flex items-center justify-center gap-2 shadow-[0_8px_24px_rgba(245,158,11,0.35)] flex-row"
                            onPress={() => alert('Pembelian Berhasil!')}
                        >
                            <MaterialIcons name="shopping-bag" size={22} color="#121212" />
                            <Text className="text-base text-[#121212] font-bold">Lanjut Beli Emas Rp {formatNumber(amountRp)}</Text>
                        </TouchableOpacity>
                        <View className="flex items-center justify-center gap-2 px-2 py-1 text-center flex-row">
                            <MaterialIcons name="shield" size={16} color="#fcb858" />
                            <Text className="text-[11px] text-[#A0A0A0] leading-snug text-center">
                                Transaksi Aman • Emas Fisik 100% dialokasikan di Konsorsium KBI &amp; Logam Mulia
                            </Text>
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