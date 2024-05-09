class Star {
    constructor(name, age, color, galaxy, distance) {
    this.name = name;
    this.age = age;
    this.color = color;
    this.galaxie = galaxy;
    this.distance = distance;
    }

    toHtml() {
        const div = document.createElement('div');
        div.classList.add('constellation');

        const ul = document.createElement('ul');
        const nameHtml = document.createElement('li');
        const ageHtml = document.createElement('li');
        const colorHtml = document.createElement('li');
        const galaxieHtml = document.createElement('li');
        const distanceHtml = document.createElement('li');

        nameHtml.textContent = this.name;
        ageHtml.textContent = this.age;
        colorHtml.textContent = this.color;
        galaxieHtml.textContent = this.galaxie;
        distanceHtml.textContent = this.distance;

        div.appendChild(ul);
        ul.appendChild(nameHtml);
        ul.appendChild(ageHtml);
        ul.appendChild(colorHtml);
        ul.appendChild(galaxieHtml);
        ul.appendChild(distanceHtml);

        return div;
    }
}

const stars = [
    new Star("45IR1", 690000, "#F4F6F4", "Andromeda", 100054),
    new Star("45IR2", 680000, "#F4F5F4", "Andromeda", 100353),
    new Star("45IR3", 670000, "#F4F4F4", "Andromeda", 100454),
    new Star("45IR4", 660000, "#F4F3F4", "Andromeda", 100554),
    new Star("45IR5", 650000, "#F4F2F4", "Andromeda", 100654),
    new Star("45IR6", 640000, "#F4F1F4", "Andromeda", 100754),
    new Star("45IR7", 630000, "#F4F0F4", "Andromeda", 100854),
];

stars.forEach((star) => {
    document.body.appendChild(star.toHtml());
});