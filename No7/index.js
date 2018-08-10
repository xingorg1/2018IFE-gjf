// 通过 jQuery 判断输入框是否有内容
function onBlur(box){
  $(box).on('focus',function(){
    $(this).parents('.form__wrapper').addClass('form__wrapper__line');
    $(this).parents('.form__wrapper').removeClass('form__wrapper__ani');
  });
  $(box).on('blur',function(){
    if($(this).val().length > 0){
      $(this).next('.form__label').addClass('form__label__top')
    }else{
      $(this).next('.form__label').removeClass('form__label__top')
    }
    if($("#email").val().length > 0 && $("#password").val().length > 0){
      $('.btn').addClass('ani');
    }else{
      $('.btn').removeClass('ani');
    }
    $(this).parents('.form__wrapper').removeClass('form__wrapper__line');
    $(this).parents('.form__wrapper').addClass('form__wrapper__ani');
  });
  
}
onBlur("#email");
onBlur("#password");