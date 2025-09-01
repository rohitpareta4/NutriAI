
import FileUploadIcon from '@mui/icons-material/FileUpload';

const Scan = () => {
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
            className="cursor-pointer bg-yellow-400 hover:bg-yellow-500 active:bg-yellow-600 text-black font-bold px-6 py-3 rounded-full flex items-center gap-2 shadow-lg transition-all"
            style={{ fontFamily: '"Press Start 2P", cursive' }}
          >
            UPLOAD <FileUploadIcon />
          </label>
          <input type="file" id="fileUpload" hidden />
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
