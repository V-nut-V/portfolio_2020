import React from 'react'
import { gql } from "apollo-boost"
import { useQuery } from "react-apollo"
import ReactMarkdown from 'react-markdown'
import ThreeD from "./threeD"
import "./header.sass"

const WorksHeader = () => {

  const { data, loading } = useQuery(gql`
    query homeIntroQuery {
      homePage {
        Title
        Description
      }
    }
  `);

  if (loading) return <div></div>

  return (
    <div id="works_header">
      <div className="container">
        <div className="left">
          <h1>{data.homePage.Title}</h1>
          <div className="content">
            <ReactMarkdown source={data.homePage.Description} />
          </div>
        </div>

        <div className="right">
          <ThreeD />
        </div>
      </div>
    </div>
  );
}

export default WorksHeader
