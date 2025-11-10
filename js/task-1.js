// const listRef = document.querySelectorAll("#categories .item");


// listRef.forEach((item) => {
//     const titleRef = item.querySelector("h2");
//     const itemRef = item.querySelectorAll("li")
    
    
//     console.log(`Категорія: ${titleRef.textContent}`);
//     console.log(`кількість елементів: ${itemRef.length}`);
// });













// const ingredients = [
//   'Картопля',
//   'Гриби',
//   'Часник',
//   'Помідори',
//   'Зелень',
//   'Приправи',
// ];


// // const ingredientsList = document.querySelector("#ingredients")

// // ingredients.forEach((item) => {
// //     const li = document.createElement('li')
// //     li.textContent = item
// //     listRef.append(li)
// // })


// const ingredientsList = document.querySelector("#ingredients")
// const items = ingredients.map((ingredient) => {
//     const li = document.createElement('li')
//     li.textContent = ingredient;
//     return li
// })

// ingredientsList.append(...items)




const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const listRef = document.getElementById("gallery")
const itemsWorkUp = images.map(({url, alt})=> `<li><img src="${url}" alt="${alt}"></li>`).join("")
console.log(itemsWorkUp);
listRef.insertAdjacentHTML("beforeend", itemsWorkUp)