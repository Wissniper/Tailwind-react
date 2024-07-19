import React, { useState, useEffect } from "react";

function Gallery() {
  // Create a state variable to store all the media files
  const [media, setMedia] = useState([]);

  // Create a state variable to store the currently selected image
  const [selectedImage, setSelectedImage] = useState(null);

  // Use the useEffect hook to import all the media files when the component mounts
  useEffect(() => {
    // Define an asynchronous function to import all the media files
    const importAllMedia = async () => {
      // Create a require.context object for importing image files from the ../assets/Gallery100dagen directory
      const imageContext = require.context("../assets/Gallery100dagen", false, /\.(jpg|png|gif|jpeg)$/);

      // Create a require.context object for importing video files from the ../assets/Gallery100dagen directory
      const videoContext = require.context("../assets/Gallery100dagen", false, /\.(mp4|webm|ogg)$/);

      // Map over the array of image file names and import each file using the imageContext function
      const importedImages = imageContext.keys().map(key => ({ type: 'image', default: imageContext(key) }));

      // Map over the array of video file names and import each file using the videoContext function
      const importedVideos = videoContext.keys().map(key => ({ type: 'video', default: videoContext(key) }));

      // Concatenate the arrays of imported images and videos into a single array
      const allMedia = [...importedImages, ...importedVideos];

      // Update the media state variable with the allMedia array
      setMedia(allMedia);
    };

    // Call the importAllMedia function
    importAllMedia();
  }, []); // The second argument [] means the effect will only run once when the component mounts


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
};

export default Gallery;
