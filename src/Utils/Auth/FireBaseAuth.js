import auth from "./fire";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'


class FireBaseAuth {
	static async login(auth_obj, update_auth_obj, navigate) {
		/*
		
		Method to handle login
		
		*/
		await signInWithEmailAndPassword(auth, auth_obj.email, auth_obj.password)
			.then(response => {
				sessionStorage.setItem("loggedIn", true);
				navigate("/home");
			})
			.catch(err => {
				console.log('Login Error: ', err)
				switch (err.code) {
					case "auth/invalid-email":
						update_auth_obj({
							...auth_obj,
							emailError: 'Invalid Email'
						})
					case "auth/user-disabled":
						update_auth_obj({
							...auth_obj,
							emailError: 'Account is disabled'
						})
					case "auth/user-not-found":
						update_auth_obj({
							...auth_obj,
							emailError: 'Account not found'
						})
						break;
					case "auth/wrong-password":
						update_auth_obj({
							...auth_obj,
							passwordError: 'Wrong Password'
						})
						break;
				}
			});
	}


	static async register(auth_obj, update_auth_obj, navigate) {
		/*
		
		Method to create account
		
		*/
		await createUserWithEmailAndPassword(auth, auth_obj.email,
			auth_obj.password).then(response => {
				updateProfile(auth.currentUser, {
					displayName: auth_obj.name
				})
				sessionStorage.setItem("loggedIn", true);
				navigate("/");
			}).catch(err => {
				console.log('Register Error: ', err.message)
				switch (err.code) {
					case "auth/email-already-in-use":
						update_auth_obj({
							...auth_obj,
							emailError: 'Email already in use'
						})
						break;
					case "auth/invalid-email":
						update_auth_obj({
							...auth_obj,
							emailError: 'Invalid email'
						})
						break;
					case "auth/weak-password":
						update_auth_obj({
							...auth_obj,
							passwordError: 'Password should be at least 6 characters'
						})
						break;
				}
			});
	}


	static async handleLogout(navigate) {
		/*
		
		Method to handle logout
		
		*/
		await auth.signOut();
		sessionStorage.removeItem("loggedIn");
		navigate("/");
	}

}


export default FireBaseAuth;