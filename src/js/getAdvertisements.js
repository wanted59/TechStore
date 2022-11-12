const advertisements = {
  data: [
    {
      id: 1,
      img: "./assets/images/advertisements/rsm-500.jpg",
      title: "РСМ-500",
      price: "500 000 000",
      date: "11 ноября 11:11"
    },
    {
      id: 2,
      img: "./assets/images/advertisements/rsm-500.jpg",
      title: "РСМ-500",
      price: "200 000 000",
      date: "8 ноября 01:11"
    },
    {
      id: 3,
      img: "./assets/images/advertisements/rsm-500.jpg",
      title: "РСМ-500",
      price: "180 000 000",
      date: "6 ноября 41:11"
    },
    {
      id: 4,
      img: "./assets/images/advertisements/rsm-500.jpg",
      title: "РСМ-500",
      price: "80 000 000",
      date: "7 ноября 41:11"
    },
    {
      id: 5,
      img: "./assets/images/advertisements/rsm-500.jpg",
      title: "РСМ-500",
      price: "80 000 000",
      date: "7 ноября 41:11"
    },
  ]
}

const getAdvertisements = (advertisements) => {
  return advertisements.data;
}

const obtainedAdvertisements = getAdvertisements(advertisements);

const setAdvertisements = (advertisements) => {
  const advertisementsList = document.querySelector('.advertisements__list');

  advertisements.forEach((element) => {
    advertisementsList.innerHTML += `
        <li class="advertisements__item advertisement">
        <div class="advertisement__top">
          <a class="advertisement__link" href="#">
            <img class="advertisement__img" src="${element.img}" alt="${element.title}">
          </a>
        </div>
        <div class="advertisement__content">
          <a class="advertisement__title" href="#">${element.title}</a>
          <div class="advertisement__price">${element.price} ₽</div>
        </div>
        <div class="advertisement__bottom">
          <div class="advertisement__date">${element.date}</div>
        </div>
      </li>
    `
  });

  return advertisementsList;
}

setAdvertisements(obtainedAdvertisements);