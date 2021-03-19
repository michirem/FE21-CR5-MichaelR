// Classes:

class Locations {
    title: string;
    city: string;
    ZIPcode: string;
    address: string;
    img: string;
    index: number;
    type: string;
    created: string;

    constructor(title: string, city: string, ZIPCode: string, address: string, img: string, index: number, type: string, created: string) {
        this.title = title;
        this.city = city;
        this.ZIPcode = ZIPCode;
        this.address = address;
        this.img = img;
        this.index = index;
        this.type = type;
        this.created = created;
        locations.push(this);
    }

    displayLocation() {
        // col div
        // Arguments: containerType, classes, array_index, id
        let col = containerBuilder("div", "col", this.index, this.type);

        // card div
        // Arguments: containerType, classes, array_index, id
        let card = containerBuilder("div", "card", this.index, this.type + "Card");
        let img = imgBuilder(`${this.img}`, "card-img-top d-none d-md-flex")
        card.appendChild(img);

        // card body div
        // Arguments: containerType, classes, array_index, id, output_target
        let cardBody = containerBuilder("div", "card-body", this.index, this.type + "CardBody");

        // card title h5
        // Arguments: elementType, classes, content, id, array_index, output_target
        let cardTitle = elementBuilder("h5", "card-title", this.title, this.type + "CardTitle", this.index);
        cardBody.appendChild(cardTitle);
        
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let city = elementBuilder("p", "card-text","City: " + this.city, this.type + "City", this.index);
        cardBody.appendChild(city);

        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let ZIPCode = elementBuilder("p", "card-text", "ZIP Code: " + `${this.ZIPcode}`, this.type + "ZIPCode", this.index);
        cardBody.appendChild(ZIPCode);

        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let address = elementBuilder("p", "card-text", "Address: " + this.address, this.type + "Address", this.index);
        cardBody.appendChild(address);

        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let created = elementBuilder("p", "card-footer", "Created: " + this.created, this.type + "Created", this.index);
        cardBody.appendChild(created);

        card.appendChild(cardBody);
        col.appendChild(card);

        console.log(col);
        return col
}

}

class Restaurant extends Locations {
    cuisineType: string;
    webAddress: string;

    constructor(title: string, city: string, ZIPCode: string, address: string, img: string, index: number, type: string, created: string, cuisineType: string, webAddress: string) {
        super(title, city, ZIPCode, address, img, index, type, created);
        this.cuisineType = cuisineType;
        this.webAddress = webAddress;
        locations.push(this);
    }

    displayRestaurant() {
         // col div
        // Arguments: containerType, classes, array_index, id
        let col = containerBuilder("div", "col", this.index, this.type);

        // card div
        // Arguments: containerType, classes, array_index, id
        let card = containerBuilder("div", "card", this.index, this.type + "Card");
        let img = imgBuilder(`${this.img}`, "card-img-top d-none d-md-flex")
        card.appendChild(img);

        // card body div
        // Arguments: containerType, classes, array_index, id, output_target
        let cardBody = containerBuilder("div", "card-body", this.index, this.type + "CardBody");

        // card title h5
        // Arguments: elementType, classes, content, id, array_index, output_target
        let cardTitle = elementBuilder("h5", "card-title", this.title, this.type + "CardTitle", this.index);
        cardBody.appendChild(cardTitle);

        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let cuisine = elementBuilder("p", "card-text","Cuisine: " + this.cuisineType, this.type + "Cuisine", this.index);
        cardBody.appendChild(cuisine);

        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let webAddress = elementBuilder("p", "card-text","Cuisine: " + this.webAddress, this.type + "WebAddress", this.index);
        cardBody.appendChild(webAddress);
        
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let city = elementBuilder("p", "card-text","City: " + this.city, this.type + "City", this.index);
        cardBody.appendChild(city);

        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let ZIPCode = elementBuilder("p", "card-text", "ZIP Code: " + `${this.ZIPcode}`, this.type + "ZIPCode", this.index);
        cardBody.appendChild(ZIPCode);

        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let address = elementBuilder("p", "card-text", "Address: " + this.address, this.type + "Address", this.index);
        cardBody.appendChild(address);

        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let created = elementBuilder("p", "card-footer", "Created: " + this.created, this.type + "Created", this.index);
        cardBody.appendChild(created);

        card.appendChild(cardBody);
        col.appendChild(card);

        console.log(col);
        return col
    }
}

class Events extends Locations {
    eventDate: string;
    eventTime: string;
    ticketPrice: number;

