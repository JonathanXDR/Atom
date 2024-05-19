"use client";
import FooterItem from "@/components/FooterItem/FooterItem";
import NavItem from "@/components/NavItem/NavItem";
import Link from "next/link";
import "./main.css";

export default function Contact() {
  return (
    <body>
      <div className="footer-push">
        <NavItem />

        <div id="js-pjax-container">
          <div className="contact content-push">
            <div className="wrapper">
              <div className="columns">
                <div className="column main-column">
                  <h3 className="contact-title">Get in touch</h3>
                  <form
                    className="contact-form"
                    action="/contact"
                    acceptCharset="UTF-8"
                    method="post"
                  >
                    <input name="utf8" type="hidden" value="✓" />
                    <input
                      type="hidden"
                      name="authenticity_token"
                      value="CkcpCB7Ds/dw08M1PHTLccRz+OsDaAuzwNV6U94n2QUbBQ/rqXek0oWEFNB8E5i2k/DSvMq5PdSv5/eRVFblYg=="
                    />
                    <dl className="form">
                      <dt>
                        <label htmlFor="name">Name</label>
                      </dt>
                      <dd>
                        <input type="text" name="name" id="name" />
                      </dd>

                      <dt>
                        <label htmlFor="email">Email</label>
                      </dt>
                      <dd>
                        <input
                          type="text"
                          name="email"
                          id="email"
                          style={{
                            backgroundImage: `url('data:image/png;base64,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') !important`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "20px",
                            backgroundPosition: "97% center",
                            cursor: "auto",
                          }}
                          data-minemail-com="0"
                        />
                      </dd>

                      <dt>
                        <label htmlFor="subject">Subject</label>
                      </dt>
                      <dd>
                        <input type="text" name="subject" id="subject" />
                      </dd>

                      <dt>
                        <label htmlFor="Message">Message</label>
                      </dt>
                      <dd>
                        <textarea name="body" id="body" rows={10}></textarea>
                      </dd>

                      <input
                        type="submit"
                        name="commit"
                        value="Send request"
                        className="button primary"
                        data-disable-with="Send request"
                      />
                    </dl>
                  </form>
                </div>
                <div className="column sidebar">
                  <h3 className="">Join the community</h3>
                  <table className="contact-list">
                    <tbody>
                      <tr>
                        <td>GitHub</td>
                        <td>
                          <Link href="https://github.com/atom">@atom</Link>
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
                        <td>Github Discussions</td>
                        <td>
                          <Link href="https://github.com/atom/atom/discussions">
                            Github Discussions
                          </Link>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-pad"></div>
      </div>

      <FooterItem />

      <div id="lean_overlay"></div>
      <div id="lean_overlay"></div>
      <div id="lean_overlay"></div>
    </body>
  );
}
