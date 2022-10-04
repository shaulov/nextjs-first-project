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

  const fetchUser = async (id: string) => {
    try {
      const response = await fetch(`${_apiBase}/users/${id}`);

      if (!response.ok) {
        return null;
      }

      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }

  const fetchPosts = async () => {
    try {
      const response = await fetch(`${_apiBase}/posts`);

      if (!response.ok) {
        throw new Error(`Couldn't fetch ${response.url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }

  const fetchPost = async (id: string) => {
    try {
      const response = await fetch(`${_apiBase}/posts/${id}`);

      if (!response.ok) {
        return null;
      }

      const data = await response.json();

      return data;
    } catch (error) {
      throw error;
    }
  }

  return { fetchUsers, fetchUser, fetchPosts, fetchPost };
}

export default useApiService;