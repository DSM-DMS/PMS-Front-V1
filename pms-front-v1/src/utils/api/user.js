import useSWR from "swr";
import { authFetcher, fetcher, JwURL } from "../axios/axios";

export function FetchNotice() {
  const { data, error } = useSWR(`${JwURL}notice`, fetcher);
  return data;
}

export function FetchClub() {
  const { data, error } = useSWR(`${JwURL}introduce/clubs`, fetcher);
  return data;
}

export function FetchClubDetail(clubTitle) {
  const { data, error } = useSWR(
    `${JwURL}introduce/clubs/${clubTitle}`,
    authFetcher
  );
  return data;
}

export function FetchMeal(TodayDate) {
  const { data, error } = useSWR(`${JwURL}event/meal/${TodayDate}`, fetcher);
  return data;
}

export function FetchMealImg(TodayDate) {
  const { data, error } = useSWR(
    `${JwURL}event/meal/picture/${TodayDate}`,
    authFetcher
  );
  return data;
}

export function FetchEvent() {
  const { data, error } = useSWR(`${JwURL}calendar`, authFetcher);
  return data;
}
