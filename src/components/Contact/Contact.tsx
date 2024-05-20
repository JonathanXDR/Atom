import Link from "next/link";
import React from "react";

const Contact: React.FC = () => {
  return (
    <section className="section section--contact">
      <div className="wrapper no-pad">
        <div className="columns">
          <div className="column">
            <h3>Open source</h3>
            <p>
              Atom is open source. Be part of the Atom community or help improve
              your favorite text editor.
            </p>
            <p className="welcome-cta">
              <Link
                href="https://github.com/atom/atom"
                className="welcome-button"
              >
                Fork on GitHub
              </Link>
            </p>
          </div>

          <div className="column">
            <h3>Keep in touch</h3>
            <table className="welcome-contact-table">
              <tbody>
                <tr>
                  <td>GitHub</td>
                  <td>
                    <Link href="https://github.com/atom">github.com/atom</Link>
                  </td>
                </tr>
                <tr>
                  <td>Twitter</td>
                  <td>
                    <Link href="https://twitter.com/atomeditor">
                      @AtomEditor
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Discussions</td>
                  <td>
                    <Link href="https://github.com/atom/atom/discussions">
                      Github Discussions
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Stuff</td>
                  <td>
                    <Link href="https://github.myshopify.com/search?q=atom">
                      Atom Gear
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>RSS Feed</td>
                  <td>
                    <Link href="/packages.atom">Packages &amp; Themes</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
