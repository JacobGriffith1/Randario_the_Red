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

$(document).ready(function() {
    function fetchRandomFact() {
        $.ajax({
            url: 'https://aphorismcookie.herokuapp.com',
            method: 'GET',
            success: function(data) {
                var fact = data.text;
                $('.crystal_quote').text(fact);
                console.log('quote changed!');
            },
            error: function() {
                $('.crystal_quote').text('Future unclear!');
                console.log('error!');
            }
        });
    }

    $('.crystal_image').on('click', function() {
        console.log('crystal clicked!');
        fetchRandomFact();
    });
});

$(document).ready(function() {
    function fetchRandomFact() {
        $.ajax({
            url: 'https://icanhazdadjoke.com/',
            method: 'GET',
            success: function(data) {
                var fact = data.text;
                $('.dad_quote').text(fact);
                console.log('quote changed!');
            },
            error: function() {
                $('.dad_quote').text('You aren't holding the flashlight!');
                console.log('error!');
            }
        });
    }

    $('.dad_image').on('click', function() {
        console.log('dad clicked!');
        fetchRandomFact();
    });
});

$(document).ready(function() {
    function fetchRandomFact() {
        $.ajax({
            url: 'https://love-quote.p.rapidapi.com/lovequote',
            method: 'GET',
            success: function(data) {
                var fact = data.text;
                $('.frog_quote').text(fact);
                console.log('quote changed!');
            },
            error: function() {
                $('.frog_quote').text('Kiss a frog to find your prince!');
                console.log('error!');
            }
        });
    }

    $('.frog_image').on('click', function() {
        console.log('frog clicked!');
        fetchRandomFact();
    });
});
