import { Category } from 'types/Category';

class CategoriesService {
  categories: Category[];

  constructor() {
    this.categories = [
      { id: '1', name: 'Fuel' },
      { id: '2', name: 'Food' },
      { id: '3', name: 'Home' },
      { id: '4', name: 'Fuel' },
      { id: '5', name: 'Food' },
      { id: '6', name: 'Home' },
      { id: '7', name: 'Fuel' },
      { id: '8', name: 'Food' },
      { id: '9', name: 'Home' },
      { id: '10', name: 'Fuel' },
      { id: '11', name: 'Food' },
      { id: '12', name: 'Home' },
      { id: '13', name: 'Fuel' },
      { id: '14', name: 'Food' },
      { id: '15', name: 'Home' },
    ];
  }

  addCategory(name: string) {
    this.categories.push({ id: this.categories.length.toString(), name });
  }

  getCategories() {
    return this.categories;
  }
}

export default new CategoriesService();
