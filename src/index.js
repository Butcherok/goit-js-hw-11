import axios from 'axios';
import Notiflix from 'notiflix';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import getImagesList from "./js/fetchImages";

let inputText = '';

const form = document.getElementById("search-form");
const imagesGallery = document.querySelector('.gallery');

form.addEventListener("input", onInputData);
form.addEventListener("submit", onSubmitSearch);

function onInputData(e) {
    return inputText = e.target.value.trim();
}

function onSubmitSearch(e) {
    e.preventDefault();
    console.log('out input', inputText);
    getImagesList(inputText)
        .then(selectedImages)
        .then(updateSetImages) 
        .catch()
}

function selectedImages(obj) {
    console.log('out object', obj.data);
    const setImages = obj.data.hits;
    console.log('out list', setImages);
    return setImages.reduce(
        (markup, picture) => createImage(picture) + markup,
        ""
    );
}

function updateSetImages(markup) {
    imagesGallery.innerHTML = markup;

}

function createImage({
    webformatURL,
    largeImageURL,
    tags,
    likes,
    views,
    comments,
    downloads}) {
    return`
    <div class="photo-card">
        <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        <div class="info">
            <p class="info-item">
                <b>Likes</b> ${likes}
            </p>
            <p class="info-item">
                <b>Views</b> ${views}
            </p>
            <p class="info-item">
                <b>Comments</b> ${comments}
            </p>
            <p class="info-item">
                <b>Downloads</b> ${downloads}
            </p>
        </div>
    </div>
    `
}