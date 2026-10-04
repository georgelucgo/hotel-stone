import { useEffect, useState } from "react";
import "./PwaStatus.css";

function PwaStatus() {
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    function ficouOnline() {
      setOnline(true);
    }

    function ficouOffline() {
      setOnline(false);
    }

    window.addEventListener("online", ficouOnline);
    window.addEventListener("offline", ficouOffline);

    return () => {
      window.removeEventListener("online", ficouOnline);
      window.removeEventListener("offline", ficouOffline);
    };
  }, []);

  if (online) return null;

  return (
    <div className="pwa-offline">
      Você está offline. O Hotel Stone continua funcionando.
    </div>
  );
}

export default PwaStatus;