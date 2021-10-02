import { useState } from "react";
import { UploadOutlined } from "@ant-design/icons";
import { Alert, Button, Upload } from "antd";
import { initializeApp } from "firebase/app";
import { useParams } from "react-router-dom";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 as uuidv4 } from "uuid";
import { UPLOAD_IMAGE } from "../utils/graphqlFunctions/mutations";
import { useMutation } from "@apollo/client";
import { GET_MEMBER } from "../utils/graphqlFunctions/queries";
import { firebaseConfig, storageURL } from "../utils/firebaseConfig";

const ImageUpload = () => {
  const firebaseApp = initializeApp(firebaseConfig);
  const [uploadImage] = useMutation(UPLOAD_IMAGE, {
    refetchQueries: [{ query: GET_MEMBER }],
  });
  // Get a reference to the storage service, which is used to create references in your storage bucket
  const storage = getStorage(firebaseApp, storageURL);

  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  let { slug }: any = useParams();

  // function beforeUpload(file: any) {
  //   const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  //   if (!isJpgOrPng) {
  //     return setError("You can only upload JPG/PNG file!");
  //   }
  //   const isLt2M = file.size / 1024 / 1024 < 2;
  //   if (!isLt2M) {
  //     return setError("Image must smaller than 2MB!");
  //   }
  //   return isJpgOrPng && isLt2M;
  // }

  async function handleChange(info: any) {
    setError("");
    setStatus("");

    const image = info.file.originFileObj;

    const isJpgOrPng =
      image.type === "image/jpeg" || image.type === "image/png";
    if (!isJpgOrPng) {
      return setError("You can only upload JPG/PNG file!");
    }
    const isLt2M = image.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      return setError("Image must smaller than 2MB!");
    }

    const metadata = {
      contentType: "image/jpeg",
      firebaseStorageDownloadTokens: uuidv4(),
    };

    const imagesRef = ref(storage, "images");

    const membersImagesRef = ref(imagesRef, `${image.name}`);

    try {
      await uploadBytes(membersImagesRef, image, metadata).then((snapshot) => {
 
      });

      //  Upload the file and metadata
      const uploadTask = uploadBytesResumable(membersImagesRef, image);
      await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

        if (downloadURL) {
          setStatus("Image uploaded");

          uploadImage({
            variables: {
              uploadImageInput: {
                id: slug,
                imageURL: downloadURL,
              },
            },
          });
        } else {
          setStatus("Uplaod failed");
        }
      });
    } catch (error) {
      setError("Upload failed");
    }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <Upload
          name="avatar"
          maxCount={1}
          // listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          // beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          <Button icon={<UploadOutlined />}>Add Image</Button>
        </Upload>
      </div>
      {status ? <Alert message={status} type="success" showIcon /> : null}
      {error ? <Alert message={error} type="error" /> : null}
      {/* <button onClick={onSubmit}>Submit</button> */}
    </>
  );
};

export default ImageUpload;
