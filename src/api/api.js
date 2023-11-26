import { clearUserData, getUserData } from "../views/utils.js";

const host = "https://parseapi.back4app.com";
const applicationId = '5IgptbDbqGJyL9jrN0E22H5aNErlrsLT95wsmYj5'
const apiKey = 'zmEGoj97JNp8xgy993p8yEuj5wC4tehdpf6Zqh7H';

async function request(method, url, body) {
  const options = {
    method,
    headers: {
      'X-Parse-Application-Id': applicationId,
      'X-Parse-REST-API-Key': apiKey
    },
  };

  if (body != undefined) {
    options.headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(body);
  }

  const userData = getUserData()
  if (userData != null) {
    options.headers["X-Parse-Session-Token"] = userData.accessToken;
  }

  try {
    const res = await fetch(`${host}${url}`, options);
    let data;
    if (res.status !== 204) {
      data = await res.json();
    }

    if (res.ok == false) {
      if (res.status === 403) {
        clearUserData();
      }
      const error = data;
      throw error;
    }
    return data;
  } catch (error) {
    alert(`Error: ${error.message}`)
    throw error;
  }
}

export const get = request.bind(null, "GET");
export const post = request.bind(null, "POST");
export const put = request.bind(null, "PUT");
export const del = request.bind(null, "DELETE");
