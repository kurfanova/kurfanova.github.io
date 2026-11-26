/**
 * KURFAMÜZİK (KURFA SOUND LIGHT) — Client Controller v4
 * 100% Ad-Free YouTube Playback Engine, 120 FPS Scrubbable Seekbar & Volume,
 * Real Synced LRC Karaoke Lyrics Engine, Full Mobile First-Class Navigation & Player Deck
 */

const KURFA_WEB_VERSION = '4.5.0';
const KURFA_APP_VERSION = '1.3.0';

// =============================================================================
// 0.1 FULL TR / EN INTERNATIONALIZATION ENGINE (KURFA_I18N)
// =============================================================================

const KURFA_I18N = {
  tr: {
    'nav.brand_sub': 'Masaüstü & Web',
    'nav.main_menu': 'Ana Menü',
    'nav.explore': 'Keşfet',
    'nav.library': 'Kütüphane',
    'nav.search': 'Arama',
    'nav.player_lyrics': 'Çalar & Canlı Sözler',
    'nav.quick_actions': 'Hızlı İşlemler',
    'nav.download_link': 'YouTube Linki İndir',
    'nav.share_track': 'Şarkıyı Paylaş',
    'nav.profile_settings': 'Profilim & Ayarlar',
    'nav.developer': 'Geliştirici',
    'nav.ad_free': '%0 Reklam',
    'nav.active_badge': 'Aktif',
    'nav.install_title': 'Kurfamüzik Masaüstü & Mobil Uygulamalar',
    'nav.install_sub': 'Masaüstü (.exe) • Android (.apk)',

    'topbar.search_placeholder': 'Şarkı veya sanatçı ara...',
    'topbar.paste': 'Panodan Yapıştır',
    'topbar.clear': 'Temizle',
    'topbar.theme_to_light': 'Aydınlık Moda Geç',
    'topbar.theme_to_dark': 'Karanlık Moda Geç',
    'topbar.theme_toggle': 'Temayı Değiştir',
    'topbar.lang_toggle': 'Dili Değiştir (TR / EN)',
    'topbar.default_nick': 'Dinleyici',

    'hero.trend_badge': '#{rank} TÜRKİYE TRENDİ',
    'hero.default_title': 'Günün En Popüler Şarkıları',
    'hero.default_artist': 'Türkiye Top Listesi',
    'hero.listen_now': 'Hemen Dinle',
    'hero.add_queue': 'Listeye Ekle',
    'hero.download': 'İndir',
    'hero.prev_trend': 'Önceki Trend',
    'hero.next_trend': 'Sonraki Trend',

    'explore.tab_trends': 'Keşfet & Senin İçin',
    'explore.tab_discover': 'Mixler & Sanatçılar',
    'explore.tab_new': 'Albümler & Yeni Çıkanlar',
    'explore.refresh_feed': 'Akışı Yenile',
    'explore.quick_picks_title': 'Son Çalınanlar & Hızlı Başlat',
    'explore.albums_for_you': 'Albümler & Yeni Çıkanlar',
    'explore.albums_auto_sub': 'Dinlediklerine ve güncel listelere göre otomatik yenilenir',
    'explore.recommended_today': 'Bugün İçin Tavsiyeler',
    'explore.genre_label': 'Tür:',
    'explore.genre_all': 'Tümü',
    'explore.genre_tr_pop': 'Trend Türkçe',
    'explore.genre_rap': 'Popüler Rap',
    'explore.genre_acoustic': 'Akustik & Lo-Fi',
    'explore.genre_chill': 'Gece & Chill',
    'explore.genre_workout': 'Antrenman & Enerji',
    'explore.genre_cinema': 'Dizi & Film',
    'explore.yt_trends_title': 'Türkiye Müzik Trendleri',
    'explore.show_all': 'Tümünü Göster',
    'explore.show_all_count': 'Tümünü Göster ({count})',
    'explore.show_less': 'Daha Az Göster',
    'explore.play_all': 'Tümünü Oynat',
    'explore.trend_tracklist_title': 'Trend Şarkı Listesi',
    'explore.featured_artists_title': 'Öne Çıkan Sanatçılar',
    'explore.popular_mixes_title': 'Sana Özel Mixler',
    'explore.popular_artists_title': 'Popüler Sanatçılar',
    'explore.featured_collections_title': 'Öne Çıkan Parçalar',
    'explore.new_releases_title': 'Yeni Çıkan Parçalar',
    'explore.scroll_left': 'Sola Kaydır',
    'explore.scroll_right': 'Sağa Kaydır',
    'explore.trend_tag': '#{rank} Trend',

    'mix.daily_1': 'Günlük Mix 1',
    'mix.daily_1_upper': 'GÜNLÜK MİX 1',
    'mix.acoustic': 'Akustik Sakinlik',
    'mix.acoustic_upper': 'AKUSTİK SAKİNLİK',
    'mix.rap': 'Türkçe Drill & Rap',
    'mix.rap_upper': 'TÜRKÇE DRILL & RAP',
    'mix.run': 'Koşu & Motivasyon',
    'mix.run_upper': 'KOŞU & MOTİVASYON',
    'mix.run_sub_short': 'High BPM Club Remixleri',
    'mix.run_sub': 'Yüksek enerjili Türkçe club ve remixler',

    'artist.back_explore': "Keşfet'e Dön",
    'artist.back_search': "Arama'ya Dön",
    'artist.back': 'Geri',
    'artist.official_profile': 'Resmi Sanatçı Profili',
    'artist.verified': 'Doğrulanmış Sanatçı',
    'artist.play_all': 'Tüm Şarkıları Çal',
    'artist.shuffle': 'Karışık',
    'artist.popular_tracks': 'Popüler Şarkılar',
    'artist.loading': 'Yükleniyor...',
    'artist.loading_tracks': '{name} parçaları getiriliyor...',
    'artist.track_count': '{count} Parça',
    'artist.listeners_m': '{val}M dinleyici',
    'artist.listeners_k': '{val}K dinleyici',
    'artist.profile_label': 'Sanatçı Profili',
    'artist.no_tracks': 'Parça listesi alınamadı.',
    'artist.error': 'Hata',
    'artist.conn_error': 'Bağlantı hatası oluştu.',

    'search.filter_all': 'Tümü',
    'search.filter_mv': 'Resmi Klipler',
    'search.filter_live': 'Canlı',
    'search.filter_remix': 'Remix',
    'search.filter_acoustic': 'Akustik',
    'search.filter_open': 'Reklamsız Açık Katalog',
    'search.filter_open_title': 'Audius, Deezer ve Apple destekli reklamsız açık katalog',
    'search.paste': 'Yapıştır',
    'search.recent_searches': 'Son Aramalar',
    'search.go': 'Ara',
    'search.clear': 'Temizle',
    'search.recent_played': 'Son Dinlenenler',
    'search.browse_all': 'Tümüne Göz At',
    'search.artists': 'Sanatçılar',
    'search.artists_sub': 'Profil & tüm şarkıları gör',
    'search.results_title': 'Arama Sonuçları',
    'search.results_found': '"{query}" İçin {count} Sonuç Bulundu',
    'search.searching': '"{query}" Aranıyor...',
    'search.loading_msg': 'Sonuçlar ve sanatçılar getiriliyor...',
    'search.sort_relevance': 'Alaka',
    'search.sort_views': 'İzlenme',
    'search.sort_newest': 'En Yeni',
    'search.reset': 'Sıfırla',
    'search.reset_title': 'Filtreleri Sıfırla',
    'search.empty_prompt': 'Sanatçı adı, şarkı veya YouTube bağlantısı yazarak hemen arayın.',
    'search.no_results': 'Sonuç Bulunamadı',
    'search.no_results_title': '"{query}" için sonuç bulunamadı',
    'search.no_results_hint': 'Farklı bir anahtar kelime deneyin veya doğrudan YouTube linki yapıştırın.',
    'search.source_open': 'Reklamsız Açık Katalog',
    'search.source_direct': 'Doğrudan Ses Akışı',
    'search.yt_audio_suffix': 'Stüdyo Ses',
    'search.cat_tr_pop': 'Türkçe Pop',
    'search.cat_tr_rap': 'Türkçe Rap & Drill',
    'search.cat_arabesk': 'Arabesk & Damar',
    'search.cat_rock': 'Anadolu Rock',
    'search.cat_acoustic': 'Akustik & Lo-Fi',
    'search.cat_90s': "90'lar & Nostalji",
    'search.cat_global': 'Yabancı Hit',
    'search.cat_workout': 'Antrenman & Enerji',

    'library.title': 'Kütüphane',
    'library.subtitle': 'Listeleriniz, Spotify ve favorileriniz',
    'library.play_all': 'Tümünü Çal',
    'library.device_music': 'Cihazdaki Müzikler',
    'library.my_playlists': 'Listelerim',
    'library.spotify': 'Spotify',
    'library.favorites': 'Favoriler',
    'library.custom_title': 'Özel Listelerim',
    'library.playlist_count': '{count} Liste',
    'library.new_playlist': 'Yeni Liste',
    'library.no_playlists_title': 'Henüz özel çalma listeniz yok',
    'library.no_playlists_desc': 'Yukarıdaki "Yeni Liste" butonunu kullanarak listenizi oluşturabilirsiniz.',
    'library.tracks_count': '{count} Şarkı',
    'library.delete_list': 'Listeyi Sil',
    'library.refresh_list': 'Listeyi Yenile',
    'library.empty_custom_list': 'Bu liste henüz boş. Arama veya Trendler sekmesinden şarkıları bu listeye ekleyebilirsiniz.',
    'library.spotify_placeholder': 'Spotify liste, albüm veya sanatçı bağlantısı yapıştır...',
    'library.spotify_import': 'İçe Aktar',
    'library.spotify_imported_title': 'İçe Aktarılan Spotify Listeleri',
    'library.no_spotify_title': 'Henüz Spotify Listesi Eklenmedi',
    'library.no_spotify_desc': 'Yukarıdaki kutucuğa herhangi bir Spotify çalma listesi bağlantısı yapıştırarak anında içe aktarabilirsiniz.',
    'library.empty_spotify_list': 'Bu Spotify çalma listesinde gösterilecek şarkı bulunamadı.',
    'library.fav_title': 'Favori Parçalarım',
    'library.fav_saved_count': '{count} Şarkı Kaydedildi',
    'library.fav_empty_title': 'Favori listeniz henüz boş',
    'library.fav_empty_desc': 'Beğendiğiniz şarkıları kalp simgesine tıklayarak buraya ekleyebilirsiniz.',
    'library.discover_music': 'Şarkı Keşfet',
    'library.device_title': 'Cihazdaki Müzikler',
    'library.device_track_count': '{count} Parça',
    'library.device_scan': 'Tara / Seç',
    'library.device_play_seq': 'Sırayla Çal',
    'library.device_filter_placeholder': 'Cihazdaki şarkılarda ara...',
    'library.device_empty_unscanned': 'Cihazdaki müzikler henüz taranmadı',
    'library.device_empty_search': 'Aramayla eşleşen yerel parça yok',
    'library.device_scan_btn': 'Cihazı Tara',
    'library.device_pick_btn': 'Bilgisayardan Müzik Seç',
    'library.downloads_empty_title': 'İndirilen şarkı bulunmuyor',
    'library.downloads_empty_desc': 'Şarkıları çevrimdışı dinlemek için indir butonuna tıklayın.',
    'library.offline_badge': 'Çevrimdışı',
    'library.show_more_remaining': 'Daha Fazla Göster ({count} Parça Kaldı)',

    'player.playlist_badge': 'Canlı Trend Seçkisi',
    'player.yt_trends': 'Türkiye Müzik Trendleri',
    'player.yt_trends_desc': 'Günün en çok dinlenen parçaları.',
    'player.yt_live_hit': '#1 Canlı Hit ({dur})',
    'player.play_shuffle': 'Tümünü Çal (Karışık)',
    'player.tracklist': 'Şarkı Listesi',
    'player.filter_in_list': 'Liste içinde filtrele...',
    'player.now_playing': 'Şimdi Çalıyor',
    'player.cover_mode': 'Kapak',
    'player.video_mode': 'Video',
    'player.video_ad_notice': "YouTube video modunda reklam görülebilir; reklamsız dinleme için Kapak Modu'na geçebilirsiniz.",
    'player.dismiss_notice': 'Bildirimi Gizle',
    'player.live_video_area': 'Canlı Video Alanı',
    'player.fullscreen': 'Tam Ekran',
    'player.select_song': 'Bir parça seçin',
    'player.no_playing': 'Çalınan şarkı yok',
    'player.lyrics_title': 'Şarkı Sözleri',
    'player.lyrics_synced': 'Senkronize',
    'player.lyrics_sync_title': 'Söz senkronizasyon ayarı',
    'player.lyrics_sync_btn': 'Eşitle',
    'player.show_more_tracks': 'Daha Fazla Göster ({count} Şarkı Daha)',
    'player.show_less_tracks': 'Daha Az Göster (İlk 7 Şarkı)',
    'player.no_matching_tracks': 'Aramanızla eşleşen şarkı bulunamadı.',
    'player.prev_song': 'Önceki Şarkı',
    'player.next_song': 'Sonraki Şarkı',
    'player.play_pause': 'Oynat/Durdur',
    'player.shuffle': 'Karıştır',
    'player.repeat': 'Tekrarla',
    'player.fav_add': 'Favorilere Ekle',
    'player.lyrics': 'Şarkı Sözleri',
    'player.pip': 'Mini Kayan Oynatıcı (PiP)',
    'player.devices': 'Cihaza Bağlan (Bluetooth/Hoparlör)',
    'player.download_audio': 'Sesi İndir',
    'player.queue': 'Çalma Sırası',
    'player.mute': 'Sessize Al',
    'player.playing_badge': 'Çalıyor',
    'player.nav_lyrics_eq': 'Sözler & EQ',
    'player.nav_lyrics_short': 'Sözler',
    'player.play_btn': 'Çal',
    'player.add_to_playlist': 'Çalma Listesine Ekle',
    'player.add_to_queue': 'Sıraya Ekle',
    'player.fav_remove': 'Favorilerden Çıkar',

    'footer.toggle_theme': 'Temayı Değiştir',

    'queue.title': 'Çalma Sırası',
    'queue.clear_title': 'Çalma sırasını boşalt',
    'queue.empty_title': 'Çalma Sıranız Boş',
    'queue.empty_desc': 'Herhangi bir şarkıyı sıraya ekleyebilir veya trend listesini başlatabilirsiniz.',
    'queue.play_trends': 'Trend Müzikleri Çal',
    'queue.up_next': 'Sıradaki Şarkılar ({count})',
    'queue.playlist_prefix': 'Liste: {name}',
    'queue.playlist_default': 'Çalma Listesi',
    'queue.hidden_prev': 'Önceki {count} parça gizlendi (Toplam {total} parça)',
    'queue.more_in_queue': 'Sırada +{count} parça daha var',
    'queue.move_up': 'Yukarı Taşı',
    'queue.move_down': 'Aşağı Taşı',
    'queue.remove': 'Sıradan Çıkar',

    'dl.title': 'Medya İndirici',
    'dl.url_placeholder': 'YouTube bağlantısı yapıştırın...',
    'dl.folder_default': 'İndirilenler',
    'dl.folder_default_win': 'Varsayılan İndirilenler',
    'dl.change_folder': 'Değiştir',
    'dl.downloading': 'İndiriliyor...',
    'dl.bg_continuing': 'Arka planda devam ediyor.',
    'dl.audio_m4a': 'Ses (M4A)',
    'dl.video_mp4': 'Video (MP4)',
    'dl.play_now': 'Hemen Oynat',
    'dl.preparing': 'Hazırlanıyor...',
    'dl.preparing_bg': 'Arka planda hazırlanıyor...',
    'dl.connecting': 'Bağlantı kuruluyor...',
    'dl.retry': 'Tekrar Dene',
    'dl.get_app': 'Uygulamayı İndir',
    'dl.open_folder': 'Klasörü Aç',
    'dl.view_status': 'İndirme durumunu görüntüle',

    'share.title': 'Şarkıyı Paylaş',
    'share.copy': 'Kopyala',
    'share.copied': 'Kopyalandı!',
    'share.web_share': 'Uygulama veya Cihazda Paylaş',

    'settings.title': 'Ayarlar',
    'settings.version': 'Sürüm',
    'settings.browser': 'Tarayıcı',
    'settings.checking': 'Sürüm kontrol ediliyor...',
    'settings.new_update': 'Yeni Güncelleme Mevcut',
    'settings.location': 'Konum: ',
    'settings.desktop_app': 'Masaüstü Uygulaması',
    'settings.dl_folder': 'İndirme Klasörü',
    'settings.pick_folder': 'Klasör Seç',
    'settings.desktop_shortcut': 'Masaüstü Kısayolu',
    'settings.start_menu': 'Başlat Menüsü',
    'settings.win_startup': 'Windows Açılışında Başlat',
    'settings.min_tray': 'Kapatınca Tepsiye Küçült',
    'settings.on': 'Açık',
    'settings.off': 'Kapalı',
    'settings.open_folder': 'Klasörü Aç',
    'settings.check_update': 'Güncelleme Denetle',
    'settings.checking_update': 'Denetleniyor...',
    'settings.adfree_apps': 'Reklamsız APK & EXE',
    'settings.apps_btn': 'Uygulamalar',
    'settings.nickname': 'Dinleyici Adı',
    'settings.nickname_placeholder': 'Adınız...',
    'settings.stat_listening': 'Dinleme',
    'settings.stat_played': 'Çalınan',
    'settings.stat_downloads': 'İndirilen',
    'settings.min_unit': '{val} dk',
    'settings.dark_theme': 'Karanlık Tema',
    'settings.language': 'Dil',
    'settings.ad_warning': 'Reklam Uyarısı',
    'settings.backup_export': 'Verileri Yedekle (JSON)',
    'settings.backup_import': 'Yedekten Geri Yükle',
    'settings.dynamic_bg': 'Dinamik Arka Plan',
    'settings.sponsorblock': 'SponsorBlock (Klip Konuşmalarını Atla)',
    'settings.save_close': 'Kaydet & Kapat',
    'settings.platform_web': 'Web',
    'settings.platform_desktop': 'Masaüstü',
    'settings.platform_android': 'Android',
    'settings.platform_ext': 'Eklenti',
    'settings.auto_update_web': 'Sayfa açılışında otomatik güncellenir.',
    'settings.checking_remote': 'Son sürüm sunucudan kontrol ediliyor...',
    'settings.installed_ver': 'Yüklü sürüm: v{ver}',
    'settings.ver_verified': 'Sürüm bilgisi doğrulandı',
    'settings.new_ver_available': 'Yeni sürüm var: v{remote} (Yüklü: v{installed})',
    'settings.up_to_date': 'Güncel sürümdesiniz (Son sürüm: v{ver})',
    'settings.latest_published': 'Son yayınlanan sürüm: v{ver}',
    'settings.quick_update_avail': 'v{ver} Mevcut — Şimdi Güncelle',
    'settings.quick_update_ready': 'v{ver} Hazır — Yeniden Başlat',
    'settings.subtitle': 'Kurfamüzik • Kişiselleştirme ve Sistem',
    'settings.tab_general': 'Genel & Görünüm',
    'settings.tab_general_short': 'Genel',
    'settings.tab_playback': 'Oynatma & Ses',
    'settings.tab_playback_short': 'Oynatma',
    'settings.tab_app': 'Uygulama & İndirmeler',
    'settings.tab_app_short': 'Uygulama',
    'settings.tab_data': 'Veri & Yedekleme',
    'settings.tab_data_short': 'Yedek',
    'settings.tab_about': 'Hakkımda',
    'settings.tab_about_short': 'Hakkımda',
    'settings.sec_profile': 'Dinleyici Profili',
    'settings.sec_appearance': 'Görünüm & Dil',
    'settings.dark_theme_desc': 'Göz yormayan derin gece arayüzü',
    'settings.dynamic_bg_desc': 'Çalan şarkı kapağına göre hafif arka plan ışıltısı',
    'settings.lang_system': 'Sistem',
    'settings.sec_playback': 'Oynatma Tercihleri',
    'settings.sponsorblock_desc': 'Video intro ve sponsorlu konuşmaları otomatik geç',
    'settings.ad_warning_desc': 'Tarayıcı modunda YouTube reklam koruması önerisi',
    'settings.sec_audio_fx': 'Ses Motoru & Ekolayzır',
    'settings.open_eq_fx': 'Hızlı EQ & FX Stüdyosu',
    'settings.open_eq_fx_desc': '5-bant stüdyo ekolayzır, bas, netlik ve 3D alan',
    'settings.open_eq_btn': 'EQ Aç',
    'settings.sec_stats': 'İstatistikler',
    'settings.sec_backup': 'Yedekleme & Geri Yükleme',
    'settings.sec_backup_summary': 'Özet',
    'settings.bk_favs': 'Favori',
    'settings.bk_lists': 'Liste',
    'settings.bk_storage': 'Depolama',
    'settings.backup_info': 'Favorileriniz, özel listeleriniz ve tercihleriniz tek bir JSON dosyasına kaydedilir.',
    'settings.clear_cache': 'Önbelleği Temizle',
    'settings.clear_cache_desc': 'Favori ve listelere dokunmadan önbelleği sıfırlar',
    'settings.clear_cache_btn': 'Temizle',
    'settings.sec_about': 'Hakkında',
    'about.links_title': 'İletişim & Bağlantılar',
    'about.email_label': 'E-posta',
    'fx.subtitle_pro': '5-Bant EQ • Bas • Netlik',
    'fx.reset_all': 'Sıfırla',
    'fx.preset_club': 'Kulüp / Gece',
    'fx.preset_treble': 'Derin Tiz',
    'fx.bass_boost': 'Bas Gücü',
    'fx.clarity': 'Netlik',
    'fx.spatial_3d': '3D Uzamsal Ses',

    'engine.browser_mode': 'Tarayıcı Modu',
    'engine.apk_active': 'APK Cihaz Motoru Aktif (%0 Reklam)',
    'engine.desktop_active': 'Masaüstü Uygulaması Aktif (%0 Reklam)',
    'engine.ext_active': 'Eklenti Motoru Aktif (%0 Reklam)',
    'engine.adblock_active': 'Reklam Engelleyici Aktif (%0 Reklam)',
    'engine.watching': 'Kurulum Algılanıyor...',
    'engine.adblock_detected_btn': 'Reklam Engelleyici Aktif ({name})',
    'engine.adblock_watching_btn': "{store} Açıldı — Ekle'ye Basın",
    'engine.adblock_add_btn': '{name} İçin Engelleyici Ekle ({store})',
    'engine.adblock_hint_active': 'Tarayıcınızda reklam engelleyici algılandı. Şarkılar uyarı ekranı olmadan doğrudan oynatılıyor.',
    'engine.adblock_hint_watching': 'Açılan mağaza sekmesinde "Ekle" butonuna basın; Kurfamüzik arka planda otomatik algılayacak.',
    'engine.adblock_hint_default': 'Tarayıcınız için önerilen reklam engelleyici mağaza sayfasını açar; eklediğiniz anda sistem arka planda otomatik algılar.',

    'cpl.title': 'Yeni Çalma Listesi',
    'cpl.name_label': 'Liste Adı',
    'cpl.placeholder': 'Örn: Gece Yolculuğu, Spor Motivasyonu...',
    'cpl.cancel': 'İptal',
    'cpl.create': 'Oluştur',

    'atp.title': 'Çalma Listesine Ekle',
    'atp.new_list': 'Yeni Liste Oluştur',
    'atp.no_lists': 'Henüz listeniz yok. Aşağıdan yeni bir liste oluşturabilirsiniz.',

    'dp.title': 'Ses Çıkışı',
    'dp.default_output': 'Sistem Varsayılan Çıkışı',
    'dp.active_output': 'Aktif ses çıkışı',
    'dp.devices': 'Cihazlar',
    'dp.refresh': 'Yenile',
    'dp.scanning': 'Kullanılabilir ses aygıtları taranıyor...',
    'dp.unlock_title': 'Kulaklık İsimlerini Aç',
    'dp.unlock_desc': 'Tarayıcı güvenliği nedeniyle Bluetooth veya kulaklık adlarını (AirPods, Buds vb.) görebilmek için izin gereklidir.',
    'dp.unlock_btn': 'Cihaz İsimlerini Etkinleştir',
    'dp.active_pill': 'Aktif',
    'dp.bt_headset': 'Bluetooth / Kulaklık',
    'dp.sys_default': 'Sistem Varsayılanı',
    'dp.ext_speaker': 'Harici Hoparlör',
    'dp.no_devices': 'Sistem varsayılan çıkışı etkin. Cihazınızın ses düğmelerinden veya Bluetooth menüsünden kulaklığınızı doğrudan dinleyebilirsiniz.',
    'dp.fallback_msg': 'Ses doğrudan cihazınızın bağlı hoparlör veya kulaklığına aktarılmaktadır.',
    'dp.unsupported': 'Tarayıcınız ses çıkış aygıtı seçimini desteklemiyor. Sistem varsayılan ses çıkışı aktif.',

    'install.title': 'Kurfamüzik Uygulamaları',
    'install.subtitle': 'Reklamsız masaüstü ve mobil kurulumlar',
    'install.native_group': 'Cihaz Uygulamaları (EXE & APK)',
    'install.apk_title': 'Android APK İndir',
    'install.apk_sub': 'Arka plan çalma • %0 reklam • Yerel indirme',
    'install.win_title': 'Windows Kurulum (.exe)',
    'install.win_sub': 'Kurulum sihirbazı • Otomatik güncelleme',
    'install.web_group': 'Web Tarayıcı Seçenekleri',
    'install.adblock_title': 'Tarayıcı Reklam Engelleyici',
    'install.adblock_hint': 'Tarayıcınız için önerilen reklam engelleyici eklentiyi kurarak web üzerinde de reklamsız dinleyin.',
    'install.adguard_add': 'Reklam Engelleyici Ekle',
    'install.pwa_add': 'Ana Ekrana Ekle (Web Uygulaması)',

    'dupd.available': 'Yeni Güncelleme Mevcut',
    'dupd.subtitle_ready': 'Yeni sürüm hazır',
    'dupd.downloading': 'Güncelleme İndiriliyor',
    'dupd.ready': 'Güncelleme Kuruluma Hazır',
    'dupd.error': 'Güncelleme Başarısız',
    'dupd.consent': 'Yeni sürümün indirilip kurulmasını onaylıyor musunuz? İndirme sırasında müzik çalmaya kesintisiz devam eder.',
    'dupd.later': 'Daha Sonra',
    'dupd.download_update': 'İndir ve Güncelle',
    'dupd.bg_hide': 'Arka Plana Al',
    'dupd.close_apply': 'Kapatırken Kur',
    'dupd.restart_update': 'Yeniden Başlat ve Güncelle',
    'dupd.close': 'Kapat',
    'dupd.retry': 'Tekrar Dene',
    'dupd.sha_protected': 'SHA-256 Korumalı',
    'dupd.integrity_check': 'Bütünlük Kontrolü',
    'dupd.verifying_sha': 'SHA-256 Güvenlik Doğrulaması Yapılıyor...',
    'dupd.downloading_pkg': 'Güncelleme paketi indiriliyor...',
    'dupd.verifying_btn': 'Doğrulanıyor...',
    'dupd.verified_ready': 'Doğrulandı ve Hazır',
    'dupd.completed': '{size} Tamamlandı',
    'dupd.packaged': 'Paketlendi',
    'dupd.ready_badge': 'Hazır',
    'dupd.restart_hint': 'Paket doğrulandı! Uygulama şimdi yeniden başlatılarak güncelleniyor...',
    'dupd.manual_restart_hint': 'Güncelleme paketi doğrulandı. Şimdi yeniden başlatarak hemen uygulayabilirsiniz.',
    'dupd.err_fallback': 'Güncelleme paketi indirilirken bir sorun oluştu.',

    'adw.title': 'Reklam Uyarısı',
    'adw.subtitle': '%0 Reklamlı Cihaz Motoru Önerisi',
    'adw.body': 'Web tarayıcısında bu parçada YouTube reklamı çıkabilir. Cihazına uygun uygulamayı indirirsen tüm şarkılar %0 reklamlı çalar.',
    'adw.welcome_title': 'Hoş Geldin! Reklamsız Koruma',
    'adw.welcome_sub': 'İlk Ziyaret • Cihazına Özel Öneri',
    'adw.welcome_body': 'Hoş geldin! Kurfamüzik ücretsiz ve reklamsız müzik deneyimi sunar. Tarayıcında reklam engelleyici algılanmadığı için YouTube parçalarında reklam çıkabilir; aşağıdan tek tıkla koruma kurabilirsin.',
    'adw.continue_btn': 'Yine de Tarayıcıda Çal',
    'adw.welcome_continue': 'Şimdilik Tarayıcıda Devam Et',
    'adw.never_btn': 'Bir daha hatırlatma',
    'adw.detected': 'Cihaz Algılandı',
    'adw.win_cta': 'Windows Kurulumunu İndir (.exe • %0 Reklam)',
    'adw.android_cta': 'Android APK İndir (%0 Reklam)',
    'adw.adguard_cta': '{name} İçin Engelleyici Ekle (Resmi Mağaza)',
    'adw.adguard_short': '{name} İçin Engelleyici Ekle',
    'adw.ios_cta': 'Safari İçin Reklam Engelleyici Kur (App Store)',
    'adw.all_install_opts': 'Tüm Kurulum Seçenekleri',
    'adw.open_catalog': 'Reklamsız Açık Katalogda Ara',
    'adw.webapk': 'Tarayıcı Kısayolu (WebAPK)',
    'adw.android_detected': 'Android Algılandı',

    'gauth.title': 'Google ile oturum açın',
    'gauth.subtitle': "Kurfamüzik'e devam etmek için bir hesap seçin",
    'gauth.add_title': 'Başka bir Google Hesabı ile Bağlan',
    'gauth.name_placeholder': 'Adınız Soyadınız...',
    'gauth.signin_btn': 'Bu Hesapla Giriş Yap',
    'gauth.use_other': 'Başka bir Google hesabı kullan',
    'gauth.privacy_note': 'Hesabınız ve çalma listeleriniz yerel tarayıcınızda ve bulut eşitleme alanınızda korunur.',

    'pip.expand': 'Tam Ekrana Genişlet',
    'pip.close': 'Kapat',

    'toast.lang_changed': 'Dil Türkçe olarak değiştirildi',
    'toast.dark_on': 'Karanlık Mod Açıldı',
    'toast.dark_off': 'Aydınlık Mod Açıldı',
    'toast.unmuted': 'Ses Açıldı',
    'toast.muted': 'Sessize Alındı',
    'toast.queue_empty': 'Çalma sırası boş',
    'toast.shuffle_on': 'Karışık Çalma: Açık',
    'toast.shuffle_off': 'Karışık Çalma: Kapalı',
    'toast.repeat_off': 'Tekrarlama: Kapalı',
    'toast.repeat_all': 'Tekrarlama: Tüm Liste',
    'toast.repeat_one': 'Tekrarlama: Tek Şarkı',
    'toast.queue_cleared': 'Çalma sırası temizlendi',
    'toast.removed_from_queue': 'Sıradan çıkarıldı: {title}',
    'toast.fav_added': 'Favorilere eklendi: {title}',
    'toast.fav_removed': 'Favorilerden çıkarıldı: {title}',
    'toast.select_track_first': 'Önce bir şarkı seçin',
    'toast.profile_saved': 'Profil bilgileri kaydedildi',
    'toast.share_copied': 'Şarkı linki panoya kopyalandı!',
    'toast.all_songs_shown': 'Tüm şarkılar gösteriliyor',
    'toast.category_loading': '{genre} kategorisi listeleniyor...',
    'toast.trends_playing': 'YouTube Trendler çalınıyor',
    'toast.search_enter_query': 'Lütfen bir şarkı, sanatçı veya link yazın',
    'toast.filters_reset': 'Filtreler ve sıralama sıfırlandı',
    'toast.sort_relevance': 'Alakaya göre sıralandı',
    'toast.sort_views': 'Popülerlik ve süreye göre sıralandı',
    'toast.sort_newest': 'En yeni parçalara göre sıralandı',
    'toast.clipboard_error': 'Panoya erişilemedi, lütfen elle yapıştırın',
    'toast.yt_direct_stream': 'YouTube linki doğrudan akışa alındı',
    'toast.alt_source_trying': 'Alternatif kaynak deneniyor...',
    'toast.copyright_skip': 'Bu şarkı telif nedeniyle yerleştirmeye kapalı, sıradakine geçiliyor',
    'toast.too_many_errors': 'Arka arkaya çok fazla oynatılamayan parça nedeniyle durduruldu',
    'toast.history_cleared': 'Arama geçmişi temizlendi',
    'toast.dl_folder_updated': 'İndirme klasörü güncellendi: {dir}',
    'toast.dl_folder_desktop_only': 'Klasör seçimi masaüstü uygulamasında desteklenir',
    'toast.opening_folder': 'Uygulama klasörü açılıyor...',
    'toast.ad_warn_off': 'Reklam uyarısı kapatıldı',
    'toast.ad_warn_on': 'Reklam uyarısı açıldı',
    'toast.ad_warn_never': 'Reklam uyarısı bir daha gösterilmeyecek',
    'toast.playlist_created': '"{name}" çalma listesi oluşturuldu!',
    'toast.playlist_created_added': '"{name}" oluşturuldu ve şarkı eklendi!',
    'toast.playlist_deleted': 'Çalma listesi silindi',
    'toast.track_removed_playlist': 'Şarkı listeden çıkarıldı',
    'toast.enter_playlist_name': 'Lütfen bir liste adı girin',
    'toast.track_added_playlist': '"{title}" -> "{name}" listesine eklendi',
    'toast.track_already_playlist': '"{title}" zaten "{name}" listesinde var',
    'toast.audio_routed': 'Ses aktarıldı: {label}',
    'toast.video_mode_on': 'Canlı Video Klip Modu Açıldı',
    'toast.audio_mode_on': 'Reklamsız Ses Modu Aktif',
    'toast.local_no_video': 'Yerel ses dosyalarında video modu kullanılamaz',
    'toast.sponsor_skipped': 'Klip intro/konuşma atlandı',
    'toast.speed_set': 'Oynatma hızı: {val}x',
    'toast.crossfade_set': 'Crossfade: {val} sn',
    'toast.norm_on': 'Ses Dengeleme (Normalization): Açık',
    'toast.norm_off': 'Ses Dengeleme (Normalization): Kapalı',
    'toast.silence_on': 'Sessizliği Atla: Açık',
    'toast.silence_off': 'Sessizliği Atla: Kapalı',
    'toast.dynbg_on': 'Dinamik Sıvı Arka Plan: Açık',
    'toast.dynbg_off': 'Dinamik Sıvı Arka Plan: Kapalı',
    'toast.sb_on': 'SponsorBlock: Açık',
    'toast.sb_off': 'SponsorBlock: Kapalı',

    'sleep.title': 'Uyku Zamanlayıcı',
    'sleep.15m': '15 dk',
    'sleep.30m': '30 dk',
    'sleep.45m': '45 dk',
    'sleep.60m': '60 dk',
    'sleep.end_of_track': 'Şarkı Bitince Durdur',
    'sleep.end_track_short': 'Sonu',
    'sleep.off': 'Kapat',
    'sleep.toast_set': 'Uyku zamanlayıcısı: {min} dk',
    'sleep.toast_track': 'Şarkı bitiminde oynatma durdurulacak',
    'sleep.toast_off': 'Uyku zamanlayıcısı kapatıldı',
    'sleep.toast_done': 'Uyku zamanlayıcısı: Oynatma durduruldu',

    'lyrics.share_btn': 'Paylaş',
    'lyrics.select_lines_hint': 'Kart için 1-4 satır seçin',
    'lyrics.create_card': 'Kart Oluştur',
    'lyrics.resync_btn': 'Senkronize Et',
    'lyrics.reset_offset': '0.0s Sıfırla',
    'lyrics.share_modal_title': 'Söz Paylaşım Kartı',
    'lyrics.theme_mesh': 'Kapak Mesh',
    'lyrics.theme_dark': 'Koyu Cam',
    'lyrics.theme_light': 'Açık Minimal',
    'lyrics.download_png': 'PNG İndir',
    'lyrics.copy_share': 'Kopyala / Paylaş',
    'lyrics.word_synced': 'Kelime Senkronize',
    'lyrics.line_synced': 'Satır Senkronize',
    'lyrics.plain_text': 'Tam Metin',
    'lyrics.instrumental': 'Enstrümantal Ara',
    'lyrics.local_no_lyrics': 'Yerel Dosyada Söz Bulunamadı',
    'lyrics.local_no_lyrics_desc': 'Dosya yanında .lrc veya gömülü söz bulunamadı.',
    'lyrics.toast_max_lines': 'En fazla 4 satır seçebilirsiniz',
    'lyrics.toast_select_one': 'Lütfen en az 1 satır seçin',
    'lyrics.toast_card_downloaded': 'Söz kartı PNG olarak indirildi',
    'lyrics.toast_card_copied': 'Söz kartı panoya kopyalandı',

    'fx.title': 'Ses Motoru & FX',
    'fx.autoeq_label': 'AutoEq Kulaklık Profilleri',
    'fx.preset_flat': 'Düz / Flat',
    'fx.preset_bass': 'Bass Boost',
    'fx.preset_vocal': 'Vokal / Akustik',
    'fx.preset_studio': 'Stüdyo',
    'fx.tempo': 'Oynatma Hızı (Tempo)',
    'fx.crossfade': 'Crossfade (Geçiş)',
    'fx.crossfade_instant': '0s (Anlık)',
    'fx.crossfade_smooth': '8s (Akıcı)',
    'fx.normalization': 'Ses Dengeleme',
    'fx.skip_silence': 'Sessizliği Atla',
    'fx.yt_engine_note': 'YouTube video/IFrame modunda Tempo ve Crossfade aktiftir; 5-Bant EQ, Ses Dengeleme ve Sessizliği Atla doğrudan ses akışında / Masaüstünde / Android\'de çalışır.',
    'fx.dsp_active_note': 'Web Audio DSP aktif (5-Bant EQ • Kompresör • RMS Sessizlik Analizi)',

    'artist.albums': "Albümler ve Single'lar",
    'artist.album_count': '{count} Albüm',
    'search.songs': 'Şarkılar',
    'search.clips': 'Klipler',
    'search.albums': 'Albümler',
    'search.albums_sub': 'Albüm içeriğini ve parçalarını gör',
    'library.saved_albums': 'Kayıtlı Albümler',
    'album.badge': 'Albüm',
    'album.play_short': 'Oynat',
    'album.play_all': 'Tümünü Oynat',
    'album.shuffle': 'Karıştır',
    'album.queue_all': 'Sıraya Ekle',
    'album.save_title': 'Albümü Kütüphaneye Kaydet',
    'album.filter_placeholder': 'Parça ara...',
    'album.sort_original': 'Orijinal',
    'album.sort_title': 'Başlık',
    'album.sort_duration': 'Süre',
    'album.track_count': '{count} Parça',
    'album.loading': 'Albüm parçaları yükleniyor...',
    'album.error': 'Albüm içeriği yüklenemedi.',
    'album.queued_toast': '{title} sıraya eklendi ({count} parça)',

    'settings.theme_dark': 'Karanlık',
    'settings.theme_dark_sub': 'Obsidyen & Cam',
    'settings.theme_light': 'Açık',
    'settings.theme_light_sub': 'Net & Ferah',
    'settings.backup_export_sub': 'Arşiv ve ayarları indir',
    'settings.backup_import_sub': 'JSON dosyasından yükle',
    'about.role_sub': 'Kurfamüzik Geliştiricisi • Tasarım & Yazılım',
    'modal.close': 'Kapat',

    'player.mob_tab_stage': 'Çalan & Sözler',
    'player.mob_tab_queue': 'Sıradaki Liste',
    'player.mob_tab_fx': 'Ekolayzır & Ses',

    'stats.tab': 'İstatistikler',
    'stats.title': 'Dinleme İstatistikleri',
    'stats.week': 'Haftalık',
    'stats.month': 'Aylık',
    'stats.all': 'Tümü',
    'stats.total_time': 'Toplam Süre',
    'stats.tracks_played': 'Dinlenen Şarkı',
    'stats.top_artist_label': 'Favori Sanatçı',
    'stats.top_tracks': 'En Çok Dinlenen İlk 5 Şarkı',
    'stats.top_artists': 'En Çok Dinlenen İlk 5 Sanatçı',
    'stats.view_detailed': 'Detaylı Dinleme İstatistikleri',
    'stats.empty': 'Henüz yeterli dinleme verisi yok (30 sn+ dinlenen şarkılar kaydedilir).',
    'stats.plays_unit': '{count} kez'
  },
  en: {
    'nav.brand_sub': 'Desktop & Web',
    'nav.main_menu': 'Main Menu',
    'nav.explore': 'Explore',
    'nav.library': 'Library',
    'nav.search': 'Search',
    'nav.player_lyrics': 'Player & Lyrics',
    'nav.quick_actions': 'Quick Actions',
    'nav.download_link': 'Download YouTube Link',
    'nav.share_track': 'Share Track',
    'nav.profile_settings': 'Profile & Settings',
    'nav.developer': 'Developer',
    'nav.ad_free': 'Ad-Free',
    'nav.active_badge': 'Active',
    'nav.install_title': 'Kurfamüzik Desktop & Mobile Apps',
    'nav.install_sub': 'Desktop (.exe) • Android (.apk)',

    'topbar.search_placeholder': 'Search songs, artists or paste link...',
    'topbar.paste': 'Paste from Clipboard',
    'topbar.clear': 'Clear',
    'topbar.theme_to_light': 'Switch to Light Mode',
    'topbar.theme_to_dark': 'Switch to Dark Mode',
    'topbar.theme_toggle': 'Toggle Theme',
    'topbar.lang_toggle': 'Switch Language (TR / EN)',
    'topbar.default_nick': 'Listener',

    'hero.trend_badge': '#{rank} TURKEY TRENDING',
    'hero.default_title': "Today's Top Trending Songs",
    'hero.default_artist': 'Turkey Top Charts',
    'hero.listen_now': 'Listen Now',
    'hero.add_queue': 'Add to Queue',
    'hero.download': 'Download',
    'hero.prev_trend': 'Previous Trend',
    'hero.next_trend': 'Next Trend',

    'explore.tab_trends': 'Explore & For You',
    'explore.tab_discover': 'Mixes & Artists',
    'explore.tab_new': 'Albums & New',
    'explore.refresh_feed': 'Refresh Feed',
    'explore.quick_picks_title': 'Recently Played & Quick Picks',
    'explore.albums_for_you': 'Albums & New Releases',
    'explore.albums_auto_sub': 'Updates automatically from your listening history & charts',
    'explore.recommended_today': 'Recommended for Today',
    'explore.genre_label': 'Genre:',
    'explore.genre_all': 'All',
    'explore.genre_tr_pop': 'Trending Pop',
    'explore.genre_rap': 'Popular Rap',
    'explore.genre_acoustic': 'Acoustic & Lo-Fi',
    'explore.genre_chill': 'Late Night & Chill',
    'explore.genre_workout': 'Workout & Energy',
    'explore.genre_cinema': 'Movies & Series',
    'explore.yt_trends_title': 'Turkey Music Trends',
    'explore.show_all': 'Show All',
    'explore.show_all_count': 'Show All ({count})',
    'explore.show_less': 'Show Less',
    'explore.play_all': 'Play All',
    'explore.trend_tracklist_title': 'Trending Tracklist',
    'explore.featured_artists_title': 'Featured Artists',
    'explore.popular_mixes_title': 'Mixes for You',
    'explore.popular_artists_title': 'Popular Artists',
    'explore.featured_collections_title': 'Featured Tracks',
    'explore.new_releases_title': 'New Singles',
    'explore.scroll_left': 'Scroll Left',
    'explore.scroll_right': 'Scroll Right',
    'explore.trend_tag': '#{rank} Trend',

    'mix.daily_1': 'Daily Mix 1',
    'mix.daily_1_upper': 'DAILY MIX 1',
    'mix.acoustic': 'Acoustic Calm',
    'mix.acoustic_upper': 'ACOUSTIC CALM',
    'mix.rap': 'Turkish Drill & Rap',
    'mix.rap_upper': 'TURKISH DRILL & RAP',
    'mix.run': 'Run & Motivation',
    'mix.run_upper': 'RUN & MOTIVATION',
    'mix.run_sub_short': 'High BPM Club Remixes',
    'mix.run_sub': 'High energy Turkish club & remixes',

    'artist.back_explore': 'Back to Explore',
    'artist.back_search': 'Back to Search',
    'artist.back': 'Back',
    'artist.official_profile': 'Official Artist Profile',
    'artist.verified': 'Verified Artist',
    'artist.play_all': 'Play All Tracks',
    'artist.shuffle': 'Shuffle',
    'artist.popular_tracks': 'Popular Tracks',
    'artist.loading': 'Loading...',
    'artist.loading_tracks': 'Loading {name} tracks...',
    'artist.track_count': '{count} Tracks',
    'artist.listeners_m': '{val}M listeners',
    'artist.listeners_k': '{val}K listeners',
    'artist.profile_label': 'Artist Profile',
    'artist.no_tracks': 'Could not load tracklist.',
    'artist.error': 'Error',
    'artist.conn_error': 'Connection error occurred.',

    'search.filter_all': 'All',
    'search.filter_mv': 'Official Videos',
    'search.filter_live': 'Live',
    'search.filter_remix': 'Remix',
    'search.filter_acoustic': 'Acoustic',
    'search.filter_open': 'Ad-Free Open Catalog',
    'search.filter_open_title': 'Ad-free open catalog powered by Audius, Deezer & Apple',
    'search.paste': 'Paste',
    'search.recent_searches': 'Recent Searches',
    'search.go': 'Search',
    'search.clear': 'Clear',
    'search.recent_played': 'Recently Played',
    'search.browse_all': 'Browse All',
    'search.artists': 'Artists',
    'search.artists_sub': 'View profile & top tracks',
    'search.results_title': 'Search Results',
    'search.results_found': '{count} Results for "{query}"',
    'search.searching': 'Searching "{query}"...',
    'search.loading_msg': 'Fetching tracks and artists...',
    'search.sort_relevance': 'Relevance',
    'search.sort_views': 'Popularity',
    'search.sort_newest': 'Newest',
    'search.reset': 'Reset',
    'search.reset_title': 'Reset Filters',
    'search.empty_prompt': 'Type an artist, song title, or YouTube link to search.',
    'search.no_results': 'No Results Found',
    'search.no_results_title': 'No results found for "{query}"',
    'search.no_results_hint': 'Try another keyword or paste a direct YouTube link.',
    'search.source_open': 'Ad-Free Open Catalog',
    'search.source_direct': 'Direct Audio Stream',
    'search.yt_audio_suffix': 'Studio Audio',
    'search.cat_tr_pop': 'Turkish Pop',
    'search.cat_tr_rap': 'Turkish Rap & Drill',
    'search.cat_arabesk': 'Arabesk & Soul',
    'search.cat_rock': 'Anatolian Rock',
    'search.cat_acoustic': 'Acoustic & Lo-Fi',
    'search.cat_90s': "90s & Nostalgia",
    'search.cat_global': 'Global Hits',
    'search.cat_workout': 'Workout & Energy',

    'library.title': 'Library',
    'library.subtitle': 'Your playlists, Spotify & favorites',
    'library.play_all': 'Play All',
    'library.device_music': 'Device Music',
    'library.my_playlists': 'My Playlists',
    'library.spotify': 'Spotify',
    'library.favorites': 'Favorites',
    'library.custom_title': 'My Playlists',
    'library.playlist_count': '{count} Playlists',
    'library.new_playlist': 'New Playlist',
    'library.no_playlists_title': 'No custom playlists yet',
    'library.no_playlists_desc': 'Click "New Playlist" above to create your first playlist.',
    'library.tracks_count': '{count} Tracks',
    'library.delete_list': 'Delete Playlist',
    'library.refresh_list': 'Refresh Playlist',
    'library.empty_custom_list': 'This playlist is empty. Add tracks from Search or Explore.',
    'library.spotify_placeholder': 'Paste Spotify playlist, album or artist link...',
    'library.spotify_import': 'Import',
    'library.spotify_imported_title': 'Imported Spotify Playlists',
    'library.no_spotify_title': 'No Spotify Playlists Added Yet',
    'library.no_spotify_desc': 'Paste any Spotify playlist link above to import it instantly.',
    'library.empty_spotify_list': 'No tracks found in this Spotify playlist.',
    'library.fav_title': 'Favorite Tracks',
    'library.fav_saved_count': '{count} Saved Tracks',
    'library.fav_empty_title': 'Your favorites list is empty',
    'library.fav_empty_desc': 'Tap the heart icon next to any song to save it here.',
    'library.discover_music': 'Discover Music',
    'library.device_title': 'Device Music',
    'library.device_track_count': '{count} Tracks',
    'library.device_scan': 'Scan / Pick',
    'library.device_play_seq': 'Play in Order',
    'library.device_filter_placeholder': 'Search local tracks...',
    'library.device_empty_unscanned': 'Device audio has not been scanned yet',
    'library.device_empty_search': 'No local tracks match your filter',
    'library.device_scan_btn': 'Scan Device',
    'library.device_pick_btn': 'Select Music Files',
    'library.downloads_empty_title': 'No downloaded tracks',
    'library.downloads_empty_desc': 'Click the download button on any track for offline playback.',
    'library.offline_badge': 'Offline',
    'library.show_more_remaining': 'Show More ({count} Remaining)',

    'player.playlist_badge': 'Live Trend Selection',
    'player.yt_trends': 'Turkey Music Trends',
    'player.yt_trends_desc': "Today's top trending tracks.",
    'player.yt_live_hit': '#1 Live Hit ({dur})',
    'player.play_shuffle': 'Play All (Shuffle)',
    'player.tracklist': 'Tracklist',
    'player.filter_in_list': 'Filter in playlist...',
    'player.now_playing': 'Now Playing',
    'player.cover_mode': 'Cover',
    'player.video_mode': 'Video',
    'player.video_ad_notice': 'YouTube video mode may display ads; switch to Cover Mode for ad-free audio.',
    'player.dismiss_notice': 'Dismiss Notice',
    'player.live_video_area': 'Live Video Area',
    'player.fullscreen': 'Fullscreen',
    'player.select_song': 'Select a track',
    'player.no_playing': 'Nothing playing',
    'player.lyrics_title': 'Lyrics',
    'player.lyrics_synced': 'Synced',
    'player.lyrics_sync_title': 'Lyrics sync offset',
    'player.lyrics_sync_btn': 'Sync',
    'player.show_more_tracks': 'Show More ({count} More)',
    'player.show_less_tracks': 'Show Less (Top 7)',
    'player.no_matching_tracks': 'No matching tracks found.',
    'player.prev_song': 'Previous Track',
    'player.next_song': 'Next Track',
    'player.play_pause': 'Play/Pause',
    'player.shuffle': 'Shuffle',
    'player.repeat': 'Repeat',
    'player.fav_add': 'Add to Favorites',
    'player.lyrics': 'Lyrics',
    'player.pip': 'Mini Floating Player (PiP)',
    'player.devices': 'Connect Device (Bluetooth/Speaker)',
    'player.download_audio': 'Download Audio',
    'player.queue': 'Playback Queue',
    'player.mute': 'Mute',
    'player.playing_badge': 'Playing',
    'player.nav_lyrics_eq': 'Lyrics & EQ',
    'player.nav_lyrics_short': 'Lyrics',
    'player.play_btn': 'Play',
    'player.add_to_playlist': 'Add to Playlist',
    'player.add_to_queue': 'Add to Queue',
    'player.fav_remove': 'Remove from Favorites',

    'footer.toggle_theme': 'Switch Theme',

    'queue.title': 'Playback Queue',
    'queue.clear_title': 'Clear playback queue',
    'queue.empty_title': 'Your Queue is Empty',
    'queue.empty_desc': 'Add any song to the queue or start playing trending hits.',
    'queue.play_trends': 'Play Trending Hits',
    'queue.up_next': 'Up Next ({count})',
    'queue.playlist_prefix': 'Playlist: {name}',
    'queue.playlist_default': 'Playlist',
    'queue.hidden_prev': 'Previous {count} tracks hidden ({total} total)',
    'queue.more_in_queue': '+{count} more in queue',
    'queue.move_up': 'Move Up',
    'queue.move_down': 'Move Down',
    'queue.remove': 'Remove from Queue',

    'dl.title': 'Media Downloader',
    'dl.url_placeholder': 'Paste YouTube link...',
    'dl.folder_default': 'Downloads',
    'dl.folder_default_win': 'Default Downloads',
    'dl.change_folder': 'Change',
    'dl.downloading': 'Downloading...',
    'dl.bg_continuing': 'Continuing in background.',
    'dl.audio_m4a': 'Audio (M4A)',
    'dl.video_mp4': 'Video (MP4)',
    'dl.play_now': 'Play Now',
    'dl.preparing': 'Preparing...',
    'dl.preparing_bg': 'Preparing in background...',
    'dl.connecting': 'Connecting...',
    'dl.retry': 'Retry',
    'dl.get_app': 'Get App',
    'dl.open_folder': 'Open Folder',
    'dl.view_status': 'View download status',

    'share.title': 'Share Track',
    'share.copy': 'Copy',
    'share.copied': 'Copied!',
    'share.web_share': 'Share via App or Device',

    'settings.title': 'Settings',
    'settings.version': 'Version',
    'settings.browser': 'Browser',
    'settings.checking': 'Checking version...',
    'settings.new_update': 'New Update Available',
    'settings.location': 'Location: ',
    'settings.desktop_app': 'Desktop App',
    'settings.dl_folder': 'Download Folder',
    'settings.pick_folder': 'Choose Folder',
    'settings.desktop_shortcut': 'Desktop Shortcut',
    'settings.start_menu': 'Start Menu',
    'settings.win_startup': 'Launch on Windows Startup',
    'settings.min_tray': 'Minimize to Tray on Close',
    'settings.on': 'On',
    'settings.off': 'Off',
    'settings.open_folder': 'Open Folder',
    'settings.check_update': 'Check Updates',
    'settings.checking_update': 'Checking...',
    'settings.adfree_apps': 'Ad-Free APK & EXE',
    'settings.apps_btn': 'Apps',
    'settings.nickname': 'Listener Name',
    'settings.nickname_placeholder': 'Your name...',
    'settings.stat_listening': 'Listening',
    'settings.stat_played': 'Played',
    'settings.stat_downloads': 'Downloads',
    'settings.min_unit': '{val} min',
    'settings.dark_theme': 'Dark Theme',
    'settings.language': 'Language',
    'settings.ad_warning': 'Ad Warning',
    'settings.backup_export': 'Backup Data (JSON)',
    'settings.backup_import': 'Restore Backup',
    'settings.dynamic_bg': 'Dynamic Background',
    'settings.sponsorblock': 'SponsorBlock (Skip Clip Talks)',
    'settings.save_close': 'Save & Close',
    'settings.platform_web': 'Web',
    'settings.platform_desktop': 'Desktop',
    'settings.platform_android': 'Android',
    'settings.platform_ext': 'Extension',
    'settings.auto_update_web': 'Automatically updates on page load.',
    'settings.checking_remote': 'Checking latest version...',
    'settings.installed_ver': 'Installed version: v{ver}',
    'settings.ver_verified': 'Version verified',
    'settings.new_ver_available': 'New version available: v{remote} (Installed: v{installed})',
    'settings.up_to_date': 'Up to date (Latest: v{ver})',
    'settings.latest_published': 'Latest published version: v{ver}',
    'settings.quick_update_avail': 'v{ver} Available — Update Now',
    'settings.quick_update_ready': 'v{ver} Ready — Restart Now',
    'settings.subtitle': 'Kurfamüzik • Preferences & System',
    'settings.tab_general': 'General & Look',
    'settings.tab_general_short': 'General',
    'settings.tab_playback': 'Playback & Audio',
    'settings.tab_playback_short': 'Playback',
    'settings.tab_app': 'App & Downloads',
    'settings.tab_app_short': 'App',
    'settings.tab_data': 'Data & Backup',
    'settings.tab_data_short': 'Backup',
    'settings.tab_about': 'About',
    'settings.tab_about_short': 'About',
    'settings.sec_profile': 'Listener Profile',
    'settings.sec_appearance': 'Appearance & Language',
    'settings.dark_theme_desc': 'Deep low-glare dark interface',
    'settings.dynamic_bg_desc': 'Subtle ambient glow tinted by current cover art',
    'settings.lang_system': 'System',
    'settings.sec_playback': 'Playback Preferences',
    'settings.sponsorblock_desc': 'Auto-skip music video intros and sponsor segments',
    'settings.ad_warning_desc': 'Ad-free protection notice in web browser mode',
    'settings.sec_audio_fx': 'Audio Engine & Equalizer',
    'settings.open_eq_fx': 'Quick EQ & FX Studio',
    'settings.open_eq_fx_desc': '5-band studio equalizer, sub-bass, clarity & 3D spatial',
    'settings.open_eq_btn': 'Open EQ',
    'settings.sec_stats': 'Statistics',
    'settings.sec_backup': 'Backup & Restore',
    'settings.sec_backup_summary': 'Summary',
    'settings.bk_favs': 'Favorites',
    'settings.bk_lists': 'Playlists',
    'settings.bk_storage': 'Storage',
    'settings.backup_info': 'Your favorites, playlists, and preferences are saved in one JSON file.',
    'settings.clear_cache': 'Clear Cache',
    'settings.clear_cache_desc': 'Resets cache without touching your favorites or playlists',
    'settings.clear_cache_btn': 'Clear',
    'settings.sec_about': 'About',
    'about.links_title': 'Contact & Links',
    'about.email_label': 'Email',
    'fx.subtitle_pro': '5-Band EQ • Bass • Clarity',
    'fx.reset_all': 'Reset',
    'fx.preset_club': 'Club / Night',
    'fx.preset_treble': 'Deep Treble',
    'fx.bass_boost': 'Bass Boost',
    'fx.clarity': 'Clarity',
    'fx.spatial_3d': '3D Spatial Sound',

    'engine.browser_mode': 'Browser Mode',
    'engine.apk_active': 'APK Native Engine Active (Ad-Free)',
    'engine.desktop_active': 'Desktop App Active (Ad-Free)',
    'engine.ext_active': 'Extension Engine Active (Ad-Free)',
    'engine.adblock_active': 'Ad Blocker Active (Ad-Free)',
    'engine.watching': 'Detecting Installation...',
    'engine.adblock_detected_btn': 'Ad Blocker Active ({name})',
    'engine.adblock_watching_btn': '{store} Opened — Click Add',
    'engine.adblock_add_btn': 'Add Ad Blocker for {name} ({store})',
    'engine.adblock_hint_active': 'Ad blocker detected in your browser. Tracks play directly without warnings.',
    'engine.adblock_hint_watching': 'Click "Add" in the opened store tab; Kurfamüzik will detect it automatically.',
    'engine.adblock_hint_default': 'Opens the recommended ad blocker store page for your browser and auto-detects once installed.',

    'cpl.title': 'New Playlist',
    'cpl.name_label': 'Playlist Name',
    'cpl.placeholder': 'e.g. Night Drive, Workout Energy...',
    'cpl.cancel': 'Cancel',
    'cpl.create': 'Create',

    'atp.title': 'Add to Playlist',
    'atp.new_list': 'Create New Playlist',
    'atp.no_lists': 'No playlists yet. Create one below.',

    'dp.title': 'Audio Output',
    'dp.default_output': 'System Default Output',
    'dp.active_output': 'Active audio output',
    'dp.devices': 'Devices',
    'dp.refresh': 'Refresh',
    'dp.scanning': 'Scanning available audio devices...',
    'dp.unlock_title': 'Show Device Names',
    'dp.unlock_desc': 'Browser security requires permission to display Bluetooth or headphone names (AirPods, Buds, etc.).',
    'dp.unlock_btn': 'Enable Device Names',
    'dp.active_pill': 'Active',
    'dp.bt_headset': 'Bluetooth / Headphones',
    'dp.sys_default': 'System Default',
    'dp.ext_speaker': 'External Speaker',
    'dp.no_devices': 'System default output is active. Use your device audio controls or Bluetooth settings.',
    'dp.fallback_msg': 'Audio is routed directly to your connected speaker or headphones.',
    'dp.unsupported': 'Your browser does not support output device switching. System default is active.',

    'install.title': 'Kurfamüzik Apps',
    'install.subtitle': 'Ad-free desktop and mobile builds',
    'install.native_group': 'Native Apps (EXE & APK)',
    'install.apk_title': 'Download Android APK',
    'install.apk_sub': 'Background play • Ad-free • Offline downloads',
    'install.win_title': 'Windows Installer (.exe)',
    'install.win_sub': 'Setup wizard • Auto-update',
    'install.web_group': 'Web Browser Options',
    'install.adblock_title': 'Browser Ad Blocker',
    'install.adblock_hint': 'Install the recommended ad blocker extension for ad-free listening on the web.',
    'install.adguard_add': 'Add Ad Blocker',
    'install.pwa_add': 'Add to Home Screen (Web App)',

    'dupd.available': 'New Update Available',
    'dupd.subtitle_ready': 'New version ready',
    'dupd.downloading': 'Downloading Update',
    'dupd.ready': 'Update Ready to Install',
    'dupd.error': 'Update Failed',
    'dupd.consent': 'Do you want to download and install the new version? Music continues playing seamlessly.',
    'dupd.later': 'Later',
    'dupd.download_update': 'Download & Update',
    'dupd.bg_hide': 'Minimize to Background',
    'dupd.close_apply': 'Install on Exit',
    'dupd.restart_update': 'Restart & Update',
    'dupd.close': 'Close',
    'dupd.retry': 'Retry',
    'dupd.sha_protected': 'SHA-256 Protected',
    'dupd.integrity_check': 'Integrity Check',
    'dupd.verifying_sha': 'Verifying SHA-256 signature...',
    'dupd.downloading_pkg': 'Downloading update package...',
    'dupd.verifying_btn': 'Verifying...',
    'dupd.verified_ready': 'Verified & Ready',
    'dupd.completed': '{size} Completed',
    'dupd.packaged': 'Packaged',
    'dupd.ready_badge': 'Ready',
    'dupd.restart_hint': 'Package verified! Restarting app to apply update...',
    'dupd.manual_restart_hint': 'Update package verified. Restart now to apply immediately.',
    'dupd.err_fallback': 'An error occurred while downloading the update package.',

    'adw.title': 'Ad Notice',
    'adw.subtitle': 'Ad-Free Native Engine Recommendation',
    'adw.body': 'YouTube ads may appear on this track in web browsers. Install our native app for 100% ad-free playback.',
    'adw.welcome_title': 'Welcome! Ad-Free Protection',
    'adw.welcome_sub': 'First Visit • Device Recommendation',
    'adw.welcome_body': 'Welcome! Kurfamüzik offers a free, ad-free music experience. No ad blocker was detected in your browser, so YouTube tracks may show ads; enable one-click protection below.',
    'adw.continue_btn': 'Play in Browser Anyway',
    'adw.welcome_continue': 'Continue in Browser for Now',
    'adw.never_btn': "Don't remind me again",
    'adw.detected': 'Device Detected',
    'adw.win_cta': 'Download Windows Installer (.exe • Ad-Free)',
    'adw.android_cta': 'Download Android APK (Ad-Free)',
    'adw.adguard_cta': 'Add Ad Blocker for {name} (Official Store)',
    'adw.adguard_short': 'Add Ad Blocker for {name}',
    'adw.ios_cta': 'Get Ad Blocker for Safari (App Store)',
    'adw.all_install_opts': 'All Install Options',
    'adw.open_catalog': 'Search Ad-Free Open Catalog',
    'adw.webapk': 'Browser Shortcut (WebAPK)',
    'adw.android_detected': 'Android Detected',

    'gauth.title': 'Sign in with Google',
    'gauth.subtitle': 'Choose an account to continue to Kurfamüzik',
    'gauth.add_title': 'Connect another Google Account',
    'gauth.name_placeholder': 'Full Name...',
    'gauth.signin_btn': 'Sign In with This Account',
    'gauth.use_other': 'Use another Google account',
    'gauth.privacy_note': 'Your account and playlists are kept safe in local storage and cloud sync.',

    'pip.expand': 'Expand to Full View',
    'pip.close': 'Close',

    'toast.lang_changed': 'Language switched to English',
    'toast.dark_on': 'Dark Mode Enabled',
    'toast.dark_off': 'Light Mode Enabled',
    'toast.unmuted': 'Unmuted',
    'toast.muted': 'Muted',
    'toast.queue_empty': 'Queue is empty',
    'toast.shuffle_on': 'Shuffle: On',
    'toast.shuffle_off': 'Shuffle: Off',
    'toast.repeat_off': 'Repeat: Off',
    'toast.repeat_all': 'Repeat: All',
    'toast.repeat_one': 'Repeat: One Track',
    'toast.queue_cleared': 'Playback queue cleared',
    'toast.removed_from_queue': 'Removed from queue: {title}',
    'toast.fav_added': 'Added to favorites: {title}',
    'toast.fav_removed': 'Removed from favorites: {title}',
    'toast.select_track_first': 'Select a track first',
    'toast.profile_saved': 'Profile settings saved',
    'toast.share_copied': 'Track link copied to clipboard!',
    'toast.all_songs_shown': 'Showing all tracks',
    'toast.category_loading': 'Loading {genre}...',
    'toast.trends_playing': 'Playing YouTube Trends',
    'toast.search_enter_query': 'Please enter a song, artist or link',
    'toast.filters_reset': 'Filters and sorting reset',
    'toast.sort_relevance': 'Sorted by relevance',
    'toast.sort_views': 'Sorted by popularity & duration',
    'toast.sort_newest': 'Sorted by newest tracks',
    'toast.clipboard_error': 'Clipboard access denied, please paste manually',
    'toast.yt_direct_stream': 'YouTube link loaded into stream',
    'toast.alt_source_trying': 'Trying alternate stream source...',
    'toast.copyright_skip': 'Track restricted by owner, skipping to next track',
    'toast.too_many_errors': 'Stopped after too many unplayable tracks in a row',
    'toast.history_cleared': 'Search history cleared',
    'toast.dl_folder_updated': 'Download folder updated: {dir}',
    'toast.dl_folder_desktop_only': 'Folder selection is supported in the desktop app',
    'toast.opening_folder': 'Opening app folder...',
    'toast.ad_warn_off': 'Ad warning disabled',
    'toast.ad_warn_on': 'Ad warning enabled',
    'toast.ad_warn_never': 'Ad warning will not be shown again',
    'toast.playlist_created': 'Playlist "{name}" created!',
    'toast.playlist_created_added': '"{name}" created and track added!',
    'toast.playlist_deleted': 'Playlist deleted',
    'toast.track_removed_playlist': 'Track removed from playlist',
    'toast.enter_playlist_name': 'Please enter a playlist name',
    'toast.track_added_playlist': '"{title}" added to "{name}"',
    'toast.track_already_playlist': '"{title}" is already in "{name}"',
    'toast.audio_routed': 'Audio routed to: {label}',
    'toast.video_mode_on': 'Live Video Mode Enabled',
    'toast.audio_mode_on': 'Ad-Free Audio Mode Active',
    'toast.local_no_video': 'Video mode is not available for local audio files',
    'toast.sponsor_skipped': 'Skipped clip intro/talking',
    'toast.speed_set': 'Playback speed: {val}x',
    'toast.crossfade_set': 'Crossfade: {val}s',
    'toast.norm_on': 'Loudness Normalization: On',
    'toast.norm_off': 'Loudness Normalization: Off',
    'toast.silence_on': 'Skip Silence: On',
    'toast.silence_off': 'Skip Silence: Off',
    'toast.dynbg_on': 'Dynamic Liquid Background: On',
    'toast.dynbg_off': 'Dynamic Liquid Background: Off',
    'toast.sb_on': 'SponsorBlock: On',
    'toast.sb_off': 'SponsorBlock: Off',

    'sleep.title': 'Sleep Timer',
    'sleep.15m': '15 min',
    'sleep.30m': '30 min',
    'sleep.45m': '45 min',
    'sleep.60m': '60 min',
    'sleep.end_of_track': 'Stop After Track',
    'sleep.end_track_short': 'Track End',
    'sleep.off': 'Off',
    'sleep.toast_set': 'Sleep timer: {min} min',
    'sleep.toast_track': 'Playback will stop after this track',
    'sleep.toast_off': 'Sleep timer turned off',
    'sleep.toast_done': 'Sleep timer: Playback stopped',

    'lyrics.share_btn': 'Share',
    'lyrics.select_lines_hint': 'Select 1-4 lines for card',
    'lyrics.create_card': 'Create Card',
    'lyrics.resync_btn': 'Sync',
    'lyrics.reset_offset': 'Reset 0.0s',
    'lyrics.share_modal_title': 'Lyrics Share Card',
    'lyrics.theme_mesh': 'Cover Mesh',
    'lyrics.theme_dark': 'Dark Glass',
    'lyrics.theme_light': 'Light Minimal',
    'lyrics.download_png': 'Download PNG',
    'lyrics.copy_share': 'Copy / Share',
    'lyrics.word_synced': 'Word Synced',
    'lyrics.line_synced': 'Line Synced',
    'lyrics.plain_text': 'Full Text',
    'lyrics.instrumental': 'Instrumental Break',
    'lyrics.local_no_lyrics': 'No Lyrics Found for Local File',
    'lyrics.local_no_lyrics_desc': 'No sidecar .lrc or embedded lyrics were found.',
    'lyrics.toast_max_lines': 'You can select up to 4 lines',
    'lyrics.toast_select_one': 'Please select at least 1 line',
    'lyrics.toast_card_downloaded': 'Lyrics card downloaded as PNG',
    'lyrics.toast_card_copied': 'Lyrics card copied to clipboard',

    'fx.title': 'Audio Engine & FX',
    'fx.autoeq_label': 'AutoEq Headphone Profiles',
    'fx.preset_flat': 'Flat',
    'fx.preset_bass': 'Bass Boost',
    'fx.preset_vocal': 'Vocal / Acoustic',
    'fx.preset_studio': 'Studio',
    'fx.tempo': 'Playback Speed (Tempo)',
    'fx.crossfade': 'Crossfade',
    'fx.crossfade_instant': '0s (Instant)',
    'fx.crossfade_smooth': '8s (Smooth)',
    'fx.normalization': 'Loudness Normalization',
    'fx.skip_silence': 'Skip Silence',
    'fx.yt_engine_note': 'In YouTube IFrame mode, Tempo and Crossfade are active; 5-Band EQ, Normalization and Skip Silence run on Direct Audio / Desktop / Android streams.',
    'fx.dsp_active_note': 'Web Audio DSP active (5-Band EQ • Compressor • RMS Silence Detector)',

    'artist.albums': 'Albums & Singles',
    'artist.album_count': '{count} Albums',
    'search.songs': 'Songs',
    'search.clips': 'Videos',
    'search.albums': 'Albums',
    'search.albums_sub': 'View album & full tracklist',
    'library.saved_albums': 'Saved Albums',
    'album.badge': 'Album',
    'album.play_short': 'Play',
    'album.play_all': 'Play All',
    'album.shuffle': 'Shuffle',
    'album.queue_all': 'Add to Queue',
    'album.save_title': 'Save Album to Library',
    'album.filter_placeholder': 'Filter tracks...',
    'album.sort_original': 'Original',
    'album.sort_title': 'Title',
    'album.sort_duration': 'Duration',
    'album.track_count': '{count} Tracks',
    'album.loading': 'Loading album tracks...',
    'album.error': 'Could not load album details.',
    'album.queued_toast': '{title} added to queue ({count} tracks)',

    'settings.theme_dark': 'Dark',
    'settings.theme_dark_sub': 'Obsidian & Glass',
    'settings.theme_light': 'Light',
    'settings.theme_light_sub': 'Crisp & Airy',
    'settings.backup_export_sub': 'Download archive & preferences',
    'settings.backup_import_sub': 'Restore from JSON file',
    'about.role_sub': 'Creator of Kurfamüzik • Design & Engineering',
    'modal.close': 'Close',

    'player.mob_tab_stage': 'Playing & Lyrics',
    'player.mob_tab_queue': 'Up Next',
    'player.mob_tab_fx': 'EQ & Audio',

    'stats.tab': 'Statistics',
    'stats.title': 'Listening Statistics',
    'stats.week': 'Weekly',
    'stats.month': 'Monthly',
    'stats.all': 'All Time',
    'stats.total_time': 'Total Time',
    'stats.tracks_played': 'Tracks Played',
    'stats.top_artist_label': 'Top Artist',
    'stats.top_tracks': 'Top 5 Most Played Songs',
    'stats.top_artists': 'Top 5 Most Played Artists',
    'stats.view_detailed': 'View Detailed Listening Stats',
    'stats.empty': 'Not enough listening data yet (tracks played 30s+ are recorded).',
    'stats.plays_unit': '{count} plays'
  }
};

function detectSystemLanguage() {
  try {
    const navLang = (typeof navigator !== 'undefined' && (navigator.language || (Array.isArray(navigator.languages) && navigator.languages[0]))) || 'tr';
    return String(navLang).toLowerCase().startsWith('tr') ? 'tr' : 'en';
  } catch (_) {
    return 'tr';
  }
}

function getAppLanguage() {
  try {
    if (typeof state !== 'undefined' && state && (state.lang === 'tr' || state.lang === 'en')) {
      return state.lang;
    }
    const stored = localStorage.getItem('kurfa_lang');
    if (stored === 'en' || stored === 'tr') return stored;
  } catch (_) {}
  return detectSystemLanguage();
}

function t(key, params) {
  const lang = getAppLanguage();
  const dict = KURFA_I18N[lang] || KURFA_I18N.tr;
  let str = (dict && dict[key] !== undefined) ? dict[key] : (KURFA_I18N.tr[key] !== undefined ? KURFA_I18N.tr[key] : key);
  if (params && typeof params === 'object') {
    Object.keys(params).forEach((k) => {
      str = str.replace(new RegExp(`\\{${k}\\}`, 'g'), String(params[k] ?? ''));
    });
  }
  return str;
}

function applyAppLanguage(lang, persist = false) {
  const cleanLang = (lang === 'en') ? 'en' : 'tr';
  if (typeof state !== 'undefined' && state) {
    state.lang = cleanLang;
  }
  if (typeof document !== 'undefined' && document.documentElement) {
    document.documentElement.lang = cleanLang;
  }
  if (persist) {
    try { localStorage.setItem('kurfa_lang', cleanLang); } catch (_) {}
    if (typeof scheduleSaveUserDataToDesktop === 'function') {
      scheduleSaveUserDataToDesktop();
    }
  }

  if (typeof document !== 'undefined') {
    const hasActiveTrack = Boolean(typeof state !== 'undefined' && state && state.currentTrack);
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      if (hasActiveTrack && (el.id === 'player-artist' || el.id === 'player-artist-mobile' || el.id === 'deck-artist' || el.id === 'lyrics-status-label' || el.id === 'lyrics-source-badge')) {
        return;
      }
      const k = el.getAttribute('data-i18n');
      if (k) el.textContent = t(k);
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const k = el.getAttribute('data-i18n-placeholder');
      if (k) el.setAttribute('placeholder', t(k));
    });
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
      const k = el.getAttribute('data-i18n-title');
      if (k) el.setAttribute('title', t(k));
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const k = el.getAttribute('data-i18n-aria');
      if (k) el.setAttribute('aria-label', t(k));
    });

    const topLangBtn = document.getElementById('topbar-lang-btn');
    if (topLangBtn) topLangBtn.textContent = cleanLang.toUpperCase();

    const btnSys = document.getElementById('btn-lang-system');
    const btnTr = document.getElementById('btn-lang-tr');
    const btnEn = document.getElementById('btn-lang-en');
    let storedLang = null;
    try { storedLang = localStorage.getItem('kurfa_lang'); } catch (_) {}
    const isSystemMode = storedLang !== 'tr' && storedLang !== 'en';
    const activeCls = ['bg-primary', 'text-on-primary'];
    const inactiveCls = ['text-on-surface-variant', 'hover:text-on-surface'];
    const setLangPill = (el, on) => {
      if (!el) return;
      if (on) {
        el.classList.add(...activeCls);
        el.classList.remove(...inactiveCls);
      } else {
        el.classList.remove(...activeCls);
        el.classList.add(...inactiveCls);
      }
    };
    setLangPill(btnSys, isSystemMode);
    setLangPill(btnTr, !isSystemMode && cleanLang === 'tr');
    setLangPill(btnEn, !isSystemMode && cleanLang === 'en');
    if (typeof initKurfaScrollRails === 'function') {
      requestAnimationFrame(initKurfaScrollRails);
    }
  }

  if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
    callExtensionBridge('SET_LANGUAGE', { lang: cleanLang }, 2000).catch(() => {});
  }

  if (typeof state !== 'undefined' && typeof DOM !== 'undefined') {
    try {
      updateProfileUI();
      updateLocalEngineStatusUI();
      refreshAppVersionAndUpdateStatus();
      renderPopularArtistsGrid();
      renderTrendlerCardsGrid();
      renderHomeTracklistTable();
      renderPlaylistTracksTable();
      renderFavoritesTable();
      renderDownloadsTable();
      renderCustomPlaylistsGrid();
      renderSpotifyPlaylistsGrid();
      if (typeof renderDeviceAudioList === 'function') {
        renderDeviceAudioList(document.getElementById('device-audio-filter')?.value || '');
      }
      if (typeof renderSearchDiscoveryHub === 'function') {
        renderSearchDiscoveryHub();
      }
      renderQueueDrawerList();
      updateKutuphaneBadges();
      updateQuickFavCount();
      updatePlaylistHeroUI();
      if (typeof getCurrentHeroTrack === 'function') {
        const slides = typeof getHeroTracks === 'function' ? getHeroTracks() : [];
        const hTrk = getCurrentHeroTrack();
        if (hTrk) renderHeroSlide(hTrk, heroSlideIndex, slides.length || 1);
      }
      syncShuffleRepeatUI();
      if (state.currentSearchResults && state.currentSearchResults.length > 0 && state.currentSearchQuery) {
        renderSearchResults(state.currentSearchResults, state.currentSearchQuery);
      }
      if (state.activeCustomPlaylistId) {
        openCustomPlaylistDetail(state.activeCustomPlaylistId);
      }
      if (state.activeSpotifyPlaylistId) {
        openSpotifyPlaylistDetail(state.activeSpotifyPlaylistId);
      }
      if (typeof renderDesktopUpdateModalContent === 'function' && typeof __kurfaDesktopUpdateState !== 'undefined' && __kurfaDesktopUpdateState.phase !== 'idle') {
        renderDesktopUpdateModalContent();
      }
      if (state.currentTrack) {
        updatePlayerTrackUI(state.currentTrack);
      } else {
        updatePlayerTrackUI(null);
      }
    } catch (_) {}
  }
}

function setLanguageSystem() {
  try { localStorage.removeItem('kurfa_lang'); } catch (_) {}
  const sysLang = detectSystemLanguage();
  applyAppLanguage(sysLang, false);
  if (typeof scheduleSaveUserDataToDesktop === 'function') {
    scheduleSaveUserDataToDesktop();
  }
  if (typeof showToast === 'function') {
    showToast(t('toast.lang_changed'));
  }
}

function toggleAppLanguage() {
  const next = getAppLanguage() === 'tr' ? 'en' : 'tr';
  applyAppLanguage(next, true);
  if (typeof showToast === 'function') {
    showToast(t('toast.lang_changed'));
  }
}

window.t = t;
window.getAppLanguage = getAppLanguage;
window.applyAppLanguage = applyAppLanguage;
window.setLanguageSystem = setLanguageSystem;
window.toggleAppLanguage = toggleAppLanguage;

// Base API endpoint resolver for cross-origin hosting (GitHub Pages / local preview / KurfaTest -> Worker API)
const __isKurfaTestEnv = typeof window !== 'undefined' && (() => {
  try {
    if (window.location.hostname === 'kurfatest.kurfa.workers.dev') return true;
    return new URLSearchParams(window.location.search || '').get('kurfatest') === '1';
  } catch (_) {
    return window.location.hostname === 'kurfatest.kurfa.workers.dev';
  }
})();
const __isLocalStaticPreview = typeof window !== 'undefined' &&
  (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') &&
  window.location.port !== '8787';
const API_BASE = __isKurfaTestEnv
  ? (window.location.hostname === 'kurfatest.kurfa.workers.dev' ? '' : 'https://kurfatest.kurfa.workers.dev')
  : ((typeof window !== 'undefined' && (window.location.origin.includes('github.io') || window.location.protocol === 'file:' || __isLocalStaticPreview))
    ? 'https://kurfanova.kurfa.workers.dev'
    : '');

function renderKurfaTestBadge() {
  if (!__isKurfaTestEnv || typeof document === 'undefined') return;
  if (document.getElementById('kurfatest-env-badge')) return;

  if (!document.getElementById('kurfatest-env-badge-style')) {
    const styleEl = document.createElement('style');
    styleEl.id = 'kurfatest-env-badge-style';
    styleEl.textContent = `
      #kurfatest-env-badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        height: 24px;
        padding: 0 9px;
        border-radius: 9999px;
        font-size: 10px;
        font-weight: 800;
        letter-spacing: 0.08em;
        line-height: 1;
        color: #b45309;
        background: rgba(245, 158, 11, 0.12);
        border: 1px solid rgba(245, 158, 11, 0.34);
        backdrop-filter: blur(16px) saturate(170%);
        -webkit-backdrop-filter: blur(16px) saturate(170%);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.22);
        user-select: none;
        pointer-events: auto;
        flex-shrink: 0;
      }
      html.dark-mode #kurfatest-env-badge,
      html.dark #kurfatest-env-badge {
        color: #fcd34d;
        background: rgba(245, 158, 11, 0.14);
        border-color: rgba(251, 191, 36, 0.32);
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.12);
      }
      #kurfatest-env-badge .kurfatest-dot {
        width: 6px;
        height: 6px;
        border-radius: 9999px;
        background: #f59e0b;
        box-shadow: 0 0 8px rgba(245, 158, 11, 0.75);
      }
      #kurfatest-env-badge.is-floating {
        position: fixed;
        left: 14px;
        bottom: 94px;
        z-index: 45;
      }
    `;
    (document.head || document.documentElement).appendChild(styleEl);
  }

  const badge = document.createElement('span');
  badge.id = 'kurfatest-env-badge';
  badge.title = 'KurfaTest Staging Ortamı (Canlıdan izole)';
  badge.setAttribute('aria-label', 'KurfaTest Staging Ortamı');
  badge.innerHTML = '<span class="kurfatest-dot" aria-hidden="true"></span><span>TEST</span>';

  const langBtn = document.getElementById('topbar-lang-btn');
  if (langBtn && langBtn.parentNode) {
    langBtn.parentNode.insertBefore(badge, langBtn);
  } else if (document.body) {
    badge.classList.add('is-floating');
    document.body.appendChild(badge);
  }
}

// =============================================================================
// 0.5 ZERO-SERVER CLIENT BRIDGE (ANDROID APK + WEB EXTENSION + AUDIUS)
// =============================================================================

const __kurfaPendingBridge = new Map();
let __kurfaBridgeSeq = 0;

function isAndroidNativeEngine() {
  try {
    return Boolean(
      typeof window !== 'undefined' &&
      window.KurfaAndroidBridge &&
      typeof window.KurfaAndroidBridge.isNativeEngineReady === 'function' &&
      window.KurfaAndroidBridge.isNativeEngineReady()
    );
  } catch (e) {
    return false;
  }
}

function getAndroidExoBridge() {
  try {
    if (typeof window === 'undefined') return null;
    if (window.KurfaAndroid && typeof window.KurfaAndroid.playNativeExo === 'function') {
      return window.KurfaAndroid;
    }
    if (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.playNativeExo === 'function') {
      return window.KurfaAndroidBridge;
    }
  } catch (e) {}
  return null;
}

function hasNativeExoPlayer() {
  return Boolean(getAndroidExoBridge());
}

function getBrowserExtensionMode() {
  try {
    return (typeof document !== 'undefined' && document.documentElement && document.documentElement.dataset && document.documentElement.dataset.kurfaExt) || '';
  } catch (e) {
    return '';
  }
}

const KURFA_ADGUARD_STORES = {
  chrome: {
    id: 'chrome',
    name: 'Chrome',
    storeName: 'Chrome Web Mağazası',
    url: 'https://chromewebstore.google.com/detail/adguard-adblocker/bgnkhhnnamicmpeenaelnjfhikgbkllg'
  },
  edge: {
    id: 'edge',
    name: 'Microsoft Edge',
    storeName: 'Edge Eklenti Mağazası',
    url: 'https://microsoftedge.microsoft.com/addons/detail/pdffkfellgipmhklpdmokmckkkfcopbh'
  },
  firefox: {
    id: 'firefox',
    name: 'Firefox',
    storeName: 'Firefox Add-ons',
    url: 'https://addons.mozilla.org/firefox/addon/adguard-adblocker/'
  },
  opera: {
    id: 'opera',
    name: 'Opera',
    storeName: 'Opera Add-ons',
    url: 'https://addons.opera.com/en/extensions/details/adguard/'
  },
  'safari-mac': {
    id: 'safari-mac',
    name: 'Safari',
    storeName: 'Mac App Store',
    url: 'https://apps.apple.com/app/adguard-for-safari/id1440147259'
  },
  'safari-ios': {
    id: 'safari-ios',
    name: 'Safari',
    storeName: 'App Store',
    url: 'https://apps.apple.com/app/adguard/id1047223162'
  }
};

let __kurfaAdBlockerDetected = false;
if (typeof window !== 'undefined') window.__kurfaAdBlockerDetected = false;
let __kurfaAdBlockerCheckedAt = 0;
let __kurfaAdBlockerInflight = null;
let __kurfaAdBlockerWatcherTimer = null;
let __kurfaAdBlockerWatching = false;

function detectBrowserExtensionStore(explicitKey) {
  if (explicitKey) {
    if (explicitKey === 'safari') {
      const plat = detectUserDevicePlatform();
      return plat === 'ios' ? KURFA_ADGUARD_STORES['safari-ios'] : KURFA_ADGUARD_STORES['safari-mac'];
    }
    if (KURFA_ADGUARD_STORES[explicitKey]) return KURFA_ADGUARD_STORES[explicitKey];
  }
  try {
    const ua = String(navigator.userAgent || '');
    const plat = detectUserDevicePlatform();
    if (/opr\/|opera/i.test(ua)) return KURFA_ADGUARD_STORES.opera;
    if (/edg\/|edga\/|edgios\//i.test(ua)) return KURFA_ADGUARD_STORES.edge;
    if (/firefox|fxios/i.test(ua)) return KURFA_ADGUARD_STORES.firefox;
    if (plat === 'ios' && /safari/i.test(ua) && !/crios|fxios|edgios|opios/i.test(ua)) {
      return KURFA_ADGUARD_STORES['safari-ios'];
    }
    if (plat === 'macos' && /safari/i.test(ua) && !/chrome|crios|chromium|edg|opr|firefox/i.test(ua)) {
      return KURFA_ADGUARD_STORES['safari-mac'];
    }
  } catch (e) {}
  return KURFA_ADGUARD_STORES.chrome;
}

function isBrowserAdBlockerActive() {
  return Boolean(__kurfaAdBlockerDetected);
}
window.isBrowserAdBlockerActive = isBrowserAdBlockerActive;

function updateLocalEngineStatusUI() {
  if (typeof document === 'undefined') return;
  const targets = [
    document.getElementById('kurfa-local-engine-status'),
    document.getElementById('settings-engine-status')
  ].filter(Boolean);

  const extMode = getBrowserExtensionMode();
  const adBlockerActive = isBrowserAdBlockerActive();
  let label = t('engine.browser_mode');
  let cls = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-surface-container text-on-surface-variant whitespace-nowrap flex-shrink-0';
  if (isAndroidNativeEngine()) {
    label = t('engine.apk_active');
    cls = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-500 whitespace-nowrap flex-shrink-0';
  } else if (extMode && extMode.startsWith('desktop')) {
    label = t('engine.desktop_active');
    cls = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-500 whitespace-nowrap flex-shrink-0';
  } else if (extMode) {
    label = t('engine.ext_active');
    cls = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-500 whitespace-nowrap flex-shrink-0';
  } else if (adBlockerActive) {
    label = t('engine.adblock_active');
    cls = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/15 text-emerald-500 whitespace-nowrap flex-shrink-0';
  } else if (__kurfaAdBlockerWatching) {
    label = t('engine.watching');
    cls = 'px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/10 text-amber-500 whitespace-nowrap flex-shrink-0';
  }
  targets.forEach((el) => {
    el.textContent = label;
    el.className = cls;
  });

  const isNativeDesktop = Boolean(extMode && extMode.startsWith('desktop'));
  const isNativeAndroid = isAndroidNativeEngine();
  const hideInstallAndFooter = isNativeDesktop || isNativeAndroid;

  const sidebarInstallBtn = document.getElementById('btn-sidebar-install-apk');
  if (sidebarInstallBtn) {
    const wrap = sidebarInstallBtn.parentElement;
    if (wrap) wrap.classList.toggle('hidden', hideInstallAndFooter);
    sidebarInstallBtn.classList.toggle('hidden', hideInstallAndFooter);
  }
  const siteFooter = document.getElementById('site-footer');
  if (siteFooter) {
    siteFooter.classList.toggle('hidden', hideInstallAndFooter);
  }

  const isAdFreeEnv = hasAdFreePlaybackEnvironment();
  const sidebarPill = document.getElementById('sidebar-adfree-pill');
  if (sidebarPill) {
    sidebarPill.textContent = isAdFreeEnv ? t('nav.active_badge') : t('nav.ad_free');
    sidebarPill.className = isAdFreeEnv
      ? 'px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-emerald-500/15 text-emerald-500 whitespace-nowrap flex-shrink-0 leading-none'
      : 'px-1.5 py-0.5 rounded-full text-[9px] font-bold bg-primary/15 text-primary whitespace-nowrap flex-shrink-0 leading-none';
  }

  const detectedStore = detectBrowserExtensionStore();
  const storeBtn = document.getElementById('btn-install-store-adblock');
  if (storeBtn && storeBtn.tagName === 'A') {
    storeBtn.href = detectedStore.url;
  }
  const storeBtnLabel = document.getElementById('btn-install-store-adblock-label');
  if (storeBtnLabel) {
    if (adBlockerActive) {
      storeBtnLabel.textContent = t('engine.adblock_detected_btn', { name: detectedStore.name });
    } else if (__kurfaAdBlockerWatching) {
      storeBtnLabel.textContent = t('engine.adblock_watching_btn', { store: detectedStore.storeName });
    } else {
      storeBtnLabel.textContent = t('engine.adblock_add_btn', { name: detectedStore.name, store: detectedStore.storeName });
    }
  }

  const hintEl = document.getElementById('kurfa-store-install-hint');
  if (hintEl) {
    if (adBlockerActive) {
      hintEl.textContent = t('engine.adblock_hint_active');
    } else if (__kurfaAdBlockerWatching) {
      hintEl.textContent = t('engine.adblock_hint_watching');
    } else {
      hintEl.textContent = t('engine.adblock_hint_default');
    }
  }

  const activePillKey = detectedStore.id.startsWith('safari') ? 'safari' : detectedStore.id;
  document.querySelectorAll('[data-store-browser]').forEach((btn) => {
    const key = btn.getAttribute('data-store-browser');
    if (btn.tagName === 'A' && key) {
      btn.href = detectBrowserExtensionStore(key).url;
    }
    const isMatch = key === activePillKey;
    btn.classList.toggle('border-primary', isMatch);
    btn.classList.toggle('text-primary', isMatch);
  });
}

function hasAdFreeLocalEngine() {
  return Boolean(isAndroidNativeEngine() || hasNativeExoPlayer() || getBrowserExtensionMode());
}

function hasAdFreePlaybackEnvironment() {
  return Boolean(hasAdFreeLocalEngine() || isBrowserAdBlockerActive());
}

async function kurfaDetectAdBlocker(options = {}) {
  const force = Boolean(options && options.force);
  if (typeof window === 'undefined' || typeof document === 'undefined') return false;
  if (hasAdFreeLocalEngine()) return true;
  if (typeof navigator !== 'undefined' && navigator.onLine === false) return false;
  if (!force && __kurfaAdBlockerCheckedAt && (Date.now() - __kurfaAdBlockerCheckedAt) < 4000) {
    return __kurfaAdBlockerDetected;
  }
  if (__kurfaAdBlockerInflight && !force) return __kurfaAdBlockerInflight;

  __kurfaAdBlockerInflight = (async () => {
    let blockedByNetwork = false;
    let blockedByScriptProbe = false;
    let blockedByCosmetic = false;

    let _siteOnlinePromise = null;
    const checkSiteOnline = async () => {
      if (_siteOnlinePromise) return _siteOnlinePromise;
      _siteOnlinePromise = (async () => {
        try {
          const res = await fetch('./explore-seed.json', { method: 'HEAD', cache: 'no-store' });
          return Boolean(res && res.ok);
        } catch (_) {
          return false;
        }
      })();
      return _siteOnlinePromise;
    };

    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = controller ? setTimeout(() => controller.abort(), 1400) : null;
    try {
      let networkProbeFailed = false;
      await Promise.all([
        fetch('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js', {
          method: 'HEAD',
          mode: 'no-cors',
          cache: 'no-store',
          signal: controller ? controller.signal : undefined
        }).catch((err) => {
          if (err && err.name !== 'AbortError') networkProbeFailed = true;
        }),
        fetch('https://static.doubleclick.net/instream/ad_status.js', {
          method: 'GET',
          mode: 'no-cors',
          cache: 'no-store',
          signal: controller ? controller.signal : undefined
        }).catch((err) => {
          if (err && err.name !== 'AbortError') networkProbeFailed = true;
        })
      ]);

      if (networkProbeFailed && (await checkSiteOnline())) {
        blockedByNetwork = true;
      }
    } catch (_) {
    } finally {
      if (timer) clearTimeout(timer);
    }

    if (!blockedByNetwork && typeof document !== 'undefined' && document.head) {
      const prevStatus = window.google_ad_status;
      let scriptEl = null;
      let scriptTimer = null;
      try {
        try {
          delete window.google_ad_status;
        } catch (_) {
          window.google_ad_status = undefined;
        }

        await new Promise((resolve) => {
          scriptEl = document.createElement('script');
          scriptEl.async = true;
          scriptEl.referrerPolicy = 'no-referrer';
          scriptEl.src = 'https://static.doubleclick.net/instream/ad_status.js';

          const finishScriptProbe = async (isError, isLoad) => {
            if (scriptTimer) {
              clearTimeout(scriptTimer);
              scriptTimer = null;
            }
            if (isError) {
              if (await checkSiteOnline()) blockedByScriptProbe = true;
            } else if (isLoad) {
              if (window.google_ad_status !== 1 && (await checkSiteOnline())) {
                blockedByScriptProbe = true;
              }
            }
            resolve();
          };

          scriptTimer = setTimeout(() => finishScriptProbe(false, false), 1400);
          scriptEl.onerror = () => finishScriptProbe(true, false);
          scriptEl.onload = () => finishScriptProbe(false, true);
          document.head.appendChild(scriptEl);
        });
      } catch (_) {
      } finally {
        if (scriptTimer) clearTimeout(scriptTimer);
        if (scriptEl && scriptEl.parentNode) scriptEl.remove();
        if (typeof prevStatus !== 'undefined') {
          window.google_ad_status = prevStatus;
        } else {
          try {
            delete window.google_ad_status;
          } catch (_) {
            window.google_ad_status = undefined;
          }
        }
      }
    }

    if (typeof document !== 'undefined' && document.body) {
      const bait1 = document.createElement('div');
      bait1.id = 'ad-unit-banner';
      bait1.className = 'adsbox ad-banner banner-ad pub_300x250 text-ad';
      bait1.setAttribute('aria-hidden', 'true');
      bait1.style.cssText = 'position:fixed;bottom:0;right:0;width:16px;height:16px;display:block;visibility:visible;opacity:0.01;pointer-events:none;z-index:-1;';
      bait1.innerHTML = '&nbsp;';

      const bait2 = document.createElement('div');
      bait2.className = 'ytd-display-ad-renderer ad-slot';
      bait2.setAttribute('data-ad-status', 'filled');
      bait2.setAttribute('aria-hidden', 'true');
      bait2.style.cssText = 'position:fixed;bottom:0;right:0;width:16px;height:16px;display:block;visibility:visible;opacity:0.01;pointer-events:none;z-index:-1;';
      bait2.innerHTML = '&nbsp;';

      try {
        document.body.appendChild(bait1);
        document.body.appendChild(bait2);
        await new Promise((r) => (typeof requestAnimationFrame === 'function' ? requestAnimationFrame(r) : setTimeout(r, 20)));
        for (const b of [bait1, bait2]) {
          const cs = window.getComputedStyle ? window.getComputedStyle(b) : null;
          if (
            (cs && (cs.display === 'none' || cs.visibility === 'hidden' || Number(cs.opacity) === 0)) ||
            b.offsetHeight === 0 ||
            b.clientHeight === 0
          ) {
            blockedByCosmetic = true;
            break;
          }
        }
      } catch (_) {
      } finally {
        if (bait1.parentNode) bait1.remove();
        if (bait2.parentNode) bait2.remove();
      }
    }

    __kurfaAdBlockerDetected = Boolean(blockedByNetwork || blockedByScriptProbe || blockedByCosmetic);
    if (typeof window !== 'undefined') window.__kurfaAdBlockerDetected = __kurfaAdBlockerDetected;
    __kurfaAdBlockerCheckedAt = Date.now();
    updateLocalEngineStatusUI();
    return __kurfaAdBlockerDetected;
  })();

  try {
    return await __kurfaAdBlockerInflight;
  } finally {
    __kurfaAdBlockerInflight = null;
  }
}

function stopAdBlockerBackgroundWatcher() {
  if (__kurfaAdBlockerWatcherTimer) {
    clearInterval(__kurfaAdBlockerWatcherTimer);
    __kurfaAdBlockerWatcherTimer = null;
  }
  __kurfaAdBlockerWatching = false;
  const warnStatus = typeof document !== 'undefined' ? document.getElementById('ad-warn-watcher-status') : null;
  if (warnStatus) {
    warnStatus.classList.add('hidden');
    warnStatus.textContent = '';
  }
  updateLocalEngineStatusUI();
}

function handleAdBlockerDetectedFlow() {
  stopAdBlockerBackgroundWatcher();
  if (typeof showToast === 'function') {
    showToast('Reklam engelleyici algılandı! Artık reklamsız oynatılıyor.');
  }
  const warnModal = document.getElementById('ad-warning-modal');
  const warnOpen = Boolean(warnModal && warnModal.classList.contains('opacity-100'));
  if (warnOpen) {
    if (typeof state !== 'undefined' && state._pendingAdWarnPlayback) {
      continueFromAdWarningModal();
    } else {
      hideAdWarningModalVisual();
    }
  }
}

function startAdBlockerBackgroundWatcher() {
  if (__kurfaAdBlockerWatcherTimer) clearInterval(__kurfaAdBlockerWatcherTimer);
  __kurfaAdBlockerWatching = true;
  const startedAt = Date.now();
  const warnStatus = typeof document !== 'undefined' ? document.getElementById('ad-warn-watcher-status') : null;
  if (warnStatus) {
    warnStatus.textContent = 'Resmi mağaza açıldı. Ekle butonuna bastığınızda Kurfamüzik arka planda otomatik algılayıp şarkıyı başlatacak...';
    warnStatus.classList.remove('hidden');
  }
  updateLocalEngineStatusUI();

  __kurfaAdBlockerWatcherTimer = setInterval(async () => {
    if (Date.now() - startedAt > 180000) {
      stopAdBlockerBackgroundWatcher();
      return;
    }
    const ok = await kurfaDetectAdBlocker({ force: true });
    if (ok) {
      handleAdBlockerDetectedFlow();
    }
  }, 2500);
}

function onStoreLinkClicked(explicitBrowserKey) {
  const store = detectBrowserExtensionStore(explicitBrowserKey);
  startAdBlockerBackgroundWatcher();
  if (typeof showToast === 'function') {
    showToast(`${store.storeName} açıldı. Ekle'ye basınca otomatik algılanacak.`);
  }
}
window.onStoreLinkClicked = onStoreLinkClicked;

function startAutoExtensionInstall(explicitBrowserKey) {
  const store = detectBrowserExtensionStore(explicitBrowserKey);
  try {
    window.open(store.url, '_blank', 'noopener,noreferrer');
  } catch (e) {}
  onStoreLinkClicked(explicitBrowserKey);
}
window.startAutoExtensionInstall = startAutoExtensionInstall;
window.kurfaDetectAdBlocker = kurfaDetectAdBlocker;

const FIRST_VISIT_KEY = 'kurfa_first_visit_v1';

async function kurfaHandleInitialVisit(detected) {
  const hasVisitedBefore = (() => {
    try {
      return localStorage.getItem(FIRST_VISIT_KEY) === '1';
    } catch (e) {
      return true;
    }
  })();

  const markVisited = () => {
    try {
      localStorage.setItem(FIRST_VISIT_KEY, '1');
    } catch (e) {}
  };

  if (hasAdFreeLocalEngine()) {
    markVisited();
    return;
  }

  if (detected === true) {
    markVisited();
    updateLocalEngineStatusUI();
    if (!hasVisitedBefore && typeof showToast === 'function') {
      showToast('Reklam engelleyiciniz aktif — %0 reklamlı keyifli dinlemeler');
    }
    return;
  }

  if (detected === false && !hasVisitedBefore && !isAdWarningDisabledByPref()) {
    markVisited();
    // Auto-blocking welcome modal removed so initial FCP/LCP paint stays 100% unobstructed;
    // protection modal triggers only on interactive playback in unprotected browser sessions.
  }
}
const kurfaRunFirstVisitOnboarding = kurfaHandleInitialVisit;
window.kurfaRunFirstVisitOnboarding = kurfaRunFirstVisitOnboarding;
window.kurfaHandleInitialVisit = kurfaHandleInitialVisit;

// =============================================================================
// 0.6 OTOMATİK GÜNCELLEME (PWA SERVICE WORKER + MASAÜSTÜ/APK OTA KÖPRÜSÜ)
// =============================================================================
let __kurfaSwRegistration = null;
let __kurfaLastSwUpdateCheckAt = 0;
let __kurfaLastFocusAdCheckAt = 0;
let __kurfaLastManualUpdateCheckAt = 0;

function initWebAutoUpdater() {
  if (typeof navigator === 'undefined' || !('serviceWorker' in navigator)) return;
  if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') return;
  try {
    navigator.serviceWorker.register(`./sw.js?v=${KURFA_WEB_VERSION}`).then((reg) => {
      __kurfaSwRegistration = reg;
      __kurfaLastSwUpdateCheckAt = Date.now();
    }).catch(() => {});

    let __swReloading = false;
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (__swReloading) return;
      if (typeof state !== 'undefined' && state.isPlaying) return;
      __swReloading = true;
      window.location.reload();
    });
  } catch (_) {}
}

window.__kurfaOnNativeUpdateReady = function (info) {
  const ver = String(info?.version || '');
  if (typeof window.__kurfaDesktopUpdateUI === 'function' && ver) {
    window.__kurfaDesktopUpdateUI({
      phase: 'ready',
      version: ver,
      notes: info?.notes || '',
      percent: 100
    });
    return;
  }
  if (typeof showToast === 'function' && ver) {
    showToast(`Kurfamüzik v${ver} indirildi ve doğrulandı — kapanışta otomatik güncellenecek.`);
  }
};

window.requestNativeAppUpdateCheck = function () {
  if (isAndroidNativeEngine() && typeof window.KurfaAndroidBridge?.checkForUpdates === 'function') {
    window.KurfaAndroidBridge.checkForUpdates();
    return true;
  }
  if (getBrowserExtensionMode().startsWith('desktop')) {
    return callExtensionBridge('CHECK_UPDATE', {}, 15000);
  }
  return false;
};

window.kurfaCheckAppUpdate = function () {
  const now = Date.now();
  if (now - __kurfaLastManualUpdateCheckAt < 3000) {
    if (typeof showToast === 'function') {
      showToast('Lütfen birkaç saniye bekleyin...');
    }
    return false;
  }
  __kurfaLastManualUpdateCheckAt = now;
  if (typeof window.requestNativeAppUpdateCheck === 'function') {
    return window.requestNativeAppUpdateCheck();
  }
  return false;
};

function detectUserDevicePlatform() {
  try {
    const uadPlatform = String(navigator.userAgentData?.platform || '').toLowerCase();
    const ua = String(navigator.userAgent || '').toLowerCase();
    if (uadPlatform.includes('android') || ua.includes('android')) return 'android';
    if (
      uadPlatform.includes('ios') ||
      /iphone|ipad|ipod/.test(ua) ||
      (ua.includes('macintosh') && (navigator.maxTouchPoints || 0) > 1)
    ) {
      return 'ios';
    }
    if (uadPlatform.includes('win') || ua.includes('windows')) return 'windows';
    if (uadPlatform.includes('mac') || ua.includes('macintosh') || ua.includes('mac os')) return 'macos';
    if (uadPlatform.includes('linux') || ua.includes('x11') || ua.includes('cros')) return 'linux';
  } catch (e) {}
  return 'windows';
}

function settleBridgeRequest(requestId, payload) {
  const entry = __kurfaPendingBridge.get(requestId);
  if (!entry) return;
  clearTimeout(entry.timer);
  __kurfaPendingBridge.delete(requestId);
  entry.resolve(payload || { success: false });
}

if (typeof window !== 'undefined') {
  window.__kurfaNativeStreamCallback = (requestId, payload) => settleBridgeRequest(requestId, payload);
  window.__kurfaNativeSearchCallback = (requestId, payload) => settleBridgeRequest(requestId, payload);
  window.__kurfaNativeDownloadCallback = (requestId, payload) => settleBridgeRequest(requestId, payload);
  window.__kurfaNativeDownloadProgress = (requestId, payload) => {
    if (typeof window.__kurfaHandleNativeDownloadProgress === 'function') {
      window.__kurfaHandleNativeDownloadProgress(payload || {}, requestId);
    }
  };
  window.addEventListener('message', (event) => {
    if (event.source !== window || !event.data) return;
    if (event.data.__kurfaExt === 'RES') {
      settleBridgeRequest(event.data.requestId, event.data.response);
    } else if (event.data.__kurfaExt === 'EVT' && event.data.event === 'DOWNLOAD_PROGRESS') {
      if (typeof window.__kurfaHandleNativeDownloadProgress === 'function') {
        window.__kurfaHandleNativeDownloadProgress(event.data.payload || {});
      }
    }
  });
  window.addEventListener('kurfa-ext-ready', () => {
    updateLocalEngineStatusUI();
    refreshDesktopBridgeSettings();
    refreshAppVersionAndUpdateStatus();
    if (typeof loadUserDataFromDesktop === 'function') loadUserDataFromDesktop();
    if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
      callExtensionBridge('SET_LANGUAGE', { lang: getAppLanguage() }, 2000).catch(() => {});
    }
  });
  const onReturnAdCheck = async () => {
    if (typeof document !== 'undefined' && document.visibilityState === 'hidden') return;
    if (__kurfaSwRegistration && typeof __kurfaSwRegistration.update === 'function') {
      if (Date.now() - __kurfaLastSwUpdateCheckAt > 30 * 60 * 1000) {
        __kurfaLastSwUpdateCheckAt = Date.now();
        __kurfaSwRegistration.update().catch(() => {});
      }
    }
    if (isBrowserAdBlockerActive() || hasAdFreeLocalEngine()) {
      return;
    }
    if (typeof state !== 'undefined' && state && state.isPlaying && state._activeMediaEngine === 'audio') {
      return;
    }
    const isWatching = Boolean(__kurfaAdBlockerWatching);
    if (!isWatching && (Date.now() - __kurfaLastFocusAdCheckAt) < 180000) {
      return;
    }
    __kurfaLastFocusAdCheckAt = Date.now();
    const ok = await kurfaDetectAdBlocker({ force: true });
    if (ok) {
      handleAdBlockerDetectedFlow();
    }
  };
  window.addEventListener('focus', onReturnAdCheck);
  if (typeof document !== 'undefined') {
    document.addEventListener('visibilitychange', onReturnAdCheck);
    const runOnboardingSetup = () => {
      const scheduleIdleTasks = () => {
        const exec = () => {
          initWebAutoUpdater();
          if (typeof initDeferredGa4Analytics === 'function') {
            initDeferredGa4Analytics();
          }
          setTimeout(async () => {
            try {
              const detected = await kurfaDetectAdBlocker({ force: true });
              await kurfaHandleInitialVisit(detected);
            } catch (_) {}
          }, 1200);
        };
        if (typeof window !== 'undefined' && typeof window.requestIdleCallback === 'function') {
          window.requestIdleCallback(exec, { timeout: 4000 });
        } else {
          setTimeout(exec, 2600);
        }
      };
      if (typeof window !== 'undefined') {
        if (document.readyState === 'complete') {
          scheduleIdleTasks();
        } else {
          window.addEventListener('load', scheduleIdleTasks, { once: true });
        }
      }
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', runOnboardingSetup);
    } else {
      runOnboardingSetup();
    }
  }
}

function callExtensionBridge(action, payload, timeoutMs = 9000) {
  return new Promise((resolve) => {
    const reqId = `ext_${Date.now()}_${++__kurfaBridgeSeq}`;
    const timer = setTimeout(() => {
      __kurfaPendingBridge.delete(reqId);
      resolve({ success: false, error: 'Extension timeout' });
    }, timeoutMs);
    __kurfaPendingBridge.set(reqId, { resolve, timer });
    try {
      window.postMessage({ __kurfaExt: 'REQ', requestId: reqId, action, payload }, window.location.origin);
    } catch (e) {
      clearTimeout(timer);
      __kurfaPendingBridge.delete(reqId);
      resolve({ success: false });
    }
  });
}

function callAndroidBridge(methodName, args, timeoutMs = 10000) {
  return new Promise((resolve) => {
    const reqId = `apk_${Date.now()}_${++__kurfaBridgeSeq}`;
    const timer = setTimeout(() => {
      __kurfaPendingBridge.delete(reqId);
      resolve({ success: false, error: 'Native timeout' });
    }, timeoutMs);
    __kurfaPendingBridge.set(reqId, { resolve, timer });
    try {
      window.KurfaAndroidBridge[methodName](...args, reqId);
    } catch (e) {
      clearTimeout(timer);
      __kurfaPendingBridge.delete(reqId);
      resolve({ success: false });
    }
  });
}

async function kurfaResolveDirectAudio(videoId) {
  const cleanVid = safeYtId(videoId);
  if (!cleanVid) return { success: false };

  if (isAndroidNativeEngine() && typeof window.KurfaAndroidBridge.resolveAudioStreamAsync === 'function') {
    const res = await callAndroidBridge('resolveAudioStreamAsync', [cleanVid], 12000);
    if (res && res.success && res.streamUrl) {
      try {
        if (typeof res.streamUrl === 'string' && res.streamUrl.includes('/__kurfa_native_audio__/')) {
          state._nativeLocalProxyOrigin = new URL(res.streamUrl).origin;
        }
      } catch (_) {}
      return res;
    }
  }

  if (getBrowserExtensionMode()) {
    const res = await callExtensionBridge('STREAM', { videoId: cleanVid }, 6000);
    if (res && res.success && res.streamUrl) {
      try {
        if (typeof res.streamUrl === 'string' && res.streamUrl.includes('/__kurfa_native_audio__/')) {
          const orig = new URL(res.streamUrl).origin;
          state._desktopLocalAudioOrigin = orig;
          state._nativeLocalProxyOrigin = orig;
        }
      } catch (_) {}
      return res;
    }
  }

  return { success: false };
}

function kurfaFormatSec(sec) {
  const total = Math.max(0, Math.floor(Number(sec) || 0));
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, '0')}`;
}

async function kurfaSearchAudius(query, signal) {
  const cleanQ = String(query || '').trim();
  if (!cleanQ) return { success: false, results: [] };
  const res = await fetch(`https://api.audius.co/v1/tracks/search?query=${encodeURIComponent(cleanQ)}&limit=25`, { signal });
  if (!res.ok) return { success: false, results: [] };
  const json = await res.json();
  const list = Array.isArray(json?.data) ? json.data : [];
  const mapped = list
    .filter(item => item && item.id && item.is_streamable !== false && (Number(item.duration) || 0) > 15)
    .map(item => ({
      id: `audius_${item.id}`,
      audiusId: String(item.id),
      audiusStreamUrl: `https://api.audius.co/v1/tracks/${encodeURIComponent(String(item.id))}/stream`,
      title: String(item.title || 'Audius Parçası'),
      artist: String(item.user?.name || item.user?.handle || 'Audius Sanatçısı'),
      duration: kurfaFormatSec(item.duration),
      thumbnail: safeUrl(item.artwork?.['480x480'] || item.artwork?.['150x150'], './kurfamuzik_logo.png'),
      source: 'audius'
    }));
  return { success: mapped.length > 0, source: 'audius', results: mapped };
}

async function kurfaSearchOpenCatalog(query, signal) {
  const cleanQ = String(query || '').trim();
  if (!cleanQ) return { success: false, results: [] };
  try {
    const res = await fetch(`${API_BASE}/api/catalog?q=${encodeURIComponent(cleanQ)}`, { signal });
    if (res.ok) {
      const data = await res.json();
      if (data && data.success && Array.isArray(data.results) && data.results.length > 0) {
        return { success: true, source: 'open-catalog', results: data.results };
      }
    }
  } catch (err) {
    if (err && err.name === 'AbortError') throw err;
  }
  return await kurfaSearchAudius(cleanQ, signal);
}

const __kurfaArtistMemory = new Map();
async function kurfaSearchArtists(query, signal) {
  const cleanQ = String(query || '').trim();
  if (cleanQ.length < 2) return [];
  const memKey = cleanQ.toLowerCase();
  const cached = __kurfaArtistMemory.get(memKey);
  if (cached && cached.expiresAt > Date.now()) return cached.artists;

  try {
    const res = await fetch(`${API_BASE}/api/artists?q=${encodeURIComponent(cleanQ)}`, { signal });
    if (!res.ok) return [];
    const data = await res.json();
    const artists = Array.isArray(data?.artists) ? data.artists : [];
    if (__kurfaArtistMemory.size >= 40) __kurfaArtistMemory.clear();
    __kurfaArtistMemory.set(memKey, { artists, expiresAt: Date.now() + 6 * 3600 * 1000 });
    return artists;
  } catch (err) {
    if (err && err.name === 'AbortError') throw err;
    return [];
  }
}

function kurfaCleanTrackQuery(title, artist) {
  const stripNoise = (str) => String(str || '')
    .replace(/\[[^\]]*\]/g, ' ')
    .replace(/\([^)]*\)/g, ' ')
    .replace(/\b(netd\s*m[uü]zik|poll\s*production|official\s*music\s*video|official\s*video|official\s*audio|lyric\s*video|lyrics|video\s*klip|klip|feat\.?|ft\.?|featuring)\b/gi, ' ')
    .replace(/[|•·–—/_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  const cleanTitle = stripNoise(title);
  const cleanArtistRaw = stripNoise(artist);
  const cleanArtist = /^(bilinmeyen\s*sanat[cç][ıi]|sanat[cç][ıi]|artist|unknown|various\s*artists)$/i.test(cleanArtistRaw)
    ? ''
    : cleanArtistRaw;

  return `${cleanArtist} ${cleanTitle}`.replace(/\s+/g, ' ').trim();
}

function kurfaNormalizeMatchTokens(str) {
  return String(str || '')
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

async function kurfaTryQuickAudiusMatch(target, timeoutMs = 650) {
  try {
    const rawTitle = String(target?.title || '').trim();
    if (rawTitle.length < 2) return { success: false };

    const cleanQuery = kurfaCleanTrackQuery(rawTitle, target?.artist || '');
    if (cleanQuery.length < 2) return { success: false };

    const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const timer = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;

    let list = [];
    try {
      const res = await fetch(
        `https://api.audius.co/v1/tracks/search?query=${encodeURIComponent(cleanQuery)}&limit=6`,
        controller ? { signal: controller.signal } : undefined
      );
      if (!res.ok) return { success: false };
      const json = await res.json();
      list = Array.isArray(json?.data) ? json.data : [];
    } finally {
      if (timer) clearTimeout(timer);
    }

    if (list.length === 0) return { success: false };

    const labelNoise = new Set(['netd', 'muzik', 'music', 'poll', 'production', 'official', 'records', 'record', 'tv', 'kanal', 'topic', 'vevo', 'sanatci', 'bilinmeyen', 'unknown']);
    const variantNoise = new Set(['remix', 'cover', 'karaoke', 'instrumental', 'nightcore', 'slowed', 'sped', 'reverb', '8d']);

    const cleanedTitleForTokens = kurfaCleanTrackQuery(rawTitle, '');
    const titleWordsAll = kurfaNormalizeMatchTokens(cleanedTitleForTokens || rawTitle);
    const sigTitleWords = titleWordsAll.filter(w => w.length >= 3);
    const targetTitleWords = sigTitleWords.length > 0 ? sigTitleWords : titleWordsAll.filter(w => w.length >= 2);
    if (targetTitleWords.length === 0) return { success: false };

    const targetRawTitleTokens = new Set(kurfaNormalizeMatchTokens(rawTitle));
    const cleanedArtistForTokens = kurfaCleanTrackQuery('', target?.artist || '');
    const targetArtistWords = kurfaNormalizeMatchTokens(cleanedArtistForTokens || target?.artist || '')
      .filter(w => w.length >= 2 && !labelNoise.has(w));

    let bestItem = null;
    let bestScore = -1;

    for (const item of list) {
      if (!item || !item.id || item.is_streamable === false) continue;
      if ((Number(item.duration) || 0) <= 25) continue;

      const candTitle = String(item.title || '');
      const candArtist = String(item.user?.name || item.user?.handle || '');
      const candTitleTokens = new Set(kurfaNormalizeMatchTokens(candTitle));
      const candArtistTokens = new Set(kurfaNormalizeMatchTokens(candArtist));

      let titleHits = 0;
      for (const w of targetTitleWords) {
        if (candTitleTokens.has(w)) titleHits++;
      }
      const titleRatio = titleHits / targetTitleWords.length;
      if (titleRatio < 0.6) continue;

      let artistHits = 0;
      for (const w of targetArtistWords) {
        if (candArtistTokens.has(w) || candTitleTokens.has(w)) artistHits++;
      }

      let hasUnwantedVariant = false;
      for (const v of variantNoise) {
        if (candTitleTokens.has(v) && !targetRawTitleTokens.has(v)) {
          hasUnwantedVariant = true;
          break;
        }
      }
      if (hasUnwantedVariant && !(titleRatio === 1 && artistHits > 0)) continue;

      if (targetArtistWords.length > 0 && artistHits === 0) {
        if (!(titleRatio >= 0.85 && targetTitleWords.length >= 3)) continue;
      }

      const score = titleRatio * 10 + (targetArtistWords.length > 0 ? (artistHits / targetArtistWords.length) * 5 : 0);
      if (score > bestScore) {
        bestScore = score;
        bestItem = item;
      }
    }

    if (!bestItem) return { success: false };

    const streamUrl = `https://api.audius.co/v1/tracks/${encodeURIComponent(String(bestItem.id))}/stream`;
    const audiusTrack = {
      id: `audius_${bestItem.id}`,
      audiusId: String(bestItem.id),
      audiusStreamUrl: streamUrl,
      title: String(bestItem.title || rawTitle),
      artist: String(bestItem.user?.name || bestItem.user?.handle || target?.artist || 'Audius Sanatçısı'),
      duration: kurfaFormatSec(bestItem.duration),
      thumbnail: safeUrl(bestItem.artwork?.['480x480'] || bestItem.artwork?.['150x150'], './kurfamuzik_logo.png'),
      source: 'audius'
    };

    return { success: true, streamUrl, audiusTrack };
  } catch (e) {
    return { success: false };
  }
}

const __kurfaSearchMemory = new Map();
function readSearchClientCache(cacheKey) {
  const mem = __kurfaSearchMemory.get(cacheKey);
  if (mem && mem.expiresAt > Date.now()) return mem;
  try {
    const raw = localStorage.getItem('kurfa_search_cache_v3');
    if (!raw) return null;
    const store = JSON.parse(raw);
    const entry = store && store[cacheKey];
    if (entry && entry.expiresAt > Date.now() && (
      (Array.isArray(entry.results) && entry.results.length > 0) ||
      (Array.isArray(entry.albums) && entry.albums.length > 0) ||
      (Array.isArray(entry.artists) && entry.artists.length > 0)
    )) {
      __kurfaSearchMemory.set(cacheKey, entry);
      return entry;
    }
  } catch (e) {}
  return null;
}

function writeSearchClientCache(cacheKey, results, artists = [], albums = [], songs = []) {
  const hasAny = (Array.isArray(results) && results.length > 0) ||
    (Array.isArray(artists) && artists.length > 0) ||
    (Array.isArray(albums) && albums.length > 0);
  if (!hasAny) return;
  const entry = {
    results: Array.isArray(results) ? results : [],
    songs: Array.isArray(songs) ? songs : [],
    artists: Array.isArray(artists) ? artists : [],
    albums: Array.isArray(albums) ? albums : [],
    expiresAt: Date.now() + 6 * 3600 * 1000
  };
  if (__kurfaSearchMemory.size >= 40) __kurfaSearchMemory.clear();
  __kurfaSearchMemory.set(cacheKey, entry);
  try {
    const store = JSON.parse(localStorage.getItem('kurfa_search_cache_v3') || '{}') || {};
    const keys = Object.keys(store);
    if (keys.length >= 30) {
      delete store[keys[0]];
    }
    store[cacheKey] = entry;
    localStorage.setItem('kurfa_search_cache_v3', JSON.stringify(store));
  } catch (e) {}
}

async function kurfaSearchTracks(query, opts = {}) {
  const cleanQ = String(query || '').trim();
  if (!cleanQ) return { success: false, results: [] };
  const filterSingles = Boolean(opts.filterSingles);
  const searchType = opts.type || state.searchCategoryFilter || 'all';
  const source = opts.source || state.searchSource || 'auto';
  const signal = opts.signal;
  const cacheKey = `${source}|${searchType}|${filterSingles ? 1 : 0}|${cleanQ.toLowerCase()}`;

  const cached = readSearchClientCache(cacheKey);
  if (cached) {
    return {
      success: true,
      source: 'client-cache',
      results: cached.results || [],
      songs: cached.songs || cached.results || [],
      artists: cached.artists || [],
      albums: cached.albums || []
    };
  }

  if (source === 'audius') {
    const audRes = await kurfaSearchOpenCatalog(cleanQ, signal);
    if (audRes.success) writeSearchClientCache(cacheKey, audRes.results, [], [], audRes.results);
    return audRes;
  }

  if (isAndroidNativeEngine() && typeof window.KurfaAndroidBridge.searchTracksAsync === 'function') {
    const apkRes = await callAndroidBridge('searchTracksAsync', [cleanQ, filterSingles], 11000);
    if (signal && signal.aborted) throw new DOMException('Aborted', 'AbortError');
    if (apkRes && apkRes.success && Array.isArray(apkRes.results) && apkRes.results.length > 0) {
      writeSearchClientCache(cacheKey, apkRes.results, apkRes.artists || [], apkRes.albums || [], apkRes.songs || apkRes.results);
      return apkRes;
    }
  }

  if (getBrowserExtensionMode()) {
    const extRes = await callExtensionBridge('SEARCH', { query: cleanQ, filterSingles, type: searchType }, 9000);
    if (signal && signal.aborted) throw new DOMException('Aborted', 'AbortError');
    if (extRes && extRes.success && Array.isArray(extRes.results) && extRes.results.length > 0) {
      writeSearchClientCache(cacheKey, extRes.results, extRes.artists || [], extRes.albums || [], extRes.songs || extRes.results);
      return extRes;
    }
  }

  const res = await fetch(
    `${API_BASE}/api/search?q=${encodeURIComponent(cleanQ)}&type=${encodeURIComponent(searchType)}${filterSingles ? '&single=1' : ''}`,
    { signal }
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (data && data.success) {
    writeSearchClientCache(cacheKey, data.results || [], data.artists || [], data.albums || [], data.songs || data.results || []);
  }
  return data;
}

// =============================================================================
// 1. DATA FIXTURES & INITIAL DATA
// =============================================================================

// =============================================================================
// 1. DYNAMIC DATA LAYER & REAL YOUTUBE TRENDS
// =============================================================================

// Instant synchronous explore seed so phones never stare at an empty skeleton for 7-10s
const DEFAULT_EXPLORE_SEED = {
  success: true,
  hero: { id: "y5A2NmlFbOY", title: "Umur Doma & Hande Ünsal - Gel", artist: "netd müzik", duration: "2:42", thumbnail: "https://i.ytimg.com/vi/y5A2NmlFbOY/hqdefault.jpg" },
  trends: [
    { id: "y5A2NmlFbOY", title: "Umur Doma & Hande Ünsal - Gel", artist: "netd müzik", duration: "2:42", thumbnail: "https://i.ytimg.com/vi/y5A2NmlFbOY/hqdefault.jpg" },
    { id: "rZWeR8bQlaE", title: "Eypio - Şahidim", artist: "netd müzik", duration: "3:03", thumbnail: "https://i.ytimg.com/vi/rZWeR8bQlaE/hqdefault.jpg" },
    { id: "Qwfl2M67xCI", title: "Mabel Matiz - Umrumdışı", artist: "mabelmatiz", duration: "4:00", thumbnail: "https://i.ytimg.com/vi/Qwfl2M67xCI/hqdefault.jpg" },
    { id: "qcfS7amxPYA", title: "Can Demir - Gel Dedim Geldin", artist: "netd müzik", duration: "2:07", thumbnail: "https://i.ytimg.com/vi/qcfS7amxPYA/hqdefault.jpg" },
    { id: "vLzF3YeBqqk", title: "Onur Bayraktar & Nur Cennet - Sana Yar Diyemem", artist: "netd müzik", duration: "2:29", thumbnail: "https://i.ytimg.com/vi/vLzF3YeBqqk/hqdefault.jpg" },
    { id: "qgSVE71wNec", title: "Sibel Can & Eypio – KIYAMAM", artist: "Sibel Can", duration: "2:28", thumbnail: "https://i.ytimg.com/vi/qgSVE71wNec/hqdefault.jpg" },
    { id: "GILi_0RamtY", title: "Simge - Önümüz Yaz", artist: "netd müzik", duration: "3:07", thumbnail: "https://i.ytimg.com/vi/GILi_0RamtY/hqdefault.jpg" },
    { id: "Tb-zjsEqr1k", title: "Tuğba Yurt - İnceden İnceden", artist: "netd müzik", duration: "3:12", thumbnail: "https://i.ytimg.com/vi/Tb-zjsEqr1k/hqdefault.jpg" },
    { id: "GR6r-jIryH0", title: "Tefo & Seko Ft. Serdar Ortaç - Heyecan", artist: "Poll Production", duration: "2:50", thumbnail: "https://i.ytimg.com/vi/GR6r-jIryH0/hqdefault.jpg" },
    { id: "JlV7dM4TxkY", title: "Kurtuluş Kuş & Feryal Sepin & Burak Bulut - Karalaya Karalaya", artist: "netd müzik", duration: "2:48", thumbnail: "https://i.ytimg.com/vi/JlV7dM4TxkY/hqdefault.jpg" },
    { id: "XScahAwKYHU", title: "Serkan Nişancı - Eller Üzer", artist: "Serkan Nişancı", duration: "3:15", thumbnail: "https://i.ytimg.com/vi/XScahAwKYHU/hqdefault.jpg" },
    { id: "GKvHAmg7i5k", title: "Emrah Karaduman & İrem Derici - Deli Yangınım", artist: "netd müzik", duration: "3:44", thumbnail: "https://i.ytimg.com/vi/GKvHAmg7i5k/hqdefault.jpg" },
    { id: "69L-nKRY3ac", title: "BLOK3 - SEBEBİ YAR", artist: "Blok3", duration: "3:19", thumbnail: "https://i.ytimg.com/vi/69L-nKRY3ac/hqdefault.jpg" },
    { id: "9XBOcX_s1xA", title: "Ziynet Sali - Tam İsabet", artist: "Ziynet Sali", duration: "3:04", thumbnail: "https://i.ytimg.com/vi/9XBOcX_s1xA/hqdefault.jpg" },
    { id: "Tfz-PmS9fb0", title: "İrem Derici - Durum Çok Acil", artist: "İrem Derici", duration: "2:54", thumbnail: "https://i.ytimg.com/vi/Tfz-PmS9fb0/hqdefault.jpg" }
  ],
  top10: [],
  fresh: [
    { id: "59aQ2iIwI8s", title: "Demet Akalın - Bi' Şey Mi Dedin?", artist: "Demet Akalın", duration: "2:42", thumbnail: "https://i.ytimg.com/vi/59aQ2iIwI8s/hqdefault.jpg" },
    { id: "zJY8z8v0xbo", title: "Burak Bulut & İrem Derici - GARSON", artist: "Burak Bulut", duration: "3:15", thumbnail: "https://i.ytimg.com/vi/zJY8z8v0xbo/hqdefault.jpg" },
    { id: "7plvaIPtO04", title: "Soner Sarıkabadayı & Sefo - Her İki Durumda", artist: "Soner Sarıkabadayı", duration: "3:11", thumbnail: "https://i.ytimg.com/vi/7plvaIPtO04/hqdefault.jpg" },
    { id: "HsC2PIr4BXs", title: "Bengü - Dur Nereye", artist: "Bengü", duration: "3:30", thumbnail: "https://i.ytimg.com/vi/HsC2PIr4BXs/hqdefault.jpg" },
    { id: "2_o4hd4y8FQ", title: "Aynur Polat & Serdar Ortaç - Padişah", artist: "netd müzik", duration: "3:06", thumbnail: "https://i.ytimg.com/vi/2_o4hd4y8FQ/hqdefault.jpg" },
    { id: "KF6SfC6Q-ZA", title: "Burak Bulut - Ah Be Manolya", artist: "Burak Bulut", duration: "2:58", thumbnail: "https://i.ytimg.com/vi/KF6SfC6Q-ZA/hqdefault.jpg" }
  ],
  mixes: []
};

// Dynamic live YouTube explore data (restored instantly from client storage or synchronous seed)
let exploreData = (function() {
  try {
    localStorage.removeItem('kurfa_explore_cache');
    localStorage.removeItem('kurfa_explore_cache_time');
    const cached = JSON.parse(localStorage.getItem('kurfa_explore_cache_v3') || 'null');
    if (cached && Array.isArray(cached.trends) && cached.trends.length > 0 && Array.isArray(cached.newReleases) && cached.newReleases.length > 0) {
      return cached;
    }
  } catch(e) {}
  return {
    ...DEFAULT_EXPLORE_SEED,
    trends: [...DEFAULT_EXPLORE_SEED.trends],
    top10: DEFAULT_EXPLORE_SEED.trends.slice(0, 10),
    fresh: [...DEFAULT_EXPLORE_SEED.fresh],
    newReleases: [],
    albums: [],
    mixes: []
  };
})();

// Real official Turkish music singles with verified HD thumbnails
const EMERGENCY_FALLBACK_TRACKS = [
  { id: "y5A2NmlFbOY", title: "Umur Doma & Hande Ünsal - Gel", artist: "netd müzik", duration: "2:42", thumbnail: "https://i.ytimg.com/vi/y5A2NmlFbOY/hqdefault.jpg" },
  { id: "qgSVE71wNec", title: "Sibel Can & Eypio – KIYAMAM", artist: "Sibel Can", duration: "2:28", thumbnail: "https://i.ytimg.com/vi/qgSVE71wNec/hqdefault.jpg" },
  { id: "59aQ2iIwI8s", title: "Demet Akalın - Bi' Şey Mi Dedin?", artist: "Demet Akalın", duration: "2:42", thumbnail: "https://i.ytimg.com/vi/59aQ2iIwI8s/hqdefault.jpg" },
  { id: "Tfz-PmS9fb0", title: "İrem Derici - Durum Çok Acil", artist: "İrem Derici", duration: "2:54", thumbnail: "https://i.ytimg.com/vi/Tfz-PmS9fb0/hqdefault.jpg" },
  { id: "KF6SfC6Q-ZA", title: "Burak Bulut - Ah Be Manolya", artist: "Burak Bulut", duration: "2:58", thumbnail: "https://i.ytimg.com/vi/KF6SfC6Q-ZA/hqdefault.jpg" }
];

function getTrackThumbnail(track) {
  if (!track) return './kurfamuzik_logo_96.webp';
  if (track.isLocal || String(track.id || '').startsWith('local_')) {
    return track.thumbnail ? safeUrl(track.thumbnail, './kurfamuzik_logo_96.webp') : './kurfamuzik_logo_96.webp';
  }
  const vid = safeYtId(track.ytId) || safeYtId(track.id);
  if (vid) {
    return `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`;
  }
  if (track.thumbnail && typeof track.thumbnail === 'string') {
    const lower = track.thumbnail.toLowerCase();
    if (!lower.includes('invidious') && !lower.includes('kurfamuzik_logo')) {
      return safeUrl(track.thumbnail, './kurfamuzik_logo_96.webp');
    }
  }
  return './kurfamuzik_logo_96.webp';
}
window.getTrackThumbnail = getTrackThumbnail;

function getCuratedTracks() {
  const list = (exploreData.trends && exploreData.trends.length > 0) ? exploreData.trends : EMERGENCY_FALLBACK_TRACKS;
  return list.map(t => {
    const vid = t ? safeYtId(t.id) : null;
    if (vid) {
      return {
        ...t,
        thumbnail: `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`
      };
    }
    return t;
  });
}

// Transparent Proxy so any legacy reference to CURATED_TRACKS gets live YouTube trends seamlessly
const CURATED_TRACKS = new Proxy([], {
  get(target, prop) {
    const list = getCuratedTracks();
    if (prop === 'length') return list.length;
    if (prop in list) {
      const val = list[prop];
      return typeof val === 'function' ? val.bind(list) : val;
    }
    return target[prop];
  }
});

// Lyrics cache in memory
const lyricsMemoryCache = new Map();

// Dynamic proxy for fresh releases
const FRESH_RELEASES = new Proxy([], {
  get(target, prop) {
    const list = (exploreData.fresh && exploreData.fresh.length > 0) ? exploreData.fresh : getCuratedTracks().slice(0, 6);
    if (prop === 'length') return list.length;
    if (prop in list) {
      const val = list[prop];
      return typeof val === 'function' ? val.bind(list) : val;
    }
    return target[prop];
  }
});

// =============================================================================
// 2. APPLICATION STATE & SAFE HELPERS (100% ISOLATED & PRIVATE PER USER BROWSER)
// =============================================================================

function safeGetStorage(key, fallback = null) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? val : fallback;
  } catch (e) {
    return fallback;
  }
}

function safeGetJSON(key, fallback) {
  try {
    const val = localStorage.getItem(key);
    return val !== null ? JSON.parse(val) : fallback;
  } catch(e) {
    return fallback;
  }
}

function safeGetFloat(key, fallback) {
  try {
    const val = parseFloat(localStorage.getItem(key));
    return Number.isFinite(val) ? val : fallback;
  } catch(e) {
    return fallback;
  }
}

function safeGetInt(key, fallback, radix = 10) {
  try {
    const val = parseInt(localStorage.getItem(key), radix);
    return Number.isFinite(val) ? val : fallback;
  } catch(e) {
    return fallback;
  }
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str).replace(/[&<>"']/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function fixTurkishMixedCase(str) {
  const s = String(str || '');
  if (!s) return '';
  return s
    .replace(/([a-z\u00e7\u011f\u0131\u00f6\u015f\u00fc])([A-Z\u00c7\u011e\u0130\u00d6\u015e\u00dc])/g, (_, a, b) => a + b.toLocaleLowerCase('tr-TR'))
    .replace(/\b([A-Z\u00c7\u011e\u0130\u00d6\u015e\u00dc])([A-Z\u00c7\u011e\u0130\u00d6\u015e\u00dc]+)([a-z\u00e7\u011f\u0131\u00f6\u015f\u00fc]+)/g, (_, a, mid, tail) => a + mid.toLocaleLowerCase('tr-TR') + tail);
}

function formatCleanTrackTitle(rawTitle) {
  const s = String(rawTitle || '').trim();
  if (!s) return '';
  const cleaned = s
    .replace(/\s*[\(\[]\s*(?:official\s*(?:music\s*)?video|official\s*audio|video\s*klip|klip|visualizer|lyric\s*video|lyrics|hd|4k|8k|remastered)[^\)\]]*[\)\]]/gi, '')
    .replace(/\s*\|\s*official\b.*$/gi, '')
    .replace(/\s+[–—-]\s*(?:official\s*(?:music\s*)?video|official\s*audio|video\s*klip|klip)\s*$/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
  return fixTurkishMixedCase(cleaned || s);
}

function cleanLocalTrackMeta(track) {
  if (!track || typeof track !== 'object') return track;
  const rawTitle = String(track.title || '').replace(/\.(mp3|m4a|wav|flac|ogg|aac|opus|webm)$/i, '');
  const rawArtist = String(track.artist || '');
  const cleanPart = (val) => String(val || '')
    .replace(/\s*[\(\[]\s*(?=[A-Za-z0-9_-]*[0-9_-])[_-]{0,4}[A-Za-z0-9_-]{10,16}[_-]{0,4}\s*[\)\]]/g, '')
    .replace(/[_]+/g, ' ')
    .replace(/\b(?:high\s+quality\s+audio|official\s+music\s+video|official\s+audio|video\s+klip)\b/gi, '')
    .replace(/\s+/g, ' ')
    .replace(/^[\s\-–—]+|[\s\-–—]+$/g, '')
    .trim();

  let title = cleanPart(rawTitle);
  let artist = cleanPart(rawArtist);
  const isGenericArtist = !artist || /^(?:yerel\s*dosya|cihaz\s*m\u00fczi\u011fi|unknown|local\s*file)$/i.test(artist);
  if (isGenericArtist && title) {
    const parts = title.split(/\s+[–—-]\s+/).map(p => p.trim()).filter(Boolean);
    if (parts.length >= 2) {
      const left = cleanPart(parts[0]);
      const right = cleanPart(parts.slice(1).join(' - '));
      if (left && right) {
        artist = left;
        title = right;
      }
    }
  }
  track.title = title || rawTitle || (getAppLanguage() === 'en' ? 'Track' : 'Parça');
  track.artist = artist || (getAppLanguage() === 'en' ? 'Local File' : 'Yerel Dosya');
  return track;
}

function syncTopSearchClearBtn() {
  const topBtn = document.getElementById('btn-top-clear');
  const aramaBtn = document.getElementById('btn-arama-clear');
  const aramaInput = document.getElementById('arama-page-search-input');
  const topVal = DOM.topSearchInput && DOM.topSearchInput.value ? DOM.topSearchInput.value.trim() : '';
  const aramaVal = aramaInput && aramaInput.value ? aramaInput.value.trim() : '';
  const hasText = Boolean(topVal || aramaVal);
  if (topBtn) topBtn.classList.toggle('hidden', !hasText);
  if (aramaBtn) aramaBtn.classList.toggle('hidden', !hasText);
}

const __localDurationProbeQueue = [];
const __localDurationProbePending = new Set();
let __localDurationProbeActive = 0;

function formatProbeSeconds(sec) {
  const total = Math.round(Number(sec) || 0);
  if (!isFinite(total) || total <= 0) return null;
  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;
  if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  return `${m}:${String(s).padStart(2, '0')}`;
}

async function runNextLocalDurationProbe() {
  if (__localDurationProbeActive >= 2 || __localDurationProbeQueue.length === 0) return;
  const track = __localDurationProbeQueue.shift();
  if (!track || !track.id) {
    runNextLocalDurationProbe();
    return;
  }
  __localDurationProbeActive++;
  let tempObjUrl = null;
  try {
    let srcUrl = track.streamUrl || null;
    if (!srcUrl && track.needsIdbBlob && typeof openKurfaLocalAudioDB === 'function') {
      const db = await openKurfaLocalAudioDB();
      const rec = await new Promise((resolve) => {
        const tx = db.transaction('tracks', 'readonly');
        const req = tx.objectStore('tracks').get(track.id);
        req.onsuccess = () => resolve(req.result || null);
        req.onerror = () => resolve(null);
      });
      db.close();
      if (rec && rec.file) {
        tempObjUrl = URL.createObjectURL(rec.file);
        srcUrl = tempObjUrl;
      }
    }
    if (srcUrl) {
      const formatted = await new Promise((resolve) => {
        const probe = new Audio();
        probe.preload = 'metadata';
        let done = false;
        const finish = (val) => {
          if (done) return;
          done = true;
          try { probe.removeAttribute('src'); probe.load(); } catch (_) {}
          resolve(val);
        };
        const timer = setTimeout(() => finish(null), 3500);
        probe.addEventListener('loadedmetadata', () => {
          clearTimeout(timer);
          finish(formatProbeSeconds(probe.duration));
        }, { once: true });
        probe.addEventListener('error', () => {
          clearTimeout(timer);
          finish(null);
        }, { once: true });
        probe.src = srcUrl;
      });
      if (formatted) {
        track.duration = formatted;
        const listEl = document.getElementById('device-audio-list');
        if (listEl) {
          listEl.querySelectorAll('.track-row').forEach((row) => {
            if (row.dataset.trackId === track.id) {
              const durSpan = row.querySelector('.track-duration-text');
              if (durSpan) durSpan.textContent = formatted;
            }
          });
        }
        if (track.needsIdbBlob && typeof openKurfaLocalAudioDB === 'function') {
          try {
            const db = await openKurfaLocalAudioDB();
            const tx = db.transaction('tracks', 'readwrite');
            const store = tx.objectStore('tracks');
            const getReq = store.get(track.id);
            getReq.onsuccess = () => {
              const r = getReq.result;
              if (r) {
                r.duration = formatted;
                store.put(r);
              }
            };
            tx.oncomplete = () => db.close();
          } catch (_) {}
        }
      }
    }
  } catch (_) {
  } finally {
    if (tempObjUrl) {
      try { URL.revokeObjectURL(tempObjUrl); } catch (_) {}
    }
    __localDurationProbePending.delete(track.id);
    __localDurationProbeActive--;
    runNextLocalDurationProbe();
  }
}

function scheduleLocalDurationProbes(tracks) {
  if (!Array.isArray(tracks) || tracks.length === 0) return;
  let queued = 0;
  for (const trk of tracks) {
    if (queued >= 60) break;
    if (!trk || !trk.id) continue;
    const dur = String(trk.duration || '').trim();
    if (dur && dur !== '3:30' && dur !== '0:00') continue;
    if (!trk.streamUrl && !trk.needsIdbBlob) continue;
    if (__localDurationProbePending.has(trk.id)) continue;
    __localDurationProbePending.add(trk.id);
    __localDurationProbeQueue.push(trk);
    queued++;
  }
  runNextLocalDurationProbe();
}

function safeYtId(id) {
  if (id === null || id === undefined) return null;
  const s = String(id).trim();
  return /^[\w-]{11}$/.test(s) ? s : null;
}

function safeUrl(url, fallback = './kurfamuzik_logo.png') {
  if (typeof url !== 'string') return fallback;
  const trimmed = url.trim();
  if (!trimmed || /[\u0000-\u001f\u007f"'<>\\`]/.test(trimmed)) return fallback;
  if (trimmed.startsWith('./') || (trimmed.startsWith('/') && !trimmed.startsWith('//'))) {
    return trimmed;
  }
  if (/^data:image\/(png|jpeg|webp|gif);base64,[A-Za-z0-9+/=]+$/i.test(trimmed)) {
    return trimmed;
  }
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === 'https:' || parsed.protocol === 'http:') {
      return trimmed;
    }
  } catch (e) {}
  return fallback;
}

function safeCssUrl(url, fallback = './kurfamuzik_logo.png') {
  const validated = safeUrl(url, fallback);
  const cleaned = String(validated).replace(/['"()\\\r\n\t`]/g, '');
  return cleaned || fallback;
}

function safeSetStorage(key, val) {
  try {
    localStorage.setItem(key, String(val));
    return true;
  } catch (e) {
    return false;
  }
}

function getEventClientX(e) {
  if (!e) return 0;
  if (e.touches && e.touches.length > 0 && typeof e.touches[0].clientX === 'number') {
    return e.touches[0].clientX;
  }
  if (e.changedTouches && e.changedTouches.length > 0 && typeof e.changedTouches[0].clientX === 'number') {
    return e.changedTouches[0].clientX;
  }
  return typeof e.clientX === 'number' ? e.clientX : 0;
}

function cleanDeduplicateQueueArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return [];
  const seenIds = new Set();
  const seenTitles = new Set();
  const result = [];
  for (const item of arr) {
    if (!item) continue;
    const id = item.id || item.ytId;
    const isLocalItem = Boolean(item.isLocal) || String(id || '').startsWith('local_');
    const title = (item.title || '').trim().toLowerCase();
    const artist = (item.artist || '').trim().toLowerCase();
    const metaKey = (!isLocalItem && title && artist) ? `${title}|${artist}` : null;

    let isDup = false;
    if (id && seenIds.has(id)) isDup = true;
    if (metaKey && seenTitles.has(metaKey)) isDup = true;

    if (!isDup) {
      if (id) seenIds.add(id);
      if (metaKey) seenTitles.add(metaKey);
      result.push(item);
    }
  }
  return result;
}

function saveQueueState(skipNativeSync = false) {
  state.queue = cleanDeduplicateQueueArray(state.queue || []);
  state.originalQueue = cleanDeduplicateQueueArray(state.originalQueue || []);
  state.userQueue = cleanDeduplicateQueueArray(state.userQueue || []);
  if (state.queueIndex >= state.queue.length) {
    state.queueIndex = Math.max(0, state.queue.length - 1);
  }
  const qToStore = state.queue.length > 300
    ? state.queue.slice(Math.max(0, state.queueIndex - 50), Math.min(state.queue.length, state.queueIndex + 250))
    : state.queue;
  const idxToStore = state.queue.length > 300
    ? Math.min(50, state.queueIndex)
    : (state.queueIndex || 0);
  let origToStore = state.originalQueue;
  if (origToStore.length > 300) {
    const curId = state.currentTrack ? (state.currentTrack.id || state.currentTrack.ytId) : null;
    const curOrigIdx = curId ? origToStore.findIndex(t => t && (t.id === curId || t.ytId === curId)) : 0;
    const start = Math.max(0, (curOrigIdx !== -1 ? curOrigIdx : 0) - 50);
    origToStore = origToStore.slice(start, start + 300);
  }
  safeSetStorage('kurfa_queue', JSON.stringify(qToStore));
  safeSetStorage('kurfa_original_queue', JSON.stringify(origToStore));
  safeSetStorage('kurfa_user_queue', JSON.stringify(state.userQueue));
  safeSetStorage('kurfa_queue_index', String(idxToStore));
  if (typeof persistQueue === 'function') persistQueue(qToStore, idxToStore);
  if (!skipNativeSync && typeof syncNativeAndroidQueue === 'function') syncNativeAndroidQueue(qToStore, idxToStore);
}

function syncNativeAndroidQueue(preQueue = null, preIdx = null) {
  try {
    const bridge = (typeof window !== 'undefined')
      ? ((window.KurfaAndroid && typeof window.KurfaAndroid.setNativeQueueJson === 'function')
        ? window.KurfaAndroid
        : ((window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.setNativeQueueJson === 'function')
          ? window.KurfaAndroidBridge
          : null))
      : null;
    if (!bridge) return;
    const rawQ = Array.isArray(preQueue) ? preQueue : (state.queue || []);
    const idx = Math.max(0, Math.min(preIdx !== null ? preIdx : (state.queueIndex || 0), Math.max(0, rawQ.length - 1)));
    const compact = rawQ.slice(0, 150).map((t) => {
      if (!t) return null;
      const vid = safeYtId(t.ytId || t.id) || '';
      return {
        id: String(t.id || vid || ''),
        ytId: vid,
        title: String(t.title || 'Kurfamüzik'),
        artist: String(t.artist || ''),
        thumbnail: getTrackThumbnail(t),
        duration: String(t.duration || '3:30')
      };
    }).filter(Boolean);
    bridge.setNativeQueueJson(JSON.stringify(compact), Number(idx) || 0);
  } catch (_) {}
}
window.syncNativeAndroidQueue = syncNativeAndroidQueue;

function compactTrackForStorage(t) {
  if (!t || typeof t !== 'object') return null;
  const id = t.id || t.ytId;
  if (!id) return null;
  return {
    id,
    ytId: t.ytId || safeYtId(id) || null,
    title: String(t.title || 'Şarkı'),
    artist: String(t.artist || 'Sanatçı'),
    thumbnail: getTrackThumbnail(t),
    duration: t.duration || '3:30',
    source: t.source || null,
    audiusStreamUrl: t.audiusStreamUrl || null,
    isLocal: Boolean(t.isLocal),
    streamUrl: t.streamUrl || null
  };
}

function persistQueue(preCleanedQueue = null, preIdx = null) {
  try {
    if (typeof state === 'undefined' || !state) return;
    const rawQ = Array.isArray(preCleanedQueue) ? preCleanedQueue : (state.queue || []);
    const qSlice = rawQ.slice(0, 120).map(compactTrackForStorage).filter(Boolean);
    const idx = Math.max(0, Math.min(preIdx !== null ? preIdx : (state.queueIndex || 0), Math.max(0, qSlice.length - 1)));
    const cur = compactTrackForStorage(state.currentTrack);
    safeSetStorage('kurfa_persisted_queue_v1', JSON.stringify({
      queue: qSlice,
      queueIndex: idx,
      currentTrack: cur,
      contextTitle: state.playingContextTitle || '',
      contextSub: state.playingContextSub || '',
      savedAt: Date.now()
    }));
  } catch (_) {}
}
window.persistQueue = persistQueue;

function restorePersistedQueue() {
  try {
    const saved = safeGetJSON('kurfa_persisted_queue_v1', null);
    if (!saved || typeof saved !== 'object') return;
    if ((!Array.isArray(state.queue) || state.queue.length === 0) && Array.isArray(saved.queue) && saved.queue.length > 0) {
      state.queue = cleanDeduplicateQueueArray(saved.queue);
    }
    if (!state.currentTrack && saved.currentTrack && (saved.currentTrack.id || saved.currentTrack.ytId)) {
      state.currentTrack = saved.currentTrack;
    }
    if (Array.isArray(state.queue) && state.queue.length > 0) {
      if (state.currentTrack) {
        const curId = state.currentTrack.id || state.currentTrack.ytId;
        const foundIdx = state.queue.findIndex(t => t && (t.id === curId || t.ytId === curId));
        state.queueIndex = foundIdx !== -1 ? foundIdx : Math.max(0, Math.min(Number(saved.queueIndex) || 0, state.queue.length - 1));
      } else {
        state.queueIndex = Math.max(0, Math.min(Number(saved.queueIndex) || 0, state.queue.length - 1));
        state.currentTrack = state.queue[state.queueIndex] || null;
      }
    }
    if (saved.contextTitle) state.playingContextTitle = saved.contextTitle;
    if (saved.contextSub) state.playingContextSub = saved.contextSub;
    state.isPlaying = false;
  } catch (_) {}
}

function setPlaybackQueueContext(tracks, startTrackOrIdx = 0, contextTitle = '', contextSub = '') {
  const validTracks = cleanDeduplicateQueueArray(Array.isArray(tracks) ? tracks : []);
  if (validTracks.length === 0) return null;

  let resolvedIdx = 0;
  if (typeof startTrackOrIdx === 'number' && !isNaN(startTrackOrIdx)) {
    const rawItem = Array.isArray(tracks) ? tracks[startTrackOrIdx] : null;
    if (rawItem) {
      const rawId = rawItem.id || rawItem.ytId;
      const matched = validTracks.findIndex(t => t && ((rawId && (t.id === rawId || t.ytId === rawId)) || t === rawItem));
      resolvedIdx = matched !== -1 ? matched : Math.max(0, Math.min(startTrackOrIdx, validTracks.length - 1));
    }
  } else if (startTrackOrIdx && typeof startTrackOrIdx === 'object') {
    const targetId = startTrackOrIdx.id || startTrackOrIdx.ytId;
    const matched = validTracks.findIndex(t => t && ((targetId && (t.id === targetId || t.ytId === targetId)) || t === startTrackOrIdx));
    resolvedIdx = matched !== -1 ? matched : 0;
  } else if (typeof startTrackOrIdx === 'string' && startTrackOrIdx) {
    const matched = validTracks.findIndex(t => t && (t.id === startTrackOrIdx || t.ytId === startTrackOrIdx));
    resolvedIdx = matched !== -1 ? matched : 0;
  }

  state.originalQueue = [...validTracks];

  if (state.isShuffle) {
    const chosen = validTracks[resolvedIdx];
    const remaining = validTracks.filter((_, i) => i !== resolvedIdx);
    for (let i = remaining.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
    }
    state.queue = chosen ? [chosen, ...remaining] : remaining;
    state.queueIndex = 0;
  } else {
    state.queue = [...validTracks];
    state.queueIndex = resolvedIdx;
  }

  if (contextSub) state.playingContextSub = contextSub;
  if (contextTitle) state.playingContextTitle = contextTitle;

  const ctxTitleEl = document.getElementById('playing-context-title');
  const ctxSubEl = document.getElementById('playing-context-sub');
  if (ctxTitleEl && state.playingContextTitle) ctxTitleEl.textContent = state.playingContextTitle;
  if (ctxSubEl && state.playingContextSub) ctxSubEl.textContent = state.playingContextSub;

  saveQueueState();
  return state.queue[state.queueIndex] || validTracks[resolvedIdx];
}
window.setPlaybackQueueContext = setPlaybackQueueContext;

const failedVideoIds = new Set();

const state = {
  currentTrack: safeGetJSON('kurfa_last_track', null), // Restores user's last played track locally (0 server load)
  isPlaying: false,
  userPaused: false,
  currentPlayheadTime: 0,
  _switchingDeckMode: false,
  _switchingDeckTimer: null,
  _guardianResumeTimer: null,
  _errorSkipTimer: null,
  _stallWatchdogTimer: null,
  _trackSwitchStartedAt: 0,
  _activeMediaEngine: 'none', // 'none' | 'audio' | 'youtube' | 'native-exo' | 'native-video'
  _nativeExoCurrentTime: 0,
  _nativeExoDuration: 0,
  _nativeExoFallbackActive: false,
  _lastNativeExoEndedToken: -1,
  _desktopLocalAudioOrigin: '',
  _nativeLocalProxyOrigin: '',
  _prefetchedNextStreamKey: '',
  _prefetchTimer: null,
  _activeTrackConfirmedPlaying: false,
  _activeTrackId: null,
  _seekOnceHandler: null,
  _videoSeekOnceHandler: null,
  _adSeekAttempts: 0,
  _guardianAttempts: 0,
  _consecutiveErrorSkips: 0,
  _lastErrorVideoId: null,
  _playerInError: false,
  _adRiskSessionAcknowledged: false,
  _pendingAdWarnPlayback: null,
  queue: cleanDeduplicateQueueArray(safeGetJSON('kurfa_queue', [])),
  userQueue: cleanDeduplicateQueueArray(safeGetJSON('kurfa_user_queue', [])),
  originalQueue: cleanDeduplicateQueueArray(safeGetJSON('kurfa_original_queue', [])),
  queueIndex: safeGetInt('kurfa_queue_index', 0),
  volume: (function() {
    const isMob = /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent || '') || (typeof window !== 'undefined' && window.innerWidth < 768);
    return isMob ? 1.0 : safeGetFloat('kurfa_vol', 0.8);
  })(),
  isMuted: false,
  isShuffle: localStorage.getItem('kurfa_shuffle') === 'true',
  repeatMode: safeGetInt('kurfa_repeat', 0), // 0: off, 1: all, 2: one
  currentTab: localStorage.getItem('kurfa_last_tab') || 'kesfet',
  currentKesfetSubTab: localStorage.getItem('kurfa_last_kesfet_subtab') || 'trendler',
  currentKutuphaneSubTab: localStorage.getItem('kurfa_last_kutuphane_subtab') || 'favoriler',
  favorites: safeGetJSON('kurfa_favs', []),
  downloads: safeGetJSON('kurfa_downloads', []),
  downloadQueue: [],
  isDownloading: false,
  deckVisualMode: 'vinyl',
  activeEqPreset: localStorage.getItem('kurfa_eq_preset') || 'standart',
  lyricsOffset: 0,
  proSettings: {
    dynamicBg: localStorage.getItem('kurfa_dynamic_bg') !== 'false',
    sponsorBlock: localStorage.getItem('kurfa_sponsorblock') === 'true',
    playbackSpeed: Math.max(0.5, Math.min(2.0, safeGetFloat('kurfa_speed', 1.0) || 1.0)),
    crossfadeSec: Math.max(0, Math.min(8, safeGetInt('kurfa_crossfade', 0) || 0)),
    normalization: localStorage.getItem('kurfa_norm') === 'true',
    skipSilence: localStorage.getItem('kurfa_skip_silence') === 'true',
    bassBoost: Math.max(0, Math.min(100, safeGetInt('kurfa_bass_boost', 0) || 0)),
    clarity: Math.max(0, Math.min(100, safeGetInt('kurfa_clarity', 0) || 0)),
    spatial3d: localStorage.getItem('kurfa_spatial_3d') === 'true'
  },
  sponsorSegments: [],
  _skippedSponsorKeys: new Set(),
  _isAdMuted: false,
  currentAudioSinkId: localStorage.getItem('kurfa_audio_sink') || null,
  profile: (function() {
    const saved = safeGetJSON('kurfa_profile', null);
    if (saved) return saved;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return {
      nickname: "Dinleyici",
      avatar: "./kurfamuzik_logo_96.webp",
      darkMode: prefersDark,
      listeningSeconds: 0,
      tracksPlayed: 0
    };
  })(),
  isSeeking: false,
  isScrubbingVol: false,
  queueDrawerOpen: false,
  ytPlayer: null,
  ytReady: false,
  activeLyrics: [],
  currentLyricIndex: -1,
  currentSearchResults: [],
  _rawSearchResults: [],
  baseSearchQuery: '',
  searchCategoryFilter: 'all',
  currentGenreFilter: 'all',
  libraryViewMode: (function() {
    try { return localStorage.getItem('kurfa_lib_view') === 'list' ? 'list' : 'grid'; } catch (_) { return 'grid'; }
  })(),
  savedAlbums: safeGetJSON('kurfa_saved_albums', []),
  customPlaylists: safeGetJSON('kurfa_custom_playlists', []),
  activeCustomPlaylistId: null,
  spotifyPlaylists: safeGetJSON('kurfa_spotify_playlists', []),
  activeSpotifyPlaylistId: null,
  playingContextSub: 'ÇALMA LİSTESİNDEN ÇALINIYOR',
  playingContextTitle: 'YouTube Trendleri',
  backgroundAudioMode: (function() {
    const saved = localStorage.getItem('kurfa_bg_audio');
    if (saved !== null) return saved === 'true';
    return /Android|webOS|iPhone|iPad|iPod/i.test(navigator.userAgent) || (typeof window !== 'undefined' && window.innerWidth < 768);
  })(),
  firebaseUser: null,
  googleUser: safeGetJSON('kurfa_google_user', null),
  lang: (function() {
    try {
      const l = localStorage.getItem('kurfa_lang');
      if (l === 'en' || l === 'tr') return l;
      return detectSystemLanguage();
    } catch (_) { return 'tr'; }
  })(),
  searchHistory: safeGetJSON('kurfa_search_history', []),
  _recentSearchesExpanded: false,
  recentlyPlayed: safeGetJSON('kurfa_recent_played', [])
};

// Fresh users start with legitimate empty downloads, favorites and playlists
if (!Array.isArray(state.downloads)) state.downloads = [];
if (!Array.isArray(state.favorites)) state.favorites = [];
if (!Array.isArray(state.customPlaylists)) state.customPlaylists = [];
if (!Array.isArray(state.spotifyPlaylists)) state.spotifyPlaylists = [];
if (!Array.isArray(state.queue)) state.queue = [];
if (!Array.isArray(state.originalQueue)) state.originalQueue = [];
if (!Array.isArray(state.searchHistory)) state.searchHistory = [];
if (!Array.isArray(state.recentlyPlayed)) state.recentlyPlayed = [];
if (!Array.isArray(state.savedAlbums)) state.savedAlbums = [];

// =============================================================================
// 2.5 SHARED UI HELPERS, MULTI-YT FALLBACK & DESKTOP USER-DATA PERSISTENCE
// =============================================================================

function renderMiniEqBarsHtml(isPlaying) {
  return `<span class="kurfa-eq-bars ${isPlaying ? '' : 'paused'}" aria-hidden="true"><span></span><span></span><span></span></span>`;
}

function renderPlayingPillHtml() {
  return `<span class="kurfa-playing-pill">${escapeHtml(t('player.playing_badge'))}</span>`;
}

function syncActiveRowEqState() {
  const playing = Boolean(state.isPlaying);
  document.querySelectorAll('.kurfa-eq-bars').forEach((el) => {
    el.classList.toggle('paused', !playing);
  });
}

function collectAltYtIds(track, candidates, primaryId) {
  const seen = new Set();
  const out = [];
  const pushId = (raw) => {
    const id = safeYtId(raw);
    if (!id || id === primaryId || failedVideoIds.has(id) || seen.has(id)) return;
    seen.add(id);
    out.push(id);
  };
  if (Array.isArray(candidates)) {
    candidates.forEach((c) => pushId(c && (c.id || c.ytId)));
  }
  if (track && Array.isArray(track._altYtIds)) {
    track._altYtIds.forEach(pushId);
  }
  if (track && Array.isArray(track.altYtIds)) {
    track.altYtIds.forEach(pushId);
  }
  return out.slice(0, 4);
}

function getNextAltYtId(track, currentId) {
  if (!track || !Array.isArray(track._altYtIds) || track._altYtIds.length === 0) return null;
  const remaining = [];
  let chosen = null;
  for (const raw of track._altYtIds) {
    const cid = safeYtId(raw);
    if (!cid || cid === currentId || failedVideoIds.has(cid)) continue;
    if (!chosen) {
      chosen = cid;
    } else {
      remaining.push(cid);
    }
  }
  track._altYtIds = remaining;
  return chosen;
}

function recordRecentlyPlayed(track) {
  if (!track || !track.id || !track.title) return;
  const idStr = String(track.id);
  if (idStr.startsWith('sp-')) return;
  const entry = {
    id: track.id,
    ytId: safeYtId(track.ytId || track.id) || null,
    title: String(track.title || '').slice(0, 140),
    artist: String(track.artist || '').slice(0, 100),
    thumbnail: safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png'),
    duration: track.duration || '3:30',
    source: track.source || null,
    audiusStreamUrl: track.audiusStreamUrl || null,
    isLocal: Boolean(track.isLocal),
    streamUrl: track.streamUrl || null,
    playedAt: Date.now()
  };
  if (!Array.isArray(state.recentlyPlayed)) state.recentlyPlayed = [];
  const normId = entry.ytId || entry.id;
  state.recentlyPlayed = [
    entry,
    ...state.recentlyPlayed.filter((t) => t && t.id !== entry.id && (!normId || (t.ytId || t.id) !== normId))
  ].slice(0, 30);
  safeSetStorage('kurfa_recent_played', JSON.stringify(state.recentlyPlayed));
  if (typeof renderSearchDiscoveryHub === 'function') {
    renderSearchDiscoveryHub();
  }
  if (typeof renderPersonalizedKesfet === 'function') {
    renderPersonalizedKesfet({ refreshAsync: false });
  }
  scheduleSaveUserDataToDesktop();
}

let __saveUserDataTimer = null;
let __desktopUserDataLoaded = false;

function scheduleSaveUserDataToDesktop() {
  if (typeof getBrowserExtensionMode !== 'function' || !getBrowserExtensionMode().startsWith('desktop')) return;
  if (__saveUserDataTimer) clearTimeout(__saveUserDataTimer);
  __saveUserDataTimer = setTimeout(() => {
    __saveUserDataTimer = null;
    try {
      const payload = {
        version: 1,
        updatedAt: Date.now(),
        lang: getAppLanguage(),
        searchHistory: Array.isArray(state.searchHistory) ? state.searchHistory.slice(0, 12) : [],
        recentlyPlayed: Array.isArray(state.recentlyPlayed) ? state.recentlyPlayed.slice(0, 30) : [],
        favorites: Array.isArray(state.favorites) ? state.favorites : [],
        customPlaylists: Array.isArray(state.customPlaylists) ? state.customPlaylists : [],
        spotifyPlaylists: Array.isArray(state.spotifyPlaylists) ? state.spotifyPlaylists : []
      };
      callExtensionBridge('SAVE_USER_DATA', { dataJson: JSON.stringify(payload) }, 4000).catch(() => {});
    } catch (_) {}
  }, 400);
}

async function loadUserDataFromDesktop() {
  if (__desktopUserDataLoaded) return;
  if (typeof getBrowserExtensionMode !== 'function' || !getBrowserExtensionMode().startsWith('desktop')) return;
  __desktopUserDataLoaded = true;
  try {
    const res = await callExtensionBridge('LOAD_USER_DATA', {}, 4000);
    if (!res || !res.success) return;
    let data = res.data && typeof res.data === 'object' ? res.data : null;
    if (!data && typeof res.dataJson === 'string' && res.dataJson.trim()) {
      data = JSON.parse(res.dataJson);
    }
    if (!data || typeof data !== 'object') return;

    let changed = false;

    if (Array.isArray(data.searchHistory) && data.searchHistory.length > 0) {
      const seenQ = new Set();
      const mergedQ = [];
      [...(state.searchHistory || []), ...data.searchHistory].forEach((q) => {
        const clean = String(q || '').trim();
        const key = clean.toLowerCase();
        if (clean && !seenQ.has(key)) {
          seenQ.add(key);
          mergedQ.push(clean);
        }
      });
      state.searchHistory = mergedQ.slice(0, 12);
      safeSetStorage('kurfa_search_history', JSON.stringify(state.searchHistory));
      changed = true;
    }

    if (Array.isArray(data.recentlyPlayed) && data.recentlyPlayed.length > 0) {
      const combinedRecent = [...(state.recentlyPlayed || []), ...data.recentlyPlayed]
        .filter((t) => t && t.id && t.title)
        .sort((a, b) => Number(b.playedAt || 0) - Number(a.playedAt || 0));
      const seenR = new Set();
      const mergedRecent = [];
      for (const item of combinedRecent) {
        const key = item.ytId || item.id;
        if (!seenR.has(key)) {
          seenR.add(key);
          mergedRecent.push(item);
          if (mergedRecent.length >= 30) break;
        }
      }
      state.recentlyPlayed = mergedRecent;
      safeSetStorage('kurfa_recent_played', JSON.stringify(state.recentlyPlayed));
      changed = true;
    }

    if (Array.isArray(data.favorites) && data.favorites.length > 0) {
      const seenF = new Set((state.favorites || []).map((t) => t && t.id).filter(Boolean));
      const mergedFavs = [...(state.favorites || [])];
      data.favorites.forEach((t) => {
        if (t && t.id && !seenF.has(t.id)) {
          seenF.add(t.id);
          mergedFavs.push(t);
        }
      });
      state.favorites = mergedFavs;
      safeSetStorage('kurfa_favs', JSON.stringify(state.favorites));
      changed = true;
    }

    if (Array.isArray(data.customPlaylists) && data.customPlaylists.length > 0) {
      const plMap = new Map();
      (state.customPlaylists || []).forEach((p) => p && p.id && plMap.set(p.id, p));
      data.customPlaylists.forEach((p) => {
        if (!p || !p.id) return;
        const localPl = plMap.get(p.id);
        if (!localPl || ((p.tracks || []).length > (localPl.tracks || []).length)) {
          plMap.set(p.id, p);
        }
      });
      state.customPlaylists = Array.from(plMap.values());
      safeSetStorage('kurfa_custom_playlists', JSON.stringify(state.customPlaylists));
      changed = true;
    }

    if (Array.isArray(data.spotifyPlaylists) && data.spotifyPlaylists.length > 0) {
      const spMap = new Map();
      (state.spotifyPlaylists || []).forEach((p) => p && p.id && spMap.set(p.id, p));
      data.spotifyPlaylists.forEach((p) => {
        if (p && p.id && !spMap.has(p.id)) {
          spMap.set(p.id, p);
        }
      });
      state.spotifyPlaylists = Array.from(spMap.values());
      safeSetStorage('kurfa_spotify_playlists', JSON.stringify(state.spotifyPlaylists));
      changed = true;
    }

    if ((data.lang === 'en' || data.lang === 'tr') && !localStorage.getItem('kurfa_lang')) {
      applyAppLanguage(data.lang, true);
    }

    if (changed) {
      renderFavoritesTable();
      renderCustomPlaylistsGrid();
      renderSpotifyPlaylistsGrid();
      updateKutuphaneBadges();
      updateQuickFavCount();
      if (typeof renderSearchDiscoveryHub === 'function') renderSearchDiscoveryHub();
      if (typeof renderPersonalizedKesfet === 'function') renderPersonalizedKesfet({ refreshAsync: true });
      if (typeof renderPopularArtistsGrid === 'function') renderPopularArtistsGrid();
      if (state.currentTrack && !lyricsLoadedTrackId && typeof updateLyricsDisplay === 'function') updateLyricsDisplay();
    }
  } catch (_) {}
}


// =============================================================================
// 3. DOM ELEMENTS
// =============================================================================

const DOM = {
  // Tabs
  viewTabs: document.querySelectorAll('.view-tab'),
  navItems: document.querySelectorAll('.nav-item'),
  mobileNavItems: document.querySelectorAll('.mobile-nav-item'),
  
  // Desktop Player Deck
  playerThumb: document.getElementById('player-thumb'),
  playerTitle: document.getElementById('player-title'),
  playerArtist: document.getElementById('player-artist'),
  playerFavBtn: document.getElementById('player-fav-btn'),
  btnPlayPause: document.getElementById('btn-play-pause'),
  playerPlayIcon: document.getElementById('player-play-icon'),
  btnShuffle: document.getElementById('btn-shuffle'),
  btnRepeat: document.getElementById('btn-repeat'),
  playerSeekTrack: document.getElementById('player-seek-track'),
  playerSeekFill: document.getElementById('player-seek-fill'),
  playerSeekKnob: document.getElementById('player-seek-knob'),
  playerTimeCur: document.getElementById('player-time-cur'),
  playerTimeDur: document.getElementById('player-time-dur'),
  btnVolumeIcon: document.getElementById('btn-volume-icon'),
  playerVolTrack: document.getElementById('player-vol-track'),
  playerVolFill: document.getElementById('player-vol-fill'),

  // Mobile Mini Player
  mobileMiniPlayer: document.getElementById('mobile-mini-player'),
  playerThumbMobile: document.getElementById('player-thumb-mobile'),
  playerTitleMobile: document.getElementById('player-title-mobile'),
  playerArtistMobile: document.getElementById('player-artist-mobile'),
  playerFavBtnMobile: document.getElementById('player-fav-btn-mobile'),
  btnPlayPauseMobile: document.getElementById('btn-play-pause-mobile'),
  playerPlayIconMobile: document.getElementById('player-play-icon-mobile'),
  playerMobileSeekFill: document.getElementById('player-mobile-seek-fill'),
  
  // Visualizer / Lyrics in Çalma Listeleri tab
  deckCoverImg: document.getElementById('deck-cover-img'),
  deckTitle: document.getElementById('deck-title'),
  deckArtist: document.getElementById('deck-artist'),
  deckLyricsLines: document.getElementById('deck-lyrics-lines'),
  karaokeLyricsBox: document.getElementById('karaoke-lyrics-box'),
  lyricsStatusLabel: document.getElementById('lyrics-status-label'),
  lyricsSourceBadge: document.getElementById('lyrics-source-badge'),
  lyricsOffsetDisplay: document.getElementById('lyrics-offset-display'),
  vinylDisc: document.getElementById('vinyl-disc'),
  
  // Grids & Tables
  popularCardsGrid: document.getElementById('popular-cards-grid'),
  homeTracklistTable: document.getElementById('home-tracklist-table'),
  trendlerCardsGrid: document.getElementById('trendler-cards-grid'),
  favoritesListTable: document.getElementById('favorites-list-table'),
  downloadsListTable: document.getElementById('downloads-list-table'),
  playlistTracksTable: document.getElementById('playlist-tracks-table'),
  favCountText: document.getElementById('fav-count-text'),
  
  // Search
  topSearchInput: document.getElementById('top-search-input'),
  engineSearchInput: null,
  searchResultsList: document.getElementById('search-results-list'),
  searchResultsCount: document.getElementById('search-results-count'),
  searchSpotlightBox: document.getElementById('search-spotlight-box'),
  
  // Modals & Drawers
  queueDrawer: document.getElementById('queue-drawer'),
  queueDrawerList: document.getElementById('queue-drawer-list'),
  queueCountBadge: document.getElementById('queue-count-badge'),
  btnClearQueue: document.getElementById('btn-clear-queue'),
  downloaderModal: document.getElementById('downloader-modal'),
  downloaderModalCard: document.getElementById('downloader-modal-card'),
  modalUrlInput: document.getElementById('modal-url-input'),
  kurfaToast: document.getElementById('kurfa-toast'),
  toastText: document.getElementById('toast-text'),
  
  // Hero Section
  heroBg: document.getElementById('hero-bg'),
  heroTitle: document.getElementById('hero-title'),
  heroArtist: document.getElementById('hero-artist'),
  heroPlayBtn: document.getElementById('hero-play-btn'),
  heroQueueBtn: document.getElementById('hero-queue-btn'),
  heroDlBtn: document.getElementById('hero-dl-btn'),

  // Audio & Native Video fallback
  audioEngine: document.getElementById('audio-engine'),
  videoEngine: document.getElementById('native-video-engine')
};

// =============================================================================
// 4. TOAST NOTIFICATIONS
// =============================================================================

let toastTimeout = null;
function showToast(message, type = 'info', duration = 3000) {
  if (!DOM.kurfaToast || !DOM.toastText) return;

  const iconEl = document.getElementById('toast-icon');
  const badgeEl = document.getElementById('toast-badge');
  const iconWrapper = document.getElementById('toast-icon-wrapper');

  const isNowPlaying = (typeof message === 'string' && (message.startsWith('Çalınıyor:') || message.startsWith('Oynatılıyor:')));
  if (isNowPlaying) return;

  {
    if (badgeEl) badgeEl.classList.add('hidden');
    DOM.toastText.textContent = message;

    if (iconEl && iconWrapper) {
      iconWrapper.className = 'flex items-center justify-center w-7 h-7 rounded-full flex-shrink-0';
      if (type === 'success' || message.includes('Eklendi') || message.includes('Kaydedildi') || message.includes('Başarılı')) {
        iconEl.textContent = 'check_circle';
        iconWrapper.classList.add('bg-emerald-500/15', 'text-emerald-500');
      } else if (type === 'error' || message.includes('Hata') || message.includes('Başarısız')) {
        iconEl.textContent = 'error';
        iconWrapper.classList.add('bg-rose-500/15', 'text-rose-500');
      } else if (message.includes('Senkro') || message.includes('Eşitle') || message.includes('saniyesine')) {
        iconEl.textContent = 'tune';
        iconWrapper.classList.add('bg-secondary/15', 'text-secondary');
      } else {
        iconEl.textContent = 'music_note';
        iconWrapper.classList.add('bg-primary/15', 'text-primary');
      }
    }
  }

  DOM.kurfaToast.classList.add('show');
  
  if (toastTimeout) clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    DOM.kurfaToast.classList.remove('show');
  }, duration);
}

function dismissToast() {
  if (DOM.kurfaToast) DOM.kurfaToast.classList.remove('show');
  if (toastTimeout) clearTimeout(toastTimeout);
}
window.dismissToast = dismissToast;

// =============================================================================
// 5. NAVIGATION & TAB SWITCHING (DESKTOP & MOBILE - 4 CONSOLIDATED TABS)
// =============================================================================

function isTrackLocal(track) {
  if (!track) return false;
  const idStr = String(track.id || '');
  return Boolean(track.isLocal || track.source === 'local' || idStr.startsWith('local_'));
}
window.isTrackLocal = isTrackLocal;

function isLocalQueueSession() {
  if (isTrackLocal(state.currentTrack)) return true;
  const q = Array.isArray(state.queue) ? state.queue : [];
  return q.length > 0 && q.every(t => isTrackLocal(t));
}

function supportsDeckVideo(track) {
  if (!track || isTrackLocal(track)) return false;
  const idStr = String(track.id || '');
  if (idStr.startsWith('audius_') || Boolean(track.audiusStreamUrl)) return false;
  return Boolean(safeYtId(track.ytId || track.id));
}

function syncDeckVisualUIOnly(mode) {
  const vinylBtn = document.getElementById('btn-deck-vinyl-mode');
  const videoBtn = document.getElementById('btn-deck-video-mode');
  const vinylWrap = document.getElementById('deck-vinyl-wrapper');
  const videoWrap = document.getElementById('deck-video-wrapper');
  const barVideoBtn = document.getElementById('btn-player-video-mode');
  const nativeVideoEl = document.getElementById('native-video-engine');
  const videoPh = document.getElementById('deck-video-placeholder');

  if (mode === 'video') {
    if (vinylBtn) {
      vinylBtn.classList.remove('bg-surface-container-highest', 'text-primary', 'shadow-xs');
      vinylBtn.classList.add('text-on-surface-variant');
    }
    if (videoBtn) {
      videoBtn.classList.add('bg-surface-container-highest', 'text-primary', 'shadow-xs');
      videoBtn.classList.remove('text-on-surface-variant');
    }
    if (vinylWrap) {
      vinylWrap.style.display = 'none';
      vinylWrap.classList.add('hidden');
    }
    if (videoWrap) {
      videoWrap.style.display = 'block';
      videoWrap.classList.remove('hidden');
    }
    if (barVideoBtn) {
      barVideoBtn.classList.add('text-primary');
      barVideoBtn.classList.remove('text-on-surface-variant');
    }
    const isNativeVideoActive = state._activeMediaEngine === 'native-video' || Boolean(nativeVideoEl && nativeVideoEl.getAttribute('src'));
    if (nativeVideoEl) {
      nativeVideoEl.classList.toggle('hidden', !isNativeVideoActive);
    }
    if (videoPh) {
      videoPh.classList.toggle('hidden', isNativeVideoActive);
    }
  } else {
    if (videoBtn) {
      videoBtn.classList.remove('bg-surface-container-highest', 'text-primary', 'shadow-xs');
      videoBtn.classList.add('text-on-surface-variant');
    }
    if (vinylBtn) {
      vinylBtn.classList.add('bg-surface-container-highest', 'text-primary', 'shadow-xs');
      vinylBtn.classList.remove('text-on-surface-variant');
    }
    if (vinylWrap) {
      vinylWrap.style.display = '';
      vinylWrap.classList.remove('hidden');
    }
    if (videoWrap) {
      videoWrap.style.display = 'none';
      videoWrap.classList.add('hidden');
    }
    if (barVideoBtn) {
      barVideoBtn.classList.remove('text-primary');
      barVideoBtn.classList.add('text-on-surface-variant');
    }
    if (nativeVideoEl) {
      nativeVideoEl.classList.add('hidden');
    }
    if (videoPh) {
      videoPh.classList.remove('hidden');
    }
    dismissVideoAdNotice();
  }
}

const KURFA_GA4_MEASUREMENT_IDS = {
  'kurfanova.github.io': 'G-Q9M5FFNCYE',
  'kurfanova.kurfa.workers.dev': 'G-GTFHMD9PS6'
};
function getKurfaGa4MeasurementId() {
  try {
    const host = (typeof window !== 'undefined' && window.location && window.location.hostname || '').toLowerCase();
    if (KURFA_GA4_MEASUREMENT_IDS[host]) return KURFA_GA4_MEASUREMENT_IDS[host];
    if (host.endsWith('.workers.dev')) return 'G-GTFHMD9PS6';
    if (host.endsWith('.github.io')) return 'G-Q9M5FFNCYE';
  } catch (_) {}
  return '';
}
function getKurfaCanonicalOrigin() {
  try {
    const host = (typeof window !== 'undefined' && window.location && window.location.hostname || '').toLowerCase();
    if (host === 'kurfanova.kurfa.workers.dev' || host.endsWith('.workers.dev')) {
      return window.location.origin;
    }
  } catch (_) {}
  return 'https://kurfanova.github.io';
}

const KURFA_PAGE_SEO = {
  kesfet: {
    path: '/kesfet',
    title: 'Kurfamüzik — Reklamsız Müzik, Trendler & Keşfet',
    description: 'Türkiye ve dünya müzik trendleri, sanatçı radyo mixleri ve kişiselleştirilmiş reklamsız müzik akışı.'
  },
  arama: {
    path: '/arama',
    title: 'Müzik, Albüm ve Sanatçı Ara — Kurfamüzik',
    description: 'Şarkı, albüm, sanatçı, video klip ve canlı performanslarda anında yüksek kaliteli müzik arayın.'
  },
  kutuphanem: {
    path: '/kutuphane',
    title: 'Kütüphanem, Listeler & Kayıtlı Albümler — Kurfamüzik',
    description: 'Favori şarkılarınız, kayıtlı albümleriniz, çalma listeleriniz ve cihazınızdaki müzik arşivi.'
  },
  'calma-listeleri': {
    path: '/calar',
    title: 'Çalan & Canlı Şarkı Sözleri — Kurfamüzik',
    description: 'Senkronize canlı şarkı sözleri, video modu ve 5-bant stüdyo ekolayzır ile kesintisiz dinleme.'
  }
};

function initDeferredGa4Analytics() {
  const id = getKurfaGa4MeasurementId();
  if (!id || window.__kurfaGa4Loaded) return;
  if (!/^G-[A-Z0-9]+$/i.test(id)) return;
  window.__kurfaGa4Loaded = true;

  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag('js', new Date());
  window.gtag('config', id, { send_page_view: false });

  const s = document.createElement('script');
  s.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
  s.async = true;
  s.setAttribute('fetchpriority', 'low');
  document.head.appendChild(s);

  trackGa4PageView(window.location.pathname, document.title);
}

function trackGa4PageView(pagePath, pageTitle) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  if (!getKurfaGa4MeasurementId()) return;
  try {
    window.gtag('event', 'page_view', {
      page_path: pagePath || window.location.pathname,
      page_title: pageTitle || document.title
    });
  } catch (_) {}
}

function updatePageSeoMeta(opts = {}) {
  try {
    const tabId = opts.tabId || state.currentTab || 'kesfet';
    const meta = KURFA_PAGE_SEO[tabId] || KURFA_PAGE_SEO.kesfet;
    const title = opts.title || meta.title;
    const description = opts.description || meta.description;
    const path = opts.path || meta.path || '/';
    const canonicalUrl = `${getKurfaCanonicalOrigin()}${path === '/' ? '/' : path}`;

    if (title) document.title = title;

    const setMeta = (selector, attr, val) => {
      if (!val) return;
      const el = document.querySelector(selector);
      if (el) el.setAttribute(attr, val);
    };
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', canonicalUrl);
    setMeta('meta[name="twitter:title"]', 'content', title);
    setMeta('meta[name="twitter:description"]', 'content', description);
    setMeta('link[rel="canonical"]', 'href', canonicalUrl);

    const updateUrl = opts.updateUrl !== false;
    if (updateUrl && typeof window !== 'undefined' && /^https?:$/i.test(window.location.protocol)) {
      const curPath = window.location.pathname || '/';
      if (!curPath.startsWith('/google-auth') && curPath !== path) {
        const search = window.location.search || '';
        const hash = window.location.hash || '';
        window.history.replaceState(null, title, `${path}${search}${hash}`);
      }
    }
    trackGa4PageView(path, title);
  } catch (_) {}
}

function updateKurfaScrollRailState(wrap) {
  if (!wrap) return;
  const scroller = wrap.querySelector('#search-filter-chips, #kutuphane-subtabs, #settings-tab-nav');
  if (!scroller) return;
  const maxScroll = Math.max(0, scroller.scrollWidth - scroller.clientWidth);
  const canLeft = maxScroll > 6 && scroller.scrollLeft > 4;
  const canRight = maxScroll > 6 && scroller.scrollLeft < maxScroll - 4;
  wrap.classList.toggle('can-scroll-left', canLeft);
  wrap.classList.toggle('can-scroll-right', canRight);
}

function scrollKurfaRail(btn, delta = 160) {
  const wrap = btn ? btn.closest('[data-scroll-rail]') : null;
  if (!wrap) return;
  const scroller = wrap.querySelector('#search-filter-chips, #kutuphane-subtabs, #settings-tab-nav');
  if (!scroller) return;
  scroller.scrollBy({ left: delta, behavior: 'smooth' });
  setTimeout(() => updateKurfaScrollRailState(wrap), 260);
}
window.scrollKurfaRail = scrollKurfaRail;

let __kurfaScrollRailsBound = false;
function initKurfaScrollRails() {
  const wraps = document.querySelectorAll('[data-scroll-rail]');
  wraps.forEach((wrap) => {
    const scroller = wrap.querySelector('#search-filter-chips, #kutuphane-subtabs, #settings-tab-nav');
    if (scroller && !scroller.dataset.railBound) {
      scroller.dataset.railBound = '1';
      scroller.addEventListener('scroll', () => updateKurfaScrollRailState(wrap), { passive: true });
      if (typeof ResizeObserver === 'function') {
        try {
          new ResizeObserver(() => updateKurfaScrollRailState(wrap)).observe(scroller);
        } catch (_) {}
      }
    }
    requestAnimationFrame(() => updateKurfaScrollRailState(wrap));
  });
  if (!__kurfaScrollRailsBound && typeof window !== 'undefined') {
    __kurfaScrollRailsBound = true;
    window.addEventListener('resize', () => {
      document.querySelectorAll('[data-scroll-rail]').forEach(updateKurfaScrollRailState);
    }, { passive: true });
  }
}

function switchNowPlayingMobilePane(pane) {
  const valid = ['stage', 'queue', 'fx'];
  const target = valid.includes(pane) ? pane : 'stage';
  const tabWrap = document.getElementById('tab-calma-listeleri');
  if (tabWrap) tabWrap.setAttribute('data-np-pane', target);
  document.querySelectorAll('#nowplaying-mobile-tabs [data-np-tab]').forEach((btn) => {
    const active = btn.getAttribute('data-np-tab') === target;
    btn.classList.toggle('active', active);
    btn.setAttribute('aria-selected', active ? 'true' : 'false');
  });
}
window.switchNowPlayingMobilePane = switchNowPlayingMobilePane;

function switchTab(tabId, shouldScroll = true, opts = {}) {
  state.currentTab = tabId;
  if (document.body) {
    document.body.classList.toggle('kurfa-tab-arama', tabId === 'arama');
  }
  if (tabId === "kesfet" && !(opts && opts.preserveArtist)) {
    closeArtistDetail();
  }
  safeSetStorage('kurfa_last_tab', tabId);
  if (typeof initKurfaScrollRails === 'function') {
    setTimeout(initKurfaScrollRails, 20);
  }

  // Desktop sidebar nav
  document.querySelectorAll('.nav-item').forEach(item => {
    if (item.getAttribute('data-tab') === tabId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Mobile bottom nav
  document.querySelectorAll('.mobile-nav-item').forEach(item => {
    if (item.getAttribute('data-tab') === tabId) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  // Toggle view panes & enforce View Suspension (Zero CPU/GPU for dormant views)
  document.querySelectorAll('.view-tab').forEach(pane => {
    if (pane.id === `tab-${tabId}`) {
      pane.classList.remove('view-suspended');
      pane.classList.add('active');
      pane.style.contentVisibility = 'visible';
    } else {
      pane.classList.remove('active');
      pane.classList.add('view-suspended');
      pane.style.contentVisibility = 'hidden';
    }
  });

  // Keep floating mini-player visible across all mobile tabs (including Sözler & EQ)
  const mobileMiniPlayer = document.getElementById('mobile-mini-player');
  if (mobileMiniPlayer) {
    mobileMiniPlayer.style.display = '';
  }

  // Re-render specific tab contents only when needed (Avoid unnecessary DOM destruction)
  if (tabId === 'kutuphanem') {
    if (!DOM.favoritesListTable || DOM.favoritesListTable.children.length === 0) {
      renderFavoritesTable();
    }
    if (!DOM.downloadsListTable || DOM.downloadsListTable.children.length === 0) {
      renderDownloadsTable();
    }
    updateKutuphaneBadges();
  } else if (tabId === 'calma-listeleri') {
    const curTrackId = state.currentTrack ? (state.currentTrack.id || '') : '';
    if (curTrackId && lyricsLoadedTrackId === curTrackId && lyricsLoadedPlaybackToken === currentPlaybackToken) {
      syncLyricsWithTime(getActiveMediaCurrentTime(), true);
    } else {
      updateLyricsDisplay();
    }
    renderPlaylistTracksTable();
    if (typeof LyricsClock !== 'undefined' && typeof LyricsClock.syncState === 'function') {
      LyricsClock.syncState();
    }
  } else if (tabId === 'kesfet') {
    // Only build DOM if not rendered yet or active track changed while dormant
    const activeId = state.currentTrack ? state.currentTrack.id : null;
    if (!DOM.homeTracklistTable || DOM.homeTracklistTable.children.length === 0 || state._lastHomeActiveId !== activeId) {
      state._lastHomeActiveId = activeId;
      renderHomeTracklistTable();
    }
    if (!DOM.trendlerCardsGrid || DOM.trendlerCardsGrid.children.length === 0) {
      renderTrendlerCardsGrid();
    }
    const popArtistsEl = document.getElementById('popular-artists-grid');
    const kesifArtistsEl = document.getElementById('kesif-artists-grid');
    if (!popArtistsEl || popArtistsEl.children.length === 0 || (kesifArtistsEl && kesifArtistsEl.children.length === 0)) {
      renderPopularArtistsGrid();
    }
  } else if (tabId === 'arama') {
    if (DOM.topSearchInput && state.currentSearchQuery && !DOM.topSearchInput.value) {
      DOM.topSearchInput.value = state.currentSearchQuery;
    }
  }

  // Handle Video Player visibility across tabs (re-sync after tabFadeIn/smooth scroll)
  syncPersistentPlayerPosition();
  requestAnimationFrame(() => syncPersistentPlayerPosition());
  setTimeout(() => {
    if (state.currentTab === tabId) syncPersistentPlayerPosition();
  }, 240);

  // Smooth scroll to top only when requested
  if (shouldScroll) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  if (!(opts && opts.skipSeo)) {
    updatePageSeoMeta({ tabId });
  }
}

function navigateToKutuphane(subTab = 'favoriler') {
  switchTab('kutuphanem');
  switchKutuphaneSubTab(subTab);
  showToast(subTab === 'indirilenler' ? 'Çevrimdışı İndirilen Parçalar' : 'Favori Parçalarınız');
}
window.navigateToKutuphane = navigateToKutuphane;

// =============================================================================
// 5.1 SUB-TAB SWITCHING (KEŞFET & KÜTÜPHANEM)
// =============================================================================

function switchKesfetSubTab(subTabId) {
  state.currentKesfetSubTab = subTabId;
  safeSetStorage('kurfa_last_kesfet_subtab', subTabId);

  // Update button active state
  const buttons = document.querySelectorAll('#kesfet-subtabs .sub-tab-pill');
  buttons.forEach(btn => {
    const isTarget = btn.id === `subtab-btn-${subTabId}`;
    if (isTarget) {
      btn.classList.add('active', 'bg-primary', 'text-on-primary', 'font-bold');
      btn.classList.remove('bg-surface-container-low', 'text-on-surface');
    } else {
      btn.classList.remove('active', 'bg-primary', 'text-on-primary', 'font-bold');
      btn.classList.add('bg-surface-container-low', 'text-on-surface');
    }
  });

  // Toggle sub-panes
  const pTrendler = document.getElementById('subtab-pane-trendler');
  const pKesif = document.getElementById('subtab-pane-kesif');
  const pYeni = document.getElementById('subtab-pane-yeni');

  if (pTrendler) pTrendler.classList.toggle('hidden', subTabId !== 'trendler');
  if (pKesif) pKesif.classList.toggle('hidden', subTabId !== 'kesif');
  if (pYeni) pYeni.classList.toggle('hidden', subTabId !== 'yeni');

  if (subTabId === 'yeni') {
    renderFreshReleasesGrid();
  } else if (subTabId === 'kesif') {
    renderPopularCardsGrid();
    renderPopularArtistsGrid();
  } else if (subTabId === 'trendler') {
    renderTrendlerCardsGrid();
    renderHomeTracklistTable();
  }
}

function switchKutuphaneSubTab(subTabId) {
  state.currentKutuphaneSubTab = subTabId;
  safeSetStorage('kurfa_last_kutuphane_subtab', subTabId);

  // Update button active state
  const buttons = document.querySelectorAll('#kutuphane-subtabs .sub-tab-pill');
  buttons.forEach(btn => {
    const isTarget = btn.id === `kutuphane-btn-${subTabId}`;
    if (isTarget) {
      btn.classList.add('active', 'bg-primary', 'text-on-primary', 'font-bold');
      btn.classList.remove('bg-surface-container-low', 'text-on-surface');
    } else {
      btn.classList.remove('active', 'bg-primary', 'text-on-primary', 'font-bold');
      btn.classList.add('bg-surface-container-low', 'text-on-surface');
    }
  });

  // Toggle sub-panes
  const pList = document.getElementById('kutuphane-pane-listelerim');
  const pAlbums = document.getElementById('kutuphane-pane-albumler');
  const pSpotify = document.getElementById('kutuphane-pane-spotify');
  const pFav = document.getElementById('kutuphane-pane-favoriler');
  const pCihaz = document.getElementById('kutuphane-pane-cihaz');
  const pStats = document.getElementById('kutuphane-pane-istatistik');

  if (pList) pList.classList.toggle('hidden', subTabId !== 'listelerim');
  if (pAlbums) pAlbums.classList.toggle('hidden', subTabId !== 'albumler');
  if (pSpotify) pSpotify.classList.toggle('hidden', subTabId !== 'spotify');
  if (pFav) pFav.classList.toggle('hidden', subTabId !== 'favoriler');
  if (pCihaz) pCihaz.classList.toggle('hidden', subTabId !== 'cihaz');
  if (pStats) pStats.classList.toggle('hidden', subTabId !== 'istatistik');

  if (subTabId === 'listelerim') {
    renderCustomPlaylistsGrid();
  } else if (subTabId === 'albumler') {
    renderSavedAlbumsGrid();
  } else if (subTabId === 'spotify') {
    renderSpotifyPlaylistsGrid();
  } else if (subTabId === 'favoriler') {
    renderFavoritesTable();
  } else if (subTabId === 'cihaz') {
    renderDeviceAudioList();
    if (!Array.isArray(state.deviceAudioTracks) || state.deviceAudioTracks.length === 0) {
      scanLocalDeviceAudio(false);
    }
  } else if (subTabId === 'istatistik') {
    if (typeof renderStatsDashboard === 'function') renderStatsDashboard();
  }
  updateKutuphaneBadges();
}

function updateKutuphaneBadges() {
  const plLen = (state.customPlaylists || []).length;
  const spLen = (state.spotifyPlaylists || []).length;
  const favLen = (state.favorites || []).length;
  const albLen = (state.savedAlbums || []).length;
  const devLen = Array.isArray(state.deviceAudioTracks) ? state.deviceAudioTracks.length : 0;

  const plBadge = document.getElementById('playlists-badge-count');
  if (plBadge) plBadge.textContent = plLen.toString();

  const plCount = document.getElementById('playlist-count-text');
  if (plCount) plCount.textContent = `${plLen} Liste`;

  const spBadge = document.getElementById('spotify-badge-count');
  if (spBadge) spBadge.textContent = spLen.toString();

  const spCount = document.getElementById('spotify-count-text');
  if (spCount) spCount.textContent = `${spLen} Liste`;

  const favBadge = document.getElementById('fav-badge-count');
  if (favBadge) favBadge.textContent = favLen.toString();

  const favCount = document.getElementById('fav-count-text');
  if (favCount) favCount.textContent = `${favLen} Şarkı Kaydedildi`;

  const albBadge = document.getElementById('saved-albums-badge-count');
  if (albBadge) albBadge.textContent = albLen.toString();

  const albCount = document.getElementById('saved-albums-count-text');
  if (albCount) albCount.textContent = `${albLen} Albüm`;

  const bentoFav = document.getElementById('bento-fav-count');
  if (bentoFav) bentoFav.textContent = `${favLen} Parça`;

  const bentoAlb = document.getElementById('bento-albums-count');
  if (bentoAlb) bentoAlb.textContent = `${albLen} Albüm`;

  const bentoDev = document.getElementById('bento-device-count');
  if (bentoDev) bentoDev.textContent = `${devLen} Parça`;

  const viewIcon = document.getElementById('library-view-toggle-icon');
  if (viewIcon) {
    viewIcon.textContent = state.libraryViewMode === 'list' ? 'grid_view' : 'view_list';
  }
}

function toggleLibraryViewMode() {
  state.libraryViewMode = state.libraryViewMode === 'list' ? 'grid' : 'list';
  safeSetStorage('kurfa_lib_view', state.libraryViewMode);
  updateKutuphaneBadges();
  renderCustomPlaylistsGrid();
  renderSavedAlbumsGrid();
}

function isAlbumSaved(albumId) {
  const id = String(albumId || '').trim();
  if (!id || !Array.isArray(state.savedAlbums)) return false;
  return state.savedAlbums.some((a) => String(a.id || a.browseId || '') === id);
}

function toggleSavedAlbum(album) {
  const id = String(album?.browseId || album?.id || '').trim();
  if (!id) return false;
  if (!Array.isArray(state.savedAlbums)) state.savedAlbums = [];
  const idx = state.savedAlbums.findIndex((a) => String(a.id || a.browseId || '') === id);
  let saved = false;
  if (idx >= 0) {
    state.savedAlbums.splice(idx, 1);
    saved = false;
    showToast('Albüm kütüphaneden kaldırıldı');
  } else {
    state.savedAlbums.unshift({
      id,
      browseId: id,
      title: fixTurkishMixedCase(album.title || album.name || t('album.badge')),
      artist: album.artist || '',
      year: album.year ? String(album.year) : '',
      type: album.type || t('album.badge'),
      cover: safeUrl(album.cover || album.thumbnail || album.image, './kurfamuzik_logo.png'),
      savedAt: Date.now()
    });
    saved = true;
    showToast('Albüm kütüphaneye kaydedildi');
  }
  safeSetStorage('kurfa_saved_albums', JSON.stringify(state.savedAlbums));
  updateKutuphaneBadges();
  renderSavedAlbumsGrid();

  const saveIcon = document.getElementById('album-detail-save-icon');
  if (saveIcon) {
    saveIcon.textContent = saved ? 'bookmark' : 'bookmark_border';
    saveIcon.classList.toggle('filled', saved);
  }
  const saveBtnEl = document.getElementById('album-detail-save-btn');
  if (saveBtnEl) {
    saveBtnEl.classList.toggle('is-saved', saved);
  }
  return saved;
}

function renderSavedAlbumsGrid() {
  const grid = document.getElementById('saved-albums-grid');
  if (!grid) return;
  grid.innerHTML = '';
  grid.classList.toggle('kurfa-lib-list-mode', state.libraryViewMode === 'list');
  const list = Array.isArray(state.savedAlbums) ? state.savedAlbums : [];
  if (list.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full px-4 py-5 rounded-2xl bg-surface-container-lowest border border-surface-container flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-[20px]">album</span>
        </div>
        <div class="min-w-0 flex-1">
          <h3 class="text-xs sm:text-sm font-bold text-on-surface truncate">Kayıtlı albüm yok</h3>
          <p class="text-[11px] text-on-surface-variant truncate">Albüm detayındaki yer imi simgesiyle albümleri kaydedebilirsiniz.</p>
        </div>
      </div>
    `;
    return;
  }
  list.forEach((album) => {
    grid.appendChild(createAlbumCard(album));
  });
}


// =============================================================================
// 6. YOUTUBE PLAYER & AUDIO ENGINE
// =============================================================================

let currentPlaybackToken = 0;
let __lastNativePlaybackSync = null;

function syncNativeAppPlaybackState(playing, force = false) {
  const next = Boolean(playing);
  if (!force && __lastNativePlaybackSync === next) return;
  __lastNativePlaybackSync = next;
  try {
    if (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.setNativePlaybackState === 'function') {
      window.KurfaAndroidBridge.setNativePlaybackState(next);
    }
  } catch (e) {}
  try {
    if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
      callExtensionBridge('SET_PLAYBACK_STATE', { isPlaying: next }, 1500).catch(() => {});
    }
  } catch (e) {}
}

function stopAllPlayback(skipYtStop = false, preserveNativeLock = false, skipExoStop = false, skipVideoStop = false) {
  currentPlaybackToken++;
  clearTimeout(state._guardianResumeTimer);
  clearTimeout(state._errorSkipTimer);
  clearTimeout(state._stallWatchdogTimer);
  clearTimeout(state._prefetchTimer);
  state._isAdMuted = false;
  state._adSeekAttempts = 0;
  const wasNativeExo = state._activeMediaEngine === 'native-exo';
  state._activeMediaEngine = 'none';
  state._activeTrackConfirmedPlaying = false;
  state._nativeExoCurrentTime = 0;
  state._nativeExoDuration = 0;

  if (!skipExoStop && wasNativeExo) {
    const exo = getAndroidExoBridge();
    if (exo && typeof exo.stopNativeExo === 'function') {
      try { exo.stopNativeExo(); } catch (_) {}
    }
  }

  // 1. Immediately pause and clear HTML5 audio element without spurious error events
  if (DOM.audioEngine) {
    try {
      if (state._seekOnceHandler) {
        DOM.audioEngine.removeEventListener('loadedmetadata', state._seekOnceHandler);
        state._seekOnceHandler = null;
      }
      if (DOM.audioEngine.getAttribute('src')) {
        DOM.audioEngine.pause();
        DOM.audioEngine.currentTime = 0;
        DOM.audioEngine.removeAttribute('src');
      } else {
        DOM.audioEngine.pause();
        try { DOM.audioEngine.currentTime = 0; } catch(_) {}
      }
    } catch(e) {}
  }

  // 1b. Pause & clear Native HTML5 Video engine unless preserved
  if (!skipVideoStop && DOM.videoEngine) {
    try {
      if (state._videoSeekOnceHandler) {
        DOM.videoEngine.removeEventListener('loadedmetadata', state._videoSeekOnceHandler);
        state._videoSeekOnceHandler = null;
      }
      if (DOM.videoEngine.getAttribute('src')) {
        DOM.videoEngine.pause();
        DOM.videoEngine.currentTime = 0;
        DOM.videoEngine.removeAttribute('src');
      } else {
        DOM.videoEngine.pause();
      }
      DOM.videoEngine.classList.add('hidden');
    } catch(e) {}
  }
  state.currentPlayheadTime = 0;

  // 2. Stop & reset YouTube player unless caller will immediately invoke loadVideoById
  if (!skipYtStop && state.ytPlayer) {
    try {
      if (typeof state.ytPlayer.seekTo === 'function') {
        state.ytPlayer.seekTo(0, true);
      }
      if (typeof state.ytPlayer.stopVideo === 'function') {
        state.ytPlayer.stopVideo();
      }
    } catch(e) {}
  }

  if (!preserveNativeLock) {
    syncNativeAppPlaybackState(false);
  }
}

function ensureYouTubeIframeApiLoaded() {
  if (typeof YT !== 'undefined' && YT && typeof YT.Player === 'function') return true;
  if (window.__kurfaYtApiRequested) return false;
  window.__kurfaYtApiRequested = true;
  try {
    const s = document.createElement('script');
    s.src = 'https://www.youtube.com/iframe_api';
    s.async = true;
    s.setAttribute('fetchpriority', 'low');
    document.head.appendChild(s);
  } catch (_) {}
  return false;
}

function initYouTubeEngine() {
  if (state.ytPlayer || state._ytInitializing) return;
  const targetEl = document.getElementById('yt-player');
  if (!targetEl) return;
  if (!ensureYouTubeIframeApiLoaded()) {
    return;
  }
  if (typeof YT === 'undefined' || !YT || typeof YT.Player !== 'function') {
    return;
  }
  state._ytInitializing = true;
  try {
    const initialVid = safeYtId(state.currentTrack?.ytId) || safeYtId(state.currentTrack?.id) || '';
    const playerVars = {
      autoplay: 0,
      controls: 1,
      disablekb: 0,
      enablejsapi: 1,
      fs: 1,
      modestbranding: 1,
      playsinline: 1,
      rel: 0,
      iv_load_policy: 3,
      widget_referrer: window.location.href
    };
    if (window.location.origin && window.location.origin !== 'null') {
      playerVars.origin = window.location.origin;
    }

    state.ytPlayer = new YT.Player('yt-player', {
      height: '100%',
      width: '100%',
      videoId: initialVid,
      playerVars,
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
        onError: onPlayerError
      }
    });
  } catch(e) {
    state._ytInitializing = false;
    console.warn("initYouTubeEngine error:", e);
  }
}

window.onYouTubeIframeAPIReady = function() {
  state._ytInitializing = false;
  initYouTubeEngine();
};

function onPlayerReady(event) {
  state.ytReady = true;
  state._ytInitializing = false;
  setPlayerVolume(state.volume);
  console.log("YouTube Player Engine Ready");
  if (state.pendingTrackToPlay && state.pendingTrackToPlay.id) {
    const track = state.pendingTrackToPlay;
    state.pendingTrackToPlay = null;
    playTrackById(track.id, track);
  }
}


// =============================================================================
// 15. AD SENTINEL ENGINE (Zero-Ad Audio & Video Playback Guardian)
// =============================================================================

let lastAdCheckTime = 0;

function checkAndHandleAdPlayback() {
  if (!state.ytPlayer || !state.isPlaying || !state.ytReady) return;
  if (!state.currentTrack) return;
  if (state._activeMediaEngine !== 'youtube') return;
  if (DOM.audioEngine && DOM.audioEngine.getAttribute('src') && state.deckVisualMode !== 'video') return;

  try {
    const p = state.ytPlayer;
    const inTransitionGrace = (Date.now() - (state._trackSwitchStartedAt || 0)) < 2500;
    const adSt = typeof p.getAdState === 'function' ? p.getAdState() : 0;
    const isOfficialAd = (adSt === 1 || adSt === true);

    if (inTransitionGrace && !isOfficialAd) {
      return;
    }

    const isAd = isOfficialAd;
    let adDuration = 0;
    if (isAd) {
      const curDur = (typeof p.getDuration === 'function') ? (p.getDuration() || 0) : 0;
      if (curDur > 0 && curDur <= 60) {
        adDuration = curDur;
      }
    }

    if (isAd) {
      // Commercial Ad Detected: Silence completely so user never hears ads
      if (!state._isAdMuted) {
        state._isAdMuted = true;
        state._adSeekAttempts = 0;
        if (typeof p.mute === 'function') {
          p.mute();
        }
        showToast("Reklam sessize alındı ve atlanıyor...");
      }

      if (typeof p.setPlaybackRate === 'function') {
        try { p.setPlaybackRate(2); } catch(e) {}
      }

      // Fast-forward ad if seekable, capped to 2 retries per ad
      if (adDuration > 0 && (state._adSeekAttempts || 0) < 2 && typeof p.seekTo === 'function') {
        try {
          const curTime = typeof p.getCurrentTime === 'function' ? (p.getCurrentTime() || 0) : 0;
          if (curTime < adDuration - 0.5) {
            state._adSeekAttempts = (state._adSeekAttempts || 0) + 1;
            p.seekTo(adDuration, true);
          }
        } catch(e) {}
      }
    } else if (state._isAdMuted) {
      // Ad Ended: Restore user's sound & normal speed respecting mute preference
      state._isAdMuted = false;
      state._adSeekAttempts = 0;
      if (typeof p.setPlaybackRate === 'function') {
        try { p.setPlaybackRate(1); } catch(e) {}
      }
      if (!state.isMuted && state.volume > 0 && typeof p.unMute === 'function') {
        try { p.unMute(); } catch(e) {}
      }
      setPlayerVolume(state.volume);
    }
  } catch(e) {}
}
window.checkAndHandleAdPlayback = checkAndHandleAdPlayback;

function onPlayerStateChange(event) {
  if (event.data === YT.PlayerState.PLAYING) {
    clearTimeout(state._stallWatchdogTimer);
    clearTimeout(state._guardianResumeTimer);
    state._guardianAttempts = 0;
    state._consecutiveErrorSkips = 0;
    state._playerInError = false;

    const currentYtId = safeYtId(state.currentTrack?.ytId || state.currentTrack?.id);
    const loadedYtId = (state.ytPlayer && typeof state.ytPlayer.getVideoData === 'function')
      ? safeYtId(state.ytPlayer.getVideoData()?.video_id)
      : null;
    if (loadedYtId && (!currentYtId || loadedYtId !== currentYtId)) {
      try {
        if (typeof state.ytPlayer.pauseVideo === 'function') state.ytPlayer.pauseVideo();
      } catch(e) {}
      return;
    }

    // Strict single-engine lock: if HTML5 audio engine owns playback (loaded or actively playing in non-video mode),
    // silence YouTube immediately and NEVER kill DOM.audioEngine!
    if (state.deckVisualMode !== 'video' && (state._activeMediaEngine === 'audio' || (DOM.audioEngine && DOM.audioEngine.getAttribute('src')))) {
      try {
        if (state.ytPlayer && typeof state.ytPlayer.pauseVideo === 'function') {
          state.ytPlayer.pauseVideo();
        }
      } catch(e) {}
      return;
    }

    // Otherwise, YouTube is the active playback source; silence HTML5 audio & native video safely
    if (DOM.videoEngine && DOM.videoEngine.getAttribute('src')) {
      try {
        DOM.videoEngine.pause();
        DOM.videoEngine.removeAttribute('src');
        DOM.videoEngine.classList.add('hidden');
      } catch(e) {}
    }
    if (DOM.audioEngine && DOM.audioEngine.getAttribute('src')) {
      try {
        DOM.audioEngine.pause();
        DOM.audioEngine.removeAttribute('src');
      } catch(e) {}
    }
    state._activeMediaEngine = 'youtube';
    state._activeTrackConfirmedPlaying = true;
    state.isPlaying = true;
    state.userPaused = false;
    updatePlayPauseUI(true);
    syncNativeAppPlaybackState(true);
    startSeekbarTicker();
    checkAndHandleAdPlayback();
  } else if (event.data === 3) {
    if (state._activeMediaEngine === 'youtube') {
      checkAndHandleAdPlayback();
    }
  } else if (event.data === YT.PlayerState.PAUSED) {
    if (state._switchingDeckMode) return;

    if (state.deckVisualMode !== 'video' && (state._activeMediaEngine === 'audio' || (DOM.audioEngine && DOM.audioEngine.getAttribute('src') && !DOM.audioEngine.paused))) {
      return;
    }

    const syncAndroidPaused = () => {
      syncNativeAppPlaybackState(false);
    };

    if (state._playerInError || state._lastErrorVideoId) {
      state.isPlaying = false;
      updatePlayPauseUI(false);
      syncAndroidPaused();
      return;
    }

    // Kurfa Player Guardian: auto-recover involuntary pause up to 2 attempts per track
    if (!state.userPaused && state.currentTrack && (!DOM.audioEngine || DOM.audioEngine.paused) && (state._guardianAttempts || 0) < 2) {
      const guardToken = currentPlaybackToken;
      state._guardianAttempts = (state._guardianAttempts || 0) + 1;
      clearTimeout(state._guardianResumeTimer);
      state._guardianResumeTimer = setTimeout(() => {
        if (guardToken !== currentPlaybackToken || state.userPaused || state._playerInError || state._switchingDeckMode) return;
        if (state.ytPlayer && typeof state.ytPlayer.playVideo === 'function') {
          try {
            state.ytPlayer.playVideo();
          } catch(e) {}
          clearTimeout(state._guardianResumeTimer);
          state._guardianResumeTimer = setTimeout(() => {
            if (guardToken !== currentPlaybackToken || state.userPaused || state._switchingDeckMode) return;
            try {
              const ps = typeof state.ytPlayer.getPlayerState === 'function' ? state.ytPlayer.getPlayerState() : -1;
              if (ps !== 1 && ps !== 3) {
                state.isPlaying = false;
                updatePlayPauseUI(false);
                syncAndroidPaused();
              }
            } catch(e) {}
          }, 500);
        }
      }, 150);
      return;
    }
    state.isPlaying = false;
    updatePlayPauseUI(false);
    syncAndroidPaused();
  } else if (event.data === YT.PlayerState.ENDED) {
    clearTimeout(state._stallWatchdogTimer);
    handleTrackEnd();
  }
}

function onPlayerError(err) {
  clearTimeout(state._guardianResumeTimer);
  clearTimeout(state._stallWatchdogTimer);
  clearTimeout(state._errorSkipTimer);

  const isLocalTrack = Boolean(state.currentTrack && (
    state.currentTrack.isLocal ||
    String(state.currentTrack.id).startsWith('local_') ||
    state.currentTrack.source === 'local'
  ));

  const playId = safeYtId(state.currentTrack?.ytId) || safeYtId(state.currentTrack?.id);

  // Local device tracks must NEVER be interrupted or skipped by YouTube IFrame errors!
  if (isLocalTrack || !playId) {
    state._playerInError = false;
    return;
  }

  state._playerInError = true;

  if (playId && state._lastErrorVideoId === playId) {
    return;
  }
  state._lastErrorVideoId = playId;
  console.warn("YouTube IFrame playback error:", err);

  if (state.ytPlayer && typeof state.ytPlayer.stopVideo === 'function') {
    try { state.ytPlayer.stopVideo(); } catch(e) {}
  }

  // Errors 101/150/100/2 mean embedding is forbidden by owner or unavailable
  if (err && (err.data === 150 || err.data === 101 || err.data === 100 || err.data === 2)) {
    const errToken = currentPlaybackToken;
    const tryAltYtOrSkip = () => {
      if (errToken !== currentPlaybackToken || state.userPaused) return;
      if (playId && (err.data === 150 || err.data === 101 || err.data === 100 || err.data === 2)) {
        failedVideoIds.add(playId);
      }
      const nextAltId = getNextAltYtId(state.currentTrack, playId);
      if (nextAltId) {
        state._playerInError = false;
        state._lastErrorVideoId = null;
        state._attemptedFallbackForVideo = null;
        const altTrack = {
          ...state.currentTrack,
          id: nextAltId,
          ytId: nextAltId
        };
        const qMatch = (state.queue || []).find((t) => t && (t.id === playId || t.ytId === playId));
        if (qMatch) {
          qMatch.id = nextAltId;
          qMatch.ytId = nextAltId;
          qMatch._altYtIds = altTrack._altYtIds;
          saveQueueState();
        }
        showToast(t('toast.alt_source_trying'));
        playTrackById(nextAltId, altTrack, 0, undefined, undefined, { isAutoErrorSkip: true, bypassAdWarning: true });
        return;
      }
      state._consecutiveErrorSkips = (state._consecutiveErrorSkips || 0) + 1;
      if (state._consecutiveErrorSkips >= 5) {
        state.isPlaying = false;
        updatePlayPauseUI(false);
        showToast(t('toast.too_many_errors'));
        return;
      }
      showToast(t('toast.copyright_skip'));
      state._errorSkipTimer = setTimeout(() => {
        if (errToken !== currentPlaybackToken || state.userPaused) return;
        playNextTrack({ isAutoErrorSkip: true });
      }, 700);
    };

    // Try direct audio / Audius stream fallback first before declaring copyright/embed skip
    if (playId && DOM.audioEngine && state.deckVisualMode !== 'video' && state._attemptedFallbackForVideo !== playId && !state.userPaused) {
      state._attemptedFallbackForVideo = playId;
      state._playerInError = false;
      state._lastErrorVideoId = null;
      (async () => {
        try {
          if (typeof hasAdFreeLocalEngine === 'function' && hasAdFreeLocalEngine()) {
            const directRes = await kurfaResolveDirectAudio(playId);
            if (errToken !== currentPlaybackToken || state.userPaused) return;
            if (directRes && directRes.success && directRes.streamUrl) {
              loadDirectAudioStream(directRes.streamUrl, 0, errToken, null);
              return;
            }
          }
        } catch(_) {}
        try {
          if (state.currentTrack && typeof kurfaTryQuickAudiusMatch === 'function') {
            const aud = await kurfaTryQuickAudiusMatch(state.currentTrack, 1800);
            if (errToken !== currentPlaybackToken || state.userPaused) return;
            if (aud && aud.success && aud.streamUrl) {
              loadDirectAudioStream(aud.streamUrl, 0, errToken, null);
              return;
            }
          }
        } catch(_) {}
        tryAltYtOrSkip();
      })();
      return;
    }

    tryAltYtOrSkip();
  } else {
    state.isPlaying = false;
    updatePlayPauseUI(false);
  }
}

function getCurrentPlaybackTime() {
  if (!state._activeTrackConfirmedPlaying && (Date.now() - (state._trackSwitchStartedAt || 0)) < 5000) {
    return Math.max(0, state.currentPlayheadTime || 0);
  }
  if (state._activeMediaEngine === 'none') {
    return Math.max(0, state.currentPlayheadTime || 0);
  }
  if (state._activeMediaEngine === 'native-exo') {
    return Math.max(0, state._nativeExoCurrentTime || state.currentPlayheadTime || 0);
  }
  if (state._activeMediaEngine === 'native-video') {
    if (DOM.videoEngine && DOM.videoEngine.getAttribute('src') && !isNaN(DOM.videoEngine.currentTime)) {
      return Math.max(0, DOM.videoEngine.currentTime || 0);
    }
    return Math.max(0, state.currentPlayheadTime || 0);
  }
  const isLocal = Boolean(state.currentTrack && (
    state.currentTrack.isLocal ||
    String(state.currentTrack.id).startsWith('local_') ||
    state.currentTrack.source === 'local'
  ));
  if (isLocal) {
    if (state._activeMediaEngine === 'audio' && DOM.audioEngine && DOM.audioEngine.getAttribute('src') && !isNaN(DOM.audioEngine.currentTime)) {
      return Math.max(0, DOM.audioEngine.currentTime || 0);
    }
    return Math.max(0, state.currentPlayheadTime || 0);
  }
  if (state._activeMediaEngine === 'audio') {
    if (DOM.audioEngine && DOM.audioEngine.getAttribute('src') && !isNaN(DOM.audioEngine.currentTime)) {
      return Math.max(0, DOM.audioEngine.currentTime || 0);
    }
    return Math.max(0, state.currentPlayheadTime || 0);
  }
  if ((state._activeMediaEngine === 'youtube' || state.deckVisualMode === 'video') && state.ytPlayer && typeof state.ytPlayer.getCurrentTime === 'function') {
    try {
      const currentYtId = safeYtId(state.currentTrack?.ytId || state.currentTrack?.id);
      const loadedYtId = typeof state.ytPlayer.getVideoData === 'function'
        ? safeYtId(state.ytPlayer.getVideoData()?.video_id)
        : null;
      if (currentYtId && loadedYtId === currentYtId) {
        const pState = typeof state.ytPlayer.getPlayerState === 'function' ? state.ytPlayer.getPlayerState() : 1;
        if (pState === 1 || pState === 2 || state._activeTrackConfirmedPlaying) {
          return Math.max(0, state.ytPlayer.getCurrentTime() || 0);
        }
      }
    } catch(e) {}
  }
  return Math.max(0, state.currentPlayheadTime || 0);
}
window.getCurrentPlaybackTime = getCurrentPlaybackTime;

function seekPlaybackToSeconds(targetSec) {
  if (typeof targetSec !== 'number' || isNaN(targetSec) || targetSec < 0) return;
  state.currentPlayheadTime = targetSec;
  if (typeof LyricsClock !== 'undefined' && typeof LyricsClock.reset === 'function') {
    LyricsClock.reset(targetSec);
  }

  // 0. If Android Native Media3 ExoPlayer is active, seek it directly
  if (state._activeMediaEngine === 'native-exo') {
    state._nativeExoCurrentTime = targetSec;
    const exo = getAndroidExoBridge();
    if (exo && typeof exo.seekNativeExo === 'function') {
      try { exo.seekNativeExo(targetSec); } catch (e) {}
    }
  }

  // 1. If HTML5 audio engine is active or has a loaded source, seek it
  if (DOM.audioEngine && DOM.audioEngine.src) {
    try { DOM.audioEngine.currentTime = targetSec; } catch(e) {}
  }

  // 1b. If Native Video engine is active or has a loaded source, seek it
  if (DOM.videoEngine && DOM.videoEngine.getAttribute('src')) {
    try { DOM.videoEngine.currentTime = targetSec; } catch(e) {}
  }

  // 2. If YouTube player is active or ready, seek it
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.seekTo === 'function') {
    try { state.ytPlayer.seekTo(targetSec, true); } catch(e) {}
  }

  // 3. Immediately update UI and lyrics for silky responsiveness
  if (typeof getActiveMediaDuration === 'function') {
    const dur = getActiveMediaDuration();
    if (dur > 0 && typeof updateSeekbarUI === 'function') {
      updateSeekbarUI(targetSec, dur);
    }
    if (window.__kurfaDesktopMiniPlayerOpen && typeof syncDesktopMiniPlayerState === 'function') {
      syncDesktopMiniPlayerState(targetSec, dur || 0);
    }
  }
  if (typeof syncLyricsWithTime === 'function') {
    syncLyricsWithTime(targetSec);
  }
}
window.seekPlaybackToSeconds = seekPlaybackToSeconds;

function pickBestYouTubeMatch(track, candidates) {
  if (!Array.isArray(candidates) || candidates.length === 0) return null;
  const targetTitle = (track?.title || '').toLowerCase().trim();
  const targetArtist = (track?.artist || '').toLowerCase().trim();

  let targetDurSec = 0;
  if (typeof track?.duration === 'number') {
    targetDurSec = track.duration;
  } else if (typeof track?.duration === 'string') {
    const parts = track.duration.split(':').map(p => parseInt(p, 10));
    if (parts.length === 2) targetDurSec = parts[0] * 60 + parts[1];
    else if (parts.length === 3) targetDurSec = parts[0] * 3600 + parts[1] * 60 + parts[2];
  }

  const badWords = [
    'karışık', 'tüm şarkılar', 'full albüm', 'full album', 'mix', 'megamix',
    '1 saat', '1 hour', '10 saat', '10 hour', 'reaction', 'tepki',
    'karaoke', 'enstrümantal', 'instrumental', 'röportaj', 'interview', 'bloopers'
  ];

  let best = null;
  let bestScore = -999;

  for (const c of candidates) {
    const cid = c ? safeYtId(c.id) : null;
    if (!cid) continue;
    if (failedVideoIds.has(cid)) continue;

    const cTitle = (c.title || '').toLowerCase();
    const cArtist = (c.artist || '').toLowerCase();

    let cDurSec = 0;
    if (c.duration) {
      const parts = String(c.duration).split(':').map(p => parseInt(p, 10));
      if (parts.length === 2) cDurSec = parts[0] * 60 + parts[1];
      else if (parts.length === 3) cDurSec = parts[0] * 3600 + parts[1] * 60 + parts[2];
    }

    // 1. Extreme duration mismatch or compilation (> 10 mins or > 2.5x length)
    if (cDurSec > 600 || (targetDurSec > 60 && cDurSec > targetDurSec * 2.5)) continue;
    // 2. Short teaser (< 40s)
    if (cDurSec > 0 && cDurSec < 40 && targetDurSec > 60) continue;
    // 3. Bad words in candidate title (compilations, mixes)
    if (badWords.some(w => cTitle.includes(w) && !targetTitle.includes(w))) continue;

    let score = 0;
    const cleanTargetTitle = targetTitle.replace(/[^\w\sğüşıöç]/g, '').trim();
    const cleanCandTitle = cTitle.replace(/[^\w\sğüşıöç]/g, '').trim();

    if (cleanCandTitle.includes(cleanTargetTitle)) {
      score += 10;
    } else {
      const titleWords = cleanTargetTitle.split(/\s+/).filter(w => w.length > 2);
      let matchedWords = 0;
      for (const w of titleWords) {
        if (cleanCandTitle.includes(w)) matchedWords++;
      }
      if (titleWords.length > 0 && matchedWords > 0) {
        score += (matchedWords / titleWords.length) * 8;
      }
    }

    const artistWords = targetArtist.replace(/[^\w\sğüşıöç]/g, '').split(/\s+/).filter(w => w.length > 2);
    let matchedArtists = 0;
    for (const a of artistWords) {
      if (cleanCandTitle.includes(a) || cArtist.includes(a)) matchedArtists++;
    }
    if (artistWords.length > 0 && matchedArtists > 0) {
      score += (matchedArtists / artistWords.length) * 6;
    }

    if (targetDurSec > 0 && cDurSec > 0) {
      const diff = Math.abs(targetDurSec - cDurSec);
      if (diff <= 10) score += 6;
      else if (diff <= 25) score += 4;
      else if (diff <= 45) score += 2;
      else if (diff > 120) score -= 4;
    }

    if (/official\s*(audio|video|visualizer|klip)/i.test(c.title)) score += 3;
    if (/- topic$/i.test(c.artist)) score += 4;

    if (score > bestScore) {
      bestScore = score;
      best = c;
    }
  }

  return best || candidates.find(c => c && safeYtId(c.id) && !failedVideoIds.has(safeYtId(c.id))) || candidates[0];
}

function updateSpotifyTrackInStorage(placeholderId, ytId, thumbnail) {
  if (!state.spotifyPlaylists || !Array.isArray(state.spotifyPlaylists)) return;
  const cleanThumb = thumbnail ? safeUrl(thumbnail, './kurfamuzik_logo.png') : '';
  for (const pl of state.spotifyPlaylists) {
    if (Array.isArray(pl.tracks)) {
      const trk = pl.tracks.find(t => t.id === placeholderId);
      if (trk) {
        trk.ytId = ytId;
        // Never overwrite official high-res studio cover with blurry video still
        if (cleanThumb && (!trk.thumbnail || trk.thumbnail.includes('kurfamuzik_logo') || trk.thumbnail === pl.cover)) {
          trk.thumbnail = cleanThumb;
          const spImgs = document.querySelectorAll('img[data-sp-id]');
          for (const el of spImgs) {
            if (el.getAttribute('data-sp-id') === String(placeholderId)) {
              el.src = cleanThumb;
              break;
            }
          }
        }
        saveSpotifyPlaylists();
        break;
      }
    }
  }
}

function getUpcomingQueueTrackForPrefetch() {
  if (Array.isArray(state.userQueue) && state.userQueue.length > 0) {
    return state.userQueue[0] || null;
  }
  if (Array.isArray(state.queue) && state.queueIndex >= 0 && state.queueIndex < state.queue.length - 1) {
    return state.queue[state.queueIndex + 1] || null;
  }
  return null;
}

function getWindowsDesktopLocalOrigin() {
  if (state._desktopLocalAudioOrigin) return state._desktopLocalAudioOrigin;
  try {
    const curSrc = DOM.audioEngine && DOM.audioEngine.getAttribute('src');
    if (curSrc && curSrc.includes('/__kurfa_native_audio__/')) {
      const orig = new URL(curSrc).origin;
      state._desktopLocalAudioOrigin = orig;
      state._nativeLocalProxyOrigin = orig;
      return orig;
    }
  } catch (_) {}
  try {
    if (
      typeof window !== 'undefined' &&
      (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') &&
      typeof getBrowserExtensionMode === 'function' &&
      getBrowserExtensionMode().startsWith('desktop')
    ) {
      return window.location.origin;
    }
  } catch (_) {}
  return '';
}

function getNativeLocalProxyOrigin() {
  if (state._nativeLocalProxyOrigin) return state._nativeLocalProxyOrigin;
  const winOrig = getWindowsDesktopLocalOrigin();
  if (winOrig) return winOrig;
  try {
    const curAudioSrc = DOM.audioEngine && DOM.audioEngine.getAttribute('src');
    if (curAudioSrc && curAudioSrc.includes('/__kurfa_native_audio__/')) {
      const orig = new URL(curAudioSrc).origin;
      state._nativeLocalProxyOrigin = orig;
      return orig;
    }
    const curVideoSrc = DOM.videoEngine && DOM.videoEngine.getAttribute('src');
    if (curVideoSrc && curVideoSrc.includes('/__kurfa_native_video__/')) {
      const orig = new URL(curVideoSrc).origin;
      state._nativeLocalProxyOrigin = orig;
      return orig;
    }
  } catch (_) {}
  try {
    const androidOrig = (window.KurfaAndroid && typeof window.KurfaAndroid.getLocalProxyOrigin === 'function' && window.KurfaAndroid.getLocalProxyOrigin()) ||
      (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.getLocalProxyOrigin === 'function' && window.KurfaAndroidBridge.getLocalProxyOrigin());
    if (androidOrig && String(androidOrig).startsWith('http')) {
      state._nativeLocalProxyOrigin = String(androidOrig).replace(/\/+$/, '');
      return state._nativeLocalProxyOrigin;
    }
  } catch (_) {}
  return '';
}

function isNativeVideoProxyAvailable() {
  if (getNativeLocalProxyOrigin()) return true;
  if (typeof isAndroidNativeEngine === 'function' && isAndroidNativeEngine()) return true;
  if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) return true;
  return false;
}

async function resolveNativeLocalProxyOrigin(videoId) {
  const cached = getNativeLocalProxyOrigin();
  if (cached) return cached;
  const cleanVid = safeYtId(videoId);
  if (!cleanVid) return '';
  try {
    const res = await kurfaResolveDirectAudio(cleanVid);
    if (res && res.success && res.streamUrl) {
      const orig = new URL(res.streamUrl).origin;
      state._nativeLocalProxyOrigin = orig;
      if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
        state._desktopLocalAudioOrigin = orig;
      }
      return orig;
    }
  } catch (_) {}
  return getNativeLocalProxyOrigin();
}

function getActiveDspMediaElement() {
  if (state._activeMediaEngine === 'native-video' && DOM.videoEngine && DOM.videoEngine.getAttribute('src')) {
    return DOM.videoEngine;
  }
  if (DOM.audioEngine && DOM.audioEngine.getAttribute('src')) {
    return DOM.audioEngine;
  }
  if (state.deckVisualMode === 'video' && DOM.videoEngine && DOM.videoEngine.getAttribute('src')) {
    return DOM.videoEngine;
  }
  return DOM.audioEngine || DOM.videoEngine || null;
}

function applyMediaPlaybackRate(mediaEl, speedOverride = null) {
  if (!mediaEl) return;
  if (typeof KurfaDSP !== 'undefined' && KurfaDSP._silenceBoosting) return;
  const spd = Math.max(0.5, Math.min(2.0, Number(speedOverride ?? state.proSettings?.playbackSpeed) || 1.0));
  try {
    mediaEl.defaultPlaybackRate = spd;
    mediaEl.playbackRate = spd;
    if ('preservesPitch' in mediaEl) mediaEl.preservesPitch = true;
    if ('webkitPreservesPitch' in mediaEl) mediaEl.webkitPreservesPitch = true;
  } catch (_) {}
}

function syncNativeFxParams() {
  const spd = Math.max(0.5, Math.min(2.0, Number(state.proSettings?.playbackSpeed) || 1.0));
  const normOn = Boolean(state.proSettings?.normalization);
  const silOn = Boolean(state.proSettings?.skipSilence);
  const bridges = [];
  if (typeof window !== 'undefined') {
    if (window.KurfaAndroid) bridges.push(window.KurfaAndroid);
    if (window.KurfaAndroidBridge && window.KurfaAndroidBridge !== window.KurfaAndroid) bridges.push(window.KurfaAndroidBridge);
  }
  for (const br of bridges) {
    try {
      if (typeof br.setPlaybackParamsNative === 'function') br.setPlaybackParamsNative(spd, 1.0);
    } catch (_) {}
    try {
      if (typeof br.setNormalizationNative === 'function') br.setNormalizationNative(normOn);
    } catch (_) {}
    try {
      if (typeof br.setSkipSilenceNative === 'function') br.setSkipSilenceNative(silOn);
    } catch (_) {}
  }
}

function prefetchNextTrackStream(nextTrackArg = null) {
  const next = nextTrackArg || getUpcomingQueueTrackForPrefetch();
  if (!next) return;
  if (next.isLocal || String(next.id || '').startsWith('local_') || String(next.id || '').startsWith('audius_')) return;

  const nextId = safeYtId(next.ytId) || safeYtId(next.id);
  if (!nextId || failedVideoIds.has(nextId)) return;

  const prefetchKey = `${currentPlaybackToken}:${nextId}`;
  if (state._prefetchedNextStreamKey === prefetchKey) return;
  state._prefetchedNextStreamKey = prefetchKey;

  try {
    const androidPrefetcher =
      (typeof window !== 'undefined' && window.KurfaAndroid && typeof window.KurfaAndroid.prefetchNative === 'function')
        ? window.KurfaAndroid
        : ((typeof window !== 'undefined' && window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.prefetchNative === 'function')
            ? window.KurfaAndroidBridge
            : null);
    if (androidPrefetcher) {
      androidPrefetcher.prefetchNative(nextId);
      return;
    }
  } catch (_) {}

  const localOrigin = getWindowsDesktopLocalOrigin();
  if (localOrigin) {
    try {
      fetch(`${localOrigin}/__kurfa_prefetch__/${encodeURIComponent(nextId)}`, { cache: 'no-store' }).catch(() => {});
      return;
    } catch (_) {}
  }

  if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
    kurfaResolveDirectAudio(nextId).catch(() => {});
  }
}

function scheduleNextTrackPrefetch(token) {
  clearTimeout(state._prefetchTimer);
  state._prefetchTimer = setTimeout(() => {
    state._prefetchTimer = null;
    if (token !== currentPlaybackToken || !state.isPlaying || state.userPaused) return;
    prefetchNextQueueTrack();
  }, 4000);
}

async function prefetchNextQueueTrack() {
  const next = getUpcomingQueueTrackForPrefetch();
  if (!next) return;
  if (next.isLocal || String(next.id || '').startsWith('local_') || String(next.id || '').startsWith('audius_')) return;

  const alreadyYtId = safeYtId(next.ytId) || (safeYtId(next.id) && !String(next.id).startsWith('sp-') ? safeYtId(next.id) : null);
  if (alreadyYtId) {
    prefetchNextTrackStream(next);
    return;
  }

  try {
    const q = `${next.artist || ''} ${next.title || ''} audio`.trim();
    const sData = await kurfaSearchTracks(q, { filterSingles: true });
    if (sData && sData.success && Array.isArray(sData.results) && sData.results.length > 0) {
      const best = pickBestYouTubeMatch(next, sData.results);
      const validId = safeYtId(best?.id);
      if (validId) {
        next.ytId = validId;
        const safeThumb = safeUrl(best.thumbnail, `https://i.ytimg.com/vi/${validId}/hqdefault.jpg`);
        if (!next.thumbnail || next.thumbnail.includes('kurfamuzik_logo')) {
          next.thumbnail = safeThumb;
        }
        updateSpotifyTrackInStorage(next.id, validId, safeThumb);
        prefetchNextTrackStream(next);
      }
    }
  } catch(e) {}
}

async function resolveAndPlaySpotifyTrack(placeholderId, track, options = {}) {
  if (track?.isLocal || String(placeholderId || '').startsWith('local_')) return;
  stopAllPlayback(true, true);
  syncNativeAppPlaybackState(true);
  const resolveToken = currentPlaybackToken;
  const rawTitle = String(track?.title || 'Şarkı').trim();
  const cleanTitle = rawTitle.replace(/\s*[\(\[](official\s*(video|audio|music\s*video|lyric\s*video|visualizer)|lyrics|video\s*klip|klip)[\)\]]/gi, '').trim();
  const title = cleanTitle || rawTitle;

  const rawArtist = String(track?.artist || '').trim();
  const isGenericArtist = !rawArtist || /^(bilinmeyen\s*sanatçı|sanatçı|unknown\s*artist|various\s*artists)$/i.test(rawArtist);
  const artist = isGenericArtist ? '' : rawArtist;

  try {
    // Open-catalog items try Audius direct ad-free stream first
    if (track?.source === 'open-catalog') {
      const audMatch = await kurfaTryQuickAudiusMatch(track, 1400);
      if (resolveToken !== currentPlaybackToken) return;
      if (audMatch && audMatch.success && audMatch.audiusTrack) {
        playTrackById(audMatch.audiusTrack.id, audMatch.audiusTrack, 0, undefined, undefined, options);
        return;
      }
    }

    let best = null;
    let sData = null;

    // Stage 1: Clean search (Title + Artist or Title)
    const q1 = (artist ? `${title} ${artist}` : title).trim();
    sData = await kurfaSearchTracks(q1, { filterSingles: true });
    if (resolveToken !== currentPlaybackToken) return;
    if (sData && sData.success && Array.isArray(sData.results) && sData.results.length > 0) {
      best = pickBestYouTubeMatch(track, sData.results);
    }

    // Stage 2: Fallback to Title only (e.g. folk songs like "Bu Gala Daşlı Gala" or mislabeled artists)
    if ((!best || !safeYtId(best.id)) && artist) {
      const q2 = title.trim();
      sData = await kurfaSearchTracks(q2, { filterSingles: true });
      if (resolveToken !== currentPlaybackToken) return;
      if (sData && sData.success && Array.isArray(sData.results) && sData.results.length > 0) {
        best = pickBestYouTubeMatch(track, sData.results);
      }
    }

    // Stage 3: Relaxed duration & singles filter
    if (!best || !safeYtId(best.id)) {
      const q3 = (artist ? `${title} ${artist}` : title).trim();
      sData = await kurfaSearchTracks(q3, { filterSingles: false });
      if (resolveToken !== currentPlaybackToken) return;
      if (sData && sData.success && Array.isArray(sData.results) && sData.results.length > 0) {
        best = pickBestYouTubeMatch(track, sData.results) || sData.results.find(c => c && safeYtId(c.id)) || sData.results[0];
      }
    }

    const realYtId = safeYtId(best?.id);
    if (realYtId) {
      const realThumb = safeUrl(best.thumbnail, `https://i.ytimg.com/vi/${realYtId}/hqdefault.jpg`);
      const mergedAltIds = collectAltYtIds(track, sData && Array.isArray(sData.results) ? sData.results.slice(0, 4) : [], realYtId);

      if (track) {
        track.id = realYtId;
        track.ytId = realYtId;
        track._altYtIds = mergedAltIds;
        if (!track.thumbnail || track.thumbnail.includes('kurfamuzik_logo')) {
          track.thumbnail = realThumb;
        }
      }

      const qItem = state.queue.find(t => t.id === placeholderId || (track && (t.id === track.id || t.ytId === realYtId)));
      if (qItem) {
        qItem.id = realYtId;
        qItem.ytId = realYtId;
        qItem._altYtIds = mergedAltIds;
        if (!qItem.thumbnail || qItem.thumbnail.includes('kurfamuzik_logo')) {
          qItem.thumbnail = realThumb;
        }
      }
      saveQueueState();

      updateSpotifyTrackInStorage(placeholderId, realYtId, realThumb);

      // Preload next track
      prefetchNextQueueTrack();

      playTrackById(realYtId, track || best, 0, undefined, undefined, options);
    } else {
      showToast(`YouTube üzerinde parça bulunamadı: ${title}`);
      clearTimeout(state._errorSkipTimer);
      state._errorSkipTimer = setTimeout(() => {
        if (resolveToken !== currentPlaybackToken || state.userPaused) return;
        playNextTrack({ isAutoErrorSkip: true });
      }, 800);
    }
  } catch(err) {
    console.warn("Spotify resolver error:", err);
    if (resolveToken === currentPlaybackToken) {
      showToast("Parça bağlantısı kurulamadı");
    }
  }
}

function playTrackById(videoId, arg2, arg3, arg4, arg5, options = {}) {
  if (!videoId) return;
  const rawId = String(videoId).trim();
  const isAutoErrorSkip = Boolean(options && options.isAutoErrorSkip);
  const isAutoAdvance = Boolean(options && options.isAutoAdvance);
  const bypassAdWarning = Boolean(options && options.bypassAdWarning);

  let target = null;
  let startTime = 0;
  if (typeof arg2 === 'object' && arg2 !== null) {
    target = arg2;
    if (typeof arg3 === 'number') startTime = arg3;
  } else if (typeof arg2 === 'number') {
    startTime = arg2;
  } else if (typeof arg2 === 'string') {
    const validId = safeYtId(rawId);
    target = {
      id: rawId,
      title: arg2,
      artist: arg3 || "Bilinmeyen Sanatçı",
      thumbnail: safeUrl(arg4, rawId.startsWith('sp-') ? './kurfamuzik_logo.png' : (validId ? `https://i.ytimg.com/vi/${validId}/hqdefault.jpg` : './kurfamuzik_logo.png')),
      duration: arg5 || "3:30"
    };
  }

  if (!target) {
    target = state.queue.find(t => t && (t.id === rawId || t.ytId === rawId)) ||
             (Array.isArray(state.deviceAudioTracks) ? state.deviceAudioTracks.find(t => t && t.id === rawId) : null) ||
             CURATED_TRACKS.find(t => t.id === rawId) ||
             state.currentSearchResults.find(t => t.id === rawId);
  }

  const isLocalTrack = rawId.startsWith('local_') || Boolean(target && target.isLocal);
  if (isLocalTrack && target) {
    target.isLocal = true;
  }
  const isAudiusTrack = !isLocalTrack && (rawId.startsWith('audius_') || Boolean(target?.audiusStreamUrl));
  const cleanYtId = (isAudiusTrack || isLocalTrack) ? null : safeYtId(rawId);

  // AUTO RESOLVE SPOTIFY & NON-YOUTUBE TRACKS (never for local device tracks or Audius tracks)
  if (!isAudiusTrack && !isLocalTrack && (rawId.startsWith('sp-') || !cleanYtId)) {
    const fallbackYt = safeYtId(target?.ytId);
    if (fallbackYt) {
      playTrackById(fallbackYt, target, startTime, undefined, undefined, options);
      return;
    }
    resolveAndPlaySpotifyTrack(rawId, target, options);
    return;
  }

  const normalizedStart = (typeof startTime === 'number' && !isNaN(startTime) && startTime > 0) ? startTime : 0;
  const preferDirectAudio = isLocalTrack || isAudiusTrack || (
    state.deckVisualMode !== 'video' &&
    hasAdFreeLocalEngine()
  );
  const shouldCheckPrePlayGate = Boolean(
    !isLocalTrack &&
    !isAudiusTrack &&
    !preferDirectAudio &&
    cleanYtId &&
    !hasAdFreePlaybackEnvironment() &&
    state.deckVisualMode !== 'video' &&
    !bypassAdWarning
  );

  state.userPaused = false;
  state._pendingAdWarnPlayback = null;
  clearTimeout(state._guardianResumeTimer);
  clearTimeout(state._errorSkipTimer);
  clearTimeout(state._stallWatchdogTimer);

  // Immediately detach old lyrics & scroll to top BEFORE any pre-fade or async resolution
  if (typeof LyricsClock !== 'undefined' && typeof LyricsClock.stop === 'function') {
    LyricsClock.stop();
  }
  lyricsLoadedPlaybackToken = -1;
  if (typeof resetLyricsScrollPosition === 'function') {
    resetLyricsScrollPosition();
  }

  const isHiddenBg = typeof document !== 'undefined' && Boolean(document.hidden);
  if (
    !isHiddenBg &&
    DOM.audioEngine &&
    !DOM.audioEngine.paused &&
    DOM.audioEngine.getAttribute('src') &&
    state._activeTrackConfirmedPlaying &&
    !(options && options._skipPreFade) &&
    !(state.proSettings && state.proSettings.crossfadeSec > 0 && state._crossfadeFadingOut) &&
    typeof startSmoothFade === 'function'
  ) {
    currentPlaybackToken++;
    const preFadeToken = currentPlaybackToken;
    state._activeTrackConfirmedPlaying = false;
    state.currentPlayheadTime = normalizedStart;
    startSmoothFade(typeof state._smoothFadeGain === 'number' ? state._smoothFadeGain : 1, 0, 140, () => {
      if (preFadeToken !== currentPlaybackToken || state.userPaused) return;
      playTrackById(videoId, arg2, arg3, arg4, arg5, { ...(options || {}), _skipPreFade: true });
    });
    return;
  }

  if (typeof cancelSmoothFade === 'function') cancelSmoothFade();
  state._smoothFadeGain = 1;

  // Stop background timers/HTML5 audio; keep YT active only when YT loads immediately,
  // and keep native background wake/foreground locks active across track transitions.
  const ytCanDirectLoad = Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function');
  stopAllPlayback(ytCanDirectLoad && !preferDirectAudio && !shouldCheckPrePlayGate, true);
  const token = currentPlaybackToken;
  if (!shouldCheckPrePlayGate) {
    syncNativeAppPlaybackState(true);
  }

  state._isAdMuted = false;
  state._adSeekAttempts = 0;
  state._guardianAttempts = 0;
  state._trackSwitchStartedAt = Date.now();
  state._activeMediaEngine = 'none';
  state._activeTrackConfirmedPlaying = false;
  state._nativeExoFallbackActive = Boolean(options && options._skipNativeExo);
  state._prefetchedNextStreamKey = '';
  state._activeTrackId = target?.id || cleanYtId || rawId;
  state._playerInError = false;
  state._lastErrorVideoId = null;
  state._attemptedFallbackForVideo = null;
  if (!isAutoErrorSkip && cleanYtId) {
    state._consecutiveErrorSkips = 0;
    failedVideoIds.delete(cleanYtId);
  }

  state.currentPlayheadTime = normalizedStart;

  if (!target) {
    target = {
      id: cleanYtId || rawId,
      title: isAudiusTrack ? "Audius Parçası" : "YouTube Parçası",
      artist: "Sanatçı",
      duration: "3:30",
      thumbnail: cleanYtId ? `https://i.ytimg.com/vi/${cleanYtId}/hqdefault.jpg` : './kurfamuzik_logo.png'
    };
  }

  if (cleanYtId && target) {
    target._altYtIds = collectAltYtIds(target, [], cleanYtId);
  }

  state.currentTrack = target;
  state.sponsorSegments = [];
  state._skippedSponsorKeys = new Set();
  if (typeof ListeningStats !== 'undefined' && typeof ListeningStats.onTrackStart === 'function') {
    ListeningStats.onTrackStart(target);
  }
  if (cleanYtId && state.proSettings && state.proSettings.sponsorBlock && typeof fetchSponsorBlockSegments === 'function') {
    fetchSponsorBlockSegments(cleanYtId, token);
  }
  if (isAutoAdvance && state.proSettings && state.proSettings.crossfadeSec > 0 && typeof startCrossfadeIn === 'function') {
    startCrossfadeIn(state.proSettings.crossfadeSec);
  } else {
    state._crossfadeGain = 1;
    state._crossfadeFadingOut = false;
  }
  recordRecentlyPlayed(target);
  safeSetStorage('kurfa_last_track', JSON.stringify({
    id: target.id,
    ytId: target.ytId || cleanYtId || null,
    title: target.title,
    artist: target.artist,
    thumbnail: getTrackThumbnail(target),
    duration: target.duration,
    source: target.source || null,
    audiusStreamUrl: target.audiusStreamUrl || null,
    isLocal: Boolean(target.isLocal),
    streamUrl: target.streamUrl || null
  }));

  const targetId = target?.id || cleanYtId;
  const targetYtId = safeYtId(target?.ytId) || cleanYtId;
  const targetTitle = (target?.title || '').trim().toLowerCase();
  const targetArtist = (target?.artist || '').trim().toLowerCase();

  let existingIdx = state.queue.findIndex(t => {
    if (!t) return false;
    if (targetId && (t.id === targetId || t.ytId === targetId)) return true;
    if (cleanYtId && (t.id === cleanYtId || t.ytId === cleanYtId)) return true;
    if (targetYtId && (t.id === targetYtId || t.ytId === targetYtId)) return true;
    return false;
  });
  if (existingIdx === -1 && !isLocalTrack && targetTitle && targetArtist) {
    existingIdx = state.queue.findIndex(t =>
      t && t.title && t.artist &&
      t.title.trim().toLowerCase() === targetTitle &&
      t.artist.trim().toLowerCase() === targetArtist
    );
  }

  if (existingIdx !== -1) {
    state.queueIndex = existingIdx;
    if (target && state.queue[existingIdx]) {
      state.queue[existingIdx] = { ...state.queue[existingIdx], ...target };
    }
  } else {
    if (state.queue.length === 0) {
      state.queue = [target];
      state.queueIndex = 0;
    } else {
      const insertAt = Math.min(state.queue.length, state.queueIndex + 1);
      state.queue.splice(insertAt, 0, target);
      state.queueIndex = insertAt;
    }
  }
  saveQueueState();

  // Ensure HTML5 audio is silent and playhead reset BEFORE lyrics sync so getActiveMediaCurrentTime() never reads stale time from previous track
  if (DOM.audioEngine) {
    try {
      DOM.audioEngine.pause();
      DOM.audioEngine.currentTime = 0;
      if (DOM.audioEngine.getAttribute('src')) {
        DOM.audioEngine.removeAttribute('src');
      }
    } catch(e) {}
  }

  updatePlayerTrackUI(target);
  if (typeof resetLyricsScrollPosition === 'function') resetLyricsScrollPosition();
  updateLyricsDisplay();
  const activeId = target ? target.id : null;
  state._lastRenderedActiveId = activeId;
  if (state.queueDrawerOpen) {
    renderQueueDrawerList();
  } else if (DOM.queueCountBadge) {
    DOM.queueCountBadge.textContent = String((state.userQueue?.length || 0) + (state.queue?.length || 0));
  }
  if (state.currentTab === 'kesfet') {
    state._lastHomeActiveId = activeId;
    renderHomeTracklistTable();
  } else if (state.currentTab === 'calma-listeleri') {
    renderPlaylistTracksTable();
  } else if (state.currentTab === 'kutuphanem') {
    if (state.currentKutuphaneSubTab === 'favoriler') renderFavoritesTable();
    else if (state.currentKutuphaneSubTab === 'indirilenler') renderDownloadsTable();
  }
  if (typeof syncActiveTrackRowInDeviceAudio === 'function' && state.currentTab === 'kutuphanem' && state.currentKutuphaneSubTab === 'cihaz') {
    syncActiveTrackRowInDeviceAudio();
  }
  syncPersistentPlayerPosition();

  // Immediately reset seekbar to avoid showing stale time from previous track
  const estDuration = (typeof parseDurationToSec === 'function' ? parseDurationToSec(target.duration) : 0) || 210;
  if (typeof updateSeekbarUI === 'function') {
    updateSeekbarUI(normalizedStart, estDuration);
  }
  if (typeof startSeekbarTicker === 'function') {
    startSeekbarTicker();
  }

  const isLocalDeviceTrack = isLocalTrack || Boolean(target && target.isLocal);
  if (isLocalDeviceTrack && DOM.audioEngine) {
    syncDeckVisualUIOnly('vinyl');
    syncPersistentPlayerPosition();
    state.isPlaying = true;
    updatePlayPauseUI(true);
    if (state.ytPlayer && typeof state.ytPlayer.pauseVideo === 'function') {
      try {
        state.ytPlayer.pauseVideo();
        if (typeof state.ytPlayer.seekTo === 'function') state.ytPlayer.seekTo(0, true);
      } catch(e) {}
    }
    let localStreamUrl = target.streamUrl || '';
    if (typeof isAndroidNativeEngine === 'function' && isAndroidNativeEngine() && !target.needsIdbBlob) {
      const mId = target.mediaId || ((/^local_(\d+)$/.exec(String(rawId)) || [])[1]) || ((/\/__kurfa_local_audio\/(\d+)/.exec(String(localStreamUrl)) || [])[1]);
      if (mId && (!localStreamUrl || localStreamUrl.includes('/__kurfa_local_audio/'))) {
        localStreamUrl = `${window.location.origin}/__kurfa_local_audio/${mId}`;
        target.streamUrl = localStreamUrl;
      }
    }
    if (localStreamUrl) {
      loadDirectAudioStream(localStreamUrl, normalizedStart, token, null);
    } else if (rawId.startsWith('local_win_') && typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
      callExtensionBridge('GET_LOCAL_AUDIO_TRACKS', {}, 5000).then((res) => {
        if (token !== currentPlaybackToken || state.userPaused) return;
        const list = Array.isArray(res?.tracks) ? res.tracks : [];
        if (list.length > 0) state.deviceAudioTracks = list;
        const found = list.find(t => t && (t.id === target.id || (t.title === target.title && t.artist === target.artist)));
        if (found && found.streamUrl) {
          target.streamUrl = found.streamUrl;
          loadDirectAudioStream(found.streamUrl, normalizedStart, token, null);
        } else {
          showToast('Yerel ses dosyası bulunamadı');
          state.isPlaying = false;
          updatePlayPauseUI(false);
        }
      }).catch(() => {
        state.isPlaying = false;
        updatePlayPauseUI(false);
      });
    } else if (typeof resolveLocalAudioStreamUrl === 'function') {
      resolveLocalAudioStreamUrl(target.id).then((url) => {
        if (token !== currentPlaybackToken || state.userPaused) return;
        if (url) {
          loadDirectAudioStream(url, normalizedStart, token, null);
        } else {
          showToast('Yerel ses dosyası okunamadı');
          state.isPlaying = false;
          updatePlayPauseUI(false);
        }
      });
    }
    return;
  }

  if (isAudiusTrack && DOM.audioEngine) {
    const streamUrl = target.audiusStreamUrl || `https://api.audius.co/v1/tracks/${encodeURIComponent(rawId.replace(/^audius_/, ''))}/stream`;
    loadDirectAudioStream(streamUrl, normalizedStart, token, null);
    showToast(`Reklamsız Açık Akış: ${target.title}`);
    return;
  }

  const nativeExo = (state.deckVisualMode !== 'video' && !state._nativeExoFallbackActive) ? getAndroidExoBridge() : null;
  if (nativeExo && cleanYtId) {
    try {
      if (state.ytPlayer) {
        try {
          if (normalizedStart === 0 && typeof state.ytPlayer.seekTo === 'function') state.ytPlayer.seekTo(0, true);
          if (typeof state.ytPlayer.pauseVideo === 'function') state.ytPlayer.pauseVideo();
        } catch (e) {}
      }
      state._activeMediaEngine = 'native-exo';
      state._nativeExoCurrentTime = normalizedStart;
      state._nativeExoDuration = estDuration;
      state._nativeExoPlayRequestedAt = Date.now();
      state._nativeExoLastBuffering = true;
      state.isPlaying = true;
      updatePlayPauseUI(true);
      syncNativeAppPlaybackState(true);
      if (typeof syncNativeFxParams === 'function') syncNativeFxParams();
      if (typeof nativeExo.setVolumeNativeExo === 'function') {
        try { nativeExo.setVolumeNativeExo(state.isMuted ? 0 : (state.volume ?? 0.8)); } catch (_) {}
      }
      kurfaResetNativeExoWatchdog(normalizedStart);
      nativeExo.playNativeExo(
        cleanYtId,
        String(target.title || 'Kurfamüzik'),
        String(target.artist || 'Sanatçı'),
        getTrackThumbnail(target),
        Number(normalizedStart) || 0
      );
      scheduleNextTrackPrefetch(token);
      return;
    } catch (exoErr) {
      console.warn('Native ExoPlayer invocation failed, falling back:', exoErr);
      state._activeMediaEngine = 'none';
      state._nativeExoFallbackActive = true;
    }
  }

  // Ad-free Direct Native Video Mode on Windows Desktop / Android Proxy
  if (state.deckVisualMode === 'video' && cleanYtId && DOM.videoEngine && typeof isNativeVideoProxyAvailable === 'function' && isNativeVideoProxyAvailable()) {
    state.isPlaying = true;
    updatePlayPauseUI(true);
    if (state.ytPlayer) {
      try {
        if (normalizedStart === 0 && typeof state.ytPlayer.seekTo === 'function') state.ytPlayer.seekTo(0, true);
        if (typeof state.ytPlayer.pauseVideo === 'function') state.ytPlayer.pauseVideo();
      } catch(e) {}
    }
    resolveNativeLocalProxyOrigin(cleanYtId).then((orig) => {
      if (token !== currentPlaybackToken || state.userPaused || state.deckVisualMode !== 'video') return;
      if (orig) {
        const videoStreamUrl = `${orig}/__kurfa_native_video__/${encodeURIComponent(cleanYtId)}`;
        loadDirectVideoStream(videoStreamUrl, normalizedStart, token, cleanYtId);
      } else {
        loadYouTubePlayback(cleanYtId, target, normalizedStart, token, Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function'));
      }
    }).catch(() => {
      if (token !== currentPlaybackToken || state.userPaused) return;
      loadYouTubePlayback(cleanYtId, target, normalizedStart, token, Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function'));
    });
    return;
  }

  if (preferDirectAudio && cleanYtId && DOM.audioEngine) {
    state.isPlaying = true;
    updatePlayPauseUI(true);
    if (state.ytPlayer) {
      try {
        if (normalizedStart === 0 && typeof state.ytPlayer.seekTo === 'function') state.ytPlayer.seekTo(0, true);
        if (typeof state.ytPlayer.pauseVideo === 'function') state.ytPlayer.pauseVideo();
      } catch(e) {}
    }
    const fallbackFromDirectAudio = async () => {
      if (token !== currentPlaybackToken || state.userPaused || state.deckVisualMode === 'video') return;
      const safeStart = (!state._activeTrackConfirmedPlaying || (Date.now() - (state._trackSwitchStartedAt || 0)) < 4000) ? 0 : normalizedStart;
      try {
        const aud = await kurfaTryQuickAudiusMatch(target, 1600);
        if (token !== currentPlaybackToken || state.userPaused || state.deckVisualMode === 'video') return;
        if (aud && aud.success && aud.streamUrl) {
          loadDirectAudioStream(aud.streamUrl, safeStart, token, null);
          return;
        }
      } catch(e) {}
      if (token !== currentPlaybackToken || state.userPaused) return;
      loadYouTubePlayback(cleanYtId, target, safeStart, token, Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function'));
    };
    kurfaResolveDirectAudio(cleanYtId).then((res) => {
      if (token !== currentPlaybackToken || state.userPaused || state.deckVisualMode === 'video') return;
      if (res && res.success && res.streamUrl) {
        loadDirectAudioStream(res.streamUrl, normalizedStart, token, cleanYtId);
      } else {
        fallbackFromDirectAudio();
      }
    }).catch(() => {
      fallbackFromDirectAudio();
    });
    return;
  }

  if (shouldCheckPrePlayGate) {
    const isAutoTransition = isAutoAdvance || isAutoErrorSkip;
    const matchTimeout = isAutoTransition ? 550 : 650;
    const proceedToYouTube = (showPlayToast) => {
      if (token !== currentPlaybackToken || state.userPaused) return;
      loadYouTubePlayback(
        cleanYtId,
        target,
        normalizedStart,
        token,
        Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function')
      );
      if (showPlayToast) {
        showToast(`Çalınıyor: ${target.title} - ${target.artist}`);
      }
    };

    if (!isAutoTransition) {
      state.isPlaying = false;
      updatePlayPauseUI(false);
    }

    Promise.all([
      kurfaTryQuickAudiusMatch(target, matchTimeout),
      kurfaDetectAdBlocker()
    ]).then(([match, blockerOk]) => {
      if (token !== currentPlaybackToken || state.userPaused) return;
      if (match && match.success && match.streamUrl && DOM.audioEngine) {
        loadDirectAudioStream(match.streamUrl, normalizedStart, token, null);
        showToast(`Reklamsız Açık Akış Eşleşti: ${target.title}`);
        return;
      }
      if (blockerOk || hasAdFreePlaybackEnvironment()) {
        proceedToYouTube(!isAutoTransition);
        return;
      }
      if (!isAutoTransition && !isAdWarningAcknowledged()) {
        state._pendingAdWarnPlayback = {
          cleanYtId,
          target,
          normalizedStart,
          ytCanDirectLoad: Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function')
        };
        openAdWarningModal(target);
        return;
      }
      proceedToYouTube(!isAutoTransition);
    }).catch(() => {
      if (token !== currentPlaybackToken || state.userPaused) return;
      if (!isAutoTransition && !isAdWarningAcknowledged()) {
        state._pendingAdWarnPlayback = {
          cleanYtId,
          target,
          normalizedStart,
          ytCanDirectLoad: Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function')
        };
        openAdWarningModal(target);
        return;
      }
      proceedToYouTube(!isAutoTransition);
    });
    return;
  }

  loadYouTubePlayback(cleanYtId, target, normalizedStart, token, ytCanDirectLoad);
  showToast(`Çalınıyor: ${target.title} - ${target.artist}`);
}

function loadDirectAudioStream(streamUrl, startSeconds, token, ytFallbackId) {
  if (!DOM.audioEngine || token !== currentPlaybackToken || state.userPaused) return;
  const targetStart = (typeof startSeconds === 'number' && !isNaN(startSeconds) && startSeconds > 0) ? startSeconds : 0;
  try {
    if (DOM.videoEngine) {
      try {
        if (state._videoSeekOnceHandler) {
          DOM.videoEngine.removeEventListener('loadedmetadata', state._videoSeekOnceHandler);
          state._videoSeekOnceHandler = null;
        }
        if (DOM.videoEngine.getAttribute('src')) {
          DOM.videoEngine.pause();
          DOM.videoEngine.currentTime = 0;
          DOM.videoEngine.removeAttribute('src');
        }
        DOM.videoEngine.classList.add('hidden');
      } catch (_) {}
    }
    if (state.ytPlayer) {
      try {
        if (typeof state.ytPlayer.pauseVideo === 'function') state.ytPlayer.pauseVideo();
        if (targetStart === 0 && typeof state.ytPlayer.seekTo === 'function') state.ytPlayer.seekTo(0, true);
      } catch(e) {}
    }
    if (state._seekOnceHandler) {
      DOM.audioEngine.removeEventListener('loadedmetadata', state._seekOnceHandler);
      state._seekOnceHandler = null;
    }
    state._activeMediaEngine = 'audio';
    if (typeof updateFxEngineNote === 'function') updateFxEngineNote();
    applyMediaPlaybackRate(DOM.audioEngine);

    const isCrossfadeIn = Boolean(state._crossfadeGain !== undefined && state._crossfadeGain < 0.99);
    if (!isCrossfadeIn) {
      state._smoothFadeGain = (typeof document !== 'undefined' && document.hidden) ? 1.0 : 0.01;
    }
    if (typeof applyEffectiveVolume === 'function') {
      applyEffectiveVolume();
    } else {
      const effGain = (typeof getEffectiveVolumeMultiplier === 'function') ? getEffectiveVolumeMultiplier() : 1;
      DOM.audioEngine.volume = state.isMuted ? 0 : Math.max(0, Math.min(1, (state.volume ?? 0.8) * effGain));
    }

    let isSameOriginStream = false;
    try {
      const parsedStreamUrl = new URL(streamUrl, window.location.href);
      isSameOriginStream = parsedStreamUrl.origin === window.location.origin;
    } catch (_) {}
    const shouldUseCors = Boolean(
      !isSameOriginStream && (
        typeof KurfaDSP === 'undefined' ||
        (!KurfaDSP.corsBlockedUrls.has(streamUrl) && (
          KurfaDSP.isConnected ||
          streamUrl.startsWith('http://') ||
          streamUrl.startsWith('https://')
        ))
      )
    );
    try {
      if (shouldUseCors) {
        DOM.audioEngine.crossOrigin = 'anonymous';
      } else {
        DOM.audioEngine.removeAttribute('crossorigin');
        DOM.audioEngine.crossOrigin = null;
      }
    } catch (_) {}

    state.currentPlayheadTime = targetStart;
    state._pendingDirectSeekSec = targetStart;
    state._seekOnceHandler = () => {
      state._seekOnceHandler = null;
      if (token !== currentPlaybackToken) return;
      const pendingSeek = state._pendingDirectSeekSec || 0;
      state._pendingDirectSeekSec = 0;
      try {
        if (pendingSeek > 0) {
          DOM.audioEngine.currentTime = pendingSeek;
        } else {
          DOM.audioEngine.currentTime = 0;
        }
      } catch(e) {}
      applyMediaPlaybackRate(DOM.audioEngine);
      if (typeof KurfaDSP !== 'undefined') {
        KurfaDSP.resumeContext();
        KurfaDSP.ensureConnected(DOM.audioEngine);
        KurfaDSP.syncAllParams(DOM.audioEngine);
      }
    };
    DOM.audioEngine.addEventListener('loadedmetadata', state._seekOnceHandler, { once: true });
    DOM.audioEngine.src = streamUrl;
    // Re-apply playbackRate & DSP immediately after src assignment (browsers reset playbackRate on new src)
    applyMediaPlaybackRate(DOM.audioEngine);
    if (typeof KurfaDSP !== 'undefined') {
      KurfaDSP.resumeContext();
      KurfaDSP.ensureConnected(DOM.audioEngine);
      KurfaDSP.syncAllParams(DOM.audioEngine);
    } else {
      syncNativeFxParams();
    }

    state.isPlaying = true;
    updatePlayPauseUI(true);
    syncNativeAppPlaybackState(true);
    const playPromise = DOM.audioEngine.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.then(() => {
        if (token !== currentPlaybackToken) return;
        state._activeMediaEngine = 'audio';
        state._activeTrackConfirmedPlaying = true;
        applyMediaPlaybackRate(DOM.audioEngine);
        if (typeof KurfaDSP !== 'undefined') {
          KurfaDSP.ensureConnected(DOM.audioEngine);
          KurfaDSP.syncAllParams(DOM.audioEngine);
        }
        if (!isCrossfadeIn && typeof startSmoothFade === 'function' && !(typeof document !== 'undefined' && document.hidden)) {
          startSmoothFade(0.01, 1.0, 220);
        } else if (!isCrossfadeIn) {
          state._smoothFadeGain = 1.0;
          if (typeof applyEffectiveVolume === 'function') applyEffectiveVolume();
        }
        syncNativeAppPlaybackState(true);
        scheduleNextTrackPrefetch(token);
      }).catch((err) => {
        if (token !== currentPlaybackToken || (err && err.name === 'AbortError')) return;
        const safeFallbackStart = (!state._activeTrackConfirmedPlaying || (Date.now() - (state._trackSwitchStartedAt || 0)) < 4000) ? 0 : targetStart;
        if (ytFallbackId) {
          loadYouTubePlayback(ytFallbackId, state.currentTrack, safeFallbackStart, token, Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function'));
        } else {
          state._activeMediaEngine = 'none';
          state._activeTrackConfirmedPlaying = false;
          state.isPlaying = false;
          updatePlayPauseUI(false);
          syncNativeAppPlaybackState(false);
        }
      });
    }
  } catch(err) {
    const safeFallbackStart = (!state._activeTrackConfirmedPlaying || (Date.now() - (state._trackSwitchStartedAt || 0)) < 4000) ? 0 : targetStart;
    if (ytFallbackId) {
      loadYouTubePlayback(ytFallbackId, state.currentTrack, safeFallbackStart, token, Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function'));
    }
  }
}

function loadDirectVideoStream(streamUrl, startSeconds, token, ytFallbackId) {
  if (!DOM.videoEngine || token !== currentPlaybackToken) return;
  const targetStart = (typeof startSeconds === 'number' && !isNaN(startSeconds) && startSeconds > 0) ? startSeconds : 0;
  try {
    if (DOM.audioEngine) {
      try {
        if (state._seekOnceHandler) {
          DOM.audioEngine.removeEventListener('loadedmetadata', state._seekOnceHandler);
          state._seekOnceHandler = null;
        }
        if (DOM.audioEngine.getAttribute('src')) {
          DOM.audioEngine.pause();
          DOM.audioEngine.currentTime = 0;
          DOM.audioEngine.removeAttribute('src');
        }
      } catch (_) {}
    }
    if (state.ytPlayer) {
      try {
        if (typeof state.ytPlayer.pauseVideo === 'function') state.ytPlayer.pauseVideo();
        if (targetStart === 0 && typeof state.ytPlayer.seekTo === 'function') state.ytPlayer.seekTo(0, true);
      } catch (_) {}
    }
    if (state._videoSeekOnceHandler) {
      DOM.videoEngine.removeEventListener('loadedmetadata', state._videoSeekOnceHandler);
      state._videoSeekOnceHandler = null;
    }

    state._activeMediaEngine = 'native-video';
    state._nativeVideoFallbackYtId = ytFallbackId || null;
    state._nativeVideoToken = token;
    state._nativeVideoProxyRetryCount = 0;
    if (typeof updateFxEngineNote === 'function') updateFxEngineNote();

    DOM.videoEngine.classList.remove('hidden');
    const ph = document.getElementById('deck-video-placeholder');
    if (ph) ph.classList.add('hidden');
    if (typeof dismissVideoAdNotice === 'function') dismissVideoAdNotice();
    if (typeof syncPersistentPlayerPosition === 'function') syncPersistentPlayerPosition();

    applyMediaPlaybackRate(DOM.videoEngine);
    state._smoothFadeGain = 1.0;
    if (typeof applyEffectiveVolume === 'function') applyEffectiveVolume();

    const shouldUseCors = Boolean(
      typeof KurfaDSP === 'undefined' ||
      !KurfaDSP.corsBlockedUrls.has(streamUrl)
    );
    try {
      if (shouldUseCors) {
        DOM.videoEngine.crossOrigin = 'anonymous';
      } else {
        DOM.videoEngine.removeAttribute('crossorigin');
        DOM.videoEngine.crossOrigin = null;
      }
    } catch (_) {}

    state.currentPlayheadTime = targetStart;
    state._pendingDirectVideoSeekSec = targetStart;
    state._videoSeekOnceHandler = () => {
      state._videoSeekOnceHandler = null;
      if (token !== currentPlaybackToken || state._activeMediaEngine !== 'native-video') return;
      const pendingSeek = state._pendingDirectVideoSeekSec || 0;
      state._pendingDirectVideoSeekSec = 0;
      try {
        DOM.videoEngine.currentTime = pendingSeek > 0 ? pendingSeek : 0;
      } catch (_) {}
      applyMediaPlaybackRate(DOM.videoEngine);
      if (typeof KurfaDSP !== 'undefined') {
        KurfaDSP.ensureConnected(DOM.videoEngine);
        KurfaDSP.syncAllParams(DOM.videoEngine);
      }
    };
    DOM.videoEngine.addEventListener('loadedmetadata', state._videoSeekOnceHandler, { once: true });
    DOM.videoEngine.src = streamUrl;
    applyMediaPlaybackRate(DOM.videoEngine);
    if (typeof KurfaDSP !== 'undefined') {
      KurfaDSP.ensureConnected(DOM.videoEngine);
      KurfaDSP.syncAllParams(DOM.videoEngine);
    } else {
      syncNativeFxParams();
    }

    if (state.userPaused) {
      state.isPlaying = false;
      updatePlayPauseUI(false);
      syncNativeAppPlaybackState(false);
      return;
    }

    state.isPlaying = true;
    updatePlayPauseUI(true);
    syncNativeAppPlaybackState(true);
    const playPromise = DOM.videoEngine.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.then(() => {
        if (token !== currentPlaybackToken || state._activeMediaEngine !== 'native-video') return;
        state._activeTrackConfirmedPlaying = true;
        applyMediaPlaybackRate(DOM.videoEngine);
        if (typeof KurfaDSP !== 'undefined') {
          KurfaDSP.ensureConnected(DOM.videoEngine);
          KurfaDSP.syncAllParams(DOM.videoEngine);
        }
        syncNativeAppPlaybackState(true);
        scheduleNextTrackPrefetch(token);
      }).catch((err) => {
        if (token !== currentPlaybackToken || (err && err.name === 'AbortError')) return;
        if (ytFallbackId) {
          DOM.videoEngine.classList.add('hidden');
          try { DOM.videoEngine.removeAttribute('src'); } catch (_) {}
          if (ph) ph.classList.remove('hidden');
          loadYouTubePlayback(ytFallbackId, state.currentTrack, targetStart, token, Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function'));
          if (typeof syncPersistentPlayerPosition === 'function') syncPersistentPlayerPosition();
        }
      });
    }
  } catch (_) {
    if (ytFallbackId) {
      loadYouTubePlayback(ytFallbackId, state.currentTrack, targetStart, token, Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function'));
    }
  }
}

function loadYouTubePlayback(cleanYtId, target, normalizedStart, token, ytCanDirectLoad) {
  if (token !== currentPlaybackToken) return;
  if (ytCanDirectLoad) {
    try {
      if (typeof state.ytPlayer.setPlaybackRate === 'function') {
        const spd = Math.max(0.5, Math.min(2.0, Number(state.proSettings?.playbackSpeed) || 1.0));
        state.ytPlayer.setPlaybackRate(spd);
      }
      if (!state.isMuted && state.volume > 0) {
        if (typeof state.ytPlayer.unMute === 'function') state.ytPlayer.unMute();
        setPlayerVolume(state.volume);
      } else if (typeof state.ytPlayer.mute === 'function') {
        state.ytPlayer.mute();
      }

      state.ytPlayer.loadVideoById({
        videoId: cleanYtId,
        startSeconds: normalizedStart
      });
      state._activeMediaEngine = 'youtube';
      if (typeof updateFxEngineNote === 'function') updateFxEngineNote();
      if (typeof syncNativeFxParams === 'function') syncNativeFxParams();
      state.isPlaying = true;
      updatePlayPauseUI(true);
      scheduleNextTrackPrefetch(token);

      // Token-guarded stall watchdog: nudge once if YT stays UNSTARTED (-1) or CUED (5)
      state._stallWatchdogTimer = setTimeout(() => {
        if (token !== currentPlaybackToken || state.userPaused || state._playerInError) return;
        if (!state.ytPlayer || typeof state.ytPlayer.getPlayerState !== 'function') return;
        try {
          const pState = state.ytPlayer.getPlayerState();
          if (pState === -1 || pState === 5) {
            if (typeof state.ytPlayer.playVideo === 'function') {
              state.ytPlayer.playVideo();
            }
            clearTimeout(state._stallWatchdogTimer);
            state._stallWatchdogTimer = setTimeout(() => {
              if (token !== currentPlaybackToken || state.userPaused || state._playerInError) return;
              try {
                const finalState = state.ytPlayer.getPlayerState();
                if (finalState !== 1 && finalState !== 3) {
                  state.isPlaying = false;
                  updatePlayPauseUI(false);
                }
              } catch(e) {}
            }, 1500);
          }
        } catch(e) {}
      }, 1500);
    } catch(err) {
      console.warn("YouTube player loadVideoById error:", err);
      state.isPlaying = false;
      updatePlayPauseUI(false);
    }
  } else {
    state.pendingTrackToPlay = target;
    initYouTubeEngine();
  }
}

function addToQueueTrack(videoIdOrTrack, title, artist, thumb, dur) {
  let track;
  if (videoIdOrTrack && typeof videoIdOrTrack === 'object') {
    const vid = safeYtId(videoIdOrTrack.ytId) || safeYtId(videoIdOrTrack.id);
    track = {
      id: videoIdOrTrack.id,
      ytId: vid || videoIdOrTrack.ytId,
      title: videoIdOrTrack.title || "Şarkı",
      artist: videoIdOrTrack.artist || "Sanatçı",
      thumbnail: safeUrl(videoIdOrTrack.thumbnail, vid ? `https://i.ytimg.com/vi/${vid}/hqdefault.jpg` : './kurfamuzik_logo.png'),
      duration: videoIdOrTrack.duration || "3:30",
      source: videoIdOrTrack.source,
      audiusStreamUrl: videoIdOrTrack.audiusStreamUrl,
      isLocal: Boolean(videoIdOrTrack.isLocal),
      streamUrl: videoIdOrTrack.streamUrl,
      filePath: videoIdOrTrack.filePath
    };
  } else {
    const vid = safeYtId(videoIdOrTrack);
    track = {
      id: videoIdOrTrack,
      title: title || "Şarkı",
      artist: artist || "Sanatçı",
      thumbnail: safeUrl(thumb, vid ? `https://i.ytimg.com/vi/${vid}/hqdefault.jpg` : './kurfamuzik_logo.png'),
      duration: dur || "3:30"
    };
  }

  const trackId = track.id || track.ytId;
  const cleanTitle = (track.title || '').trim().toLowerCase();
  const cleanArtist = (track.artist || '').trim().toLowerCase();

  if (!Array.isArray(state.userQueue)) state.userQueue = [];
  const isDuplicate = state.userQueue.some(t => {
    if (!t) return false;
    if (trackId && (t.id === trackId || t.ytId === trackId)) return true;
    if (cleanTitle && cleanArtist && t.title && t.artist) {
      return t.title.trim().toLowerCase() === cleanTitle && t.artist.trim().toLowerCase() === cleanArtist;
    }
    return false;
  });

  if (isDuplicate) {
    showToast(`Zaten sıradaki şarkılar listesinde: ${track.title}`);
    return;
  }

  state.userQueue.push(track);
  saveQueueState();
  renderQueueDrawerList();
  showToast(`Sıradaki Şarkılara Eklendi: ${track.title}`);
}

function removeFromUserQueue(index) {
  if (!Array.isArray(state.userQueue) || index < 0 || index >= state.userQueue.length) return;
  state.userQueue.splice(index, 1);
  saveQueueState();
  renderQueueDrawerList();
}

function togglePlay() {
  if (state.isPlaying) {
    pausePlayback();
  } else {
    resumePlayback();
  }
}

function resumePlayback() {
  state.userPaused = false;
  clearTimeout(state._guardianResumeTimer);
  clearTimeout(state._errorSkipTimer);
  clearTimeout(state._stallWatchdogTimer);
  const curTime = state.currentPlayheadTime || 0;

  const isLocalTrack = Boolean(state.currentTrack && (
    state.currentTrack.isLocal ||
    String(state.currentTrack.id).startsWith('local_') ||
    state.currentTrack.source === 'local'
  ));

  // 1. Local track resume: NEVER touch YouTube Player!
  if (isLocalTrack) {
    if (DOM.audioEngine && DOM.audioEngine.getAttribute('src') && !DOM.audioEngine.ended) {
      if (typeof KurfaDSP !== 'undefined') KurfaDSP.resumeContext();
      state._smoothFadeGain = 0.02;
      if (typeof applyEffectiveVolume === 'function') applyEffectiveVolume();
      DOM.audioEngine.play().then(() => {
        if (state.userPaused) return;
        if (typeof startSmoothFade === 'function') startSmoothFade(0.02, 1.0, 120);
        state.isPlaying = true;
        updatePlayPauseUI(true);
        if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
      }).catch(e => {
        if (e.name === 'AbortError') return;
        playTrackById(state.currentTrack.id, state.currentTrack, curTime);
      });
      state.isPlaying = true;
      updatePlayPauseUI(true);
      if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
      return;
    }
    // Audio engine has no src loaded yet (e.g. app freshly reopened) -> resolve local stream & play
    playTrackById(state.currentTrack.id, state.currentTrack, curTime);
    return;
  }

  // 1b. Android Native Media3 ExoPlayer resume (cold reopen reloads full track cleanly)
  if (state._activeMediaEngine === 'native-exo' && state.currentTrack) {
    const exo = getAndroidExoBridge();
    if (exo && typeof exo.resumeNativeExo === 'function') {
      if (!state._activeTrackConfirmedPlaying && !state._nativeExoLastBuffering) {
        const playId = safeYtId(state.currentTrack.ytId) || state.currentTrack.id;
        playTrackById(playId, state.currentTrack, curTime);
        return;
      }
      try {
        state._nativeExoPlayRequestedAt = Date.now();
        exo.resumeNativeExo();
        state.isPlaying = true;
        updatePlayPauseUI(true);
        syncNativeAppPlaybackState(true);
        if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
        return;
      } catch (e) {}
    }
  }

  // 1c. Ad-Free Direct Native Video resume
  if (state.deckVisualMode === 'video' && DOM.videoEngine && DOM.videoEngine.getAttribute('src') && !DOM.videoEngine.ended && state.currentTrack) {
    state._activeMediaEngine = 'native-video';
    applyMediaPlaybackRate(DOM.videoEngine);
    if (typeof KurfaDSP !== 'undefined') {
      KurfaDSP.ensureConnected(DOM.videoEngine);
      KurfaDSP.syncAllParams(DOM.videoEngine);
    }
    state._smoothFadeGain = 1.0;
    if (typeof applyEffectiveVolume === 'function') applyEffectiveVolume();
    DOM.videoEngine.play().then(() => {
      if (state.userPaused) return;
      state.isPlaying = true;
      updatePlayPauseUI(true);
      syncNativeAppPlaybackState(true);
      if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
    }).catch((e) => {
      if (e && e.name === 'AbortError') return;
      if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.playVideo === 'function') {
        state.ytPlayer.playVideo();
      }
    });
    state.isPlaying = true;
    updatePlayPauseUI(true);
    if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
    return;
  }

  // 2. If HTML5 Audio engine has a loaded source (Audius / direct stream), resume it
  if (DOM.audioEngine && DOM.audioEngine.getAttribute('src') && !DOM.audioEngine.ended && state.currentTrack) {
    applyMediaPlaybackRate(DOM.audioEngine);
    if (typeof KurfaDSP !== 'undefined') {
      KurfaDSP.ensureConnected(DOM.audioEngine);
      KurfaDSP.syncAllParams(DOM.audioEngine);
    }
    state._smoothFadeGain = (typeof document !== 'undefined' && document.hidden) ? 1.0 : 0.02;
    if (typeof applyEffectiveVolume === 'function') applyEffectiveVolume();
    DOM.audioEngine.play().then(() => {
      if (state.userPaused) return;
      if (typeof startSmoothFade === 'function' && !(typeof document !== 'undefined' && document.hidden)) {
        startSmoothFade(0.02, 1.0, 120);
      } else {
        state._smoothFadeGain = 1.0;
        if (typeof applyEffectiveVolume === 'function') applyEffectiveVolume();
      }
      state.isPlaying = true;
      updatePlayPauseUI(true);
      if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
    }).catch(e => {
      if (e.name === 'AbortError') return;
      if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.playVideo === 'function') {
        state.ytPlayer.playVideo();
      }
    });
    state.isPlaying = true;
    updatePlayPauseUI(true);
    if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
    return;
  }

  // 3. YouTube player (primary engine for both Video and Vinyl modes)
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.playVideo === 'function' && state.currentTrack) {
    try {
      const targetVid = safeYtId(state.currentTrack.ytId || state.currentTrack.id);
      const loadedVid = typeof state.ytPlayer.getVideoData === 'function' ? state.ytPlayer.getVideoData()?.video_id : null;
      if (targetVid && loadedVid === targetVid) {
        state.ytPlayer.playVideo();
        state.isPlaying = true;
        updatePlayPauseUI(true);
        if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
        return;
      }
    } catch(e) {}
  }

  // 4. Fallback: reload current track or initialize clean Spotify-style starter queue
  if (state.currentTrack && state.currentTrack.id) {
    playTrackById(state.currentTrack.id, state.currentTrack, curTime);
  } else if (Array.isArray(state.userQueue) && state.userQueue.length > 0) {
    const firstUp = state.userQueue.shift();
    if (!state.queue || state.queue.length === 0) {
      state.queue = [...getCuratedTracks()];
      state.queueIndex = 0;
    }
    saveQueueState();
    renderQueueDrawerList();
    playTrackById(firstUp.id, firstUp, 0);
  } else if (state.queue && state.queue.length > 0) {
    const idx = Math.max(0, Math.min(state.queueIndex || 0, state.queue.length - 1));
    state.queueIndex = idx;
    playTrackById(state.queue[idx].id, state.queue[idx], 0);
  } else {
    const tracks = getCuratedTracks();
    if (tracks && tracks.length > 0) {
      const chosen = setPlaybackQueueContext(tracks, 0, 'YouTube Türkiye Trendleri', 'TRENDLERDEN ÇALINIYOR');
      renderQueueDrawerList();
      if (chosen) playTrackById(chosen.id, chosen, 0);
    }
  }
}

function pausePlayback() {
  state.userPaused = true;
  clearTimeout(state._guardianResumeTimer);
  clearTimeout(state._errorSkipTimer);
  clearTimeout(state._stallWatchdogTimer);
  if (state._activeMediaEngine === 'native-exo') {
    const exo = getAndroidExoBridge();
    if (exo && typeof exo.pauseNativeExo === 'function') {
      try { exo.pauseNativeExo(); } catch (e) {}
    }
  }
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.pauseVideo === 'function') {
    try { state.ytPlayer.pauseVideo(); } catch(e) {}
  }
  if (DOM.videoEngine) {
    try {
      if (!DOM.videoEngine.paused) DOM.videoEngine.pause();
    } catch (_) {}
  }
  if (DOM.audioEngine) {
    if (!DOM.audioEngine.paused && DOM.audioEngine.getAttribute('src') && typeof startSmoothFade === 'function') {
      startSmoothFade(typeof state._smoothFadeGain === 'number' ? state._smoothFadeGain : 1, 0, 120, () => {
        if (!state.userPaused) return;
        try { DOM.audioEngine.pause(); } catch (e) {}
        state._smoothFadeGain = 1;
        if (typeof applyEffectiveVolume === 'function') applyEffectiveVolume();
      });
    } else {
      try { DOM.audioEngine.pause(); } catch(e) {}
    }
  }
  syncNativeAppPlaybackState(false, true);
  state.isPlaying = false;
  updatePlayPauseUI(false);
  if (typeof syncPipState === 'function') {
    syncPipState();
  }
}

function playNextTrack(opts = {}) {
  const isAutoErrorSkip = Boolean(opts && opts.isAutoErrorSkip);
  const isAutoAdvance = Boolean(opts && opts.isAutoAdvance);

  // Spotify-grade Queue: User-queued FIFO items ALWAYS play before context queue
  if (Array.isArray(state.userQueue) && state.userQueue.length > 0) {
    while (state.userQueue.length > 0) {
      const cand = state.userQueue.shift();
      const candVid = cand ? (safeYtId(cand.ytId) || safeYtId(cand.id)) : null;
      if (!cand || (candVid && failedVideoIds.has(candVid))) continue;
      saveQueueState();
      renderQueueDrawerList();
      const playId = candVid || cand.id;
      playTrackById(playId, cand, 0, undefined, undefined, { isAutoErrorSkip, isAutoAdvance });
      prefetchNextQueueTrack();
      return;
    }
    saveQueueState();
  }

  if (!state.queue || state.queue.length === 0) {
    if (isLocalQueueSession()) {
      state.isPlaying = false;
      updatePlayPauseUI(false);
      return;
    }
    triggerSmartRadioContinue();
    return;
  }

  let nextIdx = state.queueIndex + 1;
  while (nextIdx < state.queue.length) {
    const cand = state.queue[nextIdx];
    const candVid = cand ? (safeYtId(cand.ytId) || safeYtId(cand.id)) : null;
    if (!cand || (candVid && failedVideoIds.has(candVid))) {
      nextIdx++;
      continue;
    }
    break;
  }

  if (nextIdx < state.queue.length) {
    state.queueIndex = nextIdx;
    const nextTrack = state.queue[state.queueIndex];
    const playId = safeYtId(nextTrack.ytId) || nextTrack.id;
    playTrackById(playId, nextTrack, 0, undefined, undefined, { isAutoErrorSkip, isAutoAdvance });
    prefetchNextQueueTrack();
  } else if (state.repeatMode === 1) {
    let wrapIdx = 0;
    while (wrapIdx < state.queue.length) {
      const cand = state.queue[wrapIdx];
      const candVid = cand ? (safeYtId(cand.ytId) || safeYtId(cand.id)) : null;
      if (!cand || (candVid && failedVideoIds.has(candVid))) {
        wrapIdx++;
        continue;
      }
      break;
    }
    if (wrapIdx < state.queue.length) {
      state.queueIndex = wrapIdx;
      const nextTrack = state.queue[wrapIdx];
      const playId = safeYtId(nextTrack.ytId) || nextTrack.id;
      playTrackById(playId, nextTrack, 0, undefined, undefined, { isAutoErrorSkip, isAutoAdvance });
      prefetchNextQueueTrack();
    } else {
      state.isPlaying = false;
      updatePlayPauseUI(false);
      syncNativeAppPlaybackState(false);
    }
  } else if (isLocalQueueSession()) {
    state.isPlaying = false;
    updatePlayPauseUI(false);
    syncNativeAppPlaybackState(false);
    showToast("Yerel çalma listesinin sonuna gelindi");
  } else {
    triggerSmartRadioContinue();
  }
}

function playPrevTrack() {
  if (!state.queue || state.queue.length === 0) return;
  if (typeof getActiveMediaCurrentTime === 'function' && getActiveMediaCurrentTime() > 3) {
    seekPlaybackToSeconds(0);
    resumePlayback();
    return;
  }
  state.queueIndex = (state.queueIndex - 1 + state.queue.length) % state.queue.length;
  const prevTrack = state.queue[state.queueIndex];
  const playId = safeYtId(prevTrack.ytId) || prevTrack.id;
  playTrackById(playId, prevTrack);
}

function handleTrackEnd() {
  if (typeof SleepTimer !== 'undefined' && SleepTimer.handleTrackEnd()) {
    return;
  }
  if (state.repeatMode === 2) {
    if (state._activeMediaEngine === 'native-exo') {
      const exo = getAndroidExoBridge();
      if (exo && typeof exo.seekNativeExo === 'function') {
        try {
          state._nativeExoCurrentTime = 0;
          state.currentPlayheadTime = 0;
          exo.seekNativeExo(0);
          if (typeof exo.resumeNativeExo === 'function') exo.resumeNativeExo();
          state.isPlaying = true;
          updatePlayPauseUI(true);
          return;
        } catch (e) {}
      }
    }
    if (state._activeMediaEngine === 'native-video' && DOM.videoEngine && DOM.videoEngine.getAttribute('src')) {
      DOM.videoEngine.currentTime = 0;
      resumePlayback();
      return;
    }
    if (DOM.audioEngine && DOM.audioEngine.getAttribute('src')) {
      DOM.audioEngine.currentTime = 0;
      resumePlayback();
      return;
    }
    if (state.ytPlayer && typeof state.ytPlayer.seekTo === 'function') state.ytPlayer.seekTo(0, true);
    resumePlayback();
  } else if (Array.isArray(state.userQueue) && state.userQueue.length > 0) {
    playNextTrack({ isAutoAdvance: true });
  } else if (state.queueIndex < state.queue.length - 1) {
    playNextTrack({ isAutoAdvance: true });
  } else if (state.repeatMode === 1) {
    playNextTrack({ isAutoAdvance: true });
  } else if (isLocalQueueSession()) {
    state.isPlaying = false;
    updatePlayPauseUI(false);
    syncNativeAppPlaybackState(false);
    showToast("Yerel çalma listesinin sonuna gelindi");
  } else {
    triggerSmartRadioContinue();
  }
}

function syncShuffleRepeatUI() {
  if (DOM.btnShuffle) {
    DOM.btnShuffle.classList.toggle('text-primary', Boolean(state.isShuffle));
    DOM.btnShuffle.classList.toggle('bg-primary-fixed/40', Boolean(state.isShuffle));
    DOM.btnShuffle.setAttribute('aria-pressed', String(Boolean(state.isShuffle)));
  }

  const pipShuffle = document.getElementById('pip-btn-shuffle');
  if (pipShuffle) {
    pipShuffle.classList.toggle('text-cyan-400', Boolean(state.isShuffle));
    pipShuffle.classList.toggle('text-zinc-300', !state.isShuffle);
  }

  if (DOM.btnRepeat) {
    DOM.btnRepeat.classList.toggle('text-primary', state.repeatMode > 0);
    DOM.btnRepeat.classList.toggle('bg-primary-fixed/40', state.repeatMode > 0);
    const rIcon = DOM.btnRepeat.querySelector('.material-symbols-outlined');
    if (rIcon) rIcon.textContent = state.repeatMode === 2 ? 'repeat_one' : 'repeat';
  }

  const pipRepeat = document.getElementById('pip-btn-repeat');
  if (pipRepeat) {
    pipRepeat.classList.toggle('text-cyan-400', state.repeatMode > 0);
    pipRepeat.classList.toggle('text-zinc-300', state.repeatMode === 0);
    const pipRIcon = pipRepeat.querySelector('.material-symbols-outlined');
    if (pipRIcon) pipRIcon.textContent = state.repeatMode === 2 ? 'repeat_one' : 'repeat';
  }

  if (typeof pipWindowInstance !== 'undefined' && pipWindowInstance && pipWindowInstance.document) {
    try {
      const extShuffle = pipWindowInstance.document.getElementById('pip-ext-shuffle');
      if (extShuffle) extShuffle.style.color = state.isShuffle ? '#22d3ee' : '';
      const extRepeat = pipWindowInstance.document.getElementById('pip-ext-repeat');
      if (extRepeat) {
        extRepeat.style.color = state.repeatMode > 0 ? '#22d3ee' : '';
        const extRIcon = extRepeat.querySelector('.material-symbols-outlined');
        if (extRIcon) extRIcon.textContent = state.repeatMode === 2 ? 'repeat_one' : 'repeat';
      }
    } catch (_) {}
  }
}
window.syncShuffleRepeatUI = syncShuffleRepeatUI;

function toggleShuffle() {
  if (!state.queue || state.queue.length === 0) {
    showToast(t('toast.queue_empty'));
    return;
  }
  state.isShuffle = !state.isShuffle;
  safeSetStorage('kurfa_shuffle', state.isShuffle ? 'true' : 'false');
  if (state.isShuffle) {
    if (!Array.isArray(state.originalQueue) || state.originalQueue.length === 0) {
      state.originalQueue = [...state.queue];
    }
    const current = state.queue[state.queueIndex] || state.currentTrack || state.queue[0];
    const remaining = state.queue.filter((_, i) => i !== state.queueIndex);
    for (let i = remaining.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [remaining[i], remaining[j]] = [remaining[j], remaining[i]];
    }
    state.queue = current ? [current, ...remaining] : remaining;
    state.queueIndex = 0;
    saveQueueState();
    showToast(t('toast.shuffle_on'));
  } else {
    if (state.originalQueue && state.originalQueue.length > 0) {
      state.queue = [...state.originalQueue];
    }
    const curId = state.currentTrack ? state.currentTrack.id : null;
    const curYt = state.currentTrack ? safeYtId(state.currentTrack.ytId) : null;
    const matchedIdx = curId
      ? state.queue.findIndex(t => t && (t.id === curId || (curYt && (t.id === curYt || t.ytId === curYt))))
      : -1;
    state.queueIndex = matchedIdx !== -1 ? matchedIdx : 0;
    saveQueueState();
    showToast(t('toast.shuffle_off'));
  }
  syncShuffleRepeatUI();
  renderQueueDrawerList();
}

function toggleRepeat() {
  state.repeatMode = (state.repeatMode + 1) % 3;
  safeSetStorage('kurfa_repeat', state.repeatMode.toString());
  syncShuffleRepeatUI();
  if (state.repeatMode === 0) {
    showToast(t('toast.repeat_off'));
  } else if (state.repeatMode === 1) {
    showToast(t('toast.repeat_all'));
  } else if (state.repeatMode === 2) {
    showToast(t('toast.repeat_one'));
  }
}

// =============================================================================
// 7. UI SYNC & PLAYER DECK UPDATES (DESKTOP & MOBILE)
// =============================================================================

function updateMediaSession(track) {
  if (!('mediaSession' in navigator) || !track) return;
  try {
    const safeArtwork = safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png');
    navigator.mediaSession.metadata = new MediaMetadata({
      title: track.title || 'Kurfamüzik',
      artist: track.artist || 'YouTube',
      album: 'Kurfamüzik Akışı',
      artwork: [
        { src: safeArtwork, sizes: '512x512', type: 'image/jpeg' }
      ]
    });

    navigator.mediaSession.setActionHandler('play', () => togglePlay());
    navigator.mediaSession.setActionHandler('pause', () => togglePlay());
    navigator.mediaSession.setActionHandler('previoustrack', () => playPrevTrack());
    navigator.mediaSession.setActionHandler('nexttrack', () => playNextTrack());
    navigator.mediaSession.setActionHandler('seekto', (details) => {
      if (typeof details.seekTime === 'number') {
        seekPlaybackToSeconds(details.seekTime);
      }
    });
  } catch (e) {
    console.warn("MediaSession API hatası:", e);
  }
}

function updatePlayerTrackUI(track) {
  const defaultPlaceholder = "./kurfamuzik_logo_96.webp";
  if (!track) {
    if (DOM.playerThumb) DOM.playerThumb.src = defaultPlaceholder;
    if (DOM.playerTitle) DOM.playerTitle.textContent = "Kurfa Müzik";
    if (DOM.playerArtist) DOM.playerArtist.textContent = t('player.select_song');
    if (DOM.playerTimeDur) DOM.playerTimeDur.textContent = "0:00";
    if (DOM.playerTimeCur) DOM.playerTimeCur.textContent = "0:00";

    if (DOM.playerThumbMobile) DOM.playerThumbMobile.src = defaultPlaceholder;
    if (DOM.playerTitleMobile) DOM.playerTitleMobile.textContent = "Kurfa Müzik";
    if (DOM.playerArtistMobile) DOM.playerArtistMobile.textContent = t('player.select_song');

    if (DOM.deckCoverImg) DOM.deckCoverImg.src = defaultPlaceholder;
    if (DOM.deckTitle) DOM.deckTitle.textContent = "Kurfa Müzik";
    if (DOM.deckArtist) DOM.deckArtist.textContent = t('player.no_playing');

    if (typeof FxReactiveStudio !== 'undefined') FxReactiveStudio.onTrackChange(null);
    updatePlayerFavBtn();
    return;
  }

  const safeThumb = safeUrl(track.thumbnail || getTrackThumbnail(track), defaultPlaceholder);
  const cleanTitle = formatCleanTrackTitle(track.title) || (getAppLanguage() === 'en' ? 'Track' : 'Şarkı');
  const rawArtist = typeof track.artist === 'string' ? track.artist.trim() : '';
  const selectSongStr = t('player.select_song');
  const cleanArtist = (rawArtist && rawArtist !== 'Bir parça seçin' && rawArtist !== 'Select a track' && rawArtist !== selectSongStr)
    ? rawArtist
    : (getAppLanguage() === 'en' ? 'Artist' : 'Sanatçı');

  // Desktop elements
  if (DOM.playerThumb) DOM.playerThumb.src = safeThumb;
  if (DOM.playerTitle) DOM.playerTitle.textContent = cleanTitle;
  if (DOM.playerArtist) DOM.playerArtist.textContent = cleanArtist;
  if (DOM.playerTimeDur) DOM.playerTimeDur.textContent = track.duration || "3:30";

  if (typeof syncDesktopMiniPlayerState === 'function' && window.__kurfaDesktopMiniPlayerOpen) {
    syncDesktopMiniPlayerState(state.currentPlayheadTime || 0, parseDurationToSec(track.duration) || 210);
  }

  // Mobile mini elements
  if (DOM.playerThumbMobile) DOM.playerThumbMobile.src = safeThumb;
  if (DOM.playerTitleMobile) DOM.playerTitleMobile.textContent = cleanTitle;
  if (DOM.playerArtistMobile) DOM.playerArtistMobile.textContent = cleanArtist;

  // Native Android Foreground MediaService & Lockscreen Sync
  try {
    if (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.updateNowPlayingMetadata === 'function') {
      window.KurfaAndroidBridge.updateNowPlayingMetadata(cleanTitle || "Kurfamüzik", cleanArtist, safeThumb);
    }
  } catch (e) {}

  // Visualizer / Lyrics tab sync
  if (DOM.deckCoverImg) DOM.deckCoverImg.src = safeThumb;
  if (DOM.deckTitle) DOM.deckTitle.textContent = cleanTitle;
  if (DOM.deckArtist) DOM.deckArtist.textContent = cleanArtist;
  if (typeof LiquidBackground !== 'undefined' && typeof LiquidBackground.updateForTrack === 'function') {
    LiquidBackground.updateForTrack(track, safeThumb);
  }
  if (typeof FxReactiveStudio !== 'undefined') {
    FxReactiveStudio.onTrackChange(track, safeThumb);
  }

  if (typeof updatePlaylistHeroUI === 'function') {
    updatePlaylistHeroUI(track);
  }
  if (typeof syncFloatingPipUI === 'function') {
    syncFloatingPipUI();
  }

  // Disable Video mode toggle for local device tracks / audio-only Audius tracks
  const videoModeBtn = document.getElementById('btn-deck-video-mode');
  const allowVideo = supportsDeckVideo(track);
  if (videoModeBtn) {
    videoModeBtn.classList.toggle('hidden', !allowVideo);
    videoModeBtn.disabled = !allowVideo;
    videoModeBtn.setAttribute('aria-disabled', String(!allowVideo));
  }
  syncDeckVisualUIOnly(allowVideo && state.deckVisualMode === 'video' ? 'video' : 'vinyl');
  syncPersistentPlayerPosition();

  updatePlayerFavBtn();
  updateMediaSession(track);
  syncFloatingPipUI();
  if (typeof syncActiveTrackRowInDeviceAudio === 'function') {
    syncActiveTrackRowInDeviceAudio();
  }
  if (state.currentTab === 'calma-listeleri' && cleanTitle) {
    updatePageSeoMeta({
      tabId: 'calma-listeleri',
      title: `${cleanTitle} • ${cleanArtist} — Kurfamüzik`,
      description: `${cleanTitle} — ${cleanArtist} canlı şarkı sözleri ve yüksek kaliteli müzik akışı.`,
      path: '/calar',
      updateUrl: false
    });
  }
}

function updatePlayPauseUI(playing) {
  // Desktop
  if (DOM.playerPlayIcon) {
    DOM.playerPlayIcon.textContent = playing ? 'pause' : 'play_arrow';
  }
  // Mobile Mini
  if (DOM.playerPlayIconMobile) {
    DOM.playerPlayIconMobile.textContent = playing ? 'pause' : 'play_arrow';
  }
  // Vinyl
  if (DOM.vinylDisc) {
    if (playing) {
      DOM.vinylDisc.style.animationPlayState = 'running';
      DOM.vinylDisc.classList.add('animate-spin-slow');
    } else {
      DOM.vinylDisc.style.animationPlayState = 'paused';
    }
  }
  if (typeof FxReactiveStudio !== 'undefined') {
    FxReactiveStudio.syncPlaybackState(Boolean(playing));
  }
  // MediaSession state
  if ('mediaSession' in navigator) {
    try {
      navigator.mediaSession.playbackState = playing ? 'playing' : 'paused';
    } catch (e) {}
  }

  syncFloatingPipUI();
  syncActiveRowEqState();

  if (window.__kurfaDesktopMiniPlayerOpen && typeof syncDesktopMiniPlayerState === 'function') {
    syncDesktopMiniPlayerState(getActiveMediaCurrentTime() || 0, getActiveMediaDuration() || 0);
  }

  const activeId = state.currentTrack ? state.currentTrack.id : null;
  if (state._lastRenderedActiveId !== activeId) {
    state._lastRenderedActiveId = activeId;
    if (state.currentTab === 'kesfet') {
      const artistCont = document.getElementById('kesfet-artist-container');
      if (artistCont && !artistCont.classList.contains('hidden') && Array.isArray(currentArtistTracks) && currentArtistTracks.length > 0) {
        const artistName = document.getElementById('artist-profile-name')?.textContent || '';
        renderArtistTracks(currentArtistTracks, artistName);
      } else {
        state._lastHomeActiveId = activeId;
        renderHomeTracklistTable();
      }
    } else if (state.currentTab === 'calma-listeleri') {
      renderPlaylistTracksTable();
    } else if (state.currentTab === 'kutuphanem') {
      if (state.currentKutuphaneSubTab === 'favoriler') renderFavoritesTable();
      else if (state.currentKutuphaneSubTab === 'listelerim' && state.activeCustomPlaylistId) openCustomPlaylistDetail(state.activeCustomPlaylistId);
      else if (state.currentKutuphaneSubTab === 'spotify' && state.activeSpotifyPlaylistId) openSpotifyPlaylistDetail(state.activeSpotifyPlaylistId);
    } else if (state.currentTab === 'arama' && Array.isArray(state.currentSearchResults) && state.currentSearchResults.length > 0) {
      renderSearchResults(state.currentSearchResults, state.currentSearchQuery || '');
    }
    if (state.queueDrawerOpen) {
      renderQueueDrawerList();
    }
  }
  if (typeof syncActiveTrackRowInDeviceAudio === 'function' && state.currentTab === 'kutuphanem' && state.currentKutuphaneSubTab === 'cihaz') {
    syncActiveTrackRowInDeviceAudio();
  }
  if (typeof LyricsClock !== 'undefined' && typeof LyricsClock.syncState === 'function') {
    LyricsClock.syncState();
  }
}

function updatePlayerFavBtn() {
  const isFav = state.currentTrack && state.favorites.some(t => t.id === state.currentTrack.id);

  // Desktop fav button
  if (DOM.playerFavBtn) {
    const icon = DOM.playerFavBtn.querySelector('.material-symbols-outlined');
    if (isFav) {
      DOM.playerFavBtn.classList.add('text-primary');
      if (icon) { icon.textContent = 'favorite'; icon.classList.add('filled'); }
    } else {
      DOM.playerFavBtn.classList.remove('text-primary');
      if (icon) { icon.textContent = 'favorite_border'; icon.classList.remove('filled'); }
    }
  }

  // Mobile fav button
  if (DOM.playerFavBtnMobile) {
    const icon = DOM.playerFavBtnMobile.querySelector('.material-symbols-outlined');
    if (isFav) {
      DOM.playerFavBtnMobile.classList.add('text-primary');
      if (icon) { icon.textContent = 'favorite'; icon.classList.add('filled'); }
    } else {
      DOM.playerFavBtnMobile.classList.remove('text-primary');
      if (icon) { icon.textContent = 'favorite_border'; icon.classList.remove('filled'); }
    }
  }
}

// =============================================================================
// 8. 120 FPS SCRUBBABLE SEEKBAR & VOLUME SLIDER
// =============================================================================

let seekbarRaf = null;
let lastSeekbarTickTime = 0;

function formatTime(sec) {
  if (typeof sec !== 'number' || isNaN(sec) || sec < 0) return "0:00";
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return `${m}:${s < 10 ? '0' : ''}${s}`;
}
window.formatTime = formatTime;

function getActiveMediaDuration() {
  let dur = 0;
  // 0. Native ExoPlayer duration
  if (state._activeMediaEngine === 'native-exo' && Number(state._nativeExoDuration) > 0) {
    dur = Number(state._nativeExoDuration);
  }
  // 0b. Native HTML5 Video Engine duration
  if (!dur && state._activeMediaEngine === 'native-video' && DOM.videoEngine && DOM.videoEngine.duration && !isNaN(DOM.videoEngine.duration) && isFinite(DOM.videoEngine.duration) && DOM.videoEngine.duration > 0) {
    dur = DOM.videoEngine.duration;
  }
  // 1. If YouTube Video mode (not native-video), prioritize YouTube duration
  if (!dur && state.deckVisualMode === 'video' && state._activeMediaEngine !== 'native-video' && state.ytReady && state.ytPlayer && typeof state.ytPlayer.getDuration === 'function') {
    dur = state.ytPlayer.getDuration() || 0;
  }
  // 2. If HTML5 audio is active or has a loaded source, use its duration (never fall back to stale YouTube duration)
  const isAudioEngineActive = state._activeMediaEngine === 'audio' || state._activeMediaEngine === 'native-video' ||
    (state.deckVisualMode !== 'video' && DOM.audioEngine && Boolean(DOM.audioEngine.getAttribute('src')));
  if (!dur && DOM.audioEngine && DOM.audioEngine.duration && !isNaN(DOM.audioEngine.duration) && isFinite(DOM.audioEngine.duration) && DOM.audioEngine.duration > 0) {
    dur = DOM.audioEngine.duration;
  }
  // 3. Only read YouTube duration when YouTube is the active engine
  if (!dur && !isAudioEngineActive && state.ytReady && state.ytPlayer && typeof state.ytPlayer.getDuration === 'function') {
    dur = state.ytPlayer.getDuration() || 0;
  }
  // 4. Fallback to track duration string (e.g. "3:45")
  if (!dur && state.currentTrack && state.currentTrack.duration) {
    const parts = (state.currentTrack.duration || '').split(':').map(p => parseInt(p, 10));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      dur = parts[0] * 60 + parts[1];
    }
  }
  return dur || 0;
}
window.getActiveMediaDuration = getActiveMediaDuration;

function getActiveMediaCurrentTime() {
  if (!state._activeTrackConfirmedPlaying && (Date.now() - (state._trackSwitchStartedAt || 0)) < 5000) {
    return Math.max(0, state.currentPlayheadTime || 0);
  }
  if (state._activeMediaEngine === 'none') {
    return Math.max(0, state.currentPlayheadTime || 0);
  }
  if (state._activeMediaEngine === 'native-exo') {
    return Math.max(0, state._nativeExoCurrentTime || state.currentPlayheadTime || 0);
  }
  if (state._activeMediaEngine === 'native-video') {
    if (DOM.videoEngine && DOM.videoEngine.getAttribute('src') && !isNaN(DOM.videoEngine.currentTime)) {
      return Math.max(0, DOM.videoEngine.currentTime || 0);
    }
    return Math.max(0, state.currentPlayheadTime || 0);
  }

  const isLocal = Boolean(state.currentTrack && (
    state.currentTrack.isLocal ||
    String(state.currentTrack.id).startsWith('local_') ||
    state.currentTrack.source === 'local'
  ));

  // 1. Local device tracks strictly use HTML5 audioEngine when engine is locked to 'audio'
  if (isLocal) {
    if (state._activeMediaEngine === 'audio' && DOM.audioEngine && DOM.audioEngine.getAttribute('src') && !isNaN(DOM.audioEngine.currentTime)) {
      return Math.max(0, DOM.audioEngine.currentTime || 0);
    }
    return Math.max(0, state.currentPlayheadTime || 0);
  }

  // 2. HTML5 direct stream locked to 'audio'
  if (state._activeMediaEngine === 'audio') {
    if (DOM.audioEngine && DOM.audioEngine.getAttribute('src') && !isNaN(DOM.audioEngine.currentTime)) {
      return Math.max(0, DOM.audioEngine.currentTime || 0);
    }
    return Math.max(0, state.currentPlayheadTime || 0);
  }

  // 3. YouTube player locked to 'youtube' or video mode — verify loaded video_id matches and player is actively playing/paused!
  if ((state._activeMediaEngine === 'youtube' || state.deckVisualMode === 'video') && state.ytReady && state.ytPlayer && typeof state.ytPlayer.getCurrentTime === 'function') {
    try {
      const currentYtId = safeYtId(state.currentTrack?.ytId || state.currentTrack?.id);
      const loadedYtId = typeof state.ytPlayer.getVideoData === 'function'
        ? safeYtId(state.ytPlayer.getVideoData()?.video_id)
        : null;
      if (currentYtId && loadedYtId === currentYtId) {
        const pState = typeof state.ytPlayer.getPlayerState === 'function' ? state.ytPlayer.getPlayerState() : 1;
        if (pState === 1 || pState === 2 || state._activeTrackConfirmedPlaying) {
          return Math.max(0, state.ytPlayer.getCurrentTime() || 0);
        }
      }
    } catch(e) {}
  }

  return Math.max(0, state.currentPlayheadTime || 0);
}
window.getActiveMediaCurrentTime = getActiveMediaCurrentTime;

function updateSeekbarUI(cur, dur) {
  if (!dur || dur <= 0) return;
  const pct = Math.min(100, Math.max(0, (cur / dur) * 100));
  const timeCurStr = formatTime(cur);
  const timeDurStr = formatTime(dur);

  // Desktop seekbar
  if (DOM.playerSeekFill) DOM.playerSeekFill.style.width = `${pct}%`;
  if (DOM.playerSeekKnob) DOM.playerSeekKnob.style.left = `${pct}%`;
  if (DOM.playerTimeCur) DOM.playerTimeCur.textContent = timeCurStr;
  if (DOM.playerTimeDur) DOM.playerTimeDur.textContent = timeDurStr;

  // Mobile mini seekbar (skip overwriting while user is actively finger-scrubbing)
  if (DOM.playerMobileSeekFill && !window.__kurfaMobileMiniScrubbing) {
    updateMobileMiniArcProgress(pct);
  }

  // Floating PiP window seekbar (always keep updated)
  const floatingPipEl = document.getElementById('kurfa-floating-pip');
  if (floatingPipEl && !floatingPipEl.hidden) {
    const pipSeekFill = document.getElementById('pip-seek-fill');
    const pipHairlineFill = document.getElementById('pip-hairline-fill');
    const pipCur = document.getElementById('pip-time-cur');
    const pipDur = document.getElementById('pip-time-dur');
    if (pipSeekFill) pipSeekFill.style.width = `${pct}%`;
    if (pipHairlineFill) pipHairlineFill.style.width = `${pct}%`;
    if (pipCur) pipCur.textContent = timeCurStr;
    if (pipDur) pipDur.textContent = timeDurStr;
  }

  // Document PiP window seekbar (only if active)
  if (pipWindowInstance && pipWindowInstance.document) {
    const extSeekFill = pipWindowInstance.document.getElementById('pip-ext-seek-fill');
    const extHairFill = pipWindowInstance.document.getElementById('pip-ext-hairline-fill');
    const extCur = pipWindowInstance.document.getElementById('pip-ext-cur');
    const extDur = pipWindowInstance.document.getElementById('pip-ext-dur');
    if (extSeekFill) extSeekFill.style.width = `${pct}%`;
    if (extHairFill) extHairFill.style.width = `${pct}%`;
    if (extCur) extCur.textContent = timeCurStr;
    if (extDur) extDur.textContent = timeDurStr;
  }

  // Desktop Native Mini Player seekbar/track sync (throttled every 600ms)
  try {
    if (window.__kurfaDesktopMiniPlayerOpen && typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
      const nowMs = Date.now();
      if (!window._lastDesktopMiniSyncAt || (nowMs - window._lastDesktopMiniSyncAt) >= 600) {
        window._lastDesktopMiniSyncAt = nowMs;
        syncDesktopMiniPlayerState(cur, dur);
      }
    }
  } catch (_) {}

  // Android MediaSession timer & progress bar sync (immediate on track change, throttled every 4s)
  try {
    if (state.isPlaying && typeof isAndroidNativeEngine === 'function' && isAndroidNativeEngine() &&
        window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.updatePlaybackTiming === 'function') {
      const nowMs = Date.now();
      const tid = state.currentTrack ? (state.currentTrack.id || '') : '';
      if (window._lastAndroidTimingTrackId !== tid || !window._lastAndroidTimingSyncAt || (nowMs - window._lastAndroidTimingSyncAt) >= 4000) {
        window._lastAndroidTimingTrackId = tid;
        window._lastAndroidTimingSyncAt = nowMs;
        window.KurfaAndroidBridge.updatePlaybackTiming(Math.floor(cur || 0), Math.floor(dur || 0));
      }
    }
  } catch (_) {}
}
window.updateSeekbarUI = updateSeekbarUI;

function syncLyricsToTime(cur) {
  if (typeof syncLyricsWithTime === 'function') {
    syncLyricsWithTime(cur);
  }
}
window.syncLyricsToTime = syncLyricsToTime;

function startSeekbarTicker() {
  if (seekbarRaf) {
    try { clearTimeout(seekbarRaf); cancelAnimationFrame(seekbarRaf); } catch (_) {}
    seekbarRaf = null;
  }
  if (!state.isPlaying || (typeof document !== 'undefined' && document.hidden)) return;

  function tick() {
    if (!state.isPlaying || (typeof document !== 'undefined' && document.hidden)) {
      seekbarRaf = null;
      return;
    }

    if (!state.isSeeking) {
      const now = performance.now();
      const adCheckInterval = 700;
      lastSeekbarTickTime = now;
      if (state._activeMediaEngine === 'youtube' && now - lastAdCheckTime >= adCheckInterval) {
        lastAdCheckTime = now;
        checkAndHandleAdPlayback();
      }
      const cur = getActiveMediaCurrentTime();
      const dur = getActiveMediaDuration();

      if (dur > 0) {
        if (cur > 0) {
          state.currentPlayheadTime = cur;
        }
        updateSeekbarUI(cur, dur);
        if (typeof checkSponsorBlockSkip === 'function') checkSponsorBlockSkip(cur);
        if (typeof checkCrossfadeTick === 'function') checkCrossfadeTick(cur, dur);
        if (state.currentTab === 'calma-listeleri') {
          syncLyricsWithTime(cur);
          if (typeof LyricsClock !== 'undefined' && typeof LyricsClock.syncState === 'function') {
            LyricsClock.syncState();
          }
        }
        if ((cur >= 4 || (dur - cur) <= 15) && typeof prefetchNextTrackStream === 'function') {
          prefetchNextTrackStream();
        }
      }
    }
    seekbarRaf = setTimeout(tick, 220);
  }

  tick();
}

function initSeekbarInteractions() {
  if (!DOM.playerSeekTrack) return;

  function calculateSeekPercentage(e) {
    const rect = DOM.playerSeekTrack.getBoundingClientRect();
    if (!rect.width || rect.width <= 0) return 0;
    const clientX = getEventClientX(e);
    const clickX = clientX - rect.left;
    return Math.max(0, Math.min(1, clickX / rect.width));
  }

  function applySeek(pct, commit = false) {
    if (DOM.playerSeekFill) DOM.playerSeekFill.style.width = `${pct * 100}%`;
    if (DOM.playerSeekKnob) DOM.playerSeekKnob.style.left = `${pct * 100}%`;
    if (DOM.playerMobileSeekFill) updateMobileMiniArcProgress(pct * 100);

    const dur = getActiveMediaDuration();
    const seekTime = Math.max(0, Math.min(dur, pct * dur));
    if (DOM.playerTimeCur) DOM.playerTimeCur.textContent = formatTime(seekTime);

    if (commit) {
      seekPlaybackToSeconds(seekTime);
    }
  }

  const onPointerDown = (e) => {
    state.isSeeking = true;
    DOM.playerSeekTrack.classList.add('dragging');
    const pct = calculateSeekPercentage(e);
    applySeek(pct, false);

    const onPointerMove = (moveEvent) => {
      if (!state.isSeeking) return;
      const movePct = calculateSeekPercentage(moveEvent);
      applySeek(movePct, false);
    };

    const onPointerUp = (upEvent) => {
      if (state.isSeeking) {
        state.isSeeking = false;
        DOM.playerSeekTrack.classList.remove('dragging');
        const finalPct = calculateSeekPercentage(upEvent);
        applySeek(finalPct, true);
      }
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
    };

    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);
  };

  DOM.playerSeekTrack.addEventListener('mousedown', onPointerDown);
  DOM.playerSeekTrack.addEventListener('touchstart', onPointerDown, { passive: true });
}

function initVolumeInteractions() {
  if (!DOM.playerVolTrack) return;

  function calculateVolPercentage(e) {
    const rect = DOM.playerVolTrack.getBoundingClientRect();
    if (!rect.width || rect.width <= 0) return state.volume;
    const clientX = getEventClientX(e);
    const clickX = clientX - rect.left;
    return Math.max(0, Math.min(1, clickX / rect.width));
  }

  const onPointerDown = (e) => {
    state.isScrubbingVol = true;
    DOM.playerVolTrack.classList.add('dragging');
    const vol = calculateVolPercentage(e);
    setPlayerVolume(vol);

    const onPointerMove = (moveEvent) => {
      if (!state.isScrubbingVol) return;
      const moveVol = calculateVolPercentage(moveEvent);
      setPlayerVolume(moveVol);
    };

    const onPointerUp = () => {
      state.isScrubbingVol = false;
      DOM.playerVolTrack.classList.remove('dragging');
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('mouseup', onPointerUp);
      window.removeEventListener('touchmove', onPointerMove);
      window.removeEventListener('touchend', onPointerUp);
    };

    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);
  };

  DOM.playerVolTrack.addEventListener('mousedown', onPointerDown);
  DOM.playerVolTrack.addEventListener('touchstart', onPointerDown, { passive: true });

  const onVolumeWheel = (e) => {
    e.preventDefault();
    const delta = e.deltaY < 0 ? 0.05 : -0.05;
    setPlayerVolume((state.volume || 0) + delta);
  };
  DOM.playerVolTrack.addEventListener('wheel', onVolumeWheel, { passive: false });
  if (DOM.btnVolumeIcon) {
    DOM.btnVolumeIcon.addEventListener('wheel', onVolumeWheel, { passive: false });
  }
}

function applyEffectiveVolume() {
  const baseVol = state.isMuted ? 0 : Math.max(0, Math.min(1, Number(state.volume ?? 0.8)));
  const mult = (typeof getEffectiveVolumeMultiplier === 'function') ? getEffectiveVolumeMultiplier() : 1;
  const eff = Math.max(0, Math.min(1, baseVol * mult));

  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.setVolume === 'function') {
    try {
      if (eff === 0 && typeof state.ytPlayer.mute === 'function') {
        state.ytPlayer.mute();
      } else if (eff > 0 && !state._isAdMuted && typeof state.ytPlayer.unMute === 'function') {
        state.ytPlayer.unMute();
      }
      state.ytPlayer.setVolume(Math.round(eff * 100));
    } catch(e) {}
  }
  if (DOM.audioEngine) {
    if (typeof KurfaDSP !== 'undefined' && KurfaDSP.isConnected && KurfaDSP.masterFadeGainNode && KurfaDSP.ctx && state._activeMediaEngine === 'audio') {
      DOM.audioEngine.volume = baseVol;
      try {
        KurfaDSP.masterFadeGainNode.gain.setTargetAtTime(mult, KurfaDSP.ctx.currentTime, 0.012);
      } catch (_) {}
    } else {
      DOM.audioEngine.volume = eff;
    }
  }
  if (DOM.videoEngine) {
    DOM.videoEngine.muted = (eff === 0);
    if (typeof KurfaDSP !== 'undefined' && KurfaDSP.isConnected && KurfaDSP.masterFadeGainNode && KurfaDSP.ctx && state._activeMediaEngine === 'native-video') {
      DOM.videoEngine.volume = baseVol;
      try {
        KurfaDSP.masterFadeGainNode.gain.setTargetAtTime(mult, KurfaDSP.ctx.currentTime, 0.012);
      } catch (_) {}
    } else {
      DOM.videoEngine.volume = eff;
    }
  }
  const exo = getAndroidExoBridge();
  if (exo && typeof exo.setVolumeNativeExo === 'function') {
    try { exo.setVolumeNativeExo(eff); } catch (_) {}
  }
}

function setPlayerVolume(vol) {
  const numericVol = (typeof vol === 'number' && !isNaN(vol)) ? vol : 0.8;
  state.volume = Math.max(0, Math.min(1, numericVol));
  state.isMuted = state.volume === 0;
  safeSetStorage('kurfa_vol', state.volume.toString());

  if (DOM.playerVolFill) DOM.playerVolFill.style.width = `${state.volume * 100}%`;
  const knob = DOM.playerVolTrack ? DOM.playerVolTrack.querySelector('.vol-knob') : null;
  if (knob) knob.style.left = `${state.volume * 100}%`;

  applyEffectiveVolume();

  if (DOM.btnVolumeIcon) {
    const icon = DOM.btnVolumeIcon.querySelector('.material-symbols-outlined');
    if (icon) {
      if (state.volume === 0) icon.textContent = 'volume_off';
      else if (state.volume < 0.5) icon.textContent = 'volume_down';
      else icon.textContent = 'volume_up';
    }
  }
  if (typeof syncFloatingPipUI === 'function') {
    syncFloatingPipUI();
  }
  if (typeof syncDesktopMiniPlayerState === 'function' && window.__kurfaDesktopMiniPlayerOpen) {
    syncDesktopMiniPlayerState(getActiveMediaCurrentTime() || 0, getActiveMediaDuration() || 0);
  }
}

function toggleMute() {
  if (state.isMuted) {
    const prev = safeGetFloat('kurfa_prev_vol', 0.8);
    setPlayerVolume(prev > 0 ? prev : 0.8);
    showToast(t('toast.unmuted'));
  } else {
    safeSetStorage('kurfa_prev_vol', state.volume.toString());
    setPlayerVolume(0);
    showToast(t('toast.muted'));
  }
}

// =============================================================================
// 9. REAL SYNCHRONIZED KARAOKE LYRICS v3 (60 FPS + WORD-BY-WORD + DUET + SHARE)
// =============================================================================

function cleanLyricsQuery(title, artist) {
  let rawT = (title || '')
    .replace(/\s*[\(\[]\s*(?:dedub\s*sessions?|sessions?|akustik|acoustic|live|canl\u0131|official(?:\s*(?:music)?\s*(?:video|audio))?|video\s*klip|klip|lyric\s*video|lyrics|visualizer|hd|4k|8k|feat\.?|ft\.?|with\b|prod\.?)[^\)\]]*[\)\]]/gi, '')
    .replace(/\s*\[[^\]]*\]/g, '')
    .replace(/\s*[\u2013\u2014-]\s*(?:official|klip|video|audio|live|akustik|acoustic|sessions?|remix|topic).*$/gi, '')
    .replace(/\s+\|\s*.*$/g, '')
    .replace(/["']/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  let rawA = (artist || '')
    .replace(/\s*-\s*topic/gi, '')
    .replace(/\b(netd\s*m\u00fczik|netd\s*muzik|netd|poll\s*production|dmc|do\u011fan\s*music|muzikplay|avrupa\s*m\u00fczik|dokuzsekiz|mahzen\s*media|vevo|official|music|records|production)\b/gi, ' ')
    .replace(/["']/g, '')
    .replace(/^\s*(?:ve|&|and)\s+|\s+(?:ve|&|and)\s*$/gi, '')
    .replace(/\s+/g, ' ')
    .trim();

  let parsedArtist = rawA;
  let parsedTitle = rawT;
  const dashSplit = rawT.split(/\s+[\u2013\u2014-]\s+/).map(p => p.trim()).filter(Boolean);
  if (dashSplit.length >= 2 && dashSplit[0].length >= 2 && dashSplit[1].length >= 2) {
    parsedArtist = dashSplit[0];
    parsedTitle = dashSplit.slice(1).join(' - ');
  }

  const firstArtist = parsedArtist.split(/\s+(?:x|X|ve|&|,|feat\.?|ft\.?|with)\s+|,\s*/)[0]?.trim() || parsedArtist;
  return { cleanT: parsedTitle, cleanA: parsedArtist, firstA: firstArtist, rawT, rawA };
}

function setLyricsOffsetControlsVisible(visible) {
  const el = document.getElementById('lyrics-offset-controls');
  if (el) {
    el.classList.toggle('hidden', !visible);
  }
  const shareBtn = document.getElementById('btn-lyrics-share-mode');
  if (shareBtn) {
    shareBtn.classList.toggle('hidden', !visible);
  }
  if (!visible) {
    const hint = document.getElementById('lyrics-intro-diff-hint');
    if (hint) {
      hint.classList.add('hidden');
      hint.classList.remove('flex');
    }
    if (typeof cancelLyricsShareSelectMode === 'function') {
      cancelLyricsShareSelectMode();
    }
  }
}

function updateLyricsOffsetUI() {
  const display = document.getElementById('lyrics-offset-display');
  if (display) {
    const off = state.lyricsOffset || 0;
    display.textContent = (off > 0 ? '+' : '') + off.toFixed(1) + 's';
  }
}

function setExactLyricsOffset(offset) {
  if (!state.currentTrack) return;
  state.lyricsOffset = Math.round(offset * 10) / 10;
  if (state.currentTrack.id) {
    safeSetStorage('kurfa_offset_' + state.currentTrack.id, state.lyricsOffset.toString());
  }
  updateLyricsOffsetUI();
  showToast(`S\u00f6z Senkronu: ${(state.lyricsOffset > 0 ? '+' : '') + state.lyricsOffset.toFixed(1)}s`, 'success');
  syncLyricsWithTime(getActiveMediaCurrentTime(), false);
}
window.setExactLyricsOffset = setExactLyricsOffset;

function promptManualOffset() {
  if (!state.currentTrack) return;
  const current = state.lyricsOffset || 0;
  const val = prompt('\u015eark\u0131 s\u00f6z\u00fc senkron fark\u0131n\u0131 girin (\u00d6rnek: -41 veya +2.5):', current.toFixed(1));
  if (val !== null) {
    const num = parseFloat(val.replace(',', '.'));
    if (!isNaN(num)) {
      setExactLyricsOffset(num);
    }
  }
}
window.promptManualOffset = promptManualOffset;

function syncLineToCurrentPlayback(line) {
  if (!state.currentTrack || !line || typeof line.time !== 'number') return;
  const cur = getActiveMediaCurrentTime();
  if (!cur) {
    showToast('\u00d6nce \u015fark\u0131y\u0131 ba\u015flat\u0131n', 'info');
    return;
  }
  const newOffset = Math.round((line.time - cur) * 10) / 10;
  setExactLyricsOffset(newOffset);
}
window.syncLineToCurrentPlayback = syncLineToCurrentPlayback;

function purgeBogusLyricsOffsets() {
  try {
    if (localStorage.getItem('kurfa_offset_purge_v1') === '1') return;
    const toDelete = [];
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('kurfa_offset_')) {
        const v = parseFloat(localStorage.getItem(k) || '0');
        if (!Number.isFinite(v) || Math.abs(v) >= 10) {
          toDelete.push(k);
        }
      }
    }
    toDelete.forEach((k) => {
      try { localStorage.removeItem(k); } catch (_) {}
    });
    localStorage.setItem('kurfa_offset_purge_v1', '1');
  } catch (_) {}
}

function syncActiveLineToPlayback() {
  if (!state.currentTrack) return;
  if (!state.activeLyrics || state.activeLyrics.length === 0) {
    showToast(getAppLanguage() === 'en' ? 'No synced lyrics found' : 'Senkronize s\u00f6z bulunamad\u0131', 'info');
    return;
  }
  state.lyricsOffset = 0;
  try {
    if (state.currentTrack.id) {
      localStorage.removeItem('kurfa_offset_' + state.currentTrack.id);
    }
  } catch (_) {}
  updateLyricsOffsetUI();
  setLyricsAutoScrollPaused(false);
  const cur = getActiveMediaCurrentTime();
  if (typeof LyricsClock !== 'undefined' && typeof LyricsClock.reset === 'function') {
    LyricsClock.reset(cur);
  }
  syncLyricsWithTime(cur, true);
  showToast(getAppLanguage() === 'en' ? 'Lyrics synced to playback (0.0s)' : 'S\u00f6zler \u015fark\u0131yla e\u015flendi (0.0s)', 'success');
}
window.syncActiveLineToPlayback = syncActiveLineToPlayback;

function adjustLyricsOffset(delta) {
  if (!state.currentTrack) return;
  if (delta === 0) {
    setExactLyricsOffset(0);
  } else {
    const next = Math.round(((state.lyricsOffset || 0) + delta) * 10) / 10;
    setExactLyricsOffset(next);
  }
}
window.adjustLyricsOffset = adjustLyricsOffset;

let lyricsAbortController = null;
let lyricsRequestToken = 0;
let lyricsLoadedTrackId = null;
let lyricsLoadedPlaybackToken = -1;
let lyricsAutoScrollPaused = false;
let _lyricsLineEls = [];
let _lyricsWordElGroups = [];
let _lyricsLastWordIndex = -1;
let _lyricsShareSelectMode = false;
let _lyricsShareSelectedIndices = [];
let _lyricsScrollResetRafId = null;

function setLyricsAutoScrollPaused(paused) {
  lyricsAutoScrollPaused = Boolean(paused);
  const btn = document.getElementById('btn-lyrics-resync');
  if (btn) {
    btn.classList.toggle('hidden', !lyricsAutoScrollPaused || !Array.isArray(state.activeLyrics) || state.activeLyrics.length === 0);
  }
}

function resetLyricsScrollPosition() {
  state.currentLyricIndex = -1;
  _lyricsLastWordIndex = -1;
  setLyricsAutoScrollPaused(false);
  if (_lyricsScrollResetRafId && typeof cancelAnimationFrame === 'function') {
    cancelAnimationFrame(_lyricsScrollResetRafId);
    _lyricsScrollResetRafId = null;
  }
  const box = (typeof DOM !== 'undefined' && DOM.karaokeLyricsBox) || document.getElementById('karaoke-lyrics-box');
  if (box) {
    try {
      box.style.scrollBehavior = 'auto';
      box.scrollTop = 0;
      if (typeof box.scrollTo === 'function') {
        box.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    } catch (_) {}
    if (typeof requestAnimationFrame === 'function') {
      const expectTok = currentPlaybackToken;
      _lyricsScrollResetRafId = requestAnimationFrame(() => {
        _lyricsScrollResetRafId = null;
        if (expectTok !== currentPlaybackToken) return;
        if (state.currentLyricIndex <= 0) {
          try {
            box.style.scrollBehavior = 'auto';
            box.scrollTop = 0;
            if (typeof box.scrollTo === 'function') {
              box.scrollTo({ top: 0, left: 0, behavior: 'auto' });
            }
          } catch (_) {}
        }
      });
    }
  }
}

function resumeLyricsAutoScroll() {
  setLyricsAutoScrollPaused(false);
  syncLyricsWithTime(getActiveMediaCurrentTime(), true);
}
window.resumeLyricsAutoScroll = resumeLyricsAutoScroll;

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('karaoke-lyrics-box');
    if (box) {
      const pauseAutoScroll = () => {
        if (Array.isArray(state.activeLyrics) && state.activeLyrics.length > 0 && !lyricsAutoScrollPaused) {
          setLyricsAutoScrollPaused(true);
        }
      };
      box.addEventListener('wheel', pauseAutoScroll, { passive: true });
      box.addEventListener('touchmove', pauseAutoScroll, { passive: true });
    }
  });
}

function normalizeLyricsResponsePayload(rawData, track) {
  if (!rawData || typeof rawData !== 'object') return null;

  // Case 1: v3 structured lines array (ONLY if truly synced with real non-zero timestamps!)
  if (rawData.synced !== false && Array.isArray(rawData.lines) && rawData.lines.length > 0) {
    const parsed = [];
    for (let i = 0; i < rawData.lines.length; i++) {
      const item = rawData.lines[i];
      if (!item) continue;
      const t = Number(item.time);
      if (!Number.isFinite(t) || t < 0) continue;
      const text = String(item.text || '').trim();
      if (!text || isLrcMetaLine(text, t, track)) continue;

      let words = null;
      if (Array.isArray(item.words) && item.words.length > 0) {
        words = item.words
          .map((w) => {
            const wt = Number(w && w.time);
            const we = Number(w && w.endTime);
            const wtxt = String((w && w.text) || '').trim();
            if (!wtxt || !Number.isFinite(wt)) return null;
            return {
              time: Math.max(0, wt),
              endTime: Number.isFinite(we) && we > wt ? we : wt + 0.45,
              text: wtxt
            };
          })
          .filter(Boolean);
        if (words.length === 0) words = null;
      }

      parsed.push({
        time: t,
        endTime: Number.isFinite(Number(item.endTime)) && Number(item.endTime) > t ? Number(item.endTime) : null,
        text,
        bg: item.bg ? String(item.bg).trim() : '',
        voice: item.voice ? String(item.voice).trim().toLowerCase() : '',
        words
      });
    }
    if (parsed.length > 0 && parsed.some(l => l.time > 0)) {
      return {
        synced: true,
        wordSynced: Boolean(rawData.wordSynced || parsed.some(l => l.words && l.words.length > 0)),
        lines: finalizeParsedLyricsLines(parsed),
        provider: String(rawData.provider || rawData.source || 'v3'),
        duration: Number(rawData.duration) || 0
      };
    }
  }

  // Case 2: LRC / ELRC string in syncedLyrics or lrc
  const rawLrc = rawData.syncedLyrics || rawData.lrc || '';
  if (rawLrc && typeof rawLrc === 'string') {
    const parsed = parseLyricsPayload({ syncedLyrics: rawLrc }, track);
    if (parsed.length > 0) {
      return {
        synced: true,
        wordSynced: parsed.some(l => l.words && l.words.length > 0),
        lines: parsed,
        provider: String(rawData.provider || rawData.source || 'lrc'),
        duration: Number(rawData.duration) || 0
      };
    }
  }

  // Case 3: Plain text
  const plainText = rawData.plain || rawData.plainLyrics || (!rawData.synced && typeof rawData.lyrics === 'string' ? rawData.lyrics : '');
  if (plainText && typeof plainText === 'string' && plainText.trim()) {
    return {
      synced: false,
      wordSynced: false,
      plain: plainText.trim(),
      provider: String(rawData.provider || rawData.source || 'plain'),
      duration: Number(rawData.duration) || 0
    };
  }
  return null;
}

function finalizeParsedLyricsLines(rawLines) {
  if (!Array.isArray(rawLines) || rawLines.length === 0) return [];
  const sorted = [...rawLines].filter(l => l && !l.isInterlude).sort((a, b) => a.time - b.time);
  if (sorted.length === 0) return [];
  const out = [];

  if (sorted[0].time >= 4.0) {
    out.push({
      time: 0.25,
      endTime: Math.max(0.5, sorted[0].time - 0.1),
      text: '...',
      isInterlude: true
    });
  }

  for (let i = 0; i < sorted.length; i++) {
    const cur = { ...sorted[i] };
    const next = sorted[i + 1];
    if (!cur.endTime || cur.endTime <= cur.time) {
      if (cur.words && cur.words.length > 0) {
        cur.endTime = Math.max(cur.time + 0.5, cur.words[cur.words.length - 1].endTime);
      } else if (next) {
        cur.endTime = Math.min(next.time - 0.05, cur.time + 5.5);
      } else {
        cur.endTime = cur.time + 4.5;
      }
    }
    if (cur.words && cur.words.length > 0) {
      for (let w = 0; w < cur.words.length; w++) {
        const wItem = cur.words[w];
        const wNext = cur.words[w + 1];
        if (!wItem.endTime || wItem.endTime <= wItem.time) {
          wItem.endTime = wNext ? Math.max(wItem.time + 0.08, wNext.time) : Math.max(wItem.time + 0.25, cur.endTime);
        }
      }
    } else if (cur.text) {
      // Synthesize natural proportional word-fill spans for line-synced lyrics so every song gets smooth progressive glow
      const tokens = String(cur.text).trim().split(/\s+/).filter(Boolean);
      if (tokens.length > 0) {
        const rawSpan = Math.max(0.6, cur.endTime - cur.time);
        // Stretch word sweep smoothly across ~94% of normal sung line duration so glow never finishes ahead of vocal
        const vocalSpan = rawSpan <= 7.0
          ? rawSpan * 0.94
          : Math.min(rawSpan * 0.88, Math.max(2.2, cur.text.length * 0.125));
        const weights = tokens.map(tok => Math.max(1.5, tok.replace(/[,.;!?'"()]/g, '').length + (/[,.!?]$/.test(tok) ? 1.5 : 0)));
        const totalW = weights.reduce((a, b) => a + b, 0) || tokens.length;
        let cursor = cur.time;
        cur.words = tokens.map((tok, wi) => {
          const slice = (weights[wi] / totalW) * vocalSpan;
          const wStart = cursor;
          const wEnd = wStart + Math.max(0.08, slice);
          cursor = wEnd;
          return { time: wStart, endTime: wEnd, text: tok };
        });
      }
    }
    out.push(cur);

    // Insert 3-dot instrumental interlude when there is a >= 4.8s silent gap before the next line
    if (next && (next.time - cur.endTime) >= 4.8) {
      out.push({
        time: cur.endTime + 0.15,
        endTime: next.time - 0.1,
        text: '...',
        isInterlude: true
      });
    }
  }
  return out;
}

function formatLyricsProviderLabel(provider, wordSynced) {
  const isEn = getAppLanguage() === 'en';
  const pMap = {
    betterlyrics: 'Apple / BetterLyrics',
    simpmusic: 'SimpMusic',
    lrclib: 'LRCLIB',
    ytmusic: 'YouTube Music',
    local: isEn ? 'Local .LRC' : 'Yerel .LRC'
  };
  const key = String(provider || '').toLowerCase();
  const base = pMap[key] || (provider ? String(provider) : 'Kurfa Lyrics');
  const pref = (typeof state !== 'undefined' && state.lyricsPreferredProvider && state.lyricsPreferredProvider !== 'auto')
    ? ` (${state.lyricsPreferredProvider.toUpperCase()})`
    : '';
  if (wordSynced) {
    return `${base} \u2022 ${t('lyrics.word_synced')}${pref}`;
  }
  return `${base}${pref}`;
}

function cycleLyricsProvider() {
  const order = ['auto', 'lrclib', 'simpmusic', 'betterlyrics'];
  const cur = (state && state.lyricsPreferredProvider) ? String(state.lyricsPreferredProvider) : 'auto';
  const next = order[(order.indexOf(cur) + 1) % order.length];
  if (state) state.lyricsPreferredProvider = next;
  safeSetStorage('kurfa_lyrics_provider', next);
  const labelMap = {
    auto: getAppLanguage() === 'en' ? 'Auto (All Sources)' : 'Otomatik Kaynak',
    lrclib: 'LRCLIB (lrclib.net)',
    simpmusic: 'SimpMusic',
    betterlyrics: 'Apple / BetterLyrics'
  };
  showToast(getAppLanguage() === 'en' ? `Lyrics source: ${labelMap[next]}` : `S\u00f6z kayna\u011f\u0131: ${labelMap[next]}`, 'info');
  if (state && state.currentTrack && typeof updateLyricsDisplay === 'function') {
    updateLyricsDisplay();
  }
}
window.cycleLyricsProvider = cycleLyricsProvider;

async function updateLyricsDisplay() {
  const reqToken = ++lyricsRequestToken;
  const targetPlaybackToken = currentPlaybackToken;
  if (lyricsAbortController) {
    try { lyricsAbortController.abort(); } catch (e) {}
  }
  lyricsAbortController = (typeof AbortController !== 'undefined') ? new AbortController() : null;
  const signal = lyricsAbortController ? lyricsAbortController.signal : undefined;

  state.activeLyrics = [];
  state.currentLyricIndex = -1;
  _lyricsLineEls = [];
  _lyricsWordElGroups = [];
  _lyricsLastWordIndex = -1;
  lyricsLoadedTrackId = null;
  lyricsLoadedPlaybackToken = -1;
  resetLyricsScrollPosition();
  if (typeof LyricsClock !== 'undefined') LyricsClock.stop();

  if (!DOM.deckLyricsLines) return;

  const track = state.currentTrack;
  if (!track) {
    renderLyricsEmpty(null);
    return;
  }

  // Restore track-specific offset (ignore any stale extreme offset >= 10s)
  if (typeof purgeBogusLyricsOffsets === 'function') purgeBogusLyricsOffsets();
  const savedOffset = track.id ? localStorage.getItem('kurfa_offset_' + track.id) : null;
  const parsedOffset = savedOffset !== null ? parseFloat(savedOffset) : 0;
  state.lyricsOffset = (!isNaN(parsedOffset) && Math.abs(parsedOffset) < 10) ? parsedOffset : 0;
  updateLyricsOffsetUI();

  const initialSyncTime = () => {
    if (!state._activeTrackConfirmedPlaying && (Date.now() - (state._trackSwitchStartedAt || 0)) < 5000) {
      return 0;
    }
    return getActiveMediaCurrentTime();
  };

  // Local device files: try Windows local sidecar lyrics endpoint first
  if (isTrackLocal(track)) {
    const localOrigin = (typeof getWindowsDesktopLocalOrigin === 'function' ? getWindowsDesktopLocalOrigin() : '') ||
      ((window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') ? window.location.origin : '');
    const localPath = track.filePath || track.path || track.streamUrl || '';
    if (localOrigin && localPath) {
      try {
        const localRes = await fetch(`${localOrigin}/__kurfa_local_lyrics__?path=${encodeURIComponent(localPath)}`, { signal });
        if (reqToken !== lyricsRequestToken || targetPlaybackToken !== currentPlaybackToken) return;
        if (localRes.ok) {
          const localJson = await localRes.json();
          const normLocal = normalizeLyricsResponsePayload(localJson, track);
          if (normLocal && normLocal.synced && normLocal.lines.length > 0) {
            lyricsLoadedTrackId = track.id || 'local';
            lyricsLoadedPlaybackToken = targetPlaybackToken;
            const badge = formatLyricsProviderLabel('local', normLocal.wordSynced);
            renderLyricsList(normLocal.lines, badge, normLocal);
            syncLyricsWithTime(initialSyncTime(), true);
            return;
          } else if (normLocal && normLocal.plain) {
            lyricsLoadedTrackId = track.id || 'local';
            lyricsLoadedPlaybackToken = targetPlaybackToken;
            renderPlainLyrics(normLocal.plain, formatLyricsProviderLabel('local', false));
            return;
          }
        }
      } catch (e) {
        if (e && e.name === 'AbortError') return;
      }
    }
    setLyricsOffsetControlsVisible(false);
    lyricsLoadedTrackId = track.id || 'local';
    lyricsLoadedPlaybackToken = targetPlaybackToken;
    if (DOM.lyricsStatusLabel) DOM.lyricsStatusLabel.textContent = getAppLanguage() === 'en' ? 'Local File' : 'Yerel Dosya';
    if (DOM.lyricsSourceBadge) DOM.lyricsSourceBadge.textContent = '';
    DOM.deckLyricsLines.innerHTML = `
      <div class="py-8 px-4 flex flex-col items-center justify-center text-center gap-2.5 text-on-surface-variant rounded-2xl bg-surface-container-low/50 border border-surface-container/60">
        <div class="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
          <span class="material-symbols-outlined text-[24px]" aria-hidden="true">music_off</span>
        </div>
        <div>
          <p class="text-sm font-bold text-on-surface">${escapeHtml(t('lyrics.local_no_lyrics'))}</p>
          <p class="text-xs text-on-surface-variant mt-1 max-w-xs leading-relaxed">${escapeHtml(t('lyrics.local_no_lyrics_desc'))}</p>
        </div>
      </div>
    `;
    return;
  }

  const cleanVid = safeYtId(track.ytId || track.id) || '';
  let storedProv = 'auto';
  try { storedProv = localStorage.getItem('kurfa_lyrics_provider') || 'auto'; } catch (_) {}
  const preferredProv = (state && state.lyricsPreferredProvider) || storedProv || 'auto';
  if (state) state.lyricsPreferredProvider = preferredProv;
  const cacheKey = `v8_${preferredProv}_${cleanVid || track.id || ''}_${track.title || ''}_${track.artist || ''}`;

  // Memory cache
  if (lyricsMemoryCache.has(cacheKey)) {
    const cached = lyricsMemoryCache.get(cacheKey);
    lyricsLoadedTrackId = track.id || cacheKey;
    lyricsLoadedPlaybackToken = targetPlaybackToken;
    if (cached.synced && Array.isArray(cached.lines) && cached.lines.some(l => Number(l.time) > 0)) {
      renderLyricsList(cached.lines, cached.source, cached);
      syncLyricsWithTime(initialSyncTime(), true);
    } else if (cached.plain) {
      renderPlainLyrics(cached.plain, cached.source);
    } else {
      renderLyricsEmpty(track);
    }
    return;
  }

  setLyricsOffsetControlsVisible(false);
  if (DOM.lyricsStatusLabel) DOM.lyricsStatusLabel.textContent = getAppLanguage() === 'en' ? 'Searching Lyrics...' : '\u015eark\u0131 S\u00f6zleri Aran\u0131yor...';
  if (DOM.lyricsSourceBadge) DOM.lyricsSourceBadge.textContent = '';
  DOM.deckLyricsLines.innerHTML = `
    <div class="py-8 flex flex-col items-center justify-center gap-2 text-on-surface-variant">
      <span class="material-symbols-outlined text-[32px] animate-spin text-primary">progress_activity</span>
      <p class="text-xs font-semibold">${escapeHtml(getAppLanguage() === 'en' ? 'Fetching synced lyrics...' : 'Senkronize \u015fark\u0131 s\u00f6zleri getiriliyor...')}</p>
    </div>
  `;

  const { cleanT, cleanA, firstA, rawT } = cleanLyricsQuery(track.title, track.artist);
  const trackDurationSec = Math.round((typeof parseDurationToSec === 'function' ? parseDurationToSec(track.duration) : 0) || getActiveMediaDuration() || 0);

  function saveLyricsToLocalStorage(entry) {
    try {
      const raw = localStorage.getItem('kurfa_lyrics_cache_v5');
      const store = (raw ? JSON.parse(raw) : {}) || {};
      const keys = Object.keys(store);
      if (keys.length >= 40) delete store[keys[0]];
      store[cacheKey] = { ...entry, expiresAt: Date.now() + 7 * 24 * 3600 * 1000 };
      localStorage.setItem('kurfa_lyrics_cache_v5', JSON.stringify(store));
    } catch (e) {}
  }

  // Persistent localStorage cache
  try {
    localStorage.removeItem('kurfa_lyrics_cache_v2');
    localStorage.removeItem('kurfa_lyrics_cache_v4');
    const raw = localStorage.getItem('kurfa_lyrics_cache_v5');
    const store = raw ? JSON.parse(raw) : null;
    const saved = store && store[cacheKey];
    if (saved && saved.expiresAt > Date.now()) {
      lyricsLoadedTrackId = track.id || cacheKey;
      lyricsLoadedPlaybackToken = targetPlaybackToken;
      if (saved.synced && Array.isArray(saved.lines) && saved.lines.some(l => Number(l.time) > 0)) {
        lyricsMemoryCache.set(cacheKey, saved);
        renderLyricsList(saved.lines, saved.source || 'Kurfa Lyrics v4', saved);
        syncLyricsWithTime(initialSyncTime(), true);
        return;
      } else if (saved.plain) {
        lyricsMemoryCache.set(cacheKey, saved);
        renderPlainLyrics(saved.plain, saved.source || 'Kurfa Lyrics');
        return;
      }
    }
  } catch (e) {}

  const applyNormalizedResult = (norm) => {
    if (!norm || reqToken !== lyricsRequestToken || targetPlaybackToken !== currentPlaybackToken) return false;
    lyricsLoadedTrackId = track.id || cacheKey;
    lyricsLoadedPlaybackToken = targetPlaybackToken;
    const badge = formatLyricsProviderLabel(norm.provider, norm.wordSynced);
    if (norm.synced && norm.lines.length > 0 && norm.lines.some(l => Number(l.time) > 0)) {
      const entry = { synced: true, wordSynced: norm.wordSynced, lines: norm.lines, source: badge, duration: norm.duration || trackDurationSec };
      lyricsMemoryCache.set(cacheKey, entry);
      saveLyricsToLocalStorage(entry);
      renderLyricsList(norm.lines, badge, entry);
      syncLyricsWithTime(initialSyncTime(), true);
      return true;
    } else if (norm.plain) {
      const entry = { synced: false, plain: norm.plain, source: badge };
      lyricsMemoryCache.set(cacheKey, entry);
      saveLyricsToLocalStorage(entry);
      renderPlainLyrics(norm.plain, badge);
      return true;
    }
    return false;
  };

  // 1. Primary: Worker /api/lyrics/v3 (respects provider preference: Auto | LRCLIB | SimpMusic | BetterLyrics)
  const v3Params = new URLSearchParams({
    v: cleanVid,
    title: cleanT || track.title || '',
    artist: cleanA || track.artist || '',
    duration: String(trackDurationSec || 0),
    provider: preferredProv
  });

  try {
    const resV3 = await fetch(`${API_BASE}/api/lyrics/v3?${v3Params.toString()}`, { signal });
    if (reqToken !== lyricsRequestToken) return;
    if (resV3.ok) {
      const dataV3 = await resV3.json();
      if (reqToken !== lyricsRequestToken) return;
      if (dataV3 && dataV3.success) {
        const norm = normalizeLyricsResponsePayload(dataV3, track);
        if (applyNormalizedResult(norm)) return;
      }
    }
  } catch (e) {
    if (e && e.name === 'AbortError') return;
  }

  // 2. Fallback: Worker /api/lyrics/v2
  try {
    const resV2 = await fetch(`${API_BASE}/api/lyrics/v2?${v3Params.toString()}`, { signal });
    if (reqToken !== lyricsRequestToken) return;
    if (resV2.ok) {
      const dataV2 = await resV2.json();
      if (reqToken !== lyricsRequestToken) return;
      if (dataV2 && dataV2.success) {
        const norm = normalizeLyricsResponsePayload(dataV2, track);
        if (applyNormalizedResult(norm)) return;
      }
    }
  } catch (e) {
    if (e && e.name === 'AbortError') return;
  }

  // 3. Fallback: Direct browser-to-LRCLIB search
  const clientQueries = [...new Set([
    `${cleanT} ${cleanA}`.trim(),
    firstA && firstA !== cleanA ? `${cleanT} ${firstA}`.trim() : '',
    cleanT,
    rawT
  ].filter(Boolean))].slice(0, 3);

  function scoreLyricsMatchClient(cand, targetTitle, targetArtist, durSec) {
    if (!cand || (!cand.syncedLyrics && !cand.plainLyrics)) return -1;
    const norm = s => (s || '').toLowerCase()
      .replace(/\u011f/g, 'g').replace(/\u00fc/g, 'u').replace(/\u015f/g, 's')
      .replace(/\u0131/g, 'i').replace(/\u00f6/g, 'o').replace(/\u00e7/g, 'c')
      .replace(/[\(\[\{].*?[\)\]\}]/g, ' ')
      .replace(/[^\w\s]/g, ' ')
      .replace(/\s+/g, ' ')
      .trim();
    const cTitle = norm(cand.trackName);
    const cArtist = norm(cand.artistName);
    const tTitle = norm(targetTitle);
    const tArtist = norm(targetArtist);
    if (!cTitle || !tTitle) return -1;
    const isDirect = cTitle === tTitle || cTitle.includes(tTitle) || tTitle.includes(cTitle);
    const words = tTitle.split(' ').filter(w => w.length > 1);
    let count = 0;
    for (const w of words) {
      if (cTitle.includes(w)) count++;
    }
    const overlap = words.length > 0 ? (count / words.length) : (isDirect ? 1 : 0);
    if (!isDirect && overlap < 0.6) return -1;
    let score = isDirect ? 4.0 : overlap * 3.0;
    const cleanArt = tArtist.replace(/youtube|vevo|topic|music|sanatci|netd|muzik/g, '').trim();
    if (cleanArt && (cArtist === cleanArt || cArtist.includes(cleanArt) || cleanArt.includes(cArtist))) {
      score += 3.0;
    }
    if (cand.syncedLyrics) score += 1.5;
    if (durSec > 20 && Number(cand.duration) > 20) {
      const diff = Math.abs(Number(cand.duration) - durSec);
      if (diff <= 3) score += 3.5;
      else if (diff <= 10) score += 2.0;
      else if (diff > 15) return -1;
    }
    return score;
  }

  for (const q of clientQueries) {
    if (reqToken !== lyricsRequestToken || (signal && signal.aborted)) return;
    try {
      const directRes = await fetch(`https://lrclib.net/api/search?q=${encodeURIComponent(q)}`, { signal });
      if (reqToken !== lyricsRequestToken) return;
      if (directRes.ok) {
        const list = await directRes.json();
        if (Array.isArray(list) && list.length > 0) {
          let best = null;
          let bestSc = 0;
          for (const item of list) {
            const sc = scoreLyricsMatchClient(item, cleanT, cleanA, trackDurationSec);
            if (sc > bestSc) {
              bestSc = sc;
              best = item;
            }
          }
          if (best && bestSc > 0) {
            const norm = normalizeLyricsResponsePayload({
              provider: 'lrclib',
              syncedLyrics: best.syncedLyrics,
              plainLyrics: best.plainLyrics,
              duration: best.duration
            }, track);
            if (applyNormalizedResult(norm)) return;
          }
        }
      }
    } catch (e) {
      if (e && e.name === 'AbortError') return;
    }
  }

  if (reqToken !== lyricsRequestToken) return;
  lyricsMemoryCache.set(cacheKey, { empty: true });
  checkAndDisplayClipIntroHint(track, 0);
  renderLyricsEmpty(track);
}

function checkAndDisplayClipIntroHint() {
  const hintEl = document.getElementById('lyrics-intro-diff-hint');
  if (hintEl) {
    hintEl.innerHTML = '';
    hintEl.classList.add('hidden');
    hintEl.classList.remove('flex');
  }
}

function isLrcMetaLine(text, time, track) {
  if (!text) return true;
  const t = text.trim();
  if (/^[\u266a\u266b\s.*-]+$/.test(t)) return true;
  if (time <= 8) {
    const lower = t.toLowerCase();
    if (/^(s\u00f6z|m\u00fczik|d\u00fczenleme|aranje|mix|mastering|yazar|besteci|par\u00e7a|\u015fark\u0131|alb\u00fcm|kay\u0131t|producer|written by|composed by|lyrics by|arranged by|mixed by|mastered by|directed by|klip y\u00f6netmeni)[:\s-]/i.test(lower)) {
      return true;
    }
    if (track) {
      const title = (track.title || '').toLowerCase().trim();
      const artist = (track.artist || '').toLowerCase().trim();
      if (lower === title || lower === artist || lower === `${artist} - ${title}`) {
        return true;
      }
    }
  }
  return false;
}

function parseLyricsPayload(data, track) {
  if (!data || !data.syncedLyrics) return [];
  const rawLines = String(data.syncedLyrics).split('\n');
  let lrcOffsetSec = 0;
  for (const raw of rawLines) {
    const offMatch = raw.match(/^\s*\[offset:\s*([+-]?\d+)\s*\]/i);
    if (offMatch) {
      lrcOffsetSec = (parseInt(offMatch[1], 10) || 0) / 1000;
      break;
    }
  }

  const lines = [];
  const timeTagGlobal = /\[(\d{1,3}):(\d{2})(?:[.:](\d{1,3}))?\]/g;
  const elrcWordTag = /<(\d{1,3}):(\d{2})(?:[.:](\d{1,3}))?>\s*([^<\n]*)/g;

  for (const raw of rawLines) {
    if (/^\s*\[(ar|ti|al|by|length|offset|re|ve):/i.test(raw)) continue;
    let match;
    const rowTimes = [];
    timeTagGlobal.lastIndex = 0;
    while ((match = timeTagGlobal.exec(raw)) !== null) {
      const min = parseInt(match[1], 10);
      const sec = parseInt(match[2], 10);
      const ms = match[3] ? parseFloat('0.' + match[3]) : 0;
      rowTimes.push(Math.max(0, min * 60 + sec + ms + lrcOffsetSec));
    }
    if (rowTimes.length === 0) continue;

    let body = raw.replace(timeTagGlobal, '').trim();
    if (!body) continue;

    // Extract duet voice prefix (v1:, v2:, v1000:)
    let voice = '';
    const vMatch = body.match(/^(v\d+|bg)\s*:\s*(.*)$/i);
    if (vMatch) {
      voice = vMatch[1].toLowerCase();
      body = vMatch[2].trim();
    }

    // Extract inline background vocal [bg:...]
    let bg = '';
    body = body.replace(/\[bg:\s*([^\]]+)\]/gi, (_, inner) => {
      bg = (bg ? bg + ' ' : '') + inner.trim();
      return '';
    }).trim();

    // Parse ELRC <mm:ss.xx> words if present
    let words = null;
    if (/<\d{1,3}:\d{2}/.test(body)) {
      const parsedWords = [];
      let wMatch;
      elrcWordTag.lastIndex = 0;
      while ((wMatch = elrcWordTag.exec(body)) !== null) {
        const wMin = parseInt(wMatch[1], 10);
        const wSec = parseInt(wMatch[2], 10);
        const wMs = wMatch[3] ? parseFloat('0.' + wMatch[3]) : 0;
        const wText = (wMatch[4] || '').trim();
        if (wText) {
          parsedWords.push({
            time: Math.max(0, wMin * 60 + wSec + wMs + lrcOffsetSec),
            endTime: null,
            text: wText
          });
        }
      }
      if (parsedWords.length > 0) {
        words = parsedWords;
        body = parsedWords.map(w => w.text).join(' ');
      } else {
        body = body.replace(/<\d{1,3}:\d{2}(?:[.:]\d{1,3})?>/g, '').trim();
      }
    }

    for (const totalSec of rowTimes) {
      if (body && !isLrcMetaLine(body, totalSec, track)) {
        lines.push({
          time: totalSec,
          endTime: null,
          text: body,
          bg,
          voice,
          words: words ? words.map(w => ({ ...w })) : null
        });
      }
    }
  }

  return finalizeParsedLyricsLines(lines);
}

function renderLyricsList(lines, sourceName, meta = {}) {
  state.activeLyrics = Array.isArray(lines) ? lines : [];
  state.currentLyricIndex = -1;
  _lyricsLineEls = [];
  _lyricsWordElGroups = [];
  _lyricsLastWordIndex = -1;
  setLyricsAutoScrollPaused(false);
  cancelLyricsShareSelectMode();

  setLyricsOffsetControlsVisible(state.activeLyrics.length > 0);

  if (DOM.lyricsStatusLabel) {
    DOM.lyricsStatusLabel.textContent = meta && meta.wordSynced
      ? (getAppLanguage() === 'en' ? 'Word Sync' : 'Canl\u0131 S\u00f6zler')
      : (getAppLanguage() === 'en' ? 'Live Lyrics' : 'Canl\u0131 S\u00f6zler');
  }
  if (DOM.lyricsSourceBadge) DOM.lyricsSourceBadge.textContent = sourceName || 'Kurfa Lyrics';

  if (!DOM.deckLyricsLines) return;
  DOM.deckLyricsLines.innerHTML = '';

  const frag = document.createDocumentFragment();
  state.activeLyrics.forEach((line, idx) => {
    if (line.isInterlude) {
      const inter = document.createElement('div');
      inter.className = 'lyric-line lyric-interlude select-none';
      inter.setAttribute('data-time', String(line.time));
      inter.setAttribute('aria-label', t('lyrics.instrumental'));
      inter.innerHTML = '<span></span><span></span><span></span>';
      inter.onclick = () => {
        if (_lyricsShareSelectMode) return;
        const targetTime = Math.max(0, line.time - (state.lyricsOffset || 0));
        seekPlaybackToSeconds(targetTime);
      };
      _lyricsLineEls.push(inter);
      _lyricsWordElGroups.push(null);
      frag.appendChild(inter);
      return;
    }

    const p = document.createElement('div');
    let voiceCls = '';
    if (line.voice === 'v2') voiceCls = ' lyric-duet-right';
    else if (line.voice === 'v1') voiceCls = ' lyric-duet-left';
    else if (line.voice === 'v1000' || line.voice === 'group') voiceCls = ' lyric-duet-center';

    p.className = `lyric-line group flex items-center justify-between cursor-pointer select-none${voiceCls}`;
    p.setAttribute('data-time', String(line.time));
    p.setAttribute('data-lyric-idx', String(idx));

    const contentWrap = document.createElement('div');
    contentWrap.className = 'flex-1 min-w-0 leading-relaxed';

    let wordSpanList = null;
    if (Array.isArray(line.words) && line.words.length > 0) {
      const wordsWrap = document.createElement('div');
      wordsWrap.className = 'lyric-words-wrap';
      wordSpanList = [];
      line.words.forEach((w) => {
        const ws = document.createElement('span');
        ws.className = 'lyric-word';
        ws.textContent = w.text;
        wordsWrap.appendChild(ws);
        wordSpanList.push(ws);
      });
      contentWrap.appendChild(wordsWrap);
    } else {
      const textSpan = document.createElement('span');
      textSpan.className = 'block';
      textSpan.textContent = line.text;
      contentWrap.appendChild(textSpan);
    }

    if (line.bg) {
      const bgSpan = document.createElement('span');
      bgSpan.className = 'lyric-bg-vocal';
      bgSpan.textContent = `(${line.bg})`;
      contentWrap.appendChild(bgSpan);
    }

    p.onclick = () => {
      if (_lyricsShareSelectMode) {
        toggleLyricLineShareSelection(idx, p);
        return;
      }
      const targetVideoTime = Math.max(0, line.time - (state.lyricsOffset || 0));
      seekPlaybackToSeconds(targetVideoTime);
      showToast(`${formatTime(targetVideoTime)}`, 'info');
    };

    p.appendChild(contentWrap);
    _lyricsLineEls.push(p);
    _lyricsWordElGroups.push(wordSpanList);
    frag.appendChild(p);
  });

  DOM.deckLyricsLines.appendChild(frag);
  resetLyricsScrollPosition();
  if (typeof LyricsClock !== 'undefined') LyricsClock.syncState();
}

function renderPlainLyrics(plainText, sourceName) {
  state.activeLyrics = [];
  state.currentLyricIndex = -1;
  _lyricsLineEls = [];
  _lyricsWordElGroups = [];
  setLyricsOffsetControlsVisible(false);
  if (typeof LyricsClock !== 'undefined') LyricsClock.stop();
  if (DOM.lyricsStatusLabel) DOM.lyricsStatusLabel.textContent = getAppLanguage() === 'en' ? 'Plain Text Lyrics' : 'D\u00fcz Metin \u015eark\u0131 S\u00f6zleri';
  if (DOM.lyricsSourceBadge) DOM.lyricsSourceBadge.textContent = sourceName || 'Lyrics';

  if (!DOM.deckLyricsLines) return;
  const lines = plainText.split('\n').map(l => l.trim()).filter(Boolean);
  DOM.deckLyricsLines.innerHTML = `
    <div class="pb-2 text-[11px] text-on-surface-variant/80 border-b border-surface-container/50">
      * ${escapeHtml(getAppLanguage() === 'en' ? 'Live timestamps are unavailable for this track; showing full text.' : 'Bu par\u00e7a i\u00e7in canl\u0131 zaman damgas\u0131 bulunmamaktad\u0131r, \u015fark\u0131 s\u00f6zleri tam metin olarak sunulmaktadır.')}
    </div>
    <div class="flex flex-col gap-2 pt-2">
      ${lines.map(l => `<p class="py-1 text-sm text-on-surface font-medium leading-relaxed">${escapeHtml(l)}</p>`).join('')}
    </div>
  `;
  resetLyricsScrollPosition();
}

function renderLyricsEmpty(track) {
  state.activeLyrics = [];
  state.currentLyricIndex = -1;
  _lyricsLineEls = [];
  _lyricsWordElGroups = [];
  setLyricsOffsetControlsVisible(false);
  if (typeof LyricsClock !== 'undefined') LyricsClock.stop();
  const isEn = getAppLanguage() === 'en';
  if (DOM.lyricsStatusLabel) DOM.lyricsStatusLabel.textContent = track ? (isEn ? 'Lyrics Not Found' : 'S\u00f6z Bulunamad\u0131') : (isEn ? 'Waiting' : 'Bekleniyor');
  if (DOM.lyricsSourceBadge) DOM.lyricsSourceBadge.textContent = '';

  if (!DOM.deckLyricsLines) return;

  if (!track) {
    DOM.deckLyricsLines.innerHTML = `
      <div class="py-8 px-4 flex flex-col items-center justify-center text-center gap-3 text-on-surface-variant">
        <div class="w-12 h-12 rounded-2xl bg-surface-container-high/60 flex items-center justify-center text-on-surface-variant">
          <span class="material-symbols-outlined text-[28px]" aria-hidden="true">music_note</span>
        </div>
        <div>
          <p class="text-sm font-bold text-on-surface">${escapeHtml(isEn ? 'No track playing' : '\u00c7alan \u015fark\u0131 bulunmuyor')}</p>
          <p class="text-xs text-on-surface-variant mt-1 max-w-sm">${escapeHtml(isEn ? 'Start a song to see live synced lyrics here.' : 'Bir \u015fark\u0131 ba\u015flatt\u0131\u011f\u0131n\u0131zda s\u00f6zler ve senkronizasyon burada g\u00f6r\u00fcnecektir.')}</p>
        </div>
      </div>
    `;
    resetLyricsScrollPosition();
    return;
  }

  const queryStr = `${track.artist || ''} ${track.title || ''} lyrics`;
  DOM.deckLyricsLines.innerHTML = `
    <div class="py-8 px-4 flex flex-col items-center justify-center text-center gap-3 text-on-surface-variant">
      <div class="w-12 h-12 rounded-2xl bg-surface-container-high/60 flex items-center justify-center text-on-surface-variant">
        <span class="material-symbols-outlined text-[28px]" aria-hidden="true">lyrics</span>
      </div>
      <div>
        <p class="text-sm font-bold text-on-surface">${escapeHtml(isEn ? 'No synced lyrics found' : 'Bu par\u00e7a i\u00e7in senkronize s\u00f6z bulunamad\u0131')}</p>
        <p class="text-xs text-on-surface-variant mt-1 max-w-sm">${escapeHtml(isEn ? 'This may be a live clip or an unindexed version.' : 'YouTube video klibi, canl\u0131 performans veya veritaban\u0131nda hen\u00fcz yer almayan bir s\u00fcr\u00fcm olabilir.')}</p>
      </div>
      <a href="https://www.google.com/search?q=${encodeURIComponent(queryStr)}" target="_blank" rel="noopener noreferrer" class="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-xs font-bold text-primary transition-all">
        <span>${escapeHtml(isEn ? 'Search Lyrics on Google' : "Google'da \u015eark\u0131 S\u00f6zlerini Ara")}</span>
        <span class="material-symbols-outlined text-[16px]" aria-hidden="true">open_in_new</span>
      </a>
    </div>
  `;
  resetLyricsScrollPosition();
}

function scrollLyricsContainerToLine(lineEl, instant = false) {
  const container = DOM.karaokeLyricsBox || document.getElementById('karaoke-lyrics-box');
  if (!container || !lineEl) return;
  const cRect = container.getBoundingClientRect();
  const lRect = lineEl.getBoundingClientRect();
  const currentRelTop = (lRect.top - cRect.top) + container.scrollTop;
  const target = Math.max(0, currentRelTop - (container.clientHeight * 0.36) + (lRect.height * 0.5));
  if (instant) {
    try {
      container.style.scrollBehavior = 'auto';
      container.scrollTop = target;
      if (typeof container.scrollTo === 'function') {
        container.scrollTo({ top: target, left: 0, behavior: 'auto' });
      }
    } catch (_) {}
  } else {
    try {
      container.style.scrollBehavior = '';
      container.scrollTo({ top: target, behavior: 'smooth' });
    } catch (_) {
      container.scrollTop = target;
    }
  }
}

function updateActiveWordProgress(activeIdx, adjustedTime) {
  const line = state.activeLyrics[activeIdx];
  const wordEls = _lyricsWordElGroups[activeIdx];
  if (!line || !line.words || !wordEls || wordEls.length === 0) return;

  let activeWordIdx = -1;
  for (let w = 0; w < line.words.length; w++) {
    const word = line.words[w];
    const el = wordEls[w];
    if (!el) continue;
    if (adjustedTime >= word.endTime) {
      if (!el.classList.contains('word-sung')) el.classList.add('word-sung');
      if (el.classList.contains('word-active')) el.classList.remove('word-active');
    } else if (adjustedTime >= word.time) {
      activeWordIdx = w;
      const span = Math.max(0.06, word.endTime - word.time);
      const pct = Math.max(0, Math.min(100, ((adjustedTime - word.time) / span) * 100));
      if (!el.classList.contains('word-active')) el.classList.add('word-active');
      if (el.classList.contains('word-sung')) el.classList.remove('word-sung');
      const prevPct = Number(el._lastWordPct ?? -10);
      if (Math.abs(pct - prevPct) >= 0.35 || pct >= 99.5 || pct <= 0.5) {
        el._lastWordPct = pct;
        el.style.setProperty('--word-progress', `${pct.toFixed(2)}%`);
      }
    } else {
      if (el.classList.contains('word-active')) el.classList.remove('word-active');
      if (el.classList.contains('word-sung')) el.classList.remove('word-sung');
    }
  }
  _lyricsLastWordIndex = activeWordIdx;
}

function syncLyricsWithTime(currentTime, forceScroll = false) {
  if (typeof document !== 'undefined' && document.hidden) return;
  if (state.currentTab !== 'calma-listeleri') return;
  if (!state.activeLyrics || state.activeLyrics.length === 0 || _lyricsLineEls.length === 0) return;
  if (lyricsLoadedPlaybackToken !== currentPlaybackToken) return;

  let safeTime = Number(currentTime) || 0;
  // During initial track switch before media engine confirms playback, never accept stale time from previous song
  if (!state._activeTrackConfirmedPlaying && (Date.now() - (state._trackSwitchStartedAt || 0)) < 5000 && !state.isSeeking) {
    safeTime = Math.min(safeTime, state.currentPlayheadTime || 0);
  }

  // Compensate Web Audio / OS speaker pipeline latency (~0.55s) so lyrics never run 1 step ahead
  const LYRICS_AUDIO_LATENCY_COMP_SEC = -0.55;
  const adjustedTime = safeTime + (state.lyricsOffset || 0) + LYRICS_AUDIO_LATENCY_COMP_SEC;
  const firstLyricTime = state.activeLyrics[0].time;
  const firstIsInterlude = Boolean(state.activeLyrics[0] && state.activeLyrics[0].isInterlude);

  if (adjustedTime < firstLyricTime || (firstIsInterlude && !state.isPlaying && safeTime <= 0.15)) {
    if (state.currentLyricIndex !== -2 || forceScroll) {
      for (let i = 0; i < _lyricsLineEls.length; i++) {
        const el = _lyricsLineEls[i];
        if (el && (el.classList.contains('active') || el.classList.contains('active-lyric'))) {
          el.classList.remove('active-lyric', 'active');
        }
      }
      state.currentLyricIndex = -2;
      _lyricsLastWordIndex = -1;
      const box = DOM.karaokeLyricsBox || document.getElementById('karaoke-lyrics-box');
      if (box && (forceScroll || !lyricsAutoScrollPaused)) {
        try {
          box.style.scrollBehavior = 'auto';
          box.scrollTop = 0;
          if (typeof box.scrollTo === 'function') {
            box.scrollTo({ top: 0, left: 0, behavior: 'auto' });
          }
        } catch (_) {}
      }
    }
    return;
  }

  // O(log N) binary search
  let lo = 0;
  let hi = state.activeLyrics.length - 1;
  let activeIdx = 0;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (adjustedTime >= state.activeLyrics[mid].time) {
      activeIdx = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }

  if (activeIdx !== state.currentLyricIndex || forceScroll) {
    state.currentLyricIndex = activeIdx;
    _lyricsLastWordIndex = -1;

    for (let i = 0; i < _lyricsLineEls.length; i++) {
      if (i === activeIdx) continue;
      const el = _lyricsLineEls[i];
      if (el && (el.classList.contains('active') || el.classList.contains('active-lyric'))) {
        el.classList.remove('active-lyric', 'active');
        const prevWords = _lyricsWordElGroups[i];
        if (prevWords) {
          prevWords.forEach(w => w.classList.remove('word-active', 'word-sung'));
        }
      }
    }

    const activeEl = _lyricsLineEls[activeIdx];
    if (activeEl) {
      activeEl.classList.add('active-lyric', 'active');
      if (forceScroll || !lyricsAutoScrollPaused) {
        if (activeIdx === 0 && safeTime < 1.5) {
          const box = DOM.karaokeLyricsBox || document.getElementById('karaoke-lyrics-box');
          if (box) {
            try {
              box.style.scrollBehavior = 'auto';
              box.scrollTop = 0;
            } catch (_) {}
          }
        } else {
          scrollLyricsContainerToLine(activeEl, forceScroll);
        }
      }
    }
  }

  // Update word-by-word progress smoothly on active line
  if (activeIdx >= 0) {
    updateActiveWordProgress(activeIdx, adjustedTime);
  }
}

// 60 FPS Smooth Monotonic LyricsClock (Sub-frame bounded smoothing + zero stutter)
const LyricsClock = {
  rafId: null,
  trackToken: -1,
  anchorPosSec: 0,
  anchorPerfMs: 0,
  lastComputedSec: 0,
  lastRawSec: 0,
  lastRawPerfMs: 0,

  reset(posSec) {
    const s = Math.max(0, Number(posSec) || 0);
    const now = typeof performance !== 'undefined' ? performance.now() : 0;
    this.trackToken = currentPlaybackToken;
    this.anchorPosSec = s;
    this.anchorPerfMs = now;
    this.lastComputedSec = s;
    this.lastRawSec = s;
    this.lastRawPerfMs = now;
  },

  samplePosition() {
    if (this.trackToken !== currentPlaybackToken) {
      this.reset(getActiveMediaCurrentTime());
    }
    const raw = getActiveMediaCurrentTime();
    const now = performance.now();
    if (!state._activeTrackConfirmedPlaying || !state.isPlaying || state.userPaused) {
      this.anchorPosSec = raw;
      this.anchorPerfMs = now;
      this.lastComputedSec = raw;
      this.lastRawSec = raw;
      this.lastRawPerfMs = now;
      return raw;
    }

    const eng = state._activeMediaEngine;
    const speed = Math.max(0.5, Math.min(2.0, Number(state.proSettings?.playbackSpeed) || 1.0));
    if (eng === 'audio' || eng === 'native-video' || eng === 'youtube') {
      // Smoothly bridge OS/Chromium audio clock quantization (15-40ms steps) with strict 55ms ceiling so word glow never steps or trembles
      if (Math.abs(raw - this.lastComputedSec) > 0.28 || raw < this.lastRawSec - 0.05) {
        this.lastRawSec = raw;
        this.lastRawPerfMs = now;
        this.lastComputedSec = raw;
        return raw;
      }
      if (Math.abs(raw - this.lastRawSec) >= 0.0005) {
        this.lastRawSec = raw;
        this.lastRawPerfMs = now;
      }
      const elapsedSec = Math.max(0, (now - this.lastRawPerfMs) / 1000) * speed;
      const interp = raw + Math.min(0.055, elapsedSec);
      const monotonic = (interp >= this.lastComputedSec)
        ? interp
        : this.lastComputedSec;
      this.lastComputedSec = Math.min(raw + 0.055, monotonic);
      return this.lastComputedSec;
    }

    // Coarse bridge (native-exo): interpolate smoothly only while actively playing & not buffering
    if (state._nativeExoLastBuffering) {
      this.anchorPosSec = raw;
      this.anchorPerfMs = now;
      this.lastComputedSec = raw;
      return raw;
    }
    const predicted = this.anchorPosSec + ((now - this.anchorPerfMs) / 1000) * speed;
    if (Math.abs(raw - predicted) > 0.30 || raw < this.anchorPosSec || raw > this.anchorPosSec + 0.05) {
      this.anchorPosSec = raw;
      this.anchorPerfMs = now;
    }
    const smooth = Math.max(raw, Math.min(predicted, raw + 0.20));
    this.lastComputedSec = smooth;
    return smooth;
  },

  syncState() {
    const shouldRun = Boolean(
      state.isPlaying &&
      !state.userPaused &&
      lyricsLoadedPlaybackToken === currentPlaybackToken &&
      state.currentTab === 'calma-listeleri' &&
      Array.isArray(state.activeLyrics) &&
      state.activeLyrics.length > 0 &&
      (typeof document === 'undefined' || !document.hidden)
    );
    if (shouldRun && (!this.rafId || this.trackToken !== currentPlaybackToken)) {
      if (this.rafId) {
        cancelAnimationFrame(this.rafId);
        this.rafId = null;
      }
      this.reset(getActiveMediaCurrentTime());
      const expectedToken = currentPlaybackToken;
      const tick = () => {
        if (
          expectedToken !== currentPlaybackToken ||
          lyricsLoadedPlaybackToken !== currentPlaybackToken ||
          !state.isPlaying ||
          state.userPaused ||
          state.currentTab !== 'calma-listeleri' ||
          !Array.isArray(state.activeLyrics) ||
          state.activeLyrics.length === 0 ||
          (typeof document !== 'undefined' && document.hidden)
        ) {
          this.rafId = null;
          return;
        }
        const tSec = this.samplePosition();
        syncLyricsWithTime(tSec, false);
        this.rafId = requestAnimationFrame(tick);
      };
      this.rafId = requestAnimationFrame(tick);
    } else if (!shouldRun && this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  },

  stop() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.trackToken = -1;
    this.anchorPosSec = 0;
    this.lastComputedSec = 0;
    this.anchorPerfMs = typeof performance !== 'undefined' ? performance.now() : 0;
  }
};
window.LyricsClock = LyricsClock;

// =============================================================================
// 9.1 LYRICS SHARE CARD GENERATOR (1080x1350 PNG)
// =============================================================================

let _lyricsShareTheme = 'mesh';

function updateLyricsShareToolbarUI() {
  const toolbar = document.getElementById('lyrics-share-toolbar');
  const countLabel = document.getElementById('lyrics-share-count-label');
  const box = document.getElementById('deck-lyrics-lines');
  if (toolbar) {
    toolbar.classList.toggle('hidden', !_lyricsShareSelectMode);
    toolbar.classList.toggle('flex', _lyricsShareSelectMode);
  }
  if (box) {
    box.classList.toggle('lyrics-share-selecting', _lyricsShareSelectMode);
  }
  if (countLabel) {
    countLabel.textContent = `${t('lyrics.create_card')} (${_lyricsShareSelectedIndices.length}/4)`;
  }
}

function toggleLyricsShareSelectMode() {
  if (!Array.isArray(state.activeLyrics) || state.activeLyrics.length === 0) return;
  _lyricsShareSelectMode = !_lyricsShareSelectMode;
  _lyricsShareSelectedIndices = [];
  _lyricsLineEls.forEach(el => el && el.classList.remove('lyric-selected'));
  if (_lyricsShareSelectMode) {
    // Pre-select active line if valid
    const idx = state.currentLyricIndex >= 0 ? state.currentLyricIndex : state.activeLyrics.findIndex(l => l && !l.isInterlude);
    if (idx >= 0 && state.activeLyrics[idx] && !state.activeLyrics[idx].isInterlude && _lyricsLineEls[idx]) {
      _lyricsShareSelectedIndices.push(idx);
      _lyricsLineEls[idx].classList.add('lyric-selected');
    }
  }
  updateLyricsShareToolbarUI();
}
window.toggleLyricsShareSelectMode = toggleLyricsShareSelectMode;

function cancelLyricsShareSelectMode() {
  _lyricsShareSelectMode = false;
  _lyricsShareSelectedIndices = [];
  _lyricsLineEls.forEach(el => el && el.classList.remove('lyric-selected'));
  updateLyricsShareToolbarUI();
}
window.cancelLyricsShareSelectMode = cancelLyricsShareSelectMode;

function toggleLyricLineShareSelection(idx, el) {
  const existingPos = _lyricsShareSelectedIndices.indexOf(idx);
  if (existingPos !== -1) {
    _lyricsShareSelectedIndices.splice(existingPos, 1);
    if (el) el.classList.remove('lyric-selected');
  } else {
    if (_lyricsShareSelectedIndices.length >= 4) {
      showToast(t('lyrics.toast_max_lines'), 'info');
      return;
    }
    _lyricsShareSelectedIndices.push(idx);
    _lyricsShareSelectedIndices.sort((a, b) => a - b);
    if (el) el.classList.add('lyric-selected');
  }
  updateLyricsShareToolbarUI();
}

function openLyricsShareModal() {
  if (_lyricsShareSelectedIndices.length === 0) {
    showToast(t('lyrics.toast_select_one'), 'info');
    return;
  }
  const modal = document.getElementById('lyrics-share-modal');
  const card = document.getElementById('lyrics-share-modal-card');
  if (!modal || !card) return;
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');
  renderLyricsShareCanvas();
}
window.openLyricsShareModal = openLyricsShareModal;

function closeLyricsShareModal() {
  const modal = document.getElementById('lyrics-share-modal');
  const card = document.getElementById('lyrics-share-modal-card');
  if (!modal || !card) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  card.classList.add('scale-95');
  card.classList.remove('scale-100');
}
window.closeLyricsShareModal = closeLyricsShareModal;

function setLyricsShareTheme(theme) {
  _lyricsShareTheme = theme || 'mesh';
  renderLyricsShareCanvas();
}
window.setLyricsShareTheme = setLyricsShareTheme;

function wrapCanvasText(ctx, text, maxWidth) {
  const words = String(text || '').split(/\s+/).filter(Boolean);
  const lines = [];
  let cur = '';
  for (const w of words) {
    const test = cur ? `${cur} ${w}` : w;
    if (ctx.measureText(test).width > maxWidth && cur) {
      lines.push(cur);
      cur = w;
    } else {
      cur = test;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function drawRoundedRectPath(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

async function renderLyricsShareCanvas() {
  const canvas = document.getElementById('lyrics-share-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const W = 1080;
  const H = 1350;
  canvas.width = W;
  canvas.height = H;

  const track = state.currentTrack || { title: 'Kurfam\u00fczik', artist: 'Kurfam\u00fczik' };
  const palette = (typeof LiquidBackground !== 'undefined' && LiquidBackground.lastPalette)
    ? LiquidBackground.lastPalette
    : ['#ff2056', '#4f46e5', '#0f172a'];

  // Background
  if (_lyricsShareTheme === 'light') {
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, '#f8fafc');
    grad.addColorStop(1, '#e2e8f0');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
  } else if (_lyricsShareTheme === 'dark') {
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, '#0b0f19');
    grad.addColorStop(1, '#181f33');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);
  } else {
    const grad = ctx.createLinearGradient(0, 0, W, H);
    grad.addColorStop(0, palette[0] || '#7c1d3e');
    grad.addColorStop(0.55, palette[1] || '#1e1b4b');
    grad.addColorStop(1, '#090d16');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    // Soft radial glow accents
    const rad = ctx.createRadialGradient(240, 260, 40, 240, 260, 560);
    rad.addColorStop(0, 'rgba(255,255,255,0.18)');
    rad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = rad;
    ctx.fillRect(0, 0, W, H);
  }

  // Frosted Card Frame
  const cardX = 76;
  const cardY = 86;
  const cardW = W - 152;
  const cardH = H - 172;
  drawRoundedRectPath(ctx, cardX, cardY, cardW, cardH, 48);
  ctx.fillStyle = _lyricsShareTheme === 'light' ? 'rgba(255,255,255,0.84)' : 'rgba(12,16,28,0.58)';
  ctx.fill();
  ctx.lineWidth = 2;
  ctx.strokeStyle = _lyricsShareTheme === 'light' ? 'rgba(15,23,42,0.08)' : 'rgba(255,255,255,0.16)';
  ctx.stroke();

  const textPrimary = _lyricsShareTheme === 'light' ? '#0f172a' : '#ffffff';
  const textSecondary = _lyricsShareTheme === 'light' ? '#475569' : 'rgba(226,232,240,0.78)';

  // Load album cover safely (with CORS anonymous attempt, fallback to placeholder)
  const loadSafeImage = (src) => new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    const timer = setTimeout(() => resolve(null), 1800);
    img.onload = () => { clearTimeout(timer); resolve(img); };
    img.onerror = () => { clearTimeout(timer); resolve(null); };
    img.src = src;
  });

  const thumbUrl = safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png');
  let coverImg = await loadSafeImage(thumbUrl);
  if (!coverImg) coverImg = await loadSafeImage('./kurfamuzik_logo.png');

  // Header: Cover + Track Meta
  const artSize = 148;
  const artX = cardX + 64;
  const artY = cardY + 68;
  ctx.save();
  drawRoundedRectPath(ctx, artX, artY, artSize, artSize, 26);
  ctx.clip();
  if (coverImg) {
    ctx.drawImage(coverImg, artX, artY, artSize, artSize);
  } else {
    ctx.fillStyle = palette[0] || '#ff2056';
    ctx.fillRect(artX, artY, artSize, artSize);
  }
  ctx.restore();

  ctx.fillStyle = textPrimary;
  ctx.font = '800 38px "Plus Jakarta Sans", system-ui, sans-serif';
  const titleLines = wrapCanvasText(ctx, formatCleanTrackTitle(track.title) || 'Kurfam\u00fczik', cardW - 300).slice(0, 2);
  titleLines.forEach((ln, idx) => {
    ctx.fillText(ln, artX + artSize + 32, artY + 54 + idx * 46);
  });

  ctx.fillStyle = textSecondary;
  ctx.font = '600 28px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText(String(track.artist || 'Kurfam\u00fczik').slice(0, 38), artX + artSize + 32, artY + 54 + titleLines.length * 46 + 8);

  // Selected Lyrics Body
  const selectedTexts = _lyricsShareSelectedIndices
    .map(i => state.activeLyrics[i])
    .filter(l => l && !l.isInterlude && l.text)
    .map(l => l.text);

  ctx.fillStyle = textPrimary;
  ctx.font = '800 50px "Plus Jakarta Sans", system-ui, sans-serif';
  const bodyMaxW = cardW - 128;
  const wrappedBlocks = [];
  selectedTexts.forEach((st) => {
    wrappedBlocks.push(...wrapCanvasText(ctx, st, bodyMaxW));
    wrappedBlocks.push('');
  });
  if (wrappedBlocks.length > 0 && wrappedBlocks[wrappedBlocks.length - 1] === '') wrappedBlocks.pop();

  const lineHeight = 68;
  const totalTextH = wrappedBlocks.length * lineHeight;
  let curY = Math.max(artY + artSize + 110, cardY + (cardH - totalTextH) / 2 + 24);
  for (const row of wrappedBlocks) {
    if (curY > cardY + cardH - 150) break;
    if (row === '') {
      curY += 26;
      continue;
    }
    ctx.fillText(row, cardX + 64, curY);
    curY += lineHeight;
  }

  // Footer Brand Badge + Logo
  const footY = cardY + cardH - 76;
  const logoImg = await loadSafeImage('./kurfamuzik_logo.png');
  if (logoImg) {
    ctx.save();
    drawRoundedRectPath(ctx, cardX + 64, footY - 34, 48, 48, 12);
    ctx.clip();
    ctx.drawImage(logoImg, cardX + 64, footY - 34, 48, 48);
    ctx.restore();
  }
  ctx.fillStyle = textPrimary;
  ctx.font = '800 28px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.fillText('Kurfam\u00fczik', cardX + 126, footY);
  ctx.fillStyle = textSecondary;
  ctx.font = '600 22px "Plus Jakarta Sans", system-ui, sans-serif';
  ctx.textAlign = 'right';
  ctx.fillText('kurfanova.kurfa.workers.dev', cardX + cardW - 64, footY);
  ctx.textAlign = 'left';
}

function downloadLyricsShareCard() {
  const canvas = document.getElementById('lyrics-share-canvas');
  if (!canvas) return;
  try {
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    const slug = (state.currentTrack?.title || 'kurfamuzik').toLowerCase().replace(/[^a-z0-9]+/g, '-').slice(0, 40);
    a.download = `kurfamuzik-soz-${slug || 'kart'}.png`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast(t('lyrics.toast_card_downloaded'), 'success');
  } catch (_) {}
}
window.downloadLyricsShareCard = downloadLyricsShareCard;

async function copyOrShareLyricsCard() {
  const canvas = document.getElementById('lyrics-share-canvas');
  if (!canvas) return;
  try {
    const blob = await new Promise(res => canvas.toBlob(res, 'image/png'));
    if (!blob) return downloadLyricsShareCard();
    const file = new File([blob], 'kurfamuzik-lyrics.png', { type: 'image/png' });
    if (navigator.canShare && navigator.canShare({ files: [file] }) && navigator.share) {
      await navigator.share({
        title: state.currentTrack?.title || 'Kurfam\u00fczik',
        files: [file]
      });
      return;
    }
    if (navigator.clipboard && window.ClipboardItem) {
      await navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]);
      showToast(t('lyrics.toast_card_copied'), 'success');
      return;
    }
    downloadLyricsShareCard();
  } catch (_) {
    downloadLyricsShareCard();
  }
}
window.copyOrShareLyricsCard = copyOrShareLyricsCard;

// =============================================================================
// 10. SEARCH & INSTANT CONVERTER (100% RELIABLE)
// =============================================================================

let searchDebounceTimeout = null;
let searchAbortController = null;
let searchSeqToken = 0;
let quickSearchAbortController = null;
let quickSearchSeqToken = 0;

function debouncedSearch(query) {
  if (searchDebounceTimeout) clearTimeout(searchDebounceTimeout);
  searchDebounceTimeout = setTimeout(() => {
    executeSearchImmediate(query, false);
  }, 400);
}

const BROWSE_CATEGORIES = [
  { key: 'search.cat_tr_pop', query: 'Türkçe Pop 2026 en çok dinlenenler', icon: 'music_note', bg: 'linear-gradient(135deg, #ff2056 0%, #be123c 100%)' },
  { key: 'search.cat_tr_rap', query: 'Türkçe Rap Drill 2026 hit şarkılar', icon: 'bolt', bg: 'linear-gradient(135deg, #4f46e5 0%, #312e81 100%)' },
  { key: 'search.cat_arabesk', query: 'Arabesk Damar en sevilen şarkılar', icon: 'favorite', bg: 'linear-gradient(135deg, #d97706 0%, #92400e 100%)' },
  { key: 'search.cat_rock', query: 'Anadolu Rock Türkçe Rock klasikler', icon: 'electric_bolt', bg: 'linear-gradient(135deg, #059669 0%, #064e3b 100%)' },
  { key: 'search.cat_acoustic', query: 'Akustik Lo-Fi Türkçe sakin şarkılar', icon: 'coffee', bg: 'linear-gradient(135deg, #0891b2 0%, #164e63 100%)' },
  { key: 'search.cat_90s', query: "90'lar Türkçe Pop nostalji şarkılar", icon: 'album', bg: 'linear-gradient(135deg, #9333ea 0%, #581c87 100%)' },
  { key: 'search.cat_global', query: 'Global Top Hits Pop 2026', icon: 'public', bg: 'linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)' },
  { key: 'search.cat_workout', query: 'Workout High Energy Bass Remix 2026', icon: 'fitness_center', bg: 'linear-gradient(135deg, #e11d48 0%, #7c2d12 100%)' }
];

function recordSearchHistory(query) {
  const clean = String(query || '').trim();
  if (!clean || clean.length < 2) return;
  if (/^(https?:\/\/|youtu\.be\/)/i.test(clean)) return;
  if (!Array.isArray(state.searchHistory)) state.searchHistory = [];
  const lower = clean.toLowerCase();
  state.searchHistory = [
    clean,
    ...state.searchHistory.filter((q) => String(q || '').trim().toLowerCase() !== lower)
  ].slice(0, 30);
  safeSetStorage('kurfa_search_history', JSON.stringify(state.searchHistory));
  renderSearchDiscoveryHub();
  scheduleSaveUserDataToDesktop();
}

function removeSearchHistoryItem(query) {
  const lower = String(query || '').trim().toLowerCase();
  state.searchHistory = (state.searchHistory || []).filter((q) => String(q || '').trim().toLowerCase() !== lower);
  safeSetStorage('kurfa_search_history', JSON.stringify(state.searchHistory));
  renderSearchDiscoveryHub();
  scheduleSaveUserDataToDesktop();
}
window.removeSearchHistoryItem = removeSearchHistoryItem;

function clearSearchHistory() {
  state.searchHistory = [];
  safeSetStorage('kurfa_search_history', '[]');
  renderSearchDiscoveryHub();
  scheduleSaveUserDataToDesktop();
  showToast(t('toast.history_cleared'));
}
window.clearSearchHistory = clearSearchHistory;

function showSearchDiscoveryHub() {
  const hub = document.getElementById('search-discovery-hub');
  const heroGrid = document.getElementById('search-hero-grid');
  const topSongsCard = document.getElementById('search-top-songs-card');
  const wrapper = document.getElementById('search-results-wrapper');
  const sortRow = document.getElementById('search-sort-buttons-row');
  const countEl = document.getElementById('search-results-count');
  const artistsSection = document.getElementById('search-artists-section');
  const albumsSection = document.getElementById('search-albums-section');
  if (hub) {
    hub.classList.remove('hidden');
    hub.classList.add('flex');
  }
  if (heroGrid) heroGrid.classList.add('hidden');
  if (topSongsCard) {
    topSongsCard.classList.add('hidden');
    topSongsCard.classList.remove('flex');
  }
  if (wrapper) {
    wrapper.classList.add('hidden');
    wrapper.classList.remove('flex');
  }
  if (sortRow) sortRow.classList.add('hidden');
  if (countEl) countEl.classList.add('hidden');
  if (artistsSection) {
    artistsSection.classList.add('hidden');
    artistsSection.classList.remove('flex');
  }
  if (albumsSection) {
    albumsSection.classList.add('hidden');
    albumsSection.classList.remove('flex');
  }
  if (DOM.searchSpotlightBox) DOM.searchSpotlightBox.style.display = 'none';
  if (typeof syncTopSearchClearBtn === 'function') syncTopSearchClearBtn();
  renderSearchDiscoveryHub();
}

function hideSearchDiscoveryHub() {
  const hub = document.getElementById('search-discovery-hub');
  const heroGrid = document.getElementById('search-hero-grid');
  const wrapper = document.getElementById('search-results-wrapper');
  const sortRow = document.getElementById('search-sort-buttons-row');
  const countEl = document.getElementById('search-results-count');
  if (hub) {
    hub.classList.add('hidden');
    hub.classList.remove('flex');
  }
  if (heroGrid) heroGrid.classList.remove('hidden');
  if (wrapper) {
    wrapper.classList.remove('hidden');
    wrapper.classList.add('flex');
  }
  if (sortRow) sortRow.classList.remove('hidden');
  if (countEl) countEl.classList.remove('hidden');
  if (typeof syncTopSearchClearBtn === 'function') syncTopSearchClearBtn();
}

function renderSearchDiscoveryHub() {
  const recSection = document.getElementById('recent-searches-section');
  const recChips = document.getElementById('recent-searches-chips');
  if (recSection && recChips) {
    const history = Array.isArray(state.searchHistory) ? state.searchHistory.filter(Boolean) : [];
    recChips.innerHTML = '';
    const existingToggle = document.getElementById('btn-toggle-recent-searches');
    if (existingToggle) existingToggle.remove();

    if (history.length === 0) {
      state._recentSearchesExpanded = false;
      recSection.classList.add('hidden');
      recSection.classList.remove('flex');
    } else {
      recSection.classList.remove('hidden');
      recSection.classList.add('flex');
      const expanded = Boolean(state._recentSearchesExpanded) && history.length > 10;
      if (history.length <= 10) state._recentSearchesExpanded = false;
      const visibleHistory = expanded ? history : history.slice(0, 10);
      visibleHistory.forEach((q) => {
        const chip = document.createElement('div');
        chip.className = 'kurfa-recent-chip inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1.5 rounded-full bg-surface-container-lowest border border-surface-container hover:border-primary/40 text-xs font-semibold text-on-surface shadow-xs transition-all cursor-pointer max-w-full';
        chip.innerHTML = `
          <span class="material-symbols-outlined text-[15px] text-primary flex-shrink-0">history</span>
          <span class="truncate max-w-[160px] sm:max-w-[200px]">${escapeHtml(q)}</span>
          <button type="button" class="btn-del-chip w-5 h-5 rounded-full flex items-center justify-center text-on-surface-variant hover:text-error hover:bg-surface-container transition-colors flex-shrink-0" title="${escapeHtml(t('topbar.clear'))}">
            <span class="material-symbols-outlined text-[13px]">close</span>
          </button>
        `;
        chip.onclick = () => executeSearchImmediate(q, true);
        const delBtn = chip.querySelector('.btn-del-chip');
        if (delBtn) {
          delBtn.onclick = (e) => {
            e.stopPropagation();
            removeSearchHistoryItem(q);
          };
        }
        recChips.appendChild(chip);
      });

      if (history.length > 10) {
        const isEn = getAppLanguage() === 'en';
        const toggleBtn = document.createElement('button');
        toggleBtn.type = 'button';
        toggleBtn.id = 'btn-toggle-recent-searches';
        toggleBtn.className = 'inline-flex items-center gap-1 self-start px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container border border-surface-container/70 text-[11px] font-bold text-primary transition-colors';
        toggleBtn.innerHTML = expanded
          ? `<span>${isEn ? 'Show Less' : 'Daha Az Göster'}</span><span class="material-symbols-outlined text-[15px]">expand_less</span>`
          : `<span>${isEn ? `Show All (${history.length})` : `Tümünü Göster (${history.length})`}</span><span class="material-symbols-outlined text-[15px]">expand_more</span>`;
        toggleBtn.onclick = () => {
          state._recentSearchesExpanded = !state._recentSearchesExpanded;
          renderSearchDiscoveryHub();
        };
        recSection.appendChild(toggleBtn);
      }
    }
  }

  const playedSection = document.getElementById('recent-played-search-section');
  const playedGrid = document.getElementById('recent-played-search-grid');
  if (playedSection && playedGrid) {
    const dedupPlayed = [];
    const seenPlayedKeys = new Set();
    (Array.isArray(state.recentlyPlayed) ? state.recentlyPlayed : []).forEach((trk) => {
      if (!trk || !trk.id) return;
      const idKey = String(trk.id).trim().toLowerCase();
      const textKey = `${formatCleanTrackTitle(trk.title || '').toLowerCase()}::${String(trk.artist || '').trim().toLowerCase()}`;
      if (seenPlayedKeys.has(idKey) || (textKey !== '::' && seenPlayedKeys.has(textKey))) return;
      seenPlayedKeys.add(idKey);
      if (textKey !== '::') seenPlayedKeys.add(textKey);
      dedupPlayed.push(trk);
    });
    const recentList = dedupPlayed.slice(0, 8);
    playedGrid.innerHTML = '';
    if (recentList.length === 0) {
      playedSection.classList.add('hidden');
      playedSection.classList.remove('flex');
    } else {
      playedSection.classList.remove('hidden');
      playedSection.classList.add('flex');
      recentList.forEach((trk, idx) => {
        const safeTitle = escapeHtml(formatCleanTrackTitle(trk.title) || 'Şarkı');
        const safeArtist = escapeHtml(trk.artist || '');
        const safeThumb = escapeHtml(safeUrl(trk.thumbnail || getTrackThumbnail(trk), './kurfamuzik_logo.png'));
        const card = document.createElement('div');
        card.className = 'group w-36 sm:w-40 flex-shrink-0 p-2.5 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low border border-surface-container/60 hover:border-primary/40 transition-all cursor-pointer flex flex-col gap-2 shadow-xs';
        card.innerHTML = `
          <div class="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-high">
            <img src="${safeThumb}" alt="${safeTitle}" loading="lazy" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png'">
            <button type="button" class="absolute right-2 bottom-2 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
              <span class="material-symbols-outlined text-[18px] filled">play_arrow</span>
            </button>
          </div>
          <div class="min-w-0">
            <p class="text-xs font-bold text-on-surface truncate group-hover:text-primary transition-colors">${safeTitle}</p>
            <p class="text-[11px] text-on-surface-variant truncate">${safeArtist}</p>
          </div>
        `;
        card.onclick = () => {
          setPlaybackQueueContext(recentList, idx, t('search.recent_played'), 'RECENT');
          playTrackById(trk.id, trk);
        };
        playedGrid.appendChild(card);
      });
    }
  }

  const catGrid = document.getElementById('browse-categories-grid');
  if (catGrid) {
    catGrid.innerHTML = '';
    BROWSE_CATEGORIES.forEach((cat) => {
      const tile = document.createElement('button');
      tile.type = 'button';
      tile.className = 'kurfa-cat-tile';
      tile.style.background = cat.bg;
      tile.innerHTML = `
        <span class="text-sm sm:text-base font-extrabold leading-snug relative z-10">${escapeHtml(t(cat.key))}</span>
        <span class="material-symbols-outlined kurfa-cat-icon" aria-hidden="true">${cat.icon}</span>
      `;
      tile.onclick = () => executeSearchImmediate(cat.query, true);
      catGrid.appendChild(tile);
    });
  }
}

async function executeSearchImmediate(query, autoSwitchTab = true, options = {}) {
  if (!query || query.trim().length === 0) {
    showSearchDiscoveryHub();
    return;
  }
  const cleanQ = query.trim();
  const preserveBaseQuery = Boolean(options && options.preserveBaseQuery);

  if (searchDebounceTimeout) clearTimeout(searchDebounceTimeout);
  if (searchAbortController) {
    try { searchAbortController.abort(); } catch (e) {}
  }
  searchAbortController = (typeof AbortController !== 'undefined') ? new AbortController() : null;
  const seqToken = ++searchSeqToken;

  if (!preserveBaseQuery) {
    state.baseSearchQuery = cleanQ;
    if (DOM.topSearchInput && DOM.topSearchInput.value !== cleanQ) {
      DOM.topSearchInput.value = cleanQ;
    }
    const aramaInp = document.getElementById('arama-page-search-input');
    if (aramaInp && aramaInp.value !== cleanQ) {
      aramaInp.value = cleanQ;
    }
    recordSearchHistory(cleanQ);
  }

  hideSearchDiscoveryHub();

  const urlMatch = cleanQ.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  const matchedYtId = urlMatch ? safeYtId(urlMatch[1]) : null;
  if (matchedYtId) {
    const directTrack = {
      id: matchedYtId,
      title: "YouTube (" + matchedYtId + ")",
      artist: t('search.source_direct'),
      duration: "3:30",
      thumbnail: `https://i.ytimg.com/vi/${matchedYtId}/hqdefault.jpg`
    };
    playTrackById(matchedYtId, directTrack);
    switchTab('arama', true);
    renderSpotlightCard(directTrack);
    showToast(t('toast.yt_direct_stream'));
    return;
  }

  if (autoSwitchTab && state.currentTab !== 'arama') {
    switchTab('arama', false);
  }

  if (DOM.searchResultsCount) {
    DOM.searchResultsCount.textContent = t('search.searching', { query: cleanQ });
  }
  const artistsSection = document.getElementById('search-artists-section');
  const artistsGrid = document.getElementById('search-artists-grid');
  if (artistsSection && artistsGrid) {
    artistsSection.classList.add('hidden');
    artistsSection.classList.remove('flex');
    artistsGrid.innerHTML = '';
  }
  const albumsSection = document.getElementById('search-albums-section');
  const albumsGrid = document.getElementById('search-albums-grid');
  if (albumsSection && albumsGrid) {
    albumsSection.classList.add('hidden');
    albumsSection.classList.remove('flex');
    albumsGrid.innerHTML = '';
  }

  if (DOM.searchResultsList) {
    DOM.searchResultsList.innerHTML = `
      <div class="col-span-full py-12 flex flex-col items-center justify-center gap-3 text-on-surface-variant">
        <span class="material-symbols-outlined text-[36px] animate-spin text-primary">progress_activity</span>
        <p class="text-sm font-semibold">${escapeHtml(t('search.loading_msg'))}</p>
      </div>
    `;
  }

  const sig = searchAbortController ? searchAbortController.signal : undefined;
  const artistsPromise = (!matchedYtId)
    ? kurfaSearchArtists(cleanQ, sig).catch(() => [])
    : Promise.resolve([]);

  try {
    const activeCat = state.searchCategoryFilter || 'all';
    const [data, fallbackArtists] = await Promise.all([
      kurfaSearchTracks(cleanQ, {
        signal: sig,
        source: state.searchSource || 'auto',
        type: activeCat
      }),
      artistsPromise
    ]);
    if (seqToken !== searchSeqToken) return;

    const searchArtists = (Array.isArray(data?.artists) && data.artists.length > 0)
      ? data.artists
      : fallbackArtists;
    const searchAlbums = Array.isArray(data?.albums) ? data.albums : [];
    const primaryTracks = (activeCat === 'songs' && Array.isArray(data?.songs) && data.songs.length > 0)
      ? data.songs
      : (Array.isArray(data?.results) && data.results.length > 0 ? data.results : (Array.isArray(data?.songs) ? data.songs : []));

    const artistsGrid = document.getElementById('search-artists-grid');
    if (artistsGrid) artistsGrid.classList.toggle('kurfa-grid-mode', activeCat === 'artists');
    const albumsGrid = document.getElementById('search-albums-grid');
    if (albumsGrid) albumsGrid.classList.toggle('kurfa-grid-mode', activeCat === 'albums');

    renderSearchArtistsShelf(searchArtists, cleanQ);
    renderSearchAlbumsShelf(searchAlbums, cleanQ);

    const topSongsList = (Array.isArray(data?.songs) && data.songs.length > 0) ? data.songs : primaryTracks;
    renderSearchTopSongsCard(topSongsList, cleanQ);

    if (data && data.success && primaryTracks.length > 0) {
      state.currentSearchResults = primaryTracks;
      state._rawSearchResults = [...primaryTracks];
      state.currentSearchQuery = cleanQ;
      setSearchSort('alaka', { silent: true, skipRender: true });
      renderSearchResults(primaryTracks, cleanQ);
    } else if ((activeCat === 'albums' && searchAlbums.length > 0) || (activeCat === 'artists' && searchArtists.length > 0)) {
      state.currentSearchResults = [];
      state._rawSearchResults = [];
      state.currentSearchQuery = cleanQ;
      const heroGrid = document.getElementById('search-hero-grid');
      if (heroGrid) heroGrid.classList.add('hidden');
      const wrapper = document.getElementById('search-results-wrapper');
      if (wrapper) {
        wrapper.classList.add('hidden');
        wrapper.classList.remove('flex');
      }
    } else {
      state.currentSearchResults = [];
      state._rawSearchResults = [];
      renderSearchEmpty(cleanQ);
    }
  } catch (err) {
    if (err && err.name === 'AbortError') return;
    if (seqToken !== searchSeqToken) return;
    console.error("Search fetch error:", err);
    const local = CURATED_TRACKS.filter(t =>
      (t.title || '').toLowerCase().includes(cleanQ.toLowerCase()) ||
      (t.artist || '').toLowerCase().includes(cleanQ.toLowerCase())
    );
    if (local.length > 0) {
      state.currentSearchResults = local;
      state._rawSearchResults = [...local];
      state.currentSearchQuery = cleanQ;
      setSearchSort('alaka', { silent: true, skipRender: true });
      renderSearchResults(local, cleanQ);
    } else {
      state.currentSearchResults = [];
      state._rawSearchResults = [];
      renderSearchEmpty(cleanQ);
    }
  }

  if (autoSwitchTab) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function renderSearchResults(results, query) {
  if (DOM.searchResultsCount) {
    DOM.searchResultsCount.textContent = t('search.results_found', { query, count: results.length });
  }
  if (query && query.trim()) {
    const cleanQ = query.trim();
    updatePageSeoMeta({
      tabId: 'arama',
      title: `"${cleanQ}" Arama Sonuçları — Kurfamüzik`,
      description: `${cleanQ} için şarkı, albüm ve sanatçı arama sonuçları — Kurfamüzik`,
      path: '/arama',
      updateUrl: false
    });
  }

  if (results.length > 0) {
    renderSpotlightCard(results[0]);
  }

  if (!DOM.searchResultsList) return;
  DOM.searchResultsList.innerHTML = '';
  const searchFrag = document.createDocumentFragment();
  const activeId = state.currentTrack ? state.currentTrack.id : null;

  results.forEach((track) => {
    const isCurrentRow = Boolean(activeId && activeId === track.id);
    const isPlayingCurrent = isCurrentRow && state.isPlaying;
    const card = document.createElement('div');
    card.className = `track-row flex items-center justify-between gap-2 p-3 rounded-xl transition-colors group cursor-pointer ${isCurrentRow ? 'active' : 'bg-surface-container-lowest'}`;

    const safeTitle = escapeHtml(formatCleanTrackTitle(track.title) || "Şarkı");
    const safeArtist = escapeHtml(track.artist || "Sanatçı");
    const safeDur = escapeHtml(track.duration || "3:30");
    const safeThumb = escapeHtml(safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png'));

    card.innerHTML = `
      <div class="flex items-center gap-3 min-w-0 flex-1 pr-3 overflow-hidden cursor-pointer track-info-click">
        <div class="relative w-12 h-12 rounded-lg overflow-hidden bg-surface-container-high flex-shrink-0">
          <img src="${safeThumb}" alt="${safeTitle}" loading="lazy" decoding="async" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png'">
          <div class="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span class="material-symbols-outlined text-white text-[24px]">${isPlayingCurrent ? 'pause' : 'play_arrow'}</span>
          </div>
        </div>
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div class="flex items-center gap-2 min-w-0">
            ${isCurrentRow ? renderMiniEqBarsHtml(isPlayingCurrent) : ''}
            <h4 class="kurfa-row-title text-xs md:text-sm font-bold truncate block text-on-surface group-hover:text-primary transition-colors">${safeTitle}</h4>
            ${isCurrentRow ? renderPlayingPillHtml() : ''}
          </div>
          <p class="kurfa-row-artist text-[11px] text-on-surface-variant truncate block">${safeArtist} - ${escapeHtml(t('search.yt_audio_suffix'))}</p>
        </div>
      </div>
      <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 pl-2">
        <span class="text-xs text-on-surface-variant font-mono hidden sm:inline">${safeDur}</span>
        <button type="button" class="btn-queue-track w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors" title="${escapeHtml(t('player.add_to_queue'))}">
          <span class="material-symbols-outlined text-[18px]">queue_music</span>
        </button>
        <button type="button" class="btn-add-pl-track w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" title="${escapeHtml(t('player.add_to_playlist'))}">
          <span class="material-symbols-outlined text-[18px]">add_circle</span>
        </button>
        <button type="button" class="btn-fav-track w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" title="${escapeHtml(t('player.fav_add'))}">
          <span class="material-symbols-outlined text-[18px]">${state.favorites.some(f => f.id === track.id) ? 'favorite' : 'favorite_border'}</span>
        </button>
        <button type="button" class="btn-dl-track w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors" title="${escapeHtml(t('hero.download'))}">
          <span class="material-symbols-outlined text-[18px]">download</span>
        </button>
        <button type="button" class="btn-play-track w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all" title="${escapeHtml(t('player.play_btn'))}">
          <span class="material-symbols-outlined text-[18px]">${isPlayingCurrent ? 'pause' : 'play_arrow'}</span>
        </button>
      </div>
    `;

    const playSearchTrack = () => {
      setPlaybackQueueContext(results, track, query || `${track.artist} Şarkıları`, 'ARAMA LİSTESİNDEN ÇALINIYOR');
      playTrackById(track.id, track);
    };

    const infoClick = card.querySelector('.track-info-click');
    if (infoClick) infoClick.onclick = playSearchTrack;

    const playBtn = card.querySelector('.btn-play-track');
    if (playBtn) playBtn.onclick = playSearchTrack;

    const qBtn = card.querySelector('.btn-queue-track');
    if (qBtn) {
      qBtn.onclick = (e) => {
        e.stopPropagation();
        addToQueueTrack(track);
      };
    }

    const addPlBtn = card.querySelector('.btn-add-pl-track');
    if (addPlBtn) {
      addPlBtn.onclick = (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track);
      };
    }

    const favBtn = card.querySelector('.btn-fav-track');
    if (favBtn) {
      favBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(track);
        const icon = favBtn.querySelector('.material-symbols-outlined');
        if (icon) {
          icon.textContent = state.favorites.some(f => f.id === track.id) ? 'favorite' : 'favorite_border';
        }
      };
    }

    const dlBtn = card.querySelector('.btn-dl-track');
    if (dlBtn) {
      dlBtn.onclick = (e) => {
        e.stopPropagation();
        downloadTrack(track);
      };
    }

    searchFrag.appendChild(card);
  });
  DOM.searchResultsList.appendChild(searchFrag);
}

function renderSearchArtistsShelf(artists, query) {
  const section = document.getElementById('search-artists-section');
  const grid = document.getElementById('search-artists-grid');
  if (!section || !grid) return;
  grid.innerHTML = '';

  const list = Array.isArray(artists) ? artists.filter(a => a && a.name) : [];
  if (list.length === 0) {
    section.classList.add('hidden');
    section.classList.remove('flex');
    return;
  }

  section.classList.remove('hidden');
  section.classList.add('flex');

  list.slice(0, 12).forEach((artist) => {
    const safeName = escapeHtml(artist.name || 'Sanatçı');
    const rawSub = artist.subtitle || artist.genre || '';
    const fansNum = Number(artist.fans || 0);
    const fansLabel = rawSub
      ? String(rawSub)
      : (fansNum >= 1000000
          ? t('artist.listeners_m', { val: (fansNum / 1000000).toFixed(1) })
          : (fansNum >= 1000 ? t('artist.listeners_k', { val: Math.round(fansNum / 1000) }) : (artist.genre || t('artist.profile_label'))));
    const imgUrl = safeUrl(artist.photo || artist.cover || artist.image || artist.img, './kurfamuzik_logo.png');
    const safeImg = escapeHtml(imgUrl);

    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'group flex flex-col items-center text-center w-28 sm:w-32 p-2.5 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low border border-surface-container/60 transition-all cursor-pointer flex-shrink-0';
    card.innerHTML = `
      <div class="relative w-20 h-20 sm:w-24 sm:h-24 aspect-square rounded-2xl overflow-hidden mb-2 shadow-sm ring-1 ring-surface-container group-hover:ring-primary/50 transition-all bg-surface-container-high flex-shrink-0">
        <img src="${safeImg}" alt="${safeName}" referrerpolicy="no-referrer" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
      </div>
      <span class="font-bold text-xs text-on-surface truncate w-full group-hover:text-primary transition-colors">${safeName}</span>
      <span class="text-[10px] text-on-surface-variant truncate w-full mt-0.5">${escapeHtml(fansLabel)}</span>
    `;

    const imgEl = card.querySelector('img');
    if (imgEl) {
      imgEl.addEventListener('error', () => {
        const fallback = document.createElement('div');
        fallback.className = 'w-full h-full flex items-center justify-center font-bold text-lg text-primary bg-primary/10';
        fallback.textContent = (artist.name || '?').charAt(0).toUpperCase();
        imgEl.replaceWith(fallback);
      }, { once: true });
    }

    card.onclick = () => {
      openArtistDetail({
        id: artist.browseId || artist.id || artist.name,
        name: artist.name,
        genre: artist.genre || artist.subtitle || 'Müzik',
        fans: artist.fans || 0,
        img: imgUrl,
        dynamic: true
      });
    };
    grid.appendChild(card);
  });
}

function createAlbumCard(album) {
  const albumId = album.browseId || album.id || '';
  const titleText = fixTurkishMixedCase(album.title || album.name || t('album.badge'));
  const artistText = album.artist || '';
  const yearText = album.year ? String(album.year) : '';
  const typeText = album.type ? String(album.type) : t('album.badge');
  const coverUrl = safeUrl(album.cover || album.thumbnail || album.image, './kurfamuzik_logo.png');
  const subParts = [yearText, artistText].filter(Boolean);
  const subLine = subParts.join(' • ') || typeText;

  const card = document.createElement('div');
  card.setAttribute('role', 'button');
  card.tabIndex = 0;
  card.className = 'kurfa-album-card group flex flex-col text-left p-2.5 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low border border-surface-container/60 transition-all cursor-pointer';
  card.innerHTML = `
    <div class="relative w-full aspect-square rounded-xl overflow-hidden mb-2 shadow-sm bg-surface-container-high flex-shrink-0">
      <img src="${escapeHtml(coverUrl)}" alt="${escapeHtml(titleText)}" referrerpolicy="no-referrer" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png'">
      <span class="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded-md bg-black/65 backdrop-blur-sm text-[9px] font-bold text-white uppercase tracking-wide">${escapeHtml(typeText)}</span>
      <button type="button" class="kurfa-album-quick-play absolute right-2 bottom-2 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:scale-110 active:scale-95" title="${escapeHtml(t('player.play_btn'))}">
        <span class="material-symbols-outlined text-[18px] filled">play_arrow</span>
      </button>
    </div>
    <span class="font-bold text-xs text-on-surface truncate w-full group-hover:text-primary transition-colors">${escapeHtml(titleText)}</span>
    <span class="text-[10px] text-on-surface-variant truncate w-full mt-0.5">${escapeHtml(subLine)}</span>
  `;
  const openModal = () => {
    if (albumId) {
      openAlbumDetail({
        id: albumId,
        title: titleText,
        artist: artistText,
        year: yearText,
        type: typeText,
        cover: coverUrl
      });
    }
  };
  card.onclick = openModal;
  card.onkeydown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal();
    }
  };
  const quickBtn = card.querySelector('.kurfa-album-quick-play');
  if (quickBtn) {
    quickBtn.onclick = async (e) => {
      e.stopPropagation();
      if (!albumId) return;
      try {
        const res = await fetch(`${API_BASE}/api/album?id=${encodeURIComponent(albumId)}`);
        const data = await res.json();
        if (data && data.success && Array.isArray(data.tracks) && data.tracks.length > 0) {
          const albInfo = data.album || {};
          const finalCover = safeUrl(albInfo.cover || coverUrl, './kurfamuzik_logo.png');
          const normTracks = data.tracks.map((tr) => {
            const vid = safeYtId(tr.videoId || tr.ytId || tr.id);
            return {
              id: vid || String(tr.id || ''),
              ytId: vid || undefined,
              title: fixTurkishMixedCase(tr.title || 'Şarkı'),
              artist: tr.artist || artistText || 'Sanatçı',
              duration: tr.duration || '3:30',
              thumbnail: safeUrl(tr.cover || tr.thumbnail || finalCover, './kurfamuzik_logo.png'),
              album: titleText
            };
          });
          const chosen = setPlaybackQueueContext(normTracks, 0, titleText, artistText || t('album.badge'));
          if (chosen) playTrackById(chosen.id, chosen);
          return;
        }
      } catch (_) {}
      openModal();
    };
  }
  return card;
}

function renderSearchAlbumsShelf(albums, query) {
  const section = document.getElementById('search-albums-section');
  const grid = document.getElementById('search-albums-grid');
  if (!section || !grid) return;
  grid.innerHTML = '';

  const list = Array.isArray(albums) ? albums.filter(a => a && (a.id || a.browseId) && (a.title || a.name)) : [];
  if (list.length === 0) {
    section.classList.add('hidden');
    section.classList.remove('flex');
    return;
  }

  section.classList.remove('hidden');
  section.classList.add('flex');
  list.slice(0, 12).forEach((album) => {
    grid.appendChild(createAlbumCard(album));
  });
}

function renderSearchTopSongsCard(tracks, query) {
  const heroGrid = document.getElementById('search-hero-grid');
  const card = document.getElementById('search-top-songs-card');
  const listEl = document.getElementById('search-top-songs-list');
  if (!card || !listEl) return;
  const topList = Array.isArray(tracks) ? tracks.slice(0, 4) : [];
  listEl.innerHTML = '';
  if (topList.length === 0) {
    card.classList.add('hidden');
    card.classList.remove('flex');
    if (heroGrid && (!DOM.searchSpotlightBox || DOM.searchSpotlightBox.style.display === 'none')) {
      heroGrid.classList.add('hidden');
    }
    return;
  }
  if (heroGrid) heroGrid.classList.remove('hidden');
  card.classList.remove('hidden');
  card.classList.add('flex');

  topList.forEach((tr) => {
    const safeTitle = escapeHtml(formatCleanTrackTitle(tr.title) || 'Şarkı');
    const safeArtist = escapeHtml(tr.artist || 'Sanatçı');
    const safeThumb = escapeHtml(safeUrl(tr.thumbnail || getTrackThumbnail(tr), './kurfamuzik_logo.png'));
    const safeDur = escapeHtml(tr.duration || '3:30');
    const row = document.createElement('button');
    row.type = 'button';
    row.className = 'w-full flex items-center gap-2.5 p-1.5 rounded-xl hover:bg-surface-container/60 transition-colors text-left group';
    row.innerHTML = `
      <div class="w-10 h-10 rounded-lg overflow-hidden bg-surface-container-high flex-shrink-0">
        <img src="${safeThumb}" alt="${safeTitle}" class="w-full h-full object-cover" loading="lazy" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png'">
      </div>
      <div class="min-w-0 flex-1">
        <p class="text-xs font-bold text-on-surface truncate group-hover:text-primary transition-colors">${safeTitle}</p>
        <p class="text-[11px] text-on-surface-variant truncate">${safeArtist}</p>
      </div>
      <span class="text-[11px] font-mono text-on-surface-variant tabular-nums flex-shrink-0">${safeDur}</span>
    `;
    row.onclick = () => {
      setPlaybackQueueContext(tracks, tr, query || tr.title || 'Arama', 'ÖNE ÇIKAN PARÇALARDAN ÇALINIYOR');
      playTrackById(tr.id, tr);
    };
    listEl.appendChild(row);
  });
}

function renderSpotlightCard(track) {
  if (!DOM.searchSpotlightBox || !track) return;
  DOM.searchSpotlightBox.style.display = 'flex';

  const safeTitle = escapeHtml(formatCleanTrackTitle(track.title) || "Şarkı");
  const safeArtist = escapeHtml(track.artist || "Sanatçı");
  const safeThumb = escapeHtml(safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png'));
  const isOpenCatalog = track.source === 'audius' || track.source === 'open-catalog';
  const sourceLabel = isOpenCatalog ? t('search.source_open') : t('search.source_direct');

  DOM.searchSpotlightBox.innerHTML = `
    <div class="kurfa-spotlight-ambient" style="background-image: url('${safeThumb}');" aria-hidden="true"></div>
    <div class="relative z-10 flex flex-col sm:flex-row items-center gap-4 w-full">
      <div class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shadow-lg bg-surface-container-high flex-shrink-0 group cursor-pointer" id="spotlight-thumb-btn">
        <img src="${safeThumb}" alt="${safeTitle}" class="w-full h-full object-cover" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png'">
        <div class="absolute right-2 bottom-2 w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-md opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
          <span class="material-symbols-outlined text-[18px] filled">play_arrow</span>
        </div>
      </div>
      <div class="flex-1 text-center sm:text-left min-w-0">
        <span class="text-[11px] font-semibold ${isOpenCatalog ? 'text-emerald-500' : 'text-on-surface-variant'}">${escapeHtml(sourceLabel)}</span>
        <h3 class="text-base sm:text-lg font-extrabold text-on-surface truncate mt-0.5">${safeTitle}</h3>
        <p class="text-xs text-on-surface-variant font-medium mb-3 truncate">${safeArtist}</p>
        <div class="flex flex-wrap items-center justify-center sm:justify-start gap-2">
          <button type="button" id="spotlight-play-btn" class="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-on-primary text-xs font-bold shadow-sm hover:bg-primary-container transition-all active:scale-95">
            <span class="material-symbols-outlined text-[18px] filled">play_arrow</span>
            <span>${escapeHtml(t('hero.listen_now'))}</span>
          </button>
          <button type="button" id="spotlight-dl-btn" class="kurfa-spotlight-sec-pill flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold transition-colors active:scale-95">
            <span class="material-symbols-outlined text-[16px]">download</span>
            <span>${escapeHtml(t('hero.download'))}</span>
          </button>
          <button type="button" id="spotlight-queue-btn" class="kurfa-spotlight-sec-pill flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold transition-colors active:scale-95">
            <span class="material-symbols-outlined text-[16px]">playlist_add</span>
            <span>${escapeHtml(t('player.add_to_queue'))}</span>
          </button>
        </div>
      </div>
    </div>
  `;

  const thumbBtn = document.getElementById('spotlight-thumb-btn');
  const playBtn = document.getElementById('spotlight-play-btn');
  const dlBtn = document.getElementById('spotlight-dl-btn');
  const queueBtn = document.getElementById('spotlight-queue-btn');
  const playSpotlightTrack = () => {
    const ctxList = (Array.isArray(state.currentSearchResults) && state.currentSearchResults.length > 0)
      ? state.currentSearchResults
      : [track];
    setPlaybackQueueContext(
      ctxList,
      track,
      state.currentSearchQuery || track.title || `${track.artist} Şarkıları`,
      'ARAMA LİSTESİNDEN ÇALINIYOR'
    );
    playTrackById(track.id, track);
  };
  if (thumbBtn) thumbBtn.onclick = playSpotlightTrack;
  if (playBtn) playBtn.onclick = playSpotlightTrack;
  if (dlBtn) dlBtn.onclick = () => downloadTrack(track);
  if (queueBtn) queueBtn.onclick = () => addToQueueTrack(track);
}

function renderSearchEmpty(query) {
  if (DOM.searchResultsCount) DOM.searchResultsCount.textContent = t('search.no_results');
  if (DOM.searchSpotlightBox) DOM.searchSpotlightBox.style.display = 'none';
  if (DOM.searchResultsList) {
    const safeQuery = escapeHtml(query || '');
    DOM.searchResultsList.innerHTML = `
      <div class="col-span-full py-12 flex flex-col items-center justify-center gap-2 text-on-surface-variant text-center">
        <span class="material-symbols-outlined text-[40px] text-surface-variant">search_off</span>
        <p class="text-sm font-semibold">${escapeHtml(t('search.no_results_title', { query: safeQuery }))}</p>
        <p class="text-xs">${escapeHtml(t('search.no_results_hint'))}</p>
      </div>
    `;
  }
}

// =============================================================================
// LIVE SEARCH SUGGESTIONS (AUTOCOMPLETE DROPDOWN)
// =============================================================================

const __kurfaSuggestCache = new Map();
let __kurfaSuggestTimer = null;
let __kurfaSuggestAbort = null;
let __kurfaSuggestActiveIdx = -1;
let __kurfaSuggestEntries = [];

function positionSearchSuggestionsDropdown() {
  const dd = document.getElementById('search-suggest-dropdown');
  const wrap = document.getElementById('top-search-wrapper');
  if (!dd || !wrap) return;
  if (window.innerWidth < 640) {
    dd.style.top = '62px';
    dd.style.left = '12px';
    dd.style.right = '12px';
    dd.style.width = 'auto';
    return;
  }
  const rect = wrap.getBoundingClientRect();
  dd.style.top = `${Math.round(rect.bottom + 8)}px`;
  dd.style.left = `${Math.round(rect.left)}px`;
  dd.style.right = 'auto';
  dd.style.width = `${Math.round(rect.width)}px`;
}

function hideSearchSuggestionsDropdown() {
  const dd = document.getElementById('search-suggest-dropdown');
  if (dd) {
    dd.classList.add('hidden');
    dd.innerHTML = '';
  }
  if (DOM.topSearchInput) {
    DOM.topSearchInput.setAttribute('aria-expanded', 'false');
    DOM.topSearchInput.removeAttribute('aria-activedescendant');
  }
  __kurfaSuggestActiveIdx = -1;
  __kurfaSuggestEntries = [];
}
window.hideSearchSuggestionsDropdown = hideSearchSuggestionsDropdown;

function highlightSuggestMatch(text, query) {
  const raw = String(text || '');
  const q = String(query || '').trim();
  if (!q) return escapeHtml(raw);
  const idx = raw.toLowerCase().indexOf(q.toLowerCase());
  if (idx === -1) return escapeHtml(raw);
  const before = raw.slice(0, idx);
  const match = raw.slice(idx, idx + q.length);
  const after = raw.slice(idx + q.length);
  return `${escapeHtml(before)}<mark>${escapeHtml(match)}</mark>${escapeHtml(after)}`;
}

function renderSearchSuggestionsDropdown(query, suggestions = [], items = []) {
  const dd = document.getElementById('search-suggest-dropdown');
  if (!dd) return;
  const cleanQ = String(query || '').trim();
  if (!cleanQ) {
    hideSearchSuggestionsDropdown();
    return;
  }

  const entries = [];
  const cleanItems = Array.isArray(items) ? items.slice(0, 3) : [];
  const cleanSugs = Array.isArray(suggestions) ? suggestions.slice(0, 8) : [];

  cleanItems.forEach((it) => {
    if (!it || !it.title) return;
    entries.push({
      kind: it.id ? 'track' : 'query',
      query: it.query || `${it.artist ? it.artist + ' ' : ''}${it.title}`,
      id: it.id || '',
      title: it.title,
      artist: it.artist || '',
      thumbnail: it.thumbnail || ''
    });
  });

  cleanSugs.forEach((s) => {
    const val = String(s || '').trim();
    if (!val) return;
    entries.push({
      kind: 'suggestion',
      query: val,
      title: val
    });
  });

  if (entries.length === 0) {
    hideSearchSuggestionsDropdown();
    return;
  }

  __kurfaSuggestEntries = entries;
  __kurfaSuggestActiveIdx = -1;

  let html = '';
  let idx = 0;

  if (cleanItems.length > 0) {
    html += `<div class="kurfa-suggest-section-label">${escapeHtml(getAppLanguage() === 'en' ? 'Quick Matches' : 'Hızlı Eşleşmeler')}</div>`;
    for (let i = 0; i < cleanItems.length; i++) {
      const e = entries[idx];
      const safeThumb = safeUrl(e.thumbnail, './kurfamuzik_logo.png');
      html += `
        <button type="button" role="option" id="kurfa-suggest-opt-${idx}" data-suggest-idx="${idx}" aria-selected="false" class="kurfa-suggest-item">
          <img src="${escapeHtml(safeThumb)}" alt="" class="kurfa-suggest-thumb" referrerpolicy="no-referrer" onerror="this.onerror=null;this.src='./kurfamuzik_logo.png'">
          <span class="kurfa-suggest-text-wrap">
            <span class="kurfa-suggest-title">${highlightSuggestMatch(e.title, cleanQ)}</span>
            <span class="kurfa-suggest-sub">${escapeHtml(e.artist || 'YouTube Music')}</span>
          </span>
          <span class="material-symbols-outlined text-[18px] opacity-60 flex-shrink-0" aria-hidden="true">${e.id ? 'play_arrow' : 'north_west'}</span>
        </button>
      `;
      idx++;
    }
  }

  if (cleanSugs.length > 0) {
    if (cleanItems.length > 0) {
      html += `<div class="kurfa-suggest-section-label">${escapeHtml(getAppLanguage() === 'en' ? 'Suggestions' : 'Arama Önerileri')}</div>`;
    }
    for (let i = 0; i < cleanSugs.length; i++) {
      const e = entries[idx];
      html += `
        <div class="kurfa-suggest-item" role="option" id="kurfa-suggest-opt-${idx}" data-suggest-idx="${idx}" aria-selected="false" tabindex="-1">
          <span class="kurfa-suggest-icon" aria-hidden="true">
            <span class="material-symbols-outlined text-[17px]">search</span>
          </span>
          <span class="kurfa-suggest-text-wrap">
            <span class="kurfa-suggest-title">${highlightSuggestMatch(e.title, cleanQ)}</span>
          </span>
          <span role="button" tabindex="-1" class="kurfa-suggest-fill-btn" data-suggest-fill="${idx}" title="${escapeHtml(getAppLanguage() === 'en' ? 'Fill search' : 'Kutuya Yaz')}" aria-label="Kutuya yaz">
            <span class="material-symbols-outlined text-[16px]" aria-hidden="true">north_west</span>
          </span>
        </div>
      `;
      idx++;
    }
  }

  dd.innerHTML = html;
  positionSearchSuggestionsDropdown();
  dd.classList.remove('hidden');
  if (DOM.topSearchInput) {
    DOM.topSearchInput.setAttribute('aria-expanded', 'true');
  }

  dd.querySelectorAll('[data-suggest-idx]').forEach((el) => {
    el.addEventListener('mousedown', (ev) => {
      ev.preventDefault();
    });
    el.addEventListener('click', (ev) => {
      const fillBtn = ev.target && ev.target.closest ? ev.target.closest('[data-suggest-fill]') : null;
      const itemIdx = parseInt(el.getAttribute('data-suggest-idx') || '-1', 10);
      const entry = __kurfaSuggestEntries[itemIdx];
      if (!entry) return;

      if (fillBtn) {
        ev.stopPropagation();
        if (DOM.topSearchInput) {
          DOM.topSearchInput.value = entry.query;
          DOM.topSearchInput.focus();
          if (typeof syncTopSearchClearBtn === 'function') syncTopSearchClearBtn();
          scheduleSearchSuggestions(entry.query);
        }
        return;
      }

      selectSearchSuggestionEntry(entry);
    });
  });
}

function selectSearchSuggestionEntry(entry) {
  if (!entry) return;
  hideSearchSuggestionsDropdown();
  if (DOM.topSearchInput) {
    DOM.topSearchInput.value = entry.query || entry.title || '';
    if (typeof syncTopSearchClearBtn === 'function') syncTopSearchClearBtn();
  }
  if (entry.kind === 'track' && entry.id && safeYtId(entry.id)) {
    playTrackById(entry.id, {
      id: entry.id,
      ytId: entry.id,
      title: entry.title,
      artist: entry.artist || 'Sanatçı',
      thumbnail: entry.thumbnail || `https://i.ytimg.com/vi/${entry.id}/hqdefault.jpg`,
      duration: '3:20'
    });
  }
  const q = (entry.query || entry.title || '').trim();
  if (q) {
    executeSearchImmediate(q, true);
  }
}

function moveSearchSuggestSelection(delta) {
  const dd = document.getElementById('search-suggest-dropdown');
  if (!dd || dd.classList.contains('hidden') || __kurfaSuggestEntries.length === 0) return false;
  const total = __kurfaSuggestEntries.length;
  let next = __kurfaSuggestActiveIdx + delta;
  if (next < 0) next = total - 1;
  if (next >= total) next = 0;
  __kurfaSuggestActiveIdx = next;

  dd.querySelectorAll('[data-suggest-idx]').forEach((el) => {
    const idx = parseInt(el.getAttribute('data-suggest-idx') || '-1', 10);
    const active = idx === next;
    el.classList.toggle('active', active);
    el.setAttribute('aria-selected', active ? 'true' : 'false');
    if (active) {
      try { el.scrollIntoView({ block: 'nearest' }); } catch (_) {}
      if (DOM.topSearchInput) {
        DOM.topSearchInput.setAttribute('aria-activedescendant', el.id);
      }
    }
  });
  return true;
}

async function fetchSearchSuggestions(query) {
  const cleanQ = String(query || '').trim();
  if (!cleanQ || cleanQ.length < 1) {
    hideSearchSuggestionsDropdown();
    return;
  }

  const cacheKey = cleanQ.toLowerCase();
  const cached = __kurfaSuggestCache.get(cacheKey);
  if (cached && (Date.now() - cached.ts) < 5 * 60 * 1000) {
    if (DOM.topSearchInput && DOM.topSearchInput.value.trim().toLowerCase() === cacheKey) {
      renderSearchSuggestionsDropdown(cleanQ, cached.suggestions, cached.items);
    }
    return;
  }

  if (__kurfaSuggestAbort) {
    try { __kurfaSuggestAbort.abort(); } catch (_) {}
  }
  __kurfaSuggestAbort = (typeof AbortController !== 'undefined') ? new AbortController() : null;

  try {
    const res = await fetch(`${API_BASE}/api/suggest?q=${encodeURIComponent(cleanQ)}`, {
      signal: __kurfaSuggestAbort ? __kurfaSuggestAbort.signal : undefined
    });
    if (!res.ok) return;
    const data = await res.json();
    if (!data || !data.success) return;

    const suggestions = Array.isArray(data.suggestions) ? data.suggestions : [];
    const items = Array.isArray(data.items) ? data.items : [];
    __kurfaSuggestCache.set(cacheKey, { suggestions, items, ts: Date.now() });
    if (__kurfaSuggestCache.size > 60) {
      const oldestKey = __kurfaSuggestCache.keys().next().value;
      __kurfaSuggestCache.delete(oldestKey);
    }

    if (DOM.topSearchInput && DOM.topSearchInput.value.trim().toLowerCase() === cacheKey) {
      renderSearchSuggestionsDropdown(cleanQ, suggestions, items);
    }
  } catch (err) {
    if (err && err.name === 'AbortError') return;
  }
}

function scheduleSearchSuggestions(query) {
  clearTimeout(__kurfaSuggestTimer);
  const cleanQ = String(query || '').trim();
  if (!cleanQ) {
    hideSearchSuggestionsDropdown();
    return;
  }
  __kurfaSuggestTimer = setTimeout(() => {
    fetchSearchSuggestions(cleanQ);
  }, 180);
}

function executeSearchFromInput() {
  const aramaInput = document.getElementById('arama-page-search-input');
  const rawTop = DOM.topSearchInput ? DOM.topSearchInput.value.trim() : '';
  const rawArama = aramaInput ? aramaInput.value.trim() : '';
  const query = rawArama || rawTop;
  if (query) {
    executeSearchImmediate(query, true);
  } else {
    showToast(t('toast.search_enter_query'));
  }
}

function clearSearchInput() {
  if (searchDebounceTimeout) clearTimeout(searchDebounceTimeout);
  if (searchAbortController) {
    try { searchAbortController.abort(); } catch (e) {}
  }
  searchSeqToken++;
  state.currentSearchResults = [];
  state._rawSearchResults = [];
  state.currentSearchQuery = '';
  state.baseSearchQuery = '';
  state.searchCategoryFilter = 'all';

  if (DOM.topSearchInput) DOM.topSearchInput.value = '';
  const aramaInput = document.getElementById('arama-page-search-input');
  if (aramaInput) aramaInput.value = '';
  if (typeof syncTopSearchClearBtn === 'function') syncTopSearchClearBtn();
  if (DOM.searchResultsCount) DOM.searchResultsCount.textContent = t('search.results_title');
  if (DOM.searchResultsList) {
    DOM.searchResultsList.innerHTML = `
      <div class="p-8 text-center text-on-surface-variant text-sm">${escapeHtml(t('search.empty_prompt'))}</div>
    `;
  }
  showSearchDiscoveryHub();
}

async function pasteFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    if (text) {
      if (DOM.topSearchInput) DOM.topSearchInput.value = text;
      const aramaInput = document.getElementById('arama-page-search-input');
      if (aramaInput) aramaInput.value = text;
      if (typeof syncTopSearchClearBtn === 'function') syncTopSearchClearBtn();
      executeSearchImmediate(text, true);
    }
  } catch (err) {
    showToast(t('toast.clipboard_error'));
  }
}

function applySearchFilter(filter, el) {
  document.querySelectorAll('#search-filter-chips .filter-chip').forEach(c => {
    c.classList.remove('active', 'bg-primary', 'text-on-primary');
    c.classList.add('bg-surface-container-low', 'text-on-surface-variant');
  });

  if (el) {
    el.classList.add('active', 'bg-primary', 'text-on-primary');
    el.classList.remove('bg-surface-container-low', 'text-on-surface-variant');
  }

  const aramaInput = document.getElementById('arama-page-search-input');
  const inputVal = (aramaInput && aramaInput.value ? aramaInput.value : (DOM.topSearchInput ? DOM.topSearchInput.value : "")).trim();
  if (inputVal && (!state.currentSearchQuery || inputVal !== state.currentSearchQuery)) {
    state.baseSearchQuery = inputVal;
  }
  const baseQuery = state.baseSearchQuery || inputVal || "türkçe popüler";
  const albumsGrid = document.getElementById('search-albums-grid');
  const artistsGrid = document.getElementById('search-artists-grid');

  if (filter === 'audius') {
    state.searchSource = 'audius';
    state.searchCategoryFilter = 'all';
    if (albumsGrid) albumsGrid.classList.remove('kurfa-grid-mode');
    if (artistsGrid) artistsGrid.classList.remove('kurfa-grid-mode');
    executeSearchImmediate(baseQuery, true, { preserveBaseQuery: true });
  } else if (filter === 'all' || filter === 'songs' || filter === 'albums' || filter === 'artists') {
    state.searchSource = 'auto';
    state.searchCategoryFilter = filter;
    if (albumsGrid) albumsGrid.classList.toggle('kurfa-grid-mode', filter === 'albums');
    if (artistsGrid) artistsGrid.classList.toggle('kurfa-grid-mode', filter === 'artists');
    executeSearchImmediate(baseQuery, true, { preserveBaseQuery: true });
  } else {
    state.searchSource = 'auto';
    state.searchCategoryFilter = 'all';
    if (albumsGrid) albumsGrid.classList.remove('kurfa-grid-mode');
    if (artistsGrid) artistsGrid.classList.remove('kurfa-grid-mode');
    executeSearchImmediate(`${baseQuery} ${filter}`, true, { preserveBaseQuery: true });
  }
}

function parseDurationToSec(durStr) {
  if (!durStr) return 0;
  const parts = String(durStr).split(':').map(p => parseInt(p, 10));
  if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
    return parts[0] * 60 + parts[1];
  } else if (parts.length === 3 && !isNaN(parts[0]) && !isNaN(parts[1]) && !isNaN(parts[2])) {
    return parts[0] * 3600 + parts[1] * 60 + parts[2];
  }
  return 0;
}

function setSearchSort(criteria, opts = {}) {
  const silent = Boolean(opts && opts.silent);
  const skipRender = Boolean(opts && opts.skipRender);
  state.searchSort = criteria;

  const btnAlaka = document.getElementById('btn-sort-alaka');
  const btnIzlenme = document.getElementById('btn-sort-izlenme');
  const btnEnYeni = document.getElementById('btn-sort-en-yeni');

  const activeCls = ['bg-surface-container-lowest', 'font-bold', 'text-primary', 'shadow-xs'];
  const inactiveCls = ['text-on-surface-variant', 'hover:text-on-surface', 'hover:bg-surface-container-high/40', 'font-medium'];

  const setBtnStyle = (btn, isActive) => {
    if (!btn) return;
    if (isActive) {
      btn.classList.add(...activeCls);
      btn.classList.remove(...inactiveCls);
    } else {
      btn.classList.remove(...activeCls);
      btn.classList.add(...inactiveCls);
    }
  };

  setBtnStyle(btnAlaka, criteria === 'alaka');
  setBtnStyle(btnIzlenme, criteria === 'izlenme');
  setBtnStyle(btnEnYeni, criteria === 'en-yeni');

  if (skipRender || !state.currentSearchResults || state.currentSearchResults.length === 0) {
    return;
  }

  let sorted = [...(state._rawSearchResults && state._rawSearchResults.length ? state._rawSearchResults : state.currentSearchResults)];

  if (criteria === 'izlenme') {
    const hasViews = sorted.some(t => typeof t.views === 'number' || typeof t.viewCount === 'number');
    if (hasViews) {
      sorted.sort((a, b) => Number(b.views || b.viewCount || 0) - Number(a.views || a.viewCount || 0));
    } else {
      sorted.sort((a, b) => parseDurationToSec(b.duration || '0:00') - parseDurationToSec(a.duration || '0:00'));
    }
    if (!silent) showToast(t('toast.sort_views'));
  } else if (criteria === 'en-yeni') {
    sorted.reverse();
    if (!silent) showToast(t('toast.sort_newest'));
  } else {
    if (!silent) showToast(t('toast.sort_relevance'));
  }

  state.currentSearchResults = sorted;
  renderSearchResults(sorted, state.currentSearchQuery || '');
}
window.setSearchSort = setSearchSort;

function resetSearchFilters() {
  const chips = document.querySelectorAll('#search-filter-chips .filter-chip');
  if (chips.length > 0) {
    chips.forEach(c => {
      c.classList.remove('active', 'bg-primary', 'text-on-primary');
      c.classList.add('bg-surface-container-low', 'text-on-surface-variant');
    });
    chips[0].classList.add('active', 'bg-primary', 'text-on-primary');
    chips[0].classList.remove('bg-surface-container-low', 'text-on-surface-variant');
  }

  setSearchSort('alaka', { silent: true, skipRender: true });

  if (state._rawSearchResults && state._rawSearchResults.length > 0) {
    state.currentSearchResults = [...state._rawSearchResults];
    renderSearchResults(state.currentSearchResults, state.currentSearchQuery || '');
  }

  showToast(t('toast.filters_reset'));
}
window.resetSearchFilters = resetSearchFilters;

function filterGenre(el, genre) {
  document.querySelectorAll('#filter-container .filter-pill').forEach(p => {
    p.classList.remove('bg-secondary', 'text-on-secondary', 'shadow-sm', 'font-bold');
    p.classList.add('bg-surface-container-low', 'border', 'border-surface-container', 'text-on-surface', 'font-semibold');
  });

  if (el) {
    el.classList.add('bg-secondary', 'text-on-secondary', 'shadow-sm', 'font-bold');
    el.classList.remove('bg-surface-container-low', 'border', 'border-surface-container', 'text-on-surface', 'font-semibold');
  }

  if (genre === 'all') {
    renderHomeTracklistTable();
    showToast(t('toast.all_songs_shown'));
  } else {
    showToast(t('toast.category_loading', { genre }));
    executeSearchImmediate(`${genre} 2026 dinle`, true);
  }
}

function searchByArtist(artistName) {
  executeSearchImmediate(artistName, true);
}

function quickSearchAndPlay(query) {
  if (quickSearchAbortController) {
    try { quickSearchAbortController.abort(); } catch (e) {}
  }
  quickSearchAbortController = (typeof AbortController !== 'undefined') ? new AbortController() : null;
  const seq = ++quickSearchSeqToken;

  showToast(`Çalınıyor: ${query}`);
  kurfaSearchTracks(query, {
    signal: quickSearchAbortController ? quickSearchAbortController.signal : undefined
  })
    .then(data => {
      if (seq !== quickSearchSeqToken) return;
      if (data.success && data.results && data.results.length > 0) {
        const chosen = setPlaybackQueueContext(data.results, 0, query, 'ARAMA LİSTESİNDEN ÇALINIYOR');
        renderQueueDrawerList();
        if (chosen) playTrackById(chosen.id, chosen);
      }
    })
    .catch((err) => {
      if (err && err.name === 'AbortError') return;
      if (seq !== quickSearchSeqToken) return;
      if (CURATED_TRACKS && CURATED_TRACKS.length > 0) {
        playTrackById(CURATED_TRACKS[0].id, CURATED_TRACKS[0]);
      }
    });
}

function playAllTrends() {
  const allTracks = getCuratedTracks();
  if (!allTracks || allTracks.length === 0) return;
  const chosen = setPlaybackQueueContext(allTracks, 0, t('player.yt_trends'), 'TRENDLERDEN ÇALINIYOR');
  if (chosen) playTrackById(chosen.id, chosen);
  showToast(t('toast.trends_playing'));
}

function addAllResultsToQueue() {
  if (!state.currentSearchResults || state.currentSearchResults.length === 0) {
    showToast("Sıraya eklenecek sonuç bulunamadı");
    return;
  }
  let addedCount = 0;
  state.currentSearchResults.forEach(t => {
    if (t && !state.queue.some(q => q.id === t.id)) {
      state.queue.push(t);
      addedCount++;
    }
  });
  saveQueueState();
  renderQueueDrawerList();
  showToast(addedCount > 0 ? `${addedCount} yeni şarkı sıraya eklendi` : "Tüm sonuçlar zaten sırada");
}

// =============================================================================
// 11. RENDERING GRIDS & TABLES (KEŞFET, TRENDLER, FAVORİLER, İNDİRİLENLER)
// =============================================================================

function renderPopularCardsGrid() {
  if (!DOM.popularCardsGrid) return;
  DOM.popularCardsGrid.innerHTML = '';

  const displayList = getCuratedTracks().slice(0, 8);
  displayList.forEach(track => {
    const isPlayingCurrent = state.currentTrack && state.currentTrack.id === track.id && state.isPlaying;
    const safeTitle = escapeHtml(formatCleanTrackTitle(track.title) || 'Şarkı');
    const safeArtist = escapeHtml(track.artist || 'Sanatçı');
    const safeThumb = escapeHtml(safeUrl(getTrackThumbnail(track), './kurfamuzik_logo.png'));

    const card = document.createElement('div');
    card.className = "group relative rounded-2xl bg-surface-container-lowest p-space-sm shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer border border-transparent hover:border-surface-container";
    card.innerHTML = `
      <div class="relative w-full aspect-square rounded-xl overflow-hidden mb-space-sm bg-surface-container-high">
        <img src="${safeThumb}" alt="${safeTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <button type="button" class="btn-card-add-pl absolute left-2.5 top-2.5 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm text-white flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 hover:scale-110 hover:text-primary transition-all duration-200 z-10" title="${escapeHtml(t('player.add_to_playlist'))}">
          <span class="material-symbols-outlined text-[18px]">add</span>
        </button>
        <button type="button" class="absolute right-2.5 bottom-2.5 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 active:scale-95" title="${escapeHtml(t('player.play_btn'))}">
          <span class="material-symbols-outlined text-[24px]">${isPlayingCurrent ? 'pause' : 'play_arrow'}</span>
        </button>
      </div>
      <h3 class="text-xs md:text-sm font-bold text-on-surface truncate group-hover:text-primary transition-colors">${safeTitle}</h3>
      <p class="text-[11px] text-on-surface-variant truncate font-medium mt-0.5">${safeArtist}</p>
    `;
    const playCardTrack = () => {
      setPlaybackQueueContext(getCuratedTracks(), track, 'Popüler Parçalar', 'TRENDLERDEN ÇALINIYOR');
      playTrackById(track.id, track);
    };
    card.onclick = playCardTrack;
    const addBtn = card.querySelector('.btn-card-add-pl');
    if (addBtn) {
      addBtn.onclick = (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track);
      };
    }
    DOM.popularCardsGrid.appendChild(card);
  });
}

function renderHomeTracklistTable() {
  if (!DOM.homeTracklistTable) return;
  DOM.homeTracklistTable.innerHTML = '';

  const tracks = getCuratedTracks();
  const trackFrag = document.createDocumentFragment();
  tracks.forEach((track, index) => {
    const isPlayingCurrent = state.currentTrack && state.currentTrack.id === track.id && state.isPlaying;
    const isFav = state.favorites.some(f => f.id === track.id);
    const safeTitle = escapeHtml(formatCleanTrackTitle(track.title) || 'Şarkı');
    const safeArtist = escapeHtml(track.artist || 'Sanatçı');
    const safeDur = escapeHtml(track.duration || '3:30');
    const safeThumb = escapeHtml(safeUrl(getTrackThumbnail(track), './kurfamuzik_logo.png'));

    const isCurrentRow = state.currentTrack && state.currentTrack.id === track.id;
    const row = document.createElement('div');
    row.className = `track-row flex items-center justify-between gap-2 p-2.5 rounded-xl transition-colors group cursor-pointer ${isCurrentRow ? 'active' : ''}`;
    row.innerHTML = `
      <div class="flex items-center gap-2.5 min-w-0 flex-1 pr-3 overflow-hidden">
        <span class="w-5 flex items-center justify-center flex-shrink-0 text-xs font-bold font-mono tabular-nums group-hover:hidden text-on-surface-variant">${isCurrentRow ? renderMiniEqBarsHtml(isPlayingCurrent) : (index + 1)}</span>
        <button type="button" class="btn-play-row w-5 text-center hidden group-hover:flex items-center justify-center flex-shrink-0 text-on-surface" title="${escapeHtml(t('player.play_btn'))}">
          <span class="material-symbols-outlined text-[18px]">${isPlayingCurrent ? 'pause' : 'play_arrow'}</span>
        </button>
        <img src="${safeThumb}" alt="${safeTitle}" loading="lazy" decoding="async" class="w-10 h-10 rounded-lg object-cover flex-shrink-0" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div class="flex items-center gap-2 min-w-0">
            <span class="kurfa-row-title text-xs md:text-sm font-bold truncate block text-on-surface">${safeTitle}</span>
            ${isCurrentRow ? renderPlayingPillHtml() : ''}
          </div>
          <span class="kurfa-row-artist text-[11px] text-on-surface-variant truncate block">${safeArtist}</span>
        </div>
      </div>
      <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 pl-2">
        <span class="hidden md:inline w-12 text-right font-mono text-xs text-on-surface-variant font-medium">${safeDur}</span>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors btn-add-pl-row" title="${escapeHtml(t('player.add_to_playlist'))}">
          <span class="material-symbols-outlined text-[18px]">add_circle</span>
        </button>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors btn-fav-row" title="${escapeHtml(t('player.fav_add'))}">
          <span class="material-symbols-outlined text-[18px] ${isFav ? 'text-primary filled' : ''}">${isFav ? 'favorite' : 'favorite_border'}</span>
        </button>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors btn-queue-row" title="${escapeHtml(t('player.add_to_queue'))}">
          <span class="material-symbols-outlined text-[18px]">playlist_add</span>
        </button>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-tertiary transition-colors btn-dl-row" title="${escapeHtml(t('hero.download'))}">
          <span class="material-symbols-outlined text-[18px]">download</span>
        </button>
      </div>
    `;

    const playRowTrack = () => {
      setPlaybackQueueContext(getCuratedTracks(), track, t('explore.yt_trends_title'), t('explore.yt_trends_title').toUpperCase());
      playTrackById(track.id, track);
    };

    row.onclick = playRowTrack;
    const playBtn = row.querySelector('.btn-play-row');
    if (playBtn) {
      playBtn.onclick = (e) => {
        e.stopPropagation();
        playRowTrack();
      };
    }
    const addPlBtn = row.querySelector('.btn-add-pl-row');
    if (addPlBtn) {
      addPlBtn.onclick = (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track);
      };
    }
    const favBtn = row.querySelector('.btn-fav-row');
    if (favBtn) {
      favBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(track);
      };
    }
    const qBtn = row.querySelector('.btn-queue-row');
    if (qBtn) {
      qBtn.onclick = (e) => {
        e.stopPropagation();
        addToQueueTrack(track);
      };
    }
    const dlBtn = row.querySelector('.btn-dl-row');
    if (dlBtn) {
      dlBtn.onclick = (e) => {
        e.stopPropagation();
        downloadTrack(track);
      };
    }

    trackFrag.appendChild(row);
  });
  DOM.homeTracklistTable.appendChild(trackFrag);
}

let trendsShowAll = false;

function toggleTrendsShowAll() {
  trendsShowAll = !trendsShowAll;
  const leftBtn = document.getElementById('btn-trendler-scroll-left');
  const rightBtn = document.getElementById('btn-trendler-scroll-right');
  if (leftBtn && rightBtn) {
    leftBtn.style.display = trendsShowAll ? 'none' : '';
    rightBtn.style.display = trendsShowAll ? 'none' : '';
  }
  renderTrendlerCardsGrid();
}

function renderTrendlerCardsGrid() {
  if (!DOM.trendlerCardsGrid) return;
  DOM.trendlerCardsGrid.innerHTML = '';

  const allTracks = getCuratedTracks();
  const tracksToShow = trendsShowAll ? allTracks : allTracks.slice(0, 10);

  if (trendsShowAll) {
    DOM.trendlerCardsGrid.className = "flex flex-wrap gap-3 sm:gap-4 pb-3 pt-1";
  } else {
    DOM.trendlerCardsGrid.className = "flex gap-3 sm:gap-4 overflow-x-auto pb-3 pt-1 scrollbar-none cursor-grab active:cursor-grabbing select-none";
  }

  tracksToShow.forEach((track, index) => {
    const isPlayingCurrent = state.currentTrack && state.currentTrack.id === track.id && state.isPlaying;
    const isFav = state.favorites.some(f => f.id === track.id);
    const safeTitle = escapeHtml(formatCleanTrackTitle(track.title) || 'Şarkı');
    const safeArtist = escapeHtml(track.artist || 'Sanatçı');
    const safeThumb = escapeHtml(safeUrl(getTrackThumbnail(track), './kurfamuzik_logo.png'));

    const card = document.createElement('div');
    card.className = "group relative kurfa-trend-card w-56 sm:w-64 flex-shrink-0 p-2.5 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low transition-all duration-200 cursor-pointer border border-surface-container/50 hover:border-primary/40 flex flex-col shadow-sm";
    card.innerHTML = `
      <div class="relative w-full aspect-video rounded-xl overflow-hidden mb-2 bg-surface-container-high">
        <img src="${safeThumb}" alt="${safeTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-md text-white text-[10px] font-black border border-white/10 shadow-sm">
          #${index + 1} Trend
        </div>
        <button type="button" aria-label="${escapeHtml(t('player.play_btn'))}" class="btn-trend-play-overlay absolute right-2 bottom-2 w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 hover:scale-105">
          <span class="material-symbols-outlined text-[20px] filled">${isPlayingCurrent ? 'pause' : 'play_arrow'}</span>
        </button>
      </div>
      <div class="flex items-start justify-between gap-1.5 min-w-0">
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
          <h3 class="text-xs sm:text-sm font-bold text-on-surface truncate block group-hover:text-primary transition-colors" title="${safeTitle}">${safeTitle}</h3>
          <p class="text-[11px] text-on-surface-variant truncate block font-medium mt-0.5">${safeArtist}</p>
        </div>
        <button type="button" class="w-7 h-7 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary btn-trend-add-pl flex-shrink-0" title="${escapeHtml(t('player.add_to_playlist'))}">
          <span class="material-symbols-outlined text-[17px]">add_circle</span>
        </button>
        <button type="button" class="w-7 h-7 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary btn-trend-fav flex-shrink-0" title="${escapeHtml(t('player.fav_add'))}">
          <span class="material-symbols-outlined text-[17px] ${isFav ? 'text-primary filled' : ''}">${isFav ? 'favorite' : 'favorite_border'}</span>
        </button>
      </div>
    `;
    card.onclick = () => {
      setPlaybackQueueContext(getCuratedTracks(), track, t('explore.yt_trends_title'), t('explore.yt_trends_title').toUpperCase());
      playTrackById(track.id, track);
    };
    const addPlBtn = card.querySelector('.btn-trend-add-pl');
    if (addPlBtn) {
      addPlBtn.onclick = (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track);
      };
    }
    const favBtn = card.querySelector('.btn-trend-fav');
    if (favBtn) {
      favBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(track);
        const icon = favBtn.querySelector('.material-symbols-outlined');
        const nowFav = state.favorites.some(f => f.id === track.id);
        if (icon) {
          icon.textContent = nowFav ? 'favorite' : 'favorite_border';
          if (nowFav) icon.classList.add('text-primary', 'filled');
          else icon.classList.remove('text-primary', 'filled');
        }
      };
    }
    DOM.trendlerCardsGrid.appendChild(card);
  });

  if (!trendsShowAll) {
    initDragToScroll(DOM.trendlerCardsGrid);
    bindShelfArrows(DOM.trendlerCardsGrid);
  }

  const leftBtn = document.getElementById('btn-trendler-scroll-left');
  const rightBtn = document.getElementById('btn-trendler-scroll-right');
  const headArrows = document.getElementById('trendler-head-arrows');
  if (leftBtn && rightBtn) {
    leftBtn.style.display = trendsShowAll ? 'none' : '';
    rightBtn.style.display = trendsShowAll ? 'none' : '';
  }
  if (headArrows) {
    headArrows.style.display = trendsShowAll ? 'none' : '';
  }
  if (!trendsShowAll) {
    requestAnimationFrame(() => updateShelfArrowsState(DOM.trendlerCardsGrid));
  }

  const toggleBtn = document.getElementById('btn-toggle-trends');
  if (toggleBtn) {
    toggleBtn.innerHTML = trendsShowAll
      ? `<span class="material-symbols-outlined text-[16px]">expand_less</span><span>${escapeHtml(t('explore.show_less'))}</span>`
      : `<span class="material-symbols-outlined text-[16px]">expand_more</span><span>${escapeHtml(t('explore.show_all_count', { count: allTracks.length }))}</span>`;
  }
}

// 100% Authentic Verified High-Resolution CDN Artworks + Live Deezer Hydration (24+ Artists)
const POPULAR_ARTISTS = [
  { name: "Semicenk", genre: "Pop & Arabesk", fans: 0, img: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/fb/31/11/fb3111cb-4251-ab93-eb37-75e752050237/cover.jpg/300x300bb.jpg" },
  { name: "Sezen Aksu", genre: "Türkçe Pop", fans: 0, img: "./kurfamuzik_logo.png" },
  { name: "Tarkan", genre: "Türkçe Pop", fans: 0, img: "./kurfamuzik_logo.png" },
  { name: "Ahmet Kaya", genre: "Özgün & Halk", fans: 0, img: "./kurfamuzik_logo.png" },
  { name: "Müslüm Gürses", genre: "Arabesk", fans: 0, img: "./kurfamuzik_logo.png" },
  { name: "Mabel Matiz", genre: "Türkçe Pop & Indie", fans: 0, img: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/14/9b/07/149b0748-da05-c2b8-fe06-f8edf97b6006/820233718745.jpg/300x300bb.jpg" },
  { name: "Simge", genre: "Türkçe Pop", fans: 0, img: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/05/81/0b/05810b21-3c0c-b3b7-d2b2-2050baab2de0/cover.jpg/300x300bb.jpg" },
  { name: "Mert Demir", genre: "Indie Pop & R&B", fans: 0, img: "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/43/39/bb/4339bbf7-d2c3-22ed-90e7-9a14416780c8/196922638558_Cover.jpg/300x300bb.jpg" },
  { name: "BLOK3", genre: "Drill & Trap", fans: 0, img: "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a8/92/b9/a892b962-b6e9-b027-d2f2-6192290b4dea/199350105050.jpg/300x300bb.jpg" },
  { name: "Dedublüman", genre: "Alternatif Rock", fans: 0, img: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/15/19/83/151983a9-0c68-ee9d-0350-a6940b795054/cover.jpg/300x300bb.jpg" },
  { name: "Melike Şahin", genre: "Akustik & Pop", fans: 0, img: "https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/7d/da/4c/7dda4c8a-5549-8be3-fe3f-2803b683234d/8683242226951.jpg/300x300bb.jpg" },
  { name: "Hande Ünsal", genre: "Canlı Pop Hit", fans: 0, img: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/9a/3c/bb/9a3cbb7d-1584-f189-5520-e5f1e8fb16f9/cover.jpg/300x300bb.jpg" },
  { name: "Emir Can İğrek", genre: "Alternatif Pop", fans: 0, img: "./kurfamuzik_logo.png" },
  { name: "Duman", genre: "Türkçe Rock", fans: 0, img: "./kurfamuzik_logo.png" },
  { name: "maNga", genre: "Rock & Nu-Metal", fans: 0, img: "./kurfamuzik_logo.png" },
  { name: "Motive", genre: "Türkçe Rap", fans: 0, img: "./kurfamuzik_logo.png" },
  { name: "Lvbel C5", genre: "Drill & Trap", fans: 0, img: "./kurfamuzik_logo.png" },
  { name: "Zeynep Bastık", genre: "Akustik & Pop", fans: 0, img: "./kurfamuzik_logo.png" },
  { name: "Hadise", genre: "Pop & Dance", fans: 0, img: "./kurfamuzik_logo.png" },
  { name: "Yalın", genre: "Pop & Akustik", fans: 0, img: "./kurfamuzik_logo.png" },
  { name: "Sıla", genre: "Türkçe Pop", fans: 0, img: "./kurfamuzik_logo.png" },
  { name: "Kenan Doğulu", genre: "Türkçe Pop", fans: 0, img: "./kurfamuzik_logo.png" },
  { name: "Barış Manço", genre: "Anadolu Rock", fans: 0, img: "./kurfamuzik_logo.png" },
  { name: "Cem Karaca", genre: "Anadolu Rock", fans: 0, img: "./kurfamuzik_logo.png" }
];

const FEATURED_ARTISTS_CACHE_KEY = 'kurfa_featured_artists_v3';
const FEATURED_ARTISTS_TTL_MS = 24 * 60 * 60 * 1000;

function formatListenerCount(fans) {
  const num = Number(fans || 0);
  if (!Number.isFinite(num) || num < 1000) return '';
  if (num >= 1000000) return t('artist.listeners_m', { val: (num / 1000000).toFixed(1) });
  return t('artist.listeners_k', { val: Math.round(num / 1000) });
}

function normalizeArtistAvatarUrl(url) {
  const raw = String(url || '').trim();
  if (!raw || !raw.startsWith('http')) return '';
  if (raw.includes('googleusercontent.com') && /=w\d+-h\d+/.test(raw)) {
    return raw.replace(/=w\d+-h\d+[^/\s]*/, '=w544-h544-l90-rj');
  }
  return raw;
}

function mergeHydratedFeaturedArtists(apiArtists) {
  if (!Array.isArray(apiArtists) || apiArtists.length === 0) return;
  const norm = (s) => String(s || '').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
  const byName = new Map();
  apiArtists.forEach((a) => {
    if (a && a.name) byName.set(norm(a.name), a);
  });
  let changed = false;
  POPULAR_ARTISTS.forEach((entry) => {
    const match = byName.get(norm(entry.name));
    if (match) {
      const nextImg = normalizeArtistAvatarUrl(match.image || match.photo || match.cover || match.thumbnail);
      if (nextImg) {
        entry.img = nextImg;
        changed = true;
      }
      if (Number(match.fans) > 0) {
        entry.fans = Number(match.fans);
        changed = true;
      }
      if (match.subtitle) {
        entry.subtitle = String(match.subtitle);
        changed = true;
      }
      if (match.genre) {
        entry.genre = match.genre;
        changed = true;
      }
      if (match.id || match.browseId) entry.id = match.id || match.browseId;
    }
  });
  if (changed) {
    renderPopularArtistsGrid();
  }
}

async function hydrateFeaturedArtistsFromApi() {
  try {
    localStorage.removeItem('kurfa_featured_artists_v1');
    localStorage.removeItem('kurfa_featured_artists_v2');
  } catch (_) {}

  let hasFreshV3 = false;
  try {
    const rawCache = safeGetJSON(FEATURED_ARTISTS_CACHE_KEY, null);
    if (rawCache && Array.isArray(rawCache.artists) && rawCache.artists.length > 0 && (Date.now() - Number(rawCache.ts || 0)) < FEATURED_ARTISTS_TTL_MS) {
      mergeHydratedFeaturedArtists(rawCache.artists);
      const hasLegacyDeezer = rawCache.artists.some((a) => a && (a.source === 'deezer' || String(a.image || '').includes('dzcdn.net')));
      if (!hasLegacyDeezer || (Date.now() - Number(rawCache.ts || 0)) < 5 * 60 * 1000) {
        hasFreshV3 = true;
      }
    }
  } catch (_) {}

  if (hasFreshV3) return;

  try {
    const res = await fetch(`${API_BASE}/api/featured-artists`);
    if (!res.ok) return;
    const data = await res.json();
    if (data && data.success && Array.isArray(data.artists) && data.artists.length > 0) {
      mergeHydratedFeaturedArtists(data.artists);
      safeSetStorage(FEATURED_ARTISTS_CACHE_KEY, JSON.stringify({ ts: Date.now(), artists: data.artists }));
    }
  } catch (_) {}
}

function createArtistCard(artist) {
  const safeName = escapeHtml(artist.name || 'Sanatçı');
  const listenerText = formatListenerCount(artist.fans);
  const subLabel = escapeHtml(artist.subtitle || listenerText || artist.genre || 'Müzik');
  const safeImg = escapeHtml(safeUrl(artist.img || artist.image || artist.photo || artist.cover, './kurfamuzik_logo.png'));

  const card = document.createElement('div');
  card.className = "group flex flex-col items-center text-center p-2.5 rounded-2xl hover:bg-surface-container-low transition-all duration-300 cursor-pointer flex-shrink-0 w-28 sm:w-32";
  card.innerHTML = `
    <div class="artist-avatar-wrap relative w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mb-2 shadow-md ring-2 ring-surface-container group-hover:ring-primary/60 transition-all bg-surface-container-high">
      <img src="${safeImg}" alt="${safeName}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
      <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <span class="w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform">
          <span class="material-symbols-outlined text-[20px] filled">play_arrow</span>
        </span>
      </div>
    </div>
    <h3 class="font-bold text-xs sm:text-sm text-on-surface truncate w-full group-hover:text-primary transition-colors">${safeName}</h3>
    <span class="text-[10px] text-on-surface-variant truncate w-full mt-0.5">${subLabel}</span>
  `;

  const imgEl = card.querySelector('img');
  if (imgEl) {
    imgEl.addEventListener('error', () => {
      const initialDiv = document.createElement('div');
      initialDiv.className = 'w-full h-full flex items-center justify-center font-bold text-lg text-primary bg-primary/10';
      initialDiv.textContent = (artist.name || '?').charAt(0).toUpperCase();
      imgEl.replaceWith(initialDiv);
    }, { once: true });
  }

  card.onclick = () => openArtistDetail(artist);
  return card;
}

const _hydratedUserArtistsMap = new Map();
let _hydratingArtistQueue = new Set();

function buildMergedArtistsList() {
  const norm = (s) => String(s || '').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
  let storedAvatars = {};
  try { storedAvatars = JSON.parse(localStorage.getItem('kurfa_artist_avatars_v1') || '{}') || {}; } catch (_) {}

  const out = [];
  const seen = new Set();

  const seeds = (typeof getPersonalizedKesfetSeeds === 'function') ? getPersonalizedKesfetSeeds() : { topArtists: [] };
  const byPopName = new Map();
  POPULAR_ARTISTS.forEach(a => {
    if (a && a.name) byPopName.set(norm(a.name), a);
  });

  // 1. User's actually listened & liked artists FIRST (merged with verified profile avatars)
  (seeds.topArtists || []).forEach((ua) => {
    if (!ua || (typeof isLocalOrInvalidArtist === 'function' && isLocalOrInvalidArtist(ua.name))) return;
    const key = norm(ua.name);
    if (!key || seen.has(key)) return;
    seen.add(key);
    const popMatch = byPopName.get(key);
    const cached = _hydratedUserArtistsMap.get(key) || storedAvatars[key] || null;
    const popImg = (popMatch && popMatch.img && !popMatch.img.includes('kurfamuzik_logo')) ? popMatch.img : '';
    const finalImg = (cached && cached.image) || popImg || ua.thumb || './kurfamuzik_logo.png';
    out.push({
      id: (cached && cached.browseId) || (popMatch && popMatch.id) || '',
      browseId: (cached && cached.browseId) || (popMatch && popMatch.id) || '',
      name: (cached && cached.name) || ua.name,
      img: finalImg,
      image: finalImg,
      photo: finalImg,
      fans: (cached && cached.fans) || (popMatch && popMatch.fans) || 0,
      subtitle: (cached && cached.subtitle) || (popMatch && popMatch.subtitle) || (popMatch && popMatch.genre) || (getAppLanguage() === 'en' ? 'Your Top Artist' : 'Dinlediğiniz Sanatçı'),
      genre: (popMatch && popMatch.genre) || 'Sanatçı'
    });
  });

  // 2. Hydrated live explore artists & featured popular artists
  POPULAR_ARTISTS.forEach((a) => {
    const key = norm(a.name);
    if (!key || seen.has(key)) return;
    seen.add(key);
    const cached = _hydratedUserArtistsMap.get(key) || storedAvatars[key] || null;
    const imgOk = a.img && !a.img.includes('kurfamuzik_logo');
    out.push({
      ...a,
      img: imgOk ? a.img : ((cached && cached.image) || './kurfamuzik_logo.png'),
      subtitle: a.subtitle || (cached && cached.subtitle) || a.genre || 'Sanatçı',
      fans: a.fans || (cached && cached.fans) || 0
    });
  });

  return out;
}

async function hydrateMissingArtistProfilesAsync(artistsList) {
  const norm = (s) => String(s || '').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]/g, '');
  let storedAvatars = {};
  try { storedAvatars = JSON.parse(localStorage.getItem('kurfa_artist_avatars_v1') || '{}') || {}; } catch (_) {}

  const needFetch = (artistsList || [])
    .slice(0, 14)
    .filter((a) => {
      if (!a || !a.name) return false;
      const key = norm(a.name);
      if (_hydratingArtistQueue.has(key)) return false;
      const cached = storedAvatars[key];
      if (cached && cached.image && (Date.now() - Number(cached.ts || 0)) < 24 * 3600 * 1000) return false;
      const imgStr = String(a.img || '');
      return !imgStr || imgStr.includes('kurfamuzik_logo') || imgStr.includes('ytimg.com');
    })
    .slice(0, 5);

  if (needFetch.length === 0) return;
  needFetch.forEach(a => _hydratingArtistQueue.add(norm(a.name)));

  try {
    const results = await Promise.allSettled(
      needFetch.map(a => fetch(`${API_BASE}/api/artist?name=${encodeURIComponent(a.name)}`).then(r => (r.ok ? r.json() : null)).catch(() => null))
    );
    let updated = false;
    results.forEach((res, idx) => {
      if (res.status !== 'fulfilled' || !res.value || !res.value.artist) return;
      const art = res.value.artist;
      const targetName = needFetch[idx].name;
      const key = norm(targetName);
      const photo = normalizeArtistAvatarUrl(art.photo || art.image || art.cover);
      if (photo) {
        const entry = {
          name: art.name || targetName,
          browseId: art.browseId || art.id || '',
          image: photo,
          fans: Number(art.fans || 0),
          subtitle: art.subtitle || art.genre || '',
          ts: Date.now()
        };
        _hydratedUserArtistsMap.set(key, entry);
        storedAvatars[key] = entry;
        updated = true;
      }
    });
    if (updated) {
      safeSetStorage('kurfa_artist_avatars_v1', JSON.stringify(storedAvatars));
      renderPopularArtistsGrid(false);
    }
  } catch (_) {}
}

function renderPopularArtistsGrid(allowHydrate = true) {
  const merged = buildMergedArtistsList();
  const shelfContainer = document.getElementById('popular-artists-grid');
  if (shelfContainer) {
    shelfContainer.innerHTML = '';
    merged.slice(0, 20).forEach(artist => {
      shelfContainer.appendChild(createArtistCard(artist));
    });
    initDragToScroll(shelfContainer);
    bindShelfArrows(shelfContainer);
    requestAnimationFrame(() => updateShelfArrowsState(shelfContainer));
  }

  const kesifContainer = document.getElementById('kesif-artists-grid');
  if (kesifContainer) {
    kesifContainer.innerHTML = '';
    merged.slice(0, 16).forEach(artist => {
      kesifContainer.appendChild(createArtistCard(artist));
    });
  }

  if (allowHydrate) {
    hydrateMissingArtistProfilesAsync(merged);
  }
}

const CURATED_MIXES = [
  {
    name: "Günlük Mix 1",
    subtitle: "Semicenk, Mert Demir, Emir Can İğrek",
    query: "Semicenk Mert Demir Emir Can İğrek en popüler şarkıları"
  },
  {
    name: "Akustik Sakinlik",
    subtitle: "Dedublüman, Madrigal, Mavi Gri",
    query: "Dedublüman Madrigal Mavi Gri akustik şarkılar dinle"
  },
  {
    name: "Türkçe Drill & Rap",
    subtitle: "Blok3, UZI, Lvbel C5, Motive",
    query: "Blok3 UZI Lvbel C5 Motive en çok dinlenen rap şarkılar"
  },
  {
    name: "Koşu & Motivasyon",
    subtitle: "High BPM Club Remixleri",
    query: "Türkçe club remix yüksek bpm motivasyon spor şarkıları"
  }
];

function playCuratedMix(index) {
  const mix = (_dynamicMixes && _dynamicMixes[index]) || CURATED_MIXES[index] || CURATED_MIXES[0];
  showToast(`${mix.name} başlatılıyor...`);
  quickSearchAndPlay(mix.query);
}

let currentArtistTracks = [];
let artistAbortController = null;
let artistSeqToken = 0;

function openArtistDetail(artist) {
  const prevTab = state.currentTab || 'kesfet';
  const backLabel = document.getElementById('artist-detail-back-label');
  if (prevTab !== 'kesfet') {
    state._artistReturnTab = prevTab;
    if (backLabel) backLabel.textContent = prevTab === 'arama' ? t('artist.back_search') : t('artist.back');
    switchTab('kesfet', false, { preserveArtist: true });
  } else {
    state._artistReturnTab = null;
    if (backLabel) backLabel.textContent = t('artist.back_explore');
  }

  const mainCont = document.getElementById('kesfet-main-container');
  const artistCont = document.getElementById('kesfet-artist-container');
  if (!mainCont || !artistCont) return;

  if (artistAbortController) {
    try { artistAbortController.abort(); } catch (e) {}
  }
  artistAbortController = (typeof AbortController !== 'undefined') ? new AbortController() : null;
  const seq = ++artistSeqToken;
  currentArtistTracks = [];

  mainCont.classList.add('hidden');
  artistCont.classList.remove('hidden');

  const avatarEl = document.getElementById('artist-profile-avatar');
  const nameEl = document.getElementById('artist-profile-name');
  const genreEl = document.getElementById('artist-profile-genre');
  const countEl = document.getElementById('artist-tracks-count');
  const listEl = document.getElementById('artist-tracks-container');
  const albumsSectionEl = document.getElementById('artist-albums-section');
  const albumsGridEl = document.getElementById('artist-albums-grid');
  if (albumsSectionEl && albumsGridEl) {
    albumsSectionEl.classList.add('hidden');
    albumsSectionEl.classList.remove('flex');
    albumsGridEl.innerHTML = '';
  }

  if (avatarEl) {
    avatarEl.referrerPolicy = 'no-referrer';
    avatarEl.src = safeUrl(artist.photo || artist.cover || artist.img || artist.image, './kurfamuzik_logo.png');
  }
  if (nameEl) nameEl.textContent = artist.name;
  updatePageSeoMeta({
    tabId: 'kesfet',
    title: `${artist.name} Şarkıları ve Albümleri — Kurfamüzik`,
    description: `${artist.name} popüler şarkıları, albümleri ve kesintisiz müzik akışı.`,
    path: '/kesfet',
    updateUrl: false
  });
  const listenerMeta = formatListenerCount(artist.fans) || t('artist.profile_label');
  if (genreEl) genreEl.textContent = `${artist.genre || 'Müzik'} • ${listenerMeta}`;
  if (countEl) countEl.textContent = t('artist.loading');
  if (listEl) {
    listEl.innerHTML = `
      <div class="flex items-center justify-center py-12 gap-3 text-on-surface-variant text-xs">
        <div class="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
        <span>${escapeHtml(t('artist.loading_tracks', { name: artist.name }))}</span>
      </div>
    `;
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });

  const loadArtistTracks = async () => {
    const sig = artistAbortController ? artistAbortController.signal : undefined;
    try {
      const idParam = (artist.id && String(artist.id).startsWith('UC')) ? `&id=${encodeURIComponent(artist.id)}` : '';
      const apiRes = await fetch(
        `${API_BASE}/api/artist?name=${encodeURIComponent(artist.name || '')}${idParam}`,
        { signal: sig }
      );
      if (apiRes.ok) {
        const apiData = await apiRes.json();
        if (seq !== artistSeqToken) return;
        if (apiData?.artist) {
          const officialPhoto = apiData.artist.photo || apiData.artist.cover || apiData.artist.image;
          if (avatarEl && officialPhoto) {
            avatarEl.src = safeUrl(officialPhoto, './kurfamuzik_logo.png');
          }
          if (genreEl) {
            if (apiData.artist.subtitle) {
              genreEl.textContent = String(apiData.artist.subtitle);
            } else if (apiData.artist.fans) {
              const fLabel = formatListenerCount(apiData.artist.fans) || t('artist.profile_label');
              genreEl.textContent = `${apiData.artist.genre || artist.genre || 'Müzik'} • ${fLabel}`;
            }
          }
        }
        if (Array.isArray(apiData?.albums) && apiData.albums.length > 0) {
          renderArtistAlbumsShelf(apiData.albums);
        }
        if (apiData && apiData.success && Array.isArray(apiData.tracks) && apiData.tracks.length > 0) {
          currentArtistTracks = apiData.tracks;
          if (countEl) countEl.textContent = t('artist.track_count', { count: apiData.tracks.length });
          renderArtistTracks(apiData.tracks, artist.name);
          return;
        }
      }
    } catch (err) {
      if (err && err.name === 'AbortError') return;
    }

    const data = await kurfaSearchTracks(`${artist.name} şarkıları`, { signal: sig });
    if (seq !== artistSeqToken) return;
    if (data.success && data.results && data.results.length > 0) {
      currentArtistTracks = data.results;
      if (countEl) countEl.textContent = t('artist.track_count', { count: data.results.length });
      renderArtistTracks(data.results, artist.name);
    } else {
      if (countEl) countEl.textContent = t('artist.track_count', { count: 0 });
      if (listEl) {
        listEl.innerHTML = `<div class="text-center py-8 text-xs text-on-surface-variant">${escapeHtml(t('artist.no_tracks'))}</div>`;
      }
    }
  };

  loadArtistTracks().catch((err) => {
    if (err && err.name === 'AbortError') return;
    if (seq !== artistSeqToken) return;
    if (countEl) countEl.textContent = t('artist.error');
    if (listEl) {
      listEl.innerHTML = `<div class="text-center py-8 text-xs text-on-surface-variant">${escapeHtml(t('artist.conn_error'))}</div>`;
    }
  });

  const playAllBtn = document.getElementById('artist-play-all-btn');
  if (playAllBtn) {
    playAllBtn.onclick = () => {
      if (currentArtistTracks && currentArtistTracks.length > 0) {
        const chosen = setPlaybackQueueContext(currentArtistTracks, 0, artist.name, 'SANATÇIDAN ÇALINIYOR');
        if (chosen) playTrackById(chosen.id, chosen);
        showToast(`${artist.name} şarkıları çalınıyor`);
      }
    };
  }

  const shuffleBtn = document.getElementById('artist-shuffle-btn');
  if (shuffleBtn) {
    shuffleBtn.onclick = () => {
      if (currentArtistTracks && currentArtistTracks.length > 0) {
        state.isShuffle = true;
        safeSetStorage('kurfa_shuffle', 'true');
        syncShuffleRepeatUI();
        const randIdx = Math.floor(Math.random() * currentArtistTracks.length);
        const chosen = setPlaybackQueueContext(currentArtistTracks, randIdx, artist.name, t('artist.official_profile').toUpperCase());
        if (chosen) playTrackById(chosen.id, chosen);
        showToast(getAppLanguage() === 'en' ? `Shuffling ${artist.name}` : `${artist.name} karışık çalınıyor`);
      }
    };
  }
}

function renderArtistTracks(tracks, artistName) {
  const listEl = document.getElementById('artist-tracks-container');
  if (!listEl) return;
  listEl.innerHTML = '';

  const isEn = getAppLanguage() === 'en';
  tracks.forEach((track, idx) => {
    const isFav = state.favorites.some(f => f.id === track.id);
    const safeTitle = escapeHtml(formatCleanTrackTitle(track.title) || (isEn ? 'Track' : 'Şarkı'));
    const safeArtist = escapeHtml(track.artist || artistName || (isEn ? 'Artist' : 'Sanatçı'));
    const safeDur = escapeHtml(track.duration || '3:30');
    const safeThumb = escapeHtml(safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png'));

    const isCurrentRow = state.currentTrack && (state.currentTrack.id === track.id || (track.ytId && state.currentTrack.ytId === track.ytId));
    const isPlayingCurrent = isCurrentRow && state.isPlaying;
    const row = document.createElement('div');
    row.className = `track-row flex items-center justify-between gap-2 p-2 sm:p-2.5 rounded-xl transition-colors group cursor-pointer ${isCurrentRow ? 'active' : ''}`;
    row.innerHTML = `
      <div class="flex items-center gap-3 min-w-0 flex-1 pr-3 overflow-hidden">
        <span class="w-6 flex items-center justify-center flex-shrink-0 text-xs font-bold font-mono tabular-nums group-hover:hidden text-on-surface-variant">${isCurrentRow ? renderMiniEqBarsHtml(isPlayingCurrent) : (idx + 1)}</span>
        <button type="button" class="w-6 h-6 rounded-full items-center justify-center text-on-surface hidden group-hover:flex flex-shrink-0" title="${escapeHtml(t('player.play_btn'))}">
          <span class="material-symbols-outlined text-[18px] filled">${isPlayingCurrent ? 'pause' : 'play_arrow'}</span>
        </button>

        <img src="${safeThumb}" alt="${safeTitle}" class="w-10 h-10 sm:w-11 sm:h-11 rounded-lg object-cover flex-shrink-0 shadow-sm bg-surface-container-high" loading="lazy" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div class="flex items-center gap-2 min-w-0">
            <span class="kurfa-row-title text-xs sm:text-sm font-bold truncate block text-on-surface">${safeTitle}</span>
            ${isCurrentRow ? renderPlayingPillHtml() : ''}
          </div>
          <span class="kurfa-row-artist text-[11px] text-on-surface-variant truncate block font-medium">${safeArtist}</span>
        </div>
      </div>

      <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 pl-2">
        <span class="text-xs text-on-surface-variant font-mono hidden sm:inline mr-2">${safeDur}</span>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors btn-artist-fav" title="${escapeHtml(t('player.fav_add'))}">
          <span class="material-symbols-outlined text-[17px] ${isFav ? 'text-primary filled' : ''}">${isFav ? 'favorite' : 'favorite_border'}</span>
        </button>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors btn-artist-dl" title="${escapeHtml(t('hero.download'))}">
          <span class="material-symbols-outlined text-[17px]">download</span>
        </button>
      </div>
    `;

    row.onclick = () => {
      setPlaybackQueueContext(tracks, track, artistName || track.artist || 'Sanatçı', 'SANATÇIDAN ÇALINIYOR');
      playTrackById(track.id, track);
    };

    const favBtn = row.querySelector('.btn-artist-fav');
    if (favBtn) {
      favBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(track);
        const icon = favBtn.querySelector('.material-symbols-outlined');
        const nowFav = state.favorites.some(f => f.id === track.id);
        if (icon) {
          icon.textContent = nowFav ? 'favorite' : 'favorite_border';
          if (nowFav) icon.classList.add('text-primary', 'filled');
          else icon.classList.remove('text-primary', 'filled');
        }
      };
    }

    const dlBtn = row.querySelector('.btn-artist-dl');
    if (dlBtn) {
      dlBtn.onclick = (e) => {
        e.stopPropagation();
        downloadTrack(track);
      };
    }

    listEl.appendChild(row);
  });
}

function closeArtistDetail() {
  if (artistAbortController) {
    try { artistAbortController.abort(); } catch (e) {}
  }
  artistSeqToken++;
  currentArtistTracks = [];
  const mainCont = document.getElementById('kesfet-main-container');
  const artistCont = document.getElementById('kesfet-artist-container');
  if (mainCont) mainCont.classList.remove('hidden');
  if (artistCont) artistCont.classList.add('hidden');
  if (state._artistReturnTab && state._artistReturnTab !== 'kesfet') {
    const targetTab = state._artistReturnTab;
    state._artistReturnTab = null;
    switchTab(targetTab, false);
  } else {
    updatePageSeoMeta({ tabId: state.currentTab || 'kesfet', updateUrl: false });
  }
}

function renderArtistAlbumsShelf(albums) {
  const section = document.getElementById('artist-albums-section');
  const grid = document.getElementById('artist-albums-grid');
  const countEl = document.getElementById('artist-albums-count');
  if (!section || !grid) return;
  grid.innerHTML = '';

  const list = Array.isArray(albums) ? albums.filter(a => a && (a.id || a.browseId) && (a.title || a.name)) : [];
  if (list.length === 0) {
    section.classList.add('hidden');
    section.classList.remove('flex');
    return;
  }

  section.classList.remove('hidden');
  section.classList.add('flex');
  if (countEl) countEl.textContent = t('artist.album_count', { count: list.length });
  list.forEach((album) => {
    grid.appendChild(createAlbumCard(album));
  });
}

let _albumAbortController = null;
let _albumSeqToken = 0;

function closeAlbumDetail() {
  if (_albumAbortController) {
    try { _albumAbortController.abort(); } catch (_) {}
  }
  _albumSeqToken++;
  const modal = document.getElementById('album-detail-modal');
  const card = document.getElementById('album-detail-modal-card');
  if (modal) {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100', 'pointer-events-auto');
  }
  if (card) {
    card.classList.add('scale-95');
    card.classList.remove('scale-100');
  }
  updatePageSeoMeta({ tabId: state.currentTab || 'kesfet', updateUrl: false });
}
window.closeAlbumDetail = closeAlbumDetail;

let _currentAlbumModalState = null;

function renderAlbumDetailTracksList() {
  const tracksEl = document.getElementById('album-detail-tracks');
  if (!tracksEl || !_currentAlbumModalState) return;
  const { normalizedTracks, finalTitle, finalArtist, filterText, sortKey } = _currentAlbumModalState;
  const q = String(filterText || '').trim().toLowerCase();

  let list = [...normalizedTracks];
  if (q) {
    list = list.filter((tr) =>
      (tr.title || '').toLowerCase().includes(q) ||
      (tr.artist || '').toLowerCase().includes(q)
    );
  }
  if (sortKey === 'title') {
    list.sort((a, b) => String(a.title || '').localeCompare(String(b.title || ''), 'tr'));
  } else if (sortKey === 'duration') {
    list.sort((a, b) => parseDurationToSec(a.duration) - parseDurationToSec(b.duration));
  } else {
    list.sort((a, b) => Number(a.trackIndex || 0) - Number(b.trackIndex || 0));
  }

  tracksEl.innerHTML = '';
  if (list.length === 0) {
    tracksEl.innerHTML = `<div class="text-center py-8 text-xs text-on-surface-variant">Eşleşen parça bulunamadı</div>`;
    return;
  }

  const frag = document.createDocumentFragment();
  list.forEach((tr) => {
    const origIdx = Math.max(0, normalizedTracks.indexOf(tr));
    const trackNumber = Number.isFinite(Number(tr.trackIndex)) ? Number(tr.trackIndex) : (origIdx + 1);
    const isCurrentRow = state.currentTrack && (state.currentTrack.id === tr.id || (tr.ytId && state.currentTrack.ytId === tr.ytId));
    const isPlayingCurrent = isCurrentRow && state.isPlaying;
    const isFav = state.favorites.some(f => f.id === tr.id);
    const numLabel = String(trackNumber).padStart(2, '0');
    const row = document.createElement('div');
    row.className = `track-row kurfa-album-track-row flex items-center justify-between gap-2.5 px-3 py-2.5 rounded-xl transition-colors group cursor-pointer ${isCurrentRow ? 'active' : ''}`;
    row.innerHTML = `
      <div class="flex items-center gap-3 min-w-0 flex-1 pr-1 overflow-hidden">
        <div class="w-7 flex items-center justify-center flex-shrink-0">
          ${isCurrentRow
            ? renderMiniEqBarsHtml(isPlayingCurrent)
            : `<span class="text-xs font-mono font-bold text-on-surface-variant tabular-nums group-hover:hidden">${numLabel}</span>
               <span class="material-symbols-outlined text-[18px] text-primary hidden group-hover:inline-flex filled">play_arrow</span>`}
        </div>
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
          <span class="kurfa-row-title text-[13px] sm:text-sm font-bold truncate block text-on-surface leading-snug">${escapeHtml(tr.title)}</span>
          <span class="kurfa-row-artist text-[11px] text-on-surface-variant truncate block mt-0.5">${escapeHtml(tr.artist)}</span>
        </div>
      </div>
      <div class="flex items-center gap-1 flex-shrink-0">
        <span class="text-[11px] text-on-surface-variant font-mono tabular-nums mr-1">${escapeHtml(tr.duration)}</span>
        <button type="button" class="btn-alb-q w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" title="${escapeHtml(t('player.add_to_queue'))}">
          <span class="material-symbols-outlined text-[17px]">queue_music</span>
        </button>
        <button type="button" class="btn-alb-fav w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors" title="${escapeHtml(t('player.fav_add'))}">
          <span class="material-symbols-outlined text-[17px] ${isFav ? 'text-primary filled' : ''}">${isFav ? 'favorite' : 'favorite_border'}</span>
        </button>
      </div>
    `;
    row.onclick = () => {
      const chosen = setPlaybackQueueContext(normalizedTracks, origIdx, finalTitle, finalArtist || t('album.badge'));
      if (chosen) playTrackById(chosen.id, chosen);
      closeAlbumDetail();
    };
    const qBtn = row.querySelector('.btn-alb-q');
    if (qBtn) {
      qBtn.onclick = (e) => {
        e.stopPropagation();
        addToQueueTrack(tr);
      };
    }
    const fBtn = row.querySelector('.btn-alb-fav');
    if (fBtn) {
      fBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(tr);
        const ic = fBtn.querySelector('.material-symbols-outlined');
        const nowFav = state.favorites.some(f => f.id === tr.id);
        if (ic) {
          ic.textContent = nowFav ? 'favorite' : 'favorite_border';
          ic.classList.toggle('text-primary', nowFav);
          ic.classList.toggle('filled', nowFav);
        }
      };
    }
    frag.appendChild(row);
  });
  tracksEl.appendChild(frag);
}

function filterAlbumDetailTracks(q) {
  if (!_currentAlbumModalState) return;
  _currentAlbumModalState.filterText = String(q || '');
  renderAlbumDetailTracksList();
}

function setAlbumDetailSort(sortKey) {
  const key = (sortKey === 'title' || sortKey === 'duration') ? sortKey : 'original';
  document.querySelectorAll('#album-sort-pills button').forEach((btn) => {
    const active = btn.getAttribute('data-alb-sort') === key;
    btn.className = active
      ? 'px-2.5 py-1 rounded-full bg-surface-container-lowest text-primary font-bold shadow-xs transition-all'
      : 'px-2.5 py-1 rounded-full text-on-surface-variant hover:text-on-surface transition-all';
  });
  if (_currentAlbumModalState) {
    _currentAlbumModalState.sortKey = key;
    renderAlbumDetailTracksList();
  }
}

async function openAlbumDetail(album) {
  const albumId = String(album?.browseId || album?.id || '').trim();
  if (!albumId) return;
  const modal = document.getElementById('album-detail-modal');
  const card = document.getElementById('album-detail-modal-card');
  const coverEl = document.getElementById('album-detail-cover');
  const typeEl = document.getElementById('album-detail-type');
  const titleEl = document.getElementById('album-detail-title');
  const metaEl = document.getElementById('album-detail-meta');
  const tracksEl = document.getElementById('album-detail-tracks');
  const playAllBtn = document.getElementById('album-detail-play-all');
  const shuffleAllBtn = document.getElementById('album-detail-shuffle-all');
  const queueAllBtn = document.getElementById('album-detail-queue-all');
  const saveBtn = document.getElementById('album-detail-save-btn');
  const saveIcon = document.getElementById('album-detail-save-icon');
  const filterInp = document.getElementById('album-detail-filter-input');
  if (!modal || !tracksEl) return;

  if (_albumAbortController) {
    try { _albumAbortController.abort(); } catch (_) {}
  }
  _albumAbortController = (typeof AbortController !== 'undefined') ? new AbortController() : null;
  const seq = ++_albumSeqToken;
  _currentAlbumModalState = null;

  const initTitle = fixTurkishMixedCase(album.title || album.name || t('album.badge'));
  const initArtist = album.artist || '';
  const initYear = album.year ? String(album.year) : '';
  const initCover = safeUrl(album.cover || album.thumbnail || album.image, './kurfamuzik_logo.png');

  const heroBgEl = document.getElementById('album-detail-hero-bg');
  const artistBtn = document.getElementById('album-detail-artist-btn');
  const artistLbl = document.getElementById('album-detail-artist-label');

  if (filterInp) filterInp.value = '';
  setAlbumDetailSort('original');

  const syncSaveVisual = (saved) => {
    if (saveIcon) {
      saveIcon.textContent = saved ? 'bookmark' : 'bookmark_border';
      saveIcon.classList.toggle('filled', saved);
    }
    if (saveBtn) {
      saveBtn.classList.toggle('is-saved', saved);
    }
  };
  syncSaveVisual(isAlbumSaved(albumId));

  if (coverEl) coverEl.src = initCover;
  if (heroBgEl) heroBgEl.style.backgroundImage = `url('${initCover}')`;
  if (typeEl) typeEl.textContent = album.type || t('album.badge');
  if (titleEl) titleEl.textContent = initTitle;
  if (metaEl) metaEl.textContent = initYear ? `${initYear}` : '';
  if (artistLbl) artistLbl.textContent = initArtist || (getAppLanguage() === 'en' ? 'Artist' : 'Sanatçı');
  if (artistBtn) {
    artistBtn.classList.toggle('hidden', !initArtist);
    artistBtn.onclick = initArtist ? () => { closeAlbumDetail(); openArtistDetail({ name: initArtist }); } : null;
  }
  tracksEl.innerHTML = `
    <div class="flex items-center justify-center py-10 gap-3 text-on-surface-variant text-xs">
      <div class="w-5 h-5 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
      <span>${escapeHtml(t('album.loading'))}</span>
    </div>
  `;
  if (playAllBtn) playAllBtn.onclick = null;
  if (shuffleAllBtn) shuffleAllBtn.onclick = null;
  if (queueAllBtn) queueAllBtn.onclick = null;
  if (saveBtn) saveBtn.onclick = () => syncSaveVisual(toggleSavedAlbum({ ...album, id: albumId, title: initTitle, cover: initCover }));

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  if (card) {
    card.classList.remove('scale-95');
    card.classList.add('scale-100');
  }

  try {
    const res = await fetch(`${API_BASE}/api/album?id=${encodeURIComponent(albumId)}`, {
      signal: _albumAbortController ? _albumAbortController.signal : undefined
    });
    if (seq !== _albumSeqToken) return;
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    if (seq !== _albumSeqToken) return;
    if (!data || !data.success || !Array.isArray(data.tracks) || data.tracks.length === 0) {
      throw new Error('empty_album');
    }

    const albInfo = data.album || {};
    const finalCover = safeUrl(albInfo.cover || initCover, './kurfamuzik_logo.png');
    const finalTitle = fixTurkishMixedCase(albInfo.title || initTitle);
    const finalArtist = albInfo.artist || initArtist;
    const finalYear = albInfo.year || initYear;
    const normalizedTracks = data.tracks
      .map((tr, i) => {
        const vid = safeYtId(tr.videoId || tr.ytId || tr.id);
        return {
          id: vid || String(tr.id || `sp-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`),
          ytId: vid || undefined,
          trackIndex: Number.isFinite(Number(tr.index)) && Number(tr.index) > 0 ? Number(tr.index) : (i + 1),
          title: fixTurkishMixedCase(tr.title || 'Şarkı'),
          artist: tr.artist || finalArtist || 'Sanatçı',
          duration: tr.duration || '3:30',
          thumbnail: safeUrl(tr.cover || tr.thumbnail || finalCover, './kurfamuzik_logo.png'),
          album: finalTitle
        };
      })
      .sort((a, b) => a.trackIndex - b.trackIndex);

    const totalSec = Number(albInfo.totalDurationSec || 0) || normalizedTracks.reduce((acc, tr) => acc + parseDurationToSec(tr.duration), 0);
    const totalMin = totalSec > 0 ? Math.max(1, Math.round(totalSec / 60)) : 0;
    const totalDurLabel = totalMin > 0 ? `${totalMin} dk` : '';

    if (coverEl) coverEl.src = finalCover;
    if (heroBgEl) heroBgEl.style.backgroundImage = `url('${finalCover}')`;
    if (typeEl) typeEl.textContent = albInfo.type || album.type || t('album.badge');
    if (titleEl) titleEl.textContent = finalTitle;
    updatePageSeoMeta({
      tabId: state.currentTab || 'kesfet',
      title: `${finalTitle}${finalArtist ? ' — ' + finalArtist : ''} | Kurfamüzik`,
      description: `${finalTitle} albümü (${normalizedTracks.length} parça) — Kurfamüzik'te reklamsız dinleyin.`,
      path: KURFA_PAGE_SEO[state.currentTab || 'kesfet']?.path || '/kesfet',
      updateUrl: false
    });
    if (metaEl) {
      metaEl.textContent = [finalYear, t('album.track_count', { count: normalizedTracks.length }), totalDurLabel]
        .filter(Boolean)
        .join(' • ');
    }
    if (artistLbl) artistLbl.textContent = finalArtist || '';
    if (artistBtn) {
      const cleanArt = String(finalArtist || '').split(/[,&]/)[0].trim();
      artistBtn.classList.toggle('hidden', !cleanArt);
      artistBtn.onclick = cleanArt ? () => { closeAlbumDetail(); openArtistDetail({ name: cleanArt }); } : null;
    }

    if (saveBtn) {
      saveBtn.onclick = () => syncSaveVisual(toggleSavedAlbum({
        id: albumId,
        browseId: albumId,
        title: finalTitle,
        artist: finalArtist,
        year: finalYear,
        type: albInfo.type || album.type || t('album.badge'),
        cover: finalCover
      }));
    }

    if (playAllBtn) {
      playAllBtn.onclick = () => {
        const chosen = setPlaybackQueueContext(normalizedTracks, 0, finalTitle, finalArtist || t('album.badge'));
        if (chosen) playTrackById(chosen.id, chosen);
        closeAlbumDetail();
      };
    }
    if (shuffleAllBtn) {
      shuffleAllBtn.onclick = () => {
        const shuffled = [...normalizedTracks];
        for (let i = shuffled.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        state.isShuffle = true;
        if (typeof syncShuffleRepeatUI === 'function') syncShuffleRepeatUI();
        const chosen = setPlaybackQueueContext(shuffled, 0, finalTitle, finalArtist || t('album.badge'));
        if (chosen) playTrackById(chosen.id, chosen);
        closeAlbumDetail();
      };
    }
    if (queueAllBtn) {
      queueAllBtn.onclick = () => {
        normalizedTracks.forEach((tr) => addToQueueTrack(tr));
        showToast(t('album.queued_toast', { title: finalTitle, count: normalizedTracks.length }));
      };
    }

    _currentAlbumModalState = {
      normalizedTracks,
      finalTitle,
      finalArtist,
      filterText: '',
      sortKey: 'original'
    };
    renderAlbumDetailTracksList();
  } catch (err) {
    if (err && err.name === 'AbortError') return;
    if (seq !== _albumSeqToken) return;
    tracksEl.innerHTML = `<div class="text-center py-8 text-xs text-on-surface-variant">${escapeHtml(t('album.error'))}</div>`;
  }
}
window.openAlbumDetail = openAlbumDetail;

function updateQuickFavCount() {
  const el = document.getElementById('quick-fav-count');
  if (el) {
    el.textContent = state.favorites.length > 0 ? `${state.favorites.length} Şarkı Kaydedildi` : 'Favorileriniz Boş';
  }
}

function playFavoritesQuick() {
  if (!state.favorites || state.favorites.length === 0) {
    showToast('Favori listeniz henüz boş. Şarkıların yanındaki kalp simgesiyle ekleyebilirsiniz.');
    return;
  }
  const chosen = setPlaybackQueueContext(state.favorites, 0, 'Favori Şarkılarım', 'FAVORİLERDEN ÇALINIYOR');
  renderQueueDrawerList();
  if (chosen) playTrackById(chosen.id, chosen);
  showToast(`${state.favorites.length} favori şarkınız çalınıyor`);
}

function renderFavoritesTable() {
  if (!DOM.favoritesListTable) return;
  DOM.favoritesListTable.innerHTML = '';

  if (DOM.favCountText) {
    DOM.favCountText.textContent = t('library.fav_saved_count', { count: state.favorites.length });
  }

  if (state.favorites.length === 0) {
    DOM.favoritesListTable.innerHTML = `
      <div class="py-12 flex flex-col items-center justify-center gap-2 text-on-surface-variant text-center">
        <span class="material-symbols-outlined text-[48px] text-primary/40">favorite</span>
        <p class="text-sm font-bold text-on-surface">${escapeHtml(t('library.fav_empty_title'))}</p>
        <p class="text-xs">${escapeHtml(t('library.fav_empty_desc'))}</p>
        <button type="button" class="mt-2 px-4 py-2 rounded-full bg-primary text-on-primary text-xs font-bold" onclick="switchTab('kesfet')">
          ${escapeHtml(t('library.discover_music'))}
        </button>
      </div>
    `;
    return;
  }

  state.favorites.forEach((track, index) => {
    const isCurrentRow = Boolean(state.currentTrack && state.currentTrack.id === track.id);
    const isPlayingCurrent = isCurrentRow && state.isPlaying;
    const safeTitle = escapeHtml(formatCleanTrackTitle(track.title) || 'Şarkı');
    const safeArtist = escapeHtml(track.artist || 'Sanatçı');
    const safeDur = escapeHtml(track.duration || '3:30');
    const safeThumb = escapeHtml(safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png'));

    const row = document.createElement('div');
    row.className = `track-row flex items-center justify-between gap-2 p-2.5 rounded-xl transition-colors group cursor-pointer ${isCurrentRow ? 'active' : ''}`;
    row.innerHTML = `
      <div class="flex items-center gap-3 min-w-0 flex-1 pr-3 overflow-hidden">
        <span class="w-5 flex items-center justify-center flex-shrink-0 text-xs font-bold font-mono tabular-nums text-on-surface-variant">${isCurrentRow ? renderMiniEqBarsHtml(isPlayingCurrent) : (index + 1)}</span>
        <img src="${safeThumb}" alt="${safeTitle}" class="w-10 h-10 rounded-lg object-cover flex-shrink-0" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png'">
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div class="flex items-center gap-2 min-w-0">
            <span class="kurfa-row-title text-xs md:text-sm font-bold truncate block text-on-surface group-hover:text-primary transition-colors">${safeTitle}</span>
            ${isCurrentRow ? renderPlayingPillHtml() : ''}
          </div>
          <span class="kurfa-row-artist text-[11px] text-on-surface-variant truncate block">${safeArtist}</span>
        </div>
      </div>
      <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 pl-2">
        <span class="text-xs text-on-surface-variant font-mono hidden sm:inline">${safeDur}</span>
        <button type="button" class="btn-fav-queue w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-secondary transition-colors" title="${escapeHtml(t('player.add_to_queue'))}">
          <span class="material-symbols-outlined text-[18px]">queue_music</span>
        </button>
        <button type="button" class="btn-fav-add-pl w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" title="${escapeHtml(t('player.add_to_playlist'))}">
          <span class="material-symbols-outlined text-[18px]">playlist_add</span>
        </button>
        <button type="button" class="btn-fav-remove w-8 h-8 rounded-full flex items-center justify-center text-primary" title="${escapeHtml(t('player.fav_remove'))}">
          <span class="material-symbols-outlined text-[18px] filled">favorite</span>
        </button>
        <button type="button" class="btn-fav-dl w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-secondary" title="${escapeHtml(t('hero.download'))}">
          <span class="material-symbols-outlined text-[18px]">download</span>
        </button>
        <button type="button" class="btn-fav-play w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all" title="${escapeHtml(t('player.play_btn'))}">
          <span class="material-symbols-outlined text-[18px]">${isPlayingCurrent ? 'pause' : 'play_arrow'}</span>
        </button>
      </div>
    `;
    const playFav = () => {
      setPlaybackQueueContext(state.favorites, index, 'Favori Şarkılarım', 'FAVORİLERDEN ÇALINIYOR');
      playTrackById(track.id, track);
    };
    row.onclick = playFav;
    const playBtn = row.querySelector('.btn-fav-play');
    if (playBtn) playBtn.onclick = (e) => { e.stopPropagation(); playFav(); };
    const qFavBtn = row.querySelector('.btn-fav-queue');
    if (qFavBtn) {
      qFavBtn.onclick = (e) => {
        e.stopPropagation();
        addToQueueTrack(track);
      };
    }
    const addPlBtn = row.querySelector('.btn-fav-add-pl');
    if (addPlBtn) {
      addPlBtn.onclick = (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track);
      };
    }
    const favRemoveBtn = row.querySelector('.btn-fav-remove');
    if (favRemoveBtn) {
      favRemoveBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(track);
      };
    }
    const favDlBtn = row.querySelector('.btn-fav-dl');
    if (favDlBtn) {
      favDlBtn.onclick = (e) => {
        e.stopPropagation();
        downloadTrack(track);
      };
    }
    DOM.favoritesListTable.appendChild(row);
  });
}

function renderDownloadsTable() {
  if (!DOM.downloadsListTable) return;
  DOM.downloadsListTable.innerHTML = '';

  if (state.downloads.length === 0) {
    DOM.downloadsListTable.innerHTML = `
      <div class="py-12 flex flex-col items-center justify-center gap-2 text-on-surface-variant text-center">
        <span class="material-symbols-outlined text-[48px] text-secondary/40">cloud_download</span>
        <p class="text-sm font-bold text-on-surface">${escapeHtml(t('library.downloads_empty_title'))}</p>
        <p class="text-xs">${escapeHtml(t('library.downloads_empty_desc'))}</p>
      </div>
    `;
    return;
  }

  const currentId = (state.currentTrack && state.currentTrack.id) ? state.currentTrack.id : null;
  state.downloads.forEach((track, index) => {
    const isCurrent = Boolean(currentId && currentId === track.id);
    const isPlayingCurrent = isCurrent && state.isPlaying;
    const safeTitle = escapeHtml(formatCleanTrackTitle(track.title) || (getAppLanguage() === 'en' ? 'Track' : 'Şarkı'));
    const safeArtist = escapeHtml(track.artist || (getAppLanguage() === 'en' ? 'Artist' : 'Sanatçı'));
    const safeSize = escapeHtml(track.size || '7.5 MB');
    const safeThumb = escapeHtml(safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png'));

    const row = document.createElement('div');
    row.className = `track-row flex items-center justify-between gap-2 p-2.5 rounded-xl hover:bg-surface-container-low transition-colors group cursor-pointer ${isCurrent ? 'active' : ''}`;
    row.dataset.trackId = track.id || '';
    row.dataset.trackIdx = String(index + 1);
    row.innerHTML = `
      <div class="flex items-center gap-3 min-w-0 flex-1 pr-3 overflow-hidden">
        <span class="w-5 text-center text-xs font-bold text-on-surface-variant font-mono track-idx-num flex items-center justify-center flex-shrink-0">${isCurrent ? renderMiniEqBarsHtml(isPlayingCurrent) : (index + 1)}</span>
        <img src="${safeThumb}" alt="${safeTitle}" class="w-10 h-10 rounded-lg object-cover flex-shrink-0" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png'">
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div class="flex items-center gap-1.5 min-w-0">
            <span class="kurfa-row-title text-xs md:text-sm font-bold text-on-surface truncate block group-hover:text-primary transition-colors">${safeTitle}</span>
            ${isCurrent ? renderPlayingPillHtml() : ''}
          </div>
          <span class="kurfa-row-artist text-[11px] text-on-surface-variant truncate block">${safeArtist} - ${safeSize}</span>
        </div>
      </div>
      <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 pl-2">
        <button type="button" class="btn-dl-add-pl w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors" title="${escapeHtml(t('player.add_to_playlist'))}">
          <span class="material-symbols-outlined text-[18px]">add_circle</span>
        </button>
        <span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] font-bold">
          <span class="material-symbols-outlined text-[12px]">offline_pin</span>
          ${escapeHtml(t('library.offline_badge'))}
        </span>
        <button type="button" class="btn-dl-play w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm hover:scale-105 active:scale-95 transition-all" title="${escapeHtml(t('player.play_btn'))}">
          <span class="material-symbols-outlined text-[18px]">play_arrow</span>
        </button>
      </div>
    `;
    const playDl = () => {
      setPlaybackQueueContext(state.downloads, index, t('library.offline_badge'), 'OFFLINE');
      playTrackById(track.id, track);
    };
    row.onclick = playDl;
    const playBtn = row.querySelector('.btn-dl-play');
    if (playBtn) playBtn.onclick = (e) => { e.stopPropagation(); playDl(); };
    const addPlBtn = row.querySelector('.btn-dl-add-pl');
    if (addPlBtn) {
      addPlBtn.onclick = (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track);
      };
    }
    DOM.downloadsListTable.appendChild(row);
  });
}

let playlistTracksExpanded = false;
let playlistTracksFilterQuery = '';

function togglePlaylistTracksExpand() {
  playlistTracksExpanded = !playlistTracksExpanded;
  renderPlaylistTracksTable();
}

function filterPlaylistItems(val) {
  playlistTracksFilterQuery = (val || '').trim().toLowerCase();
  if (playlistTracksFilterQuery.length > 0) {
    playlistTracksExpanded = true;
  }
  renderPlaylistTracksTable();
}

function renderPlaylistTracksTable() {
  if (!DOM.playlistTracksTable) return;
  DOM.playlistTracksTable.innerHTML = '';

  let list = getCuratedTracks() || [];
  if (playlistTracksFilterQuery) {
    list = list.filter(t =>
      (t.title && t.title.toLowerCase().includes(playlistTracksFilterQuery)) ||
      (t.artist && t.artist.toLowerCase().includes(playlistTracksFilterQuery))
    );
  }

  if (list.length === 0) {
    DOM.playlistTracksTable.innerHTML = `
      <div class="py-8 text-center text-xs text-on-surface-variant flex flex-col items-center gap-2">
        <span class="material-symbols-outlined text-2xl text-on-surface-variant/50">search_off</span>
        <span>${escapeHtml(t('player.no_matching_tracks'))}</span>
      </div>
    `;
    return;
  }

  const currentId = (state.currentTrack && state.currentTrack.id) ? state.currentTrack.id : null;
  const isFiltering = playlistTracksFilterQuery.length > 0;
  const visibleTracks = (isFiltering || playlistTracksExpanded) ? list : list.slice(0, 7);

  visibleTracks.forEach((track, index) => {
    const isCurrent = Boolean(currentId && currentId === track.id);
    const isPlayingCurrent = isCurrent && state.isPlaying;
    const isFav = state.favorites.some(f => f.id === track.id);
    const safeTitle = escapeHtml(formatCleanTrackTitle(track.title) || 'Şarkı');
    const safeArtist = escapeHtml(track.artist || 'Sanatçı');
    const safeDur = escapeHtml(track.duration || '3:30');
    const safeThumb = escapeHtml(safeUrl(getTrackThumbnail(track), './kurfamuzik_logo.png'));

    const row = document.createElement('div');
    row.className = `track-row flex items-center justify-between gap-2 p-2.5 rounded-xl transition-all group cursor-pointer ${isCurrent ? 'active' : ''}`;
    row.innerHTML = `
      <div class="flex items-center gap-3 min-w-0 flex-1 pr-3 overflow-hidden">
        <span class="w-6 text-center text-xs font-bold font-mono tabular-nums flex items-center justify-center flex-shrink-0 text-on-surface-variant">
          ${isCurrent ? renderMiniEqBarsHtml(isPlayingCurrent) : (index + 1)}
        </span>
        <img src="${safeThumb}" alt="${safeTitle}" class="w-10 h-10 rounded-lg object-cover flex-shrink-0" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div class="flex items-center gap-2 min-w-0">
            <span class="kurfa-row-title text-xs md:text-sm font-bold truncate block text-on-surface">${safeTitle}</span>
            ${isCurrent ? renderPlayingPillHtml() : ''}
          </div>
          <span class="kurfa-row-artist text-[11px] text-on-surface-variant truncate block font-medium">${safeArtist}</span>
        </div>
      </div>
      <div class="flex items-center gap-1.5 sm:gap-2 text-xs text-on-surface-variant flex-shrink-0 pl-2">
        <span class="font-mono text-[11px] hidden sm:inline mr-1">${safeDur}</span>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-secondary hover:bg-surface-container-high transition-colors btn-playlist-queue" title="${escapeHtml(t('player.add_to_queue'))}">
          <span class="material-symbols-outlined text-[18px]">queue_music</span>
        </button>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors btn-playlist-add" title="${escapeHtml(t('player.add_to_playlist'))}">
          <span class="material-symbols-outlined text-[18px]">playlist_add</span>
        </button>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors btn-playlist-fav" title="${escapeHtml(t('player.fav_add'))}">
          <span class="material-symbols-outlined text-[18px] ${isFav ? 'text-primary filled' : ''}">${isFav ? 'favorite' : 'favorite_border'}</span>
        </button>
        <button type="button" class="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-tertiary hover:bg-surface-container-high transition-colors btn-playlist-dl" title="${escapeHtml(t('hero.download'))}">
          <span class="material-symbols-outlined text-[18px]">download</span>
        </button>
      </div>
    `;
    row.onclick = () => {
      const fullList = getCuratedTracks() || [];
      setPlaybackQueueContext(fullList.length > 0 ? fullList : list, track, 'Popüler Parçalar', 'ÇALMA LİSTESİNDEN ÇALINIYOR');
      playTrackById(track.id, track);
    };

    const qBtn = row.querySelector('.btn-playlist-queue');
    if (qBtn) {
      qBtn.onclick = (e) => {
        e.stopPropagation();
        addToQueueTrack(track);
      };
    }

    const addBtn = row.querySelector('.btn-playlist-add');
    if (addBtn) {
      addBtn.onclick = (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track);
      };
    }

    const favBtn = row.querySelector('.btn-playlist-fav');
    if (favBtn) {
      favBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(track);
      };
    }

    const dlBtn = row.querySelector('.btn-playlist-dl');
    if (dlBtn) {
      dlBtn.onclick = (e) => {
        e.stopPropagation();
        downloadTrack(track);
      };
    }
    DOM.playlistTracksTable.appendChild(row);
  });

  if (!isFiltering && list.length > 7) {
    const expandContainer = document.createElement('div');
    expandContainer.className = "pt-2";
    expandContainer.innerHTML = `
      <button type="button" class="w-full py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-xs font-bold text-primary flex items-center justify-center gap-2 transition-all shadow-xs border border-surface-container" onclick="togglePlaylistTracksExpand()">
        <span class="material-symbols-outlined text-[18px]">${playlistTracksExpanded ? 'expand_less' : 'expand_more'}</span>
        <span>${escapeHtml(playlistTracksExpanded ? t('player.show_less_tracks') : t('player.show_more_tracks', { count: list.length - 7 }))}</span>
      </button>
    `;
    DOM.playlistTracksTable.appendChild(expandContainer);
  }
}

function moveQueueTrack(index, direction) {
  const targetIndex = index + direction;
  if (targetIndex < 0 || targetIndex >= state.queue.length) return;

  const temp = state.queue[index];
  state.queue[index] = state.queue[targetIndex];
  state.queue[targetIndex] = temp;

  if (state.queueIndex === index) {
    state.queueIndex = targetIndex;
  } else if (state.queueIndex === targetIndex) {
    state.queueIndex = index;
  }

  saveQueueState();
  renderQueueDrawerList();
}

function moveQueueTrackToPosition(fromIndex, toIndex) {
  if (fromIndex === toIndex || fromIndex < 0 || fromIndex >= state.queue.length || toIndex < 0 || toIndex >= state.queue.length) return;
  const item = state.queue.splice(fromIndex, 1)[0];
  state.queue.splice(toIndex, 0, item);

  if (state.queueIndex === fromIndex) {
    state.queueIndex = toIndex;
  } else if (fromIndex < state.queueIndex && toIndex >= state.queueIndex) {
    state.queueIndex = Math.max(0, state.queueIndex - 1);
  } else if (fromIndex > state.queueIndex && toIndex <= state.queueIndex) {
    state.queueIndex = Math.min(state.queue.length - 1, state.queueIndex + 1);
  }

  saveQueueState();
  renderQueueDrawerList();
}

function renderQueueDrawerList() {
  if (!DOM.queueDrawerList) return;
  state.queue = cleanDeduplicateQueueArray(state.queue || []);
  state.userQueue = cleanDeduplicateQueueArray(state.userQueue || []);
  if (state.queueIndex >= state.queue.length) {
    state.queueIndex = Math.max(0, state.queue.length - 1);
  }
  DOM.queueDrawerList.innerHTML = '';

  const userQueueCount = state.userQueue.length;
  const queueCount = state.queue.length;
  const totalCount = userQueueCount + queueCount;
  if (DOM.queueCountBadge) DOM.queueCountBadge.textContent = totalCount;
  if (DOM.btnClearQueue) DOM.btnClearQueue.style.display = totalCount > 0 ? 'inline-block' : 'none';

  if (totalCount === 0) {
    DOM.queueDrawerList.innerHTML = `
      <div class="flex flex-col items-center justify-center py-10 px-4 text-center text-on-surface-variant gap-2.5">
        <div class="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-on-surface-variant/60 mb-1">
          <span class="material-symbols-outlined text-2xl">queue_music</span>
        </div>
        <h4 class="text-sm font-bold text-on-surface">${escapeHtml(t('queue.empty_title'))}</h4>
        <p class="text-[11px] text-on-surface-variant max-w-[220px]">
          ${escapeHtml(t('queue.empty_desc'))}
        </p>
        <button type="button" class="mt-1 px-4 py-2 rounded-full bg-primary text-on-primary text-xs font-bold hover:bg-primary-container transition-all shadow-sm flex items-center gap-1.5" onclick="playAllTrends()">
          <span class="material-symbols-outlined text-[16px]">local_fire_department</span>
          <span>${escapeHtml(t('queue.play_trends'))}</span>
        </button>
      </div>
    `;
    return;
  }

  if (userQueueCount > 0) {
    const upHeader = document.createElement('div');
    upHeader.className = 'px-2 pt-1 pb-1 text-[10px] font-bold uppercase tracking-wider text-primary flex items-center justify-between';
    upHeader.innerHTML = `<span>${escapeHtml(t('queue.up_next', { count: userQueueCount }))}</span>`;
    DOM.queueDrawerList.appendChild(upHeader);

    state.userQueue.forEach((uTrack, uIdx) => {
      const safeTitle = escapeHtml(uTrack.title || 'Şarkı');
      const safeArtist = escapeHtml(uTrack.artist || 'Sanatçı');
      const safeThumb = escapeHtml(safeUrl(uTrack.thumbnail || getTrackThumbnail(uTrack), './kurfamuzik_logo.png'));
      const row = document.createElement('div');
      row.className = 'flex-shrink-0 min-h-[54px] flex items-center justify-between py-2 px-2.5 rounded-xl bg-surface-container/60 hover:bg-surface-container transition-colors cursor-pointer group border border-black/5 dark:border-white/10 mb-1';
      row.innerHTML = `
        <div class="flex items-center gap-2.5 min-w-0 flex-1">
          <span class="w-5 text-center text-[11px] font-bold font-mono tabular-nums text-on-surface-variant flex-shrink-0">${uIdx + 1}</span>
          <img src="${safeThumb}" alt="${safeTitle}" class="w-10 h-10 rounded-lg object-cover flex-shrink-0" loading="lazy" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png'">
          <div class="flex flex-col min-w-0 flex-1">
            <span class="kurfa-row-title text-xs font-bold text-on-surface truncate">${safeTitle}</span>
            <span class="kurfa-row-artist text-[11px] text-on-surface-variant truncate">${safeArtist}</span>
          </div>
        </div>
        <button type="button" class="w-6 h-6 rounded-full flex items-center justify-center text-on-surface-variant hover:text-error transition-colors btn-uq-remove flex-shrink-0" title="${escapeHtml(t('queue.remove'))}">
          <span class="material-symbols-outlined text-[15px]">close</span>
        </button>
      `;
      row.onclick = () => {
        state.userQueue.splice(uIdx, 1);
        saveQueueState();
        renderQueueDrawerList();
        playTrackById(uTrack.id, uTrack);
      };
      const rmBtn = row.querySelector('.btn-uq-remove');
      if (rmBtn) {
        rmBtn.onclick = (e) => {
          e.stopPropagation();
          removeFromUserQueue(uIdx);
        };
      }
      DOM.queueDrawerList.appendChild(row);
    });

    if (queueCount > 0) {
      const ctxHeader = document.createElement('div');
      ctxHeader.className = 'px-2 pt-2 pb-1 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant';
      ctxHeader.textContent = state.playingContextTitle ? t('queue.playlist_prefix', { name: state.playingContextTitle }) : t('queue.playlist_default');
      DOM.queueDrawerList.appendChild(ctxHeader);
    }
  }

  const curIdx = Math.max(0, Math.min(state.queueIndex || 0, Math.max(0, state.queue.length - 1)));
  const winStart = state.queue.length > 120 ? Math.max(0, curIdx - 20) : 0;
  const winEnd = state.queue.length > 120 ? Math.min(state.queue.length, curIdx + 100) : state.queue.length;

  if (winStart > 0) {
    const prevInfo = document.createElement('div');
    prevInfo.className = 'px-2 py-1 text-[10px] font-semibold text-on-surface-variant text-center';
    prevInfo.textContent = t('queue.hidden_prev', { count: winStart, total: state.queue.length });
    DOM.queueDrawerList.appendChild(prevInfo);
  }

  for (let index = winStart; index < winEnd; index++) {
    const track = state.queue[index];
    if (!track) continue;
    const isCurrent = index === state.queueIndex;
    const safeTitle = escapeHtml(formatCleanTrackTitle(track.title) || 'Şarkı');
    const safeArtist = escapeHtml(track.artist || 'Sanatçı');
    const safeDur = escapeHtml(track.duration || '3:30');
    const safeThumb = escapeHtml(safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png'));

    const item = document.createElement('div');
    item.className = `track-row flex-shrink-0 min-h-[54px] flex items-center justify-between gap-2 px-2.5 py-2 rounded-xl transition-all cursor-pointer group select-none ${isCurrent ? 'active font-bold' : ''}`;
    item.setAttribute('draggable', 'true');
    item.dataset.index = index;
    if (isCurrent) item.dataset.current = '1';

    item.innerHTML = `
      <div class="flex items-center gap-2 min-w-0 flex-1 pr-1 overflow-hidden">
        <div class="flex flex-col items-center justify-center gap-[2px] flex-shrink-0 w-5 opacity-55 group-hover:opacity-100 transition-opacity">
          <button type="button" class="w-5 h-4 flex items-center justify-center rounded text-on-surface-variant hover:text-on-surface hover:bg-black/5 dark:hover:bg-white/10 transition-colors btn-queue-up ${index === 0 ? 'opacity-20 cursor-not-allowed pointer-events-none' : ''}" title="${escapeHtml(t('queue.move_up'))}">
            <span class="material-symbols-outlined text-[15px] leading-none">keyboard_arrow_up</span>
          </button>
          <button type="button" class="w-5 h-4 flex items-center justify-center rounded text-on-surface-variant hover:text-on-surface hover:bg-black/5 dark:hover:bg-white/10 transition-colors btn-queue-down ${index === queueCount - 1 ? 'opacity-20 cursor-not-allowed pointer-events-none' : ''}" title="${escapeHtml(t('queue.move_down'))}">
            <span class="material-symbols-outlined text-[15px] leading-none">keyboard_arrow_down</span>
          </button>
        </div>
        <span class="w-5 flex items-center justify-center text-[11px] font-mono tabular-nums flex-shrink-0 text-on-surface-variant">${isCurrent ? renderMiniEqBarsHtml(state.isPlaying) : (index + 1)}</span>
        <img src="${safeThumb}" alt="${safeTitle}" class="w-10 h-10 rounded-lg object-cover flex-shrink-0" loading="lazy" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png'">
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div class="flex items-center gap-1.5 min-w-0">
            <span class="kurfa-row-title text-xs font-bold truncate block text-on-surface">${safeTitle}</span>
            ${isCurrent ? renderPlayingPillHtml() : ''}
          </div>
          <span class="kurfa-row-artist text-[11px] text-on-surface-variant truncate block">${safeArtist}</span>
        </div>
      </div>
      <div class="flex items-center gap-0.5 flex-shrink-0 pl-1">
        <span class="text-[11px] text-on-surface-variant font-mono tabular-nums whitespace-nowrap px-1">${safeDur}</span>
        <button type="button" class="hidden sm:group-hover:flex w-6 h-6 rounded-full items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors btn-queue-add-pl" title="${escapeHtml(t('player.add_to_playlist'))}">
          <span class="material-symbols-outlined text-[15px]">playlist_add</span>
        </button>
        <button type="button" class="hidden sm:group-hover:flex w-6 h-6 rounded-full items-center justify-center text-on-surface-variant hover:text-on-surface transition-colors btn-queue-dl" title="${escapeHtml(t('hero.download'))}">
          <span class="material-symbols-outlined text-[15px]">download</span>
        </button>
        <button type="button" class="flex sm:hidden sm:group-hover:flex w-6 h-6 rounded-full items-center justify-center text-on-surface-variant hover:text-error transition-colors btn-queue-remove" title="${escapeHtml(t('queue.remove'))}">
          <span class="material-symbols-outlined text-[15px]">close</span>
        </button>
      </div>
    `;

    item.onclick = () => {
      state.queueIndex = index;
      saveQueueState();
      playTrackById(track.id, track);
    };

    const upBtn = item.querySelector('.btn-queue-up');
    if (upBtn) {
      upBtn.onclick = (e) => {
        e.stopPropagation();
        moveQueueTrack(index, -1);
      };
    }

    const downBtn = item.querySelector('.btn-queue-down');
    if (downBtn) {
      downBtn.onclick = (e) => {
        e.stopPropagation();
        moveQueueTrack(index, 1);
      };
    }

    const addPlBtn = item.querySelector('.btn-queue-add-pl');
    if (addPlBtn) {
      addPlBtn.onclick = (e) => {
        e.stopPropagation();
        openAddToPlaylistModal(track);
      };
    }

    const dlBtn = item.querySelector('.btn-queue-dl');
    if (dlBtn) {
      dlBtn.onclick = (e) => {
        e.stopPropagation();
        downloadTrack(track);
      };
    }

    const removeBtn = item.querySelector('.btn-queue-remove');
    if (removeBtn) {
      removeBtn.onclick = (e) => {
        e.stopPropagation();
        removeFromQueue(index);
      };
    }

    item.ondragstart = (e) => {
      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData('text/plain', String(index));
      item.classList.add('opacity-40');
    };
    item.ondragend = () => {
      item.classList.remove('opacity-40');
      document.querySelectorAll('#queue-drawer-list > div').forEach(el => el.classList.remove('border-t-2', 'border-b-2', 'border-primary'));
    };
    item.ondragover = (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'move';
      const rect = item.getBoundingClientRect();
      const midY = rect.top + rect.height / 2;
      if (e.clientY < midY) {
        item.classList.add('border-t-2', 'border-primary');
        item.classList.remove('border-b-2');
      } else {
        item.classList.add('border-b-2', 'border-primary');
        item.classList.remove('border-t-2');
      }
    };
    item.ondragleave = () => {
      item.classList.remove('border-t-2', 'border-b-2', 'border-primary');
    };
    item.ondrop = (e) => {
      e.preventDefault();
      item.classList.remove('border-t-2', 'border-b-2', 'border-primary');
      const fromIdx = parseInt(e.dataTransfer.getData('text/plain'), 10);
      if (isNaN(fromIdx)) return;
      const rect = item.getBoundingClientRect();
      const dropAfter = e.clientY >= (rect.top + rect.height / 2);
      let targetPos = dropAfter ? index + 1 : index;
      if (fromIdx < targetPos) targetPos -= 1;
      targetPos = Math.max(0, Math.min(state.queue.length - 1, targetPos));
      if (fromIdx !== targetPos) {
        moveQueueTrackToPosition(fromIdx, targetPos);
      }
    };

    DOM.queueDrawerList.appendChild(item);
  }

  if (winEnd < state.queue.length) {
    const nextInfo = document.createElement('div');
    nextInfo.className = 'px-2 py-1.5 text-[10px] font-semibold text-on-surface-variant text-center';
    nextInfo.textContent = t('queue.more_in_queue', { count: state.queue.length - winEnd });
    DOM.queueDrawerList.appendChild(nextInfo);
  }
}

function clearQueue() {
  state.queue = [];
  state.originalQueue = [];
  state.userQueue = [];
  state.queueIndex = 0;
  try {
    localStorage.removeItem('kurfa_queue');
    localStorage.removeItem('kurfa_original_queue');
    localStorage.removeItem('kurfa_user_queue');
  } catch(e) {}
  renderQueueDrawerList();
  showToast(t('toast.queue_cleared'));
}

function removeFromQueue(index) {
  if (index < 0 || index >= state.queue.length) return;
  const removed = state.queue.splice(index, 1)[0];
  if (state.queue.length === 0) {
    state.queueIndex = 0;
  } else if (index < state.queueIndex) {
    state.queueIndex = Math.max(0, state.queueIndex - 1);
  } else if (index === state.queueIndex) {
    state.queueIndex = Math.min(state.queueIndex, state.queue.length - 1);
  }
  saveQueueState();
  renderQueueDrawerList();
  showToast(t('toast.removed_from_queue', { title: removed ? removed.title : 'Şarkı' }));
}

// =============================================================================
// HORIZONTAL DRAG-TO-SCROLL & ETKİLEŞİMLİ TAHTA / LOW-SPEC PERFORMANS SİSTEMİ
// =============================================================================

function initDragToScroll(el) {
  if (!el || el._dragToScrollInit) return;
  el._dragToScrollInit = true;

  let isPointerDown = false;
  let startX = 0;
  let scrollLeft = 0;
  let hasDragged = false;
  let activePointerId = null;

  el.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'touch' || e.pointerType === 'pen') return;
    if (e.isPrimary === false || (e.button !== undefined && e.button !== 0)) return;
    isPointerDown = true;
    hasDragged = false;
    startX = e.clientX;
    scrollLeft = el.scrollLeft;
    activePointerId = e.pointerId;
  }, { passive: true });

  const onPointerMove = (e) => {
    if (!isPointerDown || e.pointerId !== activePointerId) return;
    const deltaX = e.clientX - startX;
    if (Math.abs(deltaX) > 6) {
      if (!hasDragged) {
        hasDragged = true;
        el.classList.add('cursor-grabbing');
        el.classList.remove('cursor-grab');
        try {
          if (typeof el.setPointerCapture === 'function') {
            el.setPointerCapture(activePointerId);
          }
        } catch(err) {}
      }
      el.scrollLeft = scrollLeft - deltaX * 1.25;
    }
  };

  const endDrag = (e) => {
    if (!isPointerDown) return;
    isPointerDown = false;
    el.classList.remove('cursor-grabbing');
    el.classList.add('cursor-grab');
    if (activePointerId !== null) {
      try {
        if (typeof el.releasePointerCapture === 'function') {
          el.releasePointerCapture(activePointerId);
        }
      } catch(err) {}
      activePointerId = null;
    }
    setTimeout(() => {
      hasDragged = false;
    }, 80);
  };

  el.addEventListener('pointermove', onPointerMove, { passive: true });
  el.addEventListener('pointerup', endDrag, { passive: true });
  el.addEventListener('pointercancel', endDrag, { passive: true });
  el.addEventListener('mouseleave', endDrag, { passive: true });

  // Prevent track clicks ONLY if an intentional drag occurred
  el.addEventListener('click', (e) => {
    if (hasDragged) {
      e.stopPropagation();
      e.preventDefault();
    }
  }, true);
}

const SHELF_ARROW_IDS = {
  'trendler-cards-grid': {
    floatLeft: 'btn-trendler-scroll-left',
    floatRight: 'btn-trendler-scroll-right',
    headLeft: 'btn-trendler-head-left',
    headRight: 'btn-trendler-head-right'
  },
  'popular-artists-grid': {
    floatLeft: 'btn-artists-scroll-left',
    floatRight: 'btn-artists-scroll-right',
    headLeft: 'btn-artists-head-left',
    headRight: 'btn-artists-head-right'
  }
};

function updateShelfArrowsState(el) {
  if (!el || !el.id) return;
  const map = SHELF_ARROW_IDS[el.id];
  if (!map) return;

  const atStart = el.scrollLeft <= 8;
  const hasOverflow = el.scrollWidth > el.clientWidth + 8;
  const atEnd = !hasOverflow || (el.scrollLeft + el.clientWidth >= el.scrollWidth - 8);

  const fl = document.getElementById(map.floatLeft);
  const fr = document.getElementById(map.floatRight);
  const hl = document.getElementById(map.headLeft);
  const hr = document.getElementById(map.headRight);

  if (fl) fl.classList.toggle('shelf-arrow-hidden', atStart);
  if (fr) fr.classList.toggle('shelf-arrow-hidden', atEnd);
  if (hl) hl.disabled = atStart;
  if (hr) hr.disabled = atEnd;
}
window.updateShelfArrowsState = updateShelfArrowsState;

function bindShelfArrows(el) {
  if (!el || el._shelfArrowsBound) return;
  el._shelfArrowsBound = true;
  el.addEventListener('scroll', () => updateShelfArrowsState(el), { passive: true });
}

function scrollShelf(containerId, direction) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const scrollAmount = (container.clientWidth || 300) * 0.75;
  const targetLeft = Math.max(0, Math.min(container.scrollWidth - container.clientWidth, container.scrollLeft + direction * scrollAmount));
  container.scrollTo({
    left: targetLeft,
    behavior: 'smooth'
  });
  setTimeout(() => updateShelfArrowsState(container), 180);
  setTimeout(() => updateShelfArrowsState(container), 420);
}

let heroSlideIndex = 0;
let heroSlideTimer = null;

function getHeroTracks() {
  const list = (exploreData && Array.isArray(exploreData.trends) && exploreData.trends.length > 0)
    ? exploreData.trends
    : getCuratedTracks();
  return list.slice(0, 5);
}

function getCurrentHeroTrack() {
  const slides = getHeroTracks();
  if (!slides.length) return (exploreData && exploreData.hero) || null;
  const idx = ((heroSlideIndex % slides.length) + slides.length) % slides.length;
  return slides[idx];
}

function renderHeroDots(slidesCount, activeIdx) {
  const dotsEl = document.getElementById('hero-carousel-dots');
  if (!dotsEl) return;
  dotsEl.innerHTML = '';
  for (let i = 0; i < slidesCount; i++) {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.setAttribute('aria-label', `${i + 1}. Trend`);
    dot.className = i === activeIdx
      ? 'h-1.5 w-6 rounded-full bg-primary transition-all'
      : 'h-1.5 w-2 rounded-full bg-white/35 hover:bg-white/60 transition-all';
    dot.onclick = () => goToHeroSlide(i);
    dotsEl.appendChild(dot);
  }
}

function renderHeroSlide(track, rankIdx, totalSlides) {
  if (!track) return;
  const thumb = safeUrl(getTrackThumbnail(track), './kurfamuzik_logo.png');
  const cssThumb = safeCssUrl(thumb, './kurfamuzik_logo.png');
  const rankBadge = document.getElementById('hero-rank-badge');
  const durPill = document.getElementById('hero-duration-pill');
  const coverImg = document.getElementById('hero-cover-img');
  const coverImgMobile = document.getElementById('hero-cover-img-mobile');

  if (rankBadge) {
    rankBadge.innerHTML = `<span class="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span><span>${escapeHtml(t('hero.trend_badge', { rank: rankIdx + 1 }))}</span>`;
  }
  if (durPill) {
    durPill.textContent = track.duration || '3:15';
  }
  if (DOM.heroTitle) DOM.heroTitle.textContent = formatCleanTrackTitle(track.title) || t('hero.default_title');
  if (DOM.heroArtist) DOM.heroArtist.textContent = track.artist || (getAppLanguage() === 'en' ? 'Artist' : 'Sanatçı');
  if (coverImg) {
    coverImg.src = thumb;
    coverImg.alt = track.title || 'Trend Kapak';
  }
  if (coverImgMobile) {
    coverImgMobile.src = thumb;
    coverImgMobile.alt = track.title || 'Trend Kapak';
  }
  if (DOM.heroBg) {
    DOM.heroBg.style.backgroundImage = `linear-gradient(to right, rgba(12,16,23,0.92), rgba(12,16,23,0.68)), url('${cssThumb}')`;
    DOM.heroBg.style.backgroundSize = 'cover';
    DOM.heroBg.style.backgroundPosition = 'center';
  }
  renderHeroDots(totalSlides, rankIdx);
}

function startHeroAutoRotate() {
  if (heroSlideTimer) clearInterval(heroSlideTimer);
  heroSlideTimer = setInterval(() => {
    if (typeof document !== 'undefined' && document.hidden) return;
    if (state.currentTab !== 'kesfet') return;
    const slides = getHeroTracks();
    if (slides.length <= 1) return;
    heroSlideIndex = (heroSlideIndex + 1) % slides.length;
    renderHeroSlide(slides[heroSlideIndex], heroSlideIndex, slides.length);
  }, 8000);
}

function goToHeroSlide(index) {
  const slides = getHeroTracks();
  if (!slides.length) return;
  heroSlideIndex = ((index % slides.length) + slides.length) % slides.length;
  renderHeroSlide(slides[heroSlideIndex], heroSlideIndex, slides.length);
  startHeroAutoRotate();
}
window.goToHeroSlide = goToHeroSlide;

function stepHeroSlide(delta) {
  goToHeroSlide(heroSlideIndex + delta);
}
window.stepHeroSlide = stepHeroSlide;

function updateHeroUI(track) {
  const slides = getHeroTracks();
  if (slides.length > 0) {
    heroSlideIndex = 0;
    renderHeroSlide(slides[0], 0, slides.length);
    startHeroAutoRotate();
    updatePlaylistHeroUI(slides[0]);
  } else if (track) {
    renderHeroSlide(track, 0, 1);
    updatePlaylistHeroUI(track);
  }
}

function updatePlaylistHeroUI(track) {
  const activeTrack = state.currentTrack || track || (exploreData && (exploreData.hero || (exploreData.trends && exploreData.trends[0]))) || (CURATED_TRACKS && CURATED_TRACKS[0]);
  if (!activeTrack) return;
  const thumbEl = document.getElementById('playlist-hero-thumb');
  const titleEl = document.getElementById('playlist-hero-title');
  const descEl = document.getElementById('playlist-hero-desc');
  const subEl = document.getElementById('playlist-hero-sub');
  const badgeEl = document.getElementById('playlist-hero-badge');

  const thumbUrl = safeUrl(getTrackThumbnail(activeTrack), './kurfamuzik_logo.png');
  const cleanTitle = formatCleanTrackTitle(activeTrack.title) || t('player.playlist_badge');
  const cleanArtist = activeTrack.artist || (getAppLanguage() === 'en' ? 'Artist' : 'Sanatçı');
  const ctxTitle = state.playingContextTitle || t('explore.yt_trends_title');

  if (thumbEl) {
    thumbEl.src = thumbUrl;
    thumbEl.alt = cleanTitle;
  }
  if (titleEl) {
    titleEl.textContent = cleanTitle;
  }
  if (descEl) {
    descEl.textContent = state.currentTrack
      ? `${cleanArtist} • ${ctxTitle}`
      : `${cleanArtist} • ${t('player.yt_trends_desc')}`;
  }
  if (subEl) {
    subEl.textContent = activeTrack.duration || '3:30';
  }
  if (badgeEl) {
    badgeEl.textContent = state.currentTrack ? t('player.now_playing') : t('player.playlist_badge');
  }
}

function playHeroTrack() {
  const allTracks = getCuratedTracks();
  const track = getCurrentHeroTrack() || allTracks[0];
  if (track) {
    setPlaybackQueueContext(allTracks, track, track.title, 'ÖNE ÇIKANLARDAN ÇALINIYOR');
    playTrackById(track.id, track);
  }
}

function addHeroTrackToQueue() {
  const track = getCurrentHeroTrack() || getCuratedTracks()[0];
  if (track) {
    addToQueueTrack(track);
  }
}

function downloadHeroTrack() {
  const track = getCurrentHeroTrack() || getCuratedTracks()[0];
  if (track) {
    downloadTrackById(track.id);
  }
}

function sanitizeExploreTrack(t) {
  if (!t || typeof t !== 'object') return null;
  const vid = safeYtId(t.id);
  const cleanId = vid || (typeof t.id === 'string' ? t.id.trim().slice(0, 64) : '');
  if (!cleanId) return null;
  return {
    id: cleanId,
    title: typeof t.title === 'string' ? t.title.trim().slice(0, 200) : 'Şarkı',
    artist: typeof t.artist === 'string' ? t.artist.trim().slice(0, 120) : 'Sanatçı',
    duration: typeof t.duration === 'string' ? t.duration.trim().slice(0, 16) : '3:30',
    tag: typeof t.tag === 'string' ? t.tag.trim().slice(0, 40) : '',
    thumbnail: vid ? `https://i.ytimg.com/vi/${vid}/hqdefault.jpg` : safeUrl(t.thumbnail, './kurfamuzik_logo.png')
  };
}

function sanitizeAlbumCard(a) {
  if (!a || typeof a !== 'object') return null;
  const bid = String(a.browseId || a.id || '').trim();
  const title = typeof a.title === 'string' ? a.title.trim() : '';
  if (!bid || !title) return null;
  const cover = safeUrl(a.cover || a.thumbnail || a.image, './kurfamuzik_logo.png');
  return {
    id: bid,
    browseId: bid,
    title: title.slice(0, 140),
    artist: typeof a.artist === 'string' && a.artist.trim() ? a.artist.trim().slice(0, 100) : 'Sanat\u00e7\u0131',
    type: typeof a.type === 'string' && a.type.trim() ? a.type.trim() : 'Alb\u00fcm',
    year: typeof a.year === 'string' || typeof a.year === 'number' ? String(a.year).trim() : '',
    cover,
    thumbnail: cover,
    source: a.source || 'ytmusic'
  };
}

function sanitizeExploreData(data) {
  if (!data || typeof data !== 'object') return data;
  if (Array.isArray(data.trends)) {
    data.trends = data.trends.map(sanitizeExploreTrack).filter(Boolean);
  }
  if (Array.isArray(data.fresh)) {
    data.fresh = data.fresh.map(sanitizeExploreTrack).filter(Boolean);
  }
  if (Array.isArray(data.top10)) {
    data.top10 = data.top10.map(sanitizeExploreTrack).filter(Boolean);
  }
  if (Array.isArray(data.newReleases)) {
    data.newReleases = data.newReleases.map(sanitizeAlbumCard).filter(Boolean);
  }
  if (Array.isArray(data.albums)) {
    data.albums = data.albums.map(sanitizeAlbumCard).filter(Boolean);
  }
  if (data.hero) {
    data.hero = sanitizeExploreTrack(data.hero);
  }
  return data;
}

async function fetchExploreData(force = false) {
  try {
    localStorage.removeItem('kurfa_explore_cache');
    localStorage.removeItem('kurfa_explore_cache_time');

    const cachedTime = parseInt(localStorage.getItem('kurfa_explore_cache_time_v3') || '0', 10);
    const now = Date.now();
    const hasFreshAlbums = Array.isArray(exploreData?.newReleases) && exploreData.newReleases.length >= 6;

    // Render personalized & cached shelves immediately so screen is never blank
    if (typeof renderPersonalizedKesfet === 'function') {
      renderPersonalizedKesfet({ refreshAsync: false });
    }

    if (!force && (now - cachedTime < 2 * 60 * 60 * 1000) && exploreData && Array.isArray(exploreData.trends) && exploreData.trends.length > 0 && hasFreshAlbums) {
      sanitizeExploreData(exploreData);
      const topTrend = exploreData.hero || exploreData.trends[0];
      updateHeroUI(topTrend);
      updatePlaylistHeroUI(topTrend);
      renderTrendlerCardsGrid();
      renderHomeTracklistTable();
      renderPopularCardsGrid();
      renderFreshReleasesGrid();
      renderPlaylistTracksTable();
      if (typeof renderPersonalizedKesfet === 'function') {
        renderPersonalizedKesfet({ refreshAsync: true });
      }
      return;
    }

    // Fetch LIVE /api/music-explore first (auto-updating TR charts + TR albums), fallback to /api/explore, static seed ONLY offline
    let data = null;
    try {
      const musicUrl = force ? `${API_BASE}/api/music-explore?refresh=1` : `${API_BASE}/api/music-explore`;
      const musicExpRes = await fetch(musicUrl);
      if (musicExpRes.ok) {
        const musicJson = await musicExpRes.json();
        if (musicJson && musicJson.success && Array.isArray(musicJson.trends) && musicJson.trends.length > 0) {
          data = musicJson;
        }
      }
    } catch (_) {}

    if (!data) {
      try {
        const endpoint = force ? `${API_BASE}/api/explore?admin=force` : `${API_BASE}/api/explore`;
        const res = await fetch(endpoint);
        if (res.ok) {
          const expJson = await res.json();
          if (expJson && expJson.success && Array.isArray(expJson.trends) && expJson.trends.length > 0) {
            data = expJson;
          }
        }
      } catch (_) {}
    }

    if (!data) {
      try {
        const seedRes = await fetch('./explore-seed.json');
        if (seedRes.ok) {
          const seedJson = await seedRes.json();
          if (seedJson && seedJson.success && Array.isArray(seedJson.trends) && seedJson.trends.length > 0) {
            data = seedJson;
          }
        }
      } catch (_) {}
    }

    if (data && data.success && Array.isArray(data.trends) && data.trends.length > 0) {
      sanitizeExploreData(data);
      exploreData = data;
      safeSetStorage('kurfa_explore_cache_v3', JSON.stringify(data));
      safeSetStorage('kurfa_explore_cache_time_v3', now.toString());

      const topTrend = exploreData.hero || exploreData.trends[0];
      updateHeroUI(topTrend);
      updatePlaylistHeroUI(topTrend);

      renderTrendlerCardsGrid();
      renderHomeTracklistTable();
      renderPopularCardsGrid();
      renderFreshReleasesGrid();
      renderPlaylistTracksTable();
      if (typeof renderPersonalizedKesfet === 'function') {
        renderPersonalizedKesfet({ refreshAsync: true });
      }
    }
  } catch (err) {
    console.warn("Dynamic explore fetch fallback:", err.message);
  }
}

// =============================================================================
// 12. FAVORITES & DOWNLOADS ACTIONS
// =============================================================================

function toggleCurrentFavorite() {
  if (!state.currentTrack) {
    showToast(t('toast.select_track_first'));
    return;
  }
  toggleFavorite(state.currentTrack);
}

function toggleFavoriteById(trackId) {
  const track = CURATED_TRACKS.find(t => t.id === trackId) ||
                state.queue.find(t => t.id === trackId) ||
                state.currentSearchResults.find(t => t.id === trackId) ||
                { id: trackId };
  toggleFavorite(track);
}

function toggleFavorite(track) {
  if (!track || !track.id) return;
  const fallbackTitle = getAppLanguage() === 'en' ? 'Track' : 'Şarkı';
  const idx = state.favorites.findIndex(t => t.id === track.id);
  if (idx !== -1) {
    state.favorites.splice(idx, 1);
    showToast(t('toast.fav_removed', { title: track.title || fallbackTitle }));
  } else {
    state.favorites.push(track);
    showToast(t('toast.fav_added', { title: track.title || fallbackTitle }));
  }
  safeSetStorage('kurfa_favs', JSON.stringify(state.favorites));
  if (typeof scheduleSaveUserDataToDesktop === 'function') scheduleSaveUserDataToDesktop();
  updatePlayerFavBtn();
  renderFavoritesTable();
  renderHomeTracklistTable();
  updateQuickFavCount();
  if (typeof renderPersonalizedKesfet === 'function') {
    renderPersonalizedKesfet({ refreshAsync: true });
  }
}

function downloadCurrentMP3() {
  if (!state.currentTrack) {
    showToast(t('toast.select_track_first'));
    return;
  }
  downloadTrack(state.currentTrack);
}

function downloadTrackById(trackId) {
  const track = CURATED_TRACKS.find(t => t.id === trackId) || 
                state.queue.find(t => t.id === trackId) || 
                state.currentSearchResults.find(t => t.id === trackId) || 
                { id: trackId, title: "Şarkı", artist: "Sanatçı" };
  downloadTrack(track);
}

function downloadTrack(track) {
  if (!track || (!track.id && !track.ytId)) return;
  openDownloaderModal(track);
}


function playAllFavorites() {
  if (state.favorites.length === 0) {
    showToast("Favori listeniz boş");
    return;
  }
  const chosen = setPlaybackQueueContext(state.favorites, 0, 'Favori Şarkılarım', 'FAVORİLERDEN ÇALINIYOR');
  if (chosen) playTrackById(chosen.id, chosen);
}

function playAllDownloads() {
  if (state.downloads.length === 0) {
    showToast("İndirilen şarkı yok");
    return;
  }
  const chosen = setPlaybackQueueContext(state.downloads, 0, 'İndirilen Şarkılar', 'İNDİRİLENLERDEN ÇALINIYOR');
  if (chosen) playTrackById(chosen.id, chosen);
}

function playAllPlaylist() {
  const allTracks = getCuratedTracks();
  if (!allTracks || allTracks.length === 0) return;
  const chosen = setPlaybackQueueContext(allTracks, 0, 'Popüler Parçalar', 'ÇALMA LİSTESİNDEN ÇALINIYOR');
  if (chosen) playTrackById(chosen.id, chosen);
}

// =============================================================================
// 13. MODALS, QUEUE DRAWER & LIBRARY BACKUP
// =============================================================================

function exportLibraryBackup() {
  const lyricsOffsets = {};
  try {
    for (let i = 0; i < localStorage.length; i++) {
      const k = localStorage.key(i);
      if (k && k.startsWith('kurfa_offset_')) {
        lyricsOffsets[k] = localStorage.getItem(k);
      }
    }
  } catch (_) {}

  const data = {
    app: "Kurfam\u00fczik",
    version: "6.0",
    exportDate: new Date().toISOString(),
    favorites: state.favorites || [],
    customPlaylists: state.customPlaylists || [],
    spotifyPlaylists: state.spotifyPlaylists || [],
    downloads: state.downloads || [],
    recentlyPlayed: state.recentlyPlayed || [],
    listeningStats: (typeof ListeningStats !== 'undefined') ? ListeningStats.getStore() : safeGetJSON('kurfa_listening_stats_v1', {}),
    profile: state.profile,
    settings: {
      lang: getAppLanguage(),
      activeEqPreset: state.activeEqPreset || 'standart',
      eqGains: (typeof KurfaDSP !== 'undefined' && Array.isArray(KurfaDSP.gains)) ? [...KurfaDSP.gains] : [0, 0, 0, 0, 0],
      proSettings: state.proSettings || {},
      lyricsOffsets
    }
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = `kurfamuzik-yedek-${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast(getAppLanguage() === 'en' ? 'Full backup downloaded as JSON' : 'T\u00fcm veriler JSON yede\u011fi olarak indirildi', 'success');
}

function sanitizeBackupTrack(t) {
  if (!t || typeof t !== 'object') return null;
  const rawYt = safeYtId(t.ytId || t.id);
  const rawId = rawYt || (typeof t.id === 'string' ? t.id.trim().slice(0, 64) : '');
  if (!rawId) return null;
  const clean = {
    id: rawId,
    title: typeof t.title === 'string' ? t.title.trim().slice(0, 200) : 'Sarki',
    artist: typeof t.artist === 'string' ? t.artist.trim().slice(0, 120) : 'Sanatci',
    duration: typeof t.duration === 'string' ? t.duration.trim().slice(0, 16) : '3:30',
    thumbnail: rawYt
      ? `https://i.ytimg.com/vi/${rawYt}/hqdefault.jpg`
      : safeUrl(t.thumbnail, './kurfamuzik_logo.png')
  };
  if (rawYt) clean.ytId = rawYt;
  if (typeof t.source === 'string') clean.source = t.source.trim().slice(0, 32);
  if (typeof t.format === 'string') clean.format = t.format.trim().slice(0, 16);
  if (typeof t.size === 'string') clean.size = t.size.trim().slice(0, 24);
  if (typeof t.date === 'string') clean.date = t.date.trim().slice(0, 32);
  return clean;
}

function sanitizeBackupPlaylist(pl) {
  if (!pl || typeof pl !== 'object') return null;
  const id = typeof pl.id === 'string' && pl.id.trim() ? pl.id.trim().slice(0, 64) : `pl_${Date.now()}`;
  const tracks = Array.isArray(pl.tracks) ? pl.tracks.map(sanitizeBackupTrack).filter(Boolean).slice(0, 500) : [];
  return {
    id,
    name: typeof pl.name === 'string' && pl.name.trim() ? pl.name.trim().slice(0, 100) : 'Liste',
    cover: safeUrl(pl.cover, './kurfamuzik_logo.png'),
    description: typeof pl.description === 'string' ? pl.description.trim().slice(0, 300) : '',
    createdAt: Number.isFinite(pl.createdAt) ? pl.createdAt : Date.now(),
    tracks
  };
}

function importLibraryBackup(event) {
  const inputEl = event?.target;
  const file = inputEl?.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onerror = () => {
    if (inputEl) inputEl.value = '';
    showToast("Yedek dosyasi okunamadi");
  };
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);
      if (!data || typeof data !== 'object' || Array.isArray(data)) {
        throw new Error("Gecersiz yedek semasi");
      }

      let quotaWarning = false;
      if (Array.isArray(data.favorites)) {
        state.favorites = data.favorites.map(sanitizeBackupTrack).filter(Boolean).slice(0, 1000);
        if (!safeSetStorage('kurfa_favs', JSON.stringify(state.favorites))) quotaWarning = true;
      }
      if (Array.isArray(data.customPlaylists)) {
        state.customPlaylists = data.customPlaylists.map(sanitizeBackupPlaylist).filter(Boolean).slice(0, 100);
        if (!safeSetStorage('kurfa_custom_playlists', JSON.stringify(state.customPlaylists))) quotaWarning = true;
      }
      if (Array.isArray(data.spotifyPlaylists)) {
        state.spotifyPlaylists = data.spotifyPlaylists.map(sanitizeBackupPlaylist).filter(Boolean).slice(0, 100);
        if (!safeSetStorage('kurfa_spotify_playlists', JSON.stringify(state.spotifyPlaylists))) quotaWarning = true;
      }
      if (Array.isArray(data.downloads)) {
        state.downloads = data.downloads.map(sanitizeBackupTrack).filter(Boolean).slice(0, 500);
        if (!safeSetStorage('kurfa_downloads', JSON.stringify(state.downloads))) quotaWarning = true;
      }
      if (data.profile && typeof data.profile === 'object' && !Array.isArray(data.profile)) {
        const p = data.profile;
        state.profile = {
          ...state.profile,
          nickname: typeof p.nickname === 'string' && p.nickname.trim() ? p.nickname.trim().slice(0, 40) : state.profile.nickname,
          avatar: safeUrl(p.avatar, state.profile.avatar),
          darkMode: typeof p.darkMode === 'boolean' ? p.darkMode : state.profile.darkMode,
          listeningSeconds: Number.isFinite(p.listeningSeconds) && p.listeningSeconds >= 0 ? Math.floor(p.listeningSeconds) : state.profile.listeningSeconds,
          tracksPlayed: Number.isFinite(p.tracksPlayed) && p.tracksPlayed >= 0 ? Math.floor(p.tracksPlayed) : state.profile.tracksPlayed
        };
        if (!safeSetStorage('kurfa_profile', JSON.stringify(state.profile))) quotaWarning = true;
        updateProfileUI();
      }
      if (Array.isArray(data.recentlyPlayed)) {
        state.recentlyPlayed = data.recentlyPlayed.map(sanitizeBackupTrack).filter(Boolean).slice(0, 30);
        if (!safeSetStorage('kurfa_recent_played', JSON.stringify(state.recentlyPlayed))) quotaWarning = true;
        if (typeof renderSearchDiscoveryHub === 'function') renderSearchDiscoveryHub();
      }
      if (data.listeningStats && typeof data.listeningStats === 'object' && !Array.isArray(data.listeningStats)) {
        if (typeof ListeningStats !== 'undefined' && typeof ListeningStats.importStore === 'function') {
          ListeningStats.importStore(data.listeningStats);
        } else {
          safeSetStorage('kurfa_listening_stats_v1', JSON.stringify(data.listeningStats));
        }
      }
      if (data.settings && typeof data.settings === 'object') {
        const s = data.settings;
        if (s.lang === 'tr' || s.lang === 'en') applyAppLanguage(s.lang, true);
        if (typeof s.activeEqPreset === 'string') setEqualizerPreset(s.activeEqPreset, true);
        if (s.proSettings && typeof s.proSettings === 'object') {
          if (typeof s.proSettings.dynamicBg === 'boolean') {
            state.proSettings.dynamicBg = s.proSettings.dynamicBg;
            safeSetStorage('kurfa_dynamic_bg', String(s.proSettings.dynamicBg));
          }
          if (typeof s.proSettings.sponsorBlock === 'boolean') {
            state.proSettings.sponsorBlock = s.proSettings.sponsorBlock;
            safeSetStorage('kurfa_sponsorblock', String(s.proSettings.sponsorBlock));
          }
          if (Number.isFinite(s.proSettings.playbackSpeed) && typeof setPlaybackSpeed === 'function') {
            setPlaybackSpeed(s.proSettings.playbackSpeed, true);
          }
          if (Number.isFinite(s.proSettings.crossfadeSec) && typeof setCrossfadeSeconds === 'function') {
            setCrossfadeSeconds(s.proSettings.crossfadeSec, true);
          }
          if (typeof s.proSettings.normalization === 'boolean') {
            state.proSettings.normalization = s.proSettings.normalization;
            safeSetStorage('kurfa_norm', String(s.proSettings.normalization));
          }
          if (typeof s.proSettings.skipSilence === 'boolean') {
            state.proSettings.skipSilence = s.proSettings.skipSilence;
            safeSetStorage('kurfa_skip_silence', String(s.proSettings.skipSilence));
          }
          if (Number.isFinite(s.proSettings.bassBoost) && typeof setBassBoostLevel === 'function') {
            setBassBoostLevel(s.proSettings.bassBoost, true);
          }
          if (Number.isFinite(s.proSettings.clarity) && typeof setClarityLevel === 'function') {
            setClarityLevel(s.proSettings.clarity, true);
          }
          if (typeof s.proSettings.spatial3d === 'boolean') {
            state.proSettings.spatial3d = s.proSettings.spatial3d;
            safeSetStorage('kurfa_spatial_3d', String(s.proSettings.spatial3d));
          }
          if (typeof KurfaDSP !== 'undefined') KurfaDSP.syncAllParams();
          if (typeof syncAudioFxUI === 'function') syncAudioFxUI();
          if (typeof updateSettingsDataSummary === 'function') updateSettingsDataSummary();
        }
        if (s.lyricsOffsets && typeof s.lyricsOffsets === 'object') {
          Object.keys(s.lyricsOffsets).forEach((ok) => {
            if (ok.startsWith('kurfa_offset_')) safeSetStorage(ok, s.lyricsOffsets[ok]);
          });
        }
      }

      renderFavoritesTable();
      renderDownloadsTable();
      renderCustomPlaylistsGrid();
      renderSpotifyPlaylistsGrid();
      updateKutuphaneBadges();
      if (typeof renderStatsDashboard === 'function') renderStatsDashboard();
      if (typeof LiquidBackground !== 'undefined') LiquidBackground.syncToggleState();
      showToast(quotaWarning ? "Veriler yuklendi ancak tarayici depolama alani doldu" : "Tum veriler ve ayarlar basariyla geri yuklendi!", 'success');
    } catch (err) {
      showToast("Yedek dosyasi okunamadi veya format gecersiz");
    } finally {
      if (inputEl) inputEl.value = '';
    }
  };
  reader.readAsText(file);
}

function toggleQueueDrawer() {
  state.queueDrawerOpen = !state.queueDrawerOpen;
  if (!DOM.queueDrawer) return;

  if (state.queueDrawerOpen) {
    renderQueueDrawerList();
    DOM.queueDrawer.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-8');
    DOM.queueDrawer.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    const activeRow = DOM.queueDrawerList ? DOM.queueDrawerList.querySelector('[data-current="1"]') : null;
    if (activeRow && typeof activeRow.scrollIntoView === 'function') {
      requestAnimationFrame(() => activeRow.scrollIntoView({ block: 'center', behavior: 'smooth' }));
    }
  } else {
    DOM.queueDrawer.classList.add('opacity-0', 'pointer-events-none', 'translate-y-8');
    DOM.queueDrawer.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
  }
}

function openDownloaderModal(track) {
  if (!DOM.downloaderModal || !DOM.downloaderModalCard) return;
  DOM.downloaderModal.classList.remove('opacity-0', 'pointer-events-none');
  DOM.downloaderModal.classList.add('opacity-100', 'pointer-events-auto');
  DOM.downloaderModalCard.classList.remove('scale-95');
  DOM.downloaderModalCard.classList.add('scale-100');

  state._pendingDownloadTrack = (track && typeof track === 'object') ? track : null;

  const previewBox = document.getElementById('modal-track-preview');
  const previewImg = document.getElementById('modal-preview-img');
  const previewTitle = document.getElementById('modal-preview-title');
  const previewArtist = document.getElementById('modal-preview-artist');
  const progressBox = document.getElementById('modal-dl-progress-box');
  const openFolderBtn = document.getElementById('btn-dl-open-folder');

  if (progressBox) {
    progressBox.classList.add('hidden');
    progressBox.classList.remove('flex');
  }
  if (openFolderBtn) openFolderBtn.classList.add('hidden');

  if (track && (track.id || track.ytId)) {
    const safeId = safeYtId(track.ytId || track.id);
    if (DOM.modalUrlInput) {
      DOM.modalUrlInput.value = safeId
        ? `https://www.youtube.com/watch?v=${safeId}`
        : `${track.artist || ''} - ${track.title || ''}`.trim();
    }
    if (previewBox && previewTitle && previewArtist) {
      previewTitle.textContent = track.title || "Seçili Şarkı";
      previewArtist.textContent = track.artist || "Sanatçı";
      if (previewImg) {
        const fallbackThumb = safeId ? `https://i.ytimg.com/vi/${safeId}/hqdefault.jpg` : './kurfamuzik_logo.png';
        previewImg.src = safeUrl(track.thumbnail, fallbackThumb);
      }
      previewBox.classList.remove('hidden');
    }
  } else {
    if (DOM.modalUrlInput) DOM.modalUrlInput.value = '';
    if (previewBox) previewBox.classList.add('hidden');
    if (DOM.modalUrlInput) DOM.modalUrlInput.focus();
  }

  const folderRow = document.getElementById('modal-dl-folder-row');
  const folderPathEl = document.getElementById('modal-dl-folder-path');
  const isDesktopMode = typeof getBrowserExtensionMode === 'function' && (getBrowserExtensionMode() || '').startsWith('desktop');
  if (folderRow) {
    if (isDesktopMode) {
      folderRow.classList.remove('hidden');
      folderRow.classList.add('flex');
      if (folderPathEl) {
        folderPathEl.textContent = (__desktopSettingsState && __desktopSettingsState.downloadDir) || 'Varsayılan İndirilenler';
      }
      if ((!__desktopSettingsState || !__desktopSettingsState.downloadDir) && typeof refreshDesktopBridgeSettings === 'function') {
        refreshDesktopBridgeSettings().catch(() => {});
      }
    } else {
      folderRow.classList.add('hidden');
      folderRow.classList.remove('flex');
    }
  }

  const ongoingBox = document.getElementById('modal-ongoing-download-box');
  if (ongoingBox) {
    if (state.activeDownload && state.activeDownload.status === 'active') {
      ongoingBox.classList.remove('hidden');
      ongoingBox.classList.add('flex');
      const titleEl = document.getElementById('modal-ongoing-dl-title');
      const pctEl = document.getElementById('modal-ongoing-dl-percent');
      if (titleEl) titleEl.textContent = `${state.activeDownload.label || 'İndiriliyor'}: ${state.activeDownload.title || 'Şarkı'}`;
      if (pctEl) pctEl.textContent = `${state.activeDownload.percent || 0}%`;
    } else {
      ongoingBox.classList.add('hidden');
      ongoingBox.classList.remove('flex');
    }
  }
}

function closeDownloaderModal() {
  if (!DOM.downloaderModal || !DOM.downloaderModalCard) return;
  DOM.downloaderModal.classList.add('opacity-0', 'pointer-events-none');
  DOM.downloaderModal.classList.remove('opacity-100', 'pointer-events-auto');
  DOM.downloaderModalCard.classList.add('scale-95');
  DOM.downloaderModalCard.classList.remove('scale-100');
}

async function pasteModalUrl() {
  try {
    const text = await navigator.clipboard.readText();
    if (DOM.modalUrlInput) {
      DOM.modalUrlInput.value = text;
      showToast("Pano linki yapistirildi");
    }
  } catch (err) {
    showToast("Lutfen linki dogrudan kutuya yapistirin.");
  }
}

let downloadPillHideTimer = null;
let inlineDeckHideTimer = null;
let mobBannerHideTimer = null;

function updateDownloadPill(status, percent, title, label) {
  const pill = document.getElementById('active-download-pill');
  if (!pill) return;
  const pillSpinner = document.getElementById('download-pill-spinner');
  const pillCheck = document.getElementById('download-pill-check');
  const pillLabel = document.getElementById('download-pill-label');
  const pillPercent = document.getElementById('download-pill-percent');
  const pillTitle = document.getElementById('download-pill-title');

  if (downloadPillHideTimer) {
    clearTimeout(downloadPillHideTimer);
    downloadPillHideTimer = null;
  }

  if (status === 'hide') {
    pill.classList.add('hidden');
    pill.classList.remove('flex');
    return;
  }

  pill.classList.remove('hidden');
  pill.classList.add('flex');

  if (status === 'active') {
    if (pillSpinner) { pillSpinner.style.display = 'inline-block'; pillSpinner.classList.remove('hidden'); pillSpinner.classList.add('animate-spin'); }
    if (pillCheck) { pillCheck.style.display = 'none'; pillCheck.classList.add('hidden'); }
    if (pillLabel) pillLabel.textContent = label || 'Indiriliyor';
    if (pillPercent) pillPercent.textContent = `${percent}%`;
    if (pillTitle) pillTitle.textContent = title || 'Arka planda hazirlaniyor...';
  } else if (status === 'done') {
    if (pillSpinner) { pillSpinner.style.display = 'none'; pillSpinner.classList.add('hidden'); pillSpinner.classList.remove('animate-spin'); }
    if (pillCheck) { pillCheck.style.display = 'inline-block'; pillCheck.classList.remove('hidden'); }
    if (pillLabel) pillLabel.textContent = label || 'Indirildi';
    if (pillPercent) pillPercent.textContent = '100%';
    if (pillTitle) pillTitle.textContent = title || 'Tamamlandi';
    downloadPillHideTimer = setTimeout(() => {
      downloadPillHideTimer = null;
      pill.classList.add('hidden');
      pill.classList.remove('flex');
    }, 4000);
  } else if (status === 'error') {
    if (pillSpinner) { pillSpinner.style.display = 'none'; pillSpinner.classList.add('hidden'); pillSpinner.classList.remove('animate-spin'); }
    if (pillCheck) { pillCheck.style.display = 'none'; pillCheck.classList.add('hidden'); }
    if (pillLabel) pillLabel.textContent = 'Hata Olustu';
    if (pillPercent) pillPercent.textContent = '!';
    if (pillTitle) pillTitle.textContent = title || 'Indirme basarisiz';
    downloadPillHideTimer = setTimeout(() => {
      downloadPillHideTimer = null;
      pill.classList.add('hidden');
      pill.classList.remove('flex');
    }, 4000);
  }
}

function updateAllDownloadIndicators(status, percent, title, label) {
  state.activeDownload = {
    status,
    percent,
    title,
    label
  };

  if (inlineDeckHideTimer) {
    clearTimeout(inlineDeckHideTimer);
    inlineDeckHideTimer = null;
  }
  if (mobBannerHideTimer) {
    clearTimeout(mobBannerHideTimer);
    mobBannerHideTimer = null;
  }

  // 1. Bottom-Right Floating Pill
  updateDownloadPill(status, percent, title, label);

  // 2. PC Player Deck Inline Widget
  const inlineDeck = document.getElementById('player-inline-download-status');
  if (inlineDeck) {
    const inlineIcon = document.getElementById('player-inline-dl-icon');
    const inlineFmt = document.getElementById('player-inline-dl-format');
    const inlinePct = document.getElementById('player-inline-dl-percent');
    const inlineBar = document.getElementById('player-inline-dl-bar');

    if (status === 'hide') {
      inlineDeck.classList.add('hidden');
      inlineDeck.classList.remove('flex');
    } else if (status === 'active') {
      inlineDeck.classList.remove('hidden');
      inlineDeck.classList.add('flex');
      if (inlineIcon) {
        inlineIcon.textContent = 'progress_activity';
        inlineIcon.classList.add('animate-spin', 'text-primary');
        inlineIcon.classList.remove('text-green-500', 'text-rose-400');
      }
      if (inlineFmt) inlineFmt.textContent = label || 'Indiriliyor';
      if (inlinePct) inlinePct.textContent = `${percent}%`;
      if (inlineBar) inlineBar.style.width = `${percent}%`;
    } else if (status === 'done') {
      inlineDeck.classList.remove('hidden');
      inlineDeck.classList.add('flex');
      if (inlineIcon) {
        inlineIcon.textContent = 'check_circle';
        inlineIcon.classList.remove('animate-spin', 'text-primary', 'text-rose-400');
        inlineIcon.classList.add('text-green-500');
      }
      if (inlineFmt) inlineFmt.textContent = 'Indirildi';
      if (inlinePct) inlinePct.textContent = '100%';
      if (inlineBar) inlineBar.style.width = '100%';
      inlineDeckHideTimer = setTimeout(() => {
        inlineDeckHideTimer = null;
        inlineDeck.classList.add('hidden');
        inlineDeck.classList.remove('flex');
      }, 4000);
    } else if (status === 'error') {
      inlineDeck.classList.remove('hidden');
      inlineDeck.classList.add('flex');
      if (inlineIcon) {
        inlineIcon.textContent = 'error';
        inlineIcon.classList.remove('animate-spin', 'text-primary', 'text-green-500');
        inlineIcon.classList.add('text-rose-400');
      }
      if (inlineFmt) inlineFmt.textContent = 'Hata';
      if (inlinePct) inlinePct.textContent = '!';
      inlineDeckHideTimer = setTimeout(() => {
        inlineDeckHideTimer = null;
        inlineDeck.classList.add('hidden');
        inlineDeck.classList.remove('flex');
      }, 4000);
    }
  }

  // 3. Mobile Top Floating Island Banner
  const mobBanner = document.getElementById('mobile-download-banner');
  if (mobBanner) {
    const mobIconBox = document.getElementById('mob-dl-icon-box');
    const mobIcon = document.getElementById('mob-dl-icon');
    const mobTitle = document.getElementById('mob-dl-title');
    const mobPct = document.getElementById('mob-dl-percent');
    const mobBar = document.getElementById('mob-dl-bar');

    if (status === 'hide') {
      mobBanner.classList.add('hidden');
      mobBanner.classList.remove('flex');
    } else if (status === 'active') {
      mobBanner.classList.remove('hidden');
      mobBanner.classList.add('flex');
      if (mobIconBox) {
        mobIconBox.className = 'w-8 h-8 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0 text-primary transition-all';
      }
      if (mobIcon) {
        mobIcon.textContent = 'progress_activity';
        mobIcon.className = 'material-symbols-outlined text-[18px] animate-spin text-primary';
      }
      if (mobTitle) mobTitle.textContent = title || 'Sarki Indiriliyor...';
      if (mobPct) {
        mobPct.textContent = `${percent}%`;
        mobPct.className = 'text-[11px] font-bold font-mono text-primary flex-shrink-0';
      }
      if (mobBar) {
        mobBar.style.width = `${percent}%`;
        mobBar.className = 'h-full bg-gradient-to-r from-primary to-pink-500 rounded-full transition-all duration-300';
      }
    } else if (status === 'done') {
      mobBanner.classList.remove('hidden');
      mobBanner.classList.add('flex');
      if (mobIconBox) {
        mobIconBox.className = 'w-8 h-8 rounded-xl bg-emerald-500/15 flex items-center justify-center flex-shrink-0 text-emerald-400 transition-all';
      }
      if (mobIcon) {
        mobIcon.textContent = 'check_circle';
        mobIcon.className = 'material-symbols-outlined text-[18px] text-emerald-400';
      }
      if (mobTitle) mobTitle.textContent = title ? `${title} (Indirildi)` : 'Indirme Tamamlandi';
      if (mobPct) {
        mobPct.textContent = '100%';
        mobPct.className = 'text-[11px] font-bold font-mono text-emerald-400 flex-shrink-0';
      }
      if (mobBar) {
        mobBar.style.width = '100%';
        mobBar.className = 'h-full bg-emerald-500 rounded-full transition-all duration-300';
      }
      mobBannerHideTimer = setTimeout(() => {
        mobBannerHideTimer = null;
        mobBanner.classList.add('hidden');
        mobBanner.classList.remove('flex');
      }, 4000);
    } else if (status === 'error') {
      mobBanner.classList.remove('hidden');
      mobBanner.classList.add('flex');
      if (mobIconBox) {
        mobIconBox.className = 'w-8 h-8 rounded-xl bg-rose-500/15 flex items-center justify-center flex-shrink-0 text-rose-400 transition-all';
      }
      if (mobIcon) {
        mobIcon.textContent = 'error';
        mobIcon.className = 'material-symbols-outlined text-[18px] text-rose-400';
      }
      if (mobTitle) mobTitle.textContent = 'Indirme hatasi olustu';
      if (mobPct) {
        mobPct.textContent = '!';
        mobPct.className = 'text-[11px] font-bold font-mono text-rose-400 flex-shrink-0';
      }
      mobBannerHideTimer = setTimeout(() => {
        mobBannerHideTimer = null;
        mobBanner.classList.add('hidden');
        mobBanner.classList.remove('flex');
      }, 4000);
    }
  }

  // 4. Modal Ongoing Notice Box (hidden when #modal-dl-progress-box is already displaying progress)
  const ongoingBox = document.getElementById('modal-ongoing-download-box');
  const modalDlProgressBox = document.getElementById('modal-dl-progress-box');
  const hasModalProgressBar = Boolean(modalDlProgressBox && !modalDlProgressBox.classList.contains('hidden'));
  if (ongoingBox) {
    if (status === 'active' && !hasModalProgressBar) {
      ongoingBox.classList.remove('hidden');
      ongoingBox.classList.add('flex');
      const titleEl = document.getElementById('modal-ongoing-dl-title');
      const pctEl = document.getElementById('modal-ongoing-dl-percent');
      if (titleEl) titleEl.textContent = `${label || 'İndiriliyor'}: ${title || 'Şarkı'}`;
      if (pctEl) pctEl.textContent = `${percent}%`;
    } else {
      ongoingBox.classList.add('hidden');
      ongoingBox.classList.remove('flex');
    }
  }
}

function dismissMobileDownloadBanner(e) {
  if (e) e.stopPropagation();
  if (mobBannerHideTimer) {
    clearTimeout(mobBannerHideTimer);
    mobBannerHideTimer = null;
  }
  const banner = document.getElementById('mobile-download-banner');
  if (banner) {
    banner.classList.add('hidden');
    banner.classList.remove('flex');
  }
}

function dismissDownloadPill(e) {
  if (e) e.stopPropagation();
  updateAllDownloadIndicators('hide');
}

function setModalDownloadProgressUI(percent, statusText, detailText, mode = 'progress', opts = {}) {
  const pct = Math.max(0, Math.min(100, Math.round(Number(percent) || 0)));
  const box = document.getElementById('modal-dl-progress-box');
  const iconEl = document.getElementById('modal-dl-state-icon');
  const statusEl = document.getElementById('modal-dl-status-text');
  const pctEl = document.getElementById('modal-dl-percent-text');
  const nativeProg = document.getElementById('modal-dl-progress-native');
  const legacyBar = document.getElementById('modal-dl-progress-bar');
  const detailEl = document.getElementById('modal-dl-detail-text');
  const actionsRow = document.getElementById('modal-dl-actions-row');
  const retryBtn = document.getElementById('btn-dl-retry');
  const getAppBtn = document.getElementById('btn-dl-get-app');

  const isError = mode === 'error';
  const isSuccess = mode === 'success';

  if (box) {
    box.classList.remove(
      'bg-surface-container-low', 'border-surface-container',
      'bg-rose-500/10', 'border-rose-500/25',
      'bg-emerald-500/10', 'border-emerald-500/25'
    );
    if (isError) {
      box.classList.add('bg-rose-500/10', 'border-rose-500/25');
    } else if (isSuccess) {
      box.classList.add('bg-emerald-500/10', 'border-emerald-500/25');
    } else {
      box.classList.add('bg-surface-container-low', 'border-surface-container');
    }
  }

  if (iconEl) {
    iconEl.classList.remove('text-primary', 'text-rose-500', 'text-emerald-500');
    if (isError) {
      iconEl.textContent = 'error';
      iconEl.classList.add('text-rose-500');
    } else if (isSuccess) {
      iconEl.textContent = 'check_circle';
      iconEl.classList.add('text-emerald-500');
    } else {
      iconEl.textContent = 'downloading';
      iconEl.classList.add('text-primary');
    }
  }

  if (statusEl && statusText) {
    statusEl.textContent = statusText;
    statusEl.classList.toggle('text-rose-500', isError);
    statusEl.classList.toggle('text-on-surface', !isError);
  }
  if (pctEl) {
    pctEl.textContent = `${pct}%`;
    pctEl.classList.toggle('hidden', isError);
  }
  if (nativeProg) {
    nativeProg.value = pct;
    nativeProg.classList.toggle('hidden', isError);
  }
  if (legacyBar) legacyBar.style.width = `${pct}%`;
  if (detailEl && detailText) detailEl.textContent = detailText;

  const showRetry = isError && Boolean(opts.showRetry !== false && state._lastDownloadArgs);
  const showAppCta = isError && Boolean(opts.showAppCta);
  if (retryBtn) retryBtn.classList.toggle('hidden', !showRetry);
  if (getAppBtn) getAppBtn.classList.toggle('hidden', !showAppCta);
  if (actionsRow) {
    const openFolderBtn = document.getElementById('btn-dl-open-folder');
    const hasOpenFolder = openFolderBtn && !openFolderBtn.classList.contains('hidden');
    const anyAction = showRetry || showAppCta || hasOpenFolder;
    actionsRow.classList.toggle('hidden', !anyAction);
    actionsRow.classList.toggle('flex', anyAction);
  }
}

window.retryLastDownload = function () {
  const args = state._lastDownloadArgs;
  if (!args) return;
  startDirectDownload(args.videoId, args.format, args.trackMeta);
};

function formatBytesMb(bytes) {
  const b = Number(bytes || 0);
  if (!b || b <= 0) return '';
  if (b < 1024 * 1024) return `${Math.round(b / 1024)} KB`;
  return `${(b / (1024 * 1024)).toFixed(1)} MB`;
}

window.openLastDownloadFolder = function () {
  if (getBrowserExtensionMode().startsWith('desktop')) {
    callExtensionBridge('OPEN_DOWNLOAD_FOLDER', { filePath: state._lastDownloadFilePath || '' }, 4000);
  }
};

window.__kurfaHandleNativeDownloadProgress = function (payload) {
  if (!payload) return;
  const pct = Math.max(1, Math.min(99, Math.round(Number(payload.percent || 0))));
  const dlStr = formatBytesMb(payload.bytesDownloaded);
  const totStr = formatBytesMb(payload.totalBytes);
  const sizeDetail = dlStr ? (totStr ? `${dlStr} / ${totStr}` : dlStr) : 'Aktarım sürüyor...';
  const curTitle = state.activeDownload?.title || 'Parça';
  const curLabel = state.activeDownload?.label || 'İndiriliyor';
  setModalDownloadProgressUI(pct, `${curLabel} (%${pct})`, sizeDetail);
  updateAllDownloadIndicators('active', pct, curTitle, curLabel);
};

async function startDirectDownload(videoId, format, trackMeta) {
  const isAudiusDirect = Boolean(trackMeta?.audiusStreamUrl) || String(videoId || '').startsWith('audius_');
  const validVideoId = safeYtId(trackMeta?.ytId || videoId);
  const isMp4 = format === '720' || format === 'mp4' || format === '1080';
  const label = isMp4 ? 'MP4 Video' : 'Ses Dosyası';

  if (!validVideoId && !isAudiusDirect && !trackMeta?.title) {
    showToast("Geçersiz medya bilgisi");
    return;
  }

  const progressBox = document.getElementById('modal-dl-progress-box');
  const openFolderBtn = document.getElementById('btn-dl-open-folder');
  const btnMp3 = document.getElementById('btn-dl-mp3');
  const btnMp4 = document.getElementById('btn-dl-mp4');

  if (progressBox) {
    progressBox.classList.remove('hidden');
    progressBox.classList.add('flex');
  }
  if (openFolderBtn) openFolderBtn.classList.add('hidden');
  if (btnMp3) btnMp3.disabled = true;
  if (btnMp4) btnMp4.disabled = true;

  state._lastDownloadArgs = { videoId, format, trackMeta };
  const displayTitle = trackMeta?.title || validVideoId || 'Kurfamüzik Parçası';
  const displayArtist = trackMeta?.artist || 'Kurfamüzik';
  const combinedTitle = (displayArtist && displayArtist !== 'Kurfamüzik' && !displayTitle.toLowerCase().includes(displayArtist.toLowerCase()))
    ? `${displayArtist} - ${displayTitle}`
    : displayTitle;

  setModalDownloadProgressUI(4, `${label} hazırlanıyor...`, 'Kaynak doğrulanıyor...');
  updateAllDownloadIndicators('active', 4, displayTitle, label);

  const recordCompletedDownload = (extLabel, sizeStr, filePath = '') => {
    const cleanId = validVideoId || trackMeta?.id || `dl_${Date.now()}`;
    const cleanTrack = {
      id: cleanId,
      ytId: validVideoId || undefined,
      title: displayTitle,
      artist: displayArtist,
      duration: trackMeta?.duration || '3:30',
      thumbnail: safeUrl(trackMeta?.thumbnail, validVideoId ? `https://i.ytimg.com/vi/${validVideoId}/hqdefault.jpg` : './kurfamuzik_logo.png'),
      format: extLabel,
      size: sizeStr || (isMp4 ? 'Video' : 'Ses'),
      filePath: filePath || undefined,
      date: 'Bugün'
    };
    if (!state.downloads.some(d => d.id === cleanTrack.id)) {
      state.downloads.unshift(cleanTrack);
      safeSetStorage('kurfa_downloads', JSON.stringify(state.downloads));
      renderDownloadsTable();
      updateKutuphaneBadges();
    }
  };

  try {
    // 0. Ensure valid YouTube ID when Open-Catalog (non-Audius) track is requested on native bridges
    let targetYtId = validVideoId;
    if (!targetYtId && !isAudiusDirect && displayTitle) {
      setModalDownloadProgressUI(10, 'Eşleştiriliyor...', `${displayTitle} aranıyor...`);
      const sRes = await kurfaSearchTracks(`${displayArtist} ${displayTitle}`, { filterSingles: true });
      if (sRes?.success && Array.isArray(sRes.results) && sRes.results.length > 0) {
        targetYtId = safeYtId(sRes.results[0].id || sRes.results[0].ytId);
      }
    }

    // 1. NATIVE WINDOWS DESKTOP (.EXE) — Direct InnerTube Chunked Download to %USERPROFILE%\Downloads
    const extMode = getBrowserExtensionMode();
    if (targetYtId && extMode && extMode.startsWith('desktop')) {
      setModalDownloadProgressUI(8, `${label} cihaza indiriliyor...`, 'Masaüstü motoru bağlanıyor...');
      const res = await callExtensionBridge('DOWNLOAD_MEDIA', {
        videoId: targetYtId,
        format: isMp4 ? 'mp4' : 'mp3',
        title: combinedTitle
      }, 180000);
      if (res && res.success) {
        state._lastDownloadFilePath = res.filePath || '';
        const mbStr = formatBytesMb(res.bytesDownloaded) || 'Kaydedildi';
        setModalDownloadProgressUI(100, `${label} indirildi`, `${res.fileName || combinedTitle} (${mbStr})`, 'success');
        if (openFolderBtn) {
          openFolderBtn.classList.remove('hidden');
          const actionsRow = document.getElementById('modal-dl-actions-row');
          if (actionsRow) {
            actionsRow.classList.remove('hidden');
            actionsRow.classList.add('flex');
          }
        }
        updateAllDownloadIndicators('done', 100, displayTitle, label);
        recordCompletedDownload(isMp4 ? 'MP4' : 'M4A', mbStr, res.filePath || '');
        const folderLabel = __desktopSettingsState.downloadDir || 'İndirilenler klasörüne';
        showToast(`Kaydedildi (${folderLabel}): ${res.fileName || displayTitle}`);
        return;
      }
      throw new Error(res?.error || 'Masaüstü indirme tamamlanamadı.');
    }

    // 2. NATIVE ANDROID (.APK) — Direct InnerTube Chunked Download to MediaStore.Downloads
    if (targetYtId && isAndroidNativeEngine() && typeof window.KurfaAndroidBridge?.downloadMediaAsync === 'function') {
      setModalDownloadProgressUI(8, `${label} telefona indiriliyor...`, 'Android motoru bağlanıyor...');
      const res = await callAndroidBridge('downloadMediaAsync', [
        targetYtId,
        isMp4 ? 'mp4' : 'mp3',
        combinedTitle
      ], 180000);
      if (res && res.success) {
        const mbStr = formatBytesMb(res.bytesDownloaded) || 'Kaydedildi';
        setModalDownloadProgressUI(100, `${label} indirildi`, `${res.fileName || combinedTitle} (${mbStr})`, 'success');
        updateAllDownloadIndicators('done', 100, displayTitle, label);
        recordCompletedDownload(isMp4 ? 'MP4' : 'M4A', mbStr, res.filePath || res.uri || '');
        showToast(`Cihaza kaydedildi: ${res.fileName || displayTitle}`);
        return;
      }
      throw new Error(res?.error || 'Android indirme tamamlanamadı.');
    }

    // 3. WEB BROWSER — Native Audius Stream / Open-Catalog Blob Download (Zero Server Cost)
    let directAudioUrl = trackMeta?.audiusStreamUrl || (isAudiusDirect ? `https://api.audius.co/v1/tracks/${encodeURIComponent(String(videoId).replace(/^audius_/, ''))}/stream` : '');
    if (!directAudioUrl && !isMp4 && trackMeta) {
      const audMatch = await kurfaTryQuickAudiusMatch(trackMeta, 1800);
      if (audMatch?.success && audMatch.streamUrl) {
        directAudioUrl = audMatch.streamUrl;
      }
    }

    if (directAudioUrl && !isMp4) {
      setModalDownloadProgressUI(18, 'Doğrudan ses akışı indiriliyor...', 'Tarayıcı belleğine alınıyor...');
      const dlRes = await fetch(directAudioUrl);
      if (!dlRes.ok) throw new Error(`HTTP ${dlRes.status}`);
      const contentLen = Number(dlRes.headers.get('content-length') || 0);
      let blob;
      if (dlRes.body && typeof dlRes.body.getReader === 'function') {
        const reader = dlRes.body.getReader();
        const chunks = [];
        let received = 0;
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          if (value) {
            chunks.push(value);
            received += value.byteLength;
            const pct = contentLen > 0 ? Math.min(96, Math.round((received * 100) / contentLen)) : Math.min(92, 20 + Math.round(received / 150000));
            setModalDownloadProgressUI(pct, `Ses indiriliyor (%${pct})`, formatBytesMb(received));
            updateAllDownloadIndicators('active', pct, displayTitle, label);
          }
        }
        blob = new Blob(chunks, { type: dlRes.headers.get('content-type') || 'audio/mpeg' });
      } else {
        blob = await dlRes.blob();
      }

      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = blobUrl;
      a.download = `${combinedTitle.replace(/[\\/:*?"<>|]/g, '')}.mp3`;
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        if (a.parentNode) a.parentNode.removeChild(a);
        URL.revokeObjectURL(blobUrl);
      }, 3000);

      const mbStr = formatBytesMb(blob.size) || 'MP3';
      setModalDownloadProgressUI(100, 'Ses dosyası indirildi', `${a.download} (${mbStr})`, 'success');
      updateAllDownloadIndicators('done', 100, displayTitle, 'MP3 İndirildi');
      recordCompletedDownload('MP3', mbStr);
      showToast(`İndirildi: ${displayTitle}`);
      return;
    }

    // 4. WEB FALLBACK FOR YOUTUBE LINKS (Fast-timeout check before clean app CTA)
    if (targetYtId) {
      setModalDownloadProgressUI(20, 'Web indirme servisine bağlanılıyor...', 'Ayna sunucu deneniyor...');
      const cobaltMirrors = [
        'https://cobalt-api.kwiatekmiki.com/'
      ];
      let tunnelUrl = '';
      for (const ep of cobaltMirrors) {
        try {
          const sig = typeof AbortSignal !== 'undefined' && typeof AbortSignal.timeout === 'function'
            ? AbortSignal.timeout(3500)
            : undefined;
          const cRes = await fetch(ep, {
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            signal: sig,
            body: JSON.stringify({
              url: `https://www.youtube.com/watch?v=${targetYtId}`,
              downloadMode: isMp4 ? 'auto' : 'audio',
              audioFormat: 'mp3',
              videoQuality: '720'
            })
          });
          if (cRes.ok) {
            const cData = await cRes.json();
            if (cData && cData.url && String(cData.url).startsWith('https://')) {
              tunnelUrl = cData.url;
              break;
            }
          }
        } catch (_) {}
      }

      if (tunnelUrl) {
        setModalDownloadProgressUI(100, `${label} hazır`, 'Tarayıcı indirmesi başlatılıyor...', 'success');
        const a = document.createElement('a');
        a.href = tunnelUrl;
        a.download = `${combinedTitle.replace(/[\\/:*?"<>|]/g, '')}.${isMp4 ? 'mp4' : 'mp3'}`;
        a.rel = 'noopener noreferrer';
        a.style.display = 'none';
        document.body.appendChild(a);
        a.click();
        setTimeout(() => { if (a.parentNode) a.parentNode.removeChild(a); }, 2000);
        updateAllDownloadIndicators('done', 100, displayTitle, label);
        recordCompletedDownload(isMp4 ? 'MP4' : 'MP3', '');
        showToast(`İndirme başlatıldı: ${displayTitle}`);
        return;
      }
    }

    throw new Error('WEB_CORS_UNAVAILABLE');
  } catch (err) {
    console.error("Download error:", err);
    const isWebCors = String(err?.message || '') === 'WEB_CORS_UNAVAILABLE';
    const isNativeEnv = (typeof isAndroidNativeEngine === 'function' && isAndroidNativeEngine()) || Boolean(getBrowserExtensionMode());
    const errTitle = isMp4 ? 'Video indirilemedi' : 'Ses indirilemedi';
    const errDetail = isWebCors
      ? 'Tarayıcı güvenlik kısıtı nedeniyle YouTube MP4 dosyaları doğrudan indirilemiyor. Masaüstü (.exe) veya Android (.apk) üzerinden tek dokunuşla indirebilirsiniz.'
      : (err?.message || 'Bağlantı zaman aşımına uğradı, lütfen tekrar deneyin.');
    setModalDownloadProgressUI(0, errTitle, errDetail, 'error', {
      showRetry: true,
      showAppCta: isWebCors && !isNativeEnv
    });
    updateAllDownloadIndicators('error', 0, displayTitle, 'Hata');
    showToast(isWebCors ? 'Tam indirme için EXE veya APK uygulamasını kullanın.' : 'İndirme başarısız oldu.');
  } finally {
    if (btnMp3) btnMp3.disabled = false;
    if (btnMp4) btnMp4.disabled = false;
  }
}

function processModalDownload(action) {
  const url = DOM.modalUrlInput ? DOM.modalUrlInput.value.trim() : "";
  const urlMatch = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=|shorts\/))([\w-]{11})/);
  const matchedYt = urlMatch ? safeYtId(urlMatch[1]) : null;
  const pendingTrack = state._pendingDownloadTrack;

  if (!matchedYt && !pendingTrack) {
    showToast("Lütfen geçerli bir YouTube linki yapıştırın");
    return;
  }

  const videoId = matchedYt || pendingTrack?.ytId || pendingTrack?.id;
  const track = (matchedYt && pendingTrack && (pendingTrack.id === matchedYt || pendingTrack.ytId === matchedYt))
    ? pendingTrack
    : (matchedYt
      ? ((typeof CURATED_TRACKS !== 'undefined' ? CURATED_TRACKS.find(t => (t.id === matchedYt || t.ytId === matchedYt)) : null) ||
         state.queue.find(t => (t.id === matchedYt || t.ytId === matchedYt)) ||
         state.currentSearchResults.find(t => (t.id === matchedYt || t.ytId === matchedYt)) ||
         { id: matchedYt, ytId: matchedYt, title: "YouTube Parçası", artist: "Kurfamüzik" })
      : pendingTrack);

  if (action === 'play') {
    closeDownloaderModal();
    playTrackById(track.id || videoId, track);
  } else {
    startDirectDownload(videoId, action, track);
  }
}

function showKurfaStorageInfo() {
  showToast("Yerel Kutuphane: Sarkilariniz ve ayarlariniz tarayicinizin guvenli yerel hafizasinda saklanir.");
}

// =============================================================================
// =============================================================================
// 13.2 REAL HARDWARE WEB AUDIO API DSP ENGINE, AUTOEQ & PRO FX
// =============================================================================

const KurfaDSP = {
  ctx: null,
  sourceNode: null,
  sourceNodes: new WeakMap(),
  filters: [], // 5 BiquadFilterNodes: 60Hz, 250Hz, 1kHz, 4kHz, 16kHz
  subBassFilter: null, // LowShelf 75Hz (+0..+9dB)
  clarityFilter: null, // HighShelf 7500Hz (+0..+8dB)
  spatialDryGain: null,
  spatialWetGain: null,
  compressorNode: null,
  makeupGainNode: null,
  masterFadeGainNode: null,
  analyserNode: null,
  frequencies: [60, 250, 1000, 4000, 16000],
  types: ['lowshelf', 'peaking', 'peaking', 'peaking', 'highshelf'],
  gains: [0, 0, 0, 0, 0], // dB (-12 .. +12)
  isInitialized: false,
  isConnected: false,
  graphConnected: false,
  corsBlockedUrls: new Set(),
  _silenceTimer: null,
  _silenceMs: 0,
  _silenceBoosting: false,
  _rmsBuffer: null,

  presets: {
    'standart': [0, 0, 0, 0, 0],
    'airpods_pro': [3, 1, 0, 2, 1],
    'sony_xm5': [-2, -1, 1, 3, 2],
    'bass': [8, 5, 0, -1, -2],
    'vokal': [-2, 1, 6, 4, 1],
    'studio': [1, 0, 0, 1, 2],
    'kulup': [6, 3, -1, 2, 4],
    'akustik': [3, 4, 2, 3, 2],
    'tiz': [-2, 0, 2, 5, 8]
  },

  init(audioEl) {
    this.isInitialized = true;
    try {
      if (state.activeEqPreset === 'ozel') {
        const saved = JSON.parse(localStorage.getItem('kurfa_eq_gains') || 'null');
        if (Array.isArray(saved) && saved.length === 5) {
          this.gains = saved.map(v => Math.max(-12, Math.min(12, Math.round(Number(v) || 0))));
        }
      }
    } catch (_) {}
    this.updateUI();
    syncAudioFxUI();
  },

  ensureGraph() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return false;
      if (!this.ctx) {
        this.ctx = new AudioCtx({ latencyHint: 'playback' });
        this.ctx.onstatechange = () => {
          if (this.ctx && this.ctx.state === 'suspended' && state.isPlaying && !state.userPaused) {
            try { this.ctx.resume().catch(() => {}); } catch (_) {}
          }
        };
      }
      if (!this.filters || this.filters.length !== 5) {
        this.filters = this.frequencies.map((freq, idx) => {
          const f = this.ctx.createBiquadFilter();
          f.type = this.types[idx] || 'peaking';
          f.frequency.value = freq;
          f.Q.value = (idx === 0 || idx === 4) ? 0.8 : 1.0;
          f.gain.value = this.gains[idx] || 0;
          return f;
        });
      }
      if (!this.subBassFilter) {
        const sb = this.ctx.createBiquadFilter();
        sb.type = 'lowshelf';
        sb.frequency.value = 75;
        sb.gain.value = ((Number(state.proSettings?.bassBoost) || 0) / 100) * 9;
        this.subBassFilter = sb;
      }
      if (!this.clarityFilter) {
        const cl = this.ctx.createBiquadFilter();
        cl.type = 'highshelf';
        cl.frequency.value = 7500;
        cl.gain.value = ((Number(state.proSettings?.clarity) || 0) / 100) * 8;
        this.clarityFilter = cl;
      }
      if (!this.compressorNode) {
        const comp = this.ctx.createDynamicsCompressor();
        const normOn = Boolean(state.proSettings && state.proSettings.normalization);
        comp.threshold.value = normOn ? -20 : 0;
        comp.knee.value = 18;
        comp.ratio.value = normOn ? 4.5 : 1.0;
        comp.attack.value = 0.004;
        comp.release.value = 0.22;
        this.compressorNode = comp;
      }
      if (!this.makeupGainNode) {
        const mg = this.ctx.createGain();
        const normOn = Boolean(state.proSettings && state.proSettings.normalization);
        mg.gain.value = normOn ? 1.28 : 1.0;
        this.makeupGainNode = mg;
      }
      if (!this.masterFadeGainNode) {
        const fg = this.ctx.createGain();
        fg.gain.value = 1.0;
        this.masterFadeGainNode = fg;
      }
      if (!this.analyserNode) {
        const an = this.ctx.createAnalyser();
        an.fftSize = 1024;
        an.smoothingTimeConstant = 0.25;
        this.analyserNode = an;
        this._rmsBuffer = new Float32Array(an.fftSize);
      }
      if (!this.graphConnected) {
        for (let i = 0; i < this.filters.length - 1; i++) {
          this.filters[i].connect(this.filters[i + 1]);
        }
        this.filters[this.filters.length - 1].connect(this.subBassFilter);
        this.subBassFilter.connect(this.clarityFilter);
        this.clarityFilter.connect(this.compressorNode);
        this.compressorNode.connect(this.makeupGainNode);
        this.makeupGainNode.connect(this.masterFadeGainNode);

        // Clean Stereo / 3D Haas Widener Stage (Zero Latency When Off)
        const spatialOn = Boolean(state.proSettings && state.proSettings.spatial3d);
        const splitter = this.ctx.createChannelSplitter(2);
        const merger = this.ctx.createChannelMerger(2);
        const delayR = this.ctx.createDelay(0.05);
        delayR.delayTime.value = 0.0065;
        const dryG = this.ctx.createGain();
        dryG.gain.value = spatialOn ? 0.78 : 1.0;
        const wetG = this.ctx.createGain();
        wetG.gain.value = spatialOn ? 0.30 : 0.0;
        this.spatialDryGain = dryG;
        this.spatialWetGain = wetG;

        this.masterFadeGainNode.connect(dryG);
        dryG.connect(this.analyserNode);

        this.masterFadeGainNode.connect(splitter);
        splitter.connect(merger, 1, 0); // subtle cross-channel inverted space via delayed reflection
        splitter.connect(delayR, 0);
        delayR.connect(merger, 0, 1);
        merger.connect(wetG);
        wetG.connect(this.analyserNode);

        this.analyserNode.connect(this.ctx.destination);
        this.graphConnected = true;
      }
      return true;
    } catch (_) {
      return false;
    }
  },

  canAttachAudioElement(audioEl) {
    if (!audioEl) return false;
    const src = String(audioEl.currentSrc || audioEl.getAttribute('src') || '');
    if (!src) return false;
    if (src.startsWith('blob:') || src.startsWith('data:') || src.startsWith('/')) return true;
    if (audioEl.crossOrigin === 'anonymous') return true;
    try {
      const u = new URL(src, window.location.href);
      return u.origin === window.location.origin;
    } catch (_) {
      return false;
    }
  },

  ensureConnected(mediaEl) {
    const targetEl = mediaEl || (typeof getActiveDspMediaElement === 'function' ? getActiveDspMediaElement() : DOM.audioEngine);
    if (!targetEl) return false;
    if (!this.ensureGraph()) return false;
    if (!this.sourceNodes.has(targetEl)) {
      if (!this.canAttachAudioElement(targetEl)) return false;
      try {
        const node = this.ctx.createMediaElementSource(targetEl);
        node.connect(this.filters[0]);
        this.sourceNodes.set(targetEl, node);
        this.sourceNode = node;
        this.isConnected = true;
      } catch (_) {
        return false;
      }
    } else {
      this.sourceNode = this.sourceNodes.get(targetEl);
      this.isConnected = true;
    }
    this.syncAllParams(targetEl);
    return this.isConnected;
  },

  connectMediaElement(audioEl) {
    return this.ensureConnected(audioEl);
  },

  syncAllParams(targetMediaEl = null) {
    if (!this.ensureGraph()) return;
    if (this.ctx && this.ctx.state !== 'running') {
      try { this.ctx.resume().catch(() => {}); } catch (_) {}
    }

    const now = this.ctx ? this.ctx.currentTime : 0;
    if (this.filters && this.filters.length === 5) {
      this.filters.forEach((f, idx) => {
        const g = Math.max(-12, Math.min(12, Number(this.gains[idx]) || 0));
        try {
          f.gain.value = g;
          if (this.ctx) f.gain.setTargetAtTime(g, now, 0.012);
        } catch (_) {}
      });
    }
    if (this.subBassFilter) {
      const sbDb = (Math.max(0, Math.min(100, Number(state.proSettings?.bassBoost) || 0)) / 100) * 9;
      try {
        this.subBassFilter.gain.value = sbDb;
        if (this.ctx) this.subBassFilter.gain.setTargetAtTime(sbDb, now, 0.02);
      } catch (_) {}
    }
    if (this.clarityFilter) {
      const clDb = (Math.max(0, Math.min(100, Number(state.proSettings?.clarity) || 0)) / 100) * 8;
      try {
        this.clarityFilter.gain.value = clDb;
        if (this.ctx) this.clarityFilter.gain.setTargetAtTime(clDb, now, 0.02);
      } catch (_) {}
    }
    const spatialOn = Boolean(state.proSettings && state.proSettings.spatial3d);
    if (this.spatialDryGain && this.spatialWetGain) {
      try {
        this.spatialDryGain.gain.value = spatialOn ? 0.78 : 1.0;
        this.spatialWetGain.gain.value = spatialOn ? 0.30 : 0.0;
        if (this.ctx) {
          this.spatialDryGain.gain.setTargetAtTime(spatialOn ? 0.78 : 1.0, now, 0.025);
          this.spatialWetGain.gain.setTargetAtTime(spatialOn ? 0.30 : 0.0, now, 0.025);
        }
      } catch (_) {}
    }

    const normOn = Boolean(state.proSettings && state.proSettings.normalization);
    if (this.compressorNode) {
      try {
        this.compressorNode.threshold.value = normOn ? -20 : 0;
        this.compressorNode.knee.value = 18;
        this.compressorNode.ratio.value = normOn ? 4.5 : 1.0;
        this.compressorNode.attack.value = 0.004;
        this.compressorNode.release.value = 0.22;
        if (this.ctx) {
          this.compressorNode.threshold.setTargetAtTime(normOn ? -20 : 0, now, 0.02);
          this.compressorNode.ratio.setTargetAtTime(normOn ? 4.5 : 1.0, now, 0.02);
        }
      } catch (_) {}
    }
    if (this.makeupGainNode) {
      try {
        this.makeupGainNode.gain.value = normOn ? 1.28 : 1.0;
        if (this.ctx) this.makeupGainNode.gain.setTargetAtTime(normOn ? 1.28 : 1.0, now, 0.02);
      } catch (_) {}
    }

    if (typeof applyEffectiveVolume === 'function') {
      applyEffectiveVolume();
    }

    const activeEl = targetMediaEl || (typeof getActiveDspMediaElement === 'function' ? getActiveDspMediaElement() : DOM.audioEngine);
    if (activeEl && typeof applyMediaPlaybackRate === 'function') {
      applyMediaPlaybackRate(activeEl);
    }

    this.syncSilenceDetector(true);
    if (typeof syncNativeFxParams === 'function') {
      syncNativeFxParams();
    }
    if (typeof updateFxEngineNote === 'function') {
      updateFxEngineNote();
    }
  },

  resumeContext() {
    if (!this.ensureGraph()) return;
    if (this.ctx && this.ctx.state !== 'running') {
      this.ctx.resume().catch(() => {});
    }
    const activeEl = typeof getActiveDspMediaElement === 'function' ? getActiveDspMediaElement() : DOM.audioEngine;
    if (activeEl && !this.sourceNodes.has(activeEl) && this.canAttachAudioElement(activeEl)) {
      this.ensureConnected(activeEl);
    }
  },

  setGain(bandIndex, db, persist = true) {
    db = Math.max(-12, Math.min(12, Math.round(db)));
    this.gains[bandIndex] = db;
    this.resumeContext();
    if (this.filters[bandIndex] && this.ctx) {
      try {
        this.filters[bandIndex].gain.setTargetAtTime(db, this.ctx.currentTime, 0.03);
      } catch (e) {}
    }
    if (persist) {
      try { safeSetStorage('kurfa_eq_gains', JSON.stringify(this.gains)); } catch (_) {}
    }
    this.updateUI();
  },

  applyPreset(presetKey, resumeAudio = true) {
    if (presetKey === 'ozel') {
      try {
        const saved = JSON.parse(localStorage.getItem('kurfa_eq_gains') || 'null');
        if (Array.isArray(saved) && saved.length === 5) {
          this.gains = saved.map(v => Math.max(-12, Math.min(12, Math.round(Number(v) || 0))));
        }
      } catch (_) {}
    } else {
      const pGains = this.presets[presetKey] || this.presets['standart'];
      this.gains = [...pGains];
    }

    if (resumeAudio) this.resumeContext();
    if (this.ctx && this.filters.length === 5) {
      this.filters.forEach((f, idx) => {
        try {
          f.gain.setTargetAtTime(this.gains[idx], this.ctx.currentTime, 0.03);
        } catch (e) {}
      });
    }

    if (typeof applyEffectiveVolume === 'function') {
      applyEffectiveVolume();
    }
    this.updateUI();
  },

  applyNormalization(enabled, resumeAudio = true) {
    if (resumeAudio) this.resumeContext();
    if (this.compressorNode && this.ctx) {
      try {
        const now = this.ctx.currentTime;
        this.compressorNode.threshold.setTargetAtTime(enabled ? -20 : 0, now, 0.04);
        this.compressorNode.knee.setTargetAtTime(18, now, 0.04);
        this.compressorNode.ratio.setTargetAtTime(enabled ? 4.5 : 1.0, now, 0.04);
        this.compressorNode.attack.setTargetAtTime(0.004, now, 0.04);
        this.compressorNode.release.setTargetAtTime(0.22, now, 0.04);
      } catch (_) {}
    }
    if (this.makeupGainNode && this.ctx) {
      try {
        this.makeupGainNode.gain.setTargetAtTime(enabled ? 1.28 : 1.0, this.ctx.currentTime, 0.04);
      } catch (_) {}
    }
    if (typeof applyEffectiveVolume === 'function') {
      applyEffectiveVolume();
    }
  },

  syncSilenceDetector(skipResume = false) {
    const enabled = Boolean(state.proSettings && state.proSettings.skipSilence);
    const activeEl = typeof getActiveDspMediaElement === 'function' ? getActiveDspMediaElement() : DOM.audioEngine;
    if (!enabled) {
      if (this._silenceTimer) {
        clearInterval(this._silenceTimer);
        this._silenceTimer = null;
      }
      this._silenceMs = 0;
      if (this._silenceBoosting) {
        this._silenceBoosting = false;
        if (DOM.audioEngine) applyMediaPlaybackRate(DOM.audioEngine);
        if (DOM.videoEngine) applyMediaPlaybackRate(DOM.videoEngine);
      }
      return;
    }

    if (!skipResume) this.resumeContext();
    if (this._silenceTimer) return;
    this._silenceTimer = setInterval(() => {
      if (!state.proSettings?.skipSilence) {
        this.syncSilenceDetector(true);
        return;
      }
      const el = typeof getActiveDspMediaElement === 'function' ? getActiveDspMediaElement() : DOM.audioEngine;
      const validEngine = state._activeMediaEngine === 'audio' || state._activeMediaEngine === 'native-video';
      if (
        !this.isConnected ||
        !this.analyserNode ||
        !validEngine ||
        !state.isPlaying ||
        state.userPaused ||
        !el ||
        el.paused ||
        el.ended
      ) {
        this._silenceMs = 0;
        if (this._silenceBoosting && el) {
          this._silenceBoosting = false;
          applyMediaPlaybackRate(el);
        }
        return;
      }

      const cur = el.currentTime || 0;
      const dur = el.duration || 0;
      if (cur < 0.8 || (dur > 0 && (dur - cur) < 1.5)) {
        this._silenceMs = 0;
        if (this._silenceBoosting) {
          this._silenceBoosting = false;
          applyMediaPlaybackRate(el);
        }
        return;
      }

      let rms = 0;
      try {
        if (!this._rmsBuffer || this._rmsBuffer.length !== this.analyserNode.fftSize) {
          this._rmsBuffer = new Float32Array(this.analyserNode.fftSize);
        }
        if (typeof this.analyserNode.getFloatTimeDomainData === 'function') {
          this.analyserNode.getFloatTimeDomainData(this._rmsBuffer);
          let sumSq = 0;
          for (let i = 0; i < this._rmsBuffer.length; i++) {
            const s = this._rmsBuffer[i];
            sumSq += s * s;
          }
          rms = Math.sqrt(sumSq / this._rmsBuffer.length);
        } else {
          const byteBuf = new Uint8Array(this.analyserNode.fftSize);
          this.analyserNode.getByteTimeDomainData(byteBuf);
          let sumSq = 0;
          for (let i = 0; i < byteBuf.length; i++) {
            const s = (byteBuf[i] - 128) / 128;
            sumSq += s * s;
          }
          rms = Math.sqrt(sumSq / byteBuf.length);
        }
      } catch (_) {
        return;
      }

      const db = rms > 1e-6 ? (20 * Math.log10(rms)) : -100;
      const baseSpeed = Math.max(0.5, Math.min(2.0, Number(state.proSettings?.playbackSpeed) || 1.0));
      if (db < -48) {
        this._silenceMs += 120;
        if (this._silenceMs >= 1200 && !this._silenceBoosting) {
          this._silenceBoosting = true;
          try {
            el.playbackRate = Math.min(2.0, Math.max(1.8, baseSpeed * 1.8));
          } catch (_) {}
        }
      } else if (db >= -44) {
        this._silenceMs = 0;
        if (this._silenceBoosting) {
          this._silenceBoosting = false;
          try {
            el.playbackRate = baseSpeed;
          } catch (_) {}
        }
      }
    }, 120);
  },

  updateUI() {
    const bandKeys = ['60hz', '250hz', '1khz', '4khz', '16khz'];
    bandKeys.forEach((key, idx) => {
      const db = Math.max(-12, Math.min(12, Math.round(this.gains[idx] || 0)));
      const bar = document.getElementById(`eq-bar-${key}`);
      const thumb = document.getElementById(`eq-thumb-${key}`);
      const track = document.getElementById(`eq-track-${key}`);
      const val = document.getElementById(`eq-val-${key}`);
      const pctFromBottom = ((db + 12) / 24) * 100;
      if (bar) {
        if (db >= 0) {
          bar.style.bottom = '50%';
          bar.style.height = `${(db / 12) * 50}%`;
        } else {
          const absPct = (-db / 12) * 50;
          bar.style.bottom = `${50 - absPct}%`;
          bar.style.height = `${absPct}%`;
        }
      }
      if (thumb) {
        thumb.style.bottom = `${pctFromBottom}%`;
      }
      if (track) {
        track.setAttribute('aria-valuenow', String(db));
      }
      if (val) {
        val.textContent = db > 0 ? `+${db}dB` : `${db}dB`;
      }
    });
  }
};

function updateFxEngineNote() {
  const noteEl = document.getElementById('fx-engine-note');
  if (!noteEl) return;
  if (state.currentTrack && state._activeMediaEngine === 'youtube') {
    noteEl.textContent = t('fx.yt_engine_note');
    noteEl.classList.remove('hidden');
  } else if (KurfaDSP.isConnected) {
    noteEl.textContent = t('fx.dsp_active_note');
    noteEl.classList.remove('hidden');
  } else {
    noteEl.textContent = '';
    noteEl.classList.add('hidden');
  }
}
window.updateFxEngineNote = updateFxEngineNote;

function applyCustomEqGainFromUser(bandIdx, db) {
  if (bandIdx < 0 || bandIdx > 4) return;
  const cleanDb = Math.max(-12, Math.min(12, Math.round(db)));
  KurfaDSP.setGain(bandIdx, cleanDb, true);
  state.activeEqPreset = 'ozel';
  safeSetStorage('kurfa_eq_preset', 'ozel');
  const labelEl = document.getElementById('eq-active-preset-label');
  if (labelEl) labelEl.textContent = getAppLanguage() === 'en' ? 'Custom' : '\u00d6zel Ayar';
  document.querySelectorAll('#eq-presets-container .eq-preset-btn').forEach(b => b.classList.remove('active'));
}

function initStudioEqFaders() {
  const grid = document.getElementById('kurfa-studio-eq-grid');
  if (!grid || grid.dataset.fadersBound === '1') return;
  grid.dataset.fadersBound = '1';

  const cols = grid.querySelectorAll('.kurfa-studio-fader-col[data-eq-band]');
  cols.forEach((col) => {
    const bandIdx = parseInt(col.getAttribute('data-eq-band'), 10);
    const track = col.querySelector('.kurfa-studio-fader-track');
    if (!track || Number.isNaN(bandIdx)) return;

    const computeDbFromClientY = (clientY) => {
      const rect = track.getBoundingClientRect();
      if (!rect || rect.height <= 0) return 0;
      const ratio = 1 - Math.max(0, Math.min(1, (clientY - rect.top) / rect.height));
      return Math.round(ratio * 24 - 12);
    };

    track.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      col.classList.add('dragging');
      try { track.setPointerCapture(e.pointerId); } catch (_) {}
      applyCustomEqGainFromUser(bandIdx, computeDbFromClientY(e.clientY));

      const onMove = (ev) => {
        applyCustomEqGainFromUser(bandIdx, computeDbFromClientY(ev.clientY));
      };
      const onUp = (ev) => {
        col.classList.remove('dragging');
        try { track.releasePointerCapture(ev.pointerId); } catch (_) {}
        track.removeEventListener('pointermove', onMove);
        track.removeEventListener('pointerup', onUp);
        track.removeEventListener('pointercancel', onUp);
      };
      track.addEventListener('pointermove', onMove);
      track.addEventListener('pointerup', onUp);
      track.addEventListener('pointercancel', onUp);
    });

    track.addEventListener('dblclick', (e) => {
      e.preventDefault();
      applyCustomEqGainFromUser(bandIdx, 0);
    });

    track.addEventListener('keydown', (e) => {
      const cur = KurfaDSP.gains[bandIdx] || 0;
      if (e.key === 'ArrowUp' || e.key === 'ArrowRight') {
        e.preventDefault();
        applyCustomEqGainFromUser(bandIdx, cur + 1);
      } else if (e.key === 'ArrowDown' || e.key === 'ArrowLeft') {
        e.preventDefault();
        applyCustomEqGainFromUser(bandIdx, cur - 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        applyCustomEqGainFromUser(bandIdx, 12);
      } else if (e.key === 'End') {
        e.preventDefault();
        applyCustomEqGainFromUser(bandIdx, -12);
      } else if (e.key === '0') {
        e.preventDefault();
        applyCustomEqGainFromUser(bandIdx, 0);
      }
    });
  });
}

function cycleBandGain(bandIdx) {
  if (bandIdx < 0 || bandIdx > 4) return;
  const current = KurfaDSP.gains[bandIdx] || 0;
  const steps = [-6, 0, 3, 6, 9];
  const currIdx = steps.indexOf(current);
  const next = (currIdx !== -1 && currIdx < steps.length - 1) ? steps[currIdx + 1] : steps[0];

  applyCustomEqGainFromUser(bandIdx, next);
  const freqLabels = ['60Hz (Bass)', '250Hz (Alt Mid)', '1kHz (Vokal)', '4kHz (\u00dcst Mid)', '16kHz (Tiz)'];
  showToast(`${freqLabels[bandIdx]}: ${next > 0 ? '+' : ''}${next}dB`);
}

function setEqualizerPreset(preset, silent = true) {
  state.activeEqPreset = preset;
  safeSetStorage('kurfa_eq_preset', preset);

  const isEn = getAppLanguage() === 'en';
  const labelMap = {
    'standart': isEn ? 'Flat' : 'D\u00fcz / Flat',
    'airpods_pro': 'AirPods Pro',
    'sony_xm5': 'Sony WH-1000XM5',
    'bass': 'Bass Boost',
    'vokal': isEn ? 'Vocal / Acoustic' : 'Vokal / Akustik',
    'studio': isEn ? 'Studio' : 'St\u00fcdyo',
    'kulup': isEn ? 'Club / Night' : 'Kul\u00fcp / Gece',
    'akustik': isEn ? 'Acoustic' : 'Akustik',
    'tiz': isEn ? 'Deep Treble' : 'Derin Tiz',
    'ozel': isEn ? 'Custom' : '\u00d6zel Ayar'
  };

  const labelEl = document.getElementById('eq-active-preset-label');
  if (labelEl) labelEl.textContent = labelMap[preset] || (isEn ? 'Flat' : 'D\u00fcz / Flat');

  document.querySelectorAll('#eq-presets-container .eq-preset-btn').forEach(btn => {
    const pKey = btn.getAttribute('data-eq-preset');
    btn.classList.toggle('active', pKey === preset);
  });

  KurfaDSP.applyPreset(preset, !silent);
  if (!silent) showToast(`AutoEq: ${labelMap[preset] || preset}`);
}

let _audioFxCollapsed = localStorage.getItem('kurfa_fx_collapsed_v2') === 'true';
function toggleAudioFxPanel(forceState = null) {
  _audioFxCollapsed = forceState !== null ? Boolean(forceState) : !_audioFxCollapsed;
  safeSetStorage('kurfa_fx_collapsed_v2', String(_audioFxCollapsed));
  const body = document.getElementById('audio-fx-body');
  const chev = document.getElementById('audio-fx-chevron');
  if (body) body.classList.toggle('hidden', _audioFxCollapsed);
  if (chev) chev.style.transform = _audioFxCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)';
}
window.toggleAudioFxPanel = toggleAudioFxPanel;

// Song-Reactive Dynamic Color Palette + Real-Time 16-Bar Audio Visualizer for #audio-fx-card
const FxReactiveStudio = {
  _paletteCache: new Map(),
  _currentRgb: '99, 102, 241',
  _rafId: null,
  _freqBuf: null,
  _phase: 0,
  _lastDrawMs: 0,

  hashColorRgb(seedStr) {
    const palettes = [
      '56, 189, 248',
      '99, 102, 241',
      '16, 185, 129',
      '245, 158, 11',
      '139, 92, 246',
      '20, 184, 166',
      '59, 130, 246',
      '249, 115, 22'
    ];
    let h = 2166136261;
    const s = String(seedStr || 'kurfa');
    for (let i = 0; i < s.length; i++) {
      h ^= s.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return palettes[Math.abs(h) % palettes.length];
  },

  applyRgb(rgbStr, track) {
    this._currentRgb = rgbStr;
    const card = document.getElementById('audio-fx-card');
    if (card) {
      card.style.setProperty('--fx-rgb', rgbStr);
    }
    const mini = document.getElementById('mobile-mini-player');
    if (mini) mini.style.setProperty('--mini-rgb', rgbStr);
    const bridge = document.getElementById('mobile-dock-bridge');
    if (bridge) bridge.style.setProperty('--mini-rgb', rgbStr);
    const pip = document.getElementById('kurfa-floating-pip');
    if (pip) pip.style.setProperty('--pip-rgb', rgbStr);
    if (typeof pipWindowInstance !== 'undefined' && pipWindowInstance && pipWindowInstance.document && pipWindowInstance.document.documentElement) {
      try { pipWindowInstance.document.documentElement.style.setProperty('--pip-rgb', rgbStr); } catch (_) {}
    }
    const sub = document.getElementById('fx-track-subtitle');
    if (sub) {
      if (track && track.title) {
        const tName = formatCleanTrackTitle(track.title) || track.title;
        const aName = (typeof extractCleanArtistFromTrack === 'function' ? extractCleanArtistFromTrack(track) : '') || track.artist || '';
        sub.textContent = aName ? `${aName} • ${tName}` : tName;
      } else {
        sub.textContent = t('fx.subtitle_pro');
      }
    }
    this.drawIdleShape();
  },

  onTrackChange(track, thumbUrl = '') {
    if (!track) {
      this.applyRgb('99, 102, 241', null);
      return;
    }
    const seed = `${track.title || ''}_${track.artist || ''}`;
    const url = thumbUrl || getTrackThumbnail(track);
    if (this._paletteCache.has(url)) {
      this.applyRgb(this._paletteCache.get(url), track);
      return;
    }
    // Immediate cover-hash tint first so transition feels instant
    const fallbackRgb = this.hashColorRgb(seed);
    this.applyRgb(fallbackRgb, track);

    if (!url || url.includes('kurfamuzik_logo') || !url.startsWith('http')) return;
    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          const cv = document.createElement('canvas');
          cv.width = 20;
          cv.height = 20;
          const ctx = cv.getContext('2d', { willReadFrequently: true });
          if (!ctx) return;
          ctx.drawImage(img, 0, 0, 20, 20);
          const px = ctx.getImageData(0, 0, 20, 20).data;
          let rSum = 0, gSum = 0, bSum = 0, weightSum = 0;
          for (let i = 0; i < px.length; i += 4) {
            const r = px[i], g = px[i + 1], b = px[i + 2];
            const maxC = Math.max(r, g, b);
            const minC = Math.min(r, g, b);
            const sat = maxC === 0 ? 0 : (maxC - minC) / maxC;
            const lum = (r * 0.299 + g * 0.587 + b * 0.114);
            if (lum < 32 || lum > 235) continue;
            const w = 0.25 + sat * 2.5;
            rSum += r * w;
            gSum += g * w;
            bSum += b * w;
            weightSum += w;
          }
          if (weightSum > 0) {
            let rAvg = Math.round(rSum / weightSum);
            let gAvg = Math.round(gSum / weightSum);
            let bAvg = Math.round(bSum / weightSum);
            // Boost brightness slightly so dark album covers stay luminous on dark studio console
            const maxCh = Math.max(rAvg, gAvg, bAvg, 1);
            if (maxCh < 155) {
              const boost = 175 / maxCh;
              rAvg = Math.min(255, Math.round(rAvg * boost));
              gAvg = Math.min(255, Math.round(gAvg * boost));
              bAvg = Math.min(255, Math.round(bAvg * boost));
            }
            const avgCh = (rAvg + gAvg + bAvg) / 3;
            const satBoost = 1.32;
            rAvg = Math.max(0, Math.min(255, Math.round(avgCh + (rAvg - avgCh) * satBoost)));
            gAvg = Math.max(0, Math.min(255, Math.round(avgCh + (gAvg - avgCh) * satBoost)));
            bAvg = Math.max(0, Math.min(255, Math.round(avgCh + (bAvg - avgCh) * satBoost)));
            const sampled = `${rAvg}, ${gAvg}, ${bAvg}`;
            this._paletteCache.set(url, sampled);
            if (state.currentTrack && (state.currentTrack.id === track.id || state.currentTrack.title === track.title)) {
              this.applyRgb(sampled, track);
            }
          }
        } catch (_) {}
      };
      img.src = url;
    } catch (_) {}
  },

  drawIdleShape() {
    const bars = document.querySelectorAll('#fx-live-spectrum > span');
    if (!bars.length) return;
    const eq = Array.isArray(state.eqGains) ? state.eqGains : [0, 0, 0, 0, 0];
    const bassBoost = (Number(state.proSettings?.bassBoost) || 0) / 100;
    const clarityBoost = (Number(state.proSettings?.clarity) || 0) / 100;
    bars.forEach((bar, i) => {
      const bandIdx = Math.min(4, Math.floor((i / bars.length) * 5));
      const eqTilt = ((Number(eq[bandIdx]) || 0) + 12) / 24;
      const shapeBonus = i < 4 ? bassBoost * 0.22 : (i > 11 ? clarityBoost * 0.20 : 0);
      const val = Math.max(0.16, Math.min(0.95, 0.22 + eqTilt * 0.36 + shapeBonus));
      bar.style.setProperty('--bar', val.toFixed(3));
    });
    const mini = document.getElementById('mobile-mini-player');
    if (mini) mini.style.setProperty('--mini-energy', '0.30');
  },

  syncPlaybackState(playing) {
    if (playing && !this._rafId && (typeof document === 'undefined' || !document.hidden)) {
      const loop = (ts) => {
        if (!state.isPlaying || state.userPaused || (typeof document !== 'undefined' && document.hidden)) {
          this._rafId = null;
          this.drawIdleShape();
          return;
        }
        const now = typeof ts === 'number' ? ts : performance.now();
        if (now - this._lastDrawMs >= 40) {
          this._lastDrawMs = now;
          this._phase += 0.16;
          const bars = document.querySelectorAll('#fx-live-spectrum > span');
          if (bars.length > 0) {
            let liveBytes = null;
            if (typeof KurfaDSP !== 'undefined' && KurfaDSP.analyserNode && KurfaDSP.isConnected) {
              try {
                if (!this._freqBuf || this._freqBuf.length !== KurfaDSP.analyserNode.frequencyBinCount) {
                  this._freqBuf = new Uint8Array(KurfaDSP.analyserNode.frequencyBinCount);
                }
                KurfaDSP.analyserNode.getByteFrequencyData(this._freqBuf);
                let energy = 0;
                for (let k = 0; k < Math.min(32, this._freqBuf.length); k++) energy += this._freqBuf[k];
                if (energy > 20) liveBytes = this._freqBuf;
              } catch (_) {}
            }
            const eq = Array.isArray(state.eqGains) ? state.eqGains : [0, 0, 0, 0, 0];
            const bassB = (Number(state.proSettings?.bassBoost) || 0) / 100;
            const clarityB = (Number(state.proSettings?.clarity) || 0) / 100;
            bars.forEach((bar, idx) => {
              let h = 0.2;
              const bandIdx = Math.min(4, Math.floor((idx / bars.length) * 5));
              const eqGainNorm = Math.max(0.5, 1 + ((Number(eq[bandIdx]) || 0) / 18));
              if (liveBytes) {
                const bin = Math.min(liveBytes.length - 1, Math.floor(Math.pow(idx / bars.length, 1.35) * (liveBytes.length * 0.6)));
                h = (liveBytes[bin] / 255) * eqGainNorm;
              } else {
                const wave1 = Math.sin(this._phase + idx * 0.55) * 0.5 + 0.5;
                const wave2 = Math.cos(this._phase * 1.4 - idx * 0.35) * 0.5 + 0.5;
                const curve = (0.28 + wave1 * 0.34 + wave2 * 0.24) * eqGainNorm;
                const boost = idx < 4 ? bassB * 0.18 : (idx > 11 ? clarityB * 0.16 : 0);
                h = curve + boost;
              }
              bar.style.setProperty('--bar', Math.max(0.14, Math.min(1.0, h)).toFixed(3));
            });
          }
          // Low-cost ~11fps reactive loudness tint on mobile Dynamic Island pill
          if (typeof window !== 'undefined' && window.innerWidth < 768 && (!this._lastMiniEnergyMs || (now - this._lastMiniEnergyMs >= 88))) {
            this._lastMiniEnergyMs = now;
            const mini = document.getElementById('mobile-mini-player');
            if (mini) {
              let eVal = 0.25 + 0.35 * Math.abs(Math.sin(this._phase * 0.7));
              if (this._freqBuf && typeof KurfaDSP !== 'undefined' && KurfaDSP.isConnected) {
                let sum = 0;
                const bins = Math.min(16, this._freqBuf.length);
                for (let b = 0; b < bins; b++) sum += this._freqBuf[b];
                if (bins > 0 && sum > 16) eVal = Math.max(0.15, Math.min(1.0, sum / (bins * 210)));
              }
              mini.style.setProperty('--mini-energy', eVal.toFixed(2));
            }
          }
        }
        this._rafId = requestAnimationFrame(loop);
      };
      this._rafId = requestAnimationFrame(loop);
    } else if (!playing) {
      if (this._rafId) {
        cancelAnimationFrame(this._rafId);
        this._rafId = null;
      }
      this.drawIdleShape();
    }
  }
};
window.FxReactiveStudio = FxReactiveStudio;

function setPlaybackSpeed(speed, silent = false) {
  const clean = Math.max(0.5, Math.min(2.0, Math.round((Number(speed) || 1.0) * 100) / 100));
  state.proSettings.playbackSpeed = clean;
  safeSetStorage('kurfa_speed', String(clean));

  if (!KurfaDSP._silenceBoosting) {
    if (DOM.audioEngine) applyMediaPlaybackRate(DOM.audioEngine, clean);
    if (DOM.videoEngine) applyMediaPlaybackRate(DOM.videoEngine, clean);
  }
  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.setPlaybackRate === 'function') {
    try { state.ytPlayer.setPlaybackRate(clean); } catch (_) {}
  }
  syncNativeFxParams();

  syncAudioFxUI();
  if (!silent) showToast(t('toast.speed_set', { val: clean.toFixed(2).replace(/\.00$/, '.0') }));
}
window.setPlaybackSpeed = setPlaybackSpeed;

function setCrossfadeSeconds(sec, silent = false) {
  const clean = Math.max(0, Math.min(8, Math.round(Number(sec) || 0)));
  state.proSettings.crossfadeSec = clean;
  safeSetStorage('kurfa_crossfade', String(clean));
  syncAudioFxUI();
  if (!silent) showToast(t('toast.crossfade_set', { val: clean }));
}
window.setCrossfadeSeconds = setCrossfadeSeconds;

function toggleAudioNormalization() {
  state.proSettings.normalization = !state.proSettings.normalization;
  safeSetStorage('kurfa_norm', String(state.proSettings.normalization));
  KurfaDSP.applyNormalization(state.proSettings.normalization);
  try {
    if (window.KurfaAndroid && typeof window.KurfaAndroid.setNormalizationNative === 'function') {
      window.KurfaAndroid.setNormalizationNative(Boolean(state.proSettings.normalization));
    } else if (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.setNormalizationNative === 'function') {
      window.KurfaAndroidBridge.setNormalizationNative(Boolean(state.proSettings.normalization));
    }
  } catch (_) {}
  syncAudioFxUI();
  showToast(state.proSettings.normalization ? t('toast.norm_on') : t('toast.norm_off'));
}
window.toggleAudioNormalization = toggleAudioNormalization;

function toggleSkipSilence() {
  state.proSettings.skipSilence = !state.proSettings.skipSilence;
  safeSetStorage('kurfa_skip_silence', String(state.proSettings.skipSilence));
  KurfaDSP.syncSilenceDetector();
  try {
    if (window.KurfaAndroid && typeof window.KurfaAndroid.setSkipSilenceNative === 'function') {
      window.KurfaAndroid.setSkipSilenceNative(Boolean(state.proSettings.skipSilence));
    } else if (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.setSkipSilenceNative === 'function') {
      window.KurfaAndroidBridge.setSkipSilenceNative(Boolean(state.proSettings.skipSilence));
    }
  } catch (_) {}
  syncAudioFxUI();
  showToast(state.proSettings.skipSilence ? t('toast.silence_on') : t('toast.silence_off'));
}
window.toggleSkipSilence = toggleSkipSilence;

function syncAudioFxUI() {
  const spd = Number(state.proSettings?.playbackSpeed) || 1.0;
  const spdVal = document.getElementById('fx-speed-val');
  const spdSlider = document.getElementById('fx-speed-slider');
  if (spdVal) spdVal.textContent = `${spd.toFixed(2).replace(/\.00$/, '.0')}x`;
  if (spdSlider) {
    spdSlider.value = String(spd);
    const spdPct = Math.max(0, Math.min(100, ((spd - 0.5) / 1.5) * 100));
    spdSlider.style.setProperty('--range-pct', `${spdPct.toFixed(1)}%`);
  }
  document.querySelectorAll('#fx-speed-presets .fx-pill-btn').forEach((btn) => {
    const v = parseFloat(btn.getAttribute('data-speed'));
    btn.classList.toggle('active', Math.abs(v - spd) < 0.02);
  });

  const cf = Number(state.proSettings?.crossfadeSec) || 0;
  const cfVal = document.getElementById('fx-crossfade-val');
  const cfSlider = document.getElementById('fx-crossfade-slider');
  if (cfVal) cfVal.textContent = `${cf}s`;
  if (cfSlider) {
    cfSlider.value = String(cf);
    const cfPct = Math.max(0, Math.min(100, (cf / 8) * 100));
    cfSlider.style.setProperty('--range-pct', `${cfPct.toFixed(1)}%`);
  }

  const normOn = Boolean(state.proSettings?.normalization);
  const normBadge = document.getElementById('fx-norm-badge');
  const normBtn = document.getElementById('btn-fx-normalization');
  if (normBadge) {
    normBadge.textContent = normOn ? t('settings.on') : t('settings.off');
    normBadge.className = normOn
      ? 'px-1.5 py-0.5 rounded-full text-[10px] font-bold fx-status-pill-on flex-shrink-0'
      : 'px-1.5 py-0.5 rounded-full text-[10px] bg-surface-container text-on-surface-variant flex-shrink-0';
  }
  if (normBtn) normBtn.classList.toggle('fx-on', normOn);

  const silOn = Boolean(state.proSettings?.skipSilence);
  const silBadge = document.getElementById('fx-silence-badge');
  const silBtn = document.getElementById('btn-fx-skip-silence');
  if (silBadge) {
    silBadge.textContent = silOn ? t('settings.on') : t('settings.off');
    silBadge.className = silOn
      ? 'px-1.5 py-0.5 rounded-full text-[10px] font-bold fx-status-pill-on flex-shrink-0'
      : 'px-1.5 py-0.5 rounded-full text-[10px] bg-surface-container text-on-surface-variant flex-shrink-0';
  }
  if (silBtn) silBtn.classList.toggle('fx-on', silOn);

  const bassPct = Math.max(0, Math.min(100, Number(state.proSettings?.bassBoost) || 0));
  const bassVal = document.getElementById('fx-bass-val');
  const bassSlider = document.getElementById('fx-bass-slider');
  if (bassVal) bassVal.textContent = `${bassPct}%`;
  if (bassSlider) {
    bassSlider.value = String(bassPct);
    bassSlider.style.setProperty('--range-pct', `${bassPct}%`);
  }

  const clPct = Math.max(0, Math.min(100, Number(state.proSettings?.clarity) || 0));
  const clVal = document.getElementById('fx-clarity-val');
  const clSlider = document.getElementById('fx-clarity-slider');
  if (clVal) clVal.textContent = `${clPct}%`;
  if (clSlider) {
    clSlider.value = String(clPct);
    clSlider.style.setProperty('--range-pct', `${clPct}%`);
  }

  const spOn = Boolean(state.proSettings?.spatial3d);
  const spBadge = document.getElementById('fx-spatial-badge');
  const spBtn = document.getElementById('btn-fx-spatial');
  if (spBadge) {
    spBadge.textContent = spOn ? t('settings.on') : t('settings.off');
    spBadge.className = spOn
      ? 'px-1.5 py-0.5 rounded-full text-[10px] font-bold fx-status-pill-on flex-shrink-0'
      : 'px-1.5 py-0.5 rounded-full text-[10px] bg-surface-container text-on-surface-variant flex-shrink-0';
  }
  if (spBtn) spBtn.classList.toggle('fx-on', spOn);

  const body = document.getElementById('audio-fx-body');
  const chev = document.getElementById('audio-fx-chevron');
  if (body) body.classList.toggle('hidden', _audioFxCollapsed);
  if (chev) chev.style.transform = _audioFxCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)';
  if (typeof FxReactiveStudio !== 'undefined' && (!state.isPlaying || state.userPaused)) {
    FxReactiveStudio.drawIdleShape();
  }
  updateFxEngineNote();
}
window.syncAudioFxUI = syncAudioFxUI;

function setBassBoostLevel(pct, silent = true) {
  const clean = Math.max(0, Math.min(100, Math.round(Number(pct) || 0)));
  state.proSettings.bassBoost = clean;
  safeSetStorage('kurfa_bass_boost', String(clean));
  if (typeof KurfaDSP !== 'undefined') {
    KurfaDSP.resumeContext();
    if (KurfaDSP.subBassFilter && KurfaDSP.ctx) {
      try {
        KurfaDSP.subBassFilter.gain.setTargetAtTime((clean / 100) * 9, KurfaDSP.ctx.currentTime, 0.025);
      } catch (_) {}
    }
  }
  syncAudioFxUI();
  if (!silent) showToast(`Sub-Bass: %${clean}`);
}
window.setBassBoostLevel = setBassBoostLevel;

function setClarityLevel(pct, silent = true) {
  const clean = Math.max(0, Math.min(100, Math.round(Number(pct) || 0)));
  state.proSettings.clarity = clean;
  safeSetStorage('kurfa_clarity', String(clean));
  if (typeof KurfaDSP !== 'undefined') {
    KurfaDSP.resumeContext();
    if (KurfaDSP.clarityFilter && KurfaDSP.ctx) {
      try {
        KurfaDSP.clarityFilter.gain.setTargetAtTime((clean / 100) * 8, KurfaDSP.ctx.currentTime, 0.025);
      } catch (_) {}
    }
  }
  syncAudioFxUI();
  if (!silent) showToast(`Netlik: %${clean}`);
}
window.setClarityLevel = setClarityLevel;

function toggleSpatialAudio() {
  state.proSettings.spatial3d = !state.proSettings.spatial3d;
  safeSetStorage('kurfa_spatial_3d', String(state.proSettings.spatial3d));
  if (typeof KurfaDSP !== 'undefined') {
    KurfaDSP.resumeContext();
    KurfaDSP.syncAllParams();
  }
  syncAudioFxUI();
  const isEn = getAppLanguage() === 'en';
  showToast(state.proSettings.spatial3d
    ? (isEn ? '3D Spatial Sound Enabled' : '3D Uzamsal Ses A\u00e7\u0131ld\u0131')
    : (isEn ? '3D Spatial Sound Disabled' : '3D Uzamsal Ses Kapat\u0131ld\u0131'));
}
window.toggleSpatialAudio = toggleSpatialAudio;

function resetAllAudioFx() {
  setEqualizerPreset('standart', true);
  setBassBoostLevel(0, true);
  setClarityLevel(0, true);
  setPlaybackSpeed(1.0, true);
  setCrossfadeSeconds(0, true);
  state.proSettings.spatial3d = false;
  safeSetStorage('kurfa_spatial_3d', 'false');
  if (typeof KurfaDSP !== 'undefined') {
    KurfaDSP.syncAllParams();
  }
  syncAudioFxUI();
  showToast(getAppLanguage() === 'en' ? 'All Audio FX reset to flat' : 'T\u00fcm Ses & EQ ayarlar\u0131 s\u0131f\u0131rland\u0131', 'info');
}
window.resetAllAudioFx = resetAllAudioFx;

// Quintic Smoothstep Fade, Crossfade & Sleep Timer Volume Multiplier (Background-Resilient)
let _smoothFadeRaf = null;
let _smoothFadeTimer = null;
let _smoothFadeSeq = 0;
function quinticSmoothstep(t) {
  const c = Math.max(0, Math.min(1, t));
  return c * c * c * (c * (c * 6 - 15) + 10);
}

function cancelSmoothFade() {
  _smoothFadeSeq++;
  if (_smoothFadeRaf) {
    cancelAnimationFrame(_smoothFadeRaf);
    _smoothFadeRaf = null;
  }
  if (_smoothFadeTimer) {
    clearTimeout(_smoothFadeTimer);
    _smoothFadeTimer = null;
  }
}

function startSmoothFade(fromGain, toGain, durationMs, onDone) {
  cancelSmoothFade();
  const seq = _smoothFadeSeq;
  const dur = Math.max(40, Number(durationMs) || 180);
  const start = performance.now();
  const f = Math.max(0, Math.min(1, Number(fromGain)));
  const to = Math.max(0, Math.min(1, Number(toGain)));
  state._smoothFadeGain = f;
  if (typeof applyEffectiveVolume === 'function') applyEffectiveVolume();

  const tick = (now) => {
    if (seq !== _smoothFadeSeq) return;
    if (_smoothFadeTimer) {
      clearTimeout(_smoothFadeTimer);
      _smoothFadeTimer = null;
    }
    const ts = typeof now === 'number' ? now : performance.now();
    const p = Math.min(1, (ts - start) / dur);
    const e = quinticSmoothstep(p);
    state._smoothFadeGain = f + (to - f) * e;
    if (typeof applyEffectiveVolume === 'function') applyEffectiveVolume();
    if (p < 1) {
      if (typeof document !== 'undefined' && document.hidden) {
        _smoothFadeTimer = setTimeout(() => tick(performance.now()), 30);
      } else {
        _smoothFadeRaf = requestAnimationFrame(tick);
        _smoothFadeTimer = setTimeout(() => {
          if (seq === _smoothFadeSeq) tick(performance.now());
        }, 70);
      }
    } else {
      state._smoothFadeGain = to;
      _smoothFadeRaf = null;
      _smoothFadeTimer = null;
      if (typeof applyEffectiveVolume === 'function') applyEffectiveVolume();
      if (typeof onDone === 'function') onDone();
    }
  };
  if (typeof document !== 'undefined' && document.hidden) {
    _smoothFadeTimer = setTimeout(() => tick(performance.now()), 30);
  } else {
    _smoothFadeRaf = requestAnimationFrame(tick);
    _smoothFadeTimer = setTimeout(() => {
      if (seq === _smoothFadeSeq) tick(performance.now());
    }, 70);
  }
  return seq;
}

let _crossfadeInRaf = null;
let _crossfadeInTimer = null;
let _crossfadeInSeq = 0;
function startCrossfadeIn(durationSec) {
  _crossfadeInSeq++;
  const cfSeq = _crossfadeInSeq;
  if (_crossfadeInRaf) {
    cancelAnimationFrame(_crossfadeInRaf);
    _crossfadeInRaf = null;
  }
  if (_crossfadeInTimer) {
    clearTimeout(_crossfadeInTimer);
    _crossfadeInTimer = null;
  }
  const durMs = Math.min(6000, Math.max(900, (Number(durationSec) || 2) * 850));
  const startMs = performance.now();
  state._crossfadeGain = 0.02;
  state._crossfadeFadingOut = false;
  if (typeof applyEffectiveVolume === 'function') applyEffectiveVolume();

  const step = (now) => {
    if (cfSeq !== _crossfadeInSeq) return;
    if (_crossfadeInTimer) {
      clearTimeout(_crossfadeInTimer);
      _crossfadeInTimer = null;
    }
    const ts = typeof now === 'number' ? now : performance.now();
    const p = Math.min(1, (ts - startMs) / durMs);
    state._crossfadeGain = quinticSmoothstep(p);
    if (typeof applyEffectiveVolume === 'function') applyEffectiveVolume();
    if (p < 1) {
      if (typeof document !== 'undefined' && document.hidden) {
        _crossfadeInTimer = setTimeout(() => step(performance.now()), 60);
      } else {
        _crossfadeInRaf = requestAnimationFrame(step);
        _crossfadeInTimer = setTimeout(() => {
          if (cfSeq === _crossfadeInSeq) step(performance.now());
        }, 90);
      }
    } else {
      state._crossfadeGain = 1;
      _crossfadeInRaf = null;
      _crossfadeInTimer = null;
      if (typeof applyEffectiveVolume === 'function') applyEffectiveVolume();
    }
  };
  if (typeof document !== 'undefined' && document.hidden) {
    _crossfadeInTimer = setTimeout(() => step(performance.now()), 60);
  } else {
    _crossfadeInRaf = requestAnimationFrame(step);
    _crossfadeInTimer = setTimeout(() => {
      if (cfSeq === _crossfadeInSeq) step(performance.now());
    }, 90);
  }
}

function checkCrossfadeTick(cur, dur) {
  const cf = Number(state.proSettings?.crossfadeSec) || 0;
  if (cf <= 0 || !dur || dur < cf + 4) {
    if (state._crossfadeFadingOut) {
      state._crossfadeFadingOut = false;
      state._crossfadeGain = 1;
      if (typeof applyEffectiveVolume === 'function') applyEffectiveVolume();
    }
    return;
  }
  const remaining = dur - cur;
  if (remaining > 0 && remaining <= cf) {
    state._crossfadeFadingOut = true;
    const tNorm = Math.max(0, Math.min(1, remaining / cf));
    state._crossfadeGain = Math.max(0.02, quinticSmoothstep(tNorm));
    if (typeof applyEffectiveVolume === 'function') applyEffectiveVolume();
  } else if (state._crossfadeFadingOut && remaining > cf) {
    state._crossfadeFadingOut = false;
    state._crossfadeGain = 1;
    if (typeof applyEffectiveVolume === 'function') applyEffectiveVolume();
  }
}

function getEffectiveVolumeMultiplier() {
  let mult = 1.0;
  if (typeof SleepTimer !== 'undefined' && SleepTimer.fadeGain < 1) {
    mult *= SleepTimer.fadeGain;
  }
  if (typeof state._crossfadeGain === 'number' && state._crossfadeGain < 1) {
    mult *= state._crossfadeGain;
  }
  if (typeof state._smoothFadeGain === 'number' && state._smoothFadeGain < 1) {
    mult *= state._smoothFadeGain;
  }
  return Math.max(0, Math.min(1, mult));
}
window.getEffectiveVolumeMultiplier = getEffectiveVolumeMultiplier;

// =============================================================================
// 13.2B DYNAMIC LIQUID BACKGROUND (COVER PALETTE EXTRACTOR)
// =============================================================================

function syncIosSwitchBtn(btn, isOn) {
  if (!btn) return;
  const active = Boolean(isOn);
  btn.dataset.active = active ? 'true' : 'false';
  btn.setAttribute('aria-checked', active ? 'true' : 'false');
  btn.classList.toggle('is-on', active);
}

const LiquidBackground = {
  cache: new Map(),
  rgbCache: new Map(),
  lastPalette: ['rgba(255, 32, 86, 0.44)', 'rgba(99, 102, 241, 0.38)', 'rgba(6, 182, 212, 0.30)'],
  lastRgb: [255, 32, 86],

  hslToRgb(h, s, l) {
    const sNorm = s / 100;
    const lNorm = l / 100;
    const k = (n) => (n + h / 30) % 12;
    const a = sNorm * Math.min(lNorm, 1 - lNorm);
    const f = (n) => lNorm - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    return [Math.round(255 * f(0)), Math.round(255 * f(8)), Math.round(255 * f(4))];
  },

  deterministicHue(seedStr) {
    let h = 2166136261;
    const str = String(seedStr || 'kurfa');
    for (let i = 0; i < str.length; i++) {
      h ^= str.charCodeAt(i);
      h = Math.imul(h, 16777619);
    }
    return Math.abs(h) % 360;
  },

  deterministicPalette(seedStr) {
    const hue1 = this.deterministicHue(seedStr);
    const hue2 = (hue1 + 48) % 360;
    const hue3 = (hue1 + 195) % 360;
    return [
      `hsla(${hue1}, 78%, 54%, 0.48)`,
      `hsla(${hue2}, 74%, 48%, 0.40)`,
      `hsla(${hue3}, 70%, 50%, 0.32)`
    ];
  },

  applyAmbientRgb(rgb) {
    if (!Array.isArray(rgb) || rgb.length < 3) return;
    const r = Math.max(0, Math.min(255, Math.round(Number(rgb[0]) || 0)));
    const g = Math.max(0, Math.min(255, Math.round(Number(rgb[1]) || 0)));
    const b = Math.max(0, Math.min(255, Math.round(Number(rgb[2]) || 0)));
    this.lastRgb = [r, g, b];
    const enabled = !state.proSettings || state.proSettings.dynamicBg !== false;
    if (typeof document !== 'undefined' && document.documentElement) {
      if (enabled) {
        document.documentElement.style.setProperty('--ambient-rgb', `${r}, ${g}, ${b}`);
        document.documentElement.classList.remove('ambient-disabled');
      } else {
        document.documentElement.classList.add('ambient-disabled');
      }
    }
  },

  applyPalette(colors, rgb) {
    this.lastPalette = colors;
    const el = document.getElementById('player-liquid-bg');
    if (el) {
      el.style.setProperty('--mesh-c1', colors[0]);
      el.style.setProperty('--mesh-c2', colors[1]);
      el.style.setProperty('--mesh-c3', colors[2]);
    }
    if (rgb) {
      this.applyAmbientRgb(rgb);
    }
  },

  syncToggleState() {
    const enabled = !state.proSettings || state.proSettings.dynamicBg !== false;
    const el = document.getElementById('player-liquid-bg');
    if (el) el.classList.toggle('disabled', !enabled);
    if (typeof document !== 'undefined' && document.documentElement) {
      document.documentElement.classList.toggle('ambient-disabled', !enabled);
      if (enabled && Array.isArray(this.lastRgb)) {
        document.documentElement.style.setProperty('--ambient-rgb', this.lastRgb.join(', '));
      }
    }
    const btn = document.getElementById('btn-dynamic-bg-toggle');
    syncIosSwitchBtn(btn, enabled);
  },

  updateForTrack(track, thumbUrl) {
    this.syncToggleState();
    if (!track || (state.proSettings && state.proSettings.dynamicBg === false)) return;
    const url = thumbUrl || getTrackThumbnail(track);
    const seed = track.id || track.title || 'kurfa';
    const fallback = this.deterministicPalette(seed);
    const fallbackRgb = this.hslToRgb(this.deterministicHue(seed), 78, 54);
    this.applyPalette(fallback, fallbackRgb);

    if (!url || url.endsWith('kurfamuzik_logo.png')) return;
    if (this.cache.has(url)) {
      this.applyPalette(this.cache.get(url), this.rgbCache.get(url) || fallbackRgb);
      return;
    }

    try {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        try {
          const cv = document.createElement('canvas');
          cv.width = 24;
          cv.height = 24;
          const ctx = cv.getContext('2d', { willReadFrequently: true });
          ctx.drawImage(img, 0, 0, 24, 24);
          const data = ctx.getImageData(0, 0, 24, 24).data;
          const buckets = new Map();
          for (let i = 0; i < data.length; i += 4) {
            const r = data[i], g = data[i + 1], b = data[i + 2], a = data[i + 3];
            if (a < 128) continue;
            const lum = 0.299 * r + 0.587 * g + 0.114 * b;
            if (lum < 22 || lum > 235) continue;
            const key = `${r >> 5}_${g >> 5}_${b >> 5}`;
            const cur = buckets.get(key) || { count: 0, r: 0, g: 0, b: 0 };
            cur.count += 1;
            cur.r += r;
            cur.g += g;
            cur.b += b;
            buckets.set(key, cur);
          }
          const top = [...buckets.values()].sort((a, b) => b.count - a.count).slice(0, 3);
          if (top.length >= 2) {
            const c1 = top[0];
            const c2 = top[1] || top[0];
            const c3 = top[2] || top[1] || top[0];
            const domRgb = [
              Math.round(c1.r / c1.count),
              Math.round(c1.g / c1.count),
              Math.round(c1.b / c1.count)
            ];
            const pal = [
              `rgba(${domRgb[0]}, ${domRgb[1]}, ${domRgb[2]}, 0.52)`,
              `rgba(${Math.round(c2.r / c2.count)}, ${Math.round(c2.g / c2.count)}, ${Math.round(c2.b / c2.count)}, 0.42)`,
              `rgba(${Math.round(c3.r / c3.count)}, ${Math.round(c3.g / c3.count)}, ${Math.round(c3.b / c3.count)}, 0.34)`
            ];
            this.cache.set(url, pal);
            this.rgbCache.set(url, domRgb);
            this.applyPalette(pal, domRgb);
          }
        } catch (_) {
          // Tainted canvas CORS fallback already applied via deterministicPalette
        }
      };
      img.src = url;
    } catch (_) {}
  }
};
window.LiquidBackground = LiquidBackground;

function toggleDynamicBackground() {
  state.proSettings.dynamicBg = !state.proSettings.dynamicBg;
  safeSetStorage('kurfa_dynamic_bg', String(state.proSettings.dynamicBg));
  LiquidBackground.syncToggleState();
  if (state.proSettings.dynamicBg && state.currentTrack) {
    LiquidBackground.updateForTrack(state.currentTrack);
  }
  showToast(state.proSettings.dynamicBg ? t('toast.dynbg_on') : t('toast.dynbg_off'));
}
window.toggleDynamicBackground = toggleDynamicBackground;

// =============================================================================
// 13.2C ADVANCED SLEEP TIMER (30s FADE-OUT + STOP AFTER TRACK)
// =============================================================================

const SleepTimer = {
  mode: 'off', // 'off' | 'timer' | 'end_of_track'
  endTimeMs: 0,
  fadeGain: 1,
  _selectedMin: 0,

  set(option) {
    if (option === 'off' || option === 0) {
      this.mode = 'off';
      this.endTimeMs = 0;
      this._selectedMin = 0;
      this.fadeGain = 1;
      applyEffectiveVolume();
      this.updateUI();
      showToast(t('sleep.toast_off'));
      return;
    }
    if (option === 'end_of_track') {
      this.mode = 'end_of_track';
      this.endTimeMs = 0;
      this._selectedMin = 0;
      this.fadeGain = 1;
      applyEffectiveVolume();
      this.updateUI();
      showToast(t('sleep.toast_track'));
      return;
    }
    const mins = Math.max(1, Number(option) || 15);
    this.mode = 'timer';
    this._selectedMin = mins;
    this.endTimeMs = Date.now() + mins * 60 * 1000;
    this.fadeGain = 1;
    applyEffectiveVolume();
    this.updateUI();
    showToast(t('sleep.toast_set', { min: mins }));
  },

  handleTrackEnd() {
    if (this.mode === 'end_of_track') {
      this.mode = 'off';
      this.endTimeMs = 0;
      this.fadeGain = 1;
      pausePlayback();
      applyEffectiveVolume();
      this.updateUI();
      showToast(t('sleep.toast_done'));
      return true;
    }
    return false;
  },

  tick() {
    if (this.mode !== 'timer') return;
    const remMs = this.endTimeMs - Date.now();
    if (remMs <= 0) {
      this.mode = 'off';
      this.endTimeMs = 0;
      this.fadeGain = 1;
      pausePlayback();
      applyEffectiveVolume();
      this.updateUI();
      showToast(t('sleep.toast_done'));
      return;
    }
    const remSec = remMs / 1000;
    if (remSec <= 30) {
      this.fadeGain = Math.max(0.02, remSec / 30);
      applyEffectiveVolume();
    } else if (this.fadeGain !== 1) {
      this.fadeGain = 1;
      applyEffectiveVolume();
    }
    this.updateUI();
  },

  formatRemaining() {
    if (this.mode === 'end_of_track') return getAppLanguage() === 'en' ? 'End' : 'Sonu';
    if (this.mode !== 'timer') return '';
    const s = Math.max(0, Math.ceil((this.endTimeMs - Date.now()) / 1000));
    const m = Math.floor(s / 60);
    const sec = s % 60;
    return `${m}:${sec < 10 ? '0' : ''}${sec}`;
  },

  updateUI() {
    const label = this.formatRemaining();
    const isActive = this.mode !== 'off';
    const b1 = document.getElementById('sleep-timer-badge');
    const b2 = document.getElementById('deck-sleep-badge');
    const popRem = document.getElementById('sleep-popover-remaining');
    const setStatus = document.getElementById('settings-sleep-status');
    const btnMain = document.getElementById('btn-sleep-timer');

    if (b1) {
      b1.textContent = label;
      b1.classList.toggle('hidden', !isActive);
      b1.classList.toggle('flex', isActive);
    }
    if (b2) {
      b2.textContent = label;
      b2.classList.toggle('hidden', !isActive);
    }
    if (btnMain) btnMain.classList.toggle('text-primary', isActive);
    if (popRem) popRem.textContent = isActive ? label : t('settings.off');
    if (setStatus) setStatus.textContent = isActive ? label : t('settings.off');

    document.querySelectorAll('.kurfa-sleep-grid [data-sleep-opt]').forEach((btn) => {
      const opt = btn.getAttribute('data-sleep-opt');
      let match = false;
      if (!isActive && opt === 'off') match = true;
      else if (this.mode === 'end_of_track' && opt === 'track') match = true;
      else if (this.mode === 'timer' && String(this._selectedMin || '') === opt) match = true;
      btn.classList.toggle('sleep-opt-active', match);
    });
  }
};
window.SleepTimer = SleepTimer;

function setSleepTimer(opt) {
  SleepTimer.set(opt);
  const pop = document.getElementById('sleep-timer-popover');
  if (pop) pop.classList.add('hidden');
}
window.setSleepTimer = setSleepTimer;

function toggleSleepTimerPopover(anchorEl) {
  const pop = document.getElementById('sleep-timer-popover');
  if (!pop) return;
  const willShow = pop.classList.contains('hidden');
  pop.classList.toggle('hidden', !willShow);
  if (willShow) {
    SleepTimer.updateUI();
    if (anchorEl && typeof anchorEl.getBoundingClientRect === 'function') {
      const r = anchorEl.getBoundingClientRect();
      if (r.top > 280) {
        pop.style.top = 'auto';
        pop.style.bottom = `${Math.max(76, window.innerHeight - r.top + 8)}px`;
      } else {
        pop.style.bottom = 'auto';
        pop.style.top = `${Math.min(window.innerHeight - 260, r.bottom + 8)}px`;
      }
      pop.style.right = `${Math.max(12, Math.min(window.innerWidth - 270, window.innerWidth - r.right))}px`;
    }
  }
}
window.toggleSleepTimerPopover = toggleSleepTimerPopover;

// =============================================================================
// 13.2D SPONSORBLOCK AUTO-SKIP
// =============================================================================

const _sponsorBlockCache = new Map();
async function fetchSponsorBlockSegments(videoId, token) {
  if (!videoId || !state.proSettings || !state.proSettings.sponsorBlock) return;
  if (_sponsorBlockCache.has(videoId)) {
    if (token === currentPlaybackToken) {
      state.sponsorSegments = _sponsorBlockCache.get(videoId);
    }
    return;
  }
  try {
    const res = await fetch(`${API_BASE}/api/sponsorblock?v=${encodeURIComponent(videoId)}`);
    if (!res.ok) return;
    const data = await res.json();
    const segs = Array.isArray(data?.segments)
      ? data.segments.filter(s => s && Number.isFinite(Number(s.start)) && Number.isFinite(Number(s.end)) && Number(s.end) > Number(s.start) + 1)
      : [];
    _sponsorBlockCache.set(videoId, segs);
    if (token === currentPlaybackToken) {
      state.sponsorSegments = segs;
    }
  } catch (_) {}
}

function checkSponsorBlockSkip(curSec) {
  if (!state.proSettings || !state.proSettings.sponsorBlock) return;
  const segs = state.sponsorSegments;
  if (!Array.isArray(segs) || segs.length === 0) return;
  for (let i = 0; i < segs.length; i++) {
    const seg = segs[i];
    const start = Number(seg.start);
    const end = Number(seg.end);
    const key = `${start.toFixed(1)}_${end.toFixed(1)}`;
    if (curSec >= start && curSec < end - 0.5 && !state._skippedSponsorKeys.has(key)) {
      state._skippedSponsorKeys.add(key);
      seekPlaybackToSeconds(end);
      showToast(t('toast.sponsor_skipped'), 'info');
      break;
    }
  }
}

function toggleSponsorBlock() {
  state.proSettings.sponsorBlock = !state.proSettings.sponsorBlock;
  safeSetStorage('kurfa_sponsorblock', String(state.proSettings.sponsorBlock));
  updateSponsorBlockToggleUI();
  showToast(state.proSettings.sponsorBlock ? t('toast.sb_on') : t('toast.sb_off'));
}
window.toggleSponsorBlock = toggleSponsorBlock;

function updateSponsorBlockToggleUI() {
  const on = Boolean(state.proSettings && state.proSettings.sponsorBlock === true);
  const btn = document.getElementById('btn-sponsorblock-toggle');
  syncIosSwitchBtn(btn, on);
}

// =============================================================================
// 13.2E ADVANCED LISTENING STATS (WEEKLY / MONTHLY / ALL-TIME)
// =============================================================================

let _statsPeriod = 'week';

const ListeningStats = {
  _trackSec: 0,
  _trackCounted: false,
  _lastPersistSec: 0,

  getStore() {
    const fallback = { events: [], tracks: {}, artists: {} };
    const data = safeGetJSON('kurfa_listening_stats_v1', fallback);
    if (!data || typeof data !== 'object') return fallback;
    if (!Array.isArray(data.events)) data.events = [];
    if (!data.tracks || typeof data.tracks !== 'object') data.tracks = {};
    if (!data.artists || typeof data.artists !== 'object') data.artists = {};
    return data;
  },

  saveStore(store) {
    try {
      if (store.events.length > 1500) {
        store.events = store.events.slice(-1500);
      }
      safeSetStorage('kurfa_listening_stats_v1', JSON.stringify(store));
    } catch (_) {}
  },

  importStore(raw) {
    if (!raw || typeof raw !== 'object') return;
    const clean = {
      events: Array.isArray(raw.events) ? raw.events.slice(-1500) : [],
      tracks: (raw.tracks && typeof raw.tracks === 'object') ? raw.tracks : {},
      artists: (raw.artists && typeof raw.artists === 'object') ? raw.artists : {}
    };
    this.saveStore(clean);
  },

  onTrackStart() {
    this._trackSec = 0;
    this._trackCounted = false;
  },

  tickSecond() {
    if (!state.isPlaying || state.userPaused || !state.currentTrack) return;
    if (!state.profile) return;
    state.profile.listeningSeconds = (Number(state.profile.listeningSeconds) || 0) + 1;
    this._trackSec += 1;
    this._lastPersistSec += 1;

    // Record track & artist once track reaches >= 30s of listening
    if (this._trackSec >= 30 && !this._trackCounted) {
      this._trackCounted = true;
      state.profile.tracksPlayed = (Number(state.profile.tracksPlayed) || 0) + 1;
      this.recordTrackPlay(state.currentTrack, this._trackSec);
    } else if (this._trackCounted && (this._trackSec % 15 === 0)) {
      this.addListeningTime(state.currentTrack, 15);
    }

    if (this._lastPersistSec >= 10) {
      this._lastPersistSec = 0;
      safeSetStorage('kurfa_profile', JSON.stringify(state.profile));
    }
  },

  getTrackKeys(track) {
    const tid = String(track.ytId || track.id || track.title || 'unknown').trim();
    const title = formatCleanTrackTitle(track.title) || 'Kurfam\u00fczik';
    const artist = String(track.artist || (getAppLanguage() === 'en' ? 'Artist' : 'Sanat\u00e7\u0131')).trim();
    const artistKey = artist.toLowerCase();
    return { tid, title, artist, artistKey, thumb: getTrackThumbnail(track) };
  },

  recordTrackPlay(track, initialSec) {
    const store = this.getStore();
    const { tid, title, artist, artistKey, thumb } = this.getTrackKeys(track);
    const now = Date.now();

    const prevT = store.tracks[tid] || { id: tid, title, artist, thumb, plays: 0, seconds: 0, lastAt: now };
    prevT.title = title;
    prevT.artist = artist;
    prevT.thumb = thumb;
    prevT.plays += 1;
    prevT.seconds += initialSec;
    prevT.lastAt = now;
    store.tracks[tid] = prevT;

    const prevA = store.artists[artistKey] || { name: artist, plays: 0, seconds: 0, lastAt: now };
    prevA.name = artist;
    prevA.plays += 1;
    prevA.seconds += initialSec;
    prevA.lastAt = now;
    store.artists[artistKey] = prevA;

    store.events.push({ tid, title, artist, thumb, artistKey, sec: initialSec, plays: 1, ts: now });
    this.saveStore(store);
  },

  addListeningTime(track, deltaSec) {
    const store = this.getStore();
    const { tid, title, artist, artistKey, thumb } = this.getTrackKeys(track);
    const now = Date.now();
    if (store.tracks[tid]) {
      store.tracks[tid].seconds += deltaSec;
      store.tracks[tid].lastAt = now;
    }
    if (store.artists[artistKey]) {
      store.artists[artistKey].seconds += deltaSec;
      store.artists[artistKey].lastAt = now;
    }
    store.events.push({ tid, title, artist, thumb, artistKey, sec: deltaSec, plays: 0, ts: now });
    this.saveStore(store);
  },

  getSummary(period) {
    const store = this.getStore();
    const now = Date.now();
    const cutoff = period === 'week'
      ? now - 7 * 24 * 3600 * 1000
      : (period === 'month' ? now - 30 * 24 * 3600 * 1000 : 0);

    if (cutoff === 0) {
      const tracks = Object.values(store.tracks).sort((a, b) => (b.plays - a.plays) || (b.seconds - a.seconds));
      const artists = Object.values(store.artists).sort((a, b) => (b.plays - a.plays) || (b.seconds - a.seconds));
      const sumSec = tracks.reduce((acc, x) => acc + (Number(x.seconds) || 0), 0);
      const totalSec = Math.max(Number(state.profile?.listeningSeconds) || 0, sumSec);
      const sumPlays = tracks.reduce((acc, x) => acc + (Number(x.plays) || 0), 0);
      const totalPlays = Math.max(Number(state.profile?.tracksPlayed) || 0, sumPlays);
      return { totalSec, totalPlays, topTracks: tracks.slice(0, 5), topArtists: artists.slice(0, 5) };
    }

    const tMap = new Map();
    const aMap = new Map();
    let totalSec = 0;
    let totalPlays = 0;
    for (const ev of store.events) {
      if (!ev || ev.ts < cutoff) continue;
      totalSec += Number(ev.sec) || 0;
      totalPlays += Number(ev.plays) || 0;

      const tPrev = tMap.get(ev.tid) || { id: ev.tid, title: ev.title, artist: ev.artist, thumb: ev.thumb, plays: 0, seconds: 0 };
      tPrev.plays += Number(ev.plays) || 0;
      tPrev.seconds += Number(ev.sec) || 0;
      tMap.set(ev.tid, tPrev);

      const aPrev = aMap.get(ev.artistKey) || { name: ev.artist, plays: 0, seconds: 0 };
      aPrev.plays += Number(ev.plays) || 0;
      aPrev.seconds += Number(ev.sec) || 0;
      aMap.set(ev.artistKey, aPrev);
    }

    const topTracks = [...tMap.values()].sort((a, b) => (b.plays - a.plays) || (b.seconds - a.seconds)).slice(0, 5);
    const topArtists = [...aMap.values()].sort((a, b) => (b.plays - a.plays) || (b.seconds - a.seconds)).slice(0, 5);
    return { totalSec, totalPlays, topTracks, topArtists };
  }
};
window.ListeningStats = ListeningStats;

function setStatsPeriod(period) {
  _statsPeriod = period === 'month' || period === 'all' ? period : 'week';
  ['week', 'month', 'all'].forEach((p) => {
    const btn = document.getElementById(`btn-stats-${p}`);
    if (!btn) return;
    const active = p === _statsPeriod;
    btn.classList.toggle('bg-primary', active);
    btn.classList.toggle('text-on-primary', active);
    btn.classList.toggle('text-on-surface-variant', !active);
  });
  renderStatsDashboard();
}
window.setStatsPeriod = setStatsPeriod;

function formatStatsDuration(sec) {
  const totalMin = Math.floor((Number(sec) || 0) / 60);
  if (totalMin < 60) return t('settings.min_unit', { val: totalMin });
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return getAppLanguage() === 'en' ? `${h}h ${m}m` : `${h} sa ${m} dk`;
}

function renderStatsDashboard() {
  const sum = ListeningStats.getSummary(_statsPeriod);
  const timeEl = document.getElementById('stats-summary-time');
  const playsEl = document.getElementById('stats-summary-plays');
  const topArtEl = document.getElementById('stats-summary-top-artist');
  const tracksList = document.getElementById('stats-top-tracks-list');
  const artistsList = document.getElementById('stats-top-artists-list');

  if (timeEl) timeEl.textContent = formatStatsDuration(sum.totalSec);
  if (playsEl) playsEl.textContent = String(sum.totalPlays || 0);
  if (topArtEl) topArtEl.textContent = sum.topArtists[0]?.name || '\u2014';

  if (tracksList) {
    if (sum.topTracks.length === 0) {
      tracksList.innerHTML = `<p class="text-xs text-on-surface-variant py-4 text-center">${escapeHtml(t('stats.empty'))}</p>`;
    } else {
      tracksList.innerHTML = sum.topTracks.map((tr, i) => `
        <div class="flex items-center justify-between gap-2.5 p-2 rounded-xl bg-surface-container-low/70 hover:bg-surface-container cursor-pointer transition-colors" onclick="playTrackById('${escapeHtml(tr.id)}', {id:'${escapeHtml(tr.id)}', title:'${escapeHtml(tr.title).replace(/'/g, '')}', artist:'${escapeHtml(tr.artist).replace(/'/g, '')}', thumbnail:'${escapeHtml(tr.thumb || './kurfamuzik_logo.png')}'})">
          <div class="flex items-center gap-2.5 min-w-0 flex-1">
            <span class="w-5 text-center text-xs font-extrabold text-primary flex-shrink-0">${i + 1}</span>
            <img src="${escapeHtml(safeUrl(tr.thumb, './kurfamuzik_logo.png'))}" alt="" class="w-9 h-9 rounded-lg object-cover flex-shrink-0 bg-surface-container-high" onerror="this.onerror=null;this.src='./kurfamuzik_logo.png';">
            <div class="min-w-0 flex-1">
              <p class="text-xs font-bold text-on-surface truncate">${escapeHtml(tr.title)}</p>
              <p class="text-[11px] text-on-surface-variant truncate">${escapeHtml(tr.artist)}</p>
            </div>
          </div>
          <span class="text-[11px] font-mono font-bold text-on-surface-variant whitespace-nowrap flex-shrink-0">${escapeHtml(t('stats.plays_unit', { count: tr.plays }))}</span>
        </div>
      `).join('');
    }
  }

  if (artistsList) {
    if (sum.topArtists.length === 0) {
      artistsList.innerHTML = `<p class="text-xs text-on-surface-variant py-4 text-center">${escapeHtml(t('stats.empty'))}</p>`;
    } else {
      const maxPlays = Math.max(1, sum.topArtists[0]?.plays || 1);
      artistsList.innerHTML = sum.topArtists.map((ar, i) => {
        const pct = Math.max(12, Math.round(((ar.plays || 0) / maxPlays) * 100));
        return `
          <div class="flex flex-col gap-1 p-2 rounded-xl bg-surface-container-low/70 hover:bg-surface-container cursor-pointer transition-colors" onclick="searchByArtist('${escapeHtml(ar.name).replace(/'/g, '')}')">
            <div class="flex items-center justify-between gap-2 text-xs">
              <div class="flex items-center gap-2 min-w-0">
                <span class="w-5 text-center font-extrabold text-secondary flex-shrink-0">${i + 1}</span>
                <span class="font-bold text-on-surface truncate">${escapeHtml(ar.name)}</span>
              </div>
              <span class="text-[11px] font-mono text-on-surface-variant whitespace-nowrap flex-shrink-0">${escapeHtml(t('stats.plays_unit', { count: ar.plays }))} \u2022 ${escapeHtml(formatStatsDuration(ar.seconds))}</span>
            </div>
            <div class="w-full h-1.5 rounded-full bg-surface-container overflow-hidden">
              <div class="h-full rounded-full bg-gradient-to-r from-primary to-secondary" style="width:${pct}%"></div>
            </div>
          </div>
        `;
      }).join('');
    }
  }
}
window.renderStatsDashboard = renderStatsDashboard;

// =============================================================================
// 13.3 SOCIAL SHARE MODAL
// =============================================================================

function openShareModal(track = null) {
  const target = track || state.currentTrack;
  if (!target || !target.id) {
    showToast(t('toast.select_track_first'));
    return;
  }
  const modal = document.getElementById('share-modal');
  const card = document.getElementById('share-modal-card');
  if (!modal || !card) return;

  const thumb = document.getElementById('share-track-thumb');
  const title = document.getElementById('share-track-title');
  const artist = document.getElementById('share-track-artist');
  const input = document.getElementById('share-link-input');
  const copyBtnText = document.getElementById('share-copy-btn-text');

  const validYt = safeYtId(target.ytId || target.id);
  const fallbackThumb = validYt ? `https://i.ytimg.com/vi/${validYt}/hqdefault.jpg` : './kurfamuzik_logo.png';
  if (thumb) thumb.src = safeUrl(target.thumbnail, fallbackThumb);
  if (title) title.textContent = target.title || (getAppLanguage() === 'en' ? 'Track' : 'Şarkı');
  if (artist) artist.textContent = target.artist || (getAppLanguage() === 'en' ? 'Artist' : 'Sanatçı');

  const shareId = validYt || encodeURIComponent(String(target.id));
  const shareUrl = `${window.location.origin}${window.location.pathname}?song=${shareId}`;
  if (input) input.value = shareUrl;
  if (copyBtnText) copyBtnText.textContent = t('share.copy');

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');
}

function closeShareModal() {
  const modal = document.getElementById('share-modal');
  const card = document.getElementById('share-modal-card');
  if (!modal || !card) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  card.classList.add('scale-95');
  card.classList.remove('scale-100');
}

async function copyShareUrl() {
  const input = document.getElementById('share-link-input');
  const copyBtnText = document.getElementById('share-copy-btn-text');
  if (!input) return;

  try {
    await navigator.clipboard.writeText(input.value);
    if (copyBtnText) copyBtnText.textContent = t('share.copied');
    showToast(t('toast.share_copied'));
    setTimeout(() => {
      if (copyBtnText) copyBtnText.textContent = t('share.copy');
    }, 2500);
  } catch (e) {
    input.select();
    document.execCommand('copy');
    if (copyBtnText) copyBtnText.textContent = t('share.copied');
    showToast(t('toast.share_copied'));
  }
}

async function triggerWebShare() {
  const target = state.currentTrack;
  if (!target || !target.id) {
    showToast(t('toast.select_track_first'));
    return;
  }
  const validYt = safeYtId(target.ytId || target.id);
  const shareId = validYt || encodeURIComponent(String(target.id));
  const shareUrl = `${window.location.origin}${window.location.pathname}?song=${shareId}`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: `${target.title} - Kurfamüzik`,
        text: getAppLanguage() === 'en'
          ? `Listen to ${target.artist} - ${target.title} ad-free on Kurfamüzik!`
          : `${target.artist} - ${target.title} şarkısını Kurfamüzik'te reklamsız dinle!`,
        url: shareUrl
      });
      closeShareModal();
    } catch (err) {}
  } else {
    copyShareUrl();
  }
}

// =============================================================================
// 13.4 USER PROFILE & DARK MODE SETTINGS
// =============================================================================

function switchSettingsTab(tabKey) {
  const valid = ['general', 'playback', 'app', 'data', 'about'];
  const target = valid.includes(tabKey) ? tabKey : 'general';
  document.querySelectorAll('#settings-tab-nav [data-settings-tab]').forEach((btn) => {
    btn.classList.toggle('active', btn.getAttribute('data-settings-tab') === target);
  });
  valid.forEach((k) => {
    const pane = document.getElementById(`settings-pane-${k}`);
    if (pane) pane.classList.toggle('hidden', k !== target);
  });
  const contentPanel = document.getElementById('settings-content-panel');
  if (contentPanel) contentPanel.scrollTop = 0;
  if (typeof initKurfaScrollRails === 'function') {
    requestAnimationFrame(initKurfaScrollRails);
  }
}
window.switchSettingsTab = switchSettingsTab;

function updateSettingsDataSummary() {
  try {
    const favCountEl = document.getElementById('backup-stat-favs');
    const listsCountEl = document.getElementById('backup-stat-lists');
    const dlCountEl = document.getElementById('backup-stat-dl');
    const sizeEl = document.getElementById('backup-stat-size');
    if (favCountEl) favCountEl.textContent = String((state.favorites || []).length);
    if (listsCountEl) listsCountEl.textContent = String(((state.customPlaylists || []).length) + ((state.spotifyPlaylists || []).length));
    if (dlCountEl) dlCountEl.textContent = String((state.downloads || []).length);
    if (sizeEl) {
      let totalChars = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        if (k) totalChars += k.length + (localStorage.getItem(k) || '').length;
      }
      const kb = Math.max(1, Math.round((totalChars * 2) / 1024));
      sizeEl.textContent = `${kb} KB`;
    }
  } catch (_) {}
}

function clearKurfaAppCaches() {
  try {
    localStorage.removeItem('kurfa_explore_cache');
    localStorage.removeItem('kurfa_explore_cache_time');
    localStorage.removeItem('kurfa_lyrics_cache_v4');
    localStorage.removeItem('kurfa_lyrics_cache_v3');
    if (typeof lyricsMemoryCache !== 'undefined' && typeof lyricsMemoryCache.clear === 'function') {
      lyricsMemoryCache.clear();
    }
  } catch (_) {}
  updateSettingsDataSummary();
  showToast(getAppLanguage() === 'en' ? 'Cache cleared cleanly' : '\u00d6nbellek ba\u015far\u0131yla temizlendi', 'success');
}
window.clearKurfaAppCaches = clearKurfaAppCaches;

function openAudioFxFromSettings() {
  closeProfileModal();
  if (typeof switchTab === 'function') switchTab('calma-listeleri');
  if (typeof switchNowPlayingMobilePane === 'function') switchNowPlayingMobilePane('fx');
  const body = document.getElementById('audio-fx-body');
  const chev = document.getElementById('audio-fx-chevron');
  if (body && body.classList.contains('hidden')) {
    body.classList.remove('hidden');
    if (chev) chev.style.transform = 'rotate(180deg)';
  }
  setTimeout(() => {
    const card = document.getElementById('audio-fx-card');
    if (card && typeof card.scrollIntoView === 'function') {
      card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, 120);
}
window.openAudioFxFromSettings = openAudioFxFromSettings;

function openProfileModal(initialTab = 'general') {
  const modal = document.getElementById('profile-modal');
  const card = document.getElementById('profile-modal-card');
  if (!modal || !card) return;

  switchSettingsTab(initialTab || 'general');

  const nickInput = document.getElementById('profile-nickname-input');
  if (nickInput) nickInput.value = state.profile.nickname || t('topbar.default_nick');

  const minEl = document.getElementById('stat-listening-minutes');
  if (minEl) minEl.textContent = t('settings.min_unit', { val: Math.floor((state.profile.listeningSeconds || 0) / 60) });

  const playedEl = document.getElementById('stat-tracks-played');
  if (playedEl) playedEl.textContent = (state.profile.tracksPlayed || 0).toString();

  const dlEl = document.getElementById('stat-downloads-count');
  if (dlEl) dlEl.textContent = state.downloads.length.toString();

  updateLocalEngineStatusUI();
  updateAdWarningToggleUI();
  updateSettingsDataSummary();
  if (typeof LiquidBackground !== 'undefined') LiquidBackground.syncToggleState();
  if (typeof updateSponsorBlockToggleUI === 'function') updateSponsorBlockToggleUI();
  if (typeof SleepTimer !== 'undefined') SleepTimer.updateUI();
  refreshAppVersionAndUpdateStatus();

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');
  if (typeof initKurfaScrollRails === 'function') {
    setTimeout(initKurfaScrollRails, 40);
  }
}

function closeProfileModal() {
  const modal = document.getElementById('profile-modal');
  const card = document.getElementById('profile-modal-card');
  if (!modal || !card) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  card.classList.add('scale-95');
  card.classList.remove('scale-100');
}

function handleCustomAvatarUpload(event) {
  const inputEl = event?.target;
  const file = inputEl?.files && inputEl.files[0];
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    if (inputEl) inputEl.value = '';
    showToast("Lütfen geçerli bir resim dosyası seçin");
    return;
  }

  const reader = new FileReader();
  reader.onerror = () => {
    if (inputEl) inputEl.value = '';
    showToast("Resim dosyası okunamadı");
  };
  reader.onload = function(evt) {
    const img = new Image();
    img.onload = function() {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = 128;
        canvas.height = 128;
        const ctx = canvas.getContext('2d');

        const minDim = Math.min(img.width, img.height);
        const sx = (img.width - minDim) / 2;
        const sy = (img.height - minDim) / 2;

        ctx.drawImage(img, sx, sy, minDim, minDim, 0, 0, 128, 128);
        const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.85);

        selectAvatar(optimizedDataUrl);
        showToast("Özel profil fotoğrafı seçildi");
      } catch (err) {
        console.warn("Avatar resize error, using raw image:", err);
        selectAvatar(evt.target.result);
      } finally {
        if (inputEl) inputEl.value = '';
      }
    };
    img.onerror = () => {
      if (inputEl) inputEl.value = '';
      showToast("Geçersiz resim içeriği");
    };
    img.src = evt.target.result;
  };
  reader.readAsDataURL(file);
}
window.handleCustomAvatarUpload = handleCustomAvatarUpload;

function selectAvatar(src) {
  const cleanSrc = safeUrl(src, state.profile.avatar || './kurfamuzik_logo.png');
  state.profile.avatar = cleanSrc;
  const currentAvatarPreview = document.getElementById('profile-current-avatar-preview');
  if (currentAvatarPreview) {
    currentAvatarPreview.src = cleanSrc;
  }
  document.querySelectorAll('#avatar-options-row .avatar-option').forEach(img => {
    if (img.src === cleanSrc) {
      img.classList.add('border-primary');
      img.classList.remove('border-transparent');
    } else {
      img.classList.remove('border-primary');
      img.classList.add('border-transparent');
    }
  });
}

function saveProfileData() {
  const nickInput = document.getElementById('profile-nickname-input');
  if (nickInput && nickInput.value.trim()) {
    state.profile.nickname = nickInput.value.trim().slice(0, 40);
  }
  safeSetStorage('kurfa_profile', JSON.stringify(state.profile));
  updateProfileUI();
  closeProfileModal();
  showToast(t('toast.profile_saved'));
}

function updateProfileUI() {
  const avatarEl = document.getElementById('topbar-user-avatar');
  if (avatarEl) {
    const avStr = String(state.profile.avatar || '');
    const rawAv = avStr && !avStr.includes('unsplash.com') && !avStr.endsWith('kurfamuzik_logo.png')
      ? avStr
      : './kurfamuzik_logo_96.webp';
    avatarEl.src = safeUrl(rawAv, './kurfamuzik_logo_96.webp');
  }
  const nameEl = document.getElementById('topbar-user-name');
  if (nameEl) {
    nameEl.textContent = state.profile.nickname || t('topbar.default_nick');
  }
  const isDark = !!state.profile.darkMode;
  if (document.documentElement) {
    document.documentElement.classList.toggle('dark-mode', isDark);
    document.documentElement.classList.toggle('dark', isDark);
    document.documentElement.style.backgroundColor = isDark ? '#0c101a' : '#f6f7fb';
    document.documentElement.style.color = isDark ? '#f1f5f9' : '#0f172a';
  }
  if (document.body) {
    document.body.classList.toggle('dark-mode', isDark);
    document.body.classList.toggle('dark', isDark);
    document.body.style.backgroundColor = isDark ? '#0c101a' : '#f6f7fb';
    document.body.style.color = isDark ? '#f1f5f9' : '#0f172a';
  }
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', isDark ? '#0c101a' : '#faf8ff');
  }

  const topbarThemeIcon = document.getElementById('topbar-theme-icon');
  if (topbarThemeIcon) {
    topbarThemeIcon.textContent = isDark ? 'light_mode' : 'dark_mode';
  }
  const topbarThemeBtn = document.getElementById('topbar-theme-btn');
  if (topbarThemeBtn) {
    topbarThemeBtn.title = isDark ? t('topbar.theme_to_light') : t('topbar.theme_to_dark');
  }

  const btnThemeToggle = document.getElementById('btn-theme-toggle');
  syncIosSwitchBtn(btnThemeToggle, isDark);

  const monoEl = document.getElementById('profile-avatar-monogram');
  if (monoEl) {
    monoEl.textContent = (state.profile.nickname || t('topbar.default_nick') || 'K').trim().charAt(0).toUpperCase() || 'K';
  }
  const darkCard = document.getElementById('btn-theme-card-dark');
  const lightCard = document.getElementById('btn-theme-card-light');
  if (darkCard) {
    darkCard.classList.toggle('is-selected', isDark);
    darkCard.setAttribute('aria-pressed', isDark ? 'true' : 'false');
  }
  if (lightCard) {
    lightCard.classList.toggle('is-selected', !isDark);
    lightCard.setAttribute('aria-pressed', !isDark ? 'true' : 'false');
  }

  updateAdWarningToggleUI();
  if (typeof LiquidBackground !== 'undefined') LiquidBackground.syncToggleState();
  if (typeof updateSponsorBlockToggleUI === 'function') updateSponsorBlockToggleUI();
  if (typeof SleepTimer !== 'undefined') SleepTimer.updateUI();
  if (typeof syncAudioFxUI === 'function') syncAudioFxUI();
}

function toggleDarkMode() {
  state.profile.darkMode = !state.profile.darkMode;
  safeSetStorage('kurfa_profile', JSON.stringify(state.profile));
  updateProfileUI();
  if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
    callExtensionBridge('SET_THEME_MODE', { dark: Boolean(state.profile.darkMode) }, 1500).catch(() => {});
  }
  showToast(state.profile.darkMode ? t('toast.dark_on') : t('toast.dark_off'));
}

// =============================================================================
// 13.5 FRESH RELEASES (YENİ ÇIKANLAR)
// =============================================================================

const MIX_FALLBACK_IMAGES = [
  'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/fb/31/11/fb3111cb-4251-ab93-eb37-75e752050237/cover.jpg/300x300bb.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/15/19/83/151983a9-0c68-ee9d-0350-a6940b795054/cover.jpg/300x300bb.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/a8/92/b9/a892b962-b6e9-b027-d2f2-6192290b4dea/199350105050.jpg/300x300bb.jpg',
  'https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/05/81/0b/05810b21-3c0c-b3b7-d2b2-2050baab2de0/cover.jpg/300x300bb.jpg'
];

function isLocalOrInvalidArtist(name, track = null) {
  if (track) {
    if (track.isLocal) return true;
    const tid = String(track.id || '').trim().toLowerCase();
    const tsrc = String(track.source || '').trim().toLowerCase();
    if (tid.startsWith('local_') || tsrc === 'local') return true;
  }
  const clean = String(name || '').trim();
  if (!clean || clean.length < 2) return true;
  if (/^(yerel dosya|local file|cihaz m[üu]zi[ğg]i|bilinmeyen sanat[çc][ıi]|unknown artist|unknown|local_|audio_|track_|record|whatsapp|voice)/i.test(clean)) return true;
  if (/\.(mp3|wav|m4a|flac|ogg|aac|opus|webm|mp4)\b/i.test(clean)) return true;
  if (/[\\\/]/.test(clean)) return true;
  if (/\b(netd|kurfa|sanat[çc][ıi]|artist|topic)\b/i.test(clean)) return true;
  return false;
}

function extractCleanArtistFromTrack(track) {
  if (!track) return '';
  if (track.isLocal || String(track.id || '').startsWith('local_') || String(track.source || '').toLowerCase() === 'local') return '';
  let artist = String(track.artist || '').trim();
  const isChannel = /\b(netd\s*m\u00fczik|netd|poll\s*production|dmc|muzikplay|avrupa|dokuzsekiz|vevo|official|topic|sanat\u00e7\u0131|kurfam\u00fczik)\b/i.test(artist);
  const titleStr = String(track.title || '').trim();
  if ((!artist || isChannel) && titleStr.includes(' - ')) {
    artist = titleStr.split(' - ')[0].trim();
  }
  artist = artist
    .replace(/\s*(?:ft\.?|feat\.?|featuring)\s+.*$/i, '')
    .split(/\s*(?:,|&|\/|\bx\b|\bve\b)\s*/i)[0]
    .trim();
  if (isLocalOrInvalidArtist(artist, track)) return '';
  return artist;
}

function getPersonalizedKesfetSeeds() {
  const isLocalTrackItem = (t) => !t || Boolean(t.isLocal) || String(t.id || '').startsWith('local_') || String(t.source || '').toLowerCase() === 'local';
  const recents = Array.isArray(state.recentlyPlayed) ? state.recentlyPlayed.filter(t => t && !isLocalTrackItem(t)) : [];
  const favs = Array.isArray(state.favorites) ? state.favorites.filter(t => t && !isLocalTrackItem(t)) : [];
  const stats = (typeof ListeningStats !== 'undefined' && typeof ListeningStats.getStore === 'function')
    ? ListeningStats.getStore()
    : { tracks: {}, artists: {} };

  const artistScores = new Map();
  const addArtistScore = (name, score, thumb) => {
    const clean = String(name || '').trim();
    if (isLocalOrInvalidArtist(clean)) return;
    const key = clean.toLowerCase();
    const prev = artistScores.get(key) || { name: clean, score: 0, thumb: '' };
    prev.score += score;
    if (!prev.thumb && thumb && !thumb.includes('kurfamuzik_logo')) prev.thumb = thumb;
    artistScores.set(key, prev);
  };

  Object.values(stats.artists || {}).forEach((a) => {
    if (a && a.name) addArtistScore(a.name, (Number(a.plays) || 1) * 4 + ((Number(a.seconds) || 0) / 30), '');
  });
  recents.forEach((t, idx) => {
    const cleanA = extractCleanArtistFromTrack(t);
    if (cleanA) addArtistScore(cleanA, Math.max(2, 12 - idx), getTrackThumbnail(t));
  });
  favs.forEach((t) => {
    const cleanA = extractCleanArtistFromTrack(t);
    if (cleanA) addArtistScore(cleanA, 8, getTrackThumbnail(t));
  });

  const sortedArtists = Array.from(artistScores.values()).sort((a, b) => b.score - a.score);
  const topTrackSeeds = [];
  const seenVid = new Set();
  [...recents, ...favs].forEach((t) => {
    const vid = safeYtId(t && (t.ytId || t.id));
    if (vid && !seenVid.has(vid)) {
      seenVid.add(vid);
      topTrackSeeds.push(t);
    }
  });

  return { recents, favs, topArtists: sortedArtists, topTrackSeeds, hasUserHistory: recents.length > 0 || favs.length > 0 || sortedArtists.length > 0 };
}

let _dynamicMixes = [];
let _personalizedAlbumsCache = [];
let _personalizedRecsCache = [];
let _lastFetchedAlbumArtistsKey = '';
let _lastFetchedRecSeedId = '';

function buildDynamicMixDefinitions(seeds) {
  const isEn = getAppLanguage() === 'en';
  const liveTracks = getCuratedTracks();
  const poolArtists = [...seeds.topArtists];

  if (poolArtists.length < 6) {
    const seenLow = new Set(poolArtists.map(a => a.name.toLowerCase()));
    for (const tr of liveTracks) {
      const a = extractCleanArtistFromTrack(tr);
      if (a && !seenLow.has(a.toLowerCase())) {
        seenLow.add(a.toLowerCase());
        poolArtists.push({ name: a, score: 1, thumb: getTrackThumbnail(tr) });
      }
      if (poolArtists.length >= 10) break;
    }
  }

  const mixes = [];
  for (let i = 0; i < 4; i++) {
    const slice = [];
    for (let j = 0; j < 3; j++) {
      const item = poolArtists[(i * 2 + j) % Math.max(1, poolArtists.length)];
      if (item && !slice.some(x => x.name.toLowerCase() === item.name.toLowerCase())) {
        slice.push(item);
      }
    }
    const artistNames = slice.map(x => x.name);
    const subtitle = artistNames.join(', ') || 'Türkiye Hitleri';
    const cover = slice.find(x => x.thumb)?.thumb || MIX_FALLBACK_IMAGES[i];
    const label = isEn ? `Daily Mix 0${i + 1}` : `Günlük Mix 0${i + 1}`;
    mixes.push({
      index: i,
      name: label,
      subtitle,
      artists: artistNames,
      cover,
      query: artistNames.length > 0 ? `${artistNames.slice(0, 3).join(' ')} popüler şarkılar` : 'Türkçe popüler şarkılar'
    });
  }
  return mixes;
}

function diversifyTracksByArtist(tracks, maxPerArtist = 2) {
  if (!Array.isArray(tracks) || tracks.length <= 2) return Array.isArray(tracks) ? tracks : [];
  const counts = new Map();
  const primary = [];
  const overflow = [];
  let lastArtist = '';

  const getKey = (tr) => {
    const clean = (typeof extractCleanArtistFromTrack === 'function' ? extractCleanArtistFromTrack(tr) : '') || String(tr?.artist || '');
    return clean.toLowerCase().replace(/[^a-z0-9\u00c0-\u024f]/g, '');
  };

  // Two-pass interleave: avoid back-to-back identical artists and cap repeats
  const pool = [...tracks];
  while (pool.length > 0) {
    let pickedIdx = -1;
    for (let i = 0; i < pool.length; i++) {
      const k = getKey(pool[i]);
      const c = k ? (counts.get(k) || 0) : 0;
      if (c < maxPerArtist && (!k || k !== lastArtist)) {
        pickedIdx = i;
        break;
      }
    }
    if (pickedIdx === -1) {
      for (let i = 0; i < pool.length; i++) {
        const k = getKey(pool[i]);
        const c = k ? (counts.get(k) || 0) : 0;
        if (c < maxPerArtist) {
          pickedIdx = i;
          break;
        }
      }
    }
    if (pickedIdx === -1) {
      overflow.push(...pool);
      break;
    }
    const item = pool.splice(pickedIdx, 1)[0];
    const k = getKey(item);
    if (k) {
      counts.set(k, (counts.get(k) || 0) + 1);
      lastArtist = k;
    }
    primary.push(item);
  }
  return [...primary, ...overflow];
}

function renderQuickPicksGrid(seeds) {
  const grid = document.getElementById('kesfet-quick-picks-grid');
  const titleEl = document.getElementById('kesfet-quick-picks-title');
  if (!grid) return;

  const isEn = getAppLanguage() === 'en';
  const pool = [];
  const seen = new Set();
  [...seeds.recents, ...seeds.favs, ...getCuratedTracks()].forEach((t) => {
    if (!t || !t.id || seen.has(t.id)) return;
    seen.add(t.id);
    pool.push(t);
  });

  if (titleEl) {
    titleEl.textContent = seeds.recents.length > 0
      ? (isEn ? 'Recently Played & Quick Picks' : 'Son Çalınanlar & Hızlı Başlat')
      : (isEn ? 'Quick Picks' : 'Hızlı Başlat');
  }

  grid.innerHTML = '';
  const diversePool = diversifyTracksByArtist(pool, 2);
  const items = diversePool.slice(0, 6);
  items.forEach((track) => {
    const card = document.createElement('div');
    card.className = 'kurfa-quick-pick-card group';
    const safeTitle = escapeHtml(formatCleanTrackTitle(track.title) || 'Şarkı');
    const safeArtist = escapeHtml(extractCleanArtistFromTrack(track) || track.artist || 'Sanatçı');
    const safeThumb = escapeHtml(safeUrl(getTrackThumbnail(track), './kurfamuzik_logo.png'));
    const isPlayingCur = state.currentTrack && state.currentTrack.id === track.id && state.isPlaying;
    card.innerHTML = `
      <img src="${safeThumb}" alt="${safeTitle}" loading="lazy" decoding="async" class="w-12 h-12 rounded-lg object-cover flex-shrink-0 bg-surface-container-high" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
      <div class="flex flex-col min-w-0 flex-1">
        <span class="text-xs font-bold text-on-surface truncate">${safeTitle}</span>
        <span class="text-[11px] text-on-surface-variant truncate">${safeArtist}</span>
      </div>
      <span class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface opacity-80 group-hover:opacity-100 group-hover:bg-primary group-hover:text-on-primary transition-all flex-shrink-0">
        <span class="material-symbols-outlined text-[18px] filled">${isPlayingCur ? 'pause' : 'play_arrow'}</span>
      </span>
    `;
    card.onclick = () => {
      setPlaybackQueueContext(items, track, titleEl?.textContent || 'Hızlı Başlat', 'KEŞFET');
      playTrackById(track.id, track);
    };
    grid.appendChild(card);
  });
}

function renderDynamicMixesGrid(seeds) {
  const isEn = getAppLanguage() === 'en';
  _dynamicMixes = buildDynamicMixDefinitions(seeds);

  const profileName = String(state.profile?.name || '').trim();
  const titleText = profileName && !/^dinleyici|listener$/i.test(profileName)
    ? (isEn ? `Made For ${profileName}` : `${profileName} İçin Derlendi`)
    : (isEn ? 'Made For You' : 'Senin İçin Derlendi');

  const hMain = document.getElementById('kesfet-personal-mixes-title');
  const hSub = document.getElementById('kesfet-mixes-heading');
  if (hMain) hMain.textContent = titleText;
  if (hSub) hSub.textContent = titleText;

  const populateTarget = (container) => {
    if (!container) return;
    container.innerHTML = '';
    _dynamicMixes.forEach((mix, idx) => {
      const card = document.createElement('div');
      card.className = 'group flex flex-col bg-surface-container-lowest rounded-2xl p-3 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 cursor-pointer border border-surface-container/60';
      const safeTitle = escapeHtml(mix.name);
      const safeSub = escapeHtml(mix.subtitle);
      const safeCover = escapeHtml(safeUrl(mix.cover, './kurfamuzik_logo.png'));
      card.innerHTML = `
        <div class="relative aspect-square rounded-xl overflow-hidden bg-surface-container-high mb-2.5">
          <img src="${safeCover}" alt="${safeTitle}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
          <div class="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent"></div>
          <span class="absolute bottom-2.5 right-2.5 w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
            <span class="material-symbols-outlined text-[20px] filled">play_arrow</span>
          </span>
        </div>
        <div class="min-w-0">
          <span class="inline-block text-[10px] font-extrabold uppercase tracking-wider text-primary mb-0.5">MİX</span>
          <h3 class="font-bold text-xs sm:text-sm text-on-surface truncate">${safeTitle}</h3>
          <p class="text-[11px] text-on-surface-variant truncate mt-0.5">${safeSub}</p>
        </div>
      `;
      card.onclick = () => playCuratedMix(idx);
      container.appendChild(card);
    });
  };

  populateTarget(document.getElementById('kesfet-personal-mixes-grid'));
  populateTarget(document.getElementById('popular-mixes-grid'));
}

function renderAlbumShelfInto(container, albums, horizontal = true) {
  if (!container) return;
  container.innerHTML = '';
  albums.forEach((alb) => {
    const card = document.createElement('div');
    card.className = horizontal
      ? 'kurfa-album-shelf-card group rounded-2xl bg-surface-container-lowest p-2.5 sm:p-3 shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer border border-surface-container/60'
      : 'group rounded-2xl bg-surface-container-lowest p-2.5 sm:p-3 shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer border border-surface-container/60';
    const safeTitle = escapeHtml(alb.title || 'Albüm');
    const safeArtist = escapeHtml(alb.artist || 'Sanatçı');
    const safeCover = escapeHtml(safeUrl(alb.cover || alb.thumbnail, './kurfamuzik_logo.png'));
    const metaBadge = escapeHtml([alb.type || 'Albüm', alb.year].filter(Boolean).join(' • '));
    card.innerHTML = `
      <div class="relative w-full aspect-square rounded-xl overflow-hidden mb-2.5 bg-surface-container-high">
        <img src="${safeCover}" alt="${safeTitle}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <span class="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/70 backdrop-blur-sm text-white text-[10px] font-bold">${metaBadge}</span>
        <span class="absolute right-2.5 bottom-2.5 w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
          <span class="material-symbols-outlined text-[20px] filled">play_arrow</span>
        </span>
      </div>
      <h3 class="text-xs sm:text-sm font-bold text-on-surface truncate">${safeTitle}</h3>
      <p class="text-[11px] text-on-surface-variant truncate mt-0.5">${safeArtist}</p>
    `;
    card.onclick = () => {
      if (typeof openAlbumDetail === 'function') {
        openAlbumDetail(alb);
      }
    };
    container.appendChild(card);
  });
}

function getCombinedExploreAlbums() {
  const combined = [];
  const seen = new Set();
  const pushAlb = (a) => {
    const clean = sanitizeAlbumCard(a);
    if (!clean || seen.has(clean.browseId)) return;
    seen.add(clean.browseId);
    combined.push(clean);
  };
  (_personalizedAlbumsCache || []).forEach(pushAlb);
  (Array.isArray(exploreData?.newReleases) ? exploreData.newReleases : []).forEach(pushAlb);
  (Array.isArray(exploreData?.albums) ? exploreData.albums : []).forEach(pushAlb);
  return combined;
}

function renderPersonalizedAlbumsGrid() {
  const albums = getCombinedExploreAlbums();
  const shelf = document.getElementById('kesfet-new-albums-grid');
  const sec = document.getElementById('kesfet-new-albums-section');
  const sub = document.getElementById('kesfet-albums-subtitle');
  const yeniGrid = document.getElementById('yeni-albums-grid');
  if (sec) sec.classList.toggle('hidden', albums.length === 0);
  if (sub && _personalizedAlbumsCache.length > 0) {
    const isEn = getAppLanguage() === 'en';
    sub.textContent = isEn
      ? 'Albums featuring artists you listen to & live Turkey releases'
      : 'Dinlediğin sanatçıların albümleri ve güncel yeni çıkanlar';
  }
  if (shelf && albums.length > 0) renderAlbumShelfInto(shelf, albums.slice(0, 18), true);
  if (yeniGrid && albums.length > 0) renderAlbumShelfInto(yeniGrid, albums.slice(0, 20), false);
}

async function hydratePersonalizedAlbumsAsync(seeds) {
  const targetArtists = seeds.topArtists.slice(0, 3).map(a => a.name).filter(Boolean);
  if (targetArtists.length === 0) return;
  const sig = targetArtists.join('|').toLowerCase();

  try {
    const cached = JSON.parse(localStorage.getItem('kurfa_personal_albums_v1') || 'null');
    if (cached && cached.sig === sig && (Date.now() - Number(cached.ts || 0)) < 6 * 3600 * 1000 && Array.isArray(cached.albums)) {
      _personalizedAlbumsCache = cached.albums;
      renderPersonalizedAlbumsGrid();
      return;
    }
  } catch (_) {}

  if (_lastFetchedAlbumArtistsKey === sig) return;
  _lastFetchedAlbumArtistsKey = sig;

  try {
    const fetched = await Promise.allSettled(
      targetArtists.map(name =>
        fetch(`${API_BASE}/api/artist?name=${encodeURIComponent(name)}`)
          .then(r => (r.ok ? r.json() : null))
          .catch(() => null)
      )
    );
    const merged = [];
    const seen = new Set();
    for (const res of fetched) {
      if (res.status !== 'fulfilled' || !res.value || !Array.isArray(res.value.albums)) continue;
      for (const alb of res.value.albums.slice(0, 5)) {
        const clean = sanitizeAlbumCard(alb);
        if (clean && !seen.has(clean.browseId)) {
          seen.add(clean.browseId);
          merged.push(clean);
        }
      }
    }
    if (merged.length > 0) {
      _personalizedAlbumsCache = merged;
      safeSetStorage('kurfa_personal_albums_v1', JSON.stringify({ sig, ts: Date.now(), albums: merged }));
      renderPersonalizedAlbumsGrid();
    }
  } catch (_) {}
}

function renderPersonalizedRecommendationsGrid(tracks) {
  const sec = document.getElementById('kesfet-recommend-section');
  const grid = document.getElementById('kesfet-recommend-grid');
  if (!grid || !sec) return;
  if (!Array.isArray(tracks) || tracks.length === 0) {
    sec.classList.add('hidden');
    return;
  }
  sec.classList.remove('hidden');
  grid.innerHTML = '';
  const cleanList = diversifyTracksByArtist(tracks, 2).slice(0, 14);
  cleanList.forEach((track) => {
    const card = document.createElement('div');
    card.className = 'kurfa-album-shelf-card group rounded-2xl bg-surface-container-lowest p-2.5 sm:p-3 shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer border border-surface-container/60';
    const safeTitle = escapeHtml(formatCleanTrackTitle(track.title) || 'Şarkı');
    const safeArtist = escapeHtml(extractCleanArtistFromTrack(track) || track.artist || 'Sanatçı');
    const safeThumb = escapeHtml(safeUrl(getTrackThumbnail(track), './kurfamuzik_logo.png'));
    card.innerHTML = `
      <div class="relative w-full aspect-square rounded-xl overflow-hidden mb-2.5 bg-surface-container-high">
        <img src="${safeThumb}" alt="${safeTitle}" loading="lazy" decoding="async" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <button type="button" class="absolute right-2.5 bottom-2.5 w-9 h-9 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
          <span class="material-symbols-outlined text-[20px] filled">play_arrow</span>
        </button>
      </div>
      <h3 class="text-xs sm:text-sm font-bold text-on-surface truncate">${safeTitle}</h3>
      <p class="text-[11px] text-on-surface-variant truncate mt-0.5">${safeArtist}</p>
    `;
    card.onclick = () => {
      setPlaybackQueueContext(cleanList, track, t('explore.recommended_today'), 'TAVSİYELER');
      playTrackById(track.id, track);
    };
    grid.appendChild(card);
  });
}

async function hydratePersonalizedRecommendationsAsync(seeds) {
  const seedTrack = seeds.topTrackSeeds[0] || getCuratedTracks()[0];
  const vid = safeYtId(seedTrack && (seedTrack.ytId || seedTrack.id));
  if (!vid) return;

  try {
    const cached = JSON.parse(sessionStorage.getItem('kurfa_personal_recs_v1') || 'null');
    if (cached && cached.vid === vid && Array.isArray(cached.tracks) && cached.tracks.length > 0) {
      _personalizedRecsCache = cached.tracks;
      renderPersonalizedRecommendationsGrid(_personalizedRecsCache);
      return;
    }
  } catch (_) {}

  if (_lastFetchedRecSeedId === vid) return;
  _lastFetchedRecSeedId = vid;

  try {
    const res = await fetch(`${API_BASE}/api/automix?v=${encodeURIComponent(vid)}&limit=14`);
    if (!res.ok) return;
    const data = await res.json();
    const list = (data && Array.isArray(data.tracks)) ? data.tracks.map(sanitizeExploreTrack).filter(Boolean) : [];
    if (list.length > 0) {
      _personalizedRecsCache = list;
      try { sessionStorage.setItem('kurfa_personal_recs_v1', JSON.stringify({ vid, tracks: list })); } catch (_) {}
      renderPersonalizedRecommendationsGrid(list);
    }
  } catch (_) {}
}

function renderPersonalizedKesfet(opts = {}) {
  const seeds = getPersonalizedKesfetSeeds();
  renderQuickPicksGrid(seeds);
  renderDynamicMixesGrid(seeds);
  renderPersonalizedAlbumsGrid();
  if (_personalizedRecsCache.length > 0) {
    renderPersonalizedRecommendationsGrid(_personalizedRecsCache);
  }
  if (opts.refreshAsync) {
    hydratePersonalizedAlbumsAsync(seeds);
    hydratePersonalizedRecommendationsAsync(seeds);
    if (typeof renderPopularArtistsGrid === 'function') {
      renderPopularArtistsGrid(true);
    }
  }
}
window.renderPersonalizedKesfet = renderPersonalizedKesfet;

async function refreshPersonalizedExplore() {
  const icon = document.getElementById('refresh-explore-icon');
  if (icon) icon.classList.add('animate-spin');
  try {
    _lastFetchedAlbumArtistsKey = '';
    _lastFetchedRecSeedId = '';
    localStorage.removeItem('kurfa_personal_albums_v1');
    try { sessionStorage.removeItem('kurfa_personal_recs_v1'); } catch (_) {}
    await fetchExploreData(true);
    renderPersonalizedKesfet({ refreshAsync: true });
    showToast(getAppLanguage() === 'en' ? 'Explore feed refreshed' : 'Keşfet akışı güncellendi', 'success');
  } finally {
    if (icon) icon.classList.remove('animate-spin');
  }
}
window.refreshPersonalizedExplore = refreshPersonalizedExplore;

function renderFreshReleasesGrid() {
  renderPersonalizedAlbumsGrid();
  const grid = document.getElementById('fresh-releases-grid');
  if (!grid) return;
  grid.innerHTML = '';

  FRESH_RELEASES.forEach((track) => {
    const thumb = safeUrl(getTrackThumbnail(track), './kurfamuzik_logo.png');
    const safeTitle = escapeHtml(track.title || 'Şarkı');
    const safeArtist = escapeHtml(extractCleanArtistFromTrack(track) || track.artist || 'Sanatçı');
    const safeTag = escapeHtml(track.tag || 'Yeni');
    const card = document.createElement('div');
    card.className = "group relative rounded-2xl bg-surface-container-lowest p-3 shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer border border-transparent hover:border-surface-container";
    card.innerHTML = `
      <div class="relative w-full aspect-video rounded-xl overflow-hidden mb-2.5 bg-surface-container-high">
        <img src="${thumb}" alt="${safeTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/75 backdrop-blur-sm text-white text-[10px] font-bold">
          ${safeTag}
        </div>
        <button type="button" class="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div class="w-12 h-12 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all">
            <span class="material-symbols-outlined text-[28px]">play_arrow</span>
          </div>
        </button>
      </div>
      <div class="flex items-start justify-between gap-2">
        <div class="flex flex-col min-w-0 flex-1">
          <h3 class="text-xs md:text-sm font-bold text-on-surface truncate group-hover:text-primary transition-colors">${safeTitle}</h3>
          <p class="text-[11px] text-on-surface-variant truncate font-medium">${safeArtist}</p>
        </div>
        <button type="button" class="w-7 h-7 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary btn-fresh-fav">
          <span class="material-symbols-outlined text-[16px]">${state.favorites.some(f => f.id === track.id) ? 'favorite' : 'favorite_border'}</span>
        </button>
      </div>
    `;
    card.onclick = () => {
      setPlaybackQueueContext(FRESH_RELEASES, track, t('explore.new_releases_title'), t('explore.new_releases_title').toUpperCase());
      playTrackById(track.id, track);
    };
    const favBtn = card.querySelector('.btn-fresh-fav');
    if (favBtn) {
      favBtn.onclick = (e) => {
        e.stopPropagation();
        toggleFavorite(track);
        const icon = favBtn.querySelector('.material-symbols-outlined');
        if (icon) {
          icon.textContent = state.favorites.some(f => f.id === track.id) ? 'favorite' : 'favorite_border';
        }
      };
    }
    grid.appendChild(card);
  });
}

function handleUrlParameters() {
  try {
    const cleanPath = String(window.location.pathname || '/').replace(/\/+$/, '').toLowerCase();
    const pathMap = {
      '/kesfet': 'kesfet',
      '/arama': 'arama',
      '/kutuphane': 'kutuphanem',
      '/kutuphanem': 'kutuphanem',
      '/calar': 'calma-listeleri',
      '/calma-listeleri': 'calma-listeleri'
    };
    const routeTab = pathMap[cleanPath];
    const params = new URLSearchParams(window.location.search);
    const searchQuery = String(params.get('q') || '').trim();
    const rawSongId = params.get('song');
    const songId = safeYtId(rawSongId);

    if (searchQuery) {
      switchTab('arama', false);
      if (DOM.topSearchInput) DOM.topSearchInput.value = searchQuery;
      const aramaInp = document.getElementById('arama-page-search-input');
      if (aramaInp) aramaInp.value = searchQuery;
      executeSearchImmediate(searchQuery, true);
    } else if (routeTab) {
      switchTab(routeTab, false);
    } else {
      updatePageSeoMeta({ tabId: state.currentTab || 'kesfet', updateUrl: false });
    }

    if (songId) {
      const existing = (typeof CURATED_TRACKS !== 'undefined' && CURATED_TRACKS.find ? CURATED_TRACKS.find(t => (t.id === songId || t.ytId === songId)) : null) ||
                       (typeof FRESH_RELEASES !== 'undefined' && FRESH_RELEASES.find ? FRESH_RELEASES.find(t => (t.id === songId || t.ytId === songId)) : null) ||
                       (state.queue || []).find(t => (t.id === songId || t.ytId === songId));
      const sharedTrack = existing || {
        id: songId,
        ytId: songId,
        title: "Paylaşılan Parça",
        artist: "Kurfamüzik",
        duration: "3:30",
        thumbnail: `https://i.ytimg.com/vi/${songId}/hqdefault.jpg`
      };
      state.currentTrack = sharedTrack;
      if (!state.queue.some(t => t.id === sharedTrack.id)) {
        state.queue.unshift(sharedTrack);
        state.queueIndex = 0;
        saveQueueState();
      } else {
        state.queueIndex = state.queue.findIndex(t => t.id === sharedTrack.id);
      }

      if (!existing) {
        fetch(`https://www.youtube.com/oembed?url=${encodeURIComponent('https://www.youtube.com/watch?v=' + songId)}&format=json`)
          .then(r => (r.ok ? r.json() : null))
          .then(meta => {
            if (!meta || !meta.title) return;
            sharedTrack.title = meta.title;
            sharedTrack.artist = meta.author_name || sharedTrack.artist;
            if (state.currentTrack && state.currentTrack.id === songId) {
              state.currentTrack.title = sharedTrack.title;
              state.currentTrack.artist = sharedTrack.artist;
              updatePlayerTrackUI(state.currentTrack);
              updateLyricsDisplay();
            }
          }).catch(() => {});
      }

      playTrackById(songId, sharedTrack);
    }
  } catch (e) {}
}

// =============================================================================
// 13.6 MOBILE PLAYER REDIRECT (CANVAS MODE REMOVED FOR LOW-END PERFORMANCE)
// =============================================================================

try { localStorage.removeItem('kurfa_canvas_mode'); } catch (_) {}

function openMobileNowPlaying() {
  switchTab('calma-listeleri');
}

// =============================================================================
// 13.7 CUSTOM PLAYLISTS MANAGEMENT (LOCAL-FIRST & CLOUD SYNCED)
// =============================================================================

function saveCustomPlaylists() {
  safeSetStorage('kurfa_custom_playlists', JSON.stringify(state.customPlaylists));
  updateKutuphaneBadges();
  scheduleFirebaseCloudSync();
  if (typeof scheduleSaveUserDataToDesktop === 'function') scheduleSaveUserDataToDesktop();
}

function renderCustomPlaylistsGrid(filterText) {
  const grid = document.getElementById('custom-playlists-grid');
  if (!grid) return;
  grid.innerHTML = '';
  grid.classList.toggle('kurfa-lib-list-mode', state.libraryViewMode === 'list');

  const filterInput = document.getElementById('library-playlist-filter-input');
  const cleanFilter = String(filterText !== undefined ? filterText : (filterInput ? filterInput.value : '')).trim().toLowerCase();

  const allPlaylists = state.customPlaylists || [];
  if (allPlaylists.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full px-4 py-4 rounded-2xl bg-surface-container-lowest border border-surface-container flex items-center gap-3">
        <div class="w-9 h-9 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
          <span class="material-symbols-outlined text-[20px]">playlist_add</span>
        </div>
        <div class="min-w-0 flex-1">
          <h3 class="text-xs sm:text-sm font-bold text-on-surface truncate">${escapeHtml(t('library.no_playlists_title'))}</h3>
          <p class="text-[11px] text-on-surface-variant truncate">${escapeHtml(t('library.no_playlists_desc'))}</p>
        </div>
      </div>
    `;
    return;
  }

  const playlists = cleanFilter
    ? allPlaylists.filter((pl) => String(pl.name || '').toLowerCase().includes(cleanFilter))
    : allPlaylists;

  if (playlists.length === 0) {
    grid.innerHTML = `
      <div class="col-span-full px-4 py-4 rounded-2xl bg-surface-container-lowest border border-surface-container text-center text-xs text-on-surface-variant">
        "${escapeHtml(cleanFilter)}" ile eşleşen çalma listesi bulunamadı
      </div>
    `;
    return;
  }

  const defaultPlName = getAppLanguage() === 'en' ? 'Playlist' : 'Çalma Listesi';
  playlists.forEach(pl => {
    const card = document.createElement('div');
    card.className = "group relative rounded-2xl bg-surface-container-lowest p-3 shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer border border-transparent hover:border-surface-container";

    const rawThumb = (pl.tracks && pl.tracks.length > 0 && pl.tracks[0].thumbnail)
      ? pl.tracks[0].thumbnail
      : './kurfamuzik_logo.png';
    const thumb = safeUrl(rawThumb, './kurfamuzik_logo.png');
    const safeName = escapeHtml(pl.name || defaultPlName);
    const trackCount = (pl.tracks && pl.tracks.length) || 0;

    card.innerHTML = `
      <div class="relative w-full aspect-square rounded-xl overflow-hidden mb-2.5 bg-surface-container-high">
        <img src="${thumb}" alt="${safeName}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <button type="button" class="btn-play-custom-pl absolute right-2.5 bottom-2.5 w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:scale-110 active:scale-95" title="${escapeHtml(t('library.play_all'))}">
          <span class="material-symbols-outlined text-[24px] filled">play_arrow</span>
        </button>
      </div>
      <h3 class="text-xs sm:text-sm font-bold text-on-surface truncate group-hover:text-primary transition-colors">${safeName}</h3>
      <p class="text-[11px] text-on-surface-variant truncate font-medium mt-0.5">${escapeHtml(t('library.tracks_count', { count: trackCount }))}</p>
    `;

    card.onclick = () => openCustomPlaylistDetail(pl.id);

    const playBtn = card.querySelector('.btn-play-custom-pl');
    if (playBtn) {
      playBtn.onclick = (e) => {
        e.stopPropagation();
        playCustomPlaylist(pl.id, false);
      };
    }

    grid.appendChild(card);
  });
}

let pendingAddPlaylistTrack = null;

function openCreatePlaylistModal(fromAddModal = false) {
  const modal = document.getElementById('create-playlist-modal');
  const card = document.getElementById('create-playlist-modal-card');
  const input = document.getElementById('create-playlist-name-input');
  if (!modal || !card) return;

  if (!fromAddModal) {
    pendingAddPlaylistTrack = null;
  }

  if (input) {
    input.value = '';
    setTimeout(() => input.focus(), 100);
  }

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');
}

function closeCreatePlaylistModal() {
  pendingAddPlaylistTrack = null;
  const modal = document.getElementById('create-playlist-modal');
  const card = document.getElementById('create-playlist-modal-card');
  if (!modal || !card) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  card.classList.add('scale-95');
  card.classList.remove('scale-100');
}

function submitCreatePlaylist() {
  const input = document.getElementById('create-playlist-name-input');
  const name = input ? input.value.trim() : '';
  if (!name) {
    showToast(t('toast.enter_playlist_name'));
    return;
  }

  const newPl = {
    id: 'pl_' + Date.now() + '_' + Math.random().toString(36).substr(2, 5),
    name: name,
    createdAt: Date.now(),
    tracks: []
  };

  if (pendingAddPlaylistTrack) {
    newPl.tracks.push({
      id: pendingAddPlaylistTrack.id,
      ytId: safeYtId(pendingAddPlaylistTrack.ytId || pendingAddPlaylistTrack.id) || null,
      title: pendingAddPlaylistTrack.title,
      artist: pendingAddPlaylistTrack.artist,
      thumbnail: safeUrl(pendingAddPlaylistTrack.thumbnail, './kurfamuzik_logo.png'),
      duration: pendingAddPlaylistTrack.duration || "3:30"
    });
    showToast(t('toast.playlist_created_added', { name }));
    pendingAddPlaylistTrack = null;
  } else {
    showToast(t('toast.playlist_created', { name }));
  }

  state.customPlaylists.push(newPl);
  saveCustomPlaylists();
  closeCreatePlaylistModal();
  closeAddToPlaylistModal();
  renderCustomPlaylistsGrid();
}

function openAddToPlaylistModal(trackOrId) {
  let target = null;
  if (typeof trackOrId === 'object' && trackOrId !== null) {
    target = trackOrId;
  } else if (typeof trackOrId === 'string') {
    target = state.queue.find(t => t.id === trackOrId) ||
             getCuratedTracks().find(t => t.id === trackOrId) ||
             state.favorites.find(t => t.id === trackOrId) ||
             state.downloads.find(t => t.id === trackOrId) ||
             state.currentSearchResults.find(t => t.id === trackOrId);
  }
  if (!target) target = state.currentTrack;

  if (!target) {
    showToast(t('toast.select_track_first'));
    return;
  }
  pendingAddPlaylistTrack = target;

  const modal = document.getElementById('add-to-playlist-modal');
  const card = document.getElementById('add-to-playlist-modal-card');
  if (!modal || !card) return;

  const thumbEl = document.getElementById('atp-track-thumb');
  const titleEl = document.getElementById('atp-track-title');
  const artistEl = document.getElementById('atp-track-artist');

  const fallbackTitle = getAppLanguage() === 'en' ? 'Track' : 'Şarkı';
  const fallbackArtist = getAppLanguage() === 'en' ? 'Artist' : 'Sanatçı';
  const defaultPlName = getAppLanguage() === 'en' ? 'Playlist' : 'Çalma Listesi';
  if (thumbEl) thumbEl.src = safeUrl(target.thumbnail, './kurfamuzik_logo.png');
  if (titleEl) titleEl.textContent = target.title || fallbackTitle;
  if (artistEl) artistEl.textContent = target.artist || fallbackArtist;

  const listContainer = document.getElementById('atp-playlists-list');
  if (listContainer) {
    listContainer.innerHTML = '';
    const playlists = state.customPlaylists || [];

    if (playlists.length === 0) {
      listContainer.innerHTML = `
        <div class="py-4 text-center text-xs text-on-surface-variant">
          ${escapeHtml(t('atp.no_lists'))}
        </div>
      `;
    } else {
      playlists.forEach(pl => {
        const hasTrack = (pl.tracks || []).some(t => t.id === target.id);
        const item = document.createElement('div');
        item.className = "flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-container cursor-pointer transition-colors";
        item.innerHTML = `
          <div class="flex items-center gap-2.5 min-w-0">
            <span class="material-symbols-outlined text-[20px] text-primary">queue_music</span>
            <div class="flex flex-col min-w-0">
              <span class="text-xs font-bold text-on-surface truncate">${escapeHtml(pl.name || defaultPlName)}</span>
              <span class="text-[10px] text-on-surface-variant font-medium">${escapeHtml(t('library.tracks_count', { count: (pl.tracks || []).length }))}</span>
            </div>
          </div>
          <span class="material-symbols-outlined text-[18px] ${hasTrack ? 'text-primary' : 'text-on-surface-variant'}">${hasTrack ? 'check_circle' : 'add'}</span>
        `;
        item.onclick = () => {
          addTrackToPlaylist(pl.id, target);
          closeAddToPlaylistModal();
        };
        listContainer.appendChild(item);
      });
    }
  }

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');
}

function closeAddToPlaylistModal() {
  const modal = document.getElementById('add-to-playlist-modal');
  const card = document.getElementById('add-to-playlist-modal-card');
  if (!modal || !card) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  card.classList.add('scale-95');
  card.classList.remove('scale-100');
}

function addTrackToPlaylist(playlistId, track) {
  const pl = state.customPlaylists.find(p => p.id === playlistId);
  if (!pl) return;
  if (!Array.isArray(pl.tracks)) pl.tracks = [];

  const existingIdx = pl.tracks.findIndex(t => t.id === track.id);
  if (existingIdx !== -1) {
    showToast(t('toast.track_already_playlist', { title: track.title, name: pl.name }));
    return;
  }

  pl.tracks.push({
    id: track.id,
    ytId: safeYtId(track.ytId || track.id) || null,
    title: track.title,
    artist: track.artist,
    thumbnail: safeUrl(track.thumbnail, './kurfamuzik_logo.png'),
    duration: track.duration || "3:30"
  });

  saveCustomPlaylists();
  showToast(t('toast.track_added_playlist', { title: track.title, name: pl.name }));
  renderCustomPlaylistsGrid();
}

function openCustomPlaylistDetail(playlistId) {
  const pl = state.customPlaylists.find(p => p.id === playlistId);
  if (!pl) return;
  state.activeCustomPlaylistId = playlistId;

  const detailView = document.getElementById('custom-playlist-detail-view');
  const grid = document.getElementById('custom-playlists-grid');
  if (!detailView) return;

  const titleEl = document.getElementById('cpd-title');
  const metaEl = document.getElementById('cpd-meta');
  const playAllBtn = document.getElementById('cpd-btn-play-all');
  const deleteBtn = document.getElementById('cpd-btn-delete');
  const tracksTable = document.getElementById('custom-playlist-tracks-table');

  if (titleEl) titleEl.textContent = pl.name;
  if (metaEl) metaEl.textContent = t('library.tracks_count', { count: (pl.tracks || []).length });

  if (playAllBtn) {
    playAllBtn.onclick = () => playCustomPlaylist(playlistId, false);
  }
  if (deleteBtn) {
    deleteBtn.onclick = () => {
      const msg = getAppLanguage() === 'en'
        ? `Are you sure you want to delete "${pl.name}" playlist?`
        : `"${pl.name}" çalma listesini silmek istediğinize emin misiniz?`;
      if (confirm(msg)) {
        deleteCustomPlaylist(playlistId);
      }
    };
  }

  if (tracksTable) {
    tracksTable.innerHTML = '';
    const tracks = pl.tracks || [];
    const currentId = (state.currentTrack && state.currentTrack.id) ? state.currentTrack.id : null;
    const isEn = getAppLanguage() === 'en';

    if (tracks.length === 0) {
      tracksTable.innerHTML = `
        <div class="py-8 text-center text-xs text-on-surface-variant">
          ${escapeHtml(t('library.empty_custom_list'))}
        </div>
      `;
    } else {
      tracks.forEach((track, index) => {
        const isCurrent = Boolean(currentId && currentId === track.id);
        const isPlayingCurrent = isCurrent && state.isPlaying;
        const thumb = safeUrl(track.thumbnail, './kurfamuzik_logo.png');
        const safeTitle = escapeHtml(formatCleanTrackTitle(track.title) || (isEn ? 'Track' : 'Şarkı'));
        const safeArtist = escapeHtml(track.artist || (isEn ? 'Artist' : 'Sanatçı'));
        const safeDur = escapeHtml(track.duration || '3:30');
        const row = document.createElement('div');
        row.className = `track-row flex items-center justify-between gap-2 p-2 rounded-xl hover:bg-surface-container transition-colors group cursor-pointer ${isCurrent ? 'active' : ''}`;
        row.dataset.trackId = track.id || '';
        row.dataset.trackIdx = String(index + 1);
        row.innerHTML = `
          <div class="flex items-center gap-3 min-w-0 flex-1 pr-3 overflow-hidden">
            <span class="w-5 text-center text-xs font-bold text-on-surface-variant font-mono track-idx-num flex items-center justify-center flex-shrink-0">${isCurrent ? renderMiniEqBarsHtml(isPlayingCurrent) : (index + 1)}</span>
            <img src="${thumb}" alt="${safeTitle}" class="w-9 h-9 rounded-lg object-cover flex-shrink-0" loading="lazy" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
            <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
              <div class="flex items-center gap-1.5 min-w-0">
                <span class="kurfa-row-title text-xs font-bold text-on-surface truncate block group-hover:text-primary transition-colors">${safeTitle}</span>
                ${isCurrent ? renderPlayingPillHtml() : ''}
              </div>
              <span class="kurfa-row-artist text-[11px] text-on-surface-variant truncate block">${safeArtist}</span>
            </div>
          </div>
          <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 pl-2">
            <span class="text-xs text-on-surface-variant font-mono">${safeDur}</span>
            <button type="button" class="btn-remove-track w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-error opacity-0 group-hover:opacity-100 transition-opacity" title="${escapeHtml(t('queue.remove'))}">
              <span class="material-symbols-outlined text-[18px]">close</span>
            </button>
          </div>
        `;

        row.onclick = () => {
          setPlaybackQueueContext(tracks, track, pl.name, isEn ? 'CUSTOM PLAYLIST' : 'ÖZEL ÇALMA LİSTESİ');
          playTrackById(track.id, track);
        };

        const removeBtn = row.querySelector('.btn-remove-track');
        if (removeBtn) {
          removeBtn.onclick = (e) => {
            e.stopPropagation();
            removeTrackFromCustomPlaylist(playlistId, track.id);
          };
        }

        tracksTable.appendChild(row);
      });
    }
  }

  if (grid) grid.classList.add('hidden');
  detailView.classList.remove('hidden');
}

function closeCustomPlaylistDetail() {
  state.activeCustomPlaylistId = null;
  const detailView = document.getElementById('custom-playlist-detail-view');
  const grid = document.getElementById('custom-playlists-grid');
  if (detailView) detailView.classList.add('hidden');
  if (grid) grid.classList.remove('hidden');
}

function deleteCustomPlaylist(playlistId) {
  state.customPlaylists = state.customPlaylists.filter(p => p.id !== playlistId);
  saveCustomPlaylists();
  closeCustomPlaylistDetail();
  renderCustomPlaylistsGrid();
  showToast(t('toast.playlist_deleted'));
}

function removeTrackFromCustomPlaylist(playlistId, trackId) {
  const pl = state.customPlaylists.find(p => p.id === playlistId);
  if (!pl || !Array.isArray(pl.tracks)) return;
  pl.tracks = pl.tracks.filter(t => t.id !== trackId);
  saveCustomPlaylists();
  openCustomPlaylistDetail(playlistId);
  renderCustomPlaylistsGrid();
  showToast(t('toast.track_removed_playlist'));
}

function playCustomPlaylist(playlistId, shuffle = false) {
  const pl = state.customPlaylists.find(p => p.id === playlistId);
  if (!pl || !pl.tracks || pl.tracks.length === 0) {
    showToast(getAppLanguage() === 'en' ? 'This playlist has no tracks yet' : 'Bu çalma listesinde henüz şarkı yok');
    return;
  }

  if (shuffle) {
    state.isShuffle = true;
    syncShuffleRepeatUI();
  }
  const startIdx = shuffle ? Math.floor(Math.random() * pl.tracks.length) : 0;
  setPlaybackQueueContext(pl.tracks, startIdx, pl.name, getAppLanguage() === 'en' ? 'CUSTOM PLAYLIST' : 'ÖZEL ÇALMA LİSTESİ');

  const firstTrack = state.queue[state.queueIndex] || state.queue[0];
  if (firstTrack) {
    playTrackById(firstTrack.id, firstTrack);
    showToast(`${pl.name} (${t('library.tracks_count', { count: state.queue.length })})`);
  }
}

// =============================================================================
// 13.7.5 SPOTIFY PLAYLIST IMPORTER & PLAYBACK ENGINE
// =============================================================================

function saveSpotifyPlaylists() {
  safeSetStorage('kurfa_spotify_playlists', JSON.stringify(state.spotifyPlaylists || []));
  if (typeof scheduleSaveUserDataToDesktop === 'function') scheduleSaveUserDataToDesktop();
}

async function importSpotifyPlaylist(explicitUrl) {
  const input = document.getElementById('spotify-import-input');
  const statusEl = document.getElementById('spotify-import-status');
  const importBtn = document.getElementById('btn-spotify-import');
  const isEn = getAppLanguage() === 'en';

  const rawUrl = (explicitUrl || (input ? input.value : '')).trim();
  if (!rawUrl) {
    if (statusEl) {
      statusEl.textContent = isEn ? 'Please enter a valid Spotify link.' : 'Lütfen geçerli bir Spotify bağlantısı girin.';
      statusEl.className = 'text-xs font-semibold text-error block';
    }
    showToast(isEn ? 'Please enter a Spotify link' : 'Lütfen bir Spotify bağlantısı girin');
    return;
  }

  if (statusEl) {
    statusEl.textContent = isEn ? 'Parsing Spotify playlist, please wait...' : 'Spotify çalma listesi ayrıştırılıyor, lütfen bekleyin...';
    statusEl.className = 'text-xs font-semibold text-primary block';
  }
  if (importBtn) {
    importBtn.disabled = true;
    importBtn.classList.add('opacity-70');
  }

  try {
    const res = await fetch(`${API_BASE}/api/spotify?url=${encodeURIComponent(rawUrl)}&_t=${Date.now()}`);
    const data = await res.json();

    if (!res.ok || !data.success) {
      throw new Error(data.error || (isEn ? 'Failed to load playlist' : 'Çalma listesi yüklenemedi'));
    }

    const existingIdx = (state.spotifyPlaylists || []).findIndex(p => p.id === data.id);
    const cleanCover = safeUrl(data.cover, './kurfamuzik_logo.png');
    const newEntry = {
      id: data.id,
      title: data.title,
      subtitle: data.subtitle,
      cover: cleanCover,
      trackCount: data.trackCount || (data.tracks ? data.tracks.length : 0),
      tracks: Array.isArray(data.tracks)
        ? data.tracks.map(t => ({ ...t, thumbnail: safeUrl(t.thumbnail, cleanCover) }))
        : [],
      importedAt: new Date().toISOString()
    };

    if (existingIdx !== -1) {
      state.spotifyPlaylists[existingIdx] = newEntry;
      showToast(isEn ? `"${data.title}" playlist updated!` : `"${data.title}" listesi güncellendi!`);
    } else {
      if (!Array.isArray(state.spotifyPlaylists)) state.spotifyPlaylists = [];
      state.spotifyPlaylists.unshift(newEntry);
      showToast(isEn ? `"${data.title}" added to your Spotify library!` : `"${data.title}" Spotify kütüphanenize eklendi!`);
    }

    saveSpotifyPlaylists();
    if (input) input.value = '';
    if (statusEl) {
      statusEl.textContent = isEn
        ? `"${data.title}" (${t('library.tracks_count', { count: newEntry.trackCount })}) imported!`
        : `"${data.title}" (${newEntry.trackCount} şarkı) başarıyla eklendi!`;
      statusEl.className = 'text-xs font-semibold text-green-500 block';
      setTimeout(() => { if (statusEl) statusEl.classList.add('hidden'); }, 4000);
    }

    renderSpotifyPlaylistsGrid();
    updateKutuphaneBadges();
    openSpotifyPlaylistDetail(data.id);
  } catch (err) {
    console.error('Spotify import error:', err);
    if (statusEl) {
      statusEl.textContent = `${isEn ? 'Error' : 'Hata'}: ${err.message || (isEn ? 'Could not read Spotify link' : 'Spotify bağlantısı okunamadı')}`;
      statusEl.className = 'text-xs font-semibold text-error block';
    }
    showToast(`${isEn ? 'Spotify Error' : 'Spotify Hatası'}: ${err.message || (isEn ? 'Failed' : 'Okunamadı')}`);
  } finally {
    if (importBtn) {
      importBtn.disabled = false;
      importBtn.classList.remove('opacity-70');
    }
  }
}

function renderSpotifyPlaylistsGrid() {
  const container = document.getElementById('spotify-playlists-grid');
  if (!container) return;
  container.innerHTML = '';

  const playlists = state.spotifyPlaylists || [];
  if (playlists.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 flex flex-col items-center justify-center text-center p-6 rounded-2xl bg-surface-container-lowest border border-dashed border-surface-container">
        <div class="w-14 h-14 rounded-2xl bg-green-500/10 text-green-500 flex items-center justify-center mb-3">
          <span class="material-symbols-outlined text-[28px]">album</span>
        </div>
        <h3 class="text-sm font-bold text-on-surface">${escapeHtml(t('library.no_spotify_title'))}</h3>
        <p class="text-xs text-on-surface-variant max-w-sm mt-1">
          ${escapeHtml(t('library.no_spotify_desc'))}
        </p>
      </div>
    `;
    return;
  }

  playlists.forEach(pl => {
    const card = document.createElement('div');
    card.className = "group relative bg-surface-container-lowest p-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col gap-2 border border-surface-container/60 hover:border-green-500/40";
    card.onclick = () => openSpotifyPlaylistDetail(pl.id);

    const coverUrl = safeUrl(pl.cover, './kurfamuzik_logo.png');
    const safePlTitle = escapeHtml(pl.title || 'Spotify');
    const count = pl.trackCount || (pl.tracks ? pl.tracks.length : 0);

    card.innerHTML = `
      <div class="relative w-full aspect-square rounded-xl overflow-hidden bg-surface-container-high">
        <img src="${coverUrl}" alt="${safePlTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <button type="button" aria-label="${escapeHtml(t('library.play_all'))}" class="btn-play-card absolute bottom-2 right-2 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center shadow-lg transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all hover:scale-105 active:scale-95" title="${escapeHtml(t('library.play_all'))}">
          <span class="material-symbols-outlined text-[22px] filled">play_arrow</span>
        </button>
      </div>
      <div class="flex flex-col min-w-0">
        <h3 class="text-xs font-bold text-on-surface truncate group-hover:text-green-500 transition-colors">${safePlTitle}</h3>
        <p class="text-[11px] text-on-surface-variant truncate">${escapeHtml(t('library.tracks_count', { count }))} • Spotify</p>
      </div>
    `;

    const playBtn = card.querySelector('.btn-play-card');
    if (playBtn) {
      playBtn.onclick = (e) => {
        e.stopPropagation();
        playSpotifyPlaylist(pl.id, false);
      };
    }

    container.appendChild(card);
  });
}

let spotifyThumbEpoch = 0;
let spotifyThumbAbortController = null;

function openSpotifyPlaylistDetail(playlistId) {
  const pl = (state.spotifyPlaylists || []).find(p => p.id === playlistId);
  if (!pl) return;
  state.activeSpotifyPlaylistId = playlistId;
  const isEn = getAppLanguage() === 'en';

  const detailView = document.getElementById('spotify-playlist-detail-view');
  const grid = document.getElementById('spotify-playlists-grid');
  if (!detailView) return;

  const titleEl = document.getElementById('spd-title');
  const subtitleEl = document.getElementById('spd-subtitle');
  const metaEl = document.getElementById('spd-meta');
  const coverEl = document.getElementById('spd-cover');
  const playAllBtn = document.getElementById('spd-btn-play-all');
  const deleteBtn = document.getElementById('spd-btn-delete');
  const tracksTable = document.getElementById('spotify-playlist-tracks-table');

  const safeCover = safeUrl(pl.cover, './kurfamuzik_logo.png');
  if (titleEl) titleEl.textContent = pl.title;
  if (subtitleEl) subtitleEl.textContent = pl.subtitle || '';
  if (metaEl) metaEl.textContent = t('library.tracks_count', { count: (pl.tracks || []).length });
  if (coverEl) coverEl.src = safeCover;

  if (playAllBtn) {
    playAllBtn.onclick = () => playSpotifyPlaylist(playlistId, false);
  }
  const refreshBtn = document.getElementById('spd-btn-refresh');
  if (refreshBtn) {
    refreshBtn.onclick = () => refreshSpotifyPlaylist(playlistId);
  }
  if (deleteBtn) {
    deleteBtn.onclick = () => {
      const msg = isEn
        ? `Are you sure you want to remove "${pl.title}" from your library?`
        : `"${pl.title}" Spotify listesini kütüphanenizden kaldırmak istediğinize emin misiniz?`;
      if (confirm(msg)) {
        deleteSpotifyPlaylist(playlistId);
      }
    };
  }

  // Auto-heal old cached playlists that contain random YouTube mix videos
  if (Array.isArray(pl.tracks) && pl.tracks.some(t => /kar\u0131\u015f\u0131k|t\u00fcm \u015fark\u0131lar|1 saat/i.test(t.title)) && !pl._autoHealed) {
    pl._autoHealed = true;
    setTimeout(() => refreshSpotifyPlaylist(playlistId), 400);
  }

  if (tracksTable) {
    tracksTable.innerHTML = '';
    const tracks = pl.tracks || [];
    const currentId = (state.currentTrack && state.currentTrack.id) ? state.currentTrack.id : null;
    const currentYt = (state.currentTrack && state.currentTrack.ytId) ? state.currentTrack.ytId : null;

    if (tracks.length === 0) {
      tracksTable.innerHTML = `
        <div class="py-8 text-center text-xs text-on-surface-variant">
          ${escapeHtml(t('library.empty_spotify_list'))}
        </div>
      `;
    } else {
      tracks.forEach((track, index) => {
        const isCurrent = Boolean(
          (currentId && (currentId === track.id || (track.ytId && currentId === track.ytId))) ||
          (currentYt && track.ytId && currentYt === track.ytId)
        );
        const isPlayingCurrent = isCurrent && state.isPlaying;
        const safeThumb = safeUrl(track.thumbnail || safeCover, safeCover);
        const safeSpId = escapeHtml(String(track.id || ''));
        const safeTrackTitle = escapeHtml(formatCleanTrackTitle(track.title) || (isEn ? 'Track' : 'Şarkı'));
        const safeTrackArtist = escapeHtml(track.artist || (isEn ? 'Artist' : 'Sanatçı'));
        const safeTrackDur = escapeHtml(track.duration || '3:30');

        const row = document.createElement('div');
        row.className = `track-row flex items-center justify-between gap-2 p-2 rounded-xl hover:bg-surface-container transition-colors group cursor-pointer ${isCurrent ? 'active' : ''}`;
        row.dataset.trackId = track.ytId || track.id || '';
        row.dataset.trackIdx = String(index + 1);
        row.innerHTML = `
          <div class="flex items-center gap-3 min-w-0 flex-1 pr-3 overflow-hidden">
            <span class="w-5 text-center text-xs font-bold text-on-surface-variant font-mono track-idx-num flex items-center justify-center flex-shrink-0">${isCurrent ? renderMiniEqBarsHtml(isPlayingCurrent) : (index + 1)}</span>
            <img data-sp-id="${safeSpId}" src="${safeThumb}" alt="${safeTrackTitle}" class="w-9 h-9 rounded-lg object-cover flex-shrink-0" loading="lazy">
            <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
              <div class="flex items-center gap-1.5 min-w-0">
                <span class="kurfa-row-title text-xs font-bold text-on-surface truncate block group-hover:text-green-500 transition-colors">${safeTrackTitle}</span>
                ${isCurrent ? renderPlayingPillHtml() : ''}
              </div>
              <span class="kurfa-row-artist text-[11px] text-on-surface-variant truncate block">${safeTrackArtist}</span>
            </div>
          </div>
          <div class="flex items-center gap-1.5 sm:gap-2 flex-shrink-0 pl-2">
            <span class="text-xs text-on-surface-variant font-mono">${safeTrackDur}</span>
            <button type="button" class="btn-play-single w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-green-500 opacity-0 group-hover:opacity-100 transition-opacity" title="${escapeHtml(t('player.play_btn'))}">
              <span class="material-symbols-outlined text-[18px]">play_arrow</span>
            </button>
          </div>
        `;

        const imgEl = row.querySelector('img[data-sp-id]');
        if (imgEl) {
          imgEl.addEventListener('error', () => {
            if (imgEl.dataset.fallbackApplied === '2') return;
            if (imgEl.dataset.fallbackApplied !== '1' && safeCover && safeCover !== './kurfamuzik_logo.png') {
              imgEl.dataset.fallbackApplied = '1';
              imgEl.src = safeCover;
            } else {
              imgEl.dataset.fallbackApplied = '2';
              imgEl.src = './kurfamuzik_logo.png';
            }
          });
        }

        row.onclick = () => {
          playSpotifyTrack(track, tracks, index, pl.title);
        };

        tracksTable.appendChild(row);
      });
    }
  }

  if (grid) grid.classList.add('hidden');
  detailView.classList.remove('hidden');

  // Progressively resolve real YouTube covers and IDs in the background
  resolveVisibleSpotifyThumbnails(playlistId);
}

function resolveVisibleSpotifyThumbnails(playlistId) {
  if (spotifyThumbAbortController) {
    try { spotifyThumbAbortController.abort(); } catch (_) {}
  }
  const myEpoch = ++spotifyThumbEpoch;
  spotifyThumbAbortController = new AbortController();
  const { signal } = spotifyThumbAbortController;

  const pl = (state.spotifyPlaylists || []).find(p => p.id === playlistId);
  if (!pl || !Array.isArray(pl.tracks)) return;

  const pending = pl.tracks.filter(t => !t.ytId).slice(0, 30);
  if (pending.length === 0) return;

  let idx = 0;
  function step() {
    if (myEpoch !== spotifyThumbEpoch) return;
    if (signal.aborted) return;
    if (idx >= pending.length) return;
    if (state.activeSpotifyPlaylistId !== playlistId) return;

    const trk = pending[idx++];
    const query = `${trk.artist} ${trk.title} audio`.trim();
    kurfaSearchTracks(query, { filterSingles: true, signal })
      .then(d => {
        if (!d || myEpoch !== spotifyThumbEpoch || state.activeSpotifyPlaylistId !== playlistId) return;
        if (d.success && Array.isArray(d.results) && d.results.length > 0) {
          const best = pickBestYouTubeMatch(trk, d.results);
          const validBestId = best ? safeYtId(best.id) : null;
          if (validBestId) {
            trk.ytId = validBestId;
            const resolvedThumb = safeUrl(
              best.thumbnail,
              `https://i.ytimg.com/vi/${validBestId}/hqdefault.jpg`
            );
            if (!trk.thumbnail || trk.thumbnail.includes('kurfamuzik_logo') || trk.thumbnail === pl.cover) {
              trk.thumbnail = resolvedThumb;
              document.querySelectorAll('#spotify-playlist-tracks-table img[data-sp-id]').forEach(el => {
                if (el.getAttribute('data-sp-id') === String(trk.id)) {
                  el.src = resolvedThumb;
                }
              });
            }
            saveSpotifyPlaylists();
          }
        }
      })
      .catch(err => {
        if (err && err.name === 'AbortError') return;
      })
      .finally(() => {
        if (myEpoch === spotifyThumbEpoch && !signal.aborted && state.activeSpotifyPlaylistId === playlistId) {
          setTimeout(step, 200);
        }
      });
  }
  step();
}

async function refreshSpotifyPlaylist(playlistId) {
  const targetId = playlistId || state.activeSpotifyPlaylistId;
  const pl = (state.spotifyPlaylists || []).find(p => p.id === targetId);
  if (!pl) return;
  const isEn = getAppLanguage() === 'en';

  const refreshBtn = document.getElementById('spd-btn-refresh');
  if (refreshBtn) {
    refreshBtn.classList.add('animate-spin');
    refreshBtn.disabled = true;
  }
  showToast(isEn ? `Updating "${pl.title}"...` : `"${pl.title}" güncelleniyor...`);

  try {
    const isArtist = pl.type === 'artist' || (pl.id && pl.id.length === 22 && !pl.id.startsWith('37i'));
    const queryUrl = isArtist ? `https://open.spotify.com/artist/${pl.id}` : `https://open.spotify.com/playlist/${pl.id}`;
    const res = await fetch(`${API_BASE}/api/spotify?url=${encodeURIComponent(queryUrl)}&refresh=1&_t=${Date.now()}`);
    const data = await res.json();
    if (!res.ok || !data.success) throw new Error(data.error || (isEn ? 'Failed to update' : 'Güncellenemedi'));

    const cleanCover = safeUrl(data.cover, './kurfamuzik_logo.png');
    pl.title = data.title;
    pl.subtitle = data.subtitle;
    pl.cover = cleanCover;
    pl.trackCount = data.trackCount || (data.tracks ? data.tracks.length : 0);
    pl.tracks = Array.isArray(data.tracks)
      ? data.tracks.map(t => ({ ...t, thumbnail: safeUrl(t.thumbnail, cleanCover) }))
      : [];
    pl.importedAt = new Date().toISOString();

    saveSpotifyPlaylists();
    showToast(isEn ? `"${pl.title}" updated! (${t('library.tracks_count', { count: pl.trackCount })})` : `"${pl.title}" başarıyla güncellendi! (${pl.trackCount} şarkı)`);
    renderSpotifyPlaylistsGrid();
    if (state.activeSpotifyPlaylistId === targetId) {
      openSpotifyPlaylistDetail(targetId);
    }
  } catch (err) {
    console.error('Refresh spotify error:', err);
    showToast(`${isEn ? 'Update error' : 'Güncelleme hatası'}: ${err.message || (isEn ? 'Failed' : 'Okunamadı')}`);
  } finally {
    if (refreshBtn) {
      refreshBtn.classList.remove('animate-spin');
      refreshBtn.disabled = false;
    }
  }
}
window.refreshSpotifyPlaylist = refreshSpotifyPlaylist;

function closeSpotifyPlaylistDetail() {
  state.activeSpotifyPlaylistId = null;
  spotifyThumbEpoch++;
  if (spotifyThumbAbortController) {
    try { spotifyThumbAbortController.abort(); } catch (_) {}
    spotifyThumbAbortController = null;
  }
  const detailView = document.getElementById('spotify-playlist-detail-view');
  const grid = document.getElementById('spotify-playlists-grid');
  if (detailView) detailView.classList.add('hidden');
  if (grid) grid.classList.remove('hidden');
}

function deleteSpotifyPlaylist(playlistId) {
  state.spotifyPlaylists = (state.spotifyPlaylists || []).filter(p => p.id !== playlistId);
  saveSpotifyPlaylists();
  closeSpotifyPlaylistDetail();
  renderSpotifyPlaylistsGrid();
  updateKutuphaneBadges();
  showToast(getAppLanguage() === 'en' ? 'Spotify playlist removed from library' : 'Spotify listesi kütüphanenizden kaldırıldı');
}

function playSpotifyPlaylist(playlistId, shuffle = false) {
  const pl = (state.spotifyPlaylists || []).find(p => p.id === playlistId);
  if (!pl || !pl.tracks || pl.tracks.length === 0) {
    showToast(getAppLanguage() === 'en' ? 'This playlist has no tracks yet' : 'Bu çalma listesinde henüz şarkı yok');
    return;
  }

  if (shuffle) {
    state.isShuffle = true;
    syncShuffleRepeatUI();
  }
  const startIdx = shuffle ? Math.floor(Math.random() * pl.tracks.length) : 0;
  playSpotifyTrack(pl.tracks[startIdx], pl.tracks, startIdx, pl.title);
}

async function playSpotifyTrack(track, playlistTracks, index, playlistName) {
  if (!track) return;
  setPlaybackQueueContext(playlistTracks, track, playlistName || 'Spotify', getAppLanguage() === 'en' ? 'SPOTIFY PLAYLIST' : 'SPOTIFY ÇALMA LİSTESİ');
  renderQueueDrawerList();

  const playId = (track.ytId && safeYtId(track.ytId)) ? track.ytId : track.id;
  if (safeYtId(playId) && !String(playId).startsWith('sp-')) {
    playTrackById(playId, track);
    prefetchNextQueueTrack();
    return;
  }

  resolveAndPlaySpotifyTrack(track.id, track);
}

// =============================================================================
// 13.8 SMART AUTOPLAY & RADIO CONTINUATION
// =============================================================================

let isFetchingSmartRadio = false;

async function triggerSmartRadioContinue() {
  if (isFetchingSmartRadio) return;
  if (!state.currentTrack) {
    state.isPlaying = false;
    updatePlayPauseUI(false);
    return;
  }

  // Strict safety check: Never fetch recommendations if existing queue has remaining tracks!
  if (state.queue && state.queue.length > 0 && state.queueIndex < state.queue.length - 1) {
    playNextTrack({ isAutoAdvance: true });
    return;
  }

  // Isolate local/offline sessions from online Smart Radio continuation
  if (isLocalQueueSession()) {
    state.isPlaying = false;
    updatePlayPauseUI(false);
    showToast("Çalma listesinin sonuna gelindi");
    return;
  }

  const radioToken = currentPlaybackToken;
  isFetchingSmartRadio = true;

  // Clean artist and title for accurate search
  const rawArtist = (state.currentTrack.artist || '').trim();
  const rawTitle = (state.currentTrack.title || '').trim();

  const channelFilterRegex = /\b(netd müzik|vevo|official|music|records|audio|video|türkçe pop|youtube)\b/gi;
  let cleanArtist = rawArtist.replace(channelFilterRegex, '').replace(/[-–—]/g, ' ').trim();

  if (!cleanArtist && rawTitle.includes(' - ')) {
    const parts = rawTitle.split(' - ');
    cleanArtist = parts[0].replace(channelFilterRegex, '').trim();
  }

  if (!cleanArtist || cleanArtist.length < 2) {
    cleanArtist = 'Türkçe Pop Hit';
  }

  try {
    const existingIds = new Set();
    const existingTitles = new Set();
    (state.queue || []).forEach(t => {
      if (!t) return;
      if (t.id) existingIds.add(t.id);
      if (t.ytId) existingIds.add(t.ytId);
      if (t.title && t.artist) existingTitles.add(`${t.title.trim().toLowerCase()}|${t.artist.trim().toLowerCase()}`);
    });
    if (state.currentTrack) {
      if (state.currentTrack.id) existingIds.add(state.currentTrack.id);
      if (state.currentTrack.ytId) existingIds.add(state.currentTrack.ytId);
      if (state.currentTrack.title && state.currentTrack.artist) {
        existingTitles.add(`${state.currentTrack.title.trim().toLowerCase()}|${state.currentTrack.artist.trim().toLowerCase()}`);
      }
    }

    let foundTracks = [];
    let usedAutomix = false;
    const currentSeedYtId = safeYtId(state.currentTrack?.ytId) || safeYtId(state.currentTrack?.id);

    if (currentSeedYtId) {
      const mixCtrl = new AbortController();
      const mixTimeout = setTimeout(() => mixCtrl.abort(), 5000);
      try {
        const mixRes = await fetch(`${API_BASE}/api/automix?v=${encodeURIComponent(currentSeedYtId)}`, { signal: mixCtrl.signal });
        if (mixRes.ok) {
          const mixData = await mixRes.json();
          if (mixData && mixData.success && Array.isArray(mixData.tracks)) {
            const freshMix = mixData.tracks.filter(t => {
              if (!t || !t.id) return false;
              const candVid = safeYtId(t.ytId || t.id);
              if (!candVid || failedVideoIds.has(candVid)) return false;
              if (existingIds.has(candVid) || existingIds.has(t.id)) return false;
              const titleKey = `${(t.title || '').trim().toLowerCase()}|${(t.artist || '').trim().toLowerCase()}`;
              if (existingTitles.has(titleKey)) return false;
              existingIds.add(candVid);
              existingTitles.add(titleKey);
              return true;
            });
            if (freshMix.length > 0) {
              foundTracks = freshMix;
              usedAutomix = true;
            }
          }
        }
      } catch (mixErr) {
        if (mixErr && mixErr.name !== 'AbortError') {
          console.warn('Automix fetch fallback:', mixErr);
        }
      } finally {
        clearTimeout(mixTimeout);
      }
    }

    if (radioToken !== currentPlaybackToken || state.userPaused) return;

    const queries = [
      `${cleanArtist} radyo hit şarkılar`,
      'trend türkçe pop müzik',
      'türkiye popüler şarkılar'
    ];

    if (foundTracks.length === 0) {
      for (const q of queries) {
        if (radioToken !== currentPlaybackToken || state.userPaused) return;
        const ctrl = new AbortController();
        const timeoutId = setTimeout(() => ctrl.abort(), 4000);
        try {
          const data = await kurfaSearchTracks(q, { signal: ctrl.signal });
          if (data && data.success && Array.isArray(data.results)) {
            const fresh = data.results.filter(t => {
              if (!t || !t.id) return false;
              const candVid = safeYtId(t.ytId || t.id);
              if (candVid && failedVideoIds.has(candVid)) return false;
              if (existingIds.has(t.id)) return false;
              if (t.ytId && existingIds.has(t.ytId)) return false;
              const titleKey = `${(t.title || '').trim().toLowerCase()}|${(t.artist || '').trim().toLowerCase()}`;
              if (existingTitles.has(titleKey)) return false;
              return true;
            });
            if (fresh.length > 0) {
              foundTracks = fresh;
              break;
            }
          }
        } catch (err) {
          if (err && err.name !== 'AbortError') {
            console.warn("Smart radio cascade step error:", q, err);
          }
        } finally {
          clearTimeout(timeoutId);
        }
      }
    }

    if (radioToken !== currentPlaybackToken || state.userPaused) return;

    if (foundTracks.length > 0) {
      const toAdd = foundTracks.slice(0, usedAutomix ? 10 : 5);
      const firstAdded = toAdd[0];
      state.queue = cleanDeduplicateQueueArray([...state.queue, ...toAdd]);
      const foundIdx = firstAdded ? state.queue.findIndex(q => q.id === firstAdded.id) : -1;
      state.queueIndex = foundIdx !== -1 ? foundIdx : Math.max(0, state.queue.length - 1);
      state.playingContextSub = usedAutomix ? 'YOUTUBE MUSIC AUTOMIX' : 'AKILLI RADYO DEVAMI';
      state.playingContextTitle = usedAutomix && rawTitle ? `${rawTitle} Radyosu` : `${cleanArtist} Radyosu`;

      saveQueueState();
      renderQueueDrawerList();

      const nextTrack = state.queue[state.queueIndex];
      if (nextTrack) {
        playTrackById(nextTrack.id, nextTrack, 0, undefined, undefined, { isAutoAdvance: true });
        showToast(`${usedAutomix ? 'Automix' : 'Akıllı Radyo'}: ${nextTrack.title}`);
        return;
      }
    }
  } catch (e) {
    console.warn("Smart radio fetch error:", e);
  } finally {
    isFetchingSmartRadio = false;
  }

  state.isPlaying = false;
  updatePlayPauseUI(false);
  showToast("Çalma listesinin sonuna gelindi");
}

// =============================================================================
// 13.9 MOBILE BACKGROUND AUDIO & MEDIASESSION HARDENING
// =============================================================================

function toggleBackgroundAudioMode() {
  state.backgroundAudioMode = !state.backgroundAudioMode;
  safeSetStorage('kurfa_bg_audio', state.backgroundAudioMode ? 'true' : 'false');

  if (state.backgroundAudioMode) {
    showToast("Arka Planda Dinleme Modu Açıldı (Kilit ekranında çalmaya devam eder)");
  } else {
    showToast("Arka Planda Dinleme Modu Kapalı");
  }
}

// =============================================================================
// 13.10 GOOGLE ACCOUNT, PROFILE & LOCAL-FIRST BULUT SYNC
// =============================================================================

let firebaseDb = null;
let firebaseAuth = null;
let googleProviderInstance = null;
let firebaseSyncDebounceTimer = null;

const FIREBASE_CONFIG = window.firebaseConfig || {
  apiKey: "AIzaSyDuzJl34svShFUhQM72SpZaVTntvzayCso",
  authDomain: "kurfa-ai.firebaseapp.com",
  projectId: "kurfa-ai",
  storageBucket: "kurfa-ai.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:demo1234567890"
};

function initFirebaseSync() {
  // 1. If valid custom Firebase config exists in localStorage or window:
  let customConfig = null;
  try {
    const raw = localStorage.getItem('kurfa_firebase_config');
    if (raw) customConfig = JSON.parse(raw);
  } catch(e) {}

  const activeConfig = (customConfig && customConfig.apiKey) ? customConfig : FIREBASE_CONFIG;

  if (typeof firebase !== 'undefined' && activeConfig && activeConfig.apiKey) {
    try {
      if (!firebase.apps || firebase.apps.length === 0) {
        firebase.initializeApp(activeConfig);
      }
      firebaseDb = firebase.firestore();
      try {
        firebaseDb.settings({ experimentalForceLongPolling: true, merge: true });
      } catch(e) {}

      firebaseAuth = firebase.auth();
      try {
        firebaseAuth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
      } catch(pe) {}

      googleProviderInstance = new firebase.auth.GoogleAuthProvider();
      googleProviderInstance.setCustomParameters({ prompt: 'select_account' });

      // Check redirect result on load (e.g. mobile or redirect flow)
      if (firebaseAuth.getRedirectResult) {
        firebaseAuth.getRedirectResult().then(result => {
          if (result && result.user) {
            const user = result.user;
            const gUser = {
              name: user.displayName || (user.email ? user.email.split('@')[0] : "Google Kullanıcısı"),
              email: user.email || "",
              avatar: user.photoURL || state.profile.avatar,
              uid: user.uid
            };
            selectGoogleAccount(gUser);
            showToast(`Google ile giriş yapıldı: ${gUser.email || gUser.name}`);
          }
        }).catch(err => {
          if (err.code !== 'auth/missing-initial-state' && !err.message?.includes('missing initial state')) {
            console.warn("Redirect result error:", err);
          }
        });
      }

      firebaseAuth.onAuthStateChanged(user => {
        state.firebaseUser = user;
        if (user) {
          const gUser = {
            name: user.displayName || (user.email ? user.email.split('@')[0] : "Google Kullanıcısı"),
            email: user.email || "",
            avatar: user.photoURL || state.profile.avatar,
            uid: user.uid
          };
          state.googleUser = gUser;
          updateGoogleProfileUI(gUser);
          pullFirebaseLibraryOnce(user.uid);
        } else {
          updateGoogleProfileUI(state.googleUser);
        }
      });
    } catch(e) {
      console.warn("Firebase Init note:", e);
    }
  }

  // 2. Restore Google profile from Local-First storage
  if (state.googleUser) {
    updateGoogleProfileUI(state.googleUser);
  } else {
    updateGoogleProfileUI(null);
  }
}

function updateGoogleProfileUI(gUser) {
  const signedInBox = document.getElementById('profile-google-signed-in');
  const signedOutBox = document.getElementById('profile-google-signed-out');
  const badge = document.getElementById('profile-google-badge');
  const nameEl = document.getElementById('profile-google-name');
  const emailEl = document.getElementById('profile-google-email');
  const avatarEl = document.getElementById('profile-google-avatar');

  const topbarAvatar = document.getElementById('topbar-user-avatar');
  const topbarName = document.getElementById('topbar-user-name');
  const firebaseBadge = document.getElementById('firebase-sync-status-badge');
  const firebaseLoginBtn = document.getElementById('btn-firebase-login');
  const firebaseSyncBtn = document.getElementById('btn-firebase-sync-now');

  if (gUser && gUser.name) {
    if (signedInBox) {
      signedInBox.classList.remove('hidden');
      signedInBox.classList.add('flex');
    }
    if (signedOutBox) signedOutBox.classList.add('hidden');
    if (badge) {
      badge.textContent = "Google ile Bağlı";
      badge.className = "px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/20 text-primary";
    }
    if (nameEl) nameEl.textContent = gUser.name;
    if (emailEl) emailEl.textContent = gUser.email || "Google Hesabı";
    if (avatarEl && gUser.avatar) avatarEl.src = safeUrl(gUser.avatar, './kurfamuzik_logo.png');

    if (topbarAvatar && gUser.avatar) topbarAvatar.src = safeUrl(gUser.avatar, './kurfamuzik_logo.png');
    if (topbarName) topbarName.textContent = gUser.name;

    if (firebaseBadge) {
      firebaseBadge.textContent = `Bulut Eşitlendi (${gUser.name})`;
      firebaseBadge.className = "px-2 py-0.5 rounded-full text-[10px] font-bold bg-primary/20 text-primary";
    }
    if (firebaseLoginBtn) {
      firebaseLoginBtn.innerHTML = `
        <span class="material-symbols-outlined text-[16px]">logout</span>
        <span>Google Çıkış</span>
      `;
      firebaseLoginBtn.onclick = handleGoogleSignOut;
    }
    if (firebaseSyncBtn) {
      firebaseSyncBtn.classList.remove('hidden');
      firebaseSyncBtn.classList.add('inline-flex');
    }
  } else {
    if (signedInBox) {
      signedInBox.classList.add('hidden');
      signedInBox.classList.remove('flex');
    }
    if (signedOutBox) signedOutBox.classList.remove('hidden');
    if (badge) {
      badge.textContent = "Bağlı Değil";
      badge.className = "px-2 py-0.5 rounded-full text-[10px] font-bold bg-surface-container text-on-surface-variant";
    }
    if (topbarAvatar) {
      const avStr = String(state.profile.avatar || '');
      const cleanAv = (avStr && !avStr.includes('unsplash.com') && !avStr.endsWith('kurfamuzik_logo.png'))
        ? avStr
        : './kurfamuzik_logo_96.webp';
      topbarAvatar.src = safeUrl(cleanAv, './kurfamuzik_logo_96.webp');
    }
    if (topbarName) topbarName.textContent = state.profile.nickname || "Dinleyici";

    if (firebaseBadge) {
      firebaseBadge.textContent = "Yerel Hafıza Modu";
      firebaseBadge.className = "px-2 py-0.5 rounded-full text-[10px] font-bold bg-surface-container text-on-surface-variant";
    }
    if (firebaseLoginBtn) {
      firebaseLoginBtn.innerHTML = `
        <svg class="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
        <span>Google ile Giriş Yap</span>
      `;
      firebaseLoginBtn.onclick = handleGoogleSignIn;
    }
    if (firebaseSyncBtn) firebaseSyncBtn.classList.add('hidden');
  }
}

// =============================================================================
// 13.9 GOOGLE ACCOUNT CHOOSER (Gerçek Google Hesap Seçici)
// =============================================================================

const DEFAULT_GOOGLE_ACCOUNTS = [];

function getStoredGoogleAccounts() {
  try {
    const raw = localStorage.getItem('kurfa_google_accounts_list');
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch(e) {}
  return [...DEFAULT_GOOGLE_ACCOUNTS];
}

function saveStoredGoogleAccounts(list) {
  safeSetStorage('kurfa_google_accounts_list', JSON.stringify(list));
}

function openGoogleAccountChooser() {
  const modal = document.getElementById('google-account-chooser-modal');
  const card = document.getElementById('google-account-chooser-card');
  if (!modal || !card) return;

  renderGoogleAccountsList();

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');

  // Trigger Google GSI One-Tap if available in browser
  if (window.google && window.google.accounts && window.google.accounts.id) {
    try {
      window.google.accounts.id.prompt();
    } catch(e) {}
  }
}

function closeGoogleAccountChooser() {
  const modal = document.getElementById('google-account-chooser-modal');
  const card = document.getElementById('google-account-chooser-card');
  if (!modal || !card) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  card.classList.add('scale-95');
  card.classList.remove('scale-100');
}

function renderGoogleAccountsList() {
  const listEl = document.getElementById('g-accounts-list');
  if (!listEl) return;
  listEl.innerHTML = '';

  const accounts = getStoredGoogleAccounts();
  const currentEmail = (state.googleUser && state.googleUser.email) ? state.googleUser.email : null;

  if (accounts.length === 0) {
    listEl.innerHTML = `
      <div class="p-4 rounded-2xl bg-surface-container-low text-center text-xs text-on-surface-variant border border-surface-container">
        Bu cihazda henüz kayıtlı Google hesabı yok. Lütfen aşağıdaki butondan resmi Google penceresiyle giriş yapın.
      </div>
    `;
    return;
  }

  accounts.forEach((rawAcc) => {
    const acc = sanitizeGoogleAccount(rawAcc);
    if (!acc) return;
    const isCurrent = currentEmail && acc.email && currentEmail.toLowerCase() === acc.email.toLowerCase();
    const safeAvatar = safeUrl(acc.avatar, './kurfamuzik_logo.png');
    const safeName = escapeHtml(acc.name);
    const safeEmail = escapeHtml(acc.email);
    const card = document.createElement('div');
    card.className = `flex items-center justify-between p-3 rounded-2xl hover:bg-surface-container cursor-pointer transition-all border ${isCurrent ? 'border-primary bg-primary/10' : 'border-surface-container bg-surface-container-low'}`;
    card.innerHTML = `
      <div class="flex items-center gap-3 min-w-0">
        <img src="${safeAvatar}" alt="${safeName}" class="w-10 h-10 rounded-full object-cover border border-surface-container flex-shrink-0" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="flex flex-col min-w-0">
          <div class="flex items-center gap-1.5">
            <span class="text-xs font-bold text-on-surface truncate">${safeName}</span>
            ${isCurrent ? '<span class="px-2 py-0.5 rounded-full text-[9px] font-bold bg-primary text-on-primary">Aktif Hesap</span>' : ''}
          </div>
          <span class="text-[11px] text-on-surface-variant truncate">${safeEmail}</span>
        </div>
      </div>
      <span class="material-symbols-outlined text-[20px] ${isCurrent ? 'text-primary' : 'text-on-surface-variant'}">
        ${isCurrent ? 'check_circle' : 'chevron_right'}
      </span>
    `;
    card.onclick = () => selectGoogleAccount(acc);
    listEl.appendChild(card);
  });
}

let authPopupHandle = null;

function sanitizeGoogleAccount(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const name = typeof raw.name === 'string' && raw.name.trim()
    ? raw.name.trim().slice(0, 100)
    : 'Google Kullanıcısı';
  const email = typeof raw.email === 'string' ? raw.email.slice(0, 150).replace(/[^\w.@+-]/g, '') : '';
  const avatar = safeUrl(
    raw.avatar,
    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&q=80'
  );
  return {
    name,
    email,
    avatar,
    uid: typeof raw.uid === 'string' ? raw.uid.slice(0, 100) : 'google_' + Date.now()
  };
}

function selectGoogleAccount(acc) {
  if (!acc) return;
  const safeAcc = sanitizeGoogleAccount(acc);
  if (!safeAcc) return;
  state.googleUser = safeAcc;
  state.profile.nickname = safeAcc.name;
  if (safeAcc.avatar) state.profile.avatar = safeAcc.avatar;

  safeSetStorage('kurfa_google_user', JSON.stringify(safeAcc));
  safeSetStorage('kurfa_profile', JSON.stringify(state.profile));

  const list = getStoredGoogleAccounts();
  if (!list.some(a => a && a.email && safeAcc.email && a.email.toLowerCase() === safeAcc.email.toLowerCase())) {
    list.push(safeAcc);
    saveStoredGoogleAccounts(list);
  }

  updateGoogleProfileUI(safeAcc);
  updateProfileUI();
  scheduleFirebaseCloudSync();
  closeGoogleAccountChooser();
  showToast(`Google ile oturum açıldı: ${safeAcc.email || safeAcc.name}`);
}

function toggleCustomGoogleBox() {
  const box = document.getElementById('g-custom-account-box');
  if (!box) return;
  box.classList.toggle('hidden');
  if (!box.classList.contains('hidden')) {
    const nameInput = document.getElementById('g-custom-name-input');
    if (nameInput) nameInput.focus();
  }
}

function submitCustomGoogleAccount() {
  const nameInput = document.getElementById('g-custom-name-input');
  const emailInput = document.getElementById('g-custom-email-input');
  const name = nameInput ? nameInput.value.trim() : '';
  const email = emailInput ? emailInput.value.trim() : '';

  if (!name || !email) {
    showToast("Lütfen adınızı ve geçerli bir Google e-postanızı girin");
    return;
  }

  const newAcc = {
    name,
    email,
    avatar: "./kurfamuzik_logo.png",
    uid: "google_" + Date.now()
  };

  const list = getStoredGoogleAccounts();
  if (!list.some(a => a && a.email && a.email.toLowerCase() === email.toLowerCase())) {
    list.push(newAcc);
    saveStoredGoogleAccounts(list);
  }

  selectGoogleAccount(newAcc);
}

// Listen for authentic Google Auth popup success with strict origin & window check
window.addEventListener('message', (event) => {
  if (!window.location.origin || window.location.origin === 'null') return;
  if (event.origin !== window.location.origin) return;
  if (authPopupHandle && event.source !== authPopupHandle) return;

  if (event.data && event.data.type === 'KURFA_GOOGLE_AUTH_SUCCESS') {
    const acc = sanitizeGoogleAccount(event.data.user);
    if (acc) {
      selectGoogleAccount(acc);
    }
  }
});

async function handleGoogleSignIn() {
  if (window.location.protocol === 'file:') {
    showToast("Google ile Giriş özelliği yerel dosya (file://) üzerinden çalışmaz.");
    return;
  }

  showToast("Google hesap seçici açılıyor...");

  const w = 460;
  const h = 580;
  const left = Math.max(0, Math.round((window.screen.width - w) / 2));
  const top = Math.max(0, Math.round((window.screen.height - h) / 2));
  const authUrl = new URL('./google-auth.html', window.location.href).href;
  authPopupHandle = window.open(
    authUrl,
    'kurfaGoogleAuth',
    `width=${w},height=${h},top=${top},left=${left},menubar=no,toolbar=no,location=no,status=no,resizable=yes`
  );

  if (!authPopupHandle || authPopupHandle.closed || typeof authPopupHandle.closed === 'undefined') {
    openGoogleAccountChooser();
  }
}

let __syncDeckRafPending = false;
function scheduleSyncPersistentPlayerPosition() {
  const pDeck = document.getElementById('persistent-player-deck');
  const needsPositioning = typeof supportsDeckVideo === 'function' &&
    supportsDeckVideo(state.currentTrack) &&
    state.currentTab === 'calma-listeleri' &&
    state.deckVisualMode === 'video';
  if (!needsPositioning && (!pDeck || pDeck.dataset.deckPosMode === 'silent')) return;
  if (__syncDeckRafPending) return;
  __syncDeckRafPending = true;
  requestAnimationFrame(() => {
    __syncDeckRafPending = false;
    syncPersistentPlayerPosition();
  });
}

function syncPersistentPlayerPosition() {
  const pDeck = document.getElementById('persistent-player-deck');
  if (!pDeck) return;

  const slot = document.getElementById('deck-video-slot');
  const videoWrap = document.getElementById('deck-video-wrapper');
  const nativeVideoUsingSlot = state._activeMediaEngine === 'native-video' ||
    Boolean(DOM.videoEngine && DOM.videoEngine.getAttribute('src') && !DOM.videoEngine.classList.contains('hidden'));
  const videoAllowed = !nativeVideoUsingSlot &&
    supportsDeckVideo(state.currentTrack) &&
    state.currentTab === 'calma-listeleri' &&
    state.deckVisualMode === 'video' &&
    Boolean(slot) &&
    Boolean(videoWrap && !videoWrap.classList.contains('hidden') && videoWrap.style.display !== 'none');

  if (videoAllowed && slot) {
    const rect = slot.getBoundingClientRect();
    const headerEl = document.querySelector('header');
    const headerBottom = headerEl ? Math.max(0, Math.ceil(headerEl.getBoundingClientRect().bottom)) : 0;

    let barTop = window.innerHeight || 900;
    const isFixedBarVisible = (el) => {
      if (!el) return false;
      const cs = window.getComputedStyle(el);
      return cs.display !== 'none' && cs.visibility !== 'hidden' && el.getBoundingClientRect().height > 0;
    };
    const desktopBar = document.getElementById('desktop-player-bar');
    const mobileBar = document.getElementById('mobile-mini-player');
    if (isFixedBarVisible(desktopBar)) {
      barTop = Math.min(barTop, Math.floor(desktopBar.getBoundingClientRect().top));
    } else if (isFixedBarVisible(mobileBar)) {
      barTop = Math.min(barTop, Math.floor(mobileBar.getBoundingClientRect().top));
    }

    const visibleHeight = Math.min(rect.bottom, barTop) - Math.max(rect.top, headerBottom);
    if (rect.width > 20 && rect.height > 20 && visibleHeight > 20) {
      const clipTop = Math.max(0, Math.ceil(headerBottom - rect.top));
      const clipBottom = Math.max(0, Math.ceil(rect.bottom - barTop));

      pDeck.dataset.deckPosMode = 'desktop-video';
      pDeck.style.position = 'fixed';
      pDeck.style.left = Math.round(rect.left) + 'px';
      pDeck.style.top = Math.round(rect.top) + 'px';
      pDeck.style.bottom = 'auto';
      pDeck.style.right = 'auto';
      pDeck.style.transform = 'none';
      pDeck.style.width = Math.round(rect.width) + 'px';
      pDeck.style.height = Math.round(rect.height) + 'px';
      pDeck.style.minWidth = '0';
      pDeck.style.minHeight = '0';
      pDeck.style.opacity = '1';
      pDeck.style.pointerEvents = 'auto';
      pDeck.style.zIndex = '25';
      pDeck.style.borderRadius = '1rem';
      pDeck.style.clipPath = (clipTop > 0 || clipBottom > 0)
        ? `inset(${clipTop}px 0px ${clipBottom}px 0px round 1rem)`
        : 'none';
      return;
    }
  }

  // 3. In-Viewport Silent Deck (skip redundant style writes during scroll)
  if (pDeck.dataset.deckPosMode === 'silent') return;
  pDeck.dataset.deckPosMode = 'silent';
  pDeck.style.position = 'fixed';
  pDeck.style.left = '0px';
  pDeck.style.bottom = '0px';
  pDeck.style.top = 'auto';
  pDeck.style.right = 'auto';
  pDeck.style.transform = 'none';
  pDeck.style.width = '240px';
  pDeck.style.height = '135px';
  pDeck.style.minWidth = '0';
  pDeck.style.minHeight = '0';
  pDeck.style.opacity = '0.002';
  pDeck.style.pointerEvents = 'none';
  pDeck.style.zIndex = '5';
  pDeck.style.borderRadius = '0px';
  pDeck.style.clipPath = 'none';
}
window.syncPersistentPlayerPosition = syncPersistentPlayerPosition;

function showVideoAdNotice() {
  const el = document.getElementById('deck-video-ad-notice');
  if (el) {
    el.classList.remove('hidden');
    el.classList.add('flex');
  }
}
window.showVideoAdNotice = showVideoAdNotice;

function dismissVideoAdNotice() {
  const el = document.getElementById('deck-video-ad-notice');
  if (el) {
    el.classList.add('hidden');
    el.classList.remove('flex');
  }
}
window.dismissVideoAdNotice = dismissVideoAdNotice;

let _videoModeSeq = 0;

function clearVideoStallWatchdog() {
  if (state._videoStallFallbackTimer) {
    clearTimeout(state._videoStallFallbackTimer);
    state._videoStallFallbackTimer = null;
  }
}

function showDeckVideoPlaceholder(show, labelText = '') {
  const ph = document.getElementById('deck-video-placeholder');
  if (!ph) return;
  if (show) {
    ph.classList.remove('hidden');
    ph.style.opacity = '1';
    if (labelText) {
      let lbl = ph.querySelector('.kurfa-video-status-label');
      if (!lbl) {
        lbl = document.createElement('span');
        lbl.className = 'kurfa-video-status-label text-[11px] font-semibold text-white/80 mt-1.5';
        ph.appendChild(lbl);
      }
      lbl.textContent = labelText;
    }
  } else {
    ph.classList.add('hidden');
  }
}

function releaseVideoHardwareDecoder() {
  clearVideoStallWatchdog();
  if (!DOM.videoEngine) return;
  try {
    if (state._videoSeekOnceHandler) {
      DOM.videoEngine.removeEventListener('loadedmetadata', state._videoSeekOnceHandler);
      state._videoSeekOnceHandler = null;
    }
    if (DOM.videoEngine.getAttribute('src')) {
      DOM.videoEngine.pause();
      DOM.videoEngine.currentTime = 0;
      DOM.videoEngine.removeAttribute('src');
      try { DOM.videoEngine.load(); } catch (_) {}
    }
    DOM.videoEngine.classList.add('hidden');
  } catch (_) {}
}

function setDeckVisualMode(mode, silent = false) {
  if (mode === 'video' && state.currentTrack && !supportsDeckVideo(state.currentTrack)) {
    syncDeckVisualUIOnly('vinyl');
    syncPersistentPlayerPosition();
    if (!silent) showToast(t('toast.local_no_video'), "info");
    return;
  }

  if (state._switchingDeckMode && state.deckVisualMode === mode) {
    return;
  }

  const hasActivePlayhead = state._activeTrackConfirmedPlaying ||
    (state._activeMediaEngine === 'audio' && DOM.audioEngine && DOM.audioEngine.currentTime > 0) ||
    (state._activeMediaEngine === 'native-video' && DOM.videoEngine && DOM.videoEngine.currentTime > 0) ||
    state._activeMediaEngine === 'native-exo';
  const curTime = hasActivePlayhead ? getActiveMediaCurrentTime() : Math.max(0, Number(state.currentPlayheadTime) || 0);
  const exactCurSec = Math.max(0, Number(curTime) || 0);
  state.currentPlayheadTime = exactCurSec;
  state.deckVisualMode = mode;
  safeSetStorage('kurfa_deck_mode', mode);

  syncDeckVisualUIOnly(mode);

  const activateYouTubeVideoAt = (targetVid, startSec) => {
    if (!silent) showVideoAdNotice();
    if (state.ytReady && state.ytPlayer) {
      try {
        const loadedVid = typeof state.ytPlayer.getVideoData === 'function'
          ? safeYtId(state.ytPlayer.getVideoData()?.video_id)
          : null;
        const pState = typeof state.ytPlayer.getPlayerState === 'function'
          ? state.ytPlayer.getPlayerState()
          : -1;

        state._activeMediaEngine = 'youtube';
        if (typeof updateFxEngineNote === 'function') updateFxEngineNote();

        if (targetVid && loadedVid === targetVid && [1, 2, 3].includes(pState)) {
          const ytCur = typeof state.ytPlayer.getCurrentTime === 'function' ? (state.ytPlayer.getCurrentTime() || 0) : 0;
          if (Math.abs(ytCur - startSec) > 1.2 && typeof state.ytPlayer.seekTo === 'function') {
            state.ytPlayer.seekTo(startSec, true);
          }
          if (!state.userPaused && pState !== 1 && typeof state.ytPlayer.playVideo === 'function') {
            state.ytPlayer.playVideo();
          }
          if (!state.userPaused) {
            state.isPlaying = true;
            updatePlayPauseUI(true);
            if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
          }
        } else if (targetVid) {
          state._activeTrackConfirmedPlaying = false;
          if (state.userPaused && typeof state.ytPlayer.cueVideoById === 'function') {
            state.ytPlayer.cueVideoById({ videoId: targetVid, startSeconds: startSec });
            state.isPlaying = false;
            updatePlayPauseUI(false);
          } else if (typeof state.ytPlayer.loadVideoById === 'function') {
            state.ytPlayer.loadVideoById({
              videoId: targetVid,
              startSeconds: startSec
            });
            state.isPlaying = !state.userPaused;
            updatePlayPauseUI(!state.userPaused);
            if (!state.userPaused && typeof startSeekbarTicker === 'function') startSeekbarTicker();
          }
        }
      } catch(e) {
        console.warn("YouTube video mode transition error:", e);
      }
    }
    requestAnimationFrame(() => {
      syncPersistentPlayerPosition();
    });
  };

  if (mode === 'video') {
    const modeSeq = ++_videoModeSeq;
    if (state.currentTrack && state.currentTrack.id) {
      state._switchingDeckMode = true;
      clearTimeout(state._switchingDeckTimer);
      state._switchingDeckTimer = setTimeout(() => {
        state._switchingDeckMode = false;
      }, 1500);
      showDeckVideoPlaceholder(true, getAppLanguage() === 'en' ? 'Loading video...' : 'Video yükleniyor...');

      // Silence native-exo & HTML5 audio engine cleanly before transferring millisecond currentTime to video
      if (state._activeMediaEngine === 'native-exo') {
        const exo = getAndroidExoBridge();
        if (exo && typeof exo.stopNativeExo === 'function') {
          try { exo.stopNativeExo(); } catch (_) {}
        }
      }
      if (DOM.audioEngine) {
        try {
          if (state._seekOnceHandler) {
            DOM.audioEngine.removeEventListener('loadedmetadata', state._seekOnceHandler);
            state._seekOnceHandler = null;
          }
          if (DOM.audioEngine.getAttribute('src')) {
            DOM.audioEngine.pause();
            DOM.audioEngine.currentTime = 0;
            DOM.audioEngine.removeAttribute('src');
          }
        } catch(e) {}
      }

      const targetVid = safeYtId(state.currentTrack?.ytId || state.currentTrack?.id);
      const useNativeProxy = Boolean(
        targetVid &&
        DOM.videoEngine &&
        typeof isNativeVideoProxyAvailable === 'function' &&
        isNativeVideoProxyAvailable()
      );

      if (useNativeProxy) {
        dismissVideoAdNotice();
        const switchToken = ++currentPlaybackToken;
        if (lyricsLoadedTrackId && state.currentTrack && lyricsLoadedTrackId === state.currentTrack.id) {
          lyricsLoadedPlaybackToken = switchToken;
          if (typeof LyricsClock !== 'undefined' && typeof LyricsClock.syncState === 'function') LyricsClock.syncState();
        }
        resolveNativeLocalProxyOrigin(targetVid).then((orig) => {
          if (modeSeq !== _videoModeSeq || switchToken !== currentPlaybackToken || state.deckVisualMode !== 'video') return;
          if (orig) {
            const videoStreamUrl = `${orig}/__kurfa_native_video__/${encodeURIComponent(targetVid)}`;
            loadDirectVideoStream(videoStreamUrl, exactCurSec, switchToken, targetVid);
          } else {
            activateYouTubeVideoAt(targetVid, exactCurSec);
          }
        }).catch(() => {
          if (modeSeq !== _videoModeSeq || switchToken !== currentPlaybackToken || state.deckVisualMode !== 'video') return;
          activateYouTubeVideoAt(targetVid, exactCurSec);
        });
      } else {
        activateYouTubeVideoAt(targetVid, exactCurSec);
      }
    }

    requestAnimationFrame(() => {
      syncPersistentPlayerPosition();
    });
    if (!silent) showToast(t('toast.video_mode_on'));
  } else {
    // VINYL / PLAK MODE (100% Ad-Free Pure Audio with millisecond handoff from Video)
    ++_videoModeSeq;
    if (state.currentTrack && state.currentTrack.id) {
      state._switchingDeckMode = true;
      clearTimeout(state._switchingDeckTimer);
      state._switchingDeckTimer = setTimeout(() => {
        state._switchingDeckMode = false;
      }, 1500);

      // Silence Native HTML5 Video engine cleanly & release hardware decoder/VRAM
      releaseVideoHardwareDecoder();

      if (DOM.audioEngine && DOM.audioEngine.getAttribute('src') && !DOM.audioEngine.paused && DOM.audioEngine.currentTime > 0) {
        state._activeMediaEngine = 'audio';
      } else if ((isAndroidNativeEngine() || hasNativeExoPlayer() || Boolean(getBrowserExtensionMode())) && safeYtId(state.currentTrack.ytId || state.currentTrack.id)) {
        const directVid = safeYtId(state.currentTrack.ytId || state.currentTrack.id);
        const resumeAt = exactCurSec;
        const switchToken = ++currentPlaybackToken;
        if (lyricsLoadedTrackId && state.currentTrack && lyricsLoadedTrackId === state.currentTrack.id) {
          lyricsLoadedPlaybackToken = switchToken;
          if (typeof LyricsClock !== 'undefined' && typeof LyricsClock.syncState === 'function') LyricsClock.syncState();
        }
        if (state.ytPlayer && typeof state.ytPlayer.pauseVideo === 'function') {
          try { state.ytPlayer.pauseVideo(); } catch(e) {}
        }

        const nativeExo = !state._nativeExoFallbackActive ? getAndroidExoBridge() : null;
        if (nativeExo && !state.userPaused) {
          try {
            state._activeMediaEngine = 'native-exo';
            state._nativeExoCurrentTime = resumeAt;
            state.isPlaying = true;
            updatePlayPauseUI(true);
            syncNativeAppPlaybackState(true);
            syncNativeFxParams();
            kurfaResetNativeExoWatchdog(resumeAt);
            nativeExo.playNativeExo(
              directVid,
              String(state.currentTrack.title || 'Kurfamüzik'),
              String(state.currentTrack.artist || 'Sanatçı'),
              getTrackThumbnail(state.currentTrack),
              Number(resumeAt) || 0
            );
            syncPersistentPlayerPosition();
            if (!silent) showToast(t('toast.audio_mode_on'));
            return;
          } catch (_) {}
        }

        state._activeMediaEngine = 'none';
        state._activeTrackConfirmedPlaying = false;
        if (!state.userPaused) {
          kurfaResolveDirectAudio(directVid).then((res) => {
            if (switchToken === currentPlaybackToken && state.deckVisualMode === 'vinyl' && !state.userPaused && res && res.success && res.streamUrl && safeYtId(state.currentTrack?.ytId || state.currentTrack?.id) === directVid) {
              loadDirectAudioStream(res.streamUrl, resumeAt, switchToken, directVid);
            }
          }).catch(() => {});
        }
      } else if (state.ytPlayer && typeof state.ytPlayer.getPlayerState === 'function' && state.ytPlayer.getPlayerState() === 1) {
        // YouTube continues playing cleanly in the background behind the spinning vinyl deck
        state._activeMediaEngine = 'youtube';
      } else if (state.isPlaying && !state.userPaused) {
        resumePlayback();
      }
    }

    syncPersistentPlayerPosition();
    if (!silent) showToast(t('toast.audio_mode_on'));
  }
}

function quickToggleVideoMode() {
  if (state.currentTab !== 'calma-listeleri') {
    switchTab('calma-listeleri');
    setDeckVisualMode('video');
  } else {
    const nextMode = (state.deckVisualMode === 'video') ? 'vinyl' : 'video';
    setDeckVisualMode(nextMode);
  }
}

function toggleFullScreenVideo() {
  const videoWrap = document.getElementById('deck-video-wrapper');
  if (!videoWrap) return;
  if (!document.fullscreenElement) {
    if (videoWrap.requestFullscreen) {
      videoWrap.requestFullscreen();
    } else if (videoWrap.webkitRequestFullscreen) {
      videoWrap.webkitRequestFullscreen();
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

async function handleGoogleSignOut() {
  if (firebaseAuth) {
    try { await firebaseAuth.signOut(); } catch(e) {}
  }
  state.googleUser = null;
  state.firebaseUser = null;
  try { localStorage.removeItem('kurfa_google_user'); } catch(e) {}
  updateGoogleProfileUI(null);
  showToast("Oturum kapatıldı. Listeleriniz yerel hafızada korundu.");
}

async function pullFirebaseLibraryOnce(uid) {
  if (!firebaseDb || !uid) return;
  try {
    const docRef = firebaseDb.collection('users').doc(uid).collection('library').doc('main');
    const doc = await docRef.get();
    if (doc.exists) {
      const data = doc.data();
      if (data && Array.isArray(data.customPlaylists) && data.customPlaylists.length > 0) {
        state.customPlaylists = data.customPlaylists.map(sanitizeBackupPlaylist).filter(Boolean).slice(0, 100);
        safeSetStorage('kurfa_custom_playlists', JSON.stringify(state.customPlaylists));
        renderCustomPlaylistsGrid();
      }
      if (data && Array.isArray(data.favorites) && data.favorites.length > 0) {
        state.favorites = data.favorites.map(sanitizeBackupTrack).filter(Boolean).slice(0, 1000);
        safeSetStorage('kurfa_favs', JSON.stringify(state.favorites));
        renderFavoritesTable();
      }
      updateKutuphaneBadges();
      showToast("Kütüphaneniz buluttan başarıyla eşitlendi!");
    }
  } catch(e) {
    console.warn("Pull library note:", e);
  }
}

function scheduleFirebaseCloudSync() {
  if (!state.firebaseUser || !firebaseDb) return;
  if (firebaseSyncDebounceTimer) clearTimeout(firebaseSyncDebounceTimer);

  firebaseSyncDebounceTimer = setTimeout(() => {
    syncFirebaseLibraryNow();
  }, 5000);
}

async function syncFirebaseLibraryNow() {
  if (!state.firebaseUser || !firebaseDb) {
    showToast("Yerel hafıza güncellendi!");
    return;
  }
  try {
    const docRef = firebaseDb.collection('users').doc(state.firebaseUser.uid).collection('library').doc('main');
    await docRef.set({
      customPlaylists: state.customPlaylists,
      favorites: state.favorites,
      updatedAt: Date.now()
    }, { merge: true });
    showToast("Kütüphane bulutla eşitlendi!");
  } catch(e) {
    console.warn("Cloud sync note:", e);
  }
}

// =============================================================================
// 13.11 SPOTIFY-STYLE PICTURE-IN-PICTURE (PIP) MINI PLAYER (Photos 1 & 2 Ref)
// =============================================================================

let pipWindowInstance = null;

function seekToFraction(frac) {
  const dur = getActiveMediaDuration();
  const seekTime = Math.max(0, Math.min(dur, frac * dur));
  seekPlaybackToSeconds(seekTime);
}

function resolveCleanArtistLabel(track) {
  if (!track) return t('player.select_song');
  const raw = typeof track.artist === 'string' ? track.artist.trim() : '';
  const selectSongStr = t('player.select_song');
  if (raw && raw !== 'Bir parça seçin' && raw !== 'Select a track' && raw !== selectSongStr) {
    return raw;
  }
  return getAppLanguage() === 'en' ? 'Artist' : 'Sanatçı';
}

function syncDesktopMiniPlayerState(curSec, durSec) {
  if (typeof getBrowserExtensionMode !== 'function' || !getBrowserExtensionMode().startsWith('desktop')) return;
  const track = state.currentTrack;
  const effVol = state.isMuted ? 0 : Math.max(0, Math.min(1, Number(state.volume ?? 0.8)));
  const payload = {
    title: (track && track.title) ? track.title : 'Kurfamüzik',
    artist: resolveCleanArtistLabel(track),
    thumbnail: track ? getTrackThumbnail(track) : '',
    isPlaying: Boolean(state.isPlaying),
    isMuted: Boolean(state.isMuted || effVol === 0),
    volume: effVol,
    cur: Number.isFinite(curSec) ? curSec : (getActiveMediaCurrentTime() || 0),
    dur: Number.isFinite(durSec) ? durSec : (getActiveMediaDuration() || 0)
  };
  callExtensionBridge('UPDATE_MINI_PLAYER', payload, 2500).catch(() => {});
}

window.seekPlaybackToFraction = function (frac) {
  const dur = getActiveMediaDuration();
  if (dur > 0) {
    seekPlaybackToSeconds(Math.max(0, Math.min(1, Number(frac) || 0)) * dur);
  }
};

async function toggleDocumentPipPlayer() {
  if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
    const track = state.currentTrack;
    const effVol = state.isMuted ? 0 : Math.max(0, Math.min(1, Number(state.volume ?? 0.8)));
    const res = await callExtensionBridge('TOGGLE_MINI_PLAYER', {
      title: (track && track.title) ? track.title : 'Kurfamüzik',
      artist: resolveCleanArtistLabel(track),
      thumbnail: track ? getTrackThumbnail(track) : '',
      isPlaying: Boolean(state.isPlaying),
      isMuted: Boolean(state.isMuted || effVol === 0),
      volume: effVol,
      cur: getActiveMediaCurrentTime() || 0,
      dur: getActiveMediaDuration() || 0
    }, 4000);
    if (res && res.success) {
      window.__kurfaDesktopMiniPlayerOpen = Boolean(res.visible);
      return;
    }
  }
  if (pipWindowInstance) {
    closeDocumentPipPlayer();
    return;
  }
  const floatingPip = document.getElementById('kurfa-floating-pip');
  if (floatingPip && !floatingPip.hidden && !floatingPip.hasAttribute('data-closing')) {
    closeFloatingPip();
    return;
  }
  await openDocumentPipPlayer();
}

function updateMobileMiniArcProgress(pct) {
  const clamped = Math.max(0, Math.min(100, Number(pct) || 0));
  const fill = (typeof DOM !== 'undefined' && DOM.playerMobileSeekFill) || document.getElementById('player-mobile-seek-fill');
  if (!fill) return;
  if (fill.tagName && fill.tagName.toLowerCase() === 'path') {
    fill.style.strokeDashoffset = (100 - clamped).toFixed(3);
    fill.style.opacity = clamped > 0.05 ? '1' : '0';
    const thumb = document.getElementById('mobile-mini-arc-thumb');
    if (thumb && typeof fill.getTotalLength === 'function' && typeof fill.getPointAtLength === 'function') {
      const total = fill.getTotalLength();
      if (total > 0) {
        const pt = fill.getPointAtLength((clamped / 100) * total);
        thumb.setAttribute('cx', pt.x.toFixed(2));
        thumb.setAttribute('cy', pt.y.toFixed(2));
        const tip = document.getElementById('mobile-mini-seek-tooltip');
        if (tip) {
          const mini = document.getElementById('mobile-mini-player');
          const maxW = (mini && mini.clientWidth) ? mini.clientWidth : 340;
          const clampedX = Math.max(40, Math.min(maxW - 40, pt.x));
          tip.style.left = `${clampedX.toFixed(1)}px`;
        }
      }
    }
  } else {
    fill.style.width = `${clamped}%`;
  }
}
window.updateMobileMiniArcProgress = updateMobileMiniArcProgress;

(function initMobileMiniSeekbar() {
  if (typeof document === 'undefined') return;
  document.addEventListener('DOMContentLoaded', () => {
    const mini = document.getElementById('mobile-mini-player');
    const arcSvg = document.getElementById('mobile-mini-arc-svg');
    const arcTrack = document.getElementById('mobile-mini-arc-track');
    const hit = document.getElementById('mobile-mini-seek-hit');
    const fill = document.getElementById('player-mobile-seek-fill');
    const tip = document.getElementById('mobile-mini-seek-tooltip');
    if (!hit || !fill) return;

    const syncArcGeometry = () => {
      if (!mini || !arcSvg || !arcTrack) return;
      const w = mini.clientWidth;
      const h = mini.clientHeight;
      if (w > 40 && h > 16) {
        const pad = 0.55;
        const cy = h / 2;
        const r = Math.max(4, cy - pad);
        const angleRad = (42 * Math.PI) / 180;
        const sinA = Math.sin(angleRad);
        const cosA = Math.cos(angleRad);
        const xL = (cy - r * sinA).toFixed(2);
        const xR = (w - cy + r * sinA).toFixed(2);
        const yEnd = (cy - r * cosA).toFixed(2);
        const rxStart = cy.toFixed(2);
        const rxEnd = (w - cy).toFixed(2);
        const d = `M ${xL} ${yEnd} A ${r.toFixed(2)} ${r.toFixed(2)} 0 0 1 ${rxStart} ${pad} L ${rxEnd} ${pad} A ${r.toFixed(2)} ${r.toFixed(2)} 0 0 1 ${xR} ${yEnd}`;
        arcSvg.setAttribute('viewBox', `0 0 ${w} ${h}`);
        arcTrack.setAttribute('d', d);
        fill.setAttribute('d', d);
      }
    };

    syncArcGeometry();
    window.addEventListener('resize', syncArcGeometry);
    if (typeof ResizeObserver !== 'undefined' && mini) {
      const ro = new ResizeObserver(syncArcGeometry);
      ro.observe(mini);
    }

    let activePointerId = null;
    let pendingFrac = 0;

    const setActiveVisual = (dragging) => {
      window.__kurfaMobileMiniScrubbing = dragging;
      if (arcSvg) arcSvg.classList.toggle('is-scrubbing', dragging);
      if (tip) tip.classList.toggle('hidden', !dragging);
    };

    const updateFromClientX = (clientX) => {
      const rect = hit.getBoundingClientRect();
      if (!rect || rect.width <= 0) return 0;
      const frac = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      pendingFrac = frac;
      const pct = frac * 100;
      updateMobileMiniArcProgress(pct);
      const dur = getActiveMediaDuration() || 0;
      if (tip) {
        const curEl = tip.querySelector('.kurfa-tip-cur');
        const sepEl = tip.querySelector('.kurfa-tip-sep');
        const durEl = tip.querySelector('.kurfa-tip-dur');
        if (curEl && durEl) {
          if (dur > 0) {
            curEl.textContent = formatTime(frac * dur);
            durEl.textContent = formatTime(dur);
            if (sepEl) sepEl.style.display = '';
            durEl.style.display = '';
          } else {
            curEl.textContent = `${Math.round(pct)}%`;
            if (sepEl) sepEl.style.display = 'none';
            durEl.style.display = 'none';
          }
        } else {
          tip.textContent = dur > 0 ? `${formatTime(frac * dur)} / ${formatTime(dur)}` : `${Math.round(pct)}%`;
        }
      }
      return frac;
    };

    hit.addEventListener('pointerdown', (e) => {
      e.stopPropagation();
      activePointerId = e.pointerId;
      try { hit.setPointerCapture(e.pointerId); } catch (_) {}
      setActiveVisual(true);
      updateFromClientX(e.clientX);
    });

    hit.addEventListener('pointermove', (e) => {
      if (activePointerId !== e.pointerId) return;
      e.stopPropagation();
      updateFromClientX(e.clientX);
    });

    const endScrub = (e) => {
      if (activePointerId !== e.pointerId) return;
      e.stopPropagation();
      try { hit.releasePointerCapture(e.pointerId); } catch (_) {}
      activePointerId = null;
      setActiveVisual(false);
      const dur = getActiveMediaDuration() || 0;
      if (dur > 0) {
        seekPlaybackToSeconds(pendingFrac * dur);
      }
    };

    hit.addEventListener('pointerup', endScrub);
    hit.addEventListener('pointercancel', (e) => {
      if (activePointerId !== e.pointerId) return;
      activePointerId = null;
      setActiveVisual(false);
    });
  });
})();

let __kurfaSupportsDisplayTransition;
function kurfaCanTransitionDisplay() {
  if (__kurfaSupportsDisplayTransition !== undefined) return __kurfaSupportsDisplayTransition;
  if (typeof window === 'undefined' || !window.CSS?.supports?.('transition-behavior', 'allow-discrete') || !document.body) {
    return false;
  }
  const probe = document.createElement('div');
  probe.style.cssText = 'transition: display 1s allow-discrete !important; display: block;';
  document.body.appendChild(probe);
  getComputedStyle(probe).display;
  probe.style.display = 'none';
  __kurfaSupportsDisplayTransition = getComputedStyle(probe).display === 'block';
  probe.remove();
  return __kurfaSupportsDisplayTransition;
}

let __kurfaPipVolWheelTimer = null;
let __kurfaPipBound = false;

function bumpFloatingPipVolumeHold(el) {
  if (!el) return;
  el.classList.add('is-vol-active');
  clearTimeout(__kurfaPipVolWheelTimer);
  __kurfaPipVolWheelTimer = setTimeout(() => {
    el.classList.remove('is-vol-active');
  }, 1500);
}

function toggleFloatingPipMode() {
  const el = document.getElementById('kurfa-floating-pip');
  if (!el) return;
  const nextMode = el.getAttribute('data-mode') === 'compact' ? 'cover' : 'compact';
  el.setAttribute('data-mode', nextMode);
  const ic = document.getElementById('pip-mode-toggle-icon');
  if (ic) ic.textContent = nextMode === 'compact' ? 'crop_square' : 'view_agenda';
  const btn = document.getElementById('pip-mode-toggle-btn');
  if (btn) btn.title = nextMode === 'compact' ? 'Kapak Moduna Büyüt' : 'Kompakt Bar Moduna Geç';
  safeSetStorage('kurfa_pip_mode', nextMode);
}
window.toggleFloatingPipMode = toggleFloatingPipMode;

async function openDocumentPipPlayer() {
  // If Chrome / Edge supports Document Picture-in-Picture API:
  if ('documentPictureInPicture' in window) {
    try {
      const pip = await window.documentPictureInPicture.requestWindow({
        width: 300,
        height: 300
      });
      pipWindowInstance = pip;

      const rgbVal = (typeof FxReactiveStudio !== 'undefined' && FxReactiveStudio._currentRgb) ? FxReactiveStudio._currentRgb : '244, 63, 94';
      const style = pip.document.createElement('style');
      style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
        :root { --pip-rgb: ${rgbVal}; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          background-color: #101420;
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          overflow: hidden;
          width: 100vw;
          height: 100vh;
          position: relative;
          user-select: none;
        }
        .material-symbols-outlined {
          font-family: 'Material Symbols Outlined';
          font-weight: normal;
          font-style: normal;
          font-size: 20px;
          line-height: 1;
          display: inline-block;
          direction: ltr;
        }
        .pip-art-wrap { position: absolute; inset: 0; overflow: hidden; background: #141927; transition: all 0.26s ease; }
        .pip-cover-img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.34); transition: filter 0.24s ease, transform 0.28s ease; display: block; }
        body:hover .pip-cover-img, body.is-vol-active .pip-cover-img { filter: blur(8px) brightness(0.75); transform: scale(1.42); }
        body[data-mode="compact"] .pip-art-wrap { inset: auto; top: 14px; left: 14px; width: 70px; height: 70px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.14); }
        body[data-mode="compact"] .pip-cover-img, body[data-mode="compact"]:hover .pip-cover-img { filter: none; transform: scale(1.32); }
        .pip-scrim { position: absolute; inset: 0; pointer-events: none; background: radial-gradient(220px 180px at 18% 25%, rgba(var(--pip-rgb), 0.28), transparent 72%), linear-gradient(180deg, rgba(10,13,22,0.48) 0%, rgba(10,13,22,0.88) 100%); opacity: 0; transition: opacity 0.2s ease; }
        body:hover .pip-scrim, body.is-vol-active .pip-scrim, body[data-mode="compact"] .pip-scrim { opacity: 1; }
        .pip-topbar { position: absolute; top: 0; left: 0; right: 0; z-index: 30; display: flex; align-items: center; justify-content: space-between; padding: 10px; opacity: 0; transition: opacity 0.2s ease; }
        body:hover .pip-topbar, body.is-vol-active .pip-topbar, body[data-mode="compact"] .pip-topbar { opacity: 1; }
        .pip-badge { padding: 3px 9px; border-radius: 9999px; background: rgba(12,16,28,0.72); border: 1px solid rgba(255,255,255,0.14); font-size: 9.5px; font-weight: 800; letter-spacing: 0.08em; display: inline-flex; align-items: center; gap: 5px; }
        .pip-dot { width: 6px; height: 6px; border-radius: 9999px; background: rgb(var(--pip-rgb)); }
        .pip-win-btns { display: flex; gap: 4px; }
        .pip-btn { width: 25px; height: 25px; border-radius: 9999px; border: 1px solid rgba(255,255,255,0.1); background: rgba(14,18,30,0.7); color: #e2e8f0; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; }
        .pip-btn:hover { background: rgba(255,255,255,0.22); color: #fff; }
        .pip-hud { position: absolute; inset: 0; z-index: 20; display: flex; flex-direction: column; justify-content: flex-end; padding: 40px 14px 12px; gap: 8px; opacity: 0; transition: opacity 0.2s ease; }
        body:hover .pip-hud, body.is-vol-active .pip-hud, body[data-mode="compact"] .pip-hud { opacity: 1; }
        .pip-meta { text-align: center; margin-bottom: auto; margin-top: 26px; min-width: 0; }
        .pip-title { font-weight: 800; font-size: 14px; color: #fff; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .pip-artist { font-size: 11.5px; color: rgba(226,232,240,0.78); white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 2px; }
        .pip-controls { display: flex; align-items: center; justify-content: center; gap: 14px; margin-bottom: 10px; }
        .pip-btn-play { width: 46px; height: 46px; background: #fff; color: #101420; border-radius: 50%; border: none; display: inline-flex; align-items: center; justify-content: center; cursor: pointer; }
        .pip-bottom-row { display: flex; align-items: center; justify-content: space-between; }
        .pip-vol-wrap { display: inline-flex; align-items: center; gap: 4px; }
        .pip-vol-expand { display: inline-flex; align-items: center; gap: 5px; width: 0; opacity: 0; overflow: hidden; transition: width 0.22s ease, opacity 0.18s ease; background: rgba(15,20,34,0.88); border-radius: 9999px; }
        .pip-vol-wrap:hover .pip-vol-expand, body.is-vol-active .pip-vol-expand { width: 96px; opacity: 1; padding: 0 7px; border: 1px solid rgba(255,255,255,0.14); }
        .pip-vol-range { appearance: none; -webkit-appearance: none; width: 58px; height: 22px; background: transparent; border: 0; cursor: pointer; }
        .pip-vol-range::-webkit-slider-runnable-track { height: 3.5px; border-radius: 999px; background: rgba(255,255,255,0.28); }
        .pip-vol-range::-webkit-slider-thumb { -webkit-appearance: none; width: 10px; height: 10px; border-radius: 50%; background: #fff; margin-top: -3.25px; }
        .pip-times { font-size: 10px; color: rgba(226,232,240,0.8); font-variant-numeric: tabular-nums; }
        .pip-track-bar { position: relative; width: 100%; height: 4px; background: rgba(255,255,255,0.22); border-radius: 9999px; cursor: pointer; overflow: hidden; }
        .pip-fill-bar { height: 100%; width: 0%; background: linear-gradient(90deg, rgba(var(--pip-rgb), 0.85), #fff); border-radius: 9999px; transition: width 0.1s linear; }
        .pip-hairline { position: absolute; left: 14px; right: 14px; bottom: 8px; height: 2.5px; background: rgba(255,255,255,0.22); border-radius: 9999px; overflow: hidden; pointer-events: none; transition: opacity 0.18s ease; }
        .pip-hairline-fill { height: 100%; background: rgb(var(--pip-rgb)); }
        body:hover .pip-hairline, body.is-vol-active .pip-hairline, body[data-mode="compact"] .pip-hairline { opacity: 0; }
        body[data-mode="compact"] .pip-hud { padding: 10px 14px 10px 96px; justify-content: space-between; gap: 0; }
        body[data-mode="compact"] .pip-meta { text-align: left; margin-top: 0; margin-bottom: 2px; padding-right: 76px; }
        body[data-mode="compact"] .pip-controls { justify-content: flex-start; gap: 8px; margin: 0; }
        body[data-mode="compact"] .pip-btn-play { width: 32px; height: 32px; }
        body[data-mode="compact"] .pip-badge { display: none; }
        body[data-mode="compact"] .pip-topbar { justify-content: flex-end; }
        body[data-mode="compact"] .pip-track-bar { position: absolute; left: 14px; right: 14px; bottom: 8px; width: auto; }
      `;
      pip.document.head.appendChild(style);

      const track = state.currentTrack || {
        title: "Kurfa Müzik",
        artist: "Bir şarkı seçin",
        thumbnail: "./kurfamuzik_logo.png"
      };
      const baseHref = escapeHtml(new URL('./', window.location.href).href);
      const fallbackLogo = './kurfamuzik_logo.png';
      const safeThumb = safeUrl(track.thumbnail || getTrackThumbnail(track), fallbackLogo);
      const safeTitle = escapeHtml(track.title || 'Kurfa Müzik');
      const safeArtist = escapeHtml(resolveCleanArtistLabel(track));
      const initCur = getActiveMediaCurrentTime() || 0;
      const initDur = getActiveMediaDuration() || parseDurationToSec(track.duration) || 210;
      const initPct = initDur > 0 ? Math.max(0, Math.min(100, (initCur / initDur) * 100)) : 0;
      const volPct = Math.round((state.isMuted ? 0 : (state.volume ?? 0.8)) * 100);

      const baseEl = pip.document.createElement('base');
      baseEl.href = new URL('./', window.location.href).href;
      pip.document.head.appendChild(baseEl);

      pip.document.body.innerHTML = `
        <div class="pip-topbar" data-base="${baseHref}">
          <div class="pip-badge"><span class="pip-dot"></span><span>KURFA</span></div>
          <div class="pip-win-btns">
            <button id="pip-ext-mode" class="pip-btn" title="Mod Değiştir"><span class="material-symbols-outlined" style="font-size:15px;">view_agenda</span></button>
            <button id="pip-ext-add" class="pip-btn" title="Listeye Ekle"><span class="material-symbols-outlined" style="font-size:15px;">playlist_add</span></button>
            <button id="pip-ext-close" class="pip-btn" title="Kapat"><span class="material-symbols-outlined" style="font-size:15px;">close</span></button>
          </div>
        </div>
        <div class="pip-art-wrap">
          <img id="pip-ext-cover" class="pip-cover-img" src="${safeThumb}" alt="${safeTitle}" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        </div>
        <div class="pip-scrim"></div>
        <div class="pip-hud">
          <div class="pip-meta">
            <div id="pip-ext-title" class="pip-title">${safeTitle}</div>
            <div id="pip-ext-artist" class="pip-artist">${safeArtist}</div>
          </div>
          <div class="pip-controls">
            <button id="pip-ext-prev" class="pip-btn" title="Önceki"><span class="material-symbols-outlined" style="font-size:20px;">skip_previous</span></button>
            <button id="pip-ext-play" class="pip-btn-play" title="Oynat/Durdur"><span class="material-symbols-outlined" id="pip-ext-play-icon" style="font-size:24px;">${state.isPlaying ? 'pause' : 'play_arrow'}</span></button>
            <button id="pip-ext-next" class="pip-btn" title="Sonraki"><span class="material-symbols-outlined" style="font-size:20px;">skip_next</span></button>
          </div>
          <div class="pip-bottom-row">
            <div class="pip-vol-wrap">
              <button id="pip-ext-mute" class="pip-btn" title="Sessiz"><span class="material-symbols-outlined" id="pip-ext-vol-icon" style="font-size:17px;">${volPct === 0 ? 'volume_off' : (volPct < 50 ? 'volume_down' : 'volume_up')}</span></button>
              <div class="pip-vol-expand">
                <input type="range" id="pip-ext-vol-range" class="pip-vol-range" min="0" max="100" value="${volPct}" aria-label="Ses">
                <span id="pip-ext-vol-pct" style="font-size:9px;font-weight:700;">${volPct}%</span>
              </div>
            </div>
            <div class="pip-times">
              <span id="pip-ext-cur">${escapeHtml(formatTime(initCur))}</span> / <span id="pip-ext-dur">${escapeHtml(formatTime(initDur))}</span>
            </div>
          </div>
          <div id="pip-ext-seek-track" class="pip-track-bar">
            <div id="pip-ext-seek-fill" class="pip-fill-bar" style="width:${initPct}%"></div>
          </div>
        </div>
        <div class="pip-hairline"><div id="pip-ext-hairline-fill" class="pip-hairline-fill" style="width:${initPct}%"></div></div>
      `;

      pip.document.getElementById('pip-ext-close').onclick = () => pip.close();
      pip.document.getElementById('pip-ext-play').onclick = () => togglePlay();
      pip.document.getElementById('pip-ext-prev').onclick = () => playPrevTrack();
      pip.document.getElementById('pip-ext-next').onclick = () => playNextTrack();
      pip.document.getElementById('pip-ext-mute').onclick = () => toggleMute();
      pip.document.getElementById('pip-ext-add').onclick = () => openAddToPlaylistModal(state.currentTrack);
      pip.document.getElementById('pip-ext-mode').onclick = () => {
        const compact = pip.document.body.getAttribute('data-mode') === 'compact';
        pip.document.body.setAttribute('data-mode', compact ? 'cover' : 'compact');
        try { pip.resizeTo(compact ? 300 : 388, compact ? 300 : 126); } catch (_) {}
      };
      const extVolInput = pip.document.getElementById('pip-ext-vol-range');
      if (extVolInput) {
        extVolInput.addEventListener('input', (e) => setPlayerVolume((Number(e.target.value) || 0) / 100));
      }
      let extHoldTimer = null;
      pip.document.body.addEventListener('wheel', (e) => {
        e.preventDefault();
        const curV = state.isMuted ? 0 : (state.volume ?? 0.8);
        setPlayerVolume(Math.max(0, Math.min(1, curV + (e.deltaY < 0 ? 0.05 : -0.05))));
        pip.document.body.classList.add('is-vol-active');
        clearTimeout(extHoldTimer);
        extHoldTimer = setTimeout(() => pip.document.body.classList.remove('is-vol-active'), 1500);
      }, { passive: false });
      pip.document.body.addEventListener('auxclick', (e) => {
        if (e.button === 1) { e.preventDefault(); toggleMute(); }
      });

      const seekTrack = pip.document.getElementById('pip-ext-seek-track');
      if (seekTrack) {
        seekTrack.onclick = (e) => {
          const rect = seekTrack.getBoundingClientRect();
          if (!rect.width || rect.width <= 0) return;
          const frac = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
          seekToFraction(frac);
        };
      }

      pip.addEventListener('pagehide', () => {
        pipWindowInstance = null;
      });

      showToast("Mini Kayan Oynatıcı (PiP) Masaüstünde Açıldı!");
      return;
    } catch(e) {
      console.warn("Document PiP open note:", e);
    }
  }

  // Fallback to in-page dual-mode floating PiP card
  openFloatingPip();
}

function closeDocumentPipPlayer() {
  if (pipWindowInstance) {
    try { pipWindowInstance.close(); } catch(e) {}
    pipWindowInstance = null;
  }
  closeFloatingPip();
}

function openFloatingPip() {
  const el = document.getElementById('kurfa-floating-pip');
  if (!el) return;
  const savedMode = safeGetStorage('kurfa_pip_mode', 'cover') === 'compact' ? 'compact' : 'cover';
  el.setAttribute('data-mode', savedMode);
  const ic = document.getElementById('pip-mode-toggle-icon');
  if (ic) ic.textContent = savedMode === 'compact' ? 'crop_square' : 'view_agenda';
  el.removeAttribute('data-closing');
  el.classList.remove('hidden');
  el.hidden = false;
  initPipSeekbar();
  syncFloatingPipUI();
  syncShuffleRepeatUI();
  if (typeof updateProgressUI === 'function') {
    updateProgressUI(getActiveMediaCurrentTime() || 0, getActiveMediaDuration() || 0);
  }
  showToast("Mini Oynatıcı Açıldı");
}

async function closeFloatingPip() {
  const el = document.getElementById('kurfa-floating-pip');
  if (!el || el.hidden) return;
  if (kurfaCanTransitionDisplay()) {
    el.hidden = true;
  } else {
    el.setAttribute('data-closing', '');
    const anims = typeof el.getAnimations === 'function' ? el.getAnimations() : [];
    if (anims.length > 0) {
      await Promise.race([
        Promise.allSettled(anims.map(a => a.finished)),
        new Promise(r => setTimeout(r, 320))
      ]);
    }
    if (el.hasAttribute('data-closing')) {
      el.removeAttribute('data-closing');
      el.hidden = true;
    }
  }
}

function expandFloatingPipToFull() {
  closeFloatingPip();
  switchTab('calma-listeleri');
}

function syncFloatingPipUI() {
  const track = state.currentTrack;
  const cover = document.getElementById('pip-cover-art');
  const title = document.getElementById('pip-track-title');
  const artist = document.getElementById('pip-track-artist');
  const playIcon = document.getElementById('pip-play-icon');
  const volIcon = document.getElementById('pip-vol-icon');
  const volRange = document.getElementById('pip-volume-range');
  const volPctEl = document.getElementById('pip-volume-pct');

  const safeThumb = track ? safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo_256.webp') : './kurfamuzik_logo_256.webp';
  const cleanTitle = track ? (formatCleanTrackTitle(track.title) || track.title || 'Kurfa Müzik') : 'Kurfa Müzik';
  const cleanArtist = resolveCleanArtistLabel(track);
  const effVolPct = Math.round((state.isMuted ? 0 : Math.max(0, Math.min(1, Number(state.volume ?? 0.8)))) * 100);
  const volGlyph = effVolPct === 0 ? 'volume_off' : (effVolPct < 50 ? 'volume_down' : 'volume_up');

  if (cover) cover.src = safeThumb;
  if (title) title.textContent = cleanTitle;
  if (artist) artist.textContent = cleanArtist;
  if (playIcon) playIcon.textContent = state.isPlaying ? 'pause' : 'play_arrow';
  if (volIcon) volIcon.textContent = volGlyph;
  if (volRange) {
    volRange.value = String(effVolPct);
    volRange.setAttribute('aria-valuetext', `${effVolPct}%`);
    volRange.style.setProperty('--attr-min', '0');
    volRange.style.setProperty('--attr-max', '100');
    volRange.style.setProperty('--control-value', String(effVolPct));
  }
  if (volPctEl) volPctEl.textContent = `${effVolPct}%`;

  const pipEl = document.getElementById('kurfa-floating-pip');
  if (pipEl && typeof FxReactiveStudio !== 'undefined' && FxReactiveStudio._currentRgb) {
    pipEl.style.setProperty('--pip-rgb', FxReactiveStudio._currentRgb);
  }

  // Also sync external Document PiP window
  if (pipWindowInstance && pipWindowInstance.document) {
    const doc = pipWindowInstance.document;
    const extCover = doc.getElementById('pip-ext-cover');
    const extTitle = doc.getElementById('pip-ext-title');
    const extArtist = doc.getElementById('pip-ext-artist');
    const extPlay = doc.getElementById('pip-ext-play-icon');
    const extVolIcon = doc.getElementById('pip-ext-vol-icon');
    const extVolRange = doc.getElementById('pip-ext-vol-range');
    const extVolPct = doc.getElementById('pip-ext-vol-pct');
    if (extCover) extCover.src = safeThumb;
    if (extTitle) extTitle.textContent = cleanTitle;
    if (extArtist) extArtist.textContent = cleanArtist;
    if (extPlay) extPlay.textContent = state.isPlaying ? 'pause' : 'play_arrow';
    if (extVolIcon) extVolIcon.textContent = volGlyph;
    if (extVolRange) extVolRange.value = String(effVolPct);
    if (extVolPct) extVolPct.textContent = `${effVolPct}%`;
  }
}

function initPipSeekbar() {
  const track = document.getElementById('pip-seek-track');
  if (track) {
    track.onclick = (e) => {
      const rect = track.getBoundingClientRect();
      if (!rect.width || rect.width <= 0) return;
      const frac = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      seekToFraction(frac);
    };
  }
  if (__kurfaPipBound) return;
  __kurfaPipBound = true;

  const pipEl = document.getElementById('kurfa-floating-pip');
  const volInput = document.getElementById('pip-volume-range');
  const dragHandle = document.getElementById('pip-drag-handle');

  if (volInput) {
    volInput.addEventListener('input', (e) => {
      const v = Math.max(0, Math.min(100, Number(e.target.value) || 0));
      volInput.style.setProperty('--control-value', String(v));
      volInput.setAttribute('aria-valuetext', `${v}%`);
      setPlayerVolume(v / 100);
      bumpFloatingPipVolumeHold(pipEl);
    });
  }

  if (pipEl) {
    pipEl.addEventListener('wheel', (e) => {
      e.preventDefault();
      const curV = state.isMuted ? 0 : Math.max(0, Math.min(1, Number(state.volume ?? 0.8)));
      const nextV = Math.max(0, Math.min(1, curV + (e.deltaY < 0 ? 0.05 : -0.05)));
      setPlayerVolume(nextV);
      bumpFloatingPipVolumeHold(pipEl);
    }, { passive: false });

    pipEl.addEventListener('auxclick', (e) => {
      if (e.button === 1) {
        e.preventDefault();
        toggleMute();
        bumpFloatingPipVolumeHold(pipEl);
      }
    });
  }

  if (dragHandle && pipEl) {
    let dragging = false;
    let startX = 0, startY = 0, startLeft = 0, startTop = 0;
    dragHandle.addEventListener('pointerdown', (e) => {
      if (e.button !== 0 || e.target.closest('button')) return;
      dragging = true;
      const r = pipEl.getBoundingClientRect();
      pipEl.style.left = `${r.left}px`;
      pipEl.style.top = `${r.top}px`;
      pipEl.style.right = 'auto';
      pipEl.style.bottom = 'auto';
      startLeft = r.left;
      startTop = r.top;
      startX = e.clientX;
      startY = e.clientY;
      try { dragHandle.setPointerCapture(e.pointerId); } catch (_) {}
      dragHandle.style.cursor = 'grabbing';
    });
    dragHandle.addEventListener('pointermove', (e) => {
      if (!dragging) return;
      const nx = Math.max(8, Math.min(window.innerWidth - pipEl.offsetWidth - 8, startLeft + (e.clientX - startX)));
      const ny = Math.max(8, Math.min(window.innerHeight - pipEl.offsetHeight - 8, startTop + (e.clientY - startY)));
      pipEl.style.left = `${nx}px`;
      pipEl.style.top = `${ny}px`;
    });
    const stopDrag = (e) => {
      if (!dragging) return;
      dragging = false;
      dragHandle.style.cursor = 'grab';
      try { dragHandle.releasePointerCapture(e.pointerId); } catch (_) {}
    };
    dragHandle.addEventListener('pointerup', stopDrag);
    dragHandle.addEventListener('pointercancel', stopDrag);
  }
}

// =============================================================================
// 13.12 BLUETOOTH & AUDIO OUTPUT DEVICE SELECTOR (Spotify Connect to Device)
// =============================================================================

async function requestAudioDeviceAccess() {
  const isEn = getAppLanguage() === 'en';
  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach(t => t.stop());
      showToast(isEn ? 'Device permission granted. Listing audio outputs.' : 'Cihaz izni onaylandı. Kulaklık isimleri listeleniyor.');
      await openDevicePickerModal();
    } catch(e) {
      showToast(isEn ? 'Device permission denied. Using system default output.' : 'Cihaz izni reddedildi. Sistem standart ses çıkışı devrede.');
    }
  }
}

async function openDevicePickerModal() {
  const modal = document.getElementById('device-picker-modal');
  const card = document.getElementById('device-picker-modal-card');
  if (!modal || !card) return;
  const isEn = getAppLanguage() === 'en';

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');

  const listEl = document.getElementById('dp-devices-list');
  if (!listEl) return;

  listEl.innerHTML = `
    <div class="py-3 text-center text-xs text-on-surface-variant flex items-center justify-center gap-1.5">
      <span class="material-symbols-outlined text-[16px] animate-spin text-primary">refresh</span>
      <span>${escapeHtml(t('dp.scanning'))}</span>
    </div>
  `;

  if (navigator.mediaDevices && navigator.mediaDevices.enumerateDevices) {
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const outputs = devices.filter(d => d.kind === 'audiooutput');
      
      listEl.innerHTML = '';

      const hasHiddenLabels = outputs.some(d => !d.label || d.label.trim() === '');
      if (hasHiddenLabels) {
        const unlockBanner = document.createElement('div');
        unlockBanner.className = "p-2.5 rounded-xl bg-surface-container-low border border-surface-container flex flex-col gap-2 mb-1";
        unlockBanner.innerHTML = `
          <div class="flex items-center gap-2 text-xs font-bold text-on-surface">
            <span class="material-symbols-outlined text-primary text-[18px]">bluetooth</span>
            <span>${escapeHtml(t('dp.unlock_title'))}</span>
          </div>
          <p class="text-[10px] text-on-surface-variant leading-tight">
            ${escapeHtml(t('dp.unlock_desc'))}
          </p>
          <button type="button" class="py-1.5 px-3 rounded-lg bg-primary text-on-primary text-[11px] font-bold hover:bg-primary-container transition-all flex items-center justify-center gap-1 shadow-xs" onclick="requestAudioDeviceAccess()">
            <span class="material-symbols-outlined text-[14px]">lock_open</span>
            <span>${escapeHtml(t('dp.unlock_btn'))}</span>
          </button>
        `;
        listEl.appendChild(unlockBanner);
      }

      if (outputs.length > 0) {
        outputs.forEach((dev, idx) => {
          const rawLabel = dev.label ? dev.label.toLowerCase() : '';
          const isBluetooth = rawLabel.includes('bluetooth') || 
                              rawLabel.includes('kulaklık') || 
                              rawLabel.includes('headset') ||
                              rawLabel.includes('buds') ||
                              rawLabel.includes('airpods') ||
                              rawLabel.includes('wireless') ||
                              rawLabel.includes('hands-free');

          const isCurrent = (state.currentAudioSinkId && state.currentAudioSinkId === dev.deviceId) ||
                            (!state.currentAudioSinkId && (dev.deviceId === 'default' || idx === 0));

          const displayLabel = dev.label || `${isEn ? 'Audio Output Device' : 'Ses Çıkış Aygıtı'} #${idx + 1}`;
          const safeDevLabel = escapeHtml(displayLabel);

          const item = document.createElement('div');
          item.className = `flex items-center justify-between p-2.5 rounded-xl cursor-pointer transition-colors border ${isCurrent ? 'border-primary/40 bg-primary/5' : 'border-transparent hover:bg-surface-container'}`;
          item.innerHTML = `
            <div class="flex items-center gap-2.5 min-w-0">
              <span class="material-symbols-outlined text-[20px] ${isCurrent ? 'text-primary' : (isBluetooth ? 'text-secondary' : 'text-on-surface-variant')}">
                ${isBluetooth ? 'headphones' : 'speaker'}
              </span>
              <div class="flex flex-col min-w-0">
                <div class="flex items-center gap-1.5">
                  <span class="text-xs font-bold text-on-surface truncate">${safeDevLabel}</span>
                  ${isCurrent ? `<span class="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-primary text-on-primary">${escapeHtml(t('dp.active_pill'))}</span>` : ''}
                </div>
                <span class="text-[10px] text-on-surface-variant">${escapeHtml(isBluetooth ? t('dp.bt_headset') : (dev.deviceId === 'default' ? t('dp.sys_default') : t('dp.ext_speaker')))}</span>
              </div>
            </div>
            <span class="material-symbols-outlined text-[18px] ${isCurrent ? 'text-primary' : 'text-on-surface-variant'}">
              ${isCurrent ? 'check_circle' : 'arrow_forward'}
            </span>
          `;
          item.onclick = () => switchAudioOutputDevice(dev.deviceId, displayLabel);
          listEl.appendChild(item);
        });
      } else {
        listEl.innerHTML = `
          <div class="py-3 text-center text-xs text-on-surface-variant">
            ${escapeHtml(t('dp.no_devices'))}
          </div>
        `;
      }
    } catch(e) {
      listEl.innerHTML = `
        <div class="py-3 text-center text-xs text-on-surface-variant">
          ${escapeHtml(t('dp.fallback_msg'))}
        </div>
      `;
    }
  } else {
    listEl.innerHTML = `
      <div class="py-3 text-center text-xs text-on-surface-variant">
        ${escapeHtml(t('dp.unsupported'))}
      </div>
    `;
  }
}

function closeDevicePickerModal() {
  const modal = document.getElementById('device-picker-modal');
  const card = document.getElementById('device-picker-modal-card');
  if (!modal || !card) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  card.classList.add('scale-95');
  card.classList.remove('scale-100');
}

async function switchAudioOutputDevice(deviceId, label) {
  state.currentAudioSinkId = deviceId;
  safeSetStorage('kurfa_audio_sink', deviceId);

  if (DOM.audioEngine && typeof DOM.audioEngine.setSinkId === 'function') {
    try {
      await DOM.audioEngine.setSinkId(deviceId);
    } catch(e) {
      console.warn("audioEngine.setSinkId note:", e);
    }
  }

  const curEl = document.getElementById('dp-current-device-name');
  if (curEl) curEl.textContent = label || t('dp.default_output');

  const isBluetooth = (label || '').toLowerCase().includes('bluetooth') || 
                      (label || '').toLowerCase().includes('kulaklık') || 
                      (label || '').toLowerCase().includes('headset') ||
                      (label || '').toLowerCase().includes('buds') ||
                      (label || '').toLowerCase().includes('airpods');
  const iconEl = document.getElementById('dp-current-device-icon');
  if (iconEl) iconEl.textContent = isBluetooth ? 'headphones' : 'speaker';

  showToast(t('toast.audio_routed', { label: label || t('dp.ext_speaker') }));
  closeDevicePickerModal();
}

async function scanBluetoothDevices() {
  const isEn = getAppLanguage() === 'en';
  if (navigator.bluetooth && navigator.bluetooth.requestDevice) {
    try {
      const dev = await navigator.bluetooth.requestDevice({
        acceptAllDevices: true
      });
      showToast(isEn ? `Bluetooth device selected: ${dev.name || 'Device'}` : `Bluetooth cihazı seçildi: ${dev.name || 'Cihaz'}`);
      openDevicePickerModal();
      return;
    } catch(e) {
      if (e && (e.name === 'NotAllowedError' || e.name === 'SecurityError')) {
        showToast(isEn ? 'Bluetooth device picker was denied or canceled.' : 'Bluetooth cihaz seçimi izin verilmediği veya iptal edildiği için açılamadı.');
        openDevicePickerModal();
        return;
      }
    }
  }
  showToast(isEn ? 'Connect your Bluetooth headphones in OS settings and audio will route automatically.' : 'Bluetooth kulaklığınızı telefon/PC Bluetooth ayarlarınızdan bağladığınızda ses otomatik olarak oraya aktarılır.');
  openDevicePickerModal();
}

// =============================================================================
// 14. KEYBOARD SHORTCUTS & EVENT LISTENERS
// =============================================================================

function setupEventListeners() {
  // Top Search Bar + Live Autocomplete Suggestions
  if (DOM.topSearchInput) {
    DOM.topSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowDown') {
        if (moveSearchSuggestSelection(1)) e.preventDefault();
        return;
      }
      if (e.key === 'ArrowUp') {
        if (moveSearchSuggestSelection(-1)) e.preventDefault();
        return;
      }
      if (e.key === 'Escape') {
        const dd = document.getElementById('search-suggest-dropdown');
        if (dd && !dd.classList.contains('hidden')) {
          e.preventDefault();
          e.stopPropagation();
          hideSearchSuggestionsDropdown();
        }
        return;
      }
      if (e.key === 'Enter') {
        e.preventDefault();
        if (__kurfaSuggestActiveIdx >= 0 && __kurfaSuggestEntries[__kurfaSuggestActiveIdx]) {
          selectSearchSuggestionEntry(__kurfaSuggestEntries[__kurfaSuggestActiveIdx]);
          return;
        }
        hideSearchSuggestionsDropdown();
        const val = DOM.topSearchInput.value.trim();
        if (val) executeSearchImmediate(val, true);
      }
    });
    DOM.topSearchInput.addEventListener('input', (e) => {
      const rawVal = e.target.value;
      const aramaInp = document.getElementById('arama-page-search-input');
      if (aramaInp && aramaInp.value !== rawVal) aramaInp.value = rawVal;
      if (typeof syncTopSearchClearBtn === 'function') syncTopSearchClearBtn();
      const val = rawVal.trim();
      if (!val) {
        hideSearchSuggestionsDropdown();
        if (!rawVal) {
          clearSearchInput();
        } else if (typeof showSearchDiscoveryHub === 'function') {
          showSearchDiscoveryHub();
        }
        return;
      }
      scheduleSearchSuggestions(val);
      if (val.length >= 2) debouncedSearch(val);
    });
    DOM.topSearchInput.addEventListener('focus', () => {
      const val = DOM.topSearchInput.value.trim();
      if (val.length >= 1) {
        scheduleSearchSuggestions(val);
      }
    });
  }
  const aramaPageInput = document.getElementById('arama-page-search-input');
  if (aramaPageInput) {
    aramaPageInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const val = aramaPageInput.value.trim();
        if (val) executeSearchImmediate(val, true);
      }
    });
    aramaPageInput.addEventListener('input', (e) => {
      const rawVal = e.target.value;
      if (DOM.topSearchInput && DOM.topSearchInput.value !== rawVal) DOM.topSearchInput.value = rawVal;
      if (typeof syncTopSearchClearBtn === 'function') syncTopSearchClearBtn();
      const val = rawVal.trim();
      if (!val) {
        if (!rawVal) {
          clearSearchInput();
        } else if (typeof showSearchDiscoveryHub === 'function') {
          showSearchDiscoveryHub();
        }
        return;
      }
      if (val.length >= 2) debouncedSearch(val);
    });
  }
  document.addEventListener('pointerdown', (e) => {
    const wrapper = document.getElementById('top-search-wrapper');
    const dd = document.getElementById('search-suggest-dropdown');
    if (wrapper && !wrapper.contains(e.target) && (!dd || !dd.contains(e.target))) {
      hideSearchSuggestionsDropdown();
    }
  });
  window.addEventListener('resize', () => {
    const dd = document.getElementById('search-suggest-dropdown');
    if (dd && !dd.classList.contains('hidden')) {
      positionSearchSuggestionsDropdown();
    }
  }, { passive: true });

  // Global Keyboard Shortcuts
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const modalClosers = [
        ['album-detail-modal', closeAlbumDetail],
        ['ad-warning-modal', () => dismissAdWarningModal(false)],
        ['app-install-modal', closeAppInstallModal],
        ['google-account-chooser-modal', closeGoogleAccountChooser],
        ['create-playlist-modal', closeCreatePlaylistModal],
        ['add-to-playlist-modal', closeAddToPlaylistModal],
        ['device-picker-modal', closeDevicePickerModal],
        ['profile-modal', closeProfileModal],
        ['share-modal', closeShareModal],
        ['downloader-modal', closeDownloaderModal]
      ];
      for (const [id, closeFn] of modalClosers) {
        const el = document.getElementById(id);
        if (el && !el.classList.contains('pointer-events-none')) {
          closeFn();
          return;
        }
      }
      if (state.queueDrawerOpen) {
        toggleQueueDrawer();
        return;
      }
    }

    if (
      e.target &&
      (e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA' ||
        e.target.tagName === 'SELECT' ||
        e.target.isContentEditable)
    ) {
      return;
    }

    if (e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
      togglePlay();
    } else if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (DOM.topSearchInput) {
        DOM.topSearchInput.focus();
        DOM.topSearchInput.select();
      }
    }
  });

  // Modal Backdrop Click to Close
  const backdropBindings = [
    [DOM.downloaderModal, closeDownloaderModal],
    [document.getElementById('share-modal'), closeShareModal],
    [document.getElementById('profile-modal'), closeProfileModal],
    [document.getElementById('device-picker-modal'), closeDevicePickerModal],
    [document.getElementById('create-playlist-modal'), closeCreatePlaylistModal],
    [document.getElementById('add-to-playlist-modal'), closeAddToPlaylistModal],
    [document.getElementById('app-install-modal'), closeAppInstallModal],
    [document.getElementById('ad-warning-modal'), () => dismissAdWarningModal(false)],
    [document.getElementById('google-account-chooser-modal'), closeGoogleAccountChooser]
  ];
  backdropBindings.forEach(([modalEl, closeFn]) => {
    if (modalEl) {
      modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl) {
          closeFn();
        }
      });
    }
  });

  document.addEventListener('keydown', (e) => {
    const tag = (e.target && e.target.tagName) ? e.target.tagName.toLowerCase() : '';
    if (tag === 'input' || tag === 'textarea' || (e.target && e.target.isContentEditable)) return;
    if (e.key === 'ArrowUp' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      setPlayerVolume((state.volume || 0) + 0.05);
    } else if (e.key === 'ArrowDown' && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      setPlayerVolume((state.volume || 0) - 0.05);
    } else if ((e.key === 'm' || e.key === 'M') && !e.ctrlKey && !e.metaKey && !e.altKey) {
      toggleMute();
    }
  });

  // Seamless Background Tab & Alt-Tab Audio Continuity + Zero-Waste Idle Mode (for Gaming/Low-End PCs)
  document.addEventListener('visibilitychange', () => {
    const isHidden = Boolean(document.hidden);
    if (document.body) {
      document.body.classList.toggle('kurfa-bg-idle', isHidden);
    }
    if (isHidden) {
      if (seekbarRaf) {
        try { clearTimeout(seekbarRaf); cancelAnimationFrame(seekbarRaf); } catch (_) {}
        seekbarRaf = null;
      }
      if (state.isPlaying && !state.userPaused && typeof KurfaDSP !== 'undefined') {
        KurfaDSP.resumeContext();
      }
    }

    if (!state.userPaused && state.currentTrack && state.isPlaying) {
      const videoOwnsPlayback = state._activeMediaEngine === 'native-video' ||
        (state.deckVisualMode === 'video' && DOM.videoEngine && Boolean(DOM.videoEngine.getAttribute('src')));
      const audioOwnsPlayback = !videoOwnsPlayback && (
        state._activeMediaEngine === 'audio' ||
        (state.deckVisualMode !== 'video' && DOM.audioEngine && Boolean(DOM.audioEngine.getAttribute('src')))
      );
      if (videoOwnsPlayback) {
        if (DOM.videoEngine && DOM.videoEngine.getAttribute('src') && DOM.videoEngine.paused && !DOM.videoEngine.ended) {
          try { DOM.videoEngine.play().catch(() => {}); } catch (_) {}
        }
      } else if (audioOwnsPlayback) {
        if (DOM.audioEngine && DOM.audioEngine.getAttribute('src') && DOM.audioEngine.paused && !DOM.audioEngine.ended) {
          try {
            DOM.audioEngine.play().catch(() => {});
          } catch (e) {}
        }
      } else if (state._activeMediaEngine === 'youtube' && state.ytReady && state.ytPlayer && typeof state.ytPlayer.getPlayerState === 'function') {
        try {
          const pState = state.ytPlayer.getPlayerState();
          if (pState === 2 || pState === 5) {
            state.ytPlayer.playVideo();
          }
        } catch (e) {}
      }
    }

    // Verification sync only when returning to active tab (DSP & Tempo are already applied on background transition)
    if (!document.hidden) {
      if (typeof KurfaDSP !== 'undefined') {
        KurfaDSP.syncAllParams();
      }
      if (state.isPlaying) {
        if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
        const curTime = getActiveMediaCurrentTime();
        const duration = getActiveMediaDuration();
        if (duration && duration > 0) {
          updateSeekbarUI(curTime, duration);
          syncLyricsToTime(curTime);
        }
      }
    }
  });

  // Audio Engine Lifecycle & Strict Mutual Exclusion
  if (DOM.audioEngine) {
    let _audioStallTimer = null;
    const clearAudioStallWatchdog = () => {
      if (_audioStallTimer) {
        clearTimeout(_audioStallTimer);
        _audioStallTimer = null;
      }
    };

    const handoffAudioErrorOrStall = async (curTimeSec) => {
      if (state._playerInError || state._lastErrorVideoId || state._switchingDeckMode) return;
      const safeTimeSec = (!state._activeTrackConfirmedPlaying || (Date.now() - (state._trackSwitchStartedAt || 0)) < 4000)
        ? 0
        : Math.max(0, Math.floor(curTimeSec || 0));
      const isLocalCur = Boolean(state.currentTrack?.isLocal) || String(state.currentTrack?.id || '').startsWith('local_');
      if (isLocalCur) {
        if (!DOM.audioEngine || !DOM.audioEngine.error) {
          return;
        }
        if (state.isPlaying && !state.userPaused) {
          playNextTrack({ isAutoErrorSkip: true });
        }
        return;
      }
      const isAudius = String(state.currentTrack?.id || '').startsWith('audius_');
      const playId = isAudius ? null : safeYtId(state.currentTrack?.ytId || state.currentTrack?.id);
      const errToken = currentPlaybackToken;
      if (!state.isPlaying || state.userPaused) return;

      if (state._audioEngineRetryToken !== errToken) {
        state._audioEngineRetryToken = errToken;
        state._audioEngineRetryCount = 0;
      }
      state._audioEngineRetryCount = (state._audioEngineRetryCount || 0) + 1;

      const prevSrc = `${DOM.audioEngine.getAttribute('src') || ''}`;
      const isNativeProxySrc = prevSrc.includes('/__kurfa_native_audio__/');
      const maxDirectRetries = isNativeProxySrc
        ? (state._activeTrackConfirmedPlaying ? 2 : 1)
        : 2;

      if (playId && hasAdFreeLocalEngine() && state.deckVisualMode !== 'video' && state._audioEngineRetryCount <= maxDirectRetries) {
        try {
          if (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.invalidateAudioStream === 'function') {
            window.KurfaAndroidBridge.invalidateAudioStream(playId);
          }
          const fresh = await kurfaResolveDirectAudio(playId);
          if (errToken !== currentPlaybackToken || state.userPaused || state.deckVisualMode === 'video') return;
          if (fresh && fresh.success && fresh.streamUrl) {
            let nextUrl = fresh.streamUrl;
            if (nextUrl === prevSrc || nextUrl.includes('/__kurfa_native_audio__/')) {
              const sep = nextUrl.includes('?') ? '&' : '?';
              nextUrl = `${nextUrl.split('?')[0]}${sep}cb=${Date.now()}`;
            }
            loadDirectAudioStream(nextUrl, safeTimeSec, errToken, playId);
            return;
          }
        } catch (_) {}
      }

      if (playId && hasAdFreeLocalEngine() && state.deckVisualMode !== 'video' && state._audioEngineRetryCount <= 1) {
        try {
          const aud = await kurfaTryQuickAudiusMatch(state.currentTrack, 1200);
          if (errToken !== currentPlaybackToken || state.userPaused || state.deckVisualMode === 'video') return;
          if (aud && aud.success && aud.streamUrl && aud.streamUrl !== prevSrc) {
            loadDirectAudioStream(aud.streamUrl, safeTimeSec, errToken, null);
            return;
          }
        } catch (_) {}
      }

      if (playId && errToken === currentPlaybackToken && !state.userPaused) {
        try {
          DOM.audioEngine.pause();
          DOM.audioEngine.removeAttribute('src');
        } catch (_) {}
        loadYouTubePlayback(
          playId,
          state.currentTrack,
          safeTimeSec,
          errToken,
          Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function')
        );
      } else if (isAudius && state.isPlaying && !state.userPaused) {
        playNextTrack({ isAutoErrorSkip: true });
      }
    };

    const scheduleStallWatchdog = () => {
      clearAudioStallWatchdog();
      if (!DOM.audioEngine.getAttribute('src') || state.userPaused || !state.isPlaying || state.deckVisualMode === 'video') return;
      const snapTime = DOM.audioEngine.currentTime || 0;
      const snapToken = currentPlaybackToken;
      const waitMs = DOM.audioEngine.networkState === 2 ? 14000 : 9000;
      _audioStallTimer = setTimeout(() => {
        _audioStallTimer = null;
        if (snapToken !== currentPlaybackToken || state.userPaused || !state.isPlaying || state.deckVisualMode === 'video') return;
        if (!DOM.audioEngine || !DOM.audioEngine.getAttribute('src') || DOM.audioEngine.ended) return;
        const nowTime = DOM.audioEngine.currentTime || 0;
        if (DOM.audioEngine.readyState < 3 && !DOM.audioEngine.paused && Math.abs(nowTime - snapTime) < 0.25) {
          handoffAudioErrorOrStall(Math.max(0, Math.floor(nowTime || state.currentPlayheadTime || 0)));
        }
      }, waitMs);
    };

    DOM.audioEngine.addEventListener('ended', () => {
      clearAudioStallWatchdog();
      handleTrackEnd();
    });
    DOM.audioEngine.addEventListener('playing', () => {
      clearAudioStallWatchdog();
      if (DOM.audioEngine && DOM.audioEngine.getAttribute('src')) {
        state._activeMediaEngine = 'audio';
        state._activeTrackConfirmedPlaying = true;
        applyMediaPlaybackRate(DOM.audioEngine);
        if (typeof KurfaDSP !== 'undefined') {
          KurfaDSP.ensureConnected(DOM.audioEngine);
          KurfaDSP.syncAllParams(DOM.audioEngine);
        } else {
          syncNativeFxParams();
        }
        if (typeof updateFxEngineNote === 'function') updateFxEngineNote();
      }
    });
    DOM.audioEngine.addEventListener('canplay', () => {
      clearAudioStallWatchdog();
      if (DOM.audioEngine && DOM.audioEngine.getAttribute('src')) {
        applyMediaPlaybackRate(DOM.audioEngine);
        if (typeof KurfaDSP !== 'undefined') {
          KurfaDSP.ensureConnected(DOM.audioEngine);
          KurfaDSP.syncAllParams(DOM.audioEngine);
        }
      }
    });
    DOM.audioEngine.addEventListener('canplaythrough', clearAudioStallWatchdog);
    DOM.audioEngine.addEventListener('progress', () => {
      if (_audioStallTimer && DOM.audioEngine && DOM.audioEngine.readyState >= 3) {
        clearAudioStallWatchdog();
      }
    });
    const syncNativeDurFromAudio = () => {
      if (!DOM.audioEngine || !DOM.audioEngine.getAttribute('src') || state._activeMediaEngine !== 'audio') return;
      applyMediaPlaybackRate(DOM.audioEngine);
      if (typeof KurfaDSP !== 'undefined') {
        KurfaDSP.ensureConnected(DOM.audioEngine);
        KurfaDSP.syncAllParams(DOM.audioEngine);
      }
      const d = DOM.audioEngine.duration;
      if (Number.isFinite(d) && d > 0) {
        if (DOM.playerTimeDur) DOM.playerTimeDur.textContent = formatTime(d);
      }
    };
    DOM.audioEngine.addEventListener('loadedmetadata', syncNativeDurFromAudio);
    DOM.audioEngine.addEventListener('durationchange', syncNativeDurFromAudio);
    DOM.audioEngine.addEventListener('timeupdate', () => {
      clearAudioStallWatchdog();
      if (!DOM.audioEngine || !DOM.audioEngine.getAttribute('src') || state._activeMediaEngine !== 'audio') return;
      if (!state._activeTrackConfirmedPlaying && (Date.now() - (state._trackSwitchStartedAt || 0)) < 5000) return;
      const cur = DOM.audioEngine.currentTime;
      if (Number.isFinite(cur) && cur >= 0) {
        state.currentPlayheadTime = cur;
        const dur = getActiveMediaDuration();
        if (typeof checkSponsorBlockSkip === 'function') checkSponsorBlockSkip(cur);
        if (typeof checkCrossfadeTick === 'function') checkCrossfadeTick(cur, dur);
        if ((cur >= 4 || (dur > 0 && (dur - cur) <= 15)) && typeof prefetchNextTrackStream === 'function') {
          prefetchNextTrackStream();
        }
        // Keep Android notification progress accurate even when screen is off / app is backgrounded
        if (document.hidden && state.isPlaying && typeof isAndroidNativeEngine === 'function' && isAndroidNativeEngine() &&
            window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.updatePlaybackTiming === 'function') {
          const nowMs = Date.now();
          const tid = state.currentTrack ? (state.currentTrack.id || '') : '';
          if (window._lastAndroidTimingTrackId !== tid || !window._lastAndroidTimingSyncAt || (nowMs - window._lastAndroidTimingSyncAt) >= 4000) {
            window._lastAndroidTimingTrackId = tid;
            window._lastAndroidTimingSyncAt = nowMs;
            try { window.KurfaAndroidBridge.updatePlaybackTiming(Math.floor(cur), Math.floor(dur || 0)); } catch (_) {}
          }
        }
      }
    });
    DOM.audioEngine.addEventListener('waiting', scheduleStallWatchdog);
    DOM.audioEngine.addEventListener('stalled', scheduleStallWatchdog);
    DOM.audioEngine.addEventListener('error', (e) => {
      clearAudioStallWatchdog();
      const prevSrc = `${DOM.audioEngine.getAttribute('src') || ''}`;
      if (!prevSrc) return;
      if (
        DOM.audioEngine.crossOrigin === 'anonymous' &&
        !state._activeTrackConfirmedPlaying &&
        typeof KurfaDSP !== 'undefined' &&
        !KurfaDSP.sourceNode &&
        !KurfaDSP.corsBlockedUrls.has(prevSrc)
      ) {
        KurfaDSP.corsBlockedUrls.add(prevSrc);
        try {
          DOM.audioEngine.removeAttribute('crossorigin');
          DOM.audioEngine.crossOrigin = null;
          DOM.audioEngine.src = prevSrc;
          DOM.audioEngine.play().catch(() => {});
          return;
        } catch (_) {}
      }
      console.warn("DOM.audioEngine media error:", e);
      const cur = Math.max(0, Math.floor(DOM.audioEngine.currentTime || state.currentPlayheadTime || 0));
      handoffAudioErrorOrStall(cur);
    });
    let _bgPauseRecoverCount = 0;
    DOM.audioEngine.addEventListener('play', () => {
      _bgPauseRecoverCount = 0;
      clearAudioStallWatchdog();
      if (DOM.audioEngine && DOM.audioEngine.getAttribute('src')) {
        state._activeMediaEngine = 'audio';
        applyMediaPlaybackRate(DOM.audioEngine);
        if (typeof KurfaDSP !== 'undefined') {
          KurfaDSP.ensureConnected(DOM.audioEngine);
          KurfaDSP.syncAllParams(DOM.audioEngine);
        } else {
          syncNativeFxParams();
        }
      }
      if (state.ytPlayer && typeof state.ytPlayer.pauseVideo === 'function') {
        try { state.ytPlayer.pauseVideo(); } catch (e) {}
      }
      syncNativeAppPlaybackState(true);
      state.isPlaying = true;
      updatePlayPauseUI(true);
      startSeekbarTicker();
    });
    DOM.audioEngine.addEventListener('pause', () => {
      clearAudioStallWatchdog();
      if (DOM.audioEngine.getAttribute('src') && state.userPaused) {
        syncNativeAppPlaybackState(false);
        state.isPlaying = false;
        updatePlayPauseUI(false);
      } else if (
        DOM.audioEngine.getAttribute('src') && !DOM.audioEngine.seeking &&
        state.deckVisualMode !== 'video' && !state.userPaused && state.isPlaying && !DOM.audioEngine.ended &&
        _bgPauseRecoverCount < 8
      ) {
        _bgPauseRecoverCount += 1;
        setTimeout(() => {
          if (
            !state.userPaused && state.isPlaying && state.deckVisualMode !== 'video' &&
            DOM.audioEngine && DOM.audioEngine.getAttribute('src') && DOM.audioEngine.paused && !DOM.audioEngine.ended
          ) {
            if (typeof KurfaDSP !== 'undefined') KurfaDSP.resumeContext();
            DOM.audioEngine.play().catch(() => {});
          }
        }, 120);
      }
    });
  }

  // Direct Native HTML5 Video Engine Lifecycle (Ad-Free Windows/Android Proxy)
  if (DOM.videoEngine) {
    DOM.videoEngine.addEventListener('ended', () => {
      clearVideoStallWatchdog();
      if (state._activeMediaEngine === 'native-video') {
        handleTrackEnd();
      }
    });
    const scheduleVideoStallRecovery = () => {
      clearVideoStallWatchdog();
      if (state.userPaused || state.deckVisualMode !== 'video' || state._activeMediaEngine !== 'native-video') return;
      const vidTok = state._nativeVideoToken || currentPlaybackToken;
      state._videoStallFallbackTimer = setTimeout(() => {
        if (state.userPaused || state.deckVisualMode !== 'video' || state._activeMediaEngine !== 'native-video') return;
        if (vidTok !== currentPlaybackToken) return;
        const fallbackYt = state._nativeVideoFallbackYtId || safeYtId(state.currentTrack?.ytId || state.currentTrack?.id);
        const fallbackCur = Math.max(0, Number(DOM.videoEngine.currentTime || state.currentPlayheadTime || 0));
        releaseVideoHardwareDecoder();
        showDeckVideoPlaceholder(true);
        if (fallbackYt) {
          loadYouTubePlayback(fallbackYt, state.currentTrack, fallbackCur, vidTok, Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function'));
          if (typeof syncPersistentPlayerPosition === 'function') syncPersistentPlayerPosition();
        }
      }, 8000);
    };
    const syncNativeVideoDspAndRate = () => {
      if (!DOM.videoEngine || !DOM.videoEngine.getAttribute('src') || state._activeMediaEngine !== 'native-video') return;
      applyMediaPlaybackRate(DOM.videoEngine);
      if (typeof KurfaDSP !== 'undefined') {
        KurfaDSP.ensureConnected(DOM.videoEngine);
        KurfaDSP.syncAllParams(DOM.videoEngine);
      } else {
        syncNativeFxParams();
      }
      const d = DOM.videoEngine.duration;
      if (Number.isFinite(d) && d > 0 && DOM.playerTimeDur) {
        DOM.playerTimeDur.textContent = formatTime(d);
      }
    };
    DOM.videoEngine.addEventListener('loadedmetadata', syncNativeVideoDspAndRate);
    DOM.videoEngine.addEventListener('durationchange', syncNativeVideoDspAndRate);
    DOM.videoEngine.addEventListener('canplay', () => {
      clearVideoStallWatchdog();
      showDeckVideoPlaceholder(false);
      syncNativeVideoDspAndRate();
    });
    DOM.videoEngine.addEventListener('waiting', scheduleVideoStallRecovery);
    DOM.videoEngine.addEventListener('stalled', scheduleVideoStallRecovery);
    DOM.videoEngine.addEventListener('play', () => {
      clearVideoStallWatchdog();
      if (!DOM.videoEngine.getAttribute('src')) return;
      state._activeMediaEngine = 'native-video';
      state.userPaused = false;
      state.isPlaying = true;
      syncNativeVideoDspAndRate();
      updatePlayPauseUI(true);
      syncNativeAppPlaybackState(true);
      startSeekbarTicker();
    });
    DOM.videoEngine.addEventListener('playing', () => {
      clearVideoStallWatchdog();
      showDeckVideoPlaceholder(false);
      if (!DOM.videoEngine.getAttribute('src')) return;
      state._activeMediaEngine = 'native-video';
      state._activeTrackConfirmedPlaying = true;
      syncNativeVideoDspAndRate();
      if (typeof updateFxEngineNote === 'function') updateFxEngineNote();
    });
    DOM.videoEngine.addEventListener('pause', () => {
      clearVideoStallWatchdog();
      if (state._switchingDeckMode) return;
      if (state._activeMediaEngine === 'native-video' && DOM.videoEngine.getAttribute('src') && !DOM.videoEngine.seeking && !DOM.videoEngine.ended) {
        state.userPaused = true;
        state.isPlaying = false;
        updatePlayPauseUI(false);
        syncNativeAppPlaybackState(false, true);
      }
    });
    DOM.videoEngine.addEventListener('volumechange', () => {
      if (state._activeMediaEngine !== 'native-video' || !DOM.videoEngine.getAttribute('src')) return;
      const eff = DOM.videoEngine.muted ? 0 : Number(DOM.videoEngine.volume || 0);
      if (eff === 0 && !state.isMuted && (state.volume || 0) > 0) {
        applyEffectiveVolume();
      }
    });
    DOM.videoEngine.addEventListener('timeupdate', () => {
      if (state._activeMediaEngine !== 'native-video' || !DOM.videoEngine.getAttribute('src')) return;
      const cur = DOM.videoEngine.currentTime;
      if (Number.isFinite(cur) && cur >= 0) {
        state.currentPlayheadTime = cur;
        const dur = getActiveMediaDuration();
        if (typeof checkSponsorBlockSkip === 'function') checkSponsorBlockSkip(cur);
        if (typeof checkCrossfadeTick === 'function') checkCrossfadeTick(cur, dur);
        if ((cur >= 4 || (dur > 0 && (dur - cur) <= 15)) && typeof prefetchNextTrackStream === 'function') {
          prefetchNextTrackStream();
        }
      }
    });
    DOM.videoEngine.addEventListener('error', () => {
      const prevSrc = `${DOM.videoEngine.getAttribute('src') || ''}`;
      if (!prevSrc || state._activeMediaEngine !== 'native-video' || state._switchingDeckMode || state.userPaused) return;
      if (
        DOM.videoEngine.crossOrigin === 'anonymous' &&
        !state._activeTrackConfirmedPlaying &&
        typeof KurfaDSP !== 'undefined' &&
        !KurfaDSP.sourceNodes?.has(DOM.videoEngine) &&
        !KurfaDSP.corsBlockedUrls.has(prevSrc)
      ) {
        KurfaDSP.corsBlockedUrls.add(prevSrc);
        try {
          DOM.videoEngine.removeAttribute('crossorigin');
          DOM.videoEngine.crossOrigin = null;
          DOM.videoEngine.src = prevSrc;
          if (!state.userPaused) DOM.videoEngine.play().catch(() => {});
          return;
        } catch (_) {}
      }
      if (prevSrc.includes('/__kurfa_native_video__/') && (state._nativeVideoProxyRetryCount || 0) < 1) {
        state._nativeVideoProxyRetryCount = (state._nativeVideoProxyRetryCount || 0) + 1;
        const retryUrl = prevSrc + (prevSrc.includes('?') ? '&' : '?') + 'retry=1';
        try {
          DOM.videoEngine.removeAttribute('crossorigin');
          DOM.videoEngine.crossOrigin = null;
          DOM.videoEngine.src = retryUrl;
          if (!state.userPaused) DOM.videoEngine.play().catch(() => {});
          return;
        } catch (_) {}
      }
      const fallbackYt = state._nativeVideoFallbackYtId || safeYtId(state.currentTrack?.ytId || state.currentTrack?.id);
      const fallbackTok = state._nativeVideoToken || currentPlaybackToken;
      const fallbackCur = Math.max(0, Number(DOM.videoEngine.currentTime || state.currentPlayheadTime || 0));
      try {
        DOM.videoEngine.pause();
        DOM.videoEngine.removeAttribute('src');
        DOM.videoEngine.classList.add('hidden');
      } catch (_) {}
      const ph = document.getElementById('deck-video-placeholder');
      if (ph) ph.classList.remove('hidden');
      if (fallbackYt && fallbackTok === currentPlaybackToken && state.deckVisualMode === 'video') {
        loadYouTubePlayback(fallbackYt, state.currentTrack, fallbackCur, fallbackTok, Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function'));
        if (typeof syncPersistentPlayerPosition === 'function') syncPersistentPlayerPosition();
      }
    });
  }
}

// =============================================================================
// 15. INITIALIZATION
// =============================================================================

function initApp() {
  console.log("Initializing Kurfamüzik Client v5...");
  renderKurfaTestBadge();

  try { localStorage.removeItem('kurfa_tahta_mode'); } catch (_) {}
  updateProfileUI();
  if (typeof applyAppLanguage === 'function') {
    applyAppLanguage(getAppLanguage(), false);
  }
  if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
    callExtensionBridge('SET_THEME_MODE', { dark: Boolean(state.profile.darkMode) }, 1500).catch(() => {});
    if (typeof loadUserDataFromDesktop === 'function') {
      loadUserDataFromDesktop();
    }
    if (localStorage.getItem('kurfa_lang')) {
      callExtensionBridge('SET_LANGUAGE', { lang: getAppLanguage() }, 1500).catch(() => {});
    } else if (typeof refreshDesktopBridgeSettings === 'function') {
      refreshDesktopBridgeSettings().catch(() => {});
    }
  }

  // Sync queueIndex with locally restored last played track & persisted queue (0 server load, never auto-plays)
  if (typeof restorePersistedQueue === 'function') {
    restorePersistedQueue();
  }
  if (state.currentTrack && Array.isArray(state.queue) && state.queue.length > 0) {
    const restoredIdx = state.queue.findIndex(t => t && (t.id === state.currentTrack.id || (t.ytId && t.ytId === state.currentTrack.ytId)));
    if (restoredIdx !== -1) state.queueIndex = restoredIdx;
  }
  renderPopularCardsGrid();
  renderHomeTracklistTable();
  renderTrendlerCardsGrid();
  renderPopularArtistsGrid();
  if (typeof renderSearchDiscoveryHub === 'function') {
    renderSearchDiscoveryHub();
  }
  updateQuickFavCount();
  renderFreshReleasesGrid();
  if (typeof renderPersonalizedKesfet === 'function') {
    renderPersonalizedKesfet({ refreshAsync: false });
  }
  renderFavoritesTable();
  renderPlaylistTracksTable();
  updatePlaylistHeroUI();
  renderCustomPlaylistsGrid();
  renderSpotifyPlaylistsGrid();
  updateKutuphaneBadges();

  initDragToScroll(document.getElementById('filter-container'));
  initDragToScroll(document.getElementById('kesfet-subtabs'));
  initDragToScroll(document.getElementById('kutuphane-subtabs'));
  
  updatePlayerTrackUI(state.currentTrack);
  if (state.currentTrack) {
    const estDur = parseDurationToSec(state.currentTrack.duration) || 210;
    state.currentPlayheadTime = 0;
    updateSeekbarUI(0, estDur);
  }
  setPlayerVolume(state.volume);
  updateLyricsDisplay();
  state.deckVisualMode = 'vinyl';
  syncDeckVisualUIOnly('vinyl');
  if (typeof syncTopSearchClearBtn === 'function') syncTopSearchClearBtn();
  initFirebaseSync();

  // Restore Intelligent Persistent Navigation & Sub-Tabs
  if (state.currentKesfetSubTab && state.currentKesfetSubTab !== 'trendler') {
    switchKesfetSubTab(state.currentKesfetSubTab);
  }
  if (state.currentKutuphaneSubTab && state.currentKutuphaneSubTab !== 'favoriler') {
    switchKutuphaneSubTab(state.currentKutuphaneSubTab);
  }
  const _initPath = String(window.location.pathname || '/').replace(/\/+$/, '').toLowerCase();
  const _hasExplicitRoute = /^\/(?:kesfet|arama|kutuphane|kutuphanem|calar|calma-listeleri)$/.test(_initPath) ||
    new URLSearchParams(window.location.search).has('q');

  if (!_hasExplicitRoute && state.currentTab && state.currentTab !== 'kesfet') {
    switchTab(state.currentTab, false);
  }

  // Restore Shuffle & Repeat button states across all player surfaces
  syncShuffleRepeatUI();

  initSeekbarInteractions();
  initVolumeInteractions();

  setupEventListeners();
  handleUrlParameters();
  renderQueueDrawerList();
  fetchExploreData();
  if (typeof hydrateFeaturedArtistsFromApi === 'function') {
    hydrateFeaturedArtistsFromApi();
  }
  if (typeof runOneShotStartupUpdateCheck === 'function') {
    setTimeout(() => runOneShotStartupUpdateCheck(), 3500);
  }

  KurfaDSP.init(DOM.audioEngine);
  initStudioEqFaders();
  setEqualizerPreset(state.activeEqPreset || 'standart', true);
  if (state.proSettings) {
    if (state.proSettings.normalization) KurfaDSP.applyNormalization(true, false);
    if (typeof syncAudioFxUI === 'function') syncAudioFxUI();
    if (typeof LiquidBackground !== 'undefined') LiquidBackground.syncToggleState();
    if (typeof updateSponsorBlockToggleUI === 'function') updateSponsorBlockToggleUI();
    if (typeof SleepTimer !== 'undefined') SleepTimer.updateUI();
    if (typeof syncNativeAndroidQueue === 'function') syncNativeAndroidQueue();
  }
  if (!window.__kurfaProHeartbeatTimer) {
    window.__kurfaProHeartbeatTimer = setInterval(() => {
      try {
        if (typeof SleepTimer !== 'undefined') SleepTimer.tick();
        if (typeof ListeningStats !== 'undefined' && state.isPlaying && !state.userPaused && !state.isSeeking) {
          ListeningStats.tickSecond();
        }
      } catch (_) {}
    }, 1000);
  }
  document.addEventListener('visibilitychange', () => {
    if (typeof LyricsClock !== 'undefined') LyricsClock.syncState();
  });
  document.addEventListener('click', (e) => {
    const pop = document.getElementById('sleep-timer-popover');
    if (!pop || pop.classList.contains('hidden')) return;
    const tEl = e.target;
    if (!pop.contains(tEl) && !tEl.closest('#btn-sleep-timer') && !tEl.closest('#btn-deck-sleep-timer')) {
      pop.classList.add('hidden');
    }
  });
  updateLocalEngineStatusUI();

  if (typeof restoreWebLocalAudioFromDB === 'function') {
    restoreWebLocalAudioFromDB();
  }
  syncPersistentPlayerPosition();
  window.addEventListener('resize', () => {
    scheduleSyncPersistentPlayerPosition();
    if (typeof updateShelfArrowsState === 'function') {
      updateShelfArrowsState(document.getElementById('trendler-cards-grid'));
      updateShelfArrowsState(document.getElementById('popular-artists-grid'));
    }
  }, { passive: true });
  window.addEventListener('scroll', scheduleSyncPersistentPlayerPosition, { passive: true, capture: true });

  // Part E: Background-resilient 500ms mini-player sync heartbeat (does not check document.hidden)
  if (!window.__kurfaDesktopMiniHeartbeatTimer) {
    window.__kurfaDesktopMiniHeartbeatTimer = setInterval(() => {
      try {
        if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
          if (window.__kurfaDesktopMiniPlayerOpen || state.isPlaying) {
            syncDesktopMiniPlayerState(getActiveMediaCurrentTime() || 0, getActiveMediaDuration() || 0);
          }
        }
      } catch (_) {}
    }, 500);
  }
  const persistPlaybackSession = () => {
    try {
      if (state.currentTrack) {
        safeSetStorage('kurfa_last_track', JSON.stringify({
          id: state.currentTrack.id,
          ytId: state.currentTrack.ytId || null,
          title: state.currentTrack.title,
          artist: state.currentTrack.artist,
          thumbnail: getTrackThumbnail(state.currentTrack),
          duration: state.currentTrack.duration,
          source: state.currentTrack.source || null,
          audiusStreamUrl: state.currentTrack.audiusStreamUrl || null,
          isLocal: Boolean(state.currentTrack.isLocal),
          streamUrl: state.currentTrack.streamUrl || null
        }));
      }
      safeSetStorage('kurfa_queue_index', String(state.queueIndex || 0));
      if (typeof persistQueue === 'function') persistQueue();
    } catch (_) {}
  };
  window.addEventListener('pagehide', persistPlaybackSession);
  window.addEventListener('beforeunload', persistPlaybackSession);

  console.log("Kurfamüzik Client v5 Initialized");
}

// Reconcile Web UI when Android Native Media3 ExoPlayer advances the queue natively (screen off/background)
function handleNativeExoTrackTransition(evt) {
  const nextVid = evt && evt.videoId ? safeYtId(evt.videoId) : null;
  if (!nextVid) return false;
  const activeVid = safeYtId(state.currentTrack?.ytId || state.currentTrack?.id);
  if (activeVid === nextVid) return false;

  const q = Array.isArray(state.queue) ? state.queue : [];
  let matchedIdx = -1;
  const rawIdx = Number(evt.index);
  if (Number.isInteger(rawIdx) && rawIdx >= 0 && rawIdx < q.length && q[rawIdx]) {
    const candVid = safeYtId(q[rawIdx].ytId || q[rawIdx].id);
    if (candVid === nextVid) matchedIdx = rawIdx;
  }
  if (matchedIdx === -1) {
    matchedIdx = q.findIndex(t => t && (safeYtId(t.ytId || t.id) === nextVid));
  }

  let nextTrack = (matchedIdx !== -1 && q[matchedIdx]) ? { ...q[matchedIdx] } : null;
  if (!nextTrack) {
    nextTrack = {
      id: nextVid,
      ytId: nextVid,
      title: String(evt.title || 'Kurfamüzik'),
      artist: String(evt.artist || 'Sanatçı'),
      thumbnail: evt.cover ? String(evt.cover) : `https://i.ytimg.com/vi/${nextVid}/hqdefault.jpg`,
      duration: '3:30'
    };
  } else {
    if (evt.title && (!nextTrack.title || nextTrack.title === 'YouTube Parçası')) nextTrack.title = String(evt.title);
    if (evt.artist && (!nextTrack.artist || nextTrack.artist === 'Sanatçı')) nextTrack.artist = String(evt.artist);
    if (evt.cover && !nextTrack.thumbnail) nextTrack.thumbnail = String(evt.cover);
  }

  currentPlaybackToken++;
  if (matchedIdx !== -1) state.queueIndex = matchedIdx;
  state.currentTrack = nextTrack;
  state._activeTrackId = nextTrack.id || nextVid;
  state._activeMediaEngine = 'native-exo';
  state._activeTrackConfirmedPlaying = true;
  state._nativeExoPlayRequestedAt = Date.now();
  state.userPaused = false;
  state.isPlaying = evt.playing !== undefined ? Boolean(evt.playing) : true;
  const posSec = Math.max(0, Number(evt.currentTime) || 0);
  const durSec = Number(evt.duration) > 0 ? Number(evt.duration) : (parseDurationToSec(nextTrack.duration) || 210);
  state._nativeExoCurrentTime = posSec;
  state._nativeExoDuration = Number(evt.duration) > 0 ? Number(evt.duration) : 0;
  state.currentPlayheadTime = posSec;
  kurfaNoteNativeExoProgress(posSec, evt);
  kurfaResetNativeExoWatchdog(posSec);

  safeSetStorage('kurfa_last_track', JSON.stringify({
    id: nextTrack.id,
    ytId: nextTrack.ytId || nextVid,
    title: nextTrack.title,
    artist: nextTrack.artist,
    thumbnail: getTrackThumbnail(nextTrack),
    duration: nextTrack.duration,
    source: nextTrack.source || null
  }));
  recordRecentlyPlayed(nextTrack);
  saveQueueState(true);
  updatePlayerTrackUI(nextTrack);
  updatePlayPauseUI(state.isPlaying);
  if (typeof updateSeekbarUI === 'function') updateSeekbarUI(posSec, durSec);
  if (typeof resetLyricsScrollPosition === 'function') resetLyricsScrollPosition();
  updateLyricsDisplay();
  renderQueueDrawerList();
  if (state.currentTab === 'kesfet') {
    state._lastHomeActiveId = nextTrack.id;
    renderHomeTracklistTable();
  } else if (state.currentTab === 'calma-listeleri') {
    renderPlaylistTracksTable();
  }
  if (typeof scheduleNextTrackPrefetch === 'function') {
    scheduleNextTrackPrefetch(currentPlaybackToken);
  }
  return true;
}

// Native Android Media3 ExoPlayer Event Bridge
window.__kurfaNativeExoEvent = function(rawPayload) {
  try {
    const evt = typeof rawPayload === 'string' ? JSON.parse(rawPayload) : rawPayload;
    if (!evt || typeof evt !== 'object') return;

    const evtType = String(evt.type || '').toLowerCase();
    const evtVid = evt.videoId ? safeYtId(evt.videoId) : null;
    const isLocalCur = Boolean(state.currentTrack && (state.currentTrack.isLocal || String(state.currentTrack.id || '').startsWith('local_') || state.currentTrack.source === 'local'));
    const activeVid = isLocalCur ? null : safeYtId(state.currentTrack?.ytId || state.currentTrack?.id);

    if (evtType === 'trackchanged') {
      if (isLocalCur && !evtVid) return;
      handleNativeExoTrackTransition(evt);
      return;
    }

    // Never let stale native-exo state/time events overwrite local device track or non-exo playback
    if (isLocalCur || (state._activeMediaEngine !== 'native-exo' && !evt.playing)) {
      return;
    }

    if (evtVid && activeVid && evtVid !== activeVid) {
      if ((evtType === 'state' || evtType === 'time') && state._activeMediaEngine === 'native-exo' && (Date.now() - (state._trackSwitchStartedAt || 0)) > 1500 && evt.title) {
        handleNativeExoTrackTransition(evt);
      }
      return;
    }

    if (evtType === 'time') {
      if (state._activeMediaEngine !== 'native-exo') {
        state._activeMediaEngine = 'native-exo';
      }
      const cur = Math.max(0, Number(evt.currentTime) || 0);
      const dur = Math.max(0, Number(evt.duration) || 0);
      kurfaNoteNativeExoProgress(cur, evt);
      state._nativeExoCurrentTime = cur;
      state.currentPlayheadTime = cur;
      if (dur > 0) state._nativeExoDuration = dur;

      const resolvedDur = dur > 0 ? dur : (typeof getActiveMediaDuration === 'function' ? getActiveMediaDuration() : 0);
      if (!state.isSeeking && typeof updateSeekbarUI === 'function' && resolvedDur > 0) {
        updateSeekbarUI(cur, resolvedDur);
      }
      if (typeof checkSponsorBlockSkip === 'function') checkSponsorBlockSkip(cur);
      if (typeof checkCrossfadeTick === 'function') checkCrossfadeTick(cur, resolvedDur);
      if (typeof syncLyricsWithTime === 'function') {
        syncLyricsWithTime(cur);
      }
      if ((cur >= 4 || (resolvedDur > 0 && (resolvedDur - cur) <= 15)) && typeof prefetchNextTrackStream === 'function') {
        prefetchNextTrackStream();
      }
      return;
    }

    if (evtType === 'state') {
      if (!evtVid && !evt.playing) return;
      state._activeMediaEngine = 'native-exo';
      // Buffering while the user still wants playback is "playing" from the UI's point of view;
      // the native + JS stall watchdogs guarantee it cannot stay frozen.
      const wantsPlayback = Boolean(evt.buffering) && Boolean(evt.playWhenReady);
      const playing = Boolean(evt.playing) || wantsPlayback;
      state._nativeExoLastBuffering = Boolean(evt.buffering);
      if (evt.duration > 0) state._nativeExoDuration = Number(evt.duration);
      if (evt.currentTime >= 0) {
        kurfaNoteNativeExoProgress(Number(evt.currentTime) || 0, evt);
        state._nativeExoCurrentTime = Number(evt.currentTime);
        state.currentPlayheadTime = Number(evt.currentTime);
      }
      if (Boolean(evt.playing)) {
        state._activeTrackConfirmedPlaying = true;
        state.userPaused = false;
      } else if (!state.userPaused && !playing && !evt.buffering) {
        const sinceReq = Date.now() - (state._nativeExoPlayRequestedAt || 0);
        if (sinceReq < 2500) {
          return;
        }
      }
      if (!state.userPaused || !playing) {
        state.isPlaying = playing;
        updatePlayPauseUI(playing);
        syncNativeAppPlaybackState(playing);
      }
      return;
    }

    if (evtType === 'ended') {
      if (state._lastNativeExoEndedToken === currentPlaybackToken) return;
      state._lastNativeExoEndedToken = currentPlaybackToken;
      handleTrackEnd();
      return;
    }

    if (evtType === 'error') {
      const exo = getAndroidExoBridge();
      if (exo && typeof exo.stopNativeExo === 'function') {
        try { exo.stopNativeExo(); } catch (_) {}
      }
      if (state._activeMediaEngine !== 'native-exo') return;

      const resumeSec = Math.max(0, Math.floor(state._nativeExoCurrentTime || state.currentPlayheadTime || 0));
      const fallbackToken = currentPlaybackToken;
      state._activeMediaEngine = 'none';
      state._nativeExoFallbackActive = true;

      if (!activeVid || state.userPaused) {
        state.isPlaying = false;
        updatePlayPauseUI(false);
        return;
      }

      if (typeof kurfaResolveDirectAudio === 'function' && DOM.audioEngine) {
        kurfaResolveDirectAudio(activeVid).then((res) => {
          if (fallbackToken !== currentPlaybackToken || state.userPaused) return;
          if (res && res.success && res.streamUrl) {
            loadDirectAudioStream(res.streamUrl, resumeSec, fallbackToken, activeVid);
          } else {
            loadYouTubePlayback(
              activeVid,
              state.currentTrack,
              resumeSec,
              fallbackToken,
              Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function')
            );
          }
        }).catch(() => {
          if (fallbackToken !== currentPlaybackToken || state.userPaused) return;
          loadYouTubePlayback(
            activeVid,
            state.currentTrack,
            resumeSec,
            fallbackToken,
            Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function')
          );
        });
      } else {
        loadYouTubePlayback(
          activeVid,
          state.currentTrack,
          resumeSec,
          fallbackToken,
          Boolean(state.ytReady && state.ytPlayer && typeof state.ytPlayer.loadVideoById === 'function')
        );
      }
    }
  } catch (e) {
    console.warn('__kurfaNativeExoEvent handler error:', e);
  }
};

// JS-side backup freeze watchdog for the native ExoPlayer engine.
// The native service (APK >= v1.2.26, detected via the `playWhenReady` event field) already
// self-heals stalls after 10 s with up to 3 fresh-client retries, so JS only steps in after 45 s;
// on older APKs without a native watchdog it steps in after 15 s.
const KURFA_EXO_JS_STALL_MS_LEGACY = 15000;
const KURFA_EXO_JS_STALL_MS_NATIVE_WD = 45000;

function kurfaNoteNativeExoProgress(cur, evt) {
  const now = Date.now();
  if (evt && Object.prototype.hasOwnProperty.call(evt, 'playWhenReady')) {
    state._nativeExoHasNativeWatchdog = true;
  }
  if (state._nativeExoWdToken !== currentPlaybackToken) {
    state._nativeExoWdToken = currentPlaybackToken;
    state._nativeExoWdLastPos = cur;
    state._nativeExoWdLastAt = now;
    state._nativeExoWdRecoveries = 0;
    return;
  }
  if (!Number.isFinite(state._nativeExoWdLastPos) || Math.abs(cur - state._nativeExoWdLastPos) >= 0.2) {
    state._nativeExoWdLastPos = cur;
    state._nativeExoWdLastAt = now;
  }
}

function kurfaResetNativeExoWatchdog(startSec) {
  state._nativeExoWdToken = currentPlaybackToken;
  state._nativeExoWdLastPos = Math.max(0, Number(startSec) || 0);
  state._nativeExoWdLastAt = Date.now();
  state._nativeExoWdRecoveries = 0;
}

function kurfaNativeExoWatchdogTick() {
  try {
    if (state._activeMediaEngine !== 'native-exo' || state.userPaused || !state.currentTrack) return;
    if (!state.isPlaying && !state._nativeExoLastBuffering) return;
    const exo = getAndroidExoBridge();
    if (!exo) return;
    if (state._nativeExoWdToken !== currentPlaybackToken) {
      kurfaResetNativeExoWatchdog(state._nativeExoCurrentTime || 0);
      return;
    }
    const limit = state._nativeExoHasNativeWatchdog ? KURFA_EXO_JS_STALL_MS_NATIVE_WD : KURFA_EXO_JS_STALL_MS_LEGACY;
    const frozenFor = Date.now() - (state._nativeExoWdLastAt || Date.now());
    if (frozenFor < limit) return;

    const vid = safeYtId(state.currentTrack.ytId || state.currentTrack.id);
    if (!vid) return;
    const resumeSec = Math.max(0, Math.floor(state._nativeExoCurrentTime || state.currentPlayheadTime || 0));
    state._nativeExoWdRecoveries = (state._nativeExoWdRecoveries || 0) + 1;
    state._nativeExoWdLastAt = Date.now();
    console.warn(`[Kurfa] native-exo frozen ${Math.round(frozenFor / 1000)}s at ${resumeSec}s (recovery ${state._nativeExoWdRecoveries})`);

    if (state._nativeExoWdRecoveries <= 1 && typeof exo.playNativeExo === 'function') {
      // 1st: hand ExoPlayer a fresh prepare from the same position (native re-resolves the client).
      try { if (typeof exo.invalidateAudioStream === 'function') exo.invalidateAudioStream(vid); } catch (_) {}
      exo.playNativeExo(
        vid,
        String(state.currentTrack.title || 'Kurfamüzik'),
        String(state.currentTrack.artist || 'Sanatçı'),
        getTrackThumbnail(state.currentTrack),
        resumeSec
      );
      return;
    }
    // 2nd: give up on native for this track and fall back to the HTML5 / YouTube engines.
    window.__kurfaNativeExoEvent({ type: 'error', videoId: vid, error: 'js-stall-watchdog' });
  } catch (e) {
    console.warn('native-exo watchdog error:', e);
  }
}
setInterval(kurfaNativeExoWatchdogTick, 3000);

// Native Android MediaSession & Updater Callbacks
window.kurfaNativeTogglePlay = function() {
  if (typeof togglePlay === 'function') togglePlay();
};
window.kurfaNativePlay = function() {
  state.userPaused = false;
  const activeHtmlMedia = (DOM.videoEngine && DOM.videoEngine.getAttribute('src') && !DOM.videoEngine.paused && !DOM.videoEngine.ended)
    ? DOM.videoEngine
    : ((DOM.audioEngine && DOM.audioEngine.getAttribute('src') && !DOM.audioEngine.paused && !DOM.audioEngine.ended)
      ? DOM.audioEngine
      : null);
  if (activeHtmlMedia || (state._activeMediaEngine === 'native-exo' && state._activeTrackConfirmedPlaying && state.isPlaying)) {
    state.isPlaying = true;
    updatePlayPauseUI(true);
    syncNativeAppPlaybackState(true, true);
    return;
  }
  if (typeof resumePlayback === 'function') resumePlayback();
};
window.kurfaNativePause = function() {
  if (typeof pausePlayback === 'function') pausePlayback();
  syncNativeAppPlaybackState(false, true);
};
window.kurfaNativeNextTrack = function() {
  if (typeof playNextTrack === 'function') playNextTrack();
};
window.kurfaNativePrevTrack = function() {
  if (typeof playPrevTrack === 'function') playPrevTrack();
};
window.kurfaNativeSeekToSeconds = function(sec) {
  if (typeof seekPlaybackToSeconds === 'function') seekPlaybackToSeconds(Number(sec) || 0);
};
window.__kurfaHandleNativeBack = function() {
  const desktopUpdEl = document.getElementById('desktop-update-modal');
  if (desktopUpdEl && !desktopUpdEl.classList.contains('hidden') && !desktopUpdEl.classList.contains('pointer-events-none')) {
    if (typeof dismissDesktopUpdateModal === 'function') dismissDesktopUpdateModal(false);
    return true;
  }
  const modalClosers = [
    ['ad-warning-modal', () => typeof dismissAdWarningModal === 'function' && dismissAdWarningModal(false)],
    ['app-install-modal', () => typeof closeAppInstallModal === 'function' && closeAppInstallModal()],
    ['google-account-chooser-modal', () => typeof closeGoogleAccountChooser === 'function' && closeGoogleAccountChooser()],
    ['create-playlist-modal', () => typeof closeCreatePlaylistModal === 'function' && closeCreatePlaylistModal()],
    ['add-to-playlist-modal', () => typeof closeAddToPlaylistModal === 'function' && closeAddToPlaylistModal()],
    ['device-picker-modal', () => typeof closeDevicePickerModal === 'function' && closeDevicePickerModal()],
    ['profile-modal', () => typeof closeProfileModal === 'function' && closeProfileModal()],
    ['share-modal', () => typeof closeShareModal === 'function' && closeShareModal()],
    ['downloader-modal', () => typeof closeDownloaderModal === 'function' && closeDownloaderModal()]
  ];
  for (const [id, closeFn] of modalClosers) {
    const el = document.getElementById(id);
    if (el && !el.classList.contains('hidden') && !el.classList.contains('pointer-events-none')) {
      closeFn();
      return true;
    }
  }
  if (state.queueDrawerOpen && typeof toggleQueueDrawer === 'function') {
    toggleQueueDrawer();
    return true;
  }
  const artistCont = document.getElementById('kesfet-artist-container');
  if (artistCont && !artistCont.classList.contains('hidden')) {
    if (typeof closeArtistDetail === 'function') closeArtistDetail();
    return true;
  }
  if (state.currentTab && state.currentTab !== 'kesfet') {
    switchTab('kesfet');
    return true;
  }
  return false;
};

// =============================================================================
// 16. MYT-STYLE LOCAL DEVICE AUDIO SCANNER & OFFLINE QUEUE
// =============================================================================
state.deviceAudioTracks = state.deviceAudioTracks || [];
const __kurfaPendingLocalAudioScans = new Map();

window.__kurfaNativeLocalAudioCallback = function(reqId, payload) {
  const resolver = __kurfaPendingLocalAudioScans.get(reqId);
  if (!resolver) return;
  __kurfaPendingLocalAudioScans.delete(reqId);
  resolver(payload);
};

async function scanLocalDeviceAudio(userInitiated = false) {
  const listEl = document.getElementById('device-audio-list');
  if (typeof isAndroidNativeEngine === 'function' && isAndroidNativeEngine() &&
      window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.scanLocalDeviceAudioAsync === 'function') {
    if (listEl) {
      listEl.innerHTML = `<div class="py-8 text-center text-xs text-on-surface-variant flex items-center justify-center gap-2"><span class="material-symbols-outlined text-[18px] animate-spin text-primary">progress_activity</span><span>Cihazdaki müzikler taranıyor...</span></div>`;
    }
    const reqId = 'loc_' + Date.now() + '_' + Math.random().toString(36).slice(2, 6);
    const res = await new Promise((resolve) => {
      const timer = setTimeout(() => {
        __kurfaPendingLocalAudioScans.delete(reqId);
        resolve({ success: false, tracks: [] });
      }, 15000);
      __kurfaPendingLocalAudioScans.set(reqId, (data) => {
        clearTimeout(timer);
        resolve(data || { success: false, tracks: [] });
      });
      window.KurfaAndroidBridge.scanLocalDeviceAudioAsync(reqId);
    });

    if (res && res.permissionDenied) {
      if (listEl) {
        listEl.innerHTML = `<div class="py-8 px-4 text-center flex flex-col items-center gap-2"><span class="material-symbols-outlined text-3xl text-on-surface-variant/60">folder_off</span><p class="text-xs font-semibold text-on-surface">Müzik dosyalarına erişim izni verilmedi</p><button type="button" class="px-4 py-1.5 rounded-full bg-primary text-on-primary text-xs font-bold" onclick="scanLocalDeviceAudio(true)">İzin Ver ve Tara</button></div>`;
      }
      return;
    }

    state.deviceAudioTracks = (Array.isArray(res?.tracks) ? res.tracks : []).map(cleanLocalTrackMeta);
    renderDeviceAudioList(document.getElementById('device-audio-filter')?.value || '');
    return;
  }

  // Windows Desktop EXE native file picker & permanent path store (0 RAM copy, survives restarts)
  if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
    if (userInitiated) {
      try {
        const res = await callExtensionBridge('PICK_LOCAL_AUDIO_FILES', {}, 120000);
        if (res && res.success && Array.isArray(res.tracks)) {
          state.deviceAudioTracks = res.tracks.map(cleanLocalTrackMeta);
          state.deviceAudioRenderLimit = 80;
          renderDeviceAudioList(document.getElementById('device-audio-filter')?.value || '');
          if (typeof updateKutuphaneBadges === 'function') updateKutuphaneBadges();
          if (res.addedCount > 0) {
            showToast(`${res.addedCount} yerel şarkı kalıcı olarak kaydedildi`, 'success');
          }
          return;
        }
      } catch (_) {}
    } else {
      await restoreWebLocalAudioFromDB();
      renderDeviceAudioList(document.getElementById('device-audio-filter')?.value || '');
      return;
    }
  }

  // Web fallback: open local audio file picker when user clicks "Tara / Seç"
  if (userInitiated) {
    const picker = document.getElementById('device-audio-file-picker');
    if (picker) picker.click();
  } else {
    renderDeviceAudioList();
  }
}
window.scanLocalDeviceAudio = scanLocalDeviceAudio;

function openKurfaLocalAudioDB() {
  return new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined') {
      reject(new Error('IndexedDB unavailable'));
      return;
    }
    const req = indexedDB.open('kurfa_local_audio_db', 1);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains('tracks')) {
        db.createObjectStore('tracks', { keyPath: 'id' });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error || new Error('IndexedDB error'));
  });
}

async function saveWebLocalAudioToDB(records) {
  if (!Array.isArray(records) || records.length === 0) return;
  try {
    const db = await openKurfaLocalAudioDB();
    await new Promise((resolve, reject) => {
      const tx = db.transaction('tracks', 'readwrite');
      const store = tx.objectStore('tracks');
      for (const rec of records) {
        if (rec && rec.id && rec.file) {
          store.put(rec);
        }
      }
      tx.oncomplete = () => resolve();
      tx.onerror = () => reject(tx.error);
    });
    db.close();
  } catch (e) {
    console.warn('saveWebLocalAudioToDB error:', e);
  }
}

let __kurfaActiveLocalBlobUrl = null;
state.deviceAudioRenderLimit = state.deviceAudioRenderLimit || 80;

async function resolveLocalAudioStreamUrl(trackId) {
  if (!trackId) return null;
  try {
    const db = await openKurfaLocalAudioDB();
    const rec = await new Promise((resolve, reject) => {
      const tx = db.transaction('tracks', 'readonly');
      const req = tx.objectStore('tracks').get(trackId);
      req.onsuccess = () => resolve(req.result || null);
      req.onerror = () => reject(req.error);
    });
    db.close();
    if (!rec || !rec.file) return null;
    if (__kurfaActiveLocalBlobUrl) {
      try { URL.revokeObjectURL(__kurfaActiveLocalBlobUrl); } catch (_) {}
      __kurfaActiveLocalBlobUrl = null;
    }
    const objUrl = URL.createObjectURL(rec.file);
    __kurfaActiveLocalBlobUrl = objUrl;
    return objUrl;
  } catch (e) {
    console.warn('resolveLocalAudioStreamUrl error:', e);
    return null;
  }
}
window.resolveLocalAudioStreamUrl = resolveLocalAudioStreamUrl;

async function restoreWebLocalAudioFromDB() {
  if (typeof isAndroidNativeEngine === 'function' && isAndroidNativeEngine()) return;
  if (typeof getBrowserExtensionMode === 'function' && getBrowserExtensionMode().startsWith('desktop')) {
    try {
      const res = await callExtensionBridge('GET_LOCAL_AUDIO_TRACKS', {}, 5000);
      if (res && res.success && Array.isArray(res.tracks) && res.tracks.length > 0) {
        state.deviceAudioTracks = res.tracks.map(cleanLocalTrackMeta);
        if (state.currentTrack && state.currentTrack.isLocal) {
          const match = res.tracks.find(t => t.id === state.currentTrack.id || (t.title === state.currentTrack.title && t.artist === state.currentTrack.artist));
          if (match && match.streamUrl) {
            state.currentTrack.streamUrl = match.streamUrl;
          }
        }
        renderDeviceAudioList(document.getElementById('device-audio-filter')?.value || '');
        if (typeof updateKutuphaneBadges === 'function') updateKutuphaneBadges();
        return;
      }
    } catch (_) {}
  }
  try {
    const db = await openKurfaLocalAudioDB();
    const restored = [];
    await new Promise((resolve, reject) => {
      const tx = db.transaction('tracks', 'readonly');
      const req = tx.objectStore('tracks').openCursor();
      req.onsuccess = (e) => {
        const cursor = e.target.result;
        if (cursor) {
          const rec = cursor.value;
          if (rec && rec.id) {
            restored.push({
              id: rec.id,
              isLocal: true,
              needsIdbBlob: true,
              fileName: rec.fileName || '',
              fileSize: rec.fileSize || 0,
              addedAt: rec.addedAt || 0,
              title: rec.title || 'Yerel Parça',
              artist: rec.artist || 'Yerel Dosya',
              duration: rec.duration || '3:30',
              streamUrl: null,
              thumbnail: './kurfamuzik_logo.png'
            });
          }
          cursor.continue();
        } else {
          resolve();
        }
      };
      req.onerror = () => reject(req.error);
    });
    db.close();
    if (restored.length === 0) return;
    restored.sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
    state.deviceAudioTracks = restored.map(cleanLocalTrackMeta);
    if (state.currentTrack && state.currentTrack.isLocal) {
      state.currentTrack.needsIdbBlob = true;
      state.currentTrack.streamUrl = null;
    }
    renderDeviceAudioList(document.getElementById('device-audio-filter')?.value || '');
    if (typeof updateKutuphaneBadges === 'function') updateKutuphaneBadges();
  } catch (e) {
    console.warn('restoreWebLocalAudioFromDB error:', e);
  }
}
window.restoreWebLocalAudioFromDB = restoreWebLocalAudioFromDB;

function handleWebLocalAudioFiles(fileList) {
  if (!fileList || fileList.length === 0) return;
  const existing = Array.isArray(state.deviceAudioTracks) ? state.deviceAudioTracks : [];
  const existingKeys = new Set(existing.map(t => `${t.fileName || ''}_${t.fileSize || 0}`));
  const added = [];
  const dbRecords = [];
  const now = Date.now();
  let seq = 0;

  for (const file of Array.from(fileList)) {
    if (!file || !file.name) continue;
    const key = `${file.name}_${file.size || 0}`;
    if (existingKeys.has(key)) continue;
    existingKeys.add(key);

    const cleanMeta = cleanLocalTrackMeta({
      title: parts.length >= 2 ? parts.slice(1).join(' - ') : cleanName,
      artist: parts.length >= 2 ? parts[0] : 'Yerel Dosya'
    });
    const title = cleanMeta.title;
    const artist = cleanMeta.artist;
    const id = 'local_web_' + now + '_' + (seq++) + '_' + Math.random().toString(36).slice(2, 6);

    added.push({
      id,
      isLocal: true,
      needsIdbBlob: true,
      fileName: file.name,
      fileSize: file.size || 0,
      addedAt: now + seq,
      title,
      artist,
      duration: '3:30',
      streamUrl: null,
      thumbnail: './kurfamuzik_logo.png'
    });
    dbRecords.push({
      id,
      fileName: file.name,
      fileSize: file.size || 0,
      title,
      artist,
      duration: '3:30',
      addedAt: now + seq,
      file
    });
  }

  const picker = document.getElementById('device-audio-file-picker');
  if (picker) picker.value = '';

  if (added.length === 0) {
    showToast('Seçilen dosyalar zaten listede mevcut');
    return;
  }

  state.deviceAudioTracks = [...added, ...existing];
  state.deviceAudioRenderLimit = 80;
  saveWebLocalAudioToDB(dbRecords);
  renderDeviceAudioList(document.getElementById('device-audio-filter')?.value || '');
  if (typeof updateKutuphaneBadges === 'function') updateKutuphaneBadges();
  showToast(`${added.length} yerel şarkı kalıcı olarak kaydedildi`, 'success');
}
window.handleWebLocalAudioFiles = handleWebLocalAudioFiles;

function renderDeviceAudioList(filterText = '') {
  const listEl = document.getElementById('device-audio-list');
  const countEl = document.getElementById('device-audio-count-text');
  const badgeEl = document.getElementById('device-audio-badge-count');
  const all = Array.isArray(state.deviceAudioTracks) ? state.deviceAudioTracks : [];
  const isEn = getAppLanguage() === 'en';

  if (badgeEl) badgeEl.textContent = String(all.length);
  if (countEl) countEl.textContent = t('library.device_track_count', { count: all.length });
  if (!listEl) return;

  const q = String(filterText || '').trim().toLowerCase();
  const filtered = q ? all.filter(t => (t.title || '').toLowerCase().includes(q) || (t.artist || '').toLowerCase().includes(q)) : all;

  if (filtered.length === 0) {
    listEl.innerHTML = `<div class="py-8 px-4 text-center flex flex-col items-center gap-2"><span class="material-symbols-outlined text-3xl text-on-surface-variant/60">library_music</span><p class="text-xs font-semibold text-on-surface">${escapeHtml(all.length === 0 ? t('library.device_empty_unscanned') : t('library.device_empty_search'))}</p><button type="button" class="px-4 py-1.5 rounded-full bg-primary text-on-primary text-xs font-bold" onclick="scanLocalDeviceAudio(true)">${escapeHtml(typeof isAndroidNativeEngine === 'function' && isAndroidNativeEngine() ? t('library.device_scan_btn') : t('library.device_pick_btn'))}</button></div>`;
    return;
  }

  listEl.innerHTML = '';
  const limit = Math.max(80, Number(state.deviceAudioRenderLimit) || 80);
  const visible = filtered.slice(0, limit);
  const frag = document.createDocumentFragment();
  visible.forEach((track, idx) => {
    const isPlayingCur = state.currentTrack && state.currentTrack.id === track.id;
    const isAnimating = isPlayingCur && state.isPlaying;
    const row = document.createElement('div');
    row.className = `track-row flex items-center justify-between gap-2 p-2.5 rounded-xl cursor-pointer transition-colors ${isPlayingCur ? 'active' : ''}`;
    row.dataset.trackId = track.id;
    row.dataset.trackIdx = String(idx + 1);
    row.innerHTML = `
      <div class="flex items-center gap-2.5 min-w-0 flex-1 pr-3 overflow-hidden">
        <span class="w-5 text-center text-[11px] font-mono tabular-nums track-idx-num flex items-center justify-center flex-shrink-0 text-on-surface-variant">${isPlayingCur ? renderMiniEqBarsHtml(isAnimating) : (idx + 1)}</span>
        <div class="w-9 h-9 rounded-lg bg-surface-container-high flex items-center justify-center flex-shrink-0 text-on-surface-variant">
          <span class="material-symbols-outlined text-[18px] track-icon">${isAnimating ? 'graphic_eq' : 'music_note'}</span>
        </div>
        <div class="flex flex-col min-w-0 flex-1 overflow-hidden">
          <div class="flex items-center gap-1.5 min-w-0 track-title-wrap">
            <span class="kurfa-row-title text-xs font-bold truncate block track-title-text text-on-surface">${escapeHtml(cleanLocalTrackMeta(track).title || (isEn ? 'Track' : 'Parça'))}</span>
            ${isPlayingCur ? renderPlayingPillHtml() : ''}
          </div>
          <span class="kurfa-row-artist text-[11px] text-on-surface-variant truncate block">${escapeHtml(track.artist || t('library.device_title'))}</span>
        </div>
      </div>
      <span class="text-[11px] text-on-surface-variant font-mono flex-shrink-0 pl-2 track-duration-text">${escapeHtml(track.duration || '3:30')}</span>
    `;
    row.onclick = () => {
      setPlaybackQueueContext(all, track, t('library.device_title'), t('library.device_title').toUpperCase());
      playTrackById(track.id, track);
    };
    frag.appendChild(row);
  });
  if (filtered.length > visible.length) {
    const moreBtn = document.createElement('button');
    moreBtn.type = 'button';
    moreBtn.className = 'w-full mt-2 py-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-xs font-bold text-primary transition-colors';
    moreBtn.textContent = t('library.show_more_remaining', { count: filtered.length - visible.length });
    moreBtn.onclick = () => {
      state.deviceAudioRenderLimit = limit + 100;
      renderDeviceAudioList(filterText);
    };
    frag.appendChild(moreBtn);
  }
  listEl.appendChild(frag);
  if (typeof scheduleLocalDurationProbes === 'function') {
    scheduleLocalDurationProbes(visible);
  }
}
window.renderDeviceAudioList = renderDeviceAudioList;

function syncActiveTrackRowInDeviceAudio() {
  const listEl = document.getElementById('device-audio-list');
  if (!listEl) return;
  const curId = state.currentTrack ? state.currentTrack.id : null;
  const all = Array.isArray(state.deviceAudioTracks) ? state.deviceAudioTracks : [];
  if (curId && all.some(t => t && t.id === curId)) {
    const filterText = document.getElementById('device-audio-filter')?.value || '';
    const q = String(filterText).trim().toLowerCase();
    const filtered = q ? all.filter(t => (t.title || '').toLowerCase().includes(q) || (t.artist || '').toLowerCase().includes(q)) : all;
    const curIdxInFiltered = filtered.findIndex(t => t.id === curId);
    const limit = Math.max(80, Number(state.deviceAudioRenderLimit) || 80);
    if (curIdxInFiltered >= limit) {
      state.deviceAudioRenderLimit = Math.min(filtered.length, curIdxInFiltered + 40);
      renderDeviceAudioList(filterText);
      return;
    }
  }

  const isPlaying = Boolean(state.isPlaying);
  listEl.querySelectorAll('.track-row').forEach(row => {
    const isCur = Boolean(curId && row.dataset.trackId === curId);
    row.classList.toggle('active', isCur);
    const numEl = row.querySelector('.track-idx-num');
    if (numEl) {
      numEl.classList.remove('text-primary', 'font-extrabold');
      numEl.classList.add('text-on-surface-variant');
      numEl.innerHTML = isCur ? renderMiniEqBarsHtml(isPlaying) : escapeHtml(row.dataset.trackIdx || '');
    }
    const iconEl = row.querySelector('.track-icon');
    if (iconEl) {
      iconEl.textContent = isCur && isPlaying ? 'graphic_eq' : 'music_note';
    }
    const titleEl = row.querySelector('.track-title-text');
    if (titleEl) {
      titleEl.classList.remove('text-primary');
      titleEl.classList.add('text-on-surface');
    }
    const titleWrap = row.querySelector('.track-title-wrap');
    if (titleWrap) {
      const existingPill = titleWrap.querySelector('.kurfa-playing-pill');
      if (isCur && !existingPill) {
        titleWrap.insertAdjacentHTML('beforeend', renderPlayingPillHtml());
      } else if (!isCur && existingPill) {
        existingPill.remove();
      }
    }
  });
}
window.syncActiveTrackRowInDeviceAudio = syncActiveTrackRowInDeviceAudio;

function playAllDeviceAudio() {
  const all = Array.isArray(state.deviceAudioTracks) ? state.deviceAudioTracks : [];
  if (all.length === 0) {
    scanLocalDeviceAudio(true);
    return;
  }
  setPlaybackQueueContext(all, 0, t('library.device_title'), t('library.device_title').toUpperCase());
  const firstTrack = state.queue[state.queueIndex] || state.queue[0];
  if (firstTrack) playTrackById(firstTrack.id, firstTrack);
}
window.playAllDeviceAudio = playAllDeviceAudio;
let __startupUpdateCheckRan = false;

function dismissUpdateAvailableBanner() {
  const existing = document.getElementById('kurfa-update-banner');
  if (existing) existing.remove();
}
window.dismissUpdateAvailableBanner = dismissUpdateAvailableBanner;

function showUpdateAvailableBanner(versionLabel) {
  if (document.getElementById('kurfa-update-banner')) return;
  const isEn = getAppLanguage() === 'en';
  const verText = versionLabel ? String(versionLabel) : KURFA_APP_VERSION;
  const banner = document.createElement('div');
  banner.id = 'kurfa-update-banner';
  banner.className = 'fixed bottom-24 md:bottom-24 right-3 left-3 sm:left-auto sm:w-80 z-[1040] rounded-2xl p-3 shadow-2xl border border-primary/35 flex items-center justify-between gap-2.5 kurfa-update-toast';
  banner.innerHTML = `
    <div class="flex items-center gap-2.5 min-w-0">
      <div class="w-9 h-9 rounded-xl bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
        <span class="material-symbols-outlined text-[20px]">system_update</span>
      </div>
      <div class="flex flex-col min-w-0">
        <span class="text-xs font-extrabold text-on-surface truncate">${isEn ? 'Update Available' : 'Yeni Sürüm Hazır'} (${escapeHtml(verText)})</span>
        <span class="text-[11px] text-on-surface-variant truncate">${isEn ? 'Tap to install latest release' : 'Yüklemek için dokunun'}</span>
      </div>
    </div>
    <div class="flex items-center gap-1 flex-shrink-0">
      <button type="button" id="btn-banner-do-update" class="px-3 py-1.5 rounded-full bg-primary text-on-primary text-[11px] font-bold hover:opacity-90 active:scale-95 transition-all">
        ${isEn ? 'Update' : 'Güncelle'}
      </button>
      <button type="button" aria-label="Kapat" onclick="dismissUpdateAvailableBanner()" class="w-7 h-7 rounded-full flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors">
        <span class="material-symbols-outlined text-[16px]">close</span>
      </button>
    </div>
  `;
  const btn = banner.querySelector('#btn-banner-do-update');
  if (btn) {
    btn.onclick = () => {
      dismissUpdateAvailableBanner();
      if (window.KurfaAndroidBridge && typeof window.KurfaAndroidBridge.checkForUpdates === 'function') {
        window.KurfaAndroidBridge.checkForUpdates();
      } else if (typeof openAppInstallModal === 'function') {
        openAppInstallModal();
      }
    };
  }
  document.body.appendChild(banner);
}
window.showUpdateAvailableBanner = showUpdateAvailableBanner;

function compareSemverStrings(a, b) {
  const pa = String(a || '').replace(/^v/i, '').split('.').map(n => parseInt(n, 10) || 0);
  const pb = String(b || '').replace(/^v/i, '').split('.').map(n => parseInt(n, 10) || 0);
  const len = Math.max(pa.length, pb.length, 3);
  for (let i = 0; i < len; i++) {
    const va = pa[i] || 0;
    const vb = pb[i] || 0;
    if (va > vb) return 1;
    if (va < vb) return -1;
  }
  return 0;
}

async function runOneShotStartupUpdateCheck() {
  if (__startupUpdateCheckRan) return;
  __startupUpdateCheckRan = true;
  try {
    if (sessionStorage.getItem('kurfa_update_checked_v130')) return;
    sessionStorage.setItem('kurfa_update_checked_v130', '1');
  } catch (_) {}

  // Native Android APK already executes ApkAutoUpdater.checkInBackground once on launch
  if (typeof isAndroidNativeApp === 'function' && isAndroidNativeApp()) return;

  try {
    const extMode = typeof getBrowserExtensionMode === 'function' ? getBrowserExtensionMode() : '';
    if (extMode && extMode.startsWith('desktop')) {
      const res = await callExtensionBridge('CHECK_DESKTOP_UPDATE', {}, 4000).catch(() => null);
      if (res && res.updateAvailable && res.version) {
        showUpdateAvailableBanner(`v${res.version}`);
      }
      return;
    }
    const ctrl = typeof AbortController !== 'undefined' ? new AbortController() : null;
    const tid = ctrl ? setTimeout(() => ctrl.abort(), 5000) : null;
    const resp = await fetch('https://github.com/KurfaCore/kurfanova-app/releases/latest/download/apk-update.json', {
      signal: ctrl ? ctrl.signal : undefined,
      cache: 'no-store'
    }).catch(() => null);
    if (tid) clearTimeout(tid);
    if (!resp || !resp.ok) return;
    const manifest = await resp.json().catch(() => null);
    if (manifest && manifest.versionName && compareSemverStrings(manifest.versionName, KURFA_APP_VERSION) > 0) {
      const lineEl = document.getElementById('settings-update-check-line');
      if (lineEl) lineEl.textContent = `Yeni sürüm mevcut: v${manifest.versionName}`;
      showUpdateAvailableBanner(`v${manifest.versionName}`);
    }
  } catch (_) {}
}

window.kurfaOnAndroidUpdateEvent = function(statusText, hasUpdate) {
  const lineEl = document.getElementById('settings-update-check-line');
  if (lineEl && statusText) {
    lineEl.textContent = String(statusText);
  }
  if (hasUpdate) {
    const m = String(statusText || '').match(/v?\d+\.\d+(?:\.\d+)?/);
    showUpdateAvailableBanner(m ? m[0] : '');
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Export ALL functions to global window for inline onclick handlers in HTML
window.switchTab = switchTab;
window.switchKesfetSubTab = switchKesfetSubTab;
window.switchKutuphaneSubTab = switchKutuphaneSubTab;
window.setEqualizerPreset = setEqualizerPreset;
window.cycleBandGain = cycleBandGain;
window.KurfaDSP = KurfaDSP;
window.openShareModal = openShareModal;
window.closeShareModal = closeShareModal;
window.copyShareUrl = copyShareUrl;
window.triggerWebShare = triggerWebShare;
window.openProfileModal = openProfileModal;
window.closeProfileModal = closeProfileModal;
window.selectAvatar = selectAvatar;
window.saveProfileData = saveProfileData;
window.toggleDarkMode = toggleDarkMode;
window.playTrackById = playTrackById;
window.addToQueueTrack = addToQueueTrack;
window.clearQueue = clearQueue;
window.removeFromQueue = removeFromQueue;
window.scrollShelf = scrollShelf;
window.playHeroTrack = playHeroTrack;
window.addHeroTrackToQueue = addHeroTrackToQueue;
window.downloadHeroTrack = downloadHeroTrack;
window.togglePlay = togglePlay;
window.playNextTrack = playNextTrack;
window.playPrevTrack = playPrevTrack;
window.toggleShuffle = toggleShuffle;
window.toggleRepeat = toggleRepeat;
window.toggleCurrentFavorite = toggleCurrentFavorite;
window.toggleFavoriteById = toggleFavoriteById;
window.downloadCurrentMP3 = downloadCurrentMP3;
window.downloadTrackById = downloadTrackById;
window.playAllFavorites = playAllFavorites;
window.playAllDownloads = playAllDownloads;
window.playAllPlaylist = playAllPlaylist;
window.playAllTrends = playAllTrends;
window.addAllResultsToQueue = addAllResultsToQueue;
window.setPlayerVolume = setPlayerVolume;
window.toggleMute = toggleMute;
window.toggleQueueDrawer = toggleQueueDrawer;
window.openDownloaderModal = openDownloaderModal;
window.closeDownloaderModal = closeDownloaderModal;
window.downloadTrack = downloadTrack;
window.startDirectDownload = startDirectDownload;
window.pasteModalUrl = pasteModalUrl;
window.processModalDownload = processModalDownload;
window.showToast = showToast;
window.dismissMobileDownloadBanner = dismissMobileDownloadBanner;
window.dismissDownloadPill = dismissDownloadPill;
window.executeSearchImmediate = executeSearchImmediate;
window.executeSearchFromInput = executeSearchFromInput;
window.clearSearchInput = clearSearchInput;
window.pasteFromClipboard = pasteFromClipboard;
window.applySearchFilter = applySearchFilter;
window.resetSearchFilters = resetSearchFilters;
window.filterGenre = filterGenre;
window.searchByArtist = searchByArtist;
window.quickSearchAndPlay = quickSearchAndPlay;
window.exportLibraryBackup = exportLibraryBackup;
window.importLibraryBackup = importLibraryBackup;
window.showKurfaStorageInfo = showKurfaStorageInfo;
window.toggleTrendsShowAll = toggleTrendsShowAll;
window.playFavoritesQuick = playFavoritesQuick;
window.renderPopularArtistsGrid = renderPopularArtistsGrid;
window.updateQuickFavCount = updateQuickFavCount;
window.openMobileNowPlaying = openMobileNowPlaying;
window.openCreatePlaylistModal = openCreatePlaylistModal;
window.closeCreatePlaylistModal = closeCreatePlaylistModal;
window.submitCreatePlaylist = submitCreatePlaylist;
window.openAddToPlaylistModal = openAddToPlaylistModal;
window.closeAddToPlaylistModal = closeAddToPlaylistModal;
window.addTrackToPlaylist = addTrackToPlaylist;
window.openCustomPlaylistDetail = openCustomPlaylistDetail;
window.closeCustomPlaylistDetail = closeCustomPlaylistDetail;
window.deleteCustomPlaylist = deleteCustomPlaylist;
window.playCustomPlaylist = playCustomPlaylist;
window.removeTrackFromCustomPlaylist = removeTrackFromCustomPlaylist;
window.toggleBackgroundAudioMode = toggleBackgroundAudioMode;
window.handleGoogleSignIn = handleGoogleSignIn;
window.handleGoogleSignOut = handleGoogleSignOut;
window.syncFirebaseLibraryNow = syncFirebaseLibraryNow;
window.toggleDocumentPipPlayer = toggleDocumentPipPlayer;
window.openDocumentPipPlayer = openDocumentPipPlayer;
window.closeDocumentPipPlayer = closeDocumentPipPlayer;
window.openFloatingPip = openFloatingPip;
window.closeFloatingPip = closeFloatingPip;
window.expandFloatingPipToFull = expandFloatingPipToFull;
window.openDevicePickerModal = openDevicePickerModal;
window.closeDevicePickerModal = closeDevicePickerModal;
window.switchAudioOutputDevice = switchAudioOutputDevice;
window.scanBluetoothDevices = scanBluetoothDevices;
window.requestAudioDeviceAccess = requestAudioDeviceAccess;
window.initPipSeekbar = initPipSeekbar;
window.seekToFraction = seekToFraction;
window.togglePlaylistTracksExpand = togglePlaylistTracksExpand;
window.filterPlaylistItems = filterPlaylistItems;
window.updatePlaylistHeroUI = updatePlaylistHeroUI;
window.openGoogleAccountChooser = openGoogleAccountChooser;
window.closeGoogleAccountChooser = closeGoogleAccountChooser;
window.selectGoogleAccount = selectGoogleAccount;
window.toggleCustomGoogleBox = toggleCustomGoogleBox;
window.submitCustomGoogleAccount = submitCustomGoogleAccount;
window.setDeckVisualMode = setDeckVisualMode;
window.quickToggleVideoMode = quickToggleVideoMode;
window.toggleFullScreenVideo = toggleFullScreenVideo;
window.playCuratedMix = playCuratedMix;
window.moveQueueTrack = moveQueueTrack;
window.moveQueueTrackToPosition = moveQueueTrackToPosition;
window.initDragToScroll = initDragToScroll;
window.importSpotifyPlaylist = importSpotifyPlaylist;
window.refreshSpotifyPlaylist = refreshSpotifyPlaylist;
window.renderSpotifyPlaylistsGrid = renderSpotifyPlaylistsGrid;
window.openSpotifyPlaylistDetail = openSpotifyPlaylistDetail;
window.closeSpotifyPlaylistDetail = closeSpotifyPlaylistDetail;
window.deleteSpotifyPlaylist = deleteSpotifyPlaylist;
window.playSpotifyPlaylist = playSpotifyPlaylist;
window.playSpotifyTrack = playSpotifyTrack;
window.handleCustomAvatarUpload = handleCustomAvatarUpload;
window.showVideoAdNotice = showVideoAdNotice;
window.setSearchSort = setSearchSort;
window.resetSearchFilters = resetSearchFilters;
window.closeArtistDetail = closeArtistDetail;
window.toggleSavedAlbum = toggleSavedAlbum;
window.filterAlbumDetailTracks = filterAlbumDetailTracks;
window.setAlbumDetailSort = setAlbumDetailSort;
window.toggleLibraryViewMode = toggleLibraryViewMode;
window.renderSavedAlbumsGrid = renderSavedAlbumsGrid;

// =========================================================================
// KURFA MOBİL UYGULAMA (APK) & PWA INSTALL CONTROLLER
// =========================================================================
window.deferredPwaPrompt = null;
window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  window.deferredPwaPrompt = e;
});

function openAppInstallModal() {
  updateLocalEngineStatusUI();
  const extMode = getBrowserExtensionMode();
  const isNativeApp = Boolean((extMode && extMode.startsWith('desktop')) || isAndroidNativeEngine());
  const browserSection = document.getElementById('install-modal-browser-section');
  const dividerEl = document.getElementById('install-modal-divider');
  if (browserSection) browserSection.classList.toggle('hidden', isNativeApp);
  if (dividerEl) dividerEl.classList.toggle('hidden', isNativeApp);

  fetchLatestPublishedAppVersions().then((latest) => {
    if (!latest) return;
    const apkVer = document.getElementById('install-modal-apk-ver');
    const winVer = document.getElementById('install-modal-win-ver');
    if (apkVer && latest.android?.versionName) apkVer.textContent = `(v${latest.android.versionName})`;
    if (winVer && latest.desktop?.version) winVer.textContent = `(v${latest.desktop.version})`;
  }).catch(() => {});

  const modal = document.getElementById('app-install-modal');
  const card = document.getElementById('app-install-modal-card');
  if (!modal) return;
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  if (card) {
    card.classList.remove('scale-95');
    card.classList.add('scale-100');
  }
}
window.openAppInstallModal = openAppInstallModal;

function closeAppInstallModal() {
  const modal = document.getElementById('app-install-modal');
  const card = document.getElementById('app-install-modal-card');
  if (!modal) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  if (card) {
    card.classList.remove('scale-100');
    card.classList.add('scale-95');
  }
}
window.closeAppInstallModal = closeAppInstallModal;

async function triggerPwaInstall() {
  if (window.deferredPwaPrompt) {
    try {
      window.deferredPwaPrompt.prompt();
      const choice = await window.deferredPwaPrompt.userChoice;
      if (choice && choice.outcome === 'accepted') {
        if (typeof showToast === 'function') showToast(getAppLanguage() === 'en' ? 'Kurfamüzik added to your home screen.' : 'Kurfamüzik ana ekranınıza eklendi.');
        closeAppInstallModal();
      }
      window.deferredPwaPrompt = null;
    } catch (err) {
      console.warn('PWA prompt error:', err);
    }
  } else {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    if (isIOS) {
      alert('Safari tarayıcısında Paylaş simgesine basıp Ana Ekrana Ekle seçeneğini seçin.');
    } else {
      if (typeof showToast === 'function') {
        showToast('Tarayıcı menüsünden (üç nokta) Uygulamayı Yükle seçeneğini kullanabilirsiniz.');
      }
    }
  }
}
window.triggerPwaInstall = triggerPwaInstall;

// =========================================================================
// CİHAZA ÖZEL REKLAM UYARISI MODALI (Pre-Play Gate Controller)
// =========================================================================
function isAdWarningDisabledByPref() {
  try {
    return localStorage.getItem('kurfa_ad_warn_disabled') === '1';
  } catch (e) {
    return false;
  }
}

function isAdWarningAcknowledged() {
  if (isAdWarningDisabledByPref()) return true;
  if (state._adRiskSessionAcknowledged) return true;
  try {
    if (sessionStorage.getItem('kurfa_ad_warn_ack') === '1') {
      state._adRiskSessionAcknowledged = true;
      return true;
    }
  } catch (e) {}
  return false;
}

function updateAdWarningToggleUI() {
  const btn = typeof document !== 'undefined' ? document.getElementById('btn-ad-warn-toggle') : null;
  if (!btn) return;
  const enabled = !isAdWarningDisabledByPref();
  syncIosSwitchBtn(btn, enabled);
}

function toggleAdWarningPreference() {
  const currentlyDisabled = isAdWarningDisabledByPref();
  const nextDisabled = !currentlyDisabled;
  try {
    if (nextDisabled) {
      localStorage.setItem('kurfa_ad_warn_disabled', '1');
      state._adRiskSessionAcknowledged = true;
    } else {
      localStorage.removeItem('kurfa_ad_warn_disabled');
      state._adRiskSessionAcknowledged = false;
      sessionStorage.removeItem('kurfa_ad_warn_ack');
    }
  } catch (e) {}
  updateAdWarningToggleUI();
  showToast(nextDisabled ? t('toast.ad_warn_off') : t('toast.ad_warn_on'));
}
window.toggleAdWarningPreference = toggleAdWarningPreference;

function acknowledgeAdWarningSession() {
  state._adRiskSessionAcknowledged = true;
  try {
    sessionStorage.setItem('kurfa_ad_warn_ack', '1');
  } catch (e) {}
}

function hideAdWarningModalVisual() {
  const modal = document.getElementById('ad-warning-modal');
  const card = document.getElementById('ad-warning-modal-card');
  const warnStatus = document.getElementById('ad-warn-watcher-status');
  if (warnStatus) {
    warnStatus.classList.add('hidden');
    warnStatus.textContent = '';
  }
  if (modal) {
    modal.classList.add('opacity-0', 'pointer-events-none');
    modal.classList.remove('opacity-100', 'pointer-events-auto');
  }
  if (card) {
    card.classList.remove('scale-100');
    card.classList.add('scale-95');
  }
}

function suppressAdWarningPermanently() {
  try {
    localStorage.setItem('kurfa_ad_warn_disabled', '1');
  } catch (e) {}
  state._adRiskSessionAcknowledged = true;
  updateAdWarningToggleUI();
  continueFromAdWarningModal();
  if (typeof showToast === 'function') {
    showToast(t('toast.ad_warn_never'));
  }
}
window.suppressAdWarningPermanently = suppressAdWarningPermanently;

let __desktopSettingsState = {
  createDesktopShortcut: false,
  createStartMenuShortcut: false,
  launchOnStartup: false,
  minimizeToTray: true,
  installPath: '',
  downloadDir: '',
  version: ''
};

function updateDesktopTogglePill(btnEl, active) {
  if (!btnEl) return;
  syncIosSwitchBtn(btnEl, active);
}

async function refreshDesktopBridgeSettings() {
  const card = document.getElementById('desktop-app-settings-card');
  if (!card) return;
  const extMode = getBrowserExtensionMode();
  const isAndroid = (typeof isAndroidNativeApp === 'function' && isAndroidNativeApp()) || /Android/i.test(navigator.userAgent || '');
  if (isAndroid || !extMode || !extMode.startsWith('desktop')) {
    card.classList.add('hidden');
    card.style.display = 'none';
    return;
  }

  try {
    const res = await callExtensionBridge('GET_DESKTOP_SETTINGS', {}, 4000);
    if (res && res.success) {
      card.style.display = '';
      card.classList.remove('hidden');
      __desktopSettingsState = {
        createDesktopShortcut: Boolean(res.desktopShortcut ?? res.createDesktopShortcut),
        createStartMenuShortcut: Boolean(res.startMenuShortcut ?? res.createStartMenuShortcut),
        launchOnStartup: Boolean(res.runOnStartup ?? res.launchOnStartup ?? res.startup),
        minimizeToTray: res.minimizeToTray === undefined ? true : Boolean(res.minimizeToTray),
        installPath: res.installDir || res.installPath || res.path || '',
        downloadDir: res.downloadDir || res.downloadPath || res.downloadsDir || '',
        version: res.version || ''
      };

      if ((res.language === 'tr' || res.language === 'en') && !localStorage.getItem('kurfa_lang')) {
        if (typeof applyAppLanguage === 'function') applyAppLanguage(res.language, true);
      }

      const pathEl = document.getElementById('desktop-install-path');
      if (pathEl) pathEl.textContent = __desktopSettingsState.installPath || t('settings.desktop_app');
      const dlDirEl = document.getElementById('desktop-download-dir');
      if (dlDirEl) dlDirEl.textContent = __desktopSettingsState.downloadDir || t('dl.folder_default');
      const modalDlPathEl = document.getElementById('modal-dl-folder-path');
      if (modalDlPathEl) modalDlPathEl.textContent = __desktopSettingsState.downloadDir || t('dl.folder_default');
      const modalDlRowEl = document.getElementById('modal-dl-folder-row');
      if (modalDlRowEl) {
        modalDlRowEl.classList.remove('hidden');
        modalDlRowEl.classList.add('flex');
      }
      const verEl = document.getElementById('desktop-app-version');
      if (verEl) verEl.textContent = __desktopSettingsState.version ? `v${__desktopSettingsState.version}` : t('dp.active_pill');

      updateDesktopTogglePill(document.getElementById('btn-desktop-shortcut-toggle'), __desktopSettingsState.createDesktopShortcut);
      updateDesktopTogglePill(document.getElementById('btn-desktop-startmenu-toggle'), __desktopSettingsState.createStartMenuShortcut);
      updateDesktopTogglePill(document.getElementById('btn-desktop-startup-toggle'), __desktopSettingsState.launchOnStartup);
      updateDesktopTogglePill(document.getElementById('btn-desktop-tray-toggle'), __desktopSettingsState.minimizeToTray);
    } else {
      card.classList.add('hidden');
      card.style.display = 'none';
    }
  } catch (e) {
    card.classList.add('hidden');
    card.style.display = 'none';
  }
}
window.refreshDesktopBridgeSettings = refreshDesktopBridgeSettings;

let __kurfaLatestVersionsCache = { data: null, fetchedAt: 0 };

function compareSemverStrings(a, b) {
  const pa = String(a || '').replace(/^v/i, '').split('.').map((n) => parseInt(n, 10) || 0);
  const pb = String(b || '').replace(/^v/i, '').split('.').map((n) => parseInt(n, 10) || 0);
  const len = Math.max(pa.length, pb.length, 3);
  for (let i = 0; i < len; i++) {
    const va = pa[i] || 0;
    const vb = pb[i] || 0;
    if (va > vb) return 1;
    if (va < vb) return -1;
  }
  return 0;
}

async function fetchLatestPublishedAppVersions(force = false) {
  const now = Date.now();
  if (!force && __kurfaLatestVersionsCache.data && (now - __kurfaLatestVersionsCache.fetchedAt) < 60000) {
    return __kurfaLatestVersionsCache.data;
  }
  try {
    const base = typeof API_BASE === 'string'
      ? API_BASE
      : ((typeof WORKER_URL === 'string' && WORKER_URL) ? WORKER_URL : 'https://kurfanova.kurfa.workers.dev');
    const resp = await fetch(`${base}/api/app-versions`, { cache: 'no-store' });
    if (resp.ok) {
      const json = await resp.json();
      if (json && json.success) {
        __kurfaLatestVersionsCache = { data: json, fetchedAt: now };
        return json;
      }
    }
  } catch (_) {}
  return __kurfaLatestVersionsCache.data || null;
}

function getAndroidBridgeVersionInfo() {
  try {
    if (typeof window.KurfaAndroidBridge?.getAppVersionInfo === 'function') {
      const raw = window.KurfaAndroidBridge.getAppVersionInfo();
      const parsed = typeof raw === 'string' ? JSON.parse(raw) : raw;
      if (parsed && typeof parsed === 'object') {
        return {
          versionName: String(parsed.versionName || '').replace(/^v/i, ''),
          versionCode: Number(parsed.versionCode || 0)
        };
      }
    }
  } catch (_) {}
  return { versionName: '', versionCode: 0 };
}

async function refreshAppVersionAndUpdateStatus() {
  const pillEl = document.getElementById('settings-app-version-pill');
  const lineEl = document.getElementById('settings-update-check-line');
  const engineEl = document.getElementById('settings-engine-status');
  const browserInstallEl = document.getElementById('settings-browser-install-card');
  const androidCardEl = document.getElementById('android-app-settings-card');
  const adWarnRowEl = document.getElementById('settings-adwarn-row');

  const extMode = getBrowserExtensionMode();
  const isDesktop = Boolean(extMode && extMode.startsWith('desktop'));
  const isAndroid = isAndroidNativeEngine();
  const isNativeApp = isDesktop || isAndroid;

  if (browserInstallEl) browserInstallEl.classList.toggle('hidden', isNativeApp);
  if (adWarnRowEl) adWarnRowEl.classList.toggle('hidden', hasAdFreePlaybackEnvironment());
  if (androidCardEl) androidCardEl.classList.toggle('hidden', !isAndroid);

  if (isDesktop) {
    await refreshDesktopBridgeSettings();
  }

  let platformLabel = t('settings.platform_web');
  let installedVer = KURFA_WEB_VERSION;
  let installedCode = 0;

  if (isDesktop) {
    platformLabel = t('settings.platform_desktop');
    installedVer = String(__desktopSettingsState.version || '').replace(/^v/i, '');
  } else if (isAndroid) {
    platformLabel = t('settings.platform_android');
    const aInfo = getAndroidBridgeVersionInfo();
    installedVer = aInfo.versionName;
    installedCode = aInfo.versionCode;
  } else if (extMode) {
    platformLabel = t('settings.platform_ext');
  }

  if (pillEl) {
    pillEl.textContent = installedVer ? `${platformLabel} v${installedVer}` : platformLabel;
  }

  if (engineEl) {
    if (isNativeApp || extMode || isBrowserAdBlockerActive()) {
      engineEl.textContent = t('nav.ad_free');
      engineEl.className = 'px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-500/15 text-emerald-500 flex-shrink-0';
    } else {
      engineEl.textContent = t('settings.browser');
      engineEl.className = 'px-2.5 py-1 rounded-full text-[11px] font-bold bg-surface-container text-on-surface-variant flex-shrink-0';
    }
  }

  if (!lineEl) return;
  if (!isNativeApp) {
    lineEl.textContent = t('settings.auto_update_web');
    lineEl.className = 'text-[11px] text-on-surface-variant mt-0.5';
    return;
  }

  lineEl.textContent = t('settings.checking_remote');
  lineEl.className = 'text-xs text-on-surface-variant mt-0.5';

  const latest = await fetchLatestPublishedAppVersions();
  if (!latest) {
    lineEl.textContent = installedVer
      ? t('settings.installed_ver', { ver: installedVer })
      : t('settings.ver_verified');
    return;
  }

  if (isDesktop) {
    const remoteVer = String(latest.desktop?.version || '').replace(/^v/i, '');
    const quickBtn = document.getElementById('btn-settings-quick-update');
    const quickLbl = document.getElementById('btn-settings-quick-update-label');
    if (remoteVer && installedVer) {
      const cmp = compareSemverStrings(remoteVer, installedVer);
      if (cmp > 0) {
        lineEl.textContent = t('settings.new_ver_available', { remote: remoteVer, installed: installedVer });
        lineEl.className = 'text-xs font-semibold text-amber-500 mt-0.5';
        if (quickBtn) {
          quickBtn.classList.remove('hidden');
          quickBtn.classList.add('flex');
          if (quickLbl) quickLbl.textContent = t('settings.quick_update_avail', { ver: remoteVer });
        }
      } else {
        lineEl.textContent = t('settings.up_to_date', { ver: remoteVer });
        lineEl.className = 'text-xs font-semibold text-emerald-500 mt-0.5';
        if (quickBtn) {
          quickBtn.classList.add('hidden');
          quickBtn.classList.remove('flex');
        }
      }
    } else if (remoteVer) {
      lineEl.textContent = t('settings.latest_published', { ver: remoteVer });
    }
  } else if (isAndroid) {
    const remoteName = String(latest.android?.versionName || '').replace(/^v/i, '');
    const remoteCode = Number(latest.android?.versionCode || 0);
    const hasNewByCode = remoteCode > 0 && installedCode > 0 && remoteCode > installedCode;
    const hasNewByName = remoteName && installedVer && compareSemverStrings(remoteName, installedVer) > 0;
    if (hasNewByCode || (!installedCode && hasNewByName)) {
      lineEl.textContent = t('settings.new_ver_available', { remote: remoteName || remoteCode, installed: installedVer || installedCode });
      lineEl.className = 'text-xs font-semibold text-amber-500 mt-0.5';
    } else if (installedVer && remoteName) {
      lineEl.textContent = t('settings.up_to_date', { ver: remoteName });
      lineEl.className = 'text-xs font-semibold text-emerald-500 mt-0.5';
    } else if (remoteName) {
      lineEl.textContent = t('settings.latest_published', { ver: remoteName });
    }
  }
}
window.refreshAppVersionAndUpdateStatus = refreshAppVersionAndUpdateStatus;

async function toggleDesktopSetting(key) {
  const current = Boolean(__desktopSettingsState[key]);
  const next = !current;
  const bridgeKeyMap = {
    createDesktopShortcut: 'desktopShortcut',
    createStartMenuShortcut: 'startMenuShortcut',
    launchOnStartup: 'runOnStartup',
    minimizeToTray: 'minimizeToTray'
  };
  const bridgeKey = bridgeKeyMap[key] || key;
  const isEn = getAppLanguage() === 'en';
  try {
    const res = await callExtensionBridge('SET_DESKTOP_SETTINGS', { [bridgeKey]: next, key: bridgeKey, value: next }, 4000);
    if (res && res.success) {
      __desktopSettingsState[key] = next;
      const keyMap = {
        createDesktopShortcut: 'btn-desktop-shortcut-toggle',
        createStartMenuShortcut: 'btn-desktop-startmenu-toggle',
        launchOnStartup: 'btn-desktop-startup-toggle',
        minimizeToTray: 'btn-desktop-tray-toggle'
      };
      updateDesktopTogglePill(document.getElementById(keyMap[key]), next);
      const labelMap = {
        createDesktopShortcut: t('settings.desktop_shortcut'),
        createStartMenuShortcut: t('settings.start_menu'),
        launchOnStartup: t('settings.win_startup'),
        minimizeToTray: t('settings.min_tray')
      };
      if (typeof showToast === 'function') {
        showToast(`${labelMap[key] || key}: ${next ? t('settings.on') : t('settings.off')}`);
      }
    } else {
      if (typeof showToast === 'function') {
        showToast(isEn ? 'Could not update setting' : 'Ayar değiştirilemedi');
      }
    }
  } catch (e) {
    if (typeof showToast === 'function') {
      showToast(isEn ? 'Could not update setting' : 'Ayar değiştirilemedi');
    }
  }
}
window.toggleDesktopSetting = toggleDesktopSetting;

function openDesktopInstallFolder() {
  callExtensionBridge('OPEN_INSTALL_FOLDER', {}, 4000);
  if (typeof showToast === 'function') {
    showToast(t('toast.opening_folder'));
  }
}
window.openDesktopInstallFolder = openDesktopInstallFolder;

async function pickDesktopDownloadFolder() {
  try {
    const res = await callExtensionBridge('PICK_DOWNLOAD_FOLDER', {}, 120000);
    if (res && res.success) {
      const nextDir = res.downloadDir || res.downloadPath || res.downloadsDir || res.folder || res.path || '';
      if (nextDir) {
        __desktopSettingsState.downloadDir = nextDir;
        const dirEl = document.getElementById('desktop-download-dir');
        if (dirEl) dirEl.textContent = nextDir;
        const modalDirEl = document.getElementById('modal-dl-folder-path');
        if (modalDirEl) modalDirEl.textContent = nextDir;
        if (typeof showToast === 'function') {
          showToast(t('toast.dl_folder_updated', { dir: nextDir }));
        }
      }
      if (typeof refreshDesktopBridgeSettings === 'function') {
        refreshDesktopBridgeSettings().catch(() => {});
      }
    } else if (res && res.canceled) {
      return;
    } else if (res && res.error && typeof showToast === 'function') {
      showToast(res.error);
    }
  } catch (e) {
    if (typeof showToast === 'function') {
      showToast(t('toast.dl_folder_desktop_only'));
    }
  }
}
window.pickDesktopDownloadFolder = pickDesktopDownloadFolder;

// =============================================================================
// DESKTOP OTA UPDATE CONSENT MODAL & LIVE PROGRESS CONTROLLER
// =============================================================================
const __kurfaDesktopUpdateState = {
  phase: 'idle', // 'available' | 'downloading' | 'verifying' | 'ready' | 'error' | 'up-to-date'
  currentVersion: '',
  version: '',
  notes: '',
  bytesDownloaded: 0,
  totalBytes: 0,
  percent: 0,
  errorMessage: '',
  userDeferred: false,
  autoApplyAfterDownload: false,
  autoRestartScheduled: false
};

function formatUpdateMb(bytes) {
  if (!bytes || bytes <= 0) return '0 MB';
  return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
}

function renderDesktopUpdateModalContent() {
  const modal = document.getElementById('desktop-update-modal');
  if (!modal) return;

  const titleEl = document.getElementById('desktop-update-title');
  const subEl = document.getElementById('desktop-update-subtitle');
  const notesEl = document.getElementById('desktop-update-notes-box');
  const progWrap = document.getElementById('desktop-update-progress-wrap');
  const phaseLbl = document.getElementById('desktop-update-phase-label');
  const pctEl = document.getElementById('desktop-update-pct');
  const barEl = document.getElementById('desktop-update-bar');
  const bytesEl = document.getElementById('desktop-update-bytes');
  const secHintEl = document.getElementById('desktop-update-sec-hint');
  const errBox = document.getElementById('desktop-update-error-box');
  const consentEl = document.getElementById('desktop-update-consent-text');
  const secBtn = document.getElementById('desktop-update-secondary-btn');
  const priBtn = document.getElementById('desktop-update-primary-btn');
  const priIcon = document.getElementById('desktop-update-primary-icon');
  const priLbl = document.getElementById('desktop-update-primary-label');
  const heroIcon = document.getElementById('desktop-update-hero-icon');

  const st = __kurfaDesktopUpdateState;
  const curTxt = st.currentVersion ? `v${st.currentVersion} → ` : '';
  const sizeTxt = st.totalBytes > 0 ? ` • ${formatUpdateMb(st.totalBytes)}` : '';
  if (subEl) subEl.textContent = `${curTxt}v${st.version || '...'}${sizeTxt}`;

  if (notesEl) {
    const cleanNotes = String(st.notes || '').trim();
    if (cleanNotes) {
      notesEl.textContent = cleanNotes;
      notesEl.classList.remove('hidden');
    } else {
      notesEl.classList.add('hidden');
    }
  }

  if (errBox) errBox.classList.add('hidden');
  if (progWrap) progWrap.classList.add('hidden');
  if (consentEl) consentEl.classList.add('hidden');
  if (priBtn) {
    priBtn.disabled = false;
    priBtn.classList.remove('opacity-60', 'pointer-events-none');
  }
  if (secBtn) {
    secBtn.classList.remove('hidden');
  }

  if (st.phase === 'available') {
    if (heroIcon) heroIcon.textContent = 'system_update';
    if (titleEl) titleEl.textContent = t('dupd.available');
    if (consentEl) {
      consentEl.textContent = t('dupd.consent');
      consentEl.classList.remove('hidden');
    }
    if (secBtn) secBtn.textContent = t('dupd.later');
    if (priIcon) priIcon.textContent = 'download';
    if (priLbl) priLbl.textContent = t('dupd.download_update');
  } else if (st.phase === 'downloading' || st.phase === 'verifying') {
    if (heroIcon) heroIcon.textContent = 'downloading';
    if (titleEl) titleEl.textContent = t('dupd.downloading');
    if (progWrap) progWrap.classList.remove('hidden');
    const pct = Math.max(0, Math.min(100, Number(st.percent) || 0));
    if (phaseLbl) phaseLbl.textContent = st.phase === 'verifying' ? t('dupd.verifying_sha') : t('dupd.downloading_pkg');
    if (pctEl) pctEl.textContent = `${pct}%`;
    if (barEl) barEl.style.width = `${pct}%`;
    if (bytesEl) bytesEl.textContent = `${formatUpdateMb(st.bytesDownloaded)} / ${formatUpdateMb(st.totalBytes)}`;
    if (secHintEl) secHintEl.textContent = st.phase === 'verifying' ? t('dupd.integrity_check') : t('dupd.sha_protected');
    if (secBtn) secBtn.textContent = t('dupd.bg_hide');
    if (priBtn) {
      priBtn.disabled = true;
      priBtn.classList.add('opacity-60', 'pointer-events-none');
    }
    if (priIcon) priIcon.textContent = 'hourglass_top';
    if (priLbl) priLbl.textContent = st.phase === 'verifying' ? t('dupd.verifying_btn') : t('dl.downloading');
  } else if (st.phase === 'ready') {
    if (heroIcon) heroIcon.textContent = 'verified';
    if (titleEl) titleEl.textContent = t('dupd.ready');
    if (progWrap) progWrap.classList.remove('hidden');
    if (phaseLbl) phaseLbl.textContent = t('dupd.verified_ready');
    if (pctEl) pctEl.textContent = '100%';
    if (barEl) barEl.style.width = '100%';
    if (bytesEl) bytesEl.textContent = st.totalBytes > 0 ? t('dupd.completed', { size: formatUpdateMb(st.totalBytes) }) : t('dupd.packaged');
    if (secHintEl) secHintEl.textContent = t('dupd.ready_badge');
    if (consentEl) {
      consentEl.textContent = st.autoApplyAfterDownload
        ? t('dupd.restart_hint')
        : t('dupd.manual_restart_hint');
      consentEl.classList.remove('hidden');
    }
    if (secBtn) secBtn.textContent = t('dupd.close_apply');
    if (priIcon) priIcon.textContent = 'restart_alt';
    if (priLbl) priLbl.textContent = t('dupd.restart_update');
  } else if (st.phase === 'error') {
    if (heroIcon) heroIcon.textContent = 'error';
    if (titleEl) titleEl.textContent = t('dupd.error');
    if (errBox) {
      errBox.textContent = st.errorMessage || t('dupd.err_fallback');
      errBox.classList.remove('hidden');
    }
    if (secBtn) secBtn.textContent = t('dupd.close');
    if (priIcon) priIcon.textContent = 'refresh';
    if (priLbl) priLbl.textContent = t('dupd.retry');
  }
}

function openDesktopUpdateModal() {
  const modal = document.getElementById('desktop-update-modal');
  const card = document.getElementById('desktop-update-modal-card');
  if (!modal) return;
  renderDesktopUpdateModalContent();
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  if (card) {
    card.classList.remove('scale-95');
    card.classList.add('scale-100');
  }
}

function dismissDesktopUpdateModal(userDeferred = false) {
  if (userDeferred) {
    __kurfaDesktopUpdateState.userDeferred = true;
    __kurfaDesktopUpdateState.autoApplyAfterDownload = false;
  }
  const modal = document.getElementById('desktop-update-modal');
  const card = document.getElementById('desktop-update-modal-card');
  if (!modal) return;
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.classList.remove('opacity-100', 'pointer-events-auto');
  if (card) {
    card.classList.add('scale-95');
    card.classList.remove('scale-100');
  }
  updatePageSeoMeta({ tabId: state.currentTab || 'kesfet', updateUrl: false });
}
window.dismissDesktopUpdateModal = dismissDesktopUpdateModal;

async function confirmDesktopUpdateAction() {
  const st = __kurfaDesktopUpdateState;
  if (st.phase === 'ready') {
    const res = await callExtensionBridge('APPLY_UPDATE', {}, 5000);
    if (!res || !res.success) {
      if (typeof showToast === 'function') showToast('Güncelleme uygulanamadı, lütfen uygulamayı yeniden açın.');
    }
    return;
  }
  if (st.phase === 'available' || st.phase === 'error') {
    st.autoApplyAfterDownload = true;
    st.phase = 'downloading';
    st.percent = 0;
    renderDesktopUpdateModalContent();
    await callExtensionBridge('START_UPDATE_DOWNLOAD', {}, 6000);
  }
}
window.confirmDesktopUpdateAction = confirmDesktopUpdateAction;

function openDesktopUpdateModalFromSettings() {
  if (__kurfaDesktopUpdateState.version && (__kurfaDesktopUpdateState.phase === 'available' || __kurfaDesktopUpdateState.phase === 'ready' || __kurfaDesktopUpdateState.phase === 'downloading')) {
    __kurfaDesktopUpdateState.userDeferred = false;
    openDesktopUpdateModal();
  } else {
    triggerDesktopUpdateCheck();
  }
}
window.openDesktopUpdateModalFromSettings = openDesktopUpdateModalFromSettings;

window.__kurfaDesktopUpdateUI = function (payload) {
  if (!payload || typeof payload !== 'object') return;
  const phase = String(payload.phase || '');
  if (phase === 'hide') {
    dismissDesktopUpdateModal(false);
    return;
  }

  if (payload.currentVersion) __kurfaDesktopUpdateState.currentVersion = String(payload.currentVersion);
  if (payload.version) __kurfaDesktopUpdateState.version = String(payload.version);
  if (payload.notes !== undefined) __kurfaDesktopUpdateState.notes = String(payload.notes || '');
  if (typeof payload.bytesDownloaded === 'number') __kurfaDesktopUpdateState.bytesDownloaded = payload.bytesDownloaded;
  if (typeof payload.totalBytes === 'number' && payload.totalBytes > 0) __kurfaDesktopUpdateState.totalBytes = payload.totalBytes;
  if (typeof payload.percent === 'number') __kurfaDesktopUpdateState.percent = payload.percent;
  __kurfaDesktopUpdateState.errorMessage = String(payload.errorMessage || '');
  __kurfaDesktopUpdateState.phase = phase;

  const lineEl = document.getElementById('settings-update-check-line');
  const quickBtn = document.getElementById('btn-settings-quick-update');
  const quickLbl = document.getElementById('btn-settings-quick-update-label');

  if (phase === 'available' || phase === 'ready') {
    if (lineEl) {
      lineEl.textContent = phase === 'ready'
        ? t('settings.quick_update_ready', { ver: __kurfaDesktopUpdateState.version })
        : t('settings.quick_update_avail', { ver: __kurfaDesktopUpdateState.version });
      lineEl.className = 'text-xs font-semibold text-amber-500 mt-0.5';
    }
    if (quickBtn) {
      quickBtn.classList.remove('hidden');
      quickBtn.classList.add('flex');
      if (quickLbl) {
        quickLbl.textContent = phase === 'ready'
          ? t('settings.quick_update_ready', { ver: __kurfaDesktopUpdateState.version })
          : t('settings.quick_update_avail', { ver: __kurfaDesktopUpdateState.version });
      }
    }

    if (!__kurfaDesktopUpdateState.userDeferred) {
      openDesktopUpdateModal();
    }

    if (phase === 'ready' && __kurfaDesktopUpdateState.autoApplyAfterDownload && !__kurfaDesktopUpdateState.autoRestartScheduled) {
      __kurfaDesktopUpdateState.autoRestartScheduled = true;
      setTimeout(() => {
        callExtensionBridge('APPLY_UPDATE', {}, 5000);
      }, 950);
    }
  } else if (phase === 'downloading' || phase === 'verifying' || phase === 'error') {
    renderDesktopUpdateModalContent();
  } else if (phase === 'up-to-date') {
    if (lineEl) {
      lineEl.textContent = t('settings.up_to_date', { ver: __kurfaDesktopUpdateState.currentVersion || __kurfaDesktopUpdateState.version });
      lineEl.className = 'text-xs font-semibold text-emerald-500 mt-0.5';
    }
    if (quickBtn) {
      quickBtn.classList.add('hidden');
      quickBtn.classList.remove('flex');
    }
  }
};

async function triggerDesktopUpdateCheck() {
  const iconEl = document.getElementById('btn-desktop-check-update-icon');
  const lblEl = document.getElementById('btn-desktop-check-update-label');
  const btnEl = document.getElementById('btn-desktop-check-update');
  const isEn = getAppLanguage() === 'en';

  if (btnEl) btnEl.disabled = true;
  if (iconEl) iconEl.classList.add('animate-spin');
  if (lblEl) lblEl.textContent = t('settings.checking_update');
  __kurfaDesktopUpdateState.userDeferred = false;

  try {
    const res = await callExtensionBridge('CHECK_UPDATE', {}, 15000);
    if (!res) {
      if (typeof showToast === 'function') showToast(isEn ? 'Could not reach desktop bridge.' : 'Masaüstü köprüsüne ulaşılamadı.');
      return;
    }

    if (res.status === 'available' || res.status === 'staged') {
      window.__kurfaDesktopUpdateUI({
        phase: res.status === 'staged' ? 'ready' : 'available',
        currentVersion: res.currentVersion || '',
        version: res.remoteVersion || res.stagedVersion || '',
        notes: res.notes || '',
        totalBytes: res.sizeBytes || 0,
        bytesDownloaded: res.status === 'staged' ? (res.sizeBytes || 0) : 0,
        percent: res.status === 'staged' ? 100 : 0
      });
    } else if (res.status === 'up-to-date') {
      window.__kurfaDesktopUpdateUI({
        phase: 'up-to-date',
        currentVersion: res.currentVersion || '',
        version: res.remoteVersion || res.currentVersion || ''
      });
      if (typeof showToast === 'function') {
        showToast(t('settings.up_to_date', { ver: res.currentVersion || '' }), 'success');
      }
    } else if (res.status === 'error') {
      if (typeof showToast === 'function') {
        showToast(res.errorMessage || (isEn ? 'Update check failed.' : 'Güncelleme kontrolü başarısız oldu.'));
      }
    } else {
      if (typeof showToast === 'function') showToast(isEn ? 'Update check completed.' : 'Güncelleme kontrolü tamamlandı.');
    }
  } finally {
    if (btnEl) btnEl.disabled = false;
    if (iconEl) iconEl.classList.remove('animate-spin');
    if (lblEl) lblEl.textContent = t('settings.check_update');
  }
}
window.triggerDesktopUpdateCheck = triggerDesktopUpdateCheck;

function openAdWarningModal(target, options = {}) {
  const modal = document.getElementById('ad-warning-modal');
  const card = document.getElementById('ad-warning-modal-card');
  if (!modal) return;

  const mode = (options && options.mode) || (target ? 'track' : 'welcome');
  modal.dataset.warnMode = mode;

  const trackCard = document.getElementById('ad-warn-track-card');
  const welcomeBox = document.getElementById('ad-warn-welcome-box');
  const titleElHeader = document.getElementById('ad-warn-title');
  const subtitleEl = document.getElementById('ad-warn-subtitle');
  const bodyTextEl = document.getElementById('ad-warn-body-text');
  const continueBtn = document.getElementById('ad-warn-continue-btn');

  const thumbEl = document.getElementById('ad-warn-track-thumb');
  const titleEl = document.getElementById('ad-warn-track-title');
  const artistEl = document.getElementById('ad-warn-track-artist');

  if (mode === 'welcome') {
    if (trackCard) trackCard.classList.add('hidden');
    if (welcomeBox) welcomeBox.classList.remove('hidden');
    if (titleElHeader) titleElHeader.textContent = t('adw.welcome_title');
    if (subtitleEl) subtitleEl.textContent = t('adw.welcome_sub');
    if (bodyTextEl) bodyTextEl.classList.add('hidden');
    if (continueBtn) continueBtn.textContent = t('adw.welcome_continue');
  } else {
    if (trackCard) trackCard.classList.remove('hidden');
    if (welcomeBox) welcomeBox.classList.add('hidden');
    if (titleElHeader) titleElHeader.textContent = t('adw.title');
    if (subtitleEl) subtitleEl.textContent = t('adw.subtitle');
    if (bodyTextEl) {
      bodyTextEl.classList.remove('hidden');
      bodyTextEl.textContent = t('adw.body');
    }
    if (continueBtn) continueBtn.textContent = t('adw.continue_btn');

    if (thumbEl) thumbEl.src = safeUrl(getTrackThumbnail(target), './kurfamuzik_logo.png');
    if (titleEl) titleEl.textContent = target?.title || (getAppLanguage() === 'en' ? 'Unknown Track' : 'Bilinmeyen Parça');
    if (artistEl) artistEl.textContent = target?.artist || (getAppLanguage() === 'en' ? 'Unknown Artist' : 'Bilinmeyen Sanatçı');
  }

  const platform = detectUserDevicePlatform();
  const browserStore = detectBrowserExtensionStore();
  const badgeEl = document.getElementById('ad-warn-device-badge');
  const primaryEl = document.getElementById('ad-warn-primary-cta');
  const secondaryEl = document.getElementById('ad-warn-secondary-cta');

  const storeWatchClick = () => {
    startAdBlockerBackgroundWatcher();
    if (typeof showToast === 'function') {
      showToast(getAppLanguage() === 'en'
        ? `${browserStore.storeName} opened. Adding the extension will be detected automatically.`
        : `${browserStore.storeName} açıldı. Ekle'ye basınca otomatik algılanacak.`);
    }
  };

  const platformConfigs = {
    windows: {
      badge: `Windows • ${browserStore.name}`,
      primaryLabel: t('adw.win_cta'),
      primaryHref: 'https://github.com/KurfaCore/kurfanova-app/releases/download/v1.0.0-apk/Kurfamuzik-Setup.exe',
      primaryTarget: '_blank',
      primaryDownload: 'Kurfamuzik-Setup.exe',
      primaryOnClick: null,
      secondaryLabel: t('adw.adguard_short', { name: browserStore.name }),
      secondaryHref: browserStore.url,
      secondaryTarget: '_blank',
      secondaryDownload: null,
      secondaryOnClick: storeWatchClick
    },
    android: {
      badge: t('adw.android_detected'),
      primaryLabel: t('adw.android_cta'),
      primaryHref: 'https://github.com/KurfaCore/kurfanova-app/releases/latest/download/Kurfanova-Muzik.apk',
      primaryTarget: '_blank',
      primaryDownload: 'Kurfanova-Muzik.apk',
      primaryOnClick: null,
      secondaryLabel: t('adw.webapk'),
      secondaryHref: '#webapk',
      secondaryTarget: '_self',
      secondaryDownload: null,
      secondaryOnClick: (e) => {
        e.preventDefault();
        dismissAdWarningModal(false);
        triggerPwaInstall();
      }
    },
    macos: {
      badge: `macOS • ${browserStore.name}`,
      primaryLabel: t('adw.adguard_cta', { name: browserStore.name }),
      primaryHref: browserStore.url,
      primaryTarget: '_blank',
      primaryDownload: null,
      primaryOnClick: storeWatchClick,
      secondaryLabel: t('adw.all_install_opts'),
      secondaryHref: '#install',
      secondaryTarget: '_self',
      secondaryDownload: null,
      secondaryOnClick: (e) => {
        e.preventDefault();
        dismissAdWarningModal(false);
        openAppInstallModal();
      }
    },
    linux: {
      badge: `Linux • ${browserStore.name}`,
      primaryLabel: t('adw.adguard_cta', { name: browserStore.name }),
      primaryHref: browserStore.url,
      primaryTarget: '_blank',
      primaryDownload: null,
      primaryOnClick: storeWatchClick,
      secondaryLabel: t('adw.all_install_opts'),
      secondaryHref: '#install',
      secondaryTarget: '_self',
      secondaryDownload: null,
      secondaryOnClick: (e) => {
        e.preventDefault();
        dismissAdWarningModal(false);
        openAppInstallModal();
      }
    },
    ios: {
      badge: 'iOS Safari',
      primaryLabel: t('adw.ios_cta'),
      primaryHref: KURFA_ADGUARD_STORES['safari-ios'].url,
      primaryTarget: '_blank',
      primaryDownload: null,
      primaryOnClick: storeWatchClick,
      secondaryLabel: t('adw.open_catalog'),
      secondaryHref: '#audius',
      secondaryTarget: '_self',
      secondaryDownload: null,
      secondaryOnClick: (e) => {
        e.preventDefault();
        const q = target ? (kurfaCleanTrackQuery(target?.title, target?.artist) || (target?.title || '')) : '';
        dismissAdWarningModal(false);
        switchTab('arama');
        if (q) {
          if (DOM.topSearchInput) DOM.topSearchInput.value = q;
          state.baseSearchQuery = q;
        }
        const audiusChip = document.querySelector('#search-filter-chips .filter-chip[onclick*="audius"]');
        applySearchFilter('audius', audiusChip);
      }
    }
  };

  const cfg = platformConfigs[platform] || platformConfigs.windows;
  if (badgeEl) badgeEl.textContent = cfg.badge;

  if (primaryEl) {
    const labelSpan = primaryEl.querySelector('[data-cta-label]') || primaryEl;
    labelSpan.textContent = cfg.primaryLabel;
    primaryEl.href = cfg.primaryHref;
    primaryEl.target = cfg.primaryTarget;
    if (cfg.primaryDownload) {
      primaryEl.setAttribute('download', cfg.primaryDownload);
    } else {
      primaryEl.removeAttribute('download');
    }
    primaryEl.onclick = cfg.primaryOnClick || null;
  }

  if (secondaryEl) {
    const secSpan = secondaryEl.querySelector('[data-cta-label]') || secondaryEl;
    secSpan.textContent = cfg.secondaryLabel;
    secondaryEl.href = cfg.secondaryHref;
    secondaryEl.target = cfg.secondaryTarget;
    if (cfg.secondaryDownload) {
      secondaryEl.setAttribute('download', cfg.secondaryDownload);
    } else {
      secondaryEl.removeAttribute('download');
    }
    secondaryEl.onclick = cfg.secondaryOnClick || null;
  }

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  if (card) {
    card.classList.remove('scale-95');
    card.classList.add('scale-100');
  }
}

function dismissAdWarningModal(shouldResume = false) {
  const modal = document.getElementById('ad-warning-modal');
  const isWelcome = modal?.dataset?.warnMode === 'welcome';
  if (shouldResume) {
    continueFromAdWarningModal();
    return;
  }
  if (isWelcome) {
    acknowledgeAdWarningSession();
  }
  hideAdWarningModalVisual();
  state._pendingAdWarnPlayback = null;
  if (!isWelcome) {
    state.isPlaying = false;
    updatePlayPauseUI(false);
  }
}
window.openAdWarningModal = openAdWarningModal;
window.hideAdWarningModalVisual = hideAdWarningModalVisual;
window.dismissAdWarningModal = dismissAdWarningModal;

function continueFromAdWarningModal() {
  acknowledgeAdWarningSession();
  const pending = state._pendingAdWarnPlayback;
  state._pendingAdWarnPlayback = null;
  hideAdWarningModalVisual();

  if (pending && pending.cleanYtId) {
    playTrackById(
      pending.cleanYtId,
      pending.target,
      pending.normalizedStart || 0,
      undefined,
      undefined,
      { bypassAdWarning: true }
    );
  }
}
window.continueFromAdWarningModal = continueFromAdWarningModal;

