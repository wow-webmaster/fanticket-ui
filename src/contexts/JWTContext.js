import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

// utils
import axios from "../utils/axios";
import { isValidToken, setSession } from "../utils/jwt";

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
        // const response = await axios.get("/api/auth/my-account");

        const response = {
            data: {
              accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NzkzNTAwNjksImV4cCI6MTcxMDg4NjA2OSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20ifQ.xwZKabPX_FJ-Pfd-fNfhsqM2X9-SrbKD5qJRFmX07GU",
              user: {
                "id": "8864c717-587d-472a-929a-8e5f298024da-0",
                "displayName": "Jaydon Frankie",
                "email": 'usermail@bio.com',
                "password": "demo1234",
                "avatar": "	https://randomuser.me/api/portraits/men/0.jpg",
                "phoneNumber": "+40 777666555",
                "country": "United States",
                "address": "90210 Broadway Blvd",
                "state": "California",
                "city": "San Francisco",
                "zipCode": "94116",
                "about": "Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.",
                "role": "admin",
                "isPublic": true
              }
            }
          }



        const { user } = response.data;
        dispatch({
          type: "INITIALIZE",
          payload: {
            isAuthenticated: true,
            user,
          },
        });
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

  const login = async (email, password) => {
    try {
    //   const response = await axios.post("/api/auth/login", {
    //     email,
    //     password,
    //   });
      const response = {
        data: {
          accessToken: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE2NzkzNTAwNjksImV4cCI6MTcxMDg4NjA2OSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20ifQ.xwZKabPX_FJ-Pfd-fNfhsqM2X9-SrbKD5qJRFmX07GU",
          user: {
            "id": "8864c717-587d-472a-929a-8e5f298024da-0",
            "displayName": "Jaydon Frankie",
            "email": email,
            "password": "demo1234",
            "avatar": "	https://randomuser.me/api/portraits/men/0.jpg",
            "phoneNumber": "+40 777666555",
            "country": "United States",
            "address": "90210 Broadway Blvd",
            "state": "California",
            "city": "San Francisco",
            "zipCode": "94116",
            "about": "Praesent turpis. Phasellus viverra nulla ut metus varius laoreet. Phasellus tempus.",
            "role": "admin",
            "isPublic": true
          }
        }
      }
      const { accessToken, user } = response.data;
      setSession(accessToken);
      
      dispatch({
        type: "LOGINED",
        payload: {
          user,
        },
      });
      return response.data;
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
        logout,
        initialize,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
