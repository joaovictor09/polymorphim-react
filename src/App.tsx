import { Button } from "./components/Button";

export function App() {
  return (
    <div className="w-screen h-screen bg-zinc-900 flex items-center justify-center gap-4">

      <Button>Create Account</Button>
      <Button asChild>
        <a href="#">
          Link to website
        </a>
      </Button>
    </div>
  )
}