import { Component } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  allow=true

  message= 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sunt et id optio vero vel blanditiis at eos? Obcaecati incidunt magnam iste, reiciendis aut sint adipisci id vitae consequuntur a libero inventore magni modi temporibus sapiente cumque mollitia? Odit sit non quasi asperiores, neque rerum incidunt aspernatur eius at? Nesciunt quas sint ullam veritatis officiis voluptatibus mollitia aperiam, aut saepe nulla, pariatur fuga. Aspernatur soluta repudiandae ipsa provident accusantium quia consequuntur error non quaerat ex amet ullam, iste expedita necessitatibus, fugit rerum tenetur incidunt consequatur quas dignissimos. Eum, molestiae. Quam accusamus neque, quo enim odio officiis quod incidunt eligendi! Ipsum amet nulla pariatur iure, perspiciatis odit labore corporis. Quam, hic molestiae ipsum labore maiores assumenda! Eos incidunt suscipit error porro labore. Architecto eveniet doloremque officia ad non odio reiciendis vero laboriosam quo sit assumenda velit a quam cum, in molestiae earum similique veritatis ut esse repellendus tempora, ipsa numquam! Illo quas laborum corrupti voluptas, nisi adipisci natus dolorum nulla debitis quis alias porro aperiam cupiditate aut numquam inventore similique voluptatum expedita modi eligendi molestias, dolorem molestiae qui officia. Facere, facilis non laborum sit adipisci maiores vel possimus quae, tempore aliquam fugit. Id, placeat ex. Voluptate cum quod quae veritatis earum?'

  constructor(){
    setTimeout(()=>{
      this.allow=false
    },3000)
  

  }

}
