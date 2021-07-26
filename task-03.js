const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.getElementById("gallery");
const addGalleryList = images.map(function (image) {
  const imgSrc = image.url;
  const imgAlt = image.alt;
  const addImageInGallery = `
  <li>
  <img src = ${imgSrc},
  alt = ${imgAlt}, 
  width = 500px
  height = 350px
  ></li>
  `;
  return addImageInGallery;
});
galleryList.insertAdjacentHTML("beforeend", addGalleryList.join(" "));
