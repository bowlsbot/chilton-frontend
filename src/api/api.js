const API_URL = "http://<pi-ip>:4000/api";

function token() {
  return localStorage.getItem("playerToken") || "";
}

export async function apiGet(path) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "x-player-token": token() },
  });
  return res.json();
}

export async function apiPost(path, body) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-player-token": token(),
    },
    body: JSON.stringify(body),
  });
  return res.json();
}

