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

    "GENERIC_ERROR": "(erro {0})",
    "NOT_FOUND_ERR": "Não foi possível encontrar o ficheiro/diretório.",
    "NOT_READABLE_ERR": "Não foi possível ler o ficheiro/diretório.",
    "NO_MODIFICATION_ALLOWED_ERR": "A pasta de destino não pode ser modificado.",
    "NO_MODIFICATION_ALLOWED_ERR_FILE": "As permissões não permitem modificações.",
    "FILE_EXISTS_ERR": "O ficheiro ou diretório já existe.",
    "ERROR_LOADING_PROJECT": "Erro ao carregar o projeto",
    "OPEN_DIALOG_ERROR": "Ocorreu um erro ao mostrar o diálogo de abertura de ficheiros. (erro {0})",
    "REQUEST_NATIVE_FILE_SYSTEM_ERROR": "Ocorreu um erro ao tentar carregar a pasta <span class='dialog-filename'>{0}</span>. (error {1})",
    "READ_DIRECTORY_ENTRIES_ERROR": "Ocorreu um erro ao ler os conteúdos do diretório <span class='dialog-filename'>{0}</span>. (erro {1})",
    "ERROR_OPENING_FILE_TITLE": "Erro ao abrir ficheiro",
    "ERROR_OPENING_FILE": "Ocorreu um erro ao tentar abrir o ficheiro <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RELOADING_FILE_TITLE": "Ocorreu um erro ao recarregar as mudanças a partir do disco",
    "ERROR_RELOADING_FILE": "Ocorreu um erro ao tentar recarregar o ficheiro <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_SAVING_FILE_TITLE": "Erro ao guardar ficheiro",
    "ERROR_SAVING_FILE": "Ocorreu um erro ao tentar guardar o ficheiro <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_RENAMING_FILE_TITLE": "Erro ao renomear ficheiro",
    "ERROR_RENAMING_FILE": "Ocorreu um erro ao tentar renomear o ficheiro <span class='dialog-filename'>{0}</span>. {1}",
    "INVALID_FILENAME_TITLE": "Nome de ficheiro inválido",
    "INVALID_FILENAME_MESSAGE": "Os nomes de ficheiro não podem utilizar nenhumas palavras reservadas pelo sistema, acabar em pontos (.) ou utilizar qualquer dos seguintes caracteres: <code class='emphasized'>{1}</code>",
    "ERROR_CREATING_FILE_TITLE": "Erro ao criar ficheiro",
    "ERROR_CREATING_FILE": "Ocorreu um erro ao tentar criar o ficheiro <span class='dialog-filename'>{1}</span>. {2}",
    "ERROR_IN_BROWSER_TITLE": "Oops! {APP_NAME} não funciona em navegadores ainda.",
    "ERROR_IN_BROWSER": "{APP_NAME} é feito em HTML, e é executado como uma aplicação de desktop para que possa usá-lo para editar ficheiros locais. Por favor, use o shell da aplicação no <b>github.com/adobe/brackets-shell</b> repo para executar {APP_NAME}.",
    "ERROR_MAX_FILES_TITLE": "Erro ao indexar os ficheiros",
    "ERROR_MAX_FILES": "O número máximo de ficheiros foi indexado. Acções que procurem ficheiros no index podem não funcionar corretamente.",
    "ERROR_LAUNCHING_BROWSER_TITLE": "Erro ao abrir o navegador",
    "ERROR_CANT_FIND_CHROME": "O navegador Google Chrome não foi encontrado. Por favor, verifique se está instalado.",
    "ERROR_LAUNCHING_BROWSER": "Ocorreu um erro ao iniciar o navegador. (error {0})",
    "LIVE_DEVELOPMENT_ERROR_TITLE": "Erro no Live Preview",
    "LIVE_DEVELOPMENT_RELAUNCH_TITLE": "A conectar ao navegador",
    "LIVE_DEVELOPMENT_ERROR_MESSAGE": "Para que a Live Preview funcione, o Google Chrome deve ser aberto com a opção de depuração(debug) remota ativada.<br /><br />Gostaria de reabrir Goggle Chrome e permitir a depuração remota?",
    "LIVE_DEV_NEED_HTML_MESSAGE": "Abra um ficheiro HTML de modo a executar o Live Preview.",
    "LIVE_DEVELOPMENT_INFO_TITLE": "Bem-vindo ao Live Preview!",
    "LIVE_DEVELOPMENT_INFO_MESSAGE": "Live Preview liga o {APP_NAME} ao seu navegador. Ele faz uma pré-vizualização do seu ficheiro HTML no navegador, e cada vez que editar o código a pré-vizualização é automáticamente actualizada.<br /><br />Nesta versão inicial do {APP_NAME}, o Live Preview só funciona com a edição de <strong>ficheiros CSS</strong> e apenas com <strong>Google Chrome</strong>. Iremos implementá-lo para HTML e JavaScript em breve!<br /><br />(Só vai ver esta mensagem uma vez.)",
    "LIVE_DEV_STATUS_TIP_NOT_CONNECTED": "Live Preview",
    "LIVE_DEV_STATUS_TIP_PROGRESS1": "Live Preview: A ligar…",
    "LIVE_DEV_STATUS_TIP_PROGRESS2": "Live Preview: A iniciar…",
    "LIVE_DEV_STATUS_TIP_CONNECTED": "Live Preview: Desligar",
    "LIVE_DEV_STATUS_TIP_OUT_OF_SYNC": "Live Preview: Clique para desligar (Guarde o ficheiro para atualizar)",
    "SAVE_CLOSE_TITLE": "Guardar alterações",
    "SAVE_CLOSE_MESSAGE": "Você quer guardar as alterações feitas no ficheiro <span class='dialog-filename'>{0}</span>?",
    "SAVE_CLOSE_MULTI_MESSAGE": "Você quer guardar as alterações para os seguintes ficheiros?",
    "EXT_MODIFIED_TITLE": "Alterações externas",
    "EXT_MODIFIED_MESSAGE": "<span class='dialog-filename'>{0}</span> foi modificado no disco fora de {APP_NAME}, mas também tem alterações não guardadas em {APP_NAME}.<br /><br />Qual é a versão que pretende manter?",
    "EXT_DELETED_MESSAGE": "<span class='dialog-filename'>{0}</span> foi modificado no disco fora de {APP_NAME}, mas tem alterações não guardadas em {APP_NAME}.<br /><br />Pretende manter as suas alterações?",
    "BUTTON_YES": "Sim",
    "BUTTON_NO": "Não",
    "OPEN_FILE": "Abrir ficheiro",
    "CHOOSE_FOLDER": "Escolha uma pasta",
    "RELEASE_NOTES": "Notas de lançamento",
    "NO_UPDATE_TITLE": "Está atualizado!",
    "NO_UPDATE_MESSAGE": "Está a executar a versão mais recente de {APP_NAME}.",
    "FIND_IN_FILES_SCOPED": "em <span class='dialog-filename'>{0}</span>",
    "FIND_IN_FILES_NO_SCOPE": "no projeto",
    "FIND_IN_FILES_FILE": "ficheiro",
    "FIND_IN_FILES_FILES": "ficheiros",
    "FIND_IN_FILES_MATCH": "resultado",
    "FIND_IN_FILES_MATCHES": "resultado",
    "FIND_IN_FILES_MORE_THAN": "Mais que ",
    "FIND_IN_FILES_FILE_PATH": "Ficheiro: <span class='dialog-filename'>{0}</span>",
    "ERROR_FETCHING_UPDATE_INFO_TITLE": "Erro ao receber as atualizações",
    "ERROR_FETCHING_UPDATE_INFO_MSG": "Houve um problema a receber a atualização mais recente a partir do servidor. Por favor, verifique se você está conectado à Internet e tente novamente.",
    "UNTITLED": "Sem título",
    "KEYBOARD_CTRL": "Ctrl",
    "KEYBOARD_SHIFT": "Shift",
    "KEYBOARD_SPACE": "Space",
    "STATUSBAR_CURSOR_POSITION": "Linha {0}, Coluna {1}",
    "STATUSBAR_INDENT_TOOLTIP_SPACES": "Mudar a indentação para espaços",
    "STATUSBAR_INDENT_TOOLTIP_TABS": "Mudar a indentação para tabulação",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_SPACES": "Mudar o número de espaços usados ao indentar",
    "STATUSBAR_INDENT_SIZE_TOOLTIP_TABS": "Mudar a largura do caractere de tabulação",
    "STATUSBAR_SPACES": "Espaços",
    "STATUSBAR_TAB_SIZE": "Tamanho da tabulação",
    "FILE_MENU": "Ficheiro",
    "CMD_FILE_NEW": "Novo ficheiro",
    "CMD_FILE_NEW_FOLDER": "Nova pasta",
    "CMD_FILE_OPEN": "Abrir…",
    "CMD_ADD_TO_WORKING_SET": "Adicionar ao conjunto de trabalho",
    "CMD_OPEN_FOLDER": "Abrir pasta…",
    "CMD_FILE_CLOSE": "Fechar",
    "CMD_FILE_CLOSE_ALL": "Fechar tudo",
    "CMD_FILE_SAVE": "Guardar",
    "CMD_FILE_SAVE_ALL": "Guardar tudo",
    "CMD_LIVE_FILE_PREVIEW": "Live Preview",
    "CMD_PROJECT_SETTINGS": "Definições do projeto…",
    "CMD_FILE_RENAME": "Renomear",
    "CMD_QUIT": "Sair",
    "EDIT_MENU": "Editar",
    "CMD_SELECT_ALL": "Selecionar tudo",
    "CMD_SELECT_LINE": "Selecionar linha",
    "CMD_FIND": "Encontrar",
    "CMD_FIND_IN_FILES": "Encontrar nos ficheiros",
    "CMD_FIND_IN_SUBTREE": "Encontrar em…",
    "CMD_FIND_NEXT": "Encontrar próximo",
    "CMD_FIND_PREVIOUS": "Encontrar anterior",
    "CMD_REPLACE": "Substituir",
    "CMD_INDENT": "Indentar",
    "CMD_UNINDENT": "Recuar indentação",
    "CMD_DUPLICATE": "Duplicar",
    "CMD_DELETE_LINES": "Apagar linha(s) selecionadas",
    "CMD_COMMENT": "Alternar comentário linhas",
    "CMD_BLOCK_COMMENT": "Alternar comentário bloco",
    "CMD_LINE_UP": "Mover linha(s) para cima",
    "CMD_LINE_DOWN": "Mover linha(s) para baixo",
    "VIEW_MENU": "Ver",
    "CMD_HIDE_SIDEBAR": "Esconder barra lateral",
    "CMD_SHOW_SIDEBAR": "Mostrar barra lateral",
    "CMD_INCREASE_FONT_SIZE": "Aumentar tamanho da fonte",
    "CMD_DECREASE_FONT_SIZE": "Diminuir tamanho da fonte",
    "CMD_RESTORE_FONT_SIZE": "Restaurar tamanho da fonte",
    "CMD_WORKINGSET_SORT_BY_ADDED": "Ordenar por data adicionado",
    "CMD_WORKINGSET_SORT_BY_NAME": "Ordenar por nome",
    "CMD_WORKINGSET_SORT_BY_TYPE": "Ordenar por tipo",
    "CMD_WORKING_SORT_TOGGLE_AUTO": "Ordenação automática",
    "NAVIGATE_MENU": "Navegar",
    "CMD_QUICK_OPEN": "Abertura rápida",
    "CMD_GOTO_LINE": "Ir para a linha",
    "CMD_GOTO_DEFINITION": "Ir para definição",
    "CMD_TOGGLE_QUICK_EDIT": "Edição rápida",
    "CMD_QUICK_EDIT_PREV_MATCH": "Resultado anterior",
    "CMD_QUICK_EDIT_NEXT_MATCH": "Resultado seguinte",
    "CMD_NEXT_DOC": "Ficheiro seguinte",
    "CMD_PREV_DOC": "Ficheiro anterior",
    "CMD_SHOW_IN_TREE": "Mostrar na lista de pastas",
    "HELP_MENU": "Ajuda",
    "CMD_SHOW_EXTENSIONS_FOLDER": "Mostrar pasta de extensões",
    "CMD_CHECK_FOR_UPDATE": "Verificar atualizações",
    "CMD_ABOUT": "Sobre",
    "EXPERIMENTAL_BUILD": "Versão Experimental",
    "OK": "OK",
    "DONT_SAVE": "Não guardar",
    "SAVE": "Guardar",
    "CANCEL": "Cancelar",
    "RELOAD_FROM_DISK": "Atualizar a partir do disco",
    "KEEP_CHANGES_IN_EDITOR": "Manter mudanças no editor",
    "CLOSE_DONT_SAVE": "Fechar (Não guardar)",
    "RELAUNCH_CHROME": "Re-abrir Chrome",
    "ABOUT": "Sobre",
    "CLOSE": "Fechar",
    "ABOUT_TEXT_LINE1": "sprint {VERSION_MINOR} versão experimental {VERSION}",
    "ABOUT_TEXT_LINE3": "Avisos, termos e condições de softwares de terceiros estão localizados em <span class=&quot;non-clickble-link&quot;>http://www.adobe.com/go/thirdparty/</span> e aqui incorporados por referência.",
    "ABOUT_TEXT_LINE4": "Documentação e fontes <span class=&quot;non-clickble-link&quot;>https://github.com/adobe/brackets/</span>",
    "UPDATE_NOTIFICATION_TOOLTIP": "Nova versão de {APP_NAME} disponível! Clique aqui para mais detalhes.",
    "UPDATE_AVAILABLE_TITLE": "Atualização disponível",
    "UPDATE_MESSAGE": "Hey, {APP_NAME} {VERSION} disponível. Aqui estão alguns dos novos recursos:",
    "GET_IT_NOW": "Obter agora!",
    "PROJECT_SETTINGS_TITLE": "Definições do projeto para: {0}",
    "PROJECT_SETTING_BASE_URL": "Live Preview URL base",
    "PROJECT_SETTING_BASE_URL_HINT": "(deixe em branco para url do ficheiro)",
    "BASEURL_ERROR_INVALID_PROTOCOL": "O {0} protocolo não é suportado pelo Live Preview&mdash;por favor usar http: or https: .",
    "BASEURL_ERROR_SEARCH_DISALLOWED": "O URL base não pode conter parametros de pesquisa como &quot;{0}&quot;.",
    "BASEURL_ERROR_HASH_DISALLOWED": "O URL base não pode conter cardinal como &quot;{0}&quot;.",
    "BASEURL_ERROR_INVALID_CHAR": "Caracteres especiais como '{0}' têm que ser %-codificados.",
    "BASEURL_ERROR_UNKNOWN_ERROR": "Erro desconhecido na análise do URL base",
    "DEBUG_MENU": "Debug",
    "CMD_SHOW_DEV_TOOLS": "Mostrar ferramentas de desenvolvimento",
    "CMD_REFRESH_WINDOW": "Recarregar o {APP_NAME}",
    "CMD_NEW_BRACKETS_WINDOW": "Nova janela do {APP_NAME}",
    "CMD_SWITCH_LANGUAGE": "Mudar linguagem",
    "CMD_RUN_UNIT_TESTS": "Executar testes",
    "CMD_SHOW_PERF_DATA": "Mostrar dados de desempenho",
    "LANGUAGE_TITLE": "Mudar idioma",
    "LANGUAGE_MESSAGE": "Por favor, selecione o idioma desejado na lista abaixo:",
    "LANGUAGE_SUBMIT": "Recarregar {APP_NAME}",
    "LANGUAGE_CANCEL": "Cancelar",
    "EXCEEDS_MAX_FILE_SIZE": "Ficheiros maiores que {0} MB não podem ser abertos em {APP_NAME}.",
    "FILE": "ficheiro",
    "FILE_TITLE": "Ficheiro",
    "DIRECTORY": "diretório",
    "DIRECTORY_TITLE": "Diretório",
    "DIRECTORY_NAMES_LEDE": "Nomes dos diretórios",
    "FILENAMES_LEDE": "Nomes dos ficheiros",
    "FILENAME": "Nome do ficheiro",
    "DIRECTORY_NAME": "Nome do diretório",
    "ERROR_OUT_OF_SPACE_TITLE": "Limite de tamanho do projeto atingido",
    "ERROR_PROJECT_SIZE_EXCEEDED": "O tamanho máximo dos ficheiros do seu projeto excedem o espaço máximo disponível. Não poderá adicionar novos ficheiros até eliminar alguns dos ficheiros existentes, para libertar espaço.",
    "FILE_EXISTS_HEADER": "O ficheiro já existe.",
    "ERROR_OPENING_FILES": "Ocorreu um erro ao tentar abrir os seguintes ficheiros:",
    "ERROR_RENAMING_DIRECTORY_TITLE": "Erro ao renomear diretório",
    "ERROR_RENAMING_DIRECTORY": "Ocorreu um erro ao tentar renomear o diretório <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_FILE_TITLE": "Erro ao eliminar ficheiro",
    "ERROR_DELETING_DIRECTORY_TITLE": "Erro ao eliminar diretório",
    "ERROR_DELETING_FILE": "Ocorreu um erro ao tentar eliminar o ficheiro <span class='dialog-filename'>{0}</span>. {1}",
    "ERROR_DELETING_DIRECTORY": "Ocorreu um erro ao tentar eliminar o diretório <span class='dialog-filename'>{0}</span>. {1}",
    "INVALID_DIRNAME_TITLE": "Nome de diretório inválido",
    "INVALID_DIRNAME_MESSAGE": "Os nomes de diretório não podem utilizar nenhumas palavras reservadas pelo sistema, acabar em pontos (.) ou utilizar qualquer dos seguintes caracteres: <code class='emphasized'>{1}</code>",
    "ENTRY_WITH_SAME_NAME_EXISTS": "Um ficheiro ou diretório com o nome <span class='dialog-filename'>{0}</span> já existe.",
    "ERROR_CREATING_DIRECTORY_TITLE": "Erro ao criar diretório",
    "ERROR_CREATING_DIRECTORY": "Ocorreu um erro ao tentar criar o diretório <span class='dialog-filename'>{1}</span>. {2}",
    "EXT_MODIFIED_WARNING": "<span class='dialog-filename'>{0}</span> foi modificado no disco fora de {APP_NAME}.<br /><br />Pretende guardar o ficheiro e sobrescrever essas alterações?",
    "CONFIRM_FOLDER_DELETE_TITLE": "Confirmar eliminação",
    "CONFIRM_FOLDER_DELETE": "Tem a certeza de que pretende eliminar o ficheiro <span class='dialog-filename'>{0}</span>?",
    "CONFIRM_FILE_DELETE": "Tem a certeza de que pretende apagar <span class='dialog-filename'>{0}</span>?",
    "FILE_DELETED_TITLE": "Ficheiro eliminado",
    "DONE": "Feito",
    "SAVE_AND_OVERWRITE": "Substituir",
    "DELETE": "Eliminar",
    "USE_IMPORTED": "Utilizar o novo ficheiro",
    "KEEP_EXISTING": "Manter o ficheiro existente",
    "ERROR_QUICK_EDIT_PROVIDER_NOT_FOUND": "Nenhuma edição rápida disponível para a posição atual do cursor",
    "ERROR_CSSQUICKEDIT_BETWEENCLASSES": "Edição rápida de CSS: coloque o cursor sob o nome de uma classe",
    "ERROR_CSSQUICKEDIT_CLASSNOTFOUND": "Edição rápida de CSS: atributo de classe incompleto",
    "ERROR_CSSQUICKEDIT_IDNOTFOUND": "Edição rápida de CSS: atributo id incompleto",
    "ERROR_CSSQUICKEDIT_UNSUPPORTEDATTR": "Edição rápida de CSS: coloque o cursor numa tag, classe ou id",
    "ERROR_TIMINGQUICKEDIT_INVALIDSYNTAX": "Edição rápida de função de temporização CSS: sintaxe inválida",
    "ERROR_JSQUICKEDIT_FUNCTIONNOTFOUND": "Edição rápida de JS: coloque o cursor no nome da função",
    "BUTTON_NEW_RULE": "Nova regra",
    "ERROR_QUICK_DOCS_PROVIDER_NOT_FOUND": "Nenhum documento rápido disponível para a posição atual do cursor",
    "CMD_FILE_DELETE": "Eliminar",
    "CMD_FILE_DOWNLOAD": "Descarregar",
    "CMD_CUT": "Cortar",
    "CMD_COPY": "Copiar",
    "CMD_PASTE": "Colar",
    "CMD_TOGGLE_QUICK_DOCS": "Documentos rápidos",
    "DND_MAX_SIZE_EXCEEDED": "o ficheiro excede o tamanho máximo suportado: {0} MB.",
    "DND_UNSUPPORTED_FILE_TYPE": "tipo de ficheiro não suportado",
    "DND_ERROR_UNZIP": "incapaz de extrair ficheiro",
    "DND_ERROR_UNTAR": "incapaz de extrair ficheiro",
    "DND_SUCCESS_UNZIP_TITLE": "Extração concluída com sucesso",
    "DND_SUCCESS_UNTAR_TITLE": "Extração concluída com sucesso",
    "DND_FILE_REPLACE": "Já existe um ficheiro com o nome <span class='dialog-filename'>{0}</span>. Pretende utilizar o novo ficheiro ou manter o existente?",
    "IMAGE_FILE_TITLE": "Ficheiro de imagem",
    "IMAGE_DIMENSIONS_1": "{0} &times; {1} pixeis",
    "IMAGE_ALT_TEXT": "Descrição da imagem",
    "IMAGE_FILTERS_TITLE": "Filtro de imagem",
    "IMAGE_FILTER_PINHOLE": "Pinhole",
    "IMAGE_FILTER_SEPIA": "Sépia",
    "IMAGE_FILTER_CONTRAST": "Contraste",
    "IMAGE_FILTER_VINTAGE": "Vintage",
    "IMAGE_FILTER_SUNRISE": "Nascer do sol",
    "IMAGE_FILTER_EMBOSS": "Em relevo",
    "IMAGE_FILTER_GLOWING_SUN": "Sol brilhante",
    "IMAGE_SAVE_WITH_FILTERS": "Aplicar",
    "IMAGE_RESET_FILTERS": "Cancelar",
    "FONT_FILE": "Ficheiro de tipo de letra",
    "USE_FONT_INSTRUCTIONS": "Para utilizar este tipo de letra, copie e cole este código para o seu ficheiro CSS.",
    "FONT_TYPE_BOLD": "Negrito",
    "FONT_TYPE_ITALIC": "Itálico",
    "FONT_BOLD_HTML_TAG": "Coloque texto dentro de uma tag <code>&lt;strong&gt;&lt;/strong&gt;</code>.",
    "FONT_BOLD_CSS_RULE": "Adicione uma regra CSS <code>font-weight: bold;</code>.",
    "FONT_ITALIC_HTML_TAG": "Coloque texto dentro de uma tag <code>&lt;em&gt;&lt;/em&gt;</code>.",
    "FONT_ITALIC_CSS_RULE": "Adicione uma regra CSS <code>font-style: italic;</code>.",
    "VIDEO_FILE": "Ficheiro de vídeo",
    "VIDEO_OPTIONS": "Opções de vídeo",
    "VIDEO_CODE_SAMPLE": "Copie e cole este código para adicionar vídeo a uma página HTML",
    "VIDEO_OPTION_SHOW_CONTROLS": "Mostrar controlos de vídeo",
    "VIDEO_OPTION_AUTOPLAY": "Começar a reproduzir o vídeo automaticamente",
    "VIDEO_OPTION_LOOPING": "Reiniciar o vídeo quando acabar",
    "VIDEO_OPTION_DISABLE_AUDIO": "Desativar áudio",
    "AUDIO_FILE": "Ficheiro de áudio",
    "AUDIO_OPTIONS": "Opções de áudio",
    "AUDIO_OPTION_SHOW_CONTROLS": "Mostrar controlos de áudio (quando o reprodutor de áudio desativado estiver invisível)",
    "AUDIO_OPTION_AUTOPLAY": "Começar a reprodução do áudio automaticamente",
    "AUDIO_OPTION_LOOPING": "Reiniciar o áudio quando este terminar",
    "AUDIO_OPTION_DISABLE_AUDIO": "Iniciar o reprodutor de áudio sem som",
    "BINARY_FILE_TITLE": "Ficheiro não editável",
    "BINARY_FILE_CANNOT_EDIT": "O Thimble não tem a certeza de como editar este ficheiro!",
    "BINARY_FILE_OPTIONS_TITLE": "Mas você pode...",
    "BINARY_FILE_DOWNLOAD": "Descarregá-lo",
    "BINARY_FILE_OPEN": "Abri-lo em novo separador",
    "BINARY_FILE_TRY_EDIT": "Tentar editá-lo",
    "COLOR_EDITOR_CURRENT_COLOR_SWATCH_TIP": "Cor atual",
    "COLOR_EDITOR_ORIGINAL_COLOR_SWATCH_TIP": "Cor original",
    "COLOR_EDITOR_RGBA_BUTTON_TIP": "Formato RGBa",
    "COLOR_EDITOR_HEX_BUTTON_TIP": "Formato Hex",
    "COLOR_EDITOR_HSLA_BUTTON_TIP": "Formato HSLa",
    "COLOR_EDITOR_USED_COLOR_TIP_SINGULAR": "{0} (Utilizado {1} vez)",
    "COLOR_EDITOR_USED_COLOR_TIP_PLURAL": "{0} (Utilizado {1} vezes)",
    "CMD_JUMPTO_DEFINITION": "Saltar para a definição",
    "CMD_SHOW_PARAMETER_HINT": "Mostrar dica de parâmetros",
    "NO_ARGUMENTS": "<sem parâmetros>",
    "DETECTED_EXCLUSION_TITLE": "Problema de interface de ficheiros JavaScript",
    "CMD_ENABLE_QUICK_VIEW": "Vista rápida ao pairar",
    "DOCS_MORE_LINK": "Ler mais",
    "UPLOAD_FILES_DIALOG_HEADER": "Carregar ficheiros",
    "DRAG_AREA_UPLOAD_FILES_DIALOG_TEXT": "...ou arrastar ficheiros aqui.",
    "DROP_AREA_UPLOAD_FILES_DIALOG_TEXT": "OK, lance os ficheiros!",
    "UPLOADING_INDICATOR": "A carregar...",
    "BUTTON_FROM_YOUR_COMPUTER": "Do seu computador...",
    "TAKE_A_SELFIE": "Tirar uma selfie...",
    "CMD_MOVE_FILE": "Mover para...",
    "PROJECT_ROOT": "Raiz do projeto",
    "PICK_A_FOLDER_TO_MOVE_TO": "Escolher uma pasta",
    "ERROR_MOVING_FILE_DIALOG_HEADER": "Erro ao mover",
    "UNEXPECTED_ERROR_MOVING_FILE": "Um erro inesperado ocorreu ao tentar mover {0} para {1}",
    "ERROR_MOVING_FILE_SAME_NAME": "Um ficheiro ou pasta com o nome {0} já existe em {1}. Considere renomear qualquer um para continuar.",
    "CONSOLE_TITLE": "Consola",
    "CONSOLE_TOOLTIP": "Abrir a consola de JavaScript",
    "CONSOLE_CLEAR": "Limpar",
    "CONSOLE_CLEAR_TOOLTIP": "Limpar a consola",
    "CONSOLE_CLOSE_TOOLTIP": "Fechar a consola",
    "CONSOLE_EMPTY_STRING": "String vazia",
    "CONSOLE_HELPTEXT": "Para utilizar a consola, adicione <code>console.log(&quot;Olá Mundo!&quot;);</code> ao seu ficheiro JavaScript."
});
