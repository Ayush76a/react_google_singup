import './App.css';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

function App() {
  return (
    <>
      <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
        const decoded_user_data = jwtDecode(credentialResponse.credential);
        console.log(decoded_user_data);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
      />;


    </>
  );
}

export default App;
