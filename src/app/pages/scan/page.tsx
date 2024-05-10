"use client";
import React, { useState } from "react";
import Image from "next/image";

// interface CameraCaptureProps {
//   onImagesSelected: (imageFiles: FileList) => void;
// }

function CameraCapture() {
  const [error, setError] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const handleCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files ? Array.from(event.target.files) : [];

    if (files) {
      for (let i = 0; i < files.length; i++) {
        if (files[i].type && !files[i].type.startsWith("image/")) {
          setError("Please select only image files.");
          return;
        }
      }

      setSelectedImages((prevfiles) => [...(prevfiles || []), ...files]);

      console.log(files);
      setError(null);
    }
  };

  const handleUpload = () => {
    if (selectedImages) {
      // upload to ipfs
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        capture="environment"
        multiple
        onChange={handleCapture}
        className="fixed top-0 bg-red-600 w-screen h-20 text-white font-semibold p-6"
      />
      {error && <p>{error}</p>}
      <br />
      <ul className="w-screen min-h-[calc(100svh-10rem)] h-full flex flex-col items-center justify-center my-20">
        {selectedImages.length ? (
          Array.from(selectedImages).map((image, index) => (
            <li key={index}>
              <p>{image.name}</p>
              <Image
                src={URL.createObjectURL(image)}
                height={300}
                width={300}
                alt={image.name}
                className="w-full"
              />
            </li>
          ))
        ) : (
          <>
            <p className="text-center px-10 font-bold">No images selected</p>
            <br />
            <p className="text-center px-10">
              Click on &quot;choose files&quot; multiple times on a phone to add
              as many images as u want...
            </p>
          </>
        )}
      </ul>
      <br />
      <button
        onClick={handleUpload}
        disabled={!selectedImages}
        className="fixed w-screen bottom-0 h-20 bg-green-600 text-white font-semibold"
      >
        Upload Images
      </button>
    </div>
  );
}

export default CameraCapture;
