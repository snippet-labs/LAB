export const  useFeatureFlag= () => {
  const isComponent = {
    newsLetter : false
  }
  const isPage = {
    productPage : false,
  };
  const isFooterLink = {
    isAboutPage: false,
    isBlogPage: false,
    isHelpPage: false,
    isReleasesPage: false,
    isStatusPage: false,
    isTermsPage: false,
  }

 return {isComponent, isPage , isFooterLink};
}
