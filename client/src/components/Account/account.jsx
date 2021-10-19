import React, {useState} from "react";
import axios from "axios";

function Account() {
  const [input, setInput] = useState({
    team: "",
    week: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setInput(prevInput => {
      return {
        ...prevInput, 
        [name]: value
      }
    })
  }

  function handleClick(event) {
    event.preventDefault();
    console.log(input);
    const newPick = {
      team: input.team,
      week: input.week,
    }

    axios.post("http://localhost:3001/create", newPick)
  }

  return (
    <div className="container">
      <h1>Account</h1>

{/* map through teams that have not been selected by the user */}
      <form>
        <div className="form-group">
          <input onChange={handleChange} name="team" value={input.team} autoComplete="on" className="form-control" placeholder="enter a team"></input>
        </div>
        <div className="form-group">
          <input onChange={handleChange} name="week" value={input.week} autoComplete="on" className="form-control" placeholder="10"></input>
        </div>

        <button onClick={handleClick} className="btn btn-lg btn-info">Save Pick</button>
      </form>
    </div>
  );
}

export default Account;
