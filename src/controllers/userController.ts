import { User } from "../models/userModel";
import { catchAsync } from "../utils/catchAsync";

export const signUp = catchAsync(async (req, res) => {
  const newUser = await User.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      user: newUser
    }
  })
})