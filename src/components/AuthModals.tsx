import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import '@/styles/Modal.css';

type ModalType = 'login' | 'register' | 'verify' | 'forgot' | 'resetPassword' | null;

interface AuthModalsProps {
  isOpen: boolean;
  onClose: () => void;
}

const AuthModals = ({ isOpen, onClose }: AuthModalsProps) => {
  const [modalType, setModalType] = useState<ModalType>('login');
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleOtpKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    }
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalType('verify');
  };

  const handleForgotSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setModalType('resetPassword');
  };

  const handleClose = () => {
    setModalType('login');
    setOtp(['', '', '', '', '', '']);
    onClose();
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={handleClose}
        >
          <motion.div
            className="modal"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Login Modal */}
            {modalType === 'login' && (
              <>
                <div className="modal-header">
                  <h2 className="modal-title">Welcome Back</h2>
                  <button className="modal-close" onClick={handleClose}>
                    <X />
                  </button>
                </div>
                <div className="modal-content">
                  <form className="auth-form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Email or Mobile Number"
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-input"
                        placeholder="Enter password"
                      />
                    </div>

                    <button type="submit" className="auth-submit">
                      Log in
                    </button>
                  </form>

                  <div className="auth-forgot">
                    <a href="#" onClick={(e) => { e.preventDefault(); setModalType('forgot'); }}>
                      Forgot Password?
                    </a>
                  </div>

                  <div className="auth-divider">
                    <span>or</span>
                  </div>

                  <div className="auth-social">
                    <button className="auth-social-btn">
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Sign in with Google
                    </button>
                  </div>

                  <div className="auth-switch">
                    Don't have an account?{' '}
                    <button onClick={() => setModalType('register')}>
                      Register
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Register Modal */}
            {modalType === 'register' && (
              <>
                <div className="modal-header">
                  <h2 className="modal-title">Create Account</h2>
                  <button className="modal-close" onClick={handleClose}>
                    <X />
                  </button>
                </div>
                <div className="modal-content">
                  <form className="auth-form" onSubmit={handleRegisterSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Full Name"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="email"
                        className="form-input"
                        placeholder="Email address"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-input"
                        placeholder="Create password"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="tel"
                        className="form-input"
                        placeholder="Mobile Number"
                        required
                      />
                    </div>

                    <button type="submit" className="auth-submit">
                      Register
                    </button>
                  </form>

                  <div className="auth-divider">
                    <span>or</span>
                  </div>

                  <div className="auth-social">
                    <button className="auth-social-btn">
                      <svg viewBox="0 0 24 24" width="20" height="20">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                      Sign up with Google
                    </button>
                  </div>

                  <div className="auth-switch">
                    Already have an account?{' '}
                    <button onClick={() => setModalType('login')}>
                      Log in
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Verification Modal */}
            {modalType === 'verify' && (
              <>
                <div className="modal-header">
                  <h2 className="modal-title">Verify Your Account</h2>
                  <button className="modal-close" onClick={handleClose}>
                    <X />
                  </button>
                </div>
                <div className="modal-content">
                  <p className="otp-message">
                    Enter the verification code sent to your mobile/email
                  </p>

                  <div className="otp-container">
                    {otp.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (otpRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        className="otp-input"
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e.target.value)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                      />
                    ))}
                  </div>

                  <button className="auth-submit" onClick={handleClose}>
                    Verify & Continue
                  </button>

                  <div className="otp-resend">
                    <button>Resend Code</button>
                  </div>
                </div>
              </>
            )}

            {/* Forgot Password Modal */}
            {modalType === 'forgot' && (
              <>
                <div className="modal-header">
                  <h2 className="modal-title">Reset Password</h2>
                  <button className="modal-close" onClick={handleClose}>
                    <X />
                  </button>
                </div>
                <div className="modal-content">
                  <div className="step-indicator">
                    <div className="step active">1</div>
                    <div className="step-line"></div>
                    <div className="step">2</div>
                  </div>

                  <form className="auth-form" onSubmit={handleForgotSubmit}>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-input"
                        placeholder="Enter email"
                        required
                      />
                    </div>

                    <button type="submit" className="auth-submit">
                      Next
                    </button>
                  </form>

                  <div className="auth-switch">
                    Already registered?{' '}
                    <button onClick={() => setModalType('login')}>
                      Log in
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Reset Password Modal */}
            {modalType === 'resetPassword' && (
              <>
                <div className="modal-header">
                  <h2 className="modal-title">Reset Password</h2>
                  <button className="modal-close" onClick={handleClose}>
                    <X />
                  </button>
                </div>
                <div className="modal-content">
                  <div className="step-indicator">
                    <div className="step completed">1</div>
                    <div className="step-line active"></div>
                    <div className="step active">2</div>
                  </div>

                  <p className="reset-message">
                    A verification code has been sent to email.
                  </p>

                  <form className="auth-form">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-input"
                        placeholder="Verification Code"
                        required
                      />
                    </div>

                    <div className="form-group">
                      <input
                        type="password"
                        className="form-input"
                        placeholder="Enter new password"
                        required
                      />
                    </div>

                    <p className="password-requirements">
                      Passwords must be at least 6 characters.<br />
                      Must include 2 of: Alphabet / Number / Special character.
                    </p>

                    <button type="submit" className="auth-submit">
                      Reset
                    </button>
                  </form>

                  <div className="auth-switch">
                    Already registered?{' '}
                    <button onClick={() => setModalType('login')}>
                      Log in
                    </button>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AuthModals;