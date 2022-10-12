'use strict'

var gProj = [
    {
        id: "mine-sweeper",
        name: "Mine-Sweeper",
        title: "Old Mine sweeper game",
        desc: "A mine sweeper game, using HTML, CSS , JS",
        url: "",
        imgUrl: 'img/portfolio/mine-sweeper.png',
        publishedAt: 1448693940000,
        labels: ["Matrixes", "mouse events"],
       },
       {
        id: "book-shop",
        name: "Book-Shop",
        title: "An example of a book shop",
        desc: "An example of a book shop, using HTML, CSS, JS",
        url: "projs/sokoban",
        imgUrl: 'img/portfolio/book-shop.png',
        publishedAt: 1448693940000,
        labels: ["CSS", "JS"],
       },
       {
        id: "pacman-game",
        name: "Pacman",
        title: "A pacman game",
        desc: "A pacman game, using HTML, CSS, JS",
        url: "projs/sokoban",
        imgUrl: 'img/portfolio/pacman.png',
        publishedAt: 1448693940000,
        labels: ["HTML", "JS", "Mouse event"],
       },
]

function getProjs(){
    return gProj
}

function getProj(projectId) {
    return gProj.find(project => project.id === projectId)  
}