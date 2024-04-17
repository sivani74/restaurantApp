import {Component} from 'react'
import './index.css'

class MenuCategory extends Component {
  state = {
    categoryList: [],
  }

  componentDidMount() {
    this.getCategoryList()
  }

  getCategoryList = async () => {
    const apiUrl =
      'https://run.mocky.io/v3/77a7e71b-804a-4fbd-822c-3e365d3482cc'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    console.log(data[0].table_menu_list)
    const menuCategoryList = data[0].table_menu_list.map(
      eachCategory => eachCategory.menu_category,
    )
    console.log(menuCategoryList)
    this.setState({categoryList: menuCategoryList})
  }

  render() {
    const {categoryList} = this.state
    return (
      <div className="menu-category-bar">
        {categoryList.map(eachCategory => (
          <p className="category-item-name">{eachCategory}</p>
        ))}
      </div>
    )
  }
}

export default MenuCategory
