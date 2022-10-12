import LayoutDefault from "../layouts/LayoutDefault";
import axios from 'axios'

export default function Index({ response }) {
  return (
    <LayoutDefault title={'Aqui é o title'} dataDistritos={response}>
      <section style={{ height: '200vh' }}></section>
      Aaqui é o children
    </LayoutDefault>
  )
}

export const getStaticProps = async () => {
  const DEV_URL = process.env.NEXT_PUBLIC_URL_LOCAL
  const { data } = await axios.get(`${DEV_URL}/api/distritos`);
  const response = data;
  return {
    props: {
      response,
    },
  };
};
