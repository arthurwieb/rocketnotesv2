import { createContext, useContext, useState, useEffect } from "react";
import { api } from "../services/api";
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", {email,     password
      });
      const { token, user } = response.data;
      localStorage.setItem("@RocketNotes:user", JSON.stringify(user));
      localStorage.setItem("@RocketNotes:token", token);
      api.defaults.headers.authorization = `Bearer ${token}`;	
      setData({ token, user });

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro no ao logar!");
      }
    }
  }

  async function signOut() {
    localStorage.removeItem("@RocketNotes:user");
    localStorage.removeItem("@RocketNotes:token");
    setData({});
  }

  async function updateProfile({ user, avatarFile }) {
    try {

      if(avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);
        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }
      
      await api.put("/users", user);
      localStorage.setItem("@RocketNotes:user", JSON.stringify(user));

      setData({ user, token: data.token })
      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro no cadastro!");
      }
    }

  }

  useEffect(() => {
    const user = localStorage.getItem("@RocketNotes:user");
    const token = localStorage.getItem("@RocketNotes:token");

    if (user && token) {
      api.defaults.headers.authorization = `Bearer ${token}`;
      setData({ token, user: JSON.parse(user) });
    }
    
  }, [])


  return (
    <AuthContext.Provider value={{
      signIn,
      signOut,
      updateProfile,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth,  };
