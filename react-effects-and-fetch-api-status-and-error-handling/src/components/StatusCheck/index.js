import { useState } from "react";
import "./StatusCheck.css";

const apiStatusUrl = "https://example-apis.vercel.app/api/status";

export default function StatusCheck() {
  const [statusIcon, setStatusIcon] = useState("⁉️");
  const [loading, setLoading] = useState(false);

  async function handleCheckApiStatus() {
    try {
      setLoading(true);
      const response = await fetch(apiStatusUrl);
      if (response.ok) {
        setStatusIcon("✅");
      } else {
        setStatusIcon("❌");
      }
      setLoading(false);
    } catch (error) {
      setStatusIcon("🚨");
      console.error(error);
      setLoading(false);
    }
  }

  return (
    <article className="status-check">
      <div className="status-check__wrapper">
        <h2 className="status-check__heading">Status:</h2>
        <span className="status-check__icon">
          {loading ? "⏳" : statusIcon}
        </span>
      </div>
      <button
        type="button"
        className="status-check__button"
        onClick={handleCheckApiStatus}
      >
        Check API Status
      </button>
    </article>
  );
}
