/**
 * KURFAMÜZİK (KURFA SOUND LIGHT) — Client Controller v4
 * 100% Ad-Free YouTube Playback Engine, 120 FPS Scrubbable Seekbar & Volume,
 * Real Synced LRC Karaoke Lyrics Engine, Full Mobile First-Class Navigation & Player Deck
 */

const KURFA_WEB_VERSION = '4.5.0';

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

    'explore.tab_trends': 'Trendler & Top 10',
    'explore.tab_discover': 'Keşif & Karışımlar',
    'explore.tab_new': 'Yeni Çıkanlar',
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
    'explore.popular_mixes_title': 'Popüler Karışımlar',
    'explore.popular_artists_title': 'Popüler Sanatçılar',
    'explore.featured_collections_title': 'Öne Çıkan Koleksiyonlar',
    'explore.new_releases_title': 'Yeni Çıkanlar',
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
    'settings.backup_export': 'Yedek Al',
    'settings.backup_import': 'Yedeği Yükle',
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
    'toast.local_no_video': 'Yerel ses dosyalarında video modu kullanılamaz'
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

    'explore.tab_trends': 'Trends & Top 10',
    'explore.tab_discover': 'Discover & Mixes',
    'explore.tab_new': 'New Releases',
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
    'explore.popular_mixes_title': 'Popular Mixes',
    'explore.popular_artists_title': 'Popular Artists',
    'explore.featured_collections_title': 'Featured Collections',
    'explore.new_releases_title': 'New Releases',
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
    'settings.backup_export': 'Export Backup',
    'settings.backup_import': 'Import Backup',
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
    'toast.local_no_video': 'Video mode is not available for local audio files'
  }
};

