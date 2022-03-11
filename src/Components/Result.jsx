// https://www.themealdb.com/api/json/v1/1/search.php?s=curry
import { useEffect, useState } from "react";

export default function Result(props) {
  const [meals, setMeals] = useState([]);

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
  console.log(props.searchText);

  meals
    .filter((meal) => {
      if (meal.strMeal.toLowerCase().includes(props.searchText.toLowerCase())) {
        return meal;
      }
      return null;
    })
    .map((item) => {
      return item;
    });
  // setsearchItem(searchItem1)

  return <div></div>;
}
