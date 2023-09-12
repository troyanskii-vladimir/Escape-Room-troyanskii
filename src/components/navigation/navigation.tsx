function Navigation(): JSX.Element {
  return (
    <nav className="main-nav header__main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <a className="link active" href="index.html">
            Квесты
          </a>
        </li>
        <li className="main-nav__item">
          <a className="link" href="contacts.html">
            Контакты
          </a>
        </li>
        <li className="main-nav__item">
          <a className="link" href="my-quests.html">
            Мои бронирования
          </a>
        </li>
      </ul>
    </nav>
  );
}


export default Navigation;
