import axios from 'axios'
import LayoutDefault from '../../layouts/LayoutDefault';
import { formattedKebabCase } from '../../helpers/fonts'

export default function Cidade({ response }) {
  return(
    <LayoutDefault title={formattedKebabCase(response.cidade)}>
      Nome da cidade: {response.cidade}
    </LayoutDefault>
  )
}

export const getStaticProps = async ({params}) => {
  const { data } = await axios.get(`http://localhost:3000/api/distritos/${params.distrito}/${params.cidade}`);
  const response = data;
  return {
    props: {
      response,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/distritos`);
  const paths = data.map((distrito) => {
    return(
      distrito.cidades.map((item) => {
        return{
          params: {
            distrito: distrito.distrito.toString(),
            cidade: item.cidade.toString()
          }
        }
      })
    )
  }).flat();
  return {
    paths,
    fallback: false,
  };
};