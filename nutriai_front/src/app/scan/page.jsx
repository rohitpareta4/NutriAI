"use client"
import { BrowserMultiFormatReader } from '@zxing/browser';
import { useState } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import BarcodeScannerComponent from "react-qr-barcode-scanner";
import axios from 'axios';

const Scan = () => {

  const [isopen,setIsopen]=useState(false)
  const [Result,setResult]=useState(null)
  const [upload,setUpload]=useState(null)

  const scannow=()=>{
    setIsopen(true)
  }

  const handlesubmit=()=>{
    console.log('..................upload............',upload)
  }

  if(Result){
    console.log("................result",Result)
  }


  const decodeBarcode = async (file) => {
  const reader = new FileReader();
  reader.onload = async (e) => {
    const img = new Image();
    img.src = e.target.result;
    img.onload = async () => {
      const codeReader = new BrowserMultiFormatReader();
      try {
        const result = await codeReader.decodeFromImageElement(img);
       const res=await axios.get(`https://world.openfoodfacts.org/api/v0/product/${result.getText}.json`)
       console.log("Status Verbose:", res.data.status_verbose);

       if(res.data.status===0){
        const res1=await axios.get(`https://world.openbeautyfacts.org/api/v0/product/${result.getText}.json`)
        console.log("????????????????????????",res1.data)
       }else{
        console.log("????????????????????????",res.data)
       }

       
        console.log("Barcode:", result.getText());
      } catch (err) {
        console.error("No barcode found", err);
      }
    };
  };
  reader.readAsDataURL(file);
};

  return (
    <div className="bg-gradient-to-r from-pink-200 via-red-200 to-yellow-200 border-4 border-black  shadow-xl my-8 mx-8 flex flex-col md:flex-row justify-center items-center p-8 gap-6">
      
      {/* Left Content */}
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Title */}
        <h1 
          className="text-4xl md:text-5xl font-extrabold text-black drop-shadow-lg"
          style={{ fontFamily: '"Press Start 2P", cursive' }} // Mario-like retro font
        >
          Know What's in Your Food
        </h1>

        {/* Barcode Image */}
        <div>
          <img className="h-48 md:h-60 " src="/barcode.png" alt="Barcode" />
        </div>

        {/* Upload Button */}
        <div className="flex justify-center items-center">
          <label 
            htmlFor="fileUpload" 
            className="cursor-pointer hidden md:block bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all"
            style={{ fontFamily: '"Press Start 2P", cursive' }}
          >
            UPLOAD <FileUploadIcon />
          </label>
              <button 
            onClick={handlesubmit}
            className="bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-full shadow-lg"
          >
            Upload & Process
          </button>
            <label 
            onClick={scannow}
            // htmlFor="fileUpload" 
            className="cursor-pointer md:hidden bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all"
            style={{ fontFamily: '"Press Start 2P", cursive' }}
          >
            scan <FileUploadIcon />
          </label>
          {isopen && (
            <BarcodeScannerComponent height={300} width={300}
            onUpdate={(err,result)=>{
              if(result){
                setResult(result.text)
                setIsopen(false)
              }
            }}
            />
          )}
          <input type="file" id="fileUpload" 
            onChange={(e) => {
    const file = e.target.files[0];
    setUpload(file);
    decodeBarcode(file);
  }}
           hidden />
        </div>
      </div>

      {/* Right Image */}
      <div>
        <img className=" h-80 w-full drop-shadow-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8u-RZrnXxdoRAL-qpRftv0L7jAG9VU3uwog&s" alt="Scan" />
      </div>
    </div>
  );
};

export default Scan;
