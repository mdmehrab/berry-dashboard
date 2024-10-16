import { useState } from "react";
import { Link } from "react-router-dom";
import { sidebarData } from "../../data/data";
import "./sidebar.scss";

const Sidebar = ({ isCollapsed }) => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (id) => {
    setOpenSection(openSection === id ? null : id);
  };

  return (
    <section id="sidebar" className={isCollapsed ? "collapsed" : "expanded"}>
      {sidebarData?.map((ele) => (
        <div key={ele.id} className="sidebar-section">
          {/* Keep the title visible only when expanded */}
          <h5 className="fw-bold text-uppercase">
            {!isCollapsed && ele.content}
          </h5>

          {ele.items?.map((item) => (
            <div
              key={item.id}
              className={`sidebar-item ${isCollapsed ? "" : "px-4"}`}
            >
              {item.items ? (
                <>
                  <h6
                    style={{ cursor: "pointer" }}
                    onClick={() => toggleSection(item.id)}
                  >
                    {/* Always show the icon */}
                    {item.icon && (
                      <item.icon
                        className={`sidebar-icon ${
                          isCollapsed ? "collapsed" : "expanded"
                        }`}
                      />
                    )}
                    {/* Show the content only when not collapsed */}
                    {!isCollapsed && item.content}
                  </h6>
                  {openSection === item.id && !isCollapsed && (
                    <div className="nested-items">
                      {item.items.map((subItem) => (
                        <div
                          key={subItem.id}
                          className={`sidebar-subitem ${subItem.space}`}
                        >
                          <Link to={subItem.url}>
                            {subItem.icon && (
                              <subItem.icon
                                className={`sidebar-icon ${
                                  isCollapsed ? "collapsed" : "expanded"
                                }`}
                              />
                            )}
                            {!isCollapsed && subItem.label}
                          </Link>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link to={item.url} className="sidebar-link text-capitalize">
                  {/* Always show the icon */}
                  {item.icon && (
                    <item.icon
                      className={`sidebar-icon ${
                        isCollapsed ? "collapsed" : "expanded"
                      }`}
                    />
                  )}
                  {/* Show the label only when not collapsed */}
                  {!isCollapsed && item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};

export default Sidebar;
