//03 load data from Api for displayPets
const loadPets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
      .then((res) => res.json())
      .then((data) => {
          displayPets(data.pets);
      })
      .catch((error) => {
          console.log(error);
      });
};
loadPets();


//"03 Section" this function add by dynamically in id="pets"
const displayPets = (pets) => {
    const petsContainer = document.getElementById("pets");
    petsContainer.innerHTML = "";
  
    if (pets.length === 0) {
      petsContainer.classList.remove("grid");
      petsContainer.innerHTML = `
      <div class="min-h-[300px] flex flex-col gap-5 justify-center items-center">
        <img src="./images/error.webp" /> 
        <h2 class="text-center text-xl font-bold"> No Information Available </h2> 
        <p class="text-center text-lg"> It is a long established fact that a reader will be distracted by the readable content of a page when looking at 
        its layout. The point of using Lorem Ipsum is that it has a. </p>
      </div>`;
    } else {
      petsContainer.classList.add("grid");
    }
  
    pets.forEach((pet) => {
      const card = document.createElement("div");
      card.classList = "card card-compact border p-3";
      card.innerHTML = `
      <img src="${pet.image}" class="rounded-lg mb-4">
      <h3 class="text-lg font-bold">${pet.pet_name}</h3>
      
      <p class="text-gray-600">
        <span class="flex items-center">
          <img src="./images/Frame (1).png" alt="">
          Breed: ${pet.breed || "No Information"}
        </span>
      </p>
      
      <p class="text-gray-600">
        <span class="flex items-center">
          <img src="./images/Frame (2).png" alt="">
          Birth: ${pet.date_of_birth || "Not Added"}
        </span>
      </p>
      
      <p class="text-gray-600">
        <span class="flex items-center">
          <img src="./images/Frame (3).png" alt="">
          Gender: ${pet.gender || "Not Found"}
        </span>
      </p>
      
      <p class="text-gray-600">
        <span class="flex items-center">
          <img src="./images/Frame (4).png" alt="">
          Price: ${pet.price !== null ? pet.price + " $" : "Price not available"}
        </span>
      </p>
      
      <div class="flex justify-between mt-4">
        <button class="like-button flex items-center justify-center">
          <img src="./images/likeBtn.png" alt="">
        </button>
  
        <button class="adopt-btn btn border bg-white text-teal-600 font-bold px-3 py-2 rounded">Adopt</button>
  
        <button class="details-btn btn border bg-white text-teal-600 font-bold px-3 py-2 rounded" onclick="loadPetDetails('${pet.petId}')">Details</button>
      </div>
    `;
      petsContainer.append(card);

    });
  };
  
  
  
  
  
  
  
  
  
  
  




