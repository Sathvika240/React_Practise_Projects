import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

function App() {
  const [selectedItem, setSelectedItem] = useState(0);

  function handleSelectedItem(i) {
    setSelectedItem(i);
  }

  return (
    <div className="accordian">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={selectedItem === index + 1 ? "item open" : "item"}
          onClick={() => handleSelectedItem(index + 1)}
        >
          <span className="number">{index + 1}</span>
          <span className="title">{faq.title}</span>
          <div
            className={selectedItem === index + 1 ? "content-box" : "hidden"}
          >
            <ul>
              <li>{faq.text}</li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
export default App;
