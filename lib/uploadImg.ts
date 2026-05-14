"use server"
import { createClient } from "@supabase/supabase-js";
import { v4 } from "uuid"; 



const supabase = createClient(process.env.SUPRABASE_URL!,process.env.SUPRABASE_SERVICE_ROLE_kEY!);

export const HandleUploadImg = async (imgFile: any, bucketname: string) => {
  try {
    const id = v4();
    const filename = `${bucketname}/${id}`;

    const { data: uplaodData, error: uploadError } = await supabase.storage
      .from(bucketname)
      .upload(filename, imgFile, { cacheControl: "3600", upsert: false });

    if (uploadError) {
      return { data: null, error: `Error : ${uploadError.message}` };
    }

    const { data: publicurldata } = supabase.storage
      .from(bucketname)
      .getPublicUrl(filename);

    return { data: publicurldata.publicUrl, error: null };
  } catch (error) {
    return { data: null, error: `Error: ${error}` };
  }
};


export const handleImgDelete=async(bucketname:string, url:string)=>{
  try { 
      const deletefile= await supabase.storage.from(bucketname).remove([url]); 

      return {data:deletefile,error:null}
  } catch (error) { 
     return {data:null,error:`error : ${error}`}
  }
}