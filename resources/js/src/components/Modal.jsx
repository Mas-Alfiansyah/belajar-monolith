import { motion, AnimatePresence } from 'framer-motion';

const Modal = ({ open, onClose, title, children }) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop dengan Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm flex items-center justify-center p-6 overflow-y-auto"
            onClick={onClose}
          >
            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ 
                type: 'spring', 
                damping: 25, 
                stiffness: 400,
                duration: 0.3 
              }}
              onClick={(e) => e.stopPropagation()} // Supaya modal tidak tutup saat konten diklik
              className="relative bg-white w-full max-w-lg rounded-[32px] shadow-2xl overflow-hidden my-auto"
            >
              {/* Header - Opsional: Bisa dipakai atau dikosongkan */}
              {title && (
                <div className="px-8 py-5 border-b border-gray-100 flex justify-between items-center bg-white">
                  <h3 className="text-xl font-extrabold text-black tracking-tight">{title}</h3>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-xl hover:bg-gray-100 transition-colors text-gray-400 hover:text-black"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              )}

              {/* Body */}
              <div className="bg-white">
                {children}
              </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;