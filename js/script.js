// BACK TO TOP 
window.onload = function() {
    let backToTop = document.querySelector(".back-to-top");
     
    // Kiểm tra vị trí cuộn trang khi tải lại
    if (document.documentElement.scrollTop > 100) {
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }

    window.onscroll = function() {
        if (document.documentElement.scrollTop > 100) {
            backToTop.classList.add("active");
        } else {
            backToTop.classList.remove("active");
        }
    }

     // Thêm sự kiện click để cuộn lên đầu trang với hiệu ứng mượt mà
     backToTop.onclick = function(event) {
        event.preventDefault(); // Ngăn chặn hành vi mặc định của liên kết nếu có

        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Thêm hiệu ứng cuộn mượt mà
        });
    }
}