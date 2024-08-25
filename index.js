
const cardContainer = document.querySelector(".container");

const cards = [
    {id:1 , title:"perfected strategies for you", discraption:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti voluptates, voluptatum, fugit obcaecati dignissimos maiores neque" , image1:"./banner.png", image2:"./course-18.jpg"},

    {id:1 , title:"perfected strategies for you", discraption:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti voluptates, voluptatum, fugit obcaecati dignissimos maiores neque" , image1:"./banner.png", image2:"./course-18.jpg"},

    {id:1 , title:"perfected strategies for you", discraption:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti voluptates, voluptatum, fugit obcaecati dignissimos maiores neque" , image1:"./banner.png", image2:"./course-18.jpg"}
]
for (let i = 0; i < cards.length; i++){
   
    cardContainer.innerHTML += `<div class="card">
                 <div class="image-card">
                    <div class="image-card1">
                       <img src="${cards[i].image1}" alt="">
                    </div>
     
                 <div class="image-card2">
                     <img src="${cards[i].image2}" alt="">
                    </div>
                </div>

               <div class="card-content">
                  <h4>${cards[i].title}</h4>
                 <p>${cards[i].discraption}</p>
               </div>
          </div>`
    
}
