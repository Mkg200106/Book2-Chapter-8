let dreamCar = {
    make: "Mercedes",
    model: "24",
    color: "blue",
    year: "2024",
    bodyStyle: "Luxury Car",
    price: 8000
    }
    alert("The type of dreamCar is: " + typeof dreamCar);
    document.getElementById("pricetag").innerHTML = dreamCar.price;
    document.getElementById("body").innerHTML = dreamCar.make + "" + dreamCar.model;