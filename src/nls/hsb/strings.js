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

    "GENERIC_ERROR": "(zmylk {0})",
    "NOT_FOUND_ERR": "Dataja/zapis njeda so namakać.",
    "NOT_READABLE_ERR": "Dataja/zapis njeda so čitać.",
    "EXCEEDS_MAX_FILE_SIZE": "Dataje, kotrež su wjetše hač {0} MB njedadźa so w {APP_NAME} wočinić.",
    "FILE_EXISTS_ERR": "Dataja abo zapis hižo eksistuje.",
    "FILE": "dataja",
    "FILE_TITLE": "Dataja",
    "DIRECTORY": "zapis",
    "DIRECTORY_TITLE": "Zapis",
    "DIRECTORY_NAMES_LEDE": "Mjena zapisow",
    "FILENAMES_LEDE": "Datajowe mjena",
    "FILENAME": "Datajowe mjeno",
    "DIRECTORY_NAME": "Zapisowe mjeno",
    "ERROR_OUT_OF_SPACE_TITLE": "Limit projektoweje wulkosće je docpěty",
    "ERROR_PROJECT_SIZE_EXCEEDED": "Cyłkowna wulkosć datajow we wašim projekće je maksimum k dispoziciji stejaceho ruma překročił. Njemóžeće dalše dataje přidać, doniž někotre z eksistowacych datajow njezhašeja, zo byšće składowanski rum wuswobodźił.",
    "FILE_EXISTS_HEADER": "Dataja hižo eksistuje.",
    "OPEN_DIALOG_ERROR": "Při pokazowanju dialoga wočinjenja datajow je zmylk je wustupił. (zmylk {0})",
    "READ_DIRECTORY_ENTRIES_ERROR": "Při čitanju wobsaha zapisa <span class='dialog-filename'>{0}</span> je zmylk wustupił. (zmylk {1})",
    "ERROR_OPENING_FILE_TITLE": "Zmylk při wočinjenju dataje",
    "ERROR_OPENING_FILE": "Při pospyće dataju <span class='dialog-filename'>{0}</span> wočinić, je zmylk wustupił. {1}",
    "ERROR_OPENING_FILES": "Při pospyće slědowace dataje wočinić je zmylk wustupił:",
    "ERROR_SAVING_FILE_TITLE": "Zmylk při składowanju dataje",
    "ERROR_SAVING_FILE": "Při pospyće dataju <span class='dialog-filename'>{0}</span> składować, je zmylk wustupił. {1}",
    "ERROR_RENAMING_FILE_TITLE": "Zmylk při přemjenowanju dataje",
    "ERROR_RENAMING_DIRECTORY_TITLE": "Zmylk při přemjenowanju zapisa",
    "ERROR_RENAMING_FILE": "Při pospyće dataju <span class='dialog-filename'>{0}</span> přemjenować, je zmylk wustupił. {1}",
    "ERROR_RENAMING_DIRECTORY": "Při pospyće zapis <span class='dialog-filename'>{0}</span> přemjenować, je zmylk wustupił. {1}",
    "ERROR_DELETING_FILE_TITLE": "Zmylk při zhašenju dataje",
    "ERROR_DELETING_DIRECTORY_TITLE": "Zmylk při zhašenju zapisa",
    "ERROR_DELETING_FILE": "Při pospyće dataju <span class='dialog-filename'>{0}</span> zhašeć, je zmylk wustupił. {1}",
    "ERROR_DELETING_DIRECTORY": "Při pospyće zapis <span class='dialog-filename'>{0}</span> zhašeć, je zmylk wustupił. {1}",
    "INVALID_FILENAME_TITLE": "NJepłaćiwe datajowe mjeno",
    "INVALID_DIRNAME_TITLE": "Njepłaćiwe zapisowe mjeno",
    "INVALID_FILENAME_MESSAGE": "Datajowe mjena njesmědźa rezerwowane systemowe słowa wužiwać, so z dypkami (.) kónčić abo slědowace znamješka wužiwać: <code class='emphasized'>{1}</code>",
    "INVALID_DIRNAME_MESSAGE": "Zapisowe mjena njesmědźa rezerwowane systemowe słowa wužiwać, so z dypkami (.) kónčić abo slědowace znamješka wužiwać: <code class='emphasized'>{1}</code>",
    "ENTRY_WITH_SAME_NAME_EXISTS": "Dataja abo zapis z mjenom <span class='dialog-filename'>{0}</span> hižo eksistuje.",
    "ERROR_CREATING_FILE_TITLE": "Zmylk při wutworjenju datje",
    "ERROR_CREATING_DIRECTORY_TITLE": "Zmylk při wutworjenju zapisa",
    "ERROR_CREATING_FILE": "Při pospyće dataju <span class='dialog-filename'>{1}</span> wutworić, je zmylk wustupił. {2}",
    "ERROR_CREATING_DIRECTORY": "Při pospyće zapis <span class='dialog-filename'>{1}</span> wutworić, je zmylk wustupił. {2}",
    "ERROR_MAX_FILES_TITLE": "Zmylk při indeksowanju datajow",
    "EXT_MODIFIED_TITLE": "Zwonkowne změny",
    "EXT_MODIFIED_WARNING": "Dataja <span class='dialog-filename'>{0}</span> je so na tačeli zwonka {APP_NAME} změniła.<br /><br />Chceće dataju składować a te změny přepisować?",
    "EXT_MODIFIED_MESSAGE": "Dataja <span class='dialog-filename'>{0}</span> je so na tačeli zwonka {APP_NAME} změniła, ale su tež njeskładowane změny w {APP_NAME}.<br /><br />Kotru wersiju chceće wobchować?",
    "EXT_DELETED_MESSAGE": "Dataja <span class='dialog-filename'>{0}</span> je so na tačeli zwonka {APP_NAME} změniła, ale su hišće njeskładowane změny w {APP_NAME}.<br /><br />chceće swoje změny wobchować?",
    "CONFIRM_FOLDER_DELETE_TITLE": "Zhašenje wobkrućic",
    "CONFIRM_FOLDER_DELETE": "Chceće woprawdźe rjadowak <span class='dialog-filename'>{0}</span> zhašeć?",
    "CONFIRM_FILE_DELETE": "Chceće woprawdźe <span class='dialog-filename'>{0}</span> zhašeć?",
    "FILE_DELETED_TITLE": "Dataja je so zhašała",
    "DONE": "Dokónčene",
    "OK": "W porjadku",
    "CANCEL": "Přetorhnyć",
    "SAVE_AND_OVERWRITE": "Přepisać",
    "DELETE": "Zhašeć",
    "BUTTON_YES": "Haj",
    "BUTTON_NO": "Ně",
    "USE_IMPORTED": "Nowu dataju wužiwać",
    "KEEP_EXISTING": "Eksistowacu dataju wobchować",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "Žana spěšna změna za aktualnu kursorowu poziciju k dispoziciji",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "Spěšna změna CSS: placěrujće kursor na mjenje jednotliweje klasy",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "Spěšna změna CSS: njedospołny klasowy atribut",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "Spěšna změna CSS: njedospołny atribut id",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "Spěšna změna CSS: placěrujće kursor w elemenće, klasy abo ID",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "Spěšna změna časoweje funkcije CSS: njepłaćiwa syntaksa",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "Spěšna změna JS: placěrujće kursor we funkciskim mjenje",
    "BUTTON_NEW_RULE": "Nowe prawidło",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "Žadyn Quick Docs za aktualnu kursorowu poziciju k dispoziciji",
    "CMD_FILE_NEW": "Nowa dataja",
    "CMD_FILE_NEW_FOLDER": "Nowy rjadowak",
    "CMD_FILE_RENAME": "Přemjenować",
    "CMD_FILE_DELETE": "Zhašeć",
    "CMD_FILE_DOWNLOAD": "Sćahnyć",
    "CMD_CUT": "Přetorhnyć",
    "CMD_COPY": "Kopěrować",
    "CMD_PASTE": "Zasadźić",
    "CMD_SELECT_ALL": "Wšo wubrać",
    "CMD_TOGGLE_QUICK_EDIT": "Spěšna změna",
    "CMD_TOGGLE_QUICK_DOCS": "Quick Docs",
    "DND_MAX_SIZE_EXCEEDED": "dataja maksimalnu podpěranu wulkosć překročuje: {0} MB.",
    "DND_UNSUPPORTED_FILE_TYPE": "njepodpěrany datajowy typ",
    "DND_ERROR_UNZIP": "zip-dataja njeda so wupakować",
    "DND_ERROR_UNTAR": "tar-dataja njeda so wupakować",
    "DND_SUCCESS_UNZIP_TITLE": "Zip-dataja je so wuspěšnje wupakowała",
    "DND_SUCCESS_UNTAR_TITLE": "Tar-dataja je so wuspěšnje wupakowała",
    "DND_FILE_REPLACE": "Dataja z mjenom <span class='dialog-filename'>{0}</span> hižo eksistuje. Chceće nowu dataju wužiwać abo eksistowacu wobchować?",
    "IMAGE_FILE_TITLE": "Wobrazowa dataja",
    "IMAGE_DIMENSIONS_1": "{0} &times; {1} pikselow",
    "IMAGE_ALT_TEXT": "Wobrazowe wopisanje",
    "IMAGE_FILTERS_TITLE": "Wobrazowy filter",
    "IMAGE_FILTER_PINHOLE": "Dźěrkowa zasłona",
    "IMAGE_FILTER_SEPIA": "Sepija",
    "IMAGE_FILTER_CONTRAST": "Kontrast",
    "IMAGE_FILTER_VINTAGE": "Klasiski",
    "IMAGE_FILTER_SUNRISE": "Schadźenje słónca",
    "IMAGE_FILTER_EMBOSS": "Wurazyć",
    "IMAGE_FILTER_GLOWING_SUN": "Swěćaca słónca",
    "IMAGE_SAVE_WITH_FILTERS": "Nałožić",
    "IMAGE_RESET_FILTERS": "Přetorhnyć",
    "FONT_FILE": "Pismowa dataja",
    "USE_FONT_INSTRUCTIONS": "Zo byšće tute pismo wužiwał, kopěrujće tutón kod do swojeje CSS-dataje.",
    "FONT_TYPE_BOLD": "Tučny",
    "FONT_TYPE_ITALIC": "Kursiwny",
    "FONT_BOLD_HTML_TAG": "Stajće tekst do znački <code>&lt;strong&gt;&lt;/strong&gt;</code>.",
    "FONT_BOLD_CSS_RULE": "Přidajće CSS-prawidło <code>font-weight:bold;</code>.",
    "FONT_ITALIC_HTML_TAG": "Stajće tekst do znački <code>&lt;em&gt;&lt;/em&gt;</code>.",
    "FONT_ITALIC_CSS_RULE": "Přidajće CSS-prawidło <code>font-style:italic;</code>.",
    "VIDEO_FILE": "Widejodataja",
    "VIDEO_OPTIONS": "Widejonastajenja",
    "VIDEO_CODE_SAMPLE": "Kopěrujće tutón kod, zo byšće tute widejo do HTML-strony zasadźił",
    "VIDEO_OPTION_SHOW_CONTROLS": "Wodźenske elemente wideja pokazać",
    "VIDEO_OPTION_AUTOPLAY": "Widejo awtomatisce wothrać",
    "VIDEO_OPTION_LOOPING": "Widejo znowa startować, hdyž je dowothrate",
    "VIDEO_OPTION_DISABLE_AUDIO": "Awdio znjemóžnić",
    "AUDIO_FILE": "Awdiodataja",
    "AUDIO_OPTIONS": "Awdionastajenja",
    "AUDIO_OPTION_SHOW_CONTROLS": "Awdioelementy pokazać (hdyž awdiowothrawak je njewidźomny)",
    "AUDIO_OPTION_AUTOPLAY": "Awdio awtomatisce wothrawać",
    "AUDIO_OPTION_LOOPING": "Awdio znowa startować, hdyž je dowothrate",
    "AUDIO_OPTION_DISABLE_AUDIO": "Awdiowothrawak bjez zynka startować",
    "BINARY_FILE_TITLE": "Njewobdźěłujomna dataja",
    "BINARY_FILE_CANNOT_EDIT": "Thimble njewě, kak so ma tuta dataja wobdźěłać!",
    "BINARY_FILE_OPTIONS_TITLE": "Ale móžeće...",
    "BINARY_FILE_DOWNLOAD": "Ju sćahnyć",
    "BINARY_FILE_OPEN": "Ju w nowym rajtarku wočinić",
    "BINARY_FILE_TRY_EDIT": "Pospytować, ju wobdźěłać",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "Aktualna barba",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "Originalna barba",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "Format RGBa",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "Heksadecimalny format",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "Format HSLa",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} ({1} króć wužiwany)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} ({1} króć wužiwane)",
    "CMD_JUMPTO_DEFINITION": "K definiciji skočić",
    "CMD_SHOW_PARAMETER_HINT": "Parametrowy pokiw pokazać",
    "NO_ARGUMENTS": "<žane parametry>",
    "DETECTED_EXCLUSION_TITLE": "JavaScript: Problem datajoweje inferency",
    "CMD_ENABLE_QUICK_VIEW": "Spěšny přehlad při pokazowanju z myšku",
    "DOCS_MORE_LINK": "Wjace čitać",
    "UPLOAD_FILES_DIALOG_HEADER": "Dataje nahrać",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "...abo dataje sem ćahnyć.",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "W porjadku, dataje wozjewić!",
    "UPLOADING_INDICATOR": "Nahrawa so...",
    "BUTTON_FROM_YOUR_COMPUTER": "Wot wašeho ličaka...",
    "TAKE_A_SELFIE": "Selfie činić...",
    "CMD_MOVE_FILE": "Přesunyć do...",
    "PROJECT_ROOT": "Korjenjowy zapis projekta",
    "PICK_A_FOLDER_TO_MOVE_TO": "Rjadowak wubrać",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "Zmylk při přesuwanju",
    "UNEXPECTED_ERROR_MOVING_FILE": "Při přesuwanju dataje/rjadowaka {0} do {1} je njewočakowany zmylk wustupił",
    "ERROR_MOVING_FILE_SAME_NAME": "Dataja abo rjadowak z mjenom {0} w {1} hižo eksistuje. Přemjenujće prošu jednu dataju abo jedyn rjadowak z njeju, zo byšće pokročował.&quot;",
    "CONSOLE_TITLE": "Konsola",
    "CONSOLE_TOOLTIP": "Konsolu JavaScript wočinić",
    "CONSOLE_CLEAR": "Wuprózdnić",
    "CONSOLE_CLEAR_TOOLTIP": "Konsolu wuprózdnić",
    "CONSOLE_CLOSE_TOOLTIP": "Konsolu začinić",
    "CONSOLE_EMPTY_STRING": "Prózdny znamješkowy rjećazk",
    "CONSOLE_HELPTEXT": "Zo byšće konsolu wužiwał, přidajće <code>console.log(&quot;Witaj swět!&quot;);</code> do swojeje dataje javaScript."
});