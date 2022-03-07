import React from 'react'
import { useQuery } from "react-apollo"
import { gql } from "apollo-boost"
import { Spin } from "antd"
import InfoCard from './infoCard'
import "./index.sass"

const Info = () => {
  // query data
  const { data, loading } = useQuery(gql`
    query InfosQuery {
      infoPage {
        Infos {
          _id
          Title
          Content
          Icon {
            url
            name
          }
        }
      }
    }
  `);

  if (data) var { infoPage: {Infos: infos} } = data

  if(loading) return (
    <div className="loading-container">
      <Spin />
    </div>
  );

  return (
    <div id="info_page">
      <div className="container">
        {infos.map(info => <InfoCard key={info._id} info={info} />)}
      </div>
    </div>
  );
}

export default Info
