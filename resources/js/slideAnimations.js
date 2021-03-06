function charityAnimate(full, d, speed, thisCharity) {
  // $('.charity>img').on('click', function() {

    console.log(thisCharity[0]);
    if(!full) {
      console.log('hidden');
      $('.charity').each(function() {
        if($(this)[0] !== thisCharity[0]){
          $(this).hide();
        }
      });
      d.height = "80vh";
      d.width = "80vw";
      thisCharity.animate(d, speed, function(){

      });
      full=true;
    } else {
      d.width = "300px";
      d.height = "300px";
      thisCharity.css("position","");
      thisCharity.animate(d, speed, function() {
        $('.charity').each(function() {
          if($(this)[0] !== thisCharity[0]) {
            $(this).fadeIn('fast');
          }
        });
      });
      full = false;
    }
    $('.viewCards').click(function() {
      $('.cards').animate({
        left: '0'
      }, 500);
      $('.charity-list').animate({
        left: '200%'
      }, 500);
      $('.home').css("left", "200%");
    });

    $('.viewCharities').on('click', function() {
        d.width = "300px";
        d.height = "300px";
        $('.charity').css("height", "300px");
        $(this).parent().css("position","");
        $(this).parent().animate(d, speed, function() {
          $('.charity').each(function() {
            if($(this)[0] !== thisCharity[0]) {
              $(this).fadeIn('fast');
            }
          });
        });
        full = false;
    });
    return full;
  // });
}

$(function() {
  setTimeout(function() {
    var charityFull = false;
    var imageFull = false;
    var d = {};
    var speed = 500;
    $('.homeNewCharitySlide').click(function() {
      $('.charity-list').animate({
        left: '0'
      }, 500);
      $('.home').animate({
        left: '-200%'
      }, 500);
    });
    $('.homeCardsSlide').click(function() {
      $('.cards').animate({
        left: '0'
      }, 500);
      $('.home').animate({
        left: '200%'
      }, 500);
    });
    // REPEATED IN ORDER TO TARGET BY ID - ASK TYLER
    $('#homeCardsSlide').click(function() {
      $('.cards').animate({
        left: '0'
      }, 500);
      $('.home').animate({
        left: '200%'
      }, 500);
    });
    $('.homeSlide').click(function() {
      var time;
      if ($('.home').css('display') === 'none') {
        time = 50;
      } else {
        time = 500;
      }
      $('.charity-list').animate({
        left: '200%'
      }, time);
      $('.home').animate({
        left: '0'
      }, time);
      $('.cards').animate({
        left: '-200%'
      }, time);
      $('.home').fadeIn();
      $('.charity-list').fadeIn();
      $('.cards').fadeIn();
      $('.cart').fadeOut();
      $('.apply').fadeOut();
      $('.contact').fadeOut();
    });
    $('.listNewCharitySlide').click(function() {
      $('.charity-list').animate({
        left: '200%'
      }, 500);
      $('.newCharity').animate({
        left: '0'
      }, 500);
    });
    $('.newCharityListSlide').click(function() {
      $('.charity-list').animate({
        left: '0'
      }, 500);
      $('.newCharity').animate({
        left: '200%'
      }, 500);
    });
    $('.homeCartShow').click(function() {
      $('.cart').fadeIn(500);
      $('.home').fadeOut();
      $('.charity-list').fadeOut();
      $('.cards').fadeOut();
      $('.apply').fadeOut();
      $('.contact').fadeOut();
      $('.homeSlide').click(function() {
        console.log('it sort of works');
        setTimeout(function() {
          $('.charity>img').on('click', function() {
            console.log('it works');
            var thisCharity = $(this).parent();
            charityFull = charityAnimate(charityFull, d, speed, thisCharity);
          });
        }, 1000);
      });
    });
    $('.contactFade').click(function() {
      $('.contact').fadeIn(500);
      $('.home').fadeOut();
      $('.charity-list').fadeOut();
      $('.cards').fadeOut();
      $('.cart').fadeOut();
      $('.apply').fadeOut();
    });
    $('.adminFade').click(function() {
      $('.apply').fadeIn(500);
      $('.home').fadeOut();
      $('.charity-list').fadeOut();
      $('.cards').fadeOut();
      $('.cart').fadeOut();
      $('.contact').fadeOut();
      $('.homeSlide').click(function() {
        $('.charity>img').on('click', function() {
          var thisCharity = $(this).parent();
          charityFull = charityAnimate(charityFull, d, speed, thisCharity);
        });
      });
    });
    $('.charity>img').on('click', function() {
      console.log('it works');
      var thisCharity = $(this).parent();
      charityFull = charityAnimate(charityFull, d, speed, thisCharity);
    });
    $('.picture>img').on('click', function() {
      var thisPic = $(this).parent();
      console.log($(thisPic)[0]);
      if(!imageFull) {
        $('.picture').each(function() {
          if($(this)[0] !== $(thisPic)[0]){
            $(this).hide();
          }
        });
        d.height = "80vh";
        d.width = "80vw";
        $(this).parent().animate(d, speed, function(){

        });
        imageFull=true;
      } else {
        d.width = "300px";
        d.height = "300px";
        $(this).parent().css("position","");
        $(this).parent().animate(d, speed, function() {
          $('.picture').each(function() {
            if($(this)[0] !== $(thisPic)[0]) {
              $(this).fadeIn('fast');
            }
          });
        });
        imageFull = false;
      }
      $('.returnToCards').on('click', function() {
          d.width = "300px";
          d.height = "300px";
          $('.picture').css("height", "auto");
          $(this).parent().css("position","");
          $(this).parent().animate(d, speed, function() {
            $('.picture').each(function() {
              if($(this)[0] !== $(thisPic)[0]) {
                $(this).fadeIn('fast');
              }
            });
          });
          imageFull = false;
      });
    });
  }, 3000);
});
