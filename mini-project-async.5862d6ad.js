const e=document.getElementById("search-form"),t=document.querySelector(".list"),s=document.querySelector(".search-input"),a=document.querySelector(".loadmore");function i(e){console.log(e);let s=e.hits.map(e=>`
        <li class="photo-card">
  <img class="image" src="${e.largeImageURL}" alt="image" />
  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">Likes:</i>
      ${e.likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">Views:</i>
      ${e.views}
    </p>
    <p class="stats-item">
      <i class="material-icons">Comments:</i>
      ${e.comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">Downloads:</i>
      ${e.downloads}
    </p>
  </div>
</li>
`).join("");t.insertAdjacentHTML("beforeend",s)}let l=1;const o=async(e,t)=>{let a=document.getElementById("select-order").value;try{return await fetch(`https://pixabay.com/api/?key=51425063-e87401854758e3e3468b7b002&q=${s.value}&per_page=${t}&page=${e}&order=${a}&image_type=photo`)}catch(e){return console.log(e)}};e.addEventListener("submit",e=>{e.preventDefault(),a.classList.add("displayblock"),o(l,12).then(e=>e.json()).then(e=>i(e))}),a.addEventListener("click",e=>{console.log(++l,12),o(l,12).then(e=>e.json()).then(e=>i(e))});
//# sourceMappingURL=mini-project-async.5862d6ad.js.map
