import HeadDefault from "../components/HeaderAndFooter/HeadDefault";
import ScriptsDefault from "../components/HeaderAndFooter/ScriptsDefault";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LayoutDefault({ title, header = true, footer = true, children, dataDistritos }) {
  return (
    <>
      <HeadDefault title={title} />
      { header && <Header distritos={dataDistritos} /> }
      <main>{children}</main>
      { footer && <Footer /> }
      <ScriptsDefault />
    </>
  )
}