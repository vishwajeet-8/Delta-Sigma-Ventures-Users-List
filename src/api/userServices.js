async function request(url, options = {}) {
  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!res.ok) {
    throw new Error(`API Error: ${res.status}`);
  }

  return res.status !== 204 ? res.json() : null;
}

// ADD USER MOCK API
export function addUser(formData) {
  return request("http://localhost:3000/users", {
    method: "POST",
    body: JSON.stringify({
      ...formData,
      id: crypto.randomUUID(),
    }),
  });
}

// GET ALL USERS MOCK API
export function getAllUser() {
  return request("http://localhost:3000/users");
}

// UPDATE USERS MOCK API
export function updateUser(id, formData) {
  return request(`http://localhost:3000/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify(formData),
  });
}

//DELETE USERS MOCK API
export function deleteUser(id) {
  return request(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
  });
}
