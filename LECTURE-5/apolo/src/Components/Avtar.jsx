
import { Button1 } from "./Nested";

function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

export default function Avtar(props) {
  return (
    <Card>
        <Button1 name={"Click"}/>
    </Card>
  );
}
