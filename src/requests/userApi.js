import { apiClient } from './apiClient';

/**
 * Создание нового пользователя
 * @param {object} user - Данные пользователя
 * @returns {Promise} - Ответ от сервера
 */
export async function createUser(email, password) {
  return apiClient('/users/signup', 'POST', email, password);
}

/**
 * Логин пользователя
 * @param {object} credentials - Учетные данные пользователя
 * @param {string} credentials.email - Email пользователя
 * @param {string} credentials.password - Пароль пользователя
 * @returns {Promise} - Ответ от сервера (JWT-токен)
 */
export async function login(credentials) {
  return apiClient('/users/login', 'POST', credentials);
}

/**
 * Получение списка пользователей с фильтрацией и пагинацией
 * @param {object} options - Параметры фильтрации и пагинации
 * @param {object} options.where - Условия фильтрации
 * @param {number} options.limit - Лимит записей
 * @param {number} options.skip - Пропуск записей
 * @param {object} options.fields - Выбор полей
 * @param {array} options.include - Включение связанных моделей
 * @returns {Promise} - Ответ от сервера
 */
export async function getUsers({ where, limit, skip, fields, include } = {}) {
  const filter = { where, limit, skip, fields, include };
  return apiClient('/users', 'GET', null, { filter });
}

/**
 * Получение пользователя по ID
 * @param {number} id - ID пользователя
 * @param {object} filter - Фильтр (например, исключение полей)
 * @returns {Promise} - Ответ от сервера
 */
export async function getUserById(id, filter = {}) {
  return apiClient(`/users/find/${id}`, 'GET', null, { filter });
}

/**
 * Обновление пользователя по ID
 * @param {number} id - ID пользователя
 * @param {object} user - Новые данные пользователя
 * @returns {Promise} - Ответ от сервера
 */
export async function updateUserById(id, user) {
  return apiClient(`/users/update/${id}`, 'PATCH', user);
}

/**
 * Удаление пользователя по ID
 * @param {number} id - ID пользователя
 * @returns {Promise} - Ответ от сервера
 */
export async function deleteUserById(id) {
  return apiClient(`/users/delete/${id}`, 'DELETE');
}
