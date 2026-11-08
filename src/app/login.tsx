import { Feather } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
    // Navigate to index.tsx (Dashboard)
    router.replace('/');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        <View style={styles.ambientContainer}>
          <View style={[styles.glowOrb, styles.glowOrbPrimary]} />
          <View style={[styles.glowOrb, styles.glowOrbSecondary]} />
        </View>

        <View style={styles.headerContainer}>
          <View style={styles.emblemWrapper}>
            <View style={styles.emblemGlow} />
            <View style={styles.emblemBox}>
              <Image
                source={require('../../assets/images/icon.png')}
                style={styles.emblemImage}
                resizeMode="contain"
              />
            </View>
          </View>

          <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>✔ ASET DIGITAL BERSERTIFIKASI</Text>
          </View>

          <Text style={styles.headline}>
            Selamat Datang di <Text style={styles.gradientText}>Nusantara Gold</Text>
          </Text>
          <Text style={styles.subheadline}>
            Investasi emas murni 24K aman, tepercaya, dan diawasi resmi Bappebti &amp; OJK.
          </Text>
        </View>

        <View style={styles.cardContainer}>
          
          <View style={styles.tabWrapper}>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'login' && styles.tabButtonActive]}
              onPress={() => setActiveTab('login')}
            >
              <Text style={[styles.tabText, activeTab === 'login' && styles.tabTextActive]}>
                Masuk Akun
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'signup' && styles.tabButtonActive]}
              onPress={() => setActiveTab('signup')}
            >
              <Text style={[styles.tabText, activeTab === 'signup' && styles.tabTextActive]}>
                Daftar Akun
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.formGroup}>
            
            <View style={styles.inputContainer}>
              <View style={styles.labelRow}>
                <Text style={styles.labelText}>
                  {activeTab === 'login' ? 'Nomor HP atau Email Terdaftar' : 'Nomor HP atau Email Baru'}
                </Text>
                <Text style={styles.labelSubText}>
                  {activeTab === 'login' ? 'Terverifikasi KYC' : 'Mulai Pendaftaran'}
                </Text>
              </View>
              <View style={styles.textInputWrapper}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Contoh: 08123456789 / investor@mail.com"
                  placeholderTextColor="#94A3B8"
                  value={identifier}
                  onChangeText={setIdentifier}
                  autoCapitalize="none"
                />
              </View>
            </View>

            <View style={styles.inputContainer}>
              <View style={styles.labelRow}>
                <Text style={styles.labelText}>
                  {activeTab === 'login' ? 'Kata Sandi / PIN Keamanan' : 'Buat Kata Sandi / PIN'}
                </Text>
                {activeTab === 'login' && (
                  <TouchableOpacity>
                    <Text style={styles.linkText}>Lupa Kata Sandi?</Text>
                  </TouchableOpacity>
                )}
              </View>
              <View style={styles.textInputWrapper}>
                <TextInput
                  style={[styles.textInput, { paddingRight: 45 }]}
                  placeholder={activeTab === 'login' ? 'Masukkan 6-digit PIN atau Sandi' : 'Minimal 6 karakter'}
                  placeholderTextColor="#94A3B8"
                  secureTextEntry={!showPassword}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity
                  style={styles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Text style={{ fontSize: 14 }}>{showPassword ? <View style={styles.eyeIconContainer}>
                  <Feather name="eye-off" size={16} color="#A0A0A0" /></View> : <View style={styles.eyeIconContainer}>
                  <Feather name="eye" size={16} color="#A0A0A0" /></View>}</Text>
                </TouchableOpacity>
              </View>
            </View>

            {activeTab === 'login' ? (
              <TouchableOpacity
                style={styles.checkboxRow}
                activeOpacity={0.8}
                onPress={() => setRememberDevice(!rememberDevice)}
              >
                <View style={[styles.checkbox, rememberDevice && styles.checkboxChecked]}>
                  {rememberDevice && <Text style={{ color: '#FFF', fontSize: 10 }}>✓</Text>}
                </View>
                <Text style={styles.checkboxLabel}>Simpan perangkat tepercaya untuk transaksi cepat</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.checkboxRow}>
                <View style={[styles.checkbox, styles.checkboxChecked]}>
                  <Text style={{ color: '#FFF', fontSize: 10 }}>✓</Text>
                </View>
                <Text style={styles.checkboxLabel}>Saya menyetujui Syarat & Ketentuan serta Kebijakan Privasi</Text>
              </View>
            )}

            <TouchableOpacity 
              style={styles.primaryButton} 
              activeOpacity={0.9}
              onPress={handleLogin}
            >
              <Text style={styles.primaryButtonText}>
                {activeTab === 'login' ? 'Masuk ke Akun' : 'Buat Akun Baru'}
              </Text>
            </TouchableOpacity>

            {activeTab === 'login' && (
              <TouchableOpacity
                style={styles.biometricButton}
                activeOpacity={0.9}
                onPress={handleBiometricPress}
              >
                <Text style={styles.biometricIcon}>🪪</Text>
                <Text style={styles.biometricText}>
                  {biometricState === 'loading'
                    ? 'Memverifikasi Biometrik...'
                    : biometricState === 'success'
                    ? 'Autentikasi Berhasil!'
                    : 'Masuk Cepat dengan Biometrik'}
                </Text>
                <View style={styles.biometricBadge}>
                  <Text style={styles.biometricBadgeText}>Face ID</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>

          <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>
              {activeTab === 'login' ? 'atau masuk dengan' : 'atau daftar dengan'}
            </Text>
          </View>

          <View style={styles.socialGrid}>
            <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
              <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton} activeOpacity={0.8}>
              <Text style={styles.socialButtonText}>Apple ID</Text>
            </TouchableOpacity>
          </View>

          {activeTab === 'login' && (
            <View style={styles.pitchContainer}>
              <View style={styles.pitchContent}>
                <View>
                  <Text style={styles.pitchTitle}>Belum punya akun emas?</Text>
                  <Text style={styles.pitchSubtitle}>Bonus pendaftaran 0.05 gr</Text>
                </View>
                <TouchableOpacity style={styles.pitchButton} onPress={() => setActiveTab('signup')}>
                  <Text style={styles.pitchButtonText}>Daftar</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}

        </View>

        <View style={styles.footerContainer}>
          <View style={styles.footerLinksRow}>
            <TouchableOpacity><Text style={styles.footerLinkText}>Pusat Bantuan</Text></TouchableOpacity>
            <Text style={styles.footerDot}>•</Text>
            <TouchableOpacity><Text style={styles.footerLinkText}>Syarat &amp; Ketentuan</Text></TouchableOpacity>
            <Text style={styles.footerDot}>•</Text>
            <TouchableOpacity><Text style={styles.footerLinkText}>Kebijakan Privasi</Text></TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0F172A',
  },
  container: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    position: 'relative',
    alignItems: 'center',
  },
  ambientContainer: {
    position: 'absolute',
    width: '100%',
    height: 300,
    overflow: 'hidden',
    alignItems: 'center',
  },
  glowOrb: {
    position: 'absolute',
    borderRadius: 999,
  },
  glowOrbPrimary: {
    top: -40,
    width: 250,
    height: 250,
    backgroundColor: 'rgba(245, 158, 11, 0.15)',
  },
  glowOrbSecondary: {
    top: 100,
    right: 10,
    width: 140,
    height: 140,
    backgroundColor: 'rgba(217, 119, 6, 0.1)',
  },
  headerContainer: {
    alignItems: 'center',
    textAlign: 'center',
    marginVertical: 24,
    zIndex: 10,
  },
  emblemWrapper: {
    marginBottom: 16,
  },
  emblemGlow: {
    position: 'absolute',
    top: -4,
    bottom: -4,
    left: -4,
    right: -4,
    borderRadius: 16,
    backgroundColor: 'rgba(245, 158, 11, 0.3)',
  },
  emblemBox: {
    width: 80,
    height: 80,
    borderRadius: 16,
    backgroundColor: '#1E293B',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.3)',
  },
  emblemImage: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
  },
  badgeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E293B',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 999,
    marginBottom: 10,
  },
  badgeText: {
    color: '#F59E0B',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  headline: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#F8FAFC',
    textAlign: 'center',
    marginBottom: 8,
  },
  gradientText: {
    color: '#FBBF24',
  },
  subheadline: {
    fontSize: 14,
    color: '#94A3B8',
    textAlign: 'center',
    maxWidth: 280,
    lineHeight: 20,
  },
  cardContainer: {
    width: '100%',
    backgroundColor: 'rgba(30, 41, 59, 0.9)',
    borderRadius: 20,
    padding: 16,
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.4)',
    zIndex: 10,
  },
  tabWrapper: {
    flexDirection: 'row',
    backgroundColor: 'rgba(15, 23, 42, 0.8)',
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    borderRadius: 10,
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: '#334155',
  },
  tabText: {
    fontSize: 13,
    color: '#94A3B8',
    fontWeight: '500',
  },
  tabTextActive: {
    color: '#F8FAFC',
    fontWeight: '600',
  },
  formGroup: {
    gap: 16,
  },
  inputContainer: {
    gap: 6,
  },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  labelText: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '500',
  },
  labelSubText: {
    fontSize: 11,
    color: '#FBBF24',
  },
  linkText: {
    fontSize: 12,
    color: '#FBBF24',
    fontWeight: '600',
  },
  textInputWrapper: {
    position: 'relative',
    justifyContent: 'center',
  },
  textInput: {
    backgroundColor: '#0F172A',
    color: '#F8FAFC',
    fontSize: 14,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
  },
  eyeButton: {
    position: 'absolute',
    right: 16,
    padding: 4,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginVertical: 4,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#334155',
  },
  checkboxChecked: {
    backgroundColor: '#D97706',
    borderColor: '#D97706',
  },
  checkboxLabel: {
    fontSize: 12,
    color: '#94A3B8',
    flex: 1,
  },
  primaryButton: {
    backgroundColor: '#D97706',
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 4,
  },
  primaryButtonText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },
  biometricButton: {
    flexDirection: 'row',
    backgroundColor: '#334155',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  biometricIcon: {
    fontSize: 16,
  },
  biometricText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 13,
    color: '#F8FAFC',
    fontWeight: '600',
  },
  biometricBadge: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 999,
  },
  biometricBadgeText: {
    fontSize: 10,
    color: '#FBBF24',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 16,
  },
  dividerLine: {
    position: 'absolute',
    width: '100%',
    height: 1,
    backgroundColor: '#334155',
  },
  dividerText: {
    backgroundColor: '#1E293B',
    paddingHorizontal: 8,
    fontSize: 11,
    color: '#A0A0A0',
    textTransform: 'uppercase',
  },
  socialGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  socialButton: {
    flex: 1,
    backgroundColor: '#0F172A',
    paddingVertical: 10,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialButtonText: {
    color: '#F8FAFC',
    fontSize: 13,
    fontWeight: '600',
  },
  pitchContainer: {
    marginTop: 12,
  },
  pitchContent: {
    flexDirection: 'row',
    backgroundColor: '#0F172A',
    borderRadius: 12,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  pitchTitle: {
    fontSize: 13,
    color: '#F8FAFC',
    fontWeight: '600',
  },
  pitchSubtitle: {
    fontSize: 11,
    color: '#D97706',
    fontWeight: '500',
  },
  pitchButton: {
    backgroundColor: '#FBBF24',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
  },
  pitchButtonText: {
    color: '#0F172A',
    fontSize: 12,
    fontWeight: 'bold',
  },
  footerContainer: {
    marginTop: 24,
    alignItems: 'center',
  },
  footerLinksRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  footerLinkText: {
    fontSize: 12,
    color: '#94A3B8',
  },
  footerDot: {
    color: '#94A3B8',
  },
  eyeIconContainer: {
    padding: 4,
  },
});