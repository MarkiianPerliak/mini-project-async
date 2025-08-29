const searchInput = document.querySelector(".search-input");
const searchBtn = document.querySelector(".search");
const loadMoreButton = document.querySelector(".loadmore");
function searchActivate(data) {
    console.log(data);
}
let cards = 5;
let page = 1;
searchBtn.addEventListener("click", (event)=>{
    loadButton.classList.add("displayblock");
    getAPI(page, cards).then((result)=>result.json()).then((resultdata)=>searchActivate(resultdata));
});
loadMoreButton.addEventListener("click", (event)=>{
    page++;
    console.log(page, cards);
    getAPI(page, cards).then((result)=>result.json()).then((resultdata)=>searchActv(resultdata));
});

//# sourceMappingURL=mini-project-async.816e7b21.js.map
