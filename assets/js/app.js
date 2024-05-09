class Keyboard {
    constructor(
        name,
        brand,
        compatibleDevices,
        connectivityTechnology,
        keyboardDescription,
        specialFeature,
        colour,
        numberOfKeys,
        style,
        productDimensions,
        material
    ) {
        this.name = name;
        this.brand = brand;
        this.compatibleDevices = compatibleDevices;
        this.connectivityTechnology = connectivityTechnology;
        this.keyboardDescription = keyboardDescription;
        this.specialFeature = specialFeature;
        this.colour = colour;
        this.numberOfKeys = numberOfKeys;
        this.style = style;
        this.productDimensions = productDimensions;
        this.material = material;
    }

    toHtml() {
        const div = document.createElement('div');
        div.classList.add('container__keyboards');

        const ul = document.createElement('ul');
        const nameHtml = document.createElement('li');
        const brandHtml = document.createElement('li');
        const compatibleDevicesHtml = document.createElement('li');
        const connectivityTechnologyHtml = document.createElement('li');
        const keyboardDescriptionHtml = document.createElement('li');
        const specialFeatureHtml = document.createElement('li');
        const colourHtml = document.createElement('li');
        const numberOfKeysHtml = document.createElement('li');
        const styleHtml = document.createElement('li');
        const productDimensionsHtml = document.createElement('li');
        const materialHtml = document.createElement('li');

        ul.textContent = "Liste des features des keyboards :"
        nameHtml.textContent = this.name;
        brandHtml.textContent = this.brand;
        compatibleDevicesHtml.textContent = this.compatibleDevices;
        connectivityTechnologyHtml.textContent = this.connectivityTechnology;
        keyboardDescriptionHtml.textContent = this.keyboardDescription;
        specialFeatureHtml.textContent = this.specialFeature;
        colourHtml.textContent = this.colour;
        numberOfKeysHtml.textContent = this.numberOfKeys;
        styleHtml.textContent = this.style;
        productDimensionsHtml.textContent = this.productDimensions;
        materialHtml.textContent = this.material;
        
        div.appendChild(ul);
        ul.appendChild(nameHtml);
        ul.appendChild(brandHtml);
        ul.appendChild(compatibleDevicesHtml);
        ul.appendChild(connectivityTechnologyHtml);
        ul.appendChild(keyboardDescriptionHtml);
        ul.appendChild(specialFeatureHtml);
        ul.appendChild(colourHtml);
        ul.appendChild(numberOfKeysHtml);
        ul.appendChild(numberOfKeysHtml);
        ul.appendChild(productDimensionsHtml);
        ul.appendChild(materialHtml);

        return div;
    }
}

    const keyboards = [
    new Keyboard(
    "Magic-Refiner",
    "MAGIC-REFINER",
    "Smartphone",
    "Bluetooth",
    "Mechanical",
    "Ergonomic",
    "Off-white & Orange/Red Switch",
    68,
    "Modern",
    "31.2L x 10.2W x 4.3H Centimetres",
    "Polycarbonate"
    ),

    new Keyboard(
    "Magic-Refiner",
    "MAGIC-REFINER",
    "Smartphone",
    "Bluetooth",
    "Mechanical",
    "Ergonomic",
    "Off-white & Orange/Red Switch",
    68,
    "Modern",
    "31.2L x 10.2W x 4.3H Centimetres",
    "Polycarbonate"
    ),

    new Keyboard(
    "Magic-Refiner",
    "MAGIC-REFINER",
    "Smartphone",
    "Bluetooth",
    "Mechanical",
    "Ergonomic",
    "Off-white & Orange/Red Switch",
    68,
    "Modern",
    "31.2L x 10.2W x 4.3H Centimetres",
    "Polycarbonate"
    ),

    new Keyboard(
    "Magic-Refiner",
    "MAGIC-REFINER",
    "Smartphone",
    "Bluetooth",
    "Mechanical",
    "Ergonomic",
    "Off-white & Orange/Red Switch",
    68,
    "Modern",
    "31.2L x 10.2W x 4.3H Centimetres",
    "Polycarbonate"
    ),
];

keyboards.forEach(keyboard => {
    document.body.appendChild(keyboard.toHtml());
});