var back = $('header .back'),
    backs = $('header .back li'),
    n = backs.length,
    btn = $('header .btn span'),
    btnsl = $('header .btns .left'),
    btnsr = $('header .btns .right'),
    index = 0,
    timer = null;
//定时器

timer = setInterval(() => {
    index++;
    show(index % n)
}, 4000)

// 下方按钮
btn.on('click', function () {
    let a = $(this).index();
    index = a;
    show(index % n);
})
function show(i) {
    backs.removeClass('move');
    backs.eq(i).addClass('move');
    btn.removeClass('fff');
    btn.eq(i).addClass('fff');
}

// 左右按钮
btnsl.click(() => {
    index--;
    if (index < 0) index = backs.length - 1;
    show(index)
})
btnsr.click(() => {
    index++;
    if (index > backs.length - 1) index = 0;
    show(index)
})

//触屏停止轮播
$('header').hover(function () {
    clearInterval(timer)
}, function () {
    timer = setInterval(() => {
        index++;
        show(index % n)
    }, 4000)
})

//nav 效果
$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 100) {
            $('header nav').css({ "background": "rgba(0,0,0,.4)", "top": 0 });
        }
        else if ($(window).scrollTop() <= 100) {
            $('header nav').css({ "background": "none", "top": 80 });
        }
    })
})
