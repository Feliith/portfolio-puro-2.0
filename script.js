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
            <div class="tool">
                <input type="radio" name="tool" value="${item.id}" class="tool-input"/>
                <div class="tool-btn" style="background: linear-gradient(45deg, ${item.color}, ${item.shadow}); background-size: 150%;">
                    <img src="${item.src}"/>
                </div>
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

const selectTool = () => {
    const toolBtn = document.querySelectorAll('.tool-btn')
    const toolInput = document.querySelectorAll('.tool-input')

    for (let i = 0 ; i < toolBtn.length ; i++) {
        toolBtn[i].addEventListener('click', () => {
            let toolValue = ''
            if (toolInput[i].checked) {
                toolInput[i].checked = false
                toolValue = ''
            } else {
                toolInput[i].checked = true
                toolValue = toolInput[i].value
            }
            toolFilter(toolValue)
            nothingFilter()
        })
    }
}
selectTool()

const toolFilter = (tool) => {
    const projectsConteiner = document.querySelector('.projects-conteiner')

    if (tool == '') {
        projectsConteiner.innerHTML = ''
        projectsConteinerInit()
    } else {
        projectsConteiner.innerHTML = ''
        Projects[page].map((item, index) => {
            if(item.id.includes(tool)) {
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
}

const nothingFilter = () => {
    const projectsQuant = document.querySelectorAll('.project')
    const projectsConteiner = document.querySelector('.projects-conteiner')

    if (projectsQuant.length == 0) {
        nothingHere(projectsConteiner)
    }
}

const nothingHere = (conteiner) => {
    conteiner.innerHTML += `
        <div class="nothing-here">
            <img src="images/working-it.png"/>
            <p>Trabalhando nisso...</p>
        </div>
    `
}

let page = 0

const projectsConteinerInit = () => {
    const projectsConteiner = document.querySelector('.projects-conteiner')

    projectsConteiner.innerHTML= ''

    Projects[page].map((item, index) => {
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

const projectsPages = () => {
    const projectsPageConteiner = document.querySelector('.projects-pages')

    for (let i = 0 ; i < Projects.length ; i++) {
        projectsPageConteiner.innerHTML += `
            <input type="radio" name="page" value="${i}" class="project-page" />
        `
    }

    const projectPage = document.querySelectorAll('.project-page')

    for (let i = 0 ; i < projectPage.length ; i++) {
        projectPage[i].addEventListener('click', () => {
            pageSelect(i)
        })
    }

    projectPage[0].checked = true
}
projectsPages()

const pageSelect = (id) => {
    const inputPage = document.querySelectorAll('.project-page')

    let inputValue = inputPage[id].getAttribute('value')

    page = inputValue

    projectsConteinerInit()
}

const copyNumberBtn = () => {
    const numberBtn = document.querySelector('.copy-number')
    numberBtn.onclick = () => {
        copyNumber()
    }
}
copyNumberBtn()

const copyNumber = () => {
    const numberH2 = document.querySelector('#number').textContent
    navigator.clipboard.writeText(numberH2)
}
