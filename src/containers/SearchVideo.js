import React from 'react';
import { Alert, Icon, Input, message, Spin } from 'antd';
import Cookie from 'js-cookie';
import VideoCard from '../components/VideoCard';
import { useModal, useSearchVideo } from '../hooks';

const { Search } = Input;

function SearchVideo() {
  const { videos, videosError, videosLoading, searchVideo } = useSearchVideo();
  const { showModal } = useModal();

  function handleSearch(value) {
    searchVideo(value);
  }

  function handlePlayClick(id) {
    showModal(id);
  }

  function handleSaveClick(id) {
    const savedVideoId = Cookie.get('savedVideoId')
      ? JSON.parse(Cookie.get('savedVideoId'))
      : [];

    const newSavedVideoId = savedVideoId.includes(id)
      ? savedVideoId
      : [...savedVideoId, id];

    Cookie.set('savedVideoId', JSON.stringify(newSavedVideoId));
    message.info('Video saved');
  }

  return (
    <>
      <Search
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
        disabled={videosLoading}
        style={{ maxWidth: 450, margin: '30px 0 30px' }}
        data-testid={'searchInput'}
      />

      {videosLoading ? (
        <div>
          <Spin
            indicator={<Icon type="loading" style={{ fontSize: 48 }} spin />}
          />
        </div>
      ) : (
        <>
          <div className="grid-wrapper" data-testid={'searchResults'}>
            {videos &&
              videos.map(
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
                          type="save"
                          onClick={() => handleSaveClick(v.id.videoId)}
                        />
                      ]}
                    />
                  )
              )}
          </div>
          {videosError && (
            <Alert
              message={videosError}
              type="error"
              style={{ margin: '15px 0 0' }}
            />
          )}
        </>
      )}
    </>
  );
}

SearchVideo.propTypes = {};

export default SearchVideo;
