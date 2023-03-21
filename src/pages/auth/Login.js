import { useEffect } from "react";
import styled from "styled-components";
import { BlurModalBox } from "../../components/StyledComponents";
import useAuth from "../../hooks/useAuth";
import { LoginForm } from "../../sections/auth";

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
