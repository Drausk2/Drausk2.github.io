$(document).ready(function() {
    var dictionary = {
        'top100': {
            'de': 'Wähle aus den top 100 verwendeten Memes',
            'en': 'Select from the top 100 memes frequently used',
            'es': 'Selecciona entre los 100 memes más utilizados',
            'fr': 'Choisissez parmi les 100 mèmes les plus utilisés',
            'it': 'Seleziona tra i 100 meme più utilizzati',
            'pt': 'Escolha entre os 100 memes mais utilizados',
            'ru': 'Выберите из 100 наиболее часто используемых мемов',
            'zh': '从前100个最常使用的表情符号中选择',
        },
        'or': {
            'de': 'oder',
            'en': 'or',
            'es': 'o',
            'fr': 'ou',
            'it': 'o',
            'pt': 'ou',
            'ru': 'или',
            'zh': '或',
        },
        'files1': {
            'de': 'Ziehe ein Bild hierher, oder',
            'en': 'Drag and drop a image here, or',
            'es': 'Arrastra una imagen aquí, o',
            'fr': 'Faites glisser une image ici, ou',
            'it': 'Trascina un\'immagine qui, o',
            'pt': 'Arraste uma imagem aqui, ou',
            'ru': 'Перетащите изображение сюда, или',
            'zh': '将图片拖到这里，或',
        },
        'files2': {
            'de': 'durchsuchen',
            'en': 'browse',
            'es': 'buscar',
            'fr': 'parcourir',
            'it': 'sfogliare',
            'pt': 'procurar',
            'ru': 'просмотреть',
            'zh': '浏览',
        }, 
        'files3': {
            'de': 'den Computer.',
            'en': 'your computer.',
            'es': 'tu computadora.',
            'fr': 'votre ordinateur.',
            'it': 'il tuo computer.',
            'pt': 'o computador.',
            'ru': 'ваш компьютер.',
            'zh': '您的计算机。',
        },
        'gen-back': {
            'de': 'Zurück',
            'en': 'Back',
            'es': 'Atrás',
            'fr': 'Retour',
            'it': 'Indietro',
            'pt': 'Voltar',
            'ru': 'Назад',
            'zh': '返回',
        },
        'gen-scale': {
            'de': 'Größe:',
            'en': 'Scale:',
            'es': 'Escala:',
            'fr': 'Échelle:',
            'it': 'Scala:',
            'pt': 'Escala:',
            'ru': 'Масштаб:',
            'zh': '比例:',
        },
        'gen-text': {
            'de': 'Text:',
            'en': 'Text:',
            'es': 'Texto:',
            'fr': 'Texte:',
            'it': 'Testo:',
            'pt': 'Texto:',
            'ru': 'Текст:',
            'zh': '文字:',
        },
        'gen-font-family': {
            'de': 'Schriftart:',
            'en': 'Font Familie:',
            'es': 'Familia de fuentes:',
            'fr': 'Famille de polices:',
            'it': 'Famiglia di caratteri:',
            'pt': 'Família de fontes:',
            'ru': 'Семейство шрифтов:',
            'zh': '字体家族:',
        },
        'gen-font-size': {
            'de': 'Schriftgröße:',
            'en': 'Font Size:',
            'es': 'Tamaño de fuente:',
            'fr': 'Taille de la police:',
            'it': 'Dimensione del carattere:',
            'pt': 'Tamanho da fonte:',
            'ru': 'Размер шрифта:',
            'zh': '字体大小:',
        },
        'gen-style': {
            'de': 'Stil:',
            'en': 'Style:',
            'es': 'Estilo:',
            'fr': 'Style:',
            'it': 'Stile:',
            'pt': 'Estilo:',
            'ru': 'Стиль:',
            'zh': '风格:',
        },
        'gen-alignment': {
            'de': 'Text Ausrichtung:',
            'en': 'Text Alignment:',
            'es': 'Alineación de texto:',
            'fr': 'Alignement du texte:',
            'it': 'Allineamento del testo:',
            'pt': 'Alinhamento do texto:',
            'ru': 'Выравнивание текста:',
            'zh': '文字对齐:',
        },
        'gen-stroke': {
            'de': 'Strichstärke:',
            'en': 'Stroke:',
            'es': 'Grosor del trazo:',
            'fr': 'Épaisseur du trait:',
            'it': 'Spessore del tratto:',
            'pt': 'Espessura do traço:',
            'ru': 'Толщина штриха:',
            'zh': '笔触宽度:',
        },
        'gen-shadow': {
            'de': 'Schatten:',
            'en': 'Shadow:',
            'es': 'Sombra:',
            'fr': 'Ombre:',
            'it': 'Ombra:',
            'pt': 'Sombra:',
            'ru': 'Тень:',
            'zh': '阴影:',
        },
        'gen-background-color': {
            'de': 'Hintergrund:',
            'en': 'BG Color:',
            'es': 'Color de fondo:',
            'fr': 'Couleur de fond:',
            'it': 'Colore di sfondo:',
            'pt': 'Cor de fundo:',
            'ru': 'Фоновый цвет:',
            'zh': '背景颜色:',
        },
        'gen-opacity': {
            'de': 'Deckkraft:',
            'en': 'Opacity:',
            'es': 'Opacidad:',
            'fr': 'Opacité:',
            'it': 'Opacità:',
            'pt': 'Opacidade:',
            'ru': 'Непрозрачность:',
            'zh': '透明度:',
        },
        'gen-add-text': {
            'de': 'Text hinzufügen',
            'en': 'Add Text',
            'es': 'Agregar texto',
            'fr': 'Ajouter du texte',
            'it': 'Aggiungi testo',
            'pt': 'Adicionar texto',
            'ru': 'Добавить текст',
            'zh': '添加文字',
        },
        'gen-add-image': {
            'de': 'Bild hinzufügen',
            'en': 'Add Image',
            'es': 'Agregar imagen',
            'fr': 'Ajouter une image',
            'it': 'Aggiungi immagine',
            'pt': 'Adicionar imagem',
            'ru': 'Добавить изображение',
            'zh': '添加图片',
        },
        'gen-generate-meme': {
            'de': 'Meme Generieren',
            'en': 'Generate Meme',
            'es': 'Generar meme',
            'fr': 'Générer un mème',
            'it': 'Genera meme',
            'pt': 'Gerar meme',
            'ru': 'Сгенерировать мем',
            'zh': '生成表情包',
        },
        'gen-textbox': {
            'de': 'Meme Generieren',
            'en': 'Generate Meme',
            'es': 'Generar meme',
            'fr': 'Générer un mème',
            'it': 'Genera meme',
            'pt': 'Gerar meme',
            'ru': 'Сгенерировать мем',
            'zh': '生成表情包',
        }
    };
var langs = ['en', 'de','es', 'fr', 'it', 'pt', 'ru', 'zh'];
var langnum = '8';
var current_lang_index = 0;
var current_lang = langs[current_lang_index];

window.change_lang = function() {
    current_lang_index = ++current_lang_index % langnum;
    current_lang = langs[current_lang_index];
    translate();
}

function translate() {
    $("[data-translate]").each(function(){
        var key = $(this).data('translate');
        $(this).html(dictionary[key][current_lang] || "N/A");
    });

    // Save the current language to local storage
    localStorage.setItem('current_lang', current_lang);
}

// Check if there is a stored language in local storage
if (localStorage.getItem('current_lang')) {
    current_lang = localStorage.getItem('current_lang');
}

// Call the translate function to translate the text
translate();
});

