import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arepas-mundo',
  template: `

  <div class="container">

    <div class="row">
        <div class="col-md-6">

<!-- Card Narrower -->
<div class="card card-cascade narrower">

<!-- Card image -->
<div class="view view-cascade overlay">
  <img  class="card-img-top" src="../../assets/img/img-arepas/AREPA QUESO CERCA.jpg" alt="Card image cap">
  <a>
    <div class="mask rgba-white-slight"></div>
  </a>
</div>

<!-- Card content -->
<div class="card-body card-body-cascade">

  <!-- Label -->
  <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Culinary</h5>
  <!-- Title -->
  <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
  <!-- Text -->
  <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem
  ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>
  <!-- Button -->

</div>



</div>
<!-- Card Narrower -->



        </div>
        <div class="col-md-6">
          <!-- Card Narrower -->
<div class="card card-cascade narrower">

<!-- Card image -->
<div class="view view-cascade overlay">
  <img  class="card-img-top" src="../../assets/img/img-arepas/AREPA QUESO CERCA.jpg" alt="Card image cap">
  <a>
    <div class="mask rgba-white-slight"></div>
  </a>
</div>

<!-- Card content -->
<div class="card-body card-body-cascade">

  <!-- Label -->
  <h5 class="pink-text pb-2 pt-1"><i class="fas fa-utensils"></i> Culinary</h5>
  <!-- Title -->
  <h4 class="font-weight-bold card-title">Cheat day inspirations</h4>
  <!-- Text -->
  <p class="card-text">Ut enim ad minima veniam, quis nostrum exercitationem
  ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi.</p>

</div>


</div>
<!-- Card Narrower -->
        </div>
    </div>

  </div>

  `,
  styles: []
})
export class ArepasMundoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
