import { Auth } from 'aws-amplify';

class Authentication {

    static async signUp(email, password) {
        try {
            await Auth.signUp({
                username: email,
                password: password,
                attributes: {
                    email: email
                }
            });
        } catch (error) {
            throw error;
        }
    }

    static async confirmSignUp(email, confirmationCode) {
        try {
            let successMessage = await Auth.confirmSignUp(email, confirmationCode);
            return successMessage;
        } catch (error) {
            return error;
        }
    }

    static async signIn(email, password) {
        try {
            const user = await Auth.signIn(email, password);
        } catch (error) {
            throw error;
        }
    }

    static async confirmSignIn(email, confirmationCode) {
        try {
            await Auth.confirmSignIn(email, confirmationCode);
        } catch (error) {
            console.log('error confirming sign in:', error);
        }
    }

    static async resendConfirmationCode(email) {
        try {
            await Auth.resendSignUp(email);
            console.log('code resent successfully');
        } catch (err) {
            console.log('error resending code: ', err);
        }
    }

    static async signOut() {
        try {
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    static async currentUser() {
        try {
            let user = await Auth.currentAuthenticatedUser();
            return user;
        } catch {
            return false;
        }
    }
}

export default Authentication;