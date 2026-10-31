import { Modal } from '../common/Modal';

export const DeleteModal = ({ isOpen, onClose, onConfirm }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title='Delete Account'
      maxWidth='max-w-md'
      footer={
        <>
          <button
            onClick={onClose}
            className='px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors cursor-pointer'>
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className='px-4 py-2 text-sm font-medium bg-rose-600 text-white rounded-lg hover:bg-rose-700 transition-colors cursor-pointer'>
            Confirm Delete
          </button>
        </>
      }>
      <p>
        Are you sure you want to delete your account? All of your data will be
        permanently removed. This action cannot be undone.
      </p>
    </Modal>
  );
};
