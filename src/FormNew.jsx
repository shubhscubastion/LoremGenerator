import { useState } from "react";
import { nanoid } from "nanoid";
import data from "./data";
const FormNew = () => {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // let amount = parseInt(count);
    console.log(count);
    setText(data.slice(0,count));
  };

  return (
    <section className="section-center">
      <h4>Tired of Boring Lorem ipsum?</h4>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="number" className="form-label">
            number
          </label>
          <input
            type="number"
            className="form-input"
            id="number"
            name="number"
            min="1"
            step="1"
            max="8"
            value={count}
            onChange={(e) => {
              setCount(e.target.value);
            }}
          ></input>
        </div>

        <button type="submit" className="btn">
          submit
        </button>
      </form>
      <article className="lorem-text">
        {text.map((item,index)=>{
          return <p key={nanoid()}>
            {item}
          </p>
        })}
      </article>
    </section>
  );
};
export default FormNew;
