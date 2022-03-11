const explore_gallery = document.getElementById('explore_gallery');
const popup = document.getElementById('popup');
const explore_selected_image = document.getElementById('explore_selected_image');
const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const selectedIndex = null;

imageIndexes.forEach(i => {
    const image = document.createElement('img');
    image.src = `/small_images/cover_photo-${i}.jpg`;
    image.alt = `Gallery photo ${i};`
    image.classList.add('explore_gallery_img');


    image.addEventListener('click', () =>{
        //popup
        popup.style.transform = `translateY(0)`;
        explore_selected_image.src = `/small_images/cover_photo-${i}.jpg`;
        explore_selected_image.alt = `Gallery photo ${i};`
    });

    explore_gallery.appendChild(image);
});

popup.addEventListener('click', ()=>{
    popup.style.transform = `translateY(-100%)`;
    popup.src = '';
    popup.alt = '';
})