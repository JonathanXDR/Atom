import "./main.css";

export default function Error() {
  return (
    <body>
      <div className="dialog">
        <div className="wrapper-top">
          <h1 className="message">Something has gone wrong</h1>
        </div>
        <span className="number">500</span>
        <div className="wrapper-bottom">
          <p className="warning-message">Do not panic</p>
          <p className="suggestion">
            If refreshing doesn&apos;t help, <br />
            let us know.
          </p>
        </div>
      </div>
      <footer className="footer"></footer>
    </body>
  );
}
