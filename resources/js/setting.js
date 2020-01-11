let avatar_field = $('.avatar-field');

avatar_field.addEventListener('change', function() {
    var reader = new FileReader();

    reader.onload = function(e) {
        $('#avatar').style.backgroundImage = 'url(' + e.target.result + ')';
    }

    reader.readAsDataURL(this.files[0]);
});
