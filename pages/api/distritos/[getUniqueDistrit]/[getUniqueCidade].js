import { distritos } from "../../data";

export default function handler(req, res) {
  const { getUniqueDistrit, getUniqueCidade } = req.query
  const distrito = distritos.find((item) => item.distrito === String(getUniqueDistrit))
  const cidade = distrito.cidades.find((item) => item.cidade === String(getUniqueCidade))
  res.json(cidade)
}