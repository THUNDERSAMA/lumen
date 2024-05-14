"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Navbar from "@/app/components/Navbar";
import { Preview, PreviewAll } from "@/app/components/Preview";
import { set } from "mongoose";
import { useSelector, useDispatch } from "react-redux";
import { updateByValue } from "../../utils/slices/UploaddataState";
import { RootState } from "@/app/utils/store";
import { Providers } from "../../Providers";

interface FileWithPreview {
  file: File;
  previewUrl: string;
}
function App() {
  const formPrevdata = useSelector(
    (state: RootState) => state.Uploaddata.value
  );
  console.log(formPrevdata);
  const [error, setError] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState<boolean | null>(null);
  const [enablePreview, setEnablePreview] = useState<FileWithPreview | null>(
    null
  );
  const [isPreviewAll, setIsPreviewAll] = useState<boolean>(false);
  const [enableExtendedMenu, setEnableExtendedMenu] = useState<boolean>(false);

  const handlePreview = (file: FileWithPreview) => {
    setEnablePreview(file);
  };

  const [files, setFiles] = useState<FileWithPreview[]>([]);

  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = Array.from(event.target.files as FileList);
    console.log(uploadedFiles[0]?.type);
    if (
      !(
        uploadedFiles[0].type === "application/pdf" ||
        uploadedFiles[0].type.startsWith("image/")
      )
    ) {
      setError("Please select only image or pdf files.");
      return;
    }
    setError(null);
    if (uploadedFiles[0].type === "application/pdf") {
      if (files.length > 0 && files[0].file.type.startsWith("image/")) {
        setFiles([]);
      }
      console.log("pdf");
      setFiles([{ file: uploadedFiles[0], previewUrl: "" }]);
    }

    if (uploadedFiles[0].type.startsWith("image/")) {
      if (files.length > 0 && files[0].file.type === "application/pdf") {
        setFiles([]);
      }
      console.log("img");
      uploadedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          setFiles((prevFiles) => [
            ...prevFiles,
            { file, previewUrl: reader.result as string },
          ]);
        };
        reader.readAsDataURL(file);
      });
    }
    console.log(uploadedFiles);
  };

  console.log(files);
  const handleRemove = (indexToRemove: number) => {
    setFiles((prevFiles) =>
      prevFiles.filter((_, index) => index !== indexToRemove)
    );
  };

  const handleRemovePdf = () => {
    setFiles([]);
  };

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    setIsMobile(/Mobi/i.test(userAgent));
    console.log(isMobile);
  }, [isMobile]);

  //   const handleCapture = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     const files = event.target.files ? Array.from(event.target.files) : [];
  //     if (files.length === 0) {
  //       return;
  //     }
  //     // Check if all selected files are images
  //     if (files.some((file) => !file.type.startsWith("image/"))) {
  //       setError("Please select only image files.");
  //       return;
  //     }

  //     const mergedFiles = selectedImages.concat(files);

  //     //   setSelectedImages((prevfiles) => [...prevfiles, ...files]);
  //     setSelectedImages(mergedFiles);

  //     console.log(files);
  //     setError(null);
  //   };

  const handleSubmit = () => {
    if (files) {
      // upload to ipfs
    }
  };

  if (isMobile === null)
    return (
      <div className="h-screen grid place-items-center text-center">
        Loading...
      </div>
    );
  return (
    <>
      <Preview
        enablePreview={enablePreview}
        setEnablePreview={setEnablePreview}
      />
      {/* <PreviewAll
        files={files}
        isPreviewAll={isPreviewAll}
        setIsPreviewAll={setIsPreviewAll}
      /> */}
      <Navbar />
      <>
        <main
          className="mainMain pt-36 mobile:pb-4 tablet:pb-36 flex flex-col items-center justify-start gap-20 min-h-svh h-full"
          //   style={
          //     enablePreview || isPreviewAll
          //       ? { display: "none" }
          //       : { display: "flex" }
          //   }
        >
          <section className="w-96 max-w-[90vw] flex flex-col items-start">
            <h1 className="text-center text-xl font-normal">Upload</h1>
            <h2 className="text-center text-5xl font-bold">Prescription</h2>
          </section>
          <section className="w-full flex flex-col items-center justify-center gap-2">
            {isMobile && (
              <div className="w-96 max-w-[90%] relative border-slate-700 border-2 border-dashed rounded-xl bg-white">
                <h2 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center gap-2 w-full font-semibold">
                  {files.length > 0 && files[0].file.type.startsWith("image/")
                    ? "Capture to add"
                    : "Capture images"}
                  <Image
                    src={"/camera.png"}
                    height={20}
                    width={20}
                    alt="capture"
                  />
                </h2>
                <input
                  type="file"
                  accept="image/*"
                  capture="environment"
                  multiple
                  onChange={handleUpload}
                  className="opacity-0 w-full h-20"
                />
              </div>
            )}
            {!enableExtendedMenu && (
              <button
                className="h-20 w-96 max-w-[90%] relative border-slate-700 border-2 border-dashed rounded-xl bg-white"
                onClick={() => setEnableExtendedMenu(true)}
              >
                <h2 className="h-full flex justify-center items-center gap-2 w-full font-semibold">
                  Upload Files
                  <Image
                    src={"/upload.png"}
                    height={20}
                    width={20}
                    alt="capture"
                  />
                </h2>
              </button>
            )}
            {enableExtendedMenu && (
              <section
                className={`flex w-96 max-w-[90%] gap-2 ${
                  files.length > 0 && files[0].file.type.startsWith("image/")
                    ? "flex-col-reverse"
                    : "flex-col"
                }`}
              >
                <div className="w-full relative border-slate-700 border-2 border-dashed rounded-xl bg-white">
                  <h2 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center gap-2 w-full font-semibold">
                    {files.length > 0 && files[0].file.type.startsWith("image/")
                      ? "Add images"
                      : "Upload images"}
                    <Image
                      src={"/image.png"}
                      height={20}
                      width={20}
                      alt="capture"
                    />
                  </h2>
                  <input
                    type="file"
                    accept="image/*"
                    multiple
                    onFocus={(e) => (e.target.value = "")}
                    onChange={handleUpload}
                    className="opacity-0 w-full h-20"
                  />
                </div>
                <div className="w-full relative border-slate-700 border-2 border-dashed rounded-xl bg-white">
                  <h2 className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 flex justify-center items-center gap-2 w-full font-semibold">
                    {files.length > 0 &&
                    files[0].file.type === "application/pdf"
                      ? "Change the pdf"
                      : "Upload a pdf"}
                    <Image
                      src={"/document.png"}
                      height={20}
                      width={20}
                      alt="capture"
                    />
                  </h2>
                  <input
                    type="file"
                    accept=".pdf"
                    onFocus={(e) => (e.target.value = "")}
                    onChange={handleUpload}
                    className="opacity-0 w-full h-20"
                  />
                </div>
              </section>
            )}
          </section>
          {error && (
            <p className="fixed bottom-0 w-full flex items-center justify-center gap-2 text-white bg-red-600 p-2">
              <Image
                src={"/error_icon.svg"}
                height={16}
                width={16}
                alt="error"
                className="invert"
              />
              {error}
            </p>
          )}
          {files.length ? (
            <section className="flex flex-col items-center justify-center w-96 max-w-[90%]">
              {files[0].file.type.startsWith("image/") && (
                <>
                  <div className="gap-2 justify-content-center grid grid-cols-2 place-content-center w-full">
                    {files.map((fileObj, index) => (
                      <div
                        key={index}
                        className="relative rounded-lg overflow-hidden border-2 border-slate-700 cursor-pointer"
                      >
                        <Image
                          //   src={URL.createObjectURL(image)}
                          src={fileObj.previewUrl}
                          height={100}
                          width={100}
                          //   alt={image.size.toString()}
                          alt={fileObj.file.name}
                          onClick={() => handlePreview(fileObj)}
                          className="w-auto aspect-square object-cover bg-white"
                        />
                        <button
                          onClick={() => handleRemove(index)}
                          className="absolute top-1 right-1 z-10 scanBtn rounded-full"
                        >
                          <Image
                            src={"/close.svg"}
                            height={30}
                            width={30}
                            alt="close"
                          />
                        </button>
                      </div>
                    ))}
                  </div>
                  {/* <button
                    onClick={() => setIsPreviewAll(true)}
                    className="w-auto m-8 underline underline-offset-4"
                  >
                    View All
                  </button> */}
                  <span className="w-full text-center mt-4 text-xs opacity-50">
                    click on them to preview
                  </span>
                </>
              )}
              {files[0].file.type === "application/pdf" &&
                files.map((fileObj, index) =>
                  isMobile ? (
                    <div
                      key={index}
                      className="bg-black text-white flex items-center justify-between p-4 rounded-xl w-full relative -mb-6"
                    >
                      <span>{fileObj.file.name}</span>
                      <button onClick={handleRemovePdf}>
                        <Image
                          src={"/close.svg"}
                          height={30}
                          width={30}
                          alt="close"
                          className="invert"
                        />
                      </button>
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="relative border-2 border-black rounded-2xl overflow-hidden shadow-inner"
                    >
                      <iframe
                        src={URL.createObjectURL(fileObj.file)}
                        // type="application/pdf"
                        width="500"
                        height="600"
                        className="border-b-gray-700 border-b-2"
                      />
                      <button
                        className="absolute bottom-3 left-3 rounded-lg p-2 px-3 bg-red-700 text-xs text-white"
                        onClick={handleRemovePdf}
                      >
                        Remove
                      </button>
                    </div>
                  )
                )}

              <button
                onClick={handleSubmit}
                disabled={files.length === 0}
                className="w-full mt-8 p-4 px-6 rounded-xl border-2 border-dashed border-green-600 text-green-600 font-semibold bg-white"
              >
                Submit
              </button>
            </section>
          ) : null}
        </main>
      </>
    </>
  );
}
export default function CameraCapture() {
  return (
    <>
      <Providers>
        <App />
      </Providers>
    </>
  );
}
//export default ;
