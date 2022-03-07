import React from "react";
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import { Tabs } from "antd";
import TabTag from './tabTag';
import Type from "./type";
import "./index.sass"

const { TabPane } = Tabs;

const WorksContent = () => {
  const { data, loading } = useQuery(gql`
    query worksNavQuery {
      workTypes(sort: "Order:ASC") {
        Title
        _id
        Order
        Icon {
          url
          name
        }
      }
    }
  `);

  if (loading) return <div></div>;

  return (
    <div id="works-content-wrapper">
      <div className="container">
        <Tabs defaultActiveKey="1">
          {data.workTypes.map((type, index) => (
            <TabPane
              key={index + 1}
              tab={<TabTag title={type.Title} image={type.Icon} />}
            >
              <Type type={type.Title} />
            </TabPane>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default WorksContent;
