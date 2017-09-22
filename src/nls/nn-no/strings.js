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

    "GENERIC_ERROR": "(feil {0})",
    "NOT_FOUND_ERR": "Klarte ikkje å finne fila /directory.",
    "NOT_READABLE_ERR": "Klarte ikkje å lese fila /directory.",
    "EXCEEDS_MAX_FILE_SIZE": "Filer større enn {0} MB kan ikkje opnast i {APP_NAME}.",
    "FILE_EXISTS_ERR": "Fila eller mappa finst allereie.",
    "FILE": "fil",
    "FILE_TITLE": "Fil",
    "DIRECTORY": "mappe",
    "DIRECTORY_TITLE": "Mappe",
    "DIRECTORY_NAMES_LEDE": "Mappenamn",
    "FILENAMES_LEDE": "Filnamn",
    "FILENAME": "Filnamn",
    "DIRECTORY_NAME": "Mappenamn",
    "ERROR_OUT_OF_SPACE_TITLE": "Grenseverdien for prosjektstorleiken er oppnådd",
    "ERROR_PROJECT_SIZE_EXCEEDED": "Den totale storleiken på filene i prosjektet ditt har overskride maksimal tilgjengeleg plass. Du vil ikkje kunne leggje til nye filer før du slettar nokre av dei eksisterande filene for å lage meir plass.",
    "FILE_EXISTS_HEADER": "Fila finst allereie.",
    "OPEN_DIALOG_ERROR": "Det oppstod ein feil ved opning av fil-dialogen. (feil {0})",
    "READ_DIRECTORY_ENTRIES_ERROR": "Det oppstod ein feil ved lesing av innhaldet i mappa <span class='dialog-filename'>{0}</span>. (feil {1})",
    "ERROR_OPENING_FILE_TITLE": "Feil under opning av fil",
    "ERROR_OPENING_FILE": "Det oppstod ein feil ved forsøk på å opne fila <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_OPENING_FILES": "Det oppstod ein feil ved forøket på å opne følgjande filer:",
    "ERROR_SAVING_FILE_TITLE": "Feil under lagring av fil",
    "ERROR_SAVING_FILE": "Det oppstod ein feil ved forsøk på å lagre fila <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_FILE_TITLE": "Det oppstod ein feil under namnebyte på fila",
    "ERROR_RENAMING_DIRECTORY_TITLE": "Det oppstod ein feil under namnebyte på mappa",
    "ERROR_RENAMING_FILE": "Det oppstod ein feil ved forsøk på å byte namn på fila <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_DIRECTORY": "Ein feil oppstod ved forsøk på å byte namn på mappa <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_FILE_TITLE": "Feil under sletting av fil",
    "ERROR_DELETING_DIRECTORY_TITLE": "Feil under sletting av mappe",
    "ERROR_DELETING_FILE": "Det oppstod ein feil ved forsøk på å slette fila <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_DIRECTORY": "Det oppstod ein feil ved forsøk på å slette mappa <span class='dialog-filename'>{0}</span>. {1}",
    "INVALID_FILENAME_TITLE": "Ugyldig filnamn",
    "INVALID_DIRNAME_TITLE": "Ugyldig mappenamn",
    "INVALID_FILENAME_MESSAGE": "Filnamn kan ikkje bruke system-reserverte ord, avsluttast med punkt (.) eller bruke følgjande teikn: <code class='emphasized'>{1}</code>",
    "INVALID_DIRNAME_MESSAGE": "Mappnamn kan ikkje bruke system.reserverte ord, avsluttast med punkt (.) eller bruke følgjande teikn: <code class='emphasized'>{1}</code>",
    "ENTRY_WITH_SAME_NAME_EXISTS": "Ei fil eller mappe med namnet <span class='dialog-filename'>{0}</span> finst allereie.",
    "ERROR_CREATING_FILE_TITLE": "Feil under oppretting av fil",
    "ERROR_CREATING_DIRECTORY_TITLE": "Feil under oppretting av mappe",
    "ERROR_CREATING_FILE": "Det oppstod ein feil ved forsøk på å opprette fila <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_CREATING_DIRECTORY": "Det oppstod ein feil ved forsøk på å opprette mappa <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_MAX_FILES_TITLE": "Feil under indeksering av filer",
    "EXT_MODIFIED_TITLE": "Eksterne endringar",
    "EXT_MODIFIED_WARNING": "<span class='dialog-filename'>{0}</span> har blitt modifisert på disk utanfor {APP_NAME}.<br /><br />Vil du lagre fila og skrive over endringane?",
    "EXT_MODIFIED_MESSAGE": "<span class='dialog-filename'>{0}</span> har blitt modifisert på disk utanfor {APP_NAME}, men har også ulagra endringar i {APP_NAME}.<br /><br />Kva for versjon vil du lagre?",
    "EXT_DELETED_MESSAGE": "<span class='dialog-filename'>{0}</span> har blitt tatt bort på disk utanfor {APP_NAME}, men har ulagra endringar i {APP_NAME}.<br /><br />Vil du lagre endringane dine?",
    "CONFIRM_FOLDER_DELETE_TITLE": "Stadfest sletting",
    "CONFIRM_FOLDER_DELETE": "Er du sikker på at du vil slette mappa <span class='dialog-filename'>{0}</span>?",
    "CONFIRM_FILE_DELETE": "Er du sikker på at du vil slette <span class='dialog-filename'>{0}</span>?",
    "FILE_DELETED_TITLE": "Fila er sletta",
    "DONE": "Ferdig",
    "OK": "OK",
    "CANCEL": "Avbryt",
    "SAVE_AND_OVERWRITE": "Skriv over",
    "DELETE": "Slett",
    "BUTTON_YES": "Ja",
    "BUTTON_NO": "Nei",
    "USE_IMPORTED": "Bruk ny fil",
    "KEEP_EXISTING": "Behald eksisterande fil",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "Inga snøggredigering er tilgjengeleg for gjeldande musepeikarposisjon",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "CSS Snøggredigering: plasser musepeikaren på eit klassenamn",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "CSS Snøggredigering: ufullstendig klasseattribut",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "CSS Snøggredigering: ufullstendig id-attributt",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "CSS Snøggredigering: plasser musepeikaren i tagg, klasse eller id",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "CSS Timingfunksjon Snøggredigering: ugyldig syntax",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "JS Snøggredigering: plaser muspeikaren i funksjonsnamnet",
    "BUTTON_NEW_RULE": "Ny regel",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "Ingen Snøggdokument tilgjengelege for gjeldande musepeikarposisjon",
    "CMD_FILE_NEW": "Ny fil",
    "CMD_FILE_NEW_FOLDER": "Ny mappe",
    "CMD_FILE_RENAME": "Byt namn",
    "CMD_FILE_DELETE": "Slett",
    "CMD_FILE_DOWNLOAD": "Last ned",
    "CMD_CUT": "Klipp ut",
    "CMD_COPY": "Kopier",
    "CMD_PASTE": "Lim inn",
    "CMD_SELECT_ALL": "Marker alt",
    "CMD_TOGGLE_QUICK_EDIT": "Snøggbredigering",
    "CMD_TOGGLE_QUICK_DOCS": "Snøggdokument",
    "DND_MAX_SIZE_EXCEEDED": "fila overskrid høgste storleik som er støtta: {0} MB.",
    "DND_UNSUPPORTED_FILE_TYPE": "ustøtta filtype",
    "DND_ERROR_UNZIP": "klarte ikkje å pakke ut (unzip) filla",
    "DND_ERROR_UNTAR": "klarte ikkje å pakke opp tar-fila",
    "DND_SUCCESS_UNZIP_TITLE": "Utpakking av zip-fila fullført",
    "DND_SUCCESS_UNTAR_TITLE": "Utpakking av tar-fila fullført",
    "DND_FILE_REPLACE": "Ei fil med namnet <span class='dialog-filename'>{0}</span> finst allereie. Vil du bruke den nye fila, eller behalde den eksisterande?",
    "IMAGE_FILE_TITLE": "Bildefil",
    "IMAGE_DIMENSIONS_1": "{0} &times; {1} pikslar",
    "IMAGE_ALT_TEXT": "Bildeskildring",
    "IMAGE_FILTERS_TITLE": "Bildefilter",
    "IMAGE_FILTER_SEPIA": "Sepia",
    "IMAGE_FILTER_CONTRAST": "Kontrast",
    "IMAGE_FILTER_VINTAGE": "Gammaldags (VIntage)",
    "IMAGE_FILTER_SUNRISE": "Soloppgang",
    "IMAGE_FILTER_EMBOSS": "Relieff",
    "IMAGE_FILTER_GLOWING_SUN": "Glødande sol",
    "IMAGE_SAVE_WITH_FILTERS": "Bruk",
    "IMAGE_RESET_FILTERS": "Avbryt",
    "FONT_FILE": "Skriftfil",
    "USE_FONT_INSTRUCTIONS": "For å bruke denne skrifta, kopier og lim inn denne koden i CSS-fila di.",
    "FONT_TYPE_BOLD": "Halvfeit",
    "FONT_TYPE_ITALIC": "Kursiv",
    "FONT_BOLD_HTML_TAG": "Legg til tekst i taggen <code>&lt;strong&gt;&lt;/strong&gt;</code>.",
    "FONT_BOLD_CSS_RULE": "Legg til ein <code>font-weight: bold;</code> CSS-regel.",
    "FONT_ITALIC_HTML_TAG": "Legg til tekst i taggen <code>&lt;em&gt;&lt;/em&gt;</code>.",
    "FONT_ITALIC_CSS_RULE": "Legg til ein <code>font-style: italic;</code> CSS-regel.",
    "VIDEO_FILE": "Videofil",
    "VIDEO_OPTIONS": "Video-innstillingar",
    "VIDEO_CODE_SAMPLE": "Kopier &amp; lim inn denne koden  for å leggje till denne videon på ei HTML-side",
    "VIDEO_OPTION_SHOW_CONTROLS": "Vis videokontrollar",
    "VIDEO_OPTION_AUTOPLAY": "Start å spele videon automatisk",
    "VIDEO_OPTION_LOOPING": "Start videoklippet på nytt når det er slutt",
    "VIDEO_OPTION_DISABLE_AUDIO": "Slå av lyd",
    "AUDIO_FILE": "Lydfil",
    "AUDIO_OPTIONS": "Lyd-innstillingar",
    "AUDIO_OPTION_SHOW_CONTROLS": "Vis lydkontrollar (om dei er avslåtte visest ikkje lydavspelaren)",
    "AUDIO_OPTION_AUTOPLAY": "Start å spele lyd automatisk",
    "AUDIO_OPTION_LOOPING": "Start lyden på nytt når det er slutt",
    "AUDIO_OPTION_DISABLE_AUDIO": "Start lydspelar utan lyd",
    "BINARY_FILE_TITLE": "Fila kan ikkje redigerast",
    "BINARY_FILE_CANNOT_EDIT": "Thimble er ikkje sikker på korleis denne fila skal redigerast!",
    "BINARY_FILE_OPTIONS_TITLE": "Men du kan...",
    "BINARY_FILE_DOWNLOAD": "Laste henne ned",
    "BINARY_FILE_OPEN": "Opne henne i ei ny fane",
    "BINARY_FILE_TRY_EDIT": "Prøve å redigere henne",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "Gjeldande farge",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "Originalfarge",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "RGBa-format",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "HEX-format",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "HSLA-format",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} (Brukt {1} gong)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} (Brukt {1} gongar)",
    "CMD_JUMPTO_DEFINITION": "Gå til definisjon",
    "CMD_SHOW_PARAMETER_HINT": "Vis parameterforslag",
    "NO_ARGUMENTS": "<ingen parametrar>",
    "DETECTED_EXCLUSION_TITLE": "JavaScript-fil inferensproblem",
    "DOCS_MORE_LINK": "Les meir",
    "UPLOAD_FILES_DIALOG_HEADER": "Last opp filer",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "…eller drag filer hit.",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "OK, slepp filene!",
    "UPLOADING_INDICATOR": "Lastar opp…",
    "BUTTON_FROM_YOUR_COMPUTER": "Frå datamaskina di…",
    "TAKE_A_SELFIE": "Ta ein «sjølfi» (selfie)...",
    "CMD_MOVE_FILE": "Flytt til...",
    "PROJECT_ROOT": "Prosjekt-rot (Project root)",
    "PICK_A_FOLDER_TO_MOVE_TO": "Vel ei mappe",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "Flyttefeil",
    "UNEXPECTED_ERROR_MOVING_FILE": "Det oppstod ein uventa feil ved forsøk på å flytte {0} til {1}",
    "ERROR_MOVING_FILE_SAME_NAME": "Ei fil eller mappe med namnet {0} finst allereie i {1}. Vurder å byte namn på ei av dei for å fortsetje.",
    "CONSOLE_TITLE": "Konsoll",
    "CONSOLE_TOOLTIP": "Opne JavaScript-konsollen",
    "CONSOLE_CLEAR": "Tøm",
    "CONSOLE_CLEAR_TOOLTIP": "Tøm konsollen",
    "CONSOLE_CLOSE_TOOLTIP": "Lukk konsollen",
    "CONSOLE_EMPTY_STRING": "Tom streng",
    "CONSOLE_HELPTEXT": "For å bruke konsollen, legg til <code>console.log(&quot;Hello World!&quot;);</code> i JavaScript-fila di."
});
