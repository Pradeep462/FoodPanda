import { useEffect, useState } from "react";

const useRestroMenu = resId => {
  const [restroName, setRestroName] = useState();

  useEffect(() => {
    getResData();
  }, []);

  const getResData = async () => {
    let restroMenuData = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5642452&lng=73.7768511&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    restroMenuData = await restroMenuData.json();

    setRestroName(
      restroMenuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    );
  };

  return restroName;
};

export default useRestroMenu;
