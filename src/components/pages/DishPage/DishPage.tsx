import axios from "axios";
import { useState, useEffect } from "react";
import { IDish } from "../../../interface/interface";
import DishPageContant from "../contantPages/DishPageContant/DishPageContant/DishPageContant";
import { useDispatch } from "react-redux";
import { dispatchDish } from "../../Redux/Actions";

function DishPage() {
  const dispatch = useDispatch();
  const [btnUpdateDish, setbtnUpdate] = useState(true);
  const [dish, setDish] = useState<IDish>();

  useEffect(() => {
    const apiUrl = "https://www.themealdb.com/api/json/v1/1/random.php";
    axios.get(apiUrl).then((responce) => {
      setDish(responce.data);
    });
  }, [btnUpdateDish]);

  const updateDish = () => {
    setbtnUpdate(!btnUpdateDish);
  };

  const saveDish = () => {
    if (dish?.meals[0]) {
      dispatch(dispatchDish(dish?.meals[0]));
      updateDish();
    }
  };

  return (
    <div>
      {dish?.meals[0] && (
        <DishPageContant
          dish={dish?.meals[0]}
          updateDish={updateDish}
          saveDish={saveDish}
        />
      )}
    </div>
  );
}
export default DishPage;
