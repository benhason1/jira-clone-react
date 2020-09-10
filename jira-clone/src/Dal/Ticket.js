export default class Ticket {
    constructor(creatorId, title, content, allowedUsers) {
        this.creatorId = creatorId
        this.title = title
        this.content = content
        this.allowedUsers = allowedUsers
    }
}
