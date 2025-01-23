import "./styles.css";




function createHomePage() {
    const container = document.getElementById("content");
 

  // Create the first div for the title
  const titleDiv = document.createElement("div");
  titleDiv.className = "title";
  titleDiv.innerHTML = `<h1>Home</h1>`;
  container.appendChild(titleDiv);

  // Create the second div for the introduction
  const introDiv = document.createElement("div");
  introDiv.className = "intro";
  introDiv.innerHTML = `
    <p>Welcome to our restaurant, where exceptional flavors and warm hospitality come together to create an 
    unforgettable dining experience. From savory appetizers to indulgent desserts, we promise to delight your senses!</p>
  `;
  container.appendChild(introDiv);

  return container;
}

export default createHomePage;
