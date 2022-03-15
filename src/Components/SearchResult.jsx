import { useState } from "react";
import AllData from "./AllData";
import "./temp.css";
const SearchResult = ({ item }) => {
  const [data, setData] = useState("");
  return (
    <>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {item.map((meal) => (
          // console.log(meal.strMeal)
          <div key={meal.idMeal}>
            <button
              className="imgBtn"
              style={{ cursor: "pointer" }}
              onClick={() => {
                // console.log(meal.strMeal);
                setData(meal);
              }}
            >
              <h2>{meal.strMeal}</h2>
              <img
                className="mealImgBtn"
                src={meal.strMealThumb}
                style={{ width: "200px" }}
                alt="img"
              />
            </button>
          </div>
        ))}
      </div>
      {/* <div> {isClicked ? <AllData meal={item} /> : null} </div> */}
      <div>{data ? <AllData meal={data} /> : null}</div>
    </>
  );
};
export default SearchResult;
