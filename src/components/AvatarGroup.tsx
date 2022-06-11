import { Avatar, Tooltip } from "antd";
import { useQuery } from "@apollo/client";
import { GET_GROUP_MEMBERS_IMAGES } from "../utils/graphqlFunctions/queries";
import { Fragment } from "react";

function AvatarGroup({ type, group }: any) {
  const { loading, error, data } = useQuery(GET_GROUP_MEMBERS_IMAGES, {
    variables: { type: type, group: group },
  });

  if (loading) return null;
  if (error) return null;

  return (
    <Fragment>
      <Avatar.Group
        maxCount={2}
        size="default"
        maxStyle={{
          color: "#f56a00",
          backgroundColor: "#fde3cf",
          cursor: "pointer",
        }}
      >
        {data.groupImage.map((info: any) => (
          <div key={info.id}>
            <Tooltip title={`${info.firstName}`} placement="top">
              {info.imageURL && <Avatar src={info.imageURL} />}

              {!info.imageURL && (
                <Avatar style={{ backgroundColor: "#f56a00" }}>
                  {info.firstName.charAt(0)}
                </Avatar>
              )}
            </Tooltip>
          </div>
        ))}
      </Avatar.Group>
    </Fragment>
  );
}

export default AvatarGroup;
