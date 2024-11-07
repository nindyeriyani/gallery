const galleryData = [
  { src: 'img/cover.png', title: 'Tittle Right Here', description: 'Description about your stuff will be shown right here with Text Align center so it will be so beauty~!' },
  { src: 'img/cover.png', title: 'Tittle Right Here', description: 'Description about your stuff will be shown right here with Text Align center so it will be so beauty~!' },
  { src: 'img/cover.png', title: 'Tittle Right Here', description: 'Description about your stuff will be shown right here with Text Align center so it will be so beauty~!' },
  { src: 'img/cover.png', title: 'Tittle Right Here', description: 'Description about your stuff will be shown right here with Text Align center so it will be so beauty~!' },
  { src: 'img/cover.png', title: 'Tittle Right Here', description: 'Description about your stuff will be shown right here with Text Align center so it will be so beauty~!' },
  { src: 'img/cover.png', title: 'Tittle Right Here', description: 'Description about your stuff will be shown right here with Text Align center so it will be so beauty~!' },
  { src: 'img/cover.png', title: 'Tittle Right Here', description: 'Description about your stuff will be shown right here with Text Align center so it will be so beauty~!' },
];

const galleryContainer = document.querySelector('.photos');

galleryData.forEach(item => {
  const photoDiv = document.createElement('div');
  photoDiv.classList.add('photos');
  
  photoDiv.innerHTML = `
    <img src="${item.src}" alt="${item.title}">
    <div class="photo-infos">
      <h3 class="title">${item.title}</h3>
      <p class="desc">${item.description}</p>
    </div>
  `;
  
  galleryContainer.appendChild(photoDiv);
});

document.querySelectorAll('.photos').forEach(item => {
  item.addEventListener('click', openModal);
});

function openModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("imageModal");
  modal.style.display = "none";
}

document.querySelector(".close").addEventListener("click", closeModal);
