import { useState } from "react";
import "./App.css";
import faqs from "./faqs.json"

function App() {
  

  return (
    <div className="App">
      <h1>❤️ FAQ: About Life</h1>
      <Accordion data={faqs} />
    </div>
  );
}

function Accordion({ data }) {
  return (
    <div className="Accordion">
      {data.map((item, index) => {
        return (
          <AccordionItem
            num={index + 1}
            key={index}
            title={item.title}
            text={item.text}
          />
        );
      })}
    </div>
  );
}

function AccordionItem({num, title, text}) {
const [isOpen, setIsOpen] = useState(false)

function handleToggle(){
  setIsOpen(prev => !prev)
}

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{num <=9 ? `0${num}` : num}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div  className="content-box">{text}</div>}
    </div>
  );
}
export default App;
