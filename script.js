// BACK TO TOP 
window.onload = function() {
    let backToTop = document.querySelector(".back-to-top");

    // Thêm lớp 'no-transition' để vô hiệu hóa chuyển đổi khi tải lại trang
    backToTop.classList.add('no-transition');

    // Kiểm tra vị trí cuộn trang khi tải lại
    if (document.documentElement.scrollTop > 100) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }
    //Xóa lớp 'no-transition' sau khi kiểm tra vị trí cuộn
    setTimeout(function() {
        backToTop.classList.remove('no-transition');
    }, 0);

    window.onscroll = function() {
        if (document.documentElement.scrollTop > 100) {
            backToTop.classList.add("active");
        } else {
            backToTop.classList.remove("active");
        }
    }
}
