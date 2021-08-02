import { Auth } from 'aws-amplify';

class Authentication {

    static async signUp(email, password) {
        try {
            const { user } = await Auth.signUp({
                email,
                password
            });
            console.log(user);
        } catch (error) {
            console.log('error signing up:', error);
        }
    }

    static async signIn(email, password) {
        try {
            const user = await Auth.signIn(email, password);
        } catch (error) {
            console.log('error signing in', error);
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
}

export default Authentication;