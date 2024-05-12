searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
}


let loginForm = document.querySelector('.login-form-container');
document.querySelector('#login-btn').onclick = () => {
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () => {
    loginForm.classList.remove('active');
}



window.onscroll = () => {
    searchForm.classList.remove('active');
    if (window.screenY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}

window.onload = () => {
    if (window.screenY > 80) {
        document.querySelector('.header .header-2').classList.add('active');
    }
    else {
        document.querySelector('.header .header-2').classList.remove('active');
    }
}





var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        450: {
            slidesPerView: 2,
            // spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
        1024: {
            slidesPerView: 4,
            // spaceBetween: 50,
        },
    },
});




var swiper = new Swiper(".arrivals-slider", {
    spaceBetween: 10,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        450: {
            slidesPerView: 2,
            // spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
        1024: {
            slidesPerView: 4,
            // spaceBetween: 50,
        },
    },
});



var swiper = new Swiper(".reviews-slider", {
    grabCursor: true,
    spaceBetween: 10,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            // spaceBetween: 20,
        },
        450: {
            slidesPerView: 2,
            // spaceBetween: 40,
        },
        768: {
            slidesPerView: 3,
            // spaceBetween: 50,
        },
        1024: {
            slidesPerView: 4,
            // spaceBetween: 50,
        },
    },
});



let buynow = document.getElementById('buy-now').onclick = () => {
    document.querySelector("#shiping-details").style.left = '0%';
};
let closepage = document.getElementById('close-items-btn').onclick = () => {
    document.querySelector("#shiping-details").style.left = '-110%';
};


let bookBox = document.getElementById("bookDiv");
console.log(bookBox);
let bookkk = document.getElementById("bookName").innerText;
console.log(bookkk);


console.log("Hello");

let arr = [];
arr.push("{{ url_for('static', filename='images/Image 6.jpg') }}");

let bookImg = document.getElementsByClassName("book-image");
console.log(bookImg);
bookImg.setAttribute("src",`${arr[0]}`);