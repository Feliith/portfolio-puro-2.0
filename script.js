import Tools from "./data/tools.js"

const sidebarClick = () => {
    const navBurger = document.querySelector('.nav-burger')
    const Sidebar = document.querySelector('.sidebar')

    navBurger.addEventListener('click', () => {
        sidebarToggle()
    })

    Sidebar.addEventListener('click', () => {
        sidebarToggle()
    })
}
sidebarClick()

const sidebarToggle = () => {
    const Sidebar = document.querySelector('.sidebar')

    Sidebar.classList.toggle('on')
}

const navbarScroll = () => {
    const Navbar = document.querySelector('nav')

    window.onscroll = isScroll

    function isScroll() {
        if (window.scrollY < 200) {
            Navbar.classList.remove('scroll')
        } else {
            Navbar.classList.add('scroll')
        }
    }
}
navbarScroll()

const ToolsSlider = () => {
    const toolSlider = document.querySelector('.tool-slider')

    Tools.map((item, index) => {
        toolSlider.innerHTML += `
            <div class="tool" id="${item.id}">
                <button class="tool-btn" style="background: ${item.color};">
                    <img src="${item.src}"/>
                    <div class="tool-gradient"></div>
                </button>
                <h3 class="tool-name">${item.name}</h3>
            </div>
        `
    })    
}
ToolsSlider()

const ballClickEvent = () => {
    const allBall = document.querySelectorAll('.ball')

    for(let i = 0 ; i < allBall.length ; i++) {
        allBall[i].addEventListener('click', () => {
            ballClick(i)
        })
    }
}
ballClickEvent()

const ballClick = (id) => {
    const toolScroll = document.querySelector('.tool-scroll')
    const allBall = document.querySelectorAll('.ball')

    const ballOn = document.querySelector('.ball.on')
    ballOn.classList.remove('on')

    allBall[id].classList.add('on')

    if (id == 0) {
        toolScroll.scrollLeft = 0
    } else if (id == 1) {
        toolScroll.scrollLeft = 500
    }
}

const ballScrolled = () => {
    const toolScroll = document.querySelector('.tool-scroll')

    const allBall = document.querySelectorAll('.ball')

    toolScroll.onscroll = ballScrolling

    function ballScrolling() {
        if (toolScroll.scrollLeft < 200) {        
            const ballOn = document.querySelector('.ball.on')
            ballOn.classList.remove('on')
            allBall[0].classList.add('on')
        } else {
            const ballOn = document.querySelector('.ball.on')
            ballOn.classList.remove('on')
            allBall[1].classList.add('on')
        }
    }
}
ballScrolled()