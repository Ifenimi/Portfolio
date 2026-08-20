const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

async function request(path, options = {}) {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    throw new Error(body.error || `Request failed with status ${res.status}`);
  }

  return res.json();
}

export const getProfile = () => request("/profile");
export const getSkills = () => request("/skills");
export const getProjects = () => request("/projects");
export const sendContactMessage = (payload) =>
  request("/contact", {
    method: "POST",
    body: JSON.stringify(payload),
  });
