// Api Call kora hoilo ebong Array Of OBject porjonto pailam 
function loadCategory (){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=>res.json())
    .then(data => displayCategory(data.categories))
}

// Arekta Function likhbo jar moddhe oi data gula ke amra pathabo r oi data gula niye kaj korbo
function displayCategory(categoris){
    // jar moddhe ei data gulake pathabo take call kora mane oi div take id diye dhorlam
    const categoryContainer = document.getElementById('category-container');

    // Loop chalay ekta ekta kore paowa 
    for ( let cat of categoris){
            // ekta data paile ekta element create korte hobe
            // console.log(cat); ekta ekta kore pailam ja cat er moddhe ache cheek kore nilam
            const createDiv = document.createElement('div');
            createDiv.innerHTML=`<button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`
    // element crate hole take UI ta dekhano
    categoryContainer.append(createDiv);
    }


}

// Arekta Api ke call korbo r Videos Gulake niy ane UI te Dekhabo 
// Arrow Function diye korar try kori pai ki na 
const loadVideos =()=>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res=>res.json())
    .then(data=>displayVideos(data.videos))
    // Api Call kore Array Of Object pailam
}

// Arekta Function likhbo jetate load Videos er array of object gula recived korbo 

// Eikhane Videos name Array Of Object ke recived korlam.
const displayVideos = (vidos) =>{
    // console.log(vidos);

    // UI er Video Container take dhorbo
    const videoContainer = document.getElementById('video-container');

    // Arekta function create korbo array er mathode For Each use korar jonno ebong ekta ekta kore object paowar jonno
    vidos.forEach(video => {
        // console.log(video); 
     
        // ekta ekta kore object pailam
        const videoCard = document.createElement('div');
        videoCard.innerHTML=`
       <div class="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}"
      alt="Shoes" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>${video.description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        `
        videoContainer.append(videoCard);
    });
    
}




loadCategory();
loadVideos();