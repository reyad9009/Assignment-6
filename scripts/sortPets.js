const sortPetsByPrice = (pets) =>{
    return pets.sort((a, b) => {

        const priceA = a.price || 0;
        const priceB = b.price || 0;
        return priceB - priceA;
    });
};

const loadAndSortPets = (category) =>{
    const url = category 
        ? `https://openapi.programming-hero.com/api/peddy/category/${category}` 
        : "https://openapi.programming-hero.com/api/peddy/pets";

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            const sortedPets = sortPetsByPrice(data.pets);
            displayPets(sortedPets);
        })
        .catch((error) => console.log(error));
};

const sortButton = document.getElementById("sortBtn");
sortButton.addEventListener("click", () => {
    const activeCategory = document.querySelector(".category-btn.active")?.id.split("-")[1];
    loadAndSortPets(activeCategory);
});
