/*
 * Copyright (c) 2012 Adobe Systems Incorporated. All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE.
 *
 */

/*jslint vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
/*global define */

define({

    "GENERIC_ERROR": "(hata {0})",
    "NOT_FOUND_ERR": "Dosya/dizin bulunamadı.",
    "NOT_READABLE_ERR": "Dosya/dizin okunamadı.",
    "NO_MODIFICATION_ALLOWED_ERR": "Klasörde değişiklik yapılamıyor.",
    "NO_MODIFICATION_ALLOWED_ERR_FILE": "Dosya değişikliği için izniniz yok.",
    "FILE_EXISTS_ERR": "Dosya veya dizin zaten mevcut.",
    "ERROR_LOADING_PROJECT": "Proje yüklenirken hata",
    "OPEN_DIALOG_ERROR": "Dosya açma kutusu gösterilirken bir hata meydana geldi. (hata{0})",
    "REQUEST_NATIVE_FILE_SYSTEM_ERROR": "<span class='dialog-filename'>{0}</span> klasörü yüklenirken hata meydana geldi. (hata {1})",
    "READ_DIRECTORY_ENTRIES_ERROR": "<span class='dialog-filename'>{0}</span>. dizinindeki içerik okunurken bir hata oluştu. (hata{1})",
    "ERROR_OPENING_FILE_TITLE": "Dosya Açma Hatası",
    "ERROR_OPENING_FILE": "<span class='dialog-filename'>{0}</span> dosyasını açmaya çalışırken bir hata oluştu. {1}",
    "ERROR_RELOADING_FILE_TITLE": "Değişiklikler hafızadan okunurken hata oluştu.",
    "ERROR_RELOADING_FILE": "<span class='dialog-filename'>{0}</span> dosyası yenilenirken hata meydana geldi. {1}",
    "ERROR_SAVING_FILE_TITLE": "Dosya Kaydetme Hatası",
    "ERROR_SAVING_FILE": "<span class='dialog-filename'>{0}</span> dosyasını kaydetmeye çalışırken bir hata oluştu. {1}",
    "ERROR_RENAMING_FILE_TITLE": "Dosya Adı Değiştirme Hatası",
    "ERROR_RENAMING_FILE": "<span class='dialog-filename'>{0}</span> dosyasının adını değiştirmeye çalışırken bir hata oluştu. {1}",
    "INVALID_FILENAME_TITLE": "Geçersiz Dosya Adı",
    "INVALID_FILENAME_MESSAGE": "Dosya adlarında sistem tarafından rezerve edilmiş kelimeler kullanılamaz, dosya adları nokta (.) ile bitemez ve şu karakterleri içeremez: <code class='emphasized'>{1}</code>",
    "ERROR_CREATING_FILE_TITLE": "Dosya oluşturma hatası",
    "ERROR_CREATING_FILE": "<span class='dialog-filename'>{1}</span> dosyasını oluşturmaya çalışırken bir hata oluştu. {2}",
    "ERROR_IN_BROWSER_TITLE": "Ups! {APP_NAME} programı şuan tarayıcıda açılmadı.",
    "ERROR_IN_BROWSER": "{APP_NAME} HTML olarak hazırlandı, ancak şuan için masaüstünde çalışabilmekte. Bu nedenle makinanızda bulunan dosyalarda değişiklik için kullanabilirsiniz. {APP_NAME} programını çalıştırabilmek için lütfen <b>github.com/adobe/brackets-shell</b> adresindeki 'application shell'i kullanınız.",
    "ERROR_MAX_FILES_TITLE": "Dosya indeksleme hatası",
    "ERROR_MAX_FILES": "Maksimum sayıda dosya indekslendi. Indekslenen dosyalardaki işlemler düzgün çalışmayabilir.",
    "ERROR_LAUNCHING_BROWSER_TITLE": "Tarayıcı çalıştırılırken hata",
    "ERROR_CANT_FIND_CHROME": "Google Chrome tarayıcısı bulunamadı. Lütfen kurulu olduğundan emin olun.",
    "ERROR_LAUNCHING_BROWSER": "Tarayıcı açılırken hata meydana geldi. (hata {0})",
    "LIVE_DEVELOPMENT_ERROR_TITLE": "Canlı Önizleme Hatası",
    "LIVE_DEVELOPMENT_RELAUNCH_TITLE": "Tarayıcıya bağlanılıyor",
    "LIVE_DEVELOPMENT_ERROR_MESSAGE": "Canlı önizleme özelliğini kullanabilmek için uzaktan hata ayıklayıcı ile Chrome'un tekrardan açılması gerekiyor.<br /><br />Chrome'u uzaktan hata ayıklayıcı ile tekrardan açılmasını ister misiniz?",
    "LIVE_DEV_NEED_HTML_MESSAGE": "Canlı önizlemeyi çalıştırabilmeniz için html dosyası açmanız gerekiyor",
    "LIVE_DEV_NEED_BASEURL_MESSAGE": "Canlı Önizlemeyi server-side dosyalarınız ile açmak istiyorsanız, lütfen bu proje için kullanılabilir bir link belirtiniz.",
    "LIVE_DEVELOPMENT_INFO_TITLE": "Canlı Önizlemeye Hoşgeldiniz!",
    "LIVE_DEVELOPMENT_INFO_MESSAGE": "Canlı önizleme için {APP_NAME} programı tarayıcınıza bağlanıyor ve sizin HTML dosyanızın örnek görüntüsünü tarayıcınızda açıyor. Sonrasında ise değişiklik yaptığınız sayfayı anında tarayıcıda yenileyerek gösteriyor.<br /><br />{APP_NAME} programının bu versiyonunda, Canlı önizleme özelliği sadece <strong>CSS dosyaları</strong> değişikliğine izin veriyor ve sadece <strong>Google Chrome</strong> üzerinde çalışıyor. Yakında HTML ve Javascript değişikliğini de ekleyeceğiz!<br /><br />(Bu mesaj sadece tek sefer gösterilecektir.)",
    "LIVE_DEVELOPMENT_TROUBLESHOOTING": "Detaylı bilgi için lütfen <a href='{0}' title='{0}'>Troubleshooting Live Development connection errors</a> sayfasına bakınız.",
    "LIVE_DEV_STATUS_TIP_NOT_CONNECTED": "Canlı Önizleme",
    "LIVE_DEV_STATUS_TIP_PROGRESS1": "Canlı Önizleme: Bağlanılıyor…",
    "LIVE_DEV_STATUS_TIP_PROGRESS2": "Canlı Önizleme: Başlıyor…",
    "LIVE_DEV_STATUS_TIP_CONNECTED": "Canlı Önizleme'den Çık",
    "LIVE_DEV_STATUS_TIP_OUT_OF_SYNC": "Canlı Önizleme: Kapatmak için tıklayın (Yenilemek için dosyayı kaydedin)",
    "SAVE_CLOSE_TITLE": "Değişiklikleri kaydet",
    "SAVE_CLOSE_MESSAGE": "<span class='dialog-filename'>{0}</span> dosyasında yaptığınız değişiklikleri kaydetmek istiyor musunuz?",
    "SAVE_CLOSE_MULTI_MESSAGE": "Dosyalardaki değişiklikleri kaydetmek istiyor musunuz?",
    "EXT_MODIFIED_TITLE": "Dış değişiklikler",
    "EXT_MODIFIED_MESSAGE": "<span class='dialog-filename'>{0}</span> dosyası {APP_NAME} dışında, disk üzerinde değiştirilmiş ama {APP_NAME} üzerinde de kaydedilmemiş değişiklikler var.<br /><br />Hangi sürümü tutmak istiyorsunuz?",
    "EXT_DELETED_MESSAGE": "<span class='dialog-filename'>{0}</span> dosyası {APP_NAME} dışında, disk üzerinde silinmiş ama {APP_NAME} üzerinde kaydedilmiş değişiklikler var.<br /><br />Değişikliklerinizi kaydetmek istiyor musunuz?",
    "BUTTON_YES": "Evet",
    "BUTTON_NO": "Hayır",
    "OPEN_FILE": "Dosya Aç",
    "CHOOSE_FOLDER": "Klasör Seç",
    "RELEASE_NOTES": "Yeni Versiyon Bilgileri",
    "NO_UPDATE_TITLE": "En son versiyon!",
    "NO_UPDATE_MESSAGE": "{APP_NAME} programının en son versiyonunu kullanıyorsunuz.",
    "FIND_IN_FILES_SCOPED": "<span class='dialog-filename'>{0}</span> dosyası içinde",
    "FIND_IN_FILES_NO_SCOPE": "proje içinde",
    "FIND_IN_FILES_FILE": "dosya",
    "FIND_IN_FILES_FILES": "dosyalar",
    "FIND_IN_FILES_MATCH": "eşleşen",
    "FIND_IN_FILES_MATCHES": "eşleşenler",
    "FIND_IN_FILES_MORE_THAN": "Daha fazla ",
    "FIND_IN_FILES_FILE_PATH": "Dosya: <b>{0}</b>",
    "ERROR_FETCHING_UPDATE_INFO_TITLE": "Versiyon bilgisi alınırken hata",
    "ERROR_FETCHING_UPDATE_INFO_MSG": "Sunucudan yeni versiyon bilgisi alınırken hata oluştu. Lütfen internete bağlı olduğunuzdan emin olun ve tekrar deneyin.",
    "PROJECT_LOADING": "Proje Yükleniyor…",
    "UNTITLED": "Adsız",
    "WORKING_FILES": "Çalışılan Dosyalar",
    "KEYBOARD_CTRL": "Ctrl",
    "KEYBOARD_SHIFT": "Shift",
    "KEYBOARD_SPACE": "Boşluk",
    "STATUSBAR_CURSOR_POSITION": "Satır {0}, Kolon {1}",
    "STATUSBAR_INDENT_TOOLTIP_SPACES": "Girintiyi boşluk karakterleriyle değiştirmek için tıklayın",
    "STATUSBAR_INDENT_TOOLTIP_TABS": "Girintiyi tab karakterleriyle değiştirmek için tıklayın",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_SPACES": "Girintide kullanılacak boşluk sayısını değiştirmek için tıklayın",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_TABS": "Tab karakter genişliğini değiştirmek için tıklayın",
    "STATUSBAR_SPACES": "Boşluk:",
    "STATUSBAR_TAB_SIZE": "Tab Boyutu:",
    "FILE_MENU": "Dosya",
    "CMD_FILE_NEW_UNTITLED": "Yeni",
    "CMD_FILE_NEW": "Yeni dosya",
    "CMD_FILE_NEW_FOLDER": "Yeni klasör",
    "CMD_FILE_OPEN": "Aç…",
    "CMD_ADD_TO_WORKING_SET": "Çalışma Ekranına Ekle",
    "CMD_OPEN_FOLDER": "Klasörü Aç…",
    "CMD_FILE_CLOSE": "Kapat",
    "CMD_FILE_CLOSE_ALL": "Hepsini Kapat",
    "CMD_FILE_SAVE": "Kaydet",
    "CMD_FILE_SAVE_AS": "Farklı Kaydet…",
    "CMD_FILE_SAVE_ALL": "Hepsini Kaydet",
    "CMD_LIVE_FILE_PREVIEW": "Canlı Önizleme",
    "CMD_PROJECT_SETTINGS": "Proje Ayarları…",
    "CMD_FILE_RENAME": "Adını değiştir",
    "CMD_EXTENSION_MANAGER": "Eklenti Yöneticisi…",
    "CMD_FILE_DELETE": "Sil",
    "CMD_QUIT": "Çık",
    "CMD_EXIT": "Çıkış",
    "EDIT_MENU": "Düzenle",
    "CMD_UNDO": "Geri Al",
    "CMD_REDO": "Yinele",
    "CMD_CUT": "Kes",
    "CMD_COPY": "Kopyala",
    "CMD_PASTE": "Yapıştır",
    "CMD_SELECT_ALL": "Tümünü seç",
    "CMD_SELECT_LINE": "Satırı Seç",
    "CMD_SPLIT_SEL_INTO_LINES": "Seçileni Satırlara Böl",
    "CMD_ADD_CUR_TO_NEXT_LINE": "Sonraki Satıra İmleç Ekle",
    "CMD_ADD_CUR_TO_PREV_LINE": "Önceki Satıra İmleç Ekle",
    "CMD_INDENT": "Girinti Ekle",
    "CMD_UNINDENT": "Girintiyi Geri Al",
    "CMD_DUPLICATE": "Çoğalt",
    "CMD_DELETE_LINES": "Satırı Sil",
    "CMD_COMMENT": "Yorum Satırını Aç / Kapat",
    "CMD_BLOCK_COMMENT": "Yorum Bloğunu Aç / Kapat",
    "CMD_LINE_UP": "Satırı Yukarı Taşı",
    "CMD_LINE_DOWN": "Satırı Aşağıya Taşı",
    "CMD_TOGGLE_CLOSE_BRACKETS": "Parantezleri Otomatik Tamamla",
    "CMD_SHOW_CODE_HINTS": "Kod İpuçlarını Göster",
    "FIND_MENU": "Bul",
    "CMD_FIND": "Bul",
    "CMD_FIND_NEXT": "Sonrakini Bul",
    "CMD_FIND_PREVIOUS": "Öncekini Bul",
    "CMD_FIND_ALL_AND_SELECT": "Hepsini Bul ve Seç",
    "CMD_ADD_NEXT_MATCH": "Sonraki Eşleşmeyi Seçime Ekle",
    "CMD_SKIP_CURRENT_MATCH": "Atla ve Sonraki Eşleşmeyi Ekle",
    "CMD_FIND_IN_FILES": "Dosyalarda Bul",
    "CMD_FIND_IN_SUBTREE": "…içinde bul",
    "CMD_REPLACE": "Değiştir",
    "VIEW_MENU": "Göster",
    "CMD_HIDE_SIDEBAR": "Kenar Çubuğunu Gizle",
    "CMD_SHOW_SIDEBAR": "Kenar Çubuğunu Göster",
    "CMD_INCREASE_FONT_SIZE": "Font Boyutunu Büyült",
    "CMD_DECREASE_FONT_SIZE": "Font Boyutunu Küçült",
    "CMD_RESTORE_FONT_SIZE": "Font Boyutunu Sıfırla",
    "CMD_WORKINGSET_SORT_BY_ADDED": "Eklenmeye Göre Sırala",
    "CMD_WORKINGSET_SORT_BY_NAME": "İsme Göre Sırala",
    "CMD_WORKINGSET_SORT_BY_TYPE": "Türüne Göre Sırala",
    "CMD_WORKING_SORT_TOGGLE_AUTO": "Otomatik Sırala",
    "NAVIGATE_MENU": "Git",
    "CMD_QUICK_OPEN": "Hızlı Aç",
    "CMD_GOTO_LINE": "Satıra Git",
    "CMD_GOTO_DEFINITION": "Tanıma Git",
    "CMD_TOGGLE_QUICK_EDIT": "Hızlı düzenleme",
    "CMD_QUICK_EDIT_PREV_MATCH": "Önceki Eşleşme",
    "CMD_GOTO_FIRST_PROBLEM": "İlk Hata veya Uyarıya Git",
    "CMD_QUICK_EDIT_NEXT_MATCH": "Sonraki Eşleşme",
    "CMD_TOGGLE_QUICK_DOCS": "Hızlı belgeler",
    "CMD_CSS_QUICK_EDIT_NEW_RULE": "Yeni Kural",
    "CMD_NEXT_DOC": "Sonraki Dosya",
    "CMD_PREV_DOC": "Önceki Dosya",
    "CMD_SHOW_IN_TREE": "Dosya Listesinde Göster",
    "CMD_SHOW_IN_OS": "Bulunduğu Konumu Aç",
    "HELP_MENU": "Yardım",
    "CMD_HOW_TO_USE_BRACKETS": "{APP_NAME} Nasıl Kullanılır",
    "CMD_SUPPORT": "{APP_NAME} Desteği",
    "CMD_SUGGEST": "Yeni Özellik Öner",
    "CMD_RELEASE_NOTES": "Sürüm Notları",
    "CMD_GET_INVOLVED": "Projeye Dahil Ol",
    "CMD_SHOW_EXTENSIONS_FOLDER": "Eklentiler Klasörünü Göster",
    "CMD_TWITTER": "{TWITTER_NAME} Twitter'da...",
    "CMD_CHECK_FOR_UPDATE": "Yeni Versiyon Kontrol Et",
    "CMD_ABOUT": "{APP_TITLE} Hakkında",
    "CMD_OPEN_PREFERENCES": "Ayarlar Dosyasını Aç",
    "EXPERIMENTAL_BUILD": "Deneysel Sürüm",
    "OK": "Tamam",
    "DONT_SAVE": "Kaydetme",
    "SAVE": "Kaydet",
    "CANCEL": "İptal",
    "RELOAD_FROM_DISK": "Hafızadan Yenile",
    "KEEP_CHANGES_IN_EDITOR": "Değişiklikleri Editörde Tut",
    "CLOSE_DONT_SAVE": "Kapat (Kaydetme)",
    "RELAUNCH_CHROME": "Chrome'u Tekrar Aç",
    "ABOUT": "Hakkında",
    "CLOSE": "Kapat",
    "ABOUT_TEXT_LINE1": "sprint 14 test sürümü",
    "ABOUT_TEXT_LINE3": "Üçüncü parti yazılımlara ilişkin bildirimler, şartlar ve koşullar <a href='{ADOBE_THIRD_PARTY}'>{ADOBE_THIRD_PARTY}</a> adresinde bulunmaktadır ve bu adreste referans olarak dahil edilmiştir",
    "ABOUT_TEXT_LINE4": "Döküman ve kodlar için <a href='https://github.com/adobe/brackets/'>https://github.com/adobe/brackets/</a> adresine bakabilirsiniz.",
    "UPDATE_NOTIFICATION_TOOLTIP": "{APP_NAME} programının yeni versiyonu bulunmakta! Detaylar için tıklayın.",
    "UPDATE_AVAILABLE_TITLE": "Yeni versiyon hazır",
    "UPDATE_MESSAGE": "Hey, {APP_NAME} programının yeni versiyonu hazır. İşte bazı yeni özellikler:",
    "GET_IT_NOW": "Şimdi Yükle!",
    "PROJECT_SETTINGS_TITLE": "{0} için Proje Ayarları",
    "PROJECT_SETTING_BASE_URL": "Ana URL'den Canlı Önizleme",
    "PROJECT_SETTING_BASE_URL_HINT": "(dosya urlsi için boş bırakın)",
    "BASEURL_ERROR_INVALID_PROTOCOL": "{0} protokolü canlı önizlemeyi desteklemiyor.&mdash;lütfen http: or https: kullanın.",
    "BASEURL_ERROR_SEARCH_DISALLOWED": "Ana URL &quot;{0}&quot; gibi arama karakterleri bulunduramaz.",
    "BASEURL_ERROR_HASH_DISALLOWED": "Ana URL &quot;{0}&quot; gibi karakterler bulunduramaz.",
    "BASEURL_ERROR_INVALID_CHAR": "'{0}' gibi özel karakterler %-kodlanması gerekiyor.",
    "BASEURL_ERROR_UNKNOWN_ERROR": "Ana URL'yi işlerken bilinmeyen hata",
    "EXTENSION_MANAGER_TITLE": "Eklenti Yöneticisi",
    "DEBUG_MENU": "Ayıkla",
    "CMD_SHOW_DEV_TOOLS": "Geliştirici Araçlarını Göster",
    "CMD_RELOAD_WITHOUT_USER_EXTS": "Eklentiler Olmadan Yeniden Yükle",
    "CMD_REFRESH_WINDOW": "{APP_NAME} Ekranını Yenile",
    "CMD_NEW_BRACKETS_WINDOW": "Yeni {APP_NAME} Ekranı",
    "CMD_SWITCH_LANGUAGE": "Dili Değiştir",
    "CMD_RUN_UNIT_TESTS": "Testleri Çalıştır",
    "CMD_SHOW_PERF_DATA": "Performans Bilgisini Göster",
    "CMD_ENABLE_NODE_DEBUGGER": "Node Hata Ayıklayıcısını Etkinleştir",
    "CMD_LOG_NODE_STATE": "Node Durumunu Konsola Yaz",
    "CMD_RESTART_NODE": "Node'u Yeniden Başlat",
    "LANGUAGE_TITLE": "Dili değiştir",
    "LANGUAGE_MESSAGE": "Lütfen aşağıdaki dillerden istediğiniz dili seçin:",
    "LANGUAGE_SUBMIT": "{APP_NAME} Yenile",
    "LANGUAGE_CANCEL": "İptal",
    "CMD_JUMPTO_DEFINITION": "Tanıma git",
    "CMD_SHOW_PARAMETER_HINT": "Parametre ipucunu göster",
    "NO_ARGUMENTS": "<paremetre yok>",
    "EXCEEDS_MAX_FILE_SIZE": "{0} MB'den büyük dosyalar {APP_NAME} ile açılamaz.",
    "FILE": "dosya",
    "FILE_TITLE": "Dosya",
    "DIRECTORY": "dizin",
    "DIRECTORY_TITLE": "Dizin",
    "DIRECTORY_NAMES_LEDE": "Dizin adları",
    "FILENAMES_LEDE": "Dosya adları",
    "FILENAME": "Dosya adı",
    "DIRECTORY_NAME": "Dizin Adı",
    "ERROR_OPENING_FILES": "Şu dosyaları açmaya çalışırken bir hata oluştu:",
    "ERROR_RENAMING_DIRECTORY_TITLE": "Dizin adını değiştirme hatası",
    "ERROR_RENAMING_DIRECTORY": "<span class='dialog-filename'>{0}</span> klasörünün adını değiştirmeye çalışırken bir hata oluştu. {1}",
    "ERROR_DELETING_FILE_TITLE": "Dosya silme hatası",
    "ERROR_DELETING_DIRECTORY_TITLE": "Dizin Silme Hatası",
    "ERROR_DELETING_FILE": "<span class='dialog-filename'>{0}</span> dosyasını silmeye çalışırken bir hata oluştu. {1}",
    "ERROR_DELETING_DIRECTORY": "<span class='dialog-filename'>{0}</span> klasörünü silmeye çalışırken bir hata oluştu. {1}",
    "INVALID_DIRNAME_TITLE": "Geçersiz Dizin Adı",
    "INVALID_DIRNAME_MESSAGE": "Klasör adlarında sistem tarafından rezerve edilmiş kelimeler kullanılamaz, klasör adları nokta (.) ile bitemez ve şu karakterleri içeremez: <code class='emphasized'>{1}</code>",
    "ENTRY_WITH_SAME_NAME_EXISTS": "<span class='dialog-filename'>{0}</span> adlı bir dosya veya klasör zaten var.",
    "ERROR_CREATING_DIRECTORY_TITLE": "Dizin oluşturma hatası",
    "ERROR_CREATING_DIRECTORY": "<span class='dialog-filename'>{1}</span> klasörünü oluşturmaya çalışırken bir hata oluştu. {2}",
    "EXT_MODIFIED_WARNING": "<span class='dialog-filename'>{0}</span> dosyası {APP_NAME} dışında, disk üzerinde değiştirilmiş.<br /><br />Dosyayı kaydedip o değişikliklerin üzerine yazmak istiyor musunuz?",
    "CONFIRM_FOLDER_DELETE_TITLE": "Silmeyi Onayla",
    "CONFIRM_FOLDER_DELETE": "<span class='dialog-filename'>{0}</span> klasörünü silmek istediğinizden emin misiniz?",
    "CONFIRM_FILE_DELETE": "<span class='dialog-filename'>{0}</span> dosyasını silmek istediğinizden emin misiniz?",
    "FILE_DELETED_TITLE": "Dosya Silindi",
    "DONE": "Bitti",
    "SAVE_AND_OVERWRITE": "Üstüne yaz",
    "DELETE": "Sil",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "Şu anki işaretçi konumunda kullanabileceğiniz bir Hızlı Düzenleme yok",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "CSS Hızlı Düzenleme: işaretçiyi tek bir class adının üzerine götürün",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "CSS Hızlı Düzenleme: tamamlanmamış class özniteliği",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "CSS Hızlı Düzenleme: tamamlanmamış id özniteliği",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "CSS Hızlı Düzenleme: işaretçiyi tag, class veya id üzerine getirin",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "CSS Zamanlama İşlevi Hızlı Düzenleme: geçersiz söz dizimi",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "JS Hızlı Düzenleme: işaretçiyi fonksiyon adının üzerine götürün",
    "BUTTON_NEW_RULE": "Yeni kural",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "Şu anki işaretçi konumunda kullanabileceğiniz bir Hızlı Belge yok",
    "CMD_FILE_DOWNLOAD": "İndir",
    "DND_MAX_SIZE_EXCEEDED": "dosya, desteklenen en büyük boyutu aşıyor: {0} MB.",
    "DND_UNSUPPORTED_FILE_TYPE": "desteklenmeyen dosya türü",
    "DND_ERROR_UNZIP": "sıkıştırılmış dosya açılamadı",
    "DND_ERROR_UNTAR": "sıkıştırılmış dosya açılamadı",
    "DND_SUCCESS_UNZIP_TITLE": "Zip açma başarıyla tamamlandı",
    "DND_SUCCESS_UNTAR_TITLE": "Tar açma başarıyla tamamlandı",
    "DND_SUCCESS_UNZIP": "<b>{0}</b> başarıyla genişletildi.",
    "DND_SUCCESS_UNTAR": "<b>{0}</b> başarıyla genişletildi.",
    "IMAGE_DIMENSIONS": "{0} (genişlik) &times; {1} (yükseklik) piksel",
    "IMAGE_FILTERS_TITLE": "Resim filtresi",
    "IMAGE_FILTER_PINHOLE": "İğne Deliği",
    "IMAGE_FILTER_SEPIA": "Sepya",
    "IMAGE_FILTER_CONTRAST": "Kontrast",
    "IMAGE_FILTER_VINTAGE": "Vintage",
    "IMAGE_FILTER_SUNRISE": "Gün Doğumu",
    "IMAGE_FILTER_EMBOSS": "Kabartma",
    "IMAGE_FILTER_GLOWING_SUN": "Işıldayan Güneş",
    "IMAGE_SAVE_WITH_FILTERS": "Uygula",
    "IMAGE_RESET_FILTERS": "İptal",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "Geçerli renk",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "Orijinal renk",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "RGBa biçimi",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "Hex biçimi",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "HSLa biçimi",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} ({1} kez kullanıldı)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} ({1} kez kullanıldı)",
    "DETECTED_EXCLUSION_TITLE": "JavaScript dosyası kesmesi sorunu",
    "CMD_ENABLE_QUICK_VIEW": "Üzerine gelince Hızlı Görünüm",
    "DOCS_MORE_LINK": "Devamını oku",
    "UPLOAD_FILES_DIALOG_HEADER": "Dosyaları yükleyin",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "...veya dosyaları buraya sürükleyin.",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "Tamam, dosyaları yükle!",
    "UPLOADING_INDICATOR": "Yükleniyor...",
    "BUTTON_FROM_YOUR_COMPUTER": "Bilgisayaranızdan...",
    "TAKE_A_SELFIE": "Selfie çekin...",
    "CMD_MOVE_FILE": "Taşı...",
    "PROJECT_ROOT": "Proje kökü",
    "PICK_A_FOLDER_TO_MOVE_TO": "Bir klasör seçin",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "Taşıma Hatası",
    "UNEXPECTED_ERROR_MOVING_FILE": "{0} dosyası {1} klasörüne taşınırken beklenmeyen bir hata oluştu",
    "ERROR_MOVING_FILE_SAME_NAME": "{1} klasöründe {0} adlı bir dosya ve klasör zaten var. Devam etmek için ikisinden birinin adını değiştirebilirsiniz.",
    "CONSOLE_TITLE": "Konsol",
    "CONSOLE_TOOLTIP": "JavaScript konsolunu aç",
    "CONSOLE_CLEAR": "Temizle",
    "CONSOLE_CLEAR_TOOLTIP": "Konsolu temizle",
    "CONSOLE_CLOSE_TOOLTIP": "Konsolu kapat",
    "CONSOLE_EMPTY_STRING": "Boş dizgi",
    "CONSOLE_HELPTEXT": "Konsolu kullanmak istersen JavaScript dosyana <code>console.log(&quot;Merhaba dünya!&quot;);</code> kodunu ekle."
});
