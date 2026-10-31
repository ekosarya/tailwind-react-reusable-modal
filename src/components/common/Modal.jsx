import { useEffect } from 'react';

export const Modal = ({
  isOpen,
  onClose,
  title,
  children,
  footer,
  maxWidth = 'max-w-lg', // flexible width so we can reuse it for different sizes
}) => {
  // Close on ESC and lock body scroll when the modal is up
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className='fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm transition-opacity'
      aria-hidden='true'>
      {/* Click outside to dismiss */}
      <div
        className='absolute inset-0'
        onClick={onClose}
        aria-label='Close modal backdrop'
      />

      {/* Main dialog box */}
      <div
        role='dialog'
        aria-modal='true'
        aria-labelledby='modal-title'
        className={`relative w-full ${maxWidth} bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform transition-all z-10`}>
        {/* Header section */}
        <div className='flex items-center justify-between px-6 py-4 border-b border-slate-100'>
          <h3 id='modal-title' className='text-lg font-semibold text-slate-800'>
            {title}
          </h3>
          <button
            onClick={onClose}
            className='p-1.5 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors cursor-pointer'
            aria-label='Close modal'>
            <svg
              className='w-5 h-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>

        {/* Content area */}
        <div className='px-6 py-4 text-slate-600 text-sm leading-relaxed'>
          {children}
        </div>

        {/* Optional footer for actions */}
        {footer && (
          <div className='flex items-center justify-end gap-3 px-6 py-4 bg-slate-50 border-t border-slate-100'>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
