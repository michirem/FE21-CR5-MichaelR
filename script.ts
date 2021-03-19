// Classes:

class Locations {
    city: string;
    ZIPcode: number;
    address: string;
    img: string;
    index: number;
    created: string;

    constructor(city: string, ZIPCode: number, address: string, img: string, index: number, created: string) {
        this.city = city;
        this.ZIPcode = ZIPCode;
        this.address = address;
        this.img = img;
        this.index = index;
        this.created = created;
        locations.push(this);
    }

    display () {
        // container div
        // Arguments: containerType, classes, array_index, id, output_target
        containerBuilder("div", "vehicleDiv col row my-2", this.index, "vehicle", "output");

        // img inside vehicle div
        // Arguments: src, classes, output_target
        imgBuilder(`${this.img}`, "col-6", "vehicle" + this.index);

        // info div inside vehicle div
        // Arguments: containerType, classes, array_index, id, output_target
        containerBuilder("div", "col-6 d-flex flex-column px-0 py-2", this.index, "vehicleDetails", "vehicle" + this.index);

        // manufacturer in info div
        // Arguments: elementType, classes, content, id, array_index, output_target
        elementBuilder("h2", " ", manufacturer, "manufacturer", this.index, "vehicleDetails" + this.index);

        // type in info div
        // Arguments: elementType, classes, content, id, array_index, output_target
        elementBuilder("h4", " ", type, "type", this.index, "vehicleDetails" + this.index);

        // model in info div
        // Arguments: elementType, classes, content, id, array_index, output_target
        elementBuilder("h4", " ", model, "model", this.index, "vehicleDetails" + this.index);

        // add info in info div
        // Arguments: elementType, classes, content, id, array_index, output_target
        elementBuilder("p", " ", "Kilometers: " + kilometers, "kilometers", this.index, "vehicleDetails" + this.index);

        // add info in info div
        // Arguments: elementType, classes, content, id, array_index, output_target
        elementBuilder("p", " ", "Number of seats: " + noOfSeats, "seats", this.index, "vehicleDetails" + this.index);

        // add info in info div
        // Arguments: elementType, classes, content, id, array_index, output_target
        elementBuilder("p", " ", "Fuel Type: " + fuelType, "fuelType", this.index, "vehicleDetails" + this.index);

        // add info in info div
        // Arguments: elementType, classes, content, id, array_index, output_target
        elementBuilder("p", " ", "Date Manufactured: " + dateManufacture, "date", this.index, "vehicleDetails" + this.index);

        // build container for price inside info div
        // Arguments: containerType, classes, array_index, id, output_target
        containerBuilder("div", "priceSection d-flex flex-row justify-content-evenly p-2", this.index, "priceContainer", "vehicleDetails" + this.index)

        // Price button in container to display price calc.
        // Arguments: classes, content, id, array_index, output_target
        btnBuilder("button showPriceBtn mx-3", "What's the price?", "priceButton", this.index, "priceContainer" + this.index);

        // movie likes in container for likes
        // Arguments: elementType, classes, content, id, array_index, output_target
        elementBuilder("span", "price mx-3", " ", "price", this.index, "priceContainer" + this.index);
    }

}

class Restaurant extends Locations {
    cuisineType: string;
    webAddress: string;

    constructor(city: string, ZIPCode: number, address: string, img: string, index: number, created: string, cuisineType: string, webAddress: string) {
        super(city, ZIPCode, address, img, index, created);
        this.cuisineType = cuisineType;
        this.webAddress = webAddress;
        locations.push(this);
    }

    display () {
        super.display();

    }
}

class Events extends Locations {
    eventDate: string;
    eventTime: string;
    ticketPrice: number;

    constructor(city: string, ZIPCode: number, address: string, img: string, index: number, created: string, eventDate: string, eventTime: string, ticketPrice: number) {
        super(city, ZIPCode, address, img, index, created);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
        locations.push(this);
    }
    display () {
        super.display();

    }
}

// Function library

const containerBuilder = (containerType, classes, array_index, id, output_target) => {
    let container = document.createElement(containerType); // create container type
    container.setAttribute("id", id + [array_index]); // set id of container
    container.className = classes; // set classes of container
    console.log("Container " + container + " of index " + array_index + " built successfully");
    document.getElementById(output_target).appendChild(container); // append to output target
};

// 1.2 function to build elements with text
const elementBuilder = (elementType, classes, content, id, array_index, output_target) => {
    let elementT = document.createElement(elementType); // create element type
    elementT.className = classes; // assign classes
    elementT.setAttribute("id", id + [array_index]); // set id of element
    let elementContent = document.createTextNode(content); // create text node
    elementT.appendChild(elementContent); // append text node
    console.log("Element " + elementType + " built successfully");
    document.getElementById(output_target).appendChild(elementT); // append to output target
    console.log("Element " + elementType + " " + id + [array_index] + " appended to " + output_target);
};

// 1.3 function to build img elements
const imgBuilder = (src, classes, output_target) => {
    let newImg = document.createElement("img"); // create img
    newImg.className = classes; // assign classes
    newImg.src = src; // set source
    newImg.alt = "image"; // alt = image
    console.log("Img built successfully");
    document.getElementById(output_target).appendChild(newImg); // append to output target
    console.log("Img " + newImg + " appended to " + output_target);
};

// 1.4 function to build button
const btnBuilder = (classes, content, id, array_index, output_target) => {
    let button = document.createElement("button"); // create element type
    button.className = classes; // assign classes
    button.setAttribute("id", id + [array_index]);
    let buttonContent = document.createTextNode(content); // create text node
    button.appendChild(buttonContent); // append text node
    console.log("Button built successfully");
    document.getElementById(output_target).appendChild(button); // append to output target
    console.log("Button " + button + " " + id + [array_index] + " appended to " + output_target);
};

// Data Set

let locations = [];



console.table();

// Page creation

