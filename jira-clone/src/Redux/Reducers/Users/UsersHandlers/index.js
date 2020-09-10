import { v4 } from "uuid"

export default {
    newUser: (state, action) => {
        let userToAdd = {}
        if (action.user) {
            userToAdd["id"] = v4()
            userToAdd["content"] = action.user
            state.users.push(userToAdd)
        }
        return state
    },

}
