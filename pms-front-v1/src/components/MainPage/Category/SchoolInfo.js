import React, { useState } from "react";
import * as S from "../style";

const colorLists = [
  { id: 1, name: "가정통신문" },
  { id: 2, name: "공지사항" },
];

const SchoolInfo = () => {
  const [btnSelect, setBtnSelect] = useState(1);
  const [buttonColor, setButtonColor] = useState("none");

  const backgroundColor = (list) => {
    setBtnSelect(list.id);
  };

  return (
    <S.SchoolInfo>
      <div className="container">
        <S.Title>학교소식</S.Title>
        <S.ButtonItem>
          <div className="button-cover">
            {colorLists.map((color) => (
              <label
                style={{
                  backgroundColor: color.id === btnSelect ? "white" : "#d37c7c",
                  color: color.id === btnSelect ? "#d37c7c" : "white",
                }}
                key={color.id}
                onClick={() => backgroundColor(color)}
              >
                <span>{color.name}</span>
              </label>
            ))}
          </div>
        </S.ButtonItem>
        <S.InfoList>
          <li>대덕어쩌고 저쩌고</li>
          <li>대덕어쩌고 저쩌고</li>
          <li>대덕어쩌고 저쩌고</li>
          <li>대덕어쩌고 저쩌고</li>
          <li>대덕어쩌고 저쩌고</li>
        </S.InfoList>
      </div>
    </S.SchoolInfo>
  );
};

export default SchoolInfo;
