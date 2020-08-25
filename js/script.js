$(function () {
    var nua = navigator.userAgent
    var isAndroid = (nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1)
    if (isAndroid) {
        $('select.form-control').removeClass('form-control').css('width', '100%')
    }
    })

function page(b){
    $('.all').hide()
    $('#'+b).show()
}

const a = window.location.search
const Param = new URLSearchParams(a)
let data = Param.get('page')
if (data != undefined) {
    console.log()
    $('#retour').attr('href', data + '.html')
}