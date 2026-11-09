React Native merupakan framework open-source yang dikembangkan oleh Meta untuk membangun aplikasi mobile Android dan iOS menggunakan JavaScript dan React. Dengan framework ini, pengembang dapat membuat aplikasi untuk dua platform sekaligus tanpa harus menulis seluruh kode secara terpisah. Sebagian besar kode dapat digunakan bersama sehingga proses pengembangan menjadi lebih efisien.
React Native menggunakan komponen native untuk menampilkan antarmuka aplikasi. Komponen seperti tombol, teks, dan tampilan lainnya akan disesuaikan dengan elemen bawaan sistem operasi Android maupun iOS. Pendekatan ini membuat aplikasi terasa lebih responsif dan memberikan pengalaman penggunaan yang mendekati aplikasi native.

Keunggulan Utama untuk Aplikasi Hybrid

Performa Tinggi Berbasis Komponen Native: Berbeda dengan aplikasi hibrida tradisional yang berjalan di dalam kontainer browser, React Native merender elemen UI menggunakan komponen asli (seperti UIView di iOS atau android.view.ViewGroup di Android), menghasilkan animasi yang mulus dan waktu respons sentuh yang sangat cepat.

Efisiensi Pengembangan Lintas Platform (Code Sharing): Pengembang dapat menggunakan satu basis kode (single codebase) untuk platform Android dan iOS sekaligus. Hal ini memangkas waktu pengembangan hingga dua kali lipat dan mempermudah pemeliharaan pembaruan fitur di masa mendatang.

Ekosistem dan Integrasi Tailwind CSS: Melalui pustaka utilitas seperti NativeWind, pengembang dapat mendesain antarmuka menggunakan kelas-kelas Tailwind CSS yang familier secara langsung pada elemen React Native, mempercepat proses penataan gaya (styling) dengan konsistensi visual yang tinggi.

Konsep Inti: Komponen, Props, State, dan Navigasi
Dalam membangun aplikasi, pemahaman terhadap empat pilar utama React Native sangat krusial:

Komponen: Blok bangunan modular yang membentuk antarmuka pengguna, dapat berupa komponen dasar (seperti View, Text, TouchableOpacity) maupun komponen kustom.

Props: Argumen atau data read-only yang diteruskan dari komponen induk ke komponen anak untuk mengatur perilaku atau tampilan dinamis.

State: Data internal yang dikelola di dalam komponen yang dapat berubah seiring waktu (misalnya status input formulir atau tombol toggle), di mana perubahan state akan memicu render ulang komponen (re-render).

Navigasi: Sistem yang mengatur perpindahan halaman atau layar (seperti expo-router), memungkinkan pengguna berpindah dari halaman Beranda ke halaman Beli Emas dengan mulus.

contoh kode: 
import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface GoldCardProps {
    gram: number;
    price: string;
}

export default function GoldInvestmentCard({ gram, price }: GoldCardProps) {
    // State untuk melacak status simpanan (apakah di-bookmark atau tidak)
    const [isBookmarked, setIsBookmarked] = useState(false);

    return (
        <View className="w-full bg-[#1E1E1E] rounded-xl p-4 shadow-lg border border-[#2C2C2C]">
            {/* Bagian Header Kartu */}
            <View className="flex-row items-center justify-between mb-3">
                <View className="flex-row items-center gap-2">
                    <MaterialIcons name="workspace-premium" size={20} color="#fcb858" />
                    <Text className="text-xs font-bold text-[#A0A0A0] uppercase tracking-wider">
                        Emas Batangan 24K
                    </Text>
                </View>
                
                {/* Tombol Interaktif menggunakan State */}
                <TouchableOpacity 
                    onPress={() => setIsBookmarked(!isBookmarked)}
                    className="w-8 h-8 rounded-full bg-[#2C2C2C] items-center justify-center"
                    activeOpacity={0.8}
                >
                    <MaterialIcons 
                        name={isBookmarked ? "bookmark" : "bookmark-outline"} 
                        size={18} 
                        color="#fcb858" 
                    />
                </TouchableOpacity>
            </View>

            {/* Bagian Konten & Props */}
            <View className="flex-row items-baseline justify-between mt-1">
                <View>
                    <Text className="text-2xl font-bold text-white tracking-tight">
                        {gram} <Text className="text-sm font-normal text-[#A0A0A0]">gram</Text>
                    </Text>
                    <Text className="text-xs text-[#03DAC6] mt-0.5">Sertifikat LBMA Resmi 99.99%</Text>
                </View>

                <View className="items-end">
                    <Text className="text-base font-bold text-[#fcb858]">{price}</Text>
                    <Text className="text-[10px] text-[#A0A0A0]">Estimasi Nilai Pasar</Text>
                </View>
            </View>
        </View>
    );
}

1. Masalah
Masyarakat Indonesia yang ingin berinvestasi emas sering kali menghadapi berbagai kendala struktural, di antaranya:

Aksesibilitas dan Batas Minimal Pembelian yang Tinggi: Pembelian emas fisik batangan konvensional membutuhkan modal awal yang besar dan penyimpanan fisik yang berisiko terhadap keamanan pribadi.

