import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Image, Modal, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function TransactionHistoryScreen() {
    const router = useRouter();
    const [activeNav, setActiveNav] = useState('transaksi');
    const [selectedFilter, setSelectedFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedTx, setSelectedTx] = useState<any>(null);
    const [modalVisible, setModalVisible] = useState(false);

    const transactions = [
        {
            id: "NG-20250312-8821",
            title: "Beli Emas Digital",
            date: "13 Mar 2025, 11:24 WIB",
            groupDate: "Hari Ini",
            type: "beli",
            weight: "+1.4896 gr",
            nominal: "Rp 2.000.000",
            method: "BCA Virtual Account",
            cert: "LBMA-IDN-294029",
            purity: "99.99% (24 Karat)",
            rate: "Rp 1.342.642 / gr",
            status: "Berhasil",
            statusColor: "#03DAC6",
            icon: "add-circle"
        },
        {
            id: "NG-20250312-4109",
            title: "Beli Rutin Otomatis",
            date: "12 Mar 2025, 08:00 WIB",
            groupDate: "12 Maret 2025",
            type: "beli",
            weight: "+0.3725 gr",
            nominal: "Rp 500.000",
            method: "Auto-debit Saldo RDN",
            cert: "LBMA-IDN-293811",
            purity: "99.99% (24 Karat)",
            rate: "Rp 1.342.281 / gr",
            status: "Berhasil",
            statusColor: "#03DAC6",
            icon: "autorenew"
        },
        {
            id: "NG-PHYS-20250312-0041",
            title: "Cetak Fisik Antam 5gr",
            date: "12 Mar 2025, 14:15 WIB",
            groupDate: "12 Maret 2025",
            type: "cetak proses",
            weight: "-5.0000 gr",
            nominal: "Biaya Cetak Rp 180.000",
            method: "Asuransi JNE Diamond Escrow",
            cert: "ANTAM-CERTI-5G-903",
            purity: "99.99% Emas Murni LBMA",
            rate: "Keping Resmi Antam CertiCard",
            status: "Diproses Brankas",
            statusColor: "#fcb858",
            icon: "inventory-2"
        },
        {
            id: "NG-20250228-1092",
            title: "Beli Emas Promo Gajian",
            date: "28 Feb 2025, 19:40 WIB",
            groupDate: "28 Februari 2025",
            type: "beli",
            weight: "+0.7500 gr",
            nominal: "Rp 1.000.000",
            method: "GoPay Instant",
            cert: "LBMA-IDN-281033",
            purity: "99.99% (24 Karat)",
            rate: "Diskon Cashback Rp 25.000",
            status: "Berhasil",
            statusColor: "#03DAC6",
            icon: "local-offer"
        },
        {
            id: "NG-SELL-20250228-0914",
            title: "Jual Emas (Buyback)",
            date: "28 Feb 2025, 10:11 WIB",
            groupDate: "28 Februari 2025",
            type: "jual",
            weight: "-1.0000 gr",
            nominal: "Rp 1.280.000",
            method: "Rekening Bank BCA (***7721)",
            cert: "BURN-TX-08992",
            purity: "99.99% Likuidasi Terjamin",
            rate: "Kurs Pencairan Rp 1.280.000 / gr",
            status: "Selesai Dicairkan",
            statusColor: "#03DAC6",
            icon: "account-balance"
        }
    ];

    const filteredTransactions = transactions.filter((item) => {
        const matchesFilter =
            selectedFilter === 'all' || item.type.includes(selectedFilter);
        const matchesQuery =
            searchQuery === '' ||
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.method.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesQuery;
    });

    const groupedDates = Array.from(new Set(filteredTransactions.map((t) => t.groupDate)));

    const handleOpenDetail = (tx: any) => {
        setSelectedTx(tx);
        setModalVisible(true);
    };

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
                            <Text className="text-base text-white font-bold leading-tight">Transaksi</Text>
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
                <View className="flex flex-col w-full px-4 pb-8 gap-4">

                    <View className="flex items-center justify-between py-1 mb-1 flex-row">
                        <View className="flex items-center gap-1.5 bg-[#161616] px-3 py-1 rounded-full flex-row">
                            <MaterialIcons name="verified-user" size={14} color="#fcb858" />
                            <Text className="text-[10px] text-[#A0A0A0] uppercase tracking-wider font-bold">Tersertifikasi LBMA • Terdaftar Bappebti</Text>
                        </View>
                        <View className="flex items-center gap-1 flex-row">
                            <View className="w-1.5 h-1.5 rounded-full bg-[#03DAC6]" />
                            <Text className="text-[10px] text-[#03DAC6]">Sinkron 14:02 WIB</Text>
                        </View>
                    </View>

                    <View className="relative overflow-hidden rounded-xl bg-gradient-to-br from-[#1E1E1E] via-[#1A1A1A] to-[#121212] p-4 shadow-xl">
                        <View className="absolute -right-10 -top-10 w-44 h-44 rounded-full bg-[#fcb858]/10 blur-3xl pointer-events-none" />
                        <View className="absolute -left-12 -bottom-12 w-36 h-36 rounded-full bg-[#03DAC6]/5 blur-2xl pointer-events-none" />

                        <View className="flex items-center justify-between mb-3 relative z-10 flex-row">
                            <View className="flex items-center gap-2 flex-row">
                                <View className="w-7 h-7 rounded-lg bg-[#2C2C2C] flex items-center justify-center">
                                    <MaterialIcons name="pie-chart" size={16} color="#fcb858" />
                                </View>
                                <Text className="text-xs text-[#A0A0A0]">Akumulasi Bulan Maret 2025</Text>
                            </View>
                            <TouchableOpacity className="flex items-center gap-0.5 flex-row">
                                <Text className="text-xs text-[#fcb858]">Detail Portofolio</Text>
                                <MaterialIcons name="arrow-forward" size={14} color="#fcb858" />
                            </TouchableOpacity>
                        </View>

                        <View className="flex flex-row gap-3 relative z-10 pt-1">
                            <View className="bg-[#121212]/80 rounded-lg p-3 flex-1 flex-col justify-between">
                                <View className="flex items-center justify-between mb-1 flex-row">
                                    <View className="flex items-center gap-1 flex-row">
                                        <MaterialIcons name="south-west" size={12} color="#03DAC6" />
                                        <Text className="text-[10px] text-[#A0A0A0]">Total Beli</Text>
                                    </View>
                                    <Text className="px-1.5 py-0.5 rounded bg-[#03DAC6]/10 text-[#03DAC6] text-[9px] font-bold">+3.3500 gr</Text>
                                </View>
                                <Text className="text-base font-bold text-white leading-tight">Rp 4.500.000</Text>
                                <Text className="text-[10px] text-[#A0A0A0] mt-1">3 Transaksi aktif</Text>
                            </View>

                            <View className="bg-[#121212]/80 rounded-lg p-3 flex-1 flex-col justify-between">
                                <View className="flex items-center justify-between mb-1 flex-row">
                                    <View className="flex items-center gap-1 flex-row">
                                        <MaterialIcons name="north-east" size={12} color="#fcb858" />
                                        <Text className="text-[10px] text-[#A0A0A0]">Total Jual</Text>
                                    </View>
                                    <Text className="px-1.5 py-0.5 rounded bg-[#2C2C2C] text-[#A0A0A0] text-[9px]">0.0000 gr</Text>
                                </View>
                                <Text className="text-base font-bold text-white leading-tight">Rp 0</Text>
                                <Text className="text-[10px] text-[#A0A0A0] mt-1">Emas fisik aman tersimpan</Text>
                            </View>
                        </View>
                    </View>

                    <View className="flex flex-col gap-3">
                        <View className="relative w-full">
                            <View className="absolute inset-y-0 left-0 pl-3 flex items-center justify-center z-10">
                                <MaterialIcons name="search" size={20} color="#A0A0A0" />
                            </View>
                            <TextInput
                                className="w-full h-12 pl-10 pr-10 rounded-xl bg-[#1E1E1E] text-white placeholder:text-[#A0A0A0] text-sm"
                                placeholder="Cari ID transaksi, gram, atau metode..."
                                placeholderTextColor="#A0A0A0"
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                            />
                            {searchQuery.length > 0 && (
                                <TouchableOpacity className="absolute inset-y-0 right-0 pr-3 flex items-center justify-center" onPress={() => setSearchQuery('')}>
                                    <MaterialIcons name="cancel" size={18} color="#A0A0A0" />
                                </TouchableOpacity>
                            )}
                        </View>

                        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ gap: 8 }} className="py-1">
                            {[
                                { id: 'all', label: 'Semua' },
                                { id: 'beli', label: 'Beli Emas' },
                                { id: 'jual', label: 'Jual Emas' },
                                { id: 'cetak', label: 'Cetak Fisik' },
                                { id: 'proses', label: 'Menunggu' }
                            ].map((chip) => (
                                <TouchableOpacity
                                    key={chip.id}
                                    onPress={() => setSelectedFilter(chip.id)}
                                    className={`px-4 py-1.5 rounded-full ${selectedFilter === chip.id ? 'bg-[#fcb858]' : 'bg-[#1E1E1E]'}`}
                                >
                                    <Text className={`text-xs font-semibold ${selectedFilter === chip.id ? 'text-[#121212]' : 'text-[#A0A0A0]'}`}>
                                        {chip.label}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </ScrollView>
                    </View>

                    {groupedDates.length === 0 ? (
                        <View className="flex flex-col items-center justify-center py-8 text-center px-4 bg-[#1E1E1E] rounded-2xl">
                            <View className="w-16 h-16 rounded-full bg-[#2C2C2C] flex items-center justify-center text-[#A0A0A0] mb-3">
                                <MaterialIcons name="inventory" size={32} color="#A0A0A0" />
                            </View>
                            <Text className="text-base text-white font-semibold mb-1">Transaksi Tidak Ditemukan</Text>
                            <Text className="text-xs text-[#A0A0A0] text-center mb-4">Coba periksa kembali kata kunci pencarian atau ganti filter kategori Anda.</Text>
                            <TouchableOpacity
                                className="px-4 py-2 rounded-full bg-[#fcb858]"
                                onPress={() => { setSearchQuery(''); setSelectedFilter('all'); }}
                            >
                                <Text className="text-xs text-[#121212] font-bold">Atur Ulang Filter</Text>
                            </TouchableOpacity>
                        </View>
                    ) : (
                        groupedDates.map((gDate) => (
                            <View key={gDate} className="flex flex-col gap-2">
                                <View className="flex items-center justify-between px-1 py-1 flex-row">
                                    <Text className="text-xs text-[#fcb858] uppercase tracking-wider font-semibold">{gDate}</Text>
                                </View>

                                {filteredTransactions
                                    .filter((t) => t.groupDate === gDate)
                                    .map((item) => (
                                        <TouchableOpacity
                                            key={item.id}
                                            activeOpacity={0.8}
                                            onPress={() => handleOpenDetail(item)}
                                            className="bg-[#1E1E1E] rounded-xl p-4 shadow-sm relative overflow-hidden"
                                        >
                                            {item.type.includes('proses') && (
                                                <View className="absolute left-0 top-0 bottom-0 w-1 bg-[#fcb858]" />
                                            )}
                                            <View className="flex items-start justify-between gap-2 flex-row">
                                                <View className="flex items-center gap-3 min-w-0 flex-row">
                                                    <View className="w-10 h-10 rounded-xl bg-[#2C2C2C] flex items-center justify-center shrink-0">
                                                        <MaterialIcons name={item.icon as any} size={20} color={item.statusColor} />
                                                    </View>
                                                    <View className="flex flex-col min-w-0">
                                                        <Text className="text-sm font-semibold text-white truncate">{item.title}</Text>
                                                        <Text className="text-xs text-[#A0A0A0] truncate">{item.method}</Text>
                                                    </View>
                                                </View>
                                                <View className="flex flex-col items-end shrink-0">
                                                    <Text className="text-xs font-bold" style={{ color: item.weight.startsWith('+') ? '#03DAC6' : item.type.includes('jual') ? '#CF6679' : '#fcb858' }}>
                                                        {item.weight}
                                                    </Text>
                                                    <Text className="text-xs text-white mt-0.5">{item.nominal}</Text>
                                                </View>
                                            </View>

                                            <View className="mt-3 pt-2 flex items-center justify-between flex-row border-t border-[#2C2C2C]">
                                                <View className="flex items-center gap-1.5 flex-row">
                                                    <View className="w-2 h-2 rounded-full" style={{ backgroundColor: item.statusColor }} />
                                                    <Text className="text-xs font-bold" style={{ color: item.statusColor }}>{item.status}</Text>
                                                    <Text className="text-[#A0A0A0] text-xs">•</Text>
                                                    <Text className="text-xs text-[#A0A0A0]">{item.date.split(', ')[1]}</Text>
                                                </View>
                                                <View className="flex items-center gap-0.5 flex-row">
                                                    <Text className="text-xs text-[#fcb858]">Detail</Text>
                                                    <MaterialIcons name="chevron-right" size={14} color="#fcb858" />
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                            </View>
                        ))
                    )}

                    <View className="mt-4 rounded-xl bg-[#1E1E1E] p-4 flex items-center gap-3 flex-row">
                        <View className="w-12 h-12 rounded-xl bg-[#fcb858]/10 flex items-center justify-center shrink-0">
                            <MaterialIcons name="lock" size={26} color="#fcb858" />
                        </View>
                        <View className="flex flex-col min-w-0">
                            <Text className="text-xs text-white font-semibold">Kustodian Brankas 100% Fisik</Text>
                            <Text className="text-[11px] text-[#A0A0A0]">Setiap gram digital diasuransikan penuh di konsorsium brankas Antam &amp; ICX.</Text>
                        </View>
                    </View>

                </View>
            </ScrollView>

            <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
                <View className="flex-1 bg-black/75 justify-end">
                    <View className="w-full bg-[#1E1E1E] rounded-t-3xl p-5 max-h-[90%] flex flex-col gap-4">
                        <View className="items-center gap-2">
                            <View className="w-12 h-1.5 rounded-full bg-[#2C2C2C]" />
                            <View className="w-full flex items-center justify-between flex-row pt-1">
                                <View className="flex items-center gap-2 flex-row">
                                    <MaterialIcons name="verified" size={24} color="#fcb858" />
                                    <Text className="text-base text-white font-semibold">Faktur Transaksi Emas</Text>
                                </View>
                                <TouchableOpacity className="w-8 h-8 rounded-full bg-[#2C2C2C] flex items-center justify-center" onPress={() => setModalVisible(false)}>
                                    <MaterialIcons name="close" size={20} color="#A0A0A0" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        {selectedTx && (
                            <>
                                <View className="rounded-2xl bg-[#161616] p-4 flex flex-col items-center text-center">
                                    <View className="w-14 h-14 rounded-2xl bg-[#fcb858]/20 flex items-center justify-center mb-2">
                                        <MaterialIcons name="workspace-premium" size={32} color="#fcb858" />
                                    </View>
                                    <Text className="text-base font-semibold text-white mb-0.5">{selectedTx.title}</Text>
                                    <Text className="text-xs text-[#A0A0A0] mb-3">{selectedTx.date}</Text>

                                    <View className="px-3 py-1 rounded-full bg-[#03DAC6]/15 flex items-center gap-1.5 mb-3 flex-row">
                                        <View className="w-1.5 h-1.5 rounded-full bg-[#03DAC6]" />
                                        <Text className="text-xs text-[#03DAC6] font-bold">{selectedTx.status}</Text>
                                    </View>

                                    <View className="w-full py-3 bg-[#1E1E1E] rounded-xl flex items-center justify-around flex-row">
                                        <View className="items-center">
                                            <Text className="text-[10px] text-[#A0A0A0] uppercase">Gramatur</Text>
                                            <Text className="text-base font-bold text-[#fcb858]">{selectedTx.weight}</Text>
                                        </View>
                                        <View className="w-px h-8 bg-[#2C2C2C]" />
                                        <View className="items-center">
                                            <Text className="text-[10px] text-[#A0A0A0] uppercase">Total Nilai</Text>
                                            <Text className="text-base font-bold text-white">{selectedTx.nominal}</Text>
                                        </View>
                                    </View>
                                </View>

                                <View className="flex flex-col gap-2 bg-[#161616] rounded-xl p-4">
                                    <View className="flex justify-between items-center py-1 flex-row">
                                        <Text className="text-xs text-[#A0A0A0]">Nomor Referensi (TxID)</Text>
                                        <Text className="text-xs text-[#fcb858] font-mono">{selectedTx.id}</Text>
                                    </View>
                                    <View className="flex justify-between items-center py-1 flex-row">
                                        <Text className="text-xs text-[#A0A0A0]">Metode Pembayaran</Text>
                                        <Text className="text-xs text-white">{selectedTx.method}</Text>
                                    </View>
                                    <View className="flex justify-between items-center py-1 flex-row">
                                        <Text className="text-xs text-[#A0A0A0]">Sertifikat Alokasi</Text>
                                        <Text className="text-xs text-white">{selectedTx.cert}</Text>
                                    </View>
                                    <View className="flex justify-between items-center py-1 flex-row">
                                        <Text className="text-xs text-[#A0A0A0]">Tingkat Kemurnian</Text>
                                        <Text className="text-xs text-[#03DAC6]">{selectedTx.purity}</Text>
                                    </View>
                                    <View className="flex justify-between items-center py-1 flex-row">
                                        <Text className="text-xs text-[#A0A0A0]">Keterangan / Rate</Text>
                                        <Text className="text-xs text-[#A0A0A0]">{selectedTx.rate}</Text>
                                    </View>
                                </View>

                                <View className="flex flex-col gap-2 pt-1">
                                    <TouchableOpacity
                                        className="w-full h-12 rounded-xl bg-[#fcb858] flex items-center justify-center gap-2 flex-row"
                                        onPress={() => alert('Unduh e-Sertifikat (.PDF) sedang diproses')}
                                    >
                                        <MaterialIcons name="download" size={20} color="#121212" />
                                        <Text className="text-xs text-[#121212] font-bold">Unduh Bukti e-Sertifikat (.PDF)</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        className="w-full h-11 rounded-xl bg-[#2C2C2C] flex items-center justify-center gap-2 flex-row"
                                        onPress={() => alert('Menghubungkan ke Pusat Bantuan...')}
                                    >
                                        <MaterialIcons name="support-agent" size={18} color="#A0A0A0" />
                                        <Text className="text-xs text-[#A0A0A0]">Butuh Bantuan Transaksi Ini?</Text>
                                    </TouchableOpacity>
                                </View>
                            </>
                        )}
                    </View>
                </View>
            </Modal>

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