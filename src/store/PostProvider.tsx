import { createContext, useReducer, FC } from "react";
import Post from "../models/Post";

interface InitState {
  posts: Post[];
}

type ActionType = {
  type: "ADD_POST";
  payload: Post;
};

const initState: InitState = {
  posts: [
    {
      id: 1,
      productName: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      product: "1",
      title: "hello",
      category: "men's clothing",
      content: "content of post ",
      tags: "",
    },
    {
      id: 2,
      productName:
        "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet ",
      product: "5",
      title: "hello",
      category: "jewelry",
      content: "content of post ",
      tags: "",
    },
    {
      id: 3,
      productName: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
      product: "9",
      title: "hello",
      category: "electronics",
      content: "content of post ",
      tags: "",
    },
    {
      id: 4,
      productName:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      product: "16",
      title: "hello",
      category: "women's clothing",
      content: "content of post ",
      tags: "",
    },
  ],
};

// REDUCER
function reducer(state: InitState, action: ActionType) {
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };

    default:
      return state;
  }
}

export const PostContext = createContext<{
  state: InitState;
  dispatch: React.Dispatch<ActionType>;
}>({ state: initState, dispatch: () => null });

export const PostProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);
  return (
    <PostContext.Provider value={{ state, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};
