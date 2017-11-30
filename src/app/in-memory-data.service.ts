import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService  implements InMemoryDbService{
  createDb() {
    const heroes = [
     
        { id: 11, name: 'Ranbir Kapoor' },
        { id: 12, name: 'Ram Charan' },
        { id: 13, name: 'Mahesh Babu' },
        { id: 14, name: 'Yash' },
        { id: 15, name: 'Prabhu' },
        { id: 16, name: 'Siddarth' },
        { id: 17, name: 'Raj kapoor' },
        { id: 18, name: 'Amithabh' },
        { id: 19, name: 'Varun Dhawan' },
        { id: 20, name: 'Ravi kapoor' },
        { id:21, name:'Allu Arjun'}
      ];
    return {heroes};
  }
}

