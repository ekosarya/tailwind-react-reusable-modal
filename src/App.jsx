import { useModal } from './hooks/useModal';
import { InfoModal } from './components/modals/InfoModal';
import { DeleteModal } from './components/modals/DeleteModal';
import { EditProfileModal } from './components/modals/EditProfileModal';

export const App = () => {
  // Hook up states for each modal we need on this page
  const infoModal = useModal(false);
  const deleteModal = useModal(false);
  const formModal = useModal(false);

  const handleDeleteConfirm = () => {
    alert('Account deleted successfully!');
    deleteModal.closeModal();
  };

  const handleFormSubmit = () => {
    alert('Profile changes saved successfully!');
    formModal.closeModal();
  };

  return (
    <div className='min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 gap-4'>
      <h1 className='text-2xl font-bold text-slate-800 mb-2'>
        Reusable Tailwind Modal
      </h1>

      <div className='flex gap-4'>
        <button
          onClick={infoModal.openModal}
          className='px-4 py-2 bg-emerald-600 text-white font-medium rounded-lg shadow-sm hover:bg-emerald-700 transition-colors cursor-pointer'>
          Open Info Modal
        </button>

        <button
          onClick={deleteModal.openModal}
          className='px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg shadow-sm hover:bg-indigo-700 transition-colors cursor-pointer'>
          Open Confirmation Modal
        </button>

        <button
          onClick={formModal.openModal}
          className='px-4 py-2 bg-white text-slate-700 border border-slate-300 font-medium rounded-lg shadow-sm hover:bg-slate-50 transition-colors cursor-pointer'>
          Open Form Modal
        </button>
      </div>

      {/* Render modals cleanly outside the main layout flow */}
      <InfoModal isOpen={infoModal.isOpen} onClose={infoModal.closeModal} />

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={deleteModal.closeModal}
        onConfirm={handleDeleteConfirm}
      />

      <EditProfileModal
        isOpen={formModal.isOpen}
        onClose={formModal.closeModal}
        onSubmit={handleFormSubmit}
      />
    </div>
  );
};

export default App;
