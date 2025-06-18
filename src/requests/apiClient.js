const BASE_URL = 'http://localhost:3000'; // Укажите базовый URL вашего LoopBack сервера

/**
 * Универсальный метод для выполнения HTTP-запросов
 * @param {string} endpoint - Конечная точка API (например, '/users')
 * @param {string} method - HTTP-метод (GET, POST, PUT, PATCH, DELETE)
 * @param {object} body - Тело запроса (для POST, PUT, PATCH)
 * @param {object} params - Параметры запроса (например, фильтры)
 * @returns {Promise} - Ответ от сервера
 */
export async function apiClient(
  endpoint,
  method = 'GET',
  body = null,
  params = {}
) {
  const url = new URL(`${BASE_URL}${endpoint}`);

  // Добавляем параметры запроса (например, фильтры)
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, JSON.stringify(params[key]))
  );

  const headers = {
    'Content-Type': 'application/json',
  };

  // Добавляем токен авторизации, если он есть
  const token = localStorage.getItem('token');
  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }

  const response = await fetch(url, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
