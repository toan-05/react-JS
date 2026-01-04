import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    // TODO: validate email
    if (!email) {
      setEmailError("Email không được để trống");
      isValid = false;
    }
    else {
      setEmailError("");
    }
    // TODO: validate password
    if (!password) {
      setPasswordError("Password không được để trống");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password phải có ít nhất 6 ký tự");
      isValid = false;
    }
    else {
      setPasswordError("");
    }

    if (isValid) {
      alert("Đăng nhập thành công");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "50px auto" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {setEmail(e.target.value);
              setEmailError("");
            }}
          />
          {emailError && <p style={{ color: "red" }}>{emailError}</p>}
        </div>

        <div style={{ marginTop: 10 }}>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => {setPassword(e.target.value);
              setPasswordError("");
            }}
          />
          {passwordError && (
            <p style={{ color: "red" }}>{passwordError}</p>
          )}
        </div>

        <button style={{ marginTop: 20 }}>Login</button>
      </form>
    </div>
  );
}

export default App;
