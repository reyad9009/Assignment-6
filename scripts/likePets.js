//liked pets store in array
let likedPets = [];

const displayLikedPets = () => {
    const likedPetsContainer = document.getElementById("likedPets");
    likedPetsContainer.innerHTML = ""; // Clear previous liked pets

    likedPets.forEach((pet) => {
        const likedPetCard = document.createElement("div");
        likedPetCard.classList = "bg-white border rounded-lg shadow-md";
        likedPetCard.innerHTML = `
            <img src="${pet.image}" class="w-[150px] h-[150px] rounded-lg">
        `;
        likedPetsContainer.append(likedPetCard);
    });
};