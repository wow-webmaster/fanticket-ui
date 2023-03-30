import { useState } from "react";
import axios from "../utils/axios";

export const useUploadForm = (url) => {
  const [isError, setIsError] = useState(false);
  const [progress, setProgress] = useState(0);

  const uploadForm = async (formData) => {
    setIsError(false);
    try {
      await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const progress = (progressEvent.loaded / progressEvent.total) * 50;
          console.log("on upload progress", progress);
          setProgress(progress);
        },
        onDownloadProgress: (progressEvent) => {
          const progress =
            50 + (progressEvent.loaded / progressEvent.total) * 50;
          console.log("on download progress", progress);
          setProgress(progress);
        },
      });
    } catch (err) {
      setIsError(true);
      console.log(err);
    }
  };

  return { uploadForm, isError, progress };
};
