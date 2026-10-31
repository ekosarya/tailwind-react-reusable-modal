import { Modal } from '../common/Modal';

export const EditProfileModal = ({ isOpen, onClose, onSubmit }) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title='Edit Profile Information'
      footer={
        <>
          <button
            onClick={onClose}
            className='px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer'>
            Cancel
          </button>
          <button
            onClick={onSubmit}
            className='px-4 py-2 text-sm font-medium bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors cursor-pointer'>
            Save Changes
          </button>
        </>
      }>
      <div className='space-y-4'>
        <div>
          <label className='block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1'>
            Full Name
          </label>
          <input
            type='text'
            defaultValue='John Doe'
            className='w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
        </div>
        <div>
          <label className='block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1'>
            Email Address
          </label>
          <input
            type='email'
            defaultValue='john@example.com'
            className='w-full px-3 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
          />
        </div>
      </div>
    </Modal>
  );
};
