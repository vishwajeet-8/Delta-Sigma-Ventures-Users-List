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

const devurl = "http://localhost:3000";
const url = "https://6988ccb3780e8375a6892f12.mockapi.io/api/users";

// ADD USER MOCK API
//DEVELOPMENT
// export function addUser(formData) {
//   return request(url, {
//     method: "POST",
//     body: JSON.stringify({
//       ...formData,
//       id: crypto.randomUUID(),
//     }),
//   });
// }

//PRODUCTION
export function addUser(formData) {
  return request(url, {
    method: "POST",
    body: JSON.stringify(formData),
  });
}

// GET ALL USERS MOCK API
export function getAllUser() {
  return request(url);
}

// UPDATE USERS MOCK API
//DEVELOPMENT
// export function updateUser(id, formData) {
//   return request(`http://localhost:3000/users/${id}`, {
//     method: "PATCH",
//     body: JSON.stringify(formData),
//   });
// }

//PRODUCTION
export function updateUser(id, formData) {
  return request(`url/${id}`, {
    method: "PUT",
    body: JSON.stringify(formData),
  });
}

//DELETE USERS MOCK API
export function deleteUser(id) {
  return request(`url/${id}`, {
    method: "DELETE",
  });
}
