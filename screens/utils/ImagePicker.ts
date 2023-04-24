import * as ImagePicker from "expo-image-picker";
import { Amplify } from "aws-amplify";
import {Storage, PutResult, StorageGetConfig} from "@aws-amplify/storage";
import awsmobile from "../../infrastructure/BallerzServices/aws-exports";
Amplify.configure({
    ...awsmobile,
})
const DEFAULT_IMAGE_EXTENSION = ".jpg";


export interface IUploadImageResult {
  error: false | any
  putResult?: PutResult
}


export async function getProfilePicUri(profileID: string): Promise<string | undefined> {
  const configMap: StorageGetConfig<any> = {
    
  }
  const uri = await Storage.get(`public/${profileID+DEFAULT_IMAGE_EXTENSION}`, {
  }).catch(err => {
    console.log(`Error getting profile pic: ${err}`);
    return undefined;
  })
  console.log(uri);
  return uri
}


export async function pickImage(handleImagePicked: (result:ImagePicker.ImagePickerResult) => Promise<void>) {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      aspect: [4, 3],
      quality: 1,
      base64: true,
    });

    await handleImagePicked(result);
}


export async function uploadImage(filename: string, img: any, progressCallback: (progress: number) => void): Promise<IUploadImageResult> {
    const result: IUploadImageResult = {
      error: false,
    }
    await Storage.put(filename, img, {
      level: "public",
      contentType: "image/jpeg",
      progressCallback
    })
        .then((response) => {
          result.putResult = response;
        })
        .catch((error) => {
          console.log(error);
          result.error = error;
    });

    return result;
};



export async function handleImagePicked(pickerResult:ImagePicker.ImagePickerResult): Promise<void>{
    try {
      if (pickerResult.canceled) {
        console.log("Upload cancelled");
        return;
      } else {
        const asset = pickerResult.assets[0];
        const uri = 'data:image/jpeg;base64,' + asset.base64
        const img = await fetchImageFromUri(uri);
        // const uploadUrl = await uploadImage("demo.jpg", img, (progress) => {});
      }
    } catch (e) {
      console.log(e);
      alert("Upload failed");
    }
};

export async function getAssetUri(pickerResult:ImagePicker.ImagePickerResult): Promise<string | undefined> {
  if (pickerResult.canceled) {
    alert("Upload cancelled");
    return;
  } else {
    const asset = pickerResult.assets[0];
    const uri = 'data:image/jpeg;base64,' + asset.base64
    return uri
  }
}


export const fetchImageFromUri = async (uri: string) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
};
