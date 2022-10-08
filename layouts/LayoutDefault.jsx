import HeadDefault from "../components/HeaderAndFooter/HeadDefault";
import ScriptsDefault from "../components/HeaderAndFooter/ScriptsDefault";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function LayoutDefault({ title, header = true, footer = true, children }) {
  return (
    <>
      <HeadDefault title={title} />
      { header && <Header /> }
      <main>{children}</main>
      { footer && <Footer /> }
      <ScriptsDefault />
    </>
  )
}