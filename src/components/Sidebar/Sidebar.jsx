import React from "react";
import { items } from "../../data/sidebar";

const Sidebar = () => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <h6>{item.title}</h6>

          {item.pairs.map((pair, index) => {
            const Icon = pair.icon;
            return (
              <div key={index}>
                <span>
                  <Icon />
                </span>
                <span>{pair.name}</span>
              </div>
            );
          })}
        </div>
      ))}
    </>
  );
};

export default Sidebar;
