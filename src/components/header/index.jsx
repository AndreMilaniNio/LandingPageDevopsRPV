import "./index.css";

export function Header() {
  return (
    <header className="componentHeader">
      <h1 className="componentHeaderTitle">CoolTransports</h1>

      <nav className="linksNavBar">
        <ul className="linksList">
          <li className="linkListItem">
            <a href="#home" className="linkListLink">Início</a>
          </li>
          <li className="linkListItem">
            <a href="#servicos" className="linkListLink">Serviços</a>
          </li>
          <li className="linkListItem">
            <a href="#sobre" className="linkListLink">Sobre</a>
          </li>
          <li className="linkListItem">
            <a href="#contato" className="linkListLink">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
