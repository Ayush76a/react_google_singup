1) using package k/a "@react-oauth/google"
2) Install this on frontend 
3) Create a account on "cloud.google.com", create a new projcet and set up apis and domains and javascript origins(localhost)
4) Create a new client id and client secret and add it to your frontend code(or env file)

5) working with npm package of @react-auth/google
   1)  install the package
   2)  wrap all the compoenets of index.js in "GoogleAuthProvider" and give it the clientId ad props
   3)  copy and return the "sign In with Google code" in signup component where u want to add button of google Signup
   4)  the above code will create a Button to singup with google
   5)  now if singup using the account is successfull a data with user "credentials" will be there
   6)  seeing the data u can't recognize the user_name and email who has just signed up
   7)  The property of "Credential" in "credentialResponse" contains all info in Encrypted form
   8)  Need to decrypt "credentials" to get the user data.

6) Decrypting User credentials to get user data with JWT_DECODE
   1)  install 'jwt-decode' pacakage from npm
   2)  import the 'jwtDecode()' from jwt-decode
   3)  using the function decode the credentials as 
       const decoded_user_data = jwtDecode(credentialResponse.credential);
   4)  now the "decoded_user_data" will contain the user data in plain text form
   5)  do the required processing with this data 
