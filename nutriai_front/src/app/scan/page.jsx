import FileUploadIcon from '@mui/icons-material/FileUpload';
const scan=()=>{
    return(
        <div className="bg-[pink] w-1/3 border-2 border-black my-4 mx-4 flex flex-col justify-center items-center p-4">
          <div className="">
              <h1 className="text-[black] flex justify-center items-center">Know What's in Your Food</h1>
              <div className="">
                <img className="h-60" src="/barcode.png"/>
              </div>
              <div className='flex justify-center items-center'>
              <label htmlFor="fileUpload" class="custom-file-label">
                 UPLOAD <span><FileUploadIcon/></span>
               </label>
               <input type="file" id="fileUpload" hidden></input>
              </div>
          </div>
        </div>
    )
}
export default scan