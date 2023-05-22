const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = `35172830-be7dc29c069ae2fbfd826fe75`;

export const getSearchImages = async text => {
  const data = await fetch(
    `${BASE_URL}/?q=${text}&page=${this.page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return await data.json();
};
export default getSearchImages;
// export class PixabayAPI {
//   #BASE_URL = `https://pixabay.com/api/`;
//   #API_KEY = `35172830-be7dc29c069ae2fbfd826fe75`;

//   #BASE_SEARCH_PARAMS = {
//     image_type: `photo`,
//     orientation: `horizontal`,
//     safesearch: `true`,
//     per_page: 12,
//   };

//   get perPage() {
//     return this.#BASE_SEARCH_PARAMS.per_page;
//   }

//   q = null;
//   page = 1;

//   async fetchPhotos() {
//     return await axios.get(`${this.#BASE_URL}?key=${this.#API_KEY}&`, {
//       params: {
//         q: this.q,
//         ...this.#BASE_SEARCH_PARAMS,
//         page: this.page,
//       },
//     });
//   }
// }
