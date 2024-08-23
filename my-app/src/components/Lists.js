import { useState } from "react";
import style from "../assets/styles/index.module.css";
export const ListDisplay = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const lists = [
    {
      category: "HTML",
      questions: ["l1", "l2"],
    },
    {
      category: "CSS",
      questions: ["l3", "l4"],
    },
    {
      category: "JavaScript",
      questions: ["l5", "l6"],
    },
  ];

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      {isLoggedIn ? (
        lists.map((list, index) => {
          return (
            <ul key={index} className={style.bg_dark}>
              <h1>{list.category}</h1>
              {list.questions.map((question, index) => {
                return (
                  <li className={style.bg_primary} key={index}>
                    {question}
                  </li>
                );
              })}
            </ul>
          );
        })
      ) : (
        <p className="bg_dark p_3 text_light">Please login to view the list</p>
      )}
    </div>
  );
};
