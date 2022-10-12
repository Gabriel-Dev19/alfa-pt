import axios from 'axios'
import LayoutDefault from '../../layouts/LayoutDefault';
import { formattedKebabCase } from '../../helpers/fonts'

export default function Cidade({ response, responseListDistritos }) {
  return(
    <LayoutDefault title={formattedKebabCase(response.cidade)} dataDistritos={responseListDistritos}>
      Nome da cidade: {response.cidade}
    </LayoutDefault>
  )
}

export const getStaticProps = async ({params}) => {
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const dataCidade = await (await axios.get(`${DEV_URL}/api/distritos/${params.distrito}/${params.cidade}`)).data;
  const dataDistritos = await (await axios.get(`${DEV_URL}/api/distritos`)).data;
  const response = dataCidade;
  const responseListDistritos = dataDistritos;
  return {
    props: {
      response,
      responseListDistritos
    },
  };
};

export const getStaticPaths = async () => {
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const { data } = await axios.get(`${DEV_URL}/api/distritos`);
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