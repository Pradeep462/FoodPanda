const RestroruntCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="w-[220] mb-4 bg-gray-100 p-2 rounded-lg">
      <img
        className="rounded-lg"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
        alt="restro img"
        loading="lazy"
      />
      <h3>{name}</h3>
      <h4>{cuisines?.join(", ")}</h4>
      <h5>{avgRating} star Rated</h5>
    </div>
  );
};

export default RestroruntCard;
