$(document).ready(function() {
    function fetchRandomFact() {
        $.ajax({
            url: 'https://uselessfacts.jsph.pl/api/v2/facts/random',
            method: 'GET',
            success: function(data) {
                var fact = data.text;
                $('.wizard_quote').text(fact);
                console.log('quote changed!');
            },
            error: function() {
                $('.wizard_quote').text('Oops! Something went wrong!');
                console.log('error!');
            }
        });
    }

    $('.wizard_image').on('click', function() {
        console.log('wizard clicked!');
        fetchRandomFact();
    });
});
