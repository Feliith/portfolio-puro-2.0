import Tools from "./data/tools.js"
import Projects from "./data/projects.js"

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
                <button class="tool-btn" style="background: linear-gradient(45deg, ${item.color}, ${item.shadow}); background-size: 150%;">
                    <img src="${item.src}"/>
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

const toolSelectEvent = () => {
    const toolButton = document.querySelectorAll('.tool-btn')
    const toolWrap = document.querySelectorAll('.tool')

    for (let i = 0 ; i < toolButton.length ; i++) {
        toolButton[i].addEventListener('click', () => {
            toolWrap[i].classList.add('on')
            toolClick()
        })
    }
}
toolSelectEvent()

let toolOn = ''

const toolClick = () => {
    const toolClicked = document.querySelector('.tool.on')
    toolOn = toolClicked.getAttribute('id')

    toolClicked.classList.remove('on')

    const projectsConteiner = document.querySelector('.projects-conteiner')

    projectsConteiner.innerHTML = ''

    if (toolOn == '') {
        projectsConteinerInit()
    } else {
        projectsFilter(toolOn)
    }
}

const projectsFilter = (tools) => {
    Projects.map((item, index) => {
        if (item.id.includes(tools)) {
            const projectsConteiner = document.querySelector('.projects-conteiner')

            projectsConteiner.innerHTML += `
                <div class="project" id="${item.id}">
                    <div class="project-wrap">
                        <h3 class="mobile-name">${item.name}</h3>
                        <img src="${item.src}" class="project-image"/>
                        <div class="project-items">
                            <h3 class="tools-name">${item.tools}</h3>
                            <div class="project-btn-wrap">
                                <a href="${item.url}" target="_blank" class="project-btn"><img src="../images/site.png"/>Site</a>
                                <a href="${item.code}" target="_blank" class="project-btn"><img src="../images/code.png"/>Código</a>
                            </div>
                        </div>
                        <h3 class="mobile-tools">${item.tools}</h3>
                    </div>
                    <h3 class="project-name">${item.name}</h3>
                </div>
            `
        }
    })
}

const projectsConteinerInit = () => {
    const projectsConteiner = document.querySelector('.projects-conteiner')

    Projects.map((item, index) => {
        projectsConteiner.innerHTML += `
            <div class="project" id="${item.id}">
                <div class="project-wrap">
                    <h3 class="mobile-name">${item.name}</h3>
                    <img src="${item.src}" class="project-image"/>
                    <div class="project-items">
                        <h3 class="tools-name">${item.tools}</h3>
                        <div class="project-btn-wrap">
                            <a href="${item.url}" target="_blank" class="project-btn"><img src="../images/site.png"/>Site</a>
                            <a href="${item.code}" target="_blank" class="project-btn"><img src="../images/code.png"/>Código</a>
                        </div>
                    </div>
                    <h3 class="mobile-tools">${item.tools}</h3>
                </div>
                <h3 class="project-name">${item.name}</h3>
            </div>
        `
    })
}
projectsConteinerInit()