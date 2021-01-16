import axios from "axios";
const key = "AIzaSyAGosria5CUNXJ4rHophDpvcJwVcWaW0f8";

export default {
  // // Gets all posts
  // getPosts: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the post with the given id
  // getPost: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the post with the given id
  // deletePost: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // Saves a post to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  getBooksByTitle: function(title) {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${key}`)
        .then(res => {
          const books = res.data.items;
          const results = books.map(book => {
            return {
              title: book.volumeInfo.title,
              authors: book.volumeInfo.authors,
              image: book.volumeInfo.imageLinks.smallThumbnail,
              link: book.volumeInfo.canonicalVolumeLink
            };
          });
          resolve(results);
        })
        .catch(err => reject(err));
    });
  }
};
