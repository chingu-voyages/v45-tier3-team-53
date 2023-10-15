import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = (props) => {
  let navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setLoading(true);

    dispatch(login(email, password))
      .then(() => {
        navigate('/');
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
        console.log('failed');
      });
  };

  if (isLoggedIn) {
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
