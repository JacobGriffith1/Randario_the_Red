$(document).ready(function() { 
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    //-- Wizard Facts --
    async function fetchRandomFact() {
        $.ajax({
            url: 'https://uselessfacts.jsph.pl/api/v2/facts/random',
            method: 'GET',
            success: function(data) {
                var fact = data.text;
                $('.wizard_quote').text(fact);
                $('.wizard_image img').attr('src', '/images/wizardHappy.png');
                setTimeout(function (){
                    $('.wizard_image img').attr('src', '/images/wizardNeutral.png');
                }, 1000);
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

    //-- Crystal Fortune --
    function fetchRandomFortune() {
        $.ajax({
            url: 'https://aphorismcookie.herokuapp.com',
            method: 'GET',
            success: function(data) {
                var fact = `"${data.data.message}"`;
                $('.wizard_quote').text(fact);
                $('.wizard_image img').attr('src', '/images/Wizard Painted Ball.png');
                $('.crystal_ball img').hide();
                setTimeout(function (){
                    $('.wizard_image img').attr('src', '/images/wizardNeutral.png');
                  }, 3000);
                setTimeout(function (){
                    $('.crystal_ball img').show();
                }, 3000);
                
                console.log('quote changed!');
            },
            error: function() {
                $('.crystal_quote').text('Future unclear!');
                console.log('error!');
            }
        });
    }

    $('.crystal_ball').on('click', function() {
        console.log('crystal clicked!');
        fetchRandomFortune();
    });

    //-- Dad Jokes --
    function fetchRandomJoke() {
        $.ajax({
            url: 'https://icanhazdadjoke.com/',
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            success: function(data) {
                var fact = data.joke;
                $('.dad_joke').text(fact);
                console.log('quote changed!');
                console.log(fact);
                setTimeout(function (){
                    $('.jeff img').attr('src', '/images/fireball01.png');
                }, 400);
                setTimeout(function (){
                    $('.jeff img').attr('src', '/images/fireball02.png');
                }, 500);
                setTimeout(function (){
                    $('.jeff img').attr('src', '/images/fireball00.png');
                }, 3000);
                
            },
            error: function() {
                $('.dad_joke').text('You aren’t holding the flashlight!');
                console.log('error!');
            }
        });
    }

    $('.jeff').on('click', function() {
        console.log('jeff clicked!');
        fetchRandomJoke();
    });

    //-- Frog Love Advice --
    function fetchRandomAdvice() {
        $.ajax({
            url: 'https://love-quote.p.rapidapi.com/lovequote',
            method: 'GET',
            headers: {
                'x-rapidapi-key': '4d5d94ef5emsh5d6e48794116cfcp196244jsn3e9735c2b05d',
                'x-rapidapi-host': 'love-quote.p.rapidapi.com'
            },
            success: function(data) {
                var fact = data.quote;
                $('.frog_quote').text(fact);
                setTimeout(function (){
                    $('.frog_image img').attr('src', '/images/frog01.png');
                }, 400);
                setTimeout(function (){
                    $('.frog_image img').attr('src', '/images/frog02.png');
                }, 400);
                setTimeout(function (){
                    $('.frog_image img').attr('src', '/images/frog03.png');
                }, 600);
                setTimeout(function (){
                    $('.frog_image img').attr('src', '/images/frog00.png');
                }, 800);
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
        fetchRandomAdvice();
    });
});
