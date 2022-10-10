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
  let dev = process.env.NODE_ENV !== 'production';
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
  const { data } = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/distritos/${params.distrito}/${params.cidade}`);
  const response = data;
  return {
    props: {
      response,
    },
  };
};

export const getStaticPaths = async () => {
  let dev = process.env.NODE_ENV !== 'production';
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
  const { data } = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/distritos`);
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