export const  useFeatureFlag= () => {
  const isComponent = {
    newsLetter : false
  }
  const isPage = {
    productPage : false,
  };

 return {isComponent, isPage}
}
