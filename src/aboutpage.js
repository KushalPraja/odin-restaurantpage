

function createAboutPage() {
    const aboutPage = document.getElementById('content');

    const title = document.createElement('h1');
    title.textContent = 'About Us';
    aboutPage.appendChild(title);

    const description = document.createElement('p');
    description.textContent = `Welcome to our restaurant! We are dedicated to providing you with the best dining experience possible. 
    Our chefs use only the freshest ingredients to create delicious and innovative dishes that will tantalize your taste buds. 
    Whether you're here for a casual meal with friends or a special occasion, we strive to make every visit memorable. 
    Thank you for choosing our restaurant, and we look forward to serving you!`;
    aboutPage.appendChild(description);

    const historyTitle = document.createElement('h2');
    historyTitle.textContent = 'Our History';
    aboutPage.appendChild(historyTitle);

    const historyDescription = document.createElement('p');
    historyDescription.textContent = `Our restaurant was founded in 1990 with the goal of bringing authentic cuisine to our community. 
    Over the years, we have grown and evolved, but our commitment to quality and customer satisfaction has remained the same. 
    We are proud to be a part of this community and to have the opportunity to share our passion for food with you.`;
    aboutPage.appendChild(historyDescription);

    const missionTitle = document.createElement('h2');
    missionTitle.textContent = 'Our Mission';
    aboutPage.appendChild(missionTitle);

    const missionDescription = document.createElement('p');
    missionDescription.textContent = `Our mission is to provide our guests with an exceptional dining experience. 
    We believe that great food and great service go hand in hand, and we are committed to delivering both. 
    We strive to create a warm and welcoming atmosphere where you can relax and enjoy your meal. 
    Thank you for being a part of our journey, and we look forward to serving you for many years to come.`;
    aboutPage.appendChild(missionDescription);

    return aboutPage;
}

export default createAboutPage;