import { useForm } from "react-hook-form";
import Image from "next/image";
import SealOfMaharashtra from "../public/Seal_of_Maharashtra.png";
import Error from "../components/Error";
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const {
    register: register2,
    handleSubmit: handleSubmit2,
    formState: { errors: errors2 },
  } = useForm({
    defaultValues: {
      number: "",
    },
  });
  const onLogin = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="App">
        <div className="container-fluid ps-md-0">
          <div className="row g-0">
            <div className="d-none d-md-flex col-md-4 col-lg-8 bg-image">
              <div className="login d-flex align-items-center p-t-24 width-100 flex-direction-column">
                <div>
                  <p className="color-white fs-40 font-weight-600">
                    <span>
                      <Image
                        alt="Seal of Maharashtra"
                        className="m-r-18"
                        src={SealOfMaharashtra}
                        width={80}
                        height={80}
                      />
                    </span>
                    सोलापूर तहसीलदार कार्यालय
                  </p>
                </div>
                <form className="padding-top-5vh width-25vw">
                  <div className="form-floating mb-3">
                    <input
                      id="floatingInput"
                      className="form-control"
                      placeholder="अर्ज क्रमांक"
                      {...register2("number", {
                        required: true,
                        pattern: {
                          message: "Please enter a valid email",
                        },
                      })}
                    />
                    <label htmlFor="floatingInput">अर्ज क्रमांक</label>
                  </div>
                  <div className="d-grid">
                    <a
                      className="download"
                      type="button"
                      onClick={handleSubmit}
                    >
                      <span>
                        <svg
                          className="m-r-10"
                          xmlns="http://www.w3.org/2000/svg"
                          height="48"
                          width="48"
                          fill="##116dfa"
                        >
                          <path
                            d="M5.5 36Q4.05 36 3.025 34.975Q2 33.95 2 32.5Q2 31.05 3.025 30.025Q4.05 29 5.5 29Q5.75 29 6 29.025Q6.25 29.05 6.65 29.15L16.65 19.15Q16.55 18.75 16.525 18.5Q16.5 18.25 16.5 18Q16.5 16.55 17.525 15.525Q18.55 14.5 20 14.5Q21.45 14.5 22.475 15.525Q23.5 16.55 23.5 18Q23.5 18.1 23.35 19.15L28.85 24.65Q29.25 24.55 29.5 24.525Q29.75 24.5 30 24.5Q30.25 24.5 30.5 24.525Q30.75 24.55 31.15 24.65L39.15 16.65Q39.05 16.25 39.025 16Q39 15.75 39 15.5Q39 14.05 40.025 13.025Q41.05 12 42.5 12Q43.95 12 44.975 13.025Q46 14.05 46 15.5Q46 16.95 44.975 17.975Q43.95 19 42.5 19Q42.25 19 42 18.975Q41.75 18.95 41.35 18.85L33.35 26.85Q33.45 27.25 33.475 27.5Q33.5 27.75 33.5 28Q33.5 29.45 32.475 30.475Q31.45 31.5 30 31.5Q28.55 31.5 27.525 30.475Q26.5 29.45 26.5 28Q26.5 27.75 26.525 27.5Q26.55 27.25 26.65 26.85L21.15 21.35Q20.75 21.45 20.5 21.475Q20.25 21.5 20 21.5Q19.9 21.5 18.85 21.35L8.85 31.35Q8.95 31.75 8.975 32Q9 32.25 9 32.5Q9 33.95 7.975 34.975Q6.95 36 5.5 36Z"
                            fill="#116dfa"
                          />
                        </svg>
                      </span>
                      अर्ज ट्रॅक करा
                    </a>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-md-8 col-lg-4">
              <div className="login d-flex align-items-center py-5">
                <div className="container">
                  <div className="row">
                    <div className="col-md-9 col-lg-8 mx-auto">
                      <h3 className="login-heading mb-4">कर्मचारी लॉगिन</h3>
                      <form>
                        <div className="form-floating mb-3">
                          <input
                            id="floatingInput"
                            className="form-control"
                            placeholder="ईमेल"
                            {...register("email", {
                              required: {
                                message: "ईमेल आवश्यक आहे",
                                value: true,
                              },
                              pattern: {
                                value:
                                  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                                message: "कृपया वैध ईमेल प्रविष्ट करा",
                              },
                            })}
                          />
                          <Error
                            condition={errors.email}
                            value={errors.email?.message}
                          />
                          <label htmlFor="floatingInput">ईमेल</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input
                            id="floatingPassword"
                            placeholder="पासवर्ड"
                            className="form-control"
                            {...register("password", {
                              required: {
                                message: "पासवर्ड आवश्यक आहे",
                                value: true,
                              },
                              minLength: {
                                value: 6,
                                message:
                                  "पासवर्ड कमीत कमी 6 अक्षरे होण्यासाठी आवश्यक आहे",
                              },
                            })}
                          />
                          <Error
                            condition={errors.password}
                            value={errors.password?.message}
                          />
                          <label htmlFor="floatingPassword">पासवर्ड</label>
                        </div>
                        <div className="d-grid">
                          <a
                            className="btn btn-lg btn-primary btn-login text-uppercase fw-bold mb-2 fs-22"
                            type="button"
                            onClick={handleSubmit(onLogin)}
                          >
                            <span>
                              <svg
                                className="m-r-10"
                                xmlns="http://www.w3.org/2000/svg"
                                height="48"
                                width="48"
                              >
                                <path
                                  d="M20.55 32.75 18.4 30.6 23.5 25.5H6V22.5H23.4L18.3 17.4L20.45 15.25L29.25 24.05ZM24.45 42V39H39Q39 39 39 39Q39 39 39 39V9Q39 9 39 9Q39 9 39 9H24.45V6H39Q40.2 6 41.1 6.9Q42 7.8 42 9V39Q42 40.2 41.1 41.1Q40.2 42 39 42Z"
                                  fill="#ffffff"
                                />
                              </svg>
                            </span>
                            लॉगिन करा
                          </a>
                          <div className="text-center">
                            <a className="small" href="#">
                              पासवर्ड विसरला ?
                            </a>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
