import { useDispatch } from "react-redux";
import { addItem } from "../Utils/cardSlice";

const MenuDetails = ({ resMenuItem }) => {
  const displach = useDispatch();

  const addItemToCard = () => {
    displach(addItem(resMenuItem));
  };

  return (
    <div className="text-left px-4 border-b-2 border-b-black-200 py-2 flex gap-x-8 justify-between">
      <div className="w-[420px]">
        <span className="font-medium">{resMenuItem.name} - </span>
        <span className="font-medium">
          {" "}
          ₹{" "}
          {resMenuItem.price
            ? resMenuItem.price / 100
            : resMenuItem.defaultPrice / 100}
        </span>
        <p className="text-sm">{resMenuItem.description}</p>
      </div>
      <div className="w-[100px] h-[100px] relative">
        <button
          className="absolute bg-green-700 py-1 px-2 rounded-lg font-bold left-6"
          onClick={() => addItemToCard()}
        >
          add +
        </button>
        <img
          className="w-full h-full object-cover"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resMenuItem?.imageId
          }
        />
      </div>
    </div>
  );
};

export default MenuDetails;
