import axios from 'axios'
import { formattedKebabCase } from '../../helpers/fonts';
import LayoutDefault from "../../layouts/LayoutDefault";

export default function Distritos({ response, responseListDistritos }) {
  return(
    <LayoutDefault title={formattedKebabCase(response.distrito)} dataDistritos={responseListDistritos}>
      <div>
        Distrito: {response.distrito}
        <br />
        Nome: {response.name}
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