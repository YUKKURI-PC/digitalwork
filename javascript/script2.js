			$(function () {
  $('.ac-parent').on('click', function () {
    $(this).next().slideToggle();
    //openクラスをつける
    $(this).toggleClass("open");
    //クリックされていないac-parentのopenクラスを取る
    $('.ac-parent').not(this).removeClass('open');

    // 一つ開くと他は閉じるように
    $('.ac-parent').not($(this)).next('.ac-child').slideUp();
  });
});