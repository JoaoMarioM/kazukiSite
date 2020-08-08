$(function(){
    
    $('.toggle1').click(function(){
        $('.menu_responsivo').addClass('ativo')
        $('.toggle1').addClass('ativo')
    })

    $('.back').click(function(){
        $('.menu_responsivo').removeClass('ativo')
        $('.toggle1').removeClass('ativo')
    })
})