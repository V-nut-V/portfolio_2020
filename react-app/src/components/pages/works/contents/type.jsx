import React, { useState, useEffect } from "react";
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import { Spin, Modal } from "antd";
import PropTypes from "prop-types"
import Card from "./card"
import { CaretDownOutlined } from "@ant-design/icons";
import CardDetail from './cardDetail';
import "./type.sass"


const Type = ({ type }) => {
  const [workType, setWorkType] = useState(type);
  const [works, setWorks] = useState([]);
  const [work, setWork] = useState(false);
  const [paginate, setPaginate] = useState({
    limit: 12,
    start: 0,
  });
  const [showDetail, setShowDetail] = useState(false)

  if (workType === "All") setWorkType("");

  const { data, loading } = useQuery(
    gql`
      query workTypeQuery($start: Int!, $limit: Int!, $typeTitle: String!) {
        worksConnection(
          where: { work_types: { Title_contains: $typeTitle } }
          limit: $limit
          start: $start
          sort: "Date:DESC"
        ) {
          values {
            id
            Title
            IconImage {
              formats
              name
            }
            ContentMedias {
              id
              formats
              url
              name
            }
            Date
            Colors {
              id
              tag
            }
            Tags {
              id
              tag
            }
            Description
          }
          aggregate {
            count
          }
        }
      }
    `,
    {
      variables: {
        start: paginate.start,
        limit: paginate.limit,
        typeTitle: workType,
      },
    }
  );

  useEffect(() => {
    if(!loading) setWorks((pre) => [...pre, ...data.worksConnection.values]);
  }, [data, loading]);

  if (works.length === 0)
    return (
      <div className="loading-container">
        <Spin />
      </div>
    );

  const handleShowWorkDetail = (work) => {
    setWork(work);
    setShowDetail(true);
  }

  return (
    <>
      <div className="type-wrapper">
        {works.map((work) => (
          <Card
            key={work.id}
            work={work}
            onShowWorkDetail={handleShowWorkDetail}
          />
        ))}
      </div>

      {work && (
        <Modal
          wrapClassName="work-detail-wrapper"
          title={work.Title}
          visible={showDetail}
          onCancel={() => setShowDetail(false)}
          footer={null}
          width={1000}
          destroyOnClose={true}
        >
          <CardDetail work={work} handleClose={() => setShowDetail(false)} />
        </Modal>
      )}

      {/* while loading the following new data */}
      {loading && (
        <div className="loading-container">
          <Spin />
        </div>
      )}

      {/* load more button, while data is loading or already load the all content, won't show the button */}
      {!loading &&
      data.worksConnection.aggregate.count > paginate.limit + paginate.start ? (
        <button
          className="load-more light-box"
          onClick={() =>
            setPaginate((pre) => ({ ...pre, start: pre.start + pre.limit }))
          }
        >
          Load More <CaretDownOutlined />
        </button>
      ) : null}
    </>
  );
};

export default Type;

Type.propTypes = {
  type: PropTypes.string.isRequired,
}