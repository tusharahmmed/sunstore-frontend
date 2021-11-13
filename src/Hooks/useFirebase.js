import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signOut, signInWithPopup, updateProfile } from "firebase/auth";
import InitializeFirebase from "../Firebase/firebase.init";


// init firebase app
InitializeFirebase()

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [admin,setAdmin] = useState(false);

    // firebase credientials
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // register user
    const registerUser = (email, password, name,location,history) => {
        // loading 
        setIsLoading(true);

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const newUser = { email: email, displayName: name };
                setUser(newUser);

                // set name
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                   
                }).catch((error) => {
                   
                })

                 // create user in db
                 saveUser(email,name,'POST');

                // clear error
                setAuthError('');
                // redirect
                const destination = location?.state?.from || '/';
                history.replace(destination);
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // login user
    const login = (email, password, location, history) => {
        // loading 
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                setUser(userCredential.user)
                // redirect
                const destination = location?.state?.from || '/';
                history.replace(destination);
                // clear error
                setAuthError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setAuthError(errorMessage);
            })
            .finally(() => setIsLoading(false));
    }

    // google sign in
    const handleGoogleSignIn = (location, history) => {
        // loading 
        setIsLoading(true);

        signInWithPopup(auth, googleProvider)
            .then((result) => {

                // The signed-in user info.
                setUser(result.user)
                const email = result.user.email;
                const name = result.user.displayName;
                // console.log(email,name)
               saveUser(email,name,'PUT')
                // clear error
                setAuthError('');
                // redirect
                const destination = location?.state?.from || '/';
                history.replace(destination);

            }).catch((error) => {

                // Handle Errors here.
                setAuthError(error.message);

            }).finally(() => setIsLoading(false));

    }

   // check admin level
    useEffect(()=>{
        fetch(`https://polar-brook-92580.herokuapp.com/user/${user.email}`)
        .then(res => res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])


    // user observe on state change
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {

            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            // loading 
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])


    // sign out
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setAuthError('');
        }).catch((error) => {
            // An error happened.
            setAuthError(error.message)
        })
            .finally(() => setIsLoading(false));
    }

    const saveUser = (email,name,method) =>{
        const userInfo = {email:email ,displayName: name};

        fetch('https://polar-brook-92580.herokuapp.com/users',{
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => console.log(data));
    }

    // return values
    return {
        user,
        authError,
        registerUser,
        handleGoogleSignIn,
        login,
        admin,
        logOut,
        isLoading,

    }
}

export default useFirebase;