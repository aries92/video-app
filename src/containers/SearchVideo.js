import React from 'react';
import { Alert, Icon, Input, message, Spin, Typography } from 'antd';
import { connect } from 'react-redux';
import { searchVideo, setModalVisible, setVideoId } from '../actions/index';
import Cookie from 'js-cookie';
import VideoCard from '../components/VideoCard';

const { Title } = Typography;
const Search = Input.Search;

function SearchVideo({
  videos,
  error,
  loading,
  searchVideo,
  setModalVisible,
  setVideoId
}) {
  function handleSearch(value) {
    searchVideo(value);
  }

  function handlePlayClick(id) {
    setModalVisible(true);
    setVideoId(id);
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
      <Title level={2}>Search video</Title>
      <Search
        enterButton="Search"
        size="large"
        onSearch={handleSearch}
        disabled={loading}
        style={{ maxWidth: 450, margin: '0 0 30px' }}
      />

      {loading ? (
        <div>
          <Spin
            indicator={<Icon type="loading" style={{ fontSize: 48 }} spin />}
          />
        </div>
      ) : (
        <>
          <div className="grid-wrapper">
            {videos &&
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
                      type="save"
                      onClick={() => handleSaveClick(v.id.videoId)}
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

SearchVideo.propTypes = {};

const mapStateToProps = state => ({
  ...state.searchVideoReducer
});

const mapDispatchToProps = {
  searchVideo,
  setModalVisible,
  setVideoId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchVideo);
