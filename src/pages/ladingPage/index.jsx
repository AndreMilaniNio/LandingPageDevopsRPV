import { Header } from "../../components/header";
import "./index.css";

export function LadingPage() {
  return (
    <>
      <Header />

      <main className="landPageMain">

        {/* HERO / INTRO */}
        <section id="home" className="pageSect sect1">
          <div className="sect1Content">
            <div className="sect1Text">
              <h1 className="infoTextTitle">CoolTransports</h1>
              <p className="infoTextParagraph">
                Conectando destinos com rapidez, segurança e confiança.
              </p>
            </div>

            <img
              className="sect1Image"
              src="../../../images/caminhao-volvo.png"
              alt="Caminhão de transporte"
            />
          </div>
        </section>

        {/* SERVIÇOS / CARDS */}
        <section id="servicos" className="pageSect sect2">
          <h2 className="sectionTitle">O que fazemos</h2>

          <div className="cardsGrid">
            <div className="card">
              <h3>Transporte Rodoviário</h3>
              <p>
                Entregas rápidas e seguras em todo o território nacional.
              </p>
            </div>

            <div className="card">
              <h3>Logística Inteligente</h3>
              <p>
                Planejamento estratégico para reduzir custos e prazos.
              </p>
            </div>

            <div className="card">
              <h3>Rastreamento 24h</h3>
              <p>
                Acompanhe sua carga em tempo real, do início ao fim.
              </p>
            </div>
          </div>
        </section>

        {/* SOBRE NÓS */}
        <section id="sobre" className="pageSect sect3">
          <h2 className="sectionTitle">Sobre Nós</h2>

          <p className="aboutText">
            A CoolTransports nasceu com o objetivo de transformar o transporte
            de cargas em uma experiência simples, eficiente e segura.
          </p>

          <p className="aboutText">
            Nossa missão é conectar empresas e pessoas através de soluções
            logísticas modernas, sustentáveis e acessíveis.
          </p>
        </section>

        {/* CONTATO */}
        <section id="contato" className="pageSect sect4">
          <h2 className="sectionTitle">Contato</h2>

          <form className="contactForm">
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Mensagem" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footerLinks">
          <a href="#">Instagram</a>
          <a href="#">LinkedIn</a>
          <a href="#">Facebook</a>
        </div>

        <p className="copyright">
          © 2026 CoolTransports. Todos os direitos reservados.
        </p>
      </footer>
    </>
  );
}
