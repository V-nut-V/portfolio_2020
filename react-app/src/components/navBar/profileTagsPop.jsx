import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "react-apollo";
import { Spin } from "antd";
import "./profileTagsPop.sass";

const ProfileTagsPop = () => {
  // query data
  const { data, loading } = useQuery(gql`
    query profileTagsQuery {
      globalSetting {
        profileImage {
          formats
        }
        name
        Tags {
          _id
          tag
        }
      }
    }
  `);

  // when the data is load disturcturing the data
  if (data) var { globalSetting: profile } = data;

  // while loading the data show spin/loading animation
  if (loading) return <Spin />;

  return (
    <div id="profile_pop">
      <img src={profile.profileImage.formats.small.url} alt="profile" />
      <h3>{profile.name}</h3>
      <ul>
        {profile.Tags.map((i) => (
          <li key={i._id}>{i.tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProfileTagsPop;
