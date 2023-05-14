import Image from "next/image";
import {storageProvider} from "../storage/storageProvider";
import {useEffect, useState} from "react";

export function SignatureCard() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const getFile = async () => {
      const {file, fileName} = await storageProvider.download(
        "https://mega.nz/file/VItFSAgI#y6BCE_iU9AzfOqn7-4jiKr77g-gvCD2RUocmjDoNyDA"
      );

      const blob = new Blob([file]);
      const url = URL.createObjectURL(blob);
      setImageUrl(url);
    };

    getFile();
  }, []);

  return (
    <div className="group p-0 max-w-sm h-72 bg-gradient-to-t from-slate-200 via white to-slate-100 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="h-2/3">
        <div className="flex items-center justify-center w-full h-full relative bg-transparent">
          {imageUrl ? (
            <Image
              className="rounded-t-lg object-contain"
              src={imageUrl}
              fill
              alt=""
            />
          ) : (
            <div>
              <svg
                aria-hidden="true"
                className="w-16 h-16 mr-2 text-gray-200 animate-spin fill-orange-300"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </div>
      </div>

      <div className="h-1/3 bg-slate-100 rounded-lg rounded-t-[40px]">
        <div className="flex flex-col sm:flex-row justify-between items-center text-center p-5">
          <p className="transition-all ease-in-out duration-500 font-light text-slate-500 dark:text-gray-400">
            • Adicionada em 10/05/2023
          </p>
          <button className="transition-colors mt-1 w-2/3 flex justify-center align-center sm:w-auto ease-in-out duration-500 hover:bg-orange-300 hover:text-white inline-flex items-center px-3 py-2 text-sm text-slate-600 font-medium text-center bg-gray-100 border border-gray-300 hover:border-orange-300 rounded-lg dark:bg-orange-600 dark:hover:bg-orange-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export function AddSignatureCard() {
  return (
    <div className="max-w-sm h-72 cursor-pointer flex justify-center items-center bg-gradient-to-tr from-slate-100 via-white to-slate-50 rounded-lg border-dashed border-4 border-slate-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        className="w-24 h-24 stroke-slate-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
        />
      </svg>
    </div>
  );
}
