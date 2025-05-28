import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleListService {
    private data = signal<string[]>([])

    public get(filter='') {
        if (filter !== '') {
            return this.data().filter(x => x.toLowerCase().includes(filter.toLowerCase()))
        }
        return this.data();
    }

    public add(item: string) {
        this.data.update(data => [...data, item]);
    }
}
