import React from "react";
import { NavLink } from "react-router-dom";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import { Popover } from "antd";
import ProfileTagsPop from "./profileTagsPop"
import "./index.sass";

const NavBar = () => {
  // query data
  const { data, loading } = useQuery(gql`
    query navBarQuery {
      globalSetting {
        profileImage {
          formats
        }
        SocialLinks {
          _id
          icon {
            url
            name
          }
          Link
        }
      }
    }
  `);

  // when the data is load disturcturing the data
  if (data) var { globalSetting: nav } = data;
  
  // while fetching the data, display nothing/empty-div-tag/prevent error
  if (loading) return <div></div>;

  // final result
  return (
    <div id="nav_bar">
      <div className="container light-box">
        <div className="left">
          <Popover content={ProfileTagsPop} placement="bottomLeft">
            <img src={nav.profileImage.formats.thumbnail.url} alt="profile" />
          </Popover>
          <div className="links">
            <NavLink activeClassName="active" exact to="/">Works</NavLink>
            <NavLink activeClassName="active" to="/info">Info</NavLink>
          </div>
        </div>
        
        <div className="right">
          <ul className="social-links">
            {nav.SocialLinks.map((socialLink) => (
              <li key={socialLink._id}>
                <a href={socialLink.Link} target="_blank" rel="noopener noreferrer">
                  <img src={socialLink.icon.url}  alt={socialLink.icon.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
