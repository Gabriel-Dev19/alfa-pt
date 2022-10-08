import LayoutDefault from "../layouts/LayoutDefault";

export default function Home() {
  return (
    <LayoutDefault title={'Aqui é o title'}>
      <section style={{ height: '200vh' }}></section>
      Aaqui é o children
    </LayoutDefault>
  )
}
