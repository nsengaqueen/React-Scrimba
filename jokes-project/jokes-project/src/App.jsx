import React from "react";
import Jokes from "./components/Jokes";


function App() {
  return (
    <div>
      <Jokes
        Setup=" I got my daughter a fridge for her birthday."
        Punchline=" I can't wait to see her face light up when she opens it."
      />
      <Jokes
        Setup=" How did the hacker escape the police?"
        Punchline=" He just ransomware!"
      />
      <Jokes
        Setup=" Why don't pirates travel on mountain roads?"
        Punchline=" Scurvy."
      />
      <Jokes
        Setup=" Why do bees stay in the hive in the winter?"
        Punchline=" Swarm."
      />
      <Jokes
        Punchline="It’s hard to explain puns to kleptomaniacs because 
they always take things literally."
      />
    </div>
  );
}
export default App;
