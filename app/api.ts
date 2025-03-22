const baseUrl = "https://frontend-take-home-service.fetch.com";

const apiEndpoints = {
  login: `${baseUrl}/auth/login`,
  fetchDogs: `${baseUrl}/dogs`,
  fetchDogBreeds: `${baseUrl}/dogs/breeds`,
  searchAndFilterDogs: `${baseUrl}/dogs/search`,
  postDogMatch: `${baseUrl}/dogs/match`,
};

export async function fetchAccessToken(name?: string, email?: string) {
  try {
    const response = await fetch(apiEndpoints.login, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        name: name,
        email: email
      }),
    });
    
    if (response.ok && response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch access token');
  }
}

export async function fetchDogs(dogIds: string[]) {
  try {
    const response = await fetch(apiEndpoints.fetchDogs, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        dogIds
      }),
    });
    if (response.ok && response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error)
    throw new Error('Failed to fetch dogs');
  }
}

export async function searchAndFilterDogs(size: number, next: number, filter: string) {
  try {
    const response = await fetch(apiEndpoints.searchAndFilterDogs + `?size=${size}&from=${next}?sort=${filter}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.ok && response.status === 200) {
      return response;
    }
  } catch (error) {
    throw new Error("Failed to search and filter dogs")
  }
}

export async function searchDogBreeds() {
  try {
    const response = await fetch(apiEndpoints.fetchDogBreeds, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.ok && response.status === 200) {
      return response;
    }
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch dog breeds");
  }
}