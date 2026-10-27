const BASE_URL = "http://localhost:8080";

export const apiCall = (
  endpoint, method = "GET", body = null, customHeaders = {},
  onSuccess, onFailure
) => {
  const token = localStorage.getItem("token");

  const config = {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token && { Authorization: `Bearer ${token}` }),
      ...customHeaders,
    },
  };

  if (body !== null && method !== "GET") {
    config.body = JSON.stringify(body);
  }

  fetch(`${BASE_URL}${endpoint}`, config)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`API Error: ${response.status}`);
      }

      if (response.status === 204) return null;

      return response.json();
    })
    .then((data) => onSuccess?.(data))
    .catch((error) => {
      if (onFailure) {
        onFailure(error);
      } else {
        console.error("API request failed:", error);
      }
    });
};