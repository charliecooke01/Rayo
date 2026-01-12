import Link from "next/link";

import Image from "next/image";
import { blogs2, blogs5, blogs6 } from "@/data/blogs.json";
// -------------------- Shared bits --------------------
const StarSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 20 20">
    <path d="M19.6,9.6h-3.9c-.4,0-1.8-.2-1.8-.2-.6,0-1.1-.2-1.6-.6-.5-.3-.9-.8-1.2-1.2-.3-.4-.4-.9-.5-1.4,0,0,0-1.1-.2-1.5V.4c0-.2-.2-.4-.4-.4s-.4.2-.4.4v4.4c0,.4-.2,1.5-.2,1.5,0,.5-.2,1-.5,1.4-.3.5-.7.9-1.2,1.2s-1,.5-1.6.6c0,0-1.2,0-1.7.2H.4c-.2,0-.4.2-.4.4s.2.4.4.4h4.1c.4,0,1.7.2,1.7.2.6,0,1.1.2,1.6.6.4.3.8.7,1.1,1.1.3.5.5,1,.6,1.6,0,0,0,1.3.2,1.7v4.1c0,.2.2.4.4.4s.4-.2.4-.4v-4.1c0-.4.2-1.7.2-1.7,0-.6.2-1.1.6-1.6.3-.4.7-.8,1.1-1.1.5-.3,1-.5,1.6-.6,0,0,1.3,0,1.8-.2h3.9c.2,0,.4-.2.4-.4s-.2-.4-.4-.4h0Z" />
  </svg>
);

const MetaTag: React.FC<{ label: string }> = ({ label }) => (
  <span className="meta-tag">
    <a href="#">{label}</a>
    <StarSvg />
  </span>
);

// -------------------- Data (NO href fields) --------------------

// -------------------- Component --------------------
export default function Blogs3() {
  return (
    <>
      {/* Section - Blog Archive Start */}
      <div className="mxd-section padding-default">
        <div className="mxd-container grid-container">
          {/* Block - Section Title */}
          <div className="mxd-block">
            <div className="mxd-section-title no-controls">
              <div className="container-fluid p-0">
                <div className="row g-0">
                  <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrtitle">
                      <h2>
                        All
                        <br />
                        resources
                      </h2>
                    </div>
                  </div>
                  <div className="col-12 col-xl-4 mxd-grid-item no-margin">
                    <div className="mxd-section-title__hrdescr">
                      <p>
                        Browse through all our articles, tutorials, roundups,
                        and experiments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block - Archive Blog List */}
          <div className="mxd-block">
            <div className="mxd-projects-archive">
              {blogs6.map((item) => (
                <Link
                  key={item.title}
                  className="mxd-projects-archive__item"
                  href={`/blog-article`}
                >
                  <div className="mxd-projects-archive__border" />
                  <div className="mxd-projects-archive__inner">
                    <div className="container-fluid px-0">
                      <div className="row gx-0">
                        <div className="col-12 col-xl-8 mxd-grid-item no-margin">
                          <div className="mxd-projects-archive__title">
                            <div className="mxd-projects-archive__image">
                              <Image
                                alt="Project Preview"
                                src={item.img}
                                width={1200}
                                height={800}
                              />
                            </div>
                            <p>
                              <span>{item.title}</span>
                            </p>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-archive__tagslist">
                            <ul>
                              {item.tags.map((t) => (
                                <li key={t}>
                                  <p className="t-small">{t}</p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="col-6 col-md-6 col-xl-2 mxd-grid-item no-margin">
                          <div className="mxd-projects-list__date">
                            <p className="t-small">{item.date}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mxd-projects-archive__border" />
                </Link>
              ))}
            </div>
          </div>
          {/* Block - Archive Blog List End */}
        </div>
      </div>
      {/* Section - Blog Archive End */}
    </>
  );
}
