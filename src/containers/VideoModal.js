import React, { useState } from 'react';
import { Modal } from 'antd';
import { withRouter } from 'react-router-dom';
import { setModalVisible, setVideoId } from '../actions/index';
import { connect } from 'react-redux';

function VideoModal({ videoId, visible, setModalVisible, setVideoId }) {
  function handleCancel() {
    setModalVisible(false);
    setVideoId(null);
  }

  return (
    <Modal
      title="Watch Video"
      footer={null}
      onCancel={handleCancel}
      visible={visible}
    >
      <div
        style={{
          overflow: 'hidden',
          paddingBottom: '56.25%',
          position: 'relative',
          height: 0
        }}
      >
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{
            left: 0,
            top: 0,
            height: '100%',
            width: '100%',
            position: 'absolute'
          }}
        />
      </div>
    </Modal>
  );
}

const mapStateToProps = state => ({
  ...state.videoModalReducer
});

const mapDispatchToProps = {
  setModalVisible,
  setVideoId
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoModal);
