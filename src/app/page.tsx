import RestaurantContainer from './restaurant/containers/RestaurantContainer'
import { MainTitle } from './global/components/StyledTitle'
import { MainContentBox } from './global/components/ContentBox'

const MainPage = () => {
  return (
    <>
      <MainContentBox width={1000} height={750}>
        <MainTitle>식당 검색</MainTitle>
        <RestaurantContainer />
      </MainContentBox>
    </>
  )
}

export default MainPage
