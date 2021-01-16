import React, { createContext, useReducer, useContext } from "react";
import {
  SET_CURRENT_BOOK,
  REMOVE_BOOK,
  UPDATE_BOOKS,
  ADD_BOOK,
  ADD_SAVE,
  UPDATE_saved,
  REMOVE_SAVE,
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

  case ADD_SAVE:
    return {
      ...state,
      saved: [action.book, ...state.saved],
      loading: false
    };

  // case UPDATE_SAVED:
  //   return {
  //     ...state,
  //     book: [...state.book],
  //     loading: false
  //   };

  case REMOVE_SAVE:
    return {
      ...state,
      book: state.book.filter((book) => {
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
    book: {
      _id: 0,
      title: "",
      description: "",
      authors: [],
      image: "",
      link: ""
    },
    saved: [],
    loading: false
  });

  return <Provider value={[state, dispatch]} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
