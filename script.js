const results = document.getElementById('result');
const filter = document.getElementById('filter');
// Create an array for the data we fetch 
const listItems = []

getData();

// Filter the Search Input Section 
filter.addEventListener("input", (e) => filterData(e.target.value));


async function getData() {
    // Represents the fetch response where we're getting the data from 
    // API used: https://randomuser.me/
    const res = await fetch("https://randomuser.me/api?results=50");
    
    // To get the data
    // const data = await res.json()
    // Loop through the DataTransfer, use this instead: 
    const {results} = await res.json();

    // Test to see if we get data
    // console.log(data)

    //Clear Results & Loading... shouldn't be showing
    result.innerHTML = "";

    results.forEach(user => {
        // check to make sure getting information 
        // console.log(user)

        // Construct <li>
        const li = document.createElement('li');

        // Li starts empty, and push each li 
        listItems.push(li);

        // Will create the hard code version of the li here 
        li.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <div class="user-info">
                <h4>${user.name.first} ${user.name.last}</h4>
                <p>${user.location.city}, ${user.location.country}</p>
            </div>
        `
        //Get the Results
        result.appendChild(li);

    })
}

// Filter whatever is being typed in the search bar 
function filterData(searchTerm) {
    // Check to see if the search engine captures what you type in
    // console.log(searchTerm)

    listItems.forEach(item => {
        // Check to see if it matches the user or location, allows lowercase and upper case to be searched
        if(item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
            item.classList.remove("hide");
        // If it doesn't match any input it hides it
        } else {
            item.classList.add("hide");
        }
    });

};