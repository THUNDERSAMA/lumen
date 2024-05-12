import Image from "next/image";
import ElementBound from "./ElementBound";
interface FileWithPreview {
  file: File;
  previewUrl: string;
}
export function Preview({
  enablePreview,
  setEnablePreview,
}: {
  enablePreview: FileWithPreview | null;
  setEnablePreview: (file: FileWithPreview | null) => void;
}) {
  function handlePreview(toggle: boolean) {
    toggle && setEnablePreview(null);
  }
  return enablePreview ? (
    <main className="fixed z-50 top-0 left-0 w-screen min-h-screen h-full bg-black flex justify-center items-center">
      <ElementBound onOutsideClick={handlePreview}>
        <div className="bg-white">
          <Image
            src={enablePreview.previewUrl}
            height={200}
            width={200}
            alt={enablePreview.file.name}
            className="w-auto max-h-screen"
          />
          <button
            onClick={() => setEnablePreview(null)}
            className="absolute top-4 left-4 z-10 scanBtn rounded-full"
          >
            <Image src={"/back.png"} height={50} width={50} alt="back" />
          </button>
        </div>
      </ElementBound>
    </main>
  ) : null;
}

export function PreviewAll({
  files,
  isPreviewAll,
  setIsPreviewAll,
}: {
  files: FileWithPreview[];
  isPreviewAll: boolean;
  setIsPreviewAll: (isPreviewAll: boolean) => void;
}) {
  return isPreviewAll ? (
    <main className="fixed z-50 top-0 left-0 w-screen h-screen bg-black flex flex-col justify-center items-center gap-2">
      {files.map((file, index) => (
        <div key={index} className="">
          <Image
            src={file.previewUrl}
            height={100}
            width={100}
            alt={file.file.name}
            className="w-full"
          />
        </div>
      ))}
      <button
        onClick={() => setIsPreviewAll(false)}
        className="fixed top-4 left-4 z-10 scanBtn rounded-full"
      >
        <Image src={"/back.png"} height={50} width={50} alt="back" />
      </button>
    </main>
  ) : null;
}
