import { useMemo, useState } from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import GradientBorderWrapper from "../../components/wrappers/GradientBorderWrapper";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm({
    defaultValues: useMemo(() => {
      return {
        email: "",
        // username: "",
        password: "",
      };
    }, []),
  });
  const onSubmit = async (data) => {
    setLoading(true);
    const result = await login(data.email, data.password);
    console.log(result.data);
    if(result.data.status === 200 && result.data.data.user){
      window.location.reload(true);
    }
    else{
      toast.error(result.data.message);
    }
    
    setLoading(false);
  };
  const handleRegister = () => {
    document.querySelector("#auth-modal-check").click();
    document.querySelector("#register-modal-check").click();
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
          <div className="w-full flex justify-end mb-8">
            <Link href="#">
              <label
                htmlFor="auth-modal-check"
                className="text-yellow-500 cursor-pointer"
              >
                Esqueceu a senha?
              </label>
            </Link>
          </div>
          <div className="w-full flex flex-col gap-4 text-center">
            <button
              type="submit"
              className={`${
                loading ? "loading" : ""
              } btn btn-primary rounded-xl capitalize`}
            >
              Fazer login
            </button>
            <label>
              Ainda não tem uma conta?{" "}
              <Link to="#" onClick={handleRegister}>
                <span className="text-yellow-500">Crie uma conta</span>
              </Link>
            </label>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
