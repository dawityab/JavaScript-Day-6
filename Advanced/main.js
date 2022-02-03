var book = JSON.parse(books);



console.table(book);
for(let val of book){
    let read = "";
   if(val.read == true){
       read = "success";
   }
   else{
       read = "danger";
   }
    document.getElementById("result").innerHTML += `
    <div class="card m-2" id="cardStyle" style="width: 18rem;">
  <img src="${val.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title text-warning ">${val.title}</h5>
    <h4 class="card-title text-dark ">${val.author}</h4>
    <p class="card-text text-warning">${val.pages} pages</p>
    <p class="card-text text-${read}"><b>Description</b> - ${val.description}</p>
    
  </div>
</div>

    `
}
