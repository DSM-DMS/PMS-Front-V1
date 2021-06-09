import useSWR from "swr";
import { authFetcher, fetcher, JwURL } from "../axios/axios";

// 공지사항
export function FetchNotice(num) {
  const { data } = useSWR(`${JwURL}notice?page=${num}`, fetcher);
  return data;
}

//가정통신문
export function FetchNoticeNews() {
  const { data } = useSWR(`${JwURL}notice/news?page=0`, fetcher);
  return data;
}

//동이리 목록
export function FetchClub() {
  const { data } = useSWR(`${JwURL}introduce/clubs`, fetcher);
  return data;
}

// 동아리 상세 목록
export function FetchClubDetail(clubTitle) {
  const { data } = useSWR(`${JwURL}introduce/clubs/${clubTitle}`, authFetcher);
  return data;
}

// 급식 목록
export function FetchMeal(TodayDate) {
  const { data } = useSWR(`${JwURL}event/meal/${TodayDate}`, fetcher);
  return data;
}

// 급식 이미지
export function FetchMealImg(TodayDate) {
  const { data } = useSWR(
    `${JwURL}event/meal/picture/${TodayDate}`,
    authFetcher
  );
  return data;
}

// 행사
export function FetchEvent() {
  const { data } = useSWR(`${JwURL}calendar`, authFetcher);
  return data;
}
