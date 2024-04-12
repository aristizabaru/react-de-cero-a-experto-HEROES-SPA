import { AppRouter } from "./Router/AppRouter";
import { AuthProvider } from "./modules/auth";

export const HeroesApp = () => {
    return (
        <AuthProvider>
            <AppRouter />
        </AuthProvider>
    );
};
