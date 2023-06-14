var photosData = new Array();

// Create photo element
function createPhotoElement(photo) {
  const photoElement = document.createElement("div");
  photoElement.className = "photo";

  const imgElement = document.createElement("img");
  imgElement.src = photo.imgUrl;
  imgElement.alt = photo.name;
  imgElement.addEventListener("click", () => {
    showPhotoDetails(photo);
  });

  photoElement.appendChild(imgElement);
  return photoElement;
}

// Load photos from JSON and filter by continent
function loadPhotos(photos) {
  const galleryView = document.querySelector("#gallery-view");
  galleryView.innerHTML = ""; // Clear existing content

  photos.forEach((photo) => {
    const photoElement = createPhotoElement(photo);
    galleryView.appendChild(photoElement);
  });
}

// Show photo details when clicked
function showPhotoDetails(photo) {
  const photoDetails = document.createElement("div");
  photoDetails.className = "photo-details";

  const imgElement = document.createElement("img");
  imgElement.src = photo.imgUrl;
  imgElement.alt = photo.name;

  const nameElement = document.createElement("h3");
  nameElement.textContent = photo.name;

  const locationElement = document.createElement("p");
  locationElement.textContent = photo.location;

  photoDetails.appendChild(imgElement);
  photoDetails.appendChild(nameElement);
  photoDetails.appendChild(locationElement);

  document.body.insertBefore(photoDetails, document.body.firstChild);
}

function readPhotos() {
    fetch("./js/photos.json").then((res) => {
        return res.json();
    }).then((data) => {
        photosData = data;
        console.log(photosData.filter(photosData => {
          return photosData.continent === "Asia";
        }));
        // biar dia kelar baca dulu baru ngeload ke html
        // loadPhotos(photosData);
    });
    
}

readPhotos();