import { useSelector, useDispatch } from "react-redux";
import MenuDetails from "./MenuDetails";
import { clearCard } from "../Utils/cardSlice";

const Cart = () => {
  const cartItems = useSelector(store => store.card.items);

  const dispacth = useDispatch();

  const clearCartItems = () => {
    dispacth(clearCard());
  };

  return (
    <div className="w-6/12 m-auto">
      <h1 className="text-center font-bold text-xl my-4">card items</h1>
      <button
        className="flex my-5 mx-auto font-bold text-sm my-4 p-2 text-white cursor-pointer bg-black rounded-lg"
        onClick={() => clearCartItems()}
      >
        Clear Cart
      </button>

      <div className="bg-gray-50">
        {cartItems.length === 0 ? (
          <h1> pls add something to cart</h1>
        ) : (
          cartItems.map(item => {
            return <MenuDetails key={item.id} resMenuItem={item} />;
          })
        )}
      </div>
    </div>
  );
};

export default Cart;
