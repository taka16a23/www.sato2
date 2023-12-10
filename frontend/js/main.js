//pagetop
$(function() {
    var scroll = $('.pagetop');
    var scrollShow = $('.pagetop-show');
        $(scroll).hide();
        $(window).scroll(function() {
            if($(this).scrollTop() >= 300) {
                $(scroll).fadeIn().addClass(scrollShow);
            } else {
                $(scroll).fadeOut().removeClass(scrollShow);
            }
        });
});

// menu
$(window).on("load resize", function() {
  setTimeout(function(){

    var winW = window.innerWidth;
    var winBP = 1024;	//ブレイクポイント

      //小さな端末用
      if(winW < winBP) {
        $('body').addClass('s').removeClass('p');
        $('#menubar').addClass('dn').removeClass('db');
        $('#menubar_hdr').addClass('db').removeClass('dn').removeClass('ham');

      //大きな端末用
      } else {
        $('body').addClass('p').removeClass('s');
        $('#menubar').addClass('db').removeClass('dn');
        $('#menubar_hdr').removeClass('db').addClass('dn');
      }

  }, 100);
});


//ハンバーガーメニューをクリックした際の処理
$(function() {
  $('#menubar_hdr').click(function() {
    $(this).toggleClass('ham');

      if($(this).hasClass('ham')) {
        $('#menubar').addClass('db').removeClass('dn');
      } else {
        $('#menubar').addClass('dn').removeClass('db');
      }

  });
});


// 同一ページへのリンクの場合に開閉メニューを閉じる処理
$(function() {
  $('#menubar a[href^="#"]').click(function() {
    $('#menubar').removeClass('db');
    $('#menubar_hdr').removeClass('ham');
  });
});



//ドロップダウンの親liタグ
$(function() {
    $('#mainmenu a[href=""]').click(function() {
    return false;
    });
});


//ドロップダウンメニューの処理
$(function(){

  // $('#menubar li:has(ul)').addClass('ddmenu_parent');
  // $('#mainmenu li:has(ul)').addClass('ddmenu_parent');
  // $('.ddmenu_parent > a').addClass('ddmenu');

    //タッチデバイス用
    // $('.ddmenu').on('touchstart', function() {
    //   $(this).next('ul').stop().slideToggle();
    //   $('.ddmenu').not(this).next('ul').slideUp();
    //   return false;
    // });

    // //PC用
    // $('.ddmenu_parent').hover(function() {
    //   $(this).children('ul').stop().slideToggle();
    // });

});
