import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface ClientReadItem {
  name: string;
  id: number;
  action: string;
}

// TODO: replace this with real data from your application
const EXAMPLE_DATA: ClientReadItem[] = [
  {id: 1, name: 'Hydrogen', action:'editar, deletar'},
  {id: 2, name: 'Helium', action:'editar, deletar'},
  {id: 3, name: 'Lithium', action:'editar, deletar'},
  {id: 4, name: 'Beryllium', action:'editar, deletar'},
  {id: 5, name: 'Boron', action:'editar, deletar'},
  {id: 6, name: 'Carbon', action:'editar, deletar'},
  {id: 7, name: 'Nitrogen', action:'editar, deletar'},
  {id: 8, name: 'Oxygen', action:'editar, deletar'},
  {id: 9, name: 'Fluorine', action:'editar, deletar'},
  {id: 10, name: 'Neon', action:'editar, deletar'},
  {id: 11, name: 'Sodium', action:'editar, deletar'},
  {id: 12, name: 'Magnesium', action:'editar, deletar'},
  {id: 13, name: 'Aluminum', action:'editar, deletar'},
  {id: 14, name: 'Silicon', action:'editar, deletar'},
  {id: 15, name: 'Phosphorus', action:'editar, deletar'},
  {id: 16, name: 'Sulfur', action:'editar, deletar'},
  {id: 17, name: 'Chlorine', action:'editar, deletar'},
  {id: 18, name: 'Argon', action:'editar, deletar'},
  {id: 19, name: 'Potassium', action:'editar, deletar'},
  {id: 20, name: 'Calcium', action:'editar, deletar'},
];

/**
 * Data source for the ClientRead view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class ClientReadDataSource extends DataSource<ClientReadItem> {
  data: ClientReadItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<ClientReadItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: ClientReadItem[]): ClientReadItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: ClientReadItem[]): ClientReadItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'name': return compare(a.name, b.name, isAsc);
        case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
