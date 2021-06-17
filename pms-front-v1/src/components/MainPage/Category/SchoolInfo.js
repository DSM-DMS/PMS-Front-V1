import React, { useState } from "react";
import { FetchNotice, FetchNoticeNews } from "../../../utils/api/user";
import * as S from "../style";

const colorLists = [
  { id: 1, name: "가정통신문" },
  { id: 2, name: "공지사항" },
];

const SchoolInfo = () => {
  const [btnSelect, setBtnSelect] = useState(1);
  const uploadDate = "upload-date";

  const backgroundColor = (list) => {
    setBtnSelect(list.id);
  };

  function textSlice(txt, len) {
    if (txt.length > len) {
      txt = txt.substr(0, len) + " ...";
      console.log(txt);
    }
    return txt;
  }

  //api
  const fetchNotice = FetchNotice(0);
  const fetchNoticeNews = FetchNoticeNews();

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
          {btnSelect === 1 ? (
            <>
              {fetchNoticeNews?.map((notice) => (
                <li key={notice.id}>
                  <span>{textSlice(notice.title, 30)}</span>
                  <span>{notice[`${uploadDate}`]}</span>
                </li>
              ))}
            </>
          ) : (
            <>
              {fetchNotice?.map((notice) => (
                <li key={notice.id}>
                  <span>{textSlice(notice.title, 30)}</span>
                  <span>{notice[`${uploadDate}`]}</span>
                </li>
              ))}
            </>
          )}
        </S.InfoList>
      </div>
    </S.SchoolInfo>
  );
};

export default SchoolInfo;
