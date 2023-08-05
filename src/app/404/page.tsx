import "./404.css";

export default function NotFound() {
  return (
    <>
      <head>
        <title>The page you were looking for doesn't exist (404)</title>
        <link rel="shortcut icon" href="favicon.ico" />
      </head>

      <body>
        <div className="dialog">
          <div className="wrapper-top">
            <h1 className="message">This page could not be found</h1>
          </div>
          <span className="number">404</span>
          <div className="wrapper-bottom">
            <p className="warning">Do not panic</p>
            <p className="suggestion">
              Perhaps you misspelled the url or it has been removed.
            </p>
          </div>
        </div>
        <footer className="footer"></footer>
      </body>
    </>
  );
}
