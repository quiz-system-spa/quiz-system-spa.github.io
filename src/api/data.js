import { get, post, put, del } from "./api.js";

const endpoints = {
  allQuizzes: "/classes/quizzes",
  create: "/classes/quizzes",
  getQuiz: "/classes/quizzes/",


};

export function getAllQuizzes() {
  return get(endpoints.allQuizzes);
}
export function createQuiz(title, topic) {
  return post(endpoints.create, { title, topic });
}
export function getQuizById(id) {
  return get(`${endpoints.getQuiz}${id}`);
}