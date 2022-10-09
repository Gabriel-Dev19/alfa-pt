import { distritos } from "../../data";

export default function handler(req, res) {
  const { getUniqueDistrit } = req.query
  const distrito = distritos.find((item) => item.distrito === String(getUniqueDistrit))
  res.json(distrito)
}