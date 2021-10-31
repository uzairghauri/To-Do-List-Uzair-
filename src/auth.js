class Auth {
    constructor() {
        this.authenticated = false;
    }

    login(callBack) {
        this.authenticated = true;
        callBack()
    }

    logout(callBack) {
        this.authenticated= false;
        callBack()
    }

    isAuthenticated() {
        return this.authenticated
    }
}


export default new Auth()