import { Icon } from "@iconify/react";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import GradientBorderWrapper from "../wrappers/GradientBorderWrapper";

export default function DropzoneFileUpload({onDrop = ()=>{}}) {
  
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <GradientBorderWrapper>
      <div
        {...getRootProps()}
        className="w-full p-8 flex flex-col items-center justify-center gap-4"
      >
        <input {...getInputProps()} />
        <div className="rounded-full w-24 h-24 bg-secondary border-primary border flex items-center justify-center">
          <Icon
            icon="ic:outline-cloud-upload"
            width={48}
            className={"text-primary"}
          />
        </div>
        <p>Faça upload de seus ingressos em PDF</p>
        <small className="text-stone-400 text-center">
          Se o arquivo original tiver vários ingressos, faça upload de todos
          eles. Você poderá selecionar somente aqueles que deseja vender.
        </small>
        <small className="text-primary">Soltar arquivos aqui ou clicar para selecionar</small>
      </div>
    </GradientBorderWrapper>
  );
}
