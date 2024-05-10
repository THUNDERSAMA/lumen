"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";

// interface CameraCaptureProps {
//   onImagesSelected: (imageFiles: FileList) => void;
// }

function CameraCapture() {
  const [error, setError] = useState<string | null>(null);
  const [selectedImages, setSelectedImages] = useState<File[]>([]);

  const [userAgent, setUserAgent] = useState("");
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setScrollValue(Math.min(1, scrollTop / 50));
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setUserAgent(window.navigator.userAgent);
    const isMobile = /Mobi/i.test(userAgent);
    console.log(isMobile);
  }, [userAgent]);

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
    <>
      <Navbar scrollValue={scrollValue} />
      <main className="mainMain flex flex-col items-center justify-start gap-20 min-h-screen h-full w-screen">
        <section className="mt-36 w-96 max-w-[90vw] flex flex-col items-start">
          <h1 className="text-center text-xl font-normal">Upload</h1>
          <h2 className="text-center text-5xl font-bold">Prescription</h2>
        </section>
        <section className="w-full flex flex-col items-center justify-center gap-5">
          <div className="w-96 max-w-[90%] relative border-slate-700 border-2 border-dashed rounded-xl">
            <h2 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center gap-4 w-full font-semibold text-2xl">
              Capture Images
              <Image src={"/image.png"} height={30} width={30} alt="capture" />
            </h2>
            <input
              type="file"
              accept="image/*"
              capture="environment"
              multiple
              onChange={handleCapture}
              className="opacity-0 w-full h-20"
            />
          </div>
          <div className="w-96 max-w-[90%] relative border-slate-700 border-2 border-dashed rounded-xl">
            <h2 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center gap-4 w-full font-semibold text-2xl">
              Upload Files
              <Image src={"/upload.png"} height={30} width={30} alt="capture" />
            </h2>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleCapture}
              className="opacity-0 w-full h-20"
            />
          </div>
        </section>
        {error && <p>{error}</p>}
        <br />
        <section className="gap-4 justify-content-center grid grid-cols-3 place-content-center w-96 max-w-[90%] rounded-xl">
          {selectedImages.length ? (
            Array.from(selectedImages).map((image, index) => (
              <div
                key={index}
                className="w-fit flex rounded-lg overflow-hidden shadow-md"
              >
                {/* <p>{image.name}</p> */}
                <Image
                  src={URL.createObjectURL(image)}
                  height={100}
                  width={100}
                  alt={image.name}
                  //   className="w-full"
                />
              </div>
            ))
          ) : (
            <p className="text-center px-10 font-bold">No images selected</p>
          )}
        </section>
        <br />
        <button
          onClick={handleUpload}
          disabled={!selectedImages}
          className="fixed w-screen bottom-0 h-20 bg-green-600 text-white font-semibold"
        >
          Upload Images
        </button>
      </main>
    </>
  );
}

export default CameraCapture;
