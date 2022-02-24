


const loadDog =() =>{
    fetch('https://api.thecatapi.com/v1/breeds')
    .then(res => res.json())
    .then(data => displayDog(data))
}



const displayDog=(cats)=>{
    // console.log(data);
  const main= document.getElementById('main');
//   const firstTen= dog.slice(0,10);
  const all= cats;
//   console.log(firstTen)

for(const cat of all){
    const div= document.createElement('div');
    //  console.log(dog);
    div.className="col-lg-6"
    div.innerHTML=`<h2>${cat.name}</h2>
    <img  src="${cat.image.url}" class="img-fluid" alt="...">
    <p> ${cat.description} </span></p>`
    main.appendChild(div);

}

}