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
  // // Saves a post to the database
  // savePost: function(postData) {
  //   return axios.post("/api/books", postData);
  // }
  getBooksByTitle: function(title) {
    return new Promise((resolve, reject) => {
      axios
        .get(`https://www.googleapis.com/books/v1/volumes?q=${title}&key=${key}`)
        .then(res => {
          const users = res.data;
          console.log(users);
          // const results = users.map(user => {
          //   return {
          //     login: user.login,
          //     image: user.avatar_url,
          //     title: title
          //   };
          // });
          resolve("results will go here...");
        })
        .catch(err => reject(err));
    });
  }
};
