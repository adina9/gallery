'use strict';
console.log('Starting up');

var gProjs;

jQuery(function() {
    initPage()
});

function initPage() {
    renderProjs();
}

function renderProjs() {
    var projs = getProjs();
    var strHtml = projs.map(function(proj) {
        return `
    <div class="col-md-4 col-sm-6 portfolio-item">
        <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1" onclick="onFindModal('${proj.id}')">
            <div class="portfolio-hover">
                 <div class="portfolio-hover-content">
                     <i class="fa fa-plus fa-3x"></i>
                 </div>
            </div>
            <img class="img-fluid" src="${proj.img}">
        </a>
        <div class="portfolio-caption">
            <h4>${proj.name}</h4>
            <p class="text-muted">${proj.title}</p>
        </div>
    </div>`
    })
    document.querySelector('.myProjs').innerHTML = strHtml.join(' ');
}

function onFindModal(projId) {
    var proj = getProjById(projId);
    renderModal(proj);
}

function renderModal(proj) {
    var strHtml = '';
    strHtml = `
    <div class="modal-body">
        <h2>${proj.name}</h2>
         <p class="item-intro text-muted"></p>
        <img class="img-fluid d-block mx-auto" src="${proj.img}" alt="">
        <p>${proj.desc}</p>
        <ul class="list-inline">
            <li>Date: ${proj.publishedAt}</li>
            <li>Client: Threads</li>
            <li>Category: Illustration</li>
            <li class="linkToProj">
            <a href="${proj.url}">Go Check</a></li>                                              
        </ul>
        <button class="btn btn-primary" data-dismiss="modal" type="button">
        <i class="fa fa-times"></i>
        Close Project</button>
    </div>`

    document.querySelector('.modal-details').innerHTML = strHtml;
}

function onSubmit(ev) {
    ev.preventDefault();
    var subject = $('#formGroupExampleInput2').val();
    var body = $('#input-group-text').val();
    window.open(`https:mail.google.com/mail/?view=cm&fs=1&to=adinazwe@gmail.com&su=${subject}&body=${body}`)
}