Kurangnya Likuiditas & Transparansi Harga: Banyak platform investasi konvensional mengenakan biaya tersembunyi, memiliki selisih harga jual-beli (spread) yang tinggi, serta proses buyback (jual kembali) yang lambat dan rumit.

Minimnya Edukasi & Pemantauan Pasar Real-Time: Investor pemula kesulitan memantau pergerakan harga spot emas dunia secara akurat, memahami sentimen pasar, atau mencocokkan portofolio mereka dengan laju inflasi nasional.

2. Target Pengguna
Investor Pemula (Gen Z & Milenial): Pengguna muda yang ingin memulai investasi emas secara berkala dengan modal terjangkau (mulai dari nominal kecil) dan antarmuka aplikasi yang modern.

Pekerja Profesional / Kelas Menengah: Pengguna yang membutuhkan fitur nabung rutin otomatis (auto-invest), diversifikasi aset, serta pencetakan fisik kepingan emas Antam bersertifikat LBMA secara aman.

Pengguna Berorientasi Target Finansial: Individu yang ingin merencanakan keuangan jangka panjang seperti Tabungan Haji atau Dana Darurat berbasis gramatur emas.

3. Minimal 5 Kebutuhan Pengguna
Pemantauan Harga Spot Live: Pengguna dapat melihat pergerakan harga beli dan jual emas 24K secara real-time beserta grafik tren historis.

Kalkulator & Transaksi Pembelian Instan: Pengguna dapat menghitung konversi Rupiah ke gramatur emas secara akurat dan melakukan pembelian dengan berbagai metode pembayaran.

Riwayat & Faktur Transaksi Terverifikasi: Pengguna dapat melacak status transaksi, melihat rincian biaya, serta mengunduh bukti e-sertifikat digital (.PDF).

Manajemen Portofolio & Kinerja: Pengguna dapat melihat total kepemilikan gramatur, analisis keuntungan bersih (P&L), perbandingan inflasi, serta alokasi brankas fisik.

Fitur Nabung Rutin & Target Keuangan: Pengguna dapat mengatur fitur debit otomatis berkala dan menetapkan target finansial berbasis emas (misalnya Tabungan Haji).

4. Tabel Pemetaan Kebutuhan ke Layar dan Komponen
========================================================================================================================
TABEL PEMETAAN KEBUTUHAN KE LAYAR DAN KOMPONEN
========================================================================================================================

Kebutuhan Pengguna                Layar Tujuan (Screen)       Komponen Utama
------------------------------------------------------------------------------------------------------------------------
Pemantauan Harga Spot Live        index.tsx & pasar.tsx       ScrollView, Svg (Grafik Tren), TouchableOpacity

Kalkulator & Transaksi Pembelian  beli-emas.tsx               TextInput, TouchableOpacity (Preset Tombol), 
                                                              Switch Auto-Invest

Riwayat & Faktur Transaksi        transaksi.tsx               TextInput (Pencarian), ScrollView, 
                                                              Modal (Detail Faktur)

Manajemen Portofolio & Kinerja    portofolio.tsx              ScrollView, Svg (Grafik Alpha vs Inflasi), 
                                                              Bar Alokasi Vault

Nabung Rutin & Otomasi            beli-emas.tsx &             Tombol Toggle Aktif/Nonaktif, 
                                  portofolio.tsx              Kartu Target Finansial
========================================================================================================================
5. Alasan Keputusan Desain
Estetika Glassmorphism & Mode Gelap (Dark Mode): Menggunakan palet warna dasar gelap (#121212, #1E1E1E) dipadukan dengan aksen emas (#fcb858) dan pirus (cyan #03DAC6). Desain ini memberikan kesan eksklusif, mewah, serta nyaman di mata untuk aplikasi fintech jangka panjang.

Navigasi Bawah (Bottom Navigation Bar) Melayang: Menggunakan tombol aksi utama (floating action button) di tengah untuk menu "Beli Emas". Desain ini meniru pola UX aplikasi finansial modern terkemuka agar akses transaksi utama dapat dijangkau jempol dengan cepat.

Arsitektur expo-router: Dipilih karena mendukung navigasi berbasis berkas (file-based routing) yang bersih, mempermudah manajemen rute hierarkis, serta memastikan performa transisi halaman yang optimal di Android dan iOS.

Integrasi NativeWind (Tailwind CSS v4): Memungkinkan penerapan utility-classes secara cepat dan konsisten tanpa mengorbankan performa render native dari React Native.

6. Rencana Pengembangan
Fase 1 (MVP & Integrasi UI Dasar): Menyelesaikan seluruh layar utama (Beranda, Pasar, Beli Emas, Transaksi, Portofolio) dengan data tiruan (mock data) yang stabil.

Fase 2 (Integrasi API Perbankan & Gateway Pembayaran): Menghubungkan sistem ke Virtual Account bank mitra (BCA, Mandiri, BRI) serta dompet digital (GoPay, OVO).

Fase 3 (Sistem Kustodian Brankas & Logistik Fisik): Integrasi langsung dengan API konsorsium KBI dan ekspedisi pengiriman logistik emas fisik (secure courier).

Fase 4 (Fitur Sosial & Edukasi Finansial): Menambahkan modul artikel analisis pasar mendalam, fitur hadiah emas (gold gifting), serta gamifikasi target investasi pengguna.