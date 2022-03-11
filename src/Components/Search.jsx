import { useState } from "react";
import Result from "./Result";

export default function Search() {
  const [text, setText] = useState("");
  // console.log(text);
  return (
    <section>
      <input type="text" onChange={(event) => setText(event.target.value)} />
      <button onClick={() => console.log("Search Click")}>Search</button>
      <button>Shuffle</button>
      <Result searchText={text} />
    </section>
  );
}
