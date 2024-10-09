//liked pets store in array
let likedPets = [];

const displayLikedPets = () => {
    const likedPetsContainer = document.getElementById("likedPets");
    likedPetsContainer.innerHTML = ""; // Clear previous liked pets

    likedPets.forEach((pet) => {
        const likedPetCard = document.createElement("div");
        likedPetCard.classList = "bg-white border rounded-lg shadow-md p-2";
        likedPetCard.innerHTML = `
            <img src="${pet.image}" class="w-full h-auto rounded mb-2">
            <h3 class="text-center font-bold">${pet.pet_name}</h3>
    `;
        likedPetsContainer.append(likedPetCard);
    });
};