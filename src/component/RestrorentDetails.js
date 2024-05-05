import SimmerComponent from "./Simmer";
import { useParams } from "react-router-dom";
import useRestroMenu from "../Utils/useRestroMenu";
import Restrocatagroury from "./Restrocatagroury";
import { useState } from "react";

const RestrorentDetails = () => {
  const [showDetails, setShowDetails] = useState(0);
  const { resId } = useParams();

  const restroMenuData = useRestroMenu(resId);

  if (restroMenuData?.length === 0) return <SimmerComponent />;

  const restroMenuFilteredData =
    restroMenuData &&
    restroMenuData.filter(resdata => resdata?.card?.card?.itemCards);

  const handleItemClick = index => {
    setShowDetails(prevIndex => (prevIndex === index ? null : index));
  };

  return (
    <div className="text-center">
      {restroMenuFilteredData &&
        restroMenuFilteredData.map((res, idx) => {
          return (
            <Restrocatagroury
              key={idx}
              resData={res.card.card}
              setShowDetails={() => handleItemClick(idx)}
              isActive={idx === showDetails ? true : false}
            />
          );
        })}
    </div>
  );
};

export default RestrorentDetails;
