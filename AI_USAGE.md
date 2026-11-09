# AI Usage

## Tools used

- **Stitch** — UI/UX design generation and visual prototyping of the mobile app layout.
- **Gemini** — code translation and adaptation from HTML/CSS layouts into React Native Tailwind CSS (NativeWind) components.
- **GitHub Copilot** — project dependency management, environment troubleshooting, and upgrading Expo SDK to version 58.

## Component authorship

| Component / Task | Author |
|------------------|--------|
| Prototyping & initial screen design (Stitch) | AI |
| HTML-to-Tailwind CSS (NativeWind) component translation (Gemini) | Both |
| Expo SDK 58 upgrade & configuration setup (GitHub Copilot) | AI |
| Manual text color adjustments (`#fcb858`, `#03DAC6`, `#A0A0A0`, `#121212`) | Human |
| Icon integration & replacement (`@expo/vector-icons`) | Human |
| Touch handling & navigation links (`TouchableOpacity`, `expo-router`) | Human |
| Project structure, file routing, and business logic orchestration | Human |
| Documentation (`README.md`, `AI_USAGE.md`) | Both |

## Example prompts & interactions

### 1. Stitch (Design & Prototype)
> *"buat login page dan halaman pertama aplikasi investasi emas"*

**Output:** Berikut adalah desain Halaman Login dan Halaman Pertama (Beranda / Dashboard) untuk aplikasi mobile investasi emas Nusantara Gold:

1. Halaman Login (Masuk - Nusantara Gold)
Branding & Trust Indicator: Logo emas monokromatik mewah, live ticker harga emas Antam terkini di bilah atas, serta badge legalitas resmi Bappebti, OJK, dan KBI untuk membangun kepercayaan instan.
Formulir Masuk Sleek: Tab switch (Masuk Akun / Aktivasi Vault), input nomor HP/email KYC, password/PIN keamanan dengan toggle intip, serta opsi "Simpan perangkat tepercaya".
Aksi Cepat & Alternatif: Tombol CTA utama berwarna gradasi emas bercahaya, shortcut login biometrik (Face ID / Fingerprint), opsi Single Sign-On (Google & Apple ID), dan ajakan pendaftaran dengan welcome bonus 0.05 gram.
2. Halaman Pertama / Beranda (Beranda Investasi Emas)
Kartu Portofolio Saldo Emas: Menampilkan total gramasi emas murni (48.7500 gr) dan konversi rupiah terkini (Rp 63.862.500) lengkap dengan pertumbuhan laba (+7.08%).
Aksi Cepat (Quick Actions): 4 tombol shortcut utama: Beli, Jual, Transfer, dan Cetak Emas Fisik (Antam/UBS).
Live Market Chart: Ticker harga Beli dan Jual (Buyback) per gram secara real-time, dilengkapi grafik tren interaktif (24 Jam, 1 Minggu, 1 Bulan, 1 Tahun).
Fitur Cerdas & Keamanan: Card Rencana Emas Otomatis (Auto-Invest), promo cashback, jaminan 100% brankas fisik resmi, serta riwayat transaksi terbaru.
Navigasi Konsisten: Bottom navigation bar terintegrasi dengan tombol aksi Beli Emas yang menonjol di tengah.


### 2. Gemini (HTML to NativeWind Translation)
> *"translasi ke tailwind.css: <body class=..."*

**Output:** Clean JSX structure for `src/app/beli-emas.tsx` and chart paths in `src/app/pasar.tsx` converted into `react-native-svg` elements.

### 3. GitHub Copilot (Expo 58 Upgrade)
> *"can you fix the warn in terminal"*

**Output:** Resolution of dependency mismatches in `package.json`, updating entry configurations, and setting `darkMode: 'class'` in Tailwind config.

## Human Refinements & Modifications

1. **Color Palette Fine-Tuning:** Manually adjusted text and background color classes across all screens (`index.tsx`, `pasar.tsx`, `beli-emas.tsx`, `transaksi.tsx`, `portofolio.tsx`) to guarantee consistent gold branding (`#fcb858`), cyan indicators (`#03DAC6`), and readable muted gray typography (`#A0A0A0`).
2. **Icon & Action Setup:** Individually selected and configured vector icons from `@expo/vector-icons` (`MaterialIcons`, `MaterialCommunityIcons`, `Feather`) for header notifications, navigation tabs, action buttons, and modal dialogs.
3. **Interactive & Touch Behavior:** Enhanced `TouchableOpacity` touch feedback, added dynamic state toggles (e.g., auto-invest switch and visibility toggles), and replaced static navigation paths with `router.replace(...)` for smooth bottom bar transitions.
4. **Code Cleanup:** Removed explanatory code comments across all production screen files to maintain a clean codebase.

## Proof of AI Assistance (Screenshots / Workspace Log)

Below is a summary of the AI generation history across stages:

```text
+-------------------------------------------------------------------------+
| [STAGE 1: STITCH]                                                       |
| Prompt -> High-fidelity dark mode mobile mockup generation               |
| Result -> Visual layout blueprint & UI asset placement                  |
+-------------------------------------------------------------------------+
                                   |
                                   v
+-------------------------------------------------------------------------+
| [STAGE 2: GEMINI]                                                       |
| Prompt -> HTML/CSS layout code translation to Expo React Native JSX      |
| Result -> Single-file screens (index, pasar, beli-emas, transaksi, etc.)|
+-------------------------------------------------------------------------+
                                   |
                                   v
+-------------------------------------------------------------------------+
| [STAGE 3: COPILOT]                                                      |
| Prompt -> Fix Expo SDK 58 compatibility & NativeWind v4 flags           |
| Result -> Clean package resolution & error-free build setup             |
+-------------------------------------------------------------------------+
                                   |
                                   v
+-------------------------------------------------------------------------+
| [STAGE 4: HUMAN MANUAL EDITS]                                           |
| Action -> Icon bindings, custom hex colors, route wiring, clean code     |
| Result -> Final production-ready Nusantara Gold mobile application      |
+-------------------------------------------------------------------------+
```