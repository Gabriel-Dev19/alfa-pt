import axios from 'axios'
import { formattedKebabCase } from '../../helpers/fonts';
import LayoutDefault from "../../layouts/LayoutDefault";
import { useRouter } from 'next/router';

export default function Distritos({ response, responseListDistritos }) {

  const router = useRouter()

  return(
    <LayoutDefault title={formattedKebabCase(response.distrito)} dataDistritos={responseListDistritos}>
      <div>
        Distrito: {response.distrito}
        <br />
        Nome: {response.name}
        <br />
        <ul>
          {response.cidades.map((item, index) => (
            <li key={index}>
              <a href={`${router.query.distrito}/${item.cidade}`}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </LayoutDefault>
  )
}

export const getStaticProps = async ({ params }) => {
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const dataDistrito = await (await axios.get(`${DEV_URL}/api/distritos/${params.distrito}`)).data;
  const dataDistritos = await (await axios.get(`${DEV_URL}/api/distritos`)).data;
  const response = dataDistrito;
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
  const paths = data.map((distrito) => ({ params: { distrito: distrito.distrito.toString() } }));
  return {
    paths,
    fallback: false,
  };
};