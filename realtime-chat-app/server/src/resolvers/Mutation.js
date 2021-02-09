const { messages } = require("./Query")

const Mutation = {
    postMessage(parent, { user, content }, {messages}, info){
        const id = messages.length
        messages.push({
            id, 
            user,
            content
        })
        return id;
    }
}

export {Mutation as default}