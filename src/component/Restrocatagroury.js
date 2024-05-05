import MenuDetails from "./MenuDetails";

const Restrocatagroury = ({ resData, setShowDetails, isActive }) => {
  const updateState = () => {
    setShowDetails();
  };

  return (
    <div className="w-6/12 bg-gray-50 m-auto  py-2 px-4 mb-4 shadow-lg ">
      <div
        className=" flex justify-between py-2 font-bold cursor-pointer"
        onClick={() => updateState()}
      >
        <span>{resData.title}</span>
        <span>{isActive ? "➖" : "➕"}</span>
      </div>
      {resData.itemCards &&
        isActive &&
        resData.itemCards.map(resMenu => {
          return (
            <MenuDetails
              key={resMenu?.card?.info?.id}
              resMenuItem={resMenu?.card?.info}
            />
          );
        })}
    </div>
  );
};

export default Restrocatagroury;
