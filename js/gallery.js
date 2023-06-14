var photosData = new Array();
var albumContainer = document.getElementById('album-container');

function loadGalleryNav() {
    photosData.forEach(albumData => {
        // console.log(albumData.photos);
        const albumElement = document.createElement('div');
        albumElement.className = 'album';
        
        const albumCover = document.createElement('img');
        albumCover.className = 'album-cover';
        albumCover.src = albumData.photos[0].imgUrl;

        const albumNameClass = document.createElement('div');
        albumNameClass.className = 'album-name';

        const nameElement = document.createElement('h3');
        nameElement.textContent = albumData.continent;

        albumNameClass.appendChild(nameElement);

        albumElement.appendChild(albumCover);
        albumElement.appendChild(albumNameClass);

        albumContainer.appendChild(albumElement);
    });

    // console.log(albumContainer.children[0].classList.remove('active'));
}

function showPhotoDetails(photo) {
    const main = document.querySelector('main');
    main.classList.add('darken');
    main.classList.add('test');

    const photoDetails = document.createElement('div');
    photoDetails.className = 'photo-details';

    const closeBtn = document.createElement('button');
    closeBtn.className = 'close-btn';
    closeBtn.innerHTML = '<img src="assets/close_icon.svg" />';
    closeBtn.addEventListener('click', () => {
        photoDetails.remove();
        main.classList.remove('darken');
    });

    const imgElement = document.createElement('img');
    imgElement.src = photo.imgUrl;
    imgElement.alt = photo.name;

    const nameElement = document.createElement('h3');
    nameElement.textContent = photo.name;

    const locationElement = document.createElement('p');
    locationElement.textContent = photo.location;

    photoDetails.appendChild(closeBtn);
    photoDetails.appendChild(imgElement);
    photoDetails.appendChild(nameElement);
    photoDetails.appendChild(locationElement);

    const body = document.querySelector('body');
    body.appendChild(photoDetails);
}

function createPhotoElement(photo) {
    const photoElement = document.createElement('div');
    photoElement.className = 'photo';

    const imgElement = document.createElement('img');
    imgElement.src = photo.imgUrl;
    imgElement.alt = photo.name;
    imgElement.addEventListener('click', ()=> {
        showPhotoDetails(photo);
    });

    photoElement.appendChild(imgElement);
    return photoElement;
}

function loadPhotos(photos) {
    // console.log(photos);
    const galleryView = document.getElementById('gallery-view');
    galleryView.innerHTML = ''; // apus isinya

    photos.forEach((photo) => {
        const photoElement = createPhotoElement(photo);
        galleryView.appendChild(photoElement);
    });
}

function openAlbum(album, galleryIndex) {
    album.classList.add('active');
    loadPhotos(photosData[galleryIndex].photos);
}

function albumListener() {
    const albums = $('.album');

    albums.click(function() {
        // console.log(this);
        let galleryIndex = 0;
        
        // ilangin semua active
        for (let i = 0; i < albums.length; i++) {
            if (albums.eq(i)[0] == this) galleryIndex = i;
            if (albums.eq(i)[0].classList.contains('active')) albums.eq(i)[0].classList.remove('active');
        }

        // console.log(galleryIndex);
        openAlbum(this, galleryIndex)
    });
}

function readPhotos() {
    fetch('./js/photos.json').then((res) => {
        return res.json();
    }).then((data) => {
        photosData = data;
        // console.log(photosData.filter(photosData => {
        //   return photosData.continent === 'Asia';
        // }));
        // biar dia kelar baca dulu baru ngeload ke html
        loadGalleryNav();
        albumListener();

        // init langsung buka yg asia
        openAlbum($('.album').eq(0)[0], 0);
    });
    
}

readPhotos();

// toggle gallery nav
const galleryNavButton = $('#gallery-nav-toggle');
const galleryNav = $('#gallery-nav');

galleryNavButton.click(()=> {
    console.log(galleryNav.hasClass('closed'));
    if (galleryNav.hasClass('closed')) galleryNav.removeClass('closed');
    else galleryNav.addClass('closed');
});