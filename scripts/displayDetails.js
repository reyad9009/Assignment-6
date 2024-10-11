// 04 load data from Api for displayDetails
const loadPetDetails = async (petId) => {
  const uri = `https://openapi.programming-hero.com/api/peddy/pet/${petId}`;
  const res = await fetch(uri);
  const data = await res.json();
  displayPetDetails(data.petData);
};

//"04 Section" this function add by dynamically in id="modal-content"
//this function show details if click Details btn
const displayPetDetails = (petData) => {
    const detailContainer = document.getElementById("modal-element");
    detailContainer.innerHTML = `
    <div class="">
      <img src="${petData.image}">  
      <div class="mt-5">
        <p><span class="font-bold">Breed:</span> ${petData.breed || "Not Added"}</p>
        <p><span class="font-bold">Category:</span> ${petData.category || "Not Added"}</p>
        <p><span class="font-bold">Date of Birth:</span> ${petData.date_of_birth || "Not Added"}</p>
        <p><span class="font-bold">Price: </span>${petData.price || "Not Added"}</p>
        <p><span class="font-bold">Gender:</span> ${petData.gender || "Not Added"}</p>
        <p><span class="font-bold">Details:</span> ${petData.pet_details || "Not Added"}</p>
      </div>  
    </div>
    `;

    document.getElementById("customModal").showModal();
  };


