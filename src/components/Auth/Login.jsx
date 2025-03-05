import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from '../../assets/images/logo.png'


const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleAuth = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/dashboard");
    }, 2000);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-blue-200">
      <div className="container mx-auto px-4 h-full max-w-7xl">
        <div className={`flex flex-col lg:flex-row h-full rounded-2xl overflow-hidden bg-blue-800 backdrop-blur-lg shadow-2xl transition-all duration-500 ${isLogin ? '' : 'lg:flex-row-reverse'}`}>
          <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center items-center text-center lg:text-left">
            <div className="max-w-md w-full mx-auto">
              <img src={logo} alt="Logo" className="mb-8 w-32 mx-auto lg:mx-0" />
              <h1 className="text-4xl lg:text-5xl font-bold text-yellow-300 mb-6">Join EasyPolicy Now!</h1>
              <p className="text-gray-300 text-lg mb-8">
                {isLogin ? "Sign in to access your personalized experience." : "Create an account to unlock all features."}
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 p-8 lg:p-12 bg-black/40">
            <div className="max-w-md w-full mx-auto">
              <h2 className="text-2xl font-bold text-white mb-8 text-center lg:text-left">
                {isLogin ? "Sign in to your account" : "Create your account"}
              </h2>

              <form onSubmit={handleAuth} className="space-y-6">
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white" />
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" required className="w-full px-4 py-3 rounded-lg bg-gray-900/50 border border-gray-700 text-white" />
                <button type="submit" disabled={loading} className="w-full py-3 px-4 hover:bg-yellow-300 rounded-lg bg-blue-600 ease-in-out duration-500 text-white font-medium transition ">{loading ? "Processing..." : isLogin ? "Sign In" : "Create Account"}</button>
              </form>

              <div className="mt-8 text-center">
                <button onClick={() => setIsLogin(!isLogin)} className="text-blue-400 hover:text-blue-300 transition">
                  {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
