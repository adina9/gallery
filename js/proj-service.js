'use strict'


var gProjs = [];



function getProjs() {
    var projs = gProjs.slice();
    return projs;
}


function _createProj(projName, projTitle, projDesc, projUrl, labels, photoLink) {
    return {
        id: makeId(),
        name: projName,
        title: projTitle,
        desc: projDesc,
        url: projUrl,
        publishedAt: Date.now(),
        labels: labels,
        img: photoLink
    }
}

function _createProjs() {
    var projs = [];
    var first = _createProj('MineSweeper', 'Picking up the mines', 'Try to find the exact locaiotn of all the mines in the board', 'https://adina9.github.io/sprint1/', ["Matrixes", "keyboard events"], 'img/portfolio/minesweeper.jpg')
    projs.push(first);
    var second = _createProj('Ball-Board', 'Moving the gamer across the board', 'Try to stay alive as much as you can', 'https://adina9.github.io/ball-board/', ["Matrixes", "keyboard events"], 'img/portfolio/ball-board.jpg')
    projs.push(second);
    var third = _createProj('Chess', 'Find the parts game locations', 'Click on a cell to see its directions', 'https://adina9.github.io/chess/', ["Matrixes", "keyboard events"], 'img/portfolio/chess.jpg')
    projs.push(third)
    return projs;
}
gProjs = _createProjs();
console.log(gProjs);

function getProjById(projId) {
    console.log(projId);
    var proj = gProjs.find(function(proj) {
        return (projId === proj.id)
    });
    return proj
}