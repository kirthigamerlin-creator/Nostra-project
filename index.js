const closeNewsHeader = () => {
    document.getElementById('newsHeader').style.display = 'none';
}

const sidenav = document.getElementById('sidenav');
const menu = document.getElementById('menu-icon');
const closenav = document.getElementById("close-nav");

menu?.addEventListener('click', () => {
    sidenav.style.left = 0;
});

closenav?.addEventListener('click', () => {
    sidenav.style.left = '-50%';
})

/* home page slider */

let currentSlide = 0;
const sliderImages = document.getElementById('sliderImages');
const totalSlides = sliderImages?.children?.length;
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

nextBtn?.addEventListener('click', () => {
    currentSlide++;
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    sliderImages.style.transform = `translateX(-${currentSlide * 100}%)`;
});

prevBtn?.addEventListener('click', () => {
    currentSlide--;
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1;
    }
    if (currentSlide >= totalSlides) {
        currentSlide = 0;
    }
    sliderImages.style.transform = `translateX(-${currentSlide * 100}%)`;
});

const toggleHeart = (element) => {
    element.classList.add("hidden");

    if (element.nextElementSibling) {
        element.nextElementSibling.classList.remove("hidden");
    } else {
        element.previousElementSibling.classList.remove("hidden");
    }
}

/* collections page search functionality */
const search = document.getElementById('search');
const collectionsContainer = document.getElementById('collectionsContainer');
const collectionsList = collectionsContainer?.querySelectorAll('div');
const occassions = document.querySelectorAll(
    'input[name="occassions"]'
);
const colors = document.querySelectorAll(
    'input[name="colors"]'
);
const arrivals = document.querySelectorAll(
    'input[name="arrivals"]'
);

const searchResults = (searchKeyword, selectedOptions) => {
    let isMatch = false;
    collectionsList.forEach(collection => {
        if (searchKeyword) {
            const collectionName = collection.querySelector('h2').textContent.toLowerCase();
            isMatch = collectionName.indexOf(searchKeyword) > -1;
        } else if (selectedOptions.length > 0) {
            const occassionName = collection.dataset.occassion.toLowerCase();
            const colorName = collection.dataset.color.toLowerCase();
            const arrivalName = collection.dataset.arrival.toLowerCase();
            isMatch = selectedOptions.indexOf(occassionName) > -1 || selectedOptions.indexOf(colorName) > -1 || selectedOptions.indexOf(arrivalName) > -1;
        } else {
            isMatch = true;
        }

        if (isMatch) {
            collection.style.display = 'block';
        } else {
            collection.style.display = 'none';
        }
    });
}

search?.addEventListener('keyup', (event) => {
    const searchValue = event.target.value.toLowerCase();
    occassions.forEach(occassion => {
        occassion.checked = false;
    })
    colors.forEach(color => {
        color.checked = false;
    })
    arrivals.forEach(arrival => {
        arrival.checked = false;
    })
    searchResults(searchValue, []);
});

const filterCollections = () => {
    const selectedValues = [];
    search.value = '';
    document.querySelectorAll('input[name="occassions"]:checked')?.forEach(occassion => {
        selectedValues.push(occassion.value.toLowerCase());
    });

    document.querySelectorAll('input[name="colors"]:checked')?.forEach(color => {
        selectedValues.push(color.value.toLowerCase());
    });

    document.querySelectorAll('input[name="arrivals"]:checked')?.forEach(arrival => {
        selectedValues.push(arrival.value.toLowerCase());
    });

    if (selectedValues.length > 0) {
        searchResults('', selectedValues);
    } else {
        searchResults('', []);
    }
}

occassions?.forEach((occassion) => {
    occassion.addEventListener("change", filterCollections);
});

colors?.forEach(color => {
    color.addEventListener('change', filterCollections);
});

arrivals?.forEach(arrival => {
    arrival.addEventListener('change', filterCollections);
});