import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_BOOK,
  REMOVE_BOOK,
  UPDATE_BOOKS,
  ADD_BOOK,
  ADD_FAVORITE,
  UPDATE_FAVORITES,
  REMOVE_FAVORITE,
  LOADING
} from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
  switch (action.type) {
  case SET_CURRENT_BOOK:
    return {
      ...state,
      currentPost: action.book,
      loading: false
    };

  case UPDATE_BOOKS:
    return {
      ...state,
      books: action.books,
      loading: false
    };

  // case ADD_BOOK:
  //   return {
  //     ...state,
  //     posts: [action.book, ...state.posts],
  //     loading: false
  //   };

  // case REMOVE_BOOK:
  //   return {
  //     ...state,
  //     posts: state.posts.filter((book) => {
  //       return book._id !== action._id; 
  //     })
  //   };

  case ADD_FAVORITE:
    return {
      ...state,
      favorites: [action.book, ...state.favorites],
      loading: false
    };

  // case UPDATE_FAVORITES:
  //   return {
  //     ...state,
  //     favorites: [...state.favorites],
  //     loading: false
  //   };

  case REMOVE_FAVORITE:
    return {
      ...state,
      favorites: state.favorites.filter((book) => {
        return book._id !== action._id; 
      })
    };

  case LOADING:
    return {
      ...state,
      loading: true
    };

  default:
    return state;
  }
};

const StoreProvider = ({ value = [], ...props }) => {
  const [state, dispatch] = useReducer(reducer, {
    books: [],
    currentBook: {
      _id: 0,
      title: "",
      description: "",
      authors: [],
      image: "",
      link: ""
    },
    favorites: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
