const Message = mongoose.model('Message', { From: String, To: String, Text: String, Date: });

const newMessage = new Message({ name: 'Zildjian' });
kitty.save().then();