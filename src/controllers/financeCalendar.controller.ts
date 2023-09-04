export async function fetchFinanceCalendar(setCalendar) {
  const url = 'https://economic-events-calendar.p.rapidapi.com/events?countries=BR';
  
  
  try {
    const response = await fetch(url, options);
    const result = await response.text();
    setCalendar(result);
  } catch (error) {
    console.error(error);
  }

}
