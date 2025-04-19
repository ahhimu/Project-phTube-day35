
function loadCategory(){
    // console.log("Function is loading");
    // Fetch Data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
    .then((res)=> res.json())
    .then((data)=>displayCategorys(data.categories))
    // console.log(data);
}

function displayCategorys(categorys){
// console.log(categorys);

// get The Container
const categoryContainer = document.getElementById('category-container');
// loop operation
for (let cat of categorys){
    // console.log(cat);

// Create element
const categoryDiv = document.createElement("div");
categoryDiv.innerHTML=`
<button class="btn btn-sm">${cat.category}</button>

`
// categoryDiv.innerHTML=`
//         <button class="btn btn-sm">${cat.category}</button>
// `
//  Append the container
categoryContainer.append(categoryDiv);
}


}

loadCategory();