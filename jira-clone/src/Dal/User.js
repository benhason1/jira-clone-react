// import Auth from '../Utils/Auth'

export default class User {
    // need to add jwt token on creating user
    constructor(username, password) {
        this.username = username
        this.password = password
        // this.token = Auth.signToken(username)
    }
}
