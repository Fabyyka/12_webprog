// Városok listája
const cities = [
    { name: "Berlin", value: "berlin" },
    { name: "Tokyo", value: "tokyo" },
    { name: "Rio", value: "rio" },
    { name: "Nairobi", value: "nairobi" },
    { name: "Lisszabon", value: "lisbon" },
    { name: "Moszkva", value: "moscow" },
    { name: "Denver", value: "denver" },
    { name: "Stockholm", value: "stockholm" },
    { name: "Helsinki", value: "helsinki" },
    { name: "Professzor", value: "professor" },
];

// DOM betöltődése után
document.addEventListener("DOMContentLoaded", () => {
    const select = document.getElementById("city");
    const demo = document.getElementById("demo");
    const imageContainer = document.getElementById("image");

    // Opciók feltöltése
    cities.forEach(city => {
        const option = document.createElement("option");
        option.value = city.value;
        option.textContent = city.name;
        select.appendChild(option);
    });

    // Eseménykezelő a választásra
    select.addEventListener("change", () => {
        const selectedValue = select.value;

        if (selectedValue) {
            // Kiírás
            const selectedCity = cities.find(city => city.value === selectedValue);
            demo.textContent = selectedCity.name;

            // Kép betöltése
            imageContainer.innerHTML = ""; // korábbi kép törlése

            const img = document.createElement("img");
            img.src = `./img/${selectedValue}.jpg`; // pl. ./img/berlin.jpg
            img.alt = selectedCity.name;
            img.style.maxWidth = "300px"; // opcionális stílus

            imageContainer.appendChild(img);
        } else {
            demo.textContent = "";
            imageContainer.innerHTML = "";
        }
    });
});