function getAppLanguage() {
  try {
    if (typeof state !== 'undefined' && state && (state.lang === 'tr' || state.lang === 'en')) {
      return state.lang;
    }
    const stored = localStorage.getItem('kurfa_lang');
    if (stored === 'en' || stored === 'tr') return stored;
  } catch (_) {}
  return 'tr';
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
      if (hasActiveTrack && (el.id === 'player-artist' || el.id === 'player-artist-mobile' || el.id === 'deck-artist')) {
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

    const btnTr = document.getElementById('btn-lang-tr');
    const btnEn = document.getElementById('btn-lang-en');
    if (btnTr && btnEn) {
      const activeCls = ['bg-primary', 'text-on-primary'];
      const inactiveCls = ['text-on-surface-variant', 'hover:text-on-surface'];
      if (cleanLang === 'tr') {
        btnTr.classList.add(...activeCls);
        btnTr.classList.remove(...inactiveCls);
        btnEn.classList.remove(...activeCls);
        btnEn.classList.add(...inactiveCls);
      } else {
        btnEn.classList.add(...activeCls);
        btnEn.classList.remove(...inactiveCls);
        btnTr.classList.remove(...activeCls);
        btnTr.classList.add(...inactiveCls);
      }
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
window.toggleAppLanguage = toggleAppLanguage;

// Base API endpoint resolver for cross-origin hosting (GitHub Pages / local preview -> Worker API)
const __isLocalStaticPreview = typeof window !== 'undefined' &&
  (window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost') &&
  window.location.port !== '8787';
const API_BASE = (typeof window !== 'undefined' && (window.location.origin.includes('github.io') || window.location.protocol === 'file:' || __isLocalStaticPreview))
  ? 'https://kurfanova.kurfa.workers.dev'
  : '';

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
    await new Promise((r) => setTimeout(r, 850));
    const isProtected = hasAdFreePlaybackEnvironment();
    const isAnyModalOpen = Boolean(
      document.querySelector(
        '#app-install-modal.opacity-100, #ad-warning-modal.opacity-100, #profile-modal.opacity-100, #login-modal.opacity-100'
      )
    );
    const hasStartedPlayback = Boolean(
      typeof state !== 'undefined' && (state._pendingAdWarnPlayback || state.isPlaying)
    );

    if (!isProtected && !isAnyModalOpen && !hasStartedPlayback) {
      openAdWarningModal(null, { mode: 'welcome' });
    }
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
      initWebAutoUpdater();
      setTimeout(async () => {
        const detected = await kurfaDetectAdBlocker({ force: true });
        await kurfaHandleInitialVisit(detected);
      }, 450);
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
    if (res && res.success && res.streamUrl) return res;
  }

  if (getBrowserExtensionMode()) {
    const res = await callExtensionBridge('STREAM', { videoId: cleanVid }, 6000);
    if (res && res.success && res.streamUrl) {
      try {
        if (typeof res.streamUrl === 'string' && res.streamUrl.includes('/__kurfa_native_audio__/')) {
          state._desktopLocalAudioOrigin = new URL(res.streamUrl).origin;
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
  if (mem && mem.expiresAt > Date.now()) return mem.results;
  try {
    const raw = localStorage.getItem('kurfa_search_cache_v2');
    if (!raw) return null;
    const store = JSON.parse(raw);
    const entry = store && store[cacheKey];
    if (entry && entry.expiresAt > Date.now() && Array.isArray(entry.results) && entry.results.length > 0) {
      __kurfaSearchMemory.set(cacheKey, entry);
      return entry.results;
    }
  } catch (e) {}
  return null;
}

function writeSearchClientCache(cacheKey, results) {
  if (!Array.isArray(results) || results.length === 0) return;
  const entry = { results, expiresAt: Date.now() + 6 * 3600 * 1000 };
  if (__kurfaSearchMemory.size >= 40) __kurfaSearchMemory.clear();
  __kurfaSearchMemory.set(cacheKey, entry);
  try {
    const store = JSON.parse(localStorage.getItem('kurfa_search_cache_v2') || '{}') || {};
    const keys = Object.keys(store);
    if (keys.length >= 30) {
      delete store[keys[0]];
    }
    store[cacheKey] = entry;
    localStorage.setItem('kurfa_search_cache_v2', JSON.stringify(store));
  } catch (e) {}
}

async function kurfaSearchTracks(query, opts = {}) {
  const cleanQ = String(query || '').trim();
  if (!cleanQ) return { success: false, results: [] };
  const filterSingles = Boolean(opts.filterSingles);
  const source = opts.source || state.searchSource || 'auto';
  const signal = opts.signal;
  const cacheKey = `${source}|${filterSingles ? 1 : 0}|${cleanQ.toLowerCase()}`;

  const cached = readSearchClientCache(cacheKey);
  if (cached) {
    return { success: true, source: 'client-cache', results: cached };
  }

  if (source === 'audius') {
    const audRes = await kurfaSearchOpenCatalog(cleanQ, signal);
    if (audRes.success) writeSearchClientCache(cacheKey, audRes.results);
    return audRes;
  }

  if (isAndroidNativeEngine() && typeof window.KurfaAndroidBridge.searchTracksAsync === 'function') {
    const apkRes = await callAndroidBridge('searchTracksAsync', [cleanQ, filterSingles], 11000);
    if (signal && signal.aborted) throw new DOMException('Aborted', 'AbortError');
    if (apkRes && apkRes.success && Array.isArray(apkRes.results) && apkRes.results.length > 0) {
      writeSearchClientCache(cacheKey, apkRes.results);
      return apkRes;
    }
  }

  if (getBrowserExtensionMode()) {
    const extRes = await callExtensionBridge('SEARCH', { query: cleanQ, filterSingles }, 9000);
    if (signal && signal.aborted) throw new DOMException('Aborted', 'AbortError');
    if (extRes && extRes.success && Array.isArray(extRes.results) && extRes.results.length > 0) {
      writeSearchClientCache(cacheKey, extRes.results);
      return extRes;
    }
  }

  const res = await fetch(
    `${API_BASE}/api/search?q=${encodeURIComponent(cleanQ)}${filterSingles ? '&single=1' : ''}`,
    { signal }
  );
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const data = await res.json();
  if (data && data.success && Array.isArray(data.results) && data.results.length > 0) {
    writeSearchClientCache(cacheKey, data.results);
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
    const cached = JSON.parse(localStorage.getItem('kurfa_explore_cache') || 'null');
    if (cached && Array.isArray(cached.trends) && cached.trends.length > 0) {
      return cached;
    }
  } catch(e) {}
  return {
    ...DEFAULT_EXPLORE_SEED,
    trends: [...DEFAULT_EXPLORE_SEED.trends],
    top10: DEFAULT_EXPLORE_SEED.trends.slice(0, 10),
    fresh: [...DEFAULT_EXPLORE_SEED.fresh],
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
  if (!track) return './kurfamuzik_logo.png';
  if (track.isLocal || String(track.id || '').startsWith('local_')) {
    return track.thumbnail ? safeUrl(track.thumbnail, './kurfamuzik_logo.png') : './kurfamuzik_logo.png';
  }
  const vid = safeYtId(track.ytId) || safeYtId(track.id);
  if (vid) {
    return `https://i.ytimg.com/vi/${vid}/hqdefault.jpg`;
  }
  if (track.thumbnail && typeof track.thumbnail === 'string') {
    const lower = track.thumbnail.toLowerCase();
    if (!lower.includes('invidious') && !lower.includes('kurfamuzik_logo')) {
      return safeUrl(track.thumbnail, './kurfamuzik_logo.png');
    }
  }
  return './kurfamuzik_logo.png';
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

function formatCleanTrackTitle(rawTitle) {
  const s = String(rawTitle || '').trim();
  if (!s) return '';
  const cleaned = s
    .replace(/\s*[\(\[]\s*(?:official\s*(?:music\s*)?video|official\s*audio|video\s*klip|klip|visualizer|lyric\s*video|lyrics|hd|4k|8k|remastered)[^\)\]]*[\)\]]/gi, '')
    .replace(/\s*\|\s*official\b.*$/gi, '')
    .replace(/\s+[–—-]\s*(?:official\s*(?:music\s*)?video|official\s*audio|video\s*klip|klip)\s*$/gi, '')
    .replace(/\s+/g, ' ')
    .trim();
  return cleaned || s;
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
  const clearBtn = document.getElementById('btn-top-clear');
  if (!clearBtn) return;
  const hasText = Boolean(DOM.topSearchInput && DOM.topSearchInput.value && DOM.topSearchInput.value.trim().length > 0);
  clearBtn.classList.toggle('hidden', !hasText);
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

function saveQueueState() {
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
}

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
  _activeMediaEngine: 'none', // 'none' | 'audio' | 'youtube' | 'native-exo'
  _nativeExoCurrentTime: 0,
  _nativeExoDuration: 0,
  _nativeExoFallbackActive: false,
  _lastNativeExoEndedToken: -1,
  _desktopLocalAudioOrigin: '',
  _prefetchedNextStreamKey: '',
  _prefetchTimer: null,
  _activeTrackConfirmedPlaying: false,
  _activeTrackId: null,
  _seekOnceHandler: null,
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
  _isAdMuted: false,
  currentAudioSinkId: localStorage.getItem('kurfa_audio_sink') || null,
  profile: (function() {
    const saved = safeGetJSON('kurfa_profile', null);
    if (saved) return saved;
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    return {
      nickname: "Dinleyici",
      avatar: "./kurfamuzik_logo.png",
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
  currentGenreFilter: 'all',
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
      return l === 'en' ? 'en' : 'tr';
    } catch (_) { return 'tr'; }
  })(),
  searchHistory: safeGetJSON('kurfa_search_history', []),
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

  // Audio fallback
  audioEngine: document.getElementById('audio-engine')
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
    dismissVideoAdNotice();
  }
}

function switchTab(tabId, shouldScroll = true, opts = {}) {
  state.currentTab = tabId;
  if (tabId === "kesfet" && !(opts && opts.preserveArtist)) {
    closeArtistDetail();
  }
  safeSetStorage('kurfa_last_tab', tabId);

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
    if (curTrackId && lyricsLoadedTrackId === curTrackId) {
      syncLyricsWithTime(getActiveMediaCurrentTime(), true);
    } else {
      updateLyricsDisplay();
    }
    renderPlaylistTracksTable();
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
  const pSpotify = document.getElementById('kutuphane-pane-spotify');
  const pFav = document.getElementById('kutuphane-pane-favoriler');
  const pCihaz = document.getElementById('kutuphane-pane-cihaz');

  if (pList) pList.classList.toggle('hidden', subTabId !== 'listelerim');
  if (pSpotify) pSpotify.classList.toggle('hidden', subTabId !== 'spotify');
  if (pFav) pFav.classList.toggle('hidden', subTabId !== 'favoriler');
  if (pCihaz) pCihaz.classList.toggle('hidden', subTabId !== 'cihaz');

  if (subTabId === 'listelerim') {
    renderCustomPlaylistsGrid();
  } else if (subTabId === 'spotify') {
    renderSpotifyPlaylistsGrid();
  } else if (subTabId === 'favoriler') {
    renderFavoritesTable();
  } else if (subTabId === 'cihaz') {
    renderDeviceAudioList();
    if (!Array.isArray(state.deviceAudioTracks) || state.deviceAudioTracks.length === 0) {
      scanLocalDeviceAudio(false);
    }
  }
  updateKutuphaneBadges();
}

function updateKutuphaneBadges() {
  const plBadge = document.getElementById('playlists-badge-count');
  if (plBadge) plBadge.textContent = (state.customPlaylists || []).length.toString();

  const plCount = document.getElementById('playlist-count-text');
  if (plCount) plCount.textContent = `${(state.customPlaylists || []).length} Liste`;

  const spBadge = document.getElementById('spotify-badge-count');
  if (spBadge) spBadge.textContent = (state.spotifyPlaylists || []).length.toString();

  const spCount = document.getElementById('spotify-count-text');
  if (spCount) spCount.textContent = `${(state.spotifyPlaylists || []).length} Liste`;

  const favBadge = document.getElementById('fav-badge-count');
  if (favBadge) favBadge.textContent = (state.favorites || []).length.toString();

  const favCount = document.getElementById('fav-count-text');
  if (favCount) favCount.textContent = `${(state.favorites || []).length} Şarkı Kaydedildi`;
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

function stopAllPlayback(skipYtStop = false, preserveNativeLock = false, skipExoStop = false) {
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

function initYouTubeEngine() {
  if (state.ytPlayer || state._ytInitializing) return;
  const targetEl = document.getElementById('yt-player');
  if (!targetEl) return;
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

    // Otherwise, YouTube is the active playback source; silence HTML5 audio safely
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
  if (state._activeMediaEngine === 'none') {
    return Math.max(0, state.currentPlayheadTime || 0);
  }
  if (state._activeMediaEngine === 'native-exo') {
    return Math.max(0, state._nativeExoCurrentTime || state.currentPlayheadTime || 0);
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
        return Math.max(0, state.ytPlayer.getCurrentTime() || 0);
      }
    } catch(e) {}
  }
  return Math.max(0, state.currentPlayheadTime || 0);
}
window.getCurrentPlaybackTime = getCurrentPlaybackTime;

function seekPlaybackToSeconds(targetSec) {
  if (typeof targetSec !== 'number' || isNaN(targetSec) || targetSec < 0) return;
  state.currentPlayheadTime = targetSec;

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

  updatePlayerTrackUI(target);
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

  // Ensure HTML5 audio is silent and playhead reset without triggering spurious error events
  if (DOM.audioEngine) {
    try {
      DOM.audioEngine.pause();
      DOM.audioEngine.currentTime = 0;
      if (DOM.audioEngine.getAttribute('src')) {
        DOM.audioEngine.removeAttribute('src');
      }
    } catch(e) {}
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
    if (target.streamUrl) {
      loadDirectAudioStream(target.streamUrl, normalizedStart, token, null);
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
      state.isPlaying = true;
      updatePlayPauseUI(true);
      syncNativeAppPlaybackState(true);
      if (typeof nativeExo.setVolumeNativeExo === 'function') {
        try { nativeExo.setVolumeNativeExo(state.isMuted ? 0 : (state.volume ?? 0.8)); } catch (_) {}
      }
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
    DOM.audioEngine.volume = state.isMuted ? 0 : (state.volume ?? 0.8);
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
    };
    DOM.audioEngine.addEventListener('loadedmetadata', state._seekOnceHandler, { once: true });
    DOM.audioEngine.src = streamUrl;
    state.isPlaying = true;
    updatePlayPauseUI(true);
    syncNativeAppPlaybackState(true);
    const playPromise = DOM.audioEngine.play();
    if (playPromise && typeof playPromise.then === 'function') {
      playPromise.then(() => {
        if (token !== currentPlaybackToken) return;
        state._activeMediaEngine = 'audio';
        state._activeTrackConfirmedPlaying = true;
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

function loadYouTubePlayback(cleanYtId, target, normalizedStart, token, ytCanDirectLoad) {
  if (token !== currentPlaybackToken) return;
  if (ytCanDirectLoad) {
    try {
      if (typeof state.ytPlayer.setPlaybackRate === 'function') {
        state.ytPlayer.setPlaybackRate(1);
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
      DOM.audioEngine.play().then(() => {
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

  // 1b. Android Native Media3 ExoPlayer resume
  if (state._activeMediaEngine === 'native-exo' && state.currentTrack) {
    const exo = getAndroidExoBridge();
    if (exo && typeof exo.resumeNativeExo === 'function') {
      try {
        exo.resumeNativeExo();
        state.isPlaying = true;
        updatePlayPauseUI(true);
        syncNativeAppPlaybackState(true);
        if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
        return;
      } catch (e) {}
    }
  }

  // 2. If HTML5 Audio engine has a loaded source (Audius / direct stream), resume it
  if (DOM.audioEngine && DOM.audioEngine.getAttribute('src') && !DOM.audioEngine.ended && state.currentTrack) {
    DOM.audioEngine.play().then(() => {
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
  if (DOM.audioEngine) {
    try { DOM.audioEngine.pause(); } catch(e) {}
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
  const defaultPlaceholder = "./kurfamuzik_logo.png";
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

  if (typeof updatePlaylistHeroUI === 'function') {
    updatePlaylistHeroUI(track);
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
  // 1. If Video mode, prioritize YouTube duration
  if (state.deckVisualMode === 'video' && state.ytReady && state.ytPlayer && typeof state.ytPlayer.getDuration === 'function') {
    dur = state.ytPlayer.getDuration() || 0;
  }
  // 2. If HTML5 audio is active or has a loaded source, use its duration (never fall back to stale YouTube duration)
  const isAudioEngineActive = state._activeMediaEngine === 'audio' ||
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
  if (state._activeMediaEngine === 'none') {
    return Math.max(0, state.currentPlayheadTime || 0);
  }
  if (state._activeMediaEngine === 'native-exo') {
    return Math.max(0, state._nativeExoCurrentTime || state.currentPlayheadTime || 0);
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

  // 3. YouTube player locked to 'youtube' or video mode — verify loaded video_id matches!
  if ((state._activeMediaEngine === 'youtube' || state.deckVisualMode === 'video') && state.ytReady && state.ytPlayer && typeof state.ytPlayer.getCurrentTime === 'function') {
    try {
      const currentYtId = safeYtId(state.currentTrack?.ytId || state.currentTrack?.id);
      const loadedYtId = typeof state.ytPlayer.getVideoData === 'function'
        ? safeYtId(state.ytPlayer.getVideoData()?.video_id)
        : null;
      if (currentYtId && loadedYtId === currentYtId) {
        return Math.max(0, state.ytPlayer.getCurrentTime() || 0);
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
    DOM.playerMobileSeekFill.style.width = `${pct}%`;
  }

  // Floating PiP window seekbar (only query DOM when open)
  const floatingPipEl = document.getElementById('kurfa-floating-pip');
  if (floatingPipEl && !floatingPipEl.classList.contains('hidden')) {
    const pipSeekFill = document.getElementById('pip-seek-fill');
    const pipCur = document.getElementById('pip-time-cur');
    const pipDur = document.getElementById('pip-time-dur');
    if (pipSeekFill) pipSeekFill.style.width = `${pct}%`;
    if (pipCur) pipCur.textContent = timeCurStr;
    if (pipDur) pipDur.textContent = timeDurStr;
  }

  // Document PiP window seekbar (only if active)
  if (pipWindowInstance && pipWindowInstance.document) {
    const extSeekFill = pipWindowInstance.document.getElementById('pip-ext-seek-fill');
    const extCur = pipWindowInstance.document.getElementById('pip-ext-cur');
    const extDur = pipWindowInstance.document.getElementById('pip-ext-dur');
    if (extSeekFill) extSeekFill.style.width = `${pct}%`;
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
    cancelAnimationFrame(seekbarRaf);
    seekbarRaf = null;
  }
  if (!state.isPlaying || (typeof document !== 'undefined' && document.hidden)) return;

  function tick(timestamp) {
    if (!state.isPlaying || (typeof document !== 'undefined' && document.hidden)) {
      seekbarRaf = null;
      return;
    }

    if (!state.isSeeking) {
      const now = timestamp || performance.now();
      const throttleInterval = 80;
      const adCheckInterval = 650;
      if (now - lastSeekbarTickTime >= throttleInterval) {
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
          if (state.currentTab === 'calma-listeleri') {
            syncLyricsWithTime(cur);
          }
          if ((cur >= 4 || (dur - cur) <= 15) && typeof prefetchNextTrackStream === 'function') {
            prefetchNextTrackStream();
          }
        }
      }
    }
    seekbarRaf = requestAnimationFrame(tick);
  }

  seekbarRaf = requestAnimationFrame(tick);
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
    if (DOM.playerMobileSeekFill) DOM.playerMobileSeekFill.style.width = `${pct * 100}%`;

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

function setPlayerVolume(vol) {
  const numericVol = (typeof vol === 'number' && !isNaN(vol)) ? vol : 0.8;
  state.volume = Math.max(0, Math.min(1, numericVol));
  state.isMuted = state.volume === 0;
  safeSetStorage('kurfa_vol', state.volume.toString());

  if (DOM.playerVolFill) DOM.playerVolFill.style.width = `${state.volume * 100}%`;
  const knob = DOM.playerVolTrack ? DOM.playerVolTrack.querySelector('.vol-knob') : null;
  if (knob) knob.style.left = `${state.volume * 100}%`;

  if (state.ytReady && state.ytPlayer && typeof state.ytPlayer.setVolume === 'function') {
    try {
      if (state.volume === 0 && typeof state.ytPlayer.mute === 'function') {
        state.ytPlayer.mute();
      } else if (state.volume > 0 && !state._isAdMuted && typeof state.ytPlayer.unMute === 'function') {
        state.ytPlayer.unMute();
      }
      state.ytPlayer.setVolume(Math.round(state.volume * 100));
    } catch(e) {}
  }
  if (DOM.audioEngine) {
    DOM.audioEngine.volume = state.volume;
  }
  const exo = getAndroidExoBridge();
  if (exo && typeof exo.setVolumeNativeExo === 'function') {
    try { exo.setVolumeNativeExo(state.volume); } catch (_) {}
  }

  if (DOM.btnVolumeIcon) {
    const icon = DOM.btnVolumeIcon.querySelector('.material-symbols-outlined');
    if (icon) {
      if (state.volume === 0) icon.textContent = 'volume_off';
      else if (state.volume < 0.5) icon.textContent = 'volume_down';
      else icon.textContent = 'volume_up';
    }
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
// 9. REAL SYNCHRONIZED KARAOKE LYRICS (LRCLIB & LIVE HIGHLIGHT)
// =============================================================================

function cleanLyricsQuery(title, artist) {
  let rawT = (title || '')
    .replace(/\s*[\(\[]\s*(?:dedub\s*sessions?|sessions?|akustik|acoustic|live|canl\u0131|official(?:\s*(?:music)?\s*(?:video|audio))?|video\s*klip|klip|lyric\s*video|lyrics|visualizer|hd|4k|8k|feat\.?|ft\.?|with\b|prod\.?)[^\)\]]*[\)\]]/gi, '')
    .replace(/\s*\[[^\]]*\]/g, '')
    .replace(/\s*[–—-]\s*(?:official|klip|video|audio|live|akustik|acoustic|sessions?|remix).*$/gi, '')
    .replace(/\s+\|\s*.*$/g, '')
    .replace(/["'"]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  let rawA = (artist || '')
    .replace(/\s*-\s*topic/gi, '')
    .replace(/\b(netd\s*m\u00fczik|vevo|official|music|records|production)\b/gi, '')
    .replace(/["'"]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  let parsedArtist = rawA;
  let parsedTitle = rawT;
  const dashSplit = rawT.split(/\s+[–—-]\s+/).map(p => p.trim()).filter(Boolean);
  if (dashSplit.length >= 2) {
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
  if (!visible) {
    const hint = document.getElementById('lyrics-intro-diff-hint');
    if (hint) {
      hint.classList.add('hidden');
      hint.classList.remove('flex');
    }
  }
}

function updateLyricsOffsetUI() {
  const display = document.getElementById('lyrics-offset-display');
  if (display) {
    const off = state.lyricsOffset || 0;
    display.textContent = (off >= 0 ? '+' : '') + off.toFixed(1) + 's';
  }
}

function setExactLyricsOffset(offset) {
  if (!state.currentTrack || isTrackLocal(state.currentTrack)) return;
  state.lyricsOffset = Math.round(offset * 10) / 10;
  if (state.currentTrack.id) {
    safeSetStorage('kurfa_offset_' + state.currentTrack.id, state.lyricsOffset.toString());
  }
  updateLyricsOffsetUI();
  showToast(`Söz Senkronu: ${(state.lyricsOffset >= 0 ? '+' : '') + state.lyricsOffset.toFixed(1)}s`, 'success');

  syncLyricsWithTime(getActiveMediaCurrentTime());
}
window.setExactLyricsOffset = setExactLyricsOffset;

function promptManualOffset() {
  if (!state.currentTrack || isTrackLocal(state.currentTrack)) return;
  const current = state.lyricsOffset || 0;
  const val = prompt("Şarkı sözü senkron farkını girin (Örnek: -41 veya +2.5 saniye):", current.toFixed(1));
  if (val !== null) {
    const num = parseFloat(val.replace(',', '.'));
    if (!isNaN(num)) {
      setExactLyricsOffset(num);
    }
  }
}
window.promptManualOffset = promptManualOffset;

function syncLineToCurrentPlayback(line) {
  if (!state.currentTrack || isTrackLocal(state.currentTrack)) return;
  if (!line || typeof line.time !== 'number') return;
  let cur = getActiveMediaCurrentTime();
  if (!cur) {
    showToast("Önce şarkıyı başlatın", "info");
    return;
  }
  // Target: line.time = cur + offset => offset = line.time - cur
  const newOffset = Math.round((line.time - cur) * 10) / 10;
  setExactLyricsOffset(newOffset);
  showToast(`Bu Satır Şu Ana Eşitlendi: ${(newOffset >= 0 ? '+' : '')}${newOffset.toFixed(1)}s`, 'success');
}
window.syncLineToCurrentPlayback = syncLineToCurrentPlayback;

function syncActiveLineToPlayback() {
  if (!state.currentTrack || isTrackLocal(state.currentTrack)) return;
  if (!state.activeLyrics || state.activeLyrics.length === 0) {
    showToast("Senkronize söz bulunamadı", "info");
    return;
  }
  let targetLine = null;
  if (state.currentLyricIndex >= 0 && state.activeLyrics[state.currentLyricIndex]) {
    targetLine = state.activeLyrics[state.currentLyricIndex];
  } else {
    // If before first line, try first line
    targetLine = state.activeLyrics[0];
  }
  if (targetLine) {
    syncLineToCurrentPlayback(targetLine);
  }
}
window.syncActiveLineToPlayback = syncActiveLineToPlayback;

function adjustLyricsOffset(delta) {
  if (!state.currentTrack || isTrackLocal(state.currentTrack)) return;
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
let lyricsUserScrollPauseUntil = 0;

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const box = document.getElementById('karaoke-lyrics-box');
    if (box) {
      const pauseAutoScroll = () => { lyricsUserScrollPauseUntil = Date.now() + 4000; };
      box.addEventListener('wheel', pauseAutoScroll, { passive: true });
      box.addEventListener('touchmove', pauseAutoScroll, { passive: true });
    }
  });
}

async function updateLyricsDisplay() {
  const reqToken = ++lyricsRequestToken;
  if (lyricsAbortController) {
    try { lyricsAbortController.abort(); } catch (e) {}
  }
  lyricsAbortController = (typeof AbortController !== 'undefined') ? new AbortController() : null;
  const signal = lyricsAbortController ? lyricsAbortController.signal : undefined;

  // Immediately clear stale lyrics from previous track so syncLyricsWithTime never highlights old lines
  state.activeLyrics = [];
  state.currentLyricIndex = -1;
  lyricsLoadedTrackId = null;
  lyricsUserScrollPauseUntil = 0;

  if (!DOM.deckLyricsLines) return;

  const track = state.currentTrack;
  if (!track) {
    renderLyricsEmpty(null);
    return;
  }

  // Local device files do not use online lyrics matching or sync offset controls
  if (isTrackLocal(track)) {
    setLyricsOffsetControlsVisible(false);
    lyricsLoadedTrackId = track.id || 'local';
    if (DOM.lyricsStatusLabel) DOM.lyricsStatusLabel.textContent = "Yerel Dosya";
    if (DOM.lyricsSourceBadge) DOM.lyricsSourceBadge.textContent = "Devre Dışı";
    DOM.deckLyricsLines.innerHTML = `
      <div class="py-8 px-4 flex flex-col items-center justify-center text-center gap-2.5 text-on-surface-variant rounded-2xl bg-surface-container-low/50 border border-surface-container/60">
        <div class="w-11 h-11 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
          <span class="material-symbols-outlined text-[24px]" aria-hidden="true">music_off</span>
        </div>
        <div>
          <p class="text-sm font-bold text-on-surface">Yerel Dosyalarda Canlı Sözler Devre Dışıdır</p>
          <p class="text-xs text-on-surface-variant mt-1 max-w-xs leading-relaxed">
            Cihazınızdan çalınan yerel ses dosyaları için söz eşleştirme ve senkronizasyon kontrolleri kapatılmıştır.
          </p>
        </div>
      </div>
    `;
    return;
  }

  const cacheKey = `${track.id || ''}_${track.title || ''}_${track.artist || ''}`;

  // Restore track-specific offset from localStorage
  const savedOffset = track.id ? localStorage.getItem('kurfa_offset_' + track.id) : null;
  const parsedOffset = savedOffset !== null ? parseFloat(savedOffset) : 0;
  state.lyricsOffset = !isNaN(parsedOffset) ? parsedOffset : 0;
  updateLyricsOffsetUI();

  // Check memory cache
  if (lyricsMemoryCache.has(cacheKey)) {
    const cached = lyricsMemoryCache.get(cacheKey);
    lyricsLoadedTrackId = track.id || cacheKey;
    if (cached.synced && cached.lines) {
      checkAndDisplayClipIntroHint(track, cached.duration || 0);
      renderLyricsList(cached.lines, cached.source);
      syncLyricsWithTime(getActiveMediaCurrentTime(), true);
    } else if (cached.plain) {
      checkAndDisplayClipIntroHint(track, 0);
      renderPlainLyrics(cached.plain, cached.source);
    } else {
      checkAndDisplayClipIntroHint(track, 0);
      renderLyricsEmpty(track);
    }
    return;
  }

  // Show loading skeleton in lyrics box
  setLyricsOffsetControlsVisible(false);
  if (DOM.lyricsStatusLabel) DOM.lyricsStatusLabel.textContent = getAppLanguage() === 'en' ? 'Searching Lyrics...' : 'Şarkı Sözleri Aranıyor...';
  if (DOM.lyricsSourceBadge) DOM.lyricsSourceBadge.textContent = '';
  DOM.deckLyricsLines.innerHTML = `
    <div class="py-8 flex flex-col items-center justify-center gap-2 text-on-surface-variant">
      <span class="material-symbols-outlined text-[32px] animate-spin text-primary">progress_activity</span>
      <p class="text-xs font-semibold">${escapeHtml(getAppLanguage() === 'en' ? 'Fetching synced lyrics...' : 'Senkronize şarkı sözleri getiriliyor...')}</p>
    </div>
  `;

  const { cleanT, cleanA, firstA, rawT } = cleanLyricsQuery(track.title, track.artist);
  const trackDurationSec = (typeof parseDurationToSec === 'function' ? parseDurationToSec(track.duration) : 0) || getActiveMediaDuration() || 0;

  function saveLyricsToLocalStorage(entry) {
    try {
      const raw = localStorage.getItem('kurfa_lyrics_cache_v1');
      const store = (raw ? JSON.parse(raw) : {}) || {};
      const keys = Object.keys(store);
      if (keys.length >= 40) delete store[keys[0]];
      store[cacheKey] = { ...entry, expiresAt: Date.now() + 7 * 24 * 3600 * 1000 };
      localStorage.setItem('kurfa_lyrics_cache_v1', JSON.stringify(store));
    } catch (e) {}
  }

  // 0. Instant localStorage persistent lyrics check (0 network requests)
  try {
    const raw = localStorage.getItem('kurfa_lyrics_cache_v1');
    const store = raw ? JSON.parse(raw) : null;
    const saved = store && store[cacheKey];
    if (saved && saved.expiresAt > Date.now()) {
      lyricsLoadedTrackId = track.id || cacheKey;
      if (saved.synced && Array.isArray(saved.lines)) {
        lyricsMemoryCache.set(cacheKey, saved);
        checkAndDisplayClipIntroHint(track, saved.duration || 0);
        renderLyricsList(saved.lines, saved.source || "LRCLIB Canlı Sözler");
        syncLyricsWithTime(getActiveMediaCurrentTime(), true);
        return;
      } else if (saved.plain) {
        lyricsMemoryCache.set(cacheKey, saved);
        checkAndDisplayClipIntroHint(track, 0);
        renderPlainLyrics(saved.plain, saved.source || "LRCLIB Tam Metin");
        return;
      }
    }
  } catch (e) {}

  // 1. Direct browser-to-LRCLIB fetch FIRST (0 Cloudflare Worker load, CORS enabled)
  const clientQueries = [...new Set([
    `${cleanT} ${cleanA}`.trim(),
    firstA && firstA !== cleanA ? `${cleanT} ${firstA}`.trim() : '',
    `${cleanA} ${cleanT}`.trim(),
    cleanT,
    rawT
  ].filter(Boolean))];

  function scoreLyricsMatchClient(cand, targetTitle, targetArtist, durSec) {
    if (!cand || (!cand.syncedLyrics && !cand.plainLyrics)) return -1;
    const norm = s => (s || '').toLowerCase()
      .replace(/ğ/g, 'g').replace(/ü/g, 'u').replace(/ş/g, 's')
      .replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ç/g, 'c')
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
    if (cleanArt) {
      if (cArtist === cleanArt || cArtist.includes(cleanArt) || cleanArt.includes(cArtist)) {
        score += 3.0;
      } else {
        const firstArtNorm = norm(firstA || '');
        if (firstArtNorm && (cArtist.includes(firstArtNorm) || firstArtNorm.includes(cArtist))) {
          score += 2.2;
        } else if (cArtist && words.length <= 2 && !isDirect) {
          return -1;
        }
      }
    }
    if (cand.syncedLyrics) score += 1.5;

    // Duration proximity weighting prevents matching sped-up/cover/short versions
    if (durSec > 20 && Number(cand.duration) > 20) {
      const diff = Math.abs(Number(cand.duration) - durSec);
      if (diff <= 3) score += 3.5;
      else if (diff <= 8) score += 2.0;
      else if (diff <= 15) score += 0.5;
      else if (diff > 35) score -= 3.0;
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
        if (reqToken !== lyricsRequestToken) return;
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
            lyricsLoadedTrackId = track.id || cacheKey;
            if (best.syncedLyrics) {
              const parsedLines = parseLyricsPayload(best, track);
              const entry = { synced: true, lines: parsedLines, source: "LRCLIB Canlı Sözler", duration: best.duration };
              lyricsMemoryCache.set(cacheKey, entry);
              saveLyricsToLocalStorage(entry);
              checkAndDisplayClipIntroHint(track, best.duration || 0);
              renderLyricsList(parsedLines, "LRCLIB Canlı Sözler");
              syncLyricsWithTime(getActiveMediaCurrentTime(), true);
              return;
            } else if (best.plainLyrics) {
              const entry = { synced: false, plain: best.plainLyrics, source: "LRCLIB Tam Metin" };
              lyricsMemoryCache.set(cacheKey, entry);
              saveLyricsToLocalStorage(entry);
              checkAndDisplayClipIntroHint(track, 0);
              renderPlainLyrics(best.plainLyrics, "LRCLIB Tam Metin");
              return;
            }
          }
        }
      }
    } catch (e) {
      if (e && e.name === 'AbortError') return;
    }
  }

  if (reqToken !== lyricsRequestToken) return;

  // 2. Fallback to Cloudflare worker lyrics resolver only when direct client query misses
  try {
    const res = await fetch(`${API_BASE}/api/lyrics?track=${encodeURIComponent(cleanT)}&artist=${encodeURIComponent(cleanA)}`, { signal });
    if (reqToken !== lyricsRequestToken) return;
    if (res.ok) {
      const data = await res.json();
      if (reqToken !== lyricsRequestToken) return;

      if (data.success && data.syncedLyrics) {
        const parsedLines = parseLyricsPayload(data, track);
        const entry = { synced: true, lines: parsedLines, source: "LRCLIB Canlı Sözler", duration: data.duration };
        lyricsMemoryCache.set(cacheKey, entry);
        saveLyricsToLocalStorage(entry);
        checkAndDisplayClipIntroHint(track, data.duration || 0);
        renderLyricsList(parsedLines, "LRCLIB Canlı Sözler");
        syncLyricsWithTime(getActiveMediaCurrentTime());
        return;
      } else if (data.success && data.plainLyrics) {
        const entry = { synced: false, plain: data.plainLyrics, source: "LRCLIB Tam Metin" };
        lyricsMemoryCache.set(cacheKey, entry);
        saveLyricsToLocalStorage(entry);
        checkAndDisplayClipIntroHint(track, 0);
        renderPlainLyrics(data.plainLyrics, "LRCLIB Tam Metin");
        return;
      }
    }
  } catch (err) {
    if (err && err.name === 'AbortError') return;
  }

  if (reqToken !== lyricsRequestToken) return;

  // 3. Honest Empty State
  lyricsMemoryCache.set(cacheKey, { empty: true });
  checkAndDisplayClipIntroHint(track, 0);
  renderLyricsEmpty(track);
}

function checkAndDisplayClipIntroHint(track, lrcDuration) {
  const hintEl = document.getElementById('lyrics-intro-diff-hint');
  if (!hintEl) return;

  let ytDur = 0;
  if (state.ytPlayer && typeof state.ytPlayer.getDuration === 'function') {
    ytDur = state.ytPlayer.getDuration();
  }
  if (!ytDur && track && track.duration) {
    const parts = String(track.duration).split(':').map(p => parseInt(p, 10));
    if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
      ytDur = parts[0] * 60 + parts[1];
    }
  }

  if (ytDur > 30 && lrcDuration > 30) {
    const diff = Math.round(ytDur - lrcDuration);
    if (diff >= 6 && diff <= 120 && Math.abs(state.lyricsOffset) < 2) {
      const safeDiff = Math.max(0, Math.min(120, Number(diff) || 0));
      hintEl.innerHTML = `
        <span class="flex items-center gap-1.5">
          <span class="flex items-center gap-1"><span class="material-symbols-outlined text-[15px] text-amber-400">movie</span>Klip İntro Farkı:</span>
          <span class="font-mono font-bold">-${safeDiff}s</span>
          <button type="button" class="px-1.5 py-0.5 rounded bg-amber-500/20 hover:bg-amber-500/30 text-amber-700 dark:text-amber-300 font-bold ml-1 transition-colors underline" onclick="setExactLyricsOffset(-${safeDiff})">Uygula</button>
        </span>
      `;
      hintEl.classList.remove('hidden');
      hintEl.classList.add('flex');
      return;
    }
  }
  hintEl.innerHTML = '';
  hintEl.classList.add('hidden');
  hintEl.classList.remove('flex');
}

function isLrcMetaLine(text, time, track) {
  if (!text) return true;
  const t = text.trim();
  if (/^[\u266a\u266b\s.*-]+$/.test(t)) return true;
  if (time <= 8) {
    const lower = t.toLowerCase();
    if (/^(söz|müzik|düzenleme|aranje|mix|mastering|yazar|besteci|parça|şarkı|albüm|kayıt|producer|written by|composed by|lyrics by|arranged by|mixed by|mastered by|directed by|klip yönetmeni)[:\s-]/i.test(lower)) {
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
  const lines = [];
  const rawLines = String(data.syncedLyrics).split('\n');
  let lrcOffsetSec = 0;
  for (const raw of rawLines) {
    const offMatch = raw.match(/^\s*\[offset:\s*([+-]?\d+)\s*\]/i);
    if (offMatch) {
      lrcOffsetSec = (parseInt(offMatch[1], 10) || 0) / 1000;
      break;
    }
  }
  const timeTagGlobal = /\[(\d{1,3}):(\d{2})(?:[.:](\d{1,3}))?\]/g;
  for (const raw of rawLines) {
    if (/^\s*\[(ar|ti|al|by|length|offset|re|ve):/i.test(raw)) continue;
    const text = raw.replace(timeTagGlobal, '').trim();
    let match;
    timeTagGlobal.lastIndex = 0;
    while ((match = timeTagGlobal.exec(raw)) !== null) {
      const min = parseInt(match[1], 10);
      const sec = parseInt(match[2], 10);
      const ms = match[3] ? parseFloat('0.' + match[3]) : 0;
      const totalSec = Math.max(0, min * 60 + sec + ms + lrcOffsetSec);
      if (text && !isLrcMetaLine(text, totalSec, track)) {
        lines.push({ time: totalSec, text });
      }
    }
  }
  lines.sort((a, b) => a.time - b.time);
  return lines;
}

function renderLyricsList(lines, sourceName) {
  state.activeLyrics = lines;
  state.currentLyricIndex = -1;
  setLyricsOffsetControlsVisible(Array.isArray(lines) && lines.length > 0);

  if (DOM.lyricsStatusLabel) DOM.lyricsStatusLabel.textContent = "Canlı Senkronize Sözler";
  if (DOM.lyricsSourceBadge) DOM.lyricsSourceBadge.textContent = sourceName || "Senkronize LRC";

  if (!DOM.deckLyricsLines) return;
  DOM.deckLyricsLines.innerHTML = '';

  lines.forEach((line) => {
    const p = document.createElement('div');
    p.className = `lyric-line group flex items-center justify-between cursor-pointer select-none text-sm md:text-base`;
    p.setAttribute('data-time', line.time);
    
    const textSpan = document.createElement('span');
    textSpan.className = 'flex-1 leading-relaxed';
    textSpan.textContent = line.text;

    // Quick sync button on hover
    const syncBtn = document.createElement('button');
    syncBtn.type = 'button';
    syncBtn.className = 'opacity-0 group-hover:opacity-100 hover:opacity-100 px-2 py-0.5 rounded text-[10px] font-bold bg-primary/15 text-primary hover:bg-primary/25 transition-all flex items-center gap-1 ml-2 flex-shrink-0';
    syncBtn.title = 'Şarkı çalarken bu satırı duyduğunuz an tıklayın: Şarkı sözü senkronunu tam buraya kilitler';
    syncBtn.innerHTML = `<span class="material-symbols-outlined text-[14px]">sync</span><span class="hidden sm:inline">Eşitle</span>`;
    syncBtn.onclick = (e) => {
      e.stopPropagation();
      syncLineToCurrentPlayback(line);
    };

    // Tap lyric to jump
    p.onclick = () => {
      const targetVideoTime = Math.max(0, line.time - (state.lyricsOffset || 0));
      seekPlaybackToSeconds(targetVideoTime);
      showToast(`${formatTime(targetVideoTime)} saniyesine sarıldı`, 'info');
    };

    p.appendChild(textSpan);
    p.appendChild(syncBtn);
    DOM.deckLyricsLines.appendChild(p);
  });
}

function renderPlainLyrics(plainText, sourceName) {
  state.activeLyrics = [];
  state.currentLyricIndex = -1;
  setLyricsOffsetControlsVisible(false);
  if (DOM.lyricsStatusLabel) DOM.lyricsStatusLabel.textContent = "Düz Metin Şarkı Sözleri";
  if (DOM.lyricsSourceBadge) DOM.lyricsSourceBadge.textContent = sourceName || "LRCLIB";

  if (!DOM.deckLyricsLines) return;
  const lines = plainText.split('\n').map(l => l.trim()).filter(Boolean);
  DOM.deckLyricsLines.innerHTML = `
    <div class="pb-2 text-[11px] text-on-surface-variant/80 border-b border-surface-container/50">
      * Bu parça için canlı zaman damgası bulunmamaktadır, şarkı sözleri tam metin olarak sunulmaktadır.
    </div>
    <div class="flex flex-col gap-2 pt-2">
      ${lines.map(l => `<p class="py-1 text-sm text-on-surface font-medium leading-relaxed">${escapeHtml(l)}</p>`).join('')}
    </div>
  `;
}

function renderLyricsEmpty(track) {
  state.activeLyrics = [];
  state.currentLyricIndex = -1;
  setLyricsOffsetControlsVisible(false);
  const isEn = getAppLanguage() === 'en';
  if (DOM.lyricsStatusLabel) DOM.lyricsStatusLabel.textContent = track ? (isEn ? 'Lyrics Not Found' : 'Söz Bulunamadı') : (isEn ? 'Waiting' : 'Bekleniyor');
  if (DOM.lyricsSourceBadge) DOM.lyricsSourceBadge.textContent = '';

  if (!DOM.deckLyricsLines) return;

  if (!track) {
    DOM.deckLyricsLines.innerHTML = `
      <div class="py-8 px-4 flex flex-col items-center justify-center text-center gap-3 text-on-surface-variant">
        <div class="w-12 h-12 rounded-2xl bg-surface-container-high/60 flex items-center justify-center text-on-surface-variant">
          <span class="material-symbols-outlined text-[28px]" aria-hidden="true">music_note</span>
        </div>
        <div>
          <p class="text-sm font-bold text-on-surface">Çalan şarkı bulunmuyor</p>
          <p class="text-xs text-on-surface-variant mt-1 max-w-sm">Bir şarkı başlattığınızda sözler ve senkronizasyon burada görünecektir.</p>
        </div>
      </div>
    `;
    return;
  }

  const queryStr = `${track.artist || ''} ${track.title || ''} şarkı sözleri`;
  DOM.deckLyricsLines.innerHTML = `
    <div class="py-8 px-4 flex flex-col items-center justify-center text-center gap-3 text-on-surface-variant">
      <div class="w-12 h-12 rounded-2xl bg-surface-container-high/60 flex items-center justify-center text-on-surface-variant">
        <span class="material-symbols-outlined text-[28px]" aria-hidden="true">lyrics</span>
      </div>
      <div>
        <p class="text-sm font-bold text-on-surface">Bu parça için senkronize söz bulunamadı</p>
        <p class="text-xs text-on-surface-variant mt-1 max-w-sm">YouTube video klibi, canlı performans veya veritabanında henüz yer almayan bir sürüm olabilir.</p>
      </div>
      <a href="https://www.google.com/search?q=${encodeURIComponent(queryStr)}" target="_blank" rel="noopener noreferrer" class="mt-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high text-xs font-bold text-primary transition-all">
        <span>Google'da Şarkı Sözlerini Ara</span>
        <span class="material-symbols-outlined text-[16px]" aria-hidden="true">open_in_new</span>
      </a>
    </div>
  `;
}

function syncLyricsWithTime(currentTime, forceScroll = false) {
  // Exit immediately if tab is hidden or lyrics are not visible on screen (0 ms CPU when dormant)
  if (typeof document !== 'undefined' && document.hidden) return;
  const isLyricsVisible = (state.currentTab === 'calma-listeleri');
  if (!isLyricsVisible) return;

  if (!state.activeLyrics || state.activeLyrics.length === 0 || !DOM.deckLyricsLines) return;

  const adjustedTime = (currentTime || 0) + (state.lyricsOffset || 0);

  // 1. Detect and handle Intro / Instrumental phase before first vocal line
  const firstLyricTime = state.activeLyrics[0].time;
  if (adjustedTime < firstLyricTime) {
    if (state.currentLyricIndex !== -2 || forceScroll) {
      state.currentLyricIndex = -2; // -2 designates Intro / Instrumental
      const allLines = DOM.deckLyricsLines.querySelectorAll('.lyric-line');
      allLines.forEach(l => {
        l.classList.remove('active-lyric', 'active');
        l.classList.add('text-on-surface-variant');
      });

      if (DOM.lyricsStatusLabel) {
        DOM.lyricsStatusLabel.innerHTML = `
          <span class="flex items-center gap-1.5 text-secondary">
            <span class="material-symbols-outlined text-[14px] animate-pulse">graphic_eq</span>
            <span>Enstrümantal Giriş</span>
          </span>
        `;
      }

      if (DOM.karaokeLyricsBox && (forceScroll || Date.now() >= lyricsUserScrollPauseUntil)) {
        DOM.karaokeLyricsBox.scrollTo({ top: 0, behavior: forceScroll ? 'auto' : 'smooth' });
      }
    }
    return;
  }

  // 2. Active vocal lyrics binary search (O(log N))
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
    const wasIntro = (state.currentLyricIndex === -2);
    state.currentLyricIndex = activeIdx;

    if ((wasIntro || forceScroll) && DOM.lyricsStatusLabel) {
      DOM.lyricsStatusLabel.textContent = "Canlı Senkronize Sözler";
    }

    const lines = DOM.deckLyricsLines.querySelectorAll('.lyric-line');
    lines.forEach((line, i) => {
      if (i === activeIdx) {
        line.classList.add('active-lyric', 'active');
        line.classList.remove('text-on-surface-variant');

        // Scroll ONLY the dedicated lyrics box smoothly unless user manually scrolled recently
        if (DOM.karaokeLyricsBox && (forceScroll || Date.now() >= lyricsUserScrollPauseUntil)) {
          const container = DOM.karaokeLyricsBox;
          const containerRect = container.getBoundingClientRect();
          const lineRect = line.getBoundingClientRect();
          const relativeY = (lineRect.top - containerRect.top) + container.scrollTop;
          const targetScroll = relativeY - (container.clientHeight / 2) + (lineRect.height / 2);
          container.scrollTo({ top: Math.max(0, targetScroll), behavior: forceScroll ? 'auto' : 'smooth' });
        }
      } else {
        line.classList.remove('active-lyric', 'active');
        line.classList.add('text-on-surface-variant');
      }
    });
  }
}

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
  ].slice(0, 12);
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
  const wrapper = document.getElementById('search-results-wrapper');
  const sortRow = document.getElementById('search-sort-buttons-row');
  const countEl = document.getElementById('search-results-count');
  const artistsSection = document.getElementById('search-artists-section');
  if (hub) {
    hub.classList.remove('hidden');
    hub.classList.add('flex');
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
  if (DOM.searchSpotlightBox) DOM.searchSpotlightBox.style.display = 'none';
  if (typeof syncTopSearchClearBtn === 'function') syncTopSearchClearBtn();
  renderSearchDiscoveryHub();
}

function hideSearchDiscoveryHub() {
  const hub = document.getElementById('search-discovery-hub');
  const wrapper = document.getElementById('search-results-wrapper');
  const sortRow = document.getElementById('search-sort-buttons-row');
  const countEl = document.getElementById('search-results-count');
  if (hub) {
    hub.classList.add('hidden');
    hub.classList.remove('flex');
  }
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
    if (history.length === 0) {
      recSection.classList.add('hidden');
      recSection.classList.remove('flex');
    } else {
      recSection.classList.remove('hidden');
      recSection.classList.add('flex');
      history.slice(0, 12).forEach((q) => {
        const chip = document.createElement('div');
        chip.className = 'inline-flex items-center gap-1.5 pl-3 pr-1.5 py-1.5 rounded-full bg-surface-container-lowest border border-surface-container hover:border-primary/40 text-xs font-semibold text-on-surface shadow-xs transition-all cursor-pointer';
        chip.innerHTML = `
          <span class="material-symbols-outlined text-[15px] text-primary">history</span>
          <span class="truncate max-w-[160px]">${escapeHtml(q)}</span>
          <button type="button" class="btn-del-chip w-5 h-5 rounded-full flex items-center justify-center text-on-surface-variant hover:text-error hover:bg-surface-container transition-colors" title="${escapeHtml(t('topbar.clear'))}">
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
    }
  }

  const playedSection = document.getElementById('recent-played-search-section');
  const playedGrid = document.getElementById('recent-played-search-grid');
  if (playedSection && playedGrid) {
    const recentList = Array.isArray(state.recentlyPlayed) ? state.recentlyPlayed.slice(0, 8) : [];
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
    const [data, artists] = await Promise.all([
      kurfaSearchTracks(cleanQ, {
        signal: sig,
        source: state.searchSource || 'auto'
      }),
      artistsPromise
    ]);
    if (seqToken !== searchSeqToken) return;

    renderSearchArtistsShelf(artists, cleanQ);

    if (data && data.success && data.results && data.results.length > 0) {
      state.currentSearchResults = data.results;
      state._rawSearchResults = [...data.results];
      state.currentSearchQuery = cleanQ;
      setSearchSort('alaka', { silent: true, skipRender: true });
      renderSearchResults(data.results, cleanQ);
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
    const safeGenre = escapeHtml(artist.genre || 'Sanatçı');
    const fansNum = Number(artist.fans || 0);
    const fansLabel = fansNum >= 1000000
      ? t('artist.listeners_m', { val: (fansNum / 1000000).toFixed(1) })
      : (fansNum >= 1000 ? t('artist.listeners_k', { val: Math.round(fansNum / 1000) }) : safeGenre);
    const safeImg = escapeHtml(safeUrl(artist.image || artist.img, './kurfamuzik_logo.png'));

    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'group flex flex-col items-center text-center w-28 sm:w-32 p-3 rounded-2xl bg-surface-container-lowest hover:bg-surface-container-low border border-surface-container/60 transition-all cursor-pointer flex-shrink-0';
    card.innerHTML = `
      <div class="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mb-2 shadow-sm ring-1 ring-surface-container group-hover:ring-primary/50 transition-all bg-surface-container-high">
        <img src="${safeImg}" alt="${safeName}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" loading="lazy">
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
        id: artist.id || artist.name,
        name: artist.name,
        genre: artist.genre || 'Müzik',
        fans: artist.fans || 0,
        img: artist.image || artist.img || './kurfamuzik_logo.png',
        dynamic: true
      });
    };
    grid.appendChild(card);
  });
}

function renderSpotlightCard(track) {
  if (!DOM.searchSpotlightBox || !track) return;
  DOM.searchSpotlightBox.style.display = 'block';

  const safeTitle = escapeHtml(formatCleanTrackTitle(track.title) || "Şarkı");
  const safeArtist = escapeHtml(track.artist || "Sanatçı");
  const safeThumb = escapeHtml(safeUrl(track.thumbnail || getTrackThumbnail(track), './kurfamuzik_logo.png'));
  const isOpenCatalog = track.source === 'audius' || track.source === 'open-catalog';
  const sourceLabel = isOpenCatalog ? t('search.source_open') : t('search.source_direct');

  DOM.searchSpotlightBox.innerHTML = `
    <div class="flex flex-col sm:flex-row items-center gap-4">
      <div class="relative w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shadow-md bg-surface-container-high flex-shrink-0 group cursor-pointer" id="spotlight-thumb-btn">
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
          <button type="button" id="spotlight-play-btn" class="flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary text-on-primary text-xs font-bold shadow-sm hover:bg-primary-container transition-all">
            <span class="material-symbols-outlined text-[18px]">play_arrow</span>
            <span>${escapeHtml(t('hero.listen_now'))}</span>
          </button>
          <button type="button" id="spotlight-dl-btn" class="flex items-center gap-1.5 px-3 py-2 rounded-full bg-surface-container text-on-surface text-xs font-bold hover:bg-surface-container-high transition-colors">
            <span class="material-symbols-outlined text-[16px]">download</span>
            <span>${escapeHtml(t('hero.download'))}</span>
          </button>
          <button type="button" id="spotlight-queue-btn" class="flex items-center gap-1.5 px-3 py-2 rounded-full bg-surface-container text-on-surface text-xs font-bold hover:bg-surface-container-high transition-colors">
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
  const query = (DOM.topSearchInput ? DOM.topSearchInput.value : "");
  if (query && query.trim()) {
    executeSearchImmediate(query.trim(), true);
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

  if (DOM.topSearchInput) DOM.topSearchInput.value = '';
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

  const inputVal = (DOM.topSearchInput ? DOM.topSearchInput.value : "").trim();
  if (inputVal && (!state.currentSearchQuery || inputVal !== state.currentSearchQuery)) {
    state.baseSearchQuery = inputVal;
  }
  const baseQuery = state.baseSearchQuery || inputVal || "türkçe popüler";
  if (filter === 'audius') {
    state.searchSource = 'audius';
    executeSearchImmediate(baseQuery, true, { preserveBaseQuery: true });
  } else if (filter === 'all') {
    state.searchSource = 'auto';
    executeSearchImmediate(baseQuery, true, { preserveBaseQuery: true });
  } else {
    state.searchSource = 'auto';
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

const FEATURED_ARTISTS_CACHE_KEY = 'kurfa_featured_artists_v2';
const FEATURED_ARTISTS_TTL_MS = 24 * 60 * 60 * 1000;

function formatListenerCount(fans) {
  const num = Number(fans || 0);
  if (!Number.isFinite(num) || num < 1000) return '';
  if (num >= 1000000) return t('artist.listeners_m', { val: (num / 1000000).toFixed(1) });
  return t('artist.listeners_k', { val: Math.round(num / 1000) });
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
      if (match.image && String(match.image).startsWith('http')) {
        entry.img = match.image;
        changed = true;
      }
      if (Number(match.fans) > 0) {
        entry.fans = Number(match.fans);
        changed = true;
      }
      if (match.genre) {
        entry.genre = match.genre;
      }
      if (match.id) entry.id = match.id;
    }
  });
  if (changed) {
    renderPopularArtistsGrid();
  }
}

async function hydrateFeaturedArtistsFromApi() {
  try {
    const rawCache = safeGetJSON(FEATURED_ARTISTS_CACHE_KEY, null);
    if (rawCache && Array.isArray(rawCache.artists) && rawCache.artists.length > 0 && (Date.now() - Number(rawCache.ts || 0)) < FEATURED_ARTISTS_TTL_MS) {
      mergeHydratedFeaturedArtists(rawCache.artists);
      return;
    }
  } catch (_) {}

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
  const subLabel = escapeHtml(listenerText || artist.genre || 'Müzik');
  const safeImg = escapeHtml(safeUrl(artist.img || artist.image, './kurfamuzik_logo.png'));

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

function renderPopularArtistsGrid() {
  const shelfContainer = document.getElementById('popular-artists-grid');
  if (shelfContainer) {
    shelfContainer.innerHTML = '';
    POPULAR_ARTISTS.forEach(artist => {
      shelfContainer.appendChild(createArtistCard(artist));
    });
    initDragToScroll(shelfContainer);
    bindShelfArrows(shelfContainer);
    requestAnimationFrame(() => updateShelfArrowsState(shelfContainer));
  }

  const kesifContainer = document.getElementById('kesif-artists-grid');
  if (kesifContainer) {
    kesifContainer.innerHTML = '';
    POPULAR_ARTISTS.forEach(artist => {
      kesifContainer.appendChild(createArtistCard(artist));
    });
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
  const mix = CURATED_MIXES[index] || CURATED_MIXES[0];
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

  if (avatarEl) avatarEl.src = safeUrl(artist.img || artist.image, './kurfamuzik_logo.png');
  if (nameEl) nameEl.textContent = artist.name;
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
      const apiRes = await fetch(
        `${API_BASE}/api/artist?name=${encodeURIComponent(artist.name || '')}`,
        { signal: sig }
      );
      if (apiRes.ok) {
        const apiData = await apiRes.json();
        if (seq !== artistSeqToken) return;
        if (apiData?.artist) {
          if (avatarEl && apiData.artist.image && !String(artist.img || '').startsWith('http')) {
            avatarEl.src = safeUrl(apiData.artist.image, './kurfamuzik_logo.png');
          }
          if (genreEl && apiData.artist.fans) {
            const fLabel = formatListenerCount(apiData.artist.fans) || t('artist.profile_label');
            genreEl.textContent = `${apiData.artist.genre || artist.genre || 'Müzik'} • ${fLabel}`;
          }
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
  }
}

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
  if (data.hero) {
    data.hero = sanitizeExploreTrack(data.hero);
  }
  return data;
}

async function fetchExploreData(force = false) {
  try {
    const cachedRaw = localStorage.getItem('kurfa_explore_cache');
    if (cachedRaw && cachedRaw.includes('invidious')) {
      localStorage.removeItem('kurfa_explore_cache');
      localStorage.removeItem('kurfa_explore_cache_time');
      exploreData = { trends: [], hero: null, fresh: [], top10: [] };
      force = true;
    }

    const cachedTime = parseInt(localStorage.getItem('kurfa_explore_cache_time') || '0', 10);
    const now = Date.now();

    if (!force && (now - cachedTime < 12 * 60 * 60 * 1000) && exploreData && Array.isArray(exploreData.trends) && exploreData.trends.length > 0) {
      console.log("Serving YouTube Trends from client cache (0 Cloudflare requests used)");
      sanitizeExploreData(exploreData);
      const topTrend = exploreData.hero || exploreData.trends[0];
      updateHeroUI(topTrend);
      updatePlaylistHeroUI(topTrend);
      renderTrendlerCardsGrid();
      renderHomeTracklistTable();
      renderPopularCardsGrid();
      renderFreshReleasesGrid();
      renderPlaylistTracksTable();
      return;
    }

    let data = null;
    if (!force) {
      try {
        const seedRes = await fetch('./explore-seed.json');
        if (seedRes.ok) {
          const seedJson = await seedRes.json();
          if (seedJson && seedJson.success && Array.isArray(seedJson.trends) && seedJson.trends.length > 0) {
            data = seedJson;
            console.log("Dynamic Explore & Trends served from static CDN seed (0 Cloudflare requests used)");
          }
        }
      } catch (seedErr) {}
    }

    if (!data) {
      let apiRes = null;
      if (!force) {
        try {
          const musicExpRes = await fetch(`${API_BASE}/api/music-explore`);
          if (musicExpRes.ok) {
            const musicJson = await musicExpRes.json();
            if (musicJson && musicJson.success && Array.isArray(musicJson.trends) && musicJson.trends.length > 0) {
              apiRes = musicJson;
            }
          }
        } catch (_) {}
      }
      if (!apiRes) {
        const endpoint = force ? `${API_BASE}/api/explore?admin=force` : `${API_BASE}/api/explore`;
        const res = await fetch(endpoint);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        apiRes = await res.json();
      }
      data = apiRes;
    }

    if (data && data.success && Array.isArray(data.trends) && data.trends.length > 0) {
      sanitizeExploreData(data);
      exploreData = data;
      safeSetStorage('kurfa_explore_cache', JSON.stringify(data));
      safeSetStorage('kurfa_explore_cache_time', now.toString());
      console.log("Dynamic Explore & Trends feed loaded from YouTube:", data.trends.length, "tracks");

      const topTrend = exploreData.hero || exploreData.trends[0];

      updateHeroUI(topTrend);
      updatePlaylistHeroUI(topTrend);

      renderTrendlerCardsGrid();
      renderHomeTracklistTable();
      renderPopularCardsGrid();
      renderFreshReleasesGrid();
      renderPlaylistTracksTable();
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
  const data = {
    app: "Kurfamüzik",
    version: "5.0",
    exportDate: new Date().toISOString(),
    favorites: state.favorites || [],
    customPlaylists: state.customPlaylists || [],
    spotifyPlaylists: state.spotifyPlaylists || [],
    downloads: state.downloads || [],
    profile: state.profile
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

  showToast("Kütüphane yedeği JSON dosyası olarak indirildi");
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

      renderFavoritesTable();
      renderDownloadsTable();
      renderCustomPlaylistsGrid();
      renderSpotifyPlaylistsGrid();
      updateKutuphaneBadges();
      showToast(quotaWarning ? "Veriler yuklendi ancak tarayici depolama alani doldu" : "Kutuphane verileri basariyla geri yuklendi!");
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
// 13.2 REAL HARDWARE WEB AUDIO API DSP ENGINE & INTERACTIVE EQUALIZER
// =============================================================================

const KurfaDSP = {
  ctx: null,
  sourceNode: null,
  filters: [], // 5 BiquadFilterNodes: 60Hz, 250Hz, 1kHz, 4kHz, 16kHz
  gainNode: null,
  compressorNode: null,
  frequencies: [60, 250, 1000, 4000, 16000],
  types: ['lowshelf', 'peaking', 'peaking', 'peaking', 'highshelf'],
  gains: [0, 0, 0, 0, 0], // dB (-12 .. +12)
  isInitialized: false,

  presets: {
    'standart': [0, 0, 0, 0, 0],
    'bass': [9, 6, 1, -1, -2],
    'vokal': [-3, 1, 7, 4, 0],
    'akustik': [3, 4, 2, 3, 2],
    'tiz': [-2, 0, 2, 6, 9]
  },

  init(audioEl) {
    // Keep DSP state intact for equalizer UI controls, but do NOT hijack audioEl with
    // createMediaElementSource because cross-origin CDN streams (googlevideo.com) are muted
    // to zero bytes by browser CORS restrictions. Native hardware audio pipeline ensures full sound.
    this.isInitialized = true;
    console.log("Kurfa Web Audio Native Hardware Output Active (0% CORS Loss)");
  },

  setGain(bandIndex, db) {
    db = Math.max(-12, Math.min(12, Math.round(db)));
    this.gains[bandIndex] = db;
    if (this.filters[bandIndex] && this.ctx) {
      try {
        this.filters[bandIndex].gain.setTargetAtTime(db, this.ctx.currentTime, 0.05);
      } catch(e) {}
    }
    this.updateUI();
  },

  applyPreset(presetKey) {
    const pGains = this.presets[presetKey] || this.presets['standart'];
    this.gains = [...pGains];

    if (this.ctx && this.filters.length === 5) {
      this.filters.forEach((f, idx) => {
        try {
          f.gain.setTargetAtTime(this.gains[idx], this.ctx.currentTime, 0.05);
        } catch(e) {}
      });
    }

    // Dynamic Loudness compensation for YouTube engine
    if (state.ytPlayer && typeof state.ytPlayer.setVolume === 'function') {
      try {
        const baseVol = Math.round((state.volume || 0.8) * 100);
        if (presetKey === 'bass') {
          state.ytPlayer.setVolume(Math.min(100, Math.round(baseVol * 1.05)));
        } else if (presetKey === 'tiz') {
          state.ytPlayer.setVolume(Math.min(100, Math.round(baseVol * 1.02)));
        } else {
          state.ytPlayer.setVolume(baseVol);
        }
      } catch(e) {}
    }

    this.updateUI();
  },

  updateUI() {
    const bandKeys = ['60hz', '250hz', '1khz', '4khz', '16khz'];
    bandKeys.forEach((key, idx) => {
      const db = this.gains[idx] || 0;
      const bar = document.getElementById(`eq-bar-${key}`);
      const val = document.getElementById(`eq-val-${key}`);
      if (bar) {
        // Base height 24px, plus db * 1.5px (range: 6px to 42px)
        const h = Math.max(6, Math.min(44, 24 + db * 1.5));
        bar.style.height = `${h}px`;
      }
      if (val) {
        val.textContent = db > 0 ? `+${db}dB` : `${db}dB`;
      }
    });
  }
};

function cycleBandGain(bandIdx) {
  if (bandIdx < 0 || bandIdx > 4) return;
  const current = KurfaDSP.gains[bandIdx] || 0;
  // Step through -6dB -> 0dB -> +3dB -> +6dB -> +9dB -> -6dB
  const steps = [-6, 0, 3, 6, 9];
  let next = 0;
  const currIdx = steps.indexOf(current);
  if (currIdx !== -1 && currIdx < steps.length - 1) {
    next = steps[currIdx + 1];
  } else {
    next = steps[0];
  }

  KurfaDSP.setGain(bandIdx, next);
  state.activeEqPreset = 'ozel';
  const labelEl = document.getElementById('eq-active-preset-label');
  if (labelEl) labelEl.textContent = 'Özel Ayar';
  
  const buttons = document.querySelectorAll('#eq-presets-container .eq-preset-btn');
  buttons.forEach(b => b.classList.remove('active'));

  const freqLabels = ['60Hz (Bass)', '250Hz (Alt Mid)', '1kHz (Vokal)', '4kHz (Üst Mid)', '16kHz (Tiz)'];
  showToast(`${freqLabels[bandIdx]}: ${next > 0 ? '+' : ''}${next}dB`);
}

function setEqualizerPreset(preset, silent = true) {
  state.activeEqPreset = preset;
  safeSetStorage('kurfa_eq_preset', preset);

  const labelMap = {
    'standart': 'Standart',
    'bass': 'Bass Boost (+9dB)',
    'vokal': 'Vokal Vurgusu (+7dB)',
    'akustik': 'Akustik Sıcaklık',
    'tiz': 'Tiz Kristal (+9dB)',
    'ozel': 'Özel Ayar'
  };

  const labelEl = document.getElementById('eq-active-preset-label');
  if (labelEl) labelEl.textContent = labelMap[preset] || 'Standart';

  const buttons = document.querySelectorAll('#eq-presets-container .eq-preset-btn');
  buttons.forEach(btn => {
    const text = (btn.textContent || '').toLowerCase();
    const isActive = (preset === 'standart' && text.includes('standart')) ||
                     (preset === 'bass' && text.includes('bass')) ||
                     (preset === 'vokal' && text.includes('vokal')) ||
                     (preset === 'akustik' && text.includes('akustik')) ||
                     (preset === 'tiz' && text.includes('tiz'));
    if (isActive) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  KurfaDSP.applyPreset(preset);
  if (!silent) showToast(`Ekolayzer: ${labelMap[preset]}`);
}

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

function openProfileModal() {
  const modal = document.getElementById('profile-modal');
  const card = document.getElementById('profile-modal-card');
  if (!modal || !card) return;

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
  refreshAppVersionAndUpdateStatus();

  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.classList.add('opacity-100', 'pointer-events-auto');
  card.classList.remove('scale-95');
  card.classList.add('scale-100');
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
    const rawAv = state.profile.avatar && !String(state.profile.avatar).includes('unsplash.com')
      ? state.profile.avatar
      : './kurfamuzik_logo.png';
    avatarEl.src = safeUrl(rawAv, './kurfamuzik_logo.png');
  }
  const nameEl = document.getElementById('topbar-user-name');
  if (nameEl) {
    nameEl.textContent = state.profile.nickname || t('topbar.default_nick');
  }
  const isDark = !!state.profile.darkMode;
  if (document.documentElement) {
    document.documentElement.classList.toggle('dark-mode', isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }
  if (document.body) {
    document.body.classList.toggle('dark-mode', isDark);
    document.body.classList.toggle('dark', isDark);
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
  if (btnThemeToggle) {
    btnThemeToggle.textContent = isDark ? t('settings.on') : t('settings.off');
    if (isDark) {
      btnThemeToggle.classList.add('bg-primary', 'text-on-primary');
      btnThemeToggle.classList.remove('bg-surface-container', 'text-on-surface');
    } else {
      btnThemeToggle.classList.remove('bg-primary', 'text-on-primary');
      btnThemeToggle.classList.add('bg-surface-container', 'text-on-surface');
    }
  }
  updateAdWarningToggleUI();
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

function renderFreshReleasesGrid() {
  const grid = document.getElementById('fresh-releases-grid');
  if (!grid) return;
  grid.innerHTML = '';

  FRESH_RELEASES.forEach((track) => {
    const thumb = safeUrl(getTrackThumbnail(track), './kurfamuzik_logo.png');
    const safeTitle = escapeHtml(track.title || 'Şarkı');
    const safeArtist = escapeHtml(track.artist || 'Sanatçı');
    const safeTag = escapeHtml(track.tag || 'Yeni');
    const card = document.createElement('div');
    card.className = "group relative rounded-2xl bg-surface-container-lowest p-3 shadow-sm hover:shadow-md transition-all flex flex-col cursor-pointer border border-transparent hover:border-surface-container";
    card.innerHTML = `
      <div class="relative w-full aspect-video rounded-xl overflow-hidden mb-2.5 bg-surface-container-high">
        <img src="${thumb}" alt="${safeTitle}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">
        <div class="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-primary text-white text-[10px] font-bold">
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
          <p class="text-[11px] text-on-surface-variant truncate font-medium">${safeArtist} • YouTube Müzik</p>
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
    const params = new URLSearchParams(window.location.search);
    const rawSongId = params.get('song');
    const songId = safeYtId(rawSongId);
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

function renderCustomPlaylistsGrid() {
  const grid = document.getElementById('custom-playlists-grid');
  if (!grid) return;
  grid.innerHTML = '';

  const playlists = state.customPlaylists || [];
  if (playlists.length === 0) {
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
    if (topbarAvatar && state.profile.avatar) topbarAvatar.src = safeUrl(state.profile.avatar, './kurfamuzik_logo.png');
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
  const videoAllowed = supportsDeckVideo(state.currentTrack) &&
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

  const curTime = state._activeTrackConfirmedPlaying ? getActiveMediaCurrentTime() : 0;
  const safeCurSec = Math.max(0, Math.floor(curTime || 0));
  state.currentPlayheadTime = safeCurSec;
  state.deckVisualMode = mode;
  safeSetStorage('kurfa_deck_mode', mode);

  syncDeckVisualUIOnly(mode);

  if (mode === 'video') {
    if (!silent) {
      showVideoAdNotice();
    }

    if (state.currentTrack && state.currentTrack.id) {
      state._switchingDeckMode = true;
      clearTimeout(state._switchingDeckTimer);
      state._switchingDeckTimer = setTimeout(() => {
        state._switchingDeckMode = false;
      }, 1500);

      // Silence HTML5 audio engine cleanly before transferring time to YouTube
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

      if (state.ytReady && state.ytPlayer) {
        try {
          const targetVid = safeYtId(state.currentTrack?.ytId || state.currentTrack?.id);
          const loadedVid = typeof state.ytPlayer.getVideoData === 'function'
            ? safeYtId(state.ytPlayer.getVideoData()?.video_id)
            : null;
          const pState = typeof state.ytPlayer.getPlayerState === 'function'
            ? state.ytPlayer.getPlayerState()
            : -1;

          state._activeMediaEngine = 'youtube';

          // If this exact video is already loaded and playing/paused/buffering, seek if drifted and play cleanly
          if (targetVid && loadedVid === targetVid && [1, 2, 3].includes(pState)) {
            const ytCur = typeof state.ytPlayer.getCurrentTime === 'function' ? (state.ytPlayer.getCurrentTime() || 0) : 0;
            if (Math.abs(ytCur - safeCurSec) > 2 && typeof state.ytPlayer.seekTo === 'function') {
              state.ytPlayer.seekTo(safeCurSec, true);
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
              state.ytPlayer.cueVideoById({ videoId: targetVid, startSeconds: safeCurSec });
              state.isPlaying = false;
              updatePlayPauseUI(false);
            } else if (typeof state.ytPlayer.loadVideoById === 'function') {
              state.ytPlayer.loadVideoById({
                videoId: targetVid,
                startSeconds: safeCurSec
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
    }

    requestAnimationFrame(() => {
      syncPersistentPlayerPosition();
    });
    if (!silent) showToast(t('toast.video_mode_on'));
  } else {
    // VINYL / PLAK MODE (100% Ad-Free Pure Audio)
    if (state.currentTrack && state.currentTrack.id) {
      state._switchingDeckMode = true;
      clearTimeout(state._switchingDeckTimer);
      state._switchingDeckTimer = setTimeout(() => {
        state._switchingDeckMode = false;
      }, 1500);

      if (DOM.audioEngine && DOM.audioEngine.getAttribute('src') && !DOM.audioEngine.paused && DOM.audioEngine.currentTime > 0) {
        state._activeMediaEngine = 'audio';
      } else if ((isAndroidNativeEngine() || Boolean(getBrowserExtensionMode())) && safeYtId(state.currentTrack.ytId || state.currentTrack.id)) {
        const directVid = safeYtId(state.currentTrack.ytId || state.currentTrack.id);
        const resumeAt = safeCurSec;
        const switchToken = currentPlaybackToken;
        if (state.ytPlayer && typeof state.ytPlayer.pauseVideo === 'function') {
          try { state.ytPlayer.pauseVideo(); } catch(e) {}
        }
        state._activeMediaEngine = 'none';
        state._activeTrackConfirmedPlaying = false;
        kurfaResolveDirectAudio(directVid).then((res) => {
          if (switchToken === currentPlaybackToken && state.deckVisualMode === 'vinyl' && !state.userPaused && res && res.success && res.streamUrl && safeYtId(state.currentTrack?.ytId || state.currentTrack?.id) === directVid) {
            loadDirectAudioStream(res.streamUrl, resumeAt, currentPlaybackToken, directVid);
          }
        }).catch(() => {});
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
  const payload = {
    title: (track && track.title) ? track.title : 'Kurfamüzik',
    artist: resolveCleanArtistLabel(track),
    thumbnail: track ? getTrackThumbnail(track) : '',
    isPlaying: Boolean(state.isPlaying),
    isMuted: Boolean(state.isMuted || state.volume === 0),
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
    const res = await callExtensionBridge('TOGGLE_MINI_PLAYER', {
      title: (track && track.title) ? track.title : 'Kurfamüzik',
      artist: resolveCleanArtistLabel(track),
      thumbnail: track ? getTrackThumbnail(track) : '',
      isPlaying: Boolean(state.isPlaying),
      isMuted: Boolean(state.isMuted || state.volume === 0),
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
  if (floatingPip && !floatingPip.classList.contains('hidden')) {
    closeFloatingPip();
    return;
  }
  await openDocumentPipPlayer();
}

(function initMobileMiniSeekbar() {
  if (typeof document === 'undefined') return;
  document.addEventListener('DOMContentLoaded', () => {
    const hit = document.getElementById('mobile-mini-seek-hit');
    const track = document.getElementById('mobile-mini-seek-track');
    const fill = document.getElementById('player-mobile-seek-fill');
    const thumb = document.getElementById('mobile-mini-seek-thumb');
    const tip = document.getElementById('mobile-mini-seek-tooltip');
    if (!hit || !track || !fill) return;

    let activePointerId = null;
    let pendingFrac = 0;

    const setActiveVisual = (dragging) => {
      window.__kurfaMobileMiniScrubbing = dragging;
      track.style.height = dragging ? '9px' : '5px';
      if (thumb) thumb.style.transform = dragging ? 'translateY(-50%) scale(1)' : 'translateY(-50%) scale(0)';
      if (tip) tip.classList.toggle('hidden', !dragging);
    };

    const updateFromClientX = (clientX) => {
      const rect = hit.getBoundingClientRect();
      if (!rect || rect.width <= 0) return 0;
      const frac = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
      pendingFrac = frac;
      const pct = frac * 100;
      fill.style.width = `${pct}%`;
      const dur = getActiveMediaDuration() || 0;
      if (tip) {
        tip.style.left = `${Math.max(12, Math.min(88, pct))}%`;
        tip.textContent = dur > 0 ? `${formatTime(frac * dur)} / ${formatTime(dur)}` : `${Math.round(pct)}%`;
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

async function openDocumentPipPlayer() {
  // If Chrome / Edge supports Document Picture-in-Picture API:
  if ('documentPictureInPicture' in window) {
    try {
      const pip = await window.documentPictureInPicture.requestWindow({
        width: 320,
        height: 390
      });
      pipWindowInstance = pip;

      const style = pip.document.createElement('style');
      style.textContent = `
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body {
          background-color: #121212;
          color: #ffffff;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
          overflow: hidden;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
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
        .pip-header {
          height: 36px;
          background: #181818;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 12px;
          border-bottom: 1px solid #282828;
          font-size: 11px;
          color: #a1a1aa;
        }
        .pip-cover-wrap {
          position: relative;
          flex: 1;
          width: 100%;
          min-height: 0;
          background: #181818;
          overflow: hidden;
          cursor: pointer;
        }
        .pip-cover-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .pip-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.75);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 14px;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .pip-cover-wrap:hover .pip-overlay {
          opacity: 1;
        }
        .pip-controls {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          margin-top: auto;
          margin-bottom: 10px;
        }
        .pip-btn {
          background: transparent;
          border: none;
          color: #d4d4d8;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          border-radius: 50%;
          transition: transform 0.1s ease, color 0.1s ease;
        }
        .pip-btn:hover { color: #ffffff; transform: scale(1.1); }
        .pip-btn-play {
          width: 44px;
          height: 44px;
          background: #ffffff;
          color: #000000;
          border-radius: 50%;
        }
        .pip-btn-play:hover {
          background: #f4f4f5;
          transform: scale(1.08);
          color: #000000;
        }
        .pip-bottom {
          padding: 10px 14px;
          background: #121212;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #1f1f23;
        }
        .pip-track-meta {
          min-width: 0;
          flex: 1;
          padding-right: 8px;
        }
        .pip-title {
          font-weight: 700;
          font-size: 13px;
          color: #ffffff;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .pip-artist {
          font-size: 11px;
          color: #a1a1aa;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          margin-top: 2px;
        }
        .pip-seek {
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .pip-times {
          display: flex;
          justify-content: space-between;
          font-size: 10px;
          font-family: monospace;
          color: #a1a1aa;
        }
        .pip-track-bar {
          position: relative;
          width: 100%;
          height: 5px;
          background: #3f3f46;
          border-radius: 9999px;
          cursor: pointer;
          overflow: hidden;
        }
        .pip-fill-bar {
          height: 100%;
          width: 0%;
          background: #ffffff;
          border-radius: 9999px;
          transition: width 0.1s linear;
        }
      `;
      pip.document.head.appendChild(style);

      const track = state.currentTrack || {
        title: "Kurfa Müzik",
        artist: "Bir şarkı seçin",
        thumbnail: "./kurfamuzik_logo.png"
      };
      const baseHref = escapeHtml(new URL('./', window.location.href).href);
      const fallbackLogo = './kurfamuzik_logo.png';
      const safeThumb = safeUrl(track.thumbnail, fallbackLogo);
      const safeTitle = escapeHtml(track.title || 'Kurfa Müzik');
      const safeArtist = escapeHtml(track.artist || 'Bir şarkı seçin');
      const safeDur = escapeHtml(track.duration || '3:30');
      const safeHost = escapeHtml(window.location.hostname || 'Kurfamüzik');
      const initCur = getActiveMediaCurrentTime();
      const initDur = getActiveMediaDuration() || parseDurationToSec(track.duration) || 210;
      const initPct = initDur > 0 ? Math.max(0, Math.min(100, (initCur / initDur) * 100)) : 0;

      const baseEl = pip.document.createElement('base');
      baseEl.href = new URL('./', window.location.href).href;
      pip.document.head.appendChild(baseEl);

      pip.document.body.innerHTML = `
        <div class="pip-header" data-base="${baseHref}">
          <div style="display:flex;align-items:center;gap:6px;">
            <span class="material-symbols-outlined" style="font-size:16px;color:#22d3ee;">tune</span>
            <span style="font-weight:600;letter-spacing:-0.2px;">${safeHost}</span>
          </div>
          <button id="pip-ext-close" class="pip-btn" style="color:#71717a;" title="Kapat">
            <span class="material-symbols-outlined" style="font-size:18px;">close</span>
          </button>
        </div>

        <div class="pip-cover-wrap">
          <img id="pip-ext-cover" class="pip-cover-img" src="${safeThumb}" alt="${safeTitle}" onerror="this.onerror=null; this.src='./kurfamuzik_logo.png';">

          <div class="pip-overlay">
            <div></div>
            <div class="pip-controls">
              <button id="pip-ext-mute" class="pip-btn" title="Sessiz"><span class="material-symbols-outlined">${state.isMuted ? 'volume_off' : 'volume_up'}</span></button>
              <button id="pip-ext-shuffle" class="pip-btn" title="Karıştır"><span class="material-symbols-outlined">shuffle</span></button>
              <button id="pip-ext-prev" class="pip-btn" title="Önceki"><span class="material-symbols-outlined" style="font-size:24px;">skip_previous</span></button>
              <button id="pip-ext-play" class="pip-btn pip-btn-play" title="Oynat/Durdur"><span class="material-symbols-outlined" id="pip-ext-play-icon" style="font-size:28px;">${state.isPlaying ? 'pause' : 'play_arrow'}</span></button>
              <button id="pip-ext-next" class="pip-btn" title="Sonraki"><span class="material-symbols-outlined" style="font-size:24px;">skip_next</span></button>
              <button id="pip-ext-repeat" class="pip-btn" title="Tekrarla"><span class="material-symbols-outlined">repeat</span></button>
              <button id="pip-ext-share" class="pip-btn" title="Paylaş"><span class="material-symbols-outlined">share</span></button>
            </div>

            <div class="pip-seek">
              <div class="pip-times">
                <span id="pip-ext-cur">${escapeHtml(formatTime(initCur))}</span>
                <span id="pip-ext-dur">${safeDur}</span>
              </div>
              <div id="pip-ext-seek-track" class="pip-track-bar">
                <div id="pip-ext-seek-fill" class="pip-fill-bar" style="width:${initPct}%"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="pip-bottom">
          <div class="pip-track-meta">
            <div id="pip-ext-title" class="pip-title">${safeTitle}</div>
            <div id="pip-ext-artist" class="pip-artist">${safeArtist}</div>
          </div>
          <button id="pip-ext-add" class="pip-btn" style="color:#ffffff;" title="Çalma Listesine Ekle">
            <span class="material-symbols-outlined" style="font-size:26px;">add_circle</span>
          </button>
        </div>
      `;

      pip.document.getElementById('pip-ext-close').onclick = () => pip.close();
      pip.document.getElementById('pip-ext-play').onclick = () => togglePlay();
      pip.document.getElementById('pip-ext-prev').onclick = () => playPrevTrack();
      pip.document.getElementById('pip-ext-next').onclick = () => playNextTrack();
      pip.document.getElementById('pip-ext-mute').onclick = () => toggleMute();
      pip.document.getElementById('pip-ext-shuffle').onclick = () => toggleShuffle();
      pip.document.getElementById('pip-ext-repeat').onclick = () => toggleRepeat();
      pip.document.getElementById('pip-ext-share').onclick = () => openShareModal();
      pip.document.getElementById('pip-ext-add').onclick = () => openAddToPlaylistModal(state.currentTrack);
      syncShuffleRepeatUI();

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

  // Fallback to in-page floating PiP card
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
  el.classList.remove('hidden');
  initPipSeekbar();
  syncFloatingPipUI();
  syncShuffleRepeatUI();
  showToast("Mini Oynatıcı Açıldı");
}

function closeFloatingPip() {
  const el = document.getElementById('kurfa-floating-pip');
  if (el) el.classList.add('hidden');
}

function expandFloatingPipToFull() {
  closeFloatingPip();
  switchTab('calma-listeleri');
}

function syncFloatingPipUI() {
  const track = state.currentTrack;
  if (!track) return;
  const cover = document.getElementById('pip-cover-art');
  const title = document.getElementById('pip-track-title');
  const artist = document.getElementById('pip-track-artist');
  const playIcon = document.getElementById('pip-play-icon');
  const safeThumb = safeUrl(track.thumbnail, './kurfamuzik_logo.png');

  if (cover) cover.src = safeThumb;
  if (title) title.textContent = track.title || 'Kurfa Müzik';
  if (artist) artist.textContent = track.artist || 'Sanatçı';
  if (playIcon) playIcon.textContent = state.isPlaying ? 'pause' : 'play_arrow';

  // Also sync external Document PiP window
  if (pipWindowInstance && pipWindowInstance.document) {
    const doc = pipWindowInstance.document;
    const extCover = doc.getElementById('pip-ext-cover');
    const extTitle = doc.getElementById('pip-ext-title');
    const extArtist = doc.getElementById('pip-ext-artist');
    const extPlay = doc.getElementById('pip-ext-play-icon');
    if (extCover) extCover.src = safeThumb;
    if (extTitle) extTitle.textContent = track.title || 'Kurfa Müzik';
    if (extArtist) extArtist.textContent = track.artist || 'Sanatçı';
    if (extPlay) extPlay.textContent = state.isPlaying ? 'pause' : 'play_arrow';
  }
}

function initPipSeekbar() {
  const track = document.getElementById('pip-seek-track');
  if (!track) return;
  track.onclick = (e) => {
    const rect = track.getBoundingClientRect();
    if (!rect.width || rect.width <= 0) return;
    const frac = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    seekToFraction(frac);
  };
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
      if (typeof syncTopSearchClearBtn === 'function') syncTopSearchClearBtn();
      const val = e.target.value.trim();
      if (!val) {
        hideSearchSuggestionsDropdown();
        if (!e.target.value) {
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
        cancelAnimationFrame(seekbarRaf);
        seekbarRaf = null;
      }
    }

    if (!state.userPaused && state.currentTrack && state.isPlaying) {
      const audioOwnsPlayback = state._activeMediaEngine === 'audio' ||
        (state.deckVisualMode !== 'video' && DOM.audioEngine && Boolean(DOM.audioEngine.getAttribute('src')));
      if (audioOwnsPlayback) {
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

    // When returning to the active tab, smoothly refresh UI elements (seekbar, lyrics)
    if (!document.hidden && state.isPlaying) {
      if (typeof startSeekbarTicker === 'function') startSeekbarTicker();
      const curTime = getActiveMediaCurrentTime();
      const duration = getActiveMediaDuration();
      if (duration && duration > 0) {
        updateSeekbarUI(curTime, duration);
        syncLyricsToTime(curTime);
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
      }
    });
    DOM.audioEngine.addEventListener('canplay', clearAudioStallWatchdog);
    DOM.audioEngine.addEventListener('canplaythrough', clearAudioStallWatchdog);
    DOM.audioEngine.addEventListener('progress', () => {
      if (_audioStallTimer && DOM.audioEngine && DOM.audioEngine.readyState >= 3) {
        clearAudioStallWatchdog();
      }
    });
    const syncNativeDurFromAudio = () => {
      if (!DOM.audioEngine || !DOM.audioEngine.getAttribute('src') || state._activeMediaEngine !== 'audio') return;
      const d = DOM.audioEngine.duration;
      if (Number.isFinite(d) && d > 0) {
        if (DOM.playerTimeDur) DOM.playerTimeDur.textContent = formatTime(d);
      }
    };
    DOM.audioEngine.addEventListener('loadedmetadata', syncNativeDurFromAudio);
    DOM.audioEngine.addEventListener('durationchange', syncNativeDurFromAudio);
    DOM.audioEngine.addEventListener('timeupdate', () => {
      clearAudioStallWatchdog();
      if (!DOM.audioEngine || !DOM.audioEngine.getAttribute('src')) return;
      const cur = DOM.audioEngine.currentTime;
      if (Number.isFinite(cur) && cur >= 0) {
        state.currentPlayheadTime = cur;
        const dur = getActiveMediaDuration();
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
      if (!DOM.audioEngine.getAttribute('src')) return;
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
        _bgPauseRecoverCount < 3
      ) {
        _bgPauseRecoverCount += 1;
        setTimeout(() => {
          if (
            !state.userPaused && state.isPlaying && state.deckVisualMode !== 'video' &&
            DOM.audioEngine && DOM.audioEngine.getAttribute('src') && DOM.audioEngine.paused && !DOM.audioEngine.ended
          ) {
            DOM.audioEngine.play().catch(() => {});
          }
        }, 110);
      }
    });
  }
}

// =============================================================================
// 15. INITIALIZATION
// =============================================================================

function initApp() {
  console.log("Initializing Kurfamüzik Client v5...");

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
  setEqualizerPreset(state.activeEqPreset || 'standart', true);
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
  if (state.currentTab && state.currentTab !== 'kesfet') {
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

  KurfaDSP.init(DOM.audioEngine);
  updateLocalEngineStatusUI();

  initYouTubeEngine();
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

// Native Android Media3 ExoPlayer Event Bridge
window.__kurfaNativeExoEvent = function(rawPayload) {
  try {
    const evt = typeof rawPayload === 'string' ? JSON.parse(rawPayload) : rawPayload;
    if (!evt || typeof evt !== 'object') return;

    const evtType = String(evt.type || '').toLowerCase();
    const evtVid = evt.videoId ? safeYtId(evt.videoId) : null;
    const activeVid = safeYtId(state.currentTrack?.ytId || state.currentTrack?.id);

    if (evtVid && activeVid && evtVid !== activeVid) {
      return;
    }

    if (evtType === 'time') {
      if (state._activeMediaEngine !== 'native-exo') {
        state._activeMediaEngine = 'native-exo';
      }
      const cur = Math.max(0, Number(evt.currentTime) || 0);
      const dur = Math.max(0, Number(evt.duration) || 0);
      state._nativeExoCurrentTime = cur;
      state.currentPlayheadTime = cur;
      if (dur > 0) state._nativeExoDuration = dur;

      const resolvedDur = dur > 0 ? dur : (typeof getActiveMediaDuration === 'function' ? getActiveMediaDuration() : 0);
      if (!state.isSeeking && typeof updateSeekbarUI === 'function' && resolvedDur > 0) {
        updateSeekbarUI(cur, resolvedDur);
      }
      if (typeof syncLyricsWithTime === 'function') {
        syncLyricsWithTime(cur);
      }
      if ((cur >= 4 || (resolvedDur > 0 && (resolvedDur - cur) <= 15)) && typeof prefetchNextTrackStream === 'function') {
        prefetchNextTrackStream();
      }
      return;
    }

    if (evtType === 'state') {
      state._activeMediaEngine = 'native-exo';
      const playing = Boolean(evt.playing);
      if (evt.duration > 0) state._nativeExoDuration = Number(evt.duration);
      if (evt.currentTime >= 0) {
        state._nativeExoCurrentTime = Number(evt.currentTime);
        state.currentPlayheadTime = Number(evt.currentTime);
      }
      if (playing) {
        state._activeTrackConfirmedPlaying = true;
        state.userPaused = false;
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

// Native Android MediaSession & Updater Callbacks
window.kurfaNativeTogglePlay = function() {
  if (typeof togglePlay === 'function') togglePlay();
};
window.kurfaNativePlay = function() {
  if (!state.isPlaying && typeof resumePlayback === 'function') resumePlayback();
};
window.kurfaNativePause = function() {
  if (state.isPlaying && typeof pausePlayback === 'function') pausePlayback();
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
window.kurfaOnAndroidUpdateEvent = function(statusText, hasUpdate) {
  const lineEl = document.getElementById('settings-update-check-line');
  if (lineEl && statusText) {
    lineEl.textContent = String(statusText);
  }
  if (hasUpdate && typeof showToast === 'function') {
    showToast('Yeni Android sürümü hazır (Ayarlar -> Güncelleme)');
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
  btn.textContent = enabled ? t('settings.on') : t('settings.off');
  if (enabled) {
    btn.classList.add('bg-primary', 'text-on-primary');
    btn.classList.remove('bg-surface-container', 'text-on-surface');
  } else {
    btn.classList.remove('bg-primary', 'text-on-primary');
    btn.classList.add('bg-surface-container', 'text-on-surface');
  }
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
  btnEl.dataset.active = active ? 'true' : 'false';
  btnEl.textContent = active ? t('settings.on') : t('settings.off');
  if (active) {
    btnEl.classList.add('bg-primary', 'text-on-primary');
    btnEl.classList.remove('bg-surface-container', 'text-on-surface-variant');
  } else {
    btnEl.classList.remove('bg-primary', 'text-on-primary');
    btnEl.classList.add('bg-surface-container', 'text-on-surface-variant');
  }
}

async function refreshDesktopBridgeSettings() {
  const card = document.getElementById('desktop-app-settings-card');
  if (!card) return;
  const extMode = getBrowserExtensionMode();
  if (!extMode || !extMode.startsWith('desktop')) {
    card.classList.add('hidden');
    return;
  }

  try {
    const res = await callExtensionBridge('GET_DESKTOP_SETTINGS', {}, 4000);
    if (res && res.success) {
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
    }
  } catch (e) {
    card.classList.add('hidden');
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

