import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

// utils
import axios from "../utils/axios";
import { isValidToken, setSession } from "../utils/jwt";
import { API_AUTH } from "../config";

// const firebaseApp = initializeApp(FIREBASE_API);

// const AUTH = getAuth(firebaseApp);

// AUTH.settings.appVerificationDisabledForTesting  = true;
// ----------------------------------------------------------------------

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const handlers = {
  INITIALIZE: (state, action) => {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  },

  OTPFINAL: (state, action) => {
    const { final } = action.payload;
    return {
      ...state,
      isAuthenticated: false,
      isInitialized: true,
      final,
      user: null,
    };
  },
  LOGINED: (state, action) => {
    const { user } = action.payload;

    return {
      ...state,
      isAuthenticated: true,
      user,
    };
  },
  LOGOUT: (state) => ({
    ...state,
    isAuthenticated: false,
    final: null,

    user: null,
  }),
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext({
  ...initialState,
  method: "jwt",
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  signup: () => Promise.resolve(),
  verifyEmailOtp: () => Promise.resolve(),
  initialize: () => Promise.resolve(),
});

// ----------------------------------------------------------------------

AuthProvider.propTypes = {
  children: PropTypes.node,
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const initialize = async () => {
    try {
      const accessToken = window.localStorage.getItem("accessToken");
      if (accessToken && isValidToken(accessToken)) {
        setSession(accessToken);
        const response = await axios.get(API_AUTH.account);
        if (response.status === 200) {
          const { user } = response.data.data;
          dispatch({
            type: "INITIALIZE",
            payload: {
              isAuthenticated: true,
              user,
            },
          });
        }
        else{
          setSession(null);
        }
      } else {
        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: false,
            user: null,
          },
        });
      }
    } catch (err) {
      console.error(err);
      dispatch({
        type: "INITIALIZE",
        payload: {
          isAuthenticated: false,
          user: null,
        },
      });
    }
  };

  useEffect(() => {
    console.log("--------------iniitalize user -------------------");
    initialize();
  }, []);
  const verifyEmailOtp = async (email, otp) => {
    try {
      const res = await axios.post(API_AUTH.verifyEmailOtp, { email, otp });

      if (res.data.data?.user && res.data.data?.token) {
        setSession(res.data.data?.token);

        dispatch({
          type: "LOGINED",
          payload: {
            user: res.data.data?.user,
          },
        });
      }
      return res.data;
    } catch (err) {
      console.log(err);
      return null;
    }
  };
  const signup = async (email, fullName, password) => {
    try {
      const res = await axios.post(API_AUTH.signup, {
        email,
        fullName,
        password,
      });
      return res;
    } catch (err) {
      console.log(err);
      return { status: 500, message: err };
    }
  };

  const login = async (email, password) => {
    try {
      const response = await axios.post(API_AUTH.login, {
        email,
        password,
      });
      if (response.status === 200) {
        const { token, user } = response.data.data;
        setSession(token);

        dispatch({
          type: "LOGINED",
          payload: {
            user,
          },
        });
      }
      return response;
    } catch (err) {
      console.log(err);
      return {};
    }
  };

  const logout = async () => {
    try {
      setSession(null);

      dispatch({ type: "LOGOUT" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "jwt",
        login,
        signup,
        logout,
        initialize,
        verifyEmailOtp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
