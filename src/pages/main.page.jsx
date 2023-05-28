import React, { Component } from 'react'
import CardList from '../components/cardList.component'
import SliderImg from '../components/sliderImg.component'
import TextBlock from '../components/textBlock.component'
import MainCategory from '../constructor/Main_category'
import MainRecomend from '../constructor/Main_recomend'
import JurnalContainer from '../constructor/jurnalContainer'
import TopRatingCom from '../constructor/TopRatingComment'


export default class Main extends Component {
  render() {
    return (
      <div>
        <SliderImg />
        <TextBlock value = 'Типы блюд'/>
        <MainCategory/>
        <TextBlock value = 'Меню'/>
        <CardList />
        <TextBlock id='recomend' value = 'Рекомендуем'/>
        <MainRecomend/>
        <TextBlock value = 'Онлайн журнал'/>
        <JurnalContainer/>
        <TextBlock value = 'Отзывы'/>
        <TopRatingCom/>
      </div>
    )
  }
}
