import fetchlib from "../../../lib/fetchlib";
var base64 = require("base-64");

export default async function handler(req, res) {
  const project = req.query.project;

  var data = {};
  try {
    const response = await fetch(
      `https://api.github.com/repos/midhunvnadh/${project}/contents/README.md`,
      fetchlib
    );
    const content = await response.json();
    data = content.content;
    if (response.status === 404) data = "404";
  } catch (e) {
    data = "error";
  }
  data = data === "404" || data === "error" ? data : base64.decode(data);
  res.status(200).json({ content: data });
}
