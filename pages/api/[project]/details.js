import fetchlib from "../../../lib/fetchlib";
export default async function handler(req, res) {
  const project = req.query.project;
  const works = await fetch(
    `https://api.github.com/repos/midhunvnadh/${project}`,
    fetchlib
  );
  const data = await works.json();

  res.status(200).json(data);
}
