import React from "react";
import "./CollectionTabs.scss";

function CollectionTabs(props: any) {
  return (
    <div className="container">
      <div className="collection__tabs__inner">
        {props.tabs.map((item: string, key: number) => {
          if (key === 0) {
            return (
              <button key={key} className="active">
                {item}
              </button>
            );
          }
          return <button key={key}>{item}</button>;
        })}
      </div>
    </div>
  );
}

export default CollectionTabs;
