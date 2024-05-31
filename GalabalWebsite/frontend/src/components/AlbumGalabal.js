import React, { useState, useEffect } from "react";

function Album() {
  const [media, setMedia] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const importAllMedia = async () => {
      const imageContext = require.context("../assets/AlbumGalabal", false, /\.(jpg|png|gif|jpeg|JPG)$/);
      const videoContext = require.context("../assets/AlbumGalabal", false, /\.(mp4|webm|ogg)$/);

      const importedImages = imageContext.keys().map(key => ({ type: 'image', default: imageContext(key) }));
      const importedVideos = videoContext.keys().map(key => ({ type: 'video', default: videoContext(key) }));

      const allMedia = [...importedImages, ...importedVideos];
      
      setMedia(allMedia);
    };

    importAllMedia();
  }, []);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="grid grid-cols-3 gap-2 p-2">
      {media.map((item, index) => (
        <div key={index} className="relative group overflow-hidden">
          {item.type === "image" && (
            <img
              src={item.default}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110 cursor-pointer"
              onClick={() => handleImageClick(item.default)}
            />
          )}
          {item.type === "video" && (
            <video controls className="w-full h-full object-cover">
              <source src={item.default} type={`video/${item.default.split('.').pop()}`} />
              Your browser does not support the video tag.
            </video>
          )}
        </div>
      ))}
      {selectedImage && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
          <img src={selectedImage} alt="Zoomed Image" className="max-h-full max-w-full" onClick={handleCloseModal} />
        </div>
      )}
    </div>
  );
}

export default Album;
