// Глобальная функция get0bj, которая возвращает this
function get0bj() {
return this;
}
// Конструктор для создания объекта Country
function Country(title = '', capital = '',  population = 0, area = 0) {
    this.title = title;
    this.capital = capital;
    this.population = population;
    this.area = area;

// Метод getCountry, который ссылается на глобальную функцию getObj
this.getCountry = get0bj;
}

// Создаю две страны
const canada = new Country('Canada', 'Ottawa', 38068278, 9984670);
const usa = new Country('USA', 'Washington, D.C.', 331002651, 9525067);

function printCountryProperties(country) {
    const countryData = country.getCountry(); // Получаем объект, используя метод getCountry()
  
    for (const key in countryData) {
      if (typeof countryData[key] !== 'function') {
        console.log(`${key}: ${countryData[key]}`);
      }
    }
  }
  
// Выводим свойства объектов Canada и USA
console.log('Canada:');
printCountryProperties(canada);
console.log('\nUSA:');
printCountryProperties(usa);
