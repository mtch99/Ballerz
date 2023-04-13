import * as ImagePicker from "expo-image-picker";
import { Amplify } from "aws-amplify";
import {Storage, PutResult} from "@aws-amplify/storage";
import awsmobile from "../../infrastructure/BallerzServices/aws-exports";
Amplify.configure({
    ...awsmobile,

})




export async function pickImage(handleImagePicked: (result:ImagePicker.ImagePickerResult) => Promise<void>) {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    await handleImagePicked(result);
}

export async function uploadImage(filename: string, img: any, progressCallback: (progress: number) => void): Promise<PutResult> {
    return Storage.put(filename, img, {
      level: "public",
      contentType: "image/jpeg",
      progressCallback
    })
      .then((response) => {
        return response.key;
      })
      .catch((error) => {
        console.log(error);
        return error.response;
    });

};


export async function handleImagePicked(pickerResult:ImagePicker.ImagePickerResult): Promise<void>{
    try {
      if (pickerResult.canceled) {
        alert("Upload cancelled");
        return;
      } else {
        const asset = pickerResult.assets[0];
        const uri = 'data:image/jpeg;base64,' + asset.base64
        const img = await fetchImageFromUri(uri);
        const uploadUrl = await uploadImage("demo.jpg", img, (progress) => {});
      }
    } catch (e) {
      console.log(e);
      alert("Upload failed");
    }
};


const fetchImageFromUri = async (uri: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
};
