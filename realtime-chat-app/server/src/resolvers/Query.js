const Query = {
    messages(parent, args, {messages}, info)
    {
        return messages    
    }
}

export {Query as default}