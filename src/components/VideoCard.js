import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

function VideoCard({ url, title, description, actions }) {
  return (
    <Card cover={<img alt="" src={url} />} actions={actions}>
      <Meta
        title={title}
        description={description}
        style={{ maxHeight: 118, overflow: 'hidden' }}
      />
    </Card>
  );
}

VideoCard.propTypes = {};

export default VideoCard;
