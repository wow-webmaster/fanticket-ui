import styled from "styled-components";
import { LoginForm } from "../../sections/auth";

const BlurModalBox = styled.div`
  background: radial-gradient(
    93.3% 93.3% at 93.3% 91.9%,
    rgba(130, 130, 130, 0.1) 0%,
    rgba(50, 50, 50, 0.1) 100%
  );
  border: 1px solid #828282;
`;

export default function Login() {
  return (
    <>
      <input type="checkbox" id="auth-modal-check" className="modal-toggle" />
      <div className="modal">
        <BlurModalBox className="modal-box backdrop-blur-lg">
          <div className="mb-2">
            <label
              htmlFor="auth-modal-check"
              className="btn btn-sm btn-circle absolute right-2 top-5 bg-transparent border-0"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">Login</h3>
          </div>

          <hr className="-mx-5 border-stone-500 " />
          <LoginForm />
        
        </BlurModalBox>
      </div>
    </>
  );
}
