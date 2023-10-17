import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { useNavigate } from 'react-router-dom';
import { login, loginUser } from '../store/authReducer';

const Login = (props) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = useAppSelector((state) => state.auth);

  const dispatch = useAppDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const newToken = await dispatch(loginUser({ email, password }));
      // dispatch(login(JSON.stringify(newToken)));
      console.log(newToken);
      navigate('/');
      window.location.reload();
    } catch (error) {
      setLoading(false);
      console.log('failed');
    }
  };

  if (auth.token != null) {
    navigate('/');
  }

  return (
    <>
      <div className="col-md-12">
        <div className="card card-container">
          <form>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                value={email}
                onChange={onChangeEmail}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                value={password}
                onChange={onChangePassword}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={loading}
                onClick={handleLogin}
              >
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
