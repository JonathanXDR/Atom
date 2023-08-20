import "./main.css";

export default function NotFound() {
  return (
    <div>
      <div className="dialog">
        <div className="wrapper-top">
          <h1 className="message">This page could not be found</h1>
        </div>
        <span className="number">404</span>
        <div className="wrapper-bottom">
          <p className="warning-message">Do not panic</p>
          <p className="suggestion">
            Perhaps you misspelled the url or it has been removed.
          </p>
        </div>
      </div>
      <footer className="footer"></footer>
    </div>
  );
}
