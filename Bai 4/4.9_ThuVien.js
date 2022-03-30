
function trim(str) {
    if (!str) return
    return str.toString().trim();
}


function ten_thu(day) {
    console.log(day);
    if (!day) return

    const currentDate = new Date(day);

    var strArray = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'];

    var dayOfMonth = strArray[parseInt(currentDate.getDay())];

    return dayOfMonth;
}


function ten_thang(day) {

    if (!day) return;

    const currentDate = new Date(day);

    var month = currentDate.getMonth() + 1;

    return `Tháng ${month}`
}


function la_so(so) {
    if (!so) return;

    if (typeof so == Number) return true
    return false;
}


function lam_tron(so, thap_phan) {

    if (!so && !thap_phan) return;

    return so.toFixed(thap_phan);

}


function dinh_dang_so(nso, nthap_phan = 0, bngoac_don = false, bdau_phay = ',', sdon_vi = "VND") {
    var amount = nso.toFixed(nthap_phan).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    if (bngoac_don) {
        return (amount) + sdon_vi
    }
    return amount + ' ' + sdon_vi;
}