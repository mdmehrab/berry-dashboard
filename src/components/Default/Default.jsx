import React from "react";
import DefaultWidget from "../../common/Default";

function Default() {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <DefaultWidget
        title="card 1"
        desc={"this is desc1"}
        imgSrc={
          "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        btnText={"show more"}
      />
      <DefaultWidget
        title="card 2"
        desc={"this is desc2"}
        imgSrc={
          "https://plus.unsplash.com/premium_photo-1683121480406-6983601863a4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
        btnText={"Learn more"}
      />
    </div>
  );
}

export default Default;
