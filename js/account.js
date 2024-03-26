const url = '../db/user.json';

fetch(url)
.then((response) => response.json())
.then((data) => {
    
    let output = '';

    data.forEach(user => {
        if (user.username="") {

        }
        output += '<div><p>Email: </p><input type="email" name="email" id="" placeholder="' +  + '"></div><div><p>Username: </p><input type="text" name="username" id="" placeholder=""></div><div><p>Full name: </p><input type="text" name="fullName" id="" placeholder=""></div><div><p>Address: </p><input type="text" name="address" id="" placeholder=""></div><div><p>City: </p><input type="text" name="city" id="" placeholder=""><p style="margin-left: 10px;">Postal Code: </p><input type="text" name="zip" id="" placeholder=""></div><div><p>Country: </p><input type="text" name="country" id="" placeholder=""><p style="margin-left: 10px;">Phone: </p><input type="tel" name="phone" id="" placeholder=""></div><button>Save</button>';       
    });

    const userInfo = document.querySelector(".userInfo");
    userInfo.innerHTML = output;

}).catch((error) => console.log("Error"));