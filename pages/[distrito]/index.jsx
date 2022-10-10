import axios from 'axios'
import { formattedKebabCase } from '../../helpers/fonts';
import LayoutDefault from "../../layouts/LayoutDefault";

export default function Distritos({ response }) {
  return(
    <LayoutDefault title={formattedKebabCase(response.distrito)}>
      <div>
        Distrito: {response.distrito}
      </div>
    </LayoutDefault>
  )
}

export const getStaticProps = async ({ params }) => {
  let dev = process.env.NODE_ENV !== 'production';
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const PROD_URL = process.env.NEXT_PUBLIC_URL_PROD
  const { data } = await axios.get(`${dev ? DEV_URL : PROD_URL}/api/distritos/${params.distrito}`);
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
  const paths = data.map((distrito) => ({ params: { distrito: distrito.distrito.toString() } }));
  return {
    paths,
    fallback: false,
  };
};