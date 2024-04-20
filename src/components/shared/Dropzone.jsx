import { useState } from "react";
import { useDropzone } from "react-dropzone";
import { FileUp } from "lucide-react";

const Dropzone = ({ onDrop }) => {
  const [previewImage, setPreviewImage] = useState(null);

  const handleDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
    onDrop(acceptedFiles);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
    isDragAccept,
  } = useDropzone({
    onDrop: handleDrop,
    accept: {
      "image/*": [".jpeg", ".png"],
    },
    multiple: false,
    maxSize: 5242880,
  });

  return (
    <div
      {...getRootProps()}
      className={`dropzone bg-peach-100 h-[16.25rem] border rounded ${
        isDragActive ? "active" : ""
      } ${isDragReject ? "reject" : ""}`}
    >
      <input {...getInputProps()} />
      {/* {previewImage ? (
        <img
          src={previewImage}
          alt="Preview"
          className="w-full h-full object-cover rounded"
        />
      ) : ( */}
      <div className="font-medium flex flex-col items-center pt-12 gap-2">
        <FileUp color="white" fill="#59150E" size={70} />
        {isDragAccept && <p>Image will be accepted</p>}
        {isDragReject && <p>Invalid image format</p>}
        {!isDragActive && <p>Drag and drop image</p>}
        <p>Or</p>
        <p>
          <span className="text-primary-800 hover:text-primary-300 mr-1">
            Browse
          </span>
          to choose a file
        </p>
      </div>
      {/* )} */}
    </div>
  );
};

export default Dropzone;
