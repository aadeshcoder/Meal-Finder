// https://www.themealdb.com/api/json/v1/1/search.php?s=curry
import { useEffect, useState } from "react";
import SearchResult from "./SearchResult";

export default function Result({ searchText }) {
  const [meals, setMeals] = useState([]);
  let [SearchRes, setSearchRes] = useState([]);

  useEffect(() => {
    async function fetchdata() {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=curry"
      );
      const data = await res.json();
      setMeals(data.meals, []);
    }
    fetchdata();
  }, []);

  return (
    <div>
      <button
        className="formBtn"
        onClick={() => {
          if (searchText === "") {
            alert("Please Enter the Meal Name");
          }
          if (searchText !== "") {
            setSearchRes(
              meals
                .filter((meal) => {
                  if (
                    meal.strMeal
                      .toLowerCase()
                      .includes(searchText.toLowerCase())
                  ) {
                    return meal;
                  }
                  return null;
                })
                .map((item) => {
                  return item;
                })
            );
          }
          console.log("SearchRes from result", SearchRes);
          // console.log("Search Clicked");
        }}
      >
        Search
      </button>
      <button className="formBtn">Shuffle</button>
      {SearchRes !== undefined ? <SearchResult item={SearchRes} /> : null}
    </div>
  );
}
