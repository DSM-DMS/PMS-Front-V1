import React, { useState } from "react";
import { FetchNotice } from "../../../utils/api/user";
import * as S from "../style";

const colorLists = [
  { id: 1, name: "가정통신문" },
  { id: 2, name: "공지사항" },
];

const SchoolInfo = () => {
  const [btnSelect, setBtnSelect] = useState(1);

  const backgroundColor = (list) => {
    setBtnSelect(list.id);
  };

  //api
  const fetchNotice = FetchNotice();

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
          {fetchNotice?.map((notice, index) => (
            <li key={index}>{notice.title}</li>
          ))}
        </S.InfoList>
      </div>
    </S.SchoolInfo>
  );
};

export default SchoolInfo;
