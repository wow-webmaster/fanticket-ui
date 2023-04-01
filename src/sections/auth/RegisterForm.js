import { useMemo, useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";
import useAuth from "../../hooks/useAuth";

export default function RegisterForm({ setFormData }) {
  const { signup } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: useMemo(() => {
      return {
        email: "",
        fullName: "",
        password: "",
      };
    }, []),
  });
  const onSubmit = async (data ,e) => {
    
    e.preventDefault();
    setLoading(true);
    console.log("register form....................")
    const result = await signup(data.email, data.fullName, data.password);
    setLoading(false);
    if (result !==null && result.status === 201) {
      toast(result.data.message);
    } else if (
      result !==null &&
      (result.status === 200 || result.status === 500)
    ) {
      if (setFormData) setFormData(data);
    }
    return true;
  };
  const handleLogin = () => {
    document.querySelector("#register-modal-check").click();
    document.querySelector("#auth-modal-check").click();
  };
  return (
    <div className="w-full p-4">
      <div className="w-full flex flex-col"></div>
      <div className="divider">OR</div>
      <FormProvider>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full flex flex-col gap-4 mb-4">
            <GradientBorderWrapper>
              <input
                placeholder="Digite seu nome completo aqui"
                {...register("fullName")}
                className="input input-ghost rounded-xl w-full"
              />
            </GradientBorderWrapper>
            <GradientBorderWrapper>
              <input
                placeholder="Entre com seu e-mail aqui"
                {...register("email")}
                className="input input-ghost rounded-xl w-full"
              />
            </GradientBorderWrapper>
            <GradientBorderWrapper>
              <input
                placeholder="Senha"
                {...register("password")}
                className="input input-ghost rounded-xl w-full"
                type="password"
              />
            </GradientBorderWrapper>
          </div>

          <div className="w-full flex flex-col gap-4 text-center">
            <button
              type="submit"
              className={`${
                loading ? "loading" : ""
              } btn btn-primary rounded-xl capitalize`}
            >
              Fazer Registro
            </button>
            <label>
              Você já tem conta?&nbsp;
              <Link to="#" onClick={handleLogin}>
                <span className="text-yellow-500">Crie uma conta</span>
              </Link>
            </label>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
