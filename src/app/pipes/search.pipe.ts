import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(hotels: any, search: any): any {
    if(search === undefined){
      return hotels;
    }else{
      return hotels.filter(hotel=>{
        return hotel.data.name.toLowerCase().includes(search.toLowerCase());
      })
    }
  }

}
