import fetchlib from "../../lib/fetchlib";

export default async function handler(req, res) {
  var page = parseInt(`${req.query.page}`);
  if (!page) page = 1;
  const works = await fetch(
    `https://api.github.com/users/midhunvnadh/repos?sort=created&per_page=12&page=${page}`,
    fetchlib
  );
  const data = await works.json();
  const finalData = data.filter((one) => one.fork == false);
  res.status(200).json(finalData);
}
