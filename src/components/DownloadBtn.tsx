import React from "react";
import { SelectedImageModel } from "../models/SelectedImageModel";

type DownloadBtnProps = {
  image: SelectedImageModel;
  filter: string;
};

const DownloadBtn: React.FC<DownloadBtnProps> = ({ image, filter }) => {
  const handleDownload = () => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const img = new Image();

    img.src = image.url;

    img.onload = () => {
      if (!context) return;
      canvas.width = img.width;
      canvas.height = img.height;

      context.filter = filter;
      context.drawImage(img, 0, 0, img.width, img.height);

      const downloadLink = document.createElement("a");
      downloadLink.href = canvas.toDataURL("image/jpeg");
      downloadLink.download = "filtered-" + image.name;
      downloadLink.click();
    };
  };

  return (
    <button className="sidebar-item download-btn" onClick={handleDownload}>
      Download
    </button>
  );
};

export default DownloadBtn;
