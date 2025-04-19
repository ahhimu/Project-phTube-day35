// Api Call kora hoilo ebong Array Of OBject porjonto pailam  step----1
function loadCategory (){
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=>res.json())
    .then(data => displayCategory(data.categories))
}


// Step 2 2 2  22 222222--------------------After Break

const loadCategoryVideos = (id) =>{
  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`;
  console.log(url)
// Ekhon link ta paichi url er moddhe take amra fetch korbo r array of object niye asar tray korbo

fetch(url)
.then(res=>res.json())
// ekhon data take array hisabe pabo
.then(data=>displayVideos(data.category));

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
            // Button onClick e ekta function e argument pathabo
            createDiv.innerHTML=`<button onclick="loadCategoryVideos(${cat.category_id})" class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${cat.category}</button>`
    // element crate hole take UI ta dekhano
    categoryContainer.append(createDiv);
    }


}



// Arekta Api ke call korbo r Videos Gulake niy ane UI te Dekhabo  step 1 er second part <-------------
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
    videoContainer.innerHTML="";

    // Arekta function create korbo array er mathode For Each use korar jonno ebong ekta ekta kore object paowar jonno
    vidos.forEach(video => {
        console.log(video); 
             
        // ekta ekta kore object pailam
        const videoCard = document.createElement('div');
        videoCard.innerHTML=`
    <div class="card bg-base-100">
            <figure class="relative">
              <img class="w-full h-[150px] object-cover"
                 src="${video.thumbnail}"
                alt="Shoes" />
                <span class="absolute bottom-2 right-2 text-white bg-black rounded px-2 text-sm">3hrs 56 min ago</span>
            </figure>

            <!-- Card Body Related Code -->
            <div class="flex gap-3 px-0 py-5">
            <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                      <img src="${video.authors[0].profile_picture
                      }" />
                    </div>
                  </div>
            </div>
            <div class="intro">
                <h2 class="text-sm font-semibold">Midnight Serenade</h2>
                <p class="text-gray-400 flex gap-1">${video.authors[0].profile_name} <img class="h-5 w-5" src="https://img.icons8.com/?size=96&id=98A4yZTt9abw&format=png" alt=""></p>
                <p class="text-gray-400">${video.others.views} Views</p>
            </div>

              </div>
            </div>
        `
        videoContainer.append(videoCard);
    });
    
}




loadCategory();
