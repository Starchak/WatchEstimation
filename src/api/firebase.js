import firebase from "firebase"
import RNFetchBlob from 'react-native-fetch-blob'
import UUIDGenerator from 'react-native-uuid-generator';
import { Platform } from 'react-native'
import axios from 'axios'

const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

// Initialize Firebase
const config = {
    apiKey: 'AIzaSyC0HOfWx2FZ8zF8ogzmG_yUahlPzXwQ_kQ',
    projectId: 'watchly-d663f',
    storageBucket: 'watchly-d663f.appspot.com',
};

firebase.initializeApp(config);

class FirebaseApi {

  static uploadImg = (uri) => {
    return new Promise((resolve, reject) => {
      let uploadBlob = null
      let uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri
      UUIDGenerator.getRandomUUID().then(uuid=>{
        const imageRef = firebase.storage().ref('user_generated_images').child(uuid)
        let mime = 'image/jpg'
        fs.readFile(uploadUri, 'base64')
          .then((data) => {
            return Blob.build(data, { type: `${mime};BASE64` })
        })
        .then((blob) => {
            uploadBlob = blob
            return imageRef.put(blob, { contentType: mime })
          })
          .then(() => {
            uploadBlob.close()
            return imageRef.getDownloadURL()
          })
          .then((url) => {
            // URL of the image uploaded on Firebase storage
            // resolve(url)
            FirebaseApi.sendToCloudVison(uuid).then(jsonInfo=>{
              resolve(jsonInfo)
            })
          })
          .catch((error) => {
            console.log(error);
          })
      })
    })
  }

  static sendToCloudVison = (url) => {
    console.log('send to cloud vision');
    return new Promise((resolve, reject) => {
      const sendUrl = 'https://us-central1-watchly-d663f.cloudfunctions.net/analyseImage?filePath='+ url
      axios.get(sendUrl).then(response => {
        resolve(response)
      }).catch(error=>{
        console.log(error);
      })
    })
  }
}

export default FirebaseApi
