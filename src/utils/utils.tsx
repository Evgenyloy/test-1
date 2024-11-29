import { IData } from '../types/types';

export function checkAvailability(item: IData[], id: number) {
  return item.some((elem) => elem.id === id);
}

export function filterItems(data: IData[], filter: string, search: string) {
  if (search === '' && filter === 'Все типы') {
    return data;
  } else {
    return data.filter((item) => {
      return (
        item.name.toLowerCase().startsWith(search.toLowerCase()) &&
        (item.offer === filter || filter === 'Все типы')
      );
    });
  }
}