    constructor(title: string, city: string, ZIPCode: string, address: string, img: string, index: number, type: string, created: string, eventDate: string, eventTime: string, ticketPrice: number) {
        super(title, city, ZIPCode, address, img, index, type, created);
        this.eventDate = eventDate;
        this.eventTime = eventTime;
        this.ticketPrice = ticketPrice;
        locations.push(this);
    }
    display () {
        // col div
        // Arguments: containerType, classes, array_index, id
        let col = containerBuilder("div", "col", this.index, this.type);

        // card div
        // Arguments: containerType, classes, array_index, id
        let card = containerBuilder("div", "card", this.index, this.type + "Card");
        let img = imgBuilder(`${this.img}`, "card-img-top d-none d-md-flex")
        card.appendChild(img);

        // card body div
        // Arguments: containerType, classes, array_index, id, output_target
        let cardBody = containerBuilder("div", "card-body", this.index, this.type + "CardBody");

        // card title h5
        // Arguments: elementType, classes, content, id, array_index, output_target
        let cardTitle = elementBuilder("h5", "card-title", this.title, this.type + "CardTitle", this.index);
        cardBody.appendChild(cardTitle);

        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let date = elementBuilder("p", "card-text","Event Date: " + this.eventDate, this.type + "Date", this.index);
        cardBody.appendChild(date);

        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let time = elementBuilder("p", "card-text","Event Time: " + this.eventTime, this.type + "Time", this.index);
        cardBody.appendChild(time);

        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let price = elementBuilder("p", "card-text","Ticket Price: " + this.ticketPrice, this.type + "Price", this.index);
        cardBody.appendChild(price);
        
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let city = elementBuilder("p", "card-text","City: " + this.city, this.type + "City", this.index);
        cardBody.appendChild(city);

        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let ZIPCode = elementBuilder("p", "card-text", "ZIP Code: " + `${this.ZIPcode}`, this.type + "ZIPCode", this.index);
        cardBody.appendChild(ZIPCode);

        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let address = elementBuilder("p", "card-text", "Address: " + this.address, this.type + "Address", this.index);
        cardBody.appendChild(address);

        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        let created = elementBuilder("p", "card-footer", "Created: " + this.created, this.type + "Created", this.index);
        cardBody.appendChild(created);

        card.appendChild(cardBody);
        col.appendChild(card);

        console.log(col);
        return col
    }
}

// Function library

const containerBuilder = (containerType: string, classes: string, array_index?: any, id?: any) => {
    let container = document.createElement(containerType); // create container type
    container.setAttribute("id", id + [array_index]); // set id of container
    container.className = classes; // set classes of container
    console.log("Container " + container + " of index " + array_index + " built successfully");
    return container // return output
};

// 1.2 function to build elements with text
const elementBuilder = (elementType: string, classes: string, content: string, id?: any, array_index?: any) => {
    let elementT = document.createElement(elementType); // create element type
    elementT.className = classes; // assign classes
    elementT.setAttribute("id", id + [array_index]); // set id of element
    let elementContent = document.createTextNode(content); // create text node
    elementT.appendChild(elementContent); // append text node
    console.log("Element " + elementType + " built successfully");
    return elementT
};

// 1.3 function to build img elements
const imgBuilder = (src: string, classes?: any) => {
    let newImg = document.createElement("img"); // create img
    newImg.className = classes; // assign classes
    newImg.src = src; // set source
    newImg.alt = "image"; // alt = image
    console.log("Img built successfully");
    return newImg
};

// Data Set

let locations = [];

new Locations ("Kyomizudera Temple", "Kyoto", "605-0862", "294 Kiyomizu, Higashiyama Ward", "https://images.unsplash.com/photo-1599484677470-710323bf9afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2074&q=80", 0, "location", "13.05.2018 13:00");
new Locations ("Kinosaki-Onsen", "Toyooka", "669-6101", "inosakicho Yushima, Toyooka, Hyogo", "https://images.unsplash.com/photo-1614059235818-8f1117c14721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80", 1, "location", "16.05.2018 14:32");
new Locations ("Todai-ji", "Nara", "630-8211", "406-1 Zoshicho, Nara", "https://images.unsplash.com/photo-1593297304752-7ca5864360f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2880&q=80", 2, "location", "18.05.2018 10:12");
new Locations ("Kinkaku-ji", "Kyoto", "603-8361", "1 Kinkakujicho, Kita Ward, Kyoto", "https://images.unsplash.com/photo-1610265082060-7234c9de51ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80", 3, "location", "12.05.2018 10:12");
new Restaurant ("Tempura Arima", "Kyoto", "600-8424", "Shimogyo Ward, 山王町（室町通）５７２", "https://images.unsplash.com/photo-1593357849627-cbbc9fda6b05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80", 4, "restaurant", "12.05.2018 19:12", "Traditional Japanese", "<a href=" + "\"https://www.tripadvisor.at/Restaurant_Review-g298564-d3867788-Reviews-Shunsai_Tempura_Arima-Kyoto_Kyoto_Prefecture_Kinki.html\"" + ">Visit Website here</a>");
new Restaurant ("Okonomiyaki Kishibe", "Miyajima", "739-0588", "483-2 Miyajimacho, Hatsukaichi, Hiroshima", "https://images.unsplash.com/photo-1591114320268-fb3aac361d8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80", 5, "restaurant", "17.05.2018 20:32", "Hiroshima Style Diner", "<a href=" + "\"https://www.tripadvisor.de/Restaurant_Review-g1022438-d7525766-Reviews-Okonomiyaki_Kishibe-Hatsukaichi_Hiroshima_Prefecture_Chugoku.html\"" + ">Visit Website here</a>");
new Events ("Omagari Hanabi", "Shimotateno", "014-8799", "1-19 Sanocho, Daisen, Akita", "https://images.unsplash.com/photo-1549277635-850c75fb4873?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3100&q=80", 6, "event", "14.05.2018 21:32", "14.05.2018", "22:00", 0);
new Events ("Sakura", "Kyoto", "606-8406", "Sakyo Ward, Jodoji Ishibashicho, ６１", "https://images.unsplash.com/photo-1555213799-1287ecf94e10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80", 7, "location", "13.04.2018 12:00", "End of March - Mid April", "All Day", 0);

console.table(locations);

// Page creation

