import React, { useEffect } from 'react';
import Cookie from 'js-cookie';
import { Alert, Icon, Spin, Typography } from 'antd';
import VideoCard from '../components/VideoCard';
import { useModal, useSavedVideo } from '../hooks';

const { Title } = Typography;

function SavedVideo() {
  const {
    savedVideo,
    savedVideoError,
    savedVideoLoading,
    getSavedVideo,
    setSavedVideo
  } = useSavedVideo();

  const { showModal } = useModal();

  const savedVideoId = Cookie.get('savedVideoId')
    ? JSON.parse(Cookie.get('savedVideoId'))
    : [];

  function handleRemoveClick(videoId) {
    const idList = savedVideoId.filter(id => id !== videoId);
    const videoList = savedVideo.filter(v => v.id !== videoId);

    Cookie.set('savedVideoId', JSON.stringify(idList));
    setSavedVideo(videoList);
  }

  function handlePlayClick(id) {
    showModal(id);
  }

  function isNeedToFetchVideo() {
    if (savedVideoId.length === 0) {
      return false;
    }

    if (savedVideo.length === 0) {
      return true;
    }

    return savedVideo.length !== savedVideoId.length;
  }

  useEffect(() => {
    if (isNeedToFetchVideo()) {
      getSavedVideo(savedVideoId);
    }
  }, []);

  return (
    <>
      <Title level={2}>Saved video</Title>

      {savedVideoLoading ? (
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
            {savedVideo.length > 0 &&
              savedVideo.map(
                (v, index) =>
                  v.id.videoId && (
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
                  )
              )}
          </div>
          {savedVideoError && (
            <Alert
              message={savedVideoError}
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

export default SavedVideo;
