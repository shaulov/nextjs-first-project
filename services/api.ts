const useApiService = () => {
  const _apiBase = 'https://jsonplaceholder.typicode.com';

  const fetchUsers = async () => {
    try {
      const response = await fetch(`${_apiBase}/users`);

      if (!response.ok) {
        throw new Error(`Couldn't fetch ${response.url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }

  return { fetchUsers };
}

export default useApiService;