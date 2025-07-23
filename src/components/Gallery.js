import React, { useState } from "react";

export default function Gallery({ darkMode, gallery }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (image) => {
    setSelectedImage(image);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  return (
    <section
      id="gallery"
      className={`${darkMode ? "dark text-bg-dark" : "light text-bg-light"} py-5`}
    >
      <div className="container">
        <header className="text-center mb-5">
          <h1 className={`display-5 fw-bold ${darkMode ? 'text-light' : 'text-dark'}`}>
            Gallery
          </h1>
          <p className={`lead ${darkMode ? 'text-light' : 'text-muted'}`}>
            A collection of moments and achievements
          </p>
        </header>

        {/* Two Row Horizontal Scrolling Gallery */}
        <div className="gallery-container">
          {/* First Row - Left to Right (First half of gallery, duplicated for seamless loop) */}
          <div className="gallery-row">
            {[...Array(3)].map((_, setIndex) =>
              gallery.slice(0, Math.ceil(gallery.length / 2)).map((item, index) => (
                <div
                  key={`row1-set${setIndex}-${index}`}
                  className={`gallery-item card border-0 shadow-sm ${darkMode ? 'bg-dark' : 'bg-light'}`}
                  onClick={() => openImageModal(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openImageModal(item)}
                  aria-label={`View ${item.title || 'gallery image'} in full size`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title || `Gallery image ${index + 1}`}
                    className="gallery-image card-img-top rounded"
                    loading="lazy"
                  />
                  <div className="card-body p-2">
                    <h6 className={`card-title mb-0 text-center ${darkMode ? 'text-light' : 'text-dark'}`}>
                      {item.title}
                    </h6>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Second Row - Right to Left (Second half of gallery, duplicated for seamless loop) */}
          <div className="gallery-row">
            {[...Array(3)].map((_, setIndex) =>
              gallery.slice(Math.ceil(gallery.length / 2)).map((item, index) => (
                <div
                  key={`row2-set${setIndex}-${index}`}
                  className={`gallery-item card border-0 shadow-sm ${darkMode ? 'bg-dark' : 'bg-light'}`}
                  onClick={() => openImageModal(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && openImageModal(item)}
                  aria-label={`View ${item.title || 'gallery image'} in full size`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title || `Gallery image ${Math.ceil(gallery.length / 2) + index + 1}`}
                    className="gallery-image card-img-top rounded"
                    loading="lazy"
                  />
                  <div className="card-body p-2">
                    <h6 className={`card-title mb-0 text-center ${darkMode ? 'text-light' : 'text-dark'}`}>
                      {item.title}
                    </h6>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Bootstrap Modal */}
        {selectedImage && (
          <div
            className="gallery-modal d-flex align-items-center justify-content-center"
            onClick={closeImageModal}
          >
            <div className="position-relative text-center">
              <button
                className="gallery-modal-close"
                onClick={closeImageModal}
                aria-label="Close"
              >
                &times;
              </button>
              <img
                src={selectedImage.imageUrl}
                alt={selectedImage.title || 'Gallery image'}
                className="gallery-modal-image"
              />
              {selectedImage.title && (
                <h3 className="text-white mt-3">{selectedImage.title}</h3>
              )}
              {selectedImage.description && (
                <p className="text-light">{selectedImage.description}</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
