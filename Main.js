const library_img = {
    Principal: [
        "./Public/Principal_img_bg/adam-thomas-bC6M3pYG71g-unsplash.jpg",
        "./Public/Principal_img_bg/alexander-kaunas-xEaAoizNFV8-unsplash.jpg",
        "./Public/Principal_img_bg/avi-werde-HI4nq3HjImU-unsplash.jpg",
        "./Public/Principal_img_bg/charlesdeluvio-_Ydq_vVF8Ew-unsplash.jpg",
        "./Public/Principal_img_bg/chris-norberg-EIagl5ns4oE-unsplash.jpg",
        "./Public/Principal_img_bg/cody-board-Q3FvrfeDEwI-unsplash.jpg",
        "./Public/Principal_img_bg/glauber-sampaio-3vv1A8zNG9A-unsplash.jpg",
        "./Public/Principal_img_bg/jean-philippe-delberghe-90eBoEp2tS0-unsplash.jpg",
        "./Public/Principal_img_bg/jean-philippe-delberghe-mvwqjQwPb0k-unsplash.jpg",
        "./Public/Principal_img_bg/john-fornander-Id7u0EkTjBE-unsplash.jpg",
        "./Public/Principal_img_bg/john-fornander-y3_AHHrxUBY-unsplash.jpg",
        "./Public/Principal_img_bg/josh-g-1Aie4fPE8qM-unsplash.jpg",
        "./Public/Principal_img_bg/mark-s-D3cC-j2-pP4-unsplash.jpg",
        "./Public/Principal_img_bg/matin-keivanloo-50IeEWQfST0-unsplash.jpg",
        "./Public/Principal_img_bg/max-harlynking-kAbOlQRY78s-unsplash.jpg",
        "./Public/Principal_img_bg/mimi-di-cianni-swRx6JNNJh8-unsplash.jpg",
        "./Public/Principal_img_bg/nichlas-andersen-ZFXrgzHu1KU-unsplash.jpg",
        "./Public/Principal_img_bg/paulo-almeida-157NwUNEdxQ-unsplash.jpg",
        "./Public/Principal_img_bg/r-architecture-uFQOmuz8JVY-unsplash.jpg",
        "./Public/Principal_img_bg/ralph-ravi-kayden-2d4lAQAlbDA-unsplash.jpg",
        "./Public/Principal_img_bg/robert-bye-3iSbDwNWnjo-unsplash.jpg",
        "./Public/Principal_img_bg/ryan-parker-ucnZANGmyxM-unsplash.jpg",
        "./Public/Principal_img_bg/stephen-tasker-RdX86jJQ9p8-unsplash.jpg",
        "./Public/Principal_img_bg/sven-read-1TAM-xEwQrs-unsplash.jpg",
        "./Public/Principal_img_bg/warion-taipei-8QIAj5tHDdc-unsplash.jpg",
        "./Public/Principal_img_bg/xie-yujie-nick-etFRTql2qpM-unsplash.jpg"
    ],
    Cards: [
        "./Public/card_bg/daniel-klaffke-RwOmCOGPUJA-unsplash.jpg",
        "./Public/card_bg/gina-canavan-Tf9QSkwujnA-unsplash.jpg",
        "./Public/card_bg/jon-tyson-eBN71NgyPU8-unsplash.jpg",
        "./Public/card_bg/jura-FegOaqn_4GQ-unsplash.jpg",
        "./Public/card_bg/mohamed-masaau-nfF5-G6cFwY-unsplash.jpg",
        "./Public/card_bg/phil-korn-gi9fNAFy-P0-unsplash.jpg",
        "./Public/card_bg/roberto-nickson-Yp9FdEqaCdk-unsplash.jpg",
        "./Public/card_bg/valdemaras-januska-XTFT78-FZeM-unsplash.jpg"
    ]
}
let counter_change_img = 0
let counter_change_img_bg = 0
let contact_visible = false
let hamburger_visible = false

function read_json() {
    const target = document.querySelector('.bg_img')

    const loop = (res) => {
        const list = document.querySelectorAll('.img_bg')
        let index = 0
        setInterval(() => {
            if (index === 0) {
                list[list.length - 1].classList.add('hide')
                list[list.length - 1].classList.remove('show')
            }
            list[index].classList.add('hide')
            list[index].classList.remove('show')
            index += 1
            list[index].classList.remove('hide')
            list[index].classList.add('show')
            //console.log(index)
            if (index === res.length) index = 0
        }, 4000);
    }

    fetch('./Imgs.json')
        .then(res => res.json())
        .then(res => {
            const Imgs = res.Principal
            Imgs.forEach((element, index) => {
                target.innerHTML += `<img class="img_bg hide" src="${element}" alt="">`
                if (index === Imgs.length - 1) loop(Imgs)
            })
        })
}
function swiper_cards() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        keyboard: {
            enabled: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    })
}
function change_img() {
    counter_change_img += 1
    if (counter_change_img === library_img.Cards.length) counter_change_img = 0
    const bg_img = document.querySelector('.swiper')
    const random_img = library_img.Cards[counter_change_img]
    bg_img.style = `background-image: url(${random_img})`
}
function contact() {
    const contact_form = document.querySelector('#form')
    if (!contact_visible) {
        contact_form.classList.remove('hide')
        contact_form.classList.add('show')
        contact_visible = true
    }
    else {
        contact_form.classList.remove('show')
        contact_form.classList.add('hide')
        contact_visible = false
    }
}
function hamburger() {
    const contact_form = document.querySelector('#hamburger')
    if (!hamburger_visible) {
        contact_form.classList.remove('hide')
        contact_form.classList.add('show')
        hamburger_visible = true
    }
    else {
        contact_form.classList.remove('show')
        contact_form.classList.add('hide')
        hamburger_visible = false
    }
}
function redir(link) {
    window.open(link, '_blank')
}
function change_bg() {
    setInterval(() => {
        const img_bg = document.querySelector('.img_bg')
        img_bg.classList.add('hide_slow')
        setTimeout(() => {
            img_bg.src = library_img.Principal[counter_change_img_bg]
        }, 250);
        setTimeout(() => {
            img_bg.classList.remove('hide_slow')
        }, 500);
        counter_change_img_bg += 1
        if (counter_change_img_bg === library_img.Principal.length) counter_change_img_bg = 0
    }, 5000);
}
const start = () =>{
    change_bg()
    swiper_cards()
}