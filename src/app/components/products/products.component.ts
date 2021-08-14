import { Component, OnInit } from '@angular/core';
import { HotelService } from "../../services/hotel/hotel.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  hotels = [];
  search;

  constructor(private restHotel: HotelService) { }

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(){
    this.restHotel.getHotels().subscribe(res=>{
      this.hotels = res.hotels;
      console.log(this.hotels);
    })
  }

  onSubmit(){
/*
    if(this.search != ''){
      let hotelFind = this.hotels.filter(hotel=> hotel.data.name.indexOf(this.search)> -1);
      this.hotels = hotelFind;
      console.log(this.hotels)
    }else{
      this.getHotels();
    }
    
    this.restHotel.getHotel(this.search).subscribe((res:any)=>{
      this.hotels = res.hotel;
      console.log(res)
    })*/
  }

}
