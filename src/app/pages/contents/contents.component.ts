import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake'

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.css']
})
export class ContentsComponent implements OnInit {

  @Input() contentPhoto:string = 'https://static.mundoeducacao.uol.com.br/mundoeducacao/2022/11/representacao-grafica-de-uma-pessoa-segurando-o-planeta-terra-nas-maos-como-representacao-da-nova-ordem-mundial.jpg';
  @Input() contentDate:string = '';
  @Input() contentTitle:string = 'Descubra o Mundo: Explorando Culturas, Conhecimentos e Experiências';
  @Input() contentDescription:string = 'Em uma emocionante reviravolta digital, o blog "Descubra o Mundo" acaba de lançar seu novo portal online, oferecendo aos leitores uma jornada inesquecível através de culturas diversas, conhecimentos enriquecedores e experiências inspiradoras.'
  private id:string | null = '0';

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
      this.id = value.get('id')
    )

    this.setValuesToComponents(this.id)
  }

  setValuesToComponents(id:string | null) {
    const result = dataFake.filter(article => article.id == id)[0]

    this.contentDate = result.date;
    this.contentPhoto = result.photo;
    this.contentTitle = result.title;
    this.contentDescription = result.description;

  }

}
