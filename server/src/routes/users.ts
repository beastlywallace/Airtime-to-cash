import express from 'express';
import {
  registerUser,
  updateUser,
  forgetPassword,
  resetPassword,
  userLogin,
  verifyUser,
  singleUser,
  allUsers,
  resendVerificationLink,
  getUserAccount,
  userTransactions,
  userWithdrawals,
} from '../controller/userController';
import { auth } from '../middleware/auth';

const router = express.Router();

//Routes
router.post('/register', registerUser);
router.get('/verify/:token', verifyUser);
router.post('/login', userLogin);
router.post('/forgetPassword', forgetPassword);
router.patch('/update/:id', auth, updateUser);
router.patch('/resetPassword/:token', resetPassword);
router.patch('/resendVerification', resendVerificationLink);
router.get('/userAccount/:id', auth, getUserAccount);
router.get('/userTransaction/:id', auth, userTransactions);
router.get('/userWithdrawals/:id', auth, userWithdrawals);

router.get('/singleUser/:id', singleUser);
router.get('/allUsers', allUsers);
export default router;
