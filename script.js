// Classes:
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Locations = /** @class */ (function () {
    function Locations(title, city, ZIPCode, address, img, index, type, created) {
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
    Locations.prototype.displayLocation = function () {
        // col div
        // Arguments: containerType, classes, array_index, id
        var col = containerBuilder("div", "col", this.index, this.type);
        // card div
        // Arguments: containerType, classes, array_index, id
        var card = containerBuilder("div", "card", this.index, this.type + "Card");
        var img = imgBuilder("" + this.img, "card-img-top d-none d-md-flex");
        card.appendChild(img);
        // card body div
        // Arguments: containerType, classes, array_index, id, output_target
        var cardBody = containerBuilder("div", "card-body", this.index, this.type + "CardBody");
        // card title h5
        // Arguments: elementType, classes, content, id, array_index, output_target
        var cardTitle = elementBuilder("h5", "card-title", this.title, this.type + "CardTitle", this.index);
        cardBody.appendChild(cardTitle);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var city = elementBuilder("p", "card-text", "City: " + this.city, this.type + "City", this.index);
        cardBody.appendChild(city);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var ZIPCode = elementBuilder("p", "card-text", "ZIP Code: " + ("" + this.ZIPcode), this.type + "ZIPCode", this.index);
        cardBody.appendChild(ZIPCode);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var address = elementBuilder("p", "card-text", "Address: " + this.address, this.type + "Address", this.index);
        cardBody.appendChild(address);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var created = elementBuilder("p", "card-footer", "Created: " + this.created, this.type + "Created", this.index);
        cardBody.appendChild(created);
        card.appendChild(cardBody);
        col.appendChild(card);
        console.log(col);
        return col;
    };
    return Locations;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(title, city, ZIPCode, address, img, index, type, created, cuisineType, webAddress) {
        var _this = _super.call(this, title, city, ZIPCode, address, img, index, type, created) || this;
        _this.cuisineType = cuisineType;
        _this.webAddress = webAddress;
        locations.push(_this);
        return _this;
    }
    Restaurant.prototype.displayRestaurant = function () {
        // col div
        // Arguments: containerType, classes, array_index, id
        var col = containerBuilder("div", "col", this.index, this.type);
        // card div
        // Arguments: containerType, classes, array_index, id
        var card = containerBuilder("div", "card", this.index, this.type + "Card");
        var img = imgBuilder("" + this.img, "card-img-top d-none d-md-flex");
        card.appendChild(img);
        // card body div
        // Arguments: containerType, classes, array_index, id, output_target
        var cardBody = containerBuilder("div", "card-body", this.index, this.type + "CardBody");
        // card title h5
        // Arguments: elementType, classes, content, id, array_index, output_target
        var cardTitle = elementBuilder("h5", "card-title", this.title, this.type + "CardTitle", this.index);
        cardBody.appendChild(cardTitle);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var cuisine = elementBuilder("p", "card-text", "Cuisine: " + this.cuisineType, this.type + "Cuisine", this.index);
        cardBody.appendChild(cuisine);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var webAddress = elementBuilder("p", "card-text", "Cuisine: " + this.webAddress, this.type + "WebAddress", this.index);
        cardBody.appendChild(webAddress);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var city = elementBuilder("p", "card-text", "City: " + this.city, this.type + "City", this.index);
        cardBody.appendChild(city);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var ZIPCode = elementBuilder("p", "card-text", "ZIP Code: " + ("" + this.ZIPcode), this.type + "ZIPCode", this.index);
        cardBody.appendChild(ZIPCode);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var address = elementBuilder("p", "card-text", "Address: " + this.address, this.type + "Address", this.index);
        cardBody.appendChild(address);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var created = elementBuilder("p", "card-footer", "Created: " + this.created, this.type + "Created", this.index);
        cardBody.appendChild(created);
        card.appendChild(cardBody);
        col.appendChild(card);
        console.log(col);
        return col;
    };
    return Restaurant;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(title, city, ZIPCode, address, img, index, type, created, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, title, city, ZIPCode, address, img, index, type, created) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        locations.push(_this);
        return _this;
    }
    Events.prototype.display = function () {
        // col div
        // Arguments: containerType, classes, array_index, id
        var col = containerBuilder("div", "col", this.index, this.type);
        // card div
        // Arguments: containerType, classes, array_index, id
        var card = containerBuilder("div", "card", this.index, this.type + "Card");
        var img = imgBuilder("" + this.img, "card-img-top d-none d-md-flex");
        card.appendChild(img);
        // card body div
        // Arguments: containerType, classes, array_index, id, output_target
        var cardBody = containerBuilder("div", "card-body", this.index, this.type + "CardBody");
        // card title h5
        // Arguments: elementType, classes, content, id, array_index, output_target
        var cardTitle = elementBuilder("h5", "card-title", this.title, this.type + "CardTitle", this.index);
        cardBody.appendChild(cardTitle);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var date = elementBuilder("p", "card-text", "Event Date: " + this.eventDate, this.type + "Date", this.index);
        cardBody.appendChild(date);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var time = elementBuilder("p", "card-text", "Event Time: " + this.eventTime, this.type + "Time", this.index);
        cardBody.appendChild(time);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var price = elementBuilder("p", "card-text", "Ticket Price: " + this.ticketPrice, this.type + "Price", this.index);
        cardBody.appendChild(price);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var city = elementBuilder("p", "card-text", "City: " + this.city, this.type + "City", this.index);
        cardBody.appendChild(city);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var ZIPCode = elementBuilder("p", "card-text", "ZIP Code: " + ("" + this.ZIPcode), this.type + "ZIPCode", this.index);
        cardBody.appendChild(ZIPCode);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var address = elementBuilder("p", "card-text", "Address: " + this.address, this.type + "Address", this.index);
        cardBody.appendChild(address);
        // card element
        // Arguments: elementType, classes, content, id, array_index, output_target
        var created = elementBuilder("p", "card-footer", "Created: " + this.created, this.type + "Created", this.index);
        cardBody.appendChild(created);
        card.appendChild(cardBody);
        col.appendChild(card);
        console.log(col);
        return col;
    };
    return Events;
}(Locations));
// Function library
var containerBuilder = function (containerType, classes, array_index, id) {
    var container = document.createElement(containerType); // create container type
    container.setAttribute("id", id + [array_index]); // set id of container
    container.className = classes; // set classes of container
    console.log("Container " + container + " of index " + array_index + " built successfully");
    return container; // return output
};
// 1.2 function to build elements with text
var elementBuilder = function (elementType, classes, content, id, array_index) {
    var elementT = document.createElement(elementType); // create element type
    elementT.className = classes; // assign classes
    elementT.setAttribute("id", id + [array_index]); // set id of element
    var elementContent = document.createTextNode(content); // create text node
    elementT.appendChild(elementContent); // append text node
    console.log("Element " + elementType + " built successfully");
    return elementT;
};
// 1.3 function to build img elements
var imgBuilder = function (src, classes) {
    var newImg = document.createElement("img"); // create img
    newImg.className = classes; // assign classes
    newImg.src = src; // set source
    newImg.alt = "image"; // alt = image
    console.log("Img built successfully");
    return newImg;
};
// Data Set
var locations = [];
new Locations("Kyomizudera Temple", "Kyoto", "605-0862", "294 Kiyomizu, Higashiyama Ward", "https://images.unsplash.com/photo-1599484677470-710323bf9afd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2074&q=80", 0, "location", "13.05.2018 13:00");
new Locations("Kinosaki-Onsen", "Toyooka", "669-6101", "inosakicho Yushima, Toyooka, Hyogo", "https://images.unsplash.com/photo-1614059235818-8f1117c14721?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80", 1, "location", "16.05.2018 14:32");
new Locations("Todai-ji", "Nara", "630-8211", "406-1 Zoshicho, Nara", "https://images.unsplash.com/photo-1593297304752-7ca5864360f5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2880&q=80", 2, "location", "18.05.2018 10:12");
new Locations("Kinkaku-ji", "Kyoto", "603-8361", "1 Kinkakujicho, Kita Ward, Kyoto", "https://images.unsplash.com/photo-1610265082060-7234c9de51ab?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1651&q=80", 3, "location", "12.05.2018 10:12");
new Restaurant("Tempura Arima", "Kyoto", "600-8424", "Shimogyo Ward, 山王町（室町通）５７２", "https://images.unsplash.com/photo-1593357849627-cbbc9fda6b05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80", 4, "restaurant", "12.05.2018 19:12", "Traditional Japanese", "<a href=" + "\"https://www.tripadvisor.at/Restaurant_Review-g298564-d3867788-Reviews-Shunsai_Tempura_Arima-Kyoto_Kyoto_Prefecture_Kinki.html\"" + ">Visit Website here</a>");
new Restaurant("Okonomiyaki Kishibe", "Miyajima", "739-0588", "483-2 Miyajimacho, Hatsukaichi, Hiroshima", "https://images.unsplash.com/photo-1591114320268-fb3aac361d8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80", 5, "restaurant", "17.05.2018 20:32", "Hiroshima Style Diner", "<a href=" + "\"https://www.tripadvisor.de/Restaurant_Review-g1022438-d7525766-Reviews-Okonomiyaki_Kishibe-Hatsukaichi_Hiroshima_Prefecture_Chugoku.html\"" + ">Visit Website here</a>");
new Events("Omagari Hanabi", "Shimotateno", "014-8799", "1-19 Sanocho, Daisen, Akita", "https://images.unsplash.com/photo-1549277635-850c75fb4873?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3100&q=80", 6, "event", "14.05.2018 21:32", "14.05.2018", "22:00", 0);
new Events("Sakura", "Kyoto", "606-8406", "Sakyo Ward, Jodoji Ishibashicho, ６１", "https://images.unsplash.com/photo-1555213799-1287ecf94e10?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80", 7, "location", "13.04.2018 12:00", "End of March - Mid April", "All Day", 0);
console.table(locations);
// Page creation
