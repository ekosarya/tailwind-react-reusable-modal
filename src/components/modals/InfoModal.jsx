import { Modal } from '../common/Modal';

export const InfoModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title='System Maintenance Notice'
      maxWidth='max-w-md'>
      <p>
        Our platform will undergo scheduled maintenance this Sunday from 2:00 AM
        to 4:00 AM UTC. Some services may be temporarily unavailable during this
        window.
      </p>
    </Modal>
  );
};
