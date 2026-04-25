// Import createContext so we can share login/auth data across the app
import { createContext } from "react";

// Create a context object
// We will use this later to store user login info and auth state
const AuthContext = createContext(null);

// Export it so other files can use it
export default AuthContext; 