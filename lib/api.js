async function request({ data, url, method }) {
  const options = data
    ? {
        method,
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    : { method };
  const response = await fetch(url, options);
  const json = await response.json();
  return json;
}

export async function createNewFlake(data) {
  return request({ url: "/api/flakes", method: "POST", data });
}

export async function updateFlake({ id, ...data }) {
  return request({ url: `/api/flakes/${id}`, method: "PUT", data });
}

export async function deleteFlake(id) {
  return request({ url: `/api/flakes/${id}`, method: "DELETE" });
}
