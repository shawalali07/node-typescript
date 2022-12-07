import mongoose from 'mongoose';
const connectDB = async () => {
  const conn = await mongoose.connect(
    'mongodb+srv://admin:admin@cluster0.3dlgqns.mongodb.net/?retryWrites=true&w=majority',
    {}
  );
  console.log(`Mongo DB connected: ${conn.connection.host}`);
};

export default connectDB;
