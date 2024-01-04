$(function () {
    // Event: Choice meme from top 100
    $('.memes-container').delegate('img', 'click', function () {
        var $img = $(this);
        var imgInfo = {
            url: $img.attr('src'),
            height: $img.attr('img-height'),
            width: $img.attr('img-width'),
        };

        $('.choice-section').trigger('choice-done', imgInfo);
    });

    // Event: Upload local image
    $('#meme-input').on('change', function () {
        handleImageUpload(this.files[0]);
    });

        // Event: Handle dropped image
    $(document).on('drop', function (e) {
        e.preventDefault();
        //hideDropPopup(); // hide Popup
        handleImageUpload(e.originalEvent.dataTransfer.files[0]);
    });

    // Prevent default behavior for drag-and-drop
    $(document).on('dragover dragenter', function (e) {
        e.preventDefault();
        //showDropPopup(); // show Popup
    });

    // Event: Handle drag leave
    $(document).on('dragleave', function (e) {
        e.preventDefault();
       // hideDropPopup(); // hide Popup
    });

    // ...

    function showDropPopup() {
      $('.drop-popup').show();
    }

    function hideDropPopup() {
        $('.drop-popup').hide();
    }

    // Event: Choice was made
    $('.choice-section').on('choice-done', function (e, imgInfo) {
        $('.description').fadeOut();
        $('.choice-section').fadeOut('normal', function () {
            $('.edit-section').removeClass('d-none').hide().fadeIn();
            $('.fabric-canvas-wrapper').append(`<canvas id="meme-canvas"></canvas>`);
            processMeme(imgInfo);
        });
    });

    // Event: Back button click
    $('.back-btn .btn').on('click', function () {
        $('.edit-section').fadeOut('normal', function () {
            $('.canvas-container').remove();
            $('.choice-section').fadeIn();
            $('.description').fadeIn();
            enableTextMethods();
        });
    });

    function handleImageUpload(file) {
        const fileType = file['type'];

        // Reset file input
        $('#meme-input').val('');

        // Validate this is an image
        if (!isImage(fileType)) {
            showAlert('Error! Invalid Image');
            return;
        }

        const reader = new FileReader();
        reader.onload = function () {
            var meme = new Image();
            meme.src = reader.result;
            meme.onload = function () {
                var imgInfo = {
                    url: reader.result,
                    height: meme.height,
                    width: meme.width,
                };
                $('.choice-section').trigger('choice-done', imgInfo);
            };
        };
        reader.readAsDataURL(file);
    }
});
