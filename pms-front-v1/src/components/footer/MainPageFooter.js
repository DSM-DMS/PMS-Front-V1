import React from "react";
import * as S from "./style";

function MainPageFooter() {
  return (
    <S.FooterWarpper>
      <div className="footer-container">
        <span>(34111)대전광역시 유성구 가정북로 76(장동 23-9)</span>
        <span>
          교무실 ☎: 042-866-8822, 교무실 Fax: 042-867-9900, 행정실 ☎:
          042-866-8885, 행정실 Fax: 042-863-4308
        </span>
        <span>
          취업지원센터 ☎: 042-866-8843, Fax: 042-866-8844, 사업자 등록 번호
          314-83-01600 / 기관 메일 dsmhs@korea.kr
        </span>
        <span>
          Copyrightⓒ 대덕소프트웨어마이스터고등학교. All rights reserved.
        </span>
      </div>
    </S.FooterWarpper>
  );
}

export default MainPageFooter;
