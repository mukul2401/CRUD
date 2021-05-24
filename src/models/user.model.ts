import mongoose from 'mongoose';


interface userInterface extends mongoose.Document {
    name: string,
    job: string,
    createdAt: Date,
    updatedAt: Date
}

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        job: {
            type: String,
            required: true

        }
    },
    { timestamps: true }
)

const User = mongoose.model<userInterface>('User', userSchema);

export default User;