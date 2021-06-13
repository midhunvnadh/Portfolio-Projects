export default {
  method: "GET",
  headers: {
    "Content-Type": "application/json; charset=utf-8",
    Authorization: "token " + process.env.GITHUB_OAUTH,
  },
};
