import { Feather, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Svg, { Circle, Defs, LinearGradient, Path, Stop } from 'react-native-svg';

export default function Index() {
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
    <ScrollView style={styles.mainContainer} contentContainerStyle={styles.scrollContent}>
      <View style={styles.contentWrapper}>
        
        <View style={styles.headerSection}>
          <View style={styles.greetingRow}>
            <View style={styles.textGroup}>
              <View style={styles.timeRow}>
                <Text style={styles.timeText}>Waktu Indonesia Barat • 09:41</Text>
                <View style={styles.liveDot} />
              </View>
              <View style={styles.nameRow}>
                <Text style={styles.nameText}>Selamat Pagi, Rania Putri</Text>
                <Text style={styles.sparkleEmoji}>✨</Text>
              </View>
            </View>
            <View style={styles.priorityPill}>
              <MaterialIcons name="workspace-premium" size={14} color="#fcb858" style={styles.iconSpacing} />
              <Text style={styles.priorityText}>PRIORITAS</Text>
            </View>
          </View>
        </View>

        <View style={styles.goldCard}>
          <View style={styles.cardContent}>
            <View style={styles.cardTopRow}>
              <View style={styles.cardLabelGroup}>
                <MaterialCommunityIcons name="diamond" size={20} color="#fcb858" />
                <Text style={styles.cardLabel}>SALDO LOGAM MULIA</Text>
              </View>
              <View style={styles.eyeIconContainer}>
                <Feather name="eye" size={16} color="#A0A0A0" />
              </View>
            </View>

            <View style={styles.balanceGroup}>
              <View style={styles.gramRow}>
                <Text style={styles.gramText}>48.7500</Text>
                <Text style={styles.unitText}>gram</Text>
              </View>
              <View style={styles.idrRow}>
                <Text style={styles.idrText}>Rp 63.862.500</Text>
                <View style={styles.yieldBadge}>
                  <MaterialIcons name="trending-up" size={14} color="#03DAC6" />
                  <Text style={styles.yieldText}>+Rp 4.215.000 (+7.08%)</Text>
                </View>
              </View>
            </View>

            <View style={styles.actionGrid}>
              <View style={styles.actionItem}>
                <View style={[styles.actionIconBtn, { backgroundColor: '#fcb858' }]}>
                  <MaterialIcons name="add" size={22} color="#121212" />
                </View>
                <Text style={styles.actionLabel}>Beli</Text>
              </View>
              <View style={styles.actionItem}>
                <View style={styles.actionIconBtnAlt}>
                  <MaterialIcons name="sync-alt" size={20} color="#fcb858" />
                </View>
                <Text style={styles.actionLabel}>Jual</Text>
              </View>
              <View style={styles.actionItem}>
                <View style={styles.actionIconBtnAlt}>
                  <MaterialIcons name="send" size={20} color="#fcb858" />
                </View>
                <Text style={styles.actionLabel}>Transfer</Text>
              </View>
              <View style={styles.actionItem}>
                <View style={styles.actionIconBtnAlt}>
                  <MaterialCommunityIcons name="diamond" size={20} color="#fcb858" />
                </View>
                <Text style={styles.actionLabel}>Cetak</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.marketSection}>
          <View style={styles.marketHeader}>
            <View style={styles.marketTitleGroup}>
              <View style={styles.marketDot} />
              <Text style={styles.marketTitle}>Harga Pasar Antam Terkini</Text>
            </View>
            <Text style={styles.updateTime}>Update 09:40 WIB</Text>
          </View>

          <View style={styles.priceGrid}>
            <View style={styles.priceCard}>
              <View style={styles.priceCardTop}>
                <Text style={styles.priceLabel}>HARGA BELI</Text>
                <View style={styles.changeRow}>
                  <Text style={styles.upText}>+0.85%</Text>
                  <MaterialIcons name="north-east" size={14} color="#03DAC6" />
                </View>
              </View>
              <Text style={styles.mainPrice}>Rp 1.310.000</Text>
              <Text style={styles.perGram}>per gram</Text>
            </View>
            <View style={styles.priceCard}>
              <View style={styles.priceCardTop}>
                <Text style={styles.priceLabel}>HARGA JUAL</Text>
                <View style={styles.changeRow}>
                  <Text style={styles.stableText}>Stabil</Text>
                  <MaterialIcons name="horizontal-rule" size={14} color="#A0A0A0" />
                </View>
              </View>
              <Text style={styles.mainPrice}>Rp 1.205.000</Text>
              <Text style={styles.perGram}>per gram</Text>
            </View>
          </View>

          <View style={styles.timeSelector}>
            <View style={styles.pillContainer}>
              <View style={[styles.pillBtn, styles.pillBtnActive]}>
                <Text style={[styles.pillText, styles.pillTextActive]}>24 Jam</Text>
              </View>
              <View style={styles.pillBtn}>
                <Text style={styles.pillText}>1 Mgg</Text>
              </View>
              <View style={styles.pillBtn}>
                <Text style={styles.pillText}>1 Bln</Text>
              </View>
              <View style={styles.pillBtn}>
                <Text style={styles.pillText}>1 Thn</Text>
              </View>
            </View>
          </View>

          <View style={styles.chartContainer}>
            <View style={styles.chartHeaderInfo}>
                <Text style={{ color: '#fcb858', fontSize: 12, fontWeight: '600' }}>📈 Tren Grafik Harga Emas</Text>
                <View style={{ paddingHorizontal: 6, paddingVertical: 2, backgroundColor: '#2C2C2C', borderRadius: 4 }}>
                  <Text style={{ color: '#fcb858', fontSize: 10, fontWeight: 'bold' }}>Rp 1.310.000</Text>
                </View>
            </View>
            <View style={styles.svgWrapper}>
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

        <View style={styles.promoSection}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Pilihan Cerdas & Promo</Text>
            <Text style={styles.linkText}>Lihat Semua</Text>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.promoScroll}>
            <View style={styles.promoCard}>
              <View style={styles.cardTopContent}>
                <View style={[styles.promoIconBg, { backgroundColor: 'rgba(3, 218, 198, 0.2)' }]}>
                  <MaterialIcons name="autorenew" size={20} color="#03DAC6" />
                </View>
                <Text style={styles.promoTitle}>Rencana Emas Otomatis</Text>
                <Text style={styles.promoDesc} numberOfLines={2}>
                  Disiplin finansial rutin mulai Rp 10.000/hari tanpa biaya admin transaksi.
                </Text>
              </View>
              <View style={styles.cardBottomAction}>
                <Text style={styles.promoTag}>Bebas Biaya Titip</Text>
                <View style={styles.actionBtnSm}>
                  <Text style={styles.actionBtnTextSm}>Aktifkan</Text>
                </View>
              </View>
            </View>

            <View style={styles.promoCard}>
              <View style={styles.cardTopContent}>
                <View style={[styles.promoIconBg, { backgroundColor: 'rgba(252, 184, 88, 0.2)' }]}>
                  <MaterialIcons name="confirmation-number" size={20} color="#fcb858" />
                </View>
                <Text style={styles.promoTitle}>Cashback Rp 50.000</Text>
                <Text style={styles.promoDesc} numberOfLines={2}>
                  Khusus pembelian pertama bulan ini minimal akumulasi 1 gram.
                </Text>
              </View>
              <View style={styles.cardBottomAction}>
                <Text style={[styles.promoTag, { color: '#fcb858' }]}>KILAU50</Text>
                <View style={[styles.actionBtnSm, { backgroundColor: '#fcb858' }]}>
                  <Text style={[styles.actionBtnTextSm, { color: '#121212', fontWeight: 'bold' }]}>Klaim</Text>
                </View>
              </View>
            </View>

             <View style={styles.promoCard}>
              <View style={styles.cardTopContent}>
                <View style={[styles.promoIconBg, { backgroundColor: 'rgba(3, 218, 198, 0.2)' }]}>
                  <MaterialIcons name="local-shipping" size={20} color="#03DAC6" />
                </View>
                <Text style={styles.promoTitle}>Kirim Fisik Antam/UBS</Text>
                <Text style={styles.promoDesc} numberOfLines={2}>
                  Pencetakan bergaransi resmi CertiCard dengan asuransi pengiriman penuh.
                </Text>
              </View>
              <View style={styles.cardBottomAction}>
                <Text style={styles.promoTag}>Mulai 0.5 gr</Text>
                <View style={styles.actionBtnSm}>
                  <Text style={styles.actionBtnTextSm}>Pesan</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>

        <View style={styles.historySection}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionTitle}>Riwayat Transaksi</Text>
            <Text style={styles.linkText}>Semua Riwayat</Text>
          </View>

          <View style={styles.historyList}>
            <View style={styles.historyItem}>
              <View style={styles.historyLeft}>
                <View style={[styles.historyIconBg, { backgroundColor: 'rgba(252, 184, 88, 0.15)' }]}>
                  <MaterialIcons name="add-circle" size={20} color="#fcb858" />
                </View>
                <View style={styles.historyTextGroup}>
                  <Text style={styles.historyTitle} numberOfLines={1}>Pembelian Berkala Auto-Invest</Text>
                  <Text style={styles.historyDate}>Kemarin • 07:15 WIB</Text>
                </View>
              </View>
              <View style={styles.historyRight}>
                <Text style={styles.historyAmountPos}>+1.5000 gr</Text>
                <Text style={styles.historySubAmount}>Rp 1.965.000</Text>
              </View>
            </View>

            <View style={styles.historyItem}>
              <View style={styles.historyLeft}>
                <View style={[styles.historyIconBg, { backgroundColor: 'rgba(3, 218, 198, 0.15)' }]}>
                  <MaterialIcons name="redeem" size={20} color="#03DAC6" />
                </View>
                <View style={styles.historyTextGroup}>
                  <Text style={styles.historyTitle} numberOfLines={1}>Cashback Investasi Prioritas</Text>
                  <Text style={styles.historyDate}>3 Hari lalu • 14:20 WIB</Text>
                </View>
              </View>
              <View style={styles.historyRight}>
                <Text style={styles.historyAmountPos}>+0.0200 gr</Text>
                <Text style={[styles.historySubAmount, { color: '#03DAC6' }]}>Berhasil</Text>
              </View>
            </View>
          </View>
        </View>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    paddingTop: 64,
    paddingBottom: 112,
  },
  contentWrapper: {
    flex: 1,
    width: '100%',
    paddingHorizontal: 16,
    gap: 24,
  },
  headerSection: {
    gap: 4,
    paddingTop: 4,
  },
  greetingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textGroup: {
    flexDirection: 'column',
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  timeText: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#03DAC6',
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    marginTop: 2,
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E0E0E0',
    letterSpacing: -0.5,
  },
  sparkleEmoji: {
    fontSize: 18,
  },
  priorityPill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    backgroundColor: '#2C2C2C',
  },
  iconSpacing: {
    marginRight: 2,
  },
  priorityText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#fcb858',
    letterSpacing: 1,
  },
  goldCard: {
    borderRadius: 12,
    backgroundColor: '#1E1E1E',
    padding: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  cardContent: {
    gap: 16,
    zIndex: 10,
  },
  cardTopRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cardLabelGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  cardLabel: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#A0A0A0',
    letterSpacing: 1,
  },
  eyeIconContainer: {
    padding: 4,
  },
  balanceGroup: {
    gap: 4,
  },
  gramRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: 8,
  },
  gramText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fcb858',
    letterSpacing: -1,
  },
  unitText: {
    fontSize: 16,
    color: '#E0E0E0',
  },
  idrRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  idrText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  yieldBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    backgroundColor: 'rgba(3, 218, 198, 0.15)',
  },
  yieldText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#03DAC6',
  },
  actionGrid: {
    paddingTop: 4,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionItem: {
    alignItems: 'center',
    gap: 6,
    flex: 1,
  },
  actionIconBtn: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  actionIconBtnAlt: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#2C2C2C',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
  actionLabel: {
    fontSize: 12,
    color: '#E0E0E0',
    fontWeight: '500',
  },
  marketSection: {
    flexDirection: 'column',
    gap: 12,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  marketHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  marketTitleGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  marketDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#03DAC6',
  },
  marketTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#FFFFFF',
    letterSpacing: 0.5,
  },
  updateTime: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  priceGrid: {
    flexDirection: 'row',
    gap: 8,
    paddingTop: 4,
  },
  priceCard: {
    flex: 1,
    flexDirection: 'column',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#2C2C2C',
  },
  priceCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceLabel: {
    fontSize: 10,
    color: '#A0A0A0',
    fontWeight: 'bold',
  },
  changeRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  upText: {
    fontSize: 10,
    color: '#03DAC6',
    fontWeight: 'bold',
    marginRight: 2,
  },
  stableText: {
    fontSize: 10,
    color: '#A0A0A0',
    marginRight: 2,
  },
  mainPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 4,
  },
  perGram: {
    fontSize: 11,
    color: '#A0A0A0',
    marginTop: 2,
  },
  timeSelector: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 4,
  },
  pillContainer: {
    flexDirection: 'row',
    gap: 4,
    padding: 4,
    borderRadius: 16,
    backgroundColor: '#121212',
    flex: 1,
    justifyContent: 'space-between',
  },
  pillBtn: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  pillBtnActive: {
    backgroundColor: '#fcb858',
  },
  pillText: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  pillTextActive: {
    color: '#121212',
    fontWeight: 'bold',
  },
  chartContainer: {
    position: 'relative',
    width: '100%',
    height: 90,
    backgroundColor: '#121212',
    borderRadius: 8,
    marginTop: 4,
    padding: 10,
    overflow: 'hidden',
  },
  chartHeaderInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 2,
  },
  svgWrapper: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
  },
  promoSection: {
    flexDirection: 'column',
    gap: 12,
  },
  sectionHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  linkText: {
    fontSize: 12,
    color: '#fcb858',
  },
  promoScroll: {
    gap: 12,
    paddingBottom: 1,
  },
  promoCard: {
    width: 260,
    borderRadius: 12,
    backgroundColor: '#1E1E1E',
    padding: 16,
    justifyContent: 'space-between',
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  cardTopContent: {
    gap: 8,
  },
  promoIconBg: {
    width: 32,
    height: 32,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  promoTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  promoDesc: {
    fontSize: 12,
    color: '#A0A0A0',
    lineHeight: 16,
  },
  cardBottomAction: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  promoTag: {
    fontSize: 11,
    color: '#03DAC6',
    fontWeight: '600',
  },
  actionBtnSm: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: '#2C2C2C',
  },
  actionBtnTextSm: {
    fontSize: 12,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  historySection: {
    flexDirection: 'column',
    gap: 12,
  },
  historyList: {
    flexDirection: 'column',
    gap: 8,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#1E1E1E',
  },
  historyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
    minWidth: 0,
  },
  historyIconBg: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  historyTextGroup: {
    flexDirection: 'column',
    flex: 1,
  },
  historyTitle: {
    fontSize: 13,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  historyDate: {
    fontSize: 11,
    color: '#A0A0A0',
    marginTop: 1,
  },
  historyRight: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    flexShrink: 0,
    paddingLeft: 8,
  },
  historyAmountPos: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#03DAC6',
  },
  historySubAmount: {
    fontSize: 11,
    color: '#A0A0A0',
    marginTop: 1,
  },
});