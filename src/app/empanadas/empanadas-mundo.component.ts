import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empanadas-mundo',
  template: `
  <div class="row">
      <div class="col-md-12">
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../../assets/img/img-empanadas/EMPANADA NO SE 1.JPG" alt="First slide">
      <div class="carousel-caption">
        <h3>Chania</h3>
        <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../../assets/img/empanadas.jpeg" alt="Second slide">
      <div class="carousel-caption">
        <h3>Chania</h3>
        <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../../assets/img/img-empanadas/EMPANADAS 222.JPG" alt="Third slide">
      <div class="carousel-caption">
        <h3>Chania</h3>
        <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../../assets/img/img-empanadas/IMG_4098.JPG" alt="Second slide">
      <div class="carousel-caption">
        <h3>Chania</h3>
        <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../../assets/img/img-empanadas/IMG_4103.JPG" alt="Third slide">
      <div class="carousel-caption">
        <h3>Chania</h3>
        <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
      </div>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
      </div>
 
    </div>
    `,

  styles: []
})
export class EmpanadasMundoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
