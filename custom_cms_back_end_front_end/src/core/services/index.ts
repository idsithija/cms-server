import { authService } from "./authService";

const baseUrl = import.meta.env.DEV ? "http://localhost:3000/api" : "/api";

export { authService, baseUrl };
