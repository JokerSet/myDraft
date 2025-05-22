export function formatDateAgo(date) {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    
    const intervals = {
        год: 31536000,
        месяц: 2592000,
        неделя: 604800,
        день: 86400,
        час: 3600,
        минута: 60,
        секунда: 1
    };
    
    for (const [unit, seconds] of Object.entries(intervals)) {
        const interval = Math.floor(diffInSeconds / seconds);
        if (interval >= 1) {
            return `${interval} ${declension(interval, unit)} назад`;
        }
    }
    
    return "только что";
}

// Функция для склонения слов (1 день, 2 дня, 5 дней и т.д.)
function declension(number, word) {
    const cases = [2, 0, 1, 1, 1, 2];
    const words = {
        год: ['год', 'года', 'лет'],
        месяц: ['месяц', 'месяца', 'месяцев'],
        неделя: ['неделя', 'недели', 'недель'],
        день: ['день', 'дня', 'дней'],
        час: ['час', 'часа', 'часов'],
        минута: ['минута', 'минуты', 'минут'],
        секунда: ['секунда', 'секунды', 'секунд']
    };
    
    return words[word][(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}

export function formatDate(inputDate) {
  const date = new Date(inputDate);
  
  // Получаем компоненты даты
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
  const year = String(date.getFullYear()).slice(-2); // Берем последние 2 цифры года
  
  // Форматируем результат
  return `${day}.${month}.${year}`;
}