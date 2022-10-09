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
  const { data } = await axios.get(`http://localhost:3000/api/distritos/${params.distrito}`);
  const response = data;
  return {
    props: {
      response,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/distritos`);
  const paths = data.map((distrito) => ({ params: { distrito: distrito.distrito.toString() } }));
  return {
    paths,
    fallback: false,
  };
};