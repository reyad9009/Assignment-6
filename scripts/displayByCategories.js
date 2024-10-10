//02 load data from Api for displayCategories
const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayByCategories(data.categories))
    .catch((error) => console.log(error));
};
loadCategories();


//2 show items by category like => Cat, Dog
const loadCategoryPets = (category) =>{
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then((res) => res.json())
    .then((data) => {
      removeBtnClass();

      const activeBtn = document.getElementById(`btn-${category}`);
      activeBtn.classList.add("bg-teal-500", "text-white", "border-teal-500");
      activeBtn.classList.remove("bg-white", "text-gray-700", "border-gray-300");

      // for loading Animation
      const petsContainer = document.getElementById("pets");
      petsContainer.innerHTML = `<span class="loading loading-bars loading-lg absolute left-[50%]"></span>`; 

      setTimeout(() =>{
        displayPets(data.data);
      }, 2000);
      
    })
    .catch((error) => console.log(error));
};


// 02 
const removeBtnClass = () =>{
  const allButtons = document.querySelectorAll(".category-btn");
  allButtons.forEach((btn) => {
    btn.classList.remove("bg-teal-500", "text-white", "border-teal-500");
    btn.classList.add("bg-white", "text-gray-700", "border-gray-300");
  });
};


//"02 Section" this function add by dynamically in id="categories"
// Cat, Dog, Rabbit, Bird
const displayByCategories = (categories) => {
  const categoryContainer = document.getElementById("categories");
  categoryContainer.innerHTML = "";

  categories.forEach((item) => {
    const buttonContainer = document.createElement("div");
    buttonContainer.innerHTML = `
      <button
        id="btn-${item.category}" onclick="loadCategoryPets('${item.category}')"
        class="category-btn flex items-center justify-center bg-white border border-gray-300 rounded-full p-4 w-full sm:w-48 lg:w-56">
        <img src="${item.category_icon}" class="w-12 h-12 mr-4">
        <span class="font-bold text-lg">${item.category}</span>
      </button>
    `;
    categoryContainer.append(buttonContainer);
  });
};


