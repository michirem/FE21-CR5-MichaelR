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
    function Locations(city, ZIPCode, address, img, index, created) {
        this.city = city;
        this.ZIPcode = ZIPCode;
        this.address = address;
        this.img = img;
        this.index = index;
        this.created = created;
        locations.push(this);
    }
    Locations.prototype.display = function () {
        // container div
        // Arguments: containerType, classes, array_index, id, output_target
        containerBuilder("div", "vehicleDiv col row my-2", this.index, "vehicle", "output");
        // img inside vehicle div
        // Arguments: src, classes, output_target
        imgBuilder("" + this.img, "col-6", "vehicle" + this.index);
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
        containerBuilder("div", "priceSection d-flex flex-row justify-content-evenly p-2", this.index, "priceContainer", "vehicleDetails" + this.index);
        // Price button in container to display price calc.
        // Arguments: classes, content, id, array_index, output_target
        btnBuilder("button showPriceBtn mx-3", "What's the price?", "priceButton", this.index, "priceContainer" + this.index);
        // movie likes in container for likes
        // Arguments: elementType, classes, content, id, array_index, output_target
        elementBuilder("span", "price mx-3", " ", "price", this.index, "priceContainer" + this.index);
    };
    return Locations;
}());
var Restaurant = /** @class */ (function (_super) {
    __extends(Restaurant, _super);
    function Restaurant(city, ZIPCode, address, img, index, created, cuisineType, webAddress) {
        var _this = _super.call(this, city, ZIPCode, address, img, index, created) || this;
        _this.cuisineType = cuisineType;
        _this.webAddress = webAddress;
        locations.push(_this);
        return _this;
    }
    Restaurant.prototype.display = function () {
        _super.prototype.display.call(this);
    };
    return Restaurant;
}(Locations));
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(city, ZIPCode, address, img, index, created, eventDate, eventTime, ticketPrice) {
        var _this = _super.call(this, city, ZIPCode, address, img, index, created) || this;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        locations.push(_this);
        return _this;
    }
    Events.prototype.display = function () {
        _super.prototype.display.call(this);
    };
    return Events;
}(Locations));
// Function library
var containerBuilder = function (containerType, classes, array_index, id, output_target) {
    var container = document.createElement(containerType); // create container type
    container.setAttribute("id", id + [array_index]); // set id of container
    container.className = classes; // set classes of container
    console.log("Container " + container + " of index " + array_index + " built successfully");
    document.getElementById(output_target).appendChild(container); // append to output target
};
// 1.2 function to build elements with text
var elementBuilder = function (elementType, classes, content, id, array_index, output_target) {
    var elementT = document.createElement(elementType); // create element type
    elementT.className = classes; // assign classes
    elementT.setAttribute("id", id + [array_index]); // set id of element
    var elementContent = document.createTextNode(content); // create text node
    elementT.appendChild(elementContent); // append text node
    console.log("Element " + elementType + " built successfully");
    document.getElementById(output_target).appendChild(elementT); // append to output target
    console.log("Element " + elementType + " " + id + [array_index] + " appended to " + output_target);
};
// 1.3 function to build img elements
var imgBuilder = function (src, classes, output_target) {
    var newImg = document.createElement("img"); // create img
    newImg.className = classes; // assign classes
    newImg.src = src; // set source
    newImg.alt = "image"; // alt = image
    console.log("Img built successfully");
    document.getElementById(output_target).appendChild(newImg); // append to output target
    console.log("Img " + newImg + " appended to " + output_target);
};
// 1.4 function to build button
var btnBuilder = function (classes, content, id, array_index, output_target) {
    var button = document.createElement("button"); // create element type
    button.className = classes; // assign classes
    button.setAttribute("id", id + [array_index]);
    var buttonContent = document.createTextNode(content); // create text node
    button.appendChild(buttonContent); // append text node
    console.log("Button built successfully");
    document.getElementById(output_target).appendChild(button); // append to output target
    console.log("Button " + button + " " + id + [array_index] + " appended to " + output_target);
};
// Data Set
var locations = [];
console.table();
// Page creation
