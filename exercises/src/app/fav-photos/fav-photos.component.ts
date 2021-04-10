import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Random Pictures';
  image1 = 'https://www.launchcode.org/assets/icons/target-00c7a0bc7776901e3c5cdc4c36c465f19e41a249bc7267a595f0bfa14ab944b7.png';
  image2 = 'https://fsa.zobj.net/crop.php?r=5Uu6rB2j5EPH40OVbDUHpArz4_WK0cAJBuW6XWiJFJ8rmpCUH-zjPflWw5CFwWa-B5C2FL_qOul0yEqZpIvZahs3MTRzMzgH7dNGv0PgX1G6mwDpNQSGNSJdOH937DYDqXNo1rOmalD07TW_';
  image3 = 'https://fsb.zobj.net/crop.php?r=N5gsO_hzTJKS5RyHqbY47c3PAFQhYpp6Evo2k9Ot5YW22aj0JG8gkAwPDIKUjxtSaJCB3Ltf9VNkBw3Ixe96JYUVywiE7BBStfnL0z0ZoYSQEW-bV_iyaEjwPj2iY1-ZssjvMXp69yk0Cwxj';

  constructor() { }

  ngOnInit() {
  }

}