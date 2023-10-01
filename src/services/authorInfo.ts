import axios from 'axios';

export async function fetchAuthorInfo(author: string) {
  try {
    const response = await axios.get(
      `https://www.reddit.com/user/${author}/about.json`,
    );
    return response.data.data;
  } catch (error) {
    console.error(`Erro ao buscar informações do autor ${author}:`, error);
    return null;
  }
}
