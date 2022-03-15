export default function AllData(props) {
  // console.log("all data", meal[0].strMeal);
  console.log("called", props.meal);
  return (
    <div>
      <hr />
      <h2>{props.meal.strMeal}</h2>
      <img
        src={props.meal.strMealThumb}
        alt={props.meal.strMeal}
        style={{ width: "200px" }}
      />
      <ul style={{ listStyle: "none", marginLeft: "0px", paddingLeft: "0" }}>
        <li>
          <span>Category-:</span> {props.meal.strCategory}
        </li>
        <li>
          <span>Area-:</span> {props.meal.strArea}
        </li>
      </ul>
      <p style={{ width: "70%", margin: "auto" }}>
        {props.meal.strInstructions}
      </p>
      <h4>Ingredients</h4>
      <ul style={{ listStyle: "none", marginLeft: "0px", paddingLeft: "0" }}>
        <li>
          {props.meal.strIngredient1} {props.meal.strMeasure1}
        </li>
        <li>
          {props.meal.strIngredient2} {props.meal.strMeasure2}
        </li>
        <li>
          {props.meal.strIngredient3} {props.meal.strMeasure3}
        </li>
        <li>
          {props.meal.strIngredient4} {props.meal.strMeasure4}
        </li>
        <li>
          {props.meal.strIngredient5} {props.meal.strMeasure5}
        </li>
        <li>
          {props.meal.strIngredient6} {props.meal.strMeasure6}
        </li>
        <li>
          {props.meal.strIngredient7} {props.meal.strMeasure7}
        </li>
        <li>
          {props.meal.strIngredient8} {props.meal.strMeasure8}
        </li>
        <li>
          {props.meal.strIngredient9} {props.meal.strMeasure9}
        </li>
        <li>
          {props.meal.strIngredient10} {props.meal.strMeasure10}
        </li>
        <li>
          {props.meal.strIngredient11} {props.meal.strMeasure11}
        </li>
        <li>
          {props.meal.strIngredient12} {props.meal.strMeasure13}
        </li>
      </ul>
    </div>
  );
}
