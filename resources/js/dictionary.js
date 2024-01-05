var dictionary = {
    'top100': {
        'de': 'Wähle aus den top 100 verwendeten Memes',
        'en': 'Select from the top 100 memes frequently used',
    },
    'or': {
        'de': 'oder',
        'en': 'or',
    },
    'files1': {
        'de': 'Ziehe ein Bild hierher, oder',
        'en': 'Drag and drop a image here, or',
    },
    'files2': {
        'de': 'durchsuchen',
        'en': 'browse',
    }, 
    'files3': {
        'de': 'den Computer.',
        'en': 'your computer.',
    },    
};
var langs = ['de', 'en'];
var langnum = '2';
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

translate();
