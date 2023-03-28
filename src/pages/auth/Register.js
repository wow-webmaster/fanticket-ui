import { useEffect, useState } from "react";
import styled from "styled-components";
import { BlurModalBox } from "../../components/StyledComponents";
import useAuth from "../../hooks/useAuth";
import OtpVerificationSection from "../../sections/auth/OtpVerification";
import RegisterForm from "../../sections/auth/RegisterForm";

export default function Register() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState();
  const changeUI = (formData) => {
    setData(formData);
   
    setStep(1);
  };
  return (
    <>
      <input
        type="checkbox"
        id="register-modal-check"
        className="modal-toggle"
      />
      <div className="modal">
        <BlurModalBox className="modal-box backdrop-blur-lg">
          <div className="mb-2">
            <label
              htmlFor="register-modal-check"
              className="btn btn-sm btn-circle absolute right-2 top-5 bg-transparent border-0"
            >
              ✕
            </label>
            <h3 className="font-bold text-lg">Signup</h3>
          </div>

          <hr className="-mx-5 border-stone-500 " />
          {step === 0 && <RegisterForm setFormData={changeUI} />}

          {step === 1 && (
            <OtpVerificationSection
              email={data?.email}
              fullName={data?.fullName}
              password={data?.password}
            />
          )}
        </BlurModalBox>
      </div>
    </>
  );
}
