import Notiflix from 'notiflix';
import axios from 'axios';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


function createImage() {
    return`
    <div class="photo-card">
        <img src="" alt="" loading="lazy" />
        <div class="info">
            <p class="info-item">
                <b>Likes</b>
            </p>
            <p class="info-item">
                <b>Views</b>
            </p>
            <p class="info-item">
                <b>Comments</b>
            </p>
            <p class="info-item">
                <b>Downloads</b>
            </p>
        </div>
    </div>
    `
}