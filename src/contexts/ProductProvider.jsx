import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";

const ProductContext = createContext();

export const useProductContext = () => {
  return useContext(ProductContext);
};

const ProductActions = {
  NEW_PRODUCT: "NEW_PRODUCT",
  ALL_PRODUCT: "ALL_PRODUCT",
  PRODUCT: "PRODUCT",
  UPDATE_PRODUCT: "UPDATE_PRODUCT",
  DELETE_PRODUCT: "DELETE_PRODUCT",
};

const initProductState = {
  products: [],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case ProductActions.NEW_PRODUCT: {
      return {
        ...state,
        products: [...state.products, action.payload.product],
      };
    }

    case ProductActions.ALL_PRODUCT: {
      return {
        ...state,
        products: action.payload.data,
      };
    }
  }
  return state;
};

export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initProductState);

  const [loading, setLoading] = useState(false);

  const getAllProductsAsync = async () => {
    try {
      const response = await fetch("http://localhost:8181/api/v1/product/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      console.log(data);
      dispatch({ type: ProductActions.ALL_PRODUCT, payload: { data } });
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getAllProductsAsync();
  }, []);

  const addProduct = (product) => {
    setLoading(true);
    dispatch({ type: ProductActions.NEW_PRODUCT, payload: { product } });
    setLoading(false);
  };

  return (
    <ProductContext.Provider value={{ state, addProduct }}>
      {!loading && children}
    </ProductContext.Provider>
  );
};
