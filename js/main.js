'use strict'

renderProjects()

function renderProjects() {
    var projects = getProjs()

    const strHTMLs = projects.map((project) => {
        return `
        <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" onclick="onOpenModal('${project.id}')" href="#portfolioModal1">
          <div class="portfolio-hover">
            <div class="portfolio-hover-content">
              <i class="fa fa-plus fa-3x"></i>
            </div>
          </div>
          <img class="img-fluid" src="${project.imgUrl}" alt="">
        </a>
        <div class="portfolio-caption">
          <h4>${project.name}</h4>
          <p class="text-muted">${project.title}</p>
        </div>
      </div>`
    })

    document.querySelector('.projects-area').innerHTML = strHTMLs.join('')

}

function onOpenModal(projectId){
      var currProject = getProj(projectId)
      renderModal(currProject)

}

function renderModal(currProject){
      var project = currProject

      document.querySelector('.project-modal h2').innerText = project.name
      document.querySelector('.project-modal .img-modal').src = project.imgUrl
      document.querySelector('.project-modal .title-modal').innerText = project.title
      document.querySelector('.project-modal .desc-modal').innerText = project.desc
      document.querySelector('.project-modal .project-date').innerText = project.publishedAt
      document.querySelector('.project-modal .project-url').innerText = project.url
      document.querySelector('.project-modal .project-labels').innerText = project.labels
}

function onSendEmail(ev) {
    ev.preventDefault()

    var email = document.querySelector('.contact-email').value
    var subject = document.querySelector('.contact-subject').value
    var msg = document.querySelector('.contact-msg').value

    var url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${msg}&bcc=someone.else@example.com`
    window.open(url)
}