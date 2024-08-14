import React, { useState } from "react";
import Header from "./Header";
import Counter from "./Counter";
import Content from "./Content";
import Footer from "./Footer";
import Status from "./Status";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <Header title="Counter App" />
      <Content />

      <Counter count={count} increment={increment} />
      <Status count={count} />

      <Footer year={2024} />
    </div>
  );
}

export default App;
