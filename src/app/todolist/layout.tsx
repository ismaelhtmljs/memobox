import "@/app/todolist/css/global.css";
import "@/app/todolist/css/darkmode/dark.css";
import { ThemeProvider } from "./context/theme";

export default function TodoListLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
