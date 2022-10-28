import React, { useContext, useState } from "react";
import Image from "next/image";
import logo from "../../assets/Instagram.jpg";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import { AuthContext } from "../../context/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";
import { storage, db } from "../../Firebase";
import { Alert, Link } from "@mui/material";

function index() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { signup, user } = useContext(AuthContext);

  let handleClick = async () => {
    console.log(email);
    console.log(password);
    console.log(fullName);
    console.log(file);
    try {
      setLoading(true);
      setError("");
      const userInfo = await signup(email, password);

      // Create the file metadata
      /** @type {any} */
      const metadata = {
        contentType: "image/jpeg",
      };
      // Upload file and metadata to the object 'images/mountains.jpg'
      const storageRef = ref(storage, `${userInfo.user.uid}/Profile`);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          console.log(error);
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref)
            .then(async (downloadURL) => {
              console.log("File available at", downloadURL);

              let userData = {
                email,
                password,
                fullName,
                profilePhoto: downloadURL,
                uid: userInfo.user.uid,
              };

              await setDoc(doc(db, "users", userInfo.user.uid), userData);
            })
            .catch((err) => {
              // console.log(err);
            });
        }
      );
      setEmail("");
      setPassword("");
      setFullName("");
      console.log("user signed up");
      setSuccess("Sign Up Successful");
    } catch (err) {
      setError(err.code);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="signup-card">
        <Image src={logo} />
        <div className="info">
          Sign up to see photos and videos from your friends
        </div>
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
          margin="dense"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          size="small"
          margin="dense"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Full Name"
          variant="outlined"
          size="small"
          margin="dense"
          fullWidth
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Button
          variant="outlined"
          color="secondary"
          component="label"
          fullWidth
        >
          <CloudUploadIcon /> &nbsp; Upload Profile Image
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
          />
        </Button>
        <Button
          style={{ marginTop: "1rem" }}
          variant="contained"
          fullWidth
          onClick={handleClick}
        >
          Sign Up
        </Button>
        <div className="tnc">
          By signing up, you agree to our Terms, Conditions and Cookies policy.
        </div>
        {error !== "" && (
          <Alert severity="error" variant="filled" sx={{ mt: ".5rem" }}>
            {error}
          </Alert>
        )}
        {success !== "" && (
          <Alert severity="success" variant="filled" sx={{ mt: ".5rem" }}>
            {success}
          </Alert>
        )}
      </div>

      <div className="bottom-card">
        Already Have an account ?{" "}
        <Link href="/login">
          <span style={{ color: "blueviolet" }}>Login</span>
        </Link>
      </div>
    </div>
  );
}

export default index;
