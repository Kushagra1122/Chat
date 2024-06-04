const conversationData = require("../model/conversation")
const messageData = require("../model/message")
const sendMessage = async (req, res) => {
    try {
        const senderId = req.id;
        const receiverId = req.params.id;
        const { message } = req.body;

        let gotConversation = await conversationData.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!gotConversation) {
            gotConversation = await conversationData.create({
                participants: [senderId, receiverId]
            })
        };
        const newMessage = await messageData.create({
            senderId,
            receiverId,
            message
        });
        if (newMessage) {
            gotConversation.messages.push(newMessage._id);
        };


        await gotConversation.save();


        return res.status(201).json({
            newMessage
        })
    } catch (error) {
        console.log(error);
    }
}
const getMessage = async (req, res) => {
    try {
        const receiverId = req.params.id;
        const senderId = req.id;
        const conversation = await conversationData.findOne({
            participants: { $all: [senderId, receiverId] }
        }).populate("messages");
        if(conversation){
            return res.status(200).json({"data":conversation?.messages});
        }
        else{
            return res.status(200).json({"data":null})
        }
      
    } catch (error) {
        console.log(error);
    }
}

module.exports = { sendMessage, getMessage }