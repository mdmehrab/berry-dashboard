import { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "../../data/data";
import "./sidebar.scss";

const Sidebar = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <section id="sidebar">
      {sidebarData?.map((ele) => (
        <>
          <div key={ele.id} className="sidebar-section">
            <h5 className="fw-bold text-uppercase">{ele.content}</h5>

            {ele.items?.map((item) => (
              <>
                <div key={item.id} className="sidebar-item px-4">
                  {item.items ? (
                    <>
                      <h6
                        style={{ cursor: "pointer" }}
                        onClick={() => toggleSection(item.id)}
                      >
                        {item.icon && (
                          <item.icon style={{ marginRight: "0.5rem" }} />
                        )}
                        {item.content}
                      </h6>
                      {openSection === item.id && (
                        <div className="nested-items">
                          {item.items.map((subItem) => (
                            <div
                              key={subItem.id}
                              className={`sidebar-subitem ${subItem.space}`}
                            >
                              <Link to={subItem.url}>
                                {subItem.icon && (
                                  <subItem.icon
                                    style={{ marginRight: "0.5rem" }}
                                  />
                                )}
                                {subItem.label}
                              </Link>
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.url}
                      className="sidebar-link text-capitalize"
                    >
                      {item.icon && (
                        <item.icon style={{ marginRight: "1rem" }} />
                      )}
                      {item.label}
                    </Link>
                  )}
                </div>
              </>
            ))}
          </div>
          <hr className="row_line" />
        </>
      ))}
    </section>
  );
};

export default Sidebar;
