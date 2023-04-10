import React from "react";
import { useState } from "react";
import { firestore, storage } from "../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { doc, setDoc, collection } from "@firebase/firestore";
import { useNavigate } from "react-router-dom";
const SetupProfile = () => {
  const navigate = useNavigate();
  const [img, setimg] = useState(null);
  const [profile, setuser] = useState([
    {
      username: "",
      occupation: "",
      location: "",
      twitter: "",
      linkedn: "",
      propicurl: "",
    },
  ]);

  const handelfile = (e) => {
    if (!e.target.files) {
      return;
    }
    setimg(e.target.files[0]);
  };

  const handlesubmmit = (e) => {
    e.preventDefault();
    const convet = () => {
      const file = img;
      if (!file) return;

      const storageRef = ref(storage, `files/${file.name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setuser({ ...profile, propicurl: downloadURL });
          });
        }
      );
    };
    convet();
    console.log(profile);
    const uids = "AtHriRlKQO1YYYd6gMXJ";
    const docRef = doc(firestore, "users", uids);
    const data = {
      username: profile.username,
      occupation: profile.occupation,
      location: profile.location,
      twitter: profile.twitter,
      linkedn: profile.linkedn,
      imgurl: profile.propicurl,
    };
    setDoc(docRef, data, { merge: true })
      .then((docRef) => {
        console.log("Document written with ID: ");
        navigate("/homepage");
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="w-full max-w-md">
        <div>
          <h2 className="mb-6 text-3xl font-extrabold text-center text-gray-900 dark:text-white">
            Getting Started
          </h2>
        </div>
        <form>
          <div className="mb-6">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Username
            </label>
            <input
              type="text"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              value={profile.username}
              onChange={(e) =>
                setuser({ ...profile, username: e.target.value })
              }
            />
          </div>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="website"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Ocuppation
              </label>
              <input
                type="text"
                id="occupation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required=""
                value={profile.occupation}
                onChange={(e) =>
                  setuser({ ...profile, occupation: e.target.value })
                }
              />
            </div>
            <div>
              <label
                htmlFor="visitors"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Location
              </label>
              <input
                type="text"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
                required=""
                value={profile.location}
                onChange={(e) =>
                  setuser({ ...profile, location: e.target.value })
                }
              />
            </div>
          </div>
          <div className="mb-6">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Twitter
            </label>
            <input
              type="text"
              id="twitter"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              value={profile.twitter}
              onChange={(e) => setuser({ ...profile, twitter: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="text"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Linkedn
            </label>
            <input
              type="text"
              id=""
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              value={profile.linkedn}
              onChange={(e) => setuser({ ...profile, linkedn: e.target.value })}
            />
          </div>
          <div className="mb-6">
            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="file_input">
              Profile Pic
            </label>
            <input
              className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
              aria-describedby="file_input_help"
              id="file_input"
              type="file"
              onChange={handelfile}
            />
            <p
              className="mt-1 text-sm text-gray-500 dark:text-gray-300"
              id="file_input_help">
              SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={handlesubmmit}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetupProfile;
