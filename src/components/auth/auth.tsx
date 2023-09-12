function Auth(): JSX.Element {
  return (
    <div className="header__side-nav">
      <a className="btn btn--accent header__side-item" href="#">
        Выйти
      </a>
      <a
        className="link header__side-item header__phone-link"
        href="tel:88003335599"
      >
        8 (000) 111-11-11
      </a>
    </div>
  );
}


export default Auth;
