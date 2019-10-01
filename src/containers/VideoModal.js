import React from 'react';
import { Modal } from 'antd';
import { useModal } from '../hooks';

function VideoModal() {
  const { modalVisible, videoId, hideModal } = useModal();

  function handleCancel() {
    hideModal();
  }

  return (
    <Modal
      title="Watch Video"
      footer={null}
      onCancel={handleCancel}
      visible={modalVisible}
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

export default VideoModal;
