export const useFeatureFlag = () => {

  // Component feature flags
  const isComponent = {
    newsLetter: false
  }
  // Page feature flags
  const isPage = {
    productPage: false,
  };
  // Footer feature flags
  const isFooterLink = {
    AboutPage: false,
    BlogPage: false,
    HelpPage: false,
    ReleasesPage: false,
    StatusPage: false,
    TermsPage: false,
  }

  return { isComponent, isPage, isFooterLink };
}
