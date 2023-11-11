import React, { ChangeEvent, useRef } from "react";
import { DEFAULT_SIDEBAR_OPTIONS } from "../utils/constants";
import { SidebaOptionModel } from "../models/SidebarOptionModel";
import { SelectedImageModel } from "../models/SelectedImageModel";
import { deepCopyingJson } from "../utils/methods";

type FileInputProps = {
  setOptions: (options: SidebaOptionModel[]) => void;
  setSelectedImage: (image: SelectedImageModel) => void;
};

const FileInput: React.FC<FileInputProps> = ({
  setOptions,
  setSelectedImage,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setOptions(deepCopyingJson(DEFAULT_SIDEBAR_OPTIONS));
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage({ url: imageUrl, name: file.name });
  };

  const openInput = () => inputRef.current?.click();
  return (
    <>
      <div className="sidebar-item file-btn" onClick={openInput}>
        Upload File
        <input
          ref={inputRef}
          type="file"
          className="file-input"
          accept="image/*"
          onChange={handleFileUpload}
        />
      </div>
    </>
  );
};

export default FileInput;
