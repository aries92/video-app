import React, { useEffect } from 'react';
import Cookie from 'js-cookie';
import {
  getSavedVideo,
  setSavedVideo,
  setModalVisible,
  setVideoId
} from '../actions/index';
import { connect } from 'react-redux';
import { Typography, Spin, Icon, Alert } from 'antd';
import VideoCard from '../components/VideoCard';

const { Title } = Typography;

function SavedVideo({
  videos,
  error,
  loading,
  getSavedVideo,
  setSavedVideo,
  setModalVisible,
  setVideoId
}) {
  const savedVideoId = Cookie.get('savedVideoId')
    ? JSON.parse(Cookie.get('savedVideoId'))
    : [];

  function handleRemoveClick(videoId) {
    const idList = savedVideoId.filter(id => id !== videoId);
    const videoList = videos.filter(v => v.id !== videoId);

    Cookie.set('savedVideoId', JSON.stringify(idList));
    setSavedVideo(videoList);
  }

  function handlePlayClick(id) {
    setModalVisible(true);
    setVideoId(id);
  }

  function isNeedToFetchVideo() {
    if (savedVideoId.length === 0) {
      return false;
    }

    if (videos.length === 0) {
      return true;
    }

    return videos.length !== savedVideoId.length;
  }

  useEffect(() => {
    if (isNeedToFetchVideo()) {
      getSavedVideo(savedVideoId);
    }
  }, []);

  return (
    <>
      <Title level={2}>Saved video</Title>

      {loading ? (
        <div style={{ margin: '30px 0 0' }}>
          <Spin
            indicator={<Icon type="loading" style={{ fontSize: 48 }} spin />}
          />
        </div>
      ) : (
        <>
          {savedVideoId.length === 0 && (
            <Alert message={'Please try to save some video'} />
          )}
          <div className="grid-wrapper">
            {videos.length > 0 &&
              videos.map((v, index) => (
                <VideoCard
                  key={index}
                  width={v.snippet.thumbnails.medium.width}
                  url={v.snippet.thumbnails.medium.url}
                  title={v.snippet.title}
                  description={v.snippet.description}
                  actions={[
                    <Icon
                      type="play-circle"
                      onClick={() => handlePlayClick(v.id.videoId)}
                    />,
                    <Icon
                      type="delete"
                      onClick={() => handleRemoveClick(v.id)}
                    />
                  ]}
                />
              ))}
          </div>
          {error && (
            <Alert
              message={error}
              type="error"
              style={{ margin: '15px 0 0' }}
            />
          )}
        </>
      )}
    </>
  );
}

SavedVideo.propTypes = {};

const mapStateToProps = state => ({
  ...state.savedVideoReducer
});

const mapDispatchToProps = {
  getSavedVideo,
  setSavedVideo,
  setModalVisible,
  setVideoId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedVideo);
