function locomo() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }

    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}
function navAnimation() {
    var nav = document.querySelector("nav")

    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to("#nav-bottom", {
            height: "27vh"
        })

        tl.to(".nav-part2 h5", {
            display: "block"
        })

        tl.to(".nav-part2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.6
            }
        })
    })

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()

        tl.to(".nav-part2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.2
            }
        })

        tl.to(".nav-part2 h5", {
            display: "none",
            duration: 0.1
        })

        tl.to("#nav-bottom", {
            height: "0vh",
            duration: 0.2
        })
    })
}
function page2Animation() {
    var rightElems = document.querySelectorAll(".right-elem")


    rightElems.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 1,
                scale: 1,
                duration: .5
            })
        })
        elem.addEventListener("mouseleave", function () {
            gsap.to(elem.childNodes[3], {
                opacity: 0,
                scale: 0,
                duration: .5
            })
        })
        elem.addEventListener("mousemove", function (dets) {
            gsap.to(elem.childNodes[3], {
                x: dets.x - elem.getBoundingClientRect().x - 90,
                y: dets.y - elem.getBoundingClientRect().y - 200
            })
        })
    })
}
function page3VideoAnimation() {

    var page3Centre = document.querySelector(".page3-centre")
    var video = document.querySelector("#page3 video")

    page3Centre.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })

    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })

}
function onhoverplay() {

    var section = document.querySelectorAll(".sec-right")

    section.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[3].play()
            elem.childNodes[3].style.opacity = 1
        })
        elem.addEventListener("mouseleave", function () {
            elem.childNodes[3].style.opacity = 0
            elem.childNodes[3].load()
        })
    })


    var firstVideo = document.querySelectorAll(".firstvideo")

    firstVideo.forEach(function (elem) {
        elem.addEventListener("mouseenter", function () {
            elem.childNodes[1].play()
            elem.style.height = "80.8%"
        })

        elem.addEventListener("mouseleave", function () {
            elem.childNodes[1].load()
            elem.style.height = "62.5%"
        })
    })

}
function icontuntun() {


    var uiux = document.querySelector(".uiux")
    var downicon = document.querySelector(".updown .iconupdow .down")
    var upicon = document.querySelector(".updown .iconupdow .up")
    let a = 0

    uiux.addEventListener("click", function () {
        if (a == 0) {
            downicon.style.color = "white"
            upicon.style.color = "#5f5f5f"
            a = 1
        }
        else {
            downicon.style.color = "#5f5f5f"
            upicon.style.color = "white"
            a = 0
        }
    })

    var product = document.querySelector(".product")
    var downicon2 = document.querySelector(".updown .pro .down")
    var upicon2 = document.querySelector(".updown .pro .up")
    let b = 0

    product.addEventListener("click", function () {
        if (b == 0) {
            downicon2.style.color = "#5f5f5f"
            upicon2.style.color = "white"
            b = 1
        }
        else {
            downicon2.style.color = "white"
            upicon2.style.color = "#5f5f5f"
            b = 0
        }
    })

}
function buriburium7() {

    gsap.from("#btm7-part2 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm7-part2",
            scroller: "#main",
            start: "top 75%",
            end: "top 20%",
            scrub: true
        }
    })

    gsap.from("#btm7-part3 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm7-part3",
            scroller: "#main",
            start: "top 75%",
            end: "top 20%",
            scrub: true
        }
    })

    gsap.from("#btm7-part4 h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#btm7-part4",
            scroller: "#main",
            start: "top 75%",
            end: "top 20%",
            scrub: true
        }
    })
}
function loadingAnimation() {
    var tl = gsap.timeline()

    tl.from("#page1", {
        opacity: 0,
        duration: 0.2,
        delay: 0.2
    })

    tl.from("#page1", {
        transform: "scaleX(0.7) scaleY(0.2) translateY(80%)",
        borderRadius: "150px",
        duration: 1,
        ease: "expo.out"
    })

    tl.from("nav", {
        opacity: 0,
        delay: -0.2
    })

    tl.from("#page1 h1, #page1 p, #page1 div", {
        opacity: 0,
        duration: 0.5,
        stagger: 0.2
    })

}

locomo()
navAnimation()
page2Animation()
page3VideoAnimation()
onhoverplay()
icontuntun()
buriburium7()
loadingAnimation